#!/usr/bin/env node
/**
 * Walk through every tool page on ecomseo.co, run the tool with a sensible default
 * input, wait for results, and save a full-page screenshot to
 * /public/images/tools/{slug}-preview.png.
 *
 * Strategy: navigate → fill the first URL input (if any) with https://www.gymshark.com →
 * click the primary accent-coloured button → wait for loading text to vanish →
 * full-page screenshot.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = "/Users/dimitargeorgiev/local/ecomseo/public/images/tools";
const BASE = "https://ecomseo.co/tools";
const DEFAULT_URL = "https://www.gymshark.com";

/** Per-tool overrides. If a tool needs a non-default input or should just screenshot the landing state. */
const OVERRIDES = {
  "intent-matching-tool": { input: "running shoes" },
  "schema-generator": { skipInput: true }, // Shows a form — landing screenshot is fine
  "serp-simulator": { skipInput: true }, // Has its own live preview
  "sitemap-extractor": { input: "https://www.gymshark.com/sitemap.xml" },
  "sitemap-comparison": { input: "https://www.gymshark.com/sitemap.xml", second: "https://www.allbirds.com/sitemap.xml" },
  "site-speed-comparison": { input: DEFAULT_URL, second: "https://www.allbirds.com" },
  "shopping-feed-validator": { input: DEFAULT_URL },
  "schema-validator": { input: DEFAULT_URL },
  "robots-txt-analyzer": { input: DEFAULT_URL },
  "redirect-checker": { input: "https://gymshark.com" }, // no www so it'll redirect
  "page-type-classifier": { input: "https://www.gymshark.com/collections/mens-training" },
  "hreflang-validator": { input: DEFAULT_URL },
  // All other URL-input tools use DEFAULT_URL
};

const TOOLS = [
  "ecommerce-seo-audit", // already has one but let's refresh with consistent flow
  "shopify-seo-audit",
  "canonical-checker",
  "core-web-vitals",
  "duplicate-content",
  "heading-checker",
  "hreflang-validator",
  "image-auditor",
  "indexability-checker",
  "intent-matching-tool",
  "internal-link-analyzer",
  "meta-tags-checker",
  "og-checker",
  "page-type-classifier",
  "redirect-checker",
  "robots-txt-analyzer",
  "schema-generator",
  "schema-validator",
  "serp-simulator",
  "shopping-feed-validator",
  "site-speed-comparison",
  "sitemap-comparison",
  "sitemap-extractor",
  "thin-content-checker",
];

// Only run a subset if CLI args provided
const only = process.argv.slice(2);
const list = only.length ? TOOLS.filter((t) => only.includes(t)) : TOOLS;

fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

const results = [];

for (const slug of list) {
  const url = `${BASE}/${slug}`;
  const outFile = path.join(OUT_DIR, `${slug}-preview.png`);
  const override = OVERRIDES[slug] || {};
  const startInput = override.input ?? DEFAULT_URL;
  const skipInput = !!override.skipInput;

  console.log(`\n→ ${slug}  (${startInput || "no input"})`);

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(1500);

    if (!skipInput) {
      // Find the first visible input OR textarea in the main area
      const candidates = await page.$$(
        'main input[type="url"], main input[type="text"], main input[type="search"], main input[type="email"], main input:not([type]), main textarea'
      );
      let input = null;
      for (const c of candidates) {
        const box = await c.boundingBox().catch(() => null);
        if (box && box.width > 0 && box.height > 0) { input = c; break; }
      }
      if (input) {
        const tagName = await input.evaluate((el) => el.tagName);
        // For textareas (bulk URL lists) provide multiple URLs
        const fillValue = tagName === "TEXTAREA"
          ? [
              "https://www.gymshark.com",
              "https://www.gymshark.com/collections/mens-t-shirts",
              "https://www.gymshark.com/collections/womens-leggings",
              "https://www.gymshark.com/products/gymshark-crest-t-shirt-black",
            ].join("\n")
          : startInput;
        await input.fill(fillValue);
        if (override.second && candidates[1]) {
          await candidates[1].fill(override.second);
        }
        // Find the primary run button: the first enabled button inside <main> that sits
        // near the input (same section). We look for action verbs in the text.
        const actionRegex = /^(run|check|analy[sz]e|audit|validat|test|extract|compare|generat|scan|find|detect|inspect|verify)/i;
        const btn = await page.evaluateHandle((rx) => {
          const buttons = Array.from(document.querySelectorAll("main button"));
          for (const b of buttons) {
            if (b.disabled) continue;
            const text = (b.textContent || "").trim();
            if (text && new RegExp(rx, "i").test(text)) return b;
          }
          // Fallback: the first enabled, visible button in main
          for (const b of buttons) {
            if (!b.disabled && b.offsetParent !== null) return b;
          }
          return null;
        }, actionRegex.source);
        const el = btn.asElement();
        if (el) {
          await el.click({ force: true });
          // Wait up to 90s for a loading state to clear OR for a results indicator to appear.
          await page.waitForTimeout(3000); // initial kick
          await Promise.race([
            page.waitForFunction(
              () => {
                const txt = document.body.innerText;
                // Tool-specific results indicators
                return /Overall Score|Your SEO Audit Results|Results\b|Issues found|passed|warn(ing)?|critical|score:|detected|Found \d|Summary|Domain Authority|URL\s+Status|Redirect chain|Type:|Intent:|Match:|Schema valid/i.test(txt)
                  // Fallback: page height grew significantly (results appended)
                  || document.body.scrollHeight > 2500;
              },
              null,
              { timeout: 75000, polling: 800 }
            ).catch(() => {}),
            page.waitForTimeout(75000),
          ]);
          await page.waitForTimeout(2000); // settle
        } else {
          console.log(`  (no run button found)`);
        }
      } else {
        console.log(`  (no input field found)`);
      }
    }

    // Try to expand any collapsed accordion content on the page (for audits that group by category)
    try {
      const catButtons = await page.$$(
        'main button:has-text("%")'
      );
      for (const b of catButtons) {
        try {
          await b.click({ timeout: 500 });
        } catch {}
      }
      await page.waitForTimeout(600);
    } catch {}

    // Hide fixed elements that clutter the screenshot
    await page.evaluate(() => {
      document.querySelectorAll("nav,footer,[class*=cookie i],[class*=chat i]").forEach((el) => {
        (el).style.display = "none";
      });
    });

    // Screenshot full page
    await page.screenshot({ path: outFile, fullPage: true, type: "png" });
    const { size } = fs.statSync(outFile);
    results.push({ slug, file: outFile, size });
    console.log(`  ✓ saved (${Math.round(size / 1024)} KB)`);
  } catch (err) {
    console.log(`  ✗ ${err.message}`);
    results.push({ slug, error: err.message });
  }
}

await browser.close();

console.log(`\n=== Done ===`);
console.log(`Saved: ${results.filter((r) => r.file).length}`);
console.log(`Errors: ${results.filter((r) => r.error).length}`);
results
  .filter((r) => r.error)
  .forEach((r) => console.log(`  ! ${r.slug}: ${r.error}`));
