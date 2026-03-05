"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { privacyPolicyT, termsOfServiceT } from "@/lib/i18n/translations/legal";

export default function LegalPageClient({ page }: { page: "privacy" | "terms" }) {
  const locale = useLocale();
  const t = page === "privacy" ? privacyPolicyT[locale] : termsOfServiceT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <motion.div
        className="max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-4">
          {t.title}
        </h1>
        <p className="text-body text-sm mb-12">{t.lastUpdated}</p>

        <div className="flex flex-col gap-10">
          {t.sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2 className="text-lg md:text-xl font-medium text-heading">
                {section.title}
              </h2>
              <p className="text-body text-sm md:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
