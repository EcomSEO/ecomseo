import type { Metadata } from "next";
import {
  type Locale,
  BASE_URL,
  defaultLocale,
  hreflangEntries,
  ogLocaleMap,
} from "./config";
import { getDictionary } from "./getDictionary";

/** Build hreflang alternates for a given path (e.g. "/shopify-seo") */
export function generateAlternates(path: string) {
  const cleanPath = path === "/" ? "" : path;
  const languages: Record<string, string> = {};

  for (const { hreflang, locale } of hreflangEntries) {
    if (locale === defaultLocale) {
      // Default locale (en) → root URL, no /en/ prefix
      languages[hreflang] = `${BASE_URL}${cleanPath || "/"}`;
    } else {
      languages[hreflang] = `${BASE_URL}/${locale}${cleanPath}`;
    }
  }

  return {
    canonical: undefined as string | undefined,
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
    // fallback — shouldn't happen if dictionaries are complete
    return {
      alternates: generateAlternates(path),
      ...overrides,
    };
  }

  const cleanPath = path === "/" ? "" : path;

  // Default locale (en) → root URL; other locales → /{locale} prefix
  const url =
    locale === defaultLocale
      ? `${BASE_URL}${cleanPath || "/"}`
      : `${BASE_URL}/${locale}${cleanPath}`;

  const alternates = generateAlternates(path);
  alternates.canonical = url;

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
