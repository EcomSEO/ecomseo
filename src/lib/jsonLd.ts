import { BASE_URL, publicLocalizedUrl, type Locale } from "./i18n/config";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Build public URL for a locale + path (uses translated slugs). */
function localeUrl(locale: Locale, path: string): string {
  return publicLocalizedUrl(locale, path);
}

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const LOGO_URL = `${BASE_URL}/images/brand/og-image.png`;

/* ------------------------------------------------------------------ */
/*  Organization + ProfessionalService                                 */
/* ------------------------------------------------------------------ */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: "EcomSEO",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 1200,
      height: 630,
    },
    image: LOGO_URL,
    description:
      "Profit-focused ecommerce SEO agency. We help ecommerce brands scale organic revenue with data-driven SEO strategies.",
    foundingDate: "2023",
    email: "info@ecomseo.co",
    sameAs: [
      "https://nl.linkedin.com/company/ecommerceseo",
      "https://x.com/fabianecomseo",
      "https://www.youtube.com/@fabian-ecomseo",
      "https://www.instagram.com/fabianvantil/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@ecomseo.co",
      url: `${BASE_URL}/contact`,
    },
    knowsAbout: [
      "Ecommerce SEO",
      "Shopify SEO",
      "WooCommerce SEO",
      "BigCommerce SEO",
      "Adobe Commerce SEO",
      "Amazon SEO",
      "Link Building",
      "Keyword Research",
      "Content Writing",
      "Technical SEO",
    ],
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
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 4,
      maxValue: 10,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  WebSite                                                            */
/* ------------------------------------------------------------------ */

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "EcomSEO",
    url: BASE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: ["en", "de", "fr", "es", "it", "nl"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/tools?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  BreadcrumbList                                                     */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Service                                                            */
/* ------------------------------------------------------------------ */

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
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "Country",
      name: "Europe",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  FAQPage                                                            */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Article (blog posts)                                               */
/* ------------------------------------------------------------------ */

export function articleJsonLd(params: {
  locale: Locale;
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  image?: string;
  wordCount?: number;
}) {
  const url = localeUrl(params.locale, params.path);
  // Provide sensible defaults so Article schema always has required fields
  const authorName = params.authorName || "Fabian van Til";
  const authorUrl = params.authorUrl || `${BASE_URL}/team/fabian-van-til`;
  const datePublished = params.datePublished || "2025-01-15";
  const dateModified = params.dateModified || new Date().toISOString().split("T")[0];
  const image = params.image || LOGO_URL;

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
    datePublished,
    dateModified,
    image,
    ...(params.wordCount ? { wordCount: params.wordCount } : {}),
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "EcomSEO",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Case Study (as Article)                                            */
/* ------------------------------------------------------------------ */

export function caseStudyJsonLd(params: {
  locale: Locale;
  headline: string;
  description: string;
  slug: string;
  date: string;
  niche: string;
  focus: string;
  images: string[];
}) {
  const url = localeUrl(params.locale, `/cases/${params.slug}`);
  const PERSON_ID = `${BASE_URL}/team/fabian-van-til#person`;
  // Convert human-readable dates to ISO 8601 for schema
  const isoDate = (() => {
    const d = new Date(params.date);
    if (!isNaN(d.getTime())) return d.toISOString().split("T")[0];
    // Try extracting a year-month from common patterns
    const yearMatch = params.date.match(/(\d{4})/);
    return yearMatch ? `${yearMatch[1]}-01-01` : "2024-01-01";
  })();
  const today = new Date().toISOString().split("T")[0];
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    url,
    inLanguage: params.locale,
    datePublished: isoDate,
    dateModified: today,
    wordCount: Math.round(params.description.split(/\s+/).length * 6),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: params.images.map((img) =>
      img.startsWith("http") ? img : `${BASE_URL}${img}`
    ),
    about: [
      { "@type": "Thing", name: "Ecommerce SEO" },
      { "@type": "Thing", name: params.niche },
      { "@type": "Thing", name: params.focus },
    ],
    keywords: `${params.niche}, ${params.focus}, ecommerce SEO case study, SEO results`,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Fabian van Til",
      url: `${BASE_URL}/team/fabian-van-til`,
      image: `${BASE_URL}/images/framer/fabian-van-til-new.jpeg`,
      jobTitle: "Founder & SEO Strategist",
      worksFor: { "@id": ORG_ID },
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "EcomSEO",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Course (academy)                                                   */
/* ------------------------------------------------------------------ */

export function courseJsonLd(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "EcomSEO",
      url: BASE_URL,
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT1H",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Person                                                             */
/* ------------------------------------------------------------------ */

export function personJsonLd(params: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    jobTitle: params.jobTitle,
    description: params.description,
    url: params.url,
    ...(params.image ? { image: params.image } : {}),
    ...(params.sameAs && params.sameAs.length > 0
      ? { sameAs: params.sameAs }
      : {}),
    worksFor: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "EcomSEO",
      url: BASE_URL,
    },
  };
}
