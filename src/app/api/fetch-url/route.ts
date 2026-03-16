import { NextResponse } from "next/server";

// =============================================================================
// Universal URL fetcher — POST /api/fetch-url
// Accepts { url: string } or { urls: string[] }
// =============================================================================

interface FetchResult {
  url: string;
  html: string;
  statusCode: number;
  headers: Record<string, string>;
  redirects: Array<{ url: string; status: number }>;
  responseTime: number;
  error?: string;
}

const MAX_URLS = 20;
const TIMEOUT_MS = 10_000;
const USER_AGENT =
  "Mozilla/5.0 (compatible; EcomSEOBot/1.0; +https://ecomseo.co)";

async function fetchOne(rawUrl: string): Promise<FetchResult> {
  const start = Date.now();
  const redirects: Array<{ url: string; status: number }> = [];

  let url = rawUrl.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;

  try {
    new URL(url);
  } catch {
    return {
      url: rawUrl,
      html: "",
      statusCode: 0,
      headers: {},
      redirects: [],
      responseTime: Date.now() - start,
      error: "Invalid URL",
    };
  }

  try {
    let currentUrl = url;
    let response: Response | null = null;
    const maxRedirects = 10;

    for (let i = 0; i <= maxRedirects; i++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      try {
        response = await fetch(currentUrl, {
          method: "GET",
          headers: {
            "User-Agent": USER_AGENT,
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
          },
          redirect: "manual",
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (fetchErr: unknown) {
        clearTimeout(timeoutId);
        if (
          fetchErr instanceof Error &&
          fetchErr.name === "AbortError"
        ) {
          return {
            url: rawUrl,
            html: "",
            statusCode: 0,
            headers: {},
            redirects,
            responseTime: Date.now() - start,
            error: "Request timed out",
          };
        }
        throw fetchErr;
      }

      if ([301, 302, 303, 307, 308].includes(response.status)) {
        const location = response.headers.get("location");
        redirects.push({ url: currentUrl, status: response.status });

        if (!location) break;
        try {
          currentUrl = new URL(location, currentUrl).href;
        } catch {
          break;
        }
        continue;
      }

      break;
    }

    if (!response) {
      return {
        url: rawUrl,
        html: "",
        statusCode: 0,
        headers: {},
        redirects,
        responseTime: Date.now() - start,
        error: "No response received",
      };
    }

    const html = await response.text();

    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      url: rawUrl,
      html,
      statusCode: response.status,
      headers,
      redirects,
      responseTime: Date.now() - start,
    };
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Fetch failed";
    return {
      url: rawUrl,
      html: "",
      statusCode: 0,
      headers: {},
      redirects,
      responseTime: Date.now() - start,
      error: message,
    };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let urls: string[];
    if (body.url && typeof body.url === "string") {
      urls = [body.url];
    } else if (Array.isArray(body.urls)) {
      urls = body.urls;
    } else {
      return NextResponse.json(
        { error: "Provide { url: string } or { urls: string[] }" },
        { status: 400 },
      );
    }

    if (urls.length === 0) {
      return NextResponse.json(
        { error: "No URLs provided" },
        { status: 400 },
      );
    }

    if (urls.length > MAX_URLS) {
      return NextResponse.json(
        { error: `Too many URLs (max ${MAX_URLS})` },
        { status: 400 },
      );
    }

    const results = await Promise.all(urls.map(fetchOne));

    if (body.url && typeof body.url === "string") {
      return NextResponse.json(results[0]);
    }

    return NextResponse.json({ results });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
