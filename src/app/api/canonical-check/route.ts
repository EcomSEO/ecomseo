import { NextResponse } from "next/server";

interface CanonicalResult {
  url: string;
  canonical: string | null;
  status: "ok" | "self_referencing" | "points_elsewhere" | "missing" | "relative_url" | "http_mismatch" | "fetch_error";
}

function extractCanonical(html: string): string | null {
  const match =
    html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i);
  return match ? match[1].trim() : null;
}

function classifyCanonical(pageUrl: string, canonical: string | null): CanonicalResult["status"] {
  if (!canonical) return "missing";
  if (!canonical.startsWith("http")) return "relative_url";

  const pageParsed = new URL(pageUrl);
  const canonParsed = new URL(canonical);

  // Protocol mismatch
  if (pageParsed.protocol !== canonParsed.protocol) return "http_mismatch";

  // Normalize: remove trailing slash for comparison
  const normalize = (u: URL) => u.host + u.pathname.replace(/\/$/, "") + u.search;
  const pageNorm = normalize(pageParsed);
  const canonNorm = normalize(canonParsed);

  if (pageNorm === canonNorm) return "self_referencing";
  return "points_elsewhere";
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

    const results: CanonicalResult[] = await Promise.all(
      urls.map(async (url: string): Promise<CanonicalResult> => {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Canonical Checker/1.0)" },
            signal: controller.signal,
            redirect: "follow",
          });
          clearTimeout(timeout);

          const html = await res.text();
          const canonical = extractCanonical(html);
          const status = classifyCanonical(url, canonical);

          return { url, canonical, status };
        } catch {
          return { url, canonical: null, status: "fetch_error" };
        }
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
