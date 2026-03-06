import type { MetadataRoute } from "next";
import {
  locales,
  defaultLocale,
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

/** Build public URL for a locale + path. Default locale → root, others → /{locale} prefix. */
function localeUrl(locale: string, path: string): string {
  const cleanPath = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return `${BASE_URL}${cleanPath || "/"}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

function buildAlternates(path: string): { languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const { hreflang, locale } of hreflangEntries) {
    languages[hreflang] = localeUrl(locale, path);
  }
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes
  const filteredRoutes = staticRoutes.filter((r) => !excludedRoutes.has(r));

  const guideRoutes = new Set([
    "/guides", "/guides/fundamentals", "/guides/fundamentals-2",
    "/guides/analytics-tracking", "/guides/beginner-to-hero",
    "/guides/keyword-research", "/guides/competitor-analysis",
    "/guides/technical-analysis", "/guides/on-page-audit",
    "/guides/off-page-audit", "/guides/task-planning",
    "/guides/link-building-tactics", "/guides/topical-authority",
    "/guides/ranking-chatgpt", "/guides/serp-domination",
  ]);

  for (const route of filteredRoutes) {
    for (const locale of locales) {
      const isGuide = guideRoutes.has(route);
      entries.push({
        url: localeUrl(locale, route),
        lastModified: new Date(),
        changeFrequency: route === "/" || isGuide ? "weekly" : "monthly",
        priority: route === "/" ? 1.0 : isGuide ? 0.9 : 0.8,
        alternates: buildAlternates(route),
      });
    }
  }

  // Dynamic case study routes
  const caseSlugs = getAllCaseSlugs();
  for (const slug of caseSlugs) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, `/cases/${slug}`),
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
        url: localeUrl(locale, `/team/${slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: buildAlternates(`/team/${slug}`),
      });
    }
  }

  return entries;
}
