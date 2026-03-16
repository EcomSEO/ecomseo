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

function getDirectory(url: string): string {
  try {
    const parsed = new URL(url);
    const pathParts = parsed.pathname.split("/").filter(Boolean);
    if (pathParts.length <= 1) return "/";
    return "/" + pathParts.slice(0, -1).join("/");
  } catch {
    return "/";
  }
}

async function fetchXml(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchSitemap(
  sitemapUrl: string
): Promise<{
  entries: SitemapEntry[];
  sitemapCount: number;
  isSitemapIndex: boolean;
  childSitemaps: string[];
}> {
  const text = await fetchXml(sitemapUrl);
  const isSitemapIndex = text.includes("<sitemapindex");

  if (isSitemapIndex) {
    const sitemapLocs = [...text.matchAll(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/gi)];
    const childUrls = sitemapLocs.map((m) => m[1].trim());
    const childSitemaps = childUrls.slice(0, 10);

    const allEntries: SitemapEntry[] = [];
    let sitemapCount = 0;

    for (const childUrl of childSitemaps) {
      try {
        const childText = await fetchXml(childUrl);
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
      childSitemaps,
    };
  }

  const entries = parseUrlEntries(text);
  return {
    entries: entries.slice(0, 10000),
    sitemapCount: 1,
    isSitemapIndex: false,
    childSitemaps: [],
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    // Auto-detect: if user enters a domain without /sitemap.xml, append it
    try {
      const parsed = new URL(url);
      if (
        parsed.pathname === "/" ||
        parsed.pathname === ""
      ) {
        url = parsed.origin + "/sitemap.xml";
      }
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const result = await fetchSitemap(url);

    // Compute stats by directory
    const byDirectory: Record<string, number> = {};
    for (const entry of result.entries) {
      const dir = getDirectory(entry.loc);
      byDirectory[dir] = (byDirectory[dir] || 0) + 1;
    }

    return NextResponse.json({
      sitemapUrl: url,
      isIndex: result.isSitemapIndex,
      childSitemaps: result.childSitemaps,
      urls: result.entries,
      totalUrls: result.entries.length,
      sitemapCount: result.sitemapCount,
      stats: { byDirectory },
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
