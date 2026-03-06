import { NextResponse } from "next/server";

interface PageData {
  url: string;
  wordCount: number;
  title: string;
  text: string;
}

interface PairResult {
  urlA: string;
  urlB: string;
  similarity: number;
  verdict: "duplicate" | "similar" | "unique";
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function extractTextFromHtml(html: string): string {
  const text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, " ")
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

function getWordTrigrams(text: string): Set<string> {
  const words = text.toLowerCase().split(/\s+/).filter((w) => w.length > 1);
  const trigrams = new Set<string>();
  for (let i = 0; i <= words.length - 3; i++) {
    trigrams.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return trigrams;
}

function jaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 && setB.size === 0) return 0;

  let intersectionSize = 0;
  const smaller = setA.size <= setB.size ? setA : setB;
  const larger = setA.size <= setB.size ? setB : setA;

  for (const item of smaller) {
    if (larger.has(item)) intersectionSize++;
  }

  const unionSize = setA.size + setB.size - intersectionSize;
  if (unionSize === 0) return 0;

  return intersectionSize / unionSize;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length < 2) {
      return NextResponse.json({ error: "At least 2 URLs required" }, { status: 400 });
    }
    if (urls.length > 20) {
      return NextResponse.json({ error: "Too many URLs (max 20)" }, { status: 400 });
    }

    const pages: PageData[] = await Promise.all(
      urls.map(async (url: string): Promise<PageData> => {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (compatible; EcomSEO Duplicate Content/1.0)",
              Accept: "text/html",
            },
            signal: controller.signal,
          });
          clearTimeout(timeout);

          if (!res.ok) {
            return { url, wordCount: 0, title: "", text: "" };
          }

          const html = await res.text();
          const title = extractTitle(html);
          const text = extractTextFromHtml(html);
          const wordCount = countWords(text);

          return { url, wordCount, title, text };
        } catch {
          return { url, wordCount: 0, title: "", text: "" };
        }
      })
    );

    // Compare every pair
    const pairs: PairResult[] = [];
    for (let i = 0; i < pages.length; i++) {
      const trigramsA = getWordTrigrams(pages[i].text);
      for (let j = i + 1; j < pages.length; j++) {
        const trigramsB = getWordTrigrams(pages[j].text);
        const similarity = jaccardSimilarity(trigramsA, trigramsB);

        let verdict: PairResult["verdict"];
        if (similarity >= 0.7) {
          verdict = "duplicate";
        } else if (similarity >= 0.4) {
          verdict = "similar";
        } else {
          verdict = "unique";
        }

        pairs.push({
          urlA: pages[i].url,
          urlB: pages[j].url,
          similarity: Math.round(similarity * 1000) / 1000,
          verdict,
        });
      }
    }

    // Sort pairs by similarity descending
    pairs.sort((a, b) => b.similarity - a.similarity);

    return NextResponse.json({
      pages: pages.map(({ url, wordCount, title }) => ({
        url,
        wordCount,
        title,
      })),
      pairs,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
