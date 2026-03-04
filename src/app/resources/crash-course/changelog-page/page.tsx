import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Performance Boost & New Features | Ecommerce SEO Crash Course",
  description:
    "Learn the fundamentals of SEO performance and discover new features that can help your ecommerce store rank higher in search results.",
  openGraph: {
    title: "Performance Boost & New Features | Ecommerce SEO Crash Course",
    description:
      "Learn the fundamentals of SEO performance for ecommerce.",
  },
};

export default function ChangelogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-[640px] px-5 md:px-10 pt-[120px] md:pt-[140px] pb-20">
          {/* Back button */}
          <div className="mb-12">
            <Link
              href="/resources/crash-course"
              className="inline-flex items-center gap-2 text-body text-sm hover:text-heading transition-colors"
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
              Back
            </Link>
          </div>

          {/* Header */}
          <section className="text-center mb-8 space-y-3">
            <h1 className="text-[28px] md:text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-heading">
              Performance Boost &amp; New Features
            </h1>
            <p className="text-body text-sm">January 23, 2025</p>
          </section>

          {/* Cover image */}
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-10">
            <Image
              src="https://framerusercontent.com/images/ItBctzl5M66ve6J7UvXVHZQQShs.png"
              alt="Performance Boost & New Features"
              fill
              className="object-cover"
            />
          </div>

          {/* Content placeholder */}
          <article className="prose prose-invert prose-sm max-w-none mb-12">
            <p className="text-body text-sm leading-relaxed">
              This crash course entry covers the fundamentals of SEO performance
              optimization for ecommerce stores. Learn about Core Web Vitals,
              page speed optimization, and new features that can help your store
              rank higher in search results.
            </p>
          </article>

          {/* Next step card */}
          <Link
            href="/resources/crash-course"
            className="flex items-center justify-between gap-4 rounded-xl border border-border p-4 hover:border-accent transition-colors"
          >
            <div className="space-y-1">
              <p className="text-body text-xs">Next step</p>
              <p className="text-heading font-semibold text-sm">
                Doing Keyword Research
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-body shrink-0"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
        <Footer />
      </main>
    </>
  );
}
