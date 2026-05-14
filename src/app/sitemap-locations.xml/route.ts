import {
  type UrlEntry,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";
import { BASE_URL, publicLocalizedUrl } from "@/lib/i18n/config";
import { getAllLocations } from "@/data/locations";

export const revalidate = 3600;

// UK English locations have a canonical public slug that differs from the
// internal route key (`/seo-agency-{city}` instead of `/location/{city}`).
// `publicLocalizedUrl("en", ...)` doesn't translate English slugs, so we map
// these explicitly here. Otherwise Google sees `/location/{city}` in the
// sitemap and follows a 301 → flagged as a non-canonical entry.
const enLocationPublicSlug: Record<string, string> = {
  london: "seo-agency-london",
  birmingham: "seo-agency-birmingham",
  manchester: "seo-agency-manchester",
  bristol: "seo-agency-bristol",
  edinburgh: "seo-agency-edinburgh",
  essex: "seo-agency-essex",
  newcastle: "seo-agency-newcastle",
  leeds: "seo-agency-leeds",
  surrey: "seo-agency-surrey",
  hertfordshire: "seo-agency-hertfordshire",
  oxford: "seo-agency-oxford",
  sheffield: "seo-agency-sheffield",
  liverpool: "seo-agency-liverpool",
  nottingham: "seo-agency-nottingham",
};

export function GET() {
  const lastmod = "2026-03-23T00:00:00.000Z";
  const entries: UrlEntry[] = [];

  const locations = getAllLocations();

  for (const loc of locations) {
    const enPublic = loc.locale === "en" ? enLocationPublicSlug[loc.slug] : undefined;
    const url = enPublic
      ? `${BASE_URL}/${enPublic}`
      : publicLocalizedUrl(loc.locale, `/location/${loc.slug}`);
    entries.push({
      loc: url,
      lastmod,
      changefreq: "monthly",
      priority: loc.tier === 1 ? "0.8" : "0.6",
    });
  }

  return sitemapResponse(wrapUrlset(entries));
}
