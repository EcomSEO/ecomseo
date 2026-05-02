"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getLocalizedSlug } from "@/lib/i18n/slugs";

type LocaleLinkProps = ComponentProps<typeof Link>;

/**
 * Locale-aware <Link> wrapper.
 * Default locale (en) links have no prefix (root URLs).
 * Other locales get a /{locale} prefix with translated slugs.
 * External URLs (http://, https://, mailto:, tel:, #) pass through unchanged.
 */
export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const params = useParams();
  const locale = (params?.locale as Locale) || defaultLocale;

  const hrefString = typeof href === "string" ? href : href.pathname || "";

  // Don't prefix external URLs, anchors, or already-prefixed paths
  const isExternal =
    hrefString.startsWith("http") ||
    hrefString.startsWith("mailto:") ||
    hrefString.startsWith("tel:") ||
    hrefString.startsWith("#");

  const isAlreadyPrefixed = hrefString.match(/^\/(en|de|fr|es|it|nl)(\/|$)/);

  if (isExternal || isAlreadyPrefixed) {
    return <Link href={href} {...props} />;
  }

  // Default locale (en): no prefix - links go to root
  if (locale === defaultLocale) {
    return <Link href={href} {...props} />;
  }

  // Other locales: translate slug + prefix with /{locale}
  if (typeof href === "string") {
    const translatedSlug = getLocalizedSlug(href, locale);
    const localizedHref = `/${locale}${translatedSlug.startsWith("/") ? translatedSlug : `/${translatedSlug}`}`;
    return <Link href={localizedHref} {...props} />;
  }

  // Object href
  const pathname = href.pathname || "";
  const translatedSlug = getLocalizedSlug(pathname, locale);
  const localizedHref = {
    ...href,
    pathname: `/${locale}${translatedSlug.startsWith("/") ? translatedSlug : `/${translatedSlug}`}`,
  };
  return <Link href={localizedHref} {...props} />;
}
