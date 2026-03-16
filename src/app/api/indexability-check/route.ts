import { NextResponse } from "next/server";

type IndexabilityVerdict = "indexable" | "mixed_signals" | "not_indexable";

interface IndexabilityResult {
  url: string;
  httpStatus: number | null;
  metaRobots: string | null;
  xRobotsTag: string | null;
  canonical: string | null;
  canonicalPointsElsewhere: boolean;
  robotsTxtBlocked: boolean;
  verdict: IndexabilityVerdict;
  reasons: string[];
  score: number;
}

function extractMetaRobots(html: string): string | null {
  const match =
    html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]*name=["']robots["']/i);
  return match ? match[1].trim() : null;
}

function extractCanonical(html: string): string | null {
  const match =
    html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i);
  return match ? match[1].trim() : null;
}

async function checkRobotsTxt(pageUrl: string): Promise<boolean> {
  try {
    const parsed = new URL(pageUrl);
    const robotsUrl = `${parsed.protocol}//${parsed.host}/robots.txt`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(robotsUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/2.0)" },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return false;
    const text = await res.text();
    const path = parsed.pathname;
    const lines = text.split("\n").map((l) => l.trim());
    let applies = false;
    for (const line of lines) {
      if (line.toLowerCase().startsWith("user-agent:")) {
        const agent = line.split(":").slice(1).join(":").trim();
        applies = agent === "*" || agent.toLowerCase().includes("googlebot");
      }
      if (applies && line.toLowerCase().startsWith("disallow:")) {
        const disallowed = line.split(":").slice(1).join(":").trim();
        if (disallowed && path.startsWith(disallowed)) return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

async function checkUrl(url: string): Promise<IndexabilityResult> {
  const reasons: string[] = [];
  let metaRobots: string | null = null;
  let xRobotsTag: string | null = null;
  let canonical: string | null = null;
  let canonicalPointsElsewhere = false;
  let robotsTxtBlocked = false;
  let httpStatus: number | null = null;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Indexability Checker/2.0; +https://ecomseo.com)",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    httpStatus = res.status;

    // Check HTTP status
    if (res.status >= 500) {
      reasons.push(`Server error (HTTP ${res.status})`);
    } else if (res.status === 404) {
      reasons.push("Page not found (404)");
    } else if (res.status === 410) {
      reasons.push("Page gone (410) - permanently removed");
    } else if (res.status === 301 || res.status === 302) {
      reasons.push(`Redirect (${res.status}) - final URL may differ`);
    } else if (res.status >= 400) {
      reasons.push(`Client error (HTTP ${res.status})`);
    }

    // Check X-Robots-Tag header
    const xrt = res.headers.get("x-robots-tag");
    if (xrt) {
      xRobotsTag = xrt;
      const lower = xrt.toLowerCase();
      if (lower.includes("noindex")) {
        reasons.push(`X-Robots-Tag header contains 'noindex': ${xrt}`);
      }
      if (lower.includes("nofollow")) {
        reasons.push(`X-Robots-Tag header contains 'nofollow': ${xrt}`);
      }
    }

    // Parse HTML
    const html = await res.text();

    // Check meta robots
    metaRobots = extractMetaRobots(html);
    if (metaRobots) {
      const lower = metaRobots.toLowerCase();
      if (lower.includes("noindex")) {
        reasons.push(`Meta robots tag contains 'noindex': ${metaRobots}`);
      }
      if (lower.includes("nofollow")) {
        reasons.push(`Meta robots tag contains 'nofollow': ${metaRobots}`);
      }
    }

    // Check canonical
    canonical = extractCanonical(html);
    if (canonical) {
      try {
        const canonParsed = new URL(canonical, url);
        const pageParsed = new URL(url);
        const pageNorm = pageParsed.host.toLowerCase() + pageParsed.pathname.replace(/\/$/, "") + pageParsed.search;
        const canonNorm = canonParsed.host.toLowerCase() + canonParsed.pathname.replace(/\/$/, "") + canonParsed.search;
        if (pageNorm !== canonNorm) {
          canonicalPointsElsewhere = true;
          reasons.push(`Canonical points elsewhere: ${canonical}`);
        }
      } catch {
        reasons.push(`Invalid canonical URL: ${canonical}`);
      }
    }

    // Check robots.txt
    robotsTxtBlocked = await checkRobotsTxt(url);
    if (robotsTxtBlocked) {
      reasons.push("URL path is disallowed in robots.txt");
    }

    // Determine verdict and score
    const hasNoindex =
      (metaRobots && metaRobots.toLowerCase().includes("noindex")) ||
      (xRobotsTag && xRobotsTag.toLowerCase().includes("noindex"));
    const hasHttpError = httpStatus >= 400;
    const hasBlock = robotsTxtBlocked;
    const hasCanonicalElsewhere = canonicalPointsElsewhere;

    // Count blocking signals
    const blockingSignals = [hasNoindex, hasHttpError, hasBlock].filter(Boolean).length;
    // Count soft signals
    const softSignals = [hasCanonicalElsewhere, httpStatus === 301 || httpStatus === 302].filter(Boolean).length;

    let verdict: IndexabilityVerdict;
    let score: number;

    if (blockingSignals > 0 && softSignals > 0) {
      verdict = "mixed_signals";
      score = 30;
    } else if (blockingSignals > 0) {
      verdict = "not_indexable";
      score = Math.max(0, 20 - blockingSignals * 10);
    } else if (softSignals > 0 && reasons.length > 0) {
      verdict = "mixed_signals";
      score = 60 - softSignals * 10;
    } else if (reasons.length === 0) {
      verdict = "indexable";
      score = 100;
    } else {
      verdict = "mixed_signals";
      score = 50;
    }

    return {
      url,
      httpStatus,
      metaRobots,
      xRobotsTag,
      canonical,
      canonicalPointsElsewhere,
      robotsTxtBlocked,
      verdict,
      reasons,
      score,
    };
  } catch {
    return {
      url,
      httpStatus: null,
      metaRobots: null,
      xRobotsTag: null,
      canonical: null,
      canonicalPointsElsewhere: false,
      robotsTxtBlocked: false,
      verdict: "not_indexable",
      reasons: ["Could not fetch the URL"],
      score: 0,
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

    const results: IndexabilityResult[] = await Promise.all(
      urls.map((url: string) => checkUrl(url))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
