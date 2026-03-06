import { NextResponse } from "next/server";

interface SpeedResult {
  url: string;
  score: number;
  fcp: number;
  lcp: number;
  tbt: number;
  cls: number;
  speedIndex: number;
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

    return { url, score, fcp, lcp, tbt, cls, speedIndex };
  } catch {
    clearTimeout(timeout);
    return { url, score: 0, fcp: 0, lcp: 0, tbt: 0, cls: 0, speedIndex: 0, error: true };
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
