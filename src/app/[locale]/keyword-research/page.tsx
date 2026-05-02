import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/i18n/config";
import { servicePageData, homeBreadcrumb } from "@/lib/i18n/translations/services";

export const revalidate = 3600;


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/keyword-research");
}

export default async function KeywordResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = servicePageData["keyword-research"][locale as Locale];
  const faqItemsPlain = t.faqs.items.map((item) => ({
    question: item.question,
    answer: item.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
  }));
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          locale: locale as Locale,
          name: t.hero.heading,
          description: t.hero.subtitle,
          path: "/keyword-research",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: homeBreadcrumb[locale as Locale], path: "/" },
          { name: t.hero.heading, path: "/keyword-research" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqItemsPlain)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${BASE_URL}/keyword-research#webpage`,
          url: `${BASE_URL}/keyword-research`,
          name: "Keyword Research Services for Ecommerce — Revenue-First | EcomSEO",
          description: "We map 12,000+ keywords to buyer intent and your product catalog. 340% avg. traffic growth.",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/keyword-research#service` },
          provider: { "@id": `${BASE_URL}/#organization` },
          datePublished: "2024-03-01",
          dateModified: "2026-03-17",
          inLanguage: "en",
        }}
      />
      <ServicePageTemplate locale={locale as Locale} {...t} />
    </>
  );
}
