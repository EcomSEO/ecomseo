import { NextResponse } from "next/server";

type CanonicalStatus =
  | "ok"
  | "self_referencing"
  | "points_elsewhere"
  | "missing"
  | "http_mismatch"
  | "trailing_slash_mismatch"
  | "cross_domain"
  | "canonical_chain"
  | "fetch_error";

interface CanonicalResult {
  url: string;
  canonical: string | null;
  status: CanonicalStatus;
  detail: string;
  score: number;
}

function extractCanonical(html: string): string | null {
  const match =
    html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i);
  return match ? match[1].trim() : null;
}

function normalizeUrl(u: URL): string {
  return u.host.toLowerCase() + u.pathname.replace(/\/$/, "") + u.search;
}

async function fetchCanonicalFromUrl(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Canonical Checker/2.0)" },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);
    const html = await res.text();
    return extractCanonical(html);
  } catch {
    return null;
  }
}

function scoreForStatus(status: CanonicalStatus): number {
  switch (status) {
    case "self_referencing":
    case "ok":
      return 100;
    case "points_elsewhere":
      return 70;
    case "trailing_slash_mismatch":
      return 60;
    case "cross_domain":
      return 50;
    case "http_mismatch":
      return 40;
    case "canonical_chain":
      return 30;
    case "missing":
      return 10;
    case "fetch_error":
      return 0;
  }
}

async function analyzeCanonical(url: string): Promise<CanonicalResult> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Canonical Checker/2.0)" },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    const html = await res.text();
    const canonical = extractCanonical(html);

    // Missing canonical
    if (!canonical) {
      return { url, canonical: null, status: "missing", detail: "No canonical tag found on this page. This is a critical issue that can cause duplicate content.", score: scoreForStatus("missing") };
    }

    // Try to parse canonical
    let canonParsed: URL;
    try {
      canonParsed = new URL(canonical, url);
    } catch {
      return { url, canonical, status: "missing", detail: "Canonical tag contains an invalid URL.", score: 10 };
    }

    const pageParsed = new URL(url);

    // Cross-domain canonical
    if (canonParsed.host.toLowerCase() !== pageParsed.host.toLowerCase()) {
      return { url, canonical, status: "cross_domain", detail: `Canonical points to a different domain: ${canonParsed.host}. This tells search engines to index the other domain instead.`, score: scoreForStatus("cross_domain") };
    }

    // HTTP vs HTTPS mismatch
    if (canonParsed.protocol !== pageParsed.protocol) {
      return { url, canonical, status: "http_mismatch", detail: `Protocol mismatch: page is ${pageParsed.protocol.replace(":", "")} but canonical is ${canonParsed.protocol.replace(":", "")}. This can cause indexing confusion.`, score: scoreForStatus("http_mismatch") };
    }

    // Trailing slash inconsistency
    const pageHasTrailing = pageParsed.pathname.endsWith("/") && pageParsed.pathname !== "/";
    const canonHasTrailing = canonParsed.pathname.endsWith("/") && canonParsed.pathname !== "/";
    const pathsMatchWithoutSlash = pageParsed.pathname.replace(/\/$/, "") === canonParsed.pathname.replace(/\/$/, "");
    if (pathsMatchWithoutSlash && pageHasTrailing !== canonHasTrailing && pageParsed.search === canonParsed.search) {
      return { url, canonical, status: "trailing_slash_mismatch", detail: `Trailing slash mismatch: page ${pageHasTrailing ? "has" : "lacks"} trailing slash, canonical ${canonHasTrailing ? "has" : "lacks"} it.`, score: scoreForStatus("trailing_slash_mismatch") };
    }

    // Self-referencing check
    const pageNorm = normalizeUrl(pageParsed);
    const canonNorm = normalizeUrl(canonParsed);

    if (pageNorm === canonNorm) {
      return { url, canonical, status: "self_referencing", detail: "Canonical correctly points to itself. This is the ideal setup.", score: scoreForStatus("self_referencing") };
    }

    // Points elsewhere - check for canonical chain
    const chainCanonical = await fetchCanonicalFromUrl(canonical);
    if (chainCanonical) {
      try {
        const chainParsed = new URL(chainCanonical, canonical);
        const chainNorm = normalizeUrl(chainParsed);
        if (chainNorm !== canonNorm) {
          return { url, canonical, status: "canonical_chain", detail: `Canonical chain detected: this page -> ${canonical} -> ${chainCanonical}. The canonical target has a different canonical itself.`, score: scoreForStatus("canonical_chain") };
        }
      } catch {
        // ignore parse errors on chain check
      }
    }

    return { url, canonical, status: "points_elsewhere", detail: `Canonical points to ${canonical}. Verify this is intentional.`, score: scoreForStatus("points_elsewhere") };
  } catch {
    return { url, canonical: null, status: "fetch_error", detail: "Could not fetch this URL. Check if the page is accessible.", score: 0 };
  }
}

export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "Missing URLs" }, { status: 400 });
    }
    if (urls.length > 50) {
      return NextResponse.json({ error: "Too many URLs (max 50)" }, { status: 400 });
    }

    const results: CanonicalResult[] = await Promise.all(
      urls.map((url: string) => analyzeCanonical(url))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
