"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const toolLogos = [
  { src: "/images/framer/t0iElALIslZN0LoWiFvtHdqsKI.webp", alt: "Google Partner" },
  { src: "/images/framer/TlKNFSmHBRkkG6eJvlll5HbhEc.webp", alt: "Screaming Frog" },
  { src: "/images/framer/14JcRp6JZhBUl6ReHp6lqIRBmlo.webp", alt: "Majestic" },
  { src: "/images/framer/3Kg9SIK0Ro5itxJOLFuhbQeyx8.webp", alt: "Semrush" },
  { src: "/images/framer/5AyCDNdvQEtwyBvuGqHcDCwJeA.webp", alt: "Shopify Partner" },
  { src: "/images/framer/MbUu08RiiVySyvbDK3jesMWTr7c.webp", alt: "Looker Studio" },
  { src: "/images/framer/R9PWSY8LxXtyW5suU5EWxJzw9Y.webp", alt: "Bing Partner" },
  { src: "/images/framer/SyEG0S06QqQM1bHszg8JHjBY8.png", alt: "EcomSEO" },
];

export default function ToolsSoftware() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="w-full pt-8 pb-16">
      <div
        ref={ref}
        className="flex items-center justify-center flex-wrap gap-8 md:gap-12 lg:gap-14 px-6"
      >
        {toolLogos.map((tool, i) => (
          <motion.div
            key={tool.alt}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.8 }
            }
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group relative flex items-center justify-center"
          >
            {/* Purple glow on hover */}
            <div className="absolute inset-0 rounded-full bg-accent/0 blur-xl transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-150" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.src}
              alt={tool.alt}
              className="relative h-[32px] md:h-[40px] w-auto object-contain opacity-30 transition-all duration-500 group-hover:opacity-90"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
