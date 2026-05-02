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
  return buildPageMetadata(locale as Locale, "/shopify-seo");
}

export default async function ShopifySeoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = servicePageData["shopify-seo"][locale as Locale];

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
          name: "Shopify SEO Services",
          description:
            "Specialized SEO services for Shopify and Shopify Plus stores including technical audits, theme speed optimization, collection architecture, keyword research, content strategy, and link building.",
          path: "/shopify-seo",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: homeBreadcrumb[locale as Locale], path: "/" },
          { name: "Shopify SEO", path: "/shopify-seo" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqItemsPlain)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${BASE_URL}/shopify-seo#webpage`,
          url: `${BASE_URL}/shopify-seo`,
          name: "Shopify SEO Agency | Audit, Fix & Scale Organic Revenue | EcomSEO",
          description:
            "Specialized Shopify SEO services. Technical audits, theme speed optimization, collection architecture, and link building for Shopify and Shopify Plus stores.",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/shopify-seo#service` },
          provider: { "@id": `${BASE_URL}/#organization` },
          datePublished: "2024-01-15",
          dateModified: "2026-03-16",
          inLanguage: "en",
        }}
      />
      <ServicePageTemplate locale={locale as Locale} {...t} />
    </>
  );
}
