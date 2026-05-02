import { NextResponse } from "next/server";
import {
  locales,
  defaultLocale,
  BASE_URL,
  publicLocalizedUrl,
  hreflangEntries,
} from "@/lib/i18n/config";
import { getEnglishSlug } from "@/lib/i18n/slugs";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  images?: string[];
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function localeUrl(locale: string, path: string): string {
  const cleanPath = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return `${BASE_URL}${cleanPath || "/"}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Derive the English canonical path from a localized URL.
 * e.g. "https://ecomseo.co/de/linkaufbau" → "/link-building"
 */
function extractEnglishPath(loc: string): string | null {
  try {
    const url = new URL(loc);
    const pathname = url.pathname;
    // Detect locale prefix
    const localeMatch = locales.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    );
    if (localeMatch && localeMatch !== defaultLocale) {
      const pathAfterLocale = pathname.slice(`/${localeMatch}`.length) || "/";
      return getEnglishSlug(pathAfterLocale, localeMatch);
    }
    // Default locale (en) — path IS the English path
    return pathname === "/" ? "/" : pathname;
  } catch {
    return null;
  }
}

export function urlBlock(entry: UrlEntry): string {
  let block = `<url>\n`;
  block += `<loc>${escapeXml(entry.loc)}</loc>\n`;

  // Add hreflang alternates (xhtml:link) for multilingual pages
  const englishPath = extractEnglishPath(entry.loc);
  if (englishPath) {
    for (const { hreflang, locale: loc } of hreflangEntries) {
      const altUrl = publicLocalizedUrl(loc, englishPath);
      block += `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(altUrl)}"/>\n`;
    }
  }

  if (entry.images?.length) {
    for (const img of entry.images) {
      block += `<image:image>\n`;
      block += `<image:loc>${escapeXml(img)}</image:loc>\n`;
      block += `</image:image>\n`;
    }
  }
  block += `<lastmod>${entry.lastmod}</lastmod>\n`;
  block += `<changefreq>${entry.changefreq}</changefreq>\n`;
  block += `<priority>${entry.priority}</priority>\n`;
  block += `</url>\n`;
  return block;
}

export function addPages(
  entries: UrlEntry[],
  paths: string[],
  opts: { priority: number; changefreq: string; lastmod: string },
) {
  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        loc: publicLocalizedUrl(locale, path),
        lastmod: opts.lastmod,
        changefreq: opts.changefreq,
        priority: opts.priority.toFixed(1),
      });
    }
  }
}

/* ------------------------------------------------------------------ */
/*  XML wrappers                                                       */
/* ------------------------------------------------------------------ */

export function wrapUrlset(entries: UrlEntry[]): string {
  const hasImages = entries.some((e) => e.images && e.images.length > 0);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  let ns = `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"`;
  if (hasImages) {
    ns += ` xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`;
  }
  xml += `<urlset ${ns}>\n`;

  for (const entry of entries) {
    xml += urlBlock(entry);
  }

  xml += `</urlset>\n`;
  return xml;
}

export function sitemapResponse(xml: string): NextResponse {
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
