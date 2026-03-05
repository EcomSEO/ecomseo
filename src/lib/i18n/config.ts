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

/** All static routes (used by sitemap + generateStaticParams) */
export const staticRoutes = [
  "/",
  "/shopify-seo",
  "/ecommerce-seo",
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
  "/resources/library",
  "/resources/library/on-page-checklist",
  "/resources/library/roi-calculation-sheet",
  "/resources/library/template",
  "/resources/search-product-discovery",
  "/resources/shopify-on-page-checklist",
  "/resources/solutions",
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
  "/intent-matching-tool",
  "/premium-on-page-seo-checklist",
  "/client-dashboard",
  "/thank-you-payment",
  "/privacy-policy",
  "/terms-of-service",
];
