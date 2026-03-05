import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guideAnalyticsTrackingT } from "@/lib/i18n/translations/guidesAnalyticsTracking";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/analytics-tracking");
}

export default async function AnalyticsTrackingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guideAnalyticsTrackingT[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...t,
        locale: locale as Locale,
        path: "/guides/analytics-tracking",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Analytics & Tracking", path: "/guides/analytics-tracking" },
        ],
      }}
    />
  );
}
