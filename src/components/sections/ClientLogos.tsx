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

/* Repeat logos so one half always fills ultra-wide screens */
const logosSet = [...clientLogos, ...clientLogos, ...clientLogos];

export default function ClientLogos() {
  const locale = useLocale();
  const t = aboutUsT[locale];

  return (
    <section className="w-full pt-0 pb-16 overflow-hidden">
      <div className="flex justify-center mb-6">
        <Badge text={t.badge} />
      </div>
      <div className="relative overflow-hidden">
        {/* Edge fade masks — inline styles guarantee the bg color renders */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40"
          style={{ background: "linear-gradient(to right, rgb(10,10,10), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40"
          style={{ background: "linear-gradient(to left, rgb(10,10,10), transparent)" }}
        />

        <div className="flex animate-ticker items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex-shrink-0 flex items-center"
            >
              {logosSet.map((logo, i) => (
                <div
                  key={`${copy}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 md:px-10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[28px] md:h-[36px] w-auto max-w-[140px] object-contain opacity-40 hover:opacity-70 transition-opacity"
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
