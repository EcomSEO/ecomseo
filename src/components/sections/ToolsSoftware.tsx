"use client";

import Image from "next/image";

const LOGO_STRIP = "/images/framer/5Ycaq506DKrp2lkcTnE0vEh0k.svg";

export default function ToolsSoftware() {
  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

        <div className="flex animate-ticker items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex-shrink-0 flex items-center px-8"
            >
              <Image
                src={LOGO_STRIP}
                alt="SEO Tools - Google Analytics, Screaming Frog, Majestic, Bing Partner, Google Partner, Looker Studio"
                width={1345}
                height={421}
                className="h-[60px] w-auto opacity-70"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
