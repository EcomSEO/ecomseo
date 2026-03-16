import { NextResponse } from "next/server";

interface ProductValidation {
  id: string;
  title: string;
  errors: string[];
  warnings: string[];
}

const VALID_AVAILABILITY = ["in stock", "out of stock", "preorder", "in_stock", "out_of_stock", "backorder"];
const VALID_CONDITION = ["new", "refurbished", "used"];

function isValidUrl(str: string): boolean {
  try { new URL(str); return true; } catch { return false; }
}

function isValidPrice(price: string): boolean {
  return /^\d[\d,]*(\.\d{1,2})?\s*[A-Z]{0,3}$/.test(price.trim());
}

function isValidGtin(gtin: string): boolean {
  const clean = gtin.replace(/\D/g, "");
  return [8, 12, 13, 14].includes(clean.length);
}

function getElementText(item: string, tagNames: string[]): string | null {
  for (const tag of tagNames) {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
    const match = item.match(regex);
    if (match) return match[1].trim();
  }
  return null;
}

function extractCdataText(raw: string): string {
  const cdataMatch = raw.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return cdataMatch ? cdataMatch[1].trim() : raw.trim();
}

function validateProduct(itemXml: string): ProductValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

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
  const rawSalePrice = getElementText(itemXml, ["g:sale_price", "sale_price"]);
  const salePrice = rawSalePrice ? extractCdataText(rawSalePrice) : null;
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
  const rawGpc = getElementText(itemXml, ["g:google_product_category", "google_product_category"]);
  const googleProductCategory = rawGpc ? extractCdataText(rawGpc) : null;
  const rawColor = getElementText(itemXml, ["g:color", "color"]);
  const color = rawColor ? extractCdataText(rawColor) : null;
  const rawSize = getElementText(itemXml, ["g:size", "size"]);
  const size = rawSize ? extractCdataText(rawSize) : null;

  // Required fields (errors)
  if (!id) errors.push("Missing required field: id");
  if (!title) {
    errors.push("Missing required field: title");
  } else {
    if (title.length < 25) warnings.push(`Title too short (${title.length} chars, recommended min 25)`);
    if (title.length > 150) errors.push(`Title too long (${title.length} chars, max 150)`);
    if (/[!@#$%^&*()]+/.test(title)) warnings.push("Title contains promotional characters");
    if (title === title.toUpperCase() && title.length > 5) warnings.push("Title is ALL CAPS");
  }
  if (!description) {
    errors.push("Missing required field: description");
  } else {
    if (description.length < 50) warnings.push(`Description too short (${description.length} chars)`);
    if (title && description.trim().toLowerCase() === title.trim().toLowerCase()) {
      errors.push("Description is identical to title");
    }
    if (/<[^>]+>/.test(description)) warnings.push("Description contains HTML tags");
  }
  if (!link) {
    errors.push("Missing required field: link");
  } else if (!isValidUrl(link)) {
    errors.push("Invalid link URL format");
  }
  if (!imageLink) {
    errors.push("Missing required field: image_link");
  } else if (!isValidUrl(imageLink)) {
    errors.push("Invalid image_link URL format");
  }
  if (!price) {
    errors.push("Missing required field: price");
  } else if (!isValidPrice(price)) {
    errors.push(`Invalid price format: "${price}" (expected "29.99 USD")`);
  }
  if (!availability) {
    errors.push("Missing required field: availability");
  } else if (!VALID_AVAILABILITY.includes(availability.toLowerCase().trim())) {
    errors.push(`Invalid availability: "${availability}"`);
  }
  if (!brand) errors.push("Missing required field: brand");
  if (!condition) {
    warnings.push("Missing field: condition");
  } else if (!VALID_CONDITION.includes(condition.toLowerCase().trim())) {
    errors.push(`Invalid condition: "${condition}"`);
  }

  // GTIN / MPN check (Google requires at least one)
  if (!gtin && !mpn) {
    warnings.push("Missing both GTIN and MPN - at least one identifier is recommended");
  } else if (gtin && !isValidGtin(gtin)) {
    errors.push(`Invalid GTIN format: "${gtin}"`);
  }

  // Additional recommended fields
  if (!googleProductCategory) warnings.push("Missing google_product_category");

  // Sale price validation
  if (salePrice && price) {
    const priceNum = parseFloat(price.replace(/[^0-9.]/g, ""));
    const salePriceNum = parseFloat(salePrice.replace(/[^0-9.]/g, ""));
    if (!isNaN(priceNum) && !isNaN(salePriceNum) && salePriceNum >= priceNum) {
      errors.push("sale_price must be less than price");
    }
  }

  // Variant attributes
  if (!color) warnings.push("Missing color (recommended for apparel)");
  if (!size) warnings.push("Missing size (recommended for apparel)");

  return {
    id: id || "(no id)",
    title: title || "(no title)",
    errors,
    warnings,
  };
}

function parseCsvFeed(csvText: string): ProductValidation[] {
  const lines = csvText.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return [];

  const headers = lines[0].split(/[,\t]/).map((h) => h.trim().toLowerCase().replace(/^"|"$/g, ""));
  const products: ProductValidation[] = [];

  for (let i = 1; i < Math.min(lines.length, 51); i++) {
    const values = lines[i].split(/[,\t]/).map((v) => v.trim().replace(/^"|"$/g, ""));
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => { row[h] = values[idx] || ""; });

    const errors: string[] = [];
    const warnings: string[] = [];
    const id = row["id"] || "";
    const title = row["title"] || "";

    if (!id) errors.push("Missing required field: id");
    if (!title) {
      errors.push("Missing required field: title");
    } else {
      if (title.length < 25) warnings.push(`Title too short (${title.length} chars)`);
      if (title.length > 150) errors.push(`Title too long (${title.length} chars, max 150)`);
    }
    if (!row["description"]) {
      errors.push("Missing required field: description");
    } else if (title && row["description"].trim().toLowerCase() === title.trim().toLowerCase()) {
      errors.push("Description is identical to title");
    }
    if (!row["link"]) errors.push("Missing required field: link");
    else if (!isValidUrl(row["link"])) errors.push("Invalid link URL");
    if (!row["image_link"]) errors.push("Missing required field: image_link");
    else if (!isValidUrl(row["image_link"])) errors.push("Invalid image_link URL");
    if (!row["price"]) errors.push("Missing required field: price");
    else if (!isValidPrice(row["price"])) errors.push(`Invalid price format: "${row["price"]}"`);
    if (!row["availability"]) errors.push("Missing required field: availability");
    else if (!VALID_AVAILABILITY.includes(row["availability"].toLowerCase())) errors.push(`Invalid availability`);
    if (!row["brand"]) errors.push("Missing required field: brand");
    if (!row["gtin"] && !row["mpn"]) warnings.push("Missing GTIN and MPN");
    if (!row["google_product_category"]) warnings.push("Missing google_product_category");

    products.push({ id: id || "(no id)", title: title || "(no title)", errors, warnings });
  }

  return products;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { feedContent, url } = body;

    let rawContent = "";

    if (feedContent && typeof feedContent === "string") {
      rawContent = feedContent;
    } else if (url && typeof url === "string") {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Feed Validator/1.0)",
          Accept: "application/xml,application/rss+xml,text/xml,application/atom+xml,text/csv",
        },
        signal: controller.signal,
        redirect: "follow",
      });
      clearTimeout(timeout);
      if (!res.ok) return NextResponse.json({ error: "Fetch failed" }, { status: 502 });
      rawContent = await res.text();
    } else {
      return NextResponse.json({ error: "Provide feed content or a URL" }, { status: 400 });
    }

    if (!rawContent.trim()) {
      return NextResponse.json({ error: "Empty feed content" }, { status: 400 });
    }

    let products: ProductValidation[] = [];

    const isXml = rawContent.trim().startsWith("<") || rawContent.includes("<rss") || rawContent.includes("<feed") || rawContent.includes("<item");

    if (isXml) {
      const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
      let match;
      let count = 0;
      while ((match = itemRegex.exec(rawContent)) !== null && count < 50) {
        products.push(validateProduct(match[0]));
        count++;
      }
    } else {
      products = parseCsvFeed(rawContent);
    }

    const totalProducts = products.length;
    const validProducts = products.filter((p) => p.errors.length === 0 && p.warnings.length === 0).length;
    const totalErrors = products.reduce((s, p) => s + p.errors.length, 0);
    const totalWarnings = products.reduce((s, p) => s + p.warnings.length, 0);

    // Calculate feed health score (0-100)
    let feedScore = 100;
    if (totalProducts > 0) {
      const errorPenalty = totalErrors / totalProducts * 40;
      const warningPenalty = totalWarnings / totalProducts * 10;
      feedScore = Math.max(0, Math.round(100 - errorPenalty - warningPenalty));
    }

    // Common issues summary
    const commonIssues: Record<string, number> = {};
    for (const p of products) {
      for (const e of [...p.errors, ...p.warnings]) {
        const key = e.replace(/\d+/g, "N").replace(/"[^"]*"/g, '"..."');
        commonIssues[key] = (commonIssues[key] || 0) + 1;
      }
    }
    const topIssues = Object.entries(commonIssues)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([issue, count]) => ({ issue, count }));

    return NextResponse.json({
      totalProducts,
      validProducts,
      errors: totalErrors,
      warnings: totalWarnings,
      products,
      feedScore,
      topIssues,
    });
  } catch {
    return NextResponse.json({ error: "Failed to process feed" }, { status: 500 });
  }
}
