import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";
import SeoAuditClient from "@/components/tools/SeoAuditClient";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { ecommerceSeoAuditT } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/tools/ecommerce-seo-audit");
}

export default async function EcommerceSeoAuditPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = ecommerceSeoAuditT[locale as Locale];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        {/* Hero + Tool */}
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-20">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
            <Badge text={t.badge} />
            <div className="space-y-4 max-w-[700px]">
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                {t.heading}
              </h1>
              <p className="text-body text-lg max-w-[540px] mx-auto">
                {t.subtitle}
              </p>
            </div>

            <SeoAuditClient t={t} />
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

        {/* Related tools */}
        <section className="px-5 md:px-16 py-16 border-t border-border">
          <div className="max-w-[700px] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Also try</p>
            <LocaleLink
              href="/tools/shopify-seo-audit"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary-hover transition-colors"
            >
              Shopify SEO Audit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LocaleLink>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
