import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

/**
 * sitemap-blog.xml
 * Blog index, all articles, and author pages.
 */

const blogPages = [
  "/blog",
  "/blog/ecommerce-seo",
  "/blog/ecommerce-seo-audit",
  "/blog/ecommerce-seo-consultant",
  "/blog/ecommerce-seo-packages",
  "/blog/ecommerce-seo-agencies",
  "/blog/ecommerce-seo-tips",
  "/blog/ecommerce-seo-strategy",
  "/blog/ecommerce-seo-checklist",
  "/blog/on-page-seo-for-ecommerce",
  "/blog/seo-for-ecommerce-product-pages",
  "/blog/ecommerce-category-page-seo",
  "/blog/technical-seo-for-ecommerce",
  "/blog/ecommerce-seo-keywords",
  "/blog/off-page-seo-for-ecommerce",
  "/blog/magento-ecommerce-seo",
  "/blog/shopify-ecommerce-seo",
  "/blog/ecommerce-seo-migration",
  "/blog/international-ecommerce-seo",
  "/blog/b2b-ecommerce-seo",
  "/blog/fashion-ecommerce-seo",
  "/blog/ecommerce-seo-mistakes",
  "/blog/why-is-seo-important-for-ecommerce",
  "/blog/advanced-ecommerce-seo-techniques",
  "/blog/ecommerce-seo-india",
  "/blog/ecommerce-seo-pricing",
  "/blog/ecommerce-seo-tools",
  "/blog/ecommerce-homepage-seo",
  "/blog/ecommerce-seo-content",
  "/blog/ecommerce-seo-marketing",
  "/blog/enterprise-ecommerce-seo",
  // Author pages
  "/blog/author/fabian-van-til",
];

export async function GET() {
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  addPages(entries, blogPages, { priority: 0.7, changefreq: "weekly", lastmod });

  return sitemapResponse(wrapUrlset(entries));
}
