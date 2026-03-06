import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO OG Checker/1.0)",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!res.ok) return NextResponse.json({ error: "Fetch failed" }, { status: 502 });

    const html = await res.text();

    // Parse meta tags
    const metaRegex = /<meta\s+([^>]*?)\/?\s*>/gi;
    const allTags: { property: string; content: string }[] = [];
    let match;

    while ((match = metaRegex.exec(html)) !== null) {
      const attrs = match[1];
      const propertyMatch = attrs.match(/(?:property|name)\s*=\s*["']([^"']+)["']/i);
      const contentMatch = attrs.match(/content\s*=\s*["']([^"']*?)["']/i);
      if (propertyMatch && contentMatch) {
        const prop = propertyMatch[1].toLowerCase();
        if (prop.startsWith("og:") || prop.startsWith("twitter:") || prop === "description") {
          allTags.push({ property: propertyMatch[1], content: contentMatch[1] });
        }
      }
    }

    // Extract page title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const pageTitle = titleMatch ? titleMatch[1].trim() : "";

    // Build response
    const findTag = (name: string) => allTags.find((t) => t.property.toLowerCase() === name)?.content || "";

    return NextResponse.json({
      ogTitle: findTag("og:title"),
      ogDescription: findTag("og:description"),
      ogImage: findTag("og:image"),
      ogUrl: findTag("og:url"),
      ogType: findTag("og:type"),
      ogSiteName: findTag("og:site_name"),
      twitterCard: findTag("twitter:card"),
      twitterTitle: findTag("twitter:title"),
      twitterDescription: findTag("twitter:description"),
      twitterImage: findTag("twitter:image"),
      pageTitle,
      metaDescription: findTag("description"),
      allTags,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch URL" }, { status: 500 });
  }
}
