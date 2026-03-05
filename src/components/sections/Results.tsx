"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { resultsT } from "@/lib/i18n/translations/home";

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

const caseStudies = [
  {
    image:
      "/images/framer/jKLk43bNfpNjhQGvnRhYkxJNjQ.webp",
    href: "/cases/norwegian-health-store",
  },
  {
    image:
      "/images/framer/EeufC2RDWV8GzZB7fBbKfmWJQuc.webp",
    href: "/cases/ecommerce-brand",
  },
  {
    image:
      "/images/framer/nT2RO8bU8V5MvRjsqPRcXjKiA.webp",
    href: "/cases/skyrocket-ecom-site",
  },
  {
    image:
      "/images/framer/U8W2ek1f8J8lKPXlMlEGVJnMA.webp",
    href: "/cases/norwegian-smart-seo",
  },
];

export default function Results() {
  const locale = useLocale();
  const t = resultsT[locale];

  return (
    <SectionWrapper id="projects" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {renderHeading(t.heading)}
          </h2>
          <p className="text-body text-base md:text-lg">
            {t.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudies.map((study, i) => {
            const card = t.cards[i];
            return (
              <motion.a
                key={i}
                href={study.href}
                className="group relative rounded-3xl overflow-hidden border border-border h-[400px] block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${study.image})` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                  <h3 className="text-base font-medium text-heading">
                    {card.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {card.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1.5 text-xs font-medium text-white/80 bg-[rgba(13,13,13,0.56)] border border-border rounded-xl backdrop-blur-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/cases" variant="secondary" size="large">
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
