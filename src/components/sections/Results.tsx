"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

type Result = {
  slug: string;
  amount: string;       // big bold number, e.g. "+$53,000,000"
  label: string;        // bold descriptor, e.g. "yearly revenue extra"
  client: string;       // gray context, e.g. "for this Home & Living brand"
  condition: string;    // gray context, e.g. "after 12 months with us"
  screenshot: string;
};

/* 5 client wins, revenue-oriented. Headline = YoY growth %, sub-label
   gives the absolute revenue figure for context. */
const results: Result[] = [
  {
    slug: "us-shapewear-brand",
    amount: "+87%",
    label: "yearly revenue growth (\u20ac1.7M)",
    client: "for this US Shapewear brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-1-7m.png",
  },
  {
    slug: "dtc-brand-11m",
    amount: "+389%",
    label: "yearly revenue growth (\u20ac11M)",
    client: "for this DTC ecommerce brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-11m.png",
  },
  {
    slug: "dtc-brand-8-4m",
    amount: "+245%",
    label: "yearly revenue growth (\u20ac8.4M)",
    client: "for this DTC ecommerce brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-8-4m.png",
  },
  {
    slug: "dtc-brand-3-5m",
    amount: "+156%",
    label: "yearly revenue growth (\u20ac3.5M)",
    client: "for this DTC ecommerce brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-3-5m.png",
  },
  {
    slug: "dtc-brand-2-8m",
    amount: "+132%",
    label: "yearly revenue growth (\u20ac2.8M)",
    client: "for this DTC ecommerce brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-2-8m.png",
  },
];

export default function Results() {
  const locale = useLocale();
  const t = resultsT[locale];

  return (
    <SectionWrapper id="projects" className="py-16 scroll-mt-24">
      <div className="flex flex-col items-center gap-14">
        <motion.h2
          className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.12] tracking-[-0.02em] text-heading text-center max-w-[720px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {renderHeading(t.heading)}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full max-w-[1100px]">
          {results.map((r, i) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            >
              <div className="block">
                {/* Light-gray screenshot card */}
                <div className="relative aspect-[4/3] w-full rounded-3xl bg-[rgb(242,242,243)] overflow-hidden flex items-center justify-center px-6 py-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={r.screenshot}
                      alt={`${r.amount} ${r.label} ${r.client}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Text below card — Maison-style: big amount, bold descriptor, gray context */}
                <div className="mt-6 flex flex-col gap-1.5 text-center">
                  <h3 className="text-[26px] md:text-[34px] font-semibold text-heading leading-tight tracking-tight">
                    {r.amount}
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-semibold text-heading leading-snug">
                    {r.label}
                  </p>
                  <p className="text-[13.5px] text-body/60 mt-1 leading-snug">
                    {r.client}
                    <br />
                    {r.condition}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
