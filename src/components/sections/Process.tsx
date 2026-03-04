"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowEffect from "@/components/ui/GlowEffect";
import { useLocale } from "@/lib/i18n/useTranslations";
import { processT } from "@/lib/i18n/translations/home";

export default function Process() {
  const locale = useLocale();
  const t = processT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 max-w-[800px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {t.heading}
          </h2>
          <p className="text-body text-base md:text-lg">
            {t.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowEffect
                borderRadius={24}
                className="h-full"
                color="rgb(123, 45, 233)"
              >
                <div className="p-8 md:p-10 flex flex-col gap-6 min-h-[250px]">
                  <span className="text-accent text-sm font-medium">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-heading">
                    {step.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlowEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
