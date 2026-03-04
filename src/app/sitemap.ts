import type { MetadataRoute } from "next";
import {
  locales,
  BASE_URL,
  hreflangEntries,
  staticRoutes,
} from "@/lib/i18n/config";
import { getAllCaseSlugs } from "@/data/caseStudies";

/** Pages excluded from the sitemap (noindex / private) */
const excludedRoutes = new Set(["/thank-you-payment", "/client-dashboard"]);

/** Team member slugs (kept here to avoid importing from a page component) */
const teamSlugs = [
  "fabian-van-til",
  "martinijan-trajkovski",
  "dimitar-georgiev",
  "gjorgi-jovev",
];

function buildAlternates(path: string): { languages: Record<string, string> } {
  const cleanPath = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const { hreflang, locale } of hreflangEntries) {
    languages[hreflang] = `${BASE_URL}/${locale}${cleanPath}`;
  }
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes
  const filteredRoutes = staticRoutes.filter((r) => !excludedRoutes.has(r));

  for (const route of filteredRoutes) {
    for (const locale of locales) {
      const path = route === "/" ? "" : route;
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1.0 : 0.8,
        alternates: buildAlternates(route),
      });
    }
  }

  // Dynamic case study routes
  const caseSlugs = getAllCaseSlugs();
  for (const slug of caseSlugs) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/cases/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: buildAlternates(`/cases/${slug}`),
      });
    }
  }

  // Dynamic team member routes
  for (const slug of teamSlugs) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/team/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: buildAlternates(`/team/${slug}`),
      });
    }
  }

  return entries;
}
