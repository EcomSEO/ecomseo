import { NextResponse } from "next/server";

interface PageData {
  url: string;
  wordCount: number;
  title: string;
  text: string;
  canonical: string;
}

interface PairResult {
  urlA: string;
  urlB: string;
  similarity: number;
  verdict: "duplicate" | "similar" | "unique";
  sharedShingles: number;
  totalShingles: number;
  diffSnippetA: string;
  diffSnippetB: string;
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function extractCanonical(html: string): string {
  const match = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (match) return match[1].trim();
  const match2 = html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i);
  return match2 ? match2[1].trim() : "";
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

function jaccardSimilarity(setA: Set<string>, setB: Set<string>): { similarity: number; shared: number; total: number } {
  if (setA.size === 0 && setB.size === 0) return { similarity: 0, shared: 0, total: 0 };

  let intersectionSize = 0;
  const smaller = setA.size <= setB.size ? setA : setB;
  const larger = setA.size <= setB.size ? setB : setA;

  for (const item of smaller) {
    if (larger.has(item)) intersectionSize++;
  }

  const unionSize = setA.size + setB.size - intersectionSize;
  if (unionSize === 0) return { similarity: 0, shared: 0, total: 0 };

  return { similarity: intersectionSize / unionSize, shared: intersectionSize, total: unionSize };
}

function getDiffSnippet(textA: string, textB: string): { snippetA: string; snippetB: string } {
  const wordsA = textA.split(/\s+/).slice(0, 200);
  const wordsB = textB.split(/\s+/).slice(0, 200);

  // Find first divergence point
  let divergeIdx = 0;
  while (divergeIdx < wordsA.length && divergeIdx < wordsB.length && wordsA[divergeIdx]?.toLowerCase() === wordsB[divergeIdx]?.toLowerCase()) {
    divergeIdx++;
  }

  const start = Math.max(0, divergeIdx - 3);
  const snippetA = wordsA.slice(start, start + 20).join(" ");
  const snippetB = wordsB.slice(start, start + 20).join(" ");

  return { snippetA: snippetA.slice(0, 200), snippetB: snippetB.slice(0, 200) };
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
              "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Duplicate Content/1.0)",
              Accept: "text/html",
            },
            signal: controller.signal,
          });
          clearTimeout(timeout);

          if (!res.ok) {
            return { url, wordCount: 0, title: "", text: "", canonical: "" };
          }

          const html = await res.text();
          const title = extractTitle(html);
          const text = extractTextFromHtml(html);
          const wordCount = countWords(text);
          const canonical = extractCanonical(html);

          return { url, wordCount, title, text, canonical };
        } catch {
          return { url, wordCount: 0, title: "", text: "", canonical: "" };
        }
      })
    );

    // Build similarity matrix and pairs
    const pairs: PairResult[] = [];
    const matrix: number[][] = Array.from({ length: pages.length }, () =>
      Array(pages.length).fill(0)
    );

    // Precompute trigrams
    const trigramSets = pages.map((p) => getWordTrigrams(p.text));

    for (let i = 0; i < pages.length; i++) {
      matrix[i][i] = 1;
      for (let j = i + 1; j < pages.length; j++) {
        const { similarity, shared, total } = jaccardSimilarity(trigramSets[i], trigramSets[j]);
        matrix[i][j] = similarity;
        matrix[j][i] = similarity;

        let verdict: PairResult["verdict"];
        if (similarity >= 0.7) verdict = "duplicate";
        else if (similarity >= 0.4) verdict = "similar";
        else verdict = "unique";

        const { snippetA, snippetB } = getDiffSnippet(pages[i].text, pages[j].text);

        pairs.push({
          urlA: pages[i].url,
          urlB: pages[j].url,
          similarity: Math.round(similarity * 1000) / 1000,
          verdict,
          sharedShingles: shared,
          totalShingles: total,
          diffSnippetA: snippetA,
          diffSnippetB: snippetB,
        });
      }
    }

    // Sort pairs by similarity descending
    pairs.sort((a, b) => b.similarity - a.similarity);

    // Build clusters of near-duplicates
    const clusters: { urls: string[]; canonical: string }[] = [];
    const assigned = new Set<string>();

    for (const pair of pairs) {
      if (pair.similarity < 0.4) continue;
      const existingCluster = clusters.find(
        (c) => c.urls.includes(pair.urlA) || c.urls.includes(pair.urlB)
      );
      if (existingCluster) {
        if (!existingCluster.urls.includes(pair.urlA)) existingCluster.urls.push(pair.urlA);
        if (!existingCluster.urls.includes(pair.urlB)) existingCluster.urls.push(pair.urlB);
        assigned.add(pair.urlA);
        assigned.add(pair.urlB);
      } else {
        clusters.push({
          urls: [pair.urlA, pair.urlB],
          canonical: "",
        });
        assigned.add(pair.urlA);
        assigned.add(pair.urlB);
      }
    }

    // Suggest canonical for each cluster (prefer the one already set, or the one with most words)
    for (const cluster of clusters) {
      const clusterPages = cluster.urls.map((u) => pages.find((p) => p.url === u)!).filter(Boolean);
      // Check if any has a canonical pointing to another in the cluster
      const withCanonical = clusterPages.find((p) => p.canonical && cluster.urls.includes(p.canonical));
      if (withCanonical) {
        cluster.canonical = withCanonical.canonical;
      } else {
        // Suggest the one with most words
        const best = clusterPages.sort((a, b) => b.wordCount - a.wordCount)[0];
        cluster.canonical = best?.url ?? cluster.urls[0];
      }
    }

    return NextResponse.json({
      pages: pages.map(({ url, wordCount, title, canonical }) => ({
        url,
        wordCount,
        title,
        canonical,
      })),
      pairs,
      matrix: matrix.map((row) => row.map((v) => Math.round(v * 100))),
      clusters,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
