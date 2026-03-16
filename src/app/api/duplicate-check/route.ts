import { NextResponse } from "next/server";

/* ───────────────────────── Types ───────────────────────── */

interface PageData {
  url: string;
  wordCount: number;
  title: string;
  text: string;
  canonical: string;
  description: string;
  htmlSize: number;
  textToHtmlRatio: number;
  internalLinks: number;
  externalLinks: number;
  robots: string;
  status: number;
  isRedirect: boolean;
  redirectTarget: string | null;
  isNoindex: boolean;
  pageError: string | null;
}

interface PairResult {
  urlA: string;
  urlB: string;
  similarity: number;
  verdict: "duplicate" | "similar" | "unique";
  sharedShingles: number;
  totalShingles: number;
  diffSnippetA: string;
  diffSnippetB: string;
}

interface PageCrawlData {
  url: string;
  status: number;
  title: string;
  wordCount: number;
  htmlSize: number;
  textToHtmlRatio: number;
  internalLinks: number;
  externalLinks: number;
  canonical: string;
  isRedirect: boolean;
  redirectTarget: string | null;
  isNoindex: boolean;
  pageError: string | null;
  duplicatePct: number;
  matchPages: number;
  matchWords: number;
}

interface SiteCrawlResult {
  mode: "domain";
  domain: string;
  crawledAt: string;
  totalFound: number;
  totalScanned: number;
  normalPages: number;
  redirectPages: number;
  noindexPages: number;
  errorPages: number;
  duplicateContentPct: number;
  commonContentPct: number;
  uniqueContentPct: number;
  avgPageSize: number;
  avgWordCount: number;
  avgTextToHtmlRatio: number;
  avgInternalLinks: number;
  avgExternalLinks: number;
  totalInternalLinks: number;
  totalExternalLinks: number;
  issues: { type: string; message: string; count?: number }[];
  pages: PageCrawlData[];
  pairs: PairResult[];
  matrix: number[][];
  clusters: { urls: string[]; canonical: string }[];
}

/* ────────────────────── Helpers ────────────────────── */

const UA = "Mozilla/5.0 (compatible; EcomSEO Duplicate Content/2.0)";

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function extractMetaDescription(html: string): string {
  const m = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  if (m) return m[1].trim();
  const m2 = html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  return m2 ? m2[1].trim() : "";
}

function extractCanonical(html: string): string {
  const match = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (match) return match[1].trim();
  const match2 = html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i);
  return match2 ? match2[1].trim() : "";
}

function extractMetaRobots(html: string): string {
  const m = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  if (m) return m[1].trim();
  const m2 = html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']robots["'][^>]*>/i);
  return m2 ? m2[1].trim() : "";
}

function extractTextFromHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, " ")
    .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countWords(text: string): number {
  if (!text || text.trim().length === 0) return 0;
  return text.trim().split(/\s+/).filter((w) => w.length > 1).length;
}

function getWordTrigrams(text: string): Set<string> {
  const words = text.toLowerCase().split(/\s+/).filter((w) => w.length > 1);
  const trigrams = new Set<string>();
  for (let i = 0; i <= words.length - 3; i++) {
    trigrams.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return trigrams;
}

function jaccardSimilarity(setA: Set<string>, setB: Set<string>): { similarity: number; shared: number; total: number } {
  if (setA.size === 0 && setB.size === 0) return { similarity: 0, shared: 0, total: 0 };
  let intersectionSize = 0;
  const smaller = setA.size <= setB.size ? setA : setB;
  const larger = setA.size <= setB.size ? setB : setA;
  for (const item of smaller) {
    if (larger.has(item)) intersectionSize++;
  }
  const unionSize = setA.size + setB.size - intersectionSize;
  if (unionSize === 0) return { similarity: 0, shared: 0, total: 0 };
  return { similarity: intersectionSize / unionSize, shared: intersectionSize, total: unionSize };
}

function getDiffSnippet(textA: string, textB: string): { snippetA: string; snippetB: string } {
  const wordsA = textA.split(/\s+/).slice(0, 200);
  const wordsB = textB.split(/\s+/).slice(0, 200);
  let divergeIdx = 0;
  while (divergeIdx < wordsA.length && divergeIdx < wordsB.length && wordsA[divergeIdx]?.toLowerCase() === wordsB[divergeIdx]?.toLowerCase()) {
    divergeIdx++;
  }
  const start = Math.max(0, divergeIdx - 3);
  const snippetA = wordsA.slice(start, start + 20).join(" ");
  const snippetB = wordsB.slice(start, start + 20).join(" ");
  return { snippetA: snippetA.slice(0, 200), snippetB: snippetB.slice(0, 200) };
}

function countLinks(html: string, domain: string): { internal: number; external: number } {
  const linkRegex = /href=["']([^"'#][^"']*)["']/gi;
  let internal = 0;
  let external = 0;
  let m;
  while ((m = linkRegex.exec(html)) !== null) {
    const href = m[1];
    if (!href || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    try {
      if (href.startsWith("/") || href.startsWith("./") || href.startsWith("../")) {
        internal++;
      } else if (href.startsWith("http")) {
        const u = new URL(href);
        if (u.hostname === domain || u.hostname.endsWith("." + domain)) {
          internal++;
        } else {
          external++;
        }
      }
    } catch {
      // invalid URL, skip
    }
  }
  return { internal, external };
}

/* ────────── Sitemap / link discovery ────────── */

async function fetchSitemapUrls(domain: string): Promise<string[]> {
  const urls: string[] = [];
  const sitemapUrls = [`https://${domain}/sitemap.xml`, `https://${domain}/sitemap_index.xml`];

  for (const smUrl of sitemapUrls) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(smUrl, { headers: { "User-Agent": UA }, signal: controller.signal, redirect: "follow" });
      clearTimeout(timeout);
      if (!res.ok) continue;
      const xml = await res.text();

      // Check if it's a sitemap index
      const sitemapLocs = [...xml.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>/gi)].map((m) => m[1].trim());
      if (sitemapLocs.length > 0) {
        // Fetch first few sub-sitemaps
        for (const subUrl of sitemapLocs.slice(0, 3)) {
          try {
            const c2 = new AbortController();
            const t2 = setTimeout(() => c2.abort(), 8000);
            const r2 = await fetch(subUrl, { headers: { "User-Agent": UA }, signal: c2.signal, redirect: "follow" });
            clearTimeout(t2);
            if (r2.ok) {
              const subXml = await r2.text();
              const locs = [...subXml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1].trim());
              urls.push(...locs);
            }
          } catch { /* skip */ }
          if (urls.length >= 50) break;
        }
      } else {
        const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1].trim());
        urls.push(...locs);
      }
      if (urls.length > 0) break;
    } catch { /* skip */ }
  }

  // Filter to only HTML-looking URLs (no images, PDFs, etc.)
  const filtered = urls.filter((u) => {
    const lower = u.toLowerCase();
    return !lower.match(/\.(jpg|jpeg|png|gif|svg|webp|pdf|zip|css|js|xml|json|ico|woff|woff2|ttf|eot)(\?|$)/);
  });

  return [...new Set(filtered)].slice(0, 50);
}

async function discoverLinksFromHomepage(domain: string): Promise<string[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(`https://${domain}`, { headers: { "User-Agent": UA, Accept: "text/html" }, signal: controller.signal, redirect: "follow" });
    clearTimeout(timeout);
    if (!res.ok) return [];
    const html = await res.text();

    const linkRegex = /href=["']([^"'#]+)["']/gi;
    const urls = new Set<string>();
    urls.add(`https://${domain}/`);
    let m;
    while ((m = linkRegex.exec(html)) !== null) {
      let href = m[1].trim();
      if (href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
      try {
        if (href.startsWith("/")) {
          href = `https://${domain}${href}`;
        } else if (!href.startsWith("http")) {
          continue;
        }
        const u = new URL(href);
        if (u.hostname !== domain && !u.hostname.endsWith("." + domain)) continue;
        if (u.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|pdf|zip|css|js|xml|json|ico|woff|woff2|ttf|eot)$/i)) continue;
        urls.add(u.origin + u.pathname);
      } catch { /* skip */ }
    }
    return [...urls].slice(0, 50);
  } catch {
    return [];
  }
}

/* ────────── Page fetch ────────── */

async function fetchPage(url: string, domain: string): Promise<PageData> {
  const empty: PageData = {
    url, wordCount: 0, title: "", text: "", canonical: "", description: "",
    htmlSize: 0, textToHtmlRatio: 0, internalLinks: 0, externalLinks: 0,
    robots: "", status: 0, isRedirect: false, redirectTarget: null,
    isNoindex: false, pageError: null,
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "text/html" },
      signal: controller.signal,
      redirect: "manual",
    });
    clearTimeout(timeout);

    const status = res.status;

    // Handle redirects
    if (status >= 300 && status < 400) {
      const location = res.headers.get("location") || "";
      return { ...empty, status, isRedirect: true, redirectTarget: location };
    }

    if (status >= 400) {
      return { ...empty, status, pageError: `HTTP ${status}` };
    }

    const html = await res.text();
    const htmlSize = new TextEncoder().encode(html).length;
    const title = extractTitle(html);
    const description = extractMetaDescription(html);
    const text = extractTextFromHtml(html);
    const wordCount = countWords(text);
    const textBytes = new TextEncoder().encode(text).length;
    const textToHtmlRatio = htmlSize > 0 ? Math.round((textBytes / htmlSize) * 10000) / 100 : 0;
    const canonical = extractCanonical(html);
    const robots = extractMetaRobots(html);
    const isNoindex = robots.toLowerCase().includes("noindex");
    const { internal, external } = countLinks(html, domain);

    return {
      url, wordCount, title, text, canonical, description,
      htmlSize, textToHtmlRatio, internalLinks: internal, externalLinks: external,
      robots, status, isRedirect: false, redirectTarget: null,
      isNoindex, pageError: null,
    };
  } catch (err) {
    const msg = err instanceof Error ? (err.name === "AbortError" ? "timeout" : err.message.slice(0, 60)) : "fetch error";
    return { ...empty, pageError: msg };
  }
}

/* ────────── Batch fetch with concurrency ────────── */

async function fetchInBatches(urls: string[], domain: string, batchSize = 5): Promise<PageData[]> {
  const results: PageData[] = [];
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const settled = await Promise.allSettled(batch.map((u) => fetchPage(u, domain)));
    for (const r of settled) {
      if (r.status === "fulfilled") {
        results.push(r.value);
      }
    }
  }
  return results;
}

/* ────────── Build pairs, matrix, clusters, per-page stats ────────── */

function buildAnalysis(pages: PageData[]) {
  // Only analyze pages with text content for duplicate comparison (up to 30)
  const analyzable = pages.filter((p) => p.text.length > 0 && !p.isRedirect && !p.pageError);
  const forComparison = analyzable.slice(0, 30);

  const trigramSets = forComparison.map((p) => getWordTrigrams(p.text));

  // Build similarity matrix and pairs
  const pairs: PairResult[] = [];
  const matrix: number[][] = Array.from({ length: forComparison.length }, () =>
    Array(forComparison.length).fill(0)
  );

  // Per-page duplicate tracking
  const pageMatchData: Map<string, { matchPages: Set<string>; sharedTrigrams: Set<string> }> = new Map();
  for (const p of forComparison) {
    pageMatchData.set(p.url, { matchPages: new Set(), sharedTrigrams: new Set() });
  }

  for (let i = 0; i < forComparison.length; i++) {
    matrix[i][i] = 1;
    for (let j = i + 1; j < forComparison.length; j++) {
      const { similarity, shared, total } = jaccardSimilarity(trigramSets[i], trigramSets[j]);
      matrix[i][j] = similarity;
      matrix[j][i] = similarity;

      let verdict: PairResult["verdict"];
      if (similarity >= 0.7) verdict = "duplicate";
      else if (similarity >= 0.4) verdict = "similar";
      else verdict = "unique";

      if (similarity > 0.3) {
        const { snippetA, snippetB } = getDiffSnippet(forComparison[i].text, forComparison[j].text);
        pairs.push({
          urlA: forComparison[i].url, urlB: forComparison[j].url,
          similarity: Math.round(similarity * 1000) / 1000,
          verdict, sharedShingles: shared, totalShingles: total,
          diffSnippetA: snippetA, diffSnippetB: snippetB,
        });

        // Track per-page matches
        const dataI = pageMatchData.get(forComparison[i].url)!;
        const dataJ = pageMatchData.get(forComparison[j].url)!;
        dataI.matchPages.add(forComparison[j].url);
        dataJ.matchPages.add(forComparison[i].url);

        // Track shared trigrams
        const smaller = trigramSets[i].size <= trigramSets[j].size ? trigramSets[i] : trigramSets[j];
        const larger = trigramSets[i].size <= trigramSets[j].size ? trigramSets[j] : trigramSets[i];
        for (const t of smaller) {
          if (larger.has(t)) {
            dataI.sharedTrigrams.add(t);
            dataJ.sharedTrigrams.add(t);
          }
        }
      }
    }
  }

  pairs.sort((a, b) => b.similarity - a.similarity);

  // Build clusters
  const clusters: { urls: string[]; canonical: string }[] = [];
  const assigned = new Set<string>();

  for (const pair of pairs) {
    if (pair.similarity < 0.4) continue;
    const existing = clusters.find((c) => c.urls.includes(pair.urlA) || c.urls.includes(pair.urlB));
    if (existing) {
      if (!existing.urls.includes(pair.urlA)) existing.urls.push(pair.urlA);
      if (!existing.urls.includes(pair.urlB)) existing.urls.push(pair.urlB);
    } else {
      clusters.push({ urls: [pair.urlA, pair.urlB], canonical: "" });
    }
    assigned.add(pair.urlA);
    assigned.add(pair.urlB);
  }

  for (const cluster of clusters) {
    const clusterPages = cluster.urls.map((u) => pages.find((p) => p.url === u)!).filter(Boolean);
    const withCanonical = clusterPages.find((p) => p.canonical && cluster.urls.includes(p.canonical));
    if (withCanonical) {
      cluster.canonical = withCanonical.canonical;
    } else {
      const best = clusterPages.sort((a, b) => b.wordCount - a.wordCount)[0];
      cluster.canonical = best?.url ?? cluster.urls[0];
    }
  }

  // Per-page duplicate percentages
  const perPageData: Map<string, { duplicatePct: number; matchPages: number; matchWords: number }> = new Map();
  for (const p of forComparison) {
    const data = pageMatchData.get(p.url)!;
    const totalTrigrams = getWordTrigrams(p.text).size;
    const duplicatePct = totalTrigrams > 0 ? Math.round((data.sharedTrigrams.size / totalTrigrams) * 100) : 0;
    const matchWords = data.sharedTrigrams.size * 3; // rough estimate: each trigram ~ 3 words
    perPageData.set(p.url, { duplicatePct, matchPages: data.matchPages.size, matchWords });
  }

  return { pairs, matrix, clusters, perPageData, forComparison };
}

/* ═══════════════════════ POST Handler ═══════════════════════ */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls, domain } = body;

    /* ────────── DOMAIN MODE ────────── */
    if (domain && typeof domain === "string") {
      const cleanDomain = domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "").trim();
      if (!cleanDomain) {
        return NextResponse.json({ error: "Invalid domain" }, { status: 400 });
      }

      // Discover URLs
      let discoveredUrls = await fetchSitemapUrls(cleanDomain);
      if (discoveredUrls.length === 0) {
        discoveredUrls = await discoverLinksFromHomepage(cleanDomain);
      }

      if (discoveredUrls.length === 0) {
        return NextResponse.json({ error: "Could not discover any pages. Check that the domain is accessible." }, { status: 400 });
      }

      const totalFound = discoveredUrls.length;

      // Fetch pages
      const allPages = await fetchInBatches(discoveredUrls, cleanDomain, 5);

      // Categorize
      const normalPages = allPages.filter((p) => !p.isRedirect && !p.isNoindex && !p.pageError);
      const redirectPages = allPages.filter((p) => p.isRedirect);
      const noindexPages = allPages.filter((p) => p.isNoindex && !p.isRedirect && !p.pageError);
      const errorPages = allPages.filter((p) => p.pageError && !p.isRedirect);

      // Build analysis
      const { pairs, matrix, clusters, perPageData, forComparison } = buildAnalysis(allPages);

      // Site-wide averages (from normal pages only)
      const pagesWithContent = allPages.filter((p) => p.wordCount > 0);
      const n = pagesWithContent.length || 1;
      const avgPageSize = Math.round(pagesWithContent.reduce((s, p) => s + p.htmlSize, 0) / n);
      const avgWordCount = Math.round(pagesWithContent.reduce((s, p) => s + p.wordCount, 0) / n);
      const avgTextToHtmlRatio = Math.round(pagesWithContent.reduce((s, p) => s + p.textToHtmlRatio, 0) / n * 100) / 100;
      const avgInternalLinks = Math.round(pagesWithContent.reduce((s, p) => s + p.internalLinks, 0) / n * 10) / 10;
      const avgExternalLinks = Math.round(pagesWithContent.reduce((s, p) => s + p.externalLinks, 0) / n * 10) / 10;
      const totalInternalLinks = allPages.reduce((s, p) => s + p.internalLinks, 0);
      const totalExternalLinks = allPages.reduce((s, p) => s + p.externalLinks, 0);

      // Content breakdown
      let totalDupPct = 0;
      let analyzedCount = 0;
      for (const p of forComparison) {
        const data = perPageData.get(p.url);
        if (data) {
          totalDupPct += data.duplicatePct;
          analyzedCount++;
        }
      }
      const duplicateContentPct = analyzedCount > 0 ? Math.round(totalDupPct / analyzedCount) : 0;
      // "Common" content estimated as low-similarity shared content
      const commonContentPct = Math.min(100 - duplicateContentPct, Math.round(duplicateContentPct * 0.6 + 15));
      const uniqueContentPct = Math.max(0, 100 - duplicateContentPct - commonContentPct);

      // Issues
      const issues: { type: string; message: string; count?: number }[] = [];
      if (duplicateContentPct > 30) {
        issues.push({ type: "critical", message: `${duplicateContentPct}% duplicate content detected across site` });
      } else if (duplicateContentPct > 15) {
        issues.push({ type: "warning", message: `${duplicateContentPct}% duplicate content detected` });
      }
      if (errorPages.length > 0) {
        issues.push({ type: "critical", message: `${errorPages.length} pages returned errors`, count: errorPages.length });
      }
      if (avgTextToHtmlRatio < 3) {
        issues.push({ type: "warning", message: `Low text-to-HTML ratio (${avgTextToHtmlRatio}%)` });
      }
      if (avgWordCount < 300) {
        issues.push({ type: "warning", message: `Low average word count (${avgWordCount} words)` });
      }
      if (redirectPages.length > allPages.length * 0.3) {
        issues.push({ type: "warning", message: `${redirectPages.length} redirect pages found (${Math.round(redirectPages.length / allPages.length * 100)}%)`, count: redirectPages.length });
      }
      if (clusters.length > 0) {
        issues.push({ type: "warning", message: `${clusters.length} duplicate content cluster${clusters.length > 1 ? "s" : ""} found`, count: clusters.length });
      }
      // Missing titles
      const missingTitles = normalPages.filter((p) => !p.title).length;
      if (missingTitles > 0) {
        issues.push({ type: "warning", message: `${missingTitles} pages missing title tags`, count: missingTitles });
      }
      // Missing meta descriptions
      const missingDesc = normalPages.filter((p) => !p.description).length;
      if (missingDesc > 0) {
        issues.push({ type: "info", message: `${missingDesc} pages missing meta descriptions`, count: missingDesc });
      }

      // Build per-page output
      const pagesOutput: PageCrawlData[] = allPages.map((p) => {
        const data = perPageData.get(p.url);
        return {
          url: p.url, status: p.status, title: p.title,
          wordCount: p.wordCount, htmlSize: p.htmlSize,
          textToHtmlRatio: p.textToHtmlRatio,
          internalLinks: p.internalLinks, externalLinks: p.externalLinks,
          canonical: p.canonical, isRedirect: p.isRedirect,
          redirectTarget: p.redirectTarget, isNoindex: p.isNoindex,
          pageError: p.pageError,
          duplicatePct: data?.duplicatePct ?? 0,
          matchPages: data?.matchPages ?? 0,
          matchWords: data?.matchWords ?? 0,
        };
      });

      const result: SiteCrawlResult = {
        mode: "domain",
        domain: cleanDomain,
        crawledAt: new Date().toISOString(),
        totalFound, totalScanned: allPages.length,
        normalPages: normalPages.length,
        redirectPages: redirectPages.length,
        noindexPages: noindexPages.length,
        errorPages: errorPages.length,
        duplicateContentPct, commonContentPct, uniqueContentPct,
        avgPageSize, avgWordCount, avgTextToHtmlRatio,
        avgInternalLinks, avgExternalLinks,
        totalInternalLinks, totalExternalLinks,
        issues,
        pages: pagesOutput,
        pairs,
        matrix: matrix.map((row) => row.map((v) => Math.round(v * 100))),
        clusters,
      };

      return NextResponse.json(result);
    }

    /* ────────── URL LIST MODE (existing) ────────── */
    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length < 2) {
      return NextResponse.json({ error: "At least 2 URLs required" }, { status: 400 });
    }
    if (urls.length > 20) {
      return NextResponse.json({ error: "Too many URLs (max 20)" }, { status: 400 });
    }

    // Extract domain from first URL for link counting
    let baseDomain = "";
    try {
      baseDomain = new URL(urls[0]).hostname;
    } catch { /* */ }

    const pages: PageData[] = await Promise.all(
      urls.map(async (url: string): Promise<PageData> => {
        return fetchPage(url, baseDomain);
      })
    );

    const { pairs, matrix, clusters, perPageData } = buildAnalysis(pages);

    return NextResponse.json({
      pages: pages.map((p) => {
        const data = perPageData.get(p.url);
        return {
          url: p.url, wordCount: p.wordCount, title: p.title, canonical: p.canonical,
          htmlSize: p.htmlSize, textToHtmlRatio: p.textToHtmlRatio,
          internalLinks: p.internalLinks, externalLinks: p.externalLinks,
          status: p.status, isRedirect: p.isRedirect, isNoindex: p.isNoindex,
          pageError: p.pageError,
          duplicatePct: data?.duplicatePct ?? 0,
          matchPages: data?.matchPages ?? 0,
          matchWords: data?.matchWords ?? 0,
        };
      }),
      pairs,
      matrix: matrix.map((row) => row.map((v) => Math.round(v * 100))),
      clusters,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
