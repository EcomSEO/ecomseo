"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { certificationsT } from "@/lib/i18n/translations/home";

const certifications = [
  {
    src: "/images/partners/shopify-partner.png",
    alt: "Shopify Partners",
    width: 800,
    height: 250,
  },
  {
    src: "/images/partners/google-partner.png",
    alt: "Google Partner",
    width: 573,
    height: 208,
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

        {/* Partner logos — horizontal row */}
        <div
          ref={ref}
          className="flex items-center justify-center flex-wrap gap-10 md:gap-14 lg:gap-16"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.alt}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.8 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.12,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative flex items-center justify-center"
            >
              {/* Purple glow on hover */}
              <div className="absolute inset-0 rounded-full bg-accent/0 blur-xl transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-150 pointer-events-none" />

              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="relative h-[40px] md:h-[50px] w-auto object-contain opacity-60 transition-all duration-500 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
