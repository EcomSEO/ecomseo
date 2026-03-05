"use client";

import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

export default function ClientLogos() {
  const locale = useLocale();
  const t = aboutUsT[locale];

  /*
   * The composite PNG is 1100×434.  At h-[60px] each copy renders at
   * roughly 152px wide, so we need ~10 copies per half to cover a
   * 1920px viewport.  We use 8 copies × 2 sets = 16 total images.
   */
  const copies = Array.from({ length: 8 });

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
              {copies.map((_, i) => (
                <div key={`${set}-${i}`} className="flex-shrink-0 px-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/framer/PU4OfQ64OM3egFuRa8kRsZGpIwc.png"
                    alt="Client logos — Hike, Mother's Earth, Tobio's, HEYSHAPE"
                    className="h-[50px] md:h-[60px] lg:h-[70px] w-auto object-contain opacity-40"
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
