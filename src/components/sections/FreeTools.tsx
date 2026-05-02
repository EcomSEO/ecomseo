"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { freeToolsT } from "@/lib/i18n/translations/home";

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

/* 32x32 outline icons matching Process.tsx style: white/50 + accent purple */
const toolIcons: Record<string, React.ReactNode> = {
  "/tools/shopify-seo-audit": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M19 4l1 4h5l-2 16H9L7 8h5l1-4h6z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M14 13v6m4-6v6" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/tools/ecommerce-seo-audit": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="4" width="22" height="24" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <path d="M10 12h12M10 17h8M10 22h5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="23" cy="23" r="5" stroke="rgb(193,100,230)" strokeWidth="1.5" fill="none" />
      <path d="M26 26l2 2" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/tools/serp-simulator": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <path d="M4 12h24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <circle cx="8" cy="9" r="1" fill="rgba(255,255,255,0.3)" />
      <circle cx="12" cy="9" r="1" fill="rgba(255,255,255,0.3)" />
      <path d="M9 17h14M9 21h10" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/tools/schema-generator": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M12 6l-8 10 8 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 6l8 10-8 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M18 4l-4 24" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/tools/core-web-vitals": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <path d="M16 8v8l5 5" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2" fill="rgb(193,100,230)" />
    </svg>
  ),
  "/tools/internal-link-analyzer": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="10" cy="10" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="10" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="24" r="4" stroke="rgb(193,100,230)" strokeWidth="1.5" fill="none" />
      <path d="M13 12l2 9M21 12l-2 9M14 10h6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/tools/heading-checker": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M8 6v20M24 6v20M8 16h16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M6 6h4M22 6h4M6 26h4M22 26h4" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/tools/robots-txt-analyzer": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="8" y="4" width="16" height="12" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="10" r="1.5" fill="rgb(193,100,230)" />
      <circle cx="19" cy="10" r="1.5" fill="rgb(193,100,230)" />
      <path d="M12 16v6M20 16v6M8 22h16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 28h4M18 28h4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function FreeTools() {
  const locale = useLocale();
  const t = freeToolsT[locale];

  return (
    <SectionWrapper className="py-16">
      <div className="flex flex-col items-center gap-16">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-[700px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {renderHeading(t.heading)}
          </h2>
          <p className="text-body text-base md:text-lg">{t.subtext}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {t.items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <LocaleLink
                href={item.href}
                className="block h-full group"
              >
                <div className="relative rounded-3xl border border-border overflow-hidden h-full">
                  <div className="absolute inset-0 bg-bg-card" />
                  <div className="relative z-10 p-6 flex flex-col gap-3">
                    <div className="mb-1">
                      {toolIcons[item.href] || null}
                    </div>
                    <h3 className="text-sm font-medium text-heading group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </LocaleLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/tools" variant="secondary" size="large">
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
