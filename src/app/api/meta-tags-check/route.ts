import { NextResponse } from "next/server";

interface MetaTagResult {
  url: string;
  status: number;
  // Title
  title: string | null;
  titleLength: number;
  titlePixelWidth: number;
  // Description
  description: string | null;
  descLength: number;
  descPixelWidth: number;
  // Meta robots
  robots: string | null;
  // Canonical
  canonical: string | null;
  canonicalIsSelfReferencing: boolean;
  // Open Graph
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogType: string | null;
  ogUrl: string | null;
  // Twitter Card
  twitterCard: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
  // Other
  viewport: string | null;
  charset: string | null;
  language: string | null;
  // All meta tags (for raw view)
  allMeta: Array<{ name: string; content: string; property?: string }>;
  // Issues
  issues: string[];
  // Score
  score: number;
}

// Character width map for Google SERP font (Arial 16px approximation)
// Widths in pixels for common characters
const CHAR_WIDTHS: Record<string, number> = {
  // Uppercase
  A: 9.5, B: 9.2, C: 9.8, D: 10.1, E: 8.5, F: 7.8, G: 10.5, H: 10.1,
  I: 3.9, J: 6.5, K: 9.2, L: 7.8, M: 11.8, N: 10.1, O: 10.5, P: 9.2,
  Q: 10.5, R: 9.5, S: 9.2, T: 8.5, U: 10.1, V: 9.2, W: 13.1, X: 9.2,
  Y: 8.5, Z: 8.5,
  // Lowercase
  a: 7.8, b: 8.5, c: 7.2, d: 8.5, e: 7.8, f: 4.6, g: 8.5, h: 8.5,
  i: 3.3, j: 3.6, k: 7.8, l: 3.3, m: 13.1, n: 8.5, o: 8.5, p: 8.5,
  q: 8.5, r: 5.2, s: 7.2, t: 5.2, u: 8.5, v: 7.2, w: 10.5, x: 7.2,
  y: 7.2, z: 6.5,
  // Numbers
  "0": 8.5, "1": 8.5, "2": 8.5, "3": 8.5, "4": 8.5, "5": 8.5,
  "6": 8.5, "7": 8.5, "8": 8.5, "9": 8.5,
  // Punctuation & symbols
  " ": 4.0, ".": 4.0, ",": 4.0, ":": 4.0, ";": 4.0, "!": 4.6,
  "?": 7.8, "'": 3.3, '"': 5.9, "-": 5.2, "_": 7.2, "/": 5.2,
  "(": 5.2, ")": 5.2, "[": 5.2, "]": 5.2, "{": 5.2, "}": 5.2,
  "&": 9.8, "@": 14.4, "#": 8.5, "$": 8.5, "%": 10.5, "+": 8.5,
  "=": 8.5, "|": 4.0, "\\": 5.2, "~": 8.5, "`": 5.2, "^": 8.5,
  "<": 8.5, ">": 8.5,
};

const DEFAULT_CHAR_WIDTH = 7.8;

function estimatePixelWidth(text: string): number {
  let width = 0;
  for (const char of text) {
    width += CHAR_WIDTHS[char] ?? DEFAULT_CHAR_WIDTH;
  }
  return Math.round(width);
}

function getMetaContent(html: string, nameOrProperty: string): string | null {
  // Match by name attribute
  const byName = html.match(
    new RegExp(`<meta[^>]+name=["']${nameOrProperty}["'][^>]*content=["']([^"']*)["']`, "i")
  ) || html.match(
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*name=["']${nameOrProperty}["']`, "i")
  );
  if (byName) return byName[1].trim() || null;

  // Match by property attribute (for OG tags)
  const byProp = html.match(
    new RegExp(`<meta[^>]+property=["']${nameOrProperty}["'][^>]*content=["']([^"']*)["']`, "i")
  ) || html.match(
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*property=["']${nameOrProperty}["']`, "i")
  );
  if (byProp) return byProp[1].trim() || null;

  return null;
}

function extractAllMeta(html: string): Array<{ name: string; content: string; property?: string }> {
  const metas: Array<{ name: string; content: string; property?: string }> = [];
  const metaRegex = /<meta\s+([^>]*)>/gi;
  let match;

  while ((match = metaRegex.exec(html)) !== null) {
    const attrs = match[1];
    const nameMatch = attrs.match(/name=["']([^"']*)["']/i);
    const propertyMatch = attrs.match(/property=["']([^"']*)["']/i);
    const contentMatch = attrs.match(/content=["']([^"']*)["']/i);

    const name = nameMatch?.[1] || propertyMatch?.[1] || "";
    const content = contentMatch?.[1] || "";
    if (!name && !content) continue;

    const entry: { name: string; content: string; property?: string } = { name, content };
    if (propertyMatch) entry.property = propertyMatch[1];
    metas.push(entry);
  }

  return metas;
}

function extractFullMeta(html: string, fetchedUrl: string): Omit<MetaTagResult, "url" | "status" | "issues" | "score"> {
  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() || null : null;

  // Description
  const description = getMetaContent(html, "description");

  // Robots
  const robots = getMetaContent(html, "robots");

  // Canonical
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)
    || html.match(/<link[^>]+href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() || null : null;

  // Check if canonical is self-referencing
  let canonicalIsSelfReferencing = false;
  if (canonical) {
    try {
      const canonicalUrl = new URL(canonical, fetchedUrl).href;
      const pageUrl = new URL(fetchedUrl).href;
      canonicalIsSelfReferencing = canonicalUrl.replace(/\/$/, "") === pageUrl.replace(/\/$/, "");
    } catch {
      canonicalIsSelfReferencing = false;
    }
  }

  // Open Graph
  const ogTitle = getMetaContent(html, "og:title");
  const ogDescription = getMetaContent(html, "og:description");
  const ogImage = getMetaContent(html, "og:image");
  const ogType = getMetaContent(html, "og:type");
  const ogUrl = getMetaContent(html, "og:url");

  // Twitter Card
  const twitterCard = getMetaContent(html, "twitter:card");
  const twitterTitle = getMetaContent(html, "twitter:title");
  const twitterDescription = getMetaContent(html, "twitter:description");
  const twitterImage = getMetaContent(html, "twitter:image");

  // Viewport
  const viewport = getMetaContent(html, "viewport");

  // Charset
  const charsetMatch = html.match(/<meta[^>]+charset=["']([^"']*)["']/i)
    || html.match(/<meta[^>]+charset=([^\s>"']+)/i);
  const charset = charsetMatch ? charsetMatch[1].trim() : null;

  // Language
  const langMatch = html.match(/<html[^>]+lang=["']([^"']*)["']/i);
  const language = langMatch ? langMatch[1].trim() : null;

  // All meta tags
  const allMeta = extractAllMeta(html);

  return {
    title,
    titleLength: title ? title.length : 0,
    titlePixelWidth: title ? estimatePixelWidth(title) : 0,
    description,
    descLength: description ? description.length : 0,
    descPixelWidth: description ? estimatePixelWidth(description) : 0,
    robots,
    canonical,
    canonicalIsSelfReferencing,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    viewport,
    charset,
    language,
    allMeta,
  };
}

function detectIssues(result: Omit<MetaTagResult, "issues" | "score">, fetchedUrl: string): string[] {
  const issues: string[] = [];

  // Title issues — flag if over 60 chars OR over 600px
  if (!result.title) {
    issues.push("missing_title");
  } else {
    if (result.titleLength > 60 || result.titlePixelWidth > 600) issues.push("title_too_long");
    else if (result.titleLength < 30 || result.titlePixelWidth < 200) issues.push("title_too_short");
  }

  // Description issues — flag if over 158 chars OR over 960px
  if (!result.description) {
    issues.push("missing_description");
  } else {
    if (result.descLength > 158 || result.descPixelWidth > 960) issues.push("desc_too_long");
    else if (result.descLength < 70 || result.descPixelWidth < 400) issues.push("desc_too_short");
  }

  // Canonical issues
  if (!result.canonical) {
    issues.push("missing_canonical");
  } else {
    // Check canonical mismatch (canonical points to a different URL)
    try {
      const canonicalUrl = new URL(result.canonical, fetchedUrl).href.replace(/\/$/, "");
      const pageUrl = new URL(fetchedUrl).href.replace(/\/$/, "");
      if (canonicalUrl !== pageUrl) {
        issues.push("canonical_mismatch");
      }
    } catch {
      // ignore URL parse errors
    }
  }

  // Viewport
  if (!result.viewport) {
    issues.push("missing_viewport");
  }

  // Open Graph
  if (!result.ogTitle) issues.push("missing_og_title");
  if (!result.ogDescription) issues.push("missing_og_description");
  if (!result.ogImage) issues.push("missing_og_image");

  // Twitter Card
  if (!result.twitterCard) issues.push("no_twitter_card");

  return issues;
}

function calculateScore(issues: string[]): number {
  // Start at 100, deduct per issue type
  const deductions: Record<string, number> = {
    missing_title: 25,
    title_too_long: 10,
    title_too_short: 8,
    missing_description: 20,
    desc_too_long: 8,
    desc_too_short: 6,
    missing_canonical: 10,
    canonical_mismatch: 5,
    missing_viewport: 15,
    missing_og_title: 5,
    missing_og_description: 5,
    missing_og_image: 5,
    no_twitter_card: 3,
    duplicate_title: 8,
    duplicate_description: 6,
    fetch_error: 50,
  };

  let score = 100;
  for (const issue of issues) {
    score -= deductions[issue] ?? 3;
  }
  return Math.max(0, Math.min(100, score));
}

export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "Missing URLs" }, { status: 400 });
    }
    if (urls.length > 50) {
      return NextResponse.json({ error: "Too many URLs (max 50)" }, { status: 400 });
    }

    const results: MetaTagResult[] = await Promise.all(
      urls.map(async (url: string): Promise<MetaTagResult> => {
        const base: MetaTagResult = {
          url,
          status: 0,
          title: null,
          titleLength: 0,
          titlePixelWidth: 0,
          description: null,
          descLength: 0,
          descPixelWidth: 0,
          robots: null,
          canonical: null,
          canonicalIsSelfReferencing: false,
          ogTitle: null,
          ogDescription: null,
          ogImage: null,
          ogType: null,
          ogUrl: null,
          twitterCard: null,
          twitterTitle: null,
          twitterDescription: null,
          twitterImage: null,
          viewport: null,
          charset: null,
          language: null,
          allMeta: [],
          issues: [],
          score: 0,
        };

        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO MetaTags Checker/1.0)" },
            signal: controller.signal,
            redirect: "follow",
          });
          clearTimeout(timeout);

          base.status = res.status;
          const html = await res.text();
          const meta = extractFullMeta(html, url);

          Object.assign(base, meta);

          // Detect issues
          base.issues = detectIssues({ ...base }, url);
        } catch {
          base.issues.push("fetch_error");
        }

        base.score = calculateScore(base.issues);
        return base;
      })
    );

    // Detect duplicates across URLs
    const titleCounts: Record<string, number> = {};
    const descCounts: Record<string, number> = {};

    for (const r of results) {
      if (r.title) titleCounts[r.title] = (titleCounts[r.title] || 0) + 1;
      if (r.description) descCounts[r.description] = (descCounts[r.description] || 0) + 1;
    }

    for (const r of results) {
      if (r.title && titleCounts[r.title] > 1 && !r.issues.includes("duplicate_title")) {
        r.issues.push("duplicate_title");
        r.score = calculateScore(r.issues);
      }
      if (r.description && descCounts[r.description] > 1 && !r.issues.includes("duplicate_description")) {
        r.issues.push("duplicate_description");
        r.score = calculateScore(r.issues);
      }
    }

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
