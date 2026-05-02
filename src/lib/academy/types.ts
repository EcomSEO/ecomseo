import type { Locale } from "@/lib/i18n/config";

export type AcademyResource = {
  label: string;
  url: string;
  type: "tool" | "guide" | "docs" | "video";
};

export type AcademyTopicSection = {
  title: string;
  content: string; // paragraphs separated by \n\n
  items?: string[];
  tip?: string;
  callout?: { title: string; text: string };
  image?: { src: string; alt: string; caption?: string };
};

export type AcademyTopicContent = {
  badge: string;
  heading: string;
  intro: string;
  readTime: string;
  sections: AcademyTopicSection[];
  navLabels: { previous: string; next: string };
};

export type AcademyTopic = {
  slug: string;
  cluster: number; // 1–10
  resources?: AcademyResource[];
  content: Record<Locale, AcademyTopicContent>;
};
