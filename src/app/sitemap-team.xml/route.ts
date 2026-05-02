import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

export const revalidate = 3600;

/**
 * sitemap-team.xml
 * Team index + individual team member pages.
 */

const teamSlugs = [
  "fabian-van-til",
  "martinijan-trajkovski",
  "dimitar-georgiev",
  "gjorgi-jovev",
];

export async function GET() {
  const entries: UrlEntry[] = [];

  // Team index
  addPages(entries, ["/team"], { priority: 0.6, changefreq: "monthly", lastmod: "2026-04-07T00:00:00.000Z" });

  // Individual team members
  for (const slug of teamSlugs) {
    addPages(entries, [`/team/${slug}`], { priority: 0.6, changefreq: "monthly", lastmod: "2026-04-07T00:00:00.000Z" });
  }

  return sitemapResponse(wrapUrlset(entries));
}
