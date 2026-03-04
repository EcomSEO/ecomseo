"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const faqs = [
  {
    question: "What kind of clients do you work with?",
    answer:
      "We work mainly with 6-9 figure D2C ecommerce brands. If you're deciding whether SEO makes sense for your business, feel free to reach out and we'll give you an honest assessment.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "You'll see initial improvements in rankings and technical fixes within 30-60 days. Meaningful traffic and revenue growth typically occurs within 3-6 months. We focus on early wins while building long-term organic growth.",
  },
  {
    question: "What packages do you offer and what's included?",
    answer:
      "We offer five main solutions: Complete Back-End Optimization (\u20ac5,000+/month), PR + Link Building (\u20ac950/month + link costs), Branded + Non-Branded On-Page (\u20ac2,000+/month), Acquisition Campaign (\u20ac2,500+/month), and AI SEO Infrastructure (\u20ac25,000 upfront, \u20ac5,000/month). Each includes specific deliverables detailed in our service matrix.",
  },
  {
    question: "Do I pay for backlinks separately?",
    answer:
      "Yes, for our PR + Link Building and other packages that include link acquisition, you pay our monthly management fee plus the actual cost of securing links from third-party sites. We provide full transparency on all link costs before purchase. Over the years we gathered lots of close contacts in several (big) media companies to promote your product.",
  },
  {
    question: "How do you ensure my SEO investment generates positive ROI?",
    answer:
      "We track revenue attribution from organic traffic, not just rankings or traffic volume. Our strategies focus on high-intent keywords that convert to sales, and we provide detailed ROI reporting monthly.",
  },
  {
    question: "Do you work with businesses heavily dependent on paid ads?",
    answer:
      "Yes, this is our specialty. We help ecommerce brands reduce their paid advertising costs while maintaining growth through organic channels. Many of our clients start with 80%+ paid traffic dependency.",
  },
  {
    question: "How is EcomSEO different from other SEO agencies?",
    answer:
      "We provide complete transparency with full dashboard access, detailed reporting, and proven profit-focused frameworks specifically for ecommerce. You\u2019ll see exactly what we\u2019re doing and how it impacts your revenue through GA4. No black boxes or vague promises.",
  },
  {
    question: "Is your link building safe and Google-compliant?",
    answer:
      "We place contextual links on real publications\u2014no PBNs, no spam. Every URL appears in your sheet so you can verify quality and anchor diversity, addressing the trust gap caused by agencies that hide their link sources.",
  },
  {
    question: "Do I need to write content myself?",
    answer:
      "Only if you want to. Many founders outsource because they lack bandwidth; our writers handle research, drafts, and brand-voice alignment, then send them to you for a quick approval.",
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
            <p className="text-body text-sm leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navigation />
      <main>
        <section className="relative w-full overflow-hidden">
          <div className="relative px-5 md:px-16 pt-[78px] pb-0">
            <div className="relative z-[1] mx-auto max-w-[1200px] w-full flex flex-col items-center text-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge text="Frequently asked questions" />
                </motion.div>

                <motion.h1
                  className="text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[796px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Questions? We got you.
                </motion.h1>

                <motion.p
                  className="text-body text-base md:text-lg font-medium max-w-[400px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We are in the business of making other business more money. If
                  you have questions about that, always feel free to reach out to
                  us.
                </motion.p>
              </div>

              {/* FAQ Accordion */}
              <motion.div
                className="w-full max-w-[800px] text-left py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
        <CTA />
      </main>
      <Footer />
    </>
  );
}
