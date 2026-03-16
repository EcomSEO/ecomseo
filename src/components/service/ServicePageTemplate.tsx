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
  bio: string;
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
}

export interface ContentSection {
  type: "stats" | "benefits" | "process" | "deliverables" | "links" | "richText" | "tips" | "team" | "caseStudies";
  badge?: string;
  heading: string;
  subtitle?: string;
  stats?: StatItem[];
  benefits?: BenefitItem[];
  process?: ProcessItem[];
  deliverables?: DeliverableItem[];
  links?: LinkItem[];
  richTextBlocks?: RichTextBlock[];
  tips?: TipItem[];
  teamMembers?: TeamMember[];
  teamLead?: TeamMember;
  caseStudies?: CaseStudyItem[];
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
  };
  trustBar: string;
  sections: ContentSection[];
  faqs: {
    items: FAQItem[];
    miniCta: {
      heading: string;
      subtitle: string;
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
}: ServicePageProps["hero"]) {
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
            className="text-[36px] md:text-[56px] lg:text-[68px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[823px]"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <Button
              href="https://w35pmime997.typeform.com/to/eqeeLQvb"
              variant="primary"
              size="large"
              external
            >
              {ctaText}
            </Button>
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
                alt=""
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

function TrustBar({ text }: { text: string }) {
  return (
    <motion.section
      className="w-full px-5 md:px-10 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="mx-auto max-w-[1120px] flex justify-center">
        <p className="text-body-strong text-sm md:text-base text-center font-medium">{text}</p>
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
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  items: RichTextBlock[];
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-12">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />
        <div className="w-full max-w-[800px] mx-auto flex flex-col gap-1">
          {items.map((block, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col gap-4 py-8 px-6 rounded-2xl${i < items.length - 1 ? " border-b border-border/20" : ""}`}
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
}: {
  badge?: string;
  heading: string;
  subtitle?: string;
  lead?: TeamMember;
  members?: TeamMember[];
}) {
  return (
    <section className="w-full px-5 md:px-10 py-20">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-16">
        <SectionHeader badge={badge} heading={heading} subtitle={subtitle} />

        {/* ─── Featured lead ─── */}
        {lead && (
          <motion.div
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
            {...sectionAnim}
          >
            {/* Lead photo */}
            <div className="relative rounded-3xl overflow-hidden border border-border group h-[420px] lg:h-[480px]">
              {lead.image ? (
                <>
                  <Image
                    src={lead.image}
                    alt={lead.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  {/* Accent glow at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 100%, rgba(123, 45, 233, 0.15) 0%, transparent 70%)",
                    }}
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-bg-card" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-1">
                <h3 className="text-xl font-medium text-white">{lead.name}</h3>
                <span className="text-sm font-medium text-accent">{lead.role}</span>
              </div>
            </div>

            {/* Lead bio + details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  {getTeamRoleIcon(lead.role)}
                </div>
                <div>
                  <p className="text-lg font-medium text-heading">{lead.name}</p>
                  <p className="text-sm text-accent">{lead.role}</p>
                </div>
              </div>
              <p className="text-body text-base leading-relaxed">{lead.bio}</p>
              {lead.linkedin && (
                <a
                  href={lead.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors group/link"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover/link:bg-accent/20 transition-colors">
                    <LinkedInIcon size={14} />
                  </div>
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        )}

        {/* ─── Team member cards ─── */}
        {members && members.length > 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member, i) => (
              <motion.div
                key={i}
                className="relative rounded-3xl overflow-hidden border border-border group hover:border-accent/30 transition-all duration-500"
                {...cardAnim(i)}
              >
                {/* Photo area */}
                <div className="relative h-[280px] overflow-hidden">
                  {member.image ? (
                    <>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(13,13,13)] via-black/40 to-transparent" />
                      {/* Accent glow on hover */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: "radial-gradient(ellipse at 50% 100%, rgba(123, 45, 233, 0.2) 0%, transparent 70%)",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-bg-card" />
                      <div className="absolute inset-0" style={{ background: benefitCardGradients[i % benefitCardGradients.length] }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <span className="text-3xl font-medium text-accent">{member.name.charAt(0)}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Info area */}
                <div className="relative p-5 flex flex-col gap-2 bg-[rgb(13,13,13)]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-base font-medium text-heading">{member.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-accent">{getTeamRoleIcon(member.role)}</span>
                        <p className="text-xs font-medium text-accent">{member.role}</p>
                      </div>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                      >
                        <LinkedInIcon size={12} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-body leading-relaxed mt-1">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* Case studies with glassmorphic badges & aurora gradients */
const caseStudyGradients = [
  "radial-gradient(ellipse at 0% 0%, rgba(123, 45, 233, 0.25) 0%, rgba(123, 45, 233, 0.04) 50%, transparent 70%)",
  "radial-gradient(ellipse at 100% 100%, rgba(0, 170, 255, 0.2) 0%, rgba(80, 120, 255, 0.06) 50%, transparent 70%)",
  "radial-gradient(ellipse at 100% 0%, rgba(193, 100, 230, 0.22) 0%, rgba(123, 45, 233, 0.04) 50%, transparent 70%)",
];

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
          {items.map((study, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col gap-5 p-8 rounded-3xl border border-border overflow-hidden group hover:border-accent/30 transition-all duration-300"
              {...cardAnim(i)}
            >
              <div className="absolute inset-0 bg-bg-card" />
              <div className="absolute inset-0" style={{ background: caseStudyGradients[i % caseStudyGradients.length] }} />
              {/* Aurora glow on hover */}
              <div
                className="absolute -bottom-12 -right-12 w-[200px] h-[200px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(193, 100, 230, 0.25) 0%, rgba(123, 45, 233, 0.1) 60%, transparent 100%)",
                  filter: "blur(60px)",
                }}
              />

              <span className="relative z-10 inline-flex self-start px-3 py-1.5 rounded-xl text-xs font-medium text-white/80 bg-[rgba(13,13,13,0.56)] border border-border backdrop-blur-sm">
                {study.badge}
              </span>
              <h3 className="relative z-10 text-lg font-medium text-heading">{study.title}</h3>
              <div className="relative z-10 flex gap-6">
                {study.metrics.map((metric, j) => (
                  <div key={j} className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-figtree)] text-[22px] md:text-[26px] font-medium text-heading">
                      {metric.value}
                    </span>
                    <span className="text-xs text-body">{metric.label}</span>
                  </div>
                ))}
              </div>
              {study.quote && (
                <blockquote className="relative z-10 text-sm text-body leading-relaxed italic border-l-2 border-accent/40 pl-4">
                  &ldquo;{study.quote}&rdquo;
                  {study.quoteAuthor && (
                    <span className="block mt-2 text-xs text-body-strong not-italic font-medium">
                      &mdash; {study.quoteAuthor}
                    </span>
                  )}
                </blockquote>
              )}
              {study.href && (
                <LocaleLink
                  href={study.href}
                  className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-auto"
                >
                  View case study
                  <ArrowIcon className="w-3 h-3" />
                </LocaleLink>
              )}
            </motion.div>
          ))}
        </div>
        {ctaHref && (
          <motion.div {...sectionAnim}>
            <Button href={ctaHref} variant="primary" size="large">
              {ctaText || "View All Case Studies"}
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
  miniCta: { heading: string; subtitle: string };
  locale?: Locale;
}) {
  const tpl = serviceTemplateStrings[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="large"
                external
              >
                {tpl.getInTouch}
              </Button>
            </div>
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
  sections,
  faqs,
  locale,
}: ServicePageProps) {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero {...hero} />
        <TrustBar text={trustBar} />
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
