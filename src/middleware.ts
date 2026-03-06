import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

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

  // Check if the pathname starts with a supported locale
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If URL has /en (default locale) prefix → 301 redirect to root (remove /en)
  if (pathnameLocale === defaultLocale) {
    const pathWithoutLocale = pathname.slice(`/${defaultLocale}`.length) || "/";
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathWithoutLocale;
    return NextResponse.redirect(newUrl, 301);
  }

  // If URL has a non-default locale prefix (de, fr, es, it, nl) → pass through
  if (pathnameLocale) {
    const response = NextResponse.next();
    response.headers.set("x-locale", pathnameLocale);
    return response;
  }

  // No locale prefix → this is default-locale (English) content at root
  // Rewrite internally to /en/... so the [locale] route matches
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${defaultLocale}${pathname}`;
  const response = NextResponse.rewrite(newUrl);
  response.headers.set("x-locale", defaultLocale);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
