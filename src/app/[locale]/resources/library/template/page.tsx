import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { libraryDetailT } from "@/lib/i18n/translations/resources/library";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/resources/library/template");
}


export default async function TemplatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = libraryDetailT[locale as Locale];

  const relatedResources = [
    {
      title: t.relatedResources.fundamentalsChecklist.title,
      description: t.relatedResources.fundamentalsChecklist.description,
      href: "/resources/library/on-page-checklist",
    },
    {
      title: t.relatedResources.roiSheet.title,
      description: t.relatedResources.roiSheet.description,
      href: "/resources/library/roi-calculation-sheet",
    },
    {
      title: t.relatedResources.seoFundamentalsGuide.title,
      description: t.relatedResources.seoFundamentalsGuide.description,
      href: "/guides/fundamentals",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Library", path: "/resources/library" },
        { name: "Template", path: "/resources/library/template" },
      ])} />
      <Navigation />
      {/* White background page */}
      <main className="min-h-screen bg-white text-gray-900">
        <div className="mx-auto max-w-[1000px] px-5 md:px-10 pt-[120px] md:pt-[140px] pb-20">
          {/* Back nav */}
          <div className="flex items-center justify-between mb-8">
            <LocaleLink
              href="/resources/library"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-colors"
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
              {t.allSwipeFiles}
            </LocaleLink>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              {t.copyLink}
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <span>{t.breadcrumbs.resources}</span>
            <span>/</span>
            <span>{t.breadcrumbs.swipeFiles}</span>
            <span>/</span>
            <span>{t.breadcrumbs.onPageSeo}</span>
            <span>/</span>
            <span className="text-gray-600">{t.abcTemplate.title}</span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Image
                src="/images/framer/1y7YPEZl3UouLlzQc4ikktB4SlQ.png"
                alt="Template icon"
                width={32}
                height={32}
              />
            </div>
            <h1 className="text-[28px] md:text-[36px] font-semibold leading-[1.1] tracking-[-0.02em]">
              {t.abcTemplate.title}
            </h1>
          </div>

          {/* Cover image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-gray-200">
            <Image
              src="/images/framer/dtTy5pSdH9vdxf7ZmXfyy4cQH0.png"
              alt={t.abcTemplate.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div className="max-w-[640px] mb-8">
            <p className="text-gray-600 text-base leading-relaxed">
              {t.abcTemplate.description}
            </p>
          </div>

          {/* Download CTA */}
          <div className="mb-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.getThisTemplate}
            </button>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mb-16 pb-8 border-b border-gray-200">
            <Image
              src="/images/framer/TInweDbtgC4BbdOxO9KSYbemgM.png"
              alt="Fabian van Til"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-gray-900 text-sm font-medium">
                {t.createdBy}
              </p>
              <p className="text-gray-400 text-xs">May 2025</p>
            </div>
          </div>

          {/* Related resources */}
          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
              {t.popularResources}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedResources.map((resource) => (
                <LocaleLink
                  key={resource.href}
                  href={resource.href}
                  className="group rounded-xl border border-gray-200 p-5 flex flex-col gap-2 hover:border-purple-300 transition-colors"
                >
                  <h3 className="text-gray-900 font-medium text-sm group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {resource.description}
                  </p>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="bg-bg">
        <Footer />
      </div>
    </>
  );
}
