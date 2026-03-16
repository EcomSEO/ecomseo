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

/* ─── Sub-components ─── */

function ServiceHero({
  badge,
  heading,
  subtitle,
  ctaText,
  heroImage,
}: ServicePageProps["hero"]) {
  return (
    <section className="w-full px-5 md:px-10 pt-[107px] pb-12">
      <div className="mx-auto max-w-[1120px] flex flex-col items-center text-center gap-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge text={badge} />
        </motion.div>
        <motion.h1
          className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[823px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="text-body text-base md:text-lg max-w-[746px]"
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
    </section>
  );
}

function TrustBar({ text }: { text: string }) {
  return (
    <section className="w-full px-5 md:px-10 py-4">
      <div className="mx-auto max-w-[1120px] flex justify-center">
        <p className="text-body text-sm md:text-base text-center">{text}</p>
      </div>
    </section>
  );
}

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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl border border-border bg-ui"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="font-[family-name:var(--font-figtree)] text-[28px] md:text-[36px] font-medium text-heading">
                {item.value}
              </span>
              <span className="text-sm text-body">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center text-center gap-6">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) =>
            item.href ? (
              <LocaleLink key={i} href={item.href} className="flex flex-col gap-3 p-6 rounded-2xl border border-border bg-ui hover:border-accent/60 transition-colors group">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-medium text-heading group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-white/30 group-hover:text-accent transition-colors">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm text-body leading-relaxed">
                  {parseInlineLinks(item.description)}
                </p>
              </LocaleLink>
            ) : (
              <motion.div
                key={i}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-border bg-ui"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h3 className="text-base font-medium text-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {parseInlineLinks(item.description)}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-6">
        <div className="flex flex-col items-center text-center gap-6">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-border bg-ui${item.href ? " hover:border-accent/60 transition-colors group" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="font-[family-name:var(--font-figtree)] text-sm font-medium text-white/40">
                {item.number}
              </span>
              <h3 className={`text-lg font-medium text-heading${item.href ? " group-hover:text-accent transition-colors" : ""}`}>{item.title}</h3>
              <p className="text-sm text-body leading-relaxed">
                {parseInlineLinks(item.description)}
              </p>
              {item.href && (
                <LocaleLink
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-1"
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </LocaleLink>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        <div className="flex flex-col items-center text-center gap-4">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl border border-border bg-ui"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="font-[family-name:var(--font-figtree)] text-[28px] md:text-[36px] font-medium text-heading">
                {item.title}
              </span>
              <span className="text-sm text-body">{item.description}</span>
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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center text-center gap-6">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <LocaleLink
                href={item.href}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-border bg-ui hover:border-accent/60 transition-colors group h-full"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-medium text-heading group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0 mt-0.5 text-white/30 group-hover:text-accent transition-colors"
                  >
                    <path
                      d="M3 8h10M8 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-sm text-body leading-relaxed">
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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center text-center gap-6">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full max-w-[800px] mx-auto flex flex-col">
          {items.map((block, i) => (
            <motion.div
              key={i}
              className={`flex flex-col gap-3 py-6${i < items.length - 1 ? " border-b border-border/30" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {block.heading && (
                <h3 className="text-lg font-medium text-heading">
                  {block.heading}
                </h3>
              )}
              <p className="text-sm text-body leading-relaxed">
                {parseInlineLinks(block.body)}
              </p>
              {block.href && (
                <LocaleLink
                  href={block.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-1"
                >
                  {block.hrefLabel || "Learn more"}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center text-center gap-6">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full max-w-[800px]">
          {items.map((tip, i) => (
            <div key={i} className="border-b border-border/50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 py-5 text-left group"
              >
                <span className="font-[family-name:var(--font-figtree)] text-[24px] md:text-[32px] font-medium text-accent flex-shrink-0 w-12 text-center">
                  {tip.number}
                </span>
                <span className="text-base md:text-lg font-medium text-heading group-hover:text-accent transition-colors flex-1 pr-4">
                  {tip.title}
                </span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white/40">
                  <svg
                    width="16"
                    height="16"
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
                    <div className="pl-16 pb-5 flex flex-col gap-3">
                      <p className="text-body text-sm leading-relaxed">
                        {parseInlineLinks(tip.body)}
                      </p>
                      {tip.href && (
                        <LocaleLink
                          href={tip.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                        >
                          {tip.hrefLabel || "Read the guide"}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </LocaleLink>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center text-center gap-6">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>

        {lead && (
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {lead.image && (
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src={lead.image}
                  alt={lead.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-lg font-medium text-white">{lead.name}</p>
                  <p className="text-sm text-white/70">{lead.role}</p>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-4">
              {!lead.image && (
                <>
                  <h3 className="text-xl font-medium text-heading">{lead.name}</h3>
                  <p className="text-sm text-body">{lead.role}</p>
                </>
              )}
              <p className="text-sm text-body leading-relaxed">{parseInlineLinks(lead.bio)}</p>
              {lead.linkedin && (
                <a
                  href={lead.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.712-2.165 1.209V6.169H6.249c.032.678 0 7.225 0 7.225h2.401z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        )}

        {members && members.length > 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-border bg-ui"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {member.image && (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-heading">{member.name}</p>
                  <p className="text-sm text-body">{member.role}</p>
                </div>
                <p className="text-sm text-body leading-relaxed">{parseInlineLinks(member.bio)}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.712-2.165 1.209V6.169H6.249c.032.678 0 7.225 0 7.225h2.401z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center text-center gap-6">
          {badge && <Badge text={badge} />}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[800px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body text-base md:text-lg max-w-[746px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          {items.map((study, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-5 p-8 rounded-3xl border border-border bg-ui"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                {study.badge}
              </span>
              <h3 className="text-lg font-medium text-heading">{study.title}</h3>
              <div className="flex gap-4">
                {study.metrics.map((metric, j) => (
                  <div key={j} className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-figtree)] text-[20px] md:text-[24px] font-medium text-heading">
                      {metric.value}
                    </span>
                    <span className="text-xs text-body">{metric.label}</span>
                  </div>
                ))}
              </div>
              {study.quote && (
                <blockquote className="text-sm text-body leading-relaxed italic border-l-2 border-accent/30 pl-4">
                  &ldquo;{study.quote}&rdquo;
                  {study.quoteAuthor && (
                    <span className="block mt-1 text-xs text-body not-italic">
                      &mdash; {study.quoteAuthor}
                    </span>
                  )}
                </blockquote>
              )}
              {study.href && (
                <LocaleLink
                  href={study.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-auto"
                >
                  View case study
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </LocaleLink>
              )}
            </motion.div>
          ))}
        </div>
        {ctaHref && (
          <Button href={ctaHref} variant="primary" size="large">
            {ctaText || "View All Case Studies"}
          </Button>
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
      <div className="mx-auto max-w-[1120px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center text-center gap-4">
          <Badge text={tpl.faqBadge} />
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
            {tpl.faqHeading}
          </h2>
        </div>

        <div className="w-full max-w-[800px]">
          {items.map((faq, i) => (
            <div key={i} className="border-b border-border/50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-base md:text-lg font-medium text-heading group-hover:text-accent transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white/40">
                  <svg
                    width="16"
                    height="16"
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
                    <p className="text-body text-sm leading-relaxed pb-5">
                      {parseInlineLinks(faq.answer)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="w-full max-w-[750px] rounded-3xl border border-border bg-ui p-12 md:p-20 flex flex-col items-center text-center gap-4">
          <h3 className="text-[24px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-heading">
            {miniCta.heading}
          </h3>
          <p className="text-body text-sm md:text-base">{miniCta.subtitle}</p>
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
