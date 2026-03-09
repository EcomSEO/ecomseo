import { locales, BASE_URL } from "@/lib/i18n/config";
import { caseStudies, getAllCaseSlugs } from "@/data/caseStudies";
import {
  type UrlEntry,
  localeUrl,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

/**
 * sitemap-cases.xml
 * Case studies hub + individual case pages with image metadata.
 */

export async function GET() {
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  // Cases index page
  addPages(entries, ["/cases"], { priority: 0.7, changefreq: "monthly", lastmod });

  // Individual case studies with images
  for (const slug of getAllCaseSlugs()) {
    const study = caseStudies.find((cs) => cs.slug === slug);
    const images: string[] = [];
    if (study?.heroImage) images.push(`${BASE_URL}${study.heroImage}`);
    if (study?.image1) images.push(`${BASE_URL}${study.image1}`);
    if (study?.image2) images.push(`${BASE_URL}${study.image2}`);

    for (const locale of locales) {
      entries.push({
        loc: localeUrl(locale, `/cases/${slug}`),
        path: `/cases/${slug}`,
        lastmod,
        changefreq: "monthly",
        priority: "0.7",
        ...(images.length > 0 ? { images } : {}),
      });
    }
  }

  return sitemapResponse(wrapUrlset(entries));
}
