import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";
import { servicePageData, homeBreadcrumb } from "@/lib/i18n/translations/services";

export const revalidate = 3600;


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/woocommerce-seo");
}

export default async function WoocommerceSeoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = servicePageData["woocommerce-seo"][locale as Locale];
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          locale: locale as Locale,
          name: t.hero.heading,
          description: t.hero.subtitle,
          path: "/woocommerce-seo",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: homeBreadcrumb[locale as Locale], path: "/" },
          { name: t.hero.heading, path: "/woocommerce-seo" },
        ])}
      />
      <ServicePageTemplate locale={locale as Locale} {...t} />
    </>
  );
}
