"use client";

import Image from "next/image";

const LOGO_STRIP = "/images/framer/PU4OfQ64OM3egFuRa8kRsZGpIwc.png";

export default function ToolsSoftware() {
  return (
    <section className="w-full py-20 md:py-28 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex-shrink-0 flex items-center px-16"
            >
              <Image
                src={LOGO_STRIP}
                alt="Majestic, Bing Partner, Google Partner, Looker Studio, Semrush, Shopify Partner"
                width={1100}
                height={434}
                className="h-[40px] md:h-[50px] w-auto"
                style={{ opacity: 0.5 }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
