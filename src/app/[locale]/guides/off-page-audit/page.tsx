import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesOffPageAuditT } from "@/lib/i18n/translations/guidesOffPageAudit";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "Off-Page SEO",
    heading: "Off-Page SEO Audit for Ecommerce",
    intro:
      "Your backlink profile is either helping or hurting your rankings right now. This guide shows you how to audit what you have — identifying toxic links, analysing anchor text distribution, benchmarking against competitors, and finding the link opportunities worth pursuing.",
    readTime: "10 min read",
  },
  de: {
    badge: "Off-Page-SEO",
    heading: "Off-Page-SEO-Audit für Ecommerce",
    intro:
      "Ihr Backlink-Profil beeinflusst Ihre Rankings gerade jetzt — positiv oder negativ. Dieser Leitfaden zeigt, wie man es prüft: toxische Links identifizieren, Ankertextverteilung analysieren, Wettbewerber vergleichen und lohnende Linkchancen finden.",
    readTime: "10 Min. Lesezeit",
  },
  fr: {
    badge: "SEO Off-Page",
    heading: "Audit SEO Off-Page pour l'E-commerce",
    intro:
      "Votre profil de backlinks influence vos classements en ce moment même. Ce guide vous montre comment l'auditer — identifier les liens toxiques, analyser la distribution des textes d'ancrage, comparer les concurrents et trouver les opportunités de liens qui valent la peine d'être poursuivies.",
    readTime: "10 min de lecture",
  },
  es: {
    badge: "SEO Off-Page",
    heading: "Auditoría SEO Off-Page para E-commerce",
    intro:
      "Tu perfil de backlinks está afectando tus posiciones ahora mismo. Esta guía te muestra cómo auditarlo — identificar enlaces tóxicos, analizar la distribución del anchor text, comparar con competidores y encontrar las oportunidades de enlaces que merece la pena perseguir.",
    readTime: "10 min de lectura",
  },
  it: {
    badge: "SEO Off-Page",
    heading: "Audit SEO Off-Page per E-commerce",
    intro:
      "Il tuo profilo backlink sta influenzando le tue posizioni in questo momento. Questa guida ti mostra come auditarlo — identificare link tossici, analizzare la distribuzione degli anchor text, confrontarti con i concorrenti e trovare le opportunità di link che vale la pena perseguire.",
    readTime: "10 min di lettura",
  },
  nl: {
    badge: "Off-Page SEO",
    heading: "Off-Page SEO Audit voor E-commerce",
    intro:
      "Je backlinkprofiel beïnvloedt je posities op dit moment. Deze gids laat je zien hoe je het kunt auditen — toxische links identificeren, ankertekstverdeling analyseren, concurrenten benchmarken en de linkopportuniteiten vinden die de moeite waard zijn.",
    readTime: "10 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/off-page-audit");
}

export default async function OffPageAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesOffPageAuditT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/off-page-audit",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Off-Page Audit", path: "/guides/off-page-audit" },
        ],
      }}
    />
  );
}
