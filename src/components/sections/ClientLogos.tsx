"use client";

export default function ClientLogos() {
  return (
    <section className="w-full py-8 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex-shrink-0 flex items-center px-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/framer/5Ycaq506DKrp2lkcTnE0vEh0k.svg"
                alt="Client logos — Hike, Mother's Earth, Tobio's, HEYSHAPE"
                className="h-[50px] md:h-[65px] w-auto object-contain opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
