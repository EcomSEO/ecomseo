import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";
import LocaleLink from "@/components/ui/LocaleLink";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { intentMatchingToolT } from "@/lib/i18n/translations/intentMatchingTool";


import ToolPreviewSection from "@/components/tools/ToolPreviewSection";
import { getToolPreviewStrings } from "@/lib/tools/previewStrings";export const revalidate = 3600;


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/tools/intent-matching-tool");
}

export default async function IntentMatchingToolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = intentMatchingToolT[locale as Locale];

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

              {/* Stats */}
              <div className="flex items-center gap-8 text-sm text-body/60">
                <span>{t.statsUsers}</span>
                <span className="w-px h-4 bg-border" />
                <span>{t.statsRating}</span>
                <span className="w-px h-4 bg-border" />
                <span>{t.statsTime}</span>
              </div>
            </div>

            {/* Tool UI */}
            <div className="max-w-[800px] mx-auto rounded-2xl border border-border bg-bg-card p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-body text-sm mb-2">
                    {t.label}
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder={t.placeholder}
                      className="flex-1 px-4 py-3 rounded-xl bg-bg border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                    />
                    <button className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors shrink-0">
                      {t.analyze}
                    </button>
                  </div>
                </div>
                <div className="rounded-xl bg-bg border border-border p-6 min-h-[200px] flex items-center justify-center">
                  <p className="text-body text-sm">
                    {t.resultsPlaceholder}
                  </p>
                </div>
              </div>
            </div>
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
            <div className="grid md:grid-cols-3 gap-8">
              {t.howItWorksSteps.map((step, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto">
                    <span className="text-accent font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="text-base font-medium text-heading">{step.title}</h3>
                  <p className="text-sm text-body">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview: live-demo screenshot of the tool's results */}
        <ToolPreviewSection
          src="/images/tools/intent-matching-tool-preview.png"
          imgWidth={1280}
          imgHeight={3168}
          url="ecomseo.co/tools/intent-matching-tool"
          strings={getToolPreviewStrings(locale as Locale, t.heading)}
        />

        {/* FAQ */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-[26px] md:text-[32px] font-medium text-heading text-center mb-12">
              {t.faqTitle}
            </h2>
            <div className="space-y-4">
              {t.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border bg-bg-card p-6">
                  <h3 className="text-sm font-medium text-heading mb-2">{faq.q}</h3>
                  <p className="text-sm text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[600px] mx-auto text-center space-y-4">
            <h2 className="text-[22px] md:text-[28px] font-medium text-heading">
              {t.ctaBottom}
            </h2>
            <p className="text-sm text-body max-w-[480px] mx-auto">
              {t.ctaBottomDesc}
            </p>
            <LocaleLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors mt-2"
            >
              {t.ctaBottomButton}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LocaleLink>
          </div>
        </section>

        {/* Related tools */}
        <section className="px-5 md:px-16 py-16 border-t border-border">
          <div className="max-w-[700px] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Also try</p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <LocaleLink
                href="/tools/serp-simulator"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary-hover transition-colors"
              >
                SERP Simulator
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </LocaleLink>
              <LocaleLink
                href="/tools/meta-tags-checker"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary-hover transition-colors"
              >
                Meta Tags Checker
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </LocaleLink>
              <LocaleLink
                href="/tools/page-type-classifier"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary-hover transition-colors"
              >
                Page Type Classifier
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </LocaleLink>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
