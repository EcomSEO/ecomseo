"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative w-full overflow-hidden">
          <div className="relative px-5 md:px-16 pt-[105px] pb-[250px]">
            <div className="relative z-[1] mx-auto max-w-[1200px] w-full flex flex-col items-center text-center gap-4">
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge text="Page not found (404)" />
                </motion.div>

                <motion.h1
                  className="text-[40px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-[-0.03em] text-heading max-w-[796px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Oops&hellip; This page doesn&apos;t exist (anymore)
                </motion.h1>

                <motion.p
                  className="text-body text-base md:text-lg font-medium max-w-[289px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Looks like we took a wrong turn somewhere. let&apos;s get you
                  back to business.
                </motion.p>

                <motion.div
                  className="py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button href="/" variant="primary" size="large">
                    Go Home
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Glow effect */}
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
              style={{ width: 1200, height: 800, bottom: -406 }}
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
      </main>
      <Footer />
    </>
  );
}
