import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import AuditClient from "./AuditClient";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const base = await buildPageMetadata(locale as Locale, "/demo");
  return {
    ...base,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  };
}

const demoServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Free Ecommerce SEO Demo Call",
  serviceType: "SEO consulting",
  description:
    "A 30-minute demo call with Fabian. He opens your store in Semrush, shows where you're losing organic revenue, and walks you through fixes across Google and AI engines.",
  provider: {
    "@type": "Organization",
    name: "EcomSEO",
    url: "https://ecomseo.co",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    eligibleCustomerType: "https://schema.org/Business",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Ecommerce brands generating €100,000+ monthly revenue",
  },
};

export default function DemoPage() {
  return (
    <>
      <JsonLd data={demoServiceJsonLd} />
      <Navigation />
      <main>
        <AuditClient />
      </main>
      <Footer />
    </>
  );
}
