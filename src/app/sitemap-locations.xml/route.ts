import {
  type UrlEntry,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";
import { publicLocalizedUrl } from "@/lib/i18n/config";
import { getAllLocations } from "@/data/locations";

export const revalidate = 3600;

export function GET() {
  const lastmod = "2026-03-23T00:00:00.000Z";
  const entries: UrlEntry[] = [];

  const locations = getAllLocations();

  for (const loc of locations) {
    entries.push({
      loc: publicLocalizedUrl(loc.locale, `/location/${loc.slug}`),
      lastmod,
      changefreq: "monthly",
      priority: loc.tier === 1 ? "0.8" : "0.6",
    });
  }

  return sitemapResponse(wrapUrlset(entries));
}
