"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { certificationsT } from "@/lib/i18n/translations/home";

const certifications = [
  {
    src: "/images/partners/shopify-partners.svg",
    alt: "Shopify Partners",
    width: 160,
    height: 60,
  },
  {
    src: "/images/partners/google-partner.svg",
    alt: "Google Partner",
    width: 180,
    height: 60,
  },
  {
    src: "/images/partners/semrush-partner.svg",
    alt: "Semrush Academy Certificate",
    width: 180,
    height: 60,
  },
];

export default function Certifications() {
  const locale = useLocale();
  const t = certificationsT[locale];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="w-full px-6 md:px-8 lg:px-16 py-20">
      <div className="mx-auto max-w-[1000px] w-full">
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

        {/* Partner logos */}
        <div
          ref={ref}
          className="flex items-center justify-center flex-wrap gap-10 md:gap-16 lg:gap-20"
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
                scale: 1.08,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative flex items-center justify-center rounded-2xl border border-border bg-bg-card px-8 py-6 backdrop-blur-sm"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10 group-hover:scale-125 pointer-events-none" />

              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="relative h-[40px] md:h-[48px] w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
