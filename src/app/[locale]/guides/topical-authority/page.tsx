import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesTopicalAuthorityT } from "@/lib/i18n/translations/guidesTopicalAuthority";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "Authority",
    heading: "Topical Authority for Ecommerce SEO",
    intro:
      "Google ranks sites it considers authoritative on a topic — not just pages with good backlinks. For ecommerce stores, building topical authority means creating interconnected content that covers your product categories in depth. This guide shows you how to map, build, and measure topical coverage for your store.",
    readTime: "10 min read",
  },
  de: {
    badge: "Autorität",
    heading: "Topische Autorität für Ecommerce-SEO",
    intro:
      "Google bewertet Websites, die es als thematisch autoritär betrachtet — nicht nur Seiten mit guten Backlinks. Für Ecommerce-Shops bedeutet topische Autorität zusammenhängende Inhalte, die Produktkategorien tiefgründig abdecken. Dieser Leitfaden zeigt, wie man topische Abdeckung plant und aufbaut.",
    readTime: "10 Min. Lesezeit",
  },
  fr: {
    badge: "Autorité",
    heading: "Autorité Thématique pour le SEO E-commerce",
    intro:
      "Google classe les sites qu'il considère comme faisant autorité sur un sujet — pas seulement les pages avec de bons backlinks. Pour les boutiques e-commerce, construire une autorité thématique signifie créer un contenu interconnecté qui couvre vos catégories de produits en profondeur.",
    readTime: "10 min de lecture",
  },
  es: {
    badge: "Autoridad",
    heading: "Autoridad Temática para SEO de E-commerce",
    intro:
      "Google posiciona los sitios que considera autoritativos en un tema — no solo páginas con buenos backlinks. Para las tiendas online, construir autoridad temática significa crear contenido interconectado que cubra tus categorías de productos en profundidad.",
    readTime: "10 min de lectura",
  },
  it: {
    badge: "Autorità",
    heading: "Autorità Tematica per SEO E-commerce",
    intro:
      "Google posiziona i siti che considera autorevoli su un argomento — non solo le pagine con buoni backlink. Per gli e-commerce, costruire autorità tematica significa creare contenuti interconnessi che coprono in profondità le categorie di prodotti.",
    readTime: "10 min di lettura",
  },
  nl: {
    badge: "Autoriteit",
    heading: "Topicale Autoriteit voor E-commerce SEO",
    intro:
      "Google rankt sites die het beschouwt als gezaghebbend over een onderwerp — niet alleen pagina's met goede backlinks. Voor webwinkels betekent topicale autoriteit opbouwen: onderling verbonden content maken die je productcategorieën diepgaand behandelt.",
    readTime: "10 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/topical-authority");
}

export default async function TopicalAuthorityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesTopicalAuthorityT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/topical-authority",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Topical Authority", path: "/guides/topical-authority" },
        ],
      }}
    />
  );
}
