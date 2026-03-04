import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { getCaseStudy, getAllCaseSlugs } from "@/data/caseStudies";
import { generateAlternates } from "@/lib/i18n/metadata";
import { type Locale, ogLocaleMap } from "@/lib/i18n/config";

export function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | EcomSEO Case Study`,
    description: cs.description.slice(0, 160),
    alternates: generateAlternates(`/cases/${slug}`),
    openGraph: {
      title: cs.title,
      description: cs.description.slice(0, 160),
      images: [{ url: cs.heroImage }],
      locale: ogLocaleMap[locale as Locale] || "en_GB",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <Navigation />
      <main>
        <div className="mx-auto max-w-[1400px] px-5 md:px-20 pt-[120px] md:pt-[140px] pb-10">
          <div className="flex flex-col items-center gap-[100px] md:gap-[140px]">
            {/* Section Hero */}
            <div className="w-full max-w-[1040px] flex flex-col gap-16">
              {/* Title block */}
              <div className="w-full md:w-[70%] flex flex-col gap-4">
                <h1 className="font-[family-name:var(--font-dm-sans)] text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                  {cs.title}
                </h1>
                <p className="font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg">
                  {cs.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="w-full md:w-[70%] font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg leading-relaxed">
                {cs.description}
              </p>

              {/* Case Overview - 4 columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Niche", value: cs.niche },
                  { label: "Focus", value: cs.focus },
                  { label: "Metrics", value: cs.metrics },
                  { label: "Date", value: cs.date },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-2 p-5 rounded-2xl border border-border bg-white/[0.02]"
                  >
                    <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-heading">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full max-w-[1040px] relative rounded-3xl overflow-hidden aspect-[1040/650]">
              <Image
                src={cs.heroImage}
                alt={cs.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Top Project Description */}
            <div className="w-full max-w-[1040px]">
              <p className="font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg leading-relaxed">
                {cs.topProjectDescription}
              </p>
            </div>

            {/* Image 1 */}
            <div className="w-full max-w-[1040px] relative rounded-3xl overflow-hidden aspect-[1040/300]">
              <Image
                src={cs.image1}
                alt="Case study data"
                fill
                className="object-cover"
              />
            </div>

            {/* Text After Image 1 */}
            <div className="w-full max-w-[1040px]">
              <p className="font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg leading-relaxed">
                {cs.textAfterImage1}
              </p>
            </div>

            {/* Image 2 (optional) */}
            {cs.image2 && (
              <div className="w-full max-w-[1040px] relative rounded-3xl overflow-hidden aspect-[1040/650]">
                <Image
                  src={cs.image2}
                  alt="Case study results"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Text After Image 2 (optional) */}
            {cs.textAfterImage2 && (
              <div className="w-full max-w-[1040px]">
                <p className="font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg leading-relaxed">
                  {cs.textAfterImage2}
                </p>
              </div>
            )}

            {/* Text After Image 3 (optional) */}
            {cs.textAfterImage3 && (
              <div className="w-full max-w-[1040px]">
                <p className="font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg leading-relaxed">
                  {cs.textAfterImage3}
                </p>
              </div>
            )}

            {/* Bottom Project Description (optional) */}
            {cs.bottomProjectDescription && (
              <div className="w-full max-w-[1040px]">
                <p className="font-[family-name:var(--font-dm-sans)] text-body text-base md:text-lg leading-relaxed">
                  {cs.bottomProjectDescription}
                </p>
              </div>
            )}
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
