import type { Metadata } from "next";
import { locales, type Locale, BASE_URL, ogLocaleMap } from "@/lib/i18n/config";
import { generateAlternates } from "@/lib/i18n/metadata";
import { organizationJsonLd } from "@/lib/jsonLd";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;

  return {
    metadataBase: new URL(BASE_URL),
    alternates: generateAlternates("/", loc),
    openGraph: {
      siteName: "EcomSEO",
      locale: ogLocaleMap[loc] || "en_GB",
    },
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      {children}
    </>
  );
}
