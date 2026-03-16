import { NextResponse } from "next/server";

interface SitemapUrlMeta {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

function parseUrlEntries(xml: string): SitemapUrlMeta[] {
  const entries: SitemapUrlMeta[] = [];
  const urlBlockRegex = /<url>([\s\S]*?)<\/url>/gi;
  let match: RegExpExecArray | null;
  while ((match = urlBlockRegex.exec(xml)) !== null) {
    const block = match[1];
    const locMatch = block.match(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/i);
    if (!locMatch) continue;
    const entry: SitemapUrlMeta = { loc: locMatch[1].trim() };
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

async function fetchSitemapEntries(sitemapUrl: string): Promise<SitemapUrlMeta[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const res = await fetch(sitemapUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
    signal: controller.signal,
  });
  clearTimeout(timeout);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();

  const isSitemapIndex = text.includes("<sitemapindex");
  if (isSitemapIndex) {
    const sitemapMatches = [...text.matchAll(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/gi)];
    const childUrls = sitemapMatches.map((m) => m[1].trim());
    const allEntries: SitemapUrlMeta[] = [];
    for (const childUrl of childUrls.slice(0, 5)) {
      try {
        const childRes = await fetch(childUrl, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
          signal: AbortSignal.timeout(15000),
        });
        if (!childRes.ok) continue;
        const childText = await childRes.text();
        allEntries.push(...parseUrlEntries(childText));
      } catch { /* skip */ }
    }
    return allEntries;
  }

  return parseUrlEntries(text);
}

function getDirectory(url: string): string {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split("/").filter(Boolean);
    return parts.length > 0 ? "/" + parts[0] : "/";
  } catch { return "/"; }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sitemap1, sitemap2 } = body;

    if (!sitemap1 || !sitemap2) {
      return NextResponse.json({ error: "Both sitemap URLs are required" }, { status: 400 });
    }

    let entries1: SitemapUrlMeta[] = [];
    let entries2: SitemapUrlMeta[] = [];
    let error1: string | null = null;
    let error2: string | null = null;

    [entries1, entries2] = await Promise.all([
      fetchSitemapEntries(sitemap1).catch((e) => { error1 = e.message; return []; }),
      fetchSitemapEntries(sitemap2).catch((e) => { error2 = e.message; return []; }),
    ]);

    if (error1 || error2) {
      return NextResponse.json({
        error: `Could not fetch sitemap(s): ${[error1, error2].filter(Boolean).join(", ")}`,
      }, { status: 422 });
    }

    const map1 = new Map(entries1.map((e) => [e.loc, e]));
    const map2 = new Map(entries2.map((e) => [e.loc, e]));
    const urls1 = [...map1.keys()];
    const urls2 = [...map2.keys()];
    const set1 = new Set(urls1);
    const set2 = new Set(urls2);

    const onlyInA = urls1.filter((u) => !set2.has(u));
    const onlyInB = urls2.filter((u) => !set1.has(u));
    const inBoth = urls1.filter((u) => set2.has(u));
    const totalUnion = new Set([...urls1, ...urls2]).size;
    const overlapPercent = totalUnion > 0 ? Math.round((inBoth.length / totalUnion) * 10000) / 100 : 0;

    // Detect changes for URLs in both (lastmod differences)
    const changed: { url: string; lastmod1?: string; lastmod2?: string }[] = [];
    for (const url of inBoth) {
      const e1 = map1.get(url);
      const e2 = map2.get(url);
      if (e1?.lastmod && e2?.lastmod && e1.lastmod !== e2.lastmod) {
        changed.push({ url, lastmod1: e1.lastmod, lastmod2: e2.lastmod });
      }
    }

    // Directory breakdown for Venn segments
    const dirStatsA: Record<string, number> = {};
    const dirStatsB: Record<string, number> = {};
    for (const u of onlyInA) { const d = getDirectory(u); dirStatsA[d] = (dirStatsA[d] || 0) + 1; }
    for (const u of onlyInB) { const d = getDirectory(u); dirStatsB[d] = (dirStatsB[d] || 0) + 1; }

    const limit = 500;

    return NextResponse.json({
      sitemapA: { url: sitemap1, count: urls1.length },
      sitemapB: { url: sitemap2, count: urls2.length },
      totalFirst: urls1.length,
      totalSecond: urls2.length,
      onlyInFirst: onlyInA.slice(0, limit),
      onlyInSecond: onlyInB.slice(0, limit),
      inBoth: inBoth.slice(0, limit),
      onlyInFirstTotal: onlyInA.length,
      onlyInSecondTotal: onlyInB.length,
      inBothTotal: inBoth.length,
      overlapPercent,
      changed: changed.slice(0, 100),
      changedTotal: changed.length,
      dirStatsA,
      dirStatsB,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
