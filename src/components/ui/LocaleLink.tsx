"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";

type LocaleLinkProps = ComponentProps<typeof Link>;

/**
 * Locale-aware <Link> wrapper.
 * Automatically prefixes internal hrefs with the current locale.
 * External URLs (http://, https://, mailto:, tel:, #) pass through unchanged.
 */
export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

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

  // Prefix with locale
  const localizedHref =
    typeof href === "string"
      ? `/${locale}${href.startsWith("/") ? href : `/${href}`}`
      : { ...href, pathname: `/${locale}${href.pathname?.startsWith("/") ? href.pathname : `/${href.pathname}`}` };

  return <Link href={localizedHref} {...props} />;
}
