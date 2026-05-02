"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { industriesT } from "@/lib/i18n/translations/home";

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

const cardGradients = [
  "radial-gradient(ellipse at 0% 40%, rgba(123, 45, 233, 0.20) 0%, transparent 60%)",
  "radial-gradient(ellipse at 100% 30%, rgba(193, 100, 230, 0.18) 0%, transparent 60%)",
  "radial-gradient(ellipse at 50% 80%, rgba(80, 80, 255, 0.16) 0%, transparent 60%)",
  "radial-gradient(ellipse at 0% 80%, rgba(140, 70, 255, 0.18) 0%, transparent 60%)",
  "radial-gradient(ellipse at 100% 80%, rgba(0, 170, 255, 0.16) 0%, transparent 60%)",
];

/* 40x40 outline icons: white/50 strokes + rgb(193,100,230) accent */
const industryIcons: React.ReactNode[] = [
  /* Fashion & Apparel — dress/hanger */
  <svg key="fashion" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M16 8c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M10 12l6-2h8l6 2-3 6h-2l-1 16h-8l-1-16h-2l-3-6z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
  </svg>,
  /* Beauty & Cosmetics — lipstick/bottle */
  <svg key="beauty" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="14" y="16" width="12" height="18" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    <path d="M16 16v-4a2 2 0 012-2h4a2 2 0 012 2v4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    <path d="M20 6v4" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="25" r="3" stroke="rgb(193,100,230)" strokeWidth="1.5" fill="none" />
  </svg>,
  /* Food & Consumables — box/package */
  <svg key="food" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M6 14l14-8 14 8v16l-14 8-14-8V14z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M6 14l14 8 14-8M20 22v16" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <path d="M13 10l14 8" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  /* Toys & Kids — star/toy */
  <svg key="toys" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4l4.5 9.2 10.1 1.5-7.3 7.1 1.7 10.1L20 27.1l-9 4.8 1.7-10.1-7.3-7.1 10.1-1.5L20 4z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="20" cy="18" r="4" stroke="rgb(193,100,230)" strokeWidth="1.5" fill="none" />
  </svg>,
];

export default function Industries() {
  const locale = useLocale();
  const t = industriesT[locale];

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
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <LocaleLink href={item.href} className="block h-full group">
                <div className="relative rounded-3xl border border-border overflow-hidden h-full">
                  <div className="absolute inset-0 bg-bg-card" />
                  <div
                    className="absolute inset-0"
                    style={{ background: cardGradients[i % cardGradients.length] }}
                  />
                  <div className="relative z-10 p-8 md:p-10 flex flex-col gap-4 min-h-[200px]">
                    <div className="mb-1">
                      {industryIcons[i] || null}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-heading group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <span className="text-accent text-sm font-medium mt-1">
                      {item.linkText} →
                    </span>
                  </div>
                </div>
              </LocaleLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/cases" variant="secondary" size="large">
            {t.cta}
          </Button>
          <LocaleLink
            href="/ecommerce-seo-industries"
            className="text-body text-sm hover:text-accent transition-colors underline underline-offset-4"
          >
            {t.hubLink}
          </LocaleLink>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
