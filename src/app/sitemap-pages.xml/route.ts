import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

export const revalidate = 3600;

/**
 * sitemap-pages.xml
 * Homepage, core services, service sub-pages, platforms, industries,
 * company pages, and utility pages.
 * Uses staggered lastmod dates to reflect actual content modification times.
 */

const coreServices = ["/shopify-seo", "/ecommerce-seo"];

const serviceSubPages = [
  "/ecommerce-seo-platforms",
  "/ecommerce-seo-industries",
  "/ecommerce-seo-services",
  "/link-building",
  "/keyword-research",
  "/content-writing",
];

const platformPages = [
  "/adobe-commerce-seo",
  "/woocommerce-seo",
  "/bigcommerce-seo",
  "/amazon-seo",
];

const industryPages = [
  "/fashion-seo",
  "/beauty-seo",
  "/consumables-seo",
  "/toys-seo",
];

const companyPages = ["/pricing"];

const utilityPages = [
  "/contact",
  "/faq",
  // "/page" intentionally excluded — it's a noindex profile/linktree page
  // (robots: { index: false }) for Fabian. Listing it in the sitemap created
  // 5 confused entries ( /page, /de/seite, /es/pagina, /it/pagina, /nl/pagina )
  // that Google flagged because the sitemap signal contradicts noindex.
  "/tools/intent-matching-tool",
  "/premium-on-page-seo-checklist",
  "/privacy-policy",
  "/terms-of-service",
];

export async function GET() {
  const entries: UrlEntry[] = [];

  // Homepage - updated most recently (content changes frequently)
  addPages(entries, ["/"], { priority: 1.0, changefreq: "weekly", lastmod: "2026-04-08T00:00:00.000Z" });

  // Core services - updated with latest optimizations
  addPages(entries, coreServices, { priority: 0.9, changefreq: "weekly", lastmod: "2026-03-15T00:00:00.000Z" });

  // Service sub-pages
  addPages(entries, serviceSubPages, { priority: 0.8, changefreq: "monthly", lastmod: "2026-02-20T00:00:00.000Z" });

  // Platform pages
  addPages(entries, platformPages, { priority: 0.8, changefreq: "monthly", lastmod: "2026-02-10T00:00:00.000Z" });

  // Industry pages
  addPages(entries, industryPages, { priority: 0.8, changefreq: "monthly", lastmod: "2026-02-05T00:00:00.000Z" });

  // Company pages
  addPages(entries, companyPages, { priority: 0.8, changefreq: "monthly", lastmod: "2026-03-01T00:00:00.000Z" });

  // Utility pages
  addPages(entries, utilityPages, { priority: 0.5, changefreq: "yearly", lastmod: "2026-01-15T00:00:00.000Z" });

  return sitemapResponse(wrapUrlset(entries));
}
