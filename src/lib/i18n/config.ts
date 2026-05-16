import { getLocalizedSlug } from "./slugs";

export const locales = ["en", "de", "fr", "es", "it", "nl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const BASE_URL = "https://ecomseo.co";

/** Map every hreflang tag → its serving locale */
export const hreflangEntries: { hreflang: string; locale: Locale }[] = [
  { hreflang: "en", locale: "en" },
  { hreflang: "en-GB", locale: "en" },
  { hreflang: "x-default", locale: "en" },
  { hreflang: "de-DE", locale: "de" },
  { hreflang: "de-AT", locale: "de" },
  { hreflang: "fr-FR", locale: "fr" },
  { hreflang: "fr-BE", locale: "fr" },
  { hreflang: "es-ES", locale: "es" },
  { hreflang: "it-IT", locale: "it" },
  { hreflang: "nl-NL", locale: "nl" },
  { hreflang: "nl-BE", locale: "nl" },
];

/** Accept-Language alias → locale */
export const localeAliases: Record<string, Locale> = {
  en: "en",
  "en-gb": "en",
  "en-us": "en",
  de: "de",
  "de-de": "de",
  "de-at": "de",
  "de-ch": "de",
  fr: "fr",
  "fr-fr": "fr",
  "fr-be": "fr",
  "fr-ch": "fr",
  es: "es",
  "es-es": "es",
  it: "it",
  "it-it": "it",
  nl: "nl",
  "nl-nl": "nl",
  "nl-be": "nl",
};

/** OG locale tag per locale */
export const ogLocaleMap: Record<Locale, string> = {
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
  nl: "nl_NL",
};

/** HTML lang attribute per locale */
export const htmlLangMap: Record<Locale, string> = {
  en: "en",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
  nl: "nl",
};

/**
 * Build the public-facing URL for a locale + path combo.
 * Default locale (en) lives at the root with no prefix;
 * other locales get a /{locale} prefix.
 *
 * NOTE: This uses the raw English path. For localized URLs, use
 * publicLocalizedUrl() instead.
 */
export function publicUrl(locale: Locale, path: string): string {
  const cleanPath = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return `${BASE_URL}${cleanPath || "/"}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

/**
 * Build the public-facing URL with localized slug.
 * Uses the slug translation map to produce SEO-optimized URLs.
 */
export function publicLocalizedUrl(locale: Locale, path: string): string {
  const localizedPath = getLocalizedSlug(path, locale);
  const cleanPath = localizedPath === "/" ? "" : localizedPath;
  if (locale === defaultLocale) {
    return `${BASE_URL}${cleanPath || "/"}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

/**
 * Build an internal link path for a locale.
 * Default locale → no prefix; other locales → /{locale} prefix.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) {
    return path.startsWith("/") ? path : `/${path}`;
  }
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Build a localized link path for a locale (uses translated slugs).
 * This is what should be used in navigation links and internal hrefs.
 */
export function localizedPath(locale: Locale, path: string): string {
  const translatedPath = getLocalizedSlug(path, locale);
  if (locale === defaultLocale) {
    return translatedPath.startsWith("/") ? translatedPath : `/${translatedPath}`;
  }
  return `/${locale}${translatedPath.startsWith("/") ? translatedPath : `/${translatedPath}`}`;
}

/** All static routes (used by sitemap + generateStaticParams) */
export const staticRoutes = [
  "/",
  "/shopify-seo",
  "/ecommerce-seo",
  "/ecommerce-seo-platforms",
  "/ecommerce-seo-industries",
  "/ecommerce-seo-services",
  "/link-building",
  "/keyword-research",
  "/content-writing",
  "/adobe-commerce-seo",
  "/woocommerce-seo",
  "/bigcommerce-seo",
  "/amazon-seo",
  "/fashion-seo",
  "/beauty-seo",
  "/consumables-seo",
  "/toys-seo",
  "/cases",
  "/team",
  "/pricing",
  "/contact",
  "/demo",
  "/faq",
  "/resources",
  "/resources/crash-course",
  "/resources/crash-course/changelog-page",
  "/resources/search-product-discovery",
  "/resources/shopify-on-page-checklist",
  "/resources/why-we-share",
  "/academy/seo-learning-roadmap",
  "/academy/seo-task-planning",
  "/academy/serp-domination-strategy",
  // "/page" removed — was a noindex Linktree profile that nonetheless
  // surfaced indexed translated variants (/de/seite, /nl/pagina, etc.).
  // Page route deleted; this entry would also generate dead hreflang.
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
  "/tools/intent-matching-tool",
  "/premium-on-page-seo-checklist",
  "/client-dashboard",
  "/thank-you-payment",
  "/privacy-policy",
  "/terms-of-service",
  "/blog",
  "/blog/ecommerce-seo",
  "/blog/how-to-make-ecommerce-seo-audit",
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
  "/academy",
  // Academy topics - Cluster 1: Search Fundamentals
  "/academy/introduction-to-ecommerce-seo",
  "/academy/how-google-finds-online-stores",
  "/academy/crawling-and-indexing-product-pages",
  "/academy/ecommerce-ranking-factors",
  "/academy/search-intent-for-ecommerce",
  "/academy/google-search-console-for-stores",
  // Academy topics - Cluster 2: Keyword Research
  "/academy/keyword-research-for-ecommerce",
  "/academy/buyer-intent-vs-search-volume",
  "/academy/product-vs-category-keywords",
  "/academy/long-tail-keywords-for-products",
  "/academy/competitor-keyword-analysis",
  "/academy/keyword-mapping-for-stores",
  "/academy/seasonal-keyword-trends",
  // Academy topics - Cluster 3: On-Page SEO
  "/academy/product-page-seo",
  "/academy/category-page-seo",
  "/academy/homepage-seo-for-ecommerce",
  "/academy/title-tags-and-meta-descriptions",
  "/academy/heading-structure-for-ecommerce",
  "/academy/internal-linking-for-stores",
  "/academy/image-optimization-for-products",
  "/academy/ecommerce-blog-seo",
  // Academy topics - Cluster 4: Technical SEO
  "/academy/site-architecture-for-ecommerce",
  "/academy/crawl-budget-management",
  "/academy/site-speed-optimization",
  "/academy/mobile-first-for-ecommerce",
  "/academy/structured-data-for-products",
  "/academy/canonical-tags-for-ecommerce",
  "/academy/robots-txt-and-xml-sitemaps",
  "/academy/faceted-navigation-seo",
  // Academy topics - Cluster 5: Content & Authority
  "/academy/topical-authority-for-ecommerce",
  "/academy/buying-guides-and-comparisons",
  "/academy/faq-pages-for-ecommerce",
  "/academy/content-strategy-for-stores",
  "/academy/content-pruning-and-consolidation",
  "/academy/user-generated-content-seo",
  // Academy topics - Cluster 6: Link Building
  "/academy/backlink-fundamentals-for-ecommerce",
  "/academy/competitor-backlink-analysis",
  "/academy/digital-pr-for-ecommerce",
  "/academy/email-outreach-for-links",
  "/academy/guest-posting-for-ecommerce",
  "/academy/broken-link-building",
  // Academy topics - Cluster 7: Measuring Results
  "/academy/seo-analytics-with-ga4",
  "/academy/rank-tracking-for-ecommerce",
  "/academy/seo-reporting-for-stakeholders",
  "/academy/calculating-seo-roi",
  "/academy/seo-forecasting-for-ecommerce",
  // Academy topics - Cluster 8: SEO by Platform
  "/academy/shopify-seo-guide",
  "/academy/woocommerce-seo-guide",
  "/academy/magento-seo-guide",
  "/academy/bigcommerce-seo-guide",
  "/academy/platform-migration-seo",
  // Academy topics - Cluster 9: Advanced SEO
  "/academy/international-ecommerce-seo",
  "/academy/programmatic-seo-for-ecommerce",
  "/academy/ai-search-optimization",
  "/academy/javascript-seo-for-ecommerce",
  "/academy/log-file-analysis",
  "/academy/seo-ab-testing",
  "/academy/ecommerce-seo-automation",
  // Academy topics - Cluster 10: Industry Playbooks
  "/academy/fashion-apparel-seo",
  "/academy/health-beauty-seo",
  "/academy/food-beverage-seo",
  "/academy/electronics-tech-seo",
  "/academy/home-garden-seo",
];
