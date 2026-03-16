"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportToPDF } from "@/lib/export-utils";
import type { SchemaGeneratorTranslation } from "@/lib/i18n/translations/seoTools";

/* ──────────────────────── CONSTANTS ──────────────────────── */

const SCHEMA_TYPES = [
  "Product",
  "LocalBusiness",
  "FAQPage",
  "HowTo",
  "BreadcrumbList",
  "Article",
  "Organization",
  "WebSite",
  "Review",
  "Event",
  "Recipe",
  "Course",
  "SoftwareApplication",
] as const;
type SchemaType = (typeof SCHEMA_TYPES)[number];

const CURRENCIES = ["USD", "EUR", "GBP", "CAD", "AUD", "CHF", "SEK", "NOK", "DKK", "PLN", "CZK", "JPY", "CNY", "INR", "BRL"];

const AVAILABILITY_OPTIONS = [
  { value: "https://schema.org/InStock", label: "In Stock" },
  { value: "https://schema.org/OutOfStock", label: "Out of Stock" },
  { value: "https://schema.org/PreOrder", label: "Pre-order" },
  { value: "https://schema.org/BackOrder", label: "Back Order" },
  { value: "https://schema.org/Discontinued", label: "Discontinued" },
];

const CONDITION_OPTIONS = [
  { value: "https://schema.org/NewCondition", label: "New" },
  { value: "https://schema.org/UsedCondition", label: "Used" },
  { value: "https://schema.org/RefurbishedCondition", label: "Refurbished" },
  { value: "https://schema.org/DamagedCondition", label: "Damaged" },
];

/* ──────────────────────── FIELD TYPES ──────────────────────── */

interface ProductOffer {
  price: string;
  priceCurrency: string;
  availability: string;
  condition: string;
  variantName: string;
}

interface ProductFields {
  name: string;
  description: string;
  image: string;
  sku: string;
  brand: string;
  gtin: string;
  price: string;
  priceCurrency: string;
  availability: string;
  condition: string;
  ratingValue: string;
  reviewCount: string;
  bestRating: string;
  seller: string;
  url: string;
  reviewAuthor: string;
  reviewBody: string;
  reviewRating: string;
  shippingCost: string;
  shippingCurrency: string;
  deliveryDays: string;
  shippingCountry: string;
  returnDays: string;
  returnPolicy: string;
  additionalOffers: ProductOffer[];
}

interface LocalBusinessFields {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  telephone: string;
  openingHours: string;
  priceRange: string;
  url: string;
  image: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
  image: string;
}

interface HowToFields {
  name: string;
  description: string;
  totalTime: string;
  steps: HowToStep[];
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ArticleFields {
  headline: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  publisher: string;
  publisherLogo: string;
  description: string;
}

interface OrganizationFields {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string;
}

interface WebSiteFields {
  name: string;
  url: string;
  searchUrl: string;
  searchQueryInput: string;
  description: string;
}

interface ReviewFields {
  itemName: string;
  itemType: string;
  reviewBody: string;
  authorName: string;
  ratingValue: string;
  bestRating: string;
  datePublished: string;
  publisher: string;
}

interface EventFields {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  locationAddress: string;
  description: string;
  image: string;
  organizer: string;
  organizerUrl: string;
  offerPrice: string;
  offerCurrency: string;
  offerUrl: string;
  offerAvailability: string;
  performerName: string;
  eventStatus: string;
  eventAttendanceMode: string;
}

interface RecipeFields {
  name: string;
  description: string;
  image: string;
  author: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  recipeYield: string;
  recipeCategory: string;
  recipeCuisine: string;
  ingredients: string;
  instructions: string;
  calories: string;
  ratingValue: string;
  reviewCount: string;
}

interface CourseFields {
  name: string;
  description: string;
  provider: string;
  providerUrl: string;
  url: string;
  courseMode: string;
  duration: string;
  image: string;
}

interface SoftwareApplicationFields {
  name: string;
  operatingSystem: string;
  applicationCategory: string;
  description: string;
  ratingValue: string;
  reviewCount: string;
  price: string;
  priceCurrency: string;
  downloadUrl: string;
  screenshot: string;
}

/* ──────────────────────── INITIAL STATE HELPERS ──────────────────────── */

const emptyProduct: ProductFields = {
  name: "", description: "", image: "", sku: "", brand: "", gtin: "",
  price: "", priceCurrency: "USD", availability: "https://schema.org/InStock",
  condition: "https://schema.org/NewCondition", ratingValue: "", reviewCount: "",
  bestRating: "5", seller: "", url: "",
  reviewAuthor: "", reviewBody: "", reviewRating: "",
  shippingCost: "", shippingCurrency: "USD", deliveryDays: "", shippingCountry: "",
  returnDays: "", returnPolicy: "https://schema.org/MerchantReturnFiniteReturnWindow",
  additionalOffers: [],
};

const emptyLocalBusiness: LocalBusinessFields = {
  name: "", street: "", city: "", state: "", zip: "", country: "",
  telephone: "", openingHours: "", priceRange: "", url: "", image: "", description: "",
};

const emptyHowTo: HowToFields = {
  name: "", description: "", totalTime: "",
  steps: [{ name: "", text: "", image: "" }],
};

const emptyArticle: ArticleFields = {
  headline: "", author: "", datePublished: "", dateModified: "",
  image: "", publisher: "", publisherLogo: "", description: "",
};

const emptyOrganization: OrganizationFields = {
  name: "", url: "", logo: "", description: "", sameAs: "",
};

const emptyWebSite: WebSiteFields = {
  name: "", url: "", searchUrl: "", searchQueryInput: "required name=search_term_string", description: "",
};

const emptyReview: ReviewFields = {
  itemName: "", itemType: "Product", reviewBody: "", authorName: "",
  ratingValue: "", bestRating: "5", datePublished: "", publisher: "",
};

const emptyEvent: EventFields = {
  name: "", startDate: "", endDate: "", location: "", locationAddress: "",
  description: "", image: "", organizer: "", organizerUrl: "",
  offerPrice: "", offerCurrency: "USD", offerUrl: "", offerAvailability: "https://schema.org/InStock",
  performerName: "", eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
};

const emptyRecipe: RecipeFields = {
  name: "", description: "", image: "", author: "",
  prepTime: "", cookTime: "", totalTime: "", recipeYield: "",
  recipeCategory: "", recipeCuisine: "", ingredients: "", instructions: "",
  calories: "", ratingValue: "", reviewCount: "",
};

const emptyCourse: CourseFields = {
  name: "", description: "", provider: "", providerUrl: "",
  url: "", courseMode: "Online", duration: "", image: "",
};

const emptySoftwareApplication: SoftwareApplicationFields = {
  name: "", operatingSystem: "", applicationCategory: "",
  description: "", ratingValue: "", reviewCount: "",
  price: "", priceCurrency: "USD", downloadUrl: "", screenshot: "",
};

const RETURN_POLICY_OPTIONS = [
  { value: "https://schema.org/MerchantReturnFiniteReturnWindow", label: "Finite Return Window" },
  { value: "https://schema.org/MerchantReturnNotPermitted", label: "Returns Not Permitted" },
  { value: "https://schema.org/MerchantReturnUnlimitedWindow", label: "Unlimited Return Window" },
];

const EVENT_STATUS_OPTIONS = [
  { value: "https://schema.org/EventScheduled", label: "Scheduled" },
  { value: "https://schema.org/EventPostponed", label: "Postponed" },
  { value: "https://schema.org/EventCancelled", label: "Cancelled" },
  { value: "https://schema.org/EventMovedOnline", label: "Moved Online" },
  { value: "https://schema.org/EventRescheduled", label: "Rescheduled" },
];

const EVENT_ATTENDANCE_OPTIONS = [
  { value: "https://schema.org/OfflineEventAttendanceMode", label: "In-Person" },
  { value: "https://schema.org/OnlineEventAttendanceMode", label: "Online" },
  { value: "https://schema.org/MixedEventAttendanceMode", label: "Mixed (Online + In-Person)" },
];

const APP_CATEGORY_OPTIONS = [
  "GameApplication", "SocialNetworkingApplication", "TravelApplication",
  "ShoppingApplication", "SportsApplication", "LifestyleApplication",
  "BusinessApplication", "DesignApplication", "DeveloperApplication",
  "DriverApplication", "EducationalApplication", "HealthApplication",
  "FinanceApplication", "SecurityApplication", "BrowserApplication",
  "CommunicationApplication", "EntertainmentApplication", "MultimediaApplication",
  "HomeApplication", "UtilitiesApplication", "ReferenceApplication",
];

/* ──────────────────────── VALIDATION HELPERS ──────────────────────── */

type Severity = "error" | "warning" | "valid";

interface ValidationItem {
  field: string;
  message: string;
  severity: Severity;
}

function validateProduct(f: ProductFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.description) items.push({ field: "description", message: "Description is required for rich results", severity: "error" });
  else items.push({ field: "description", message: "Description provided", severity: "valid" });
  if (!f.image) items.push({ field: "image", message: "Google requires 'image' for Product rich results", severity: "error" });
  else items.push({ field: "image", message: "Image provided", severity: "valid" });
  if (!f.price) items.push({ field: "price", message: "Price is required for rich results", severity: "error" });
  else items.push({ field: "price", message: "Price provided", severity: "valid" });
  if (!f.brand) items.push({ field: "brand", message: "Brand is recommended", severity: "warning" });
  else items.push({ field: "brand", message: "Brand provided", severity: "valid" });
  if (!f.sku) items.push({ field: "sku", message: "SKU is recommended", severity: "warning" });
  else items.push({ field: "sku", message: "SKU provided", severity: "valid" });
  if (!f.gtin) items.push({ field: "gtin", message: "GTIN/UPC is recommended", severity: "warning" });
  else items.push({ field: "gtin", message: "GTIN provided", severity: "valid" });
  if (!f.ratingValue && !f.reviewCount) items.push({ field: "aggregateRating", message: "Aggregate rating recommended for rich snippets", severity: "warning" });
  else if (f.ratingValue && f.reviewCount) items.push({ field: "aggregateRating", message: "Rating provided", severity: "valid" });
  else items.push({ field: "aggregateRating", message: "Both ratingValue and reviewCount needed", severity: "warning" });
  if (!f.url) items.push({ field: "url", message: "URL is recommended", severity: "warning" });
  else items.push({ field: "url", message: "URL provided", severity: "valid" });
  return items;
}

function validateLocalBusiness(f: LocalBusinessFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.street || !f.city) items.push({ field: "address", message: "Address (street, city) is required", severity: "error" });
  else items.push({ field: "address", message: "Address provided", severity: "valid" });
  if (!f.telephone) items.push({ field: "telephone", message: "Telephone is recommended", severity: "warning" });
  else items.push({ field: "telephone", message: "Telephone provided", severity: "valid" });
  if (!f.url) items.push({ field: "url", message: "URL is recommended", severity: "warning" });
  else items.push({ field: "url", message: "URL provided", severity: "valid" });
  if (!f.image) items.push({ field: "image", message: "Image is recommended", severity: "warning" });
  else items.push({ field: "image", message: "Image provided", severity: "valid" });
  return items;
}

function validateFAQ(items: FAQItem[]): ValidationItem[] {
  const v: ValidationItem[] = [];
  if (items.length === 0 || (items.length === 1 && !items[0].question && !items[0].answer))
    v.push({ field: "faq", message: "At least one Q&A pair is required", severity: "error" });
  items.forEach((item, i) => {
    if (!item.question) v.push({ field: `q${i + 1}`, message: `Question ${i + 1} is empty`, severity: "error" });
    if (!item.answer) v.push({ field: `a${i + 1}`, message: `Answer ${i + 1} is empty`, severity: "error" });
  });
  if (v.length === 0) v.push({ field: "faq", message: `${items.length} Q&A pair(s) valid`, severity: "valid" });
  return v;
}

function validateHowTo(f: HowToFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (f.steps.length === 0 || (f.steps.length === 1 && !f.steps[0].name && !f.steps[0].text))
    items.push({ field: "steps", message: "At least one step is required", severity: "error" });
  else items.push({ field: "steps", message: `${f.steps.length} step(s) defined`, severity: "valid" });
  if (!f.description) items.push({ field: "description", message: "Description is recommended", severity: "warning" });
  else items.push({ field: "description", message: "Description provided", severity: "valid" });
  return items;
}

function validateBreadcrumb(items: BreadcrumbItem[]): ValidationItem[] {
  const v: ValidationItem[] = [];
  if (items.length === 0) v.push({ field: "items", message: "At least one breadcrumb is required", severity: "error" });
  else v.push({ field: "items", message: `${items.length} breadcrumb item(s)`, severity: "valid" });
  items.forEach((item, i) => {
    if (!item.name) v.push({ field: `name${i + 1}`, message: `Item ${i + 1} name is empty`, severity: "error" });
    if (!item.url && i < items.length - 1) v.push({ field: `url${i + 1}`, message: `Item ${i + 1} URL is empty`, severity: "warning" });
  });
  return v;
}

function validateArticle(f: ArticleFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.headline) items.push({ field: "headline", message: "Headline is required", severity: "error" });
  else items.push({ field: "headline", message: "Headline provided", severity: "valid" });
  if (!f.author) items.push({ field: "author", message: "Author is recommended", severity: "warning" });
  else items.push({ field: "author", message: "Author provided", severity: "valid" });
  if (!f.datePublished) items.push({ field: "datePublished", message: "Date published is recommended", severity: "warning" });
  else items.push({ field: "datePublished", message: "Date published provided", severity: "valid" });
  if (!f.image) items.push({ field: "image", message: "Google requires 'image' for Article rich results", severity: "error" });
  else items.push({ field: "image", message: "Image provided", severity: "valid" });
  return items;
}

function validateOrganization(f: OrganizationFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.url) items.push({ field: "url", message: "URL is recommended", severity: "warning" });
  else items.push({ field: "url", message: "URL provided", severity: "valid" });
  if (!f.logo) items.push({ field: "logo", message: "Logo is recommended", severity: "warning" });
  else items.push({ field: "logo", message: "Logo provided", severity: "valid" });
  return items;
}

function validateWebSite(f: WebSiteFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Site name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.url) items.push({ field: "url", message: "URL is required", severity: "error" });
  else items.push({ field: "url", message: "URL provided", severity: "valid" });
  if (!f.searchUrl) items.push({ field: "searchUrl", message: "Search URL recommended for sitelinks search box", severity: "warning" });
  else items.push({ field: "searchUrl", message: "Search action configured", severity: "valid" });
  return items;
}

function validateReview(f: ReviewFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.itemName) items.push({ field: "itemName", message: "Reviewed item name is required", severity: "error" });
  else items.push({ field: "itemName", message: "Item name provided", severity: "valid" });
  if (!f.authorName) items.push({ field: "authorName", message: "Author is required", severity: "error" });
  else items.push({ field: "authorName", message: "Author provided", severity: "valid" });
  if (!f.ratingValue) items.push({ field: "ratingValue", message: "Rating value is required", severity: "error" });
  else items.push({ field: "ratingValue", message: "Rating provided", severity: "valid" });
  if (!f.reviewBody) items.push({ field: "reviewBody", message: "Review text is recommended", severity: "warning" });
  else items.push({ field: "reviewBody", message: "Review body provided", severity: "valid" });
  if (!f.datePublished) items.push({ field: "datePublished", message: "Date published is recommended", severity: "warning" });
  else items.push({ field: "datePublished", message: "Date provided", severity: "valid" });
  return items;
}

function validateEvent(f: EventFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Event name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.startDate) items.push({ field: "startDate", message: "Start date is required", severity: "error" });
  else items.push({ field: "startDate", message: "Start date provided", severity: "valid" });
  if (!f.location) items.push({ field: "location", message: "Location is required for in-person events", severity: "error" });
  else items.push({ field: "location", message: "Location provided", severity: "valid" });
  if (!f.description) items.push({ field: "description", message: "Description is recommended", severity: "warning" });
  else items.push({ field: "description", message: "Description provided", severity: "valid" });
  if (!f.image) items.push({ field: "image", message: "Image is recommended", severity: "warning" });
  else items.push({ field: "image", message: "Image provided", severity: "valid" });
  if (!f.offerPrice) items.push({ field: "offerPrice", message: "Ticket price is recommended", severity: "warning" });
  else items.push({ field: "offerPrice", message: "Offer provided", severity: "valid" });
  return items;
}

function validateRecipe(f: RecipeFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Recipe name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.image) items.push({ field: "image", message: "Image is required for rich results", severity: "error" });
  else items.push({ field: "image", message: "Image provided", severity: "valid" });
  if (!f.description) items.push({ field: "description", message: "Description is recommended", severity: "warning" });
  else items.push({ field: "description", message: "Description provided", severity: "valid" });
  if (!f.ingredients) items.push({ field: "ingredients", message: "Ingredients are recommended", severity: "warning" });
  else items.push({ field: "ingredients", message: "Ingredients provided", severity: "valid" });
  if (!f.instructions) items.push({ field: "instructions", message: "Instructions are recommended", severity: "warning" });
  else items.push({ field: "instructions", message: "Instructions provided", severity: "valid" });
  if (!f.author) items.push({ field: "author", message: "Author is recommended", severity: "warning" });
  else items.push({ field: "author", message: "Author provided", severity: "valid" });
  return items;
}

function validateCourse(f: CourseFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "Course name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.description) items.push({ field: "description", message: "Description is required", severity: "error" });
  else items.push({ field: "description", message: "Description provided", severity: "valid" });
  if (!f.provider) items.push({ field: "provider", message: "Provider is recommended", severity: "warning" });
  else items.push({ field: "provider", message: "Provider provided", severity: "valid" });
  if (!f.url) items.push({ field: "url", message: "URL is recommended", severity: "warning" });
  else items.push({ field: "url", message: "URL provided", severity: "valid" });
  return items;
}

function validateSoftwareApplication(f: SoftwareApplicationFields): ValidationItem[] {
  const items: ValidationItem[] = [];
  if (!f.name) items.push({ field: "name", message: "App name is required", severity: "error" });
  else items.push({ field: "name", message: "Name provided", severity: "valid" });
  if (!f.operatingSystem) items.push({ field: "operatingSystem", message: "Operating system is recommended", severity: "warning" });
  else items.push({ field: "operatingSystem", message: "OS provided", severity: "valid" });
  if (!f.applicationCategory) items.push({ field: "applicationCategory", message: "Category is recommended", severity: "warning" });
  else items.push({ field: "applicationCategory", message: "Category provided", severity: "valid" });
  if (!f.ratingValue || !f.reviewCount) items.push({ field: "rating", message: "Rating is recommended for rich results", severity: "warning" });
  else items.push({ field: "rating", message: "Rating provided", severity: "valid" });
  if (!f.price) items.push({ field: "price", message: "Price is recommended (use '0' for free)", severity: "warning" });
  else items.push({ field: "price", message: "Price provided", severity: "valid" });
  return items;
}

/* ──────────────────────── SCHEMA BUILDERS ──────────────────────── */

function buildProductSchema(f: ProductFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: f.name,
  };
  if (f.description) obj.description = f.description;
  if (f.image) obj.image = f.image;
  if (f.url) obj.url = f.url;
  if (f.sku) obj.sku = f.sku;
  if (f.gtin) obj.gtin = f.gtin;
  if (f.brand) obj.brand = { "@type": "Brand", name: f.brand };

  const buildOffer = (price: string, currency: string, avail: string, cond: string, sellerName?: string): Record<string, unknown> => {
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: avail,
      itemCondition: cond,
    };
    if (f.url) offer.url = f.url;
    if (sellerName) offer.seller = { "@type": "Organization", name: sellerName };
    if (f.shippingCost) {
      offer.shippingDetails = {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: f.shippingCost,
          currency: f.shippingCurrency || f.priceCurrency,
        },
        ...(f.deliveryDays ? { deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: parseInt(f.deliveryDays) || 0, unitCode: "DAY" }, transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: parseInt(f.deliveryDays) || 0, unitCode: "DAY" } } } : {}),
        ...(f.shippingCountry ? { shippingDestination: { "@type": "DefinedRegion", addressCountry: f.shippingCountry } } : {}),
      };
    }
    if (f.returnDays || f.returnPolicy) {
      const ret: Record<string, unknown> = {
        "@type": "MerchantReturnPolicy",
        applicableCountry: f.shippingCountry || "US",
        returnPolicyCategory: f.returnPolicy,
      };
      if (f.returnDays) {
        ret.merchantReturnDays = parseInt(f.returnDays) || 0;
      }
      offer.hasMerchantReturnPolicy = ret;
    }
    return offer;
  };

  if (f.price) {
    if (f.additionalOffers.length > 0) {
      const mainOffer = buildOffer(f.price, f.priceCurrency, f.availability, f.condition, f.seller);
      const extraOffers = f.additionalOffers
        .filter((o) => o.price)
        .map((o) => {
          const offer = buildOffer(o.price, o.priceCurrency, o.availability, o.condition, f.seller);
          if (o.variantName) offer.name = o.variantName;
          return offer;
        });
      obj.offers = [mainOffer, ...extraOffers];
    } else {
      obj.offers = buildOffer(f.price, f.priceCurrency, f.availability, f.condition, f.seller);
    }
  }

  if (f.ratingValue && f.reviewCount) {
    obj.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: f.ratingValue,
      reviewCount: f.reviewCount,
      bestRating: f.bestRating || "5",
    };
  }
  if (f.reviewAuthor && f.reviewBody) {
    const review: Record<string, unknown> = {
      "@type": "Review",
      author: { "@type": "Person", name: f.reviewAuthor },
      reviewBody: f.reviewBody,
    };
    if (f.reviewRating) {
      review.reviewRating = {
        "@type": "Rating",
        ratingValue: f.reviewRating,
        bestRating: f.bestRating || "5",
      };
    }
    obj.review = review;
  }
  return obj;
}

function buildLocalBusinessSchema(f: LocalBusinessFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: f.name,
  };
  if (f.description) obj.description = f.description;
  if (f.image) obj.image = f.image;
  if (f.url) obj.url = f.url;
  if (f.telephone) obj.telephone = f.telephone;
  if (f.priceRange) obj.priceRange = f.priceRange;
  if (f.openingHours) obj.openingHoursSpecification = f.openingHours;
  if (f.street || f.city || f.state || f.zip || f.country) {
    const addr: Record<string, unknown> = { "@type": "PostalAddress" };
    if (f.street) addr.streetAddress = f.street;
    if (f.city) addr.addressLocality = f.city;
    if (f.state) addr.addressRegion = f.state;
    if (f.zip) addr.postalCode = f.zip;
    if (f.country) addr.addressCountry = f.country;
    obj.address = addr;
  }
  return obj;
}

function buildFAQSchema(items: FAQItem[]) {
  const validItems = items.filter((i) => i.question && i.answer);
  if (validItems.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validItems.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

function buildHowToSchema(f: HowToFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: f.name,
  };
  if (f.description) obj.description = f.description;
  if (f.totalTime) obj.totalTime = f.totalTime;
  const validSteps = f.steps.filter((s) => s.name || s.text);
  if (validSteps.length > 0) {
    obj.step = validSteps.map((s, i) => {
      const step: Record<string, unknown> = {
        "@type": "HowToStep",
        position: i + 1,
      };
      if (s.name) step.name = s.name;
      if (s.text) step.text = s.text;
      if (s.image) step.image = s.image;
      return step;
    });
  }
  return obj;
}

function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  const validItems = items.filter((i) => i.name);
  if (validItems.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: validItems.map((item, i) => {
      const el: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
      };
      if (item.url) el.item = item.url;
      return el;
    }),
  };
}

function buildArticleSchema(f: ArticleFields) {
  if (!f.headline) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: f.headline,
  };
  if (f.description) obj.description = f.description;
  if (f.image) obj.image = f.image;
  if (f.author) obj.author = { "@type": "Person", name: f.author };
  if (f.datePublished) obj.datePublished = f.datePublished;
  if (f.dateModified) obj.dateModified = f.dateModified;
  if (f.publisher) {
    const pub: Record<string, unknown> = { "@type": "Organization", name: f.publisher };
    if (f.publisherLogo) pub.logo = { "@type": "ImageObject", url: f.publisherLogo };
    obj.publisher = pub;
  }
  return obj;
}

function buildOrganizationSchema(f: OrganizationFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: f.name,
  };
  if (f.url) obj.url = f.url;
  if (f.logo) obj.logo = f.logo;
  if (f.description) obj.description = f.description;
  if (f.sameAs) {
    const urls = f.sameAs.split("\n").map((u) => u.trim()).filter(Boolean);
    if (urls.length > 0) obj.sameAs = urls;
  }
  return obj;
}

function buildWebSiteSchema(f: WebSiteFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: f.name,
  };
  if (f.url) obj.url = f.url;
  if (f.description) obj.description = f.description;
  if (f.searchUrl) {
    obj.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: f.searchUrl + "{search_term_string}",
      },
      "query-input": f.searchQueryInput || "required name=search_term_string",
    };
  }
  return obj;
}

function buildReviewSchema(f: ReviewFields) {
  if (!f.itemName || !f.authorName) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": f.itemType || "Product", name: f.itemName },
    author: { "@type": "Person", name: f.authorName },
  };
  if (f.reviewBody) obj.reviewBody = f.reviewBody;
  if (f.ratingValue) {
    obj.reviewRating = {
      "@type": "Rating",
      ratingValue: f.ratingValue,
      bestRating: f.bestRating || "5",
    };
  }
  if (f.datePublished) obj.datePublished = f.datePublished;
  if (f.publisher) obj.publisher = { "@type": "Organization", name: f.publisher };
  return obj;
}

function buildEventSchema(f: EventFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: f.name,
    eventStatus: f.eventStatus,
    eventAttendanceMode: f.eventAttendanceMode,
  };
  if (f.startDate) obj.startDate = f.startDate;
  if (f.endDate) obj.endDate = f.endDate;
  if (f.description) obj.description = f.description;
  if (f.image) obj.image = f.image;
  if (f.location) {
    if (f.eventAttendanceMode === "https://schema.org/OnlineEventAttendanceMode") {
      obj.location = { "@type": "VirtualLocation", url: f.location };
    } else {
      const loc: Record<string, unknown> = { "@type": "Place", name: f.location };
      if (f.locationAddress) loc.address = { "@type": "PostalAddress", streetAddress: f.locationAddress };
      obj.location = loc;
    }
  }
  if (f.organizer) {
    const org: Record<string, unknown> = { "@type": "Organization", name: f.organizer };
    if (f.organizerUrl) org.url = f.organizerUrl;
    obj.organizer = org;
  }
  if (f.performerName) obj.performer = { "@type": "Person", name: f.performerName };
  if (f.offerPrice) {
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      price: f.offerPrice,
      priceCurrency: f.offerCurrency,
      availability: f.offerAvailability,
    };
    if (f.offerUrl) offer.url = f.offerUrl;
    obj.offers = offer;
  }
  return obj;
}

function buildRecipeSchema(f: RecipeFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: f.name,
  };
  if (f.description) obj.description = f.description;
  if (f.image) obj.image = f.image;
  if (f.author) obj.author = { "@type": "Person", name: f.author };
  if (f.prepTime) obj.prepTime = f.prepTime;
  if (f.cookTime) obj.cookTime = f.cookTime;
  if (f.totalTime) obj.totalTime = f.totalTime;
  if (f.recipeYield) obj.recipeYield = f.recipeYield;
  if (f.recipeCategory) obj.recipeCategory = f.recipeCategory;
  if (f.recipeCuisine) obj.recipeCuisine = f.recipeCuisine;
  if (f.ingredients) {
    obj.recipeIngredient = f.ingredients.split("\n").map((l) => l.trim()).filter(Boolean);
  }
  if (f.instructions) {
    obj.recipeInstructions = f.instructions.split("\n").map((l) => l.trim()).filter(Boolean).map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    }));
  }
  if (f.calories) obj.nutrition = { "@type": "NutritionInformation", calories: f.calories + " calories" };
  if (f.ratingValue && f.reviewCount) {
    obj.aggregateRating = { "@type": "AggregateRating", ratingValue: f.ratingValue, reviewCount: f.reviewCount };
  }
  return obj;
}

function buildCourseSchema(f: CourseFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: f.name,
  };
  if (f.description) obj.description = f.description;
  if (f.url) obj.url = f.url;
  if (f.image) obj.image = f.image;
  if (f.provider) {
    const prov: Record<string, unknown> = { "@type": "Organization", name: f.provider };
    if (f.providerUrl) prov.sameAs = f.providerUrl;
    obj.provider = prov;
  }
  if (f.courseMode) obj.courseMode = f.courseMode;
  if (f.duration) obj.duration = f.duration;
  return obj;
}

function buildSoftwareApplicationSchema(f: SoftwareApplicationFields) {
  if (!f.name) return null;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: f.name,
  };
  if (f.operatingSystem) obj.operatingSystem = f.operatingSystem;
  if (f.applicationCategory) obj.applicationCategory = f.applicationCategory;
  if (f.description) obj.description = f.description;
  if (f.screenshot) obj.screenshot = f.screenshot;
  if (f.downloadUrl) obj.downloadUrl = f.downloadUrl;
  if (f.price !== undefined && f.price !== "") {
    obj.offers = {
      "@type": "Offer",
      price: f.price,
      priceCurrency: f.priceCurrency,
    };
  }
  if (f.ratingValue && f.reviewCount) {
    obj.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: f.ratingValue,
      reviewCount: f.reviewCount,
    };
  }
  return obj;
}

/* ──────────────────────── SYNTAX HIGHLIGHTING ──────────────────────── */

function highlightJSON(json: string): string {
  return json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(?:@context|@type|@id)")/g,
      '<span style="color:#c792ea">$1</span>'
    )
    .replace(
      /("(?:[^"\\]|\\.)*")\s*:/g,
      '<span style="color:#82aaff">$1</span>:'
    )
    .replace(
      /:\s*("(?:[^"\\]|\\.)*")/g,
      ': <span style="color:#c3e88d">$1</span>'
    )
    .replace(
      /:\s*(\d+\.?\d*)/g,
      ': <span style="color:#f78c6c">$1</span>'
    )
    .replace(
      /:\s*(true|false|null)/g,
      ': <span style="color:#ff5370">$1</span>'
    );
}

/* ──────────────────────── UI COMPONENTS ──────────────────────── */

const inputClass =
  "w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-heading placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors";
const labelClass = "block text-xs font-medium text-body-strong mb-1.5";
const requiredBadge = (
  <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-400/80">
    Required
  </span>
);

function FieldBadge({ severity }: { severity: Severity }) {
  if (severity === "valid")
    return (
      <span className="ml-auto flex items-center gap-1 text-[10px] text-green-400">
        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none">
          <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  if (severity === "warning")
    return (
      <span className="ml-auto flex items-center gap-1 text-[10px] text-yellow-400">
        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none">
          <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    );
  return (
    <span className="ml-auto flex items-center gap-1 text-[10px] text-red-400">
      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function getFieldSeverity(fieldName: string, validations: ValidationItem[]): Severity | null {
  const item = validations.find((v) => v.field === fieldName);
  return item ? item.severity : null;
}

function LabelRow({ label, fieldName, required, validations }: {
  label: string;
  fieldName: string;
  required?: boolean;
  validations: ValidationItem[];
}) {
  const severity = getFieldSeverity(fieldName, validations);
  return (
    <label className={`${labelClass} flex items-center`}>
      {label}
      {required && requiredBadge}
      {severity && <FieldBadge severity={severity} />}
    </label>
  );
}

/* ──────────────────────── RICH RESULT PREVIEWS ──────────────────────── */

function ProductPreview({ f }: { f: ProductFields }) {
  if (!f.name) return null;
  return (
    <div className="rounded-xl border border-border bg-[#1a1a2e] p-4 space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Google Rich Result Preview</p>
      <div className="space-y-1">
        <p className="text-sm text-blue-400 truncate">{f.url || "https://yourstore.com/product"}</p>
        <p className="text-base text-heading font-medium truncate">{f.name}</p>
        <div className="flex items-center gap-3 flex-wrap">
          {f.ratingValue && (
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-3.5 h-3.5 ${
                      star <= Math.round(Number(f.ratingValue)) ? "text-yellow-400" : "text-white/20"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-white/50">
                {f.ratingValue}{f.reviewCount && ` (${f.reviewCount})`}
              </span>
            </div>
          )}
          {f.price && (
            <span className="text-sm font-medium text-green-400">
              {f.priceCurrency} {f.price}
            </span>
          )}
          {f.availability && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                f.availability.includes("InStock")
                  ? "bg-green-400/10 text-green-400"
                  : f.availability.includes("PreOrder")
                  ? "bg-blue-400/10 text-blue-400"
                  : "bg-red-400/10 text-red-400"
              }`}
            >
              {AVAILABILITY_OPTIONS.find((o) => o.value === f.availability)?.label || "Unknown"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function FAQPreview({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const validItems = items.filter((i) => i.question);
  if (validItems.length === 0) return null;
  return (
    <div className="rounded-xl border border-border bg-[#1a1a2e] p-4 space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Google Rich Result Preview</p>
      <div className="space-y-0 border border-white/10 rounded-lg overflow-hidden">
        {validItems.map((item, i) => (
          <div key={i} className="border-b border-white/10 last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-left text-sm text-heading hover:bg-white/[0.03] transition-colors"
            >
              {item.question}
              <svg
                className={`w-4 h-4 text-white/40 shrink-0 ml-2 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {openIndex === i && item.answer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-3 pb-2.5 text-xs text-body">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowToPreview({ f }: { f: HowToFields }) {
  const validSteps = f.steps.filter((s) => s.name || s.text);
  if (!f.name || validSteps.length === 0) return null;
  return (
    <div className="rounded-xl border border-border bg-[#1a1a2e] p-4 space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Google Rich Result Preview</p>
      <p className="text-sm font-medium text-heading">{f.name}</p>
      {f.totalTime && <p className="text-xs text-white/40">Total time: {f.totalTime}</p>}
      <ol className="space-y-1.5 mt-2">
        {validSteps.map((step, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
              {i + 1}
            </span>
            <span className="text-xs text-body-strong">{step.name || step.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ArticlePreview({ f }: { f: ArticleFields }) {
  if (!f.headline) return null;
  return (
    <div className="rounded-xl border border-border bg-[#1a1a2e] p-4 space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Google Rich Result Preview</p>
      <div className="flex gap-3">
        <div className="flex-1 space-y-1">
          <p className="text-sm text-blue-400 truncate">{f.publisher || "yourblog.com"}</p>
          <p className="text-base text-heading font-medium line-clamp-2">{f.headline}</p>
          <p className="text-xs text-white/40">
            {f.author && <span>{f.author}</span>}
            {f.author && f.datePublished && <span> · </span>}
            {f.datePublished && <span>{f.datePublished}</span>}
          </p>
        </div>
        {f.image && (
          <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
            <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

function EventPreview({ f }: { f: EventFields }) {
  if (!f.name) return null;
  return (
    <div className="rounded-xl border border-border bg-[#1a1a2e] p-4 space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Google Rich Result Preview</p>
      <div className="flex gap-3">
        {f.startDate && (
          <div className="w-14 h-14 rounded-lg bg-white/10 flex flex-col items-center justify-center shrink-0">
            <span className="text-[10px] text-accent uppercase font-bold">
              {new Date(f.startDate).toLocaleString("en", { month: "short" })}
            </span>
            <span className="text-lg text-heading font-bold leading-none">
              {new Date(f.startDate).getDate() || "--"}
            </span>
          </div>
        )}
        <div className="flex-1 space-y-0.5">
          <p className="text-sm text-heading font-medium">{f.name}</p>
          {f.startDate && <p className="text-xs text-white/40">{f.startDate}</p>}
          {f.location && <p className="text-xs text-white/50">{f.location}</p>}
          {f.offerPrice && (
            <span className="text-xs font-medium text-green-400">
              {f.offerCurrency} {f.offerPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function RecipePreview({ f }: { f: RecipeFields }) {
  if (!f.name) return null;
  return (
    <div className="rounded-xl border border-border bg-[#1a1a2e] p-4 space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Google Rich Result Preview</p>
      <div className="flex gap-3">
        <div className="flex-1 space-y-1">
          <p className="text-base text-heading font-medium">{f.name}</p>
          {f.ratingValue && (
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(Number(f.ratingValue)) ? "text-yellow-400" : "text-white/20"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-white/50">{f.ratingValue}{f.reviewCount && ` (${f.reviewCount})`}</span>
            </div>
          )}
          <div className="flex items-center gap-3 text-xs text-white/40">
            {f.totalTime && <span>{f.totalTime.replace("PT", "").replace("H", "h ").replace("M", "m")}</span>}
            {f.calories && <span>{f.calories} cal</span>}
          </div>
          {f.author && <p className="text-xs text-white/40">By {f.author}</p>}
        </div>
        {f.image && (
          <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

function SoftwareAppPreview({ f }: { f: SoftwareApplicationFields }) {
  if (!f.name) return null;
  return (
    <div className="rounded-xl border border-border bg-[#1a1a2e] p-4 space-y-2">
      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Google Rich Result Preview</p>
      <div className="space-y-1">
        <p className="text-base text-heading font-medium">{f.name}</p>
        {f.ratingValue && (
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(Number(f.ratingValue)) ? "text-yellow-400" : "text-white/20"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-white/50">{f.ratingValue}{f.reviewCount && ` (${f.reviewCount})`}</span>
          </div>
        )}
        <div className="flex items-center gap-3 flex-wrap">
          {f.operatingSystem && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/10 text-blue-400">{f.operatingSystem}</span>}
          {f.price && (
            <span className="text-sm font-medium text-green-400">
              {f.price === "0" ? "Free" : `${f.priceCurrency} ${f.price}`}
            </span>
          )}
          {f.applicationCategory && <span className="text-xs text-white/40">{f.applicationCategory}</span>}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── MAIN COMPONENT ──────────────────────── */

export default function SchemaGeneratorClient({ t }: { t: SchemaGeneratorTranslation }) {
  const [activeType, setActiveType] = useState<SchemaType>("Product");
  const [copied, setCopied] = useState<string | null>(null);
  const [importUrl, setImportUrl] = useState("");
  const [importing, setImporting] = useState(false);
  const [importError, setImportError] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  // State for each schema type
  const [product, setProduct] = useState<ProductFields>({ ...emptyProduct });
  const [localBusiness, setLocalBusiness] = useState<LocalBusinessFields>({ ...emptyLocalBusiness });
  const [faqItems, setFaqItems] = useState<FAQItem[]>([{ question: "", answer: "" }]);
  const [howTo, setHowTo] = useState<HowToFields>({ ...emptyHowTo });
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([{ name: "", url: "" }]);
  const [article, setArticle] = useState<ArticleFields>({ ...emptyArticle });
  const [organization, setOrganization] = useState<OrganizationFields>({ ...emptyOrganization });
  const [webSite, setWebSite] = useState<WebSiteFields>({ ...emptyWebSite });
  const [review, setReview] = useState<ReviewFields>({ ...emptyReview });
  const [event, setEvent] = useState<EventFields>({ ...emptyEvent });
  const [recipe, setRecipe] = useState<RecipeFields>({ ...emptyRecipe });
  const [course, setCourse] = useState<CourseFields>({ ...emptyCourse });
  const [softwareApp, setSoftwareApp] = useState<SoftwareApplicationFields>({ ...emptySoftwareApplication });

  // Build schema
  const schema = useMemo(() => {
    switch (activeType) {
      case "Product": return buildProductSchema(product);
      case "LocalBusiness": return buildLocalBusinessSchema(localBusiness);
      case "FAQPage": return buildFAQSchema(faqItems);
      case "HowTo": return buildHowToSchema(howTo);
      case "BreadcrumbList": return buildBreadcrumbSchema(breadcrumbs);
      case "Article": return buildArticleSchema(article);
      case "Organization": return buildOrganizationSchema(organization);
      case "WebSite": return buildWebSiteSchema(webSite);
      case "Review": return buildReviewSchema(review);
      case "Event": return buildEventSchema(event);
      case "Recipe": return buildRecipeSchema(recipe);
      case "Course": return buildCourseSchema(course);
      case "SoftwareApplication": return buildSoftwareApplicationSchema(softwareApp);
      default: return null;
    }
  }, [activeType, product, localBusiness, faqItems, howTo, breadcrumbs, article, organization, webSite, review, event, recipe, course, softwareApp]);

  const jsonOutput = schema ? JSON.stringify(schema, null, 2) : "";
  const scriptTag = schema
    ? `<script type="application/ld+json">\n${jsonOutput}\n</script>`
    : "";

  // Validation
  const validations = useMemo((): ValidationItem[] => {
    switch (activeType) {
      case "Product": return validateProduct(product);
      case "LocalBusiness": return validateLocalBusiness(localBusiness);
      case "FAQPage": return validateFAQ(faqItems);
      case "HowTo": return validateHowTo(howTo);
      case "BreadcrumbList": return validateBreadcrumb(breadcrumbs);
      case "Article": return validateArticle(article);
      case "Organization": return validateOrganization(organization);
      case "WebSite": return validateWebSite(webSite);
      case "Review": return validateReview(review);
      case "Event": return validateEvent(event);
      case "Recipe": return validateRecipe(recipe);
      case "Course": return validateCourse(course);
      case "SoftwareApplication": return validateSoftwareApplication(softwareApp);
      default: return [];
    }
  }, [activeType, product, localBusiness, faqItems, howTo, breadcrumbs, article, organization, webSite, review, event, recipe, course, softwareApp]);

  const errorCount = validations.filter((v) => v.severity === "error").length;
  const warningCount = validations.filter((v) => v.severity === "warning").length;
  const validCount = validations.filter((v) => v.severity === "valid").length;

  // Copy handlers
  const handleCopy = useCallback(async (text: string, type: string) => {
    if (!text) {
      setShowValidation(true);
      return;
    }
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  const handleDownload = useCallback(() => {
    if (!jsonOutput) return;
    const blob = new Blob([jsonOutput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeType.toLowerCase()}-schema.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [jsonOutput, activeType]);

  // Import from URL
  const handleImport = useCallback(async () => {
    if (!importUrl) return;
    setImporting(true);
    setImportError("");
    try {
      let url = importUrl.trim();
      if (!url.startsWith("http")) url = "https://" + url;
      const res = await fetch("/api/fetch-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: [url] }),
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      // Try to use the response to fill fields
      if (activeType === "Product" && data.title) {
        setProduct((prev) => ({
          ...prev,
          name: data.title || prev.name,
          description: data.description || prev.description,
          url: url,
        }));
      } else if (activeType === "Article" && data.title) {
        setArticle((prev) => ({
          ...prev,
          headline: data.title || prev.headline,
          description: data.description || prev.description,
        }));
      } else if (activeType === "Organization" && data.siteName) {
        setOrganization((prev) => ({
          ...prev,
          name: data.siteName || prev.name,
          url: url,
        }));
      } else if (activeType === "LocalBusiness" && (data.title || data.siteName)) {
        setLocalBusiness((prev) => ({
          ...prev,
          name: data.siteName || data.title || prev.name,
          url: url,
          description: data.description || prev.description,
        }));
      } else if (data.title) {
        // Fallback: fill what we can
        if (activeType === "Product") {
          setProduct((prev) => ({ ...prev, name: data.title, url }));
        }
      }
      setImportUrl("");
    } catch {
      setImportError("Failed to fetch URL. Check the URL and try again.");
    }
    setImporting(false);
  }, [importUrl, activeType]);

  // Reset current schema type
  const handleReset = useCallback(() => {
    switch (activeType) {
      case "Product": setProduct({ ...emptyProduct }); break;
      case "LocalBusiness": setLocalBusiness({ ...emptyLocalBusiness }); break;
      case "FAQPage": setFaqItems([{ question: "", answer: "" }]); break;
      case "HowTo": setHowTo({ ...emptyHowTo }); break;
      case "BreadcrumbList": setBreadcrumbs([{ name: "", url: "" }]); break;
      case "Article": setArticle({ ...emptyArticle }); break;
      case "Organization": setOrganization({ ...emptyOrganization }); break;
      case "WebSite": setWebSite({ ...emptyWebSite }); break;
      case "Review": setReview({ ...emptyReview }); break;
      case "Event": setEvent({ ...emptyEvent }); break;
      case "Recipe": setRecipe({ ...emptyRecipe }); break;
      case "Course": setCourse({ ...emptyCourse }); break;
      case "SoftwareApplication": setSoftwareApp({ ...emptySoftwareApplication }); break;
    }
    setShowValidation(false);
  }, [activeType]);

  // Updaters for product
  const updateProduct = useCallback((field: keyof ProductFields, value: string) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateLocalBusiness = useCallback((field: keyof LocalBusinessFields, value: string) => {
    setLocalBusiness((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateArticle = useCallback((field: keyof ArticleFields, value: string) => {
    setArticle((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateOrganization = useCallback((field: keyof OrganizationFields, value: string) => {
    setOrganization((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Scroll code into view when schema updates
  useEffect(() => {
    if (codeRef.current && schema) {
      codeRef.current.scrollTop = 0;
    }
  }, [schema]);

  /* ────── FORM RENDERERS ────── */

  const renderProductForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Product Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={product.name} onChange={(e) => updateProduct("name", e.target.value)} placeholder="e.g. Premium Running Shoes" />
      </div>
      <div>
        <LabelRow label="Description" fieldName="description" required validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={3} value={product.description} onChange={(e) => updateProduct("description", e.target.value)} placeholder="e.g. Lightweight running shoes with responsive cushioning..." />
      </div>
      <div>
        <LabelRow label="Image URL" fieldName="image" required validations={validations} />
        <input className={inputClass} value={product.image} onChange={(e) => updateProduct("image", e.target.value)} placeholder="e.g. https://yourstore.com/images/product.jpg" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="SKU / MPN" fieldName="sku" validations={validations} />
          <input className={inputClass} value={product.sku} onChange={(e) => updateProduct("sku", e.target.value)} placeholder="e.g. RUN-PRO-001" />
        </div>
        <div>
          <LabelRow label="Brand" fieldName="brand" validations={validations} />
          <input className={inputClass} value={product.brand} onChange={(e) => updateProduct("brand", e.target.value)} placeholder="e.g. Nike" />
        </div>
      </div>
      <div>
        <LabelRow label="GTIN / UPC" fieldName="gtin" validations={validations} />
        <input className={inputClass} value={product.gtin} onChange={(e) => updateProduct("gtin", e.target.value)} placeholder="e.g. 0012345678905" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Price" fieldName="price" required validations={validations} />
          <input className={inputClass} type="text" inputMode="decimal" value={product.price} onChange={(e) => updateProduct("price", e.target.value)} placeholder="e.g. 129.99" />
        </div>
        <div>
          <label className={labelClass}>Currency</label>
          <select className={inputClass} value={product.priceCurrency} onChange={(e) => updateProduct("priceCurrency", e.target.value)}>
            {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Availability</label>
          <select className={inputClass} value={product.availability} onChange={(e) => updateProduct("availability", e.target.value)}>
            {AVAILABILITY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Condition</label>
          <select className={inputClass} value={product.condition} onChange={(e) => updateProduct("condition", e.target.value)}>
            {CONDITION_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Average Rating (1-5)" fieldName="aggregateRating" validations={validations} />
          <input className={inputClass} type="text" inputMode="decimal" value={product.ratingValue} onChange={(e) => updateProduct("ratingValue", e.target.value)} placeholder="e.g. 4.5" />
        </div>
        <div>
          <label className={labelClass}>Review Count</label>
          <input className={inputClass} type="text" inputMode="numeric" value={product.reviewCount} onChange={(e) => updateProduct("reviewCount", e.target.value)} placeholder="e.g. 128" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Seller</label>
        <input className={inputClass} value={product.seller} onChange={(e) => updateProduct("seller", e.target.value)} placeholder="e.g. Your Store Name" />
      </div>
      <div>
        <LabelRow label="Product URL" fieldName="url" validations={validations} />
        <input className={inputClass} value={product.url} onChange={(e) => updateProduct("url", e.target.value)} placeholder="e.g. https://yourstore.com/products/running-shoes" />
      </div>

      {/* Shipping Details */}
      <div className="mt-6 pt-4 border-t border-border">
        <p className="text-xs font-medium text-accent mb-3">Shipping Details</p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Shipping Cost</label>
            <input className={inputClass} value={product.shippingCost} onChange={(e) => updateProduct("shippingCost", e.target.value)} placeholder="e.g. 5.99 (0 for free)" />
          </div>
          <div>
            <label className={labelClass}>Shipping Currency</label>
            <select className={inputClass} value={product.shippingCurrency} onChange={(e) => updateProduct("shippingCurrency", e.target.value)}>
              {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label className={labelClass}>Delivery Days</label>
            <input className={inputClass} value={product.deliveryDays} onChange={(e) => updateProduct("deliveryDays", e.target.value)} placeholder="e.g. 5" />
          </div>
          <div>
            <label className={labelClass}>Shipping Country</label>
            <input className={inputClass} value={product.shippingCountry} onChange={(e) => updateProduct("shippingCountry", e.target.value)} placeholder="e.g. US" />
          </div>
        </div>
      </div>

      {/* Return Policy */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs font-medium text-accent mb-3">Return Policy</p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Return Window (days)</label>
            <input className={inputClass} value={product.returnDays} onChange={(e) => updateProduct("returnDays", e.target.value)} placeholder="e.g. 30" />
          </div>
          <div>
            <label className={labelClass}>Return Policy Type</label>
            <select className={inputClass} value={product.returnPolicy} onChange={(e) => updateProduct("returnPolicy", e.target.value)}>
              {RETURN_POLICY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Review */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs font-medium text-accent mb-3">Product Review (optional)</p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Reviewer Name</label>
            <input className={inputClass} value={product.reviewAuthor} onChange={(e) => updateProduct("reviewAuthor", e.target.value)} placeholder="e.g. John Doe" />
          </div>
          <div>
            <label className={labelClass}>Review Rating (1-5)</label>
            <input className={inputClass} value={product.reviewRating} onChange={(e) => updateProduct("reviewRating", e.target.value)} placeholder="e.g. 5" />
          </div>
        </div>
        <div className="mt-3">
          <label className={labelClass}>Review Text</label>
          <textarea className={`${inputClass} resize-none`} rows={2} value={product.reviewBody} onChange={(e) => updateProduct("reviewBody", e.target.value)} placeholder="e.g. These are the best running shoes I've ever owned..." />
        </div>
      </div>

      {/* Multiple Offers / Variants */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs font-medium text-accent mb-3">Product Variants (additional offers)</p>
        {product.additionalOffers.map((offer, i) => (
          <div key={i} className="rounded-lg border border-border bg-white/[0.02] p-4 space-y-3 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-accent">Variant {i + 1}</span>
              <button
                onClick={() => setProduct((prev) => ({ ...prev, additionalOffers: prev.additionalOffers.filter((_, idx) => idx !== i) }))}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >Remove</button>
            </div>
            <input className={inputClass} value={offer.variantName} onChange={(e) => {
              const updated = [...product.additionalOffers];
              updated[i] = { ...updated[i], variantName: e.target.value };
              setProduct((prev) => ({ ...prev, additionalOffers: updated }));
            }} placeholder="Variant name (e.g. Size XL, Blue)" />
            <div className="grid grid-cols-2 gap-3">
              <input className={inputClass} value={offer.price} onChange={(e) => {
                const updated = [...product.additionalOffers];
                updated[i] = { ...updated[i], price: e.target.value };
                setProduct((prev) => ({ ...prev, additionalOffers: updated }));
              }} placeholder="Price" />
              <select className={inputClass} value={offer.priceCurrency} onChange={(e) => {
                const updated = [...product.additionalOffers];
                updated[i] = { ...updated[i], priceCurrency: e.target.value };
                setProduct((prev) => ({ ...prev, additionalOffers: updated }));
              }}>
                {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select className={inputClass} value={offer.availability} onChange={(e) => {
                const updated = [...product.additionalOffers];
                updated[i] = { ...updated[i], availability: e.target.value };
                setProduct((prev) => ({ ...prev, additionalOffers: updated }));
              }}>
                {AVAILABILITY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <select className={inputClass} value={offer.condition} onChange={(e) => {
                const updated = [...product.additionalOffers];
                updated[i] = { ...updated[i], condition: e.target.value };
                setProduct((prev) => ({ ...prev, additionalOffers: updated }));
              }}>
                {CONDITION_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>
        ))}
        <button
          onClick={() => setProduct((prev) => ({ ...prev, additionalOffers: [...prev.additionalOffers, { price: "", priceCurrency: "USD", availability: "https://schema.org/InStock", condition: "https://schema.org/NewCondition", variantName: "" }] }))}
          className="w-full rounded-lg border border-dashed border-accent/30 py-2.5 text-sm text-accent hover:bg-accent/5 transition-colors"
        >
          + Add Variant
        </button>
      </div>
    </div>
  );

  const renderLocalBusinessForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Business Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={localBusiness.name} onChange={(e) => updateLocalBusiness("name", e.target.value)} placeholder="e.g. Joe's Coffee Shop" />
      </div>
      <div>
        <label className={labelClass}>Description</label>
        <textarea className={`${inputClass} resize-none`} rows={2} value={localBusiness.description} onChange={(e) => updateLocalBusiness("description", e.target.value)} placeholder="e.g. A cozy coffee shop in downtown..." />
      </div>
      <div>
        <LabelRow label="Street Address" fieldName="address" required validations={validations} />
        <input className={inputClass} value={localBusiness.street} onChange={(e) => updateLocalBusiness("street", e.target.value)} placeholder="e.g. 123 Main Street" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>City</label>
          <input className={inputClass} value={localBusiness.city} onChange={(e) => updateLocalBusiness("city", e.target.value)} placeholder="e.g. New York" />
        </div>
        <div>
          <label className={labelClass}>State / Region</label>
          <input className={inputClass} value={localBusiness.state} onChange={(e) => updateLocalBusiness("state", e.target.value)} placeholder="e.g. NY" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>ZIP / Postal Code</label>
          <input className={inputClass} value={localBusiness.zip} onChange={(e) => updateLocalBusiness("zip", e.target.value)} placeholder="e.g. 10001" />
        </div>
        <div>
          <label className={labelClass}>Country</label>
          <input className={inputClass} value={localBusiness.country} onChange={(e) => updateLocalBusiness("country", e.target.value)} placeholder="e.g. US" />
        </div>
      </div>
      <div>
        <LabelRow label="Telephone" fieldName="telephone" validations={validations} />
        <input className={inputClass} value={localBusiness.telephone} onChange={(e) => updateLocalBusiness("telephone", e.target.value)} placeholder="e.g. +1-555-123-4567" />
      </div>
      <div>
        <label className={labelClass}>Opening Hours</label>
        <input className={inputClass} value={localBusiness.openingHours} onChange={(e) => updateLocalBusiness("openingHours", e.target.value)} placeholder="e.g. Mo-Fr 09:00-17:00" />
      </div>
      <div>
        <label className={labelClass}>Price Range</label>
        <input className={inputClass} value={localBusiness.priceRange} onChange={(e) => updateLocalBusiness("priceRange", e.target.value)} placeholder="e.g. $$" />
      </div>
      <div>
        <LabelRow label="Website URL" fieldName="url" validations={validations} />
        <input className={inputClass} value={localBusiness.url} onChange={(e) => updateLocalBusiness("url", e.target.value)} placeholder="e.g. https://joescoffee.com" />
      </div>
      <div>
        <LabelRow label="Image URL" fieldName="image" validations={validations} />
        <input className={inputClass} value={localBusiness.image} onChange={(e) => updateLocalBusiness("image", e.target.value)} placeholder="e.g. https://joescoffee.com/storefront.jpg" />
      </div>
    </div>
  );

  const renderFAQForm = () => (
    <div className="space-y-4">
      {faqItems.map((item, i) => (
        <div key={i} className="rounded-lg border border-border bg-white/[0.02] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-accent">Q&A #{i + 1}</span>
            {faqItems.length > 1 && (
              <button
                onClick={() => setFaqItems((prev) => prev.filter((_, idx) => idx !== i))}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            )}
          </div>
          <div>
            <label className={labelClass}>Question</label>
            <input
              className={inputClass}
              value={item.question}
              onChange={(e) => {
                const updated = [...faqItems];
                updated[i] = { ...updated[i], question: e.target.value };
                setFaqItems(updated);
              }}
              placeholder="e.g. What is your return policy?"
            />
          </div>
          <div>
            <label className={labelClass}>Answer</label>
            <textarea
              className={`${inputClass} resize-none`}
              rows={2}
              value={item.answer}
              onChange={(e) => {
                const updated = [...faqItems];
                updated[i] = { ...updated[i], answer: e.target.value };
                setFaqItems(updated);
              }}
              placeholder="e.g. We accept returns within 30 days of purchase..."
            />
          </div>
        </div>
      ))}
      <button
        onClick={() => setFaqItems((prev) => [...prev, { question: "", answer: "" }])}
        className="w-full rounded-lg border border-dashed border-accent/30 py-2.5 text-sm text-accent hover:bg-accent/5 transition-colors"
      >
        + Add Question
      </button>
    </div>
  );

  const renderHowToForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="How-To Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={howTo.name} onChange={(e) => setHowTo((prev) => ({ ...prev, name: e.target.value }))} placeholder="e.g. How to Change a Tire" />
      </div>
      <div>
        <LabelRow label="Description" fieldName="description" validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={2} value={howTo.description} onChange={(e) => setHowTo((prev) => ({ ...prev, description: e.target.value }))} placeholder="e.g. Learn how to change a flat tire in 15 minutes." />
      </div>
      <div>
        <label className={labelClass}>Total Time (ISO 8601)</label>
        <input className={inputClass} value={howTo.totalTime} onChange={(e) => setHowTo((prev) => ({ ...prev, totalTime: e.target.value }))} placeholder="e.g. PT15M (15 minutes), PT1H30M (1.5 hours)" />
      </div>
      <div className="space-y-3">
        <label className={`${labelClass} text-accent`}>Steps</label>
        {howTo.steps.map((step, i) => (
          <div key={i} className="rounded-lg border border-border bg-white/[0.02] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-accent">Step {i + 1}</span>
              {howTo.steps.length > 1 && (
                <button
                  onClick={() => setHowTo((prev) => ({ ...prev, steps: prev.steps.filter((_, idx) => idx !== i) }))}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
            <input
              className={inputClass}
              value={step.name}
              onChange={(e) => {
                const updated = [...howTo.steps];
                updated[i] = { ...updated[i], name: e.target.value };
                setHowTo((prev) => ({ ...prev, steps: updated }));
              }}
              placeholder="Step name"
            />
            <textarea
              className={`${inputClass} resize-none`}
              rows={2}
              value={step.text}
              onChange={(e) => {
                const updated = [...howTo.steps];
                updated[i] = { ...updated[i], text: e.target.value };
                setHowTo((prev) => ({ ...prev, steps: updated }));
              }}
              placeholder="Step description"
            />
            <input
              className={inputClass}
              value={step.image}
              onChange={(e) => {
                const updated = [...howTo.steps];
                updated[i] = { ...updated[i], image: e.target.value };
                setHowTo((prev) => ({ ...prev, steps: updated }));
              }}
              placeholder="Step image URL (optional)"
            />
          </div>
        ))}
        <button
          onClick={() => setHowTo((prev) => ({ ...prev, steps: [...prev.steps, { name: "", text: "", image: "" }] }))}
          className="w-full rounded-lg border border-dashed border-accent/30 py-2.5 text-sm text-accent hover:bg-accent/5 transition-colors"
        >
          + Add Step
        </button>
      </div>
    </div>
  );

  const renderBreadcrumbForm = () => (
    <div className="space-y-4">
      <p className="text-xs text-body">Add breadcrumb items in order. The last item is typically the current page.</p>
      {breadcrumbs.map((item, i) => (
        <div key={i} className="rounded-lg border border-border bg-white/[0.02] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-accent">Item {i + 1}</span>
            {breadcrumbs.length > 1 && (
              <button
                onClick={() => setBreadcrumbs((prev) => prev.filter((_, idx) => idx !== i))}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            )}
          </div>
          <input
            className={inputClass}
            value={item.name}
            onChange={(e) => {
              const updated = [...breadcrumbs];
              updated[i] = { ...updated[i], name: e.target.value };
              setBreadcrumbs(updated);
            }}
            placeholder="e.g. Home"
          />
          <input
            className={inputClass}
            value={item.url}
            onChange={(e) => {
              const updated = [...breadcrumbs];
              updated[i] = { ...updated[i], url: e.target.value };
              setBreadcrumbs(updated);
            }}
            placeholder="e.g. https://yourstore.com/"
          />
        </div>
      ))}
      <button
        onClick={() => setBreadcrumbs((prev) => [...prev, { name: "", url: "" }])}
        className="w-full rounded-lg border border-dashed border-accent/30 py-2.5 text-sm text-accent hover:bg-accent/5 transition-colors"
      >
        + Add Breadcrumb
      </button>
    </div>
  );

  const renderArticleForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Headline" fieldName="headline" required validations={validations} />
        <input className={inputClass} value={article.headline} onChange={(e) => updateArticle("headline", e.target.value)} placeholder="e.g. 10 Tips for Better Product Photography" />
      </div>
      <div>
        <label className={labelClass}>Description</label>
        <textarea className={`${inputClass} resize-none`} rows={2} value={article.description} onChange={(e) => updateArticle("description", e.target.value)} placeholder="A brief summary of the article..." />
      </div>
      <div>
        <LabelRow label="Author" fieldName="author" validations={validations} />
        <input className={inputClass} value={article.author} onChange={(e) => updateArticle("author", e.target.value)} placeholder="e.g. Jane Doe" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Date Published" fieldName="datePublished" validations={validations} />
          <input className={inputClass} type="date" value={article.datePublished} onChange={(e) => updateArticle("datePublished", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Date Modified</label>
          <input className={inputClass} type="date" value={article.dateModified} onChange={(e) => updateArticle("dateModified", e.target.value)} />
        </div>
      </div>
      <div>
        <LabelRow label="Image URL" fieldName="image" required validations={validations} />
        <input className={inputClass} value={article.image} onChange={(e) => updateArticle("image", e.target.value)} placeholder="e.g. https://yourblog.com/images/article.jpg" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Publisher Name</label>
          <input className={inputClass} value={article.publisher} onChange={(e) => updateArticle("publisher", e.target.value)} placeholder="e.g. Your Blog" />
        </div>
        <div>
          <label className={labelClass}>Publisher Logo URL</label>
          <input className={inputClass} value={article.publisherLogo} onChange={(e) => updateArticle("publisherLogo", e.target.value)} placeholder="e.g. https://yourblog.com/logo.png" />
        </div>
      </div>
    </div>
  );

  const renderOrganizationForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Organization Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={organization.name} onChange={(e) => updateOrganization("name", e.target.value)} placeholder="e.g. Acme Corporation" />
      </div>
      <div>
        <LabelRow label="Website URL" fieldName="url" validations={validations} />
        <input className={inputClass} value={organization.url} onChange={(e) => updateOrganization("url", e.target.value)} placeholder="e.g. https://acme.com" />
      </div>
      <div>
        <LabelRow label="Logo URL" fieldName="logo" validations={validations} />
        <input className={inputClass} value={organization.logo} onChange={(e) => updateOrganization("logo", e.target.value)} placeholder="e.g. https://acme.com/logo.png" />
      </div>
      <div>
        <label className={labelClass}>Description</label>
        <textarea className={`${inputClass} resize-none`} rows={2} value={organization.description} onChange={(e) => updateOrganization("description", e.target.value)} placeholder="Brief description of the organization..." />
      </div>
      <div>
        <label className={labelClass}>Social Media URLs (one per line)</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={4}
          value={organization.sameAs}
          onChange={(e) => updateOrganization("sameAs", e.target.value)}
          placeholder={"https://facebook.com/acme\nhttps://twitter.com/acme\nhttps://linkedin.com/company/acme"}
        />
      </div>
    </div>
  );

  const updateWebSite = useCallback((field: keyof WebSiteFields, value: string) => {
    setWebSite((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateReview = useCallback((field: keyof ReviewFields, value: string) => {
    setReview((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateEvent = useCallback((field: keyof EventFields, value: string) => {
    setEvent((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateRecipe = useCallback((field: keyof RecipeFields, value: string) => {
    setRecipe((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateCourse = useCallback((field: keyof CourseFields, value: string) => {
    setCourse((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateSoftwareApp = useCallback((field: keyof SoftwareApplicationFields, value: string) => {
    setSoftwareApp((prev) => ({ ...prev, [field]: value }));
  }, []);

  const renderWebSiteForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Site Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={webSite.name} onChange={(e) => updateWebSite("name", e.target.value)} placeholder="e.g. My Awesome Site" />
      </div>
      <div>
        <LabelRow label="Site URL" fieldName="url" required validations={validations} />
        <input className={inputClass} value={webSite.url} onChange={(e) => updateWebSite("url", e.target.value)} placeholder="e.g. https://example.com" />
      </div>
      <div>
        <label className={labelClass}>Description</label>
        <textarea className={`${inputClass} resize-none`} rows={2} value={webSite.description} onChange={(e) => updateWebSite("description", e.target.value)} placeholder="Brief description of the website..." />
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs font-medium text-accent mb-3">Sitelinks Search Box (SearchAction)</p>
        <div>
          <LabelRow label="Search URL Template" fieldName="searchUrl" validations={validations} />
          <input className={inputClass} value={webSite.searchUrl} onChange={(e) => updateWebSite("searchUrl", e.target.value)} placeholder="e.g. https://example.com/search?q=" />
          <p className="text-[10px] text-white/30 mt-1">The search query parameter will be appended automatically</p>
        </div>
      </div>
    </div>
  );

  const renderReviewForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Reviewed Item Name" fieldName="itemName" required validations={validations} />
          <input className={inputClass} value={review.itemName} onChange={(e) => updateReview("itemName", e.target.value)} placeholder="e.g. iPhone 15 Pro" />
        </div>
        <div>
          <label className={labelClass}>Item Type</label>
          <select className={inputClass} value={review.itemType} onChange={(e) => updateReview("itemType", e.target.value)}>
            {["Product", "LocalBusiness", "Movie", "Book", "Restaurant", "SoftwareApplication", "Event", "Course", "CreativeWork"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <LabelRow label="Reviewer Name" fieldName="authorName" required validations={validations} />
        <input className={inputClass} value={review.authorName} onChange={(e) => updateReview("authorName", e.target.value)} placeholder="e.g. Jane Smith" />
      </div>
      <div>
        <LabelRow label="Review Text" fieldName="reviewBody" validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={3} value={review.reviewBody} onChange={(e) => updateReview("reviewBody", e.target.value)} placeholder="Write your review..." />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Rating (1-5)" fieldName="ratingValue" required validations={validations} />
          <input className={inputClass} value={review.ratingValue} onChange={(e) => updateReview("ratingValue", e.target.value)} placeholder="e.g. 4.5" />
        </div>
        <div>
          <label className={labelClass}>Best Rating</label>
          <input className={inputClass} value={review.bestRating} onChange={(e) => updateReview("bestRating", e.target.value)} placeholder="e.g. 5" />
        </div>
      </div>
      <div>
        <LabelRow label="Date Published" fieldName="datePublished" validations={validations} />
        <input className={inputClass} type="date" value={review.datePublished} onChange={(e) => updateReview("datePublished", e.target.value)} />
      </div>
      <div>
        <label className={labelClass}>Publisher</label>
        <input className={inputClass} value={review.publisher} onChange={(e) => updateReview("publisher", e.target.value)} placeholder="e.g. TechReviews.com" />
      </div>
    </div>
  );

  const renderEventForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Event Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={event.name} onChange={(e) => updateEvent("name", e.target.value)} placeholder="e.g. Annual Tech Conference 2025" />
      </div>
      <div>
        <LabelRow label="Description" fieldName="description" validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={2} value={event.description} onChange={(e) => updateEvent("description", e.target.value)} placeholder="Describe the event..." />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Start Date" fieldName="startDate" required validations={validations} />
          <input className={inputClass} type="datetime-local" value={event.startDate} onChange={(e) => updateEvent("startDate", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>End Date</label>
          <input className={inputClass} type="datetime-local" value={event.endDate} onChange={(e) => updateEvent("endDate", e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Event Status</label>
          <select className={inputClass} value={event.eventStatus} onChange={(e) => updateEvent("eventStatus", e.target.value)}>
            {EVENT_STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Attendance Mode</label>
          <select className={inputClass} value={event.eventAttendanceMode} onChange={(e) => updateEvent("eventAttendanceMode", e.target.value)}>
            {EVENT_ATTENDANCE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <LabelRow label={event.eventAttendanceMode === "https://schema.org/OnlineEventAttendanceMode" ? "Event URL" : "Venue Name"} fieldName="location" required validations={validations} />
        <input className={inputClass} value={event.location} onChange={(e) => updateEvent("location", e.target.value)} placeholder={event.eventAttendanceMode === "https://schema.org/OnlineEventAttendanceMode" ? "e.g. https://zoom.us/meeting/123" : "e.g. Convention Center"} />
      </div>
      {event.eventAttendanceMode !== "https://schema.org/OnlineEventAttendanceMode" && (
        <div>
          <label className={labelClass}>Venue Address</label>
          <input className={inputClass} value={event.locationAddress} onChange={(e) => updateEvent("locationAddress", e.target.value)} placeholder="e.g. 123 Main St, City, State" />
        </div>
      )}
      <div>
        <LabelRow label="Image URL" fieldName="image" validations={validations} />
        <input className={inputClass} value={event.image} onChange={(e) => updateEvent("image", e.target.value)} placeholder="e.g. https://example.com/event-banner.jpg" />
      </div>
      <div>
        <label className={labelClass}>Performer Name</label>
        <input className={inputClass} value={event.performerName} onChange={(e) => updateEvent("performerName", e.target.value)} placeholder="e.g. John Doe" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Organizer</label>
          <input className={inputClass} value={event.organizer} onChange={(e) => updateEvent("organizer", e.target.value)} placeholder="e.g. TechEvents Inc." />
        </div>
        <div>
          <label className={labelClass}>Organizer URL</label>
          <input className={inputClass} value={event.organizerUrl} onChange={(e) => updateEvent("organizerUrl", e.target.value)} placeholder="e.g. https://techevents.com" />
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs font-medium text-accent mb-3">Ticket / Offer</p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <LabelRow label="Ticket Price" fieldName="offerPrice" validations={validations} />
            <input className={inputClass} value={event.offerPrice} onChange={(e) => updateEvent("offerPrice", e.target.value)} placeholder="e.g. 49.99 (0 for free)" />
          </div>
          <div>
            <label className={labelClass}>Currency</label>
            <select className={inputClass} value={event.offerCurrency} onChange={(e) => updateEvent("offerCurrency", e.target.value)}>
              {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-3">
          <label className={labelClass}>Ticket URL</label>
          <input className={inputClass} value={event.offerUrl} onChange={(e) => updateEvent("offerUrl", e.target.value)} placeholder="e.g. https://tickets.example.com/event" />
        </div>
      </div>
    </div>
  );

  const renderRecipeForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Recipe Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={recipe.name} onChange={(e) => updateRecipe("name", e.target.value)} placeholder="e.g. Classic Chocolate Chip Cookies" />
      </div>
      <div>
        <LabelRow label="Description" fieldName="description" validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={2} value={recipe.description} onChange={(e) => updateRecipe("description", e.target.value)} placeholder="Describe the recipe..." />
      </div>
      <div>
        <LabelRow label="Image URL" fieldName="image" required validations={validations} />
        <input className={inputClass} value={recipe.image} onChange={(e) => updateRecipe("image", e.target.value)} placeholder="e.g. https://example.com/cookies.jpg" />
      </div>
      <div>
        <LabelRow label="Author" fieldName="author" validations={validations} />
        <input className={inputClass} value={recipe.author} onChange={(e) => updateRecipe("author", e.target.value)} placeholder="e.g. Chef Jane" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className={labelClass}>Prep Time (ISO)</label>
          <input className={inputClass} value={recipe.prepTime} onChange={(e) => updateRecipe("prepTime", e.target.value)} placeholder="e.g. PT20M" />
        </div>
        <div>
          <label className={labelClass}>Cook Time (ISO)</label>
          <input className={inputClass} value={recipe.cookTime} onChange={(e) => updateRecipe("cookTime", e.target.value)} placeholder="e.g. PT30M" />
        </div>
        <div>
          <label className={labelClass}>Total Time (ISO)</label>
          <input className={inputClass} value={recipe.totalTime} onChange={(e) => updateRecipe("totalTime", e.target.value)} placeholder="e.g. PT50M" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className={labelClass}>Yield / Servings</label>
          <input className={inputClass} value={recipe.recipeYield} onChange={(e) => updateRecipe("recipeYield", e.target.value)} placeholder="e.g. 24 cookies" />
        </div>
        <div>
          <label className={labelClass}>Category</label>
          <input className={inputClass} value={recipe.recipeCategory} onChange={(e) => updateRecipe("recipeCategory", e.target.value)} placeholder="e.g. Dessert" />
        </div>
        <div>
          <label className={labelClass}>Cuisine</label>
          <input className={inputClass} value={recipe.recipeCuisine} onChange={(e) => updateRecipe("recipeCuisine", e.target.value)} placeholder="e.g. American" />
        </div>
      </div>
      <div>
        <LabelRow label="Ingredients (one per line)" fieldName="ingredients" validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={4} value={recipe.ingredients} onChange={(e) => updateRecipe("ingredients", e.target.value)} placeholder={"2 cups all-purpose flour\n1 cup butter\n1 cup sugar\n2 eggs"} />
      </div>
      <div>
        <LabelRow label="Instructions (one step per line)" fieldName="instructions" validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={4} value={recipe.instructions} onChange={(e) => updateRecipe("instructions", e.target.value)} placeholder={"Preheat oven to 350 F.\nMix dry ingredients.\nCream butter and sugar.\nCombine and bake for 12 minutes."} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className={labelClass}>Calories</label>
          <input className={inputClass} value={recipe.calories} onChange={(e) => updateRecipe("calories", e.target.value)} placeholder="e.g. 250" />
        </div>
        <div>
          <label className={labelClass}>Rating (1-5)</label>
          <input className={inputClass} value={recipe.ratingValue} onChange={(e) => updateRecipe("ratingValue", e.target.value)} placeholder="e.g. 4.8" />
        </div>
        <div>
          <label className={labelClass}>Review Count</label>
          <input className={inputClass} value={recipe.reviewCount} onChange={(e) => updateRecipe("reviewCount", e.target.value)} placeholder="e.g. 256" />
        </div>
      </div>
    </div>
  );

  const renderCourseForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="Course Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={course.name} onChange={(e) => updateCourse("name", e.target.value)} placeholder="e.g. Introduction to Machine Learning" />
      </div>
      <div>
        <LabelRow label="Description" fieldName="description" required validations={validations} />
        <textarea className={`${inputClass} resize-none`} rows={3} value={course.description} onChange={(e) => updateCourse("description", e.target.value)} placeholder="Describe what the course covers..." />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Provider" fieldName="provider" validations={validations} />
          <input className={inputClass} value={course.provider} onChange={(e) => updateCourse("provider", e.target.value)} placeholder="e.g. Coursera, Udemy" />
        </div>
        <div>
          <label className={labelClass}>Provider URL</label>
          <input className={inputClass} value={course.providerUrl} onChange={(e) => updateCourse("providerUrl", e.target.value)} placeholder="e.g. https://coursera.org" />
        </div>
      </div>
      <div>
        <LabelRow label="Course URL" fieldName="url" validations={validations} />
        <input className={inputClass} value={course.url} onChange={(e) => updateCourse("url", e.target.value)} placeholder="e.g. https://coursera.org/learn/ml-intro" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Course Mode</label>
          <select className={inputClass} value={course.courseMode} onChange={(e) => updateCourse("courseMode", e.target.value)}>
            {["Online", "Onsite", "Blended"].map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Duration (ISO 8601)</label>
          <input className={inputClass} value={course.duration} onChange={(e) => updateCourse("duration", e.target.value)} placeholder="e.g. P8W (8 weeks)" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Image URL</label>
        <input className={inputClass} value={course.image} onChange={(e) => updateCourse("image", e.target.value)} placeholder="e.g. https://example.com/course-thumb.jpg" />
      </div>
    </div>
  );

  const renderSoftwareApplicationForm = () => (
    <div className="space-y-4">
      <div>
        <LabelRow label="App Name" fieldName="name" required validations={validations} />
        <input className={inputClass} value={softwareApp.name} onChange={(e) => updateSoftwareApp("name", e.target.value)} placeholder="e.g. TaskMaster Pro" />
      </div>
      <div>
        <label className={labelClass}>Description</label>
        <textarea className={`${inputClass} resize-none`} rows={2} value={softwareApp.description} onChange={(e) => updateSoftwareApp("description", e.target.value)} placeholder="Describe the application..." />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Operating System" fieldName="operatingSystem" validations={validations} />
          <input className={inputClass} value={softwareApp.operatingSystem} onChange={(e) => updateSoftwareApp("operatingSystem", e.target.value)} placeholder="e.g. Windows, macOS, Android" />
        </div>
        <div>
          <LabelRow label="Category" fieldName="applicationCategory" validations={validations} />
          <select className={inputClass} value={softwareApp.applicationCategory} onChange={(e) => updateSoftwareApp("applicationCategory", e.target.value)}>
            <option value="">Select category...</option>
            {APP_CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c.replace("Application", " App")}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Price" fieldName="price" validations={validations} />
          <input className={inputClass} value={softwareApp.price} onChange={(e) => updateSoftwareApp("price", e.target.value)} placeholder="e.g. 9.99 (0 for free)" />
        </div>
        <div>
          <label className={labelClass}>Currency</label>
          <select className={inputClass} value={softwareApp.priceCurrency} onChange={(e) => updateSoftwareApp("priceCurrency", e.target.value)}>
            {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <LabelRow label="Rating (1-5)" fieldName="rating" validations={validations} />
          <input className={inputClass} value={softwareApp.ratingValue} onChange={(e) => updateSoftwareApp("ratingValue", e.target.value)} placeholder="e.g. 4.7" />
        </div>
        <div>
          <label className={labelClass}>Review Count</label>
          <input className={inputClass} value={softwareApp.reviewCount} onChange={(e) => updateSoftwareApp("reviewCount", e.target.value)} placeholder="e.g. 1500" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Download URL</label>
        <input className={inputClass} value={softwareApp.downloadUrl} onChange={(e) => updateSoftwareApp("downloadUrl", e.target.value)} placeholder="e.g. https://example.com/download" />
      </div>
      <div>
        <label className={labelClass}>Screenshot URL</label>
        <input className={inputClass} value={softwareApp.screenshot} onChange={(e) => updateSoftwareApp("screenshot", e.target.value)} placeholder="e.g. https://example.com/screenshot.png" />
      </div>
    </div>
  );

  const renderForm = () => {
    switch (activeType) {
      case "Product": return renderProductForm();
      case "LocalBusiness": return renderLocalBusinessForm();
      case "FAQPage": return renderFAQForm();
      case "HowTo": return renderHowToForm();
      case "BreadcrumbList": return renderBreadcrumbForm();
      case "Article": return renderArticleForm();
      case "Organization": return renderOrganizationForm();
      case "WebSite": return renderWebSiteForm();
      case "Review": return renderReviewForm();
      case "Event": return renderEventForm();
      case "Recipe": return renderRecipeForm();
      case "Course": return renderCourseForm();
      case "SoftwareApplication": return renderSoftwareApplicationForm();
    }
  };

  const renderRichPreview = () => {
    switch (activeType) {
      case "Product": return <ProductPreview f={product} />;
      case "FAQPage": return <FAQPreview items={faqItems} />;
      case "HowTo": return <HowToPreview f={howTo} />;
      case "Article": return <ArticlePreview f={article} />;
      case "Event": return <EventPreview f={event} />;
      case "Recipe": return <RecipePreview f={recipe} />;
      case "SoftwareApplication": return <SoftwareAppPreview f={softwareApp} />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Schema type tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {SCHEMA_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeType === type
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-white/[0.05] text-body hover:bg-white/[0.08] hover:text-heading border border-border"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Import from URL */}
      <div className="flex items-center gap-3 max-w-[700px] mx-auto">
        <input
          className={`${inputClass} flex-1`}
          value={importUrl}
          onChange={(e) => setImportUrl(e.target.value)}
          placeholder="Import from URL - paste a page URL to auto-fill fields..."
          onKeyDown={(e) => e.key === "Enter" && handleImport()}
        />
        <button
          onClick={handleImport}
          disabled={importing || !importUrl}
          className="rounded-lg bg-white/[0.06] border border-border px-4 py-2.5 text-sm text-body-strong hover:bg-white/[0.1] transition-colors disabled:opacity-40 whitespace-nowrap"
        >
          {importing ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Importing...
            </span>
          ) : (
            "Import from URL"
          )}
        </button>
      </div>
      {importError && (
        <p className="text-xs text-red-400 text-center">{importError}</p>
      )}

      {/* Main Tool - two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-start">
        {/* Left: Form */}
        <div className="rounded-2xl border border-border bg-bg-card p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-medium text-heading flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {activeType} Schema
            </h2>
            <button
              onClick={handleReset}
              className="text-xs text-body hover:text-heading transition-colors"
            >
              Reset
            </button>
          </div>

          {renderForm()}
        </div>

        {/* Right: Preview + Code + Validation */}
        <div className="space-y-4 lg:sticky lg:top-4">
          {/* Rich Result Preview */}
          {renderRichPreview()}

          {/* JSON-LD Output */}
          <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <span className="text-sm font-medium text-heading">JSON-LD Output</span>
              <div className="flex items-center gap-2">
                {errorCount === 0 && schema && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 font-medium">
                    Valid
                  </span>
                )}
                {errorCount > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-400/10 text-red-400 font-medium">
                    {errorCount} error{errorCount > 1 ? "s" : ""}
                  </span>
                )}
                {warningCount > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 font-medium">
                    {warningCount} warning{warningCount > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </div>
            <div className="max-h-[500px] overflow-auto bg-[#0d1117]">
              {schema ? (
                <pre
                  ref={codeRef}
                  className="text-xs font-mono p-5 whitespace-pre-wrap break-all leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: highlightJSON(jsonOutput) }}
                />
              ) : (
                <p className="text-sm text-white/20 text-center py-12">
                  Fill in the fields to generate {activeType} schema...
                </p>
              )}
            </div>

            {/* Action buttons */}
            {schema && (
              <div className="flex items-center gap-2 px-5 py-3 border-t border-border bg-white/[0.02]">
                <button
                  onClick={() => handleCopy(jsonOutput, "json")}
                  className="flex-1 rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white hover:bg-accent/90 transition-colors"
                >
                  {copied === "json" ? "Copied!" : "Copy JSON-LD"}
                </button>
                <button
                  onClick={() => handleCopy(scriptTag, "script")}
                  className="flex-1 rounded-lg bg-white/[0.06] border border-border px-3 py-2 text-xs font-medium text-body-strong hover:bg-white/[0.1] transition-colors"
                >
                  {copied === "script" ? "Copied!" : "Copy as <script> tag"}
                </button>
                <button
                  onClick={handleDownload}
                  className="rounded-lg bg-white/[0.06] border border-border px-3 py-2 text-xs font-medium text-body-strong hover:bg-white/[0.1] transition-colors"
                  title="Download .json"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    if (!schema) return;
                    try {
                      const parsed = JSON.parse(jsonOutput);
                      const fields = Object.entries(parsed).filter(
                        ([k]) => k !== "@context" && k !== "@type"
                      );
                      exportToPDF({
                        title: `Schema Generator - ${activeType}`,
                        data: fields.map(([key, value]) => ({
                          Property: key,
                          Value: typeof value === "object" ? JSON.stringify(value) : String(value),
                        })),
                      });
                    } catch {
                      exportToPDF({
                        title: `Schema Generator - ${activeType}`,
                        data: [{ "JSON-LD": jsonOutput }],
                      });
                    }
                  }}
                  className="rounded-lg bg-white/[0.06] border border-border px-3 py-2 text-xs font-medium text-body-strong hover:bg-white/[0.1] transition-colors"
                  title="Export as PDF"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" />
                    <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Validation Panel */}
          <AnimatePresence>
            {(schema || showValidation) && validations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="rounded-2xl border border-border bg-bg-card p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-heading">Validation</h3>
                  <div className="flex items-center gap-3 text-xs">
                    {validCount > 0 && <span className="text-green-400">{validCount} valid</span>}
                    {warningCount > 0 && <span className="text-yellow-400">{warningCount} warnings</span>}
                    {errorCount > 0 && <span className="text-red-400">{errorCount} errors</span>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  {validations
                    .filter((v) => v.severity === "error")
                    .map((v) => (
                      <div key={v.field + v.severity} className="flex items-center gap-2 text-xs">
                        <svg className="w-3.5 h-3.5 text-red-400 shrink-0" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-red-400">{v.message}</span>
                      </div>
                    ))}
                  {validations
                    .filter((v) => v.severity === "warning")
                    .map((v) => (
                      <div key={v.field + v.severity} className="flex items-center gap-2 text-xs">
                        <svg className="w-3.5 h-3.5 text-yellow-400 shrink-0" viewBox="0 0 20 20" fill="none">
                          <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <span className="text-yellow-400">{v.message}</span>
                      </div>
                    ))}
                  {validations
                    .filter((v) => v.severity === "valid")
                    .map((v) => (
                      <div key={v.field + v.severity} className="flex items-center gap-2 text-xs">
                        <svg className="w-3.5 h-3.5 text-green-400 shrink-0" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-green-400">{v.message}</span>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center max-w-[700px] mx-auto">
        <h3 className="text-lg font-medium text-heading mb-2">{t.ctaBottom}</h3>
        <p className="text-sm text-body mb-6">{t.ctaBottomDesc}</p>
        <a
          href="https://d2fqmklduf8wng.typeform.com/to/cFBjPOkN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
        >
          {t.ctaBottomButton}
        </a>
      </div>
    </div>
  );
}
