"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { comparisonT } from "@/lib/i18n/translations/home";

function ListItem({
  text,
  type,
}: {
  text: string;
  type: "negative" | "positive";
}) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <span
        className={`mt-0.5 flex-shrink-0 ${
          type === "negative" ? "text-white/40" : "text-accent"
        }`}
      >
        {type === "negative" ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 4l8 8M4 12l8-8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8l3.5 3.5L13 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-body text-sm">{text}</span>
    </div>
  );
}

export default function Comparison() {
  const locale = useLocale();
  const t = comparisonT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
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
            {t.heading}
            <em className="italic">{t.headingItalic}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left column */}
          <motion.div
            className="bg-bg-ui border border-border rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-medium text-white/60 mb-6">
              {t.leftTitle}
            </h3>
            <div className="flex flex-col">
              {t.leftItems.map((item) => (
                <ListItem key={item} text={item} type="negative" />
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="relative bg-bg-ui border border-accent/30 rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full blur-[80px]" />
            <h3 className="text-lg font-medium text-accent mb-6 relative z-10">
              {t.rightTitle}
            </h3>
            <div className="flex flex-col relative z-10">
              {t.rightItems.map((item) => (
                <ListItem key={item} text={item} type="positive" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
