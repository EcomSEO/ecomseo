import { NextResponse } from "next/server";

interface ChainHop {
  url: string;
  status: number;
}

interface RedirectResult {
  url: string;
  chain: ChainHop[];
  finalUrl: string;
  totalRedirects: number;
  hasLoop: boolean;
  hasChain: boolean;
  error: boolean;
}

async function followRedirects(startUrl: string): Promise<RedirectResult> {
  const chain: ChainHop[] = [];
  const seen = new Set<string>();
  let currentUrl = startUrl;
  let hasLoop = false;
  const MAX_HOPS = 10;

  try {
    for (let i = 0; i < MAX_HOPS; i++) {
      if (seen.has(currentUrl)) {
        hasLoop = true;
        break;
      }
      seen.add(currentUrl);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      let res: Response;
      try {
        res = await fetch(currentUrl, {
          method: "GET",
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Redirect Checker/1.0)",
          },
          redirect: "manual",
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeout);
      }

      chain.push({ url: currentUrl, status: res.status });

      // If the response is a redirect (3xx), follow the Location header
      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get("location");
        if (!location) break;

        // Resolve relative URLs
        try {
          currentUrl = new URL(location, currentUrl).href;
        } catch {
          break;
        }
      } else {
        // Not a redirect - we've reached the final destination
        break;
      }
    }

    const finalUrl = chain.length > 0 ? chain[chain.length - 1].url : startUrl;
    const totalRedirects = chain.length > 1 ? chain.length - 1 : 0;

    return {
      url: startUrl,
      chain,
      finalUrl,
      totalRedirects,
      hasLoop,
      hasChain: totalRedirects >= 2,
      error: false,
    };
  } catch {
    return {
      url: startUrl,
      chain,
      finalUrl: startUrl,
      totalRedirects: 0,
      hasLoop: false,
      hasChain: false,
      error: true,
    };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length > 20) {
      return NextResponse.json({ error: "Too many URLs" }, { status: 400 });
    }

    const results: RedirectResult[] = await Promise.all(
      urls.map((url: string) => followRedirects(url))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
