import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { BASE_URL } from "@/lib/i18n/config";
import { generateAlternates } from "@/lib/i18n/metadata";
import { allTopics, getTopicBySlug, getAdjacentTopics } from "@/lib/academy";
import AcademyPageTemplate from "@/components/academy/AcademyPageTemplate";
import type { AcademySection, AcademyNav } from "@/components/academy/AcademyPageTemplate";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};

  const l = locale as Locale;
  const t = topic.content[l];
  const url = `${BASE_URL}/${locale}/academy/${slug}`;

  return {
    title: `${t.heading} — EcomSEO Academy | EcomSEO`,
    description: t.intro.slice(0, 160),
    alternates: generateAlternates(`/academy/${slug}`),
    openGraph: {
      title: `${t.heading} — EcomSEO Academy`,
      description: t.intro.slice(0, 160),
      url,
      siteName: "EcomSEO",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.heading} — EcomSEO Academy`,
      description: t.intro.slice(0, 160),
    },
  };
}

export default async function AcademyTopicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const l = locale as Locale;
  const t = topic.content[l];

  const sections: AcademySection[] = t.sections.map((s) => ({
    id: s.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    title: s.title,
    blocks: [
      ...s.content
        .split("\n\n")
        .filter(Boolean)
        .map((para) => ({ type: "p" as const, text: para.trim() })),
      ...(s.items ? [{ type: "checklist" as const, items: s.items }] : []),
      ...(s.tip ? [{ type: "tip" as const, text: s.tip }] : []),
    ],
  }));

  const adjacent = getAdjacentTopics(slug);
  const nav: AcademyNav = {
    prev: adjacent.prev
      ? {
          href: adjacent.prev.href,
          category: adjacent.prev.category,
          title: adjacent.prev.title,
        }
      : undefined,
    next: adjacent.next
      ? {
          href: adjacent.next.href,
          category: adjacent.next.category,
          title: adjacent.next.title,
        }
      : undefined,
  };

  const clusterNames: Record<number, string> = {
    1: "Search Fundamentals",
    2: "Keyword Research",
    3: "On-Page SEO",
    4: "Technical SEO",
    5: "Content & Authority",
    6: "Link Building",
    7: "Measuring Results",
    8: "SEO by Platform",
    9: "Advanced SEO",
    10: "Industry Playbooks",
  };

  return (
    <AcademyPageTemplate
      data={{
        locale: l,
        path: `/academy/${slug}`,
        badge: t.badge,
        heading: t.heading,
        intro: t.intro,
        readTime: t.readTime,
        sections,
        nav,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Academy", path: "/academy" },
          {
            name: clusterNames[topic.cluster] || "Academy",
            path: "/academy",
          },
          { name: t.heading, path: `/academy/${slug}` },
        ],
      }}
    />
  );
}
