import { BASE_URL, defaultLocale, type Locale } from "./i18n/config";

/** Build public URL for a locale + path. Default locale → root, others → /{locale} prefix. */
function localeUrl(locale: Locale, path: string): string {
  const cleanPath = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return `${BASE_URL}${cleanPath}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EcomSEO",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.ico`,
    description:
      "Profit-focused ecommerce SEO agency. We help ecommerce brands scale organic revenue with data-driven SEO strategies.",
    foundingDate: "2023",
    sameAs: [
      "https://www.linkedin.com/company/ecomseo",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${BASE_URL}/contact`,
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Italy" },
      { "@type": "Country", name: "Netherlands" },
    ],
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localeUrl(locale, item.path),
    })),
  };
}

export function serviceJsonLd(params: {
  locale: Locale;
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO Services",
    name: params.name,
    description: params.description,
    url: localeUrl(params.locale, params.path),
    provider: {
      "@type": "Organization",
      name: "EcomSEO",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Europe",
    },
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(params: {
  locale: Locale;
  headline: string;
  description: string;
  path: string;
}) {
  const url = localeUrl(params.locale, params.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    url,
    inLanguage: params.locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    publisher: {
      "@type": "Organization",
      name: "EcomSEO",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.ico`,
      },
    },
  };
}

export function personJsonLd(params: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    jobTitle: params.jobTitle,
    description: params.description,
    url: params.url,
    ...(params.image ? { image: params.image } : {}),
    worksFor: {
      "@type": "Organization",
      name: "EcomSEO",
      url: BASE_URL,
    },
  };
}
