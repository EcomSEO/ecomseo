import type { Locale } from "@/lib/i18n/config";

export type AcademyTopicSection = {
  title: string;
  content: string; // paragraphs separated by \n\n
  items?: string[];
  tip?: string;
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
  content: Record<Locale, AcademyTopicContent>;
};
