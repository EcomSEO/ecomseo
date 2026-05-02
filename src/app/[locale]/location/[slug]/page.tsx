import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { BASE_URL, publicLocalizedUrl, locales } from "@/lib/i18n/config";
import { getLocationIncludingScheduled, getAllLocationsIncludingScheduled, isLive } from "@/data/locations";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/jsonLd";
import JsonLd from "@/components/JsonLd";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildLocationPageData } from "@/components/location/LocationPageTemplate";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export function generateStaticParams() {
  // Only generate pages for the locale each location belongs to
  return getAllLocationsIncludingScheduled().map((loc) => ({
    locale: loc.locale,
    slug: loc.slug,
  }));
}

/* ------------------------------------------------------------------ */
/*  Locale-aware metadata strings                                      */
/* ------------------------------------------------------------------ */

const metaStrings: Record<string, {
  title: (city: string) => string;
  description: (city: string) => string;
  ogLocale: string;
  serviceDesc: (city: string) => string;
  breadcrumbLabel: (city: string) => string;
  hreflangMap: Record<string, string>;
}> = {
  nl: {
    title: (city) => `SEO Bureau ${city} | Ecommerce SEO Expert | EcomSEO`,
    description: (city) => `Op zoek naar een SEO bureau in ${city}? EcomSEO is gespecialiseerd in ecommerce SEO. Bewezen resultaten. Data-gedreven aanpak. Gratis strategie gesprek.`,
    ogLocale: "nl_NL",
    serviceDesc: (city) => `Ecommerce SEO diensten in ${city}. Wij helpen webshops groeien met data-gedreven SEO.`,
    breadcrumbLabel: (city) => `SEO Bureau ${city}`,
    hreflangMap: { "nl-NL": "", "nl-BE": "" },
  },
  fr: {
    title: (city) => `Agence SEO ${city} | Expert SEO E-commerce | EcomSEO`,
    description: (city) => `Vous cherchez une agence SEO a ${city} ? EcomSEO est specialise en SEO e-commerce. Resultats prouves. Approche data-driven. Appel strategique gratuit.`,
    ogLocale: "fr_FR",
    serviceDesc: (city) => `Services SEO e-commerce a ${city}. Nous aidons les boutiques en ligne a se developper avec un SEO data-driven.`,
    breadcrumbLabel: (city) => `Agence SEO ${city}`,
    hreflangMap: { "fr-FR": "", "fr-BE": "" },
  },
  de: {
    title: (city) => `SEO Agentur ${city} | E-Commerce SEO Experte | EcomSEO`,
    description: (city) => `Sie suchen eine SEO Agentur in ${city}? EcomSEO ist spezialisiert auf E-Commerce SEO. Nachgewiesene Ergebnisse. Datengetriebener Ansatz. Kostenloses Strategiegespraech.`,
    ogLocale: "de_DE",
    serviceDesc: (city) => `E-Commerce SEO Dienstleistungen in ${city}. Wir helfen Onlineshops mit datengetriebenem SEO zu wachsen.`,
    breadcrumbLabel: (city) => `SEO Agentur ${city}`,
    hreflangMap: { "de-DE": "", "de-AT": "" },
  },
  es: {
    title: (city) => `Agencia SEO ${city} | Experto SEO E-commerce | EcomSEO`,
    description: (city) => `Buscas una agencia SEO en ${city}? EcomSEO esta especializado en SEO e-commerce. Resultados probados. Enfoque data-driven. Llamada estrategica gratuita.`,
    ogLocale: "es_ES",
    serviceDesc: (city) => `Servicios SEO e-commerce en ${city}. Ayudamos a tiendas online a crecer con SEO data-driven.`,
    breadcrumbLabel: (city) => `Agencia SEO ${city}`,
    hreflangMap: { "es-ES": "" },
  },
  it: {
    title: (city) => `Agenzia SEO ${city} | Esperto SEO E-commerce | EcomSEO`,
    description: (city) => `Cerchi un'agenzia SEO a ${city}? EcomSEO e specializzato in SEO e-commerce. Risultati provati. Approccio data-driven. Call strategica gratuita.`,
    ogLocale: "it_IT",
    serviceDesc: (city) => `Servizi SEO e-commerce a ${city}. Aiutiamo i negozi online a crescere con un SEO data-driven.`,
    breadcrumbLabel: (city) => `Agenzia SEO ${city}`,
    hreflangMap: { "it-IT": "" },
  },
  en: {
    title: (city) => `SEO Agency ${city} | E-commerce SEO Expert | EcomSEO`,
    description: (city) => `Looking for an SEO agency in ${city}? EcomSEO specialises in e-commerce SEO. Proven results. Data-driven approach. Free strategy call.`,
    ogLocale: "en_GB",
    serviceDesc: (city) => `E-commerce SEO services in ${city}. We help online stores grow with data-driven SEO.`,
    breadcrumbLabel: (city) => `SEO Agency ${city}`,
    hreflangMap: { "en-GB": "", "x-default": "" },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = getLocationIncludingScheduled(slug);
  if (!loc) return {};

  // Validate locale matches the location's locale
  if (loc.locale !== locale) return {};

  const l = locale as Locale;
  const m = metaStrings[l] || metaStrings.nl;
  const url = publicLocalizedUrl(l, `/location/${slug}`);
  const title = m.title(loc.city);
  const description = m.description(loc.city);
  const live = isLive(loc);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        Object.keys(m.hreflangMap).map((lang) => [lang, url])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "EcomSEO",
      type: "website",
      locale: m.ogLocale,
      images: [
        {
          url: `${BASE_URL}/images/brand/og-image.png`,
          width: 1200,
          height: 630,
          alt: m.breadcrumbLabel(loc.city),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ecomseo_co",
      title,
      description,
      images: [`${BASE_URL}/images/brand/og-image.png`],
    },
    // Before goLiveDate: noindex, follow (so crawlers don't surface unfinished pages)
    // After goLiveDate: fully indexed
    robots: live
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = getLocationIncludingScheduled(slug);
  if (!loc) notFound();

  // Validate locale matches the location's locale
  if (loc.locale !== locale) notFound();

  const l = locale as Locale;
  const m = metaStrings[l] || metaStrings.nl;
  const pageData = buildLocationPageData(loc, l);

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: "Home", path: "/" },
    { name: m.breadcrumbLabel(loc.city), path: `/location/${slug}` },
  ]);

  const service = serviceJsonLd({
    locale: l,
    name: m.breadcrumbLabel(loc.city),
    description: m.serviceDesc(loc.city),
    path: `/location/${slug}`,
  });

  const faqSchema = faqJsonLd(pageData.faqs.items);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faqSchema} />
      <ServicePageTemplate {...pageData} />
    </>
  );
}
