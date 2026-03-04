"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { dataFeedsT } from "@/lib/i18n/translations/home";

const platforms = [
  "Google Shopping",
  "Amazon",
  "Shopify",
  "WooCommerce",
  "Magento",
  "BigCommerce",
  "Lightspeed",
  "Bol.com",
  "Google Merchant Center",
  "Meta Ads",
  "Pinterest",
  "TikTok Shop",
];

export default function DataFeeds() {
  const locale = useLocale();
  const t = dataFeedsT[locale];

  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col items-center text-center gap-12">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {t.heading}
          </h2>
          <p className="text-body text-base md:text-lg max-w-[559px]">
            {t.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform}
              className="flex items-center justify-center px-4 py-3 rounded-2xl bg-bg-ui border border-border hover:border-border-strong transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <span className="text-xs font-medium text-white/60 whitespace-nowrap">
                {platform}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
