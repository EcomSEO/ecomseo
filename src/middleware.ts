import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./lib/i18n/config";
import { getEnglishSlug, getLocalizedSlug } from "./lib/i18n/slugs";

const PUBLIC_FILE = /\.(.*)$/;

// Location slug maps per locale. Map internal slug → locale public slug for redirects.
const locationSlugToNlPublic: Record<string, string> = {
  amsterdam: "seo-bureau-amsterdam",
  rotterdam: "seo-bureau-rotterdam",
  eindhoven: "seo-bureau-eindhoven",
  "den-haag": "seo-bureau-den-haag",
  utrecht: "seo-bureau-utrecht",
  breda: "seo-bureau-breda",
  groningen: "seo-bureau-groningen",
  tilburg: "seo-bureau-tilburg",
  arnhem: "seo-bureau-arnhem",
  enschede: "seo-bureau-enschede",
  nijmegen: "seo-bureau-nijmegen",
  apeldoorn: "seo-bureau-apeldoorn",
  haarlem: "seo-bureau-haarlem",
  almere: "seo-bureau-almere",
  zwolle: "seo-bureau-zwolle",
  amersfoort: "seo-bureau-amersfoort",
  "den-bosch": "seo-bureau-den-bosch",
  leiden: "seo-bureau-leiden",
  maastricht: "seo-bureau-maastricht",
  deventer: "seo-bureau-deventer",
  dordrecht: "seo-bureau-dordrecht",
  leeuwarden: "seo-bureau-leeuwarden",
  delft: "seo-bureau-delft",
  hilversum: "seo-bureau-hilversum",
  roosendaal: "seo-bureau-roosendaal",
  zoetermeer: "seo-bureau-zoetermeer",
  "noord-holland": "seo-bureau-noord-holland",
  "zuid-holland": "seo-bureau-zuid-holland",
  nederland: "seo-bureau-nederland",
};

const locationSlugToFrPublic: Record<string, string> = {
  paris: "agence-seo-paris",
  lyon: "agence-seo-lyon",
  marseille: "agence-seo-marseille",
  toulouse: "agence-seo-toulouse",
  nice: "agence-seo-nice",
  nantes: "agence-seo-nantes",
  bordeaux: "agence-seo-bordeaux",
  lille: "agence-seo-lille",
  strasbourg: "agence-seo-strasbourg",
  rennes: "agence-seo-rennes",
  montpellier: "agence-seo-montpellier",
  grenoble: "agence-seo-grenoble",
  rouen: "agence-seo-rouen",
  toulon: "agence-seo-toulon",
  "clermont-ferrand": "agence-seo-clermont-ferrand",
  metz: "agence-seo-metz",
  dijon: "agence-seo-dijon",
  angers: "agence-seo-angers",
  reims: "agence-seo-reims",
  "le-mans": "agence-seo-le-mans",
  "aix-en-provence": "agence-seo-aix-en-provence",
  limoges: "agence-seo-limoges",
  tours: "agence-seo-tours",
  amiens: "agence-seo-amiens",
  perpignan: "agence-seo-perpignan",
  besancon: "agence-seo-besancon",
  orleans: "agence-seo-orleans",
  caen: "agence-seo-caen",
  mulhouse: "agence-seo-mulhouse",
  brest: "agence-seo-brest",
  "le-havre": "agence-seo-le-havre",
  nancy: "agence-seo-nancy",
  avignon: "agence-seo-avignon",
  pau: "agence-seo-pau",
  cannes: "agence-seo-cannes",
  "ile-de-france": "agence-seo-ile-de-france",
  "auvergne-rhone-alpes": "agence-seo-auvergne-rhone-alpes",
  "provence-alpes-cote-d-azur": "agence-seo-provence-alpes-cote-d-azur",
  france: "agence-seo-france",
  // Belgium (FR locale)
  bruxelles: "agence-seo-bruxelles",
  liege: "agence-seo-liege",
  namur: "agence-seo-namur",
  belgique: "agence-seo-belgique",
  mons: "agence-seo-mons",
  charleroi: "agence-seo-charleroi",
  tournai: "agence-seo-tournai",
};

const locationSlugToDePublic: Record<string, string> = {
  muenchen: "seo-agentur-muenchen",
  berlin: "seo-agentur-berlin",
  koeln: "seo-agentur-koeln",
  stuttgart: "seo-agentur-stuttgart",
  frankfurt: "seo-agentur-frankfurt",
  duesseldorf: "seo-agentur-duesseldorf",
  hamburg: "seo-agentur-hamburg",
  erfurt: "seo-agentur-erfurt",
  hannover: "seo-agentur-hannover",
  nuernberg: "seo-agentur-nuernberg",
  karlsruhe: "seo-agentur-karlsruhe",
  dortmund: "seo-agentur-dortmund",
  dresden: "seo-agentur-dresden",
  mannheim: "seo-agentur-mannheim",
  leipzig: "seo-agentur-leipzig",
  bremen: "seo-agentur-bremen",
  augsburg: "seo-agentur-augsburg",
  essen: "seo-agentur-essen",
  heilbronn: "seo-agentur-heilbronn",
  bonn: "seo-agentur-bonn",
  muenster: "seo-agentur-muenster",
  heidelberg: "seo-agentur-heidelberg",
  mainz: "seo-agentur-mainz",
  freiburg: "seo-agentur-freiburg",
  braunschweig: "seo-agentur-braunschweig",
  regensburg: "seo-agentur-regensburg",
  wiesbaden: "seo-agentur-wiesbaden",
  kiel: "seo-agentur-kiel",
  bielefeld: "seo-agentur-bielefeld",
  aachen: "seo-agentur-aachen",
  // Austria (same DE locale)
  wien: "seo-agentur-wien",
  graz: "seo-agentur-graz",
  oesterreich: "seo-agentur-oesterreich",
  salzburg: "seo-agentur-salzburg",
  linz: "seo-agentur-linz",
  steiermark: "seo-agentur-steiermark",
  niederoesterreich: "seo-agentur-niederoesterreich",
  tirol: "seo-agentur-tirol",
  vorarlberg: "seo-agentur-vorarlberg",
  innsbruck: "seo-agentur-innsbruck",
};

const locationSlugToEsPublic: Record<string, string> = {
  madrid: "agencia-seo-madrid",
  barcelona: "agencia-seo-barcelona",
  valencia: "agencia-seo-valencia",
  sevilla: "agencia-seo-sevilla",
  malaga: "agencia-seo-malaga",
  alicante: "agencia-seo-alicante",
  bilbao: "agencia-seo-bilbao",
  murcia: "agencia-seo-murcia",
  girona: "agencia-seo-girona",
  zaragoza: "agencia-seo-zaragoza",
  tenerife: "agencia-seo-tenerife",
  pontevedra: "agencia-seo-pontevedra",
  granada: "agencia-seo-granada",
  almeria: "agencia-seo-almeria",
  coruna: "agencia-seo-coruna",
  valladolid: "agencia-seo-valladolid",
  mallorca: "agencia-seo-mallorca",
  elche: "agencia-seo-elche",
  pamplona: "agencia-seo-pamplona",
  marbella: "agencia-seo-marbella",
  vigo: "agencia-seo-vigo",
  cordoba: "agencia-seo-cordoba",
  albacete: "agencia-seo-albacete",
  tarragona: "agencia-seo-tarragona",
  "las-palmas": "agencia-seo-las-palmas",
  logrono: "agencia-seo-logrono",
  oviedo: "agencia-seo-oviedo",
  toledo: "agencia-seo-toledo",
  sabadell: "agencia-seo-sabadell",
  leon: "agencia-seo-leon",
  cadiz: "agencia-seo-cadiz",
  santander: "agencia-seo-santander",
  "ciudad-real": "agencia-seo-ciudad-real",
  asturias: "agencia-seo-asturias",
};

const locationSlugToItPublic: Record<string, string> = {
  milano: "agenzia-seo-milano",
  roma: "agenzia-seo-roma",
  bergamo: "agenzia-seo-bergamo",
  verona: "agenzia-seo-verona",
  firenze: "agenzia-seo-firenze",
  torino: "agenzia-seo-torino",
  brescia: "agenzia-seo-brescia",
  napoli: "agenzia-seo-napoli",
  padova: "agenzia-seo-padova",
  bari: "agenzia-seo-bari",
  pescara: "agenzia-seo-pescara",
};

const locationSlugToEnPublic: Record<string, string> = {
  london: "seo-agency-london",
  birmingham: "seo-agency-birmingham",
  manchester: "seo-agency-manchester",
  bristol: "seo-agency-bristol",
  edinburgh: "seo-agency-edinburgh",
  essex: "seo-agency-essex",
  newcastle: "seo-agency-newcastle",
  leeds: "seo-agency-leeds",
  surrey: "seo-agency-surrey",
  hertfordshire: "seo-agency-hertfordshire",
  oxford: "seo-agency-oxford",
  sheffield: "seo-agency-sheffield",
  liverpool: "seo-agency-liverpool",
  nottingham: "seo-agency-nottingham",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // Fix: Redirect www → non-www (prevent duplicate content)
  if (host.startsWith("www.")) {
    const newUrl = request.nextUrl.clone();
    newUrl.host = host.replace("www.", "");
    return NextResponse.redirect(newUrl, 301);
  }

  // Skip internal Next.js paths, API routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/sitemap") ||
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
  // Handles /en, /en/, /en/shopify-seo etc. all in one hop
  if (pathnameLocale === defaultLocale) {
    let pathWithoutLocale = pathname.slice(`/${defaultLocale}`.length);
    // Remove leading slash if it results in just "/"
    if (!pathWithoutLocale || pathWithoutLocale === "/") pathWithoutLocale = "/";
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathWithoutLocale;
    return NextResponse.redirect(newUrl, 301);
  }

  // Legacy path redirects
  const legacyRedirects: Record<string, string> = {
    "/guides/competitor-analysis": "/academy/competitor-keyword-analysis",
    "/guides/off-page-audit": "/academy/backlink-fundamentals-for-ecommerce",
    "/guides/link-building-tactics": "/academy/email-outreach-for-links",
    "/guides/beginner-to-hero": "/academy/seo-learning-roadmap",
    "/guides/serp-domination": "/academy/serp-domination-strategy",
    "/meet-our-team": "/team",
    "/author/fabian-van-til": "/blog/author/fabian-van-til",
    "/resources": "/academy",
    "/blog/ecommerce-seo-audit": "/blog/how-to-make-ecommerce-seo-audit",
    "/ratgeber/ecommerce-seo-audit-leitfaden": "/ratgeber/wie-ecommerce-seo-audit-machen",
    "/articulos/auditoria-seo-ecommerce": "/articulos/como-hacer-auditoria-seo-ecommerce",
    "/articles/audit-seo-ecommerce": "/articles/comment-faire-audit-seo-ecommerce",
    "/articoli/audit-seo-ecommerce": "/articoli/come-fare-audit-seo-ecommerce",
    "/kennisbank/ecommerce-seo-audit-gids": "/kennisbank/hoe-ecommerce-seo-audit-maken",
    "/intent-matching-tool": "/tools/intent-matching-tool",
    "/intent-analyse-tool": "/tools/intent-matching-tool",
    "/outil-correspondance-intention": "/tools/intent-matching-tool",
    "/herramienta-coincidencia-intencion": "/tools/intent-matching-tool",
    "/strumento-corrispondenza-intento": "/tools/intent-matching-tool",
    "/zoekintentie-tool": "/tools/intent-matching-tool",
  };
  const guidesRedirects = legacyRedirects;
  // Check both root and locale-prefixed guides paths
  const guidesPath = pathnameLocale
    ? pathname.slice(`/${pathnameLocale}`.length)
    : pathname;
  if (guidesRedirects[guidesPath]) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathnameLocale
      ? `/${pathnameLocale}${guidesRedirects[guidesPath]}`
      : guidesRedirects[guidesPath];
    return NextResponse.redirect(newUrl, 301);
  }

  // Location pages: redirect /location/{slug} → correct locale with translated slug
  // NL cities → /nl/locaties/seo-bureau-{city}
  // FR cities → /fr/agence-seo-{city}
  const locationMatch = pathname.match(/^(?:\/(?:de|fr|es|it|en))?\/location\/([a-z-]+)\/?$/);
  if (locationMatch) {
    const citySlug = locationMatch[1];
    const nlPublicSlug = locationSlugToNlPublic[citySlug];
    if (nlPublicSlug) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/nl/locaties/${nlPublicSlug}`;
      return NextResponse.redirect(newUrl, 301);
    }
    const frPublicSlug = locationSlugToFrPublic[citySlug];
    if (frPublicSlug) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/fr/${frPublicSlug}`;
      return NextResponse.redirect(newUrl, 301);
    }
    const dePublicSlug = locationSlugToDePublic[citySlug];
    if (dePublicSlug) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/de/${dePublicSlug}`;
      return NextResponse.redirect(newUrl, 301);
    }
    const esPublicSlug = locationSlugToEsPublic[citySlug];
    if (esPublicSlug) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/es/${esPublicSlug}`;
      return NextResponse.redirect(newUrl, 301);
    }
    const itPublicSlug = locationSlugToItPublic[citySlug];
    if (itPublicSlug) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/it/${itPublicSlug}`;
      return NextResponse.redirect(newUrl, 301);
    }
    const enPublicSlug = locationSlugToEnPublic[citySlug];
    if (enPublicSlug) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/${enPublicSlug}`;
      return NextResponse.redirect(newUrl, 301);
    }
  }

  // Redirect /resources (and translated variants) → /academy across all locales
  const resourcesRedirectMap: Record<string, string> = {
    "/resources": "/academy",
    "/ressourcen": "/seo-akademie",
    "/ressources": "/academie-seo",
    "/recursos": "/academia-seo",
    "/risorse": "/accademia-seo",
    "/seo-bronnen": "/seo-academie",
  };

  // If URL has a non-default locale prefix (de, fr, es, it, nl)
  if (pathnameLocale) {
    const pathAfterLocale =
      pathname.slice(`/${pathnameLocale}`.length) || "/";

    // Check if this is a /resources path that should redirect to /academy
    if (resourcesRedirectMap[pathAfterLocale]) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/${pathnameLocale}${resourcesRedirectMap[pathAfterLocale]}`;
      return NextResponse.redirect(newUrl, 301);
    }

    // 1. Check if this is an OLD English slug that should redirect to the new translated slug.
    //    e.g. /de/link-building → 301 → /de/linkaufbau
    const localizedVersion = getLocalizedSlug(pathAfterLocale, pathnameLocale);
    if (localizedVersion !== pathAfterLocale) {
      // The English slug has a translated version → 301 redirect
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/${pathnameLocale}${localizedVersion}`;
      return NextResponse.redirect(newUrl, 301);
    }

    // 2. Check if this is an already-translated slug that needs rewriting to internal English route.
    //    e.g. /de/linkaufbau → rewrite internally to /de/link-building
    const englishVersion = getEnglishSlug(pathAfterLocale, pathnameLocale);
    if (englishVersion !== pathAfterLocale) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/${pathnameLocale}${englishVersion}`;
      const response = NextResponse.rewrite(newUrl);
      response.headers.set("x-locale", pathnameLocale);
      return response;
    }

    // No translation needed, pass through
    const response = NextResponse.next();
    response.headers.set("x-locale", pathnameLocale);
    return response;
  }

  // No locale prefix → this is default-locale (English) content at root
  // Let next.config.ts beforeFiles rewrites handle the /en/ mapping
  // (middleware rewrite breaks Vercel ISR edge caching)
  const response = NextResponse.next();
  response.headers.set("x-locale", defaultLocale);
  return response;
}

export const config = {
  // Only run middleware on paths that need it:
  // - /de/, /fr/, /es/, /it/, /nl/ prefixed paths (slug translation + locale rewrites)
  // - /en/ prefix (redirect to root)
  // - www subdomain redirect
  // English root paths (/, /shopify-seo, /blog, etc.) do NOT need middleware
  // and are handled by next.config.ts beforeFiles rewrites → enables ISR caching
  matcher: [
    "/en/:path*",
    "/de/:path*",
    "/fr/:path*",
    "/es/:path*",
    "/it/:path*",
    "/nl/:path*",
    "/en",
    "/de",
    "/fr",
    "/es",
    "/it",
    "/nl",
    "/location/:path*",
    "/guides/:path*",
    "/intent-matching-tool",
    "/intent-analyse-tool",
    "/outil-correspondance-intention",
    "/herramienta-coincidencia-intencion",
    "/strumento-corrispondenza-intento",
    "/zoekintentie-tool",
    "/resources",
    "/resources/:path*",
    "/meet-our-team",
    "/author/:path*",
  ],
};
