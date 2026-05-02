import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

export const revalidate = 3600;

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
  const entries: UrlEntry[] = [];

  // Academy hub
  addPages(entries, ["/academy"], { priority: 0.8, changefreq: "weekly", lastmod: "2026-03-20T00:00:00.000Z" });

  // Academy lesson pages — stagger by cluster
  const cluster1 = academyPages.slice(1, 7);   // Search Fundamentals
  const cluster2 = academyPages.slice(7, 14);  // Keyword Research
  const cluster3 = academyPages.slice(14, 22); // On-Page SEO
  const cluster4 = academyPages.slice(22, 30); // Technical SEO
  const cluster5 = academyPages.slice(30, 36); // Content & Authority
  const cluster6 = academyPages.slice(36, 42); // Link Building
  const cluster7 = academyPages.slice(42, 47); // Measuring Results
  const cluster8 = academyPages.slice(47, 52); // SEO by Platform
  const cluster9 = academyPages.slice(52, 59); // Advanced SEO
  const cluster10 = academyPages.slice(59, 64); // Industry Playbooks
  const strategy = academyPages.slice(64);      // Strategy & Planning

  addPages(entries, cluster1, { priority: 0.8, changefreq: "monthly", lastmod: "2026-01-10T00:00:00.000Z" });
  addPages(entries, cluster2, { priority: 0.8, changefreq: "monthly", lastmod: "2026-01-20T00:00:00.000Z" });
  addPages(entries, cluster3, { priority: 0.8, changefreq: "monthly", lastmod: "2026-02-01T00:00:00.000Z" });
  addPages(entries, cluster4, { priority: 0.8, changefreq: "monthly", lastmod: "2026-02-10T00:00:00.000Z" });
  addPages(entries, cluster5, { priority: 0.8, changefreq: "monthly", lastmod: "2026-02-18T00:00:00.000Z" });
  addPages(entries, cluster6, { priority: 0.8, changefreq: "monthly", lastmod: "2026-02-25T00:00:00.000Z" });
  addPages(entries, cluster7, { priority: 0.8, changefreq: "monthly", lastmod: "2026-03-01T00:00:00.000Z" });
  addPages(entries, cluster8, { priority: 0.8, changefreq: "monthly", lastmod: "2026-03-05T00:00:00.000Z" });
  addPages(entries, cluster9, { priority: 0.8, changefreq: "monthly", lastmod: "2026-03-10T00:00:00.000Z" });
  addPages(entries, cluster10, { priority: 0.8, changefreq: "monthly", lastmod: "2026-03-15T00:00:00.000Z" });
  addPages(entries, strategy, { priority: 0.8, changefreq: "monthly", lastmod: "2026-03-18T00:00:00.000Z" });

  return sitemapResponse(wrapUrlset(entries));
}
