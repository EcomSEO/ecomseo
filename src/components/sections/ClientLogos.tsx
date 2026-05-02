"use client";

import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

const clientLogos: { src: string; alt: string; noFilter?: boolean }[] = [
  { src: "/images/clients/hike.svg", alt: "Hike" },
  { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
  { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
  { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
];

const scrollLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function ClientLogos() {
  const locale = useLocale();
  const t = aboutUsT[locale];

  return (
    <section className="w-full pt-12 md:pt-20 pb-16">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
        }
        @media (max-width: 767px) {
          .marquee-track {
            animation-duration: 6s;
          }
        }
      `}</style>
      <div className="flex justify-center mb-6">
        <Badge text={t.badge} />
      </div>
      <div className="relative overflow-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex items-center gap-12 md:gap-20 whitespace-nowrap">
          {scrollLogos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-4 md:px-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="h-[28px] md:h-[40px] w-auto max-w-[140px] object-contain opacity-30 hover:opacity-90 transition-opacity duration-500"
                style={logo.noFilter ? undefined : { filter: "brightness(0) invert(1)" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
