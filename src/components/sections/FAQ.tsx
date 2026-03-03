"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const faqs = [
  {
    question: "What exactly does EcomSEO do?",
    answer:
      "We specialize in SEO for e-commerce brands. From technical SEO and product page optimization to link building and content strategy — everything we do is focused on driving organic revenue for online stores.",
  },
  {
    question: 'How are you different from a "normal" SEO agency?',
    answer:
      "We only work with e-commerce brands. We don't do local SEO, B2B SEO, or anything else. This means our entire process, team, and tooling is built specifically for product-based businesses with hundreds or thousands of SKUs.",
  },
  {
    question: "Who is EcomSEO a good fit for?",
    answer:
      "We work best with e-commerce brands doing €500K+ in annual revenue that are serious about organic growth. If you're just starting out, SEO might not be the best investment yet — and we'll be honest about that.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "SEO is a long-term play. Most of our clients start seeing meaningful improvements within 3-6 months. However, this depends on your industry, competition, and the current state of your website.",
  },
  {
    question: "What kind of results can we realistically expect?",
    answer:
      "This depends on many factors — your niche, competition, current SEO health, and budget. We set realistic expectations from day one and provide monthly reporting so you can track progress. Check our case studies for examples.",
  },
  {
    question: "How transparent is your reporting?",
    answer:
      "100% transparent. You get access to live dashboards, dedicated Slack/WhatsApp channels, and monthly strategy calls. We believe in full visibility — no black-box SEO.",
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
          <Badge text="Frequently asked questions" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            Questions? We got you.
          </h2>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/faq" variant="secondary">
            Check all FAQ
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
