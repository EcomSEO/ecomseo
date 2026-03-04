import type { Locale } from "../../config";

export const searchProductDiscoveryT: Record<Locale, {
  badge: string;
  heading: string;
  subtitle: string;
  cta: string;
  facts: string[];
}> = {
  en: {
    badge: "AI Shopping",
    heading: "Get your products on LLM's like ChatGPT before your competitors do",
    subtitle: "Your products are invisible on AI, you can do something about it today. Perhaps the biggest opportunity in 2025.",
    cta: "Get a free audit",
    facts: [
      "1 billion+ searches hit ChatGPT every week",
      "Only 5 product cards show per query -- WIN or DISAPPEAR",
      "Early movers grab free clicks before CPC auctions roll out",
    ],
  },
  de: {
    badge: "KI-Shopping",
    heading: "Bringen Sie Ihre Produkte auf LLMs wie ChatGPT, bevor Ihre Wettbewerber es tun",
    subtitle: "Ihre Produkte sind auf KI unsichtbar, Sie konnen heute etwas dagegen tun. Vielleicht die grosste Chance in 2025.",
    cta: "Kostenloses Audit erhalten",
    facts: [
      "Uber 1 Milliarde Suchanfragen pro Woche bei ChatGPT",
      "Nur 5 Produktkarten pro Anfrage -- GEWINNEN oder VERSCHWINDEN",
      "Fruhe Vorreiter sichern sich kostenlose Klicks, bevor CPC-Auktionen starten",
    ],
  },
  fr: {
    badge: "Shopping IA",
    heading: "Placez vos produits sur les LLM comme ChatGPT avant vos concurrents",
    subtitle: "Vos produits sont invisibles sur l'IA, vous pouvez agir des aujourd'hui. Peut-etre la plus grande opportunite de 2025.",
    cta: "Obtenir un audit gratuit",
    facts: [
      "Plus d'1 milliard de recherches par semaine sur ChatGPT",
      "Seulement 5 fiches produit affichees par requete -- GAGNEZ ou DISPARAISSEZ",
      "Les premiers arrivants captent des clics gratuits avant le lancement des encheres CPC",
    ],
  },
  es: {
    badge: "Compras con IA",
    heading: "Posiciona tus productos en LLMs como ChatGPT antes que tu competencia",
    subtitle: "Tus productos son invisibles en la IA, puedes hacer algo al respecto hoy. Quiza la mayor oportunidad en 2025.",
    cta: "Obtener una auditoria gratuita",
    facts: [
      "Mas de 1.000 millones de busquedas semanales en ChatGPT",
      "Solo 5 fichas de producto por consulta -- GANA o DESAPARECE",
      "Los pioneros capturan clics gratuitos antes de que lleguen las subastas CPC",
    ],
  },
  it: {
    badge: "Shopping IA",
    heading: "Porta i tuoi prodotti sugli LLM come ChatGPT prima dei tuoi concorrenti",
    subtitle: "I tuoi prodotti sono invisibili sull'IA, puoi fare qualcosa oggi stesso. Forse la piu grande opportunita del 2025.",
    cta: "Ottieni un audit gratuito",
    facts: [
      "Oltre 1 miliardo di ricerche a settimana su ChatGPT",
      "Solo 5 schede prodotto per query -- VINCI o SPARISCI",
      "I primi arrivati ottengono clic gratuiti prima che partano le aste CPC",
    ],
  },
  nl: {
    badge: "AI-shopping",
    heading: "Zet je producten op LLM's zoals ChatGPT voordat je concurrenten het doen",
    subtitle: "Je producten zijn onzichtbaar op AI, je kunt er vandaag nog iets aan doen. Misschien wel de grootste kans van 2025.",
    cta: "Ontvang een gratis audit",
    facts: [
      "Meer dan 1 miljard zoekopdrachten per week op ChatGPT",
      "Slechts 5 productkaarten per zoekopdracht -- WIN of VERDWIJN",
      "Vroege adopters pakken gratis klikken voordat CPC-veilingen van start gaan",
    ],
  },
};
