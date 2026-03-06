import { NextResponse } from "next/server";

async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const res = await fetch(sitemapUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
    signal: controller.signal,
  });
  clearTimeout(timeout);

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();

  // Check if it's a sitemap index
  const isSitemapIndex = text.includes("<sitemapindex");

  if (isSitemapIndex) {
    const sitemapMatches = [...text.matchAll(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/gi)];
    const childUrls = sitemapMatches.map((m) => m[1].trim());
    const allUrls: string[] = [];

    // Fetch up to 5 child sitemaps to avoid timeouts
    const childSitemaps = childUrls.slice(0, 5);
    for (const childUrl of childSitemaps) {
      try {
        const childUrls = await fetchSitemapUrls(childUrl);
        allUrls.push(...childUrls);
      } catch {
        // Skip failed child sitemaps
      }
    }
    return allUrls;
  }

  // Regular sitemap — extract <loc> URLs
  const urlMatches = [...text.matchAll(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/gi)];
  return urlMatches.map((m) => m[1].trim());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sitemap1, sitemap2 } = body;

    if (!sitemap1 || !sitemap2) {
      return NextResponse.json({ error: "Both sitemap URLs are required" }, { status: 400 });
    }

    let urls1: string[] = [];
    let urls2: string[] = [];
    let error1: string | null = null;
    let error2: string | null = null;

    [urls1, urls2] = await Promise.all([
      fetchSitemapUrls(sitemap1).catch((e) => { error1 = e.message; return []; }),
      fetchSitemapUrls(sitemap2).catch((e) => { error2 = e.message; return []; }),
    ]);

    if (error1 || error2) {
      return NextResponse.json({
        error: `Could not fetch sitemap(s): ${[error1, error2].filter(Boolean).join(", ")}`,
      }, { status: 422 });
    }

    const set1 = new Set(urls1);
    const set2 = new Set(urls2);

    const onlyInFirst = urls1.filter((u) => !set2.has(u));
    const onlyInSecond = urls2.filter((u) => !set1.has(u));
    const inBoth = urls1.filter((u) => set2.has(u));

    // For display, limit to 500 entries per category to keep response manageable
    const limit = 500;

    return NextResponse.json({
      totalFirst: urls1.length,
      totalSecond: urls2.length,
      onlyInFirst: onlyInFirst.slice(0, limit),
      onlyInSecond: onlyInSecond.slice(0, limit),
      inBoth: inBoth.slice(0, limit),
      onlyInFirstTotal: onlyInFirst.length,
      onlyInSecondTotal: onlyInSecond.length,
      inBothTotal: inBoth.length,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
