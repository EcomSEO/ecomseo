import { NextResponse } from "next/server";

type ThinContentStatus = "ok" | "thin" | "empty" | "fetch_error";

interface ThinContentResult {
  url: string;
  wordCount: number | null;
  status: ThinContentStatus;
}

function extractTextFromHtml(html: string): string {
  // Remove script, style, nav, header, footer, aside tags and their content
  const text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, " ")
    .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  return text;
}

function countWords(text: string): number {
  if (!text || text.trim().length === 0) return 0;
  return text.trim().split(/\s+/).filter((w) => w.length > 1).length;
}

const THIN_THRESHOLD = 300;

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

    const results: ThinContentResult[] = await Promise.all(
      urls.map(async (url: string): Promise<ThinContentResult> => {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: {
              "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0; +https://ecomseo.com)",
              "Accept": "text/html",
            },
            signal: controller.signal,
          });
          clearTimeout(timeout);

          if (!res.ok) {
            return { url, wordCount: null, status: "fetch_error" };
          }

          const html = await res.text();
          const text = extractTextFromHtml(html);
          const wordCount = countWords(text);

          let status: ThinContentStatus;
          if (wordCount === 0) {
            status = "empty";
          } else if (wordCount < THIN_THRESHOLD) {
            status = "thin";
          } else {
            status = "ok";
          }

          return { url, wordCount, status };
        } catch {
          return { url, wordCount: null, status: "fetch_error" };
        }
      })
    );

    return NextResponse.json({ results, thinThreshold: THIN_THRESHOLD });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
