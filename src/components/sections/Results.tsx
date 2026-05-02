"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LocaleLink from "@/components/ui/LocaleLink";
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
  href: string;
};

/* 4 client wins, revenue-oriented. All numbers from 12 months of work with us. */
const results: Result[] = [
  {
    slug: "norwegian-health-store",
    amount: "+$53,000,000",
    label: "yearly revenue (+118%)",
    client: "for this Home & Living brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-53m.png",
    href: "/cases/norwegian-health-store",
  },
  {
    slug: "dutch-health-brand",
    amount: "+\u20ac15,000,000",
    label: "yearly revenue (+430%)",
    client: "for this Health & Supplements brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-15m.png",
    href: "/cases/dutch-health-brand",
  },
  {
    slug: "english-health-site",
    amount: "+\u20ac1,700,000",
    label: "yearly revenue (+87%)",
    client: "for this US Shapewear brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-1-7m.png",
    href: "/cases/english-health-site",
  },
  {
    slug: "jewelry-dutch-brand-ecom",
    amount: "+\u20ac597,000",
    label: "yearly revenue (+38%)",
    client: "for this DTC Lifestyle brand",
    condition: "after 12 months with us",
    screenshot: "/images/clients/charts/revenue-597k.png",
    href: "/cases/jewelry-dutch-brand-ecom",
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
              <LocaleLink href={r.href} className="group block">
                {/* Light-gray screenshot card */}
                <div className="relative aspect-[4/3] w-full rounded-3xl bg-[rgb(242,242,243)] overflow-hidden flex items-center justify-center px-6 py-8 transition-transform duration-300 group-hover:-translate-y-0.5">
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
              </LocaleLink>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
