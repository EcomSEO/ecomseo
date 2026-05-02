import type { Locale } from "../config";

export type SideNavItem = {
  label: string;
  href: string;
};

export type SideNavSection = {
  category: string;
  items: SideNavItem[];
};

export const guidesSidebarT: Record<Locale, SideNavSection[]> = {
  en: [
    {
      category: "Ecommerce SEO Basics",
      items: [
        { label: "Introduction", href: "/guides" },
        { label: "SEO Fundamentals Checklist", href: "/academy/introduction-to-ecommerce-seo" },
        { label: "Analytics & Tracking", href: "/guides/analytics-tracking" },
        { label: "Beginner to Hero Course", href: "/guides/beginner-to-hero" },
      ],
    },
    {
      category: "Research & Ideation",
      items: [
        { label: "Keyword Research", href: "/academy/keyword-research-for-ecommerce" },
        { label: "Competitor Analysis", href: "/guides/competitor-analysis" },
        { label: "Technical Analysis", href: "/guides/technical-analysis" },
        { label: "On-Page Audit", href: "/guides/on-page-audit" },
        { label: "Off-Page Audit", href: "/guides/off-page-audit" },
        { label: "Task Planning", href: "/guides/task-planning" },
      ],
    },
    {
      category: "Advanced Ecommerce SEO",
      items: [
        { label: "Link Building Tactics", href: "/guides/link-building-tactics" },
        { label: "Getting Topical Authority", href: "/guides/topical-authority" },
        { label: "Ranking on ChatGPT", href: "/guides/ranking-chatgpt" },
        { label: "SERP Domination", href: "/guides/serp-domination" },
      ],
    },
  ],
  de: [
    {
      category: "E-Commerce-SEO-Grundlagen",
      items: [
        { label: "Einführung", href: "/guides" },
        { label: "SEO-Grundlagen-Checkliste", href: "/academy/introduction-to-ecommerce-seo" },
        { label: "Analytics & Tracking", href: "/guides/analytics-tracking" },
        { label: "Einsteiger-Crashkurs", href: "/guides/beginner-to-hero" },
      ],
    },
    {
      category: "Recherche & Ideenfindung",
      items: [
        { label: "Keyword-Recherche", href: "/academy/keyword-research-for-ecommerce" },
        { label: "Wettbewerbsanalyse", href: "/guides/competitor-analysis" },
        { label: "Technische Analyse", href: "/guides/technical-analysis" },
        { label: "On-Page-Audit", href: "/guides/on-page-audit" },
        { label: "Off-Page-Audit", href: "/guides/off-page-audit" },
        { label: "Aufgabenplanung", href: "/guides/task-planning" },
      ],
    },
    {
      category: "Fortgeschrittenes E-Commerce-SEO",
      items: [
        { label: "Linkaufbau-Taktiken", href: "/guides/link-building-tactics" },
        { label: "Thematische Autorität aufbauen", href: "/guides/topical-authority" },
        { label: "Ranking bei ChatGPT", href: "/guides/ranking-chatgpt" },
        { label: "SERP-Dominanz", href: "/guides/serp-domination" },
      ],
    },
  ],
  fr: [
    {
      category: "Bases du SEO e-commerce",
      items: [
        { label: "Introduction", href: "/guides" },
        { label: "Checklist des fondamentaux SEO", href: "/academy/introduction-to-ecommerce-seo" },
        { label: "Analytics & Tracking", href: "/guides/analytics-tracking" },
        { label: "Cours débutant à expert", href: "/guides/beginner-to-hero" },
      ],
    },
    {
      category: "Recherche & idéation",
      items: [
        { label: "Recherche de mots-clés", href: "/academy/keyword-research-for-ecommerce" },
        { label: "Analyse concurrentielle", href: "/guides/competitor-analysis" },
        { label: "Analyse technique", href: "/guides/technical-analysis" },
        { label: "Audit on-page", href: "/guides/on-page-audit" },
        { label: "Audit off-page", href: "/guides/off-page-audit" },
        { label: "Planification des tâches", href: "/guides/task-planning" },
      ],
    },
    {
      category: "SEO e-commerce avancé",
      items: [
        { label: "Tactiques de netlinking", href: "/guides/link-building-tactics" },
        { label: "Autorité thématique", href: "/guides/topical-authority" },
        { label: "Se positionner sur ChatGPT", href: "/guides/ranking-chatgpt" },
        { label: "Domination des SERP", href: "/guides/serp-domination" },
      ],
    },
  ],
  es: [
    {
      category: "Fundamentos de SEO e-commerce",
      items: [
        { label: "Introducción", href: "/guides" },
        { label: "Checklist de fundamentos SEO", href: "/academy/introduction-to-ecommerce-seo" },
        { label: "Analytics y seguimiento", href: "/guides/analytics-tracking" },
        { label: "Curso de principiante a experto", href: "/guides/beginner-to-hero" },
      ],
    },
    {
      category: "Investigación e ideación",
      items: [
        { label: "Investigación de palabras clave", href: "/academy/keyword-research-for-ecommerce" },
        { label: "Análisis de competencia", href: "/guides/competitor-analysis" },
        { label: "Análisis técnico", href: "/guides/technical-analysis" },
        { label: "Auditoría on-page", href: "/guides/on-page-audit" },
        { label: "Auditoría off-page", href: "/guides/off-page-audit" },
        { label: "Planificación de tareas", href: "/guides/task-planning" },
      ],
    },
    {
      category: "SEO e-commerce avanzado",
      items: [
        { label: "Tácticas de link building", href: "/guides/link-building-tactics" },
        { label: "Autoridad temática", href: "/guides/topical-authority" },
        { label: "Posicionarse en ChatGPT", href: "/guides/ranking-chatgpt" },
        { label: "Dominación de SERPs", href: "/guides/serp-domination" },
      ],
    },
  ],
  it: [
    {
      category: "Basi della SEO e-commerce",
      items: [
        { label: "Introduzione", href: "/guides" },
        { label: "Checklist dei fondamentali SEO", href: "/academy/introduction-to-ecommerce-seo" },
        { label: "Analytics & Tracking", href: "/guides/analytics-tracking" },
        { label: "Corso da principiante a esperto", href: "/guides/beginner-to-hero" },
      ],
    },
    {
      category: "Ricerca e ideazione",
      items: [
        { label: "Ricerca delle keyword", href: "/academy/keyword-research-for-ecommerce" },
        { label: "Analisi della concorrenza", href: "/guides/competitor-analysis" },
        { label: "Analisi tecnica", href: "/guides/technical-analysis" },
        { label: "Audit on-page", href: "/guides/on-page-audit" },
        { label: "Audit off-page", href: "/guides/off-page-audit" },
        { label: "Pianificazione dei task", href: "/guides/task-planning" },
      ],
    },
    {
      category: "SEO e-commerce avanzata",
      items: [
        { label: "Tattiche di link building", href: "/guides/link-building-tactics" },
        { label: "Autorità tematica", href: "/guides/topical-authority" },
        { label: "Posizionarsi su ChatGPT", href: "/guides/ranking-chatgpt" },
        { label: "Dominazione delle SERP", href: "/guides/serp-domination" },
      ],
    },
  ],
  nl: [
    {
      category: "E-commerce SEO-basiskennis",
      items: [
        { label: "Introductie", href: "/guides" },
        { label: "SEO-basischecklist", href: "/academy/introduction-to-ecommerce-seo" },
        { label: "Analytics & Tracking", href: "/guides/analytics-tracking" },
        { label: "Beginnerscursus", href: "/guides/beginner-to-hero" },
      ],
    },
    {
      category: "Onderzoek & ideeontwikkeling",
      items: [
        { label: "Zoekwoordenonderzoek", href: "/academy/keyword-research-for-ecommerce" },
        { label: "Concurrentieanalyse", href: "/guides/competitor-analysis" },
        { label: "Technische analyse", href: "/guides/technical-analysis" },
        { label: "On-page audit", href: "/guides/on-page-audit" },
        { label: "Off-page audit", href: "/guides/off-page-audit" },
        { label: "Taakplanning", href: "/guides/task-planning" },
      ],
    },
    {
      category: "Geavanceerde e-commerce SEO",
      items: [
        { label: "Linkbuildingtactieken", href: "/guides/link-building-tactics" },
        { label: "Thematisch gezag opbouwen", href: "/guides/topical-authority" },
        { label: "Ranken bij ChatGPT", href: "/guides/ranking-chatgpt" },
        { label: "SERP-dominantie", href: "/guides/serp-domination" },
      ],
    },
  ],
};
