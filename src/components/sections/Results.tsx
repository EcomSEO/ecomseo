"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowEffect from "@/components/ui/GlowEffect";

const caseStudies = [
  {
    title: "Norwegian Health Store",
    metric: "+412%",
    description: "Organic revenue growth in 8 months",
    href: "/cases/norwegian-health-store",
  },
  {
    title: "Dutch Brand",
    metric: "+287%",
    description: "Non-brand organic traffic increase",
    href: "/cases/dutch-brand",
  },
  {
    title: "Swedish SEO Explosion",
    metric: "+534%",
    description: "Organic visibility improvement",
    href: "/cases/swedish-seo-explosion",
  },
  {
    title: "Beauty Brand",
    metric: "+195%",
    description: "Organic revenue increase in 6 months",
    href: "/cases/beauty-brand-dominated-in-google",
  },
];

export default function Results() {
  return (
    <SectionWrapper id="projects" className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4 max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge text="Results" />
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
            Ecommerce SEO Results that speak for themselves.
          </h2>
          <p className="text-body text-base md:text-lg">
            Shopify, Magento, Lightspeed, Woocommerce. Name anything.
            We&apos;ve ranked it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((study, i) => (
            <motion.a
              key={study.title}
              href={study.href}
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
                <div className="p-8 md:p-10 flex flex-col gap-4 min-h-[220px]">
                  <span className="text-accent text-sm font-medium">
                    {study.title}
                  </span>
                  <span className="text-[48px] md:text-[64px] font-medium leading-none tracking-[-0.03em] text-heading">
                    {study.metric}
                  </span>
                  <span className="text-body text-sm">
                    {study.description}
                  </span>
                </div>
              </GlowEffect>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
