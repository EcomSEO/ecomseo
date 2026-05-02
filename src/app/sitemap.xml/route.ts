import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/i18n/config";

export const revalidate = 3600;


/**
 * Sitemap index – points to child sitemaps grouped by content type.
 */

const childSitemaps = [
  "sitemap-pages.xml",
  "sitemap-academy.xml",
  "sitemap-blog.xml",
  "sitemap-tools.xml",
  "sitemap-resources.xml",
  "sitemap-cases.xml",
  "sitemap-team.xml",
  "sitemap-locations.xml",
];

export async function GET() {
  const lastmod = "2026-03-22T00:00:00.000Z"; // Fixed date — update when content changes

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const child of childSitemaps) {
    xml += `<sitemap>\n`;
    xml += `<loc>${BASE_URL}/${child}</loc>\n`;
    xml += `<lastmod>${lastmod}</lastmod>\n`;
    xml += `</sitemap>\n`;
  }

  xml += `</sitemapindex>\n`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
