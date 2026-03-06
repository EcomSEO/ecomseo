import { NextResponse } from "next/server";

interface RobotRule {
  userAgent: string;
  allow: string[];
  disallow: string[];
  crawlDelay?: string;
}

function parseRobotsTxt(raw: string) {
  const lines = raw.split("\n").map((l) => l.trim());
  const rules: RobotRule[] = [];
  const sitemaps: string[] = [];
  let currentRule: RobotRule | null = null;

  for (const line of lines) {
    if (!line || line.startsWith("#")) continue;

    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const directive = line.substring(0, colonIdx).trim().toLowerCase();
    const value = line.substring(colonIdx + 1).trim();

    if (directive === "sitemap") {
      sitemaps.push(value);
      continue;
    }

    if (directive === "user-agent") {
      currentRule = { userAgent: value, allow: [], disallow: [] };
      rules.push(currentRule);
      continue;
    }

    if (!currentRule) continue;

    if (directive === "disallow" && value) {
      currentRule.disallow.push(value);
    } else if (directive === "allow" && value) {
      currentRule.allow.push(value);
    } else if (directive === "crawl-delay") {
      currentRule.crawlDelay = value;
    }
  }

  return { rules, sitemaps };
}

function analyzeRobots(raw: string, rules: RobotRule[], sitemaps: string[]) {
  const issues: string[] = [];
  const passed: string[] = [];

  // Check if file is not empty
  if (raw.trim().length > 0) {
    passed.push("Robots.txt file exists and is not empty");
  }

  // Check for sitemap reference
  if (sitemaps.length > 0) {
    passed.push(`${sitemaps.length} sitemap(s) referenced`);
  } else {
    issues.push("No sitemap referenced in robots.txt");
  }

  // Check for wildcard user-agent
  const hasWildcard = rules.some((r) => r.userAgent === "*");
  if (hasWildcard) {
    passed.push("Contains rules for all bots (User-agent: *)");
  } else {
    issues.push("No rules for User-agent: * (wildcard)");
  }

  // Check for common crawl issues
  const allDisallows = rules.flatMap((r) => r.disallow);
  if (allDisallows.includes("/")) {
    issues.push("Entire site is blocked with Disallow: /");
  }

  // Check if important paths are accessible
  const blockedImportant = ["/products", "/collections", "/categories", "/pages"];
  for (const path of blockedImportant) {
    if (allDisallows.some((d) => d === path || d === path + "/")) {
      issues.push(`Important path ${path} is blocked`);
    }
  }

  // Check for Googlebot rules
  const hasGooglebot = rules.some((r) => r.userAgent.toLowerCase() === "googlebot");
  if (hasGooglebot) {
    passed.push("Contains specific Googlebot rules");
  }

  // Check for crawl delay
  const hasCrawlDelay = rules.some((r) => r.crawlDelay);
  if (hasCrawlDelay) {
    issues.push("Crawl-delay directive found (not respected by Googlebot)");
  }

  // Check for blocked CSS/JS
  if (allDisallows.some((d) => d.includes(".css") || d.includes(".js"))) {
    issues.push("CSS or JS files may be blocked (can hurt rendering)");
  }

  return { issues, passed };
}

export async function POST(req: Request) {
  try {
    const { domain } = await req.json();
    if (!domain) return NextResponse.json({ error: "Missing domain" }, { status: 400 });

    const robotsUrl = `https://${domain}/robots.txt`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(robotsUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Robots Analyzer/1.0)",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json({ error: "no_robots" });
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/plain") && !contentType.includes("text/html")) {
      // Some servers return HTML for missing robots.txt
    }

    const raw = await res.text();

    // Check if it looks like HTML (not a real robots.txt)
    if (raw.trim().startsWith("<!DOCTYPE") || raw.trim().startsWith("<html")) {
      return NextResponse.json({ error: "no_robots" });
    }

    const { rules, sitemaps } = parseRobotsTxt(raw);
    const { issues, passed } = analyzeRobots(raw, rules, sitemaps);

    return NextResponse.json({ raw, rules, sitemaps, issues, passed });
  } catch {
    return NextResponse.json({ error: "Failed to fetch robots.txt" }, { status: 500 });
  }
}
