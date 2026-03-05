"use client";

import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

const clientLogos = [
  { src: "/images/clients/hike.svg", alt: "Hike", tall: false },
  { src: "/images/clients/me-logo.png", alt: "Mother's Earth", tall: true },
  { src: "/images/clients/tobios-logo.png", alt: "Tobio's", tall: true },
  { src: "/images/clients/heyshape.svg", alt: "HEYSHAPE", tall: false },
];

export default function ClientLogos() {
  const locale = useLocale();
  const t = aboutUsT[locale];

  /* Repeat the logo set 3× per half so the ticker always fills wide screens */
  const repeated = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="flex justify-center mb-8">
        <Badge text={t.badge} />
      </div>
      <div className="relative overflow-hidden">
        {/* edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-ticker items-center">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex-shrink-0 flex items-center"
            >
              {repeated.map((logo, idx) => (
                <div
                  key={`${set}-${idx}`}
                  className="flex-shrink-0 px-8 md:px-14 flex items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-auto object-contain opacity-50 ${
                      logo.tall
                        ? "h-[52px] md:h-[64px] lg:h-[76px]"
                        : "h-[24px] md:h-[30px] lg:h-[36px]"
                    }`}
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
