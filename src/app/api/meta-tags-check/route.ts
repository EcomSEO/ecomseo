import { NextResponse } from "next/server";

interface MetaTagResult {
  url: string;
  title: string | null;
  description: string | null;
  titleLength: number;
  descLength: number;
  issues: string[];
}

function estimatePixelWidth(text: string): number {
  // Average character width in Google SERP font (~6px for most chars)
  return Math.round(text.length * 6);
}

function extractMeta(html: string): { title: string | null; description: string | null } {
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : null;

  return { title, description };
}

export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "Missing URLs" }, { status: 400 });
    }
    if (urls.length > 20) {
      return NextResponse.json({ error: "Too many URLs (max 20)" }, { status: 400 });
    }

    const results: MetaTagResult[] = await Promise.all(
      urls.map(async (url: string): Promise<MetaTagResult> => {
        const base: MetaTagResult = {
          url,
          title: null,
          description: null,
          titleLength: 0,
          descLength: 0,
          issues: [],
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

          const html = await res.text();
          const { title, description } = extractMeta(html);

          base.title = title;
          base.description = description;
          base.titleLength = title ? title.length : 0;
          base.descLength = description ? description.length : 0;
        } catch {
          base.issues.push("fetch_error");
          return base;
        }

        // Flag issues
        if (!base.title) {
          base.issues.push("missing_title");
        } else {
          const px = estimatePixelWidth(base.title);
          if (px > 600) base.issues.push("title_too_long");
          else if (base.titleLength < 30) base.issues.push("title_too_short");
        }

        if (!base.description) {
          base.issues.push("missing_description");
        } else {
          if (base.descLength > 160) base.issues.push("desc_too_long");
          else if (base.descLength < 70) base.issues.push("desc_too_short");
        }

        return base;
      })
    );

    // Detect duplicates
    const titleCounts: Record<string, number> = {};
    const descCounts: Record<string, number> = {};

    for (const r of results) {
      if (r.title) titleCounts[r.title] = (titleCounts[r.title] || 0) + 1;
      if (r.description) descCounts[r.description] = (descCounts[r.description] || 0) + 1;
    }

    for (const r of results) {
      if (r.title && titleCounts[r.title] > 1) r.issues.push("duplicate_title");
      if (r.description && descCounts[r.description] > 1) r.issues.push("duplicate_description");
    }

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
