"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { toolsT } from "@/lib/i18n/translations/home";

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

const toolLogos = [
  { src: "/images/framer/t0iElALIslZN0LoWiFvtHdqsKI.webp", alt: "Google Partner" },
  { src: "/images/framer/TlKNFSmHBRkkG6eJvlll5HbhEc.webp", alt: "Screaming Frog" },
  { src: "/images/framer/14JcRp6JZhBUl6ReHp6lqIRBmlo.webp", alt: "Majestic" },
  { src: "/images/framer/3Kg9SIK0Ro5itxJOLFuhbQeyx8.webp", alt: "Semrush" },
  { src: "/images/framer/5AyCDNdvQEtwyBvuGqHcDCwJeA.webp", alt: "Shopify Partner" },
  { src: "/images/framer/MbUu08RiiVySyvbDK3jesMWTr7c.webp", alt: "Looker Studio" },
  { src: "/images/framer/R9PWSY8LxXtyW5suU5EWxJzw9Y.webp", alt: "Bing Partner" },
];

export default function ToolsSoftware() {
  const locale = useLocale();
  const t = toolsT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col items-center text-center gap-12">
        {/* ─── Header ─── */}
        <motion.div
          className="flex flex-col items-center gap-4 max-w-[700px]"
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
          <p className="text-body text-base md:text-lg max-w-[559px]">
            {t.subtext}
          </p>
        </motion.div>

        {/* ─── Tool logos carousel ─── */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-ticker items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex-shrink-0 flex items-center gap-6 md:gap-8 px-3 md:px-4"
              >
                {toolLogos.map((tool) => (
                  <div
                    key={`${copy}-${tool.alt}`}
                    className="flex-shrink-0 w-[160px] h-[104px] md:w-[200px] md:h-[130px] rounded-2xl border border-border bg-bg-card flex items-center justify-center p-6 md:p-8"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="max-w-full max-h-full object-contain opacity-60 hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
