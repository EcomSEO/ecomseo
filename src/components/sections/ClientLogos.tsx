"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

const clientLogos = [
  { src: "/images/clients/hike.svg", alt: "Hike" },
  { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
  { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
  { src: "/images/clients/heyshape.svg", alt: "HEYSHAPE" },
];

export default function ClientLogos() {
  const locale = useLocale();
  const t = aboutUsT[locale];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="w-full pt-0 pb-16">
      <div className="flex justify-center mb-6">
        <Badge text={t.badge} />
      </div>
      <div
        ref={ref}
        className="flex items-center justify-center flex-wrap gap-10 md:gap-16 lg:gap-20 px-6"
      >
        {clientLogos.map((logo, i) => (
          <motion.div
            key={logo.alt}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.8 }
            }
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group relative flex items-center justify-center"
          >
            {/* Purple glow on hover */}
            <div className="absolute inset-0 rounded-full bg-accent/0 blur-xl transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-150" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="relative h-[32px] md:h-[40px] w-auto object-contain opacity-30 transition-all duration-500 group-hover:opacity-90"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
