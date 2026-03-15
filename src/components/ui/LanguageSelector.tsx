"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config";

const localeConfig: Record<Locale, { code: string; label: string }> = {
  en: { code: "EN", label: "English" },
  de: { code: "DE", label: "Deutsch" },
  fr: { code: "FR", label: "Français" },
  es: { code: "ES", label: "Español" },
  it: { code: "IT", label: "Italiano" },
  nl: { code: "NL", label: "Nederlands" },
};

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export default function LanguageSelector({ dropUp = false }: { dropUp?: boolean } = {}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (params?.locale as Locale) || "en";
  const current = localeConfig[currentLocale];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  function switchLocale(newLocale: Locale) {
    // Strip any existing locale prefix from the current path
    // Use word-boundary check (locale must be followed by / or end of string)
    const pathWithoutLocale =
      pathname.replace(/^\/(en|de|fr|es|it|nl)(\/|$)/, "/") || "/";

    if (newLocale === defaultLocale) {
      // Default locale (en): root URL, no prefix
      router.push(pathWithoutLocale);
    } else {
      // Other locales: add /{locale} prefix
      const cleanPath =
        pathWithoutLocale === "/" ? "" : pathWithoutLocale;
      router.push(`/${newLocale}${cleanPath}`);
    }
    setOpen(false);
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "transparent",
          color: "rgba(255,255,255,0.7)",
          fontSize: "14px",
          cursor: "pointer",
          transition: "all 0.15s",
        }}
        aria-label="Select language"
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "white";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
        }}
      >
        <GlobeIcon />
        <span style={{ fontWeight: 500 }}>{current.code}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            opacity: 0.5,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            ...(dropUp
              ? { bottom: "100%", marginBottom: "8px" }
              : { top: "100%", marginTop: "8px" }),
            width: "180px",
            padding: "6px 0",
            background: "rgb(18,18,18)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            zIndex: 60,
            overflow: "hidden",
          }}
        >
          {locales.map((locale) => {
            const { code, label } = localeConfig[locale];
            const isActive = locale === currentLocale;
            return (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 16px",
                  fontSize: "14px",
                  color: isActive ? "white" : "rgba(255,255,255,0.6)",
                  background: isActive
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <span
                  style={{
                    width: "24px",
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "12px",
                    opacity: 0.6,
                  }}
                >
                  {code}
                </span>
                <span>{label}</span>
                {isActive && (
                  <svg
                    style={{ marginLeft: "auto", color: "rgb(193,100,230)" }}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M11.5 3.5L5.5 10l-3-3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
