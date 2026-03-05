import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesRankingChatgptT } from "@/lib/i18n/translations/guidesRankingChatgpt";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "AI Search",
    heading: "Ranking in ChatGPT & AI Search",
    intro:
      "AI search tools — ChatGPT, Perplexity, Google AI Overviews — now send traffic to ecommerce stores. Getting cited by these tools requires different signals than classic Google SEO. This guide covers how AI models evaluate sources, what E-E-A-T signals matter most, and the specific steps to get your store mentioned.",
    readTime: "10 min read",
  },
  de: {
    badge: "KI-Suche",
    heading: "Ranking in ChatGPT & KI-Suche",
    intro:
      "KI-Suchtools — ChatGPT, Perplexity, Google AI Overviews — senden nun Traffic an Ecommerce-Shops. Um von diesen Tools zitiert zu werden, sind andere Signale nötig als beim klassischen Google-SEO. Dieser Leitfaden erklärt, wie KI-Modelle Quellen bewerten und welche Schritte Ihren Shop sichtbar machen.",
    readTime: "10 Min. Lesezeit",
  },
  fr: {
    badge: "Recherche IA",
    heading: "Se Positionner dans ChatGPT et la Recherche IA",
    intro:
      "Les outils de recherche IA — ChatGPT, Perplexity, Google AI Overviews — envoient désormais du trafic vers les boutiques e-commerce. Être cité par ces outils nécessite des signaux différents du SEO Google classique. Ce guide couvre comment les modèles IA évaluent les sources et les étapes concrètes pour y figurer.",
    readTime: "10 min de lecture",
  },
  es: {
    badge: "Búsqueda IA",
    heading: "Posicionamiento en ChatGPT y Búsqueda IA",
    intro:
      "Las herramientas de búsqueda con IA — ChatGPT, Perplexity, Google AI Overviews — ya envían tráfico a tiendas online. Ser citado por estas herramientas requiere señales diferentes al SEO clásico de Google. Esta guía explica cómo los modelos IA evalúan las fuentes y los pasos concretos para aparecer.",
    readTime: "10 min de lectura",
  },
  it: {
    badge: "Ricerca AI",
    heading: "Posizionarsi in ChatGPT e nella Ricerca AI",
    intro:
      "Gli strumenti di ricerca AI — ChatGPT, Perplexity, Google AI Overviews — ora inviano traffico agli e-commerce. Essere citati da questi strumenti richiede segnali diversi dal SEO Google classico. Questa guida spiega come i modelli AI valutano le fonti e i passi concreti per essere menzionati.",
    readTime: "10 min di lettura",
  },
  nl: {
    badge: "AI-zoekopdrachten",
    heading: "Ranken in ChatGPT & AI-zoekopdrachten",
    intro:
      "AI-zoektools — ChatGPT, Perplexity, Google AI Overviews — sturen nu verkeer naar webwinkels. Geciteerd worden door deze tools vereist andere signalen dan klassieke Google-SEO. Deze gids legt uit hoe AI-modellen bronnen evalueren en welke stappen nodig zijn om je winkel te laten vermelden.",
    readTime: "10 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/ranking-chatgpt");
}

export default async function RankingChatgptPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesRankingChatgptT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/ranking-chatgpt",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Ranking in ChatGPT & AI Search", path: "/guides/ranking-chatgpt" },
        ],
      }}
    />
  );
}
