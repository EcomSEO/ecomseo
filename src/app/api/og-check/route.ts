import { NextResponse } from "next/server";

interface OgResult {
  url: string;
  ogTags: Record<string, string>;
  twitterTags: Record<string, string>;
  pageTitle: string;
  metaDescription: string;
  imageSize: number | null;
  issues: string[];
  score: number;
}

const OG_KEYS = [
  "og:title",
  "og:description",
  "og:image",
  "og:type",
  "og:url",
  "og:site_name",
  "og:locale",
];

const TWITTER_KEYS = [
  "twitter:card",
  "twitter:title",
  "twitter:description",
  "twitter:image",
  "twitter:site",
];

async function checkImageSize(imageUrl: string): Promise<number | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(imageUrl, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);
    const cl = res.headers.get("content-length");
    return cl ? parseInt(cl, 10) : null;
  } catch {
    return null;
  }
}

async function checkSingleUrl(url: string): Promise<OgResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; EcomSEO OG Checker/2.0)",
      Accept: "text/html,application/xhtml+xml",
    },
    signal: controller.signal,
    redirect: "follow",
  });
  clearTimeout(timeout);

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const html = await res.text();

  // Parse all meta tags
  const metaRegex = /<meta\s+([^>]*?)\/?\s*>/gi;
  const allMeta: { key: string; content: string }[] = [];
  let match;

  while ((match = metaRegex.exec(html)) !== null) {
    const attrs = match[1];
    const propertyMatch = attrs.match(
      /(?:property|name)\s*=\s*["']([^"']+)["']/i
    );
    const contentMatch = attrs.match(/content\s*=\s*["']([^"']*?)["']/i);
    if (propertyMatch && contentMatch) {
      allMeta.push({
        key: propertyMatch[1].toLowerCase(),
        content: contentMatch[1],
      });
    }
  }

  // Extract page title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const pageTitle = titleMatch ? titleMatch[1].trim() : "";

  // Build OG and Twitter tag maps
  const ogTags: Record<string, string> = {};
  const twitterTags: Record<string, string> = {};

  for (const m of allMeta) {
    if (m.key.startsWith("og:")) {
      ogTags[m.key] = m.content;
    } else if (m.key.startsWith("twitter:")) {
      twitterTags[m.key] = m.content;
    }
  }

  const metaDescription =
    allMeta.find((m) => m.key === "description")?.content || "";

  // Check OG image size
  const ogImageUrl = ogTags["og:image"] || "";
  let imageSize: number | null = null;
  if (ogImageUrl) {
    // Resolve relative image URLs
    let absoluteImageUrl = ogImageUrl;
    if (
      !ogImageUrl.startsWith("http://") &&
      !ogImageUrl.startsWith("https://")
    ) {
      try {
        absoluteImageUrl = new URL(ogImageUrl, url).href;
      } catch {
        // keep as-is
      }
    }
    imageSize = await checkImageSize(absoluteImageUrl);
  }

  // Compute issues
  const issues: string[] = [];

  if (!ogTags["og:title"]) issues.push("Missing og:title");
  if (!ogTags["og:description"]) issues.push("Missing og:description");
  if (!ogTags["og:image"]) issues.push("Missing og:image - social shares will show no preview image");
  if (!ogTags["og:type"]) issues.push("Missing og:type");
  if (!ogTags["og:url"]) issues.push("Missing og:url");
  if (!ogTags["og:site_name"]) issues.push("Missing og:site_name");

  if (!twitterTags["twitter:card"])
    issues.push("Missing twitter:card - Twitter won't render a rich preview");
  if (!twitterTags["twitter:title"]) issues.push("Missing twitter:title");
  if (!twitterTags["twitter:description"])
    issues.push("Missing twitter:description");
  if (!twitterTags["twitter:image"]) issues.push("Missing twitter:image");

  // Consistency checks
  if (
    ogTags["og:title"] &&
    pageTitle &&
    ogTags["og:title"].trim().toLowerCase() !== pageTitle.trim().toLowerCase()
  ) {
    issues.push(
      `og:title ("${ogTags["og:title"].slice(0, 60)}") doesn't match page <title> ("${pageTitle.slice(0, 60)}")`
    );
  }

  if (
    ogTags["og:description"] &&
    metaDescription &&
    ogTags["og:description"].trim().toLowerCase() !==
      metaDescription.trim().toLowerCase()
  ) {
    issues.push(
      "og:description doesn't match meta description"
    );
  }

  // Image size check (>8MB is a common limit)
  if (imageSize !== null && imageSize > 8 * 1024 * 1024) {
    issues.push(
      `OG image is too large (${(imageSize / 1024 / 1024).toFixed(1)}MB) - should be under 8MB`
    );
  } else if (imageSize !== null && imageSize > 5 * 1024 * 1024) {
    issues.push(
      `OG image is large (${(imageSize / 1024 / 1024).toFixed(1)}MB) - consider optimizing under 5MB`
    );
  }

  // Compute score (0-100)
  const totalChecks = OG_KEYS.length + TWITTER_KEYS.length + 2; // +2 for consistency checks
  const issueCount = issues.length;
  const score = Math.max(
    0,
    Math.round(((totalChecks - issueCount) / totalChecks) * 100)
  );

  return {
    url,
    ogTags,
    twitterTags,
    pageTitle,
    metaDescription,
    imageSize,
    issues,
    score,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Support both single URL and bulk
    const urls: string[] = body.urls
      ? body.urls
      : body.url
        ? [body.url]
        : [];

    if (urls.length === 0)
      return NextResponse.json({ error: "Missing URL(s)" }, { status: 400 });
    if (urls.length > 50)
      return NextResponse.json(
        { error: "Maximum 50 URLs per request" },
        { status: 400 }
      );

    const results: OgResult[] = await Promise.all(
      urls.map((u: string) =>
        checkSingleUrl(u).catch(
          (): OgResult => ({
            url: u,
            ogTags: {},
            twitterTags: {},
            pageTitle: "",
            metaDescription: "",
            imageSize: null,
            issues: ["Failed to fetch URL"],
            score: 0,
          })
        )
      )
    );

    // For backwards compatibility when single URL, also include flat fields
    if (results.length === 1) {
      const r = results[0];
      return NextResponse.json({
        ...r,
        // legacy flat fields
        ogTitle: r.ogTags["og:title"] || "",
        ogDescription: r.ogTags["og:description"] || "",
        ogImage: r.ogTags["og:image"] || "",
        ogUrl: r.ogTags["og:url"] || "",
        ogType: r.ogTags["og:type"] || "",
        ogSiteName: r.ogTags["og:site_name"] || "",
        twitterCard: r.twitterTags["twitter:card"] || "",
        twitterTitle: r.twitterTags["twitter:title"] || "",
        twitterDescription: r.twitterTags["twitter:description"] || "",
        twitterImage: r.twitterTags["twitter:image"] || "",
        allTags: Object.entries(r.ogTags)
          .concat(Object.entries(r.twitterTags))
          .map(([property, content]) => ({ property, content })),
        results,
      });
    }

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch URL" },
      { status: 500 }
    );
  }
}
