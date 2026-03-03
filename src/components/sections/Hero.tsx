"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/ui/GlowEffect";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-5 md:px-16 pt-[78px] pb-[104px]">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] w-full flex flex-col items-center text-center gap-4">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge text="Backed by 19+ brand owners" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[900px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We build and scale brands with Ecommerce SEO
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-body text-base md:text-lg max-w-[600px] mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Solving SEO for ecommerce brands with a profit-focused approach.
          Multiple 8 figures+ generated through our frameworks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            href="https://w35pmime997.typeform.com/to/eqeeLQvb"
            variant="primary"
            external
          >
            Get in Touch
          </Button>
          <Button href="/#projects" variant="secondary">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
