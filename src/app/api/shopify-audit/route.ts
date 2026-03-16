import { NextResponse } from "next/server";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface AuditCheck {
  label: string;
  status: "pass" | "warning" | "fail";
  detail: string;
}

interface AuditCategory {
  name: string;
  checks: AuditCheck[];
}

interface AuditResult {
  score: number;
  passed: number;
  warnings: number;
  critical: number;
  isShopify: boolean;
  shopifyTheme: string | null;
  categories: AuditCategory[];
  comparisonResult?: AuditResult;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const UA =
  "Mozilla/5.0 (compatible; EcomSEO ShopifyAudit/1.0; +https://ecomseo.ai)";

async function safeFetch(
  url: string,
  timeout = 12000
): Promise<{ ok: boolean; status: number; text: string; headers: Headers }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA },
      signal: controller.signal,
      redirect: "follow",
    });
    const text = await res.text();
    clearTimeout(timer);
    return { ok: res.ok, status: res.status, text, headers: res.headers };
  } catch {
    clearTimeout(timer);
    return {
      ok: false,
      status: 0,
      text: "",
      headers: new Headers(),
    };
  }
}

/* ------------------------------------------------------------------ */
/*  Shopify detection                                                  */
/* ------------------------------------------------------------------ */

function detectShopify(html: string, headers: Headers): boolean {
  // Check multiple signals
  if (html.includes("Shopify.theme")) return true;
  if (html.includes("cdn.shopify.com")) return true;
  if (/content=["'][^"']*Shopify/i.test(html)) return true;
  if (headers.get("x-shopify-stage") !== null) return true;
  if (headers.get("x-sorting-hat-shopid") !== null) return true;
  if (html.includes("shopify-section")) return true;
  if (html.includes("myshopify.com")) return true;
  return false;
}

function detectTheme(html: string): string | null {
  // Shopify.theme = {"name":"Dawn", ...}
  const m = html.match(/Shopify\.theme\s*=\s*\{[^}]*"name"\s*:\s*"([^"]+)"/);
  if (m) return m[1];
  // theme-name in meta
  const m2 = html.match(
    /data-theme-name=["']([^"']+)["']/i
  );
  if (m2) return m2[1];
  return null;
}

/* ------------------------------------------------------------------ */
/*  Individual checks                                                  */
/* ------------------------------------------------------------------ */

function checkTitle(html: string): AuditCheck {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (!m || !m[1].trim()) {
    return { label: "Title tag", status: "fail", detail: "No title tag found on the page." };
  }
  const title = m[1].trim();
  const len = title.length;
  if (len < 30) {
    return {
      label: "Title tag",
      status: "warning",
      detail: `Title is too short (${len} chars): "${title}". Aim for 50-60 characters.`,
    };
  }
  if (len > 65) {
    return {
      label: "Title tag",
      status: "warning",
      detail: `Title may be truncated in SERPs (${len} chars): "${title.slice(0, 70)}...". Keep under 60 characters.`,
    };
  }
  return {
    label: "Title tag",
    status: "pass",
    detail: `Title is present and well-optimized (${len} chars): "${title}"`,
  };
}

function checkMetaDescription(html: string): AuditCheck {
  const m =
    html.match(
      /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i
    ) ||
    html.match(
      /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i
    );
  if (!m || !m[1].trim()) {
    return {
      label: "Meta description",
      status: "fail",
      detail: "No meta description found. Search engines will auto-generate a snippet.",
    };
  }
  const desc = m[1].trim();
  const len = desc.length;
  if (len < 70) {
    return {
      label: "Meta description",
      status: "warning",
      detail: `Meta description is too short (${len} chars). Aim for 150-160 characters to maximize SERP visibility.`,
    };
  }
  if (len > 165) {
    return {
      label: "Meta description",
      status: "warning",
      detail: `Meta description may be truncated (${len} chars). Keep under 160 characters.`,
    };
  }
  return {
    label: "Meta description",
    status: "pass",
    detail: `Meta description is present and well-optimized (${len} chars).`,
  };
}

function checkH1(html: string): AuditCheck {
  const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1s || h1s.length === 0) {
    return { label: "H1 tag", status: "fail", detail: "No H1 tag found on the page." };
  }
  if (h1s.length > 1) {
    return {
      label: "H1 tag",
      status: "warning",
      detail: `Multiple H1 tags found (${h1s.length}). Use a single H1 per page for best SEO.`,
    };
  }
  const text = h1s[0].replace(/<[^>]+>/g, "").trim();
  if (!text) {
    return { label: "H1 tag", status: "warning", detail: "H1 tag exists but is empty." };
  }
  return {
    label: "H1 tag",
    status: "pass",
    detail: `Single H1 found: "${text.slice(0, 80)}${text.length > 80 ? "..." : ""}"`,
  };
}

function checkCanonical(html: string, pageUrl: string): AuditCheck {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (!m) {
    return {
      label: "Canonical tag",
      status: "fail",
      detail: "No canonical tag found. This can cause duplicate content issues.",
    };
  }
  const canonical = m[1].trim();
  try {
    const canonUrl = new URL(canonical);
    const reqUrl = new URL(pageUrl);
    if (canonUrl.pathname === reqUrl.pathname && canonUrl.hostname === reqUrl.hostname) {
      return {
        label: "Canonical tag",
        status: "pass",
        detail: `Self-referencing canonical tag properly set to ${canonical}`,
      };
    }
    return {
      label: "Canonical tag",
      status: "warning",
      detail: `Canonical points to different URL: ${canonical}. Verify this is intentional.`,
    };
  } catch {
    return {
      label: "Canonical tag",
      status: "warning",
      detail: `Canonical tag found but URL may be malformed: ${canonical}`,
    };
  }
}

function checkMetaRobots(html: string): AuditCheck {
  const m =
    html.match(
      /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i
    ) ||
    html.match(
      /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["']/i
    );
  if (!m) {
    return {
      label: "Meta robots",
      status: "pass",
      detail: "No meta robots tag (defaults to index, follow). Page is indexable.",
    };
  }
  const content = m[1].toLowerCase();
  if (content.includes("noindex")) {
    return {
      label: "Meta robots",
      status: "fail",
      detail: `Page is set to noindex (${m[1]}). This page will NOT appear in search results.`,
    };
  }
  if (content.includes("nofollow")) {
    return {
      label: "Meta robots",
      status: "warning",
      detail: `Page has nofollow directive (${m[1]}). Links on this page will not pass SEO value.`,
    };
  }
  return {
    label: "Meta robots",
    status: "pass",
    detail: `Meta robots: "${m[1]}" - page is indexable.`,
  };
}

/* -- Shopify-specific technical checks -- */

function checkRobotsTxt(robotsTxt: string): AuditCheck[] {
  const checks: AuditCheck[] = [];
  if (!robotsTxt) {
    checks.push({
      label: "Robots.txt",
      status: "fail",
      detail: "Could not fetch robots.txt. Ensure it is accessible.",
    });
    return checks;
  }

  // Check for Shopify defaults
  const hasDisallowAdmin = robotsTxt.includes("/admin");
  const hasDisallowCart = robotsTxt.includes("/cart");
  const hasDisallowCheckout = robotsTxt.includes("/checkout");
  const hasDisallowSearch = /Disallow:\s*\/search/im.test(robotsTxt);
  const hasSitemap = /Sitemap:/i.test(robotsTxt);

  if (hasDisallowAdmin && hasDisallowCart && hasDisallowCheckout) {
    checks.push({
      label: "Robots.txt basics",
      status: "pass",
      detail: "Robots.txt correctly blocks /admin, /cart, and /checkout paths.",
    });
  } else {
    const missing = [];
    if (!hasDisallowAdmin) missing.push("/admin");
    if (!hasDisallowCart) missing.push("/cart");
    if (!hasDisallowCheckout) missing.push("/checkout");
    checks.push({
      label: "Robots.txt basics",
      status: "warning",
      detail: `Robots.txt is missing blocks for: ${missing.join(", ")}. These should be disallowed.`,
    });
  }

  if (!hasDisallowSearch) {
    checks.push({
      label: "Robots.txt search blocking",
      status: "warning",
      detail: "Shopify internal search (/search) is not blocked. This can cause thin content indexing and crawl waste.",
    });
  } else {
    checks.push({
      label: "Robots.txt search blocking",
      status: "pass",
      detail: "Internal search pages (/search) are properly blocked in robots.txt.",
    });
  }

  if (!hasSitemap) {
    checks.push({
      label: "Sitemap in robots.txt",
      status: "warning",
      detail: "No Sitemap directive found in robots.txt. Add a Sitemap: line to help search engines discover your sitemap.",
    });
  } else {
    checks.push({
      label: "Sitemap in robots.txt",
      status: "pass",
      detail: "Sitemap directive found in robots.txt.",
    });
  }

  return checks;
}

function checkCollectionsAll(status: number, ok: boolean): AuditCheck {
  if (ok && status === 200) {
    return {
      label: "/collections/all page",
      status: "warning",
      detail:
        "/collections/all is publicly accessible. This auto-generated page lists all products and often has thin content. Consider redirecting or noindexing it.",
    };
  }
  return {
    label: "/collections/all page",
    status: "pass",
    detail: "/collections/all is not publicly accessible or is redirected. Good practice.",
  };
}

function countThirdPartyScripts(html: string, storeHost: string): AuditCheck {
  const scriptSrcs = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(
    (m) => m[1]
  );
  const thirdParty = scriptSrcs.filter((src) => {
    try {
      const u = new URL(src, `https://${storeHost}`);
      return (
        u.hostname !== storeHost &&
        !u.hostname.includes("cdn.shopify.com") &&
        !u.hostname.includes("shopify.com")
      );
    } catch {
      return false;
    }
  });

  const count = thirdParty.length;
  if (count > 10) {
    return {
      label: "Third-party scripts (app bloat)",
      status: "fail",
      detail: `${count} third-party scripts detected. This is likely excessive Shopify app bloat hurting page speed. Audit your installed apps.`,
    };
  }
  if (count > 5) {
    return {
      label: "Third-party scripts (app bloat)",
      status: "warning",
      detail: `${count} third-party scripts detected. Review installed Shopify apps - each adds JS that slows your store.`,
    };
  }
  return {
    label: "Third-party scripts (app bloat)",
    status: "pass",
    detail: `${count} third-party scripts found. Script count is reasonable.`,
  };
}

/* -- Structured Data -- */

function extractJsonLd(html: string): object[] {
  const results: object[] = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(m[1]);
      if (Array.isArray(parsed)) results.push(...parsed);
      else results.push(parsed);
    } catch {
      // skip malformed
    }
  }
  return results;
}

function checkProductSchema(jsonLd: object[]): AuditCheck {
  const product = jsonLd.find(
    (item: any) => item["@type"] === "Product"
  ) as any;
  if (!product) {
    return {
      label: "Product schema (JSON-LD)",
      status: "warning",
      detail:
        "No Product schema found on homepage. This is expected if this is not a product page. Check individual product pages for Product schema.",
    };
  }
  const fields = ["name", "image", "description"];
  const missing = fields.filter((f) => !product[f]);
  const hasPrice =
    product.offers?.price || product.offers?.lowPrice || product.offers?.[0]?.price;
  const hasAvailability = product.offers?.availability || product.offers?.[0]?.availability;

  if (!hasPrice) missing.push("offers.price");
  if (!hasAvailability) missing.push("offers.availability");

  if (missing.length === 0) {
    return {
      label: "Product schema (JSON-LD)",
      status: "pass",
      detail:
        "Product schema found with all key fields: name, image, description, price, and availability.",
    };
  }
  return {
    label: "Product schema (JSON-LD)",
    status: "warning",
    detail: `Product schema found but missing: ${missing.join(", ")}. Complete these for rich results.`,
  };
}

function checkBreadcrumbSchema(jsonLd: object[]): AuditCheck {
  const bc = jsonLd.find(
    (item: any) => item["@type"] === "BreadcrumbList"
  );
  if (!bc) {
    return {
      label: "BreadcrumbList schema",
      status: "warning",
      detail:
        "No BreadcrumbList schema found. Adding breadcrumb structured data helps search engines understand your site hierarchy.",
    };
  }
  return {
    label: "BreadcrumbList schema",
    status: "pass",
    detail: "BreadcrumbList schema found.",
  };
}

function checkOrganizationSchema(jsonLd: object[]): AuditCheck {
  const org = jsonLd.find(
    (item: any) =>
      item["@type"] === "Organization" || item["@type"] === "Store"
  ) as any;
  if (!org) {
    return {
      label: "Organization schema",
      status: "warning",
      detail:
        "No Organization/Store schema found. Adding this helps display your brand info in search results.",
    };
  }
  const has = [];
  if (org.logo) has.push("logo");
  if (org.name) has.push("name");
  if (org.url) has.push("url");
  if (org.contactPoint) has.push("contactPoint");
  return {
    label: "Organization schema",
    status: "pass",
    detail: `Organization schema found with: ${has.join(", ")}.`,
  };
}

function checkAggregateRating(jsonLd: object[]): AuditCheck {
  const hasRating = jsonLd.some(
    (item: any) =>
      item.aggregateRating || item["@type"] === "AggregateRating"
  );
  if (!hasRating) {
    return {
      label: "Review / AggregateRating schema",
      status: "warning",
      detail:
        "No AggregateRating or Review schema found. Adding review markup can enable star ratings in search results.",
    };
  }
  return {
    label: "Review / AggregateRating schema",
    status: "pass",
    detail: "AggregateRating / Review schema detected. Star ratings may appear in SERPs.",
  };
}

/* -- Performance -- */

function checkPageSize(html: string): AuditCheck {
  const sizeKB = Math.round(html.length / 1024);
  if (sizeKB > 500) {
    return {
      label: "HTML page size",
      status: "fail",
      detail: `HTML is ${sizeKB}KB - very large. This slows initial load. Common Shopify cause: inline JS from apps.`,
    };
  }
  if (sizeKB > 200) {
    return {
      label: "HTML page size",
      status: "warning",
      detail: `HTML is ${sizeKB}KB. Consider reducing inline scripts and unused CSS.`,
    };
  }
  return {
    label: "HTML page size",
    status: "pass",
    detail: `HTML page size is ${sizeKB}KB - within acceptable range.`,
  };
}

function checkExternalJS(html: string): AuditCheck {
  const scripts = html.match(/<script[^>]+src=["'][^"']+["']/gi) || [];
  const count = scripts.length;
  if (count > 25) {
    return {
      label: "External JS files",
      status: "fail",
      detail: `${count} external JS files loaded. This is very high and will significantly impact page speed. Audit your Shopify apps.`,
    };
  }
  if (count > 15) {
    return {
      label: "External JS files",
      status: "warning",
      detail: `${count} external JS files loaded. Consider removing unused Shopify apps to reduce script count.`,
    };
  }
  return {
    label: "External JS files",
    status: "pass",
    detail: `${count} external JS files - reasonable for a Shopify store.`,
  };
}

function checkImageOptimization(html: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  // WebP usage
  const allImgs = html.match(/<img[^>]+src=["'][^"']+["']/gi) || [];
  const webpCount = allImgs.filter((img) =>
    /\.webp/i.test(img) || /format=webp/i.test(img)
  ).length;
  const totalImgs = allImgs.length;

  if (totalImgs === 0) {
    checks.push({
      label: "Image format (WebP)",
      status: "pass",
      detail: "No images found on the page to check.",
    });
  } else if (webpCount / totalImgs > 0.5) {
    checks.push({
      label: "Image format (WebP)",
      status: "pass",
      detail: `${webpCount}/${totalImgs} images use WebP format. Good modern format usage.`,
    });
  } else {
    checks.push({
      label: "Image format (WebP)",
      status: "warning",
      detail: `Only ${webpCount}/${totalImgs} images use WebP. Shopify CDN supports WebP - ensure your theme requests it.`,
    });
  }

  // Lazy loading
  const lazyCount = (html.match(/loading=["']lazy["']/gi) || []).length;
  if (totalImgs > 3 && lazyCount < totalImgs / 2) {
    checks.push({
      label: "Image lazy loading",
      status: "warning",
      detail: `Only ${lazyCount}/${totalImgs} images use lazy loading. Add loading="lazy" to below-the-fold images.`,
    });
  } else {
    checks.push({
      label: "Image lazy loading",
      status: "pass",
      detail: `${lazyCount}/${totalImgs} images use lazy loading.`,
    });
  }

  return checks;
}

function checkRenderBlocking(html: string): AuditCheck {
  // Count link[rel=stylesheet] in <head> without media or async attributes
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) {
    return {
      label: "Render-blocking resources",
      status: "warning",
      detail: "Could not parse <head> to check render-blocking resources.",
    };
  }
  const head = headMatch[1];
  const stylesheets = (
    head.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || []
  ).filter(
    (tag) => !/media=["']print["']/i.test(tag) && !/media=["']none["']/i.test(tag)
  );
  const blockingScripts = (
    head.match(/<script[^>]+src=["'][^"']+["'][^>]*>/gi) || []
  ).filter(
    (tag) => !/async/i.test(tag) && !/defer/i.test(tag) && !/type=["']module["']/i.test(tag)
  );

  const total = stylesheets.length + blockingScripts.length;
  if (total > 10) {
    return {
      label: "Render-blocking resources",
      status: "fail",
      detail: `${total} render-blocking resources in <head> (${stylesheets.length} CSS, ${blockingScripts.length} JS). This delays first paint significantly.`,
    };
  }
  if (total > 5) {
    return {
      label: "Render-blocking resources",
      status: "warning",
      detail: `${total} render-blocking resources (${stylesheets.length} CSS, ${blockingScripts.length} JS). Consider deferring non-critical resources.`,
    };
  }
  return {
    label: "Render-blocking resources",
    status: "pass",
    detail: `${total} render-blocking resources - acceptable level.`,
  };
}

function checkSitemap(sitemapText: string): AuditCheck {
  if (!sitemapText) {
    return {
      label: "XML Sitemap",
      status: "fail",
      detail: "Could not fetch /sitemap.xml. Ensure your sitemap is accessible.",
    };
  }
  const hasUrls =
    sitemapText.includes("<url>") || sitemapText.includes("<sitemap>");
  if (!hasUrls) {
    return {
      label: "XML Sitemap",
      status: "warning",
      detail: "Sitemap found but appears empty or malformed. Check its contents.",
    };
  }

  const urlCount = (sitemapText.match(/<url>/gi) || []).length;
  const sitemapIndexCount = (sitemapText.match(/<sitemap>/gi) || []).length;

  if (sitemapIndexCount > 0) {
    return {
      label: "XML Sitemap",
      status: "pass",
      detail: `Sitemap index found with ${sitemapIndexCount} sub-sitemaps. Shopify auto-generates this.`,
    };
  }
  return {
    label: "XML Sitemap",
    status: "pass",
    detail: `XML Sitemap found with ${urlCount} URLs.`,
  };
}

function checkOpenGraph(html: string): AuditCheck {
  const ogTitle = /<meta[^>]+property=["']og:title["']/i.test(html);
  const ogDesc = /<meta[^>]+property=["']og:description["']/i.test(html);
  const ogImage = /<meta[^>]+property=["']og:image["']/i.test(html);
  const ogType = /<meta[^>]+property=["']og:type["']/i.test(html);

  const present = [
    ogTitle && "og:title",
    ogDesc && "og:description",
    ogImage && "og:image",
    ogType && "og:type",
  ].filter(Boolean);
  const missing = [
    !ogTitle && "og:title",
    !ogDesc && "og:description",
    !ogImage && "og:image",
    !ogType && "og:type",
  ].filter(Boolean);

  if (missing.length === 0) {
    return {
      label: "Open Graph tags",
      status: "pass",
      detail: "All key Open Graph tags present (title, description, image, type).",
    };
  }
  if (missing.length <= 1) {
    return {
      label: "Open Graph tags",
      status: "warning",
      detail: `Missing: ${missing.join(", ")}. Social media previews may be incomplete.`,
    };
  }
  return {
    label: "Open Graph tags",
    status: "fail",
    detail: `Missing ${missing.length} OG tags: ${missing.join(", ")}. Social sharing will look broken.`,
  };
}

function checkViewport(html: string): AuditCheck {
  const has = /<meta[^>]+name=["']viewport["']/i.test(html);
  if (!has) {
    return {
      label: "Viewport meta tag",
      status: "fail",
      detail: "No viewport meta tag found. Page will not render properly on mobile devices.",
    };
  }
  return {
    label: "Viewport meta tag",
    status: "pass",
    detail: "Viewport meta tag is properly configured for mobile.",
  };
}

function checkAltTexts(html: string): AuditCheck {
  const imgs = html.match(/<img[^>]*>/gi) || [];
  if (imgs.length === 0) {
    return {
      label: "Image alt attributes",
      status: "pass",
      detail: "No images found to check.",
    };
  }
  const missingAlt = imgs.filter(
    (img) => !/alt=["'][^"']+["']/i.test(img)
  ).length;

  if (missingAlt === 0) {
    return {
      label: "Image alt attributes",
      status: "pass",
      detail: `All ${imgs.length} images have alt text. Good for SEO and accessibility.`,
    };
  }
  const pct = Math.round((missingAlt / imgs.length) * 100);
  if (pct > 50) {
    return {
      label: "Image alt attributes",
      status: "fail",
      detail: `${missingAlt}/${imgs.length} images are missing alt text (${pct}%). This hurts image SEO.`,
    };
  }
  return {
    label: "Image alt attributes",
    status: "warning",
    detail: `${missingAlt}/${imgs.length} images missing alt text. Add descriptive alts for better image SEO.`,
  };
}

/* -- Collection page checks -- */

function checkCollectionsFrontpage(status: number, ok: boolean): AuditCheck {
  if (ok && status === 200) {
    return {
      label: "/collections/frontpage page",
      status: "warning",
      detail:
        "/collections/frontpage is publicly accessible. This auto-generated collection is often thin content. Consider redirecting or noindexing it.",
    };
  }
  return {
    label: "/collections/frontpage page",
    status: "pass",
    detail: "/collections/frontpage is not publicly accessible or is redirected.",
  };
}

function checkCollectionPagination(html: string): AuditCheck {
  const hasRelNext = /<link[^>]+rel=["']next["']/i.test(html);
  const hasRelPrev = /<link[^>]+rel=["']prev["']/i.test(html);

  if (hasRelNext || hasRelPrev) {
    return {
      label: "Collection pagination (rel=next/prev)",
      status: "pass",
      detail: "Pagination rel=next/prev tags found. Search engines can follow paginated collections.",
    };
  }

  // Check if pagination links exist on the page
  const hasPagination = /class=["'][^"']*pagination[^"']*["']/i.test(html) ||
    /\?page=\d/i.test(html);

  if (hasPagination) {
    return {
      label: "Collection pagination (rel=next/prev)",
      status: "warning",
      detail: "Pagination links found but no rel=next/prev tags in <head>. Add these to help search engines understand paginated collections.",
    };
  }

  return {
    label: "Collection pagination (rel=next/prev)",
    status: "pass",
    detail: "No pagination detected on this page.",
  };
}

/* -- Product variant URL check -- */

function checkProductVariantUrls(html: string): AuditCheck {
  // Check if variant URLs use ?variant= parameter
  const variantLinks = (html.match(/\?variant=\d+/gi) || []).length;
  const hasCanonicalForVariants = /<link[^>]+rel=["']canonical["']/i.test(html);

  if (variantLinks > 0 && !hasCanonicalForVariants) {
    return {
      label: "Product variant URL structure",
      status: "fail",
      detail: `${variantLinks} variant URLs found (?variant=ID) without canonical tags. Each variant may create duplicate content.`,
    };
  }
  if (variantLinks > 0) {
    return {
      label: "Product variant URL structure",
      status: "pass",
      detail: `${variantLinks} variant URLs found with canonical tag in place. Variants are handled correctly.`,
    };
  }
  return {
    label: "Product variant URL structure",
    status: "pass",
    detail: "No variant URL parameters detected on this page.",
  };
}

/* -- Shopify-specific meta tags -- */

function checkShopifyMetaTags(html: string): AuditCheck {
  const checks: string[] = [];
  const missing: string[] = [];

  if (/<meta[^>]+property=["']og:type["'][^>]*content=["']product["']/i.test(html) ||
      /<meta[^>]+content=["']product["'][^>]*property=["']og:type["']/i.test(html)) {
    checks.push("og:type=product");
  }

  if (/<meta[^>]+property=["']product:price/i.test(html)) {
    checks.push("product:price");
  } else {
    missing.push("product:price:amount");
  }

  if (/<meta[^>]+name=["']twitter:card["']/i.test(html)) {
    checks.push("twitter:card");
  } else {
    missing.push("twitter:card");
  }

  if (/<meta[^>]+property=["']og:image["']/i.test(html)) {
    checks.push("og:image");
  } else {
    missing.push("og:image");
  }

  if (missing.length === 0) {
    return {
      label: "Shopify social meta tags",
      status: "pass",
      detail: `All key social/product meta tags present: ${checks.join(", ")}.`,
    };
  }
  if (missing.length <= 2) {
    return {
      label: "Shopify social meta tags",
      status: "warning",
      detail: `Missing social meta tags: ${missing.join(", ")}. Present: ${checks.join(", ")}.`,
    };
  }
  return {
    label: "Shopify social meta tags",
    status: "fail",
    detail: `Multiple social meta tags missing: ${missing.join(", ")}. These improve social sharing.`,
  };
}

/* -- Enhanced sitemap analysis -- */

function checkSitemapStructure(sitemapText: string): AuditCheck[] {
  const checks: AuditCheck[] = [];

  if (!sitemapText) {
    checks.push({
      label: "XML Sitemap",
      status: "fail",
      detail: "Could not fetch /sitemap.xml. Ensure your sitemap is accessible.",
    });
    return checks;
  }

  const hasUrls = sitemapText.includes("<url>") || sitemapText.includes("<sitemap>");
  if (!hasUrls) {
    checks.push({
      label: "XML Sitemap",
      status: "warning",
      detail: "Sitemap found but appears empty or malformed.",
    });
    return checks;
  }

  const sitemapIndexCount = (sitemapText.match(/<sitemap>/gi) || []).length;
  const urlCount = (sitemapText.match(/<url>/gi) || []).length;

  if (sitemapIndexCount > 0) {
    checks.push({
      label: "XML Sitemap",
      status: "pass",
      detail: `Sitemap index found with ${sitemapIndexCount} sub-sitemaps. Shopify auto-generates this.`,
    });

    // Check for products, collections, pages, blogs sub-sitemaps
    const hasProducts = /sitemap_products/i.test(sitemapText);
    const hasCollections = /sitemap_collections/i.test(sitemapText);
    const hasPages = /sitemap_pages/i.test(sitemapText);
    const hasBlogs = /sitemap_blogs/i.test(sitemapText);

    const sitemapTypes = [];
    if (hasProducts) sitemapTypes.push("products");
    if (hasCollections) sitemapTypes.push("collections");
    if (hasPages) sitemapTypes.push("pages");
    if (hasBlogs) sitemapTypes.push("blogs");

    checks.push({
      label: "Sitemap coverage",
      status: sitemapTypes.length >= 2 ? "pass" : "warning",
      detail: sitemapTypes.length > 0
        ? `Sitemap includes: ${sitemapTypes.join(", ")}. ${sitemapTypes.length < 2 ? "Consider ensuring all content types are in the sitemap." : "Good coverage."}`
        : "Could not identify specific content type sitemaps.",
    });
  } else {
    checks.push({
      label: "XML Sitemap",
      status: "pass",
      detail: `XML Sitemap found with ${urlCount} URLs.`,
    });
  }

  // Check for lastmod dates
  const hasLastmod = /<lastmod>/i.test(sitemapText);
  checks.push({
    label: "Sitemap lastmod dates",
    status: hasLastmod ? "pass" : "warning",
    detail: hasLastmod
      ? "Sitemap includes lastmod dates, helping search engines prioritize crawling."
      : "Sitemap missing lastmod dates. Adding them helps search engines know when to re-crawl pages.",
  });

  return checks;
}

/* -- App bloat detailed analysis -- */

function analyzeAppBloat(html: string, storeHost: string): AuditCheck[] {
  const checks: AuditCheck[] = [];
  const scriptSrcs = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(
    (m) => m[1]
  );

  const thirdParty = scriptSrcs.filter((src) => {
    try {
      const u = new URL(src, `https://${storeHost}`);
      return (
        u.hostname !== storeHost &&
        !u.hostname.includes("cdn.shopify.com") &&
        !u.hostname.includes("shopify.com")
      );
    } catch {
      return false;
    }
  });

  const count = thirdParty.length;

  // Estimate performance impact
  const estimatedKB = count * 45; // rough average 45KB per script
  const estimatedLoadMs = count * 120; // rough estimate per script

  if (count > 10) {
    checks.push({
      label: "Third-party scripts (app bloat)",
      status: "fail",
      detail: `${count} third-party scripts detected (~${estimatedKB}KB, ~${(estimatedLoadMs / 1000).toFixed(1)}s estimated impact). This is excessive Shopify app bloat.`,
    });
  } else if (count > 5) {
    checks.push({
      label: "Third-party scripts (app bloat)",
      status: "warning",
      detail: `${count} third-party scripts detected (~${estimatedKB}KB, ~${(estimatedLoadMs / 1000).toFixed(1)}s estimated impact). Review installed apps.`,
    });
  } else {
    checks.push({
      label: "Third-party scripts (app bloat)",
      status: "pass",
      detail: `${count} third-party scripts (~${estimatedKB}KB). Script count is reasonable.`,
    });
  }

  // Identify common app script domains
  const domainCounts: Record<string, number> = {};
  for (const src of thirdParty) {
    try {
      const hostname = new URL(src, `https://${storeHost}`).hostname;
      domainCounts[hostname] = (domainCounts[hostname] || 0) + 1;
    } catch { /* skip */ }
  }

  const topDomains = Object.entries(domainCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (topDomains.length > 0) {
    checks.push({
      label: "App script sources",
      status: count > 8 ? "warning" : "pass",
      detail: `Top script domains: ${topDomains.map(([d, c]) => `${d} (${c})`).join(", ")}.`,
    });
  }

  return checks;
}

/* -- Robots.txt analysis (enhanced) -- */

function checkRobotsTxtEnhanced(robotsTxt: string): AuditCheck[] {
  const checks: AuditCheck[] = [];
  if (!robotsTxt) {
    checks.push({
      label: "Robots.txt",
      status: "fail",
      detail: "Could not fetch robots.txt. Ensure it is accessible.",
    });
    return checks;
  }

  const hasDisallowAdmin = robotsTxt.includes("/admin");
  const hasDisallowCart = robotsTxt.includes("/cart");
  const hasDisallowCheckout = robotsTxt.includes("/checkout");
  const hasDisallowSearch = /Disallow:\s*\/search/im.test(robotsTxt);
  const hasSitemap = /Sitemap:/i.test(robotsTxt);
  const hasDisallowCollections = /Disallow:\s*\/collections\/[+*]/im.test(robotsTxt);

  if (hasDisallowAdmin && hasDisallowCart && hasDisallowCheckout) {
    checks.push({
      label: "Robots.txt basics",
      status: "pass",
      detail: "Robots.txt correctly blocks /admin, /cart, and /checkout paths.",
    });
  } else {
    const missing = [];
    if (!hasDisallowAdmin) missing.push("/admin");
    if (!hasDisallowCart) missing.push("/cart");
    if (!hasDisallowCheckout) missing.push("/checkout");
    checks.push({
      label: "Robots.txt basics",
      status: "warning",
      detail: `Robots.txt is missing blocks for: ${missing.join(", ")}.`,
    });
  }

  if (!hasDisallowSearch) {
    checks.push({
      label: "Robots.txt search blocking",
      status: "warning",
      detail: "Internal search (/search) is not blocked. This can cause thin content indexing.",
    });
  } else {
    checks.push({
      label: "Robots.txt search blocking",
      status: "pass",
      detail: "Internal search pages are properly blocked.",
    });
  }

  if (!hasSitemap) {
    checks.push({
      label: "Sitemap in robots.txt",
      status: "warning",
      detail: "No Sitemap directive found in robots.txt.",
    });
  } else {
    checks.push({
      label: "Sitemap in robots.txt",
      status: "pass",
      detail: "Sitemap directive found in robots.txt.",
    });
  }

  // Check for optimized vs default Shopify robots.txt
  const hasWildcardRules = /Disallow:\s*\/\*[?&]/im.test(robotsTxt);
  const hasCollectionFilter = /Disallow:\s*\/collections\/.*[?&]/im.test(robotsTxt);

  if (hasWildcardRules || hasCollectionFilter) {
    checks.push({
      label: "Robots.txt optimization",
      status: "pass",
      detail: "Robots.txt appears optimized beyond Shopify defaults with custom rules for URL parameters or filters.",
    });
  } else {
    checks.push({
      label: "Robots.txt optimization",
      status: "warning",
      detail: "Robots.txt appears to be Shopify default. Consider adding rules for filter URLs (/collections/*?filter) to prevent crawl waste.",
    });
  }

  return checks;
}

/* ------------------------------------------------------------------ */
/*  Run a full audit for a single store                                */
/* ------------------------------------------------------------------ */

async function runShopifyAudit(rawUrl: string): Promise<AuditResult> {
  let url = rawUrl.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  const parsedUrl = new URL(url);
  const origin = parsedUrl.origin;
  const host = parsedUrl.hostname;

  const [mainRes, robotsRes, collectionsRes, collectionsAllRes, sitemapRes, cartJsRes] =
    await Promise.all([
      safeFetch(url),
      safeFetch(`${origin}/robots.txt`, 8000),
      safeFetch(`${origin}/collections/frontpage`, 8000),
      safeFetch(`${origin}/collections/all`, 8000),
      safeFetch(`${origin}/sitemap.xml`, 8000),
      safeFetch(`${origin}/cart.js`, 5000),
    ]);

  if (!mainRes.ok) {
    throw new Error(`Could not fetch ${url} (status ${mainRes.status})`);
  }

  const html = mainRes.text;

  // Shopify detection (enhanced with cart.js)
  const cartJsIsShopify = cartJsRes.ok && cartJsRes.text.includes('"token"');
  const isShopify = detectShopify(html, mainRes.headers) || cartJsIsShopify;
  const shopifyTheme = isShopify ? detectTheme(html) : null;

  if (!isShopify) {
    return {
      score: 0,
      passed: 0,
      warnings: 0,
      critical: 0,
      isShopify: false,
      shopifyTheme: null,
      categories: [],
    };
  }

  const jsonLd = extractJsonLd(html);

  // Meta checks
  const metaChecks: AuditCheck[] = [
    checkTitle(html),
    checkMetaDescription(html),
    checkH1(html),
    checkCanonical(html, url),
    checkMetaRobots(html),
    checkOpenGraph(html),
    checkShopifyMetaTags(html),
  ];

  // Technical checks (enhanced)
  const robotsChecks = checkRobotsTxtEnhanced(robotsRes.ok ? robotsRes.text : "");
  const sitemapChecks = checkSitemapStructure(sitemapRes.ok ? sitemapRes.text : "");
  const appBloatChecks = analyzeAppBloat(html, host);

  const technicalChecks: AuditCheck[] = [
    ...robotsChecks,
    checkCollectionsAll(collectionsAllRes.status, collectionsAllRes.ok),
    checkCollectionsFrontpage(collectionsRes.status, collectionsRes.ok),
    checkCollectionPagination(html),
    checkProductVariantUrls(html),
    ...appBloatChecks,
    ...sitemapChecks,
    {
      label: "Shopify theme detected",
      status: "pass",
      detail: shopifyTheme
        ? `Theme: "${shopifyTheme}".`
        : "Shopify detected but theme name could not be determined.",
    },
  ];

  // Performance checks
  const performanceChecks: AuditCheck[] = [
    checkPageSize(html),
    checkExternalJS(html),
    ...checkImageOptimization(html),
    checkRenderBlocking(html),
  ];

  // Structured data checks
  const structuredDataChecks: AuditCheck[] = [
    checkProductSchema(jsonLd),
    checkBreadcrumbSchema(jsonLd),
    checkOrganizationSchema(jsonLd),
    checkAggregateRating(jsonLd),
  ];

  // Mobile checks
  const mobileChecks: AuditCheck[] = [
    checkViewport(html),
    checkAltTexts(html),
  ];

  const categories: AuditCategory[] = [
    { name: "meta", checks: metaChecks },
    { name: "shopify-technical", checks: technicalChecks },
    { name: "performance", checks: performanceChecks },
    { name: "structured-data", checks: structuredDataChecks },
    { name: "mobile", checks: mobileChecks },
  ];

  const allChecks = categories.flatMap((c) => c.checks);
  const passed = allChecks.filter((c) => c.status === "pass").length;
  const warnings = allChecks.filter((c) => c.status === "warning").length;
  const critical = allChecks.filter((c) => c.status === "fail").length;
  const total = allChecks.length;
  const score = total > 0 ? Math.round((passed / total) * 100) : 0;

  return {
    score,
    passed,
    warnings,
    critical,
    isShopify: true,
    shopifyTheme,
    categories,
  };
}

/* ------------------------------------------------------------------ */
/*  Main handler                                                       */
/* ------------------------------------------------------------------ */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawUrl: string = body.url || "";
    const compareUrl: string = body.compareUrl || "";

    if (!rawUrl.trim()) {
      return NextResponse.json(
        { error: "Missing URL" },
        { status: 400 }
      );
    }

    // Validate primary URL
    let url = rawUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: "Invalid URL" },
        { status: 400 }
      );
    }

    // Run primary audit
    let result: AuditResult;
    try {
      result = await runShopifyAudit(url);
    } catch (e: any) {
      return NextResponse.json(
        { error: e.message || "Could not audit the URL" },
        { status: 422 }
      );
    }

    // Run comparison audit if compareUrl is provided
    if (compareUrl.trim()) {
      let compUrl = compareUrl.trim();
      if (!/^https?:\/\//i.test(compUrl)) compUrl = `https://${compUrl}`;
      try {
        new URL(compUrl);
        const compResult = await runShopifyAudit(compUrl);
        result.comparisonResult = compResult;
      } catch {
        // Comparison failed, continue without it
      }
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error("Shopify audit error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
