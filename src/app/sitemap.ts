import type { MetadataRoute } from "next";
import {
  locales,
  defaultLocale,
  BASE_URL,
} from "@/lib/i18n/config";
import { caseStudies, getAllCaseSlugs } from "@/data/caseStudies";

/**
 * Sitemap organized to match clean reference structure:
 * - No hreflang alternates (handled in HTML <head> via Next.js metadata)
 * - Logical grouping by content type
 * - Granular priority tiers
 * - Image sitemap support for case studies
 * - Appropriate changeFrequency per content type
 */

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Build public URL for a locale + path. Default locale -> root. */
function localeUrl(locale: string, path: string): string {
  const cleanPath = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return `${BASE_URL}${cleanPath || "/"}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

/** Push entries for a page across all locales */
function addPage(
  entries: MetadataRoute.Sitemap,
  path: string,
  opts: {
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    images?: string[];
  },
) {
  for (const locale of locales) {
    entries.push({
      url: localeUrl(locale, path),
      lastModified: new Date(),
      changeFrequency: opts.changeFrequency,
      priority: opts.priority,
      ...(opts.images?.length ? { images: opts.images } : {}),
    });
  }
}

/* ------------------------------------------------------------------ */
/*  Excluded routes                                                    */
/* ------------------------------------------------------------------ */

const excludedRoutes = new Set(["/thank-you-payment", "/client-dashboard"]);

/* ------------------------------------------------------------------ */
/*  URL groups — ordered by importance (top = highest priority)        */
/* ------------------------------------------------------------------ */

// Group 1: Homepages
const homepages = ["/"];

// Group 2: Core service pages (top money pages)
const coreServices = [
  "/shopify-seo",
  "/ecommerce-seo",
];

// Group 3: Service sub-pages
const serviceSubPages = [
  "/ecommerce-seo-platforms",
  "/ecommerce-seo-industries",
  "/ecommerce-seo-services",
  "/link-building",
  "/keyword-research",
  "/content-writing",
];

// Group 4: Platform-specific pages
const platformPages = [
  "/adobe-commerce-seo",
  "/woocommerce-seo",
  "/bigcommerce-seo",
  "/amazon-seo",
];

// Group 5: Industry pages
const industryPages = [
  "/fashion-seo",
  "/beauty-seo",
  "/consumables-seo",
  "/toys-seo",
];

// Group 6: Guides (educational hub)
const guidePages = [
  "/guides",
  "/guides/fundamentals",
  "/guides/fundamentals-2",
  "/guides/analytics-tracking",
  "/guides/beginner-to-hero",
  "/guides/keyword-research",
  "/guides/competitor-analysis",
  "/guides/technical-analysis",
  "/guides/on-page-audit",
  "/guides/off-page-audit",
  "/guides/task-planning",
  "/guides/link-building-tactics",
  "/guides/topical-authority",
  "/guides/ranking-chatgpt",
  "/guides/serp-domination",
];

// Group 7: Academy (learning hub)
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
];

// Group 8: Resources
const resourcePages = [
  "/resources",
  "/resources/crash-course",
  "/resources/crash-course/changelog-page",
  "/resources/search-product-discovery",
  "/resources/shopify-on-page-checklist",
  "/resources/why-we-share",
];

// Group 9: Tools
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

// Group 10: Blog
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
  "/blog/author/fabian-van-til",
];

// Group 11: Team
const teamSlugs = [
  "fabian-van-til",
  "martinijan-trajkovski",
  "dimitar-georgiev",
  "gjorgi-jovev",
];

// Group 12: Utility pages
const utilityPages = [
  "/contact",
  "/faq",
  "/page",
  "/intent-matching-tool",
  "/premium-on-page-seo-checklist",
  "/privacy-policy",
  "/terms-of-service",
];

/* ------------------------------------------------------------------ */
/*  Build sitemap                                                      */
/* ------------------------------------------------------------------ */

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // ── 1. Homepages ── priority 1.0 | weekly
  for (const path of homepages) {
    addPage(entries, path, { priority: 1.0, changeFrequency: "weekly" });
  }

  // ── 2. Core services ── priority 0.9 | weekly
  for (const path of coreServices) {
    addPage(entries, path, { priority: 0.9, changeFrequency: "weekly" });
  }

  // ── 3. Service sub-pages ── priority 0.85 | monthly
  for (const path of serviceSubPages) {
    addPage(entries, path, { priority: 0.85, changeFrequency: "monthly" });
  }

  // ── 4. Platform pages ── priority 0.8 | monthly
  for (const path of platformPages) {
    addPage(entries, path, { priority: 0.8, changeFrequency: "monthly" });
  }

  // ── 5. Industry pages ── priority 0.8 | monthly
  for (const path of industryPages) {
    addPage(entries, path, { priority: 0.8, changeFrequency: "monthly" });
  }

  // ── 6. Guides ── priority 0.85 | weekly
  for (const path of guidePages) {
    addPage(entries, path, { priority: 0.85, changeFrequency: "weekly" });
  }

  // ── 7. Academy ── priority 0.75 | monthly
  for (const path of academyPages) {
    addPage(entries, path, { priority: 0.75, changeFrequency: "monthly" });
  }

  // ── 8. Resources ── priority 0.7 | monthly
  for (const path of resourcePages) {
    addPage(entries, path, { priority: 0.7, changeFrequency: "monthly" });
  }

  // ── 9. Tools ── priority 0.7 | monthly
  for (const path of toolPages) {
    addPage(entries, path, { priority: 0.7, changeFrequency: "monthly" });
  }

  // ── 10. Blog ── priority 0.7 | weekly
  for (const path of blogPages) {
    addPage(entries, path, { priority: 0.7, changeFrequency: "weekly" });
  }

  // ── 11. Case studies ── priority 0.7 | monthly (with images)
  addPage(entries, "/cases", { priority: 0.7, changeFrequency: "monthly" });

  for (const slug of getAllCaseSlugs()) {
    const study = caseStudies.find((cs) => cs.slug === slug);
    const images: string[] = [];
    if (study?.heroImage) images.push(`${BASE_URL}${study.heroImage}`);
    if (study?.image1) images.push(`${BASE_URL}${study.image1}`);
    if (study?.image2) images.push(`${BASE_URL}${study.image2}`);

    addPage(entries, `/cases/${slug}`, {
      priority: 0.7,
      changeFrequency: "monthly",
      images: images.length > 0 ? images : undefined,
    });
  }

  // ── 12. Team ── priority 0.6 | monthly
  addPage(entries, "/team", { priority: 0.6, changeFrequency: "monthly" });

  for (const slug of teamSlugs) {
    addPage(entries, `/team/${slug}`, {
      priority: 0.6,
      changeFrequency: "monthly",
    });
  }

  // ── 13. Utility pages ── priority 0.5 | yearly
  for (const path of utilityPages) {
    addPage(entries, path, { priority: 0.5, changeFrequency: "yearly" });
  }

  return entries;
}
