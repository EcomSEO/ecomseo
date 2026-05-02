import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

export const revalidate = 3600;

/**
 * sitemap-tools.xml
 * Tools hub + all individual tool pages.
 */

const toolPages = [
  "/tools",
  "/tools/shopify-seo-audit",
  "/tools/ecommerce-seo-audit",
  "/tools/serp-simulator",
  "/tools/schema-generator",
  "/tools/og-checker",
  "/tools/robots-txt-analyzer",
  "/tools/meta-tags-checker",
  "/tools/heading-checker",
  "/tools/canonical-checker",
  "/tools/indexability-checker",
  "/tools/page-type-classifier",
  "/tools/sitemap-comparison",
  "/tools/thin-content-checker",
  "/tools/core-web-vitals",
  "/tools/schema-validator",
  "/tools/redirect-checker",
  "/tools/hreflang-validator",
  "/tools/image-auditor",
  "/tools/duplicate-content",
  "/tools/shopping-feed-validator",
  "/tools/internal-link-analyzer",
  "/tools/site-speed-comparison",
  "/tools/sitemap-extractor",
];

export async function GET() {
  const entries: UrlEntry[] = [];

  // Tools hub
  addPages(entries, ["/tools"], { priority: 0.7, changefreq: "weekly", lastmod: "2026-03-25T00:00:00.000Z" });

  // Individual tool pages
  addPages(entries, toolPages.slice(1), { priority: 0.7, changefreq: "monthly", lastmod: "2026-03-08T00:00:00.000Z" });

  return sitemapResponse(wrapUrlset(entries));
}
