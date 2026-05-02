import Image from "next/image";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/ui/GlowEffect";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { whyWeShareT } from "@/lib/i18n/translations/resources/why-we-share";

export const revalidate = 86400;


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/resources/why-we-share");
}


export default async function WhyWeSharePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = whyWeShareT[locale as Locale];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Why We Share", path: "/resources/why-we-share" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="relative w-full px-5 md:px-16 pt-[120px] md:pt-[160px] pb-20 overflow-hidden">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-6 relative z-10">
            <Badge text={t.hero.badge} />
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
              {t.hero.heading}
            </h1>
            <p className="text-body text-base md:text-lg max-w-[600px]">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                external
              >
                {t.hero.cta}
              </Button>
              <Button href="/#projects" variant="secondary">
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
          {/* Glow background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          </div>
        </section>

        {/* Transparency Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-6">
            <Badge text={t.transparency.badge} />
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
              {t.transparency.heading}
            </h2>
            <p className="text-body text-base md:text-lg max-w-[600px] leading-relaxed">
              {t.transparency.body}
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-8">
            <Badge text={t.process.badge} />
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
              {t.process.heading}
            </h2>
            <p className="text-body text-base md:text-lg max-w-[600px]">
              {t.process.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
              {t.process.values.map((value) => (
                <GlowEffect key={value.title} className="w-full">
                  <div className="p-6 md:p-8 flex flex-col gap-3 h-full">
                    <h3 className="text-heading font-medium text-lg">
                      {value.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </GlowEffect>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Ecom Understanding Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-8">
            <Badge text={t.ecom.badge} />
            <div className="rounded-2xl bg-bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full max-w-[900px]">
              <Image
                src="/images/framer/fabian-van-til-new.jpeg"
                alt="Fabian van Til"
                width={160}
                height={160}
                className="rounded-full shrink-0"
              />
              <div className="text-left flex flex-col gap-3">
                <h3 className="text-[24px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-heading">
                  {t.ecom.heading}
                </h3>
                <p className="text-body text-base leading-relaxed">
                  {t.ecom.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[800px] flex flex-col gap-6">
            <h2 className="text-[28px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-heading text-center mb-4">
              {t.faq.heading}
            </h2>
            {t.faq.items.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-bg-card border border-border p-6"
              >
                <h3 className="text-heading font-medium text-base mb-3">
                  {faq.question}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
