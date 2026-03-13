"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { certificationsT } from "@/lib/i18n/translations/home";

const certifications = [
  {
    src: "/images/partners/shopify-partner.svg",
    alt: "Shopify Partner",
    width: 400,
    height: 120,
  },
  {
    src: "/images/partners/google-partner.svg",
    alt: "Google Partner",
    width: 400,
    height: 140,
  },
  {
    src: "/images/partners/semrush-partner.svg",
    alt: "Semrush Certified Agency Partner",
    width: 400,
    height: 400,
  },
  {
    src: "/images/partners/woocommerce-expert.svg",
    alt: "Verified WooExpert",
    width: 400,
    height: 400,
  },
];

export default function Certifications() {
  const locale = useLocale();
  const t = certificationsT[locale];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="w-full px-6 md:px-8 lg:px-16 py-20">
      <div className="mx-auto max-w-[1100px] w-full">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge text={t.badge} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-center text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.heading}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-center text-body text-base md:text-lg max-w-[600px] mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {t.subtext}
        </motion.p>

        {/* Partner logos — uniform card grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.alt}
              initial={{ opacity: 0, y: 24, scale: 0.85 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 24, scale: 0.85 }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative flex items-center justify-center rounded-2xl border border-border bg-bg-card aspect-square overflow-hidden backdrop-blur-sm"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15 group-hover:scale-125 pointer-events-none" />

              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="relative w-[80%] h-[80%] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
