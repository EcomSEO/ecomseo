"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

/* ─── Icon components (pink outlined style matching original Framer site) ─── */

function IconLinkBuilding() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
    </svg>
  );
}

function IconKeywordResearch() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h5l2-3h2l2 3h5" />
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 12h8M8 16h5" />
    </svg>
  );
}

function IconShopify() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 22V4.5C7 3.67 7.67 3 8.5 3h7c.83 0 1.5.67 1.5 1.5V22l-5-3-5 3z" />
      <path d="M12 8v5M10 11h4" />
    </svg>
  );
}

function IconAdobeCommerce() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 16l4-10 4 10M9.5 13h5" />
    </svg>
  );
}

function IconFashion() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16l-2 13H6L4 7z" />
      <path d="M8 7V5a4 4 0 018 0v2" />
    </svg>
  );
}

function IconBeauty() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-1 4-4 6-4 10a4 4 0 008 0c0-4-3-6-4-10z" />
      <path d="M12 17v4" />
    </svg>
  );
}

function IconAmazon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <path d="M9 16c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
    </svg>
  );
}

function IconContentWriting() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
    </svg>
  );
}

function IconWoocommerce() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="3" />
      <path d="M7 9v3M10 8v5M14 8v5M17 9v3" />
    </svg>
  );
}

function IconBigcommerce() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
      <path d="M3 6h18" />
      <path d="M9 10l3 3 3-3" />
    </svg>
  );
}

function IconConsumables() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function IconToys() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="12" width="13" height="8" rx="1" />
      <path d="M15 16h5a2 2 0 002-2v-1a2 2 0 00-2-2h-1l-2-3H9" />
      <circle cx="6" cy="20" r="2" />
      <circle cx="18" cy="20" r="2" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  "link-building": IconLinkBuilding,
  "keyword-research": IconKeywordResearch,
  "shopify": IconShopify,
  "adobe-commerce": IconAdobeCommerce,
  "fashion": IconFashion,
  "beauty": IconBeauty,
  "amazon": IconAmazon,
  "content-writing": IconContentWriting,
  "woocommerce": IconWoocommerce,
  "bigcommerce": IconBigcommerce,
  "consumables": IconConsumables,
  "toys": IconToys,
};

/* ─── Service data ─── */

const allServices = [
  // Row 1
  { label: "Link Building", desc: "Build real off-page authority for your site", href: "/link-building", icon: "link-building" },
  { label: "Keyword Research", desc: "Fundamentals of any SEO strategy", href: "/keyword-research", icon: "keyword-research" },
  { label: "Shopify (Plus)", desc: "Our Chef's Special. We know Shopify.", href: "/shopify-seo", icon: "shopify" },
  { label: "Adobe Commerce", desc: "Previously Magento", href: "/adobe-commerce-seo", icon: "adobe-commerce" },
  { label: "Fashion", desc: "Every fashionista wants some more eyeballs", href: "/fashion-seo", icon: "fashion" },
  { label: "Beauty", desc: "Make more people feel better", href: "/beauty-seo", icon: "beauty" },
  // Row 2
  { label: "Amazon SEO", desc: "Get on top of Amazon with your brand", href: "/amazon-seo", icon: "amazon" },
  { label: "Content Writing", desc: "SEO optimized content for your store", href: "/content-writing", icon: "content-writing" },
  { label: "Woocommerce", desc: "The golden standard for old-school SEO", href: "/woocommerce-seo", icon: "woocommerce" },
  { label: "Bigcommerce", desc: "Many SKU's? No worries, we got it covered", href: "/bigcommerce-seo", icon: "bigcommerce" },
  { label: "Consumables", desc: "Increase LTV and decrease churn with SEO", href: "/consumables-seo", icon: "consumables" },
  { label: "Toys", desc: "A kid's dream! Most parent's nightmare", href: "/toys-seo", icon: "toys" },
];

const resourceLinks = [
  { label: "Library", desc: "Free tools, templates & guides", href: "/resources/library" },
  { label: "Guides", desc: "\u201CGotcha\u2019s\u201D for your SEO journey", href: "/guides" },
  { label: "Solutions", desc: "EcomSEO\u2019s picks to help you scale", href: "/resources/solutions" },
];

/* ─── Service Grid Tile ─── */

function ServiceGridTile({
  label,
  desc,
  href,
  icon,
}: {
  label: string;
  desc: string;
  href: string;
  icon: string;
}) {
  const Icon = iconMap[icon];
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 p-4 rounded-lg hover:bg-white/[0.04] transition-colors"
    >
      <div className="flex-shrink-0 mt-0.5">
        {Icon && <Icon />}
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-[14px] font-semibold text-white group-hover:text-white/90 leading-tight">
          {label}
        </span>
        <span className="text-[12px] text-white/40 leading-relaxed">
          {desc}
        </span>
      </div>
    </Link>
  );
}

/* ─── Resource Tile ─── */

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

/* ─── Navigation ─── */

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
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
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
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
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

          {/* ─── Ecommerce SEO Mega Dropdown (Grid with Icons) ─── */}
          {openDropdown === "ecommerce" && (
            <div
              className="hidden lg:block"
              onMouseEnter={() => handleMouseEnter("ecommerce")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto max-w-[1200px] px-3 pb-8">
                <div className="grid grid-cols-6 divide-x divide-white/[0.06]">
                  {allServices.map((s) => (
                    <ServiceGridTile key={s.href} {...s} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── Resources Dropdown ─── */}
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

        {/* ─── Mobile Menu ─── */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 bg-[rgb(10,10,10)] border border-white/[0.12] rounded-[12px] p-4 max-h-[80vh] overflow-y-auto">
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
                <div className="pb-3 space-y-1">
                  {allServices.map((s) => {
                    const Icon = iconMap[s.icon];
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-3 py-2.5 px-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.04] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="flex-shrink-0">
                          {Icon && <Icon />}
                        </div>
                        <div>
                          <div className="text-white/80 font-medium text-sm">{s.label}</div>
                          <div className="text-white/30 text-xs">{s.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
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
