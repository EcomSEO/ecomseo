import { allArticles } from "@/lib/blog/articles";
import { allTopics } from "@/lib/academy";
import { blogTranslations } from "@/lib/i18n/translations/blog";
import { seoToolsHubT } from "@/lib/i18n/translations/seoTools";
import type { Locale } from "@/lib/i18n/config";

export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourceGroup = {
  label: string; // e.g. "Site Audits"
  items: ResourceLink[];
  /** How many items exist in total — if > items.length, the UI shows a "+N more" footer. */
  totalCount: number;
  /** Where "+N more" should link to (usually the section hub). */
  seeMoreHref: string;
};

/** Max items shown per group in the mega-menu. Anything beyond is hidden behind a "+N more" link. */
const MAX_ITEMS_PER_GROUP = 4;

export type ResourceSection = {
  id: "tools" | "academy" | "blog";
  label: string; // e.g. "Tools"
  countLabel: string; // e.g. "23 free tools"
  seeAllLabel: string;
  seeAllHref: string;
  groups: ResourceGroup[];
};

/* ───────── Tool categorization (matches /tools page) ───────── */

const toolCategoryMap: Record<string, string[]> = {
  siteAudits: ["shopify-seo-audit", "ecommerce-seo-audit"],
  onPageContent: [
    "serp-simulator",
    "meta-tags-checker",
    "heading-checker",
    "thin-content-checker",
    "duplicate-content",
    "intent-matching-tool",
  ],
  technicalSeo: [
    "robots-txt-analyzer",
    "canonical-checker",
    "indexability-checker",
    "redirect-checker",
    "core-web-vitals",
    "site-speed-comparison",
    "page-type-classifier",
  ],
  structuredData: [
    "schema-generator",
    "schema-validator",
    "og-checker",
  ],
  sitemapsCrawling: ["sitemap-comparison", "sitemap-extractor"],
  ecommerceInternational: [
    "hreflang-validator",
    "image-auditor",
    "shopping-feed-validator",
    "internal-link-analyzer",
  ],
};

const toolTitleKeys: Record<string, keyof ReturnType<typeof getToolsTitles>> = {
  "shopify-seo-audit": "shopifyAudit",
  "ecommerce-seo-audit": "ecommerceAudit",
  "serp-simulator": "serpSimulator",
  "meta-tags-checker": "metaTagsChecker",
  "heading-checker": "headingChecker",
  "thin-content-checker": "thinContentChecker",
  "duplicate-content": "duplicateContent",
  "intent-matching-tool": "intentMatcher",
  "robots-txt-analyzer": "robotsAnalyzer",
  "canonical-checker": "canonicalChecker",
  "indexability-checker": "indexabilityChecker",
  "redirect-checker": "redirectChecker",
  "core-web-vitals": "coreWebVitals",
  "site-speed-comparison": "siteSpeedComparison",
  "page-type-classifier": "pageTypeClassifier",
  "schema-generator": "schemaGenerator",
  "schema-validator": "schemaValidator",
  "og-checker": "ogChecker",
  "sitemap-comparison": "sitemapComparison",
  "sitemap-extractor": "sitemapExtractor",
  "hreflang-validator": "hreflangValidator",
  "image-auditor": "imageAuditor",
  "shopping-feed-validator": "shoppingFeedValidator",
  "internal-link-analyzer": "internalLinkAnalyzer",
};

function getToolsTitles(locale: Locale) {
  const t = seoToolsHubT[locale] as Record<string, { title: string; desc: string } | unknown>;
  return t;
}

/* ───────── Academy cluster names per locale ───────── */

const clusterNamesByLocale: Record<Locale, Record<number, string>> = {
  en: {
    1: "Search Fundamentals",
    2: "Keyword Research",
    3: "On-Page SEO",
    4: "Technical SEO",
    5: "Content & Authority",
    6: "Link Building",
    7: "Measuring Results",
    8: "SEO by Platform",
    9: "Advanced SEO",
    10: "Industry Playbooks",
  },
  de: {
    1: "Suchgrundlagen",
    2: "Keyword-Recherche",
    3: "On-Page SEO",
    4: "Technisches SEO",
    5: "Content & Autoritaet",
    6: "Linkaufbau",
    7: "Ergebnisse messen",
    8: "SEO nach Plattform",
    9: "Fortgeschrittenes SEO",
    10: "Branchen-Playbooks",
  },
  fr: {
    1: "Fondamentaux de la recherche",
    2: "Recherche de mots-cles",
    3: "SEO On-Page",
    4: "SEO technique",
    5: "Contenu & Autorite",
    6: "Netlinking",
    7: "Mesurer les resultats",
    8: "SEO par plateforme",
    9: "SEO avance",
    10: "Guides sectoriels",
  },
  es: {
    1: "Fundamentos de busqueda",
    2: "Investigacion de keywords",
    3: "SEO On-Page",
    4: "SEO tecnico",
    5: "Contenido y autoridad",
    6: "Link Building",
    7: "Medir resultados",
    8: "SEO por plataforma",
    9: "SEO avanzado",
    10: "Guias por industria",
  },
  it: {
    1: "Fondamenti di ricerca",
    2: "Ricerca keyword",
    3: "SEO On-Page",
    4: "SEO tecnica",
    5: "Contenuti e autorita",
    6: "Link Building",
    7: "Misurare i risultati",
    8: "SEO per piattaforma",
    9: "SEO avanzata",
    10: "Playbook di settore",
  },
  nl: {
    1: "Zoekmachine basis",
    2: "Zoekwoordenonderzoek",
    3: "On-Page SEO",
    4: "Technische SEO",
    5: "Content & autoriteit",
    6: "Linkbuilding",
    7: "Resultaten meten",
    8: "SEO per platform",
    9: "Geavanceerde SEO",
    10: "Branche-playbooks",
  },
};

/* ───────── Section label translations ───────── */

const sectionLabels: Record<Locale, { tools: string; academy: string; blog: string; toolsCount: string; academyCount: string; blogCount: string; seeAllTools: string; seeAllLessons: string; seeAllArticles: string }> = {
  en: {
    tools: "Tools",
    academy: "Academy",
    blog: "Blog",
    toolsCount: "23 free SEO tools",
    academyCount: "66 in-depth lessons",
    blogCount: "30 practical articles",
    seeAllTools: "Browse all tools",
    seeAllLessons: "Browse all lessons",
    seeAllArticles: "Browse all articles",
  },
  de: {
    tools: "Tools",
    academy: "Akademie",
    blog: "Ratgeber",
    toolsCount: "23 kostenlose SEO-Tools",
    academyCount: "66 ausfuehrliche Lektionen",
    blogCount: "30 praktische Artikel",
    seeAllTools: "Alle Tools ansehen",
    seeAllLessons: "Alle Lektionen ansehen",
    seeAllArticles: "Alle Artikel ansehen",
  },
  fr: {
    tools: "Outils",
    academy: "Academie",
    blog: "Articles",
    toolsCount: "23 outils SEO gratuits",
    academyCount: "66 lecons approfondies",
    blogCount: "30 articles pratiques",
    seeAllTools: "Voir tous les outils",
    seeAllLessons: "Voir toutes les lecons",
    seeAllArticles: "Voir tous les articles",
  },
  es: {
    tools: "Herramientas",
    academy: "Academia",
    blog: "Articulos",
    toolsCount: "23 herramientas SEO gratis",
    academyCount: "66 lecciones detalladas",
    blogCount: "30 articulos practicos",
    seeAllTools: "Ver todas las herramientas",
    seeAllLessons: "Ver todas las lecciones",
    seeAllArticles: "Ver todos los articulos",
  },
  it: {
    tools: "Strumenti",
    academy: "Accademia",
    blog: "Articoli",
    toolsCount: "23 strumenti SEO gratuiti",
    academyCount: "66 lezioni approfondite",
    blogCount: "30 articoli pratici",
    seeAllTools: "Vedi tutti gli strumenti",
    seeAllLessons: "Vedi tutte le lezioni",
    seeAllArticles: "Vedi tutti gli articoli",
  },
  nl: {
    tools: "Tools",
    academy: "Academie",
    blog: "Kennisbank",
    toolsCount: "23 gratis SEO-tools",
    academyCount: "66 diepgaande lessen",
    blogCount: "30 praktische artikelen",
    seeAllTools: "Bekijk alle tools",
    seeAllLessons: "Bekijk alle lessen",
    seeAllArticles: "Bekijk alle artikelen",
  },
};

/* ───────── Build Tools section ───────── */

function buildToolsSection(locale: Locale): ResourceSection {
  const t = getToolsTitles(locale) as Record<string, { title: string } | { categories: Record<string, string> }>;
  const cats = t.categories as Record<string, string>;
  const s = sectionLabels[locale];

  const buildGroup = (groupLabel: string, slugs: string[]): ResourceGroup => {
    const allItems: ResourceLink[] = slugs.map((slug) => ({
      label: (t[toolTitleKeys[slug]] as { title: string }).title,
      href: `/tools/${slug}`,
    }));
    return {
      label: groupLabel,
      items: allItems.slice(0, MAX_ITEMS_PER_GROUP),
      totalCount: allItems.length,
      seeMoreHref: "/tools",
    };
  };

  const groups: ResourceGroup[] = [
    buildGroup(cats.siteAudits, toolCategoryMap.siteAudits),
    buildGroup(cats.onPageContent, toolCategoryMap.onPageContent),
    buildGroup(cats.technicalSeo, toolCategoryMap.technicalSeo),
    buildGroup(cats.structuredData, toolCategoryMap.structuredData),
    buildGroup(cats.sitemapsCrawling, toolCategoryMap.sitemapsCrawling),
    buildGroup(cats.ecommerceInternational, toolCategoryMap.ecommerceInternational),
  ];

  return {
    id: "tools",
    label: s.tools,
    countLabel: s.toolsCount,
    seeAllLabel: s.seeAllTools,
    seeAllHref: "/tools",
    groups,
  };
}

/* ───────── Build Academy section ───────── */

function buildAcademySection(locale: Locale): ResourceSection {
  const s = sectionLabels[locale];
  const clusterNames = clusterNamesByLocale[locale];

  // Group topics by cluster
  const byCluster: Record<number, typeof allTopics> = {};
  for (const topic of allTopics) {
    if (!byCluster[topic.cluster]) byCluster[topic.cluster] = [];
    byCluster[topic.cluster].push(topic);
  }

  const groups: ResourceGroup[] = [];
  for (let cluster = 1; cluster <= 10; cluster++) {
    const topics = byCluster[cluster] || [];
    if (topics.length === 0) continue;

    const allItems: ResourceLink[] = topics.map((topic) => ({
      label: topic.content[locale]?.heading || topic.content.en.heading,
      href: `/academy/${topic.slug}`,
    }));
    groups.push({
      label: clusterNames[cluster],
      items: allItems.slice(0, MAX_ITEMS_PER_GROUP),
      totalCount: allItems.length,
      seeMoreHref: "/academy",
    });
  }

  return {
    id: "academy",
    label: s.academy,
    countLabel: s.academyCount,
    seeAllLabel: s.seeAllLessons,
    seeAllHref: "/academy",
    groups,
  };
}

/* ───────── Build Blog section ───────── */

function buildBlogSection(locale: Locale): ResourceSection {
  const s = sectionLabels[locale];
  const blogT = blogTranslations[locale];

  // Build category label map
  const catLabels: Record<string, string> = {};
  for (const cat of blogT.categories) {
    catLabels[cat.id] = cat.label;
  }

  // Group articles by category
  const byCat: Record<string, typeof allArticles> = {};
  for (const article of allArticles) {
    if (!byCat[article.category]) byCat[article.category] = [];
    byCat[article.category].push(article);
  }

  // Preserve blog category order
  const categoryOrder = blogT.categories.map((c) => c.id);
  const groups: ResourceGroup[] = [];

  for (const catId of categoryOrder) {
    const articles = byCat[catId] || [];
    if (articles.length === 0) continue;

    const allItems: ResourceLink[] = articles.map((article) => ({
      label: article.content[locale]?.title || article.content.en.title,
      href: `/blog/${article.slug}`,
    }));
    groups.push({
      label: catLabels[catId] || catId,
      items: allItems.slice(0, MAX_ITEMS_PER_GROUP),
      totalCount: allItems.length,
      seeMoreHref: "/blog",
    });
  }

  return {
    id: "blog",
    label: s.blog,
    countLabel: s.blogCount,
    seeAllLabel: s.seeAllArticles,
    seeAllHref: "/blog",
    groups,
  };
}

/* ───────── Public API ───────── */

export function buildResourceSections(locale: Locale): ResourceSection[] {
  return [
    buildToolsSection(locale),
    buildAcademySection(locale),
    buildBlogSection(locale),
  ];
}
