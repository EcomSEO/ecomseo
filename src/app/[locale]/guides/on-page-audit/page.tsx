import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesOnPageAuditT } from "@/lib/i18n/translations/guidesOnPageAudit";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "On-Page SEO",
    heading: "On-Page SEO Audit for Ecommerce",
    intro:
      "Most ecommerce stores leak traffic through weak title tags, thin product descriptions, and broken internal linking. This guide walks you through a systematic on-page audit — from category pages and product pages to meta descriptions and heading structure — so every page on your site earns its ranking.",
    readTime: "11 min read",
  },
  de: {
    badge: "On-Page-SEO",
    heading: "On-Page-SEO-Audit für Ecommerce",
    intro:
      "Die meisten Shops verlieren Traffic durch schwache Title-Tags, dünne Produktbeschreibungen und fehlende interne Verlinkung. Dieser Leitfaden führt durch ein systematisches On-Page-Audit — von Kategorie- und Produktseiten bis zu Meta-Descriptions und Überschriftenstruktur.",
    readTime: "11 Min. Lesezeit",
  },
  fr: {
    badge: "SEO On-Page",
    heading: "Audit SEO On-Page pour l'E-commerce",
    intro:
      "La plupart des boutiques perdent du trafic à cause de balises title faibles, de descriptions de produits légères et d'un maillage interne défaillant. Ce guide vous guide à travers un audit on-page systématique — des pages catégories aux pages produits, meta-descriptions et structure des titres.",
    readTime: "11 min de lecture",
  },
  es: {
    badge: "SEO On-Page",
    heading: "Auditoría SEO On-Page para E-commerce",
    intro:
      "La mayoría de las tiendas pierden tráfico por etiquetas de título débiles, descripciones de productos escasas y enlaces internos rotos. Esta guía te lleva por una auditoría on-page sistemática — desde páginas de categoría y producto hasta meta descripciones y estructura de encabezados.",
    readTime: "11 min de lectura",
  },
  it: {
    badge: "SEO On-Page",
    heading: "Audit SEO On-Page per E-commerce",
    intro:
      "La maggior parte degli e-commerce perde traffico per title tag deboli, descrizioni di prodotti scarse e link interni mancanti. Questa guida ti accompagna attraverso un audit on-page sistematico — dalle pagine categoria e prodotto alle meta description e alla struttura dei titoli.",
    readTime: "11 min di lettura",
  },
  nl: {
    badge: "On-Page SEO",
    heading: "On-Page SEO Audit voor E-commerce",
    intro:
      "De meeste webwinkels verliezen verkeer door zwakke title tags, dunne productbeschrijvingen en gebroken interne links. Deze gids leidt je door een systematische on-page audit — van categorie- en productpagina's tot meta-descriptions en kopenstructuur.",
    readTime: "11 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/on-page-audit");
}

export default async function OnPageAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesOnPageAuditT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/on-page-audit",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "On-Page Audit", path: "/guides/on-page-audit" },
        ],
      }}
    />
  );
}
