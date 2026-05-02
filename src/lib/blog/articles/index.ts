import type { BlogArticle } from "../types";

// Article content imports - grouped by priority
import { ecommerceSeo } from "./ecommerce-seo";
import { ecommerceSeoAudit } from "./how-to-make-ecommerce-seo-audit";
import { ecommerceSeoConsultant } from "./ecommerce-seo-consultant";
import { ecommerceSeoPackages } from "./ecommerce-seo-packages";
import { ecommerceSeoAgencies } from "./ecommerce-seo-agencies";
import { ecommerceSeoTips } from "./ecommerce-seo-tips";
import { ecommerceSeoStrategy } from "./ecommerce-seo-strategy";
import { ecommerceSeoChecklist } from "./ecommerce-seo-checklist";
import { onPageSeoForEcommerce } from "./on-page-seo-for-ecommerce";
import { seoForEcommerceProductPages } from "./seo-for-ecommerce-product-pages";
import { ecommerceCategoryPageSeo } from "./ecommerce-category-page-seo";
import { technicalSeoForEcommerce } from "./technical-seo-for-ecommerce";
import { ecommerceSeoKeywords } from "./ecommerce-seo-keywords";
import { offPageSeoForEcommerce } from "./off-page-seo-for-ecommerce";
import { magentoEcommerceSeo } from "./magento-ecommerce-seo";
import { shopifyEcommerceSeo } from "./shopify-ecommerce-seo";
import { ecommerceSeoMigration } from "./ecommerce-seo-migration";
import { internationalEcommerceSeo } from "./international-ecommerce-seo";
import { b2bEcommerceSeo } from "./b2b-ecommerce-seo";
import { fashionEcommerceSeo } from "./fashion-ecommerce-seo";
import { ecommerceSeoMistakes } from "./ecommerce-seo-mistakes";
import { whyIsSeoImportantForEcommerce } from "./why-is-seo-important-for-ecommerce";
import { advancedEcommerceSeoTechniques } from "./advanced-ecommerce-seo-techniques";
import { ecommerceSeoIndia } from "./ecommerce-seo-india";
import { ecommerceSeopricing } from "./ecommerce-seo-pricing";
import { ecommerceSeoTools } from "./ecommerce-seo-tools";
import { ecommerceHomepageSeo } from "./ecommerce-homepage-seo";
import { ecommerceSeoContent } from "./ecommerce-seo-content";
import { ecommerceSeoMarketing } from "./ecommerce-seo-marketing";
import { enterpriseEcommerceSeo } from "./enterprise-ecommerce-seo";

export const allArticles: BlogArticle[] = [
  ecommerceSeo,
  ecommerceSeoAudit,
  ecommerceSeoConsultant,
  ecommerceSeoPackages,
  ecommerceSeoAgencies,
  ecommerceSeoTips,
  ecommerceSeoStrategy,
  ecommerceSeoChecklist,
  onPageSeoForEcommerce,
  seoForEcommerceProductPages,
  ecommerceCategoryPageSeo,
  technicalSeoForEcommerce,
  ecommerceSeoKeywords,
  offPageSeoForEcommerce,
  magentoEcommerceSeo,
  shopifyEcommerceSeo,
  ecommerceSeoMigration,
  internationalEcommerceSeo,
  b2bEcommerceSeo,
  fashionEcommerceSeo,
  ecommerceSeoMistakes,
  whyIsSeoImportantForEcommerce,
  advancedEcommerceSeoTechniques,
  ecommerceSeoIndia,
  ecommerceSeopricing,
  ecommerceSeoTools,
  ecommerceHomepageSeo,
  ecommerceSeoContent,
  ecommerceSeoMarketing,
  enterpriseEcommerceSeo,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  if (category === "all") return allArticles;
  return allArticles.filter((a) => a.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): BlogArticle[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return allArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit);
}

export function getArticlesByAuthor(authorSlug: string): BlogArticle[] {
  return allArticles.filter((a) => a.authorSlug === authorSlug);
}

export const allAuthorSlugs = [...new Set(allArticles.map((a) => a.authorSlug))];

export const allBlogSlugs = allArticles.map((a) => a.slug);
