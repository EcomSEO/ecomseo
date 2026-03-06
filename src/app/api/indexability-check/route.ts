import { NextResponse } from "next/server";

type IndexabilityStatus =
  | "indexable"
  | "noindex_meta"
  | "noindex_header"
  | "blocked_robots"
  | "http_error"
  | "redirected"
  | "fetch_error";

interface IndexabilityResult {
  url: string;
  status: IndexabilityStatus;
  httpStatus: number | null;
  details: string | null;
}

async function checkRobotsTxt(pageUrl: string): Promise<boolean> {
  try {
    const parsed = new URL(pageUrl);
    const robotsUrl = `${parsed.protocol}//${parsed.host}/robots.txt`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(robotsUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
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
        const agent = line.split(":")[1].trim();
        applies = agent === "*" || agent.toLowerCase().includes("googlebot");
      }
      if (applies && line.toLowerCase().startsWith("disallow:")) {
        const disallowed = line.split(":")[1].trim();
        if (disallowed && path.startsWith(disallowed)) return true;
      }
    }
    return false;
  } catch {
    return false;
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

    const results: IndexabilityResult[] = await Promise.all(
      urls.map(async (url: string): Promise<IndexabilityResult> => {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: {
              "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0; +https://ecomseo.com)",
            },
            signal: controller.signal,
            redirect: "follow",
          });
          clearTimeout(timeout);

          const finalUrl = res.url || url;
          const wasRedirected = finalUrl !== url && !finalUrl.includes(new URL(url).pathname);

          // Check X-Robots-Tag header
          const xRobotsTag = res.headers.get("x-robots-tag") || "";
          if (xRobotsTag.toLowerCase().includes("noindex")) {
            return { url, status: "noindex_header", httpStatus: res.status, details: `X-Robots-Tag: ${xRobotsTag}` };
          }

          // HTTP errors
          if (res.status >= 400) {
            return { url, status: "http_error", httpStatus: res.status, details: `HTTP ${res.status}` };
          }

          // Redirected (3xx that wasn't followed, or significant URL change)
          if (wasRedirected) {
            return { url, status: "redirected", httpStatus: res.status, details: `→ ${finalUrl}` };
          }

          // Check robots.txt
          const blockedByRobots = await checkRobotsTxt(url);
          if (blockedByRobots) {
            return { url, status: "blocked_robots", httpStatus: res.status, details: "Blocked by robots.txt" };
          }

          // Check meta noindex
          const html = await res.text();
          const metaRobotsMatch = html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i)
            || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]*name=["']robots["']/i);
          if (metaRobotsMatch) {
            const content = metaRobotsMatch[1].toLowerCase();
            if (content.includes("noindex")) {
              return { url, status: "noindex_meta", httpStatus: res.status, details: `robots: ${metaRobotsMatch[1]}` };
            }
          }

          return { url, status: "indexable", httpStatus: res.status, details: null };
        } catch {
          return { url, status: "fetch_error", httpStatus: null, details: null };
        }
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
