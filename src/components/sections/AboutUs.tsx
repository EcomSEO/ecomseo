"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutUs() {
  return (
    <SectionWrapper className="py-24 md:py-32">
      <motion.div
        className="flex flex-col gap-6 max-w-[800px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Badge text="Top Clients Only" />
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
          We decline 70% of projects. Here&apos;s why.
        </h2>
        <p className="text-body text-base md:text-lg leading-relaxed">
          We create market leaders. We only take on projects we&apos;re 100%
          sure we can rank. And yes, we&apos;re very picky. But that&apos;s a
          good thing. We strongly believe SEO doesn&apos;t make sense in many
          markets.
        </p>
        <p className="text-body text-base md:text-lg leading-relaxed">
          Here at EcomSEO, we run and scale brands without ads. We increase
          brand awareness and convert shoppers with trust.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
