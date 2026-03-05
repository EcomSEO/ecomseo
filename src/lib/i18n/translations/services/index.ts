import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export { ecommerceSeoData } from "./ecommerce-seo";
export { shopifySeoData } from "./shopify-seo";
export { beautySeoData } from "./beauty-seo";
export { linkBuildingData } from "./link-building";
export { keywordResearchData } from "./keyword-research";
export { contentWritingData } from "./content-writing";
export { adobeCommerceSeoData } from "./adobe-commerce-seo";
export { woocommerceSeoData } from "./woocommerce-seo";
export { bigcommerceSeoData } from "./bigcommerce-seo";
export { amazonSeoData } from "./amazon-seo";
export { fashionSeoData } from "./fashion-seo";
export { consumablesSeoData } from "./consumables-seo";
export { toysSeoData } from "./toys-seo";
export { ecommerceSeoPlatformsData } from "./ecommerce-seo-platforms";
export { ecommerceSeoIndustriesData } from "./ecommerce-seo-industries";
export { ecommerceSeoServicesData } from "./ecommerce-seo-services";

import { ecommerceSeoData } from "./ecommerce-seo";
import { shopifySeoData } from "./shopify-seo";
import { beautySeoData } from "./beauty-seo";
import { linkBuildingData } from "./link-building";
import { keywordResearchData } from "./keyword-research";
import { contentWritingData } from "./content-writing";
import { adobeCommerceSeoData } from "./adobe-commerce-seo";
import { woocommerceSeoData } from "./woocommerce-seo";
import { bigcommerceSeoData } from "./bigcommerce-seo";
import { amazonSeoData } from "./amazon-seo";
import { fashionSeoData } from "./fashion-seo";
import { consumablesSeoData } from "./consumables-seo";
import { toysSeoData } from "./toys-seo";
import { ecommerceSeoPlatformsData } from "./ecommerce-seo-platforms";
import { ecommerceSeoIndustriesData } from "./ecommerce-seo-industries";
import { ecommerceSeoServicesData } from "./ecommerce-seo-services";

/**
 * Template-level strings used by ServicePageTemplate itself
 * (FAQs badge, FAQs heading, "Get in touch" button)
 */
export const serviceTemplateStrings: Record<
  Locale,
  { faqBadge: string; faqHeading: string; getInTouch: string }
> = {
  en: {
    faqBadge: "FAQs",
    faqHeading: "Frequently Asked Questions",
    getInTouch: "Get in touch",
  },
  de: {
    faqBadge: "FAQ",
    faqHeading: "H\u00e4ufig gestellte Fragen",
    getInTouch: "Kontakt aufnehmen",
  },
  fr: {
    faqBadge: "FAQ",
    faqHeading: "Questions fr\u00e9quemment pos\u00e9es",
    getInTouch: "Nous contacter",
  },
  es: {
    faqBadge: "FAQ",
    faqHeading: "Preguntas frecuentes",
    getInTouch: "Cont\u00e1ctanos",
  },
  it: {
    faqBadge: "FAQ",
    faqHeading: "Domande frequenti",
    getInTouch: "Contattaci",
  },
  nl: {
    faqBadge: "FAQ",
    faqHeading: "Veelgestelde vragen",
    getInTouch: "Neem contact op",
  },
};

/**
 * Lookup map: URL slug -> per-locale service page data.
 * Used by page.tsx files: `servicePageData["ecommerce-seo"][locale]`
 */
export const servicePageData: Record<
  string,
  Record<Locale, ServicePageProps>
> = {
  "ecommerce-seo": ecommerceSeoData,
  "shopify-seo": shopifySeoData,
  "beauty-seo": beautySeoData,
  "link-building": linkBuildingData,
  "keyword-research": keywordResearchData,
  "content-writing": contentWritingData,
  "adobe-commerce-seo": adobeCommerceSeoData,
  "woocommerce-seo": woocommerceSeoData,
  "bigcommerce-seo": bigcommerceSeoData,
  "amazon-seo": amazonSeoData,
  "fashion-seo": fashionSeoData,
  "consumables-seo": consumablesSeoData,
  "toys-seo": toysSeoData,
  "ecommerce-seo-platforms": ecommerceSeoPlatformsData,
  "ecommerce-seo-industries": ecommerceSeoIndustriesData,
  "ecommerce-seo-services": ecommerceSeoServicesData,
};

/**
 * Translated "Home" breadcrumb text for JsonLd usage
 */
export const homeBreadcrumb: Record<Locale, string> = {
  en: "Home",
  de: "Startseite",
  fr: "Accueil",
  es: "Inicio",
  it: "Home",
  nl: "Home",
};
