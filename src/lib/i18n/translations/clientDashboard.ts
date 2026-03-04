import type { Locale } from "../config";

export const clientDashboardT: Record<Locale, {
  badge: string;
  heading: string;
  description: string;
  backHome: string;
}> = {
  en: {
    badge: "Client Dashboard",
    heading: "Our Client Dashboard is launching soon\u2026",
    description: "Transparent reporting, task management and deep insights. Still in beta. Reach out to our team in Slack or Whatsapp to get early access.",
    backHome: "Go back to Home",
  },
  de: {
    badge: "Kunden-Dashboard",
    heading: "Unser Kunden-Dashboard startet bald\u2026",
    description: "Transparente Berichte, Aufgabenverwaltung und tiefgehende Einblicke. Noch in der Beta-Phase. Kontaktieren Sie unser Team ueber Slack oder WhatsApp fuer einen fruehen Zugang.",
    backHome: "Zurueck zur Startseite",
  },
  fr: {
    badge: "Tableau de bord client",
    heading: "Notre tableau de bord client arrive bientot\u2026",
    description: "Rapports transparents, gestion des taches et analyses approfondies. Encore en beta. Contactez notre equipe sur Slack ou WhatsApp pour un acces anticipe.",
    backHome: "Retour a l'accueil",
  },
  es: {
    badge: "Panel de cliente",
    heading: "Nuestro panel de cliente se lanza pronto\u2026",
    description: "Informes transparentes, gestion de tareas e insights profundos. Aun en beta. Contacta a nuestro equipo en Slack o WhatsApp para acceso anticipado.",
    backHome: "Volver al inicio",
  },
  it: {
    badge: "Dashboard cliente",
    heading: "La nostra dashboard cliente arriva presto\u2026",
    description: "Report trasparenti, gestione attivita e analisi approfondite. Ancora in beta. Contatta il nostro team su Slack o WhatsApp per un accesso anticipato.",
    backHome: "Torna alla home",
  },
  nl: {
    badge: "Klantendashboard",
    heading: "Ons klantendashboard wordt binnenkort gelanceerd\u2026",
    description: "Transparante rapportages, taakbeheer en diepgaande inzichten. Nog in beta. Neem contact op met ons team via Slack of WhatsApp voor vroege toegang.",
    backHome: "Terug naar home",
  },
};
