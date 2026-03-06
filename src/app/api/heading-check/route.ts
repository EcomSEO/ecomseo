import { NextResponse } from "next/server";

interface Heading {
  level: number;
  text: string;
}

interface HeadingResult {
  url: string;
  headings: Heading[];
  issues: string[];
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    // Strip inner tags to get plain text
    const text = match[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    headings.push({ level, text });
  }

  return headings;
}

function analyzeHeadings(headings: Heading[]): string[] {
  const issues: string[] = [];
  const h1s = headings.filter((h) => h.level === 1);

  if (h1s.length === 0) issues.push("missing_h1");
  if (h1s.length > 1) issues.push("multiple_h1");

  // Check for empty heading tags
  const emptyHeadings = headings.filter((h) => !h.text);
  if (emptyHeadings.length > 0) issues.push("empty_heading");

  // Check for skipped levels
  for (let i = 1; i < headings.length; i++) {
    const prev = headings[i - 1].level;
    const curr = headings[i].level;
    if (curr > prev + 1) {
      issues.push("skipped_level");
      break; // Report once per page
    }
  }

  return issues;
}

export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "Missing URLs" }, { status: 400 });
    }
    if (urls.length > 20) {
      return NextResponse.json({ error: "Too many URLs (max 20)" }, { status: 400 });
    }

    const results: HeadingResult[] = await Promise.all(
      urls.map(async (url: string): Promise<HeadingResult> => {
        const base: HeadingResult = { url, headings: [], issues: [] };

        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Heading Checker/1.0)" },
            signal: controller.signal,
            redirect: "follow",
          });
          clearTimeout(timeout);

          const html = await res.text();
          base.headings = extractHeadings(html);
          base.issues = analyzeHeadings(base.headings);
        } catch {
          base.issues.push("fetch_error");
        }

        return base;
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
