import { NextResponse } from "next/server";

type PageType =
  | "product"
  | "category"
  | "blog_post"
  | "blog_index"
  | "homepage"
  | "about"
  | "contact"
  | "faq"
  | "cart"
  | "checkout"
  | "search"
  | "account"
  | "legal"
  | "landing_page"
  | "other";

interface PageTypeResult {
  url: string;
  pageType: PageType;
  confidence: number;
  signals: string[];
  recommendations: string[];
}

const SEO_RECOMMENDATIONS: Record<PageType, string[]> = {
  product: [
    "Add Product schema markup (JSON-LD)",
    "Include unique product descriptions (300+ words)",
    "Add customer reviews with Review schema",
    "Optimize product images with descriptive alt text",
    "Add breadcrumb navigation",
    "Include price and availability in structured data",
  ],
  category: [
    "Write unique category descriptions (150+ words)",
    "Add CollectionPage or ItemList schema",
    "Implement faceted navigation with proper canonicalization",
    "Add breadcrumb navigation",
    "Optimize internal linking between related categories",
  ],
  blog_post: [
    "Add Article or BlogPosting schema markup",
    "Aim for 800+ words of quality content",
    "Include internal links to relevant products/categories",
    "Add author information and publish date",
    "Use descriptive headings (H2, H3) structure",
  ],
  blog_index: [
    "Add Blog schema markup",
    "Implement pagination with rel=next/prev",
    "Include brief excerpts for each post",
    "Ensure proper internal linking structure",
  ],
  homepage: [
    "Add Organization or WebSite schema",
    "Include a clear value proposition",
    "Add SearchAction schema for site search",
    "Ensure mobile-first design",
    "Include links to key categories and products",
  ],
  about: [
    "Add AboutPage schema markup",
    "Include team/company information",
    "Add trust signals and social proof",
  ],
  contact: [
    "Add ContactPage schema markup",
    "Include LocalBusiness schema with address",
    "Add multiple contact methods",
  ],
  faq: [
    "Add FAQPage schema markup for rich snippets",
    "Structure questions with proper H2/H3 headings",
    "Link to relevant product/service pages",
  ],
  cart: [
    "Add noindex meta tag",
    "Ensure fast loading for conversion",
    "Add trust badges and security indicators",
  ],
  checkout: [
    "Add noindex meta tag",
    "Minimize page weight for speed",
    "Ensure SSL/HTTPS",
  ],
  search: [
    "Add noindex meta tag to prevent thin content indexing",
    "Add SearchAction schema on the site",
    "Implement proper pagination",
  ],
  account: [
    "Add noindex meta tag",
    "Ensure proper authentication",
  ],
  legal: [
    "Keep content up to date",
    "Use clear headings structure",
    "Consider noindex if not needed for SEO",
  ],
  landing_page: [
    "Add specific schema relevant to the offer",
    "Optimize for target keywords",
    "Include clear CTAs and conversion elements",
  ],
  other: [
    "Review page purpose and add appropriate schema",
    "Ensure proper meta tags are in place",
    "Add internal links from related pages",
  ],
};

function classifyByUrl(url: string): { type: PageType; confidence: number; signals: string[] } {
  const parsed = new URL(url);
  const path = parsed.pathname.toLowerCase();
  const signals: string[] = [];

  // Homepage
  if (path === "/" || path === "") {
    signals.push("Root path");
    return { type: "homepage", confidence: 95, signals };
  }

  // Cart
  if (/\/(cart|basket|warenkorb|panier|carrito|carrello|winkelwagen)(\/|$)/.test(path)) {
    signals.push("Cart path pattern");
    return { type: "cart", confidence: 90, signals };
  }

  // Checkout
  if (/\/(checkout|bezahlen|paiement|pago|pagamento|afrekenen)(\/|$)/.test(path)) {
    signals.push("Checkout path pattern");
    return { type: "checkout", confidence: 90, signals };
  }

  // Account
  if (/\/(account|my-account|login|register|profile|dashboard|mein-konto|mon-compte)(\/|$)/.test(path)) {
    signals.push("Account path pattern");
    return { type: "account", confidence: 85, signals };
  }

  // Legal / Policy
  if (/\/(privacy|policy|terms|legal|datenschutz|impressum|conditions|aviso-legal|privacy-policy|cookie|tos|terms-of-service|refund-policy|shipping-policy)(\/|$)/.test(path)) {
    signals.push("Legal/policy path pattern");
    return { type: "legal", confidence: 90, signals };
  }

  // Search
  if (/\/(search|suche|recherche|buscar|ricerca|zoeken)(\/|$)/.test(path) || url.includes("?q=") || url.includes("?s=") || url.includes("?query=")) {
    signals.push("Search path/parameter pattern");
    return { type: "search", confidence: 90, signals };
  }

  // FAQ
  if (/\/(faq|faqs|frequently-asked|help|hilfe|aide|ayuda)(\/|$)/.test(path)) {
    signals.push("FAQ path pattern");
    return { type: "faq", confidence: 85, signals };
  }

  // Contact
  if (/\/(contact|kontakt|contacto|contatto|contact-us)(\/|$)/.test(path)) {
    signals.push("Contact path pattern");
    return { type: "contact", confidence: 90, signals };
  }

  // About
  if (/\/(about|about-us|ueber-uns|chi-siamo|sobre-nosotros|over-ons|a-propos)(\/|$)/.test(path)) {
    signals.push("About path pattern");
    return { type: "about", confidence: 85, signals };
  }

  // Blog Index
  if (/^\/(blog|journal|news|articles|artikel|actualites|noticias|nieuws)\/?$/.test(path)) {
    signals.push("Blog index path pattern");
    return { type: "blog_index", confidence: 80, signals };
  }

  // Blog Post (blog with subpath)
  if (/\/(blog|article|post|news|journal|artikel|beitrag|actualite|noticia|notizia|nieuws)\/[^/]+/.test(path)) {
    signals.push("Blog post path pattern");
    return { type: "blog_post", confidence: 75, signals };
  }

  // Product (Shopify, WooCommerce, Magento patterns)
  if (/\/(products?|produkt|produit|producto|prodotto|product)\/[^/]+/.test(path)) {
    signals.push("Product path pattern");
    return { type: "product", confidence: 80, signals };
  }

  // Category (Shopify, WooCommerce, etc.)
  if (/\/(collections?|categor(y|ie|ia)|collection|shop)(\/[^/]+)?(\/|$)/.test(path)) {
    signals.push("Category/collection path pattern");
    return { type: "category", confidence: 75, signals };
  }

  // Landing page patterns
  if (/^\/(lp|landing|promo|offer|deal|campaign)(\/|$)/.test(path)) {
    signals.push("Landing page path pattern");
    return { type: "landing_page", confidence: 70, signals };
  }

  return { type: "other", confidence: 30, signals: ["No matching URL pattern"] };
}

function classifyByHtml(html: string, urlClassification: { type: PageType; confidence: number; signals: string[] }): { type: PageType; confidence: number; signals: string[] } {
  const signals: string[] = [];
  const lower = html.toLowerCase();
  let type = urlClassification.type;
  let confidence = urlClassification.confidence;

  // Check schema.org structured data
  if (lower.includes('"@type":"product"') || lower.includes('"@type": "product"') || lower.includes("'@type':'product'")) {
    signals.push("Schema.org: Product");
    type = "product";
    confidence = Math.max(confidence, 90);
  }
  if (lower.includes('"@type":"article"') || lower.includes('"@type": "article"') || lower.includes('"@type":"blogposting"') || lower.includes('"@type": "blogposting"') || lower.includes('"@type":"newsarticle"')) {
    signals.push("Schema.org: Article/BlogPosting");
    if (type === "other" || type === "blog_post" || type === "blog_index") {
      type = "blog_post";
      confidence = Math.max(confidence, 85);
    }
  }
  if (lower.includes('"@type":"faqpage"') || lower.includes('"@type": "faqpage"')) {
    signals.push("Schema.org: FAQPage");
    type = "faq";
    confidence = Math.max(confidence, 90);
  }
  if (lower.includes('"@type":"contactpage"') || lower.includes('"@type": "contactpage"')) {
    signals.push("Schema.org: ContactPage");
    type = "contact";
    confidence = Math.max(confidence, 90);
  }
  if (lower.includes('"@type":"aboutpage"') || lower.includes('"@type": "aboutpage"')) {
    signals.push("Schema.org: AboutPage");
    type = "about";
    confidence = Math.max(confidence, 90);
  }
  if (lower.includes('"@type":"collectionpage"') || lower.includes('"@type": "collectionpage"') || lower.includes('"@type":"itemlist"')) {
    signals.push("Schema.org: CollectionPage/ItemList");
    if (type === "other" || type === "category") {
      type = "category";
      confidence = Math.max(confidence, 85);
    }
  }

  // Check for add-to-cart buttons
  if (/add.to.cart|add.to.bag|buy.now|in.den.warenkorb|ajouter.au.panier|agregar.al.carrito/i.test(html)) {
    signals.push("Add-to-cart button detected");
    if (type === "other" || type === "category") {
      type = "product";
      confidence = Math.max(confidence, 80);
    }
  }

  // Check OG type
  const ogType = html.match(/<meta[^>]+property=["']og:type["'][^>]*content=["']([^"']+)["']/i);
  if (ogType) {
    const t = ogType[1].toLowerCase();
    signals.push(`OG type: ${t}`);
    if (t === "article" || t === "blog") {
      if (type === "other") { type = "blog_post"; confidence = Math.max(confidence, 70); }
    }
    if (t === "product" || t === "og:product") {
      if (type === "other") { type = "product"; confidence = Math.max(confidence, 75); }
    }
  }

  // Check for contact form indicators
  if (type === "other" && (/contact.form|get.in.touch|send.us.a.message|kontaktformular/i.test(html))) {
    signals.push("Contact form indicators");
    type = "contact";
    confidence = Math.max(confidence, 60);
  }

  // Check for FAQ indicators
  if (type === "other" && (/<(details|summary)[\s>]/i.test(html) && /frequently|faq|question/i.test(html))) {
    signals.push("FAQ accordion detected");
    type = "faq";
    confidence = Math.max(confidence, 60);
  }

  return { type, confidence, signals };
}

async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const res = await fetch(sitemapUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; EcomSEO/1.0)" },
    signal: controller.signal,
  });
  clearTimeout(timeout);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();

  if (text.includes("<sitemapindex")) {
    const sitemapMatches = [...text.matchAll(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/gi)];
    const childUrls = sitemapMatches.map((m) => m[1].trim());
    const allUrls: string[] = [];
    for (const childUrl of childUrls.slice(0, 3)) {
      try {
        const childResults = await fetchSitemapUrls(childUrl);
        allUrls.push(...childResults);
      } catch { /* skip */ }
    }
    return allUrls;
  }

  const urlMatches = [...text.matchAll(/<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/gi)];
  return urlMatches.map((m) => m[1].trim());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls, sitemapUrl } = body;

    let urlList: string[] = [];

    if (sitemapUrl && typeof sitemapUrl === "string") {
      try {
        const sitemapUrls = await fetchSitemapUrls(sitemapUrl);
        urlList = sitemapUrls.slice(0, 50);
      } catch {
        return NextResponse.json({ error: "Could not fetch sitemap" }, { status: 422 });
      }
    } else if (Array.isArray(urls) && urls.length > 0) {
      urlList = urls.slice(0, 50);
    } else {
      return NextResponse.json({ error: "Provide URLs or a sitemap URL" }, { status: 400 });
    }

    if (urlList.length === 0) {
      return NextResponse.json({ error: "No URLs to classify" }, { status: 400 });
    }

    const results: PageTypeResult[] = await Promise.all(
      urlList.map(async (url: string): Promise<PageTypeResult> => {
        const urlClassification = classifyByUrl(url);

        // For very confident URL-based classifications, skip fetching
        if (urlClassification.confidence >= 90) {
          return { url, pageType: urlClassification.type, confidence: urlClassification.confidence, signals: urlClassification.signals, recommendations: SEO_RECOMMENDATIONS[urlClassification.type] || [] };
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
            return { url, pageType: urlClassification.type, confidence: urlClassification.confidence, signals: [...urlClassification.signals, `HTTP ${res.status}`], recommendations: SEO_RECOMMENDATIONS[urlClassification.type] || [] };
          }

          const html = await res.text();
          const htmlClassification = classifyByHtml(html, urlClassification);

          return {
            url,
            pageType: htmlClassification.type,
            confidence: htmlClassification.confidence,
            signals: [...urlClassification.signals, ...htmlClassification.signals],
            recommendations: SEO_RECOMMENDATIONS[htmlClassification.type] || [],
          };
        } catch {
          return { url, pageType: urlClassification.type, confidence: urlClassification.confidence, signals: [...urlClassification.signals, "Could not fetch page"], recommendations: SEO_RECOMMENDATIONS[urlClassification.type] || [] };
        }
      })
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
