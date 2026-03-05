import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import type { Locale } from "@/lib/i18n/config";
import { guidesFullNavT } from "@/lib/i18n/translations/guides";

export default function GuidesLayout({
  locale,
  activeHref,
  children,
}: {
  locale: Locale;
  activeHref: string;
  children: React.ReactNode;
}) {
  const nav = guidesFullNavT[locale];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="flex">
          {/* Left sidebar navigation */}
          <aside className="hidden lg:flex flex-col w-[280px] shrink-0 border-r border-border pt-[120px] px-5 pb-8 sticky top-0 h-screen overflow-y-auto">
            <nav className="flex flex-col gap-6 mt-8">
              {nav.categories.map((section) => (
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
                          item.href === activeHref
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
              {children}
            </div>
          </div>
        </div>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
