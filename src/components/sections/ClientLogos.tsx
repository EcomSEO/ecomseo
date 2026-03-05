"use client";

import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

const clientLogos = [
  { src: "/images/clients/hike.svg", alt: "Hike" },
  { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
  { src: "/images/clients/tobios-logo.png", alt: "Tobio's" },
  { src: "/images/clients/heyshape.svg", alt: "HEYSHAPE" },
];

export default function ClientLogos() {
  const locale = useLocale();
  const t = aboutUsT[locale];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="flex justify-center mb-6">
        <Badge text={t.badge} />
      </div>
      <div className="relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-ticker items-center">
          {[0, 1].map((set) => (
            <div key={set} className="flex-shrink-0 flex items-center">
              {clientLogos.map((logo, i) => (
                <div
                  key={`${set}-${i}`}
                  className="flex-shrink-0 px-10 md:px-14 lg:px-20 flex items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[28px] md:h-[34px] lg:h-[40px] w-auto object-contain opacity-40 hover:opacity-70 transition-opacity"
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
