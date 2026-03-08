import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import LocaleLink from "@/components/ui/LocaleLink";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { academyT, type AcademyCluster } from "@/lib/i18n/translations/academy";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/academy");
}

const difficultyColors: Record<AcademyCluster["difficulty"], string> = {
  beginner: "bg-green-500/15 text-green-400 border-green-500/20",
  intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  advanced: "bg-red-500/15 text-red-400 border-red-500/20",
  all: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

const clusterIcons = [
  // 1. How Search Actually Works - magnifying glass
  <svg key="search" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  // 2. Finding Keywords That Drive Revenue - target
  <svg key="target" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  // 3. On-Page SEO That Sells - document
  <svg key="doc" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
  // 4. Technical SEO - gear/settings
  <svg key="tech" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
  // 5. Content That Builds Authority - pen tool
  <svg key="pen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  // 6. Link Building - link
  <svg key="link" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  // 7. Measuring What Matters - bar chart
  <svg key="chart" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>,
  // 8. SEO by Platform - layers
  <svg key="layers" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22.54 12.43-1.96-.89-8.58 3.91a2 2 0 0 1-1.66 0l-8.58-3.9-1.96.89a1 1 0 0 0 0 1.83l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/></svg>,
  // 9. Advanced Ecommerce SEO - zap
  <svg key="zap" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>,
  // 10. Industry Playbooks - briefcase
  <svg key="brief" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>,
];

export default async function AcademyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = academyT[l];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(l, [
        { name: "Home", path: "/" },
        { name: t.badge, path: "/academy" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="w-full px-5 md:px-16 pt-[120px] md:pt-[160px] pb-10">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-6">
            <Badge text={t.badge} />
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
              {t.heading}
            </h1>
            <p className="text-body text-lg max-w-[640px]">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="w-full px-5 md:px-16 pb-16">
          <div className="mx-auto max-w-[720px]">
            <p className="text-body text-base leading-relaxed">
              {t.introText}
            </p>
          </div>
        </section>

        {/* Cluster Cards */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] flex flex-col gap-6">
            {t.clusters.map((cluster, i) => (
              <div
                key={cluster.title}
                className="rounded-2xl bg-bg-card border border-border p-6 md:p-8 hover:border-border-strong transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left: number + icon + meta */}
                  <div className="flex md:flex-col items-start gap-4 md:w-[180px] shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-accent">
                      {clusterIcons[i]}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${difficultyColors[cluster.difficulty]}`}>
                        {t.difficultyLabels[cluster.difficulty]}
                      </span>
                      <span className="text-body text-xs">
                        {cluster.topics.length} {t.topicsCount}
                      </span>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="flex-1">
                    <h2 className="text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-heading mb-3">
                      {cluster.title}
                    </h2>
                    <p className="text-body text-sm leading-relaxed mb-5">
                      {cluster.description}
                    </p>

                    {/* Lessons */}
                    <div className="mb-1">
                      <p className="text-heading text-xs font-medium uppercase tracking-wider mb-3">
                        {t.whatYouLearn}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {cluster.topics.map((topic, j) => (
                          <LocaleLink
                            key={typeof topic === "string" ? topic : topic.href}
                            href={typeof topic === "string" ? "/academy" : topic.href}
                            className="flex items-center gap-3 group rounded-lg border border-transparent hover:border-border hover:bg-white/[0.03] px-3 py-2.5 -mx-3 transition-all"
                          >
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/10 text-accent text-xs font-medium shrink-0">
                              {j + 1}
                            </span>
                            <span className="text-body text-sm group-hover:text-heading transition-colors flex-1">
                              {typeof topic === "string" ? topic : topic.label}
                            </span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-body/0 group-hover:text-accent shrink-0 transition-all opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                            >
                              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="m12 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </LocaleLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[800px] rounded-2xl bg-bg-card border border-border p-8 md:p-12 flex flex-col items-center text-center gap-6">
            <h2 className="text-[24px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[600px]">
              {t.ctaHeading}
            </h2>
            <p className="text-body text-base leading-relaxed max-w-[480px]">
              {t.ctaDesc}
            </p>
            <LocaleLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors"
            >
              {t.ctaButton}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </LocaleLink>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
