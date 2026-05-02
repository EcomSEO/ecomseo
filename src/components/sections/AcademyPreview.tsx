"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { academyPreviewT } from "@/lib/i18n/translations/home";

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

export default function AcademyPreview() {
  const locale = useLocale();
  const t = academyPreviewT[locale];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {t.clusters.map((cluster, i) => (
            <motion.div
              key={cluster.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="rounded-2xl border border-border bg-white/[0.02] p-6 flex flex-col gap-3 h-full">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent text-xs font-mono">{cluster.count}</span>
                  <LocaleLink
                    href={cluster.href}
                    className="text-base font-medium text-heading hover:text-accent transition-colors"
                  >
                    {cluster.title}
                  </LocaleLink>
                </div>
                <p className="text-body text-sm leading-relaxed flex-1">
                  {cluster.description}
                </p>
                <div className="flex flex-col gap-1.5 mt-2 pt-3 border-t border-border">
                  {cluster.topics.map((topic) => (
                    <LocaleLink
                      key={topic.href}
                      href={topic.href}
                      className="text-body text-xs hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-white/20">→</span> {topic.title}
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/academy" variant="secondary" size="large">
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
