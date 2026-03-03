"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowEffect from "@/components/ui/GlowEffect";

const steps = [
  {
    number: "01",
    title: "100% Transparancy",
    description:
      "Automated updates, log in at any time into our dashboards. Dedicated Slack/Whatsapp channels.",
  },
  {
    number: "02",
    title: "Proven Process",
    description:
      "SEO sensei's like us know exactly what we're doing. Because we've done it before. For many brands.",
  },
  {
    number: "03",
    title: "Profit-Focused",
    description:
      "Revenue is nice. Profit is nicer. We focus on high ROI tasks. No time for bs.",
  },
];

export default function Process() {
  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 max-w-[800px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text="Process" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            Most agencies absolutely Suck. We know.
          </h2>
          <p className="text-body text-base md:text-lg">
            Pretending, no focus, no proven strategy. The truth is… that&apos;s
            how you start. If you work with experienced agency owners,
            you&apos;ll experience:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowEffect
                borderRadius={24}
                className="h-full"
                color="rgb(123, 45, 233)"
              >
                <div className="p-8 md:p-10 flex flex-col gap-6 min-h-[250px]">
                  <span className="text-accent text-sm font-medium">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-heading">
                    {step.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlowEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
