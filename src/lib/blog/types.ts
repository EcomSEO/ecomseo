import type { Locale } from "@/lib/i18n/config";

export type BlogSection = {
  heading: string;
  body: string[];
  callout?: { title: string; text: string };
  image?: { src: string; alt: string; caption?: string };
};

export type BlogArticleContent = {
  title: string;
  description: string;
  sections: BlogSection[];
};

export type BlogArticle = {
  slug: string;
  category: string;
  publishDate: string;
  readingTime: number;
  author: string;
  authorRole: string;
  authorSlug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  content: { en: BlogArticleContent } & Partial<Record<Locale, BlogArticleContent>>;
};

export type BlogCategory = {
  id: string;
  label: string;
};
