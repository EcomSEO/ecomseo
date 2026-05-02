"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { blogPreviewT } from "@/lib/i18n/translations/home";

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

export default function BlogPreview() {
  const locale = useLocale();
  const t = blogPreviewT[locale];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {t.articles.map((article, i) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="rounded-2xl border border-border border-t-2 border-t-accent bg-white/[0.02] p-6 flex flex-col gap-3 h-full">
                <LocaleLink
                  href={article.href}
                  className="text-base font-medium text-heading hover:text-accent transition-colors leading-snug"
                >
                  {article.title}
                </LocaleLink>
                <p className="text-body text-sm leading-relaxed flex-1">
                  {article.snippet}
                </p>
                <LocaleLink
                  href={article.href}
                  className="text-accent text-sm font-medium hover:underline"
                >
                  {article.linkText} →
                </LocaleLink>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/blog" variant="secondary" size="large">
            {t.ctaBlog}
          </Button>
          <Button href="/academy" variant="secondary" size="large">
            {t.ctaAcademy}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
