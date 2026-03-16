import { NextResponse } from "next/server";

/* ────────────────────────────────────────────────────────────
   Ecommerce SEO Audit API – real HTML-based analysis
   ──────────────────────────────────────────────────────────── */

interface AuditCheck {
  label: string;
  status: "pass" | "warning" | "fail";
  detail: string;
}

interface AuditCategory {
  name: string;
  checks: AuditCheck[];
}

interface AuditResult {
  score: number;
  passed: number;
  warnings: number;
  critical: number;
  categories: AuditCategory[];
  responseTimeMs: number;
  platform: string | null;
  comparisonResult?: AuditResult;
}

/* ── Helpers ─────────────────────────────────────────────── */

function attr(tag: string, name: string): string | null {
  const re = new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i");
  const m = tag.match(re);
  return m ? m[1] : null;
}

function allMatches(html: string, re: RegExp): string[] {
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) out.push(m[1] ?? m[0]);
  return out;
}

function extractTextContent(html: string): string {
  // Strip scripts, styles, and tags to get visible text
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter((w) => w.length > 0).length;
}

function extractJsonLdBlocks(html: string): Record<string, unknown>[] {
  const re = /<script\s+type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const blocks: Record<string, unknown>[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(m[1].trim());
      if (Array.isArray(parsed)) {
        blocks.push(...parsed);
      } else if (parsed && typeof parsed === "object") {
        if (Array.isArray(parsed["@graph"])) {
          blocks.push(...parsed["@graph"]);
        } else {
          blocks.push(parsed);
        }
      }
    } catch {
      /* skip malformed JSON-LD */
    }
  }
  return blocks;
}

function schemaType(block: Record<string, unknown>): string {
  const t = block["@type"];
  if (Array.isArray(t)) return String(t[0]);
  return String(t ?? "");
}

function hasSchemaField(block: Record<string, unknown>, field: string): boolean {
  if (field in block) return true;
  // check nested: e.g. "offers" might be under a sub-object
  for (const val of Object.values(block)) {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      if (field in (val as Record<string, unknown>)) return true;
    }
  }
  return false;
}

/* ── Check Functions ─────────────────────────────────────── */

function checkMeta(html: string, finalUrl: string): AuditCategory {
  const checks: AuditCheck[] = [];

  // Title tag
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title) {
    checks.push({ label: "Title tag", status: "fail", detail: "No title tag found on the page." });
  } else {
    const len = title.length;
    const pixelWidth = Math.round(len * 6.2); // rough pixel estimate
    if (len < 30) {
      checks.push({ label: "Title tag", status: "warning", detail: `Title is too short (${len} chars, ~${pixelWidth}px). Aim for 30-60 characters.` });
    } else if (len > 60) {
      checks.push({ label: "Title tag", status: "warning", detail: `Title is long (${len} chars, ~${pixelWidth}px). It may be truncated in SERPs. Aim for 30-60 characters.` });
    } else {
      checks.push({ label: "Title tag", status: "pass", detail: `Title is present and well-sized (${len} chars, ~${pixelWidth}px).` });
    }
  }

  // Meta description
  const descMatch =
    html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const desc = descMatch ? descMatch[1].trim() : null;
  if (!desc) {
    checks.push({ label: "Meta description", status: "fail", detail: "No meta description found." });
  } else {
    const len = desc.length;
    if (len < 70) {
      checks.push({ label: "Meta description", status: "warning", detail: `Meta description is short (${len} chars). Aim for 70-160 characters.` });
    } else if (len > 160) {
      checks.push({ label: "Meta description", status: "warning", detail: `Meta description is long (${len} chars). It may be truncated. Aim for 70-160 characters.` });
    } else {
      checks.push({ label: "Meta description", status: "pass", detail: `Meta description is present and well-sized (${len} chars).` });
    }
  }

  // Meta robots
  const robotsMatch =
    html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["']/i);
  const robotsContent = robotsMatch ? robotsMatch[1].toLowerCase() : null;
  if (robotsContent && (robotsContent.includes("noindex") || robotsContent.includes("none"))) {
    checks.push({ label: "Meta robots", status: "fail", detail: `Meta robots is set to "${robotsContent}". This page will not be indexed by search engines.` });
  } else if (robotsContent) {
    checks.push({ label: "Meta robots", status: "pass", detail: `Meta robots is set to "${robotsContent}".` });
  } else {
    checks.push({ label: "Meta robots", status: "pass", detail: "No restrictive meta robots tag found (indexing allowed by default)." });
  }

  // Canonical tag
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;
  if (!canonical) {
    checks.push({ label: "Canonical tag", status: "fail", detail: "No canonical tag found. This can cause duplicate content issues." });
  } else {
    try {
      const canonUrl = new URL(canonical, finalUrl).href;
      const pageUrl = new URL(finalUrl).href;
      // Compare without trailing slash
      const norm = (u: string) => u.replace(/\/+$/, "").toLowerCase();
      if (norm(canonUrl) === norm(pageUrl)) {
        checks.push({ label: "Canonical tag", status: "pass", detail: "Self-referencing canonical tag is properly set." });
      } else {
        checks.push({ label: "Canonical tag", status: "warning", detail: `Canonical points to a different URL: ${canonUrl}. Verify this is intentional.` });
      }
    } catch {
      checks.push({ label: "Canonical tag", status: "warning", detail: `Canonical tag found but URL may be malformed: ${canonical}` });
    }
  }

  // Viewport tag
  const viewportMatch = html.match(/<meta[^>]+name=["']viewport["']/i);
  if (viewportMatch) {
    checks.push({ label: "Viewport meta tag", status: "pass", detail: "Viewport meta tag is present." });
  } else {
    checks.push({ label: "Viewport meta tag", status: "fail", detail: "No viewport meta tag found. This is critical for mobile rendering." });
  }

  return { name: "meta", checks };
}

function checkContent(html: string): AuditCategory {
  const checks: AuditCheck[] = [];

  // H1 tags
  const h1s = allMatches(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  const h1Texts = h1s.map((h) => h.replace(/<[^>]+>/g, "").trim()).filter((t) => t.length > 0);
  if (h1Texts.length === 0) {
    checks.push({ label: "H1 tag", status: "fail", detail: "No H1 tag found on the page." });
  } else if (h1Texts.length > 1) {
    checks.push({ label: "H1 tag", status: "warning", detail: `Multiple H1 tags found (${h1Texts.length}). Best practice is a single H1 per page.` });
  } else {
    checks.push({ label: "H1 tag", status: "pass", detail: `Single H1 tag found: "${h1Texts[0].substring(0, 80)}${h1Texts[0].length > 80 ? "..." : ""}"` });
  }

  // Heading hierarchy
  const headingLevels: number[] = [];
  const headingRe = /<h([1-6])[^>]*>/gi;
  let hMatch: RegExpExecArray | null;
  while ((hMatch = headingRe.exec(html)) !== null) {
    headingLevels.push(parseInt(hMatch[1], 10));
  }

  if (headingLevels.length === 0) {
    checks.push({ label: "Heading hierarchy", status: "fail", detail: "No heading tags found on the page." });
  } else {
    let skipped = false;
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i - 1] + 1) {
        skipped = true;
        break;
      }
    }
    if (skipped) {
      checks.push({ label: "Heading hierarchy", status: "warning", detail: `Heading levels are skipped (e.g., H1 to H3 without H2). Found levels: ${[...new Set(headingLevels)].sort().map((l) => `H${l}`).join(", ")}.` });
    } else {
      checks.push({ label: "Heading hierarchy", status: "pass", detail: `Heading structure follows a logical order. Levels used: ${[...new Set(headingLevels)].sort().map((l) => `H${l}`).join(", ")}.` });
    }
  }

  // Word count
  const text = extractTextContent(html);
  const wc = wordCount(text);
  if (wc < 150) {
    checks.push({ label: "Word count", status: "fail", detail: `Very thin content detected (${wc.toLocaleString()} words). Minimum 150 words recommended for category pages, 300 for product pages.` });
  } else if (wc < 300) {
    checks.push({ label: "Word count", status: "warning", detail: `Content may be thin (${wc.toLocaleString()} words). Consider adding more descriptive content. 300+ words recommended for product pages.` });
  } else {
    checks.push({ label: "Word count", status: "pass", detail: `Page has sufficient content (${wc.toLocaleString()} words).` });
  }

  // Image alt text coverage
  const imgTags = allMatches(html, /(<img[^>]*>)/gi);
  const totalImages = imgTags.length;
  const imagesWithAlt = imgTags.filter((tag) => {
    const altVal = attr(tag, "alt");
    return altVal !== null && altVal.trim().length > 0;
  }).length;

  if (totalImages === 0) {
    checks.push({ label: "Image alt text", status: "warning", detail: "No images found on the page." });
  } else {
    const pct = Math.round((imagesWithAlt / totalImages) * 100);
    if (pct === 100) {
      checks.push({ label: "Image alt text", status: "pass", detail: `All ${totalImages} images have alt text.` });
    } else if (pct >= 70) {
      checks.push({ label: "Image alt text", status: "warning", detail: `${imagesWithAlt} of ${totalImages} images have alt text (${pct}%). Add alt text to remaining images.` });
    } else {
      checks.push({ label: "Image alt text", status: "fail", detail: `Only ${imagesWithAlt} of ${totalImages} images have alt text (${pct}%). Most images lack descriptive alt attributes.` });
    }
  }

  // Internal links
  const aTags = allMatches(html, /(<a[^>]*>)/gi);
  const internalLinks = aTags.filter((tag) => {
    const href = attr(tag, "href");
    if (!href) return false;
    return href.startsWith("/") || href.startsWith("#") || href.startsWith("./");
  }).length;

  if (internalLinks === 0) {
    checks.push({ label: "Internal links", status: "fail", detail: "No internal links detected on the page." });
  } else if (internalLinks < 5) {
    checks.push({ label: "Internal links", status: "warning", detail: `Only ${internalLinks} internal links found. Add more cross-links to improve crawlability.` });
  } else {
    checks.push({ label: "Internal links", status: "pass", detail: `Good internal linking structure (${internalLinks} internal links found).` });
  }

  return { name: "content", checks };
}

function checkTechnical(html: string, finalUrl: string, responseTimeMs: number): AuditCategory {
  const checks: AuditCheck[] = [];

  // HTTPS
  const isHttps = finalUrl.startsWith("https://");
  if (isHttps) {
    checks.push({ label: "HTTPS / SSL", status: "pass", detail: "Site is served over HTTPS." });
  } else {
    checks.push({ label: "HTTPS / SSL", status: "fail", detail: "Site is not served over HTTPS. This is critical for security and SEO." });
  }

  // Response time
  if (responseTimeMs < 1000) {
    checks.push({ label: "Server response time", status: "pass", detail: `Server responded in ${responseTimeMs}ms (good).` });
  } else if (responseTimeMs < 2500) {
    checks.push({ label: "Server response time", status: "warning", detail: `Server responded in ${responseTimeMs}ms. Aim for under 1 second.` });
  } else {
    checks.push({ label: "Server response time", status: "fail", detail: `Server response time is ${responseTimeMs}ms. This is very slow. Aim for under 1 second.` });
  }

  // JSON-LD structured data presence
  const jsonLdBlocks = extractJsonLdBlocks(html);
  const types = jsonLdBlocks.map(schemaType);

  const hasProduct = types.some((t) => t === "Product");
  if (hasProduct) {
    checks.push({ label: "Product schema (JSON-LD)", status: "pass", detail: "Product structured data found in JSON-LD format." });
  } else {
    checks.push({ label: "Product schema (JSON-LD)", status: "warning", detail: "No Product schema found. Add JSON-LD Product markup if this is a product page." });
  }

  const hasBreadcrumb = types.some((t) => t === "BreadcrumbList");
  if (hasBreadcrumb) {
    checks.push({ label: "BreadcrumbList schema", status: "pass", detail: "BreadcrumbList structured data found." });
  } else {
    checks.push({ label: "BreadcrumbList schema", status: "warning", detail: "No BreadcrumbList schema found. Breadcrumbs help search engines understand site hierarchy." });
  }

  const hasOrg = types.some((t) => t === "Organization" || t === "LocalBusiness");
  if (hasOrg) {
    checks.push({ label: "Organization schema", status: "pass", detail: "Organization/LocalBusiness structured data found." });
  } else {
    checks.push({ label: "Organization schema", status: "warning", detail: "No Organization schema found. Consider adding it to establish brand entity." });
  }

  // Open Graph tags
  const ogTitle = html.match(/<meta[^>]+property=["']og:title["']/i);
  const ogDesc = html.match(/<meta[^>]+property=["']og:description["']/i);
  const ogImage = html.match(/<meta[^>]+property=["']og:image["']/i);
  const ogCount = [ogTitle, ogDesc, ogImage].filter(Boolean).length;

  if (ogCount === 3) {
    checks.push({ label: "Open Graph tags", status: "pass", detail: "OG title, description, and image are all present." });
  } else if (ogCount > 0) {
    const missing = [];
    if (!ogTitle) missing.push("og:title");
    if (!ogDesc) missing.push("og:description");
    if (!ogImage) missing.push("og:image");
    checks.push({ label: "Open Graph tags", status: "warning", detail: `Some OG tags are missing: ${missing.join(", ")}. Social shares may not display optimally.` });
  } else {
    checks.push({ label: "Open Graph tags", status: "fail", detail: "No Open Graph tags found. Social media shares will lack rich previews." });
  }

  // Hreflang tags
  const hreflangTags = allMatches(html, /<link[^>]+hreflang=["']([^"']*)["']/gi);
  if (hreflangTags.length > 0) {
    checks.push({ label: "Hreflang tags", status: "pass", detail: `Hreflang tags found for ${hreflangTags.length} locale(s): ${hreflangTags.slice(0, 5).join(", ")}${hreflangTags.length > 5 ? "..." : ""}.` });
  } else {
    checks.push({ label: "Hreflang tags", status: "pass", detail: "No hreflang tags found (not required for single-language sites)." });
  }

  // Language attribute on html tag
  const langMatch = html.match(/<html[^>]+lang=["']([^"']*)["']/i);
  if (langMatch) {
    checks.push({ label: "HTML lang attribute", status: "pass", detail: `Language attribute is set to "${langMatch[1]}".` });
  } else {
    checks.push({ label: "HTML lang attribute", status: "warning", detail: "No lang attribute on the <html> tag. This helps search engines determine the page language." });
  }

  return { name: "technical", checks };
}

function checkPerformance(html: string): AuditCategory {
  const checks: AuditCheck[] = [];

  // Page size (HTML only, rough proxy)
  const sizeKb = Math.round(new Blob([html]).size / 1024);
  if (sizeKb < 100) {
    checks.push({ label: "HTML page size", status: "pass", detail: `HTML document is ${sizeKb}KB (lightweight).` });
  } else if (sizeKb < 500) {
    checks.push({ label: "HTML page size", status: "warning", detail: `HTML document is ${sizeKb}KB. Consider reducing inline styles/scripts.` });
  } else {
    checks.push({ label: "HTML page size", status: "fail", detail: `HTML document is ${sizeKb}KB. This is very large and will slow page loads.` });
  }

  // External scripts count
  const scriptTags = allMatches(html, /(<script[^>]*>)/gi);
  const externalScripts = scriptTags.filter((tag) => {
    const src = attr(tag, "src");
    return src && (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//"));
  }).length;

  if (externalScripts <= 5) {
    checks.push({ label: "External scripts", status: "pass", detail: `${externalScripts} external script(s) found.` });
  } else if (externalScripts <= 15) {
    checks.push({ label: "External scripts", status: "warning", detail: `${externalScripts} external scripts found. Each adds a network request. Consider bundling or deferring.` });
  } else {
    checks.push({ label: "External scripts", status: "fail", detail: `${externalScripts} external scripts found. This is excessive and will significantly impact load time.` });
  }

  // Image count
  const imgCount = (html.match(/<img[^>]*>/gi) || []).length;
  if (imgCount <= 15) {
    checks.push({ label: "Image count", status: "pass", detail: `${imgCount} images on the page.` });
  } else if (imgCount <= 40) {
    checks.push({ label: "Image count", status: "warning", detail: `${imgCount} images on the page. Ensure they are optimized and lazy-loaded.` });
  } else {
    checks.push({ label: "Image count", status: "fail", detail: `${imgCount} images on the page. This is very high. Use lazy loading and consider pagination.` });
  }

  // Lazy loading usage
  const imgTags = allMatches(html, /(<img[^>]*>)/gi);
  const lazyImages = imgTags.filter((tag) => {
    const loading = attr(tag, "loading");
    return loading && loading.toLowerCase() === "lazy";
  }).length;

  if (imgTags.length === 0) {
    checks.push({ label: "Lazy loading", status: "pass", detail: "No images to lazy-load." });
  } else if (imgTags.length <= 3) {
    checks.push({ label: "Lazy loading", status: "pass", detail: `Few images (${imgTags.length}), lazy loading is less critical.` });
  } else {
    const pct = Math.round((lazyImages / imgTags.length) * 100);
    if (pct >= 50) {
      checks.push({ label: "Lazy loading", status: "pass", detail: `${lazyImages} of ${imgTags.length} images use loading="lazy" (${pct}%).` });
    } else if (lazyImages > 0) {
      checks.push({ label: "Lazy loading", status: "warning", detail: `Only ${lazyImages} of ${imgTags.length} images use loading="lazy" (${pct}%). Add lazy loading to below-the-fold images.` });
    } else {
      checks.push({ label: "Lazy loading", status: "warning", detail: `No images use loading="lazy". Add it to below-the-fold images to improve initial load.` });
    }
  }

  return { name: "performance", checks };
}

function checkStructuredData(html: string): AuditCategory {
  const checks: AuditCheck[] = [];
  const blocks = extractJsonLdBlocks(html);
  const types = blocks.map(schemaType);

  // Product schema with required fields
  const productBlock = blocks.find((b) => schemaType(b) === "Product");
  if (productBlock) {
    const requiredFields = ["name", "image"];
    const missing = requiredFields.filter((f) => !hasSchemaField(productBlock, f));

    // Check for price in offers
    const offers = productBlock["offers"] as Record<string, unknown> | undefined;
    const offersArr = Array.isArray(productBlock["offers"]) ? productBlock["offers"] : offers ? [offers] : [];
    const hasPrice = offersArr.some((o: Record<string, unknown>) => o && ("price" in o || "lowPrice" in o));
    const hasAvailability = offersArr.some((o: Record<string, unknown>) => o && "availability" in o);

    if (!hasPrice) missing.push("price (in offers)");
    if (!hasAvailability) missing.push("availability (in offers)");

    if (missing.length === 0) {
      checks.push({ label: "Product schema fields", status: "pass", detail: "Product schema has all required fields: name, image, price, availability." });
    } else {
      checks.push({ label: "Product schema fields", status: "warning", detail: `Product schema is missing: ${missing.join(", ")}.` });
    }
  } else {
    checks.push({ label: "Product schema fields", status: "warning", detail: "No Product schema found. If this is a product page, add Product JSON-LD markup." });
  }

  // Review / AggregateRating schema
  const hasReview = types.includes("Review");
  const hasAggRating = blocks.some((b) => {
    if (schemaType(b) === "AggregateRating") return true;
    if (b["aggregateRating"]) return true;
    return false;
  });

  if (hasReview || hasAggRating) {
    checks.push({ label: "Review / Rating schema", status: "pass", detail: `${hasReview ? "Review" : ""}${hasReview && hasAggRating ? " and " : ""}${hasAggRating ? "AggregateRating" : ""} schema found. Star ratings may appear in SERPs.` });
  } else {
    checks.push({ label: "Review / Rating schema", status: "warning", detail: "No Review or AggregateRating schema found. Adding reviews can earn star ratings in SERPs." });
  }

  // BreadcrumbList
  const hasBreadcrumb = types.includes("BreadcrumbList");
  if (hasBreadcrumb) {
    checks.push({ label: "BreadcrumbList schema", status: "pass", detail: "BreadcrumbList structured data found for breadcrumb navigation." });
  } else {
    checks.push({ label: "BreadcrumbList schema", status: "warning", detail: "No BreadcrumbList schema. Adding it helps search engines display breadcrumb paths." });
  }

  // FAQPage
  const hasFaq = types.includes("FAQPage");
  if (hasFaq) {
    checks.push({ label: "FAQPage schema", status: "pass", detail: "FAQPage schema found. FAQ rich results may appear in SERPs." });
  } else {
    checks.push({ label: "FAQPage schema", status: "pass", detail: "No FAQPage schema found (optional, add if you have FAQ content on the page)." });
  }

  // Organization
  const hasOrg = types.some((t) => t === "Organization" || t === "LocalBusiness");
  if (hasOrg) {
    const orgBlock = blocks.find((b) => schemaType(b) === "Organization" || schemaType(b) === "LocalBusiness")!;
    const hasLogo = hasSchemaField(orgBlock, "logo");
    const hasContact = hasSchemaField(orgBlock, "contactPoint");
    if (hasLogo && hasContact) {
      checks.push({ label: "Organization schema", status: "pass", detail: "Organization schema found with logo and contact info." });
    } else {
      const missingOrg = [];
      if (!hasLogo) missingOrg.push("logo");
      if (!hasContact) missingOrg.push("contactPoint");
      checks.push({ label: "Organization schema", status: "warning", detail: `Organization schema found but missing: ${missingOrg.join(", ")}.` });
    }
  } else {
    checks.push({ label: "Organization schema", status: "warning", detail: "No Organization schema found. Adding it helps establish your brand entity." });
  }

  return { name: "structured-data", checks };
}

function checkMobile(html: string): AuditCategory {
  const checks: AuditCheck[] = [];

  // Viewport meta
  const viewportMatch = html.match(/<meta[^>]+name=["']viewport["'][^>]*content=["']([^"']*)["']/i);
  if (viewportMatch) {
    const content = viewportMatch[1].toLowerCase();
    if (content.includes("width=device-width")) {
      checks.push({ label: "Viewport meta tag", status: "pass", detail: "Viewport meta tag is set to width=device-width." });
    } else {
      checks.push({ label: "Viewport meta tag", status: "warning", detail: `Viewport is set but may not be optimal: "${viewportMatch[1]}". Use width=device-width.` });
    }
  } else {
    checks.push({ label: "Viewport meta tag", status: "fail", detail: "No viewport meta tag found. This is critical for mobile rendering." });
  }

  // Font size check - look for small font sizes in inline styles
  const smallFontRe = /font-size\s*:\s*(\d+)(px|pt)/gi;
  let sfMatch: RegExpExecArray | null;
  const smallFonts: number[] = [];
  while ((sfMatch = smallFontRe.exec(html)) !== null) {
    const size = parseInt(sfMatch[1], 10);
    const unit = sfMatch[2].toLowerCase();
    const pxSize = unit === "pt" ? size * 1.33 : size;
    if (pxSize < 12) smallFonts.push(pxSize);
  }

  if (smallFonts.length === 0) {
    checks.push({ label: "Font readability", status: "pass", detail: "No inline styles with font sizes below 12px detected." });
  } else {
    checks.push({ label: "Font readability", status: "warning", detail: `${smallFonts.length} inline style(s) with font sizes below 12px found. Small text is hard to read on mobile.` });
  }

  // Tap targets - check for very small interactive elements in inline styles
  const smallButtonRe = /(?:width|height)\s*:\s*(\d+)px/gi;
  const inlineButtons = allMatches(html, /(<(?:a|button|input)[^>]*style=["'][^"']*["'][^>]*>)/gi);
  let smallTargets = 0;
  for (const tag of inlineButtons) {
    const sizes: number[] = [];
    let sizeMatch: RegExpExecArray | null;
    const sizeRe = /(?:width|height)\s*:\s*(\d+)px/gi;
    while ((sizeMatch = sizeRe.exec(tag)) !== null) {
      sizes.push(parseInt(sizeMatch[1], 10));
    }
    if (sizes.some((s) => s < 44)) smallTargets++;
  }

  if (smallTargets === 0) {
    checks.push({ label: "Tap target sizes", status: "pass", detail: "No inline-styled interactive elements with sizes below 44px detected." });
  } else {
    checks.push({ label: "Tap target sizes", status: "warning", detail: `${smallTargets} interactive element(s) appear to have tap targets smaller than 44px. Minimum recommended is 44x44px.` });
  }

  return { name: "mobile", checks };
}

/* ── Platform Detection ──────────────────────────────────── */

function detectPlatform(html: string, headers: Headers): string | null {
  // Shopify
  if (html.includes("Shopify.theme") || html.includes("cdn.shopify.com") ||
      headers.get("x-shopify-stage") !== null || html.includes("myshopify.com") ||
      html.includes("shopify-section")) {
    return "Shopify";
  }
  // WooCommerce
  if (html.includes("woocommerce") || html.includes("wc-add-to-cart") ||
      html.includes("wp-content/plugins/woocommerce")) {
    return "WooCommerce";
  }
  // Magento
  if (html.includes("Magento") || html.includes("mage/") ||
      html.includes("requirejs-config") && html.includes("Magento_") ||
      headers.get("x-magento-vary") !== null) {
    return "Magento";
  }
  // BigCommerce
  if (html.includes("bigcommerce") || html.includes("cdn11.bigcommerce.com") ||
      headers.get("x-bc-") !== null) {
    return "BigCommerce";
  }
  // PrestaShop
  if (html.includes("prestashop") || html.includes("PrestaShop") ||
      html.includes("/modules/ps_")) {
    return "PrestaShop";
  }
  // Wix
  if (html.includes("wix.com") || html.includes("X-Wix-") ||
      headers.get("x-wix-request-id") !== null) {
    return "Wix";
  }
  // Squarespace
  if (html.includes("squarespace") || html.includes("static.squarespace.com") ||
      headers.get("x-servedby")?.includes("squarespace") === true) {
    return "Squarespace";
  }
  return null;
}

/* ── Ecommerce-specific checks ──────────────────────────── */

function checkEcommerce(html: string, finalUrl: string, headers: Headers): AuditCategory {
  const checks: AuditCheck[] = [];
  const platform = detectPlatform(html, headers);

  // Platform detection result
  checks.push({
    label: "Platform detection",
    status: "pass",
    detail: platform
      ? `Ecommerce platform detected: ${platform}.`
      : "Could not auto-detect the ecommerce platform. Checks will run generically.",
  });

  // Product page template analysis - unique titles/descriptions
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  const hasGenericTitle = /home|welcome|untitled/i.test(title) || title.length < 10;
  if (hasGenericTitle && title) {
    checks.push({
      label: "Unique page title",
      status: "warning",
      detail: `Title appears generic: "${title.slice(0, 60)}". Product/category pages should have unique, keyword-rich titles.`,
    });
  } else if (title) {
    checks.push({
      label: "Unique page title",
      status: "pass",
      detail: "Page title appears unique and descriptive.",
    });
  }

  // Category page SEO - H1 + content above/below product grid
  const h1s = allMatches(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  const h1Text = h1s.map((h) => h.replace(/<[^>]+>/g, "").trim()).filter((t) => t.length > 0);

  // Check for content blocks around product grids
  const hasProductGrid = /product-grid|product-list|products-grid|collection-products/i.test(html);
  if (hasProductGrid) {
    const gridPos = html.search(/product-grid|product-list|products-grid|collection-products/i);
    const contentBefore = html.substring(Math.max(0, gridPos - 2000), gridPos);
    const contentAfter = html.substring(gridPos, Math.min(html.length, gridPos + 5000));

    const textBefore = extractTextContent(contentBefore);
    const textAfter = extractTextContent(contentAfter);
    const wcBefore = wordCount(textBefore);
    const wcAfter = wordCount(textAfter);

    if (wcBefore < 20 && wcAfter < 20) {
      checks.push({
        label: "Category page content",
        status: "warning",
        detail: "Product grid detected but minimal unique text content around it. Add descriptive content above or below the product grid for better SEO.",
      });
    } else {
      checks.push({
        label: "Category page content",
        status: "pass",
        detail: `Category page has content around the product grid (~${wcBefore} words before, ~${wcAfter} words after).`,
      });
    }
  }

  // Faceted navigation / filter URL handling
  const filterLinks = (html.match(/\?.*(?:filter|sort|color|size|price|brand)=/gi) || []).length;
  const hasNoFollowFilters = /<a[^>]+rel=["']nofollow["'][^>]*\?.*(?:filter|sort)/i.test(html);
  const hasCanonicalOnPage = /<link[^>]+rel=["']canonical["']/i.test(html);

  if (filterLinks > 0) {
    if (hasNoFollowFilters || hasCanonicalOnPage) {
      checks.push({
        label: "Faceted navigation",
        status: "pass",
        detail: `${filterLinks} filter URLs detected. ${hasNoFollowFilters ? "Nofollow on filter links found. " : ""}${hasCanonicalOnPage ? "Canonical tag present to consolidate." : ""}`,
      });
    } else {
      checks.push({
        label: "Faceted navigation",
        status: "warning",
        detail: `${filterLinks} filter/sort URLs detected without nofollow or canonical protection. This can cause massive duplicate content and crawl waste.`,
      });
    }
  }

  // Internal search page indexation
  const hasSearchNoindex = /<meta[^>]+name=["']robots["'][^>]*noindex/i.test(html) &&
    /\/search/i.test(finalUrl);
  const searchLinksOnPage = (html.match(/href=["'][^"']*\/search\?q=/gi) || []).length;
  if (searchLinksOnPage > 0) {
    checks.push({
      label: "Internal search indexation",
      status: "warning",
      detail: `${searchLinksOnPage} links to /search?q= found. Ensure search result pages are noindexed to prevent thin content in Google's index.`,
    });
  } else {
    checks.push({
      label: "Internal search indexation",
      status: "pass",
      detail: "No internal search links (/search?q=) leaking into the page.",
    });
  }

  // Cart/checkout noindex check
  const cartLinks = (html.match(/href=["'][^"']*\/(?:cart|checkout)["']/gi) || []).length;
  const hasCartPage = /\/cart|\/checkout/i.test(finalUrl);
  if (hasCartPage) {
    const hasNoindex = /<meta[^>]+name=["']robots["'][^>]*noindex/i.test(html);
    checks.push({
      label: "Cart/checkout noindex",
      status: hasNoindex ? "pass" : "fail",
      detail: hasNoindex
        ? "This cart/checkout page is correctly set to noindex."
        : "This cart/checkout page is not noindexed. Cart and checkout pages should be excluded from search.",
    });
  } else {
    checks.push({
      label: "Cart/checkout pages",
      status: "pass",
      detail: "Current page is not a cart/checkout page. Ensure those pages are noindexed.",
    });
  }

  // Product image optimization
  const imgTags = allMatches(html, /(<img[^>]*>)/gi);
  const productImages = imgTags.filter((tag) =>
    /product|item|goods/i.test(tag) || attr(tag, "src")?.includes("product")
  );
  const totalProductImgs = productImages.length || imgTags.length;

  const imgsWithAlt = imgTags.filter((tag) => {
    const alt = attr(tag, "alt");
    return alt !== null && alt.trim().length > 0;
  }).length;

  const lazyLoadedImgs = imgTags.filter((tag) => {
    const loading = attr(tag, "loading");
    return loading && loading.toLowerCase() === "lazy";
  }).length;

  if (imgTags.length > 0) {
    const altPct = Math.round((imgsWithAlt / imgTags.length) * 100);
    if (altPct < 50) {
      checks.push({
        label: "Product image alt text",
        status: "fail",
        detail: `Only ${altPct}% of images have alt text (${imgsWithAlt}/${imgTags.length}). Product images need descriptive alt text for image search.`,
      });
    } else if (altPct < 90) {
      checks.push({
        label: "Product image alt text",
        status: "warning",
        detail: `${altPct}% of images have alt text (${imgsWithAlt}/${imgTags.length}). Add alt text to all product images.`,
      });
    } else {
      checks.push({
        label: "Product image alt text",
        status: "pass",
        detail: `${altPct}% of images have alt text (${imgsWithAlt}/${imgTags.length}).`,
      });
    }

    // Lazy loading
    if (imgTags.length > 3) {
      const lazyPct = Math.round((lazyLoadedImgs / imgTags.length) * 100);
      checks.push({
        label: "Image lazy loading",
        status: lazyPct >= 50 ? "pass" : "warning",
        detail: `${lazyLoadedImgs}/${imgTags.length} images use lazy loading (${lazyPct}%).${lazyPct < 50 ? " Add loading=\"lazy\" to below-the-fold images." : ""}`,
      });
    }
  }

  // Out-of-stock product handling
  const blocks = extractJsonLdBlocks(html);
  const productBlock = blocks.find((b) => schemaType(b) === "Product") as Record<string, unknown> | undefined;
  if (productBlock) {
    const offers = Array.isArray(productBlock.offers) ? productBlock.offers : productBlock.offers ? [productBlock.offers] : [];
    const outOfStock = offers.some((o: Record<string, unknown>) =>
      o?.availability && /OutOfStock|Discontinued/i.test(String(o.availability))
    );

    if (outOfStock) {
      const hasNoindex = /<meta[^>]+name=["']robots["'][^>]*noindex/i.test(html);
      const hasRedirect = false; // Can't check redirects from HTML alone
      checks.push({
        label: "Out-of-stock handling",
        status: hasNoindex ? "pass" : "warning",
        detail: hasNoindex
          ? "Out-of-stock product is correctly noindexed."
          : "Product marked as OutOfStock in schema but page is still indexed. Consider noindexing, redirecting to similar products, or showing related alternatives.",
      });
    }
  }

  // Price in schema
  if (productBlock) {
    const offers = Array.isArray(productBlock.offers) ? productBlock.offers : productBlock.offers ? [productBlock.offers] : [];
    const hasPrice = offers.some((o: Record<string, unknown>) => o && ("price" in o || "lowPrice" in o));
    const hasCurrency = offers.some((o: Record<string, unknown>) => o && "priceCurrency" in o);

    checks.push({
      label: "Price in schema",
      status: hasPrice && hasCurrency ? "pass" : hasPrice ? "warning" : "warning",
      detail: hasPrice && hasCurrency
        ? "Product schema includes price and currency."
        : hasPrice
        ? "Product schema has price but missing priceCurrency."
        : "No price found in Product schema. Price markup enables rich results in SERPs.",
    });
  }

  // Review schema presence
  const hasReview = blocks.some((b: Record<string, unknown>) =>
    schemaType(b) === "Review" || b.aggregateRating || schemaType(b) === "AggregateRating"
  );
  checks.push({
    label: "Review schema",
    status: hasReview ? "pass" : "warning",
    detail: hasReview
      ? "Review/AggregateRating schema detected. Star ratings may appear in SERPs."
      : "No Review or AggregateRating schema found. Adding review markup can earn star ratings in search results.",
  });

  // Breadcrumb implementation
  const hasBreadcrumbSchema = blocks.some((b) => schemaType(b) === "BreadcrumbList");
  const hasBreadcrumbHtml = /breadcrumb|bread-crumb|aria-label=["']breadcrumb/i.test(html);

  if (hasBreadcrumbSchema && hasBreadcrumbHtml) {
    checks.push({
      label: "Breadcrumb implementation",
      status: "pass",
      detail: "Breadcrumbs found in both HTML and BreadcrumbList schema. Search engines can display breadcrumb paths.",
    });
  } else if (hasBreadcrumbHtml && !hasBreadcrumbSchema) {
    checks.push({
      label: "Breadcrumb implementation",
      status: "warning",
      detail: "Breadcrumb HTML found but no BreadcrumbList schema. Add JSON-LD BreadcrumbList markup for rich results.",
    });
  } else if (!hasBreadcrumbHtml) {
    checks.push({
      label: "Breadcrumb implementation",
      status: "warning",
      detail: "No breadcrumb navigation detected. Breadcrumbs improve user experience and SEO.",
    });
  }

  // Site architecture depth estimation
  const internalLinks = allMatches(html, /(<a[^>]*href=["']\/[^"']*["'][^>]*>)/gi);
  const linkDepths = internalLinks.map((tag) => {
    const href = attr(tag, "href") || "/";
    return href.split("/").filter(Boolean).length;
  });
  const maxDepth = linkDepths.length > 0 ? Math.max(...linkDepths) : 0;

  if (maxDepth > 5) {
    checks.push({
      label: "Site architecture depth",
      status: "warning",
      detail: `Deepest internal link is ${maxDepth} levels deep. Products should be reachable within 3-4 clicks from the homepage.`,
    });
  } else if (maxDepth > 0) {
    checks.push({
      label: "Site architecture depth",
      status: "pass",
      detail: `Internal links reach up to ${maxDepth} levels deep. Good site architecture.`,
    });
  }

  return { name: "ecommerce", checks };
}

/* ── Score Calculation ───────────────────────────────────── */

function calculateScore(categories: AuditCategory[]): { score: number; passed: number; warnings: number; critical: number } {
  let passed = 0;
  let warnings = 0;
  let critical = 0;

  for (const cat of categories) {
    for (const check of cat.checks) {
      if (check.status === "pass") passed++;
      else if (check.status === "warning") warnings++;
      else critical++;
    }
  }

  const total = passed + warnings + critical;
  if (total === 0) return { score: 0, passed: 0, warnings: 0, critical: 0 };

  // Weighted scoring: pass = 1.0, warning = 0.5, fail = 0
  const score = Math.round(((passed + warnings * 0.5) / total) * 100);

  return { score, passed, warnings, critical };
}

/* ── Fetch + Audit single URL ────────────────────────────── */

async function runEcommerceAudit(targetUrl: string): Promise<AuditResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const startTime = Date.now();

  let res: Response;
  try {
    res = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Audit/1.0; +https://ecomseo.ai)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      signal: controller.signal,
      redirect: "follow",
    });
  } catch {
    clearTimeout(timeout);
    throw new Error("Could not fetch the URL. Check that the site is accessible.");
  }
  clearTimeout(timeout);

  const responseTimeMs = Date.now() - startTime;
  const finalUrl = res.url || targetUrl;

  if (!res.ok) {
    throw new Error(`Site returned HTTP ${res.status}`);
  }

  const html = await res.text();
  const headers = res.headers;
  const platform = detectPlatform(html, headers);

  // Run all checks
  const categories: AuditCategory[] = [
    checkMeta(html, finalUrl),
    checkContent(html),
    checkTechnical(html, finalUrl, responseTimeMs),
    checkPerformance(html),
    checkStructuredData(html),
    checkMobile(html),
    checkEcommerce(html, finalUrl, headers),
  ];

  const { score, passed, warnings, critical } = calculateScore(categories);

  return {
    score,
    passed,
    warnings,
    critical,
    categories,
    responseTimeMs,
    platform,
  };
}

/* ── Main Route Handler ──────────────────────────────────── */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = body.url;
    const compareUrl: string = body.compareUrl || "";

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 });
    }

    // Validate URL
    let targetUrl: string;
    try {
      const u = new URL(url.startsWith("http") ? url : `https://${url}`);
      targetUrl = u.href;
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    let result: AuditResult;
    try {
      result = await runEcommerceAudit(targetUrl);
    } catch (e: unknown) {
      return NextResponse.json({ error: e instanceof Error ? e.message : "Could not audit the URL" }, { status: 502 });
    }

    // Run comparison audit if compareUrl is provided
    if (compareUrl.trim()) {
      let compTarget: string;
      try {
        const u = new URL(compareUrl.startsWith("http") ? compareUrl : `https://${compareUrl}`);
        compTarget = u.href;
        const compResult = await runEcommerceAudit(compTarget);
        result.comparisonResult = compResult;
      } catch {
        // Comparison failed, continue without it
      }
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
