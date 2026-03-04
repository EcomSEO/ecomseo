import type { Locale } from "../config";

export const footerTranslations: Record<Locale, {
  brandDescription: string;
  services: string;
  company: string;
  legal: string;
  serviceLinks: { label: string; href: string }[];
  companyLinks: { label: string; href: string }[];
  legalLinks: { label: string; href: string }[];
  copyright: string;
}> = {
  en: {
    brandDescription: "Profit-focused ecommerce SEO agency. We build and scale brands through organic search.",
    services: "Services",
    company: "Company",
    legal: "Legal",
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
      { label: "Resources", href: "/resources" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    copyright: "EcomSEO. All rights reserved.",
  },
  de: {
    brandDescription: "Gewinnorientierte E-Commerce-SEO-Agentur. Wir bauen Marken auf und skalieren sie durch organische Suche.",
    services: "Leistungen",
    company: "Unternehmen",
    legal: "Rechtliches",
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
      { label: "Ressourcen", href: "/resources" },
      { label: "Preise", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
    legalLinks: [
      { label: "Datenschutzrichtlinie", href: "/privacy-policy" },
      { label: "Nutzungsbedingungen", href: "/terms-of-service" },
    ],
    copyright: "EcomSEO. Alle Rechte vorbehalten.",
  },
  fr: {
    brandDescription: "Agence SEO e-commerce axée sur le profit. Nous construisons et développons les marques grâce au référencement naturel.",
    services: "Services",
    company: "Entreprise",
    legal: "Mentions légales",
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
      { label: "Ressources", href: "/resources" },
      { label: "Tarifs", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
    legalLinks: [
      { label: "Politique de confidentialité", href: "/privacy-policy" },
      { label: "Conditions d'utilisation", href: "/terms-of-service" },
    ],
    copyright: "EcomSEO. Tous droits réservés.",
  },
  es: {
    brandDescription: "Agencia de SEO e-commerce enfocada en beneficios. Construimos y escalamos marcas a través de la búsqueda orgánica.",
    services: "Servicios",
    company: "Empresa",
    legal: "Legal",
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
      { label: "Recursos", href: "/resources" },
      { label: "Precios", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
    legalLinks: [
      { label: "Política de privacidad", href: "/privacy-policy" },
      { label: "Términos de servicio", href: "/terms-of-service" },
    ],
    copyright: "EcomSEO. Todos los derechos reservados.",
  },
  it: {
    brandDescription: "Agenzia SEO e-commerce focalizzata sul profitto. Costruiamo e scaliamo brand attraverso la ricerca organica.",
    services: "Servizi",
    company: "Azienda",
    legal: "Legale",
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
      { label: "Risorse", href: "/resources" },
      { label: "Prezzi", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
    legalLinks: [
      { label: "Informativa sulla privacy", href: "/privacy-policy" },
      { label: "Termini di servizio", href: "/terms-of-service" },
    ],
    copyright: "EcomSEO. Tutti i diritti riservati.",
  },
  nl: {
    brandDescription: "Winstgerichte e-commerce SEO-bureau. We bouwen en schalen merken via organisch zoekverkeer.",
    services: "Diensten",
    company: "Bedrijf",
    legal: "Juridisch",
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
      { label: "Bronnen", href: "/resources" },
      { label: "Prijzen", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
    legalLinks: [
      { label: "Privacybeleid", href: "/privacy-policy" },
      { label: "Algemene voorwaarden", href: "/terms-of-service" },
    ],
    copyright: "EcomSEO. Alle rechten voorbehouden.",
  },
};
