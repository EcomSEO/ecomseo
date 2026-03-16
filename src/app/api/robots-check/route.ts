import { NextResponse } from "next/server";

/* ── Types ────────────────────────────────────────────────────────────── */

interface RuleItem {
  type: "allow" | "disallow" | "crawl-delay";
  path: string;
  line: number;
}

interface UserAgentBlock {
  name: string;
  rules: RuleItem[];
}

interface Issue {
  type: "error" | "warning" | "info";
  message: string;
  line?: number;
}

interface EcommerceCheck {
  path: string;
  label: string;
  blocked: boolean;
  recommendation: string;
}

interface RobotsResult {
  url: string;
  robotsTxt: string;
  userAgents: UserAgentBlock[];
  sitemapUrls: string[];
  issues: Issue[];
  score: number;
  ecommerceChecks: EcommerceCheck[];
}

/* ── Parser ───────────────────────────────────────────────────────────── */

function parseRobotsTxt(raw: string): { userAgents: UserAgentBlock[]; sitemapUrls: string[] } {
  const lines = raw.split("\n");
  const userAgents: UserAgentBlock[] = [];
  const sitemapUrls: string[] = [];
  let currentBlock: UserAgentBlock | null = null;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const trimmed = lines[i].trim();

    // skip empty / comment
    if (!trimmed || trimmed.startsWith("#")) continue;

    // strip inline comments
    const commentIdx = trimmed.indexOf(" #");
    const clean = commentIdx !== -1 ? trimmed.substring(0, commentIdx).trim() : trimmed;

    const colonIdx = clean.indexOf(":");
    if (colonIdx === -1) continue;

    const directive = clean.substring(0, colonIdx).trim().toLowerCase();
    const value = clean.substring(colonIdx + 1).trim();

    if (directive === "sitemap") {
      if (value) sitemapUrls.push(value);
      continue;
    }

    if (directive === "user-agent") {
      currentBlock = { name: value || "*", rules: [] };
      userAgents.push(currentBlock);
      continue;
    }

    if (!currentBlock) continue;

    if (directive === "disallow") {
      currentBlock.rules.push({ type: "disallow", path: value, line: lineNum });
    } else if (directive === "allow") {
      currentBlock.rules.push({ type: "allow", path: value, line: lineNum });
    } else if (directive === "crawl-delay") {
      currentBlock.rules.push({ type: "crawl-delay", path: value, line: lineNum });
    }
  }

  return { userAgents, sitemapUrls };
}

/* ── Analyzer ─────────────────────────────────────────────────────────── */

function analyzeRobots(
  raw: string,
  userAgents: UserAgentBlock[],
  sitemapUrls: string[],
): Issue[] {
  const issues: Issue[] = [];

  // 1. Empty file
  if (raw.trim().length === 0) {
    issues.push({ type: "error", message: "robots.txt is empty — search engines will crawl everything with no guidance." });
    return issues;
  }

  // 2. File too large (>500KB)
  if (new Blob([raw]).size > 500 * 1024) {
    issues.push({ type: "error", message: "robots.txt exceeds 500 KB. Google ignores content beyond this limit." });
  }

  // 3. Missing User-agent: *
  const hasWildcard = userAgents.some((ua) => ua.name === "*");
  if (!hasWildcard) {
    issues.push({ type: "warning", message: "No User-agent: * block found. Bots without specific rules will ignore the file." });
  }

  // 4. Missing sitemap directive
  if (sitemapUrls.length === 0) {
    issues.push({ type: "warning", message: "No Sitemap directive found. Adding a sitemap reference helps search engines discover your pages." });
  }

  // Collect all rules for analysis
  const allDisallows: { path: string; line: number; agent: string }[] = [];
  const allAllows: { path: string; line: number; agent: string }[] = [];

  for (const ua of userAgents) {
    for (const rule of ua.rules) {
      if (rule.type === "disallow") {
        allDisallows.push({ path: rule.path, line: rule.line, agent: ua.name });
      } else if (rule.type === "allow") {
        allAllows.push({ path: rule.path, line: rule.line, agent: ua.name });
      }

      // 5. Crawl-delay too high
      if (rule.type === "crawl-delay") {
        const delay = parseFloat(rule.path);
        if (!isNaN(delay) && delay > 10) {
          issues.push({
            type: "warning",
            message: `Crawl-delay of ${delay}s for ${ua.name} is very high (>10s). This severely limits crawl rate.`,
            line: rule.line,
          });
        }
        // Google ignores crawl-delay
        if (ua.name.toLowerCase() === "googlebot" || ua.name === "*") {
          issues.push({
            type: "info",
            message: `Crawl-delay is set for ${ua.name} but Googlebot ignores this directive. Use Google Search Console instead.`,
            line: rule.line,
          });
        }
      }
    }
  }

  // 6. Entire site blocked
  const siteBlocked = allDisallows.some((d) => d.path === "/" && (d.agent === "*" || d.agent.toLowerCase() === "googlebot"));
  if (siteBlocked) {
    const match = allDisallows.find((d) => d.path === "/" && (d.agent === "*" || d.agent.toLowerCase() === "googlebot"));
    issues.push({
      type: "error",
      message: `Disallow: / blocks the entire site for ${match?.agent}. No pages will be crawled.`,
      line: match?.line,
    });
  }

  // 7. Blocking CSS/JS
  const cssJsBlocked = allDisallows.filter(
    (d) => d.path.includes(".css") || d.path.includes(".js") || d.path.includes("/css") || d.path.includes("/js"),
  );
  for (const rule of cssJsBlocked) {
    issues.push({
      type: "error",
      message: `Blocking CSS/JS files (${rule.path}) prevents search engines from rendering your pages properly.`,
      line: rule.line,
    });
  }

  // 8. Blocking important ecommerce paths
  const importantPaths = ["/products", "/collections", "/categories", "/pages", "/catalog", "/shop"];
  for (const d of allDisallows) {
    for (const imp of importantPaths) {
      if (d.path === imp || d.path === imp + "/" || d.path === imp + "/*") {
        issues.push({
          type: "error",
          message: `Important ecommerce path "${d.path}" is blocked for ${d.agent}. This prevents product/category pages from being crawled.`,
          line: d.line,
        });
      }
    }
  }

  // 9. NOT blocking /search, /cart, /checkout, /account (ecommerce recs)
  const shouldBlock = ["/search", "/cart", "/checkout", "/account", "/wishlist"];
  const disallowPaths = allDisallows.map((d) => d.path.replace(/\/$/, "").replace(/\?$/, "").replace(/\*$/, ""));
  for (const sb of shouldBlock) {
    const isBlocked = disallowPaths.some(
      (p) => p === sb || p === sb + "/" || p.startsWith(sb + "?") || p.startsWith(sb + "/"),
    );
    if (!isBlocked) {
      issues.push({
        type: "info",
        message: `Consider blocking "${sb}" to save crawl budget — these pages typically don't need indexing for ecommerce sites.`,
      });
    }
  }

  // 10. Wildcard misuse (e.g. /*.pdf$)
  for (const d of [...allDisallows, ...allAllows]) {
    if (d.path.includes("$") && d.path.includes("*")) {
      issues.push({
        type: "warning",
        message: `Pattern "${d.path}" uses regex-like syntax. Only Googlebot supports $ end-of-string anchors — other bots may misinterpret this.`,
        line: d.line,
      });
    }
  }

  // 11. Conflicting rules for same path within same user-agent
  for (const ua of userAgents) {
    const disallowPaths = ua.rules.filter((r) => r.type === "disallow").map((r) => r.path);
    const allowPaths = ua.rules.filter((r) => r.type === "allow").map((r) => r.path);
    for (const p of disallowPaths) {
      if (p && allowPaths.includes(p)) {
        issues.push({
          type: "warning",
          message: `Conflicting rules for "${p}" in ${ua.name} block — both Allow and Disallow are set for the same path.`,
        });
      }
    }
  }

  return issues;
}

/* ── Score ─────────────────────────────────────────────────────────────── */

function calculateScore(issues: Issue[]): number {
  let score = 100;
  for (const issue of issues) {
    if (issue.type === "error") score -= 15;
    else if (issue.type === "warning") score -= 8;
    else if (issue.type === "info") score -= 2;
  }
  return Math.max(0, Math.min(100, score));
}

/* ── Generate Fix ─────────────────────────────────────────────────────── */

function generateFixedRobotsTxt(
  userAgents: UserAgentBlock[],
  sitemapUrls: string[],
  issues: Issue[],
): string {
  const lines: string[] = [];
  const issueMessages = issues.map((i) => i.message);

  // Check if we have a wildcard block
  const hasWildcard = userAgents.some((ua) => ua.name === "*");

  // Build existing blocks (cleaned up)
  for (const ua of userAgents) {
    lines.push(`User-agent: ${ua.name}`);
    for (const rule of ua.rules) {
      if (rule.type === "crawl-delay") {
        // Skip crawl-delay for Googlebot or * (useless)
        if (ua.name === "*" || ua.name.toLowerCase() === "googlebot") continue;
        const delay = parseFloat(rule.path);
        if (!isNaN(delay) && delay > 10) {
          lines.push(`Crawl-delay: 5`); // reduce high delays
        } else {
          lines.push(`Crawl-delay: ${rule.path}`);
        }
        continue;
      }

      // Skip rules blocking CSS/JS
      if (
        rule.type === "disallow" &&
        (rule.path.includes(".css") || rule.path.includes(".js") || rule.path === "/css" || rule.path === "/js")
      ) {
        lines.push(`# Removed: Disallow: ${rule.path} (blocks rendering)`);
        continue;
      }

      // Skip rules blocking important ecom paths
      const importantPaths = ["/products", "/collections", "/categories", "/pages", "/catalog", "/shop"];
      const isBlockingImportant = rule.type === "disallow" &&
        importantPaths.some((imp) => rule.path === imp || rule.path === imp + "/" || rule.path === imp + "/*");
      if (isBlockingImportant) {
        lines.push(`# Removed: Disallow: ${rule.path} (important ecommerce path)`);
        continue;
      }

      // Skip entire-site blocks
      if (rule.type === "disallow" && rule.path === "/") {
        lines.push(`# Removed: Disallow: / (was blocking entire site)`);
        continue;
      }

      lines.push(`${rule.type === "disallow" ? "Disallow" : "Allow"}: ${rule.path}`);
    }
    lines.push("");
  }

  // Add wildcard block if missing
  if (!hasWildcard) {
    lines.unshift("User-agent: *", "Disallow: /search", "Disallow: /cart", "Disallow: /checkout", "Disallow: /account", "Disallow: /wishlist", "Allow: /", "");
  } else {
    // Add recommended blocks to wildcard if missing
    const wildcardBlock = userAgents.find((ua) => ua.name === "*");
    if (wildcardBlock) {
      const existingDisallows = wildcardBlock.rules
        .filter((r) => r.type === "disallow")
        .map((r) => r.path.replace(/\/$/, "").replace(/\?$/, "").replace(/\*$/, ""));

      const shouldBlock = ["/search", "/cart", "/checkout", "/account", "/wishlist"];
      const missing = shouldBlock.filter(
        (sb) => !existingDisallows.some((p) => p === sb || p.startsWith(sb + "?") || p.startsWith(sb + "/")),
      );

      if (missing.length > 0) {
        // Insert before the empty line after the wildcard block
        const wildcardIdx = lines.findIndex((l) => l === "User-agent: *");
        if (wildcardIdx !== -1) {
          // Find next empty line
          let insertIdx = wildcardIdx + 1;
          while (insertIdx < lines.length && lines[insertIdx] !== "") insertIdx++;
          for (const m of missing) {
            lines.splice(insertIdx, 0, `Disallow: ${m}`);
            insertIdx++;
          }
        }
      }
    }
  }

  // Add sitemaps
  if (sitemapUrls.length > 0) {
    for (const s of sitemapUrls) {
      lines.push(`Sitemap: ${s}`);
    }
  } else if (issueMessages.some((m) => m.includes("No Sitemap"))) {
    lines.push("# TODO: Add your sitemap URL below");
    lines.push("# Sitemap: https://yourdomain.com/sitemap.xml");
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

/* ── Ecommerce Checks ────────────────────────────────────────────────── */

function escapeRegexExceptStar(str: string): string {
  // Escape all regex special chars EXCEPT *, which we handle separately
  return str.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
}

function patternToRegex(pattern: string, anchor: "prefix" | "full"): RegExp {
  // Split on *, escape each segment, join with .*
  const segments = pattern.split("*").map(escapeRegexExceptStar);
  const joined = segments.join(".*");
  return new RegExp("^" + joined + (anchor === "full" ? "$" : ""));
}

function matchesRulePath(path: string, pattern: string): boolean {
  if (!pattern) return false;
  if (pattern === "/") return true;

  try {
    if (pattern.endsWith("$")) {
      const p = pattern.slice(0, -1);
      if (p.includes("*")) {
        return patternToRegex(p, "full").test(path);
      }
      return path === p;
    }
    if (pattern.includes("*")) {
      return patternToRegex(pattern, "prefix").test(path);
    }
  } catch {
    // If regex still fails for any reason, fall back to simple prefix match
    return path.startsWith(pattern.replace(/\*/g, ""));
  }
  return path.startsWith(pattern);
}

function isPathBlocked(path: string, userAgents: UserAgentBlock[]): boolean {
  const applicable = userAgents.filter(
    (ua) => ua.name === "*" || ua.name.toLowerCase() === "googlebot",
  );
  if (applicable.length === 0) return false;

  let bestMatch: { type: "allow" | "disallow"; specificity: number } | null = null;
  for (const ua of applicable) {
    for (const rule of ua.rules) {
      if (rule.type === "crawl-delay") continue;
      if (matchesRulePath(path, rule.path)) {
        const specificity = rule.path.replace(/\*/g, "").replace(/\$/g, "").length;
        if (!bestMatch || specificity > bestMatch.specificity || (specificity === bestMatch.specificity && rule.type === "allow")) {
          bestMatch = { type: rule.type, specificity };
        }
      }
    }
  }
  return bestMatch?.type === "disallow";
}

function generateEcommerceChecks(userAgents: UserAgentBlock[]): EcommerceCheck[] {
  const checks: EcommerceCheck[] = [];

  // Paths that SHOULD be crawlable
  const shouldAllow = [
    { path: "/products", label: "Product pages", recommendation: "Product pages must be crawlable for organic search visibility. Unblock this path." },
    { path: "/collections", label: "Collection/Category pages", recommendation: "Collection pages are key landing pages for SEO. They should be crawlable." },
    { path: "/categories", label: "Category pages", recommendation: "Category pages drive organic traffic. Ensure they are crawlable." },
    { path: "/pages", label: "CMS/Info pages", recommendation: "CMS pages (About, FAQ, etc.) support SEO. Keep them crawlable." },
    { path: "/catalog", label: "Catalog pages", recommendation: "Catalog pages are critical for product discovery by search engines." },
    { path: "/shop", label: "Shop pages", recommendation: "Shop pages are the core of your ecommerce site. They must be crawlable." },
    { path: "/blog", label: "Blog pages", recommendation: "Blog pages drive informational queries and support product pages." },
  ];

  // Paths that SHOULD be blocked
  const shouldBlock = [
    { path: "/search", label: "Internal search results", recommendation: "Block /search to prevent thin, duplicate search result pages from being indexed." },
    { path: "/cart", label: "Shopping cart", recommendation: "Cart pages have no SEO value. Block to save crawl budget." },
    { path: "/checkout", label: "Checkout pages", recommendation: "Checkout pages should never be indexed. Block to save crawl budget and protect privacy." },
    { path: "/account", label: "Account/Login pages", recommendation: "User account pages are private and have no SEO value. Block them." },
    { path: "/wishlist", label: "Wishlist pages", recommendation: "Wishlist pages are user-specific and should not be crawled." },
    { path: "/order", label: "Order pages", recommendation: "Order confirmation/tracking pages should be blocked from crawling." },
  ];

  for (const item of shouldAllow) {
    const blocked = isPathBlocked(item.path, userAgents);
    checks.push({
      path: item.path,
      label: item.label,
      blocked,
      recommendation: blocked ? item.recommendation : "Correctly allowed for crawling.",
    });
  }

  for (const item of shouldBlock) {
    const blocked = isPathBlocked(item.path, userAgents);
    checks.push({
      path: item.path,
      label: item.label,
      blocked,
      recommendation: blocked ? "Correctly blocked from crawling." : item.recommendation,
    });
  }

  return checks;
}

/* ── Route handler ────────────────────────────────────────────────────── */

export async function POST(req: Request) {
  try {
    const { domain } = await req.json();
    if (!domain) return NextResponse.json({ error: "Missing domain" }, { status: 400 });

    const robotsUrl = `https://${domain}/robots.txt`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    // Try HTTPS first, fall back to HTTP
    let res: Response | null = null;
    let fetchError: unknown = null;

    for (const protocol of ["https", "http"]) {
      const url = `${protocol}://${domain}/robots.txt`;
      try {
        res = await fetch(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            Accept: "text/plain, text/html, */*",
            "Accept-Language": "en-US,en;q=0.9",
          },
          signal: controller.signal,
          redirect: "follow",
          cache: "no-store",
        });
        if (res.ok) break;
      } catch (e) {
        fetchError = e;
        res = null;
      }
    }

    if (!res) {
      clearTimeout(timeout);
      throw fetchError || new Error("Fetch failed");
    }
    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json({ error: "no_robots" });
    }

    const raw = await res.text();

    // Check if it looks like HTML (not a real robots.txt)
    if (raw.trim().startsWith("<!DOCTYPE") || raw.trim().startsWith("<html")) {
      return NextResponse.json({ error: "no_robots" });
    }

    const { userAgents, sitemapUrls } = parseRobotsTxt(raw);
    const issues = analyzeRobots(raw, userAgents, sitemapUrls);
    const score = calculateScore(issues);
    const fixedRobotsTxt = generateFixedRobotsTxt(userAgents, sitemapUrls, issues);
    const ecommerceChecks = generateEcommerceChecks(userAgents);

    const result: RobotsResult & { fixedRobotsTxt: string } = {
      url: robotsUrl,
      robotsTxt: raw,
      userAgents,
      sitemapUrls,
      issues,
      score,
      fixedRobotsTxt,
      ecommerceChecks,
    };

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Failed to fetch robots.txt" }, { status: 500 });
  }
}
