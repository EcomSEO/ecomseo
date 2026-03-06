import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesFundamentalsT } from "@/lib/i18n/translations/guidesFundamentals";
import { guidesSidebarT } from "@/lib/i18n/translations/guidesSidebar";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/fundamentals");
}

export default async function FundamentalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesFundamentalsT[locale as Locale];
  const sidebar = guidesSidebarT[locale as Locale];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "Fundamentals", path: "/guides/fundamentals" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="flex">
          {/* Left sidebar navigation */}
          <aside className="hidden lg:flex flex-col w-[280px] shrink-0 border-r border-border pt-[120px] px-5 pb-8 sticky top-0 h-screen overflow-y-auto">
            <nav className="flex flex-col gap-6 mt-8">
              {sidebar.map((section) => (
                <div key={section.category}>
                  <p className="text-body text-xs font-medium uppercase tracking-wider mb-3">
                    {section.category}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {section.items.map((item) => (
                      <LocaleLink
                        key={item.href}
                        href={item.href}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          item.href === "/guides/fundamentals"
                            ? "text-heading bg-white-05 font-medium"
                            : "text-body hover:text-heading hover:bg-white-05"
                        }`}
                      >
                        {item.label}
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 pt-[120px] md:pt-[160px] px-5 md:px-12 lg:px-16 pb-20">
            <div className="max-w-[720px]">
              <p className="text-accent text-sm font-medium mb-4">
                {t.badge}
              </p>

              <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-6">
                {t.heading}
              </h1>

              <p className="text-body text-base leading-relaxed mb-8">
                {t.intro}
              </p>

              <div className="flex flex-col gap-10">
                {t.sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-heading mb-4">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded border border-border shrink-0 mt-0.5 flex items-center justify-center">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-accent opacity-0"
                            >
                              <path
                                d="M20 6L9 17l-5-5"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-body text-sm leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-body text-sm mb-2">{t.nav.previous}</p>
                <LocaleLink
                  href="/guides"
                  className="group flex items-center justify-between rounded-xl bg-bg-card border border-border p-5 hover:border-border-strong transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-body group-hover:text-accent transition-colors"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <div>
                      <p className="text-accent text-xs font-medium mb-1">
                        {t.nav.category}
                      </p>
                      <p className="text-heading font-medium text-base group-hover:text-accent transition-colors">
                        {t.nav.intro}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <p className="text-body text-sm">
                  {t.nav.resourceLibrary}{" "}
                  <LocaleLink
                    href="/resources/library"
                    className="text-accent hover:underline"
                  >
                    {t.nav.browseAll}
                  </LocaleLink>
                </p>
                <p className="text-body text-sm">
                  {t.nav.needHelp}{" "}
                  <LocaleLink
                    href="/contact"
                    className="text-accent hover:underline"
                  >
                    {t.nav.getInTouch}
                  </LocaleLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
