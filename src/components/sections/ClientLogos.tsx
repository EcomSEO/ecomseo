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
      <div className="flex justify-center mb-8">
        <Badge text={t.badge} />
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker items-center">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex-shrink-0 flex items-center"
            >
              {clientLogos.map((logo) => (
                <div key={`${set}-${logo.alt}`} className="flex-shrink-0 px-8 md:px-12">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[28px] md:h-[36px] lg:h-[44px] w-auto object-contain opacity-50"
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
