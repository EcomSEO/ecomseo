"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { servicesT } from "@/lib/i18n/translations/home";

/* Aurora gradient configs for each card */
const cardGradients = [
  /* Card 1 – subtle purple glow from the left */
  "radial-gradient(ellipse at 0% 40%, rgba(123, 45, 233, 0.28) 0%, rgba(123, 45, 233, 0.06) 45%, transparent 70%)",
  /* Card 2 – purple / pink / blue from the right */
  "radial-gradient(ellipse at 100% 30%, rgba(140, 70, 255, 0.32) 0%, rgba(193, 100, 230, 0.18) 25%, rgba(80, 80, 255, 0.12) 50%, transparent 75%)",
  /* Card 3 – blue / cyan from the right */
  "radial-gradient(ellipse at 85% 80%, rgba(0, 170, 255, 0.28) 0%, rgba(80, 120, 255, 0.16) 30%, rgba(123, 45, 233, 0.08) 55%, transparent 80%)",
];

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

export default function Services() {
  const locale = useLocale();
  const t = servicesT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col items-center gap-12">
        {/* ─── Header (centered) ─── */}
        <motion.div
          className="flex flex-col items-center gap-4 max-w-[700px] text-center"
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
          <p className="text-body text-base md:text-lg">{t.subtext}</p>
        </motion.div>

        {/* ─── Cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {t.cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={i === 2 ? "md:col-span-2" : ""}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative rounded-3xl border border-border overflow-hidden">
                {/* Dark base */}
                <div className="absolute inset-0 bg-bg-card" />
                {/* Aurora gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: cardGradients[i] }}
                />
                {/* Content (centered) */}
                <div className="relative z-10 p-10 md:p-12 flex flex-col items-center text-center gap-4 min-h-[260px] justify-center">
                  <h3 className="text-[24px] md:text-[32px] lg:text-[36px] font-medium text-heading">
                    {card.title}
                  </h3>
                  <p className="text-body text-sm md:text-base leading-relaxed max-w-[540px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── CTA (centered) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            href="https://w35pmime997.typeform.com/to/eqeeLQvb"
            variant="primary"
            size="large"
            external
          >
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
