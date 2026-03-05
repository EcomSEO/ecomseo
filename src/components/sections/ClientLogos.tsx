"use client";

import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

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
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-ticker items-center">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex-shrink-0 flex items-center px-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/framer/PU4OfQ64OM3egFuRa8kRsZGpIwc.png"
                alt="Client logos — Hike, Mother's Earth, Tobio's, HEYSHAPE"
                className="h-[40px] md:h-[50px] w-auto object-contain opacity-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
