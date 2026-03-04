import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Beginner to Hero — Ecommerce SEO Crash Course | EcomSEO",
  description:
    "What you should know from an absolute beginner to start ranking your site seriously on Search Engines.",
  openGraph: {
    title: "Beginner to Hero — Ecommerce SEO Crash Course | EcomSEO",
    description:
      "What you should know from an absolute beginner to start ranking your site seriously on Search Engines.",
  },
};

interface CrashCourseEntry {
  date: string;
  title: string;
  badge: string;
  image: string;
  content: string;
  href: string;
}

const entries: CrashCourseEntry[] = [
  {
    date: "January 23, 2025",
    title: "Performance Boost & New Features",
    badge: "SEO 101",
    image:
      "https://framerusercontent.com/images/ItBctzl5M66ve6J7UvXVHZQQShs.png",
    content:
      "Learn the fundamentals of SEO performance and discover new features that can help your ecommerce store rank higher in search results.",
    href: "/resources/crash-course/changelog-page",
  },
  {
    date: "January 23, 2025",
    title: "Performance Boost & New Features",
    badge: "SEO 101",
    image:
      "https://framerusercontent.com/images/ItBctzl5M66ve6J7UvXVHZQQShs.png",
    content:
      "Continuing our series on ecommerce SEO basics with advanced techniques for optimizing your product and collection pages.",
    href: "/resources/crash-course/changelog-page",
  },
];

export default function CrashCoursePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-[1024px] px-5 md:px-10 pt-[120px] md:pt-[140px] pb-20">
          {/* Hero */}
          <section className="text-center mb-24 pt-14">
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-3">
              Beginner to Hero - Ecommerce SEO Crash Course
            </h1>
            <p className="text-body text-base max-w-[600px] mx-auto">
              What you should know from an absolute beginner to start ranking
              your site seriously on Search Engines.
            </p>
          </section>

          {/* Timeline */}
          <div className="flex flex-col gap-2.5">
            {entries.map((entry, i) => (
              <div key={i} className="flex gap-6">
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="p-2">
                    <div className="w-[7px] h-[7px] rounded-full bg-body" />
                  </div>
                  {i < entries.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-10 w-full">
                  {/* Meta */}
                  <div className="w-full md:w-[360px] shrink-0 space-y-4">
                    <div className="space-y-2">
                      <p className="text-body text-sm">{entry.date}</p>
                      <h2 className="text-heading font-semibold text-xl">
                        {entry.title}
                      </h2>
                      <div className="pt-2">
                        <Badge text={entry.badge} />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-16">
                    <div className="rounded-[20px] border border-border overflow-hidden p-8 flex flex-col gap-6">
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                        <Image
                          src={entry.image}
                          alt={entry.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-body text-sm leading-relaxed">
                        {entry.content}
                      </p>
                      <Link
                        href={entry.href}
                        className="inline-flex items-center gap-2 text-heading text-sm font-medium hover:text-accent transition-colors"
                      >
                        Read more
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
