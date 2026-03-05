import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesSerpDominationT } from "@/lib/i18n/translations/guidesSerpDomination";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "Advanced SEO",
    heading: "SERP Domination for Ecommerce",
    intro:
      "Position 1 is not the ceiling — it is the floor. Ecommerce stores that win in search occupy multiple SERP features simultaneously: Google Shopping, featured snippets, image packs, sitelinks, and People Also Ask. This guide shows you how to claim more of the results page than any single competitor.",
    readTime: "10 min read",
  },
  de: {
    badge: "Fortgeschrittenes SEO",
    heading: "SERP-Dominanz für Ecommerce",
    intro:
      "Position 1 ist nicht die Obergrenze — sie ist der Ausgangspunkt. Shops, die in der Suche gewinnen, besetzen mehrere SERP-Features gleichzeitig: Google Shopping, Featured Snippets, Bildpakete, Sitelinks und People Also Ask. Dieser Leitfaden zeigt, wie Sie mehr Platz auf der Ergebnisseite einnehmen.",
    readTime: "10 Min. Lesezeit",
  },
  fr: {
    badge: "SEO Avancé",
    heading: "Domination des SERP pour l'E-commerce",
    intro:
      "La position 1 n'est pas le plafond — c'est le plancher. Les boutiques qui gagnent en recherche occupent plusieurs fonctionnalités SERP simultanément : Google Shopping, extraits enrichis, packs d'images, liens annexes et questions connexes. Ce guide montre comment occuper plus de place sur la page de résultats.",
    readTime: "10 min de lecture",
  },
  es: {
    badge: "SEO Avanzado",
    heading: "Dominación de SERPs para E-commerce",
    intro:
      "La posición 1 no es el techo — es el suelo. Las tiendas que ganan en búsqueda ocupan múltiples features de las SERPs simultáneamente: Google Shopping, fragmentos destacados, paquetes de imágenes, sitelinks y Preguntas Frecuentes. Esta guía muestra cómo ocupar más espacio en la página de resultados.",
    readTime: "10 min de lectura",
  },
  it: {
    badge: "SEO Avanzato",
    heading: "Dominanza delle SERP per E-commerce",
    intro:
      "La posizione 1 non è il soffitto — è il pavimento. I negozi che vincono nelle ricerche occupano più funzionalità SERP contemporaneamente: Google Shopping, featured snippet, image pack, sitelink e Ricerche correlate. Questa guida mostra come occupare più spazio nella pagina dei risultati.",
    readTime: "10 min di lettura",
  },
  nl: {
    badge: "Geavanceerde SEO",
    heading: "SERP Dominantie voor E-commerce",
    intro:
      "Positie 1 is niet het plafond — het is de vloer. Webwinkels die winnen in zoekopdrachten bezetten meerdere SERP-functies tegelijk: Google Shopping, featured snippets, afbeeldingspakketten, sitelinks en Mensen vragen ook. Deze gids laat zien hoe je meer van de resultatenpagina kunt claimen.",
    readTime: "10 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/serp-domination");
}

export default async function SerpDominationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesSerpDominationT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/serp-domination",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "SERP Domination", path: "/guides/serp-domination" },
        ],
      }}
    />
  );
}
