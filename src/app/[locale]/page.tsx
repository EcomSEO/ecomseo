import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { faqJsonLd } from "@/lib/jsonLd";
import { faqItems } from "@/data/faqData";
import JsonLd from "@/components/JsonLd";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import PartnerVoices from "@/components/sections/PartnerVoices";
import AboutUs from "@/components/sections/AboutUs";
import Results from "@/components/sections/Results";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Comparison from "@/components/sections/Comparison";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/");
}

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <Results />
        <PartnerVoices />
        <Comparison />
        <AboutUs />
        <Services />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
