import type { Metadata } from "next";
import {
  type Locale,
  BASE_URL,
  hreflangEntries,
  ogLocaleMap,
  publicLocalizedUrl,
} from "./config";
import { getDictionary } from "./getDictionary";

/**
 * Canonical overrides for pages that cannibalize each other.
 * Maps blog/weaker page → tool/academy/stronger page that should be the canonical.
 * This tells Google: "don't rank this page for this query, rank the other one instead."
 */
export const canonicalOverrides: Record<string, string> = {
  // Blog vs Tool: blog article about audits → tool page (tool is the transactional intent match)
  "/blog/how-to-make-ecommerce-seo-audit": "/tools/ecommerce-seo-audit",
  // Blog vs Academy: blog posts that overlap with academy lessons
  "/blog/ecommerce-homepage-seo": "/academy/homepage-seo-for-ecommerce",
  "/blog/ecommerce-seo-migration": "/academy/platform-migration-seo",
};

/** Build hreflang alternates + canonical for a given path (e.g. "/shopify-seo") */
export function generateAlternates(path: string, locale?: Locale) {
  const languages: Record<string, string> = {};

  for (const { hreflang, locale: loc } of hreflangEntries) {
    languages[hreflang] = publicLocalizedUrl(loc, path);
  }

  // Check for canonical override (cannibalization fix)
  const override = canonicalOverrides[path];
  const canonical = override
    ? publicLocalizedUrl(locale || "en", override)
    : locale
      ? publicLocalizedUrl(locale, path)
      : undefined;

  return {
    canonical: canonical as string | undefined,
    languages,
  };
}

/** Build complete Metadata object for a page */
export async function buildPageMetadata(
  locale: Locale,
  path: string,
  overrides?: Partial<Metadata>
): Promise<Metadata> {
  const dict = await getDictionary(locale);
  const key = path === "/" ? "/" : path;
  const entry = dict[key];

  if (!entry) {
    // fallback - shouldn't happen if dictionaries are complete
    return {
      alternates: generateAlternates(path, locale),
      ...overrides,
    };
  }

  const url = publicLocalizedUrl(locale, path);

  const alternates = generateAlternates(path, locale);

  return {
    title: entry.title,
    description: entry.description,
    alternates,
    openGraph: {
      title: entry.ogTitle || entry.title,
      description: entry.description,
      url,
      siteName: "EcomSEO",
      type: "website",
      locale: ogLocaleMap[locale],
      images: [
        {
          url: `${BASE_URL}/images/brand/og-image.png`,
          width: 1200,
          height: 630,
          alt: "EcomSEO - We do SEO for Ecommerce Brands",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ecomseo_co",
      title: entry.ogTitle || entry.title,
      description: entry.description,
      images: [`${BASE_URL}/images/brand/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
