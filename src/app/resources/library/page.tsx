import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Resource Library — Tools, Templates & Guides | EcomSEO",
  description:
    "The best ecommerce SEO resources on planet earth. Tools, templates, guides and SOPs to boost your e-commerce SEO.",
  openGraph: {
    title: "Resource Library — Tools, Templates & Guides | EcomSEO",
    description: "The best ecommerce SEO resources on planet earth.",
  },
};

interface Resource {
  title: string;
  description: string;
  href: string;
  isPlaceholder?: boolean;
}

const categories: {
  id: string;
  label: string;
  icon: React.ReactNode;
  resources: Resource[];
}[] = [
  {
    id: "ai-tools",
    label: "AI Tools",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    ),
    resources: [
      {
        title: "ABC Template",
        description: "AI-powered content generation template for ecommerce product descriptions and category pages.",
        href: "/resources/library/template",
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for more AI tools.",
        href: "#",
        isPlaceholder: true,
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for more AI tools.",
        href: "#",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "on-page",
    label: "On-Page SEO",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    resources: [
      {
        title: "Fundamentals Checklist",
        description:
          "The absolute first thing we do when starting a new project.",
        href: "/resources/library/on-page-checklist",
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for more on-page guides.",
        href: "#",
        isPlaceholder: true,
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for more on-page guides.",
        href: "#",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "off-page",
    label: "Off-Page SEO",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    resources: [
      {
        title: "New Template",
        description: "Coming soon — stay tuned for off-page SEO resources.",
        href: "#",
        isPlaceholder: true,
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for off-page SEO resources.",
        href: "#",
        isPlaceholder: true,
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for off-page SEO resources.",
        href: "#",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "sops",
    label: "SOP's",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    resources: [
      {
        title: "New Template",
        description: "Coming soon — stay tuned for SOPs.",
        href: "#",
        isPlaceholder: true,
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for SOPs.",
        href: "#",
        isPlaceholder: true,
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for SOPs.",
        href: "#",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "templates",
    label: "Templates",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    resources: [
      {
        title: "Ecommerce SEO ROI Calculation Sheet",
        description:
          "Will SEO be profitable for my brand? Insert your own data and visualise your SEO potential.",
        href: "/resources/library/roi-calculation-sheet",
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for more templates.",
        href: "#",
        isPlaceholder: true,
      },
      {
        title: "New Template",
        description: "Coming soon — stay tuned for more templates.",
        href: "#",
        isPlaceholder: true,
      },
    ],
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  if (resource.isPlaceholder) {
    return (
      <div className="rounded-xl bg-white-05 border border-border p-5 flex flex-col gap-3 opacity-60">
        <div className="w-10 h-10 rounded-lg bg-white-10 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-body"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <h3 className="text-body font-medium text-sm">{resource.title}</h3>
        <p className="text-body text-xs leading-relaxed">
          {resource.description}
        </p>
      </div>
    );
  }

  return (
    <Link
      href={resource.href}
      className="group rounded-xl bg-bg-card border border-border p-5 flex flex-col gap-3 hover:border-border-strong transition-colors"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>
      <h3 className="text-heading font-medium text-sm group-hover:text-accent transition-colors">
        {resource.title}
      </h3>
      <p className="text-body text-xs leading-relaxed">
        {resource.description}
      </p>
    </Link>
  );
}

export default function ResourceLibraryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col w-[260px] shrink-0 border-r border-border pt-[120px] px-4 pb-8 sticky top-0 h-screen overflow-y-auto">
            <nav className="flex flex-col gap-1 mt-8">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-body hover:text-heading hover:bg-white-05 transition-colors text-sm"
                >
                  <span className="text-body">{cat.icon}</span>
                  {cat.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <Link
                href="/resources"
                className="flex items-center gap-2 text-body hover:text-heading text-sm transition-colors"
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
                All resources
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 pt-[120px] md:pt-[140px] px-5 md:px-10 pb-20">
            <div className="max-w-[900px]">
              {/* Header */}
              <div className="mb-12">
                <Badge text="Resource Library" />
                <h1 className="text-[32px] md:text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mt-4 mb-3">
                  Tools, Templates &amp; Guides related to SEO to boost
                  e-commerce
                </h1>
                <p className="text-body text-base">
                  The best ecommerce SEO resources on planet earth.
                </p>
              </div>

              {/* Search */}
              <div className="mb-12">
                <input
                  type="text"
                  placeholder="Search Resources..."
                  className="w-full max-w-[400px] px-4 py-3 rounded-xl bg-bg-input border border-border text-heading text-sm placeholder:text-body focus:outline-none focus:border-accent"
                />
              </div>

              {/* Category sections */}
              {categories.map((cat) => (
                <section key={cat.id} id={cat.id} className="mb-16">
                  <h2 className="text-heading font-medium text-lg mb-6 flex items-center gap-2">
                    <span className="text-accent">{cat.icon}</span>
                    {cat.label}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.resources.map((resource, i) => (
                      <ResourceCard key={`${cat.id}-${i}`} resource={resource} />
                    ))}
                  </div>
                </section>
              ))}

              {/* Back link (mobile) */}
              <div className="lg:hidden mt-8">
                <Link
                  href="/resources"
                  className="flex items-center gap-2 text-body hover:text-heading text-sm transition-colors"
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
                  All resources
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
