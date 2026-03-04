import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "SEO Fundamentals Checklist | EcomSEO Guides",
  description:
    "The complete SEO fundamentals checklist for ecommerce brands. Everything you need to get your on-page SEO right from day one.",
  openGraph: {
    title: "SEO Fundamentals Checklist | EcomSEO Guides",
    description:
      "The complete SEO fundamentals checklist for ecommerce brands.",
  },
};

const sideNavItems = [
  {
    category: "Ecommerce SEO Basics",
    items: [
      { label: "Introduction", href: "/guides" },
      {
        label: "SEO Fundamentals Checklist",
        href: "/guides/fundamentals",
        active: true,
      },
    ],
  },
];

const checklistSections = [
  {
    title: "1. Title Tags",
    items: [
      "Every page has a unique, descriptive title tag",
      "Include primary keyword near the beginning",
      "Keep under 60 characters to avoid truncation",
      "Include your brand name at the end (e.g., | Brand)",
      "Use modifiers for long-tail variations (best, buy, review, 2025)",
    ],
  },
  {
    title: "2. Meta Descriptions",
    items: [
      "Every page has a unique meta description",
      "Include primary keyword naturally",
      "Keep under 155 characters",
      "Include a call-to-action (Shop now, Free shipping, etc.)",
      "Highlight unique selling points",
    ],
  },
  {
    title: "3. Heading Structure",
    items: [
      "One H1 per page containing the primary keyword",
      "Logical heading hierarchy (H1 → H2 → H3)",
      "H2s cover main subtopics / categories",
      "H3s used for supporting points",
      "Don't skip heading levels",
    ],
  },
  {
    title: "4. URL Structure",
    items: [
      "URLs are short, descriptive, and keyword-rich",
      "Use hyphens to separate words",
      "Avoid parameters and session IDs in URLs",
      "Logical folder structure (/category/subcategory/product)",
      "All URLs are lowercase",
    ],
  },
  {
    title: "5. Internal Linking",
    items: [
      "Category pages link to relevant subcategories and products",
      "Product pages link back to their category",
      "Blog posts link to relevant product/category pages",
      "Use descriptive anchor text (not 'click here')",
      "Implement breadcrumb navigation",
    ],
  },
  {
    title: "6. Image Optimization",
    items: [
      "All images have descriptive alt text",
      "Images are compressed (WebP format preferred)",
      "Use descriptive file names (blue-running-shoes.webp)",
      "Implement lazy loading for below-fold images",
      "Include product images in your sitemap",
    ],
  },
  {
    title: "7. Schema Markup",
    items: [
      "Product schema on all product pages (price, availability, reviews)",
      "BreadcrumbList schema on all pages",
      "Organization schema on homepage",
      "FAQ schema on FAQ pages",
      "Review/Rating schema where applicable",
    ],
  },
  {
    title: "8. Technical Foundations",
    items: [
      "XML sitemap submitted to Google Search Console",
      "Robots.txt properly configured",
      "Canonical tags set correctly on all pages",
      "SSL/HTTPS enabled site-wide",
      "Mobile-responsive design",
      "Core Web Vitals passing (LCP < 2.5s, CLS < 0.1, INP < 200ms)",
    ],
  },
];

export default function FundamentalsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="flex">
          {/* Left sidebar navigation */}
          <aside className="hidden lg:flex flex-col w-[280px] shrink-0 border-r border-border pt-[120px] px-5 pb-8 sticky top-0 h-screen overflow-y-auto">
            <nav className="flex flex-col gap-6 mt-8">
              {sideNavItems.map((section) => (
                <div key={section.category}>
                  <p className="text-body text-xs font-medium uppercase tracking-wider mb-3">
                    {section.category}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          "active" in item && item.active
                            ? "text-heading bg-white-05 font-medium"
                            : "text-body hover:text-heading hover:bg-white-05"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 pt-[120px] md:pt-[160px] px-5 md:px-12 lg:px-16 pb-20">
            <div className="max-w-[720px]">
              <p className="text-accent text-sm font-medium mb-4">
                Ecommerce SEO Basics
              </p>

              <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-6">
                SEO Fundamentals Checklist
              </h1>

              <p className="text-body text-base leading-relaxed mb-8">
                This is the absolute first thing we do when starting a new
                project. Before content strategy, before link building, before
                anything — we make sure the fundamentals are locked in. Use this
                checklist to audit your own store.
              </p>

              <div className="flex flex-col gap-10">
                {checklistSections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-heading mb-4">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded border border-border shrink-0 mt-0.5 flex items-center justify-center">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-accent opacity-0"
                            >
                              <path
                                d="M20 6L9 17l-5-5"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-body text-sm leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-body text-sm mb-2">Previous</p>
                <Link
                  href="/guides"
                  className="group flex items-center justify-between rounded-xl bg-bg-card border border-border p-5 hover:border-border-strong transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-body group-hover:text-accent transition-colors"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <div>
                      <p className="text-accent text-xs font-medium mb-1">
                        Ecommerce SEO Basics
                      </p>
                      <p className="text-heading font-medium text-base group-hover:text-accent transition-colors">
                        Introduction
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <p className="text-body text-sm">
                  Want the full resource library?{" "}
                  <Link
                    href="/resources/library"
                    className="text-accent hover:underline"
                  >
                    Browse all resources
                  </Link>
                </p>
                <p className="text-body text-sm">
                  Need help implementing?{" "}
                  <Link
                    href="/contact"
                    className="text-accent hover:underline"
                  >
                    Get in touch
                  </Link>
                </p>
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
