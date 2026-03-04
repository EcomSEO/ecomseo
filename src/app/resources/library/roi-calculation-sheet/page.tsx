import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Ecommerce SEO ROI Calculation Sheet | EcomSEO Resource Library",
  description:
    "Will SEO be profitable for my brand? Insert your own data and visualise your SEO potential with this ROI calculator.",
  openGraph: {
    title: "Ecommerce SEO ROI Calculation Sheet | EcomSEO Resource Library",
    description:
      "Insert your own data and visualise your SEO potential.",
  },
};

const relatedResources = [
  {
    title: "ABC Template",
    description: "AI-powered content generation template for ecommerce.",
    href: "/resources/library/template",
  },
  {
    title: "Fundamentals Checklist",
    description: "The absolute first thing we do when starting a new project.",
    href: "/resources/library/on-page-checklist",
  },
  {
    title: "SEO Fundamentals Guide",
    description: "Complete guide to ecommerce SEO fundamentals.",
    href: "/guides/fundamentals",
  },
];

export default function RoiCalculationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white text-gray-900">
        <div className="mx-auto max-w-[1000px] px-5 md:px-10 pt-[120px] md:pt-[140px] pb-20">
          {/* Back nav */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/resources/library"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-colors"
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
              All swipe files
            </Link>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Copy link
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <span>Resources</span>
            <span>/</span>
            <span>Swipe-Files</span>
            <span>/</span>
            <span>Templates</span>
            <span>/</span>
            <span className="text-gray-600">ROI Calculation Sheet</span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(37, 99, 235)"
                strokeWidth="2"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <h1 className="text-[28px] md:text-[36px] font-semibold leading-[1.1] tracking-[-0.02em]">
              Ecommerce SEO ROI Calculation Sheet
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-[640px] mb-8">
            <p className="text-gray-600 text-base leading-relaxed">
              Will SEO be profitable for my brand? Insert your own data and
              visualise your SEO potential. This spreadsheet helps you model
              organic traffic growth, conversion rates, and revenue impact to
              calculate the true ROI of investing in SEO.
            </p>
          </div>

          {/* Download CTA */}
          <div className="mb-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get this template
            </button>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mb-16 pb-8 border-b border-gray-200">
            <Image
              src="https://framerusercontent.com/images/TInweDbtgC4BbdOxO9KSYbemgM.png"
              alt="Fabian van Til"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-gray-900 text-sm font-medium">
                Created by Fabian van Til
              </p>
              <p className="text-gray-400 text-xs">May 2025</p>
            </div>
          </div>

          {/* Related resources */}
          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
              Our most popular resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedResources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group rounded-xl border border-gray-200 p-5 flex flex-col gap-2 hover:border-purple-300 transition-colors"
                >
                  <h3 className="text-gray-900 font-medium text-sm group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="bg-bg">
        <Footer />
      </div>
    </>
  );
}
