import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { BASE_URL, publicLocalizedUrl } from "@/lib/i18n/config";
import { generateAlternates } from "@/lib/i18n/metadata";
import { blogTranslations } from "@/lib/i18n/translations/blog";
import { allArticles, getArticleBySlug, getRelatedArticles } from "@/lib/blog/articles";
import { breadcrumbJsonLd, articleJsonLd as articleJsonLdFn } from "@/lib/jsonLd";
import JsonLd from "@/components/JsonLd";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import LocaleLink from "@/components/ui/LocaleLink";
import { parseInlineLinks } from "@/lib/parseInlineLinks";
import { notFound } from "next/navigation";

export const revalidate = 86400;


export async function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

// Blog posts that cannibalize academy pages → canonical to academy
const blogCanonicalOverrides: Record<string, string> = {
  "ecommerce-homepage-seo": "/academy/homepage-seo-for-ecommerce",
  "ecommerce-seo-migration": "/academy/platform-migration-seo",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = publicLocalizedUrl(locale, `/blog/${slug}`);

  const c = article.content[locale] || article.content.en;

  // If this blog post cannibalizes an academy page, set canonical to academy
  const canonicalOverride = blogCanonicalOverrides[slug];
  const alternates = canonicalOverride
    ? {
        ...generateAlternates(`/blog/${slug}`, locale),
        canonical: publicLocalizedUrl(locale, canonicalOverride),
      }
    : generateAlternates(`/blog/${slug}`, locale);

  return {
    title: `${c.title} | EcomSEO`,
    description: c.description,
    alternates,
    openGraph: {
      title: c.title,
      description: c.description,
      url,
      siteName: "EcomSEO",
      type: "article",
      locale: locale === "en" ? "en_GB" : `${locale}_${locale.toUpperCase()}`,
      publishedTime: article.publishDate,
      authors: [article.author],
      images: [
        {
          url: `${BASE_URL}/images/brand/og-image.png`,
          width: 1200,
          height: 630,
          alt: c.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ecomseo_co",
      title: c.title,
      description: c.description,
      images: [`${BASE_URL}/images/brand/og-image.png`],
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
  const c = article.content[locale] || article.content.en;
  const related = getRelatedArticles(slug, 3);
  const categoryLabel =
    t.categories.find((cat) => cat.id === article.category)?.label ||
    article.category;

  const breadcrumb = breadcrumbJsonLd(locale, [
    { name: t.breadcrumbHome, path: "/" },
    { name: t.breadcrumbBlog, path: "/blog" },
    { name: c.title, path: `/blog/${slug}` },
  ]);

  const wordCount = c.sections
    .flatMap((s) => s.body)
    .join(" ")
    .split(/\s+/).length;

  const articleSchema = articleJsonLdFn({
    locale,
    headline: c.title,
    description: c.description,
    path: `/blog/${slug}`,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    authorName: article.author,
    authorUrl: publicLocalizedUrl(locale, `/blog/author/${article.authorSlug}`),
    image: `${BASE_URL}/images/brand/og-image.png`,
    wordCount,
  });

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
                {c.title}
              </h1>
              <p className="text-body text-lg leading-relaxed mb-6">
                {c.description}
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
                {c.sections.map((section, i) => (
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
              {c.sections.map((section, i) => (
                <section key={i} id={`section-${i}`} className="mb-10">
                  <h2 className="text-xl md:text-2xl font-semibold text-heading mb-4">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-body leading-relaxed mb-4"
                    >
                      {parseInlineLinks(paragraph)}
                    </p>
                  ))}
                  {section.image && (
                    <figure className="rounded-xl overflow-hidden border border-border my-6">
                      <div className="relative w-full p-3 md:p-4 bg-[#0a0a1a] overflow-x-auto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={section.image.src} alt={section.image.alt} className="w-full h-auto min-h-[150px] md:min-h-[120px] min-w-[500px] md:min-w-0" />
                      </div>
                      {section.image.caption && (
                        <figcaption className="px-4 py-2 text-body text-xs text-center bg-bg-card">{section.image.caption}</figcaption>
                      )}
                    </figure>
                  )}
                  {section.callout && (
                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 my-6">
                      <p className="text-accent text-sm font-semibold mb-1">{section.callout.title}</p>
                      <p className="text-body text-sm leading-relaxed">{parseInlineLinks(section.callout.text)}</p>
                    </div>
                  )}
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
                {related.map((rel) => {
                  const rc = rel.content[locale] || rel.content.en;
                  return (
                    <LocaleLink
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex flex-col rounded-xl border border-border bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all p-6"
                    >
                      <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                        {t.categories.find((cat) => cat.id === rel.category)?.label ||
                          rel.category}
                      </span>
                      <h3 className="text-base font-semibold text-heading group-hover:text-white mb-2 leading-snug">
                        {rc.title}
                      </h3>
                      <p className="text-sm text-body line-clamp-2 flex-1">
                        {rc.description}
                      </p>
                      <span className="text-xs text-body/60 mt-3">
                        {rel.readingTime} {t.minRead}
                      </span>
                    </LocaleLink>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <CTA />
        <Footer />
      </main>
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleSchema} />
    </>
  );
}
