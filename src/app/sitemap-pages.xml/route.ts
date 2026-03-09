import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

/**
 * sitemap-pages.xml
 * Homepage, core services, service sub-pages, platforms, industries,
 * company pages, and utility pages.
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
  "/page",
  "/intent-matching-tool",
  "/premium-on-page-seo-checklist",
  "/privacy-policy",
  "/terms-of-service",
];

export async function GET() {
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  // Homepage - priority 1.0
  addPages(entries, ["/"], { priority: 1.0, changefreq: "weekly", lastmod });

  // Core services - priority 0.9
  addPages(entries, coreServices, { priority: 0.9, changefreq: "weekly", lastmod });

  // Service sub-pages - priority 0.8
  addPages(entries, serviceSubPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // Platform pages - priority 0.8
  addPages(entries, platformPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // Industry pages - priority 0.8
  addPages(entries, industryPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // Company pages - priority 0.8
  addPages(entries, companyPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // Utility pages - priority 0.5
  addPages(entries, utilityPages, { priority: 0.5, changefreq: "yearly", lastmod });

  return sitemapResponse(wrapUrlset(entries));
}
