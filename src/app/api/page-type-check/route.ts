import { NextResponse } from "next/server";

type PageType =
  | "product"
  | "category"
  | "blog"
  | "homepage"
  | "cart"
  | "checkout"
  | "legal"
  | "search"
  | "other";

interface PageTypeResult {
  url: string;
  type: PageType;
  signals: string[];
}

function classifyByUrl(url: string): { type: PageType; signals: string[] } {
  const path = new URL(url).pathname.toLowerCase();
  const signals: string[] = [];
  const host = new URL(url).host.toLowerCase();

  // Homepage
  if (path === "/" || path === "") {
    signals.push("Root path");
    return { type: "homepage", signals };
  }

  // Cart
  if (/\/(cart|basket|warenkorb|panier|carrito|carrello|winkelwagen)(\/|$)/.test(path)) {
    signals.push("Cart path pattern");
    return { type: "cart", signals };
  }

  // Checkout
  if (/\/(checkout|bezahlen|paiement|pago|pagamento|afrekenen)(\/|$)/.test(path)) {
    signals.push("Checkout path pattern");
    return { type: "checkout", signals };
  }

  // Legal / Policy
  if (/\/(privacy|policy|terms|legal|datenschutz|impressum|conditions|aviso-legal|privacy-policy|cookie)(\/|$)/.test(path)) {
    signals.push("Legal path pattern");
    return { type: "legal", signals };
  }

  // Search
  if (/\/(search|suche|recherche|buscar|ricerca|zoeken)(\/|$)/.test(path) || url.includes("?q=") || url.includes("?s=") || url.includes("?query=")) {
    signals.push("Search path/parameter pattern");
    return { type: "search", signals };
  }

  // Blog / Article
  if (/\/(blog|article|post|news|journal|artikel|beitrag|actualite|noticia|notizia|nieuws)(\/|$)/.test(path)) {
    signals.push("Blog/article path pattern");
    return { type: "blog", signals };
  }

  // Product (Shopify, WooCommerce, Magento patterns)
  if (/\/(products?|produkt|produit|producto|prodotto|product)(\/|$)/.test(path)) {
    signals.push("Product path pattern");
    return { type: "product", signals };
  }

  // Category (Shopify, WooCommerce, etc.)
  if (/\/(collections?|categor(y|ie|ia)|collection|shop)(\/[^/]+)?(\/|$)/.test(path)) {
    signals.push("Category/collection path pattern");
    return { type: "category", signals };
  }

  return { type: "other", signals: ["No matching pattern"] };
}

function classifyByHtml(html: string, urlType: PageType): { type: PageType; signals: string[] } {
  const signals: string[] = [];
  const lower = html.toLowerCase();

  // Check schema.org structured data
  if (lower.includes('"@type":"product"') || lower.includes('"@type": "product"')) {
    signals.push("Schema: Product");
    return { type: "product", signals };
  }
  if (lower.includes('"@type":"breadcrumblist"') || lower.includes('"@type": "breadcrumblist"')) {
    signals.push("Schema: BreadcrumbList");
  }
  if (lower.includes('"@type":"article"') || lower.includes('"@type": "article"') || lower.includes('"@type":"blogposting"')) {
    signals.push("Schema: Article/BlogPosting");
    return { type: "blog", signals };
  }

  // Check for add-to-cart buttons
  if (/add.to.cart|add.to.bag|buy.now|in.den.warenkorb/i.test(html)) {
    signals.push("Add-to-cart button detected");
    if (urlType === "other" || urlType === "category") return { type: "product", signals };
  }

  // Check OG type
  const ogType = html.match(/<meta[^>]+property=["']og:type["'][^>]*content=["']([^"']+)["']/i);
  if (ogType) {
    const t = ogType[1].toLowerCase();
    signals.push(`OG type: ${t}`);
    if (t === "article" || t === "blog") return { type: "blog", signals };
    if (t === "product") return { type: "product", signals };
    if (t === "website" && urlType === "other") return { type: "homepage", signals };
  }

  return { type: urlType, signals };
}

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

    const results: PageTypeResult[] = await Promise.all(
      urls.map(async (url: string): Promise<PageTypeResult> => {
        const urlClassification = classifyByUrl(url);

        // For confident URL-based classifications, skip fetching
        if (["cart", "checkout", "legal", "search", "homepage"].includes(urlClassification.type)) {
          return { url, type: urlClassification.type, signals: urlClassification.signals };
        }

        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 8000);
          const res = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
            signal: controller.signal,
          });
          clearTimeout(timeout);

          if (!res.ok) {
            return { url, type: urlClassification.type, signals: [...urlClassification.signals, `HTTP ${res.status}`] };
          }

          const html = await res.text();
          const htmlClassification = classifyByHtml(html, urlClassification.type);

          return {
            url,
            type: htmlClassification.type,
            signals: [...urlClassification.signals, ...htmlClassification.signals],
          };
        } catch {
          return { url, type: urlClassification.type, signals: [...urlClassification.signals, "Could not fetch page"] };
        }
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
