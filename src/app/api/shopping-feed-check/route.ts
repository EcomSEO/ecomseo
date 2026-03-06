import { NextResponse } from "next/server";

interface ProductValidation {
  title: string;
  id: string;
  errors: string[];
  warnings: string[];
}

const VALID_AVAILABILITY = ["in stock", "out of stock", "preorder", "in_stock", "out_of_stock"];
const VALID_CONDITION = ["new", "refurbished", "used"];

function isValidUrl(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

function isValidPrice(price: string): boolean {
  // Accept formats like "29.99 USD", "29.99", "1,299.00 EUR"
  return /^\d[\d,]*(\.\d{1,2})?\s*[A-Z]{0,3}$/.test(price.trim());
}

function getElementText(item: string, tagNames: string[]): string | null {
  for (const tag of tagNames) {
    // Handle self-closing and regular elements
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
    const match = item.match(regex);
    if (match) return match[1].trim();
  }
  return null;
}

function extractCdataText(raw: string): string {
  // Strip CDATA wrappers if present
  const cdataMatch = raw.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return cdataMatch ? cdataMatch[1].trim() : raw.trim();
}

function validateProduct(itemXml: string): ProductValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Extract fields with namespace-aware matching
  const rawTitle = getElementText(itemXml, ["g:title", "title"]);
  const title = rawTitle ? extractCdataText(rawTitle) : null;

  const rawId = getElementText(itemXml, ["g:id", "id"]);
  const id = rawId ? extractCdataText(rawId) : null;

  const rawDescription = getElementText(itemXml, ["g:description", "description"]);
  const description = rawDescription ? extractCdataText(rawDescription) : null;

  const rawLink = getElementText(itemXml, ["g:link", "link"]);
  const link = rawLink ? extractCdataText(rawLink) : null;

  const rawPrice = getElementText(itemXml, ["g:price", "price"]);
  const price = rawPrice ? extractCdataText(rawPrice) : null;

  const rawAvailability = getElementText(itemXml, ["g:availability", "availability"]);
  const availability = rawAvailability ? extractCdataText(rawAvailability) : null;

  const rawImageLink = getElementText(itemXml, ["g:image_link", "image_link"]);
  const imageLink = rawImageLink ? extractCdataText(rawImageLink) : null;

  const rawCondition = getElementText(itemXml, ["g:condition", "condition"]);
  const condition = rawCondition ? extractCdataText(rawCondition) : null;

  const rawBrand = getElementText(itemXml, ["g:brand", "brand"]);
  const brand = rawBrand ? extractCdataText(rawBrand) : null;

  const rawGtin = getElementText(itemXml, ["g:gtin", "gtin"]);
  const gtin = rawGtin ? extractCdataText(rawGtin) : null;

  const rawMpn = getElementText(itemXml, ["g:mpn", "mpn"]);
  const mpn = rawMpn ? extractCdataText(rawMpn) : null;

  // Required field validation
  if (!id) {
    errors.push("Missing required field: id");
  }

  if (!title) {
    errors.push("Missing required field: title");
  } else if (title.length > 150) {
    errors.push(`Title exceeds 150 characters (${title.length} chars)`);
  }

  if (!description) {
    errors.push("Missing required field: description");
  }

  if (!link) {
    errors.push("Missing required field: link");
  } else if (!isValidUrl(link)) {
    errors.push("Invalid link URL format");
  }

  if (!price) {
    errors.push("Missing required field: price");
  } else if (!isValidPrice(price)) {
    errors.push(`Invalid price format: "${price}" (expected format like "29.99 USD")`);
  }

  if (!availability) {
    errors.push("Missing required field: availability");
  } else if (!VALID_AVAILABILITY.includes(availability.toLowerCase().trim())) {
    errors.push(`Invalid availability value: "${availability}" (expected: in stock, out of stock, or preorder)`);
  }

  if (!imageLink) {
    errors.push("Missing required field: image_link");
  } else if (!isValidUrl(imageLink)) {
    errors.push("Invalid image_link URL format");
  }

  // Recommended field validation
  if (!condition) {
    warnings.push("Missing recommended field: condition (new, refurbished, used)");
  } else if (!VALID_CONDITION.includes(condition.toLowerCase().trim())) {
    warnings.push(`Invalid condition value: "${condition}" (expected: new, refurbished, or used)`);
  }

  if (!brand) {
    warnings.push("Missing recommended field: brand");
  }

  if (!gtin && !mpn) {
    warnings.push("Missing recommended field: gtin or mpn (product identifier)");
  }

  return {
    title: title || "(no title)",
    id: id || "(no id)",
    errors,
    warnings,
  };
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Feed Validator/1.0)",
        Accept: "application/xml,application/rss+xml,text/xml,application/atom+xml",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!res.ok) return NextResponse.json({ error: "Fetch failed" }, { status: 502 });

    const xml = await res.text();

    // Extract <item> or <entry> elements
    const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
    const products: ProductValidation[] = [];
    let match;
    let count = 0;

    while ((match = itemRegex.exec(xml)) !== null && count < 50) {
      const itemXml = match[0];
      products.push(validateProduct(itemXml));
      count++;
    }

    const validProducts = products.filter((p) => p.errors.length === 0).length;
    const totalErrors = products.reduce((sum, p) => sum + p.errors.length, 0);
    const totalWarnings = products.reduce((sum, p) => sum + p.warnings.length, 0);

    return NextResponse.json({
      totalProducts: products.length,
      validProducts,
      errors: totalErrors,
      warnings: totalWarnings,
      products,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch feed" }, { status: 500 });
  }
}
