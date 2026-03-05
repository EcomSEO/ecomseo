import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesCompetitorAnalysisT } from "@/lib/i18n/translations/guidesCompetitorAnalysis";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/competitor-analysis");
}

export default async function CompetitorAnalysisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesCompetitorAnalysisT[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...t,
        locale: locale as Locale,
        path: "/guides/competitor-analysis",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Competitor Analysis", path: "/guides/competitor-analysis" },
        ],
      }}
    />
  );
}
