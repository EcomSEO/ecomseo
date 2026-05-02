"use client";

import { useParams } from "next/navigation";
import { locales, defaultLocale, type Locale } from "./config";

const localeSet = new Set<string>(locales);

/**
 * Hook to get the current locale from URL params.
 *
 * Hardened: if `params.locale` is missing or not one of our 6 supported
 * locales, fall back to `defaultLocale` ("en"). Without this guard, an
 * unexpected locale value (e.g. from a bot hitting a synthetic route or a
 * stale cached path) propagates through to `translations[locale]` calls
 * and returns `undefined` — the next `.heading` / `.map` access then
 * crashes the whole page client-side.
 */
export function useLocale(): Locale {
  const params = useParams();
  const raw = params?.locale;
  if (typeof raw === "string" && localeSet.has(raw)) {
    return raw as Locale;
  }
  return defaultLocale;
}
