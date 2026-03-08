import { NextResponse } from "next/server";

interface JsonLdResult {
  raw: string;
  type: string;
  fields: string[];
  errors: string[];
  warnings: string[];
}

interface MicrodataResult {
  type: string;
  properties: string[];
}

/* Required and recommended fields for common Schema.org types */
const REQUIRED_FIELDS: Record<string, string[]> = {
  Product: ["name", "description", "offers"],
  Organization: ["name", "url"],
  LocalBusiness: ["name", "url", "address"],
  WebSite: ["name", "url"],
  Article: ["headline", "author", "datePublished"],
  BlogPosting: ["headline", "author", "datePublished"],
  NewsArticle: ["headline", "author", "datePublished"],
  FAQPage: ["mainEntity"],
  BreadcrumbList: ["itemListElement"],
  Person: ["name"],
  Event: ["name", "startDate", "location"],
  Review: ["itemReviewed", "reviewRating", "author"],
  Recipe: ["name", "recipeIngredient", "recipeInstructions"],
  VideoObject: ["name", "description", "thumbnailUrl", "uploadDate"],
  HowTo: ["name", "step"],
};

const RECOMMENDED_FIELDS: Record<string, string[]> = {
  Product: ["image", "brand", "sku", "aggregateRating", "review"],
  Organization: ["logo", "sameAs", "contactPoint"],
  LocalBusiness: ["telephone", "openingHours", "geo"],
  WebSite: ["potentialAction"],
  Article: ["image", "dateModified", "publisher"],
  BlogPosting: ["image", "dateModified", "publisher"],
  FAQPage: [],
  BreadcrumbList: [],
  Event: ["description", "image", "offers"],
  Review: ["datePublished"],
  Recipe: ["image", "author", "prepTime", "cookTime"],
  VideoObject: ["contentUrl", "duration", "embedUrl"],
  HowTo: ["image", "totalTime"],
};

function extractAllKeys(obj: unknown, prefix = ""): string[] {
  if (!obj || typeof obj !== "object") return [];
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    if (key.startsWith("@")) continue;
    keys.push(prefix ? `${prefix}.${key}` : key);
    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys.push(...extractAllKeys(value, prefix ? `${prefix}.${key}` : key));
    }
  }
  return keys;
}

function resolveType(obj: Record<string, unknown>): string {
  const rawType = obj["@type"];
  if (Array.isArray(rawType)) return rawType[0] as string;
  return (rawType as string) || "Unknown";
}

function validateJsonLd(raw: string): JsonLdResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { raw, type: "Invalid JSON", fields: [], errors: ["Invalid JSON - could not parse"], warnings: [] };
  }

  /* Handle @graph arrays */
  const items: Record<string, unknown>[] = [];
  if (Array.isArray(parsed)) {
    items.push(...(parsed as Record<string, unknown>[]));
  } else if (
    typeof parsed === "object" &&
    parsed !== null &&
    Array.isArray((parsed as Record<string, unknown>)["@graph"])
  ) {
    items.push(...((parsed as Record<string, unknown>)["@graph"] as Record<string, unknown>[]));
  } else if (typeof parsed === "object" && parsed !== null) {
    items.push(parsed as Record<string, unknown>);
  }

  if (items.length === 0) {
    return { raw, type: "Empty", fields: [], errors: ["JSON-LD block is empty or unrecognized"], warnings: [] };
  }

  /* Take primary item */
  const primary = items[0];
  const type = resolveType(primary);
  const fields = extractAllKeys(primary);

  /* Check required fields */
  const required = REQUIRED_FIELDS[type] || [];
  for (const field of required) {
    if (!fields.some((f) => f === field || f.startsWith(field + "."))) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  /* Check recommended fields */
  const recommended = RECOMMENDED_FIELDS[type] || [];
  for (const field of recommended) {
    if (!fields.some((f) => f === field || f.startsWith(field + "."))) {
      warnings.push(`Missing recommended field: ${field}`);
    }
  }

  /* Basic sanity checks */
  if (!primary["@context"]) {
    warnings.push("Missing @context (should be https://schema.org)");
  } else {
    const ctx = String(primary["@context"]);
    if (!ctx.includes("schema.org")) {
      warnings.push("@context should reference schema.org");
    }
  }

  if (!type || type === "Unknown") {
    errors.push("Missing @type");
  }

  return { raw, type, fields, errors, warnings };
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Schema Validator/1.0)",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!res.ok) return NextResponse.json({ error: "Fetch failed" }, { status: 502 });

    const html = await res.text();

    /* ── Extract JSON-LD blocks ── */
    const jsonLdRegex = /<script\s+type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    const jsonLdResults: JsonLdResult[] = [];
    let jsonLdMatch;

    while ((jsonLdMatch = jsonLdRegex.exec(html)) !== null) {
      const raw = jsonLdMatch[1].trim();
      if (raw) {
        jsonLdResults.push(validateJsonLd(raw));
      }
    }

    /* ── Extract Microdata ── */
    const microdataResults: MicrodataResult[] = [];
    const itemTypeRegex = /itemscope[^>]*itemtype\s*=\s*["']([^"']+)["']/gi;
    const itemTypes = new Map<string, Set<string>>();
    let mdMatch;

    while ((mdMatch = itemTypeRegex.exec(html)) !== null) {
      const typeUrl = mdMatch[1];
      const type = typeUrl.replace(/^https?:\/\/schema\.org\//, "");
      if (!itemTypes.has(type)) itemTypes.set(type, new Set());
    }

    /* Extract itemprop attributes globally and assign to last known type */
    const itempropRegex = /itemprop\s*=\s*["']([^"']+)["']/gi;
    let propMatch;
    const allTypes = Array.from(itemTypes.keys());
    const currentType = allTypes.length > 0 ? allTypes[allTypes.length - 1] : null;

    while ((propMatch = itempropRegex.exec(html)) !== null) {
      const prop = propMatch[1];
      if (currentType && itemTypes.has(currentType)) {
        itemTypes.get(currentType)!.add(prop);
      }
    }

    for (const [type, props] of itemTypes) {
      microdataResults.push({ type, properties: Array.from(props) });
    }

    /* ── Build response ── */
    const totalTypes = jsonLdResults.length + microdataResults.length;
    const totalErrors = jsonLdResults.reduce((sum, r) => sum + r.errors.length, 0);

    return NextResponse.json({
      jsonLd: jsonLdResults,
      microdata: microdataResults,
      totalTypes,
      totalErrors,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch URL" }, { status: 500 });
  }
}
