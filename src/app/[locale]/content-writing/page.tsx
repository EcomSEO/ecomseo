import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";
import { servicePageData, homeBreadcrumb } from "@/lib/i18n/translations/services";
import { BASE_URL } from "@/lib/i18n/config";

export const revalidate = 3600;


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/content-writing");
}

export default async function ContentWritingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = servicePageData["content-writing"][locale as Locale];

  // Strip markdown link syntax from FAQ answers for schema (plain text only)
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
          path: "/content-writing",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: homeBreadcrumb[locale as Locale], path: "/" },
          { name: t.hero.heading, path: "/content-writing" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqItemsPlain)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${BASE_URL}/content-writing#webpage`,
          url: `${BASE_URL}/content-writing`,
          name: "SEO Content Writing Services for Ecommerce Stores | EcomSEO",
          description:
            "SEO content that ranks and converts. Product descriptions, category pages, blog posts, and buying guides in 6 languages.",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/content-writing#service` },
          provider: { "@id": `${BASE_URL}/#organization` },
          datePublished: "2024-06-01",
          dateModified: "2026-03-17",
          inLanguage: "en",
        }}
      />
      <ServicePageTemplate locale={locale as Locale} {...t} />
    </>
  );
}
