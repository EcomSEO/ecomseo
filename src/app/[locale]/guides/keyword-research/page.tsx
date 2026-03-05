import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesKeywordResearchT } from "@/lib/i18n/translations/guidesKeywordResearch";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/keyword-research");
}

export default async function KeywordResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesKeywordResearchT[locale as Locale];

  // Convert legacy section format to GuideSection blocks
  const sections: GuideSection[] = t.sections.map((s) => ({
    id: s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    title: s.title,
    blocks: [
      ...s.content.split("\n\n").filter(Boolean).map((para) => ({
        type: "p" as const,
        text: para.trim(),
      })),
      ...(s.items ? [{ type: "checklist" as const, items: s.items }] : []),
      ...(s.tip ? [{ type: "tip" as const, text: s.tip }] : []),
    ],
  }));

  const nav: GuideNav = {
    prev: { href: "/guides/beginner-to-hero", category: "Basics", title: t.navLabels.previous },
    next: { href: "/guides/competitor-analysis", category: "Research", title: t.navLabels.next },
  };

  return (
    <GuidePageTemplate
      data={{
        badge: t.badge,
        heading: t.heading,
        intro: t.intro,
        readTime: "10 min read",
        sections,
        nav,
        locale: locale as Locale,
        path: "/guides/keyword-research",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Keyword Research", path: "/guides/keyword-research" },
        ],
      }}
    />
  );
}
