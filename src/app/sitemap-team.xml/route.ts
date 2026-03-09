import {
  type UrlEntry,
  addPages,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";

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
  const lastmod = new Date().toISOString();
  const entries: UrlEntry[] = [];

  // Team index
  addPages(entries, ["/team"], { priority: 0.6, changefreq: "monthly", lastmod });

  // Individual team members
  for (const slug of teamSlugs) {
    addPages(entries, [`/team/${slug}`], { priority: 0.6, changefreq: "monthly", lastmod });
  }

  return sitemapResponse(wrapUrlset(entries));
}
