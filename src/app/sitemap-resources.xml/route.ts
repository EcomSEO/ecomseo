import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

export const revalidate = 3600;

/**
 * sitemap-resources.xml
 * Only canonical, indexable resource pages. Excluded entries (and why):
 *
 *   "/resources"                            → 308 redirects to /academy.
 *                                             Sitemap must list canonical
 *                                             destinations, not redirects.
 *   "/resources/crash-course"               → renders but has noindex,follow.
 *   "/resources/crash-course/changelog-page" → same noindex reason.
 *
 * Listing a redirecting or noindex'd URL in a sitemap creates a contradictory
 * signal that Google flags (same pattern that triggered the /page issue
 * earlier this week — GSC decay report 2026-05-16 surfaced this).
 */
const resourcePages = [
  "/resources/search-product-discovery",
  "/resources/shopify-on-page-checklist",
  "/resources/why-we-share",
];

export async function GET() {
  const entries: UrlEntry[] = [];

  addPages(entries, resourcePages, { priority: 0.7, changefreq: "monthly", lastmod: "2026-01-20T00:00:00.000Z" });

  return sitemapResponse(wrapUrlset(entries));
}
