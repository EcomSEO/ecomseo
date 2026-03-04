import type { Locale } from "../config";

export const caseStudyDetailT: Record<Locale, {
  niche: string;
  focus: string;
  metrics: string;
  date: string;
  imageAlt1: string;
  imageAlt2: string;
}> = {
  en: {
    niche: "Niche",
    focus: "Focus",
    metrics: "Metrics",
    date: "Date",
    imageAlt1: "Case study data",
    imageAlt2: "Case study results",
  },
  de: {
    niche: "Nische",
    focus: "Fokus",
    metrics: "Kennzahlen",
    date: "Datum",
    imageAlt1: "Fallstudie-Daten",
    imageAlt2: "Fallstudie-Ergebnisse",
  },
  fr: {
    niche: "Niche",
    focus: "Focus",
    metrics: "Indicateurs",
    date: "Date",
    imageAlt1: "Donnees de l'etude de cas",
    imageAlt2: "Resultats de l'etude de cas",
  },
  es: {
    niche: "Nicho",
    focus: "Enfoque",
    metrics: "Metricas",
    date: "Fecha",
    imageAlt1: "Datos del caso de estudio",
    imageAlt2: "Resultados del caso de estudio",
  },
  it: {
    niche: "Nicchia",
    focus: "Focus",
    metrics: "Metriche",
    date: "Data",
    imageAlt1: "Dati del caso studio",
    imageAlt2: "Risultati del caso studio",
  },
  nl: {
    niche: "Niche",
    focus: "Focus",
    metrics: "Statistieken",
    date: "Datum",
    imageAlt1: "Casestudy-gegevens",
    imageAlt2: "Casestudy-resultaten",
  },
};
