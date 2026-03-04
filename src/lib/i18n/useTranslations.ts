"use client";

import { useParams } from "next/navigation";
import type { Locale } from "./config";

/**
 * Hook to get the current locale from URL params.
 * Components then import their own translation objects and index by locale.
 */
export function useLocale(): Locale {
  const params = useParams();
  return (params?.locale as Locale) || "en";
}
