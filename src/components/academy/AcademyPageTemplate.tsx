import LocaleLink from "@/components/ui/LocaleLink";
import { parseInlineLinks } from "@/lib/parseInlineLinks";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/jsonLd";
import { academySidebarT } from "@/lib/i18n/translations/academySidebar";
import type { Locale } from "@/lib/i18n/config";
import Image from "next/image";

export type AcademyBlock =
  | { type: "p"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "tip"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered-list"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "code"; language?: string; text: string };

export type AcademySection = {
  id: string;
  title: string;
  blocks: AcademyBlock[];
};

export type AcademyNav = {
  prev?: { href: string; category: string; title: string };
  next?: { href: string; category: string; title: string };
};

export type AcademyResourceLink = {
  label: string;
  url: string;
  type: "tool" | "guide" | "docs" | "video";
};

export type AcademyResources = {
  title: string;
  links: AcademyResourceLink[];
};

export type AcademyPageData = {
  locale: Locale;
  path: string;
  badge: string;
  heading: string;
  intro: string;
  readTime?: string;
  sections: AcademySection[];
  resources?: AcademyResources;
  nav: AcademyNav;
  breadcrumbs: { name: string; path: string }[];
};

const resourceIcons: Record<AcademyResourceLink["type"], React.ReactNode> = {
  tool: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  guide: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
  docs: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>,
  video: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
};

export default function AcademyPageTemplate({ data }: { data: AcademyPageData }) {
  const { locale, path, badge, heading, intro, readTime, sections, resources, nav, breadcrumbs } = data;
  const sidebar = academySidebarT[locale];

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
                        <AcademyBlockRenderer key={bi} block={block} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resources */}
              {resources && resources.links.length > 0 && (
                <div className="mt-12 bg-bg-card border border-border rounded-xl p-6">
                  <h3 className="text-heading text-base font-medium mb-4 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    {resources.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {resources.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors group"
                      >
                        <span className="text-accent shrink-0">{resourceIcons[link.type]}</span>
                        <span className="text-body text-sm group-hover:text-heading transition-colors">{link.label}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-body/30 group-hover:text-accent shrink-0 ml-auto transition-colors">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}

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

function AcademyBlockRenderer({ block }: { block: AcademyBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-body text-base leading-relaxed">{parseInlineLinks(block.text)}</p>
      );
    case "callout":
      return (
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
          <p className="text-accent text-sm font-semibold mb-1">{block.title}</p>
          <p className="text-body text-sm leading-relaxed">{parseInlineLinks(block.text)}</p>
        </div>
      );
    case "tip":
      return (
        <div className="bg-bg-card border border-border rounded-xl p-4 flex gap-3">
          <span className="text-accent text-sm shrink-0 font-medium">Tip</span>
          <p className="text-body text-sm leading-relaxed">{parseInlineLinks(block.text)}</p>
        </div>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent text-sm shrink-0 mt-0.5">-</span>
              <span className="text-body text-sm leading-relaxed">{parseInlineLinks(item)}</span>
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
              <span className="text-body text-sm leading-relaxed">{parseInlineLinks(item)}</span>
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
              <span className="text-body text-sm leading-relaxed">{parseInlineLinks(item)}</span>
            </div>
          ))}
        </div>
      );
    case "image":
      return (
        <figure className="rounded-xl overflow-hidden border border-border">
          <div className="relative w-full p-4 bg-[#0a0a1a]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt}
              className="w-full h-auto min-h-[120px]"
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
