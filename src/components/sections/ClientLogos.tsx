"use client";

import Image from "next/image";

const clientLogos = [
  { src: "https://framerusercontent.com/images/R9PWSY8LxXtyW5suU5EWxJzw9Y.webp", alt: "Client logo", width: 125, height: 81 },
  { src: "https://framerusercontent.com/images/t0iElALIslZN0LoWiFvtHdqsKI.webp", alt: "Client logo", width: 124, height: 81 },
  { src: "https://framerusercontent.com/images/3Kg9SIK0Ro5itxJOLFuhbQeyx8.webp", alt: "Client logo", width: 124, height: 81 },
  { src: "https://framerusercontent.com/images/5AyCDNdvQEtwyBvuGqHcDCwJeA.webp", alt: "Client logo", width: 125, height: 81 },
  { src: "https://framerusercontent.com/images/14JcRp6JZhBUl6ReHp6lqIRBmlo.webp", alt: "Client logo", width: 126, height: 82 },
  { src: "https://framerusercontent.com/images/TlKNFSmHBRkkG6eJvlll5HbhEc.webp", alt: "Client logo", width: 76, height: 49 },
  { src: "https://framerusercontent.com/images/MbUu08RiiVySyvbDK3jesMWTr7c.webp", alt: "Client logo", width: 125, height: 81 },
  { src: "https://framerusercontent.com/images/SyEG0S06QqQM1bHszg8JHjBY8.png", alt: "EcomSEO", width: 217, height: 141 },
];

export default function ClientLogos() {
  return (
    <section className="w-full py-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        <p className="text-center text-body text-sm mb-8">
          You&apos;re in good hands:
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker items-center">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity h-[55px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
