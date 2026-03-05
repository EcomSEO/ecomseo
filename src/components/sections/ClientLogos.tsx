"use client";

import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/useTranslations";
import { aboutUsT } from "@/lib/i18n/translations/home";

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
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex-shrink-0 px-6 md:px-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/framer/5Ycaq506DKrp2lkcTnE0vEh0k.svg"
                    alt="Client logos — Hike, Mother's Earth, Tobio's, HEYSHAPE"
                    className="h-[70px] md:h-[90px] lg:h-[110px] w-auto object-contain opacity-50"
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
