import { NextResponse } from "next/server";

export const maxDuration = 60;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface AuditCheck {
  label: string;
  status: "pass" | "warning" | "fail";
  detail: string;
  priority?: "critical" | "high" | "medium" | "low";
  howToFix?: string;
}

interface AuditCategory {
  name: string;
  weight: number; // 0–100, for weighted scoring
  checks: AuditCheck[];
}

interface CwvMetric {
  value: number;
  rating: string;
  displayValue: string;
}

interface FieldMetric {
  p75: number;
  rating: string;
  displayValue: string;
}

interface ResourceBreakdown {
  totalBytes: number;
  totalRequests: number;
  jsBytes: number;
  cssBytes: number;
  imageBytes: number;
  fontBytes: number;
  otherBytes: number;
  thirdPartyBytes: number;
}

interface AuditResult {
  score: number;
  grade: string;
  passed: number;
  warnings: number;
  critical: number;
  isShopify: boolean;
  shopifyTheme: string | null;
  categories: AuditCategory[];
  responseTimeMs: number;
  url: string;
  comparisonResult?: AuditResult;
  performanceScore: number | null;
  coreWebVitals: {
    lcp: CwvMetric | null;
    fcp: CwvMetric | null;
    cls: CwvMetric | null;
    tbt: CwvMetric | null;
    si: CwvMetric | null;
    ttfb: CwvMetric | null;
  } | null;
  fieldData: {
    lcp: FieldMetric | null;
    inp: FieldMetric | null;
    cls: FieldMetric | null;
    fcp: FieldMetric | null;
    ttfb: FieldMetric | null;
  } | null;
  lcpElement: string | null;
  opportunities: { title: string; savings: string }[];
  resourceBreakdown: ResourceBreakdown | null;
}

/* ------------------------------------------------------------------ */
/*  Category weights                                                   */
/* ------------------------------------------------------------------ */

const CATEGORY_WEIGHTS: Record<string, number> = {
  meta: 14,
  "shopify-technical": 11,
  performance: 15,
  "structured-data": 8,
  content: 11,
  security: 8,
  mobile: 7,
  links: 8,
  social: 4,
  accessibility: 4,
  international: 5,
  images: 5,
};

function letterGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const UA =
  "Mozilla/5.0 (compatible; EcomSEO ShopifyAudit/2.0; +https://ecomseo.co)";

async function safeFetch(
  url: string,
  timeout = 12000
): Promise<{ ok: boolean; status: number; text: string; headers: Headers; responseTimeMs: number }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  const start = Date.now();
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA },
      signal: controller.signal,
      redirect: "follow",
    });
    const text = await res.text();
    clearTimeout(timer);
    return { ok: res.ok, status: res.status, text, headers: res.headers, responseTimeMs: Date.now() - start };
  } catch {
    clearTimeout(timer);
    return { ok: false, status: 0, text: "", headers: new Headers(), responseTimeMs: Date.now() - start };
  }
}

/* ------------------------------------------------------------------ */
/*  PSI fetch & extraction                                             */
/* ------------------------------------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PsiData = Record<string, any>;

async function fetchPSI(url: string): Promise<PsiData> {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 45000);
  try {
    const res = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`PSI API returned ${res.status}`);
    return (await res.json()) as PsiData;
  } catch (e) {
    clearTimeout(timeout);
    throw e;
  }
}

function rateLcp(ms: number): string { if (ms <= 2500) return "good"; if (ms <= 4000) return "needs-improvement"; return "poor"; }
function rateFcp(ms: number): string { if (ms <= 1800) return "good"; if (ms <= 3000) return "needs-improvement"; return "poor"; }
function rateCls(val: number): string { if (val <= 0.1) return "good"; if (val <= 0.25) return "needs-improvement"; return "poor"; }
function rateTbt(ms: number): string { if (ms <= 200) return "good"; if (ms <= 600) return "needs-improvement"; return "poor"; }
function rateSi(ms: number): string { if (ms <= 3400) return "good"; if (ms <= 5800) return "needs-improvement"; return "poor"; }
function rateTtfb(ms: number): string { if (ms <= 800) return "good"; if (ms <= 1800) return "needs-improvement"; return "poor"; }
function rateInp(ms: number): string { if (ms <= 200) return "good"; if (ms <= 500) return "needs-improvement"; return "poor"; }

function formatMs(ms: number): string {
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)}s`;
  return `${Math.round(ms)}ms`;
}

function formatBytes(bytes: number): string {
  if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}

interface PsiExtracted {
  performanceScore: number | null;
  coreWebVitals: AuditResult["coreWebVitals"];
  fieldData: AuditResult["fieldData"];
  lcpElement: string | null;
  opportunities: { title: string; savings: string }[];
  resourceBreakdown: ResourceBreakdown | null;
}

function extractPsiData(psi: PsiData): PsiExtracted {
  const lighthouse = psi.lighthouseResult;
  if (!lighthouse) {
    return { performanceScore: null, coreWebVitals: null, fieldData: null, lcpElement: null, opportunities: [], resourceBreakdown: null };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const audits: Record<string, any> = lighthouse.audits ?? {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories: Record<string, any> = lighthouse.categories ?? {};

  // Performance score
  const perfScore = categories.performance?.score;
  const performanceScore = typeof perfScore === "number" ? Math.round(perfScore * 100) : null;

  // Lab metrics
  function labMetric(auditId: string, rateFn: (v: number) => string, unit: "ms" | "raw"): CwvMetric | null {
    const audit = audits[auditId];
    if (!audit || audit.numericValue == null) return null;
    const val = audit.numericValue as number;
    const displayValue = (audit.displayValue as string) ?? (unit === "ms" ? formatMs(val) : val.toFixed(3));
    return { value: val, rating: rateFn(val), displayValue };
  }

  const coreWebVitals: AuditResult["coreWebVitals"] = {
    lcp: labMetric("largest-contentful-paint", rateLcp, "ms"),
    fcp: labMetric("first-contentful-paint", rateFcp, "ms"),
    cls: labMetric("cumulative-layout-shift", rateCls, "raw"),
    tbt: labMetric("total-blocking-time", rateTbt, "ms"),
    si: labMetric("speed-index", rateSi, "ms"),
    ttfb: labMetric("server-response-time", rateTtfb, "ms"),
  };

  // CrUX field data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const crux = psi.loadingExperience as Record<string, any> | undefined;
  let fieldData: AuditResult["fieldData"] = null;

  if (crux?.metrics) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metrics = crux.metrics as Record<string, any>;

    function fieldMetric(key: string, rateFn: (v: number) => string, unit: "ms" | "raw"): FieldMetric | null {
      const m = metrics[key];
      if (!m?.percentile) return null;
      const p75 = m.percentile as number;
      const displayValue = unit === "ms" ? formatMs(p75) : p75.toFixed(3);
      return { p75, rating: rateFn(p75), displayValue };
    }

    const lcp = fieldMetric("LARGEST_CONTENTFUL_PAINT_MS", rateLcp, "ms");
    const inp = fieldMetric("INTERACTION_TO_NEXT_PAINT", rateInp, "ms");
    const cls = fieldMetric("CUMULATIVE_LAYOUT_SHIFT_SCORE", (v) => rateCls(v / 100), "raw");
    const fcp = fieldMetric("FIRST_CONTENTFUL_PAINT_MS", rateFcp, "ms");
    const ttfb = fieldMetric("EXPERIMENTAL_TIME_TO_FIRST_BYTE", rateTtfb, "ms");

    if (lcp || inp || cls || fcp || ttfb) {
      // Fix CLS display for field data (CrUX reports as integer, e.g. 10 = 0.10)
      const clsFixed = cls ? { ...cls, displayValue: (cls.p75 / 100).toFixed(2) } : null;
      fieldData = { lcp, inp, cls: clsFixed, fcp, ttfb };
    }
  }

  // LCP element
  const lcpAudit = audits["largest-contentful-paint-element"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lcpFirstItem = lcpAudit?.details?.items?.[0] as Record<string, any> | undefined;
  const lcpElement = lcpFirstItem?.node?.snippet ?? lcpFirstItem?.node?.nodeLabel ?? null;

  // Opportunities
  const opportunities: { title: string; savings: string }[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const oppRefs = (categories.performance?.auditRefs as Array<Record<string, any>>)?.filter(
    (ref) => ref.group === "load-opportunities"
  ) ?? [];
  for (const ref of oppRefs) {
    const audit = audits[ref.id as string];
    if (audit && audit.score !== null && (audit.score as number) < 1 && audit.details?.overallSavingsMs) {
      opportunities.push({
        title: (audit.title as string) ?? (ref.id as string),
        savings: formatMs(audit.details.overallSavingsMs as number) + " potential savings",
      });
    }
  }

  // Resource breakdown
  let resourceBreakdown: ResourceBreakdown | null = null;
  const resourceSummary = audits["resource-summary"];
  if (resourceSummary?.details?.items) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items = resourceSummary.details.items as Array<Record<string, any>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const find = (type: string): Record<string, any> | undefined => items.find((i) => i.resourceType === type);
    const total = find("total");
    const script = find("script");
    const stylesheet = find("stylesheet");
    const image = find("image");
    const font = find("font");
    const thirdParty = find("third-party");
    const jsB = (script?.transferSize as number) ?? 0;
    const cssB = (stylesheet?.transferSize as number) ?? 0;
    const imgB = (image?.transferSize as number) ?? 0;
    const fontB = (font?.transferSize as number) ?? 0;
    const totalB = (total?.transferSize as number) ?? 0;
    resourceBreakdown = {
      totalBytes: totalB,
      totalRequests: (total?.requestCount as number) ?? 0,
      jsBytes: jsB,
      cssBytes: cssB,
      imageBytes: imgB,
      fontBytes: fontB,
      otherBytes: Math.max(0, totalB - jsB - cssB - imgB - fontB),
      thirdPartyBytes: (thirdParty?.transferSize as number) ?? 0,
    };
  }

  return { performanceScore, coreWebVitals, fieldData, lcpElement, opportunities, resourceBreakdown };
}

/* ------------------------------------------------------------------ */
/*  Shopify detection                                                  */
/* ------------------------------------------------------------------ */

function detectShopify(html: string, headers: Headers): boolean {
  if (html.includes("Shopify.theme")) return true;
  if (html.includes("cdn.shopify.com")) return true;
  if (/content=["'][^"']*Shopify/i.test(html)) return true;
  if (headers.get("x-shopify-stage") !== null) return true;
  if (headers.get("x-sorting-hat-shopid") !== null) return true;
  if (html.includes("shopify-section")) return true;
  if (html.includes("myshopify.com")) return true;
  return false;
}

function detectTheme(html: string): string | null {
  const m = html.match(/Shopify\.theme\s*=\s*\{[^}]*"name"\s*:\s*"([^"]+)"/);
  if (m) return m[1];
  const m2 = html.match(/data-theme-name=["']([^"']+)["']/i);
  if (m2) return m2[1];
  return null;
}

/* ------------------------------------------------------------------ */
/*  JSON-LD extraction                                                 */
/* ------------------------------------------------------------------ */

function extractJsonLd(html: string): Record<string, unknown>[] {
  const results: Record<string, unknown>[] = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(m[1]) as unknown;
      if (Array.isArray(parsed)) results.push(...(parsed as Record<string, unknown>[]));
      else results.push(parsed as Record<string, unknown>);
    } catch { /* skip malformed */ }
  }
  return results;
}

/* ================================================================== */
/*  CATEGORY 1: Meta Tags & On-Page (weight: 14%)                     */
/* ================================================================== */

function checkMeta(html: string, pageUrl: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  // Title tag
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    checks.push({ label: "Title tag", status: "fail", detail: "No title tag found.", priority: "critical", howToFix: "Add a <title> tag in the <head> section with your primary keyword and brand name (50-60 chars)." });
  } else {
    const title = titleMatch[1].trim();
    const len = title.length;
    if (len > 65) checks.push({ label: "Title tag", status: "warning", detail: `Title may be truncated (${len} chars): "${title.slice(0, 60)}..."`, priority: "high", howToFix: "Shorten your title to 50-60 characters. Put the most important keywords first." });
    else if (len < 30) checks.push({ label: "Title tag", status: "warning", detail: `Title is too short (${len} chars). Aim for 50-60 characters.`, priority: "medium", howToFix: "Expand your title with relevant keywords and a brand name suffix." });
    else checks.push({ label: "Title tag", status: "pass", detail: `Title is well-optimized (${len} chars): "${title}"` });
  }

  // Meta description
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    checks.push({ label: "Meta description", status: "fail", detail: "No meta description found. Search engines will auto-generate a snippet.", priority: "critical", howToFix: "Add a compelling meta description (150-160 chars) with your primary keyword and a call-to-action." });
  } else {
    const len = descMatch[1].trim().length;
    if (len > 165) checks.push({ label: "Meta description", status: "warning", detail: `Meta description may be truncated (${len} chars). Keep under 160.`, priority: "medium", howToFix: "Shorten your meta description to 150-160 characters. Include your value proposition." });
    else if (len < 70) checks.push({ label: "Meta description", status: "warning", detail: `Meta description is too short (${len} chars). Aim for 150-160 characters.`, priority: "medium", howToFix: "Expand your meta description with more detail about what the page offers." });
    else checks.push({ label: "Meta description", status: "pass", detail: `Meta description is well-optimized (${len} chars).` });
  }

  // H1 tag
  const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1s || h1s.length === 0) {
    checks.push({ label: "H1 tag", status: "fail", detail: "No H1 tag found.", priority: "critical", howToFix: "Add a single H1 tag that describes the page's main topic. Include your primary keyword." });
  } else if (h1s.length > 1) {
    checks.push({ label: "H1 tag", status: "warning", detail: `Multiple H1 tags found (${h1s.length}). Use a single H1 per page.`, priority: "high", howToFix: "Keep only one H1 tag per page. Use H2-H6 for subheadings." });
  } else {
    const text = h1s[0].replace(/<[^>]+>/g, "").trim();
    if (!text) checks.push({ label: "H1 tag", status: "warning", detail: "H1 tag exists but is empty.", priority: "high", howToFix: "Add descriptive text to your H1 tag with your primary keyword." });
    else checks.push({ label: "H1 tag", status: "pass", detail: `Single H1 found: "${text.slice(0, 80)}${text.length > 80 ? "..." : ""}"` });
  }

  // Canonical tag
  const canMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (!canMatch) {
    checks.push({ label: "Canonical tag", status: "fail", detail: "No canonical tag found. This can cause duplicate content issues.", priority: "critical", howToFix: "Add <link rel='canonical' href='...'> pointing to the preferred URL for this page." });
  } else {
    try {
      const canonUrl = new URL(canMatch[1].trim());
      const reqUrl = new URL(pageUrl);
      if (canonUrl.pathname === reqUrl.pathname && canonUrl.hostname === reqUrl.hostname) {
        checks.push({ label: "Canonical tag", status: "pass", detail: "Self-referencing canonical properly set." });
      } else {
        checks.push({ label: "Canonical tag", status: "warning", detail: `Canonical points to different URL: ${canMatch[1]}. Verify this is intentional.`, priority: "medium" });
      }
    } catch {
      checks.push({ label: "Canonical tag", status: "warning", detail: `Canonical URL may be malformed: ${canMatch[1]}`, priority: "medium" });
    }
  }

  // Meta robots
  const robotsMatch = html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["']/i);
  if (robotsMatch) {
    const content = robotsMatch[1].toLowerCase();
    if (content.includes("noindex")) {
      checks.push({ label: "Meta robots", status: "fail", detail: "Page is set to noindex. It will NOT appear in search results.", priority: "critical", howToFix: "Remove noindex from meta robots unless you intentionally want to hide this page from search." });
    } else if (content.includes("nofollow")) {
      checks.push({ label: "Meta robots", status: "warning", detail: "Page has nofollow. Links won't pass SEO value.", priority: "high" });
    } else {
      checks.push({ label: "Meta robots", status: "pass", detail: `Meta robots: "${robotsMatch[1]}" — page is indexable.` });
    }
  } else {
    checks.push({ label: "Meta robots", status: "pass", detail: "No meta robots tag (defaults to index, follow)." });
  }

  // Heading hierarchy
  const headings = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)];
  if (headings.length > 0) {
    const levels = headings.map(h => parseInt(h[1][1]));
    let skipped = false;
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] > levels[i - 1] + 1) { skipped = true; break; }
    }
    if (skipped) {
      checks.push({ label: "Heading hierarchy", status: "warning", detail: "Heading levels are skipped (e.g., H1 to H3). Use H1 → H2 → H3 order.", priority: "medium", howToFix: "Restructure your headings to follow a logical hierarchy without skipping levels." });
    } else {
      checks.push({ label: "Heading hierarchy", status: "pass", detail: `${headings.length} headings in proper hierarchy.` });
    }
  }

  // HTML lang attribute
  const langMatch = html.match(/<html[^>]+lang=["']([^"']+)["']/i);
  if (!langMatch) {
    checks.push({ label: "HTML lang attribute", status: "warning", detail: "No lang attribute on <html>. Set the language for accessibility and SEO.", priority: "medium", howToFix: "Add lang='en' (or your language) to the <html> element." });
  } else {
    checks.push({ label: "HTML lang attribute", status: "pass", detail: `Language set to "${langMatch[1]}".` });
  }

  // Favicon
  const hasFavicon = /<link[^>]+rel=["'](icon|shortcut icon|apple-touch-icon)["']/i.test(html);
  if (!hasFavicon) {
    checks.push({ label: "Favicon", status: "warning", detail: "No favicon detected. Add one for branding and browser tab recognition.", priority: "low", howToFix: "Add <link rel='icon' href='/favicon.ico'> in your theme's <head>." });
  } else {
    checks.push({ label: "Favicon", status: "pass", detail: "Favicon is configured." });
  }

  // URL structure check
  try {
    const parsed = new URL(pageUrl);
    const path = parsed.pathname;
    const hasUglyParams = parsed.search.length > 50 || /[&?](utm_|gclid|fbclid|ref=)/i.test(parsed.search);
    const hasCleanSlug = /^\/[a-z0-9\-\/]*$/i.test(path) && path.length < 120;
    if (hasUglyParams) {
      checks.push({ label: "URL structure", status: "warning", detail: `URL has tracking or excessive parameters: ${parsed.search.slice(0, 60)}`, priority: "medium", howToFix: "Use canonical tags to point to clean URLs. Strip tracking parameters from canonical URLs." });
    } else if (!hasCleanSlug && path !== "/") {
      checks.push({ label: "URL structure", status: "warning", detail: `URL slug contains uppercase, underscores, or special characters: ${path.slice(0, 80)}`, priority: "low", howToFix: "Use lowercase, hyphen-separated slugs (e.g., /collections/summer-sale) for better SEO." });
    } else {
      checks.push({ label: "URL structure", status: "pass", detail: `Clean, descriptive URL structure: ${path}` });
    }
  } catch {
    // skip if URL can't be parsed
  }

  // Meta viewport content validation
  const viewportMatch = html.match(/<meta[^>]+name=["']viewport["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']viewport["']/i);
  if (viewportMatch) {
    const vpContent = viewportMatch[1].toLowerCase();
    const hasWidth = vpContent.includes("width=device-width");
    const hasInitialScale = /initial-scale\s*=\s*1/i.test(vpContent);
    if (hasWidth && hasInitialScale) {
      checks.push({ label: "Viewport content", status: "pass", detail: "Viewport properly set to width=device-width, initial-scale=1." });
    } else {
      const missing = [];
      if (!hasWidth) missing.push("width=device-width");
      if (!hasInitialScale) missing.push("initial-scale=1");
      checks.push({ label: "Viewport content", status: "warning", detail: `Viewport meta tag missing: ${missing.join(", ")}.`, priority: "medium", howToFix: "Set viewport content to 'width=device-width, initial-scale=1' for proper mobile rendering." });
    }
  }

  // Duplicate meta tag detection
  const descTags = [...html.matchAll(/<meta[^>]+name=["']description["']/gi)].length;
  const titleTags = [...html.matchAll(/<title[^>]*>/gi)].length;
  if (descTags > 1) {
    checks.push({ label: "Duplicate meta description", status: "warning", detail: `Found ${descTags} meta description tags. Only the first will be used.`, priority: "high", howToFix: "Remove duplicate meta description tags. Keep only one in your theme's <head>." });
  }
  if (titleTags > 1) {
    checks.push({ label: "Duplicate title tag", status: "warning", detail: `Found ${titleTags} title tags. Only the first will be used.`, priority: "high", howToFix: "Remove duplicate title tags. Ensure only one <title> exists in your theme." });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 2: Shopify Technical SEO (weight: 11%)                    */
/* ================================================================== */

function checkShopifyTechnical(
  html: string,
  robotsTxt: string,
  sitemapText: string,
  collectionsAllOk: boolean,
  collectionsFrontpageOk: boolean,
  storeHost: string,
  shopifyTheme: string | null
): AuditCheck[] {
  const checks: AuditCheck[] = [];

  // Theme detection
  checks.push({
    label: "Shopify platform",
    status: "pass",
    detail: shopifyTheme ? `Shopify detected — Theme: "${shopifyTheme}"` : "Shopify detected.",
  });

  // Theme OS 2.0 detection
  const hasSectionClasses = /class=["'][^"']*section-[a-z]/i.test(html);
  const hasJsonTemplates = /data-template-type/i.test(html) || /class=["'][^"']*template-/i.test(html);
  const hasSectionEverywhere = /shopify-section--/i.test(html);
  const isOs2 = hasSectionClasses || hasJsonTemplates || hasSectionEverywhere;
  if (isOs2) {
    checks.push({ label: "Theme OS 2.0", status: "pass", detail: "Online Store 2.0 theme detected — supports sections everywhere and JSON templates." });
  } else {
    checks.push({ label: "Theme OS 2.0", status: "warning", detail: "Theme may not be OS 2.0. Consider upgrading for sections everywhere, app blocks, and better performance.", priority: "medium", howToFix: "Migrate to an Online Store 2.0 theme (Dawn, Refresh, etc.) for better flexibility and performance." });
  }

  // Robots.txt
  if (!robotsTxt) {
    checks.push({ label: "Robots.txt", status: "fail", detail: "Could not fetch robots.txt.", priority: "critical", howToFix: "Ensure robots.txt is accessible at /robots.txt. Shopify generates this automatically." });
  } else {
    const hasAdmin = robotsTxt.includes("/admin");
    const hasCart = robotsTxt.includes("/cart");
    const hasCheckout = robotsTxt.includes("/checkout");
    const hasSearch = /Disallow:\s*\/search/im.test(robotsTxt);
    const hasSitemap = /Sitemap:/i.test(robotsTxt);

    if (hasAdmin && hasCart && hasCheckout) {
      checks.push({ label: "Robots.txt basics", status: "pass", detail: "Correctly blocks /admin, /cart, /checkout." });
    } else {
      const missing = [];
      if (!hasAdmin) missing.push("/admin");
      if (!hasCart) missing.push("/cart");
      if (!hasCheckout) missing.push("/checkout");
      checks.push({ label: "Robots.txt basics", status: "warning", detail: `Missing blocks for: ${missing.join(", ")}.`, priority: "high", howToFix: "Edit your Shopify robots.txt.liquid to disallow these paths." });
    }

    if (!hasSearch) {
      checks.push({ label: "Search page blocked", status: "warning", detail: "Internal search (/search) is not blocked — can cause thin content indexing.", priority: "high", howToFix: "Add 'Disallow: /search' to robots.txt to prevent indexing of search result pages." });
    } else {
      checks.push({ label: "Search page blocked", status: "pass", detail: "Internal search pages are blocked." });
    }

    if (!hasSitemap) {
      checks.push({ label: "Sitemap in robots.txt", status: "warning", detail: "No Sitemap directive in robots.txt.", priority: "medium", howToFix: "Add 'Sitemap: https://yourstore.com/sitemap.xml' to robots.txt." });
    } else {
      checks.push({ label: "Sitemap in robots.txt", status: "pass", detail: "Sitemap directive found." });
    }

    const hasFilterRules = /Disallow:\s*\/collections\/.*[?&]/im.test(robotsTxt) || /Disallow:\s*\/\*[?&]/im.test(robotsTxt);
    if (!hasFilterRules) {
      checks.push({ label: "Robots.txt optimization", status: "warning", detail: "Default Shopify robots.txt. Add rules for filter URLs (/collections/*?filter) to prevent crawl waste.", priority: "medium", howToFix: "Customize robots.txt.liquid to block URL parameters like ?sort_by, ?filter, etc." });
    } else {
      checks.push({ label: "Robots.txt optimization", status: "pass", detail: "Custom rules detected for URL parameters." });
    }
  }

  // Sitemap
  if (!sitemapText) {
    checks.push({ label: "XML Sitemap", status: "fail", detail: "Could not fetch /sitemap.xml.", priority: "critical", howToFix: "Shopify auto-generates sitemaps. Ensure /sitemap.xml is accessible." });
  } else {
    const sitemapIndexCount = (sitemapText.match(/<sitemap>/gi) || []).length;
    const urlCount = (sitemapText.match(/<url>/gi) || []).length;
    if (sitemapIndexCount > 0) {
      const hasProducts = /sitemap_products/i.test(sitemapText);
      const hasCollections = /sitemap_collections/i.test(sitemapText);
      const hasPages = /sitemap_pages/i.test(sitemapText);
      const types = [hasProducts && "products", hasCollections && "collections", hasPages && "pages"].filter(Boolean);
      checks.push({ label: "XML Sitemap", status: "pass", detail: `Sitemap index with ${sitemapIndexCount} sub-sitemaps (${types.join(", ")}).` });
    } else if (urlCount > 0) {
      checks.push({ label: "XML Sitemap", status: "pass", detail: `Sitemap found with ${urlCount} URLs.` });
    } else {
      checks.push({ label: "XML Sitemap", status: "warning", detail: "Sitemap found but appears empty.", priority: "high" });
    }

    const hasLastmod = /<lastmod>/i.test(sitemapText);
    checks.push({ label: "Sitemap lastmod dates", status: hasLastmod ? "pass" : "warning", detail: hasLastmod ? "Sitemap includes lastmod dates." : "Sitemap missing lastmod dates — add them to help crawl prioritization.", ...(hasLastmod ? {} : { priority: "low" as const }) });
  }

  // Collections
  if (collectionsAllOk) {
    checks.push({ label: "/collections/all", status: "warning", detail: "/collections/all is publicly accessible. This auto-generated page is often thin content.", priority: "medium", howToFix: "Redirect /collections/all to your main collections page, or add a noindex meta tag." });
  } else {
    checks.push({ label: "/collections/all", status: "pass", detail: "/collections/all is not publicly accessible." });
  }

  if (collectionsFrontpageOk) {
    checks.push({ label: "/collections/frontpage", status: "warning", detail: "/collections/frontpage is publicly accessible — often thin content.", priority: "medium", howToFix: "Redirect /collections/frontpage or add noindex." });
  } else {
    checks.push({ label: "/collections/frontpage", status: "pass", detail: "/collections/frontpage is not public." });
  }

  // Pagination
  const hasRelNext = /<link[^>]+rel=["']next["']/i.test(html);
  const hasPagination = /\?page=\d/i.test(html) || /class=["'][^"']*pagination/i.test(html);
  if (hasPagination && !hasRelNext) {
    checks.push({ label: "Collection pagination", status: "warning", detail: "Pagination detected but no rel=next/prev tags.", priority: "medium", howToFix: "Add rel=next/prev tags in your collection template for paginated pages." });
  } else {
    checks.push({ label: "Collection pagination", status: "pass", detail: hasRelNext ? "Pagination rel=next/prev tags found." : "No pagination detected." });
  }

  // Variant URLs
  const variantLinks = (html.match(/\?variant=\d+/gi) || []).length;
  const hasCanonical = /<link[^>]+rel=["']canonical["']/i.test(html);
  if (variantLinks > 0 && !hasCanonical) {
    checks.push({ label: "Product variant URLs", status: "fail", detail: `${variantLinks} variant URLs without canonical tag — duplicate content risk.`, priority: "high", howToFix: "Ensure product pages have a canonical tag pointing to the main product URL (without ?variant=)." });
  } else if (variantLinks > 0) {
    checks.push({ label: "Product variant URLs", status: "pass", detail: `${variantLinks} variant URLs with canonical in place.` });
  }

  // Preconnect hints
  const hasPreconnectShopify = /<link[^>]+rel=["']preconnect["'][^>]*cdn\.shopify\.com/i.test(html);
  if (!hasPreconnectShopify) {
    checks.push({ label: "CDN preconnect", status: "warning", detail: "Missing preconnect hint for cdn.shopify.com.", priority: "low", howToFix: "Add <link rel='preconnect' href='https://cdn.shopify.com'> in <head> to speed up asset loading." });
  } else {
    checks.push({ label: "CDN preconnect", status: "pass", detail: "Preconnect to Shopify CDN is configured." });
  }

  // Shopify app count estimate
  const scriptSrcs = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  const appDomains = new Set<string>();
  for (const src of scriptSrcs) {
    try {
      const u = new URL(src, `https://${storeHost}`);
      if (u.hostname !== storeHost && !u.hostname.includes("cdn.shopify.com") && !u.hostname.includes("shopify.com")) {
        appDomains.add(u.hostname);
      }
    } catch { /* skip */ }
  }
  const appCount = appDomains.size;
  if (appCount > 8) {
    checks.push({ label: "Shopify app count (estimated)", status: "fail", detail: `~${appCount} third-party app domains detected. Excessive apps degrade performance.`, priority: "critical", howToFix: "Audit installed apps in Shopify Admin. Remove any app you're not actively using — each adds JS overhead." });
  } else if (appCount > 4) {
    checks.push({ label: "Shopify app count (estimated)", status: "warning", detail: `~${appCount} third-party app domains detected. Review for unused apps.`, priority: "high", howToFix: "Go to Shopify Admin → Apps and uninstall apps you no longer need." });
  } else {
    checks.push({ label: "Shopify app count (estimated)", status: "pass", detail: `~${appCount} third-party app domains — reasonable.` });
  }

  // URL parameter handling
  const hasSortBy = /[?&]sort_by=/i.test(html);
  const hasVariantParam = /[?&]variant=/i.test(html);
  const hasFilterParam = /[?&]filter\./i.test(html) || /[?&]q=/i.test(html);
  const paramIssues: string[] = [];
  if (hasSortBy) paramIssues.push("?sort_by=");
  if (hasVariantParam && !hasCanonical) paramIssues.push("?variant= (no canonical)");
  if (hasFilterParam) paramIssues.push("?filter/q=");
  if (paramIssues.length > 0) {
    checks.push({ label: "URL parameter handling", status: "warning", detail: `Crawlable parameter URLs found: ${paramIssues.join(", ")}. These can cause crawl waste.`, priority: "medium", howToFix: "Block parameter URLs in robots.txt or add canonical tags pointing to the parameterless version." });
  } else {
    checks.push({ label: "URL parameter handling", status: "pass", detail: "No problematic URL parameters detected in page links." });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 3: Performance (weight: 15%) — PSI-powered                */
/* ================================================================== */

function checkPerformancePsi(
  html: string,
  storeHost: string,
  responseTimeMs: number,
  psiData: PsiExtracted | null
): AuditCheck[] {
  const checks: AuditCheck[] = [];
  const hasPsi = psiData !== null && psiData.performanceScore !== null;

  if (!hasPsi) {
    checks.push({ label: "PageSpeed Insights", status: "warning", detail: "PSI data unavailable (timeout or rate limit). Performance checks use HTML analysis only.", priority: "medium" });
  }

  // Lighthouse Performance Score
  if (hasPsi && psiData!.performanceScore !== null) {
    const score = psiData!.performanceScore!;
    if (score >= 90) {
      checks.push({ label: "Lighthouse Performance Score", status: "pass", detail: `Performance score: ${score}/100 — excellent.` });
    } else if (score >= 50) {
      checks.push({ label: "Lighthouse Performance Score", status: "warning", detail: `Performance score: ${score}/100 — needs improvement.`, priority: "high", howToFix: "Improve Core Web Vitals by optimizing images, reducing JS, and fixing render-blocking resources." });
    } else {
      checks.push({ label: "Lighthouse Performance Score", status: "fail", detail: `Performance score: ${score}/100 — poor.`, priority: "critical", howToFix: "Your site is significantly slow. Focus on reducing JavaScript, optimizing images, and improving server response time." });
    }
  }

  // CWV metrics from PSI
  if (hasPsi && psiData!.coreWebVitals) {
    const cwv = psiData!.coreWebVitals!;

    // LCP
    if (cwv.lcp) {
      const status = cwv.lcp.rating === "good" ? "pass" : cwv.lcp.rating === "needs-improvement" ? "warning" : "fail";
      checks.push({
        label: "Largest Contentful Paint (LCP)",
        status,
        detail: `LCP: ${cwv.lcp.displayValue} (${cwv.lcp.rating}). Good ≤2.5s, Poor >4s.`,
        ...(status !== "pass" ? { priority: status === "fail" ? "critical" as const : "high" as const, howToFix: "Optimize the LCP element: compress hero images, preload critical resources, reduce server response time." } : {}),
      });
    }

    // FCP
    if (cwv.fcp) {
      const status = cwv.fcp.rating === "good" ? "pass" : cwv.fcp.rating === "needs-improvement" ? "warning" : "fail";
      checks.push({
        label: "First Contentful Paint (FCP)",
        status,
        detail: `FCP: ${cwv.fcp.displayValue} (${cwv.fcp.rating}). Good ≤1.8s, Poor >3s.`,
        ...(status !== "pass" ? { priority: status === "fail" ? "critical" as const : "high" as const, howToFix: "Remove render-blocking resources, inline critical CSS, and preconnect to required origins." } : {}),
      });
    }

    // CLS
    if (cwv.cls) {
      const status = cwv.cls.rating === "good" ? "pass" : cwv.cls.rating === "needs-improvement" ? "warning" : "fail";
      checks.push({
        label: "Cumulative Layout Shift (CLS)",
        status,
        detail: `CLS: ${cwv.cls.displayValue} (${cwv.cls.rating}). Good ≤0.1, Poor >0.25.`,
        ...(status !== "pass" ? { priority: status === "fail" ? "critical" as const : "high" as const, howToFix: "Set explicit width/height on images and videos. Avoid inserting content above existing content." } : {}),
      });
    }

    // TBT
    if (cwv.tbt) {
      const status = cwv.tbt.rating === "good" ? "pass" : cwv.tbt.rating === "needs-improvement" ? "warning" : "fail";
      checks.push({
        label: "Total Blocking Time (TBT)",
        status,
        detail: `TBT: ${cwv.tbt.displayValue} (${cwv.tbt.rating}). Good ≤200ms, Poor >600ms.`,
        ...(status !== "pass" ? { priority: status === "fail" ? "critical" as const : "high" as const, howToFix: "Reduce JavaScript execution time. Split long tasks, defer non-critical JS, and remove unused code." } : {}),
      });
    }

    // Speed Index
    if (cwv.si) {
      const status = cwv.si.rating === "good" ? "pass" : cwv.si.rating === "needs-improvement" ? "warning" : "fail";
      checks.push({
        label: "Speed Index",
        status,
        detail: `Speed Index: ${cwv.si.displayValue} (${cwv.si.rating}). Good ≤3.4s, Poor >5.8s.`,
        ...(status !== "pass" ? { priority: status === "fail" ? "high" as const : "medium" as const, howToFix: "Improve how quickly content is visually rendered. Optimize critical rendering path." } : {}),
      });
    }

    // TTFB from PSI
    if (cwv.ttfb) {
      const status = cwv.ttfb.rating === "good" ? "pass" : cwv.ttfb.rating === "needs-improvement" ? "warning" : "fail";
      checks.push({
        label: "Time to First Byte (TTFB)",
        status,
        detail: `TTFB: ${cwv.ttfb.displayValue} (${cwv.ttfb.rating}). Good ≤800ms, Poor >1800ms.`,
        ...(status !== "pass" ? { priority: status === "fail" ? "critical" as const : "high" as const, howToFix: "Reduce server response time. Minimize Liquid template complexity, reduce installed apps, and leverage Shopify CDN." } : {}),
      });
    }
  } else {
    // Fallback TTFB from our own fetch
    if (responseTimeMs > 3000) {
      checks.push({ label: "Server response time (TTFB)", status: "fail", detail: `Response time is ${(responseTimeMs / 1000).toFixed(1)}s — very slow.`, priority: "critical", howToFix: "Reduce server response time. Use Shopify's CDN, minimize app redirects, and reduce liquid template complexity." });
    } else if (responseTimeMs > 1000) {
      checks.push({ label: "Server response time (TTFB)", status: "warning", detail: `Response time is ${(responseTimeMs / 1000).toFixed(1)}s. Aim for under 1s.`, priority: "high", howToFix: "Optimize Liquid templates and reduce installed apps to lower TTFB." });
    } else {
      checks.push({ label: "Server response time (TTFB)", status: "pass", detail: `Response time is ${(responseTimeMs / 1000).toFixed(1)}s — good.` });
    }
  }

  // CrUX field data summary
  if (hasPsi && psiData!.fieldData) {
    const fd = psiData!.fieldData!;
    const fieldMetrics: string[] = [];
    if (fd.lcp) fieldMetrics.push(`LCP ${fd.lcp.displayValue}`);
    if (fd.inp) fieldMetrics.push(`INP ${fd.inp.displayValue}`);
    if (fd.cls) fieldMetrics.push(`CLS ${fd.cls.displayValue}`);
    if (fd.fcp) fieldMetrics.push(`FCP ${fd.fcp.displayValue}`);
    if (fd.ttfb) fieldMetrics.push(`TTFB ${fd.ttfb.displayValue}`);
    const poorCount = [fd.lcp, fd.inp, fd.cls, fd.fcp, fd.ttfb].filter(m => m?.rating === "poor").length;
    if (poorCount > 0) {
      checks.push({ label: "CrUX field data", status: "warning", detail: `Real-user data: ${fieldMetrics.join(", ")}. ${poorCount} metric(s) rated poor.`, priority: "high", howToFix: "Focus on improving the poor field metrics — these reflect actual user experience." });
    } else {
      checks.push({ label: "CrUX field data", status: "pass", detail: `Real-user data available: ${fieldMetrics.join(", ")}.` });
    }
  }

  // LCP element identification
  if (hasPsi && psiData!.lcpElement) {
    checks.push({ label: "LCP element", status: "pass", detail: `LCP element: ${psiData!.lcpElement.slice(0, 120)}` });
  }

  // Resource total weight
  if (hasPsi && psiData!.resourceBreakdown) {
    const rb = psiData!.resourceBreakdown!;
    if (rb.totalBytes > 5 * 1048576) {
      checks.push({ label: "Total page weight", status: "fail", detail: `Total page weight: ${formatBytes(rb.totalBytes)} (${rb.totalRequests} requests) — very heavy.`, priority: "critical", howToFix: "Reduce total page weight below 3MB. Compress images, remove unused CSS/JS, and minimize third-party resources." });
    } else if (rb.totalBytes > 3 * 1048576) {
      checks.push({ label: "Total page weight", status: "warning", detail: `Total page weight: ${formatBytes(rb.totalBytes)} (${rb.totalRequests} requests). Aim for under 3MB.`, priority: "high", howToFix: "Optimize images, defer non-critical scripts, and audit third-party resources." });
    } else {
      checks.push({ label: "Total page weight", status: "pass", detail: `Total page weight: ${formatBytes(rb.totalBytes)} (${rb.totalRequests} requests) — good.` });
    }

    // JS transfer size
    if (rb.jsBytes > 1.5 * 1048576) {
      checks.push({ label: "JavaScript transfer size", status: "fail", detail: `JavaScript: ${formatBytes(rb.jsBytes)} — excessive JS payload.`, priority: "critical", howToFix: "Remove unused Shopify apps, code-split large bundles, and defer non-critical scripts." });
    } else if (rb.jsBytes > 800 * 1024) {
      checks.push({ label: "JavaScript transfer size", status: "warning", detail: `JavaScript: ${formatBytes(rb.jsBytes)}. Aim for under 800KB.`, priority: "high", howToFix: "Audit Shopify apps and remove unused ones. Each app adds significant JavaScript overhead." });
    } else {
      checks.push({ label: "JavaScript transfer size", status: "pass", detail: `JavaScript: ${formatBytes(rb.jsBytes)} — acceptable.` });
    }

    // Third-party size + percentage
    if (rb.thirdPartyBytes > 0 && rb.totalBytes > 0) {
      const tpPct = Math.round((rb.thirdPartyBytes / rb.totalBytes) * 100);
      if (rb.thirdPartyBytes > 1 * 1048576 || tpPct > 60) {
        checks.push({ label: "Third-party transfer size", status: "fail", detail: `Third-party resources: ${formatBytes(rb.thirdPartyBytes)} (${tpPct}% of total) — dominates page weight.`, priority: "critical", howToFix: "Reduce third-party scripts. Remove unused apps and load remaining ones asynchronously." });
      } else if (rb.thirdPartyBytes > 500 * 1024 || tpPct > 40) {
        checks.push({ label: "Third-party transfer size", status: "warning", detail: `Third-party resources: ${formatBytes(rb.thirdPartyBytes)} (${tpPct}% of total).`, priority: "high", howToFix: "Review third-party scripts for necessity. Lazy-load non-critical third-party resources." });
      } else {
        checks.push({ label: "Third-party transfer size", status: "pass", detail: `Third-party resources: ${formatBytes(rb.thirdPartyBytes)} (${tpPct}% of total).` });
      }
    }
  }

  // DOM size estimation (kept from original)
  const tagCount = (html.match(/<[a-z][^>]*>/gi) || []).length;
  if (tagCount > 2000) {
    checks.push({ label: "DOM size", status: "fail", detail: `Estimated ${tagCount} DOM nodes — too large (recommended: <800).`, priority: "high", howToFix: "Simplify your theme templates. Remove unused sections and reduce nesting depth." });
  } else if (tagCount > 1000) {
    checks.push({ label: "DOM size", status: "warning", detail: `Estimated ${tagCount} DOM nodes. Consider simplifying.`, priority: "medium" });
  } else {
    checks.push({ label: "DOM size", status: "pass", detail: `Estimated ${tagCount} DOM nodes — reasonable.` });
  }

  // External JS count (kept)
  const scripts = html.match(/<script[^>]+src=["'][^"']+["']/gi) || [];
  const jsCount = scripts.length;
  if (jsCount > 25) {
    checks.push({ label: "External JavaScript files", status: "fail", detail: `${jsCount} external JS files — excessive. Audit your Shopify apps.`, priority: "critical", howToFix: "Remove unused Shopify apps. Each app adds JavaScript that slows your store." });
  } else if (jsCount > 15) {
    checks.push({ label: "External JavaScript files", status: "warning", detail: `${jsCount} external JS files. Consider removing unused apps.`, priority: "high" });
  } else {
    checks.push({ label: "External JavaScript files", status: "pass", detail: `${jsCount} external JS files — reasonable.` });
  }

  // Third-party script domains analysis (kept)
  const scriptSrcs = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  const thirdParty = scriptSrcs.filter(src => {
    try {
      const u = new URL(src, `https://${storeHost}`);
      return u.hostname !== storeHost && !u.hostname.includes("cdn.shopify.com") && !u.hostname.includes("shopify.com");
    } catch { return false; }
  });
  const tpCount = thirdParty.length;
  const domainCounts: Record<string, number> = {};
  for (const src of thirdParty) {
    try { const h = new URL(src, `https://${storeHost}`).hostname; domainCounts[h] = (domainCounts[h] || 0) + 1; } catch { /* skip */ }
  }
  const topDomains = Object.entries(domainCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  if (topDomains.length > 0) {
    checks.push({ label: "App script sources", status: tpCount > 8 ? "warning" : "pass", detail: `Top script domains: ${topDomains.map(([d, c]) => `${d} (${c})`).join(", ")}`, ...(tpCount > 8 ? { priority: "medium" as const } : {}) });
  }

  // Render-blocking resources (kept)
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
    const head = headMatch[1];
    const blockingCSS = (head.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || []).filter(
      tag => !/media=["']print["']/i.test(tag) && !/media=["']none["']/i.test(tag)
    ).length;
    const blockingJS = (head.match(/<script[^>]+src=["'][^"']+["'][^>]*>/gi) || []).filter(
      tag => !/async/i.test(tag) && !/defer/i.test(tag) && !/type=["']module["']/i.test(tag)
    ).length;
    const total = blockingCSS + blockingJS;
    if (total > 10) {
      checks.push({ label: "Render-blocking resources", status: "fail", detail: `${total} render-blocking resources (${blockingCSS} CSS, ${blockingJS} JS) in <head>.`, priority: "high", howToFix: "Defer non-critical CSS with media='print' onload hack. Add async/defer to scripts." });
    } else if (total > 5) {
      checks.push({ label: "Render-blocking resources", status: "warning", detail: `${total} render-blocking resources (${blockingCSS} CSS, ${blockingJS} JS).`, priority: "medium" });
    } else {
      checks.push({ label: "Render-blocking resources", status: "pass", detail: `${total} render-blocking resources — acceptable.` });
    }
  }

  // Inline CSS size (kept)
  const inlineStyles = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  const inlineCssKB = Math.round(inlineStyles.reduce((sum, s) => sum + s.length, 0) / 1024);
  if (inlineCssKB > 50) {
    checks.push({ label: "Inline CSS size", status: "warning", detail: `${inlineCssKB}KB of inline CSS. Consider extracting to external stylesheets for caching.`, priority: "medium", howToFix: "Move large inline <style> blocks to external CSS files that can be cached by the browser." });
  } else {
    checks.push({ label: "Inline CSS size", status: "pass", detail: `${inlineCssKB}KB inline CSS — acceptable.` });
  }

  // Image format WebP check
  const allImgs = html.match(/<img[^>]+src=["'][^"']+["']/gi) || [];
  const webpCount = allImgs.filter(img => /\.webp/i.test(img) || /format=webp/i.test(img) || /format%3Dwebp/i.test(img)).length;
  const totalImgs = allImgs.length;
  if (totalImgs > 0) {
    const pct = Math.round((webpCount / totalImgs) * 100);
    if (pct < 50) {
      checks.push({ label: "Image format (WebP)", status: "warning", detail: `Only ${webpCount}/${totalImgs} images use WebP (${pct}%).`, priority: "medium", howToFix: "Shopify CDN supports WebP. Ensure your theme uses .webp format or Shopify's image_url filter with format:'webp'." });
    } else {
      checks.push({ label: "Image format (WebP)", status: "pass", detail: `${webpCount}/${totalImgs} images use WebP (${pct}%).` });
    }
  }

  // Image lazy loading check
  const lazyCount = (html.match(/loading=["']lazy["']/gi) || []).length;
  if (totalImgs > 3 && lazyCount < totalImgs / 2) {
    checks.push({ label: "Image lazy loading", status: "warning", detail: `Only ${lazyCount}/${totalImgs} images use lazy loading.`, priority: "medium", howToFix: "Add loading='lazy' to below-the-fold images. Don't lazy-load the hero/LCP image." });
  } else {
    checks.push({ label: "Image lazy loading", status: "pass", detail: `${lazyCount}/${totalImgs} images use lazy loading.` });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 4: Structured Data (weight: 8%)                           */
/* ================================================================== */

function checkStructuredData(jsonLd: Record<string, unknown>[], html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  // JSON-LD syntax validation — check for malformed blocks
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let malformedCount = 0;
  for (const block of jsonLdBlocks) {
    try { JSON.parse(block[1]); } catch { malformedCount++; }
  }
  if (malformedCount > 0) {
    checks.push({ label: "JSON-LD syntax validation", status: "fail", detail: `${malformedCount} JSON-LD block(s) have invalid JSON syntax.`, priority: "critical", howToFix: "Fix the malformed JSON-LD. Use Google's Rich Results Test to validate your structured data." });
  } else if (jsonLdBlocks.length > 0) {
    checks.push({ label: "JSON-LD syntax validation", status: "pass", detail: `${jsonLdBlocks.length} JSON-LD block(s) all have valid syntax.` });
  }

  if (jsonLd.length === 0) {
    checks.push({ label: "JSON-LD presence", status: "warning", detail: "No JSON-LD structured data found.", priority: "high", howToFix: "Add JSON-LD structured data for Product, Organization, and BreadcrumbList schemas." });
  } else {
    checks.push({ label: "JSON-LD presence", status: "pass", detail: `${jsonLd.length} JSON-LD block(s) found.` });
  }

  // Product schema — rich result eligibility
  const product = jsonLd.find(item => item["@type"] === "Product");
  if (!product) {
    checks.push({ label: "Product schema", status: "warning", detail: "No Product schema found. Expected on product pages for rich results.", priority: "high", howToFix: "Add Product schema with name, image, description, price, availability. Most Shopify themes include this." });
  } else {
    // Google-required fields for rich results: name, image, offers.price, offers.priceCurrency, offers.availability
    const offers = product.offers as Record<string, unknown> | Record<string, unknown>[] | undefined;
    const singleOffer = Array.isArray(offers) ? undefined : offers;
    const firstOffer = Array.isArray(offers) ? (offers[0] as Record<string, unknown> | undefined) : undefined;
    const activeOffer = singleOffer ?? firstOffer;

    const richResultMissing: string[] = [];
    if (!product.name) richResultMissing.push("name");
    if (!product.image) richResultMissing.push("image");
    if (!(activeOffer?.price || activeOffer?.lowPrice)) richResultMissing.push("offers.price");
    if (!activeOffer?.priceCurrency) richResultMissing.push("offers.priceCurrency");
    if (!activeOffer?.availability) richResultMissing.push("offers.availability");

    if (richResultMissing.length === 0) {
      checks.push({ label: "Product rich result eligibility", status: "pass", detail: "Product schema has all Google-required fields: name, image, price, currency, availability." });
    } else {
      checks.push({ label: "Product rich result eligibility", status: "warning", detail: `Product schema missing required fields for rich results: ${richResultMissing.join(", ")}.`, priority: "high", howToFix: `Add the missing fields (${richResultMissing.join(", ")}) to your Product JSON-LD for Google rich result eligibility.` });
    }

    // Merchant listing check (brand + GTIN/MPN/SKU)
    const hasBrand = !!product.brand;
    const hasGtin = !!(product.gtin || product.gtin13 || product.gtin12 || product.gtin8 || product.gtin14 || product.isbn);
    const hasMpn = !!product.mpn;
    const hasSku = !!product.sku;
    const hasIdentifier = hasGtin || hasMpn || hasSku;
    if (hasBrand && hasIdentifier) {
      checks.push({ label: "Product merchant listing", status: "pass", detail: "Product has brand and identifier (GTIN/MPN/SKU) — eligible for merchant listings." });
    } else {
      const missing = [];
      if (!hasBrand) missing.push("brand");
      if (!hasIdentifier) missing.push("GTIN/MPN/SKU");
      checks.push({ label: "Product merchant listing", status: "warning", detail: `Product missing ${missing.join(" and ")} for merchant listing eligibility.`, priority: "medium", howToFix: "Add brand and at least one product identifier (GTIN, MPN, or SKU) to your Product schema." });
    }

    // Offers price format validation
    if (activeOffer?.price) {
      const price = String(activeOffer.price);
      const validFormat = /^\d+(\.\d{1,2})?$/.test(price);
      if (!validFormat) {
        checks.push({ label: "Offers price format", status: "warning", detail: `Price format may be invalid: "${price}". Use numeric format like "29.99".`, priority: "medium", howToFix: "Ensure offers.price is a numeric value without currency symbols (e.g., '29.99', not '$29.99')." });
      } else {
        checks.push({ label: "Offers price format", status: "pass", detail: `Price format is valid: ${price}${activeOffer.priceCurrency ? ` ${activeOffer.priceCurrency}` : ""}.` });
      }
    }
  }

  // Multiple JSON-LD conflict detection — multiple Product schemas
  const productSchemas = jsonLd.filter(item => item["@type"] === "Product");
  if (productSchemas.length > 1) {
    checks.push({ label: "Multiple Product schemas", status: "warning", detail: `${productSchemas.length} Product JSON-LD blocks found. This may confuse search engines.`, priority: "high", howToFix: "Consolidate to a single Product JSON-LD block per page. Remove duplicates from theme and apps." });
  }

  // BreadcrumbList
  const bc = jsonLd.find(item => item["@type"] === "BreadcrumbList");
  checks.push(bc
    ? { label: "BreadcrumbList schema", status: "pass", detail: "BreadcrumbList schema found." }
    : { label: "BreadcrumbList schema", status: "warning", detail: "No BreadcrumbList schema. Add it for breadcrumb rich results.", priority: "medium", howToFix: "Add BreadcrumbList JSON-LD with itemListElement for each navigation level." }
  );

  // Organization
  const org = jsonLd.find(item => item["@type"] === "Organization" || item["@type"] === "Store");
  if (!org) {
    checks.push({ label: "Organization schema", status: "warning", detail: "No Organization schema. Add it for brand Knowledge Panel.", priority: "medium", howToFix: "Add Organization JSON-LD with name, logo, url, sameAs (social profiles), and contactPoint." });
  } else {
    const has = ["logo", "name", "url", "contactPoint", "sameAs"].filter(f => org[f]);
    const miss = ["logo", "name", "url"].filter(f => !org[f]);
    if (miss.length > 0) {
      checks.push({ label: "Organization schema", status: "warning", detail: `Organization schema missing: ${miss.join(", ")}. Has: ${has.join(", ")}.`, priority: "medium" });
    } else {
      checks.push({ label: "Organization schema", status: "pass", detail: `Organization schema with: ${has.join(", ")}.` });
    }
  }

  // AggregateRating
  const hasRating = jsonLd.some(item => item["aggregateRating"] || item["@type"] === "AggregateRating");
  checks.push(hasRating
    ? { label: "Review / AggregateRating", status: "pass", detail: "AggregateRating detected — star ratings may appear in SERPs." }
    : { label: "Review / AggregateRating", status: "warning", detail: "No review markup. Add AggregateRating for star ratings in search results.", priority: "medium", howToFix: "Use a Shopify review app (Judge.me, Loox, etc.) that outputs AggregateRating schema." }
  );

  // WebSite with SearchAction
  const website = jsonLd.find(item => item["@type"] === "WebSite");
  const hasSearchAction = website && JSON.stringify(website).includes("SearchAction");
  checks.push(hasSearchAction
    ? { label: "WebSite SearchAction", status: "pass", detail: "WebSite schema with SearchAction — sitelinks search box eligible." }
    : { label: "WebSite SearchAction", status: "warning", detail: "No WebSite schema with SearchAction. Add it for sitelinks search box.", priority: "low", howToFix: "Add WebSite JSON-LD with potentialAction SearchAction pointing to your /search endpoint." }
  );

  // FAQ schema
  const hasFaq = jsonLd.some(item => item["@type"] === "FAQPage");
  const hasFaqContent = /<(details|summary)/i.test(html) || /faq|frequently asked/i.test(html);
  if (hasFaqContent && !hasFaq) {
    checks.push({ label: "FAQ schema", status: "warning", detail: "FAQ content detected but no FAQPage schema. Add it for FAQ rich results.", priority: "medium", howToFix: "Wrap your FAQ questions in FAQPage JSON-LD with Question and acceptedAnswer pairs." });
  } else if (hasFaq) {
    checks.push({ label: "FAQ schema", status: "pass", detail: "FAQPage schema found." });
  }

  // ItemList schema for collections
  const hasItemList = jsonLd.some(item => item["@type"] === "ItemList");
  const isCollectionPage = /\/collections\//i.test(html) || /class=["'][^"']*collection/i.test(html);
  if (isCollectionPage && !hasItemList) {
    checks.push({ label: "ItemList schema", status: "warning", detail: "Collection page detected but no ItemList schema. Add it for rich carousel results.", priority: "low", howToFix: "Add ItemList JSON-LD with ListItem entries for products in the collection." });
  } else if (hasItemList) {
    checks.push({ label: "ItemList schema", status: "pass", detail: "ItemList schema found for collection/list content." });
  }

  // Microdata detection (warn to prefer JSON-LD)
  const hasMicrodata = /itemscope\s+itemtype/i.test(html);
  if (hasMicrodata && jsonLd.length > 0) {
    checks.push({ label: "Microdata vs JSON-LD", status: "warning", detail: "Both Microdata and JSON-LD detected. Prefer JSON-LD only to avoid conflicts.", priority: "low", howToFix: "Remove Microdata attributes (itemscope, itemtype, itemprop) and use JSON-LD exclusively." });
  } else if (hasMicrodata && jsonLd.length === 0) {
    checks.push({ label: "Microdata vs JSON-LD", status: "warning", detail: "Using Microdata instead of JSON-LD. Google recommends JSON-LD for structured data.", priority: "medium", howToFix: "Migrate from Microdata to JSON-LD format. JSON-LD is easier to maintain and is Google's preferred format." });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 5: Content Quality (weight: 11%)                          */
/* ================================================================== */

function checkContent(html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  const textContent = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = textContent.split(/\s+/).filter(w => w.length > 1);
  const wordCount = words.length;

  if (wordCount < 100) {
    checks.push({ label: "Word count", status: "fail", detail: `Very little content (${wordCount} words). Thin content hurts rankings.`, priority: "critical", howToFix: "Add substantive content — at least 300 words for product pages, 500+ for collection pages." });
  } else if (wordCount < 300) {
    checks.push({ label: "Word count", status: "warning", detail: `Content may be thin (${wordCount} words). Consider adding more detail.`, priority: "high", howToFix: "Expand content with product descriptions, benefits, specifications, and FAQs." });
  } else {
    checks.push({ label: "Word count", status: "pass", detail: `Page has ${wordCount} words — good content depth.` });
  }

  const textBytes = textContent.length;
  const htmlBytes = html.length;
  const ratio = Math.round((textBytes / htmlBytes) * 100);
  if (ratio < 10) {
    checks.push({ label: "Text-to-HTML ratio", status: "fail", detail: `Very low text-to-HTML ratio: ${ratio}%. Page is mostly code.`, priority: "high", howToFix: "Reduce unnecessary markup, inline scripts, and CSS. Increase visible text content." });
  } else if (ratio < 25) {
    checks.push({ label: "Text-to-HTML ratio", status: "warning", detail: `Text-to-HTML ratio: ${ratio}% (aim for 25%+).`, priority: "medium" });
  } else {
    checks.push({ label: "Text-to-HTML ratio", status: "pass", detail: `Text-to-HTML ratio: ${ratio}% — good.` });
  }

  const allLinks = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)];
  const internalLinks = allLinks.filter(m => {
    const href = m[1];
    return href.startsWith("/") || href.startsWith("#");
  }).length;
  if (internalLinks < 3) {
    checks.push({ label: "Internal links", status: "warning", detail: `Only ${internalLinks} internal links. Add more cross-links for better crawling.`, priority: "medium", howToFix: "Link to related products, collections, and blog posts from your page content." });
  } else {
    checks.push({ label: "Internal links", status: "pass", detail: `${internalLinks} internal links found — good for navigation and SEO.` });
  }

  const externalLinks = allLinks.filter(m => {
    const href = m[1];
    return /^https?:\/\//i.test(href) && !href.startsWith("#");
  }).length;
  checks.push({ label: "External links", status: "pass", detail: `${externalLinks} external links found.` });

  const linksPer100 = wordCount > 0 ? Math.round((allLinks.length / wordCount) * 10000) / 100 : 0;
  if (linksPer100 > 5) {
    checks.push({ label: "Link density", status: "warning", detail: `High link density: ${linksPer100} links per 100 words (max 5). May appear spammy.`, priority: "medium", howToFix: "Reduce the number of links or increase content to lower the link-to-text ratio." });
  } else {
    checks.push({ label: "Link density", status: "pass", detail: `Link density: ${linksPer100} per 100 words — acceptable.` });
  }

  const imgs = html.match(/<img[^>]*>/gi) || [];
  const totalImgCount = imgs.length;
  if (totalImgCount > 0) {
    const missingAlt = imgs.filter(img => !/alt=["'][^"']+["']/i.test(img)).length;
    const pct = Math.round((missingAlt / totalImgCount) * 100);
    if (pct > 50) {
      checks.push({ label: "Image alt text", status: "fail", detail: `${missingAlt}/${totalImgCount} images missing alt text (${pct}%).`, priority: "high", howToFix: "Add descriptive alt text to all product images. Include product name and key attributes." });
    } else if (missingAlt > 0) {
      checks.push({ label: "Image alt text", status: "warning", detail: `${missingAlt}/${totalImgCount} images missing alt text.`, priority: "medium", howToFix: "Add descriptive alt text to all images in Shopify Admin → Products → Images." });
    } else {
      checks.push({ label: "Image alt text", status: "pass", detail: `All ${totalImgCount} images have alt text.` });
    }
  }

  const headingCount = (html.match(/<h[2-6][^>]*>/gi) || []).length;
  if (headingCount === 0 && wordCount > 200) {
    checks.push({ label: "Content structure", status: "warning", detail: "No subheadings (H2-H6) found. Add headings to structure your content.", priority: "medium", howToFix: "Break your content into sections with H2 and H3 subheadings containing relevant keywords." });
  } else if (headingCount > 0) {
    checks.push({ label: "Content structure", status: "pass", detail: `${headingCount} subheadings found — content is well-structured.` });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 6: Security & Headers (weight: 8%)                        */
/* ================================================================== */

function checkSecurity(headers: Headers, html: string, pageUrl: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  // HTTPS
  const isHttps = pageUrl.startsWith("https://");
  checks.push(isHttps
    ? { label: "HTTPS enabled", status: "pass", detail: "Site loads over HTTPS." }
    : { label: "HTTPS enabled", status: "fail", detail: "Site does not use HTTPS. Critical for trust and SEO.", priority: "critical", howToFix: "Enable SSL in Shopify Admin → Domains. Shopify provides free SSL for all stores." }
  );

  // HSTS
  const hsts = headers.get("strict-transport-security");
  if (!hsts) {
    checks.push({ label: "HSTS header", status: "warning", detail: "No Strict-Transport-Security header.", priority: "medium", howToFix: "Shopify should set HSTS automatically. If using a proxy (Cloudflare, etc.), ensure HSTS is enabled." });
  } else {
    const maxAgeMatch = hsts.match(/max-age=(\d+)/);
    const maxAge = maxAgeMatch ? parseInt(maxAgeMatch[1]) : 0;
    if (maxAge < 31536000) {
      checks.push({ label: "HSTS header", status: "warning", detail: `HSTS max-age is ${Math.round(maxAge / 86400)} days (recommended: 365 days).`, priority: "low" });
    } else {
      checks.push({ label: "HSTS header", status: "pass", detail: "HSTS is configured with adequate max-age." });
    }
  }

  // X-Frame-Options
  const xfo = headers.get("x-frame-options");
  checks.push(xfo
    ? { label: "X-Frame-Options", status: "pass", detail: `X-Frame-Options: ${xfo}` }
    : { label: "X-Frame-Options", status: "warning", detail: "No X-Frame-Options header. Site may be vulnerable to clickjacking.", priority: "low" }
  );

  // X-Content-Type-Options
  const xcto = headers.get("x-content-type-options");
  checks.push(xcto
    ? { label: "X-Content-Type-Options", status: "pass", detail: `X-Content-Type-Options: ${xcto}` }
    : { label: "X-Content-Type-Options", status: "warning", detail: "No X-Content-Type-Options header.", priority: "low" }
  );

  // CSP
  const csp = headers.get("content-security-policy");
  if (!csp) {
    checks.push({ label: "Content-Security-Policy", status: "warning", detail: "No CSP header. Consider adding one to prevent XSS attacks.", priority: "medium" });
  } else {
    const hasDefaultSrc = csp.includes("default-src");
    const hasScriptSrc = csp.includes("script-src");
    if (hasDefaultSrc || hasScriptSrc) {
      checks.push({ label: "Content-Security-Policy", status: "pass", detail: "CSP header is configured." });
    } else {
      checks.push({ label: "Content-Security-Policy", status: "warning", detail: "CSP present but missing key directives (default-src, script-src).", priority: "low" });
    }
  }

  // Mixed content
  const httpResources = (html.match(/(?:src|href)=["']http:\/\/[^"']+["']/gi) || []).length;
  if (httpResources > 0) {
    checks.push({ label: "Mixed content", status: "warning", detail: `${httpResources} HTTP resource(s) loaded on HTTPS page. May cause browser warnings.`, priority: "high", howToFix: "Change all HTTP URLs to HTTPS in your theme templates and content." });
  } else {
    checks.push({ label: "Mixed content", status: "pass", detail: "No mixed content issues detected." });
  }

  // Permissions-Policy header
  const permPolicy = headers.get("permissions-policy");
  if (!permPolicy) {
    checks.push({ label: "Permissions-Policy header", status: "warning", detail: "No Permissions-Policy header. Consider restricting browser features (camera, microphone, geolocation).", priority: "low", howToFix: "Add a Permissions-Policy header to control which browser features third-party scripts can access." });
  } else {
    checks.push({ label: "Permissions-Policy header", status: "pass", detail: "Permissions-Policy header is configured." });
  }

  // Referrer-Policy header
  const referrerPolicy = headers.get("referrer-policy");
  if (!referrerPolicy) {
    checks.push({ label: "Referrer-Policy header", status: "warning", detail: "No Referrer-Policy header. Browser will use default (may leak URLs to third parties).", priority: "low", howToFix: "Add 'Referrer-Policy: strict-origin-when-cross-origin' for a good balance of privacy and analytics." });
  } else {
    checks.push({ label: "Referrer-Policy header", status: "pass", detail: `Referrer-Policy: ${referrerPolicy}` });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 7: Mobile Optimization (weight: 7%)                       */
/* ================================================================== */

function checkMobile(html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
  checks.push(hasViewport
    ? { label: "Viewport meta tag", status: "pass", detail: "Viewport meta tag is properly configured." }
    : { label: "Viewport meta tag", status: "fail", detail: "No viewport meta tag. Page won't render properly on mobile.", priority: "critical", howToFix: "Add <meta name='viewport' content='width=device-width, initial-scale=1'> in <head>." }
  );

  const smallButtons = html.match(/(?:padding|height):\s*(?:0|[1-9]|1[0-5])px/gi) || [];
  if (smallButtons.length > 5) {
    checks.push({ label: "Touch target sizing", status: "warning", detail: "Multiple elements with small dimensions detected. Ensure tap targets are at least 44x44px.", priority: "medium", howToFix: "Set minimum padding and height on buttons, links, and form elements for mobile touch targets." });
  } else {
    checks.push({ label: "Touch target sizing", status: "pass", detail: "No obvious touch target issues detected." });
  }

  const smallFonts = html.match(/font-size:\s*(?:[0-9]|1[01])px/gi) || [];
  if (smallFonts.length > 3) {
    checks.push({ label: "Mobile font sizes", status: "warning", detail: `${smallFonts.length} CSS rules with fonts under 12px. Use 16px+ for body text.`, priority: "medium", howToFix: "Increase base font size to 16px minimum. Use relative units (rem, em) instead of px." });
  } else {
    checks.push({ label: "Mobile font sizes", status: "pass", detail: "Font sizes appear mobile-friendly." });
  }

  const imgsWithSrcset = (html.match(/srcset=/gi) || []).length;
  const totalImgs = (html.match(/<img[^>]*>/gi) || []).length;
  if (totalImgs > 5 && imgsWithSrcset < totalImgs * 0.3) {
    checks.push({ label: "Responsive images", status: "warning", detail: `Only ${imgsWithSrcset}/${totalImgs} images use srcset for responsive delivery.`, priority: "medium", howToFix: "Use Shopify's image_url filter with width parameter to serve responsive images with srcset." });
  } else {
    checks.push({ label: "Responsive images", status: "pass", detail: `${imgsWithSrcset}/${totalImgs} images use srcset.` });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 8: Links & Navigation (weight: 8%)                        */
/* ================================================================== */

function checkLinks(html: string, storeHost: string): AuditCheck[] {
  const checks: AuditCheck[] = [];
  void storeHost; // used for context only

  const allLinks = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)];
  const totalLinks = allLinks.length;

  if (totalLinks > 150) {
    checks.push({ label: "Total link count", status: "warning", detail: `${totalLinks} links on page — excessive. May dilute PageRank.`, priority: "medium", howToFix: "Reduce the number of links in navigation, footer, and content to under 100." });
  } else {
    checks.push({ label: "Total link count", status: "pass", detail: `${totalLinks} links on page.` });
  }

  const nofollowLinks = [...html.matchAll(/<a[^>]+rel=["'][^"']*nofollow[^"']*["']/gi)].length;
  if (nofollowLinks > totalLinks * 0.3 && totalLinks > 10) {
    checks.push({ label: "Nofollow links", status: "warning", detail: `${nofollowLinks}/${totalLinks} links are nofollow (${Math.round(nofollowLinks / totalLinks * 100)}%). Too many nofollows may waste link equity.`, priority: "low" });
  } else {
    checks.push({ label: "Nofollow links", status: "pass", detail: `${nofollowLinks} nofollow links — appropriate.` });
  }

  const emptyHrefs = allLinks.filter(m => m[1] === "#" || m[1] === "" || m[1] === "javascript:void(0)").length;
  if (emptyHrefs > 5) {
    checks.push({ label: "Invalid link hrefs", status: "warning", detail: `${emptyHrefs} links with empty or # href values.`, priority: "medium", howToFix: "Replace '#' and 'javascript:void(0)' links with proper URLs or use <button> elements." });
  } else {
    checks.push({ label: "Invalid link hrefs", status: "pass", detail: `${emptyHrefs} empty/placeholder links — acceptable.` });
  }

  const genericAnchors = allLinks.filter(m => {
    const tag = m[0];
    const textMatch = tag.match(/>([^<]*)</);
    const text = textMatch ? textMatch[1].trim().toLowerCase() : "";
    return ["click here", "read more", "learn more", "here", "link", "more"].includes(text);
  }).length;
  if (genericAnchors > 3) {
    checks.push({ label: "Anchor text quality", status: "warning", detail: `${genericAnchors} links with generic anchor text ("click here", "read more", etc.).`, priority: "medium", howToFix: "Use descriptive anchor text that tells users and search engines what the linked page is about." });
  } else {
    checks.push({ label: "Anchor text quality", status: "pass", detail: "Anchor text is generally descriptive." });
  }

  const hasNav = /<nav/i.test(html);
  const hasBreadcrumb = /breadcrumb/i.test(html);
  if (!hasNav) {
    checks.push({ label: "Navigation element", status: "warning", detail: "No <nav> element found. Use semantic HTML for navigation.", priority: "low", howToFix: "Wrap your main navigation in a <nav> element for better accessibility and SEO." });
  } else {
    checks.push({ label: "Navigation element", status: "pass", detail: "Semantic <nav> element found." });
  }
  if (!hasBreadcrumb) {
    checks.push({ label: "Breadcrumb navigation", status: "warning", detail: "No breadcrumb navigation detected. Breadcrumbs improve UX and SEO.", priority: "medium", howToFix: "Add breadcrumb navigation to your Shopify theme for better site hierarchy." });
  } else {
    checks.push({ label: "Breadcrumb navigation", status: "pass", detail: "Breadcrumb navigation detected." });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 9: Social & Sharing (weight: 4%)                          */
/* ================================================================== */

function checkSocial(html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  const ogTitle = /<meta[^>]+property=["']og:title["']/i.test(html);
  const ogDesc = /<meta[^>]+property=["']og:description["']/i.test(html);
  const ogImage = /<meta[^>]+property=["']og:image["']/i.test(html);
  const ogType = /<meta[^>]+property=["']og:type["']/i.test(html);
  const missing = [!ogTitle && "og:title", !ogDesc && "og:description", !ogImage && "og:image", !ogType && "og:type"].filter(Boolean);
  if (missing.length === 0) {
    checks.push({ label: "Open Graph tags", status: "pass", detail: "All key OG tags present (title, description, image, type)." });
  } else if (missing.length <= 1) {
    checks.push({ label: "Open Graph tags", status: "warning", detail: `Missing: ${missing.join(", ")}. Social previews may be incomplete.`, priority: "medium", howToFix: `Add the missing Open Graph tag(s): ${missing.join(", ")} to your theme's <head>.` });
  } else {
    checks.push({ label: "Open Graph tags", status: "fail", detail: `Missing ${missing.length} OG tags: ${missing.join(", ")}. Social sharing will look broken.`, priority: "high", howToFix: "Add all Open Graph meta tags (og:title, og:description, og:image, og:type) to your Shopify theme." });
  }

  const twitterCard = /<meta[^>]+name=["']twitter:card["']/i.test(html);
  checks.push(twitterCard
    ? { label: "Twitter Card", status: "pass", detail: "Twitter Card meta tag found." }
    : { label: "Twitter Card", status: "warning", detail: "No twitter:card meta tag. Add one for better Twitter/X sharing.", priority: "low", howToFix: "Add <meta name='twitter:card' content='summary_large_image'> to your theme." }
  );

  const socialPlatforms = ["facebook", "instagram", "twitter", "tiktok", "pinterest", "youtube", "linkedin"].filter(
    platform => new RegExp(`(${platform}\\.com|${platform}\\.co)`, "i").test(html)
  );
  if (socialPlatforms.length === 0) {
    checks.push({ label: "Social profile links", status: "warning", detail: "No social media profile links detected on the page.", priority: "low", howToFix: "Add links to your social media profiles in the header or footer." });
  } else {
    checks.push({ label: "Social profile links", status: "pass", detail: `Social profiles found: ${socialPlatforms.join(", ")}.` });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 10: Accessibility (weight: 4%)                            */
/* ================================================================== */

function checkAccessibility(html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  const hasMain = /<main/i.test(html);
  const hasHeader = /<header/i.test(html);
  const hasFooter = /<footer/i.test(html);
  const missingLandmarks = [!hasMain && "main", !hasHeader && "header", !hasFooter && "footer"].filter(Boolean);
  if (missingLandmarks.length > 0) {
    checks.push({ label: "ARIA landmarks", status: "warning", detail: `Missing landmark elements: ${missingLandmarks.join(", ")}.`, priority: "medium", howToFix: "Use semantic HTML elements (<main>, <header>, <footer>, <nav>) for screen reader navigation." });
  } else {
    checks.push({ label: "ARIA landmarks", status: "pass", detail: "All key landmark elements found (main, header, footer)." });
  }

  const hasSkipNav = /skip[- ]?(to[- ]?)?(main|content|nav)/i.test(html);
  checks.push(hasSkipNav
    ? { label: "Skip navigation link", status: "pass", detail: "Skip-to-content link found." }
    : { label: "Skip navigation link", status: "warning", detail: "No skip-to-content link found. Important for keyboard navigation.", priority: "low", howToFix: "Add a visually hidden 'Skip to content' link as the first element inside <body>." }
  );

  const inputs = html.match(/<input[^>]+type=["'](?:text|email|tel|password|search|number)["'][^>]*>/gi) || [];
  const unlabeled = inputs.filter(input => {
    const hasAriaLabel = /aria-label/i.test(input);
    const hasId = input.match(/id=["']([^"']+)["']/i);
    const hasLabelFor = hasId && new RegExp(`<label[^>]+for=["']${hasId[1]}["']`, "i").test(html);
    return !hasAriaLabel && !hasLabelFor;
  }).length;
  if (unlabeled > 0) {
    checks.push({ label: "Form input labels", status: "warning", detail: `${unlabeled} form input(s) without labels or aria-label.`, priority: "medium", howToFix: "Add <label for='inputId'> or aria-label to all form inputs for screen reader accessibility." });
  } else {
    checks.push({ label: "Form input labels", status: "pass", detail: "All form inputs have labels." });
  }

  const hasLightOnLight = /color:\s*#(?:f[0-9a-f]{5}|e[0-9a-f]{5}|d[0-9a-f]{5}).*background(?:-color)?:\s*#(?:f[0-9a-f]{5}|e[0-9a-f]{5})/i.test(html);
  if (hasLightOnLight) {
    checks.push({ label: "Color contrast", status: "warning", detail: "Possible low-contrast text detected (light text on light background).", priority: "low", howToFix: "Ensure text has at least 4.5:1 contrast ratio against its background (WCAG AA)." });
  } else {
    checks.push({ label: "Color contrast", status: "pass", detail: "No obvious contrast issues detected (basic check only)." });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 11: International SEO (weight: 5%)                        */
/* ================================================================== */

function checkInternational(html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  // Hreflang tags presence
  const hreflangTags = [...html.matchAll(/<link[^>]+hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)];
  const hreflangCount = hreflangTags.length;

  if (hreflangCount === 0) {
    checks.push({ label: "Hreflang tags", status: "warning", detail: "No hreflang tags found. Add them if you target multiple languages or regions.", priority: "medium", howToFix: "Add <link rel='alternate' hreflang='en' href='...'> for each language/region version of your store." });
  } else {
    checks.push({ label: "Hreflang tags", status: "pass", detail: `${hreflangCount} hreflang tag(s) found for multi-language/region targeting.` });

    // Hreflang self-reference check
    const hreflangs = hreflangTags.map(m => ({ lang: m[1], href: m[2] }));
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
      || html.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
    if (canonicalMatch) {
      const canonUrl = canonicalMatch[1].trim();
      const hasSelfRef = hreflangs.some(h => h.href.trim() === canonUrl);
      if (!hasSelfRef) {
        checks.push({ label: "Hreflang self-reference", status: "warning", detail: "Hreflang tags present but no self-referencing hreflang for the current page URL.", priority: "medium", howToFix: "Include a hreflang tag pointing to the current page's canonical URL for its language." });
      } else {
        checks.push({ label: "Hreflang self-reference", status: "pass", detail: "Hreflang self-reference correctly set." });
      }
    }

    // Hreflang x-default check
    const hasXDefault = hreflangs.some(h => h.lang.toLowerCase() === "x-default");
    if (!hasXDefault) {
      checks.push({ label: "Hreflang x-default", status: "warning", detail: "No hreflang x-default tag. Add one as fallback for users with no matching locale.", priority: "low", howToFix: "Add <link rel='alternate' hreflang='x-default' href='...'> pointing to your primary/default store URL." });
    } else {
      checks.push({ label: "Hreflang x-default", status: "pass", detail: "Hreflang x-default fallback is configured." });
    }
  }

  // Multi-currency detection (Shopify Markets)
  const hasMultiCurrency = /Shopify\.currency/i.test(html) || /data-currency/i.test(html) || /currency[_-]?selector/i.test(html) || /shopify-markets/i.test(html);
  const hasCountrySelector = /country[_-]?selector/i.test(html) || /locale[_-]?selector/i.test(html) || /market[_-]?selector/i.test(html);
  if (hasMultiCurrency || hasCountrySelector) {
    checks.push({ label: "Multi-currency / Markets", status: "pass", detail: `${hasMultiCurrency ? "Multi-currency" : ""}${hasMultiCurrency && hasCountrySelector ? " and " : ""}${hasCountrySelector ? "locale selector" : ""} detected — Shopify Markets likely active.` });
  } else {
    checks.push({ label: "Multi-currency / Markets", status: "warning", detail: "No multi-currency or locale selector detected. If you sell internationally, enable Shopify Markets.", priority: "low", howToFix: "Enable Shopify Markets in Admin → Settings → Markets to serve localized content and currencies." });
  }

  // Language meta tags
  const langMatch = html.match(/<html[^>]+lang=["']([^"']+)["']/i);
  const contentLang = html.match(/<meta[^>]+http-equiv=["']content-language["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]*http-equiv=["']content-language["']/i);
  if (langMatch && contentLang) {
    checks.push({ label: "Language meta tags", status: "pass", detail: `HTML lang="${langMatch[1]}" and content-language="${contentLang[1]}" both set.` });
  } else if (langMatch) {
    checks.push({ label: "Language meta tags", status: "pass", detail: `HTML lang="${langMatch[1]}" is set. Content-Language meta tag is optional.` });
  } else {
    checks.push({ label: "Language meta tags", status: "warning", detail: "No HTML lang attribute found. Specify the page language.", priority: "medium", howToFix: "Add lang='en' (or your language) to the <html> element." });
  }

  return checks;
}

/* ================================================================== */
/*  CATEGORY 12: Image Optimization (weight: 5%)                       */
/* ================================================================== */

function checkImages(html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  const imgs = html.match(/<img[^>]*>/gi) || [];
  const totalImgCount = imgs.length;

  // Total image count
  checks.push({ label: "Total image count", status: "pass", detail: `${totalImgCount} images found on page.` });

  if (totalImgCount === 0) return checks;

  // WebP/AVIF format usage
  const modernFormatCount = imgs.filter(img =>
    /\.webp/i.test(img) || /format=webp/i.test(img) || /format%3Dwebp/i.test(img) ||
    /\.avif/i.test(img) || /format=avif/i.test(img)
  ).length;
  const modernPct = Math.round((modernFormatCount / totalImgCount) * 100);
  if (modernPct < 30) {
    checks.push({ label: "Modern image formats (WebP/AVIF)", status: "warning", detail: `Only ${modernFormatCount}/${totalImgCount} images (${modernPct}%) use WebP or AVIF.`, priority: "high", howToFix: "Use Shopify's image_url filter with format:'webp' to serve next-gen image formats automatically." });
  } else if (modernPct < 70) {
    checks.push({ label: "Modern image formats (WebP/AVIF)", status: "warning", detail: `${modernFormatCount}/${totalImgCount} images (${modernPct}%) use WebP or AVIF. Aim for 70%+.`, priority: "medium", howToFix: "Ensure all theme images use Shopify's image_url filter with format:'webp'." });
  } else {
    checks.push({ label: "Modern image formats (WebP/AVIF)", status: "pass", detail: `${modernFormatCount}/${totalImgCount} images (${modernPct}%) use modern formats.` });
  }

  // Lazy loading coverage
  const lazyCount = imgs.filter(img => /loading=["']lazy["']/i.test(img)).length;
  // Hero image should NOT be lazy-loaded, so ideal is (total - 1) or more
  const expectedLazy = Math.max(0, totalImgCount - 2); // allow 1-2 above-fold images
  if (totalImgCount > 3) {
    if (lazyCount < expectedLazy * 0.5) {
      checks.push({ label: "Image lazy loading coverage", status: "warning", detail: `Only ${lazyCount}/${totalImgCount} images use loading='lazy'. Most below-fold images should be lazy-loaded.`, priority: "medium", howToFix: "Add loading='lazy' to all below-the-fold images. Keep loading='eager' or omit it for the hero/LCP image." });
    } else {
      checks.push({ label: "Image lazy loading coverage", status: "pass", detail: `${lazyCount}/${totalImgCount} images use lazy loading — good coverage.` });
    }
  } else {
    checks.push({ label: "Image lazy loading coverage", status: "pass", detail: `${lazyCount}/${totalImgCount} images use lazy loading. Few images on page.` });
  }

  // Missing alt text percentage
  const missingAlt = imgs.filter(img => !/alt=/i.test(img) || /alt=["']\s*["']/i.test(img)).length;
  const missingAltPct = Math.round((missingAlt / totalImgCount) * 100);
  if (missingAlt > 0) {
    if (missingAltPct > 50) {
      checks.push({ label: "Missing alt text", status: "fail", detail: `${missingAlt}/${totalImgCount} images (${missingAltPct}%) have no alt text. Critical for accessibility and image SEO.`, priority: "high", howToFix: "Add descriptive alt text to every image. In Shopify Admin, edit product/collection images to add alt text." });
    } else {
      checks.push({ label: "Missing alt text", status: "warning", detail: `${missingAlt}/${totalImgCount} images (${missingAltPct}%) missing alt text.`, priority: "medium", howToFix: "Add descriptive alt text to all images for accessibility and SEO." });
    }
  } else {
    checks.push({ label: "Missing alt text", status: "pass", detail: `All ${totalImgCount} images have alt text.` });
  }

  // Image dimension attributes (width/height for CLS prevention)
  const missingDimensions = imgs.filter(img => {
    const hasWidth = /width=/i.test(img);
    const hasHeight = /height=/i.test(img);
    return !hasWidth || !hasHeight;
  }).length;
  const dimPct = Math.round((missingDimensions / totalImgCount) * 100);
  if (missingDimensions > totalImgCount * 0.5 && totalImgCount > 2) {
    checks.push({ label: "Image dimensions (CLS prevention)", status: "warning", detail: `${missingDimensions}/${totalImgCount} images (${dimPct}%) missing width/height attributes — causes layout shifts.`, priority: "high", howToFix: "Add explicit width and height attributes to all <img> tags to prevent CLS. Shopify's image_tag helper does this automatically." });
  } else {
    checks.push({ label: "Image dimensions (CLS prevention)", status: "pass", detail: `${totalImgCount - missingDimensions}/${totalImgCount} images have width/height attributes.` });
  }

  // Srcset/responsive images usage
  const srcsetCount = imgs.filter(img => /srcset=/i.test(img)).length;
  const srcsetPct = Math.round((srcsetCount / totalImgCount) * 100);
  if (totalImgCount > 3 && srcsetPct < 30) {
    checks.push({ label: "Responsive images (srcset)", status: "warning", detail: `Only ${srcsetCount}/${totalImgCount} images (${srcsetPct}%) use srcset for responsive delivery.`, priority: "medium", howToFix: "Use Shopify's image_url filter with width param and srcset to serve appropriately sized images per device." });
  } else {
    checks.push({ label: "Responsive images (srcset)", status: "pass", detail: `${srcsetCount}/${totalImgCount} images (${srcsetPct}%) use srcset.` });
  }

  // Hero image preload check
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
    const hasPreloadImg = /<link[^>]+rel=["']preload["'][^>]+as=["']image["']/i.test(headMatch[1]);
    if (!hasPreloadImg) {
      checks.push({ label: "Hero image preload", status: "warning", detail: "No <link rel='preload' as='image'> found. Preload the hero/LCP image for faster rendering.", priority: "medium", howToFix: "Add <link rel='preload' as='image' href='hero-image-url'> in <head> for the above-fold hero image." });
    } else {
      checks.push({ label: "Hero image preload", status: "pass", detail: "Hero image preload hint found in <head>." });
    }
  }

  return checks;
}

/* ================================================================== */
/*  Weighted Score Calculation                                         */
/* ================================================================== */

function calculateWeightedScore(categories: AuditCategory[]): number {
  let totalWeight = 0;
  let weightedSum = 0;

  for (const cat of categories) {
    const weight = cat.weight || 10;
    const passCount = cat.checks.filter(c => c.status === "pass").length;
    const catScore = cat.checks.length > 0 ? (passCount / cat.checks.length) * 100 : 100;
    weightedSum += catScore * weight;
    totalWeight += weight;
  }

  return totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;
}

/* ================================================================== */
/*  Run full Shopify audit                                             */
/* ================================================================== */

async function runShopifyAudit(rawUrl: string, skipPsi = false): Promise<AuditResult> {
  let url = rawUrl.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  const parsedUrl = new URL(url);
  const origin = parsedUrl.origin;
  const host = parsedUrl.hostname;

  const auditStart = Date.now();

  // Run all fetches in parallel, including PSI
  const psiPromise = skipPsi ? Promise.resolve(null) : fetchPSI(url).catch(() => null);

  const [mainRes, robotsRes, collectionsRes, collectionsAllRes, sitemapRes, cartJsRes, psiRaw] =
    await Promise.all([
      safeFetch(url),
      safeFetch(`${origin}/robots.txt`, 8000),
      safeFetch(`${origin}/collections/frontpage`, 8000),
      safeFetch(`${origin}/collections/all`, 8000),
      safeFetch(`${origin}/sitemap.xml`, 8000),
      safeFetch(`${origin}/cart.js`, 5000),
      psiPromise,
    ]);

  if (!mainRes.ok) {
    throw new Error(`Could not fetch ${url} (status ${mainRes.status})`);
  }

  const html = mainRes.text;
  const cartJsIsShopify = cartJsRes.ok && cartJsRes.text.includes('"token"');
  const isShopify = detectShopify(html, mainRes.headers) || cartJsIsShopify;
  const shopifyTheme = isShopify ? detectTheme(html) : null;

  // Extract PSI data
  const psiData = psiRaw ? extractPsiData(psiRaw as PsiData) : null;

  if (!isShopify) {
    return {
      score: 0, grade: "F", passed: 0, warnings: 0, critical: 0,
      isShopify: false, shopifyTheme: null, categories: [],
      responseTimeMs: Date.now() - auditStart, url,
      performanceScore: null, coreWebVitals: null, fieldData: null,
      lcpElement: null, opportunities: [], resourceBreakdown: null,
    };
  }

  const jsonLd = extractJsonLd(html);
  const responseTimeMs = mainRes.responseTimeMs;

  const categories: AuditCategory[] = [
    { name: "meta", weight: CATEGORY_WEIGHTS.meta, checks: checkMeta(html, url) },
    { name: "shopify-technical", weight: CATEGORY_WEIGHTS["shopify-technical"], checks: checkShopifyTechnical(html, robotsRes.ok ? robotsRes.text : "", sitemapRes.ok ? sitemapRes.text : "", collectionsAllRes.ok && collectionsAllRes.status === 200, collectionsRes.ok && collectionsRes.status === 200, host, shopifyTheme) },
    { name: "performance", weight: CATEGORY_WEIGHTS.performance, checks: checkPerformancePsi(html, host, responseTimeMs, psiData) },
    { name: "structured-data", weight: CATEGORY_WEIGHTS["structured-data"], checks: checkStructuredData(jsonLd, html) },
    { name: "content", weight: CATEGORY_WEIGHTS.content, checks: checkContent(html) },
    { name: "security", weight: CATEGORY_WEIGHTS.security, checks: checkSecurity(mainRes.headers, html, url) },
    { name: "mobile", weight: CATEGORY_WEIGHTS.mobile, checks: checkMobile(html) },
    { name: "links", weight: CATEGORY_WEIGHTS.links, checks: checkLinks(html, host) },
    { name: "social", weight: CATEGORY_WEIGHTS.social, checks: checkSocial(html) },
    { name: "accessibility", weight: CATEGORY_WEIGHTS.accessibility, checks: checkAccessibility(html) },
    { name: "international", weight: CATEGORY_WEIGHTS.international, checks: checkInternational(html) },
    { name: "images", weight: CATEGORY_WEIGHTS.images, checks: checkImages(html) },
  ];

  const allChecks = categories.flatMap(c => c.checks);
  const passed = allChecks.filter(c => c.status === "pass").length;
  const warnings = allChecks.filter(c => c.status === "warning").length;
  const critical = allChecks.filter(c => c.status === "fail").length;
  const score = calculateWeightedScore(categories);

  return {
    score,
    grade: letterGrade(score),
    passed,
    warnings,
    critical,
    isShopify: true,
    shopifyTheme,
    categories,
    responseTimeMs: Date.now() - auditStart,
    url,
    performanceScore: psiData?.performanceScore ?? null,
    coreWebVitals: psiData?.coreWebVitals ?? null,
    fieldData: psiData?.fieldData ?? null,
    lcpElement: psiData?.lcpElement ?? null,
    opportunities: psiData?.opportunities ?? [],
    resourceBreakdown: psiData?.resourceBreakdown ?? null,
  };
}

/* ================================================================== */
/*  Main handler                                                       */
/* ================================================================== */

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const rawUrl: string = (body.url as string) || "";
    const compareUrl: string = (body.compareUrl as string) || "";

    if (!rawUrl.trim()) {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 });
    }

    let url = rawUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
    try { new URL(url); } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const result = await runShopifyAudit(url);

    if (compareUrl.trim()) {
      let compUrl = compareUrl.trim();
      if (!/^https?:\/\//i.test(compUrl)) compUrl = `https://${compUrl}`;
      try {
        new URL(compUrl);
        // Skip PSI for comparison URL (too slow to run twice)
        const compResult = await runShopifyAudit(compUrl, true);
        result.comparisonResult = compResult;
      } catch { /* comparison failed, continue without */ }
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error("Shopify audit error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
