import { NextResponse } from "next/server";

const GENERIC_ANCHORS = [
  "click here", "read more", "learn more", "more", "here", "link",
  "this", "continue", "go", "see more", "view more", "details",
  "continue reading", "find out more", "discover more", "see details",
  "mehr erfahren", "weiterlesen", "hier klicken",
  "lire la suite", "en savoir plus", "cliquez ici",
  "leer mas", "ver mas", "haga clic aqui",
  "leggi di piu", "scopri di piu", "clicca qui",
  "lees meer", "meer informatie", "klik hier",
];

interface InternalLink {
  href: string;
  anchorText: string;
  isGeneric: boolean;
  position: "nav" | "content" | "footer" | "header" | "sidebar" | "unknown";
}

interface ExternalLink {
  href: string;
  anchorText: string;
}

interface CrawledPage {
  url: string;
  title: string;
  depth: number;
  internalLinksOut: number;
  internalLinksIn: number;
  externalLinksOut: number;
  status: number;
  broken: boolean;
}

interface LinkEdge {
  source: string;
  target: string;
  anchor: string;
}

function detectPosition(html: string, _anchorTag: string, anchorIndex: number): "nav" | "content" | "footer" | "header" | "sidebar" | "unknown" {
  const before = html.substring(Math.max(0, anchorIndex - 2000), anchorIndex).toLowerCase();

  if (before.lastIndexOf("<footer") > before.lastIndexOf("</footer")) return "footer";

  const lastNavOpen = before.lastIndexOf("<nav");
  const lastNavClose = before.lastIndexOf("</nav");
  if (lastNavOpen > lastNavClose) return "nav";

  const lastHeaderOpen = before.lastIndexOf("<header");
  const lastHeaderClose = before.lastIndexOf("</header");
  if (lastHeaderOpen > lastHeaderClose) return "header";

  if (/sidebar|aside/i.test(before.slice(-500))) return "sidebar";

  const lastMainOpen = Math.max(before.lastIndexOf("<main"), before.lastIndexOf("<article"));
  if (lastMainOpen > -1) return "content";

  return "unknown";
}

function extractLinks(html: string, pageUrl: string): {
  internalLinks: InternalLink[];
  externalLinks: ExternalLink[];
} {
  const internalLinks: InternalLink[] = [];
  const externalLinks: ExternalLink[] = [];
  const seenInternal = new Set<string>();
  const seenExternal = new Set<string>();

  const regex = /<a\s[^>]*?href\s*=\s*["']([^"']+)["'][^>]*?>([\s\S]*?)<\/a>/gi;
  let match;

  const pageHostname = new URL(pageUrl).hostname;

  while ((match = regex.exec(html)) !== null) {
    const rawHref = match[1].trim();
    const anchorHtml = match[2];
    const matchIndex = match.index;

    if (
      rawHref.startsWith("javascript:") ||
      rawHref.startsWith("mailto:") ||
      rawHref.startsWith("tel:") ||
      rawHref === "#" ||
      rawHref.startsWith("#")
    ) continue;

    let absoluteUrl: string;
    try {
      absoluteUrl = new URL(rawHref, pageUrl).href;
    } catch { continue; }

    // Remove hash fragments for dedup
    try {
      const parsed = new URL(absoluteUrl);
      parsed.hash = "";
      absoluteUrl = parsed.href;
    } catch { /* keep as is */ }

    const anchorText = anchorHtml
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();

    let isInternal = false;
    try {
      isInternal = new URL(absoluteUrl).hostname === pageHostname;
    } catch { continue; }

    if (isInternal) {
      const key = absoluteUrl.toLowerCase();
      if (seenInternal.has(key)) continue;
      seenInternal.add(key);

      const isGeneric = !anchorText || GENERIC_ANCHORS.includes(anchorText.toLowerCase());
      const position = detectPosition(html, match[0], matchIndex);

      internalLinks.push({ href: absoluteUrl, anchorText: anchorText || "(empty)", isGeneric, position });
    } else {
      const key = absoluteUrl.toLowerCase();
      if (seenExternal.has(key)) continue;
      seenExternal.add(key);

      externalLinks.push({ href: absoluteUrl, anchorText: anchorText || "(empty)" });
    }
  }

  return { internalLinks, externalLinks };
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s+/g, " ").trim().slice(0, 100) : "(no title)";
}

async function fetchPage(url: string): Promise<{ html: string; status: number } | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Link Analyzer/2.0)" },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);
    const html = await res.text();
    return { html, status: res.status };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url, crawl } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Missing or invalid URL" }, { status: 400 });
    }

    // Multi-page crawl mode
    if (crawl) {
      const maxPages = Math.min(body.maxPages || 50, 100);
      const startUrl = url;
      const hostname = new URL(startUrl).hostname;

      const crawled = new Map<string, CrawledPage>();
      const edges: LinkEdge[] = [];
      const queue: { url: string; depth: number }[] = [{ url: startUrl, depth: 0 }];
      const visited = new Set<string>();
      const incomingLinks = new Map<string, number>();
      const brokenLinks: { url: string; status: number; foundOn: string; anchor: string }[] = [];

      while (queue.length > 0 && crawled.size < maxPages) {
        const batch = queue.splice(0, Math.min(5, maxPages - crawled.size));

        const results = await Promise.all(
          batch.map(async ({ url: pageUrl, depth }) => {
            const normalized = pageUrl.toLowerCase();
            if (visited.has(normalized)) return null;
            visited.add(normalized);

            // Skip non-HTML resources
            if (/\.(jpg|jpeg|png|gif|svg|css|js|pdf|zip|mp4|mp3|woff|woff2|ttf|ico)(\?.*)?$/i.test(pageUrl)) {
              return null;
            }

            const result = await fetchPage(pageUrl);
            if (!result) {
              crawled.set(pageUrl, {
                url: pageUrl,
                title: "(fetch error)",
                depth,
                internalLinksOut: 0,
                internalLinksIn: 0,
                externalLinksOut: 0,
                status: 0,
                broken: true,
              });
              return null;
            }

            const { html, status } = result;

            // Skip non-HTML content
            if (html.trim().startsWith("{") || (!html.includes("<") && html.length < 100)) {
              return null;
            }

            const title = extractTitle(html);
            const { internalLinks, externalLinks } = extractLinks(html, pageUrl);

            const page: CrawledPage = {
              url: pageUrl,
              title,
              depth,
              internalLinksOut: internalLinks.length,
              internalLinksIn: 0, // computed later
              externalLinksOut: externalLinks.length,
              status,
              broken: status >= 400 || status === 0,
            };
            crawled.set(pageUrl, page);

            // Track edges and queue new URLs
            for (const link of internalLinks) {
              edges.push({ source: pageUrl, target: link.href, anchor: link.anchorText });
              incomingLinks.set(link.href, (incomingLinks.get(link.href) || 0) + 1);

              const linkNorm = link.href.toLowerCase();
              if (!visited.has(linkNorm) && crawled.size + queue.length < maxPages) {
                try {
                  const linkHostname = new URL(link.href).hostname;
                  if (linkHostname === hostname) {
                    queue.push({ url: link.href, depth: depth + 1 });
                  }
                } catch { /* skip */ }
              }

              // Check for broken links (quick HEAD check on first encounter)
              if (!visited.has(linkNorm) && !crawled.has(link.href)) {
                // We'll detect broken links from crawl status later
              }
            }

            return { pageUrl, internalLinks, depth };
          })
        );

        // Queue new URLs discovered
        for (const r of results) {
          if (!r) continue;
        }
      }

      // Update incoming link counts
      for (const [url, count] of incomingLinks) {
        const page = crawled.get(url);
        if (page) {
          page.internalLinksIn = count;
        }
      }

      // Detect orphan pages (crawled pages with 0 incoming links, excluding start page)
      const orphanPages: string[] = [];
      for (const [pageUrl, page] of crawled) {
        if (pageUrl !== startUrl && (incomingLinks.get(pageUrl) || 0) === 0) {
          orphanPages.push(pageUrl);
        }
      }

      // Detect broken internal links
      for (const edge of edges) {
        const targetPage = crawled.get(edge.target);
        if (targetPage && targetPage.broken) {
          brokenLinks.push({
            url: edge.target,
            status: targetPage.status,
            foundOn: edge.source,
            anchor: edge.anchor,
          });
        }
      }

      // Anchor text analysis
      const anchorCounts: Record<string, number> = {};
      const genericAnchorEdges: LinkEdge[] = [];
      for (const edge of edges) {
        const lower = edge.anchor.toLowerCase();
        anchorCounts[lower] = (anchorCounts[lower] || 0) + 1;
        if (!edge.anchor || GENERIC_ANCHORS.includes(lower) || edge.anchor === "(empty)") {
          genericAnchorEdges.push(edge);
        }
      }

      // Top anchors
      const topAnchors = Object.entries(anchorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .map(([text, count]) => ({
          text: text || "(empty)",
          count,
          isGeneric: !text || GENERIC_ANCHORS.includes(text),
        }));

      // Depth distribution
      const depthDistribution: Record<number, number> = {};
      for (const page of crawled.values()) {
        depthDistribution[page.depth] = (depthDistribution[page.depth] || 0) + 1;
      }

      // Ecommerce recommendations
      const ecommerceRecs: string[] = [];
      const allUrls = Array.from(crawled.keys());
      const hasProducts = allUrls.some((u) => /\/products?\//i.test(u));
      const hasCollections = allUrls.some((u) => /\/collections?\//i.test(u) || /\/categor/i.test(u));
      const hasBlog = allUrls.some((u) => /\/blog/i.test(u));

      if (hasProducts) {
        const productPages = allUrls.filter((u) => /\/products?\//i.test(u));
        const avgIncoming = productPages.reduce((sum, u) => sum + (incomingLinks.get(u) || 0), 0) / Math.max(productPages.length, 1);
        if (avgIncoming < 2) {
          ecommerceRecs.push(`Product pages average only ${avgIncoming.toFixed(1)} incoming internal links. Add more cross-links from collection and blog pages.`);
        }
      }
      if (hasCollections && hasProducts) {
        ecommerceRecs.push("Ensure collection pages link to all their products, and products link back to their parent collections.");
      }
      if (hasBlog && hasProducts) {
        ecommerceRecs.push("Link relevant blog posts to product pages with descriptive anchor text to boost product page authority.");
      }
      if (orphanPages.length > 0) {
        ecommerceRecs.push(`${orphanPages.length} orphan page(s) found with no incoming links. Add internal links from your navigation or related content.`);
      }
      const deepPages = Array.from(crawled.values()).filter((p) => p.depth > 3);
      if (deepPages.length > 0) {
        ecommerceRecs.push(`${deepPages.length} page(s) are more than 3 clicks from the homepage. Flatten your site architecture for better crawlability.`);
      }

      // Build graph nodes (simplified for frontend)
      const graphNodes = Array.from(crawled.values()).map((p) => ({
        id: p.url,
        label: p.title.slice(0, 30),
        depth: p.depth,
        linksOut: p.internalLinksOut,
        linksIn: incomingLinks.get(p.url) || 0,
      }));

      // Deduplicate edges for graph
      const seenEdges = new Set<string>();
      const graphEdges = edges.filter((e) => {
        const key = `${e.source}|${e.target}`;
        if (seenEdges.has(key)) return false;
        seenEdges.add(key);
        return crawled.has(e.source) && crawled.has(e.target);
      }).map((e) => ({ source: e.source, target: e.target }));

      // Score
      let score = 100;
      if (orphanPages.length > 0) score -= Math.min(25, orphanPages.length * 5);
      if (brokenLinks.length > 0) score -= Math.min(25, brokenLinks.length * 5);
      if (genericAnchorEdges.length > 5) score -= Math.min(20, Math.floor(genericAnchorEdges.length / 2));
      if (deepPages.length > 0) score -= Math.min(15, deepPages.length * 3);
      score = Math.max(0, score);

      return NextResponse.json({
        url: startUrl,
        mode: "crawl",
        pages: Array.from(crawled.values()),
        graphNodes,
        graphEdges,
        orphanPages,
        brokenLinks,
        topAnchors,
        genericAnchorCount: genericAnchorEdges.length,
        depthDistribution,
        ecommerceRecs,
        stats: {
          totalPages: crawled.size,
          totalEdges: edges.length,
          maxDepth: Math.max(...Array.from(crawled.values()).map((p) => p.depth), 0),
          brokenCount: brokenLinks.length,
          orphanCount: orphanPages.length,
        },
        score,
      });
    }

    // Single page mode (original behavior)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const pageRes = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Link Analyzer/1.0)" },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!pageRes.ok) {
      return NextResponse.json({ error: `Failed to fetch page: HTTP ${pageRes.status}` }, { status: 502 });
    }

    const html = await pageRes.text();
    const { internalLinks, externalLinks } = extractLinks(html, url);

    const genericAnchors = internalLinks.filter((l) => l.isGeneric).length;
    const totalLinks = internalLinks.length + externalLinks.length;

    const issues: string[] = [];
    if (genericAnchors > 0) issues.push(`${genericAnchors} internal link(s) use generic anchor text`);
    if (internalLinks.length === 0) issues.push("No internal links found on this page");
    if (externalLinks.length > internalLinks.length) issues.push("More external links than internal links");
    const emptyAnchors = internalLinks.filter((l) => l.anchorText === "(empty)").length;
    if (emptyAnchors > 0) issues.push(`${emptyAnchors} link(s) have empty anchor text`);

    let score = 100;
    if (internalLinks.length === 0) score -= 30;
    if (genericAnchors > 0) score -= Math.min(30, genericAnchors * 5);
    if (emptyAnchors > 0) score -= Math.min(20, emptyAnchors * 5);
    if (externalLinks.length > internalLinks.length) score -= 10;
    score = Math.max(0, score);

    return NextResponse.json({
      url,
      mode: "single",
      internalLinks,
      externalLinks,
      stats: {
        totalLinks,
        uniqueInternal: internalLinks.length,
        external: externalLinks.length,
        genericAnchors,
      },
      issues,
      score,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
