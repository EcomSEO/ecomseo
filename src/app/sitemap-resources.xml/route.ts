import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

export const revalidate = 3600;

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
  const entries: UrlEntry[] = [];

  addPages(entries, resourcePages, { priority: 0.7, changefreq: "monthly", lastmod: "2026-01-20T00:00:00.000Z" });

  return sitemapResponse(wrapUrlset(entries));
}
