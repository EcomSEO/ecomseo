"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/lib/i18n/useTranslations";
import {
  pricingHeroT,
  pricingTiersT,
  pricingFeaturesT,
  pricingProcessT,
  pricingFaqSectionT,
  pricingFaqItemsT,
  type PricingTier,
} from "@/lib/i18n/translations/pricing";

const TYPEFORM_URL = "https://w35pmime997.typeform.com/to/eqeeLQvb";

/* ─── FAQ Item ─── */
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-border/50">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-heading group-hover:text-accent transition-colors pr-8">
          {question}
        </span>
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white/40">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          >
            <path
              d="M8 3v10M3 8h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-body text-sm leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Tier Card ─── */
function TierCard({
  tier,
  index,
}: {
  tier: PricingTier;
  index: number;
}) {
  return (
    <motion.div
      className={`relative rounded-3xl p-8 flex flex-col overflow-hidden ${
        tier.highlighted
          ? "border border-accent/30"
          : "bg-bg-ui border border-border"
      }`}
      style={
        tier.highlighted
          ? {
              background:
                "linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(13, 13, 13, 0.9) 60%, rgba(123, 45, 233, 0.15) 100%)",
            }
          : undefined
      }
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Aurora glow for highlighted */}
      {tier.highlighted && (
        <div
          className="absolute -bottom-16 -right-16 w-[280px] h-[280px] rounded-full blur-[100px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(193, 100, 230, 0.35) 0%, rgba(123, 45, 233, 0.15) 60%, transparent 100%)",
          }}
        />
      )}

      <div className="relative z-10 flex flex-col flex-1">
        {/* Popular label */}
        {tier.popularLabel && (
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent border border-accent/20">
              {tier.popularLabel}
            </span>
          </div>
        )}

        {/* Tier name */}
        <h3 className="text-xl font-semibold text-heading">{tier.name}</h3>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-3">
          <span className="text-[40px] font-medium leading-none tracking-tight text-heading">
            {tier.price}
          </span>
          <span className="text-body text-sm">{tier.priceSubtext}</span>
        </div>

        {/* Description */}
        <p className="text-body text-sm leading-relaxed mt-4">
          {tier.description}
        </p>

        {/* Features */}
        <div className="flex flex-col gap-3 mt-6 flex-1">
          {tier.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-accent">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-heading text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button
            href={TYPEFORM_URL}
            variant={tier.highlighted ? "primary" : "secondary"}
            size="large"
            external
            className="w-full justify-center"
          >
            {tier.cta}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Feature Comparison Table ─── */
function FeatureTable() {
  const locale = useLocale();
  const t = pricingFeaturesT[locale];

  return (
    <section className="px-5 md:px-16 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            {t.heading}
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          className="rounded-3xl border border-border overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header row */}
              <div className="grid grid-cols-4 border-b border-border bg-bg-ui">
                <div className="px-6 py-4 text-sm font-medium text-body">
                  {t.featureLabel}
                </div>
                {t.tierNames.map((name, i) => (
                  <div
                    key={name}
                    className={`px-6 py-4 text-sm font-semibold text-center ${
                      i === 1 ? "text-accent" : "text-heading"
                    }`}
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* Feature rows */}
              {t.rows.map((row, ri) => (
                <div
                  key={ri}
                  className={`grid grid-cols-4 ${
                    ri < t.rows.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <div className="px-6 py-3.5 text-sm text-heading">
                    {row.label}
                  </div>
                  {row.values.map((val, vi) => (
                    <div
                      key={vi}
                      className="px-6 py-3.5 flex items-center justify-center"
                    >
                      {val === true ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-accent"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : val === false ? (
                        <span className="text-white/20">&mdash;</span>
                      ) : (
                        <span className="text-sm text-body">{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Commerce Growth Framework ─── */
function ProcessSection() {
  const locale = useLocale();
  const t = pricingProcessT[locale];

  return (
    <section className="px-5 md:px-16 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text={t.badge} />
          <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
            {t.heading}
          </h2>
          <p className="text-body text-base md:text-lg font-medium max-w-[600px]">
            {t.subtext}
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.phases.map((phase, i) => (
            <motion.div
              key={i}
              className="bg-bg-ui border border-border rounded-3xl p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Phase number */}
              <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center">
                <span className="text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-heading">
                {phase.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page Component ─── */
export default function PricingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const locale = useLocale();
  const hero = pricingHeroT[locale];
  const tiers = pricingTiersT[locale];
  const faqSection = pricingFaqSectionT[locale];
  const faqs = pricingFaqItemsT[locale];

  return (
    <>
      <Navigation />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative w-full overflow-hidden">
          <div className="relative px-5 md:px-16 pt-[110px] pb-24">
            <div className="relative z-[1] mx-auto max-w-[1200px] w-full flex flex-col items-center text-center gap-4">
              <div className="flex flex-col items-center gap-[7px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge text={hero.badge} />
                </motion.div>

                <motion.h1
                  className="text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[796px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {hero.heading}
                </motion.h1>

                <motion.p
                  className="text-body text-base md:text-lg font-medium max-w-[619px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {hero.subtitle}
                </motion.p>
              </div>
            </div>

            {/* Glow effect */}
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
              style={{ width: 1200, height: 800, bottom: -400 }}
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
                  opacity: 0.6,
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
                  opacity: 0.4,
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
                  opacity: 0.4,
                  animation: "glow-rotate 10s linear infinite",
                }}
              />
            </div>
          </div>
        </section>

        {/* ─── Pricing Tiers ─── */}
        <section className="px-5 md:px-16 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <TierCard key={tier.name} tier={tier} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Feature Comparison ─── */}
        <FeatureTable />

        {/* ─── Commerce Growth Framework ─── */}
        <ProcessSection />

        {/* ─── FAQ ─── */}
        <section className="px-5 md:px-16 py-24">
          <div className="mx-auto max-w-[800px]">
            <motion.div
              className="flex flex-col items-center text-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Badge text={faqSection.badge} />
              <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                {faqSection.heading}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
