import type { Locale } from "../config";
import type { BlogCategory } from "@/lib/blog/types";

export type BlogTranslations = {
  heading: string;
  subheading: string;
  allCategory: string;
  readMore: string;
  minRead: string;
  publishedOn: string;
  byAuthor: string;
  backToBlog: string;
  relatedArticles: string;
  tableOfContents: string;
  categories: BlogCategory[];
  breadcrumbHome: string;
  breadcrumbBlog: string;
};

export const blogTranslations: Record<Locale, BlogTranslations> = {
  en: {
    heading: "Ecommerce SEO articles",
    subheading: "Practical SEO advice for online stores. No fluff, just what works.",
    allCategory: "All",
    readMore: "Read article",
    minRead: "min read",
    publishedOn: "Published",
    byAuthor: "by",
    backToBlog: "Back to articles",
    relatedArticles: "Related articles",
    tableOfContents: "In this article",
    categories: [
      { id: "strategy", label: "Strategy" },
      { id: "technical", label: "Technical" },
      { id: "on-page", label: "On-page" },
      { id: "link-building", label: "Link building" },
      { id: "platforms", label: "Platforms" },
      { id: "services", label: "Services" },
      { id: "industry", label: "Industry" },
    ],
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
  },
  de: {
    heading: "E-Commerce-SEO-Artikel",
    subheading: "Praktische SEO-Tipps fur Online-Shops. Kein Blabla, nur was funktioniert.",
    allCategory: "Alle",
    readMore: "Artikel lesen",
    minRead: "Min. Lesezeit",
    publishedOn: "Veroffentlicht",
    byAuthor: "von",
    backToBlog: "Zuruck zu Artikeln",
    relatedArticles: "Verwandte Artikel",
    tableOfContents: "In diesem Artikel",
    categories: [
      { id: "strategy", label: "Strategie" },
      { id: "technical", label: "Technik" },
      { id: "on-page", label: "On-Page" },
      { id: "link-building", label: "Linkaufbau" },
      { id: "platforms", label: "Plattformen" },
      { id: "services", label: "Dienstleistungen" },
      { id: "industry", label: "Branche" },
    ],
    breadcrumbHome: "Startseite",
    breadcrumbBlog: "Blog",
  },
  fr: {
    heading: "Articles SEO e-commerce",
    subheading: "Conseils SEO pratiques pour les boutiques en ligne. Pas de blabla, juste ce qui marche.",
    allCategory: "Tous",
    readMore: "Lire l'article",
    minRead: "min de lecture",
    publishedOn: "Publie",
    byAuthor: "par",
    backToBlog: "Retour aux articles",
    relatedArticles: "Articles lies",
    tableOfContents: "Dans cet article",
    categories: [
      { id: "strategy", label: "Strategie" },
      { id: "technical", label: "Technique" },
      { id: "on-page", label: "On-page" },
      { id: "link-building", label: "Netlinking" },
      { id: "platforms", label: "Plateformes" },
      { id: "services", label: "Services" },
      { id: "industry", label: "Secteur" },
    ],
    breadcrumbHome: "Accueil",
    breadcrumbBlog: "Blog",
  },
  es: {
    heading: "Articulos de SEO e-commerce",
    subheading: "Consejos SEO practicos para tiendas online. Sin relleno, solo lo que funciona.",
    allCategory: "Todos",
    readMore: "Leer articulo",
    minRead: "min de lectura",
    publishedOn: "Publicado",
    byAuthor: "por",
    backToBlog: "Volver a articulos",
    relatedArticles: "Articulos relacionados",
    tableOfContents: "En este articulo",
    categories: [
      { id: "strategy", label: "Estrategia" },
      { id: "technical", label: "Tecnico" },
      { id: "on-page", label: "On-page" },
      { id: "link-building", label: "Link building" },
      { id: "platforms", label: "Plataformas" },
      { id: "services", label: "Servicios" },
      { id: "industry", label: "Sector" },
    ],
    breadcrumbHome: "Inicio",
    breadcrumbBlog: "Blog",
  },
  it: {
    heading: "Articoli SEO e-commerce",
    subheading: "Consigli SEO pratici per negozi online. Niente fuffa, solo cio che funziona.",
    allCategory: "Tutti",
    readMore: "Leggi articolo",
    minRead: "min di lettura",
    publishedOn: "Pubblicato",
    byAuthor: "di",
    backToBlog: "Torna agli articoli",
    relatedArticles: "Articoli correlati",
    tableOfContents: "In questo articolo",
    categories: [
      { id: "strategy", label: "Strategia" },
      { id: "technical", label: "Tecnico" },
      { id: "on-page", label: "On-page" },
      { id: "link-building", label: "Link building" },
      { id: "platforms", label: "Piattaforme" },
      { id: "services", label: "Servizi" },
      { id: "industry", label: "Settore" },
    ],
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
  },
  nl: {
    heading: "E-commerce SEO-artikelen",
    subheading: "Praktisch SEO-advies voor webwinkels. Geen onzin, alleen wat werkt.",
    allCategory: "Alle",
    readMore: "Lees artikel",
    minRead: "min leestijd",
    publishedOn: "Gepubliceerd",
    byAuthor: "door",
    backToBlog: "Terug naar artikelen",
    relatedArticles: "Gerelateerde artikelen",
    tableOfContents: "In dit artikel",
    categories: [
      { id: "strategy", label: "Strategie" },
      { id: "technical", label: "Technisch" },
      { id: "on-page", label: "On-page" },
      { id: "link-building", label: "Linkbuilding" },
      { id: "platforms", label: "Platformen" },
      { id: "services", label: "Diensten" },
      { id: "industry", label: "Sector" },
    ],
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
  },
};
