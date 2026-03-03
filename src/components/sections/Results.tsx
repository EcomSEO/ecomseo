"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowEffect from "@/components/ui/GlowEffect";

const caseStudies = [
  {
    title: "Narcotics store",
    description:
      "\u20AC2.9k to \u20AC91.7k per month revenue. 94% through our SEO.",
    metric: "Exited for 7 figures+",
    subMetric: "In 2 years",
    href: "/cases/norwegian-health-store",
  },
  {
    title: "Biking Brand",
    description:
      "Improved collection page visibility by 970% through product data optimization",
    metric: "8 weeks",
    subMetric: "19% higher CVR",
    href: "/cases/ecommerce-brand",
  },
  {
    title: "Superfoods Brand",
    description: "Tripled SEO revenue with our GMC Optimization",
    metric: "479% more clicks",
    subMetric: "1 week",
    href: "/cases/skyrocket-ecom-site",
  },
  {
    title: "Health Brand",
    description:
      "1316% increase in non-branded clicks on a Shopify store in 12 months!",
    metric: "57% Increase in CTR",
    subMetric: "69% Reduction in CPR",
    href: "/cases/norwegian-smart-seo",
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
                  <p className="text-body text-sm leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    <span className="text-lg md:text-xl font-medium text-heading">
                      {study.metric}
                    </span>
                    <span className="text-xs text-white/40">
                      {study.subMetric}
                    </span>
                  </div>
                </div>
              </GlowEffect>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
