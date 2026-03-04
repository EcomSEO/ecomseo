"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

export default function AboutUs() {
  const locale = useLocale();
  const t = aboutUsT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-6 max-w-[800px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {t.heading}
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed">
            {t.paragraph}
          </p>
        </motion.div>

        {/* Large blurred text card */}
        <motion.div
          className="w-full max-w-[1070px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-3xl bg-bg-ui border border-border p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center gap-12">
              <p className="text-[20px] md:text-[28px] lg:text-[32px] font-medium leading-[1.3] tracking-[-0.01em] text-heading max-w-[800px]">
                {t.cardText}
              </p>
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
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
