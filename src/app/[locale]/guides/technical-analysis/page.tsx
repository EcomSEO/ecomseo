import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesTechnicalAnalysisT } from "@/lib/i18n/translations/guidesTechnicalAnalysis";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "Technical SEO",
    heading: "Technical SEO Analysis for Ecommerce",
    intro:
      "Technical SEO problems kill rankings before you optimize anything else. This guide covers the structural issues most ecommerce stores carry — crawl budget waste, faceted navigation, duplicate content from product variants, and Core Web Vitals failures — with specific steps to fix each one.",
    readTime: "12 min read",
  },
  de: {
    badge: "Technisches SEO",
    heading: "Technische SEO-Analyse für Ecommerce",
    intro:
      "Technische SEO-Probleme vernichten Rankings, bevor man andere Optimierungen vornehmen kann. Dieser Leitfaden behandelt strukturelle Probleme vieler Shops — verschwendetes Crawl-Budget, Facettennavigation, Duplicate Content und Core Web Vitals — mit konkreten Lösungsschritten.",
    readTime: "12 Min. Lesezeit",
  },
  fr: {
    badge: "SEO Technique",
    heading: "Analyse SEO Technique pour l'E-commerce",
    intro:
      "Les problèmes techniques de SEO détruisent les classements avant toute autre optimisation. Ce guide couvre les problèmes structurels des boutiques — budget de crawl, navigation à facettes, contenu dupliqué et Core Web Vitals — avec des étapes concrètes pour les corriger.",
    readTime: "12 min de lecture",
  },
  es: {
    badge: "SEO Técnico",
    heading: "Análisis SEO Técnico para E-commerce",
    intro:
      "Los problemas técnicos de SEO destruyen las posiciones antes de cualquier otra optimización. Esta guía cubre los problemas estructurales más comunes — presupuesto de rastreo, navegación por facetas, contenido duplicado y Core Web Vitals — con pasos concretos para solucionarlos.",
    readTime: "12 min de lectura",
  },
  it: {
    badge: "SEO Tecnico",
    heading: "Analisi SEO Tecnica per E-commerce",
    intro:
      "I problemi tecnici SEO distruggono le posizioni prima di qualsiasi altra ottimizzazione. Questa guida copre i problemi strutturali più comuni — budget di scansione, navigazione a faccette, contenuto duplicato e Core Web Vitals — con passaggi concreti per risolverli.",
    readTime: "12 min di lettura",
  },
  nl: {
    badge: "Technische SEO",
    heading: "Technische SEO-analyse voor E-commerce",
    intro:
      "Technische SEO-problemen vernietigen posities voordat je andere optimalisaties uitvoert. Deze gids behandelt de structurele problemen van de meeste webwinkels — crawlbudget, gefacetteerde navigatie, duplicaatcontent en Core Web Vitals — met concrete stappen om ze op te lossen.",
    readTime: "12 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/technical-analysis");
}

export default async function TechnicalAnalysisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesTechnicalAnalysisT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/technical-analysis",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Technical Analysis", path: "/guides/technical-analysis" },
        ],
      }}
    />
  );
}
