import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/i18n/config";

/**
 * Sitemap index – points to child sitemaps grouped by content type.
 *
 * Structure inspired by getheyshape.com:
 * - One index file listing all child sitemaps
 * - Child sitemaps grouped by content type
 * - Each child contains all locale variants with hreflang alternates
 */

const childSitemaps = [
  "sitemap-pages.xml",
  "sitemap-academy.xml",
  "sitemap-blog.xml",
  "sitemap-tools.xml",
  "sitemap-resources.xml",
  "sitemap-cases.xml",
  "sitemap-team.xml",
];

export async function GET() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const child of childSitemaps) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${BASE_URL}/${child}</loc>\n`;
    xml += `  </sitemap>\n`;
  }

  xml += `</sitemapindex>\n`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
