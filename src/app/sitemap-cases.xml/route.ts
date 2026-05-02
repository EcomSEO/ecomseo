import { locales, BASE_URL, publicLocalizedUrl } from "@/lib/i18n/config";
import { caseStudies, getAllCaseSlugs } from "@/data/caseStudies";
import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

export const revalidate = 3600;

/**
 * sitemap-cases.xml
 * Case studies hub + individual case pages with image metadata.
 */

export async function GET() {
  const entries: UrlEntry[] = [];

  // Cases index page
  addPages(entries, ["/cases"], { priority: 0.7, changefreq: "monthly", lastmod: "2026-03-10T00:00:00.000Z" });

  // Individual case studies with images — use each study's real date
  for (const slug of getAllCaseSlugs()) {
    const study = caseStudies.find((cs) => cs.slug === slug);
    const images: string[] = [];
    if (study?.heroImage) images.push(`${BASE_URL}${study.heroImage}`);
    if (study?.image1) images.push(`${BASE_URL}${study.image1}`);
    if (study?.image2) images.push(`${BASE_URL}${study.image2}`);

    // Parse real date from case study data
    const dateStr = study?.date || "2026-03-10";
    const parsed = new Date(dateStr);
    const lastmod = !isNaN(parsed.getTime())
      ? parsed.toISOString().split("T")[0] + "T00:00:00.000Z"
      : "2026-03-10T00:00:00.000Z";

    for (const locale of locales) {
      entries.push({
        loc: publicLocalizedUrl(locale, `/cases/${slug}`),
        lastmod,
        changefreq: "monthly",
        priority: "0.7",
        ...(images.length > 0 ? { images } : {}),
      });
    }
  }

  return sitemapResponse(wrapUrlset(entries));
}
