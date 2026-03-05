import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesBeginnerToHeroT } from "@/lib/i18n/translations/guidesBeginnerToHero";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/beginner-to-hero");
}

export default async function BeginnerToHeroPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesBeginnerToHeroT[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...t,
        locale: locale as Locale,
        path: "/guides/beginner-to-hero",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Beginner to Hero", path: "/guides/beginner-to-hero" },
        ],
      }}
    />
  );
}
