import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";
import ThinContentCheckerClient from "@/components/tools/ThinContentCheckerClient";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { thinContentCheckerT } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/tools/thin-content-checker");
}

export default async function ThinContentCheckerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = thinContentCheckerT[locale as Locale];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        {/* Hero + Tool */}
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-20">
          <div className="relative z-10 max-w-[1300px] mx-auto">
            <div className="flex flex-col items-center text-center gap-6 mb-10">
              <Badge text={t.badge} />
              <div className="space-y-4 max-w-[700px]">
                <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                  {t.heading}
                </h1>
                <p className="text-body text-lg max-w-[540px] mx-auto">
                  {t.subtitle}
                </p>
              </div>
            </div>

            <ThinContentCheckerClient t={t} />
          </div>

          {/* Glow */}
          <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none">
            <GlowEffect
              color="rgba(123, 45, 233, 0.4)"
              duration={8}
              blurRadius={40}
              borderRadius={500}
            />
          </div>
        </section>

        {/* Features */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[900px] mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              {t.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 rounded-xl border border-border bg-bg-card"
                >
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-body-strong">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[26px] md:text-[32px] font-medium text-heading text-center mb-12">
              {t.howItWorksTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.howItWorksSteps.map((step, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-medium">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-medium text-heading">{step.title}</h3>
                  <p className="text-sm text-body">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-[26px] md:text-[32px] font-medium text-heading text-center mb-12">
              {t.faqTitle}
            </h2>
            <div className="space-y-4">
              {t.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border bg-bg-card p-5 space-y-2">
                  <h3 className="text-sm font-medium text-heading">{faq.q}</h3>
                  <p className="text-sm text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[600px] mx-auto text-center space-y-6">
            <h2 className="text-[26px] md:text-[32px] font-medium text-heading">{t.ctaBottom}</h2>
            <p className="text-body">{t.ctaBottomDesc}</p>
            <LocaleLink
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              {t.ctaBottomButton}
            </LocaleLink>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
