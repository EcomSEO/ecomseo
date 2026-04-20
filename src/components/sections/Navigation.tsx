"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import LocaleLink from "@/components/ui/LocaleLink";
import Image from "next/image";
import Button from "@/components/ui/Button";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useLocale } from "@/lib/i18n/useTranslations";
import { navigationTranslations } from "@/lib/i18n/translations/navigation";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config";
import { getEnglishSlug, getLocalizedSlug } from "@/lib/i18n/slugs";
import { buildResourceSections } from "@/lib/navigation/resourcesData";

const mobileLocaleConfig: Record<Locale, { code: string; label: string }> = {
  en: { code: "EN", label: "English" },
  de: { code: "DE", label: "Deutsch" },
  fr: { code: "FR", label: "Français" },
  es: { code: "ES", label: "Español" },
  it: { code: "IT", label: "Italiano" },
  nl: { code: "NL", label: "Nederlands" },
};

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

/* ─── Resource icons ─── */

function IconAudit() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  );
}

function IconTechnical() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

function IconOnPage() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h3" />
    </svg>
  );
}

function IconSchema() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function IconSitemap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <rect x="3" y="14" width="6" height="4" rx="1" />
      <rect x="15" y="14" width="6" height="4" rx="1" />
      <path d="M12 6v4M12 10h-6v4M12 10h6v4" />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M4.93 10.93l2.83 2.83M2 18h4M18 18h4M12 8a10 10 0 00-9.95 10h19.9A10 10 0 0012 8z" />
      <path d="M12 14l3-3" />
    </svg>
  );
}

function IconFundamentals() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function IconKeyword() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconLinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

function IconPlatform() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconIndustry() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V9l5 4V9l5 4V9l5 4V9l5 4v7z" />
    </svg>
  );
}

/* ─── Bol.com-style colored tiles for the Resources mega-menu left column ─── */

function TileIconTools() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function TileIconAcademy() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function TileIconBlog() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
    </svg>
  );
}

const resourceTileByID: Record<"tools" | "academy" | "blog", { bg: string; Icon: React.FC }> = {
  tools: {
    // Orange → red gradient (utility / action)
    bg: "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
    Icon: TileIconTools,
  },
  academy: {
    // Cyan → teal gradient (learning)
    bg: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)",
    Icon: TileIconAcademy,
  },
  blog: {
    // Pink → purple gradient (content)
    bg: "linear-gradient(135deg, #f472b6 0%, #c026d3 100%)",
    Icon: TileIconBlog,
  },
};

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
  // Resource icons
  "audit": IconAudit,
  "technical": IconTechnical,
  "onpage": IconOnPage,
  "schema": IconSchema,
  "sitemap": IconSitemap,
  "speed": IconSpeed,
  "fundamentals": IconFundamentals,
  "keyword": IconKeyword,
  "link": IconLinkIcon,
  "platform": IconPlatform,
  "strategy": IconStrategy,
  "industry": IconIndustry,
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

/* ─── Mobile Language Picker (inline, no overlay) ─── */

function MobileLanguagePicker() {
  const [expanded, setExpanded] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = (params?.locale as Locale) || "en";

  function switchLocale(newLocale: Locale) {
    const localizedPath =
      pathname.replace(/^\/(en|de|fr|es|it|nl)(\/|$)/, "/") || "/";

    // Reverse-translate current locale's slug → English canonical path
    const englishPath = getEnglishSlug(localizedPath, currentLocale);

    // Forward-translate English path → new locale's slug
    const newLocalizedPath = getLocalizedSlug(englishPath, newLocale);

    // Use full page load (not client-side nav) so middleware can rewrite translated slugs
    let targetUrl: string;
    if (newLocale === defaultLocale) {
      targetUrl = newLocalizedPath;
    } else {
      const cleanPath = newLocalizedPath === "/" ? "" : newLocalizedPath;
      targetUrl = `/${newLocale}${cleanPath}`;
    }
    window.location.href = targetUrl;
    setExpanded(false);
  }

  return (
    <div className="border-b border-white/[0.06]">
      <button
        className="flex items-center justify-between w-full py-3 text-white/70"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          <span>{mobileLocaleConfig[currentLocale].label}</span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {expanded && (
        <div className="grid grid-cols-3 gap-1 pb-3">
          {locales.map((loc) => {
            const isActive = loc === currentLocale;
            return (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-white/[0.08] text-white font-medium"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span className="text-[11px] opacity-50">{mobileLocaleConfig[loc].code}</span>
                <span className="text-[13px]">{mobileLocaleConfig[loc].label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── Navigation ─── */

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [mobileSubAccordion, setMobileSubAccordion] = useState<string | null>(null);
  // Null until the user hovers a specific category — keeps the right panel empty
  // when the Resources menu first opens (bol.com-style progressive disclosure).
  const [activeResourceSection, setActiveResourceSection] = useState<"tools" | "academy" | "blog" | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const locale = useLocale();
  const t = navigationTranslations[locale];
  const resourceSections = buildResourceSections(locale);
  const currentResourceSection = resourceSections.find((s) => s.id === activeResourceSection) || null;

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
      // Reset so the next Resources open starts with no section highlighted.
      setActiveResourceSection(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* ─── Top announcement bar ─── */}
      <div className="w-full bg-gradient-to-r from-[rgb(10,10,10)] via-[#1a1025] to-[rgb(10,10,10)] border-b border-purple-500/[0.08]">
        <div className="mx-auto max-w-[1400px] flex items-center justify-center gap-2 px-4 py-1.5">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-white/50 via-white/70 to-white/50 bg-clip-text text-transparent">
            {t.topBarHeadline}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-3 pt-0">
        <div className="relative bg-[rgb(10,10,10)] rounded-none">
          {/* Main nav bar */}
          <div className="mx-auto max-w-[1360px] flex items-center justify-between px-4 py-3">
            {/* Left: Logo + Links */}
            <div className="flex items-center gap-8 xl:gap-[50px]">
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
              <div className="hidden lg:flex items-center gap-3 xl:gap-5">
                {/* Ecommerce SEO Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("ecommerce")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-sm text-white/56 hover:text-white transition-colors whitespace-nowrap">
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
                  <button className="flex items-center gap-1 text-sm text-white/56 hover:text-white transition-colors whitespace-nowrap">
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
                  className="text-sm text-white/56 hover:text-white transition-colors whitespace-nowrap"
                >
                  {t.cases}
                </LocaleLink>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.link/2ls6pk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/[0.08] hover:border-white/[0.16] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
              >
                <div className="relative flex-shrink-0">
                  <Image
                    src="/images/framer/fabian-van-til-new.jpeg"
                    alt="Fabian van Til"
                    width={28}
                    height={28}
                    className="rounded-full object-cover ring-[1.5px] ring-white/20 group-hover:ring-white/40 transition-all"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full border-[1.5px] border-[rgb(10,10,10)]" />
                </div>
                <span className="text-[12px] font-medium text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
                  Chat with Fabian
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
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
                      href="/ecommerce-seo-services"
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
                      href="/ecommerce-seo-platforms"
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
                      href="/ecommerce-seo-industries"
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

          {/* ─── Resources Mega Dropdown (Bol.com-style 2-level) ─── */}
          {openDropdown === "resources" && (
            <div
              className="hidden lg:block"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto max-w-[1320px] px-6 pb-6">
                {/* Header */}
                <div className="flex items-center justify-between py-4 border-b border-white/[0.06]">
                  <p className="text-white text-[15px] font-medium tracking-[-0.01em]">
                    {t.resourcesHeading}
                  </p>
                  <p className="text-white/40 text-[12px]">
                    {t.resourcesSubheading}
                  </p>
                </div>

                <div className="grid grid-cols-[280px_1fr] gap-0 min-h-[480px]">
                  {/* Left column: Section selector. Each row navigates to its hub; hover swaps the right panel preview.
                      Bol.com-style: each row has a colored thumbnail tile on the left + category name. */}
                  <div className="border-r border-white/[0.06] pr-4 py-4">
                    {resourceSections.map((section) => {
                      const isActive = section.id === activeResourceSection;
                      const tile = resourceTileByID[section.id];
                      return (
                        <LocaleLink
                          key={section.id}
                          href={section.seeAllHref}
                          onMouseEnter={() => setActiveResourceSection(section.id)}
                          onFocus={() => setActiveResourceSection(section.id)}
                          onClick={() => setOpenDropdown(null)}
                          className={`group w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-150 mb-1 ${
                            isActive
                              ? "bg-white/[0.06] text-white"
                              : "text-white/70 hover:text-white hover:bg-white/[0.03]"
                          }`}
                        >
                          <div
                            className="flex-shrink-0 w-11 h-11 rounded-[10px] flex items-center justify-center shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_6px_14px_-6px_rgba(0,0,0,0.5)]"
                            style={{ background: tile.bg }}
                          >
                            <tile.Icon />
                          </div>
                          <div className="flex-1 text-left min-w-0">
                            <div className="text-[14px] font-semibold leading-tight truncate">
                              {section.label}
                            </div>
                            <div className="text-[11px] text-white/40 leading-relaxed mt-0.5 truncate">
                              {section.countLabel}
                            </div>
                          </div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`flex-shrink-0 transition-all duration-150 ${
                              isActive ? "text-accent translate-x-0.5" : "text-white/20"
                            }`}
                          >
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </LocaleLink>
                      );
                    })}

                    {/* See all link — only when a section is hovered */}
                    {currentResourceSection && (
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
                        <LocaleLink
                          href={currentResourceSection.seeAllHref}
                          className="flex items-center gap-1.5 p-3 text-[13px] text-accent hover:text-white transition-colors"
                        >
                          {currentResourceSection.seeAllLabel}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </LocaleLink>
                      </div>
                    )}
                  </div>

                  {/* Right column: only shows once the user hovers a left-column category.
                      Bol.com-style progressive disclosure — initial state is a quiet prompt. */}
                  <div className="pl-8 py-4 relative">
                    {activeResourceSection === null ? (
                      <div className="flex items-center justify-center h-full min-h-[440px] text-white/25 text-[13px] italic select-none">
                        Hover a category to explore
                      </div>
                    ) : (
                      resourceSections.map((section) => {
                        const isActive = section.id === activeResourceSection;
                        if (!isActive) return null;
                        return (
                          <div
                            key={section.id}
                            className="grid grid-cols-3 gap-x-8 gap-y-7 animate-[fadeIn_150ms_ease-out]"
                          >
                            {section.groups.map((group) => {
                              const hiddenCount = Math.max(group.totalCount - group.items.length, 0);
                              return (
                                <div key={group.label} className="min-w-0">
                                  <p className="text-white/90 text-[11px] font-semibold uppercase tracking-[0.12em] mb-3 pb-2 border-b border-white/[0.08]">
                                    {group.label}
                                  </p>
                                  <ul className="space-y-1">
                                    {group.items.map((item) => (
                                      <li key={item.href}>
                                        <LocaleLink
                                          href={item.href}
                                          className="block text-[13px] text-white/60 hover:text-white transition-colors leading-snug py-1"
                                        >
                                          {item.label}
                                        </LocaleLink>
                                      </li>
                                    ))}
                                    {hiddenCount > 0 && (
                                      <li>
                                        <LocaleLink
                                          href={group.seeMoreHref}
                                          className="inline-flex items-center gap-1 text-[12px] text-accent hover:text-white transition-colors py-1 mt-0.5"
                                        >
                                          +{hiddenCount} more
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                        </LocaleLink>
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })
                    )}
                  </div>
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

            {/* Resources Accordion (nested: sections → groups → items) */}
            <div className="border-b border-white/[0.06]">
              <button
                className="flex items-center justify-between w-full py-3 text-white/70"
                onClick={() => {
                  setMobileAccordion(
                    mobileAccordion === "resources" ? null : "resources"
                  );
                  setMobileSubAccordion(null);
                }}
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
                <div className="pb-3 space-y-2 pl-2">
                  {resourceSections.map((section) => {
                    const isOpen = mobileSubAccordion === section.id;
                    const iconKey = section.id === "tools" ? "audit" : section.id === "academy" ? "fundamentals" : "strategy";
                    const Icon = iconMap[iconKey];
                    return (
                      <div key={section.id} className="border-l border-white/[0.08] pl-3">
                        <div className="flex items-center justify-between w-full py-2 text-white/70">
                          <LocaleLink
                            href={section.seeAllHref}
                            className="flex items-center gap-2 flex-1 -my-2 py-2 hover:text-white transition-colors"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileAccordion(null);
                              setMobileSubAccordion(null);
                            }}
                          >
                            <div className="flex-shrink-0">{Icon && <Icon />}</div>
                            <div className="text-left">
                              <div className="text-[13px] font-semibold">{section.label}</div>
                              <div className="text-[10px] text-white/40">{section.countLabel}</div>
                            </div>
                          </LocaleLink>
                          <button
                            aria-label={isOpen ? "Collapse" : "Expand"}
                            className="p-2 -mr-2 text-white/50 hover:text-white transition-colors"
                            onClick={() =>
                              setMobileSubAccordion(isOpen ? null : section.id)
                            }
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 16 16"
                              fill="none"
                              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                            >
                              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                        {isOpen && (
                          <div className="pb-2 pl-6 space-y-3">
                            {section.groups.map((group) => (
                              <div key={group.label}>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest py-1.5">
                                  {group.label}
                                </p>
                                <ul className="space-y-0.5">
                                  {group.items.map((item) => (
                                    <li key={item.href}>
                                      <LocaleLink
                                        href={item.href}
                                        className="block text-[13px] text-white/60 hover:text-white transition-colors py-1"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {item.label}
                                      </LocaleLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <LocaleLink
                              href={section.seeAllHref}
                              className="block text-[12px] text-accent hover:text-white transition-colors pt-2"
                              onClick={() => setMobileOpen(false)}
                            >
                              {section.seeAllLabel} →
                            </LocaleLink>
                          </div>
                        )}
                      </div>
                    );
                  })}
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

            {/* WhatsApp Fabian */}
            <a
              href="https://wa.link/2ls6pk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 border-b border-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/framer/fabian-van-til-new.jpeg"
                  alt="Fabian van Til"
                  width={32}
                  height={32}
                  className="rounded-full object-cover ring-[1.5px] ring-white/20"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full border-[1.5px] border-[rgb(10,10,10)]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Chat with Fabian</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </a>

            {/* Mobile Language Selector (inline accordion style) */}
            <MobileLanguagePicker />

            {/* CTA */}
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
