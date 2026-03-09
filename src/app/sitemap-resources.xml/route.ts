import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

/**
 * sitemap-resources.xml
 * Resources hub + all resource pages.
 */

const resourcePages = [
  "/resources",
  "/resources/crash-course",
  "/resources/crash-course/changelog-page",
  "/resources/search-product-discovery",
  "/resources/shopify-on-page-checklist",
  "/resources/why-we-share",
];

export async function GET() {
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  addPages(entries, resourcePages, { priority: 0.7, changefreq: "monthly", lastmod });

  return sitemapResponse(wrapUrlset(entries));
}
