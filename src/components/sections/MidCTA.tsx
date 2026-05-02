"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function MidCTA() {
  return (
    <SectionWrapper className="py-10">
      <motion.div
        className="relative rounded-3xl border border-border overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-bg-card" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(123, 45, 233, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(80, 80, 255, 0.15) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 py-10 md:py-14 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-[20px] md:text-[24px] font-medium text-heading">
              Ready to grow organic revenue?
            </p>
            <p className="text-body text-sm">
              Free 30-min audit with Fabian. No pitch. We&apos;ll tell you honestly if SEO makes sense for your store.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              href="/demo"
              variant="primary"
              size="large"
            >
              Book 30 min with Fabian
            </Button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
