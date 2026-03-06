"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { processT } from "@/lib/i18n/translations/home";

/** Parse *italic* markers inside a string */
function renderHeading(text: string) {
  const parts = text.split(/\*(.*?)\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em
        key={i}
        className="not-italic"
        style={{ fontFamily: '"Georgia", "Times New Roman", serif', fontStyle: "italic" }}
      >
        {part}
      </em>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/* Outline-style icons matching the original design */
function PhoneIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Speech bubble */}
      <path
        d="M8 12C8 8.686 10.686 6 14 6h28c3.314 0 6 2.686 6 6v22c0 3.314-2.686 6-6 6H20l-8 6V34h0c-2.21 0-4-1.79-4-4V12z"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Phone handset */}
      <path
        d="M23 20c0-1.1.9-2 2-2h1a1 1 0 011 1v3a1 1 0 01-1 1h-1l-1 2 3 4 2-1v-1a1 1 0 011-1h3a1 1 0 011 1v1c0 1.1-.9 2-2 2-7.18 0-13-5.82-13-13z"
        stroke="rgb(193, 100, 230)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clipboard body */}
      <rect
        x="16" y="10" width="24" height="36" rx="3"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Clipboard tab */}
      <path
        d="M24 6h8a2 2 0 012 2v2a2 2 0 01-2 2h-8a2 2 0 01-2-2V8a2 2 0 012-2z"
        stroke="rgb(193, 100, 230)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Lines */}
      <line x1="22" y1="22" x2="34" y2="22" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="28" x2="34" y2="28" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="34" x2="30" y2="34" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bars – ascending left to right */}
      <rect x="10" y="34" width="7" height="14" rx="1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <rect x="20" y="26" width="7" height="22" rx="1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <rect x="30" y="18" width="7" height="30" rx="1.5" stroke="rgb(193, 100, 230)" strokeWidth="1.5" fill="none" />
      <rect x="40" y="8" width="7" height="40" rx="1.5" stroke="rgb(193, 100, 230)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

const icons = [PhoneIcon, ClipboardIcon, BarChartIcon];

export default function Process() {
  const locale = useLocale();
  const t = processT[locale];

  return (
    <SectionWrapper className="py-16">
      <div className="flex flex-col items-center gap-16">
        {/* ─── Header (centered) ─── */}
        <motion.div
          className="flex flex-col items-center gap-6 max-w-[800px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          {/* Purple dot */}
          <div className="w-2 h-2 rounded-full bg-accent -mb-1" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {renderHeading(t.heading)}
          </h2>
          <p className="text-body text-base md:text-lg max-w-[640px]">
            {t.subtext}
          </p>
        </motion.div>

        {/* ─── Steps (3 columns, no card backgrounds) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
          {t.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.title}
                className="flex flex-col items-center text-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-2">
                  <Icon />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-heading">
                  {step.title}
                </h3>
                <p className="text-body text-sm leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
