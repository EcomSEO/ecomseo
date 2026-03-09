import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

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
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  addPages(entries, toolPages, { priority: 0.7, changefreq: "monthly", lastmod });

  return sitemapResponse(wrapUrlset(entries));
}
