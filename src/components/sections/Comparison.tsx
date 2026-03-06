"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <div className="flex items-start gap-3 py-3">
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
      <span
        className={
          type === "negative"
            ? "text-body text-sm"
            : "text-heading text-sm font-medium"
        }
      >
        {text}
      </span>
    </div>
  );
}

function renderHeading(text: string) {
  const parts = text.split(/\*(.*?)\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em
        key={i}
        className="not-italic"
        style={{
          fontFamily: '"Georgia", "Times New Roman", serif',
          fontStyle: "italic",
        }}
      >
        {part}
      </em>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function Comparison() {
  const locale = useLocale();
  const t = comparisonT[locale];

  return (
    <SectionWrapper className="py-16">
      <div className="flex flex-col gap-16 items-center">
        {/* ─── Center-aligned header ─── */}
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
            {renderHeading(t.heading)}
          </h2>
        </motion.div>

        {/* ─── Column titles ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex items-center justify-center pb-2">
            <span className="text-white/40 text-lg font-medium">
              {t.leftTitle}
            </span>
          </div>
          <div className="flex items-center justify-center pb-2">
            <Image
              src="/images/framer/TQbukBV8G5LIkEwGfbxZAiZs.png"
              alt="EcomSEO"
              width={160}
              height={36}
              className="object-contain"
            />
          </div>
        </div>

        {/* ─── Comparison cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full -mt-4">
          {/* Left column — Just Paid Ads */}
          <motion.div
            className="bg-bg-ui border border-border rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col">
              {t.leftItems.map((item) => (
                <ListItem key={item} text={item} type="negative" />
              ))}
            </div>
          </motion.div>

          {/* Right column — EcomSEO */}
          <motion.div
            className="relative border border-accent/30 rounded-3xl p-8 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(13, 13, 13, 0.9) 60%, rgba(123, 45, 233, 0.15) 100%)",
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Aurora glow */}
            <div
              className="absolute -bottom-16 -right-16 w-[280px] h-[280px] rounded-full blur-[100px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(193, 100, 230, 0.35) 0%, rgba(123, 45, 233, 0.15) 60%, transparent 100%)",
              }}
            />
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
