"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const caseStudies = [
  {
    title: "Narcotics store",
    image:
      "https://framerusercontent.com/images/jKLk43bNfpNjhQGvnRhYkxJNjQ.webp",
    badges: ["Exited for 7 figures+", "In 2 years"],
    href: "/cases/norwegian-health-store",
  },
  {
    title: "Biking Brand",
    image:
      "https://framerusercontent.com/images/EeufC2RDWV8GzZB7fBbKfmWJQuc.webp",
    badges: ["8 weeks", "19% higher CVR"],
    href: "/cases/ecommerce-brand",
  },
  {
    title: "Superfoods Brand",
    image:
      "https://framerusercontent.com/images/nT2RO8bU8V5MvRjsqPRcXjKiA.webp",
    badges: ["479% more clicks", "1 week"],
    href: "/cases/skyrocket-ecom-site",
  },
  {
    title: "Health Brand",
    image:
      "https://framerusercontent.com/images/U8W2ek1f8J8lKPXlMlEGVJnMA.webp",
    badges: ["57% Increase in CTR", "69% Reduction in CPR"],
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudies.map((study, i) => (
            <motion.a
              key={study.title}
              href={study.href}
              className="group relative rounded-3xl overflow-hidden border border-border h-[400px] block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${study.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                <h3 className="text-base font-medium text-heading">
                  {study.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 text-xs font-medium text-white/80 bg-[rgba(13,13,13,0.56)] border border-border rounded-xl backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/cases" variant="secondary" size="large">
            All Case Studies
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
