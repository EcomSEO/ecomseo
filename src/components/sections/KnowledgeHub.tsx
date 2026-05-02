"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import LocaleLink from "@/components/ui/LocaleLink";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/useTranslations";
import { blogPreviewT } from "@/lib/i18n/translations/home";

function renderHeading(text: string) {
  const parts = text.split(/\*(.*?)\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em
        key={i}
        className="not-italic"
        style={{
          fontFamily: '"Georgia", "Times New Roman", serif',
          fontStyle: "italic",
        }}
      >
        {part}
      </em>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function KnowledgeHub() {
  const locale = useLocale();
  const t = blogPreviewT[locale];

  return (
    <SectionWrapper className="py-16">
      <div className="flex flex-col items-center gap-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-6 max-w-[800px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {renderHeading(t.heading)}
          </h2>
          <p className="text-body text-base md:text-lg max-w-[640px]">
            {t.subtext}
          </p>
        </motion.div>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Academy card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LocaleLink href="/academy" className="block h-full group">
              <div className="relative rounded-3xl border border-border overflow-hidden h-full min-h-[320px]">
                <div className="absolute inset-0 bg-bg-card" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 20% 50%, rgba(123, 45, 233, 0.30) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(80, 80, 255, 0.18) 0%, transparent 50%)",
                  }}
                />
                {/* Big watermark text */}
                <span className="absolute right-4 bottom-2 text-[100px] md:text-[140px] font-bold leading-none select-none pointer-events-none text-white/[0.03]">
                  66
                </span>
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <h3 className="text-[24px] md:text-[28px] font-medium text-heading group-hover:text-accent transition-colors">
                      EcomSEO Academy
                    </h3>
                    <p className="text-body text-sm leading-relaxed max-w-[340px]">
                      66 free lessons across 10 topics. From search fundamentals to advanced platform-specific SEO. Built for ecommerce store owners and marketing teams.
                    </p>
                  </div>
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-6">
                    {t.ctaAcademy}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </LocaleLink>
          </motion.div>

          {/* Blog/Guides card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <LocaleLink href="/blog" className="block h-full group">
              <div className="relative rounded-3xl border border-border overflow-hidden h-full min-h-[320px]">
                <div className="absolute inset-0 bg-bg-card" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 30%, rgba(193, 100, 230, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(140, 70, 255, 0.15) 0%, transparent 50%)",
                  }}
                />
                {/* Big watermark text */}
                <span className="absolute right-4 bottom-2 text-[100px] md:text-[140px] font-bold leading-none select-none pointer-events-none text-white/[0.03]">
                  27+
                </span>
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(193,100,230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.854z" />
                      </svg>
                    </div>
                    <h3 className="text-[24px] md:text-[28px] font-medium text-heading group-hover:text-accent transition-colors">
                      Guides &amp; Blog
                    </h3>
                    <p className="text-body text-sm leading-relaxed max-w-[340px]">
                      27+ in-depth articles on ecommerce SEO strategy, technical audits, Shopify optimization, and everything we have learned scaling organic for real brands.
                    </p>
                  </div>
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-6">
                    {t.ctaBlog}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
