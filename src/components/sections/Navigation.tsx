"use client";

import { useState, useRef, useEffect } from "react";
import LocaleLink from "@/components/ui/LocaleLink";
import Image from "next/image";
import Button from "@/components/ui/Button";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useLocale } from "@/lib/i18n/useTranslations";
import { navigationTranslations } from "@/lib/i18n/translations/navigation";

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

/* ─── href → icon key mapping ─── */

const hrefToIcon: Record<string, string> = {
  "/link-building": "link-building",
  "/keyword-research": "keyword-research",
  "/shopify-seo": "shopify",
  "/adobe-commerce-seo": "adobe-commerce",
  "/fashion-seo": "fashion",
  "/beauty-seo": "beauty",
  "/amazon-seo": "amazon",
  "/content-writing": "content-writing",
  "/woocommerce-seo": "woocommerce",
  "/bigcommerce-seo": "bigcommerce",
  "/consumables-seo": "consumables",
  "/toys-seo": "toys",
};

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
    <LocaleLink
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
    </LocaleLink>
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
    <LocaleLink
      href={href}
      className="group flex flex-col gap-2 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all"
    >
      <span className="text-sm font-medium text-white">{label}</span>
      <span className="text-xs text-white/40 leading-relaxed">{desc}</span>
    </LocaleLink>
  );
}

/* ─── Navigation ─── */

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const locale = useLocale();
  const t = navigationTranslations[locale];

  const allServices = t.services.map((s) => ({
    ...s,
    icon: hrefToIcon[s.href] || "",
  }));

  const serviceTypeHrefs = new Set(["/link-building", "/keyword-research", "/amazon-seo", "/content-writing"]);
  const platformHrefs = new Set(["/shopify-seo", "/adobe-commerce-seo", "/woocommerce-seo", "/bigcommerce-seo"]);
  const industryHrefs = new Set(["/fashion-seo", "/beauty-seo", "/consumables-seo", "/toys-seo"]);

  const serviceTypes = allServices.filter((s) => serviceTypeHrefs.has(s.href));
  const platforms = allServices.filter((s) => platformHrefs.has(s.href));
  const industries = allServices.filter((s) => industryHrefs.has(s.href));

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
        <div className="relative bg-[rgb(10,10,10)] rounded-none">
          {/* Main nav bar */}
          <div className="mx-auto max-w-[1200px] flex items-center justify-between px-3 py-3">
            {/* Left: Logo + Links */}
            <div className="flex items-center gap-[50px]">
              <LocaleLink href="/" className="flex-shrink-0">
                <Image
                  src="/images/framer/TQbukBV8G5LIkEwGfbxZAiZs.png"
                  alt="EcomSEO"
                  width={215}
                  height={25}
                  className="h-[25px] w-auto"
                  priority
                />
              </LocaleLink>

              {/* Desktop Links */}
              <div className="hidden lg:flex items-center gap-6">
                {/* Ecommerce SEO Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("ecommerce")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-sm text-white/56 hover:text-white transition-colors">
                    {t.ecommerceSeo}
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
                    {t.resources}
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
                      <path
                        d="M213.66 101.66l-80 80a8 8 0 01-11.32 0l-80-80A8 8 0 0148 88h160a8 8 0 015.66 13.66z"
                        fill="rgb(203, 213, 225)"
                      />
                    </svg>
                  </button>
                </div>

                {/* Cases Link */}
                <LocaleLink
                  href="/cases"
                  className="text-sm text-white/56 hover:text-white transition-colors"
                >
                  {t.cases}
                </LocaleLink>

                {/* Blog Link */}
                <LocaleLink
                  href="/blog"
                  className="text-sm text-white/56 hover:text-white transition-colors"
                >
                  {t.blog}
                </LocaleLink>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <LocaleLink
                href="/client-dashboard"
                target="_blank"
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                {t.clientDashboard}
              </LocaleLink>
              <LanguageSelector />
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="small"
                external
              >
                {t.getInTouch}
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

          {/* ─── Ecommerce SEO Mega Dropdown (3-column) ─── */}
          {openDropdown === "ecommerce" && (
            <div
              className="hidden lg:block"
              onMouseEnter={() => handleMouseEnter("ecommerce")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto max-w-[1200px] px-6 pb-8">
                {/* Header row */}
                <div className="flex items-center justify-between py-5 mb-2 border-b border-white/[0.06]">
                  <div className="flex-1" />
                  <p className="text-white text-[15px] font-medium tracking-[-0.01em]">
                    {t.megaMenuHeading}
                  </p>
                  <div className="flex-1 flex justify-end">
                    <LocaleLink
                      href="/ecommerce-seo"
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {t.ourFramework}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </LocaleLink>
                  </div>
                </div>

                {/* Three columns */}
                <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
                  {/* Col 1: By service type */}
                  <div className="pr-8 py-4">
                    <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest mb-3">
                      {t.byServiceType}
                    </p>
                    <div className="border-t border-white/[0.06] mb-3" />
                    <div className="grid grid-cols-2">
                      {serviceTypes.map((s) => (
                        <ServiceGridTile key={s.href} {...s} />
                      ))}
                    </div>
                    <LocaleLink
                      href="/ecommerce-seo"
                      className="mt-3 text-[13px] text-white/30 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {t.seeMoreServices}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </LocaleLink>
                  </div>

                  {/* Col 2: By platform */}
                  <div className="px-8 py-4">
                    <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest mb-3">
                      {t.byPlatform}
                    </p>
                    <div className="border-t border-white/[0.06] mb-3" />
                    <div className="grid grid-cols-2">
                      {platforms.map((s) => (
                        <ServiceGridTile key={s.href} {...s} />
                      ))}
                    </div>
                    <LocaleLink
                      href="/ecommerce-seo"
                      className="mt-3 text-[13px] text-white/30 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {t.seeMorePlatforms}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </LocaleLink>
                  </div>

                  {/* Col 3: By industry */}
                  <div className="pl-8 py-4">
                    <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest mb-3">
                      {t.byIndustry}
                    </p>
                    <div className="border-t border-white/[0.06] mb-3" />
                    <div className="grid grid-cols-2">
                      {industries.map((s) => (
                        <ServiceGridTile key={s.href} {...s} />
                      ))}
                    </div>
                    <LocaleLink
                      href="/ecommerce-seo"
                      className="mt-3 text-[13px] text-white/30 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {t.seeMoreIndustries}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </LocaleLink>
                  </div>
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
                  {t.resourceLinks.map((r) => (
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
                <span>{t.ecommerceSeo}</span>
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
                <div className="pb-3 space-y-4">
                  {[
                    { label: t.byServiceType, items: serviceTypes },
                    { label: t.byPlatform, items: platforms },
                    { label: t.byIndustry, items: industries },
                  ].map((group) => (
                    <div key={group.label}>
                      <p className="text-white/30 text-[10px] uppercase tracking-widest px-2 mb-1">{group.label}</p>
                      {group.items.map((s) => {
                        const Icon = iconMap[s.icon];
                        return (
                          <LocaleLink
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-3 py-2 px-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.04] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="flex-shrink-0">{Icon && <Icon />}</div>
                            <div>
                              <div className="text-white/80 font-medium text-sm">{s.label}</div>
                              <div className="text-white/30 text-xs">{s.desc}</div>
                            </div>
                          </LocaleLink>
                        );
                      })}
                    </div>
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
                <span>{t.resources}</span>
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
                  {t.resourceLinks.map((r) => (
                    <LocaleLink
                      key={r.href}
                      href={r.href}
                      className="block py-2 text-sm text-white/50 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {r.label}
                    </LocaleLink>
                  ))}
                </div>
              )}
            </div>

            {/* Cases Link */}
            <LocaleLink
              href="/cases"
              className="block py-3 text-white/70 hover:text-white border-b border-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              {t.cases}
            </LocaleLink>

            {/* Blog Link */}
            <LocaleLink
              href="/blog"
              className="block py-3 text-white/70 hover:text-white border-b border-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              {t.blog}
            </LocaleLink>

            {/* Client Dashboard */}
            <LocaleLink
              href="/client-dashboard"
              target="_blank"
              className="block py-3 text-white/70 hover:text-white border-b border-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              {t.clientDashboard}
            </LocaleLink>

            {/* Language Selector */}
            <div className="py-3 border-b border-white/[0.06]">
              <LanguageSelector />
            </div>

            <div className="mt-4">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="small"
                className="w-full justify-center"
                external
              >
                {t.getInTouch}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
