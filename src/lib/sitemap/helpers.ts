import { NextResponse } from "next/server";
import {
  locales,
  defaultLocale,
  BASE_URL,
  hreflangEntries,
} from "@/lib/i18n/config";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface UrlEntry {
  loc: string;
  path: string; // original path (e.g. "/shopify-seo") for hreflang generation
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

export function urlBlock(entry: UrlEntry): string {
  let block = `  <url>\n`;
  block += `    <loc>${escapeXml(entry.loc)}</loc>\n`;

  // hreflang alternates for every locale variant of this path
  for (const { hreflang, locale } of hreflangEntries) {
    const href = localeUrl(locale, entry.path);
    block += `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(href)}"/>\n`;
  }

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

export function addPages(
  entries: UrlEntry[],
  paths: string[],
  opts: { priority: number; changefreq: string; lastmod: string },
) {
  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        loc: localeUrl(locale, path),
        path,
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
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

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
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
