import { NextResponse } from "next/server";

interface Heading {
  level: number;
  text: string;
  index: number;
}

interface Issue {
  type: "error" | "warning" | "info";
  message: string;
}

interface HeadingStats {
  total: number;
  h1Count: number;
  h2Count: number;
  h3Count: number;
  h4Count: number;
  h5Count: number;
  h6Count: number;
  wordCount: number;
  contentToHeadingRatio: string;
}

interface HeadingCheckResult {
  url: string;
  pageTitle: string;
  headings: Heading[];
  issues: Issue[];
  stats: HeadingStats;
  score: number;
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";
}

function extractWordCount(html: string): number {
  // Remove script/style tags, then strip all HTML
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned ? cleaned.split(/\s+/).length : 0;
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  let index = 0;

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    headings.push({ level, text, index });
    index++;
  }

  return headings;
}

function analyzeHeadings(headings: Heading[], pageTitle: string, wordCount: number): { issues: Issue[]; score: number } {
  const issues: Issue[] = [];
  let score = 100;

  const h1s = headings.filter((h) => h.level === 1);

  // Missing H1 (critical)
  if (h1s.length === 0) {
    issues.push({ type: "error", message: "Missing H1 tag - every page should have exactly one H1" });
    score -= 25;
  }

  // Multiple H1 tags
  if (h1s.length > 1) {
    issues.push({ type: "warning", message: `Multiple H1 tags found (${h1s.length}) - use only one H1 per page` });
    score -= 15;
  }

  // Empty headings
  const emptyHeadings = headings.filter((h) => !h.text);
  if (emptyHeadings.length > 0) {
    issues.push({
      type: "error",
      message: `${emptyHeadings.length} empty heading${emptyHeadings.length > 1 ? "s" : ""} found - remove or add content`,
    });
    score -= 10 * emptyHeadings.length;
  }

  // Skipped heading levels
  for (let i = 1; i < headings.length; i++) {
    const prev = headings[i - 1].level;
    const curr = headings[i].level;
    if (curr > prev + 1) {
      issues.push({
        type: "warning",
        message: `Skipped heading level: H${prev} to H${curr} (missing H${prev + 1}) at position ${i + 1}`,
      });
      score -= 10;
    }
  }
  // Also check if first heading is not H1 but a lower level
  if (headings.length > 0 && headings[0].level !== 1) {
    issues.push({
      type: "warning",
      message: `First heading is H${headings[0].level} instead of H1`,
    });
    score -= 5;
  }

  // Headings too long (>70 chars)
  const longHeadings = headings.filter((h) => h.text.length > 70);
  if (longHeadings.length > 0) {
    issues.push({
      type: "warning",
      message: `${longHeadings.length} heading${longHeadings.length > 1 ? "s" : ""} exceed 70 characters`,
    });
    score -= 5 * longHeadings.length;
  }

  // Too few headings for content length
  if (wordCount > 500 && headings.length < 3) {
    issues.push({
      type: "info",
      message: `Only ${headings.length} heading${headings.length !== 1 ? "s" : ""} for ${wordCount} words - consider adding more headings to break up content`,
    });
    score -= 5;
  }

  // H1 doesn't match page title
  if (h1s.length === 1 && pageTitle) {
    const h1Text = h1s[0].text.toLowerCase().trim();
    const titleText = pageTitle.toLowerCase().trim();
    // Check if they share at least some significant overlap
    if (h1Text && titleText && !titleText.includes(h1Text) && !h1Text.includes(titleText)) {
      // Check word overlap
      const h1Words = new Set(h1Text.split(/\s+/).filter((w) => w.length > 3));
      const titleWords = new Set(titleText.split(/\s+/).filter((w) => w.length > 3));
      let overlap = 0;
      for (const w of h1Words) {
        if (titleWords.has(w)) overlap++;
      }
      const maxSet = Math.max(h1Words.size, titleWords.size);
      if (maxSet > 0 && overlap / maxSet < 0.3) {
        issues.push({
          type: "info",
          message: `H1 doesn't closely match page title - H1: "${h1s[0].text}" vs Title: "${pageTitle}"`,
        });
        score -= 3;
      }
    }
  }

  // Duplicate headings
  const seen = new Map<string, number>();
  for (const h of headings) {
    if (h.text) {
      const key = `h${h.level}:${h.text.toLowerCase()}`;
      seen.set(key, (seen.get(key) || 0) + 1);
    }
  }
  const duplicates = [...seen.entries()].filter(([, count]) => count > 1);
  if (duplicates.length > 0) {
    const examples = duplicates
      .slice(0, 3)
      .map(([key, count]) => {
        const [lvl, ...textParts] = key.split(":");
        return `${lvl.toUpperCase()}: "${textParts.join(":")}" (x${count})`;
      });
    issues.push({
      type: "warning",
      message: `Duplicate headings found: ${examples.join(", ")}${duplicates.length > 3 ? ` and ${duplicates.length - 3} more` : ""}`,
    });
    score -= 5 * duplicates.length;
  }

  // Clamp score
  score = Math.max(0, Math.min(100, score));

  return { issues, score };
}

function buildStats(headings: Heading[], wordCount: number): HeadingStats {
  const total = headings.length;
  const ratio = total > 0 ? Math.round(wordCount / total) : 0;

  return {
    total,
    h1Count: headings.filter((h) => h.level === 1).length,
    h2Count: headings.filter((h) => h.level === 2).length,
    h3Count: headings.filter((h) => h.level === 3).length,
    h4Count: headings.filter((h) => h.level === 4).length,
    h5Count: headings.filter((h) => h.level === 5).length,
    h6Count: headings.filter((h) => h.level === 6).length,
    wordCount,
    contentToHeadingRatio: total > 0 ? `1 heading per ${ratio} words` : "No headings found",
  };
}

export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "Missing URLs" }, { status: 400 });
    }
    if (urls.length > 50) {
      return NextResponse.json({ error: "Too many URLs (max 50)" }, { status: 400 });
    }

    const results: HeadingCheckResult[] = await Promise.all(
      urls.map(async (url: string): Promise<HeadingCheckResult> => {
        const base: HeadingCheckResult = {
          url,
          pageTitle: "",
          headings: [],
          issues: [],
          stats: {
            total: 0,
            h1Count: 0,
            h2Count: 0,
            h3Count: 0,
            h4Count: 0,
            h5Count: 0,
            h6Count: 0,
            wordCount: 0,
            contentToHeadingRatio: "N/A",
          },
          score: 0,
        };

        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: {
              "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Heading Checker/1.0)",
              Accept: "text/html,application/xhtml+xml",
            },
            signal: controller.signal,
            redirect: "follow",
          });
          clearTimeout(timeout);

          const html = await res.text();
          const pageTitle = extractTitle(html);
          const wordCount = extractWordCount(html);
          const headings = extractHeadings(html);
          const { issues, score } = analyzeHeadings(headings, pageTitle, wordCount);
          const stats = buildStats(headings, wordCount);

          return { url, pageTitle, headings, issues, stats, score };
        } catch {
          base.issues.push({ type: "error", message: "Failed to fetch this URL" });
          return base;
        }
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
