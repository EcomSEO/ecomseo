"use client";

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
  return (
    <section className="w-full py-8 overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-ticker items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex-shrink-0 flex items-center"
            >
              {toolLogos.map((tool) => (
                <div
                  key={`${copy}-${tool.alt}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 md:px-10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="h-[28px] md:h-[36px] w-auto object-contain opacity-40 hover:opacity-70 transition-opacity"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
