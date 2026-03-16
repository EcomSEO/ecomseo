import { NextResponse } from "next/server";

type ThinContentStatus = "ok" | "thin" | "empty" | "fetch_error";
type DetectedPageType = "product" | "category" | "blog" | "homepage" | "other";

interface ThinContentResult {
  url: string;
  wordCount: number | null;
  status: ThinContentStatus;
  pageType: DetectedPageType;
  threshold: number;
  readingLevel: number | null; // Flesch-Kincaid grade level
  fleschScore: number | null;  // Flesch reading ease
  qualitySignals: {
    hasHeadings: boolean;
    hasImages: boolean;
    hasLists: boolean;
    hasInternalLinks: boolean;
    paragraphCount: number;
    avgSentenceLength: number | null;
    uniqueWordRatio: number | null;
  };
}

const THRESHOLDS: Record<DetectedPageType, number> = {
  product: 300,
  category: 150,
  blog: 800,
  homepage: 500,
  other: 300,
};

function extractMainContent(html: string): string {
  // Try to find main/article content first
  let content = html;

  // Remove script, style, nav, header, footer, aside, form tags
  content = content
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, " ")
    .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, " ")
    .replace(/<form[^>]*>[\s\S]*?<\/form>/gi, " ")
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, " ")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, " ");

  // Try to extract from <main> or <article> if present
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (mainMatch) content = mainMatch[1];
  else if (articleMatch) content = articleMatch[1];

  // Strip remaining tags
  const text = content
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

function detectPageType(url: string, html: string): DetectedPageType {
  const path = new URL(url).pathname.toLowerCase();

  if (path === "/" || path === "") return "homepage";

  // Product patterns
  if (/\/(products?|produkt|produit|producto|prodotto)\/[^/]+/i.test(path)) return "product";
  if (html.includes('"@type":"Product"') || html.includes('"@type": "Product"')) return "product";
  if (/add.to.cart|add.to.bag|buy.now/i.test(html)) return "product";

  // Blog patterns
  if (/\/(blog|article|post|news|journal)\/[^/]+/i.test(path)) return "blog";
  if (html.includes('"@type":"Article"') || html.includes('"@type":"BlogPosting"')) return "blog";

  // Category patterns
  if (/\/(collections?|categor(y|ie|ia)|shop)(\/|$)/i.test(path)) return "category";
  if (html.includes('"@type":"CollectionPage"') || html.includes('"@type":"ItemList"')) return "category";

  return "other";
}

function countSentences(text: string): number {
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 3);
  return sentences.length;
}

function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const vowelGroups = word.match(/[aeiouy]{1,2}/g);
  return vowelGroups ? vowelGroups.length : 1;
}

function fleschKincaid(text: string): { gradeLevel: number; readingEase: number } | null {
  const words = text.split(/\s+/).filter((w) => w.length > 1);
  if (words.length < 30) return null;

  const sentenceCount = countSentences(text);
  if (sentenceCount === 0) return null;

  const totalSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const avgWordsPerSentence = words.length / sentenceCount;
  const avgSyllablesPerWord = totalSyllables / words.length;

  const gradeLevel = 0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59;
  const readingEase = 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord;

  return {
    gradeLevel: Math.round(gradeLevel * 10) / 10,
    readingEase: Math.max(0, Math.min(100, Math.round(readingEase * 10) / 10)),
  };
}

function analyzeQuality(html: string, text: string) {
  const hasHeadings = /<h[1-6][^>]*>/i.test(html);
  const hasImages = /<img\s/i.test(html);
  const hasLists = /<(ul|ol)[^>]*>/i.test(html);
  const hasInternalLinks = /<a[^>]*href=["'][^"']*["'][^>]*>/i.test(html);
  const paragraphs = (html.match(/<p[\s>]/gi) || []).length;

  const words = text.split(/\s+/).filter((w) => w.length > 1);
  const sentenceCount = countSentences(text);
  const avgSentenceLength = sentenceCount > 0 ? Math.round(words.length / sentenceCount) : null;

  const uniqueWords = new Set(words.map((w) => w.toLowerCase()));
  const uniqueWordRatio = words.length > 0 ? Math.round((uniqueWords.size / words.length) * 100) / 100 : null;

  return {
    hasHeadings,
    hasImages,
    hasLists,
    hasInternalLinks,
    paragraphCount: paragraphs,
    avgSentenceLength,
    uniqueWordRatio,
  };
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

    const results: ThinContentResult[] = await Promise.all(
      urls.map(async (url: string): Promise<ThinContentResult> => {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(url, {
            headers: {
              "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0; +https://ecomseo.com)",
              Accept: "text/html",
            },
            signal: controller.signal,
          });
          clearTimeout(timeout);

          if (!res.ok) {
            return { url, wordCount: null, status: "fetch_error", pageType: "other", threshold: 300, readingLevel: null, fleschScore: null, qualitySignals: { hasHeadings: false, hasImages: false, hasLists: false, hasInternalLinks: false, paragraphCount: 0, avgSentenceLength: null, uniqueWordRatio: null } };
          }

          const html = await res.text();
          const pageType = detectPageType(url, html);
          const threshold = THRESHOLDS[pageType];
          const text = extractMainContent(html);
          const wordCount = countWords(text);

          let status: ThinContentStatus;
          if (wordCount === 0) {
            status = "empty";
          } else if (wordCount < threshold) {
            status = "thin";
          } else {
            status = "ok";
          }

          const fk = fleschKincaid(text);
          const qualitySignals = analyzeQuality(html, text);

          return {
            url,
            wordCount,
            status,
            pageType,
            threshold,
            readingLevel: fk?.gradeLevel ?? null,
            fleschScore: fk?.readingEase ?? null,
            qualitySignals,
          };
        } catch {
          return { url, wordCount: null, status: "fetch_error", pageType: "other", threshold: 300, readingLevel: null, fleschScore: null, qualitySignals: { hasHeadings: false, hasImages: false, hasLists: false, hasInternalLinks: false, paragraphCount: 0, avgSentenceLength: null, uniqueWordRatio: null } };
        }
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
