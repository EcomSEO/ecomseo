import type { Locale } from "../../config";

/* --- Crash Course Index Page --- */
export const crashCoursePageT: Record<Locale, {
  heading: string;
  subtitle: string;
  readMore: string;
  entries: {
    date: string;
    title: string;
    badge: string;
    content: string;
  }[];
}> = {
  en: {
    heading: "Beginner to Hero - Ecommerce SEO Crash Course",
    subtitle: "What you should know from an absolute beginner to start ranking your site seriously on Search Engines.",
    readMore: "Read more",
    entries: [
      {
        date: "January 23, 2025",
        title: "Performance Boost & New Features",
        badge: "SEO 101",
        content: "Learn the fundamentals of SEO performance and discover new features that can help your ecommerce store rank higher in search results.",
      },
      {
        date: "January 23, 2025",
        title: "Performance Boost & New Features",
        badge: "SEO 101",
        content: "Continuing our series on ecommerce SEO basics with advanced techniques for optimizing your product and collection pages.",
      },
    ],
  },
  de: {
    heading: "Vom Anfanger zum Profi - E-Commerce-SEO-Crashkurs",
    subtitle: "Was Sie als absoluter Anfanger wissen sollten, um Ihre Website ernsthaft in Suchmaschinen zu platzieren.",
    readMore: "Weiterlesen",
    entries: [
      {
        date: "23. Januar 2025",
        title: "Performance-Boost & neue Funktionen",
        badge: "SEO 101",
        content: "Lernen Sie die Grundlagen der SEO-Performance und entdecken Sie neue Funktionen, die Ihrem E-Commerce-Shop helfen, in den Suchergebnissen besser zu ranken.",
      },
      {
        date: "23. Januar 2025",
        title: "Performance-Boost & neue Funktionen",
        badge: "SEO 101",
        content: "Wir setzen unsere Reihe zu E-Commerce-SEO-Grundlagen mit fortgeschrittenen Techniken zur Optimierung Ihrer Produkt- und Kategorieseiten fort.",
      },
    ],
  },
  fr: {
    heading: "Du debutant au pro - Cours accelere SEO e-commerce",
    subtitle: "Ce que vous devez savoir en tant que debutant absolu pour commencer a positionner serieusement votre site sur les moteurs de recherche.",
    readMore: "Lire la suite",
    entries: [
      {
        date: "23 janvier 2025",
        title: "Boost de performance & nouvelles fonctionnalites",
        badge: "SEO 101",
        content: "Apprenez les fondamentaux de la performance SEO et decouvrez de nouvelles fonctionnalites pour aider votre boutique e-commerce a mieux se classer dans les resultats de recherche.",
      },
      {
        date: "23 janvier 2025",
        title: "Boost de performance & nouvelles fonctionnalites",
        badge: "SEO 101",
        content: "Nous poursuivons notre serie sur les bases du SEO e-commerce avec des techniques avancees pour optimiser vos pages produits et categories.",
      },
    ],
  },
  es: {
    heading: "De principiante a experto - Curso intensivo de SEO e-commerce",
    subtitle: "Lo que debes saber como principiante absoluto para empezar a posicionar tu sitio seriamente en los motores de busqueda.",
    readMore: "Leer mas",
    entries: [
      {
        date: "23 de enero de 2025",
        title: "Impulso de rendimiento y nuevas funciones",
        badge: "SEO 101",
        content: "Aprende los fundamentos del rendimiento SEO y descubre nuevas funciones que pueden ayudar a tu tienda e-commerce a posicionarse mejor en los resultados de busqueda.",
      },
      {
        date: "23 de enero de 2025",
        title: "Impulso de rendimiento y nuevas funciones",
        badge: "SEO 101",
        content: "Continuamos nuestra serie sobre las bases del SEO e-commerce con tecnicas avanzadas para optimizar tus paginas de producto y de coleccion.",
      },
    ],
  },
  it: {
    heading: "Da principiante a esperto - Corso intensivo SEO e-commerce",
    subtitle: "Quello che devi sapere da principiante assoluto per iniziare a posizionare seriamente il tuo sito sui motori di ricerca.",
    readMore: "Leggi di piu",
    entries: [
      {
        date: "23 gennaio 2025",
        title: "Boost delle prestazioni e nuove funzionalita",
        badge: "SEO 101",
        content: "Impara i fondamenti delle prestazioni SEO e scopri nuove funzionalita che possono aiutare il tuo store e-commerce a posizionarsi meglio nei risultati di ricerca.",
      },
      {
        date: "23 gennaio 2025",
        title: "Boost delle prestazioni e nuove funzionalita",
        badge: "SEO 101",
        content: "Proseguiamo la nostra serie sulle basi del SEO e-commerce con tecniche avanzate per ottimizzare le pagine prodotto e le pagine di categoria.",
      },
    ],
  },
  nl: {
    heading: "Van beginner tot expert - E-commerce SEO-spoedcursus",
    subtitle: "Wat je als absolute beginner moet weten om je site serieus te laten ranken in zoekmachines.",
    readMore: "Lees meer",
    entries: [
      {
        date: "23 januari 2025",
        title: "Prestatieboost & nieuwe functies",
        badge: "SEO 101",
        content: "Leer de basisprincipes van SEO-prestaties en ontdek nieuwe functies die je e-commercewinkel kunnen helpen hoger te ranken in zoekresultaten.",
      },
      {
        date: "23 januari 2025",
        title: "Prestatieboost & nieuwe functies",
        badge: "SEO 101",
        content: "We vervolgen onze reeks over de basis van e-commerce SEO met geavanceerde technieken voor het optimaliseren van je product- en collectiepagina's.",
      },
    ],
  },
};

/* --- Crash Course Changelog Page --- */
export const changelogPageT: Record<Locale, {
  back: string;
  title: string;
  date: string;
  content: string;
  nextStep: string;
  nextTitle: string;
}> = {
  en: {
    back: "Back",
    title: "Performance Boost & New Features",
    date: "January 23, 2025",
    content: "This crash course entry covers the fundamentals of SEO performance optimization for ecommerce stores. Learn about Core Web Vitals, page speed optimization, and new features that can help your store rank higher in search results.",
    nextStep: "Next step",
    nextTitle: "Doing Keyword Research",
  },
  de: {
    back: "Zuruck",
    title: "Performance-Boost & neue Funktionen",
    date: "23. Januar 2025",
    content: "Dieser Crashkurs-Beitrag behandelt die Grundlagen der SEO-Performance-Optimierung fur E-Commerce-Shops. Erfahren Sie mehr uber Core Web Vitals, Seitengeschwindigkeitsoptimierung und neue Funktionen, die Ihrem Shop helfen, in den Suchergebnissen besser zu ranken.",
    nextStep: "Nachster Schritt",
    nextTitle: "Keyword-Recherche durchfuhren",
  },
  fr: {
    back: "Retour",
    title: "Boost de performance & nouvelles fonctionnalites",
    date: "23 janvier 2025",
    content: "Cette lecon du cours accelere couvre les fondamentaux de l'optimisation des performances SEO pour les boutiques e-commerce. Decouvrez les Core Web Vitals, l'optimisation de la vitesse de chargement et les nouvelles fonctionnalites pour aider votre boutique a mieux se classer.",
    nextStep: "Prochaine etape",
    nextTitle: "Faire une recherche de mots-cles",
  },
  es: {
    back: "Volver",
    title: "Impulso de rendimiento y nuevas funciones",
    date: "23 de enero de 2025",
    content: "Esta leccion del curso intensivo cubre los fundamentos de la optimizacion del rendimiento SEO para tiendas e-commerce. Aprende sobre Core Web Vitals, optimizacion de la velocidad de carga y nuevas funciones que pueden ayudar a tu tienda a posicionarse mejor.",
    nextStep: "Siguiente paso",
    nextTitle: "Hacer investigacion de palabras clave",
  },
  it: {
    back: "Indietro",
    title: "Boost delle prestazioni e nuove funzionalita",
    date: "23 gennaio 2025",
    content: "Questa lezione del corso intensivo copre i fondamenti dell'ottimizzazione delle prestazioni SEO per gli store e-commerce. Scopri i Core Web Vitals, l'ottimizzazione della velocita di caricamento e le nuove funzionalita che possono aiutare il tuo store a posizionarsi meglio.",
    nextStep: "Prossimo passo",
    nextTitle: "Fare ricerca di parole chiave",
  },
  nl: {
    back: "Terug",
    title: "Prestatieboost & nieuwe functies",
    date: "23 januari 2025",
    content: "Deze spoedcursusles behandelt de basisprincipes van SEO-prestatieoptimalisatie voor e-commercewinkels. Leer over Core Web Vitals, paginasnelheidsoptimalisatie en nieuwe functies die je winkel kunnen helpen hoger te ranken in zoekresultaten.",
    nextStep: "Volgende stap",
    nextTitle: "Zoekwoordenonderzoek doen",
  },
};
