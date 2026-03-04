import LocaleLink from "@/components/ui/LocaleLink";
import Image from "next/image";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { crashCoursePageT } from "@/lib/i18n/translations/resources/crash-course";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/resources/crash-course");
}


const entryImages = [
  "/images/framer/ItBctzl5M66ve6J7UvXVHZQQShs.png",
  "/images/framer/ItBctzl5M66ve6J7UvXVHZQQShs.png",
];

const entryHrefs = [
  "/resources/crash-course/changelog-page",
  "/resources/crash-course/changelog-page",
];

export default async function CrashCoursePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = crashCoursePageT[locale as Locale];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Crash Course", path: "/resources/crash-course" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-[1024px] px-5 md:px-10 pt-[120px] md:pt-[140px] pb-20">
          {/* Hero */}
          <section className="text-center mb-24 pt-14">
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-3">
              {t.heading}
            </h1>
            <p className="text-body text-base max-w-[600px] mx-auto">
              {t.subtitle}
            </p>
          </section>

          {/* Timeline */}
          <div className="flex flex-col gap-2.5">
            {t.entries.map((entry, i) => (
              <div key={i} className="flex gap-6">
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="p-2">
                    <div className="w-[7px] h-[7px] rounded-full bg-body" />
                  </div>
                  {i < t.entries.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-10 w-full">
                  {/* Meta */}
                  <div className="w-full md:w-[360px] shrink-0 space-y-4">
                    <div className="space-y-2">
                      <p className="text-body text-sm">{entry.date}</p>
                      <h2 className="text-heading font-semibold text-xl">
                        {entry.title}
                      </h2>
                      <div className="pt-2">
                        <Badge text={entry.badge} />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-16">
                    <div className="rounded-[20px] border border-border overflow-hidden p-8 flex flex-col gap-6">
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                        <Image
                          src={entryImages[i]}
                          alt={entry.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-body text-sm leading-relaxed">
                        {entry.content}
                      </p>
                      <LocaleLink
                        href={entryHrefs[i]}
                        className="inline-flex items-center gap-2 text-heading text-sm font-medium hover:text-accent transition-colors"
                      >
                        {t.readMore}
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
                      </LocaleLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
