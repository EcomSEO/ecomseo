import type { Locale } from "../config";

export const teamMemberDetailT: Record<Locale, {
  expertArea: string;
  about: string;
  interests: string;
  connectWith: string;
}> = {
  en: {
    expertArea: "Expert Area",
    about: "About",
    interests: "Interests",
    connectWith: "Connect with",
  },
  de: {
    expertArea: "Fachgebiet",
    about: "Ueber",
    interests: "Interessen",
    connectWith: "Vernetzen mit",
  },
  fr: {
    expertArea: "Domaine d'expertise",
    about: "A propos de",
    interests: "Centres d'interet",
    connectWith: "Se connecter avec",
  },
  es: {
    expertArea: "Area de experiencia",
    about: "Sobre",
    interests: "Intereses",
    connectWith: "Conectar con",
  },
  it: {
    expertArea: "Area di competenza",
    about: "Chi e",
    interests: "Interessi",
    connectWith: "Connettiti con",
  },
  nl: {
    expertArea: "Expertisegebied",
    about: "Over",
    interests: "Interesses",
    connectWith: "Verbind met",
  },
};
