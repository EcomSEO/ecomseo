import Image from "next/image";
import LocaleLink from "@/components/ui/LocaleLink";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { profilePageT } from "@/lib/i18n/translations/profilePage";
const linkPreviews = [
  {
    url: "https://stripe.com",
    title: "Stripe | Payment Processing Platform",
    description: "Online payment processing for internet businesses.",
    icon: "https://framerusercontent.com/images/9pIhXfhCU1sTeHBOgCHIx1HYRQ.png",
  },
  {
    url: "https://linear.app",
    title: "Linear -- Plan and build products",
    description: "Linear streamlines issues, sprints, and product roadmaps.",
    icon: "https://framerusercontent.com/images/4qGHkqJJxfq89gQcjxyVFRpDY.png",
  },
  {
    url: "https://framer.com",
    title: "Framer -- The web builder for stunning sites",
    description: "Ship sites with unmatched design and performance.",
    icon: "https://framerusercontent.com/images/1FvNSvPn60UkPbHBHxPBTOqP7Hc.png",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/page");
}

export default async function PageProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = profilePageT[locale as Locale];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-[640px] px-5 md:px-10 pt-[120px] md:pt-[160px] pb-20">
          {/* Profile header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-20 h-20 rounded-full bg-white-10 border-2 border-border mb-4 overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/kDMvWdaX2VtdpLFprGXLJCDbnA.jpg"
                alt="Fabian van Til"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h1 className="text-heading text-2xl font-semibold">
              Fabian van Til
            </h1>
            <a
              href="mailto:fabian@akravo.com"
              className="text-body text-sm hover:text-heading transition-colors mt-1"
            >
              fabian@akravo.com
            </a>
            <p className="text-body text-base mt-4 max-w-[400px]">
              {t.tagline}
            </p>
            <p className="text-body/60 text-sm mt-2">
              {t.established}
            </p>
          </div>

          {/* Link previews */}
          <div className="space-y-3 mb-12">
            {linkPreviews.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-4 hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white-10 overflow-hidden shrink-0">
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-heading text-sm font-medium truncate">
                    {link.title}
                  </p>
                  <p className="text-body text-xs truncate">
                    {link.description}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-body shrink-0 ml-auto"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ))}
          </div>

          {/* Thread / content */}
          <div className="space-y-6">
            <h2 className="text-heading text-lg font-semibold">{t.threadHeading}</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-bg-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white-10 overflow-hidden">
                    <Image
                      src="https://framerusercontent.com/images/kDMvWdaX2VtdpLFprGXLJCDbnA.jpg"
                      alt="Fabian van Til"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-heading text-sm font-medium">
                      Fabian van Til
                    </p>
                    <p className="text-body/60 text-xs">{t.founderRole}</p>
                  </div>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  {t.threadPost1}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-5">
                <p className="text-body text-sm leading-relaxed">
                  {t.threadPost2}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <LocaleLink
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-heading text-bg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {t.visitCta}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </LocaleLink>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
