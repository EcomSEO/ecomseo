import Image from "next/image";
import Link from "next/link";
import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import {
  resourcesHeroT,
  fabianCardT,
  recentArticlesT,
  resourceLibraryT,
  guidesCtaT,
  newsletterT,
} from "@/lib/i18n/translations/resources";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/resources");
}

const articleImages = [
  "/images/framer/onMUu7iRiATs271DY4qFTwrfs2A.jpeg",
  "/images/framer/dtTy5pSdH9vdxf7ZmXfyy4cQH0.png",
  "/images/framer/pLr2VAAJPydel6VZNLZAsJP6k.png",
];

const articleHrefs = [
  "/resources/shopify-on-page-checklist",
  "/resources/search-product-discovery",
  "/resources/why-we-share",
];

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const hero = resourcesHeroT[l];
  const fabian = fabianCardT[l];
  const articles = recentArticlesT[l];
  const library = resourceLibraryT[l];
  const guidesCta = guidesCtaT[l];
  const newsletter = newsletterT[l];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(l, [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
      ])} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="w-full px-5 md:px-16 pt-[120px] md:pt-[160px] pb-16">
          <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-6">
            <Badge text={hero.badge} />
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
              {hero.heading}
            </h1>
          </div>
        </section>

        {/* About Fabian / Intro Cards */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            {/* Main card */}
            <div className="rounded-2xl bg-bg-card border border-border p-8 md:p-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/framer/TInweDbtgC4BbdOxO9KSYbemgM.png"
                  alt={fabian.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <p className="text-heading font-medium text-sm">
                    {fabian.name}
                  </p>
                  <p className="text-body text-xs">
                    {fabian.role}
                  </p>
                </div>
              </div>
              <h2 className="text-[24px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-heading">
                {fabian.heading}
              </h2>
              <p className="text-body text-base leading-relaxed">
                {fabian.bio}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <Link
                  href="https://www.youtube.com/@fabian-ecomseo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body hover:text-heading transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.38.55A3.02 3.02 0 00.5 6.19 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.85.55 9.38.55 9.38.55s7.53 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/fabianecomseo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body hover:text-heading transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/fabianvantil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body hover:text-heading transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Side image card */}
            <div className="rounded-2xl overflow-hidden border border-border min-h-[300px] relative">
              <Image
                src="/images/framer/onMUu7iRiATs271DY4qFTwrfs2A.jpeg"
                alt="EcomSEO resources"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[24px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-heading">
                {articles.sectionTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.articles.map((article, i) => (
                <LocaleLink
                  key={articleHrefs[i]}
                  href={articleHrefs[i]}
                  className="group rounded-2xl bg-bg-card border border-border overflow-hidden hover:border-border-strong transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={articleImages[i]}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-heading font-medium text-base leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Library Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] rounded-2xl bg-bg-card border border-border p-8 md:p-12 flex flex-col gap-6">
            <Badge text={library.badge} />
            <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[600px]">
              {library.heading}
            </h2>
            <p className="text-body text-base leading-relaxed max-w-[500px]">
              {library.body}
            </p>
            <div className="mt-2">
              <Button href="/guides" variant="secondary" size="small">
                {library.cta}
              </Button>
            </div>
          </div>
        </section>

        {/* Ecommerce SEO Guides Section */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] rounded-2xl bg-bg-card border border-border p-8 md:p-12 flex flex-col gap-6">
            <Badge text={guidesCta.badge} />
            <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[600px]">
              {guidesCta.heading}
            </h2>
            <p className="text-body text-base leading-relaxed max-w-[500px]">
              {guidesCta.body}
            </p>
            <div className="mt-2">
              <Button href="/guides" variant="secondary" size="small">
                {guidesCta.cta}
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full px-5 md:px-16 pb-20">
          <div className="mx-auto max-w-[1200px] rounded-2xl bg-bg-card border border-border p-8 md:p-12 flex flex-col items-center text-center gap-6">
            <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[600px]">
              {newsletter.heading}
            </h2>
            <p className="text-body text-base leading-relaxed max-w-[500px]">
              {newsletter.body}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[460px] mt-2">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="w-full px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent"
              />
              <button className="whitespace-nowrap px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors">
                {newsletter.cta}
              </button>
            </div>
            <div className="flex flex-col gap-3 mt-4 text-left w-full max-w-[460px]">
              {newsletter.benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-body text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
