import type { Locale } from "../config";

export const intentMatchingToolT: Record<Locale, {
  badge: string;
  heading: string;
  subtitle: string;
  label: string;
  placeholder: string;
  analyze: string;
  resultsPlaceholder: string;
}> = {
  en: {
    badge: "AI Tool",
    heading: "Intent Matching Tool",
    subtitle: "Analyze search intent for your ecommerce keywords. Understand what your customers are looking for and optimize your content accordingly.",
    label: "Enter your keyword",
    placeholder: "e.g. organic skincare products",
    analyze: "Analyze",
    resultsPlaceholder: "Results will appear here after analysis",
  },
  de: {
    badge: "KI-Tool",
    heading: "Intent-Matching-Tool",
    subtitle: "Analysieren Sie die Suchintention Ihrer E-Commerce-Keywords. Verstehen Sie, wonach Ihre Kunden suchen, und optimieren Sie Ihre Inhalte entsprechend.",
    label: "Keyword eingeben",
    placeholder: "z. B. Bio-Hautpflegeprodukte",
    analyze: "Analysieren",
    resultsPlaceholder: "Ergebnisse erscheinen hier nach der Analyse",
  },
  fr: {
    badge: "Outil IA",
    heading: "Outil de correspondance d'intention",
    subtitle: "Analysez l'intention de recherche de vos mots-cles e-commerce. Comprenez ce que vos clients recherchent et optimisez votre contenu en consequence.",
    label: "Saisissez votre mot-cle",
    placeholder: "ex. produits de soin bio",
    analyze: "Analyser",
    resultsPlaceholder: "Les resultats apparaitront ici apres l'analyse",
  },
  es: {
    badge: "Herramienta IA",
    heading: "Herramienta de coincidencia de intencion",
    subtitle: "Analiza la intencion de busqueda de tus palabras clave de ecommerce. Comprende lo que buscan tus clientes y optimiza tu contenido en consecuencia.",
    label: "Introduce tu palabra clave",
    placeholder: "ej. productos de cuidado de piel organicos",
    analyze: "Analizar",
    resultsPlaceholder: "Los resultados apareceran aqui tras el analisis",
  },
  it: {
    badge: "Strumento IA",
    heading: "Strumento di corrispondenza dell'intento",
    subtitle: "Analizza l'intento di ricerca delle tue keyword e-commerce. Comprendi cosa cercano i tuoi clienti e ottimizza i tuoi contenuti di conseguenza.",
    label: "Inserisci la tua keyword",
    placeholder: "es. prodotti skincare biologici",
    analyze: "Analizza",
    resultsPlaceholder: "I risultati appariranno qui dopo l'analisi",
  },
  nl: {
    badge: "AI-tool",
    heading: "Intentie-matching tool",
    subtitle: "Analyseer de zoekintentie van je e-commerce zoekwoorden. Begrijp waar je klanten naar zoeken en optimaliseer je content dienovereenkomstig.",
    label: "Voer je zoekwoord in",
    placeholder: "bijv. biologische huidverzorgingsproducten",
    analyze: "Analyseren",
    resultsPlaceholder: "Resultaten verschijnen hier na de analyse",
  },
};
