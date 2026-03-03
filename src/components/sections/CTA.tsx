"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="w-full px-5 md:px-16 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] w-full">
        <motion.div
          className="relative rounded-3xl bg-bg-ui border border-border overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center text-center gap-6 px-8 py-16 md:py-24">
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.02em] text-heading max-w-[700px]">
              Ready to scale your organic revenue?
            </h2>
            <p className="text-body text-base md:text-lg max-w-[500px]">
              Let&apos;s talk about your brand. Book a free strategy call and
              discover what SEO can do for your ecommerce business.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <Button
                href="https://w35pmime997.typeform.com/to/eqeeLQvb"
                variant="primary"
                external
              >
                Get in Touch
              </Button>
              <Button href="/cases" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
