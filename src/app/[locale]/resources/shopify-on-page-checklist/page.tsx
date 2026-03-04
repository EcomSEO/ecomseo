import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import GlowEffect from "@/components/ui/GlowEffect";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { shopifyChecklistT } from "@/lib/i18n/translations/resources/shopify-checklist";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/resources/shopify-on-page-checklist");
}


export default async function ShopifyOnPageChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = shopifyChecklistT[locale as Locale];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Shopify On-Page Checklist", path: "/resources/shopify-on-page-checklist" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-[250px]">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-2">
            {/* Social proof */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-white-10 border-2 border-bg"
                  />
                ))}
              </div>
              <span className="text-body text-sm">
                {t.socialProof}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[796px]">
              {t.heading}
            </h1>
            <p className="text-body text-base max-w-[619px] mt-4">
              {t.subtitle}
            </p>

            {/* Pricing cards */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              {/* Card 1 */}
              <div className="rounded-2xl border border-border bg-bg-card p-8 max-w-[340px] flex flex-col gap-4">
                <h3 className="text-heading font-semibold text-lg">
                  {t.card1Title}
                </h3>
                <p className="text-body text-sm">{t.includes}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-heading font-bold text-3xl font-[family-name:var(--font-figtree)]">
                    $12
                  </span>
                  <span className="text-body text-sm line-through">$17</span>
                  <span className="text-body text-xs">{t.oneTime}</span>
                </div>
                <ul className="space-y-2 mt-2">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-body text-sm"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(193, 100, 230)"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors"
                >
                  {t.getStarted}
                </a>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-border bg-bg-card p-8 max-w-[340px] flex flex-col gap-4">
                <h3 className="text-heading font-semibold text-lg">
                  {t.card2Title}
                </h3>
                <p className="text-body text-sm">{t.includes}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-heading font-bold text-3xl font-[family-name:var(--font-figtree)]">
                    $250
                  </span>
                  <span className="text-body text-xs">{t.consulting1h}</span>
                </div>
                <ul className="space-y-2 mt-2">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-body text-sm"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(193, 100, 230)"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border text-heading hover:border-accent font-medium text-sm transition-colors"
                >
                  {t.getStarted}
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-heading text-bg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {t.getChecklist}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
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
        <Footer />
      </main>
    </>
  );
}
