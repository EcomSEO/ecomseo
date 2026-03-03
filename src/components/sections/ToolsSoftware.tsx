"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";

const tools = [
  "Ahrefs",
  "Semrush",
  "Screaming Frog",
  "Google Search Console",
  "Google Analytics",
  "Surfer SEO",
  "ChatGPT",
  "Clearscope",
  "SE Ranking",
  "Majestic",
  "Moz",
  "PageSpeed Insights",
];

export default function ToolsSoftware() {
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
          <Badge text="Tools & Software" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            Enterprise-grade SEO tools.
          </h2>
          <p className="text-body text-base md:text-lg">
            We use the best tools in the industry to analyze, strategize, and
            execute. No shortcuts, no guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              className="flex items-center justify-center px-6 py-4 rounded-2xl bg-bg-ui border border-border hover:border-border-strong transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span className="text-sm font-medium text-white/60">
                {tool}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
