import { NextResponse } from "next/server";

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

function parseUrlEntries(xml: string): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const urlBlockRegex = /<url>([\s\S]*?)<\/url>/gi;
  let match: RegExpExecArray | null;

  while ((match = urlBlockRegex.exec(xml)) !== null) {
    const block = match[1];
    const locMatch = block.match(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/i);
    if (!locMatch) continue;

    const entry: SitemapEntry = { loc: locMatch[1].trim() };

    const lastmodMatch = block.match(/<lastmod>\s*([^<]+)\s*<\/lastmod>/i);
    if (lastmodMatch) entry.lastmod = lastmodMatch[1].trim();

    const changefreqMatch = block.match(/<changefreq>\s*([^<]+)\s*<\/changefreq>/i);
    if (changefreqMatch) entry.changefreq = changefreqMatch[1].trim();

    const priorityMatch = block.match(/<priority>\s*([^<]+)\s*<\/priority>/i);
    if (priorityMatch) entry.priority = priorityMatch[1].trim();

    entries.push(entry);
  }

  return entries;
}

async function fetchSitemap(
  sitemapUrl: string
): Promise<{ entries: SitemapEntry[]; sitemapCount: number; isSitemapIndex: boolean }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  let text: string;
  try {
    const res = await fetch(sitemapUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    text = await res.text();
  } finally {
    clearTimeout(timeout);
  }

  const isSitemapIndex = text.includes("<sitemapindex");

  if (isSitemapIndex) {
    const sitemapLocs = [...text.matchAll(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/gi)];
    const childUrls = sitemapLocs.map((m) => m[1].trim());

    const allEntries: SitemapEntry[] = [];
    const childSitemaps = childUrls.slice(0, 10);
    let sitemapCount = 0;

    for (const childUrl of childSitemaps) {
      try {
        const childController = new AbortController();
        const childTimeout = setTimeout(() => childController.abort(), 15000);
        const childRes = await fetch(childUrl, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
          signal: childController.signal,
        });
        clearTimeout(childTimeout);
        if (!childRes.ok) continue;
        const childText = await childRes.text();
        const childEntries = parseUrlEntries(childText);
        allEntries.push(...childEntries);
        sitemapCount++;

        if (allEntries.length >= 10000) break;
      } catch {
        // Skip failed child sitemaps
      }
    }

    return {
      entries: allEntries.slice(0, 10000),
      sitemapCount,
      isSitemapIndex: true,
    };
  }

  // Regular sitemap
  const entries = parseUrlEntries(text);
  return {
    entries: entries.slice(0, 10000),
    sitemapCount: 1,
    isSitemapIndex: false,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const result = await fetchSitemap(url);

    return NextResponse.json({
      urls: result.entries,
      sitemapCount: result.sitemapCount,
      isSitemapIndex: result.isSitemapIndex,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
