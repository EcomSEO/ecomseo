import { NextResponse } from "next/server";

interface LinkInfo {
  href: string;
  anchor: string;
  isInternal: boolean;
  status: number | null;
}

interface BrokenLink {
  url: string;
  status: number;
  anchor: string;
}

function extractLinks(
  html: string,
  pageUrl: string
): { links: LinkInfo[]; internalUrls: Set<string> } {
  const links: LinkInfo[] = [];
  const internalUrls = new Set<string>();
  const seen = new Set<string>();

  const regex = /<a\s[^>]*?href\s*=\s*["']([^"']+)["'][^>]*?>([\s\S]*?)<\/a>/gi;
  let match;

  const pageHostname = new URL(pageUrl).hostname;

  while ((match = regex.exec(html)) !== null) {
    const rawHref = match[1].trim();
    const anchorHtml = match[2];

    // Skip non-http links
    if (
      rawHref.startsWith("javascript:") ||
      rawHref.startsWith("mailto:") ||
      rawHref.startsWith("tel:") ||
      rawHref === "#" ||
      rawHref.startsWith("#")
    ) {
      continue;
    }

    // Resolve relative URLs
    let absoluteUrl: string;
    try {
      absoluteUrl = new URL(rawHref, pageUrl).href;
    } catch {
      continue;
    }

    // Strip inner tags to get plain anchor text
    const anchor = anchorHtml
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();

    // Determine internal vs external
    let isInternal = false;
    try {
      const linkHostname = new URL(absoluteUrl).hostname;
      isInternal = linkHostname === pageHostname;
    } catch {
      continue;
    }

    // Deduplicate by href
    const dedupeKey = absoluteUrl.toLowerCase();
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    if (isInternal) {
      internalUrls.add(absoluteUrl);
    }

    links.push({ href: absoluteUrl, anchor, isInternal, status: null });
  }

  return { links, internalUrls };
}

async function checkLinkStatus(url: string): Promise<number> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url, {
      method: "HEAD",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; EcomSEO Link Analyzer/1.0)",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);
    return res.status;
  } catch {
    return 0;
  }
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid URL" },
        { status: 400 }
      );
    }

    // Fetch the page HTML
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const pageRes = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; EcomSEO Link Analyzer/1.0)",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!pageRes.ok) {
      return NextResponse.json(
        { error: `Failed to fetch page: HTTP ${pageRes.status}` },
        { status: 502 }
      );
    }

    const html = await pageRes.text();

    // Extract all links
    const { links, internalUrls } = extractLinks(html, url);

    const internalCount = links.filter((l) => l.isInternal).length;
    const externalCount = links.filter((l) => !l.isInternal).length;

    // Check status of up to 30 internal links
    const internalLinksToCheck = links
      .filter((l) => l.isInternal)
      .slice(0, 30);

    const statusResults = await Promise.all(
      internalLinksToCheck.map(async (link) => {
        const status = await checkLinkStatus(link.href);
        return { href: link.href, status };
      })
    );

    // Merge statuses back into links
    const statusMap = new Map<string, number>();
    for (const sr of statusResults) {
      statusMap.set(sr.href, sr.status);
    }

    const enrichedLinks: LinkInfo[] = links.map((link) => ({
      ...link,
      status: statusMap.get(link.href) ?? null,
    }));

    // Identify broken links (4xx, 5xx, or 0 = fetch error)
    const brokenLinks: BrokenLink[] = statusResults
      .filter((sr) => sr.status >= 400 || sr.status === 0)
      .map((sr) => {
        const original = links.find((l) => l.href === sr.href);
        return {
          url: sr.href,
          status: sr.status,
          anchor: original?.anchor ?? "",
        };
      });

    return NextResponse.json({
      url,
      totalLinks: links.length,
      internalLinks: internalCount,
      externalLinks: externalCount,
      uniqueInternalUrls: internalUrls.size,
      brokenLinks,
      links: enrichedLinks,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
