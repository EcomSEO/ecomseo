import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

/**
 * sitemap-academy.xml
 * Academy hub + all lesson pages.
 */

const academyPages = [
  "/academy",
  // Cluster 1: Search Fundamentals
  "/academy/introduction-to-ecommerce-seo",
  "/academy/how-google-finds-online-stores",
  "/academy/crawling-and-indexing-product-pages",
  "/academy/ecommerce-ranking-factors",
  "/academy/search-intent-for-ecommerce",
  "/academy/google-search-console-for-stores",
  // Cluster 2: Keyword Research
  "/academy/keyword-research-for-ecommerce",
  "/academy/buyer-intent-vs-search-volume",
  "/academy/product-vs-category-keywords",
  "/academy/long-tail-keywords-for-products",
  "/academy/competitor-keyword-analysis",
  "/academy/keyword-mapping-for-stores",
  "/academy/seasonal-keyword-trends",
  // Cluster 3: On-Page SEO
  "/academy/product-page-seo",
  "/academy/category-page-seo",
  "/academy/homepage-seo-for-ecommerce",
  "/academy/title-tags-and-meta-descriptions",
  "/academy/heading-structure-for-ecommerce",
  "/academy/internal-linking-for-stores",
  "/academy/image-optimization-for-products",
  "/academy/ecommerce-blog-seo",
  // Cluster 4: Technical SEO
  "/academy/site-architecture-for-ecommerce",
  "/academy/crawl-budget-management",
  "/academy/site-speed-optimization",
  "/academy/mobile-first-for-ecommerce",
  "/academy/structured-data-for-products",
  "/academy/canonical-tags-for-ecommerce",
  "/academy/robots-txt-and-xml-sitemaps",
  "/academy/faceted-navigation-seo",
  // Cluster 5: Content & Authority
  "/academy/topical-authority-for-ecommerce",
  "/academy/buying-guides-and-comparisons",
  "/academy/faq-pages-for-ecommerce",
  "/academy/content-strategy-for-stores",
  "/academy/content-pruning-and-consolidation",
  "/academy/user-generated-content-seo",
  // Cluster 6: Link Building
  "/academy/backlink-fundamentals-for-ecommerce",
  "/academy/competitor-backlink-analysis",
  "/academy/digital-pr-for-ecommerce",
  "/academy/email-outreach-for-links",
  "/academy/guest-posting-for-ecommerce",
  "/academy/broken-link-building",
  // Cluster 7: Measuring Results
  "/academy/seo-analytics-with-ga4",
  "/academy/rank-tracking-for-ecommerce",
  "/academy/seo-reporting-for-stakeholders",
  "/academy/calculating-seo-roi",
  "/academy/seo-forecasting-for-ecommerce",
  // Cluster 8: SEO by Platform
  "/academy/shopify-seo-guide",
  "/academy/woocommerce-seo-guide",
  "/academy/magento-seo-guide",
  "/academy/bigcommerce-seo-guide",
  "/academy/platform-migration-seo",
  // Cluster 9: Advanced SEO
  "/academy/international-ecommerce-seo",
  "/academy/programmatic-seo-for-ecommerce",
  "/academy/ai-search-optimization",
  "/academy/javascript-seo-for-ecommerce",
  "/academy/log-file-analysis",
  "/academy/seo-ab-testing",
  "/academy/ecommerce-seo-automation",
  // Cluster 10: Industry Playbooks
  "/academy/fashion-apparel-seo",
  "/academy/health-beauty-seo",
  "/academy/food-beverage-seo",
  "/academy/electronics-tech-seo",
  "/academy/home-garden-seo",
  // Strategy & Planning
  "/academy/seo-learning-roadmap",
  "/academy/seo-task-planning",
  "/academy/serp-domination-strategy",
];

export async function GET() {
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  addPages(entries, academyPages, { priority: 0.8, changefreq: "monthly", lastmod });

  return sitemapResponse(wrapUrlset(entries));
}
