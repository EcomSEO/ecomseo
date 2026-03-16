// =============================================================================
// seo-utils.ts — Shared utility library for all 22 SEO tools
// =============================================================================

// ---------------------------------------------------------------------------
// URL utilities
// ---------------------------------------------------------------------------

export function normalizeUrl(raw: string): string {
  let url = raw.trim();
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    return new URL(url).href;
  } catch {
    return "";
  }
}

export function isValidUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// HTML parsing utilities (regex-based, no DOM required)
// ---------------------------------------------------------------------------

export function extractTitle(html: string): string | null {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1]).trim() : null;
}

export function extractMetaDescription(html: string): string | null {
  return extractMetaContent(html, "description");
}

export function extractCanonical(html: string): string | null {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  return m ? m[1].trim() : null;
}

export function extractMetaRobots(html: string): string | null {
  return extractMetaContent(html, "robots");
}

export function extractAllMetaTags(
  html: string
): Array<{ name: string; content: string; property?: string }> {
  const results: Array<{ name: string; content: string; property?: string }> = [];
  const re = /<meta\s[^>]*?>/gi;
  let m: RegExpExecArray | null;

  while ((m = re.exec(html)) !== null) {
    const tag = m[0];
    const name = attrVal(tag, "name");
    const property = attrVal(tag, "property");
    const content = attrVal(tag, "content");

    if ((name || property) && content !== null) {
      results.push({
        name: name || property || "",
        content,
        ...(property ? { property } : {}),
      });
    }
  }
  return results;
}

export function extractHeadings(
  html: string
): Array<{ level: number; text: string }> {
  const results: Array<{ level: number; text: string }> = [];
  const re = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m: RegExpExecArray | null;

  while ((m = re.exec(html)) !== null) {
    results.push({
      level: parseInt(m[1], 10),
      text: stripTags(m[2]).trim(),
    });
  }
  return results;
}

export function extractLinks(
  html: string,
  baseUrl: string
): Array<{ href: string; text: string; isInternal: boolean }> {
  const results: Array<{ href: string; text: string; isInternal: boolean }> = [];
  const re = /<a\s[^>]*?>/gi;
  const closingRe = /<a\s[^>]*?>([\s\S]*?)<\/a>/gi;
  let baseDomain: string;

  try {
    baseDomain = new URL(baseUrl).hostname.replace(/^www\./, "");
  } catch {
    baseDomain = "";
  }

  let m: RegExpExecArray | null;
  while ((m = closingRe.exec(html)) !== null) {
    const tag = m[0];
    const hrefRaw = attrVal(tag, "href");
    if (!hrefRaw) continue;

    const href = resolveUrl(hrefRaw, baseUrl);
    const text = stripTags(m[1]).trim();

    let isInternal = false;
    try {
      const linkDomain = new URL(href).hostname.replace(/^www\./, "");
      isInternal = linkDomain === baseDomain;
    } catch {
      // relative links are internal
      isInternal = !hrefRaw.startsWith("http");
    }

    results.push({ href, text, isInternal });
  }
  return results;
}

export function extractImages(
  html: string,
  baseUrl: string
): Array<{
  src: string;
  alt: string | null;
  width?: string;
  height?: string;
  loading?: string;
}> {
  const results: Array<{
    src: string;
    alt: string | null;
    width?: string;
    height?: string;
    loading?: string;
  }> = [];
  const re = /<img\s[^>]*?>/gi;
  let m: RegExpExecArray | null;

  while ((m = re.exec(html)) !== null) {
    const tag = m[0];
    const srcRaw = attrVal(tag, "src") || attrVal(tag, "data-src");
    if (!srcRaw) continue;

    const src = resolveUrl(srcRaw, baseUrl);
    const alt = attrVal(tag, "alt");
    const width = attrVal(tag, "width") ?? undefined;
    const height = attrVal(tag, "height") ?? undefined;
    const loading = attrVal(tag, "loading") ?? undefined;

    results.push({ src, alt, width, height, loading });
  }
  return results;
}

export function extractOGTags(html: string): Record<string, string> {
  const tags: Record<string, string> = {};
  const metas = extractAllMetaTags(html);
  for (const meta of metas) {
    if (meta.property && meta.property.startsWith("og:")) {
      tags[meta.property] = meta.content;
    }
  }
  return tags;
}

export function extractTwitterTags(html: string): Record<string, string> {
  const tags: Record<string, string> = {};
  const metas = extractAllMetaTags(html);
  for (const meta of metas) {
    const key = meta.property || meta.name;
    if (key && key.startsWith("twitter:")) {
      tags[key] = meta.content;
    }
  }
  return tags;
}

export function extractHreflangTags(
  html: string
): Array<{ hreflang: string; href: string }> {
  const results: Array<{ hreflang: string; href: string }> = [];
  const re = /<link[^>]+rel=["']alternate["'][^>]*>/gi;
  let m: RegExpExecArray | null;

  while ((m = re.exec(html)) !== null) {
    const tag = m[0];
    const hreflang = attrVal(tag, "hreflang");
    const href = attrVal(tag, "href");
    if (hreflang && href) {
      results.push({ hreflang, href });
    }
  }
  return results;
}

export function extractSchemaMarkup(html: string): Record<string, unknown>[] {
  const results: Record<string, unknown>[] = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;

  while ((m = re.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(m[1].trim());
      if (Array.isArray(parsed)) {
        results.push(...parsed);
      } else {
        results.push(parsed);
      }
    } catch {
      // malformed JSON-LD – skip
    }
  }
  return results;
}

export function extractMainContent(html: string): string {
  // Remove script, style, nav, header, footer, aside, svg, noscript
  let content = html;
  const stripTags = [
    /<script[\s\S]*?<\/script>/gi,
    /<style[\s\S]*?<\/style>/gi,
    /<nav[\s\S]*?<\/nav>/gi,
    /<header[\s\S]*?<\/header>/gi,
    /<footer[\s\S]*?<\/footer>/gi,
    /<aside[\s\S]*?<\/aside>/gi,
    /<svg[\s\S]*?<\/svg>/gi,
    /<noscript[\s\S]*?<\/noscript>/gi,
  ];

  for (const re of stripTags) {
    content = content.replace(re, " ");
  }

  // Try to isolate <main> or <article> content
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
    || content.match(/<article[^>]*>([\s\S]*?)<\/article>/i);

  const raw = mainMatch ? mainMatch[1] : content;

  // Strip remaining HTML tags and collapse whitespace
  return raw
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function countWords(text: string): number {
  const cleaned = text.trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).length;
}

// ---------------------------------------------------------------------------
// Pixel width estimation (for SERP display)
// ---------------------------------------------------------------------------

// Approximate character widths based on Arial at a given font size.
// These are simplified averages – sufficient for SERP preview estimation.
const NARROW_CHARS = new Set("iljtfr!|()[]{}:;.,'\"`1 ");
const WIDE_CHARS = new Set("mwMWGOQDHNBUAV@%");

export function estimatePixelWidth(text: string, fontSize: number = 16): number {
  const scale = fontSize / 16;
  let width = 0;
  for (const ch of text) {
    if (NARROW_CHARS.has(ch)) {
      width += 5;
    } else if (WIDE_CHARS.has(ch)) {
      width += 11;
    } else if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
      width += 9.5;
    } else {
      width += 7.5;
    }
  }
  return Math.round(width * scale);
}

// ---------------------------------------------------------------------------
// Scoring utilities
// ---------------------------------------------------------------------------

export function calculateScore(
  passed: number,
  warnings: number,
  critical: number
): number {
  const total = passed + warnings + critical;
  if (total === 0) return 100;
  // Passed = 1pt, warnings = 0.5pt, critical = 0pt
  const score = ((passed + warnings * 0.5) / total) * 100;
  return Math.round(Math.max(0, Math.min(100, score)));
}

export function scoreToGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

export function scoreToColor(score: number): string {
  if (score >= 80) return "text-emerald-400";
  if (score >= 60) return "text-amber-400";
  if (score >= 40) return "text-orange-400";
  return "text-red-400";
}

// ---------------------------------------------------------------------------
// Platform detection
// ---------------------------------------------------------------------------

export function detectPlatform(
  html: string
): "shopify" | "woocommerce" | "magento" | "bigcommerce" | "prestashop" | "wix" | "squarespace" | "unknown" {
  const lower = html.toLowerCase();

  // Shopify
  if (
    lower.includes("shopify.com") ||
    lower.includes("cdn.shopify.com") ||
    lower.includes("shopify-section") ||
    /shopify\.theme/i.test(html)
  ) {
    return "shopify";
  }

  // WooCommerce
  if (
    lower.includes("woocommerce") ||
    lower.includes("wc-block") ||
    lower.includes("wp-content/plugins/woocommerce")
  ) {
    return "woocommerce";
  }

  // Magento
  if (
    lower.includes("mage/") ||
    lower.includes("magento") ||
    lower.includes("varien/") ||
    lower.includes("requirejs/require") && lower.includes("mage")
  ) {
    return "magento";
  }

  // BigCommerce
  if (
    lower.includes("bigcommerce") ||
    lower.includes("stencil") && lower.includes("bigcommerce")
  ) {
    return "bigcommerce";
  }

  // PrestaShop
  if (
    lower.includes("prestashop") ||
    lower.includes("presta") && lower.includes("/modules/")
  ) {
    return "prestashop";
  }

  // Wix
  if (
    lower.includes("wix.com") ||
    lower.includes("static.wixstatic.com") ||
    lower.includes("x-wix-")
  ) {
    return "wix";
  }

  // Squarespace
  if (
    lower.includes("squarespace") ||
    lower.includes("sqsp") ||
    lower.includes("static1.squarespace.com")
  ) {
    return "squarespace";
  }

  return "unknown";
}

// ---------------------------------------------------------------------------
// Content quality
// ---------------------------------------------------------------------------

export function fleschKincaid(text: string): number {
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);

  const sentenceCount = Math.max(1, sentences.length);
  const wordCount = Math.max(1, words.length);

  // Flesch Reading Ease
  const score =
    206.835 -
    1.015 * (wordCount / sentenceCount) -
    84.6 * (syllables / wordCount);

  return Math.round(Math.max(0, Math.min(100, score)) * 10) / 10;
}

export function calculateSimilarity(text1: string, text2: string): number {
  // Jaccard similarity on word bigrams
  const bigrams1 = getBigrams(text1.toLowerCase());
  const bigrams2 = getBigrams(text2.toLowerCase());

  if (bigrams1.size === 0 && bigrams2.size === 0) return 1;
  if (bigrams1.size === 0 || bigrams2.size === 0) return 0;

  let intersection = 0;
  for (const b of bigrams1) {
    if (bigrams2.has(b)) intersection++;
  }

  const union = bigrams1.size + bigrams2.size - intersection;
  return union === 0 ? 0 : Math.round((intersection / union) * 1000) / 1000;
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function attrVal(tag: string, attr: string): string | null {
  // Match attr="value" or attr='value'
  const re = new RegExp(`${attr}\\s*=\\s*["']([^"']*)["']`, "i");
  const m = tag.match(re);
  return m ? decodeEntities(m[1]) : null;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCharCode(parseInt(n, 16))
    );
}

function resolveUrl(href: string, base: string): string {
  try {
    return new URL(href, base).href;
  } catch {
    return href;
  }
}

function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (w.length <= 2) return 1;

  let count = 0;
  const vowels = "aeiouy";
  let prevVowel = false;

  for (const ch of w) {
    const isVowel = vowels.includes(ch);
    if (isVowel && !prevVowel) count++;
    prevVowel = isVowel;
  }

  // Silent e
  if (w.endsWith("e") && count > 1) count--;
  // Words like "le" at end
  if (w.endsWith("le") && w.length > 2 && !vowels.includes(w[w.length - 3])) {
    count++;
  }

  return Math.max(1, count);
}

function getBigrams(text: string): Set<string> {
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  const bigrams = new Set<string>();
  for (let i = 0; i < words.length - 1; i++) {
    bigrams.add(`${words[i]} ${words[i + 1]}`);
  }
  return bigrams;
}

function extractMetaContent(html: string, name: string): string | null {
  // name="X" content="Y"
  const re1 = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`,
    "i"
  );
  // content="Y" name="X"
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`,
    "i"
  );
  const m = html.match(re1) || html.match(re2);
  return m ? decodeEntities(m[1]).trim() : null;
}
