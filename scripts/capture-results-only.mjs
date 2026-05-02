#!/usr/bin/env node
/**
 * Capture a results-only screenshot for each tool.
 * Strategy:
 *   1. Navigate to the tool
 *   2. Fill the input(s) with sensible defaults
 *   3. Click the primary action button (scored highest among action-verb buttons with accent styling)
 *   4. Wait: either for a results signal to appear, or for a loading state to disappear
 *   5. Find the results DOM container via a per-tool predicate
 *   6. Screenshot only that element (not the full page)
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = "/Users/dimitargeorgiev/local/ecomseo/public/images/tools";
const BASE = "https://ecomseo.co/tools";
const URL1 = "https://www.gymshark.com";
const BULK = [
  "https://www.gymshark.com",
  "https://www.allbirds.com",
  "https://www.patagonia.com",
  "https://www.glossier.com",
];

/* ---------- Reusable container finders ---------- */

const BAD_SECTIONS = /Frequently Asked Questions|How It Works|WHAT YOU'LL SEE|See exactly what|DIT GA JE ZIEN|Related Tools|Need help|Get Free Consultation|Ready to grow|Enter URLs|Enter your URL|Enter URL|What counts as|What is an? |What does|How do we |How does this|Why should|When should|Is this|Can I use|How often|Can we|ecomseo\.co\/tools/i;

/**
 * Preferred results finder — runs in the browser, so it must be self-contained
 * (no closures over module-level variables). Looks for a wrapper with
 * space-y-* that contains a grid of numeric summary cards.
 */
const biggestResultsCard = () => {
  const BAD = /Frequently Asked Questions|How It Works|WHAT YOU'LL SEE|See exactly what|DIT GA JE ZIEN|Related Tools|Need help|Get Free Consultation|Ready to grow|Enter URLs|Enter your URL|Enter URL|What counts as|What is an? |What does|How do we |How does this|Why should|When should|Is this|Can I use|How often|Can we|ecomseo\.co\/tools/i;
  const main = document.querySelector("main");
  if (!main) return null;

  // Helper: true if the nearest heading ABOVE this element (in document order) is BAD.
  // We find all h1-h4 elements and pick the one whose top is closest but above `el`.
  const headings = Array.from(main.querySelectorAll("h1, h2, h3, h4"));
  const ancestorIsBad = (el) => {
    const r = el.getBoundingClientRect();
    const elTop = r.top;
    let nearest = null;
    let nearestTop = -Infinity;
    for (const h of headings) {
      const hr = h.getBoundingClientRect();
      if (hr.top <= elTop && hr.top > nearestTop) {
        nearestTop = hr.top;
        nearest = h;
      }
    }
    if (nearest && BAD.test(nearest.textContent || "")) return true;
    return false;
  };

  // 1. Look for a grid of ≥3 large-number summary cards; walk up to space-y-* wrapper.
  const grids = Array.from(main.querySelectorAll('[class*="grid"]'));
  for (const g of grids) {
    const r = g.getBoundingClientRect();
    if (r.height < 50 || r.width < 300) continue;
    const bigNums = g.querySelectorAll('[class*="text-2xl"], [class*="text-3xl"]');
    if (bigNums.length < 3) continue;
    const text = g.textContent || "";
    if (BAD.test(text)) continue;
    if (ancestorIsBad(g)) continue;
    let cur = g.parentElement;
    while (cur && cur !== main) {
      const cls = typeof cur.className === "string" ? cur.className : "";
      if (/space-y-[0-9]/.test(cls)) {
        const ct = cur.textContent || "";
        if (!BAD.test(ct)) return cur;
      }
      cur = cur.parentElement;
    }
    return g;
  }

  // 2. Any space-y-* wrapper that looks like a results block:
  //    - no <input> or <textarea> descendants (those are the input form)
  //    - not a BAD section
  //    - at least 180px tall
  const spacedWrappers = Array.from(main.querySelectorAll('[class*="space-y-"]'));
  const candidates = [];
  for (const el of spacedWrappers) {
    const cls = typeof el.className === "string" ? el.className : "";
    if (!/space-y-[0-9]/.test(cls)) continue;
    const r = el.getBoundingClientRect();
    if (r.height < 180) continue;
    if (el.querySelector("input, textarea")) continue;
    const t = el.textContent || "";
    if (BAD.test(t)) continue;
    // Must have some indication of results: a score, preview, table, or numeric output.
    const hasContent =
      el.querySelector("svg, table, pre, code, [class*='rounded']") &&
      (/\d/.test(t) || /preview|score|result/i.test(t));
    if (!hasContent) continue;
    candidates.push({ el, r });
  }
  // Prefer the first (topmost) candidate — results render first after the input.
  candidates.sort((a, b) => a.r.top - b.r.top);
  if (candidates[0]) return candidates[0].el;

  // 3. Fallback: biggest rounded card that isn't a BAD section and doesn't contain inputs.
  const cards = Array.from(main.querySelectorAll('[class*="rounded-2xl"], [class*="rounded-xl"]'))
    .filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.height < 150) return false;
      if (el.querySelector("input, textarea")) return false;
      const t = el.textContent || "";
      return !BAD.test(t) && !ancestorIsBad(el);
    });
  cards.sort((a, b) => b.getBoundingClientRect().height - a.getBoundingClientRect().height);
  return cards[0] || null;
};

/** Find the smallest container whose text includes ALL given phrases. */
const smallestContainerWithAll = (phrases) => {
  const main = document.querySelector("main");
  if (!main) return null;
  const matches = Array.from(main.querySelectorAll("section, div, article")).filter((el) => {
    const t = el.textContent || "";
    if (t.length > 8000 || BAD_SECTIONS.test(t)) return false;
    return phrases.every((p) => new RegExp(p, "i").test(t));
  });
  matches.sort((a, b) => a.getBoundingClientRect().height - b.getBoundingClientRect().height);
  return matches[0] || null;
};

/* ---------- Per-tool recipes ---------- */

const RECIPES = {
  "ecommerce-seo-audit": {
    inputs: [URL1],
    waitUntilGone: "Analyzing",
    resultsSelector: 'main :text("Your SEO Audit Results"), main :text("Overall Score")',
    minWaitMs: 2000,
    maxWaitMs: 90_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      // Find the "Your SEO Audit Results" card, then walk up to the wrapper that also has category rows
      const title = Array.from(main.querySelectorAll("*")).find((el) => (el.textContent || "").trim() === "Your SEO Audit Results");
      if (!title) return null;
      let cur = title.parentElement;
      while (cur && cur !== main) {
        const t = cur.textContent || "";
        if (/Meta Tags/i.test(t) && /Technical SEO/i.test(t) && cur.offsetHeight > 500) return cur;
        cur = cur.parentElement;
      }
      return title.closest('[class*="rounded-2xl"]');
    },
  },
  "shopify-seo-audit": {
    inputs: [URL1],
    waitUntilGone: "Analyzing",
    resultsSelector: 'main :text("Your SEO Audit Results"), main :text("Overall Score")',
    minWaitMs: 2000,
    maxWaitMs: 90_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const title = Array.from(main.querySelectorAll("*")).find((el) => (el.textContent || "").trim() === "Your SEO Audit Results");
      if (!title) return null;
      let cur = title.parentElement;
      while (cur && cur !== main) {
        const t = cur.textContent || "";
        if (/Meta Tags/i.test(t) && /Technical SEO/i.test(t) && cur.offsetHeight > 500) return cur;
        cur = cur.parentElement;
      }
      return title.closest('[class*="rounded-2xl"]');
    },
  },
  "canonical-checker": {
    inputs: [URL1],
    resultsSelector: 'main :text("Canonical"):not(:has(button))',
    minWaitMs: 2500,
    maxWaitMs: 60_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const BAD = /Frequently Asked Questions|How It Works|WHAT YOU'LL SEE|See exactly what/i;
      const matches = Array.from(main.querySelectorAll("section, div")).filter((el) => {
        const t = el.textContent || "";
        if (t.length > 8000 || BAD.test(t)) return false;
        return /canonical/i.test(t) && /(Self-referencing|Different|Missing|Present|Matches)/i.test(t);
      });
      matches.sort((a, b) => a.getBoundingClientRect().height - b.getBoundingClientRect().height);
      return matches[0] || null;
    },
  },
  "core-web-vitals": {
    inputs: [URL1],
    waitUntilGone: "Analyzing page performance",
    minWaitMs: 3000,
    maxWaitMs: 180_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const svgs = Array.from(main.querySelectorAll("svg")).filter((s) => {
        const r = s.getBoundingClientRect();
        return r.width > 60 && r.width < 250 && Math.abs(r.width - r.height) < 20;
      });
      if (!svgs.length) return null;
      let cur = svgs[0].parentElement;
      while (cur && cur !== main) {
        const innerSvgs = cur.querySelectorAll("svg");
        const r = cur.getBoundingClientRect();
        const txt = cur.textContent || "";
        if (
          innerSvgs.length >= 2 &&
          r.height > 400 &&
          r.height < 1800 &&
          !/Frequently Asked Questions|How It Works|See exactly what/i.test(txt)
        ) {
          return cur;
        }
        cur = cur.parentElement;
      }
      return svgs[0].closest("section, div");
    },
  },
  "duplicate-content": {
    // Switch to "Compare URLs" mode which doesn't crawl — just compares the URLs given.
    setup: () => {
      const btns = Array.from(document.querySelectorAll("main button"));
      const cmp = btns.find((b) => /Compare URLs/i.test((b.textContent || "").trim()));
      if (cmp) cmp.click();
    },
    // Same-domain URLs so similarity scores actually surface in the Pairs view.
    inputs: [
      [
        "https://www.gymshark.com/collections/womens",
        "https://www.gymshark.com/collections/mens",
        "https://www.gymshark.com/collections/accessories",
        "https://www.gymshark.com/collections/sale",
      ].join("\n"),
    ],
    isTextarea: true,
    waitUntilGone: "Comparing|Analyzing|Checking|Crawling",
    minWaitMs: 4000,
    maxWaitMs: 120_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      // In URL-compare mode the results include a tab bar with "Dashboard"/"Pairs"/"Heatmap".
      // Find the wrapper that contains those tabs AND sits below the input form.
      const all = Array.from(main.querySelectorAll('[class*="space-y-"]'));
      for (const el of all) {
        if (el.querySelector("input, textarea")) continue;
        const t = el.textContent || "";
        if (!/Dashboard/i.test(t) || !/Pairs/i.test(t)) continue;
        const r = el.getBoundingClientRect();
        if (r.height < 200) continue;
        return el;
      }
      return null;
    },
  },
  "heading-checker": {
    inputs: [BULK.join("\n")],
    isTextarea: true,
    waitUntilGone: "Analyzing|Checking",
    minWaitMs: 4000,
    maxWaitMs: 90_000,
    resultsContainerFn: biggestResultsCard,
  },
  "hreflang-validator": {
    inputs: [URL1],
    resultsSelector: 'main :text("hreflang"), main :text("Language"), main :text("No hreflang")',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: biggestResultsCard,
  },
  "image-auditor": {
    inputs: [URL1],
    resultsSelector: 'main :text("images"), main :text("alt text"), main :text("Optimised")',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: biggestResultsCard,
  },
  "indexability-checker": {
    inputs: [BULK.join("\n")],
    isTextarea: true,
    resultsSelector: 'main :has-text("Indexable"):has-text("Not Indexable")',
    minWaitMs: 4000,
    maxWaitMs: 75_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const candidates = Array.from(main.querySelectorAll("div, section")).filter((el) => {
        const t = (el.textContent || "").trim();
        return t.length < 200 && /Not Indexable/i.test(t) && /Indexable/i.test(t) && /Mixed/i.test(t);
      });
      candidates.sort((a, b) => a.getBoundingClientRect().height - b.getBoundingClientRect().height);
      const summaryRow = candidates[0];
      if (!summaryRow) return null;
      let cur = summaryRow.parentElement;
      while (cur && cur !== main) {
        if (/www\./.test(cur.textContent || "")) return cur;
        cur = cur.parentElement;
      }
      return summaryRow;
    },
  },
  "intent-matching-tool": {
    inputs: ["running shoes"],
    resultsSelector: 'main :text("Intent"), main :text("Informational"), main :text("Commercial"), main :text("Transactional")',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const BAD = /Frequently Asked Questions|How It Works|WHAT YOU'LL SEE|See exactly what/i;
      const matches = Array.from(main.querySelectorAll("section, div")).filter((el) => {
        const t = el.textContent || "";
        if (t.length > 8000 || BAD.test(t)) return false;
        return /Intent/i.test(t) && /(Informational|Commercial|Transactional|Navigational)/i.test(t);
      });
      matches.sort((a, b) => a.getBoundingClientRect().height - b.getBoundingClientRect().height);
      return matches[0] || null;
    },
  },
  "internal-link-analyzer": {
    inputs: [URL1],
    // Uncheck "Multi-page crawl" so we get a fast single-page analysis.
    setup: () => {
      const cb = document.querySelector('main input[type="checkbox"]');
      if (cb && cb.checked) {
        cb.click();
      }
    },
    waitUntilGone: "Crawling|Analyzing|Checking",
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: biggestResultsCard,
  },
  "meta-tags-checker": {
    inputs: [BULK.join("\n")],
    isTextarea: true,
    resultsSelector: 'main table, main :has-text("URLs checked")',
    minWaitMs: 4000,
    maxWaitMs: 75_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const table = main.querySelector("table");
      if (!table) return null;
      let cur = table.parentElement;
      while (cur && cur !== main) {
        const t = cur.textContent || "";
        if (/(Avg|Average|Pages|URLs|Checked)/i.test(t) && cur.offsetHeight > 400) return cur;
        cur = cur.parentElement;
      }
      return table.parentElement;
    },
  },
  "og-checker": {
    inputs: [URL1],
    resultsSelector: 'main :text("Open Graph"), main :text("og:title"), main :text("Preview")',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: biggestResultsCard,
  },
  "page-type-classifier": {
    inputs: ["https://www.gymshark.com/collections/womens"],
    resultsSelector: 'main :text("Page Type"), main :text("Product"), main :text("Category"), main :text("Article")',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const BAD = /Frequently Asked Questions|How It Works|WHAT YOU'LL SEE|See exactly what/i;
      const matches = Array.from(main.querySelectorAll("section, div")).filter((el) => {
        const t = el.textContent || "";
        if (t.length > 8000 || BAD.test(t)) return false;
        return /Page Type/i.test(t) && /(Product|Category|Article|Collection|Homepage|Blog)/i.test(t);
      });
      matches.sort((a, b) => a.getBoundingClientRect().height - b.getBoundingClientRect().height);
      return matches[0] || null;
    },
  },
  "redirect-checker": {
    inputs: ["https://gymshark.com"],
    resultsSelector: 'main :text("Redirect"), main :text("Chain"), main :text("301"), main :text("302")',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: biggestResultsCard,
  },
  "robots-txt-analyzer": {
    inputs: [URL1],
    resultsSelector: 'main :text("User-agent"), main :text("Allow"), main :text("Disallow"), main :text("Sitemap:")',
    minWaitMs: 2500,
    maxWaitMs: 45_000,
    resultsContainerFn: biggestResultsCard,
  },
  "schema-generator": {
    // Form-based: pick Product type and fill fields if possible, or just screenshot the JSON output area
    skipInput: false,
    inputs: ["Gymshark Training Tee", "A lightweight training tee with sweat-wicking fabric"],
    resultsSelector: 'main pre, main code, main :text("@context"), main :text("schema.org")',
    minWaitMs: 2500,
    maxWaitMs: 30_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const pre = main.querySelector("pre, code");
      if (pre) {
        let cur = pre.closest('[class*="rounded"]') || pre.parentElement;
        return cur;
      }
      return biggestResultsCard();
    },
  },
  "schema-validator": {
    inputs: [URL1],
    resultsSelector: 'main :text("Schema"), main :text("Product"), main :text("BreadcrumbList"), main :text("Organization")',
    minWaitMs: 3000,
    maxWaitMs: 45_000,
    resultsContainerFn: biggestResultsCard,
  },
  "serp-simulator": {
    inputs: [
      "Gymshark Official Store - Shop Gym Clothing & Sportswear",
      "Unlock your full potential with our gym clothing range. Designed for performance, built for progress.",
      "https://www.gymshark.com",
    ],
    resultsSelector: 'main :text("Preview")',
    minWaitMs: 1500,
    maxWaitMs: 15_000,
    resultsContainerFn: () => {
      const main = document.querySelector("main");
      if (!main) return null;
      const BAD = /Frequently Asked Questions|How It Works|WHAT YOU'LL SEE|See exactly what/i;
      const matches = Array.from(main.querySelectorAll("section, div")).filter((el) => {
        const t = el.textContent || "";
        if (t.length > 8000 || BAD.test(t)) return false;
        return /gymshark/i.test(t) && /(Preview|Desktop|Mobile)/i.test(t);
      });
      matches.sort((a, b) => a.getBoundingClientRect().height - b.getBoundingClientRect().height);
      return matches[0] || null;
    },
  },
  "shopping-feed-validator": {
    inputs: [URL1],
    resultsSelector: 'main :text("Feed"), main :text("Products"), main :text("Valid"), main :text("Errors")',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: biggestResultsCard,
  },
  "site-speed-comparison": {
    inputs: [[URL1, "https://www.allbirds.com"].join("\n")],
    isTextarea: true,
    waitUntilGone: "Analyzing|Checking",
    minWaitMs: 4000,
    maxWaitMs: 240_000,
    resultsContainerFn: biggestResultsCard,
  },
  "sitemap-comparison": {
    inputs: [`${URL1}/sitemap.xml`, "https://www.allbirds.com/sitemap.xml"],
    resultsSelector: 'main :text("URLs"), main :text("Common"), main :text("Only in")',
    minWaitMs: 4000,
    maxWaitMs: 90_000,
    resultsContainerFn: biggestResultsCard,
  },
  "sitemap-extractor": {
    inputs: [`${URL1}/sitemap.xml`],
    resultsSelector: 'main :text("URLs found"), main :text("Total"), main table',
    minWaitMs: 3000,
    maxWaitMs: 60_000,
    resultsContainerFn: biggestResultsCard,
  },
  "thin-content-checker": {
    inputs: [BULK.join("\n")],
    isTextarea: true,
    resultsSelector: 'main :text("thin"), main :text("Word count"), main :text("Pages")',
    minWaitMs: 4000,
    maxWaitMs: 75_000,
    resultsContainerFn: biggestResultsCard,
  },
};

/* ---------- Runner ---------- */

async function capture(slug) {
  const recipe = RECIPES[slug];
  if (!recipe) {
    console.log(`No recipe for ${slug}`);
    return;
  }
  const outFile = path.join(OUT_DIR, `${slug}-preview.png`);
  const url = `${BASE}/${slug}`;

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log(`\n→ ${slug}`);
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForTimeout(1500);

    await page.evaluate(() => {
      document.querySelectorAll("nav,footer,[class*=cookie i],[class*=chat i]").forEach((el) => {
        el.style.display = "none";
      });
    });

    // Optional per-recipe setup BEFORE inputs (switch mode tabs, toggle
    // checkboxes that change which inputs are visible).
    if (recipe.setup) {
      await page.evaluate(recipe.setup);
      await page.waitForTimeout(400);
    }

    const inputs = await page.$$(
      'main input[type="url"], main input[type="text"], main input[type="search"], main input[type="email"], main input:not([type]), main textarea'
    );
    const visible = [];
    for (const c of inputs) {
      const box = await c.boundingBox().catch(() => null);
      if (box && box.width > 0 && box.height > 0) visible.push(c);
    }
    for (let i = 0; i < recipe.inputs.length && i < visible.length; i++) {
      await visible[i].fill(recipe.inputs[i]);
    }

    const btnHandle = await page.evaluateHandle((hintText) => {
      const buttons = Array.from(document.querySelectorAll("main button")).filter(
        (b) => !b.disabled && b.offsetParent !== null
      );
      if (hintText) {
        const hit = buttons.find((b) => new RegExp(hintText, "i").test((b.textContent || "").trim()));
        if (hit) return hit;
      }
      const score = (b) => {
        const cls = b.className || "";
        const text = (b.textContent || "").trim();
        let s = 0;
        if (/bg-accent|bg-primary/.test(cls)) s += 100;
        if (/from-accent|to-accent/.test(cls)) s += 50;
        if (/^(Run|Check|Analy[sz]e|Audit|Validate|Generate|Scan|Extract|Test|Compare)\s/i.test(text)) s += 20;
        s += Math.min(text.length, 40) / 2;
        if (text.split(/\s+/).length <= 1 && text.length < 12) s -= 30;
        return s;
      };
      const ranked = buttons.map((b) => ({ b, s: score(b) })).sort((a, b) => b.s - a.s);
      return ranked[0]?.b || null;
    }, recipe.buttonText || null);
    const btn = btnHandle.asElement();
    if (!btn) {
      console.log(`  ✗ no run button found`);
      await browser.close();
      return;
    }
    await btn.click({ force: true });
    console.log(`  clicked run button, waiting for results…`);

    const maxWait = recipe.maxWaitMs || 90_000;
    try {
      if (recipe.waitUntilGone) {
        await page.waitForFunction(
          (needle) => !document.body.innerText.includes(needle),
          recipe.waitUntilGone,
          { timeout: maxWait, polling: 1000 }
        );
        console.log(`  loading cleared`);
      } else if (recipe.resultsSelector) {
        await page.waitForSelector(recipe.resultsSelector, { timeout: maxWait, state: "visible" });
        console.log(`  results detected`);
      }
    } catch (e) {
      console.log(`  !! wait timeout (${maxWait}ms) — will screenshot whatever is there`);
    }
    await page.waitForTimeout(recipe.minWaitMs || 2000);

    // Optional: expand any collapsible category rows
    try {
      const catButtons = await page.$$('main button:has-text("%")');
      for (const b of catButtons) {
        try {
          await b.click({ timeout: 500 });
        } catch {}
      }
      await page.waitForTimeout(800);
    } catch {}

    let container = null;
    if (recipe.resultsContainerFn) {
      const handle = await page.evaluateHandle(recipe.resultsContainerFn);
      container = handle.asElement();
    }
    if (!container) {
      const handle = await page.evaluateHandle(biggestResultsCard);
      container = handle.asElement();
    }

    if (!container) {
      console.log(`  ✗ no container, falling back to fullPage`);
      await page.screenshot({ path: outFile, fullPage: true, type: "png" });
    } else {
      // Diagnostic: log what we're about to screenshot.
      const info = await container.evaluate((el) => {
        const r = el.getBoundingClientRect();
        const snippet = (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120);
        return { w: Math.round(r.width), h: Math.round(r.height), tag: el.tagName.toLowerCase(), cls: (el.className || "").toString().slice(0, 80), snippet };
      });
      console.log(`  container: <${info.tag}.${info.cls}> ${info.w}×${info.h} :: "${info.snippet}"`);
      await container.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await container.screenshot({ path: outFile, type: "png" });
    }

    const { size } = fs.statSync(outFile);
    console.log(`  ✓ ${Math.round(size / 1024)} KB`);
  } catch (err) {
    console.log(`  ✗ error: ${err.message}`);
  } finally {
    await browser.close();
  }
}

const args = process.argv.slice(2);
const list = args.length ? args : Object.keys(RECIPES);
for (const slug of list) {
  await capture(slug);
}
