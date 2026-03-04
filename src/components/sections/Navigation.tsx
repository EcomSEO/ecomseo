"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const servicesByType = [
  {
    label: "Link Building",
    desc: "Build real off-page authority for your site",
    href: "/link-building",
    icon: "graph",
  },
  {
    label: "Keyword Research",
    desc: "Fundamentals of any SEO strategy",
    href: "/keyword-research",
    icon: "search",
  },
  {
    label: "Content Writing",
    desc: "SEO optimized content for your store",
    href: "/content-writing",
    icon: "pen",
  },
];

const servicesByPlatform = [
  {
    label: "Shopify (Plus)",
    desc: "Our Chef's Special. We know Shopify.",
    href: "/shopify-seo",
  },
  {
    label: "Adobe Commerce",
    desc: "Previously Magento",
    href: "/adobe-commerce-seo",
  },
  {
    label: "Amazon SEO",
    desc: "Get on top of Amazon with your brand",
    href: "/amazon-seo",
  },
  {
    label: "Woocommerce",
    desc: "The golden standard for old-school SEO",
    href: "/woocommerce-seo",
  },
  {
    label: "Bigcommerce",
    desc: "Many SKU's? No worries, we got it covered",
    href: "/bigcommerce-seo",
  },
];

const servicesByIndustry = [
  {
    label: "Fashion",
    desc: "Every fashionista wants some more eyeballs",
    href: "/fashion-seo",
  },
  {
    label: "Beauty",
    desc: "Make more people feel better",
    href: "/beauty-seo",
  },
  {
    label: "Consumables",
    desc: "Increase LTV and decrease churn with SEO",
    href: "/consumables-seo",
  },
  {
    label: "Toys",
    desc: "A kid's dream! Most parent's nightmare",
    href: "/toys-seo",
  },
];

const resourceLinks = [
  {
    label: "Library",
    desc: "Free tools, templates & guides",
    href: "/resources/library",
  },
  {
    label: "Guides",
    desc: "\u201CGotcha\u2019s\u201D for your SEO journey",
    href: "/guides",
  },
  {
    label: "Solutions",
    desc: "EcomSEO\u2019s picks to help you scale",
    href: "/resources/solutions",
  },
];

function ServiceTile({
  label,
  desc,
  href,
}: {
  label: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-1.5 p-3 rounded-lg hover:bg-white/5 transition-colors"
    >
      <span className="text-sm font-medium text-white group-hover:text-white/90">
        {label}
      </span>
      <span className="text-xs text-white/40 leading-relaxed">{desc}</span>
    </Link>
  );
}

function ResourceTile({
  label,
  desc,
  href,
}: {
  label: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all"
    >
      <span className="text-sm font-medium text-white">{label}</span>
      <span className="text-xs text-white/40 leading-relaxed">{desc}</span>
    </Link>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1400px] px-3 pt-3">
        <div className="relative bg-[rgb(10,10,10)] rounded-none overflow-hidden">
          {/* Main nav bar */}
          <div className="mx-auto max-w-[1200px] flex items-center justify-between px-3 py-3">
            {/* Left: Logo + Links */}
            <div className="flex items-center gap-[50px]">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="https://framerusercontent.com/images/TQbukBV8G5LIkEwGfbxZAiZs.png"
                  alt="EcomSEO"
                  width={215}
                  height={25}
                  className="h-[25px] w-auto"
                  priority
                />
              </Link>

              {/* Desktop Links */}
              <div className="hidden lg:flex items-center gap-6">
                {/* Ecommerce SEO Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("ecommerce")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-sm text-white/56 hover:text-white transition-colors">
                    Ecommerce SEO
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 256 256"
                      fill="none"
                    >
                      <path
                        d="M213.66 101.66l-80 80a8 8 0 01-11.32 0l-80-80A8 8 0 0148 88h160a8 8 0 015.66 13.66z"
                        fill="rgb(203, 213, 225)"
                      />
                    </svg>
                  </button>
                </div>

                {/* Resources Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-sm text-white/56 hover:text-white transition-colors">
                    Resources
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 256 256"
                      fill="none"
                    >
                      <path
                        d="M213.66 101.66l-80 80a8 8 0 01-11.32 0l-80-80A8 8 0 0148 88h160a8 8 0 015.66 13.66z"
                        fill="rgb(203, 213, 225)"
                      />
                    </svg>
                  </button>
                </div>

                {/* Cases Link */}
                <Link
                  href="/cases"
                  className="text-sm text-white/56 hover:text-white transition-colors"
                >
                  Cases
                </Link>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/client-dashboard"
                target="_blank"
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                Client Dashboard
              </Link>
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="small"
                external
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 8h16M4 16h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Ecommerce SEO Mega Dropdown */}
          {openDropdown === "ecommerce" && (
            <div
              className="hidden lg:block"
              onMouseEnter={() => handleMouseEnter("ecommerce")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto max-w-[1200px] px-3 pb-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* By Service Type */}
                  <div>
                    <div className="text-sm font-medium text-white/70 mb-2 px-3">
                      By service type
                    </div>
                    <div className="h-px bg-slate-700 mb-3" />
                    <div className="flex flex-col">
                      {servicesByType.map((s) => (
                        <ServiceTile key={s.href} {...s} />
                      ))}
                    </div>
                    <Link
                      href="/ecommerce-seo"
                      className="text-xs text-white/40 hover:text-white/70 transition-colors px-3 mt-2 inline-block"
                    >
                      See more services &rarr;
                    </Link>
                  </div>

                  {/* By Platform */}
                  <div>
                    <div className="text-sm font-medium text-white/70 mb-2 px-3">
                      By platform
                    </div>
                    <div className="h-px bg-slate-700 mb-3" />
                    <div className="flex flex-col">
                      {servicesByPlatform.map((s) => (
                        <ServiceTile key={s.href} {...s} />
                      ))}
                    </div>
                    <Link
                      href="/ecommerce-seo"
                      className="text-xs text-white/40 hover:text-white/70 transition-colors px-3 mt-2 inline-block"
                    >
                      See more platforms &rarr;
                    </Link>
                  </div>

                  {/* By Industry */}
                  <div>
                    <div className="text-sm font-medium text-white/70 mb-2 px-3">
                      By industry
                    </div>
                    <div className="h-px bg-slate-700 mb-3" />
                    <div className="flex flex-col">
                      {servicesByIndustry.map((s) => (
                        <ServiceTile key={s.href} {...s} />
                      ))}
                    </div>
                    <Link
                      href="/ecommerce-seo"
                      className="text-xs text-white/40 hover:text-white/70 transition-colors px-3 mt-2 inline-block"
                    >
                      See more industries &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resources Dropdown */}
          {openDropdown === "resources" && (
            <div
              className="hidden lg:block"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto max-w-[1200px] px-3 pb-8">
                <div className="grid grid-cols-3 gap-5">
                  {resourceLinks.map((r) => (
                    <ResourceTile key={r.href} {...r} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 bg-[rgb(10,10,10)] border border-white/[0.12] rounded-[12px] p-4">
            {/* Ecommerce SEO Accordion */}
            <div className="border-b border-white/[0.06]">
              <button
                className="flex items-center justify-between w-full py-3 text-white/70"
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === "ecommerce" ? null : "ecommerce"
                  )
                }
              >
                <span>Ecommerce SEO</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`transition-transform ${mobileAccordion === "ecommerce" ? "rotate-180" : ""}`}
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {mobileAccordion === "ecommerce" && (
                <div className="pl-4 pb-3 space-y-1">
                  <div className="text-xs text-white/40 uppercase tracking-wider py-2">
                    Services
                  </div>
                  {servicesByType.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-white/50 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="text-xs text-white/40 uppercase tracking-wider py-2 mt-2">
                    Platforms
                  </div>
                  {servicesByPlatform.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-white/50 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="text-xs text-white/40 uppercase tracking-wider py-2 mt-2">
                    Industries
                  </div>
                  {servicesByIndustry.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-white/50 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-b border-white/[0.06]">
              <button
                className="flex items-center justify-between w-full py-3 text-white/70"
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === "resources" ? null : "resources"
                  )
                }
              >
                <span>Resources</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`transition-transform ${mobileAccordion === "resources" ? "rotate-180" : ""}`}
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {mobileAccordion === "resources" && (
                <div className="pl-4 pb-3 space-y-1">
                  {resourceLinks.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="block py-2 text-sm text-white/50 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cases Link */}
            <Link
              href="/cases"
              className="block py-3 text-white/70 hover:text-white border-b border-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              Cases
            </Link>

            {/* Client Dashboard */}
            <Link
              href="/client-dashboard"
              target="_blank"
              className="block py-3 text-white/70 hover:text-white border-b border-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              Client Dashboard
            </Link>

            <div className="mt-4">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="small"
                className="w-full justify-center"
                external
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
