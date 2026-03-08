import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/jsonLd";
import { guidesSidebarT } from "@/lib/i18n/translations/guidesSidebar";
import type { Locale } from "@/lib/i18n/config";
import Image from "next/image";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "tip"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered-list"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "code"; language?: string; text: string };

export type GuideSection = {
  id: string;
  title: string;
  blocks: GuideBlock[];
};

export type GuideNav = {
  prev?: { href: string; category: string; title: string };
  next?: { href: string; category: string; title: string };
};

export type GuidePageData = {
  locale: Locale;
  path: string;
  badge: string;
  heading: string;
  intro: string;
  readTime?: string;
  sections: GuideSection[];
  nav: GuideNav;
  breadcrumbs: { name: string; path: string }[];
};

export default function GuidePageTemplate({ data }: { data: GuidePageData }) {
  const { locale, path, badge, heading, intro, readTime, sections, nav, breadcrumbs } = data;
  const sidebar = guidesSidebarT[locale];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale, breadcrumbs)} />
      <JsonLd data={articleJsonLd({ locale, headline: heading, description: intro, path })} />
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col w-[280px] shrink-0 border-r border-border pt-[120px] px-5 pb-8 sticky top-0 h-screen overflow-y-auto">
            <nav className="flex flex-col gap-6 mt-8">
              {sidebar.map((section) => (
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
                          item.href === path
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
              {/* Badge + read time */}
              <div className="flex items-center gap-3 mb-4">
                <p className="text-accent text-sm font-medium">{badge}</p>
                {readTime && (
                  <span className="text-body text-xs">{readTime}</span>
                )}
              </div>

              <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-6">
                {heading}
              </h1>

              <p className="text-body text-base leading-relaxed mb-10 text-[17px]">
                {intro}
              </p>

              {/* Table of contents */}
              {sections.length > 2 && (
                <div className="bg-bg-card border border-border rounded-xl p-5 mb-10">
                  <p className="text-heading text-sm font-medium mb-3">In this guide</p>
                  <ol className="flex flex-col gap-1.5">
                    {sections.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="text-body text-sm hover:text-accent transition-colors"
                        >
                          {i + 1}. {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Sections */}
              <div className="flex flex-col gap-12">
                {sections.map((section) => (
                  <div key={section.id} id={section.id}>
                    <h2 className="text-[22px] md:text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-heading mb-5">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {section.blocks.map((block, bi) => (
                        <GuideBlockRenderer key={bi} block={block} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next nav */}
              <div className="mt-16 pt-8 border-t border-border flex flex-col gap-4">
                {nav.prev && (
                  <LocaleLink
                    href={nav.prev.href}
                    className="group flex items-center gap-3 rounded-xl bg-bg-card border border-border p-5 hover:border-border-strong transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-body group-hover:text-accent transition-colors shrink-0">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <div>
                      <p className="text-accent text-xs font-medium mb-0.5">{nav.prev.category}</p>
                      <p className="text-heading font-medium text-base group-hover:text-accent transition-colors">{nav.prev.title}</p>
                    </div>
                  </LocaleLink>
                )}
                {nav.next && (
                  <LocaleLink
                    href={nav.next.href}
                    className="group flex items-center justify-between rounded-xl bg-bg-card border border-border p-5 hover:border-border-strong transition-colors"
                  >
                    <div>
                      <p className="text-accent text-xs font-medium mb-0.5">{nav.next.category}</p>
                      <p className="text-heading font-medium text-base group-hover:text-accent transition-colors">{nav.next.title}</p>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-body group-hover:text-accent transition-colors shrink-0">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </LocaleLink>
                )}
              </div>
            </div>
          </div>
        </div>
        <CTA />
        <Footer />
      </main>
    </>
  );
}

function GuideBlockRenderer({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-body text-base leading-relaxed">{block.text}</p>
      );
    case "callout":
      return (
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
          <p className="text-accent text-sm font-semibold mb-1">{block.title}</p>
          <p className="text-body text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    case "tip":
      return (
        <div className="bg-bg-card border border-border rounded-xl p-4 flex gap-3">
          <span className="text-accent text-sm shrink-0 font-medium">Tip</span>
          <p className="text-body text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent text-sm shrink-0 mt-0.5">-</span>
              <span className="text-body text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent text-sm shrink-0 mt-0.5 font-medium">{i + 1}.</span>
              <span className="text-body text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "checklist":
      return (
        <div className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded border border-border shrink-0 mt-0.5 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-accent opacity-40">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-body text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      );
    case "image":
      return (
        <figure className="rounded-xl overflow-hidden border border-border">
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {block.caption && (
            <figcaption className="px-4 py-2 text-body text-xs text-center bg-bg-card">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "code":
      return (
        <pre className="bg-bg-card border border-border rounded-xl p-4 overflow-x-auto">
          <code className="text-accent text-sm font-mono">{block.text}</code>
        </pre>
      );
    default:
      return null;
  }
}
