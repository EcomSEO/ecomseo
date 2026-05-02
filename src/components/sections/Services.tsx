"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { servicesT } from "@/lib/i18n/translations/home";
import { navigationTranslations } from "@/lib/i18n/translations/navigation";

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

/* By-service-type indexes in the mega-menu services array. */
const SERVICE_TYPE_IDX = [0, 1, 7, 6]; // Link Building, Keyword Research, Content Writing, Amazon SEO

const CARD_GRADIENTS = [
  "radial-gradient(ellipse at 20% 30%, rgba(123,45,233,0.25) 0%, transparent 60%)",
  "radial-gradient(ellipse at 80% 30%, rgba(193,100,230,0.22) 0%, transparent 60%)",
  "radial-gradient(ellipse at 30% 70%, rgba(0,170,255,0.18) 0%, transparent 60%)",
  "radial-gradient(ellipse at 70% 70%, rgba(140,70,255,0.24) 0%, transparent 60%)",
];

export default function Services() {
  const locale = useLocale();
  const t = servicesT[locale];
  const nav = navigationTranslations[locale];

  const services = SERVICE_TYPE_IDX.map((i) => nav.services[i]).filter(Boolean);

  return (
    <SectionWrapper className="py-16">
      <div className="flex flex-col items-center gap-12">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-[740px] text-center"
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

        {/* 4 service-type cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1240px]">
          {services.map((svc, i) => (
            <motion.div
              key={svc.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <LocaleLink
                href={svc.href}
                className="group relative block rounded-3xl border border-border overflow-hidden h-full min-h-[220px] hover:border-accent/40 transition-colors"
              >
                <div className="absolute inset-0 bg-bg-card" />
                <div className="absolute inset-0" style={{ background: CARD_GRADIENTS[i % 4] }} />
                <div className="relative z-10 p-6 md:p-7 flex flex-col gap-3 h-full justify-between">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[22px] md:text-[24px] font-medium text-heading leading-tight">
                      {svc.label}
                    </h3>
                    <p className="text-body text-[13.5px] md:text-[14px] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <span className="text-[12px] text-accent/90 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
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
          <Button href="/demo" variant="primary" size="large">
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
