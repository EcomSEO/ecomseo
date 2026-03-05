import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesLinkBuildingTacticsT } from "@/lib/i18n/translations/guidesLinkBuildingTactics";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "Link Building",
    heading: "Link Building Tactics for Ecommerce",
    intro:
      "Ecommerce sites have structural link building advantages most SEOs ignore. Your suppliers want to link to you. Journalists need product sources. Bloggers want to review your products. This guide covers the tactics that actually work for online stores — without paying for links or burning your domain.",
    readTime: "11 min read",
  },
  de: {
    badge: "Linkaufbau",
    heading: "Linkaufbau-Taktiken für Ecommerce",
    intro:
      "Ecommerce-Shops haben strukturelle Linkaufbau-Vorteile, die die meisten SEOs ignorieren. Lieferanten wollen auf Sie verlinken. Journalisten brauchen Produktquellen. Blogger wollen Ihre Produkte rezensieren. Dieser Leitfaden behandelt die Taktiken, die für Onlineshops wirklich funktionieren.",
    readTime: "11 Min. Lesezeit",
  },
  fr: {
    badge: "Link Building",
    heading: "Tactiques de Link Building pour l'E-commerce",
    intro:
      "Les sites e-commerce disposent d'avantages structurels en matière de link building que la plupart des SEO ignorent. Vos fournisseurs veulent vous lier. Les journalistes ont besoin de sources de produits. Les blogueurs veulent évaluer vos produits. Ce guide couvre les tactiques qui fonctionnent réellement.",
    readTime: "11 min de lecture",
  },
  es: {
    badge: "Link Building",
    heading: "Tácticas de Link Building para E-commerce",
    intro:
      "Las tiendas online tienen ventajas estructurales en link building que la mayoría de los SEOs ignoran. Tus proveedores quieren enlazarte. Los periodistas necesitan fuentes de productos. Los bloggers quieren reseñar tus productos. Esta guía cubre las tácticas que realmente funcionan.",
    readTime: "11 min de lectura",
  },
  it: {
    badge: "Link Building",
    heading: "Tattiche di Link Building per E-commerce",
    intro:
      "I siti e-commerce hanno vantaggi strutturali nel link building che la maggior parte dei SEO ignora. I tuoi fornitori vogliono linkarti. I giornalisti hanno bisogno di fonti di prodotti. I blogger vogliono recensire i tuoi prodotti. Questa guida copre le tattiche che funzionano davvero.",
    readTime: "11 min di lettura",
  },
  nl: {
    badge: "Linkbuilding",
    heading: "Linkbuilding Tactieken voor E-commerce",
    intro:
      "E-commercesites hebben structurele linkbuilding-voordelen die de meeste SEO's negeren. Je leveranciers willen naar je linken. Journalisten hebben productbronnen nodig. Bloggers willen je producten recenseren. Deze gids behandelt de tactieken die echt werken voor webwinkels.",
    readTime: "11 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/link-building-tactics");
}

export default async function LinkBuildingTacticsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesLinkBuildingTacticsT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/link-building-tactics",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Link Building Tactics", path: "/guides/link-building-tactics" },
        ],
      }}
    />
  );
}
