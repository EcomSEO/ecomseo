import { NextResponse } from "next/server";

type CWVRating = "good" | "needs_improvement" | "poor" | "n/a";

interface CWVMetric {
  value: number | null;
  rating: CWVRating;
  displayValue: string;
}

interface CWVResult {
  url: string;
  mobile: {
    lcp: CWVMetric;
    cls: CWVMetric;
    inp: CWVMetric;
    overall: CWVRating;
  } | null;
  desktop: {
    lcp: CWVMetric;
    cls: CWVMetric;
    inp: CWVMetric;
    overall: CWVRating;
  } | null;
  error?: string;
}

function rateLcp(value: number): CWVRating {
  if (value <= 2500) return "good";
  if (value <= 4000) return "needs_improvement";
  return "poor";
}

function rateCls(value: number): CWVRating {
  if (value <= 0.1) return "good";
  if (value <= 0.25) return "needs_improvement";
  return "poor";
}

function rateInp(value: number): CWVRating {
  if (value <= 200) return "good";
  if (value <= 500) return "needs_improvement";
  return "poor";
}

function getOverall(ratings: CWVRating[]): CWVRating {
  if (ratings.every((r) => r === "good")) return "good";
  if (ratings.some((r) => r === "poor")) return "poor";
  if (ratings.some((r) => r === "needs_improvement")) return "needs_improvement";
  return "n/a";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseMetrics(audits: Record<string, any>): {
  lcp: CWVMetric;
  cls: CWVMetric;
  inp: CWVMetric;
  overall: CWVRating;
} {
  const lcpAudit = audits["largest-contentful-paint"];
  const clsAudit = audits["cumulative-layout-shift"];
  const inpAudit = audits["interaction-to-next-paint"] || audits["total-blocking-time"];

  const lcpValue = lcpAudit?.numericValue ?? null;
  const clsValue = clsAudit?.numericValue ?? null;
  const inpValue = inpAudit?.numericValue ?? null;

  const lcp: CWVMetric = {
    value: lcpValue,
    rating: lcpValue !== null ? rateLcp(lcpValue) : "n/a",
    displayValue: lcpAudit?.displayValue ?? "N/A",
  };
  const cls: CWVMetric = {
    value: clsValue,
    rating: clsValue !== null ? rateCls(clsValue) : "n/a",
    displayValue: clsAudit?.displayValue ?? "N/A",
  };
  const inp: CWVMetric = {
    value: inpValue,
    rating: inpValue !== null ? rateInp(inpValue) : "n/a",
    displayValue: inpAudit?.displayValue ?? "N/A",
  };

  const overall = getOverall([lcp.rating, cls.rating, inp.rating].filter((r) => r !== "n/a") as CWVRating[]);

  return { lcp, cls, inp, overall };
}

async function fetchPSI(url: string, strategy: "mobile" | "desktop") {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  const res = await fetch(apiUrl, { signal: controller.signal });
  clearTimeout(timeout);

  if (!res.ok) throw new Error(`PSI API returned ${res.status}`);
  return await res.json();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length > 5) {
      return NextResponse.json({ error: "Maximum 5 URLs at a time" }, { status: 400 });
    }

    const results: CWVResult[] = await Promise.all(
      urls.map(async (url: string): Promise<CWVResult> => {
        try {
          const [mobileData, desktopData] = await Promise.all([
            fetchPSI(url, "mobile").catch(() => null),
            fetchPSI(url, "desktop").catch(() => null),
          ]);

          const mobile = mobileData?.lighthouseResult?.audits
            ? parseMetrics(mobileData.lighthouseResult.audits)
            : null;

          const desktop = desktopData?.lighthouseResult?.audits
            ? parseMetrics(desktopData.lighthouseResult.audits)
            : null;

          if (!mobile && !desktop) {
            return { url, mobile: null, desktop: null, error: "Could not retrieve data" };
          }

          return { url, mobile, desktop };
        } catch (e) {
          return { url, mobile: null, desktop: null, error: String(e) };
        }
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
