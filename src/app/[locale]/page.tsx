import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import JsonLd from "@/components/JsonLd";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutUs from "@/components/sections/AboutUs";
import Results from "@/components/sections/Results";
import MidCTA from "@/components/sections/MidCTA";
import Services from "@/components/sections/Services";
import ServiceDetails from "@/components/sections/ServiceDetails";
import ToolsSoftware from "@/components/sections/ToolsSoftware";
import Comparison from "@/components/sections/Comparison";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import DataFeeds from "@/components/sections/DataFeeds";
import FreeTools from "@/components/sections/FreeTools";
import FAQ from "@/components/sections/FAQ";
import Certifications from "@/components/sections/Certifications";
import KnowledgeHub from "@/components/sections/KnowledgeHub";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const revalidate = 3600;


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/");
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
        ])}
      />
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <AboutUs />
        <Results />
        <MidCTA />
        <Services />
        <ServiceDetails />
        <ToolsSoftware />
        <Comparison />
        <Industries />
        <Process />
        <DataFeeds />
        <FreeTools />
        <FAQ />
        <Certifications />
        <KnowledgeHub />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
