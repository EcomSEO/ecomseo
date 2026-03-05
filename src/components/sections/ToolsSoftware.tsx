"use client";

const LOGO_STRIP = "/images/framer/PU4OfQ64OM3egFuRa8kRsZGpIwc.png";

export default function ToolsSoftware() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex-shrink-0 flex items-center px-16"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_STRIP}
                alt="Majestic, Bing Partner, Google Partner, Looker Studio, Semrush, Shopify Partner"
                className="h-[40px] md:h-[50px] w-auto opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
