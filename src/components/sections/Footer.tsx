"use client";

import LocaleLink from "@/components/ui/LocaleLink";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/useTranslations";
import { footerTranslations } from "@/lib/i18n/translations/footer";

export default function Footer() {
  const locale = useLocale();
  const t = footerTranslations[locale];

  return (
    <footer className="w-full border-t border-border/50">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <LocaleLink href="/" className="flex-shrink-0">
              <Image
                src="https://framerusercontent.com/images/TQbukBV8G5LIkEwGfbxZAiZs.png"
                alt="EcomSEO"
                width={160}
                height={19}
                className="h-[19px] w-auto"
              />
            </LocaleLink>
            <p className="text-body text-sm leading-relaxed max-w-[250px]">
              {t.brandDescription}
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium text-white/80">{t.services}</h4>
            <div className="flex flex-col gap-2">
              {t.serviceLinks.map((link) => (
                <LocaleLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </LocaleLink>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium text-white/80">{t.company}</h4>
            <div className="flex flex-col gap-2">
              {t.companyLinks.map((link) => (
                <LocaleLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </LocaleLink>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium text-white/80">{t.legal}</h4>
            <div className="flex flex-col gap-2">
              {t.legalLinks.map((link) => (
                <LocaleLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M13.6 0H2.4C1.08 0 0 1.08 0 2.4v11.2C0 14.92 1.08 16 2.4 16h11.2c1.32 0 2.4-1.08 2.4-2.4V2.4C16 1.08 14.92 0 13.6 0zM4.8 13.6H2.4V6.4h2.4v7.2zM3.6 5.28c-.8 0-1.44-.64-1.44-1.44 0-.8.64-1.44 1.44-1.44.8 0 1.44.64 1.44 1.44 0 .8-.64 1.44-1.44 1.44zM13.6 13.6h-2.4V9.92c0-.88-.016-2.016-1.232-2.016-1.232 0-1.424.96-1.424 1.952v3.744H6.16V6.4h2.304v.992h.032c.32-.608 1.104-1.248 2.272-1.248 2.432 0 2.88 1.6 2.88 3.68v3.776h-.048z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
