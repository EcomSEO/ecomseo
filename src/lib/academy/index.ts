import type { AcademyTopic } from "./types";

// Cluster 1: How Search Actually Works
import { introductionToEcommerceSeo } from "./topics/01-search-fundamentals/introduction-to-ecommerce-seo";
import { howGoogleFindsOnlineStores } from "./topics/01-search-fundamentals/how-google-finds-online-stores";
import { crawlingAndIndexingProductPages } from "./topics/01-search-fundamentals/crawling-and-indexing-product-pages";
import { ecommerceRankingFactors } from "./topics/01-search-fundamentals/ecommerce-ranking-factors";
import { searchIntentForEcommerce } from "./topics/01-search-fundamentals/search-intent-for-ecommerce";
import { googleSearchConsoleForStores } from "./topics/01-search-fundamentals/google-search-console-for-stores";
import { seoLearningRoadmap } from "./topics/01-search-fundamentals/seo-learning-roadmap";

// Cluster 2: Finding Keywords That Drive Revenue
import { keywordResearchForEcommerce } from "./topics/02-keyword-research/keyword-research-for-ecommerce";
import { buyerIntentVsSearchVolume } from "./topics/02-keyword-research/buyer-intent-vs-search-volume";
import { productVsCategoryKeywords } from "./topics/02-keyword-research/product-vs-category-keywords";
import { longTailKeywordsForProducts } from "./topics/02-keyword-research/long-tail-keywords-for-products";
import { competitorKeywordAnalysis } from "./topics/02-keyword-research/competitor-keyword-analysis";
import { keywordMappingForStores } from "./topics/02-keyword-research/keyword-mapping-for-stores";
import { seasonalKeywordTrends } from "./topics/02-keyword-research/seasonal-keyword-trends";

// Cluster 3: On-Page SEO That Sells
import { productPageSeo } from "./topics/03-on-page-seo/product-page-seo";
import { categoryPageSeo } from "./topics/03-on-page-seo/category-page-seo";
import { homepageSeoForEcommerce } from "./topics/03-on-page-seo/homepage-seo-for-ecommerce";
import { titleTagsAndMetaDescriptions } from "./topics/03-on-page-seo/title-tags-and-meta-descriptions";
import { headingStructureForEcommerce } from "./topics/03-on-page-seo/heading-structure-for-ecommerce";
import { internalLinkingForStores } from "./topics/03-on-page-seo/internal-linking-for-stores";
import { imageOptimizationForProducts } from "./topics/03-on-page-seo/image-optimization-for-products";
import { ecommerceBlogSeo } from "./topics/03-on-page-seo/ecommerce-blog-seo";

// Cluster 4: Technical SEO for Online Stores
import { siteArchitectureForEcommerce } from "./topics/04-technical-seo/site-architecture-for-ecommerce";
import { crawlBudgetManagement } from "./topics/04-technical-seo/crawl-budget-management";
import { siteSpeedOptimization } from "./topics/04-technical-seo/site-speed-optimization";
import { mobileFirstForEcommerce } from "./topics/04-technical-seo/mobile-first-for-ecommerce";
import { structuredDataForProducts } from "./topics/04-technical-seo/structured-data-for-products";
import { canonicalTagsForEcommerce } from "./topics/04-technical-seo/canonical-tags-for-ecommerce";
import { robotsTxtAndXmlSitemaps } from "./topics/04-technical-seo/robots-txt-and-xml-sitemaps";
import { facetedNavigationSeo } from "./topics/04-technical-seo/faceted-navigation-seo";

// Cluster 5: Content That Builds Authority
import { topicalAuthorityForEcommerce } from "./topics/05-content-authority/topical-authority-for-ecommerce";
import { buyingGuidesAndComparisons } from "./topics/05-content-authority/buying-guides-and-comparisons";
import { faqPagesForEcommerce } from "./topics/05-content-authority/faq-pages-for-ecommerce";
import { contentStrategyForStores } from "./topics/05-content-authority/content-strategy-for-stores";
import { contentPruningAndConsolidation } from "./topics/05-content-authority/content-pruning-and-consolidation";
import { userGeneratedContentSeo } from "./topics/05-content-authority/user-generated-content-seo";

// Cluster 6: Link Building for Ecommerce
import { backlinkFundamentalsForEcommerce } from "./topics/06-link-building/backlink-fundamentals-for-ecommerce";
import { competitorBacklinkAnalysis } from "./topics/06-link-building/competitor-backlink-analysis";
import { digitalPrForEcommerce } from "./topics/06-link-building/digital-pr-for-ecommerce";
import { emailOutreachForLinks } from "./topics/06-link-building/email-outreach-for-links";
import { guestPostingForEcommerce } from "./topics/06-link-building/guest-posting-for-ecommerce";
import { brokenLinkBuilding } from "./topics/06-link-building/broken-link-building";

// Cluster 7: Measuring What Matters
import { seoAnalyticsWithGa4 } from "./topics/07-measuring-results/seo-analytics-with-ga4";
import { rankTrackingForEcommerce } from "./topics/07-measuring-results/rank-tracking-for-ecommerce";
import { seoReportingForStakeholders } from "./topics/07-measuring-results/seo-reporting-for-stakeholders";
import { calculatingSeoRoi } from "./topics/07-measuring-results/calculating-seo-roi";
import { seoForecastingForEcommerce } from "./topics/07-measuring-results/seo-forecasting-for-ecommerce";
import { seoTaskPlanning } from "./topics/07-measuring-results/seo-task-planning";

// Cluster 8: SEO by Platform
import { shopifySeoGuide } from "./topics/08-seo-by-platform/shopify-seo-guide";
import { woocommerceSeoGuide } from "./topics/08-seo-by-platform/woocommerce-seo-guide";
import { magentoSeoGuide } from "./topics/08-seo-by-platform/magento-seo-guide";
import { bigcommerceSeoGuide } from "./topics/08-seo-by-platform/bigcommerce-seo-guide";
import { platformMigrationSeo } from "./topics/08-seo-by-platform/platform-migration-seo";

// Cluster 9: Advanced Ecommerce SEO
import { internationalEcommerceSeo } from "./topics/09-advanced-seo/international-ecommerce-seo";
import { programmaticSeoForEcommerce } from "./topics/09-advanced-seo/programmatic-seo-for-ecommerce";
import { aiSearchOptimization } from "./topics/09-advanced-seo/ai-search-optimization";
import { javascriptSeoForEcommerce } from "./topics/09-advanced-seo/javascript-seo-for-ecommerce";
import { logFileAnalysis } from "./topics/09-advanced-seo/log-file-analysis";
import { seoAbTesting } from "./topics/09-advanced-seo/seo-ab-testing";
import { ecommerceSeoAutomation } from "./topics/09-advanced-seo/ecommerce-seo-automation";
import { serpDominationStrategy } from "./topics/09-advanced-seo/serp-domination-strategy";

// Cluster 10: Industry Playbooks
import { fashionApparelSeo } from "./topics/10-industry-playbooks/fashion-apparel-seo";
import { healthBeautySeo } from "./topics/10-industry-playbooks/health-beauty-seo";
import { foodBeverageSeo } from "./topics/10-industry-playbooks/food-beverage-seo";
import { electronicsTechSeo } from "./topics/10-industry-playbooks/electronics-tech-seo";
import { homeGardenSeo } from "./topics/10-industry-playbooks/home-garden-seo";

export const allTopics: AcademyTopic[] = [
  // Cluster 1
  introductionToEcommerceSeo,
  howGoogleFindsOnlineStores,
  crawlingAndIndexingProductPages,
  ecommerceRankingFactors,
  searchIntentForEcommerce,
  googleSearchConsoleForStores,
  seoLearningRoadmap,
  // Cluster 2
  keywordResearchForEcommerce,
  buyerIntentVsSearchVolume,
  productVsCategoryKeywords,
  longTailKeywordsForProducts,
  competitorKeywordAnalysis,
  keywordMappingForStores,
  seasonalKeywordTrends,
  // Cluster 3
  productPageSeo,
  categoryPageSeo,
  homepageSeoForEcommerce,
  titleTagsAndMetaDescriptions,
  headingStructureForEcommerce,
  internalLinkingForStores,
  imageOptimizationForProducts,
  ecommerceBlogSeo,
  // Cluster 4
  siteArchitectureForEcommerce,
  crawlBudgetManagement,
  siteSpeedOptimization,
  mobileFirstForEcommerce,
  structuredDataForProducts,
  canonicalTagsForEcommerce,
  robotsTxtAndXmlSitemaps,
  facetedNavigationSeo,
  // Cluster 5
  topicalAuthorityForEcommerce,
  buyingGuidesAndComparisons,
  faqPagesForEcommerce,
  contentStrategyForStores,
  contentPruningAndConsolidation,
  userGeneratedContentSeo,
  // Cluster 6
  backlinkFundamentalsForEcommerce,
  competitorBacklinkAnalysis,
  digitalPrForEcommerce,
  emailOutreachForLinks,
  guestPostingForEcommerce,
  brokenLinkBuilding,
  // Cluster 7
  seoAnalyticsWithGa4,
  rankTrackingForEcommerce,
  seoReportingForStakeholders,
  calculatingSeoRoi,
  seoForecastingForEcommerce,
  seoTaskPlanning,
  // Cluster 8
  shopifySeoGuide,
  woocommerceSeoGuide,
  magentoSeoGuide,
  bigcommerceSeoGuide,
  platformMigrationSeo,
  // Cluster 9
  internationalEcommerceSeo,
  programmaticSeoForEcommerce,
  aiSearchOptimization,
  javascriptSeoForEcommerce,
  logFileAnalysis,
  seoAbTesting,
  ecommerceSeoAutomation,
  serpDominationStrategy,
  // Cluster 10
  fashionApparelSeo,
  healthBeautySeo,
  foodBeverageSeo,
  electronicsTechSeo,
  homeGardenSeo,
];

export const allTopicSlugs = allTopics.map((t) => t.slug);

export function getTopicBySlug(slug: string): AcademyTopic | undefined {
  return allTopics.find((t) => t.slug === slug);
}

export function getTopicsByCluster(cluster: number): AcademyTopic[] {
  return allTopics.filter((t) => t.cluster === cluster);
}

/**
 * Localized cluster category names. Used in prev/next nav + breadcrumbs.
 * Was hardcoded English — caused FR/IT/ES/NL academy lessons to show
 * "Search Fundamentals" etc. in their prev/next navigation.
 */
export const clusterNamesByLocale: Record<string, Record<number, string>> = {
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
    3: "On-Page-SEO",
    4: "Technisches SEO",
    5: "Content & Autorität",
    6: "Linkaufbau",
    7: "Ergebnisse messen",
    8: "SEO nach Plattform",
    9: "Fortgeschrittenes SEO",
    10: "Branchen-Playbooks",
  },
  fr: {
    1: "Bases de la recherche",
    2: "Recherche de mots-clés",
    3: "SEO on-page",
    4: "SEO technique",
    5: "Contenu et autorité",
    6: "Netlinking",
    7: "Mesurer les résultats",
    8: "SEO par plateforme",
    9: "SEO avancé",
    10: "Playbooks sectoriels",
  },
  es: {
    1: "Fundamentos de búsqueda",
    2: "Investigación de palabras clave",
    3: "SEO on-page",
    4: "SEO técnico",
    5: "Contenido y autoridad",
    6: "Construcción de enlaces",
    7: "Medir resultados",
    8: "SEO por plataforma",
    9: "SEO avanzado",
    10: "Manuales por sector",
  },
  it: {
    1: "Fondamenti di ricerca",
    2: "Ricerca di parole chiave",
    3: "SEO on-page",
    4: "SEO tecnica",
    5: "Contenuti e autorevolezza",
    6: "Link building",
    7: "Misurare i risultati",
    8: "SEO per piattaforma",
    9: "SEO avanzata",
    10: "Playbook per settore",
  },
  nl: {
    1: "Zoekgrondbeginselen",
    2: "Zoekwoordonderzoek",
    3: "On-page SEO",
    4: "Technische SEO",
    5: "Content en autoriteit",
    6: "Linkbuilding",
    7: "Resultaten meten",
    8: "SEO per platform",
    9: "Geavanceerde SEO",
    10: "Branchespecifieke playbooks",
  },
};

export function getAdjacentTopics(
  slug: string,
  locale: string = "en",
): {
  prev?: { href: string; title: string; category: string };
  next?: { href: string; title: string; category: string };
} {
  const idx = allTopics.findIndex((t) => t.slug === slug);
  if (idx === -1) return {};

  const clusterNames = clusterNamesByLocale[locale] ?? clusterNamesByLocale.en;

  // Prefer the requested locale's heading; fall back to EN if missing.
  // Used to be hardcoded to content.en.heading — caused FR/IT/ES academy
  // lessons to display English titles in prev/next nav.
  const headingFor = (t: (typeof allTopics)[number]) =>
    (t.content as Record<string, { heading: string }>)[locale]?.heading ??
    t.content.en.heading;

  const prev =
    idx > 0
      ? {
          href: `/academy/${allTopics[idx - 1].slug}`,
          title: headingFor(allTopics[idx - 1]),
          category: clusterNames[allTopics[idx - 1].cluster] || "",
        }
      : undefined;

  const next =
    idx < allTopics.length - 1
      ? {
          href: `/academy/${allTopics[idx + 1].slug}`,
          title: headingFor(allTopics[idx + 1]),
          category: clusterNames[allTopics[idx + 1].cluster] || "",
        }
      : undefined;

  return { prev, next };
}
