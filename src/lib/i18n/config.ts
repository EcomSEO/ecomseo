export const locales = ["en", "de", "fr", "es", "it", "nl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const BASE_URL = "https://ecomseo.co";

/** Map every hreflang tag → its serving locale */
export const hreflangEntries: { hreflang: string; locale: Locale }[] = [
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
 */
export function publicUrl(locale: Locale, path: string): string {
  const cleanPath = path === "/" ? "" : path;
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
  "/contact",
  "/faq",
  "/resources",
  "/resources/crash-course",
  "/resources/crash-course/changelog-page",
  "/resources/search-product-discovery",
  "/resources/shopify-on-page-checklist",
  "/resources/why-we-share",
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
  "/page",
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
  "/intent-matching-tool",
  "/premium-on-page-seo-checklist",
  "/client-dashboard",
  "/thank-you-payment",
  "/privacy-policy",
  "/terms-of-service",
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
];
