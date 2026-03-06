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
              <ToolCard
                title={t.schemaGenerator.title}
                desc={t.schemaGenerator.desc}
                href="/tools/schema-generator"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
                  </svg>
                }
              />
              <ToolCard
                title={t.ogChecker.title}
                desc={t.ogChecker.desc}
                href="/tools/og-checker"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                    <path d="M7 8h4M7 11h6" />
                  </svg>
                }
              />
              <ToolCard
                title={t.robotsAnalyzer.title}
                desc={t.robotsAnalyzer.desc}
                href="/tools/robots-txt-analyzer"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="3" />
                    <path d="M8 16h.01M16 16h.01M12 16h.01" />
                  </svg>
                }
              />
              <ToolCard
                title={t.metaTagsChecker.title}
                desc={t.metaTagsChecker.desc}
                href="/tools/meta-tags-checker"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7V4h16v3" />
                    <path d="M9 20h6" />
                    <path d="M12 4v16" />
                  </svg>
                }
              />
              <ToolCard
                title={t.headingChecker.title}
                desc={t.headingChecker.desc}
                href="/tools/heading-checker"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h8M4 18V6M12 18V6" />
                    <path d="M17 12l3-3 3 3M20 9v9" />
                  </svg>
                }
              />
              <ToolCard
                title={t.canonicalChecker.title}
                desc={t.canonicalChecker.desc}
                href="/tools/canonical-checker"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                  </svg>
                }
              />
              <ToolCard
                title={t.indexabilityChecker.title}
                desc={t.indexabilityChecker.desc}
                href="/tools/indexability-checker"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                }
              />
              <ToolCard
                title={t.pageTypeClassifier.title}
                desc={t.pageTypeClassifier.desc}
                href="/tools/page-type-classifier"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <path d="M17.5 14v6M14.5 17h6" />
                  </svg>
                }
              />
              <ToolCard
                title={t.sitemapComparison.title}
                desc={t.sitemapComparison.desc}
                href="/tools/sitemap-comparison"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                }
              />
              <ToolCard
                title={t.thinContentChecker.title}
                desc={t.thinContentChecker.desc}
                href="/tools/thin-content-checker"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                }
              />
              <ToolCard
                title={t.coreWebVitals.title}
                desc={t.coreWebVitals.desc}
                href="/tools/core-web-vitals"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                }
              />
              <ToolCard
                title={t.schemaValidator.title}
                desc={t.schemaValidator.desc}
                href="/tools/schema-validator"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path d="M9 14l2 2 4-4" />
                  </svg>
                }
              />
              <ToolCard
                title={t.redirectChecker.title}
                desc={t.redirectChecker.desc}
                href="/tools/redirect-checker"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                    <path d="M15 18l6-6-6-6" />
                    <path d="M3 12h12" />
                  </svg>
                }
              />
              <ToolCard
                title={t.hreflangValidator.title}
                desc={t.hreflangValidator.desc}
                href="/tools/hreflang-validator"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
                  </svg>
                }
              />
              <ToolCard
                title={t.imageAuditor.title}
                desc={t.imageAuditor.desc}
                href="/tools/image-auditor"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                }
              />
              <ToolCard
                title={t.duplicateContent.title}
                desc={t.duplicateContent.desc}
                href="/tools/duplicate-content"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="2" width="13" height="13" rx="2" />
                    <path d="M16 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2" />
                  </svg>
                }
              />
              <ToolCard
                title={t.shoppingFeedValidator.title}
                desc={t.shoppingFeedValidator.desc}
                href="/tools/shopping-feed-validator"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <path d="M3 6h18M16 10a4 4 0 01-8 0" />
                  </svg>
                }
              />
              <ToolCard
                title={t.internalLinkAnalyzer.title}
                desc={t.internalLinkAnalyzer.desc}
                href="/tools/internal-link-analyzer"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><circle cx="18" cy="6" r="3" />
                    <path d="M8.6 7.4L15.4 16.6M8.6 4.6L15.4 4.6" />
                  </svg>
                }
              />
              <ToolCard
                title={t.siteSpeedComparison.title}
                desc={t.siteSpeedComparison.desc}
                href="/tools/site-speed-comparison"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <circle cx="12" cy="12" r="4" />
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
