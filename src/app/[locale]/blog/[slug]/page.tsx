import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { BASE_URL } from "@/lib/i18n/config";
import { generateAlternates } from "@/lib/i18n/metadata";
import { blogTranslations } from "@/lib/i18n/translations/blog";
import { allArticles, getArticleBySlug, getRelatedArticles } from "@/lib/blog/articles";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import LocaleLink from "@/components/ui/LocaleLink";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `${BASE_URL}/${locale}/blog/${slug}`;

  return {
    title: `${article.title} | EcomSEO`,
    description: article.description,
    alternates: generateAlternates(`/blog/${slug}`, locale),
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "EcomSEO",
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = blogTranslations[locale];
  const related = getRelatedArticles(slug, 3);
  const categoryLabel =
    t.categories.find((c) => c.id === article.category)?.label ||
    article.category;

  const breadcrumb = breadcrumbJsonLd(locale, [
    { name: t.breadcrumbHome, path: "/" },
    { name: t.breadcrumbBlog, path: "/blog" },
    { name: article.title, path: `/blog/${slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      url: `${BASE_URL}/${locale}/blog/author/${article.authorSlug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "EcomSEO",
      url: BASE_URL,
    },
    mainEntityOfPage: `${BASE_URL}/${locale}/blog/${slug}`,
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <article className="pt-[120px] md:pt-[160px] px-5 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[720px] mx-auto">
            {/* Back link */}
            <LocaleLink
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-body hover:text-heading transition-colors mb-8"
            >
              &larr; {t.backToBlog}
            </LocaleLink>

            {/* Article header */}
            <header className="mb-10">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {categoryLabel}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-heading mt-3 mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-body text-lg leading-relaxed mb-6">
                {article.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-body/60">
                <span>
                  {t.byAuthor}{" "}
                  <LocaleLink
                    href={`/blog/author/${article.authorSlug}`}
                    className="text-body/60 hover:text-accent transition-colors underline underline-offset-2"
                  >
                    {article.author}
                  </LocaleLink>
                </span>
                <span className="w-1 h-1 rounded-full bg-body/30" />
                <span>{article.readingTime} {t.minRead}</span>
                <span className="w-1 h-1 rounded-full bg-body/30" />
                <time dateTime={article.publishDate}>
                  {new Date(article.publishDate).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </header>

            {/* Table of contents */}
            <nav className="mb-10 p-5 rounded-xl border border-border bg-white/[0.02]">
              <p className="text-sm font-medium text-heading mb-3">
                {t.tableOfContents}
              </p>
              <ul className="space-y-2">
                {article.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="text-sm text-body hover:text-heading transition-colors"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Article body */}
            <div className="prose-custom">
              {article.sections.map((section, i) => (
                <section key={i} id={`section-${i}`} className="mb-10">
                  <h2 className="text-xl md:text-2xl font-semibold text-heading mb-4">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-body leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="px-5 md:px-12 lg:px-16 pb-20">
            <div className="max-w-[1100px] mx-auto">
              <h2 className="text-2xl font-bold text-heading mb-8">
                {t.relatedArticles}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <LocaleLink
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all p-6"
                  >
                    <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                      {t.categories.find((c) => c.id === rel.category)?.label ||
                        rel.category}
                    </span>
                    <h3 className="text-base font-semibold text-heading group-hover:text-white mb-2 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-body line-clamp-2 flex-1">
                      {rel.description}
                    </p>
                    <span className="text-xs text-body/60 mt-3">
                      {rel.readingTime} {t.minRead}
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
