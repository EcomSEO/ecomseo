import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";
import LocaleLink from "@/components/ui/LocaleLink";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { seoToolsHubT } from "@/lib/i18n/translations/seoTools";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/tools");
}

function ToolCard({
  title,
  desc,
  href,
  icon,
}: {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <LocaleLink
      href={href}
      className="group relative rounded-2xl border border-border bg-bg-card hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-300 p-8 flex flex-col gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-heading group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-body leading-relaxed">{desc}</p>
      </div>
      <div className="flex items-center gap-1 text-sm text-accent mt-auto pt-2">
        <span>Try it free</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </LocaleLink>
  );
}

export default async function ToolsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = seoToolsHubT[locale as Locale];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-20">
          <div className="relative z-10 max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-6 mb-16">
              <Badge text={t.badge} />
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
                {t.heading}
              </h1>
              <p className="text-body text-lg max-w-[540px]">
                {t.subtitle}
              </p>
            </div>

            {/* Tool Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              <ToolCard
                title={t.shopifyAudit.title}
                desc={t.shopifyAudit.desc}
                href="/tools/shopify-seo-audit"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 22V4.5C7 3.67 7.67 3 8.5 3h7c.83 0 1.5.67 1.5 1.5V22l-5-3-5 3z" />
                    <path d="M12 8v5M10 11h4" />
                  </svg>
                }
              />
              <ToolCard
                title={t.ecommerceAudit.title}
                desc={t.ecommerceAudit.desc}
                href="/tools/ecommerce-seo-audit"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                  </svg>
                }
              />
              <ToolCard
                title={t.serpSimulator.title}
                desc={t.serpSimulator.desc}
                href="/tools/serp-simulator"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                }
              />
            </div>

            {/* Coming soon */}
            <p className="text-center text-white/20 text-sm mt-12">{t.comingSoon}</p>
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
