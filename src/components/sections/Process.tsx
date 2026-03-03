"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    phase: "Phase 1",
    type: "Diagnosis",
    title: "Precision Ecommerce SEO Audit",
    description:
      "Technical scoring, Crawl-depth analysis, Index bloat detection, and a comprehensive Revenue opportunity map.",
  },
  {
    phase: "Phase 2",
    type: "Strategy",
    title: "Revenue-Intent Keyword Mapping",
    description:
      "We ditch volume for value. We identify the exact keywords buyers use right before purchasing.",
  },
  {
    phase: "Phase 3",
    type: "Execution",
    title: "Conversion-Driven Content System",
    description:
      "We redesign category & product content to persuade, not just rank. Turning grids into sales pages.",
  },
  {
    phase: "Phase 4",
    type: "Technical",
    title: "Platform-Level Technical Enhancements",
    description:
      "Shopify, WooCommerce, Magento, BigCommerce - optimized at the code-level for speed and crawlability.",
  },
];

export default function Process() {
  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col gap-16">
        <motion.div
          className="flex flex-col gap-4 max-w-[800px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text="Unique Mechanism" />
          <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            The Commerce Growth Framework&trade;
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-white/40">
            SEO + CRO + Data Layer Optimization
          </h3>
          <p className="text-body text-base md:text-lg">
            You don&apos;t need random tactics. You need a system built for
            ecommerce volume, competition, and SKU scale.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              className="group flex flex-col md:flex-row gap-2 md:gap-6 pl-6 md:pl-8 pb-8 md:pb-10 relative cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Animated border line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-accent transition-colors duration-300" />

              {/* Phase column */}
              <div className="flex md:flex-col items-center md:items-start gap-3 md:w-1/4 shrink-0">
                <h4 className="text-accent text-lg font-medium">
                  {step.phase}
                </h4>
                <span className="text-sm text-white/40 font-medium">
                  {step.type}
                </span>
              </div>

              {/* Content column */}
              <div className="md:w-3/4">
                <h3 className="text-xl md:text-2xl font-medium text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
