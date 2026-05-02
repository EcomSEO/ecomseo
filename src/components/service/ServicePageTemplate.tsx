"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LocaleLink from "@/components/ui/LocaleLink";
import { serviceTemplateStrings } from "@/lib/i18n/translations/services";
import { parseInlineLinks } from "@/lib/parseInlineLinks";
import VidalyticsEmbed from "@/components/ui/VidalyticsEmbed";
import IClosedEmbed from "@/components/ui/IClosedEmbed";
import type { Locale } from "@/lib/i18n/config";

/* ─── Types ─── */

export interface StatItem {
  value: string;
  label: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  href?: string;
  icon?: string;
}

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
  href?: string;
}

export interface DeliverableItem {
  title: string;
  description: string;
}

export interface LinkItem {
  title: string;
  description: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RichTextBlock {
  heading?: string;
  body: string;
  href?: string;
  hrefLabel?: string;
}

export interface TipItem {
  number: string;
  title: string;
  body: string;
  href?: string;
  hrefLabel?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
}

export interface CaseStudyItem {
  badge: string;
  title: string;
  metrics: StatItem[];
  quote?: string;
  quoteAuthor?: string;
  href?: string;
  image?: string;
}

/* Maison-style revenue win — big number, screenshot, gray context.
 * Mirrors the homepage Results section so commercial-intent visitors
 * see proof in dollars/euros, not vanity stats. */
export interface RevenueWin {
  amount: string;       // e.g. "+$53,000,000"
  label: string;        // e.g. "yearly revenue (+118%)"
  client: string;       // e.g. "for this Home & Living brand"
  condition: string;    // e.g. "after 12 months with us"
  screenshot: string;
  href?: string;
}

export interface ContentSection {
  type:
    | "stats"
    | "benefits"
    | "process"
    | "deliverables"
    | "links"
    | "richText"
    | "tips"
    | "team"
    | "caseStudies"
    | "revenueWins"
    | "bookingWidget";
  badge?: string;
  heading: string;
  subtitle?: string;
  stats?: StatItem[];
  benefits?: BenefitItem[];
  process?: ProcessItem[];
  deliverables?: DeliverableItem[];
  links?: LinkItem[];
  richTextBlocks?: RichTextBlock[];
  /** Optional hero image for richText sections (e.g. localised map for
   *  location/agency pages). Rendered above the heading, full-width. */
  image?: string;
  imageAlt?: string;
  tips?: TipItem[];
  teamMembers?: TeamMember[];
  teamLead?: TeamMember;
  caseStudies?: CaseStudyItem[];
  revenueWins?: RevenueWin[];
  ctaText?: string;
  ctaHref?: string;
}

export interface ServicePageProps {
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    ctaText: string;
    heroImage?: string;
    /** Vidalytics embed ID for an intro video shown under the hero copy.
     *  When set, renders the same Fabian-intro player used on the homepage. */
    videoEmbedId?: string;
    /** Override for the hero CTA destination. Defaults to the Typeform URL.
     *  For commercial-intent pages (location/agency pages) we point this at
     *  /demo so the visitor lands on the audit booking flow. */
    ctaHref?: string;
    /** Optional small line shown under the CTA, e.g. "Watch the 2-min intro". */
    ctaSubtext?: string;
  };
  trustBar: string;
  trustBarIcon?: "shopify" | "woocommerce" | "bigcommerce" | "adobe";
  /** Optional client-logo wall, rendered above the trust-bar text.
   *  Mirrors the /demo (audit) page logo strip. When set, the trust-bar
   *  text becomes the eyebrow (uppercase) and an optional "+ many more
   *  brands" italic caption can be appended. */
  trustBarLogos?: Array<{ src: string; alt: string; noFilter?: boolean }>;
  /** Italic caption appended after the logo wall, e.g. "+ 50 marques au total" */
  trustBarMoreBrands?: string;
  sections: ContentSection[];
  faqs: {
    items: FAQItem[];
    miniCta: {
      heading: string;
      subtitle: string;
      /** Override the bottom-of-FAQ CTA destination. Defaults to the
       *  Typeform contact form. For commercial-intent pages we point this at
       *  /demo so we don't split traffic away from the booking flow. */
      ctaHref?: string;
      /** Override CTA button label. Defaults to the locale's "Get in touch". */
      ctaText?: string;
    };
  };
  locale?: Locale;
}

/* ─── Shared animation config ─── */
const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6 },
};

const cardAnim = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

/* ─── Reusable gradient orbs (like HP hero/CTA) ─── */
function GlowOrbs({ size = 360, opacity = 0.4, bottom = -280 }: { size?: number; opacity?: number; bottom?: number }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 z-0 flex items-center justify-center" style={{ bottom }}>
      {/* Center */}
      <div
        className="absolute animate-glow-rotate"
        style={{
          width: size * 1.15,
          height: size * 1.15,
          background: "conic-gradient(from 0deg, transparent 0deg, rgb(123, 45, 233) 60deg, transparent 120deg)",
          borderRadius: "50%",
          filter: "blur(40px)",
          opacity: opacity * 1.4,
        }}
      />
      {/* Left */}
      <div
        className="absolute"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          left: "15%",
          background: "conic-gradient(from 180deg, transparent 0deg, rgb(193, 100, 230) 90deg, transparent 180deg)",
          borderRadius: "50%",
          filter: "blur(40px)",
          opacity,
          animation: "glow-rotate 8s linear infinite reverse",
        }}
      />
      {/* Right */}
      <div
        className="absolute"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          right: "15%",
          background: "conic-gradient(from 90deg, transparent 0deg, rgb(123, 45, 233) 120deg, transparent 240deg)",
          borderRadius: "50%",
          filter: "blur(40px)",
          opacity,
          animation: "glow-rotate 10s linear infinite",
        }}
      />
    </div>
  );
}

/* ─── Section header ─── */
function SectionHeader({ badge, heading, subtitle }: { badge?: string; heading: string; subtitle?: string }) {
  return (
    <motion.div className="flex flex-col items-center text-center gap-6" {...sectionAnim}>
      {badge && <Badge text={badge} />}
      <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
        {heading}
      </h2>
      {subtitle && (
        <p className="text-body text-base md:text-lg max-w-[746px]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─── Arrow icon ─── */
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`flex-shrink-0 ${className}`}>
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Sub-components ─── */

function ServiceHero({
  badge,
  heading,
  subtitle,
  ctaText,
  heroImage,
  videoEmbedId,
  ctaHref,
  ctaSubtext,
}: ServicePageProps["hero"]) {
  const resolvedCtaHref = ctaHref || "https://w35pmime997.typeform.com/to/eqeeLQvb";
  const isExternal = /^https?:\/\//.test(resolvedCtaHref);
  return (
    <section className="relative w-full overflow-hidden">
      {/* Glow orbs background */}
      <GlowOrbs size={380} opacity={0.35} bottom={-320} />

      <div className="relative z-[1] px-5 md:px-10 pt-[107px] pb-16">
        <div className="mx-auto max-w-[1120px] flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge text={badge} />
          </motion.div>
          <motion.h1
            className="text-[36px] md:text-[56px] lg:text-[68px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[823px] break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {heading}
          </motion.h1>
          <motion.p
            className="text-body text-base md:text-lg font-medium max-w-[680px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          {/* Fabian intro video — optional. Mirrors the homepage Vidalytics
              embed so commercial-intent visitors see a face + 2-minute pitch
              before being asked to book. */}
          {videoEmbedId && (
            <motion.div
              className="relative w-full max-w-[860px] rounded-3xl overflow-hidden border border-border/60 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <VidalyticsEmbed embedId={videoEmbedId} />
              <div
                className="absolute pointer-events-none"
                style={{
                  width: 380,
                  height: 380,
                  top: -110,
                  right: -110,
                  background:
                    "radial-gradient(circle, rgba(193,100,230,0.22) 0%, transparent 60%)",
                  filter: "blur(40px)",
                }}
                aria-hidden
              />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`flex flex-col items-center gap-2 ${videoEmbedId ? "pt-3" : "pt-2"}`}
          >
            <Button
              href={resolvedCtaHref}
              variant="primary"
              size="large"
              external={isExternal}
            >
              {ctaText}
            </Button>
            {ctaSubtext && (
              <span className="text-[13px] text-body/60">{ctaSubtext}</span>
            )}
          </motion.div>
          {heroImage && (
            <motion.div
              className="mt-4 w-full max-w-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={heroImage}
                alt={heading}
                width={500}
                height={500}
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Platform trust-bar icons ─── */
const platformIcons: Record<string, React.ReactNode> = {
  shopify: (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#95BF47]/10 flex-shrink-0">
      <svg width="16" height="18" viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg">
        <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.834-.183.05-3.37 1.042-8.633 2.666-5.18-14.906-14.322-28.604-30.37-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.937.001 119.36.001 78.625.001 59.12 50.878 52.71 76.725c-16.842 5.217-28.798 8.92-30.222 9.39-9.332 2.94-9.638 3.232-10.872 12.085C10.448 105.752 0 186.027 0 186.027l166.867 31.265 76.633-19.263s-19.526-139.228-19.726-140.689z" fill="#95BF47"/>
        <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.96-2.394-1.062l-11.384 232.45 76.633-19.263S224 56.443 223.774 54.983z" fill="#5E8E3E"/>
        <path d="M135.291 104.585l-11.04 32.789s-9.703-5.161-21.555-5.161c-17.417 0-18.293 10.932-18.293 13.692 0 15.038 39.2 20.799 39.2 56.024 0 27.713-17.575 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.555 4.461 22.555 4.461z" fill="#FFF"/>
      </svg>
    </span>
  ),
  woocommerce: (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#96588A]/10 flex-shrink-0">
      <svg width="16" height="10" viewBox="0 0 120 68" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.94 0h98.12C115.1 0 120 4.9 120 10.94v36.84c0 6.04-4.9 10.94-10.94 10.94H73.64l5.12 9.28-18.96-9.28H10.94C4.9 48.72 0 43.82 0 37.78V10.94C0 4.9 4.9 0 10.94 0z" fill="#96588A"/>
        <path d="M14.73 12.47c.64-.78 1.49-1.2 2.57-1.27 1.95-.12 3.1.94 3.45 3.18l4.22 23.59 9.27-17.76c.85-1.6 1.91-2.44 3.18-2.5 1.83-.1 2.96 1.08 3.38 3.54.8 4.66 1.85 8.6 3.16 11.81 .87-8.77 2.93-15.13 6.19-19.12.64-.78 1.47-1.2 2.52-1.27.8-.05 1.54.2 2.23.74.69.55 1.08 1.23 1.17 2.04.07.63-.02 1.17-.28 1.64-2.05 3.14-3.73 8.42-5.06 15.84-.53 2.9-.64 5.12-.33 6.66.31 1.55-.02 2.79-.98 3.72a3.08 3.08 0 01-2.17 1c-1.02.06-2.08-.52-3.16-1.72-3.75-4.2-6.72-10.47-8.91-18.82-2.83 5.6-4.89 9.91-6.19 12.92-2.54 5.07-4.7 7.67-6.49 7.78-1.15.07-2.13-.93-2.94-3L13.14 16c-.23-.97-.14-1.82.28-2.56.42-.74 1-.16 1.31-.97z" fill="#FFF"/>
        <path d="M76.5 15.08c-1.48 1.19-2.48 2.88-3.01 5.07-.53 2.2-.49 4.19.12 5.97.73 2.11 1.94 3.1 3.62 2.97 1.7-.13 3.15-1.32 4.33-3.58.99-1.93 1.47-3.94 1.43-6.03-.04-1.62-.4-2.91-1.08-3.88-.88-1.25-2.09-1.79-3.62-1.62-.68.08-1.26.38-1.79 1.1zm10.1-5.48c1.61 2.07 2.42 4.72 2.42 7.94 0 4.32-1.18 8.26-3.55 11.83-2.77 4.18-6.28 6.47-10.52 6.88-2.98.28-5.47-.56-7.49-2.53-1.76-1.74-2.87-4.1-3.31-7.08-.41-2.72-.15-5.38.78-7.98 1.14-3.22 2.99-5.85 5.56-7.89 2.86-2.3 5.88-3.61 9.04-3.9 2.65-.25 4.87.47 6.07 2.73z" fill="#FFF"/>
        <path d="M101.38 15.08c-1.48 1.19-2.48 2.88-3.01 5.07-.53 2.2-.49 4.19.12 5.97.73 2.11 1.94 3.1 3.62 2.97 1.7-.13 3.15-1.32 4.33-3.58.99-1.93 1.47-3.94 1.43-6.03-.04-1.62-.4-2.91-1.08-3.88-.88-1.25-2.09-1.79-3.62-1.62-.68.08-1.26.38-1.79 1.1zm10.1-5.48c1.61 2.07 2.42 4.72 2.42 7.94 0 4.32-1.18 8.26-3.55 11.83-2.77 4.18-6.28 6.47-10.52 6.88-2.98.28-5.47-.56-7.49-2.53-1.76-1.74-2.87-4.1-3.31-7.08-.41-2.72-.15-5.38.78-7.98 1.14-3.22 2.99-5.85 5.56-7.89 2.86-2.3 5.88-3.61 9.04-3.9 2.65-.25 4.87.47 6.07 2.73z" fill="#FFF"/>
      </svg>
    </span>
  ),
  bigcommerce: (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#34313F]/20 flex-shrink-0">
      <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.768 14.496l6.252 6.252 6.252-6.252-6.252-6.264zm0-4.992L12.02 3.252 18.272 9.504l-6.252 6.252z" fill="#FFF"/>
      </svg>
    </span>
  ),
  adobe: (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#E03C31]/10 flex-shrink-0">
      <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2L2 22h4.5l2.1-5.5h5.4L9.5 2zm4.5 0L22 22h-4.5l-2.1-5.5h-1.6L14 2z" fill="#E03C31"/>
      </svg>
    </span>
  ),
};

function TrustBar({
  text,
  icon,
  logos,
  moreBrands,
}: {
  text: string;
  icon?: "shopify" | "woocommerce" | "bigcommerce" | "adobe";
  logos?: Array<{ src: string; alt: string; noFilter?: boolean }>;
  moreBrands?: string;
}) {
  // Logo-wall variant — mirrors the /demo audit page strip exactly.
  // Used by commercial-intent location pages where logos > word count.
  if (logos && logos.length > 0) {
    return (
      <motion.section
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="px-6 md:px-8 lg:px-16 py-12 border-t border-border">
          <div className="mx-auto max-w-[1100px] w-full flex flex-col items-center gap-6">
            <p className="text-[12px] tracking-[0.18em] text-body/60 uppercase text-center">
              {text}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6 opacity-70">
              {logos.map((logo) => (
                <Image
                  key={logo.src + logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  className="h-6 md:h-7 w-auto max-w-[140px] object-contain"
                  // White-out non-color logos so they sit consistently on
                  // the dark page; flag noFilter on already-white assets.
                  style={logo.noFilter ? undefined : { filter: "brightness(0) invert(1)" }}
                />
              ))}
              {moreBrands && (
                <span className="text-body/40 text-[13px] italic">{moreBrands}</span>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  // Default text-only trust bar (every other service/location page).
  return (
    <motion.section
      className="w-full px-5 md:px-10 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="mx-auto max-w-[1120px] flex justify-center">
        <span className="text-body-strong text-sm md:text-base text-center font-medium inline-flex items-center gap-2.5">
          {icon && platformIcons[icon]}
          {text}
        </span>
      </div>
    </motion.section>
  );
}

/* Stat icons by label keyword */
const statIcons = [
  // Calendar / Years
  <svg key="years" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  // Dollar / Revenue
  <svg key="revenue" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  // Store / Stores
  <svg key="stores" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  // TrendingUp / Traffic
  <svg key="traffic" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
];

function StatsSection({
  badge,
  heading,
  subtitle,
  items,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: StatItem[];
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-12">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center gap-3 p-8 rounded-3xl border border-border overflow-hidden group hover:border-accent/30 transition-all duration-300"
              {...cardAnim(i)}
            >
              {/* Subtle radial glow on hover */}
              <div className="absolute inset-0 bg-bg-card" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 50% 80%, rgba(123, 45, 233, 0.15) 0%, transparent 70%)`,
                }}
              />
              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-1">
                {statIcons[i % statIcons.length]}
              </div>
              <span className="relative z-10 font-[family-name:var(--font-figtree)] text-[32px] md:text-[42px] font-medium text-heading">
                {item.value}
              </span>
              <span className="relative z-10 text-sm text-body">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Card gradients matching homepage Services section aurora style */
const benefitCardGradients = [
  "radial-gradient(ellipse at 0% 40%, rgba(123, 45, 233, 0.2) 0%, rgba(123, 45, 233, 0.04) 50%, transparent 70%)",
  "radial-gradient(ellipse at 100% 30%, rgba(140, 70, 255, 0.2) 0%, rgba(193, 100, 230, 0.1) 30%, transparent 65%)",
  "radial-gradient(ellipse at 85% 80%, rgba(0, 170, 255, 0.18) 0%, rgba(80, 120, 255, 0.08) 35%, transparent 70%)",
  "radial-gradient(ellipse at 20% 80%, rgba(193, 100, 230, 0.18) 0%, rgba(123, 45, 233, 0.06) 45%, transparent 70%)",
  "radial-gradient(ellipse at 100% 0%, rgba(123, 45, 233, 0.2) 0%, rgba(80, 80, 255, 0.08) 40%, transparent 70%)",
  "radial-gradient(ellipse at 50% 100%, rgba(0, 170, 255, 0.15) 0%, rgba(123, 45, 233, 0.06) 45%, transparent 70%)",
];

/* Benefit card icons — auto-detected from title keywords */
const benefitIcons: Record<string, React.ReactNode> = {
  duplicate: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V6a2 2 0 012-2h10"/></svg>,
  speed: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  canonical: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
  pagination: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg>,
  schema: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>,
  url: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M2 12h20"/><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z"/></svg>,
  audit: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6M11 8v6"/></svg>,
  architecture: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  keyword: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  onpage: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  link: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  report: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  default: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
};

function getBenefitIcon(title: string): React.ReactNode {
  const t = title.toLowerCase();
  if (t.includes("duplicate")) return benefitIcons.duplicate;
  if (t.includes("speed") || t.includes("slow") || t.includes("fast")) return benefitIcons.speed;
  if (t.includes("canonical")) return benefitIcons.canonical;
  if (t.includes("pagination") || t.includes("index")) return benefitIcons.pagination;
  if (t.includes("schema") || t.includes("structured")) return benefitIcons.schema;
  if (t.includes("url") || t.includes("structure limit")) return benefitIcons.url;
  if (t.includes("audit")) return benefitIcons.audit;
  if (t.includes("architect") || t.includes("collection")) return benefitIcons.architecture;
  if (t.includes("keyword")) return benefitIcons.keyword;
  if (t.includes("on-page") || t.includes("optimization")) return benefitIcons.onpage;
  if (t.includes("link") || t.includes("pr")) return benefitIcons.link;
  if (t.includes("report")) return benefitIcons.report;
  return benefitIcons.default;
}

function BenefitsSection({
  badge,
  heading,
  subtitle,
  items,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: BenefitItem[];
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const gradient = benefitCardGradients[i % benefitCardGradients.length];

            return (
              <motion.div
                key={i}
                className="relative flex flex-col p-6 rounded-3xl border border-border overflow-hidden group hover:border-accent/40 transition-all duration-300"
                {...cardAnim(i)}
              >
                <div className="absolute inset-0 bg-bg-card" />
                <div className="absolute inset-0" style={{ background: gradient }} />
                <div className="relative z-10 flex flex-col gap-3">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-1">
                    {getBenefitIcon(item.title)}
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-medium text-heading">
                      {item.title}
                    </h3>
                    {item.href && (
                      <ArrowIcon className="mt-0.5 text-white/20 group-hover:text-accent transition-colors" />
                    )}
                  </div>
                  <p className="text-sm text-body leading-relaxed">
                    {parseInlineLinks(item.description)}
                  </p>
                  {item.href && (
                    <LocaleLink
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-1"
                    >
                      Learn more
                      <ArrowIcon className="w-3 h-3" />
                    </LocaleLink>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Process section icons */
const processIcons = [
  // Magnifying glass / Audit
  <svg key="audit" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="22" cy="22" r="12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/><path d="M31 31l8 8" stroke="rgb(193, 100, 230)" strokeWidth="2" strokeLinecap="round"/><path d="M18 22h8M22 18v8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  // Wrench / Foundation
  <svg key="foundation" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="34" width="28" height="4" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/><rect x="14" y="26" width="8" height="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><rect x="26" y="26" width="8" height="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><rect x="18" y="16" width="12" height="10" stroke="rgb(193, 100, 230)" strokeWidth="1.5"/><path d="M24 10v6" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  // Chart / Growth
  <svg key="growth" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M10 38l10-12 8 6 10-18" stroke="rgb(193, 100, 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="38" cy="14" r="3" stroke="rgb(193, 100, 230)" strokeWidth="1.5"/><path d="M10 10v28h28" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  // Rocket / Scale
  <svg key="scale" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M28 20c6-8 10-12 10-12s-4 4-12 10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/><path d="M22 26l-6 10 10-6" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="26" cy="22" r="3" stroke="rgb(193, 100, 230)" strokeWidth="1.5"/><path d="M14 34c-2 2-4 4-4 4s2-2 4-4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

function ProcessSection({
  badge,
  heading,
  subtitle,
  items,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: ProcessItem[];
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-5"
              {...cardAnim(i)}
            >
              <div className="mb-1">
                {processIcons[i % processIcons.length]}
              </div>
              <span className="text-xs font-medium text-accent/70 uppercase tracking-wider">
                Phase {item.number}
              </span>
              <h3 className="text-lg md:text-xl font-medium text-heading">{item.title}</h3>
              <p className="text-sm text-body leading-relaxed max-w-[280px]">
                {parseInlineLinks(item.description)}
              </p>
              {item.href && (
                <LocaleLink
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-1"
                >
                  Learn more
                  <ArrowIcon className="w-3 h-3" />
                </LocaleLink>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Deliverable icons */
const deliverableIcons = [
  // Audit / Clipboard check
  <svg key="d-audit" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  // Schema / Code
  <svg key="d-schema" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Speed / Zap
  <svg key="d-speed" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  // Keyword / Search
  <svg key="d-keyword" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  // Content / Edit
  <svg key="d-content" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  // Link
  <svg key="d-link" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  // Report / BarChart
  <svg key="d-report" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  // Call / Phone
  <svg key="d-call" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
];

function DeliverablesSection({
  badge,
  heading,
  subtitle,
  items,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: DeliverableItem[];
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center gap-3 p-6 rounded-3xl border border-border overflow-hidden group hover:border-accent/30 transition-all duration-300"
              {...cardAnim(i)}
            >
              <div className="absolute inset-0 bg-bg-card" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 50% 80%, rgba(123, 45, 233, 0.12) 0%, transparent 70%)`,
                }}
              />
              {/* Icon */}
              <div className="relative z-10 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-1">
                {deliverableIcons[i % deliverableIcons.length]}
              </div>
              <span className="relative z-10 font-[family-name:var(--font-figtree)] text-[20px] md:text-[24px] font-medium text-heading">
                {item.title}
              </span>
              <span className="relative z-10 text-sm text-body">{item.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinksSection({
  badge,
  heading,
  subtitle,
  items,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: LinkItem[];
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div key={i} {...cardAnim(i)}>
              <LocaleLink
                href={item.href}
                className="relative flex flex-col gap-3 p-6 rounded-3xl border border-border overflow-hidden hover:border-accent/40 transition-all duration-300 group h-full"
              >
                <div className="absolute inset-0 bg-bg-card" />
                <div
                  className="absolute inset-0"
                  style={{ background: benefitCardGradients[i % benefitCardGradients.length] }}
                />
                <div className="relative z-10 flex items-start justify-between gap-2">
                  <h3 className="text-base font-medium text-heading group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <ArrowIcon className="mt-0.5 text-white/20 group-hover:text-accent transition-colors" />
                </div>
                <p className="relative z-10 text-sm text-body leading-relaxed">
                  {item.description}
                </p>
              </LocaleLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RichTextSection({
  badge,
  heading,
  subtitle,
  items,
  image,
  imageAlt,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: RichTextBlock[];
  image?: string;
  imageAlt?: string;
}) {
  // Editorial layout — map renders as a wide hero header at the top of
  // the card, with the section badge + heading floated over its lower-left
  // on a soft dark gradient (depth + dimension). The 4 text blocks then
  // read out below as a clean 2×2 grid with hairline dividers.
  // Mirrors the "feature card" pattern from Stripe Atlas / Vercel docs:
  // image becomes the visual anchor, content reads like a magazine spread.
  if (image) {
    return (
      <section className="w-full px-5 md:px-10 py-20">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            className="relative rounded-[28px] border border-border/80 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Card backdrop — matches Stats/CaseStudy cards */}
            <div className="absolute inset-0 bg-bg-card" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 0% 0%, rgba(123,45,233,0.14) 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(78,123,255,0.10) 0%, transparent 55%)",
              }}
              aria-hidden
            />

            <div className="relative z-10">
              {/* ── Hero map header — full-width, native 16:9 ── */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "1344 / 600" }}
              >
                <Image
                  src={image}
                  alt={imageAlt || heading}
                  fill
                  sizes="(max-width: 1180px) 100vw, 1180px"
                  className="object-cover"
                  priority={false}
                />

                {/* Bottom gradient — fades the map into the card bg so the
                    overlaid text reads cleanly without a hard image edge */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,15,28,0.95) 0%, rgba(13,15,28,0.55) 50%, transparent 100%)",
                  }}
                  aria-hidden
                />
                {/* Top corner accent — re-uses the page glow language */}
                <div
                  className="pointer-events-none absolute top-0 right-0 w-2/3 h-1/2"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 0%, rgba(193,100,230,0.20), transparent 60%)",
                  }}
                  aria-hidden
                />

                {/* Section header — overlaid on the lower-left of the map
                    for editorial / magazine-cover feel */}
                <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 lg:px-16 pb-8 md:pb-12 flex flex-col items-start gap-4 max-w-[820px]">
                  {badge && <Badge text={badge} />}
                  <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.08] tracking-[-0.02em] text-heading">
                    {heading}
                  </h2>
                  {subtitle && (
                    <p className="text-body text-sm md:text-base max-w-[560px]">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* ── Text blocks — clean 2-up grid, magazine columns ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/30 border-t border-border/40">
                {items.map((block, i) => {
                  const isLastRow = i >= items.length - 2;
                  const showRowDivider = !isLastRow;
                  return (
                    <motion.div
                      key={i}
                      className={`relative flex flex-col gap-3 p-7 md:p-9 ${
                        showRowDivider ? "md:border-b md:border-border/30" : ""
                      }`}
                      {...cardAnim(i)}
                    >
                      <span
                        className="text-[11px] tracking-[0.18em] text-accent/70 uppercase font-medium"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {block.heading && (
                        <h3 className="text-[17px] md:text-[19px] font-medium text-heading leading-snug">
                          {block.heading}
                        </h3>
                      )}
                      <p className="text-body text-[14.5px] md:text-[15px] leading-relaxed">
                        {parseInlineLinks(block.body)}
                      </p>
                      {block.href && (
                        <LocaleLink
                          href={block.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-1"
                        >
                          {block.hrefLabel || "Learn more"}
                          <ArrowIcon className="w-3 h-3" />
                        </LocaleLink>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default (no image) — original single-column card layout.
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-12">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full max-w-[860px] mx-auto relative rounded-3xl border border-border overflow-hidden">
          <div className="absolute inset-0 bg-bg-card" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 0% 0%, rgba(123, 45, 233, 0.12) 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10 divide-y divide-border/30">
            {items.map((block, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-4 p-8 md:p-10"
                {...cardAnim(i)}
              >
                {block.heading && (
                  <h3 className="text-lg md:text-xl font-medium text-heading">
                    {block.heading}
                  </h3>
                )}
                <p className="text-body text-sm md:text-base leading-relaxed">
                  {parseInlineLinks(block.body)}
                </p>
                {block.href && (
                  <LocaleLink
                    href={block.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-1"
                  >
                    {block.hrefLabel || "Learn more"}
                    <ArrowIcon className="w-3 h-3" />
                  </LocaleLink>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TipsSection({
  badge,
  heading,
  subtitle,
  items,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: TipItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-12">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full max-w-[800px]">
          {items.map((tip, i) => (
            <motion.div
              key={i}
              className="border-b border-border/40"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-5 py-6 text-left group"
              >
                <span className="font-[family-name:var(--font-figtree)] text-[22px] md:text-[28px] font-medium text-accent/80 flex-shrink-0 w-10 text-center">
                  {tip.number}
                </span>
                <span className="text-base md:text-lg font-medium text-heading group-hover:text-accent transition-colors flex-1 pr-4">
                  {tip.title}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border/50 text-white/40 group-hover:border-accent/40 group-hover:text-accent transition-all">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-[60px] pb-6 flex flex-col gap-3">
                      <p className="text-body text-sm md:text-base leading-relaxed">
                        {parseInlineLinks(tip.body)}
                      </p>
                      {tip.href && (
                        <LocaleLink
                          href={tip.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                        >
                          {tip.hrefLabel || "Read the guide"}
                          <ArrowIcon className="w-3 h-3" />
                        </LocaleLink>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* LinkedIn icon reusable */
function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.712-2.165 1.209V6.169H6.249c.032.678 0 7.225 0 7.225h2.401z"/>
    </svg>
  );
}

/* Team member role icons */
const teamRoleIcons: Record<string, React.ReactNode> = {
  strategy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  technical: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  linkbuilding: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
    </svg>
  ),
  content: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(193, 100, 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
};

function getTeamRoleIcon(role: string) {
  const r = role.toLowerCase();
  if (r.includes("strateg") || r.includes("innovat")) return teamRoleIcons.strategy;
  if (r.includes("technical") || r.includes("lead")) return teamRoleIcons.technical;
  if (r.includes("link") || r.includes("off-page")) return teamRoleIcons.linkbuilding;
  if (r.includes("content") || r.includes("on-page")) return teamRoleIcons.content;
  return teamRoleIcons.strategy;
}

function TeamSection({
  badge,
  heading,
  subtitle,
  lead,
  members,
  locale = "en",
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  lead?: TeamMember;
  members?: TeamMember[];
  locale?: Locale;
}) {
  const tpl = serviceTemplateStrings[locale];
  const allMembers = [
    ...(lead ? [lead] : []),
    ...(members || []),
  ];
  const isSoloLead = lead && (!members || members.length === 0);

  /* ─── Solo lead: homepage-style side-by-side layout ─── */
  if (isSoloLead) {
    return (
      <section className="w-full px-5 md:px-10 py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: large photo card */}
            <motion.div
              className="group/photo relative rounded-3xl overflow-hidden border border-border h-[480px] lg:h-[520px] transition-all duration-500 hover:border-[rgba(168,85,247,0.35)] hover:shadow-[0_25px_60px_rgba(147,51,234,0.15)]"
              style={{ perspective: "800px" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {lead.image && (
                <Image
                  src={lead.image}
                  alt={lead.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover/photo:scale-[1.03] group-hover/photo:brightness-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(147,51,234,0.08) 100%)' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-heading">{lead.name}</h3>
                    <span className="text-sm text-body">{lead.role}</span>
                  </div>
                  {lead.linkedin && (
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(13,13,13,0.56)] border border-border backdrop-blur-sm flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    >
                      <LinkedInIcon size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right: text content */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {badge && <Badge text={badge} />}
              <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                {heading}
              </h2>
              {subtitle && (
                <p className="text-body text-base md:text-lg leading-relaxed">
                  {subtitle}
                </p>
              )}
              {lead.bio && (
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {lead.bio}
                </p>
              )}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="primary" size="large">
                  {tpl.getInTouch} &nbsp;&rarr;
                </Button>
                <Button href="/team" variant="secondary" size="large">
                  {tpl.teamCta} &nbsp;&rarr;
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  /* ─── Multiple members: modern card grid with glow + hover effects ─── */
  return (
    <section className="relative w-full px-5 md:px-10 py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />

        <div
          className={`w-full grid gap-5 justify-center ${
            allMembers.length === 1
              ? "grid-cols-1 max-w-[320px]"
              : allMembers.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-[660px]"
              : allMembers.length === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1000px]"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          } mx-auto`}
        >
          {allMembers.map((member, i) => (
            <motion.div
              key={i}
              className="group relative h-[420px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8 }}
            >
              {/* Outer glow on hover */}
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.5))",
                }}
              />

              {/* Gradient border */}
              <div className="relative h-full rounded-3xl p-[1px] overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-accent/40 group-hover:via-white/10 group-hover:to-accent/20 transition-all duration-500">
                <div className="relative h-full rounded-3xl overflow-hidden bg-bg-card">
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-mono text-white/70">0{i + 1}</span>
                  </div>

                  {/* Image */}
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  )}

                  {/* Shine overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(168,85,247,0.12) 100%)",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-40% to-transparent" />

                  {/* Accent line at bottom */}
                  <div
                    className="absolute left-5 right-5 bottom-[140px] h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[17px] font-semibold text-white leading-tight tracking-[-0.01em]">
                          {member.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-accent uppercase tracking-wider mt-1 block">
                          {member.role}
                        </span>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-accent/20 hover:border-accent/40 hover:scale-110 transition-all duration-300"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <LinkedInIcon size={13} />
                        </a>
                      )}
                    </div>
                    <p className="text-[12px] text-white/70 leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...sectionAnim}>
          <Button href="/team" variant="secondary" size="large">
            {tpl.teamCta} &nbsp;&rarr;
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* Case studies with image cards like homepage Results section */
function CaseStudiesSection({
  badge,
  heading,
  subtitle,
  items,
  ctaText,
  ctaHref,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: CaseStudyItem[];
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          {items.map((study, i) => {
            const Wrapper = study.href ? LocaleLink : "div";
            const wrapperProps = study.href ? { href: study.href } : {};

            return (
              <motion.div key={i} {...cardAnim(i)}>
                {/* @ts-expect-error - dynamic component */}
                <Wrapper
                  {...wrapperProps}
                  className="group relative flex flex-col rounded-3xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 h-full"
                >
                  {/* Image area */}
                  {study.image && (
                    <div className="relative h-[200px] overflow-hidden bg-white rounded-t-3xl">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      {/* Badge overlay */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex px-3 py-1.5 rounded-xl text-xs font-medium text-white/90 bg-[rgba(13,13,13,0.72)] border border-border backdrop-blur-sm">
                          {study.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content area */}
                  <div className="relative flex flex-col gap-4 p-6 flex-1 bg-[rgb(13,13,13)]">
                    {!study.image && (
                      <span className="inline-flex self-start px-3 py-1.5 rounded-xl text-xs font-medium text-white/80 bg-[rgba(13,13,13,0.56)] border border-border backdrop-blur-sm">
                        {study.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-medium text-heading">{study.title}</h3>

                    {/* Metrics row */}
                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      {study.metrics.map((metric, j) => (
                        <div key={j} className="flex flex-col gap-0.5">
                          <span className="font-[family-name:var(--font-figtree)] text-[22px] md:text-[26px] font-medium text-heading">
                            {metric.value}
                          </span>
                          <span className="text-xs text-body">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {study.quote && (
                      <blockquote className="text-sm text-body leading-relaxed italic border-l-2 border-accent/40 pl-4">
                        &ldquo;{study.quote}&rdquo;
                        {study.quoteAuthor && (
                          <span className="block mt-2 text-xs text-body-strong not-italic font-medium">
                            &mdash; {study.quoteAuthor}
                          </span>
                        )}
                      </blockquote>
                    )}

                    {study.href && (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:underline mt-auto pt-2">
                        View case study
                        <ArrowIcon className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {ctaHref && (
          <motion.div {...sectionAnim}>
            <Button href={ctaHref} variant="secondary" size="large">
              {ctaText || "View All Case Studies"} &nbsp;→
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FAQSection({
  items,
  miniCta,
  locale = "en",
}: {
  items: FAQItem[];
  miniCta: { heading: string; subtitle: string; ctaHref?: string; ctaText?: string };
  locale?: Locale;
}) {
  const tpl = serviceTemplateStrings[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  // CTA destination defaults to the legacy Typeform contact form, but
  // commercial-intent pages (location/agency landing pages) override this
  // to point at /demo so all CTAs on the page funnel to one booking flow.
  const ctaHref = miniCta.ctaHref || "https://w35pmime997.typeform.com/to/eqeeLQvb";
  const ctaText = miniCta.ctaText || tpl.getInTouch;
  const ctaIsExternal = /^https?:\/\//.test(ctaHref);

  return (
    <section className="w-full px-5 md:px-10 py-24">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={tpl.faqBadge} heading={tpl.faqHeading} />

        <div className="w-full max-w-[800px]">
          {items.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-border/40"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-base md:text-lg font-medium text-heading group-hover:text-accent transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border/50 text-white/40 group-hover:border-accent/40 group-hover:text-accent transition-all">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-body text-sm md:text-base leading-relaxed pb-6">
                      {parseInlineLinks(faq.answer)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Mini CTA with glow */}
        <motion.div
          className="relative w-full max-w-[750px] rounded-3xl border border-border overflow-hidden"
          {...sectionAnim}
        >
          <div className="absolute inset-0 bg-bg-cta" />
          <GlowOrbs size={240} opacity={0.25} bottom={-200} />
          <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center gap-5">
            <h3 className="text-[24px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
              {miniCta.heading}
            </h3>
            <p className="text-body text-sm md:text-base max-w-[500px]">{miniCta.subtitle}</p>
            <div className="mt-2">
              <Button
                href={ctaHref}
                variant="primary"
                size="large"
                external={ctaIsExternal}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Revenue wins (Maison-style cards, mirrors homepage Results) ─── */

function RevenueWinsSection({
  badge,
  heading,
  subtitle,
  items,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: RevenueWin[];
}) {
  return (
    <section className="relative w-full px-5 md:px-10 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] flex flex-col items-center gap-12">
        <motion.div className="flex flex-col items-center text-center gap-4 max-w-[760px]" {...sectionAnim}>
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.02em] text-heading">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[640px]">{subtitle}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full max-w-[1100px]">
          {items.map((r, i) => {
            const card = (
              <>
                <div className="relative aspect-[4/3] w-full rounded-3xl bg-[rgb(242,242,243)] overflow-hidden flex items-center justify-center px-6 py-8 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="relative w-full h-full">
                    <Image
                      src={r.screenshot}
                      alt={`${r.amount} ${r.label} ${r.client}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-1.5 text-center">
                  <h3 className="text-[26px] md:text-[34px] font-semibold text-heading leading-tight tracking-tight">
                    {r.amount}
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-semibold text-heading leading-snug">
                    {r.label}
                  </p>
                  <p className="text-[13.5px] text-body/60 mt-1 leading-snug">
                    {r.client}
                    <br />
                    {r.condition}
                  </p>
                </div>
              </>
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              >
                {r.href ? (
                  <LocaleLink href={r.href} className="group block">
                    {card}
                  </LocaleLink>
                ) : (
                  <div className="group block">{card}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Booking widget section (replaces team block on commercial pages) ─── */

function BookingWidgetSection({
  badge,
  heading,
  subtitle,
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
}) {
  return (
    <section className="relative w-full px-5 md:px-10 py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] flex flex-col items-center gap-10">
        <motion.div className="flex flex-col items-center text-center gap-4 max-w-[720px]" {...sectionAnim}>
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.02em] text-heading">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[620px]">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          className="w-full max-w-[920px] rounded-3xl border border-border/60 bg-bg-cta/40 p-2 md:p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
          {...sectionAnim}
        >
          <div className="rounded-[20px] overflow-hidden bg-white">
            <IClosedEmbed minHeight={680} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Template ─── */

export default function ServicePageTemplate({
  hero,
  trustBar,
  trustBarIcon,
  trustBarLogos,
  trustBarMoreBrands,
  sections,
  faqs,
  locale,
}: ServicePageProps) {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero {...hero} />
        <TrustBar
          text={trustBar}
          icon={trustBarIcon}
          logos={trustBarLogos}
          moreBrands={trustBarMoreBrands}
        />
        {sections.map((section, i) => {
          switch (section.type) {
            case "stats":
              return (
                <StatsSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.stats!}
                />
              );
            case "benefits":
              return (
                <BenefitsSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.benefits!}
                />
              );
            case "process":
              return (
                <ProcessSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.process!}
                />
              );
            case "deliverables":
              return (
                <DeliverablesSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.deliverables!}
                />
              );
            case "links":
              return (
                <LinksSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.links!}
                />
              );
            case "richText":
              return (
                <RichTextSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.richTextBlocks!}
                  image={section.image}
                  imageAlt={section.imageAlt}
                />
              );
            case "tips":
              return (
                <TipsSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.tips!}
                />
              );
            case "team":
              return (
                <TeamSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  lead={section.teamLead}
                  members={section.teamMembers}
                  locale={locale}
                />
              );
            case "caseStudies":
              return (
                <CaseStudiesSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.caseStudies!}
                  ctaText={section.ctaText}
                  ctaHref={section.ctaHref}
                />
              );
            case "revenueWins":
              return (
                <RevenueWinsSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                  items={section.revenueWins!}
                />
              );
            case "bookingWidget":
              return (
                <BookingWidgetSection
                  key={i}
                  badge={section.badge}
                  heading={section.heading}
                  subtitle={section.subtitle}
                />
              );
            default:
              return null;
          }
        })}
        <FAQSection items={faqs.items} miniCta={faqs.miniCta} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
