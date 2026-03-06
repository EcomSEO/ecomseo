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
    <section className="w-full pt-8 pb-16">
      <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12 lg:gap-14 px-6">
        {toolLogos.map((tool) => (
          <div key={tool.alt} className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.src}
              alt={tool.alt}
              className="h-[24px] md:h-[30px] w-auto object-contain opacity-40 hover:opacity-70 transition-opacity"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
