import { NextResponse } from "next/server";
import {
  locales,
  defaultLocale,
  BASE_URL,
} from "@/lib/i18n/config";
import { caseStudies, getAllCaseSlugs } from "@/data/caseStudies";

/**
 * Custom sitemap route that outputs properly formatted XML.
 *
 * Structure matches the hike-footwear.com reference:
 * - Clean indented XML with proper line breaks
 * - image:image namespace for case study images
 * - No hreflang alternates (handled in HTML <head>)
 * - Logical grouping by content type
 * - Granular priority tiers
 */

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function localeUrl(locale: string, path: string): string {
  const cleanPath = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return `${BASE_URL}${cleanPath || "/"}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  images?: string[];
}

function urlBlock(entry: UrlEntry): string {
  let block = `  <url>\n`;
  block += `    <loc>${escapeXml(entry.loc)}</loc>\n`;
  if (entry.images?.length) {
    for (const img of entry.images) {
      block += `    <image:image>\n`;
      block += `      <image:loc>${escapeXml(img)}</image:loc>\n`;
      block += `    </image:image>\n`;
    }
  }
  block += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  block += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  block += `    <priority>${entry.priority}</priority>\n`;
  block += `  </url>\n`;
  return block;
}

function addPages(
  entries: UrlEntry[],
  paths: string[],
  opts: { priority: number; changefreq: string; lastmod: string },
) {
  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        loc: localeUrl(locale, path),
        lastmod: opts.lastmod,
        changefreq: opts.changefreq,
        priority: opts.priority.toFixed(1),
      });
    }
  }
}

/* ------------------------------------------------------------------ */
/*  URL groups — ordered by importance                                 */
/* ------------------------------------------------------------------ */

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

const guidePages: string[] = []; // Guides merged into Academy

const academyPages = [
  "/academy",
  "/academy/introduction-to-ecommerce-seo",
  "/academy/how-google-finds-online-stores",
  "/academy/crawling-and-indexing-product-pages",
  "/academy/ecommerce-ranking-factors",
  "/academy/search-intent-for-ecommerce",
  "/academy/google-search-console-for-stores",
  "/academy/keyword-research-for-ecommerce",
  "/academy/buyer-intent-vs-search-volume",
  "/academy/product-vs-category-keywords",
  "/academy/long-tail-keywords-for-products",
  "/academy/competitor-keyword-analysis",
  "/academy/keyword-mapping-for-stores",
  "/academy/seasonal-keyword-trends",
  "/academy/product-page-seo",
  "/academy/category-page-seo",
  "/academy/homepage-seo-for-ecommerce",
  "/academy/title-tags-and-meta-descriptions",
  "/academy/heading-structure-for-ecommerce",
  "/academy/internal-linking-for-stores",
  "/academy/image-optimization-for-products",
  "/academy/ecommerce-blog-seo",
  "/academy/site-architecture-for-ecommerce",
  "/academy/crawl-budget-management",
  "/academy/site-speed-optimization",
  "/academy/mobile-first-for-ecommerce",
  "/academy/structured-data-for-products",
  "/academy/canonical-tags-for-ecommerce",
  "/academy/robots-txt-and-xml-sitemaps",
  "/academy/faceted-navigation-seo",
  "/academy/topical-authority-for-ecommerce",
  "/academy/buying-guides-and-comparisons",
  "/academy/faq-pages-for-ecommerce",
  "/academy/content-strategy-for-stores",
  "/academy/content-pruning-and-consolidation",
  "/academy/user-generated-content-seo",
  "/academy/backlink-fundamentals-for-ecommerce",
  "/academy/competitor-backlink-analysis",
  "/academy/digital-pr-for-ecommerce",
  "/academy/email-outreach-for-links",
  "/academy/guest-posting-for-ecommerce",
  "/academy/broken-link-building",
  "/academy/seo-analytics-with-ga4",
  "/academy/rank-tracking-for-ecommerce",
  "/academy/seo-reporting-for-stakeholders",
  "/academy/calculating-seo-roi",
  "/academy/seo-forecasting-for-ecommerce",
  "/academy/shopify-seo-guide",
  "/academy/woocommerce-seo-guide",
  "/academy/magento-seo-guide",
  "/academy/bigcommerce-seo-guide",
  "/academy/platform-migration-seo",
  "/academy/international-ecommerce-seo",
  "/academy/programmatic-seo-for-ecommerce",
  "/academy/ai-search-optimization",
  "/academy/javascript-seo-for-ecommerce",
  "/academy/log-file-analysis",
  "/academy/seo-ab-testing",
  "/academy/ecommerce-seo-automation",
  "/academy/fashion-apparel-seo",
  "/academy/health-beauty-seo",
  "/academy/food-beverage-seo",
  "/academy/electronics-tech-seo",
  "/academy/home-garden-seo",
  "/academy/seo-learning-roadmap",
  "/academy/seo-task-planning",
  "/academy/serp-domination-strategy",
];

const resourcePages = [
  "/resources",
  "/resources/crash-course",
  "/resources/crash-course/changelog-page",
  "/resources/search-product-discovery",
  "/resources/shopify-on-page-checklist",
  "/resources/why-we-share",
];

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

const teamSlugs = [
  "fabian-van-til",
  "martinijan-trajkovski",
  "dimitar-georgiev",
  "gjorgi-jovev",
];

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
/*  GET /sitemap.xml                                                   */
/* ------------------------------------------------------------------ */

export async function GET() {
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  // 1. Homepages — priority 1.0 | weekly
  addPages(entries, ["/"], { priority: 1.0, changefreq: "weekly", lastmod });

  // 2. Core services — priority 0.9 | weekly
  addPages(entries, coreServices, { priority: 0.9, changefreq: "weekly", lastmod });

  // 3. Service sub-pages — priority 0.8 | monthly
  addPages(entries, serviceSubPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // 4. Platform pages — priority 0.8 | monthly
  addPages(entries, platformPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // 5. Industry pages — priority 0.8 | monthly
  addPages(entries, industryPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // 6. Guides — priority 0.9 | weekly
  addPages(entries, guidePages, { priority: 0.9, changefreq: "weekly", lastmod });

  // 7. Academy — priority 0.8 | monthly
  addPages(entries, academyPages, { priority: 0.8, changefreq: "monthly", lastmod });

  // 8. Resources — priority 0.7 | monthly
  addPages(entries, resourcePages, { priority: 0.7, changefreq: "monthly", lastmod });

  // 9. Tools — priority 0.7 | monthly
  addPages(entries, toolPages, { priority: 0.7, changefreq: "monthly", lastmod });

  // 10. Blog — priority 0.7 | weekly
  addPages(entries, blogPages, { priority: 0.7, changefreq: "weekly", lastmod });

  // 11. Case studies — priority 0.7 | monthly (with images)
  addPages(entries, ["/cases"], { priority: 0.7, changefreq: "monthly", lastmod });

  for (const slug of getAllCaseSlugs()) {
    const study = caseStudies.find((cs) => cs.slug === slug);
    const images: string[] = [];
    if (study?.heroImage) images.push(`${BASE_URL}${study.heroImage}`);
    if (study?.image1) images.push(`${BASE_URL}${study.image1}`);
    if (study?.image2) images.push(`${BASE_URL}${study.image2}`);

    for (const locale of locales) {
      entries.push({
        loc: localeUrl(locale, `/cases/${slug}`),
        lastmod,
        changefreq: "monthly",
        priority: "0.7",
        ...(images.length > 0 ? { images } : {}),
      });
    }
  }

  // 12. Team — priority 0.6 | monthly
  addPages(entries, ["/team"], { priority: 0.6, changefreq: "monthly", lastmod });
  for (const slug of teamSlugs) {
    addPages(entries, [`/team/${slug}`], { priority: 0.6, changefreq: "monthly", lastmod });
  }

  // 13. Utility pages — priority 0.5 | yearly
  addPages(entries, utilityPages, { priority: 0.5, changefreq: "yearly", lastmod });

  // Build formatted XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const entry of entries) {
    xml += urlBlock(entry);
  }

  xml += `</urlset>\n`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
