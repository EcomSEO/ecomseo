import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { blogTranslations } from "@/lib/i18n/translations/blog";
import { allArticles } from "@/lib/blog/articles";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import BlogListClient from "./BlogListClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "/blog");
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = blogTranslations[locale];

  const breadcrumb = breadcrumbJsonLd(locale, [
    { name: t.breadcrumbHome, path: "/" },
    { name: t.breadcrumbBlog, path: "/blog" },
  ]);

  const articles = allArticles.map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    category: a.category,
    publishDate: a.publishDate,
    readingTime: a.readingTime,
    author: a.author,
  }));

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="pt-[120px] md:pt-[160px] px-5 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1100px] mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                {t.heading}
              </h1>
              <p className="text-body text-lg max-w-[600px]">
                {t.subheading}
              </p>
            </div>

            {/* Client component for filtering + grid */}
            <BlogListClient
              articles={articles}
              categories={t.categories}
              allLabel={t.allCategory}
              readMoreLabel={t.readMore}
              minReadLabel={t.minRead}
            />
          </div>
        </div>
        <CTA />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
