import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { changelogPageT } from "@/lib/i18n/translations/resources/crash-course";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/resources/crash-course/changelog-page");
}


export default async function ChangelogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = changelogPageT[locale as Locale];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Crash Course", path: "/resources/crash-course" },
        { name: "Changelog", path: "/resources/crash-course/changelog-page" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-[640px] px-5 md:px-10 pt-[120px] md:pt-[140px] pb-20">
          {/* Back button */}
          <div className="mb-12">
            <LocaleLink
              href="/resources/crash-course"
              className="inline-flex items-center gap-2 text-body text-sm hover:text-heading transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              {t.back}
            </LocaleLink>
          </div>

          {/* Header */}
          <section className="text-center mb-8 space-y-3">
            <h1 className="text-[28px] md:text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-heading">
              {t.title}
            </h1>
            <p className="text-body text-sm">{t.date}</p>
          </section>

          {/* Cover image */}
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-10">
            <Image
              src="/images/framer/ItBctzl5M66ve6J7UvXVHZQQShs.png"
              alt={t.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content placeholder */}
          <article className="prose prose-invert prose-sm max-w-none mb-12">
            <p className="text-body text-sm leading-relaxed">
              {t.content}
            </p>
          </article>

          {/* Next step card */}
          <LocaleLink
            href="/resources/crash-course"
            className="flex items-center justify-between gap-4 rounded-xl border border-border p-4 hover:border-accent transition-colors"
          >
            <div className="space-y-1">
              <p className="text-body text-xs">{t.nextStep}</p>
              <p className="text-heading font-semibold text-sm">
                {t.nextTitle}
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-body shrink-0"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </LocaleLink>
        </div>
        <Footer />
      </main>
    </>
  );
}
