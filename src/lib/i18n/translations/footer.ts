import type { Locale } from "../config";

export const footerTranslations: Record<Locale, {
  brandDescription: string;
  services: string;
  company: string;
  legal: string;
  locations: string;
  serviceLinks: { label: string; href: string }[];
  companyLinks: { label: string; href: string }[];
  legalLinks: { label: string; href: string }[];
  locationLinks: { label: string; href: string }[];
  copyright: string;
}> = {
  en: {
    brandDescription: "Profit-focused ecommerce SEO agency. We build and scale brands through organic search.",
    services: "Services",
    company: "Company",
    legal: "Legal",
    locations: "",
    serviceLinks: [
      { label: "Ecommerce SEO", href: "/ecommerce-seo" },
      { label: "Shopify SEO", href: "/shopify-seo" },
      { label: "Link Building", href: "/link-building" },
      { label: "Keyword Research", href: "/keyword-research" },
      { label: "Content Writing", href: "/content-writing" },
      { label: "Amazon SEO", href: "/amazon-seo" },
    ],
    companyLinks: [
      { label: "Cases", href: "/cases" },
      { label: "Team", href: "/team" },
      { label: "Academy", href: "/academy" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    locationLinks: [],
    copyright: "EcomSEO. All rights reserved.",
  },
  de: {
    brandDescription: "Gewinnorientierte E-Commerce-SEO-Agentur. Wir bauen Marken auf und skalieren sie durch organische Suche.",
    services: "Leistungen",
    company: "Unternehmen",
    legal: "Rechtliches",
    locations: "",
    serviceLinks: [
      { label: "E-Commerce SEO", href: "/ecommerce-seo" },
      { label: "Shopify SEO", href: "/shopify-seo" },
      { label: "Linkaufbau", href: "/link-building" },
      { label: "Keyword-Recherche", href: "/keyword-research" },
      { label: "Content-Erstellung", href: "/content-writing" },
      { label: "Amazon SEO", href: "/amazon-seo" },
    ],
    companyLinks: [
      { label: "Referenzen", href: "/cases" },
      { label: "Team", href: "/team" },
      { label: "Akademie", href: "/academy" },
      { label: "Ratgeber", href: "/blog" },
      { label: "Preise", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/contact" },
    ],
    legalLinks: [
      { label: "Datenschutzrichtlinie", href: "/privacy-policy" },
      { label: "Nutzungsbedingungen", href: "/terms-of-service" },
    ],
    locationLinks: [],
    copyright: "EcomSEO. Alle Rechte vorbehalten.",
  },
  fr: {
    brandDescription: "Agence SEO e-commerce axée sur le profit. Nous construisons et développons les marques grâce au référencement naturel.",
    services: "Services",
    company: "Entreprise",
    legal: "Mentions légales",
    locations: "Nos agences",
    serviceLinks: [
      { label: "SEO E-commerce", href: "/ecommerce-seo" },
      { label: "SEO Shopify", href: "/shopify-seo" },
      { label: "Link Building", href: "/link-building" },
      { label: "Recherche de mots-clés", href: "/keyword-research" },
      { label: "Rédaction de contenu", href: "/content-writing" },
      { label: "Amazon SEO", href: "/amazon-seo" },
    ],
    companyLinks: [
      { label: "Études de cas", href: "/cases" },
      { label: "Équipe", href: "/team" },
      { label: "Académie", href: "/academy" },
      { label: "Articles", href: "/blog" },
      { label: "Tarifs", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    legalLinks: [
      { label: "Politique de confidentialité", href: "/privacy-policy" },
      { label: "Conditions d'utilisation", href: "/terms-of-service" },
    ],
    // FR tier-1 cities. Enable each entry once its goLiveDate (see src/data/locations.ts) has passed.
    // As more cities go live (incl. regions + "France" generic on May 2, 2026, and BE tier-1 in July),
    // add them here. ISR regenerates the footer within revalidate=3600.
    locationLinks: [
      { label: "Agence SEO Paris", href: "/location/paris" },
      { label: "Agence SEO Lyon", href: "/location/lyon" },
      { label: "Agence SEO Marseille", href: "/location/marseille" },
      { label: "Agence SEO Toulouse", href: "/location/toulouse" },
      { label: "Agence SEO Nice", href: "/location/nice" },
      { label: "Agence SEO Nantes", href: "/location/nantes" },
      { label: "Agence SEO Bordeaux", href: "/location/bordeaux" },
      { label: "Agence SEO Lille", href: "/location/lille" },
      { label: "Agence SEO Strasbourg", href: "/location/strasbourg" },
    ],
    copyright: "EcomSEO. Tous droits réservés.",
  },
  es: {
    brandDescription: "Agencia de SEO e-commerce enfocada en beneficios. Construimos y escalamos marcas a través de la búsqueda orgánica.",
    services: "Servicios",
    company: "Empresa",
    legal: "Legal",
    locations: "",
    serviceLinks: [
      { label: "SEO E-commerce", href: "/ecommerce-seo" },
      { label: "SEO Shopify", href: "/shopify-seo" },
      { label: "Link Building", href: "/link-building" },
      { label: "Investigación de palabras clave", href: "/keyword-research" },
      { label: "Redacción de contenido", href: "/content-writing" },
      { label: "Amazon SEO", href: "/amazon-seo" },
    ],
    companyLinks: [
      { label: "Casos de éxito", href: "/cases" },
      { label: "Equipo", href: "/team" },
      { label: "Academia", href: "/academy" },
      { label: "Artículos", href: "/blog" },
      { label: "Precios", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contacto", href: "/contact" },
    ],
    legalLinks: [
      { label: "Política de privacidad", href: "/privacy-policy" },
      { label: "Términos de servicio", href: "/terms-of-service" },
    ],
    locationLinks: [],
    copyright: "EcomSEO. Todos los derechos reservados.",
  },
  it: {
    brandDescription: "Agenzia SEO e-commerce focalizzata sul profitto. Costruiamo e scaliamo brand attraverso la ricerca organica.",
    services: "Servizi",
    company: "Azienda",
    legal: "Legale",
    locations: "",
    serviceLinks: [
      { label: "SEO E-commerce", href: "/ecommerce-seo" },
      { label: "SEO Shopify", href: "/shopify-seo" },
      { label: "Link Building", href: "/link-building" },
      { label: "Ricerca parole chiave", href: "/keyword-research" },
      { label: "Scrittura contenuti", href: "/content-writing" },
      { label: "Amazon SEO", href: "/amazon-seo" },
    ],
    companyLinks: [
      { label: "Casi studio", href: "/cases" },
      { label: "Team", href: "/team" },
      { label: "Accademia", href: "/academy" },
      { label: "Articoli", href: "/blog" },
      { label: "Prezzi", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contatti", href: "/contact" },
    ],
    legalLinks: [
      { label: "Informativa sulla privacy", href: "/privacy-policy" },
      { label: "Termini di servizio", href: "/terms-of-service" },
    ],
    locationLinks: [],
    copyright: "EcomSEO. Tutti i diritti riservati.",
  },
  nl: {
    brandDescription: "Winstgerichte e-commerce SEO-bureau. We bouwen en schalen merken via organisch zoekverkeer.",
    services: "Diensten",
    company: "Bedrijf",
    legal: "Juridisch",
    locations: "Locaties",
    serviceLinks: [
      { label: "E-commerce SEO", href: "/ecommerce-seo" },
      { label: "Shopify SEO", href: "/shopify-seo" },
      { label: "Linkbuilding", href: "/link-building" },
      { label: "Zoekwoordenonderzoek", href: "/keyword-research" },
      { label: "Content schrijven", href: "/content-writing" },
      { label: "Amazon SEO", href: "/amazon-seo" },
    ],
    companyLinks: [
      { label: "Cases", href: "/cases" },
      { label: "Team", href: "/team" },
      { label: "Academie", href: "/academy" },
      { label: "Kennisbank", href: "/blog" },
      { label: "Prijzen", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    legalLinks: [
      { label: "Privacybeleid", href: "/privacy-policy" },
      { label: "Algemene voorwaarden", href: "/terms-of-service" },
    ],
    locationLinks: [
      { label: "SEO Amsterdam", href: "/location/amsterdam" },
      { label: "SEO Rotterdam", href: "/location/rotterdam" },
      { label: "SEO Eindhoven", href: "/location/eindhoven" },
      { label: "SEO Den Haag", href: "/location/den-haag" },
      { label: "SEO Utrecht", href: "/location/utrecht" },
      { label: "SEO Breda", href: "/location/breda" },
      { label: "SEO Groningen", href: "/location/groningen" },
      { label: "SEO Tilburg", href: "/location/tilburg" },
      { label: "SEO Nederland", href: "/location/nederland" },
    ],
    copyright: "EcomSEO. Alle rechten voorbehouden.",
  },
};
