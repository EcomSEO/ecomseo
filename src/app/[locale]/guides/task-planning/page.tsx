import GuidePageTemplate from "@/components/guides/GuidePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { guidesTaskPlanningT } from "@/lib/i18n/translations/guidesTaskPlanning";

const meta: Record<Locale, { badge: string; heading: string; intro: string; readTime: string }> = {
  en: {
    badge: "Execution",
    heading: "SEO Task Planning and Prioritisation",
    intro:
      "Most SEO projects fail not because of bad strategy but because of poor execution. This guide gives you a repeatable system for planning SEO work — an impact/effort matrix for prioritising tasks, a sprint structure that delivers results, and a reporting framework your clients and stakeholders will actually understand.",
    readTime: "8 min read",
  },
  de: {
    badge: "Umsetzung",
    heading: "SEO-Aufgabenplanung und Priorisierung",
    intro:
      "Die meisten SEO-Projekte scheitern nicht an schlechter Strategie, sondern an mangelhafter Umsetzung. Dieser Leitfaden liefert ein wiederholbares System für die SEO-Planung — eine Impact/Aufwand-Matrix, eine Sprint-Struktur und ein Reporting-Framework.",
    readTime: "8 Min. Lesezeit",
  },
  fr: {
    badge: "Exécution",
    heading: "Planification et Priorisation des Tâches SEO",
    intro:
      "La plupart des projets SEO échouent non pas à cause d'une mauvaise stratégie, mais d'une exécution défaillante. Ce guide vous donne un système reproductible — matrice impact/effort, structure de sprints et cadre de reporting pour vos clients.",
    readTime: "8 min de lecture",
  },
  es: {
    badge: "Ejecución",
    heading: "Planificación y Priorización de Tareas SEO",
    intro:
      "La mayoría de los proyectos SEO fracasan no por mala estrategia sino por mala ejecución. Esta guía te da un sistema repetible — una matriz impacto/esfuerzo, una estructura de sprints y un marco de informes que tus clientes y directivos entenderán.",
    readTime: "8 min de lectura",
  },
  it: {
    badge: "Esecuzione",
    heading: "Pianificazione e Prioritizzazione dei Compiti SEO",
    intro:
      "La maggior parte dei progetti SEO fallisce non per una cattiva strategia ma per una cattiva esecuzione. Questa guida ti fornisce un sistema ripetibile — una matrice impatto/sforzo, una struttura di sprint e un framework di reporting che i tuoi clienti capiranno.",
    readTime: "8 min di lettura",
  },
  nl: {
    badge: "Uitvoering",
    heading: "SEO Taakplanning en Prioritering",
    intro:
      "De meeste SEO-projecten mislukken niet door een slechte strategie maar door slechte uitvoering. Deze gids geeft je een herhaalbaar systeem — een impact/inspanningsmatrix, een sprintstructuur en een rapportageframework dat je klanten en stakeholders begrijpen.",
    readTime: "8 min lezen",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/task-planning");
}

export default async function TaskPlanningPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = guidesTaskPlanningT[locale as Locale];
  const m = meta[locale as Locale];
  return (
    <GuidePageTemplate
      data={{
        ...m,
        ...t,
        locale: locale as Locale,
        path: "/guides/task-planning",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: "Task Planning", path: "/guides/task-planning" },
        ],
      }}
    />
  );
}
