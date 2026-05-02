import type { Locale } from "@/lib/i18n/config";

export interface ToolPreviewStrings {
  badge: string;
  title: string;
  subtitle: string;
  alt: string;
  bullets: string[];
}

/**
 * Generic "What you'll see" preview strings, localized.
 * The tool name is interpolated into the title and alt text.
 */
const templates: Record<Locale, (toolName: string) => ToolPreviewStrings> = {
  en: (toolName) => ({
    badge: "WHAT YOU'LL SEE",
    title: `See exactly what the ${toolName} delivers`,
    subtitle: `A clear, actionable report in seconds. No signup. No email required. Watch the live preview below.`,
    alt: `${toolName} report preview showing the results layout, categories, and recommendations`,
    bullets: [
      "Instant results, no signup required",
      "Clear pass/fail breakdown with severity",
      "Actionable fix recommendations, prioritised",
      "Works with any ecommerce platform",
    ],
  }),
  de: (toolName) => ({
    badge: "DAS ERWARTET SIE",
    title: `So sehen die Ergebnisse vom ${toolName} aus`,
    subtitle: `Ein klarer, umsetzbarer Report in Sekunden. Keine Anmeldung. Keine E-Mail nötig. Sehen Sie sich die Live-Vorschau unten an.`,
    alt: `${toolName} Report Vorschau mit Ergebnis-Layout, Kategorien und Empfehlungen`,
    bullets: [
      "Sofortige Ergebnisse, keine Anmeldung nötig",
      "Klare Pass/Fail-Uebersicht mit Schweregrad",
      "Umsetzbare Fix-Empfehlungen, priorisiert",
      "Funktioniert mit jeder E-Commerce-Plattform",
    ],
  }),
  fr: (toolName) => ({
    badge: "CE QUE VOUS VERREZ",
    title: `Voyez exactement ce que l'${toolName} vous livre`,
    subtitle: `Un rapport clair et actionnable en quelques secondes. Sans inscription. Sans email requis. Regardez l'aperçu en direct ci-dessous.`,
    alt: `Aperçu du rapport ${toolName} montrant la disposition des résultats, les catégories et les recommandations`,
    bullets: [
      "Résultats instantanés, sans inscription",
      "Répartition claire réussi/échoué avec sévérité",
      "Recommandations de correction priorisées",
      "Compatible avec toute plateforme e-commerce",
    ],
  }),
  es: (toolName) => ({
    badge: "LO QUE VERÁS",
    title: `Mira exactamente lo que te da el ${toolName}`,
    subtitle: `Un informe claro y accionable en segundos. Sin registro. Sin email. Mira la vista previa en directo abajo.`,
    alt: `Vista previa del informe ${toolName} mostrando el layout de resultados, categorías y recomendaciones`,
    bullets: [
      "Resultados instantáneos, sin registro",
      "Desglose claro de pasado/fallado con severidad",
      "Recomendaciones de corrección priorizadas",
      "Funciona con cualquier plataforma e-commerce",
    ],
  }),
  it: (toolName) => ({
    badge: "COSA VEDRAI",
    title: `Guarda esattamente cosa ti offre il ${toolName}`,
    subtitle: `Un report chiaro e azionabile in pochi secondi. Senza registrazione. Senza email. Guarda l'anteprima live qui sotto.`,
    alt: `Anteprima del report ${toolName} che mostra il layout dei risultati, le categorie e le raccomandazioni`,
    bullets: [
      "Risultati istantanei, senza registrazione",
      "Chiara suddivisione passed/failed con severità",
      "Raccomandazioni di fix prioritizzate",
      "Funziona con qualsiasi piattaforma e-commerce",
    ],
  }),
  nl: (toolName) => ({
    badge: "DIT GA JE ZIEN",
    title: `Zie precies wat de ${toolName} oplevert`,
    subtitle: `Een duidelijk, bruikbaar rapport in seconden. Geen aanmelding. Geen email nodig. Bekijk de live preview hieronder.`,
    alt: `${toolName} rapport preview met het resultatenoverzicht, categorieën en aanbevelingen`,
    bullets: [
      "Directe resultaten, geen aanmelding nodig",
      "Duidelijke pass/fail opsplitsing met ernst",
      "Bruikbare fix-aanbevelingen, geprioriteerd",
      "Werkt met elk ecommerce platform",
    ],
  }),
};

export function getToolPreviewStrings(locale: Locale, toolName: string): ToolPreviewStrings {
  const fn = templates[locale] || templates.en;
  return fn(toolName);
}
