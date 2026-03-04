"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/useTranslations";
import type { Locale } from "@/lib/i18n/config";

const clientLogosT: Record<Locale, { trustLine: string }> = {
  en: { trustLine: "You're in good hands:" },
  de: { trustLine: "Sie sind in guten Händen:" },
  fr: { trustLine: "Vous êtes entre de bonnes mains :" },
  es: { trustLine: "Estás en buenas manos:" },
  it: { trustLine: "Sei in buone mani:" },
  nl: { trustLine: "Je bent in goede handen:" },
};

const clientLogos = [
  { src: "/images/framer/R9PWSY8LxXtyW5suU5EWxJzw9Y.webp", alt: "Client logo", width: 125, height: 81 },
  { src: "/images/framer/t0iElALIslZN0LoWiFvtHdqsKI.webp", alt: "Client logo", width: 124, height: 81 },
  { src: "/images/framer/3Kg9SIK0Ro5itxJOLFuhbQeyx8.webp", alt: "Client logo", width: 124, height: 81 },
  { src: "/images/framer/5AyCDNdvQEtwyBvuGqHcDCwJeA.webp", alt: "Client logo", width: 125, height: 81 },
  { src: "/images/framer/14JcRp6JZhBUl6ReHp6lqIRBmlo.webp", alt: "Client logo", width: 126, height: 82 },
  { src: "/images/framer/TlKNFSmHBRkkG6eJvlll5HbhEc.webp", alt: "Client logo", width: 76, height: 49 },
  { src: "/images/framer/MbUu08RiiVySyvbDK3jesMWTr7c.webp", alt: "Client logo", width: 125, height: 81 },
  { src: "/images/framer/SyEG0S06QqQM1bHszg8JHjBY8.png", alt: "EcomSEO", width: 217, height: 141 },
];

export default function ClientLogos() {
  const locale = useLocale();
  const t = clientLogosT[locale];
  return (
    <section className="w-full py-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        <p className="text-center text-body text-sm mb-8">
          {t.trustLine}
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
