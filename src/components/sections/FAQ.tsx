"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "SEO is a long-term play. Most of our clients start seeing meaningful improvements within 3-6 months. However, this depends on your industry, competition, and the current state of your website. We set realistic expectations from day one and provide monthly reporting so you can track progress.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No legitimate SEO agency can guarantee specific rankings. Google's algorithm uses 200+ factors and changes constantly. What we do guarantee is a proven process, transparent reporting, and a relentless focus on driving revenue — not just vanity metrics.",
  },
  {
    question: "What makes EcomSEO different from other agencies?",
    answer:
      "We only work with ecommerce brands, and we decline 70% of projects. Our Commerce Growth Framework™ combines SEO, CRO, and data layer optimization — specifically designed for product-based businesses with thousands of SKUs. We also own and operate our own ecommerce brands, so we understand the challenges firsthand.",
  },
  {
    question: "Which platforms do you work with?",
    answer:
      "We work with all major ecommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Shopware, and PrestaShop. Our technical team has deep expertise in platform-specific optimizations at the code level.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our pricing depends on the scope of work, your current organic performance, and the competitive landscape. We offer custom proposals after an initial audit. We're not the cheapest agency — we're the most effective for ecommerce brands serious about organic growth.",
  },
  {
    question: "Do you work with small brands?",
    answer:
      "We work with ecommerce brands doing at least $500K+ in annual revenue. If you're just starting out, SEO might not be the best investment yet. We'll be honest about that in our initial consultation.",
  },
];

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
            <p className="text-body text-sm leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text="FAQ" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            Most agencies absolutely Suck. We know.
          </h2>
          <p className="text-body text-base md:text-lg">
            That&apos;s why we do things differently. Got questions? We&apos;ve
            got answers.
          </p>
        </motion.div>

        <motion.div
          className="max-w-[800px]"
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
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
