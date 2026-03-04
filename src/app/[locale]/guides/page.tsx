import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesNavT, guidesIntroT } from "@/lib/i18n/translations/guides";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides");
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const nav = guidesNavT[l];
  const t = guidesIntroT[l];

  const sideNavItems = [
    {
      category: nav.category,
      items: [
        { label: nav.introLabel, href: "/guides", active: true },
        { label: nav.fundamentalsLabel, href: "/guides/fundamentals" },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(l, [
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="flex">
          {/* Left sidebar navigation */}
          <aside className="hidden lg:flex flex-col w-[280px] shrink-0 border-r border-border pt-[120px] px-5 pb-8 sticky top-0 h-screen overflow-y-auto">
            <nav className="flex flex-col gap-6 mt-8">
              {sideNavItems.map((section) => (
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
                          item.active
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
              {/* Breadcrumb */}
              <p className="text-accent text-sm font-medium mb-4">
                {t.breadcrumb}
              </p>

              <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-6">
                {t.heading}
              </h1>

              <div className="prose-custom flex flex-col gap-6">
                <p className="text-body text-base leading-relaxed">
                  {t.bodyParagraph}{" "}
                  <a
                    href="mailto:info@ecomseo.co"
                    className="text-accent hover:underline"
                  >
                    info@ecomseo.co
                  </a>
                  !
                </p>

                <h2 className="text-[24px] md:text-[28px] font-medium leading-[1.2] tracking-[-0.02em] text-heading mt-4">
                  {t.expectHeading}
                </h2>

                <p className="text-body text-base leading-relaxed">
                  {t.expectBody}
                </p>

                <div className="flex flex-col gap-4 mt-2">
                  {t.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent shrink-0 mt-0.5"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-body text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation to next guide */}
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-body text-sm mb-2">{t.nextUp}</p>
                  <LocaleLink
                    href="/guides/fundamentals"
                    className="group flex items-center justify-between rounded-xl bg-bg-card border border-border p-5 hover:border-border-strong transition-colors"
                  >
                    <div>
                      <p className="text-accent text-xs font-medium mb-1">
                        {t.nextCategory}
                      </p>
                      <p className="text-heading font-medium text-base group-hover:text-accent transition-colors">
                        {t.nextTitle}
                      </p>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-body group-hover:text-accent transition-colors"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </LocaleLink>
                </div>

                {/* Extra links */}
                <div className="mt-8 flex flex-col gap-3">
                  <p className="text-body text-sm">
                    {t.crashCoursePrompt}{" "}
                    <LocaleLink
                      href="/resources/crash-course"
                      className="text-accent hover:underline"
                    >
                      {t.crashCourseLink}
                    </LocaleLink>
                  </p>
                  <p className="text-body text-sm">
                    {t.talkPrompt}{" "}
                    <LocaleLink
                      href="/contact"
                      className="text-accent hover:underline"
                    >
                      {t.talkLink}
                    </LocaleLink>
                  </p>
                </div>
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
