import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { BASE_URL, ogLocaleMap } from "@/lib/i18n/config";
import { generateAlternates } from "@/lib/i18n/metadata";
import { blogTranslations } from "@/lib/i18n/translations/blog";
import { allAuthorSlugs, getArticlesByAuthor } from "@/lib/blog/articles";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/jsonLd";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import LocaleLink from "@/components/ui/LocaleLink";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import { notFound } from "next/navigation";

type AuthorProfile = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
  bio: string;
  socials: { platform: string; href: string }[];
};

const authors: Record<string, AuthorProfile> = {
  "fabian-van-til": {
    slug: "fabian-van-til",
    name: "Fabian van Til",
    role: "CEO at EcomSEO",
    tagline:
      "A Passionate Entrepreneur, specialising in ecommerce marketing.",
    image: "/images/framer/pLr2VAAJPydel6VZNLZAsJP6k.png",
    bio: "Fabian entered the e-commerce space in 2020. Two years later he and a partner launched a Google-marketing agency, which they swiftly refocused into an SEO firm. After selling his stake to his co-founder, Fabian doubled down on e-commerce. In 2024 he and his brother introduced their own brand and co-founded EcomSEO, an agency dedicated to shattering the norms of traditional marketing through transparent, results-oriented partnerships.",
    socials: [
      { platform: "YouTube", href: "https://www.youtube.com/@fabian-ecomseo" },
      { platform: "X", href: "https://x.com/fabianecomseo" },
      { platform: "Instagram", href: "https://www.instagram.com/fabianvantil/" },
    ],
  },
};

export function generateStaticParams() {
  return allAuthorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const author = authors[slug];
  if (!author) return {};

  const articles = getArticlesByAuthor(slug);
  const title = `${author.name} - ${author.role} | EcomSEO`;
  const description = `${author.name} has published ${articles.length} articles on ecommerce SEO. ${author.tagline}`;

  return {
    title,
    description,
    alternates: generateAlternates(`/blog/author/${slug}`, locale),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/blog/author/${slug}`,
      siteName: "EcomSEO",
      type: "profile",
      images: [{ url: `${BASE_URL}${author.image}` }],
      locale: ogLocaleMap[locale],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const socialIcons: Record<string, React.ReactNode> = {
  YouTube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.35 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
  ),
  X: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
  ),
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  ),
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
  ),
};

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const author = authors[slug];
  if (!author) notFound();

  const t = blogTranslations[locale];
  const articles = getArticlesByAuthor(slug);

  return (
    <>
      <JsonLd
        data={personJsonLd({
          name: author.name,
          jobTitle: author.role,
          description: author.tagline,
          url: `${BASE_URL}/${locale}/blog/author/${slug}`,
          image: author.image,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: t.breadcrumbHome, path: "/" },
          { name: t.breadcrumbBlog, path: "/blog" },
          { name: author.name, path: `/blog/author/${slug}` },
        ])}
      />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="pt-[120px] md:pt-[160px] px-5 md:px-12 lg:px-16 pb-20">
          <div className="max-w-[1100px] mx-auto">
            {/* Back link */}
            <LocaleLink
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-body hover:text-heading transition-colors mb-10"
            >
              &larr; {t.backToBlog}
            </LocaleLink>

            {/* Author header */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
              <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-2xl overflow-hidden border border-border shrink-0 bg-bg-card">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={180}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-accent text-sm font-medium mb-2">{author.role}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4 leading-tight">
                  {author.name}
                </h1>
                <p className="text-body text-base leading-relaxed mb-6 max-w-[600px]">
                  {author.bio}
                </p>
                <div className="flex items-center gap-4">
                  {author.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-accent transition-colors"
                      aria-label={social.platform}
                    >
                      {socialIcons[social.platform] || social.platform}
                    </a>
                  ))}
                  <LocaleLink
                    href={`/team/${slug}`}
                    className="text-sm text-accent hover:underline ml-2"
                  >
                    View full profile &rarr;
                  </LocaleLink>
                </div>
              </div>
            </div>

            {/* Articles by this author */}
            <h2 className="text-2xl font-bold text-heading mb-8">
              {articles.length} {articles.length === 1 ? "Article" : "Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => {
                const ac = article.content[locale] || article.content.en;
                const categoryLabel =
                  t.categories.find((cat) => cat.id === article.category)?.label ||
                  article.category;

                return (
                  <LocaleLink
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all p-6"
                  >
                    <span className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
                      {categoryLabel}
                    </span>
                    <h3 className="text-lg font-semibold text-heading group-hover:text-white mb-2 leading-snug">
                      {ac.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed mb-4 line-clamp-3 flex-1">
                      {ac.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-body/60 pt-4 border-t border-border">
                      <span>{article.readingTime} {t.minRead}</span>
                      <span className="text-accent group-hover:underline">
                        {t.readMore} &rarr;
                      </span>
                    </div>
                  </LocaleLink>
                );
              })}
            </div>
          </div>
        </div>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
