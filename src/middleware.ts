import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, localeAliases } from "./lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

function getPreferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q] = lang.trim().split(";q=");
      return { code: code.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of languages) {
    if (localeAliases[code]) return localeAliases[code];
    const prefix = code.split("-")[0];
    if (localeAliases[prefix]) return localeAliases[prefix];
  }

  return defaultLocale;
}

function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (locales.includes(maybeLocale as (typeof locales)[number])) {
    return maybeLocale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths, API routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Set locale header for the root layout to read
    const locale = getLocaleFromPathname(pathname);
    const response = NextResponse.next();
    response.headers.set("x-locale", locale);
    return response;
  }

  // No locale prefix — detect and redirect
  const acceptLanguage = request.headers.get("accept-language");
  const detectedLocale = getPreferredLocale(acceptLanguage);

  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${detectedLocale}${pathname}`;

  return NextResponse.redirect(newUrl, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
