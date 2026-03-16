import { NextResponse } from "next/server";

interface ResourceBreakdown {
  scripts: number;
  stylesheets: number;
  images: number;
  fonts: number;
  other: number;
  totalSize: number;
  totalRequests: number;
}

interface SpeedResult {
  url: string;
  score: number;
  fcp: number;
  lcp: number;
  tbt: number;
  cls: number;
  ttfb: number;
  speedIndex: number;
  resources: ResourceBreakdown;
  error?: boolean;
}

async function fetchPSI(url: string): Promise<SpeedResult> {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) throw new Error(`PSI API returned ${res.status}`);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await res.json();
    const lighthouse = data.lighthouseResult;

    if (!lighthouse?.categories?.performance || !lighthouse?.audits) {
      throw new Error("Missing lighthouse data");
    }

    const score = Math.round(lighthouse.categories.performance.score * 100);
    const fcp = lighthouse.audits["first-contentful-paint"]?.numericValue ?? 0;
    const lcp = lighthouse.audits["largest-contentful-paint"]?.numericValue ?? 0;
    const tbt = lighthouse.audits["total-blocking-time"]?.numericValue ?? 0;
    const cls = lighthouse.audits["cumulative-layout-shift"]?.numericValue ?? 0;
    const speedIndex = lighthouse.audits["speed-index"]?.numericValue ?? 0;
    const ttfb = lighthouse.audits["server-response-time"]?.numericValue ?? 0;

    // Resource breakdown from diagnostics
    const resources: ResourceBreakdown = {
      scripts: 0, stylesheets: 0, images: 0, fonts: 0, other: 0, totalSize: 0, totalRequests: 0,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const networkRequests = lighthouse.audits["network-requests"]?.details?.items as any[] | undefined;
    if (networkRequests) {
      for (const item of networkRequests) {
        const type = (item.resourceType || "").toLowerCase();
        const size = item.transferSize || 0;
        resources.totalSize += size;
        resources.totalRequests++;
        if (type === "script") resources.scripts++;
        else if (type === "stylesheet") resources.stylesheets++;
        else if (type === "image") resources.images++;
        else if (type === "font") resources.fonts++;
        else resources.other++;
      }
    }

    return { url, score, fcp, lcp, tbt, cls, ttfb, speedIndex, resources };
  } catch {
    clearTimeout(timeout);
    return {
      url, score: 0, fcp: 0, lcp: 0, tbt: 0, cls: 0, ttfb: 0, speedIndex: 0,
      resources: { scripts: 0, stylesheets: 0, images: 0, fonts: 0, other: 0, totalSize: 0, totalRequests: 0 },
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
    if (urls.length < 2) {
      return NextResponse.json({ error: "Minimum 2 URLs required" }, { status: 400 });
    }
    if (urls.length > 5) {
      return NextResponse.json({ error: "Maximum 5 URLs at a time" }, { status: 400 });
    }

    const results: SpeedResult[] = await Promise.all(
      urls.map((url: string) => fetchPSI(url))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
