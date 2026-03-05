export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readingTime: number;
  author: string;
  authorRole: string;
  authorSlug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  sections: BlogSection[];
};

export type BlogCategory = {
  id: string;
  label: string;
};
