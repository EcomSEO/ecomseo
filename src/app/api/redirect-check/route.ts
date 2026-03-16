import { NextResponse } from "next/server";

interface ChainHop {
  url: string;
  status: number;
  time: number;
}

interface RedirectResult {
  url: string;
  chain: ChainHop[];
  finalUrl: string;
  finalStatus: number;
  chainLength: number;
  hasLoop: boolean;
  hasMixedTypes: boolean;
  totalTime: number;
  issues: string[];
}

async function followRedirects(startUrl: string): Promise<RedirectResult> {
  const chain: ChainHop[] = [];
  const seen = new Set<string>();
  let currentUrl = startUrl;
  let hasLoop = false;
  const MAX_HOPS = 10;
  const issues: string[] = [];
  const statusCodes: number[] = [];

  try {
    for (let i = 0; i < MAX_HOPS; i++) {
      if (seen.has(currentUrl)) {
        hasLoop = true;
        issues.push(`Redirect loop detected: URL "${currentUrl}" was visited twice`);
        break;
      }
      seen.add(currentUrl);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const hopStart = Date.now();

      let res: Response;
      try {
        res = await fetch(currentUrl, {
          method: "GET",
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Redirect Checker/2.0)",
          },
          redirect: "manual",
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeout);
      }

      const hopTime = Date.now() - hopStart;
      chain.push({ url: currentUrl, status: res.status, time: hopTime });

      if (res.status >= 300 && res.status < 400) {
        statusCodes.push(res.status);
        const location = res.headers.get("location");
        if (!location) {
          issues.push(`Redirect (${res.status}) with no Location header at ${currentUrl}`);
          break;
        }
        try {
          currentUrl = new URL(location, currentUrl).href;
        } catch {
          issues.push(`Invalid redirect Location header: "${location}"`);
          break;
        }
      } else {
        // Final destination
        if (res.status >= 400) {
          issues.push(`Final URL returns HTTP ${res.status} error`);
        }
        break;
      }
    }

    // Check if we hit max hops without resolving
    if (chain.length >= MAX_HOPS && !hasLoop) {
      const lastHop = chain[chain.length - 1];
      if (lastHop.status >= 300 && lastHop.status < 400) {
        hasLoop = true;
        issues.push(`Exceeded maximum ${MAX_HOPS} hops - likely an infinite redirect loop`);
      }
    }

    const finalHop = chain[chain.length - 1];
    const finalUrl = finalHop?.url ?? startUrl;
    const finalStatus = finalHop?.status ?? 0;
    const chainLength = chain.length;
    const totalTime = chain.reduce((sum, h) => sum + h.time, 0);

    // Check for mixed redirect types (301 vs 302)
    const has301 = statusCodes.includes(301);
    const has302 = statusCodes.includes(302) || statusCodes.includes(307) || statusCodes.includes(308);
    const hasMixedTypes = has301 && has302;

    if (hasMixedTypes) {
      issues.push("Mixed redirect types: both permanent (301) and temporary (302/307) redirects in chain");
    }

    if (chainLength > 2 && !hasLoop) {
      issues.push(`Redirect chain has ${chainLength - 1} hops - consider reducing to a single redirect`);
    }

    // Check HTTP to HTTPS redirects
    const urls = chain.map((h) => h.url);
    const hasHttp = urls.some((u) => u.startsWith("http://"));
    const hasHttps = urls.some((u) => u.startsWith("https://"));
    if (hasHttp && hasHttps && chainLength > 2) {
      issues.push("Chain includes HTTP to HTTPS upgrade - ensure this is done in a single hop");
    }

    return {
      url: startUrl,
      chain,
      finalUrl,
      finalStatus,
      chainLength,
      hasLoop,
      hasMixedTypes,
      totalTime,
      issues,
    };
  } catch {
    return {
      url: startUrl,
      chain,
      finalUrl: startUrl,
      finalStatus: 0,
      chainLength: 0,
      hasLoop: false,
      hasMixedTypes: false,
      totalTime: 0,
      issues: ["Could not fetch the URL - connection failed or timed out"],
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
    if (urls.length > 50) {
      return NextResponse.json({ error: "Too many URLs (max 50)" }, { status: 400 });
    }

    const results: RedirectResult[] = await Promise.all(
      urls.map((url: string) => followRedirects(url))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
