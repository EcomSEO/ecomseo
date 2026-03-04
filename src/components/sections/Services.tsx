"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowEffect from "@/components/ui/GlowEffect";
import { useLocale } from "@/lib/i18n/useTranslations";
import { servicesT } from "@/lib/i18n/translations/home";

const spans = [1, 1, 2];

export default function Services() {
  const locale = useLocale();
  const t = servicesT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 max-w-[700px]"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={spans[i] === 2 ? "md:col-span-2" : ""}
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
                <div className="p-8 md:p-10 flex flex-col gap-4 min-h-[200px]">
                  <h3 className="text-[24px] md:text-[32px] font-medium text-heading">
                    {card.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed max-w-[500px]">
                    {card.description}
                  </p>
                </div>
              </GlowEffect>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            href="https://w35pmime997.typeform.com/to/eqeeLQvb"
            variant="primary"
            size="large"
            external
          >
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
