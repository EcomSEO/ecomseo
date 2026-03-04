"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/useTranslations";
import { ctaT } from "@/lib/i18n/translations/home";

export default function CTA() {
  const locale = useLocale();
  const t = ctaT[locale];

  return (
    <section className="w-full px-5 md:px-16 pt-16 pb-24 md:pt-16 md:pb-24">
      <div className="mx-auto max-w-[1000px] w-full">
        <motion.div
          className="relative rounded-3xl bg-bg-cta border border-border overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 flex flex-col items-center text-center gap-6 p-12 md:p-12">
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[521px]">
              {t.heading}
            </h2>
            <p className="text-body text-base md:text-lg max-w-[589px]">
              {t.subtext}
            </p>
            <div className="mt-2">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                size="large"
                external
              >
                {t.cta}
              </Button>
            </div>
          </div>

          {/* Glow effect at bottom */}
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
            style={{
              width: 951,
              height: 634,
              bottom: -346,
            }}
          >
            <div
              className="absolute animate-glow-rotate"
              style={{
                width: 400,
                height: 400,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgb(123, 45, 233) 60deg, transparent 120deg)",
                filter: "blur(40px)",
                borderRadius: "50%",
                opacity: 0.5,
              }}
            />
            <div
              className="absolute"
              style={{
                width: 300,
                height: 300,
                top: "40%",
                left: "20%",
                background:
                  "conic-gradient(from 180deg, transparent 0deg, rgb(193, 100, 230) 90deg, transparent 180deg)",
                filter: "blur(40px)",
                borderRadius: "50%",
                opacity: 0.35,
                animation: "glow-rotate 8s linear infinite reverse",
              }}
            />
            <div
              className="absolute"
              style={{
                width: 300,
                height: 300,
                top: "35%",
                right: "20%",
                background:
                  "conic-gradient(from 90deg, transparent 0deg, rgb(123, 45, 233) 120deg, transparent 240deg)",
                filter: "blur(40px)",
                borderRadius: "50%",
                opacity: 0.35,
                animation: "glow-rotate 10s linear infinite",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
