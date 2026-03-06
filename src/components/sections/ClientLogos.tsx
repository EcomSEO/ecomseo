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
    <section className="w-full py-16">
      <div className="flex justify-center mb-6">
        <Badge text={t.badge} />
      </div>
      <div className="flex items-center justify-center gap-10 md:gap-16 lg:gap-20 px-6">
        {clientLogos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center">
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
    </section>
  );
}
