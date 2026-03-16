import { NextResponse } from "next/server";

interface HreflangTag {
  hreflang: string;
  href: string;
}

interface HreflangIssue {
  type: "missing_self" | "missing_return" | "invalid_lang" | "duplicate" | "relative_url" | "missing_xdefault" | "conflict";
  message: string;
  tag?: HreflangTag;
}

type ImplementationMethod = "html_head" | "http_header" | "sitemap" | "none";

interface PageResult {
  url: string;
  tags: HreflangTag[];
  issues: HreflangIssue[];
  hasSelfRef: boolean;
  hasXDefault: boolean;
  implementationMethod: ImplementationMethod;
  returnTagResults: { hreflang: string; href: string; hasReturn: boolean | null }[];
}

const VALID_LANG_REGEX = /^(x-default|[a-z]{2,3}(-[A-Za-z]{2,4})?)$/;

function parseHreflangTags(html: string): HreflangTag[] {
  const tags: HreflangTag[] = [];
  const regex = /<link[^>]*rel\s*=\s*["']alternate["'][^>]*>/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    const tag = match[0];
    const hreflangMatch = tag.match(/hreflang\s*=\s*["']([^"']+)["']/i);
    const hrefMatch = tag.match(/href\s*=\s*["']([^"']+)["']/i);

    if (hreflangMatch && hrefMatch) {
      tags.push({
        hreflang: hreflangMatch[1].trim(),
        href: hrefMatch[1].trim(),
      });
    }
  }

  return tags;
}

function parseHreflangFromHeader(headers: Headers): HreflangTag[] {
  const tags: HreflangTag[] = [];
  const linkHeader = headers.get("link");
  if (!linkHeader) return tags;

  // Parse Link: <url>; rel="alternate"; hreflang="xx"
  const parts = linkHeader.split(",");
  for (const part of parts) {
    const urlMatch = part.match(/<([^>]+)>/);
    const hreflangMatch = part.match(/hreflang=["']?([^"';\s]+)/i);
    const relMatch = part.match(/rel=["']?alternate/i);
    if (urlMatch && hreflangMatch && relMatch) {
      tags.push({ hreflang: hreflangMatch[1], href: urlMatch[1] });
    }
  }
  return tags;
}

function detectImplementationMethod(html: string, headers: Headers): ImplementationMethod {
  const hasHtmlTags = /<link[^>]*rel=["']alternate["'][^>]*hreflang/i.test(html);
  const hasHeaderTags = parseHreflangFromHeader(headers).length > 0;

  if (hasHtmlTags) return "html_head";
  if (hasHeaderTags) return "http_header";
  return "none";
}

function validateTags(pageUrl: string, tags: HreflangTag[]): HreflangIssue[] {
  const issues: HreflangIssue[] = [];
  const seen = new Set<string>();

  let hasSelf = false;
  let hasXDefault = false;

  for (const tag of tags) {
    // Check valid language code
    if (!VALID_LANG_REGEX.test(tag.hreflang)) {
      issues.push({
        type: "invalid_lang",
        message: `Invalid language code: "${tag.hreflang}"`,
        tag,
      });
    }

    // Check for relative URLs
    if (!tag.href.startsWith("http://") && !tag.href.startsWith("https://")) {
      issues.push({
        type: "relative_url",
        message: `Relative URL found for hreflang="${tag.hreflang}": ${tag.href}`,
        tag,
      });
    }

    // Check for duplicates
    const key = tag.hreflang.toLowerCase();
    if (seen.has(key)) {
      issues.push({
        type: "duplicate",
        message: `Duplicate hreflang="${tag.hreflang}" found`,
        tag,
      });
    }
    seen.add(key);

    // Self-referencing check
    try {
      const tagUrl = new URL(tag.href);
      const pageUrlObj = new URL(pageUrl);
      if (tagUrl.origin + tagUrl.pathname === pageUrlObj.origin + pageUrlObj.pathname) {
        hasSelf = true;
      }
    } catch {
      // URL parse failed
    }

    if (key === "x-default") {
      hasXDefault = true;
    }
  }

  if (tags.length > 0 && !hasSelf) {
    issues.push({
      type: "missing_self",
      message: "No self-referencing hreflang tag found. Each page should include a hreflang tag pointing to itself.",
    });
  }

  if (tags.length > 0 && !hasXDefault) {
    issues.push({
      type: "missing_xdefault",
      message: 'No x-default hreflang tag found. Consider adding an x-default for users outside targeted regions.',
    });
  }

  return issues;
}

async function checkReturnTags(pageUrl: string, tags: HreflangTag[]): Promise<{ hreflang: string; href: string; hasReturn: boolean | null }[]> {
  const results: { hreflang: string; href: string; hasReturn: boolean | null }[] = [];

  // Only check up to 10 external URLs
  const externalTags = tags.filter((t) => {
    try {
      const tu = new URL(t.href);
      const pu = new URL(pageUrl);
      return tu.origin + tu.pathname !== pu.origin + pu.pathname;
    } catch { return false; }
  }).slice(0, 10);

  await Promise.all(
    externalTags.map(async (tag) => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(tag.href, {
          signal: controller.signal,
          headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Hreflang Validator/1.0)" },
        });
        clearTimeout(timeout);
        const html = await res.text();
        const remoteTags = parseHreflangTags(html);
        const hasReturn = remoteTags.some((rt) => {
          try {
            const rtUrl = new URL(rt.href);
            const origUrl = new URL(pageUrl);
            return rtUrl.origin + rtUrl.pathname === origUrl.origin + origUrl.pathname;
          } catch { return false; }
        });
        results.push({ hreflang: tag.hreflang, href: tag.href, hasReturn });
      } catch {
        results.push({ hreflang: tag.hreflang, href: tag.href, hasReturn: null });
      }
    })
  );

  return results;
}

async function checkPage(pageUrl: string): Promise<PageResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  let html: string;
  let headers: Headers;
  try {
    const res = await fetch(pageUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Hreflang Validator/1.0)",
      },
    });
    headers = res.headers;
    html = await res.text();
  } finally {
    clearTimeout(timeout);
  }

  const implementationMethod = detectImplementationMethod(html, headers!);
  let tags = parseHreflangTags(html);

  // Also check HTTP headers
  const headerTags = parseHreflangFromHeader(headers!);
  if (headerTags.length > 0 && tags.length === 0) {
    tags = headerTags;
  }

  // Check for conflicting implementations
  const issues = validateTags(pageUrl, tags);

  if (headerTags.length > 0 && parseHreflangTags(html).length > 0) {
    issues.push({
      type: "conflict",
      message: "Hreflang tags found in both HTML <head> and HTTP headers. Use only one method to avoid conflicts.",
    });
  }

  // Check return tags
  const returnTagResults = await checkReturnTags(pageUrl, tags);

  // Add missing return tag issues
  for (const rt of returnTagResults) {
    if (rt.hasReturn === false) {
      issues.push({
        type: "missing_return",
        message: `Page ${rt.href} (hreflang="${rt.hreflang}") does not have a return tag pointing back to this page.`,
        tag: { hreflang: rt.hreflang, href: rt.href },
      });
    }
  }

  return {
    url: pageUrl,
    tags,
    issues,
    hasSelfRef: tags.some((t) => {
      try {
        const tu = new URL(t.href);
        const pu = new URL(pageUrl);
        return tu.origin + tu.pathname === pu.origin + pu.pathname;
      } catch { return false; }
    }),
    hasXDefault: tags.some((t) => t.hreflang.toLowerCase() === "x-default"),
    implementationMethod,
    returnTagResults,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length > 20) {
      return NextResponse.json({ error: "Too many URLs" }, { status: 400 });
    }

    const results: PageResult[] = await Promise.all(
      urls.map((url: string) =>
        checkPage(url).catch(() => ({
          url,
          tags: [],
          issues: [{ type: "missing_self" as const, message: "Failed to fetch page" }],
          hasSelfRef: false,
          hasXDefault: false,
          implementationMethod: "none" as const,
          returnTagResults: [],
        }))
      )
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
