import type { Locale } from "../config";

export const contactPageT: Record<Locale, {
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    openForm: string;
    learnMore: string;
  };
  actions: {
    whatsapp: string;
    book30min: string;
  };
  form: {
    firstName: string;
    firstNamePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    website: string;
    websitePlaceholder: string;
    howCanWeHelp: string;
    messagePlaceholder: string;
    sendEmail: string;
  };
  team: {
    badge: string;
    heading: string;
    description: string;
    fabianRole: string;
    fabianCta: string;
  };
  faqItems: { question: string; answer: string }[];
  checkAllFaq: string;
}> = {
  en: {
    hero: {
      badge: "Backed by 19+ brand owners",
      heading: "Don't be a stranger, say hello!",
      subtitle: "Solving SEO for ecommerce brands with a profit-focused approach. Multiple 8 figures+ generated through our frameworks.",
      openForm: "Open Form",
      learnMore: "Learn More",
    },
    actions: {
      whatsapp: "Whatsapp",
      book30min: "Book 30 min",
    },
    form: {
      firstName: "First Name",
      firstNamePlaceholder: "Your first name",
      lastName: "Last Name",
      lastNamePlaceholder: "Your last name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      phonePlaceholder: "Your phone number",
      website: "Website",
      websitePlaceholder: "https://yourwebsite.com",
      howCanWeHelp: "How can we help?",
      messagePlaceholder: "Tell us about your project...",
      sendEmail: "Send email",
    },
    team: {
      badge: "We understand ecom",
      heading: "We speak the same language.",
      description: "We breath and talk e-commerce (and Dutch). That's specialisation.",
      fabianRole: "CEO at EcomSEO, Brand Owner",
      fabianCta: "Get a Free Proposal from Fabian",
    },
    faqItems: [
      {
        question: "What can I expect from EcomSEO when we start working together?",
        answer: "We handle your complete SEO channel A-Z. We will connect with your team/agencies about strategy, reporting, and execution. You'll get transparent updates and a clear roadmap from day one.",
      },
      {
        question: "What does EcomSEO expect from me in a cooperation?",
        answer: "We expect you to set up communication channels with your team. When we talk SEO, we're the experts. So let us do our job. We give you transparent reporting, we can hop on meetings once a week. But after all, we require decision making power to take fast actions.",
      },
    ],
    checkAllFaq: "Check all FAQ",
  },
  de: {
    hero: {
      badge: "Unterstuetzt von 19+ Markeninhabern",
      heading: "Sei kein Fremder -- sag Hallo!",
      subtitle: "Wir loesen SEO fuer E-Commerce-Marken mit einem gewinnorientierten Ansatz. Mehrfach achtstellige Umsaetze durch unsere Frameworks generiert.",
      openForm: "Formular oeffnen",
      learnMore: "Mehr erfahren",
    },
    actions: {
      whatsapp: "WhatsApp",
      book30min: "30 Min. buchen",
    },
    form: {
      firstName: "Vorname",
      firstNamePlaceholder: "Ihr Vorname",
      lastName: "Nachname",
      lastNamePlaceholder: "Ihr Nachname",
      email: "E-Mail",
      emailPlaceholder: "ihre@email.de",
      phone: "Telefon",
      phonePlaceholder: "Ihre Telefonnummer",
      website: "Website",
      websitePlaceholder: "https://ihrewebsite.de",
      howCanWeHelp: "Wie koennen wir helfen?",
      messagePlaceholder: "Erzaehlen Sie uns von Ihrem Projekt...",
      sendEmail: "E-Mail senden",
    },
    team: {
      badge: "Wir verstehen E-Commerce",
      heading: "Wir sprechen dieselbe Sprache.",
      description: "Wir leben und atmen E-Commerce (und Niederlaendisch). Das ist Spezialisierung.",
      fabianRole: "CEO bei EcomSEO, Markeninhaber",
      fabianCta: "Kontakt mit Fabian aufnehmen",
    },
    faqItems: [
      {
        question: "Was kann ich von EcomSEO erwarten, wenn wir zusammenarbeiten?",
        answer: "Wir uebernehmen Ihren kompletten SEO-Kanal von A bis Z. Wir stimmen uns mit Ihrem Team und Ihren Agenturen zu Strategie, Reporting und Umsetzung ab. Sie erhalten transparente Updates und eine klare Roadmap ab Tag eins.",
      },
      {
        question: "Was erwartet EcomSEO von mir in der Zusammenarbeit?",
        answer: "Wir erwarten, dass Sie Kommunikationskanaele mit Ihrem Team einrichten. Wenn es um SEO geht, sind wir die Experten. Lassen Sie uns unsere Arbeit machen. Wir liefern transparentes Reporting und koennen woechentlich Meetings abhalten. Aber letztendlich brauchen wir Entscheidungsbefugnis, um schnell handeln zu koennen.",
      },
    ],
    checkAllFaq: "Alle FAQ ansehen",
  },
  fr: {
    hero: {
      badge: "Soutenu par 19+ proprietaires de marques",
      heading: "Ne soyez pas un inconnu, dites bonjour !",
      subtitle: "Nous resolvons le SEO pour les marques e-commerce avec une approche axee sur le profit. Plusieurs chiffres d'affaires a 8 chiffres+ generes grace a nos frameworks.",
      openForm: "Ouvrir le formulaire",
      learnMore: "En savoir plus",
    },
    actions: {
      whatsapp: "WhatsApp",
      book30min: "Reserver 30 min",
    },
    form: {
      firstName: "Prenom",
      firstNamePlaceholder: "Votre prenom",
      lastName: "Nom",
      lastNamePlaceholder: "Votre nom",
      email: "E-mail",
      emailPlaceholder: "votre@email.fr",
      phone: "Telephone",
      phonePlaceholder: "Votre numero de telephone",
      website: "Site web",
      websitePlaceholder: "https://votresite.fr",
      howCanWeHelp: "Comment pouvons-nous vous aider ?",
      messagePlaceholder: "Parlez-nous de votre projet...",
      sendEmail: "Envoyer l'e-mail",
    },
    team: {
      badge: "Nous comprenons l'e-commerce",
      heading: "Nous parlons le meme langage.",
      description: "Nous vivons et parlons e-commerce (et neerlandais). C'est ca la specialisation.",
      fabianRole: "CEO chez EcomSEO, proprietaire de marque",
      fabianCta: "Contacter Fabian",
    },
    faqItems: [
      {
        question: "Que puis-je attendre d'EcomSEO quand nous commencons a travailler ensemble ?",
        answer: "Nous gerons votre canal SEO de A a Z. Nous nous coordonnons avec votre equipe et vos agences sur la strategie, le reporting et l'execution. Vous obtenez des mises a jour transparentes et une feuille de route claire des le premier jour.",
      },
      {
        question: "Qu'attend EcomSEO de moi dans cette collaboration ?",
        answer: "Nous attendons que vous mettiez en place des canaux de communication avec votre equipe. En matiere de SEO, nous sommes les experts. Laissez-nous faire notre travail. Nous vous fournissons des rapports transparents et pouvons organiser des reunions hebdomadaires. Mais en fin de compte, nous avons besoin d'un pouvoir de decision pour agir rapidement.",
      },
    ],
    checkAllFaq: "Voir toutes les FAQ",
  },
  es: {
    hero: {
      badge: "Respaldados por 19+ propietarios de marcas",
      heading: "No seas un desconocido, di hola!",
      subtitle: "Resolvemos el SEO para marcas de ecommerce con un enfoque orientado al beneficio. Multiples cifras de 8 digitos+ generadas a traves de nuestros frameworks.",
      openForm: "Abrir formulario",
      learnMore: "Saber mas",
    },
    actions: {
      whatsapp: "WhatsApp",
      book30min: "Reservar 30 min",
    },
    form: {
      firstName: "Nombre",
      firstNamePlaceholder: "Tu nombre",
      lastName: "Apellido",
      lastNamePlaceholder: "Tu apellido",
      email: "Correo electronico",
      emailPlaceholder: "tu@email.es",
      phone: "Telefono",
      phonePlaceholder: "Tu numero de telefono",
      website: "Sitio web",
      websitePlaceholder: "https://tusitio.es",
      howCanWeHelp: "Como podemos ayudarte?",
      messagePlaceholder: "Cuentanos sobre tu proyecto...",
      sendEmail: "Enviar correo",
    },
    team: {
      badge: "Entendemos el ecommerce",
      heading: "Hablamos el mismo idioma.",
      description: "Vivimos y hablamos ecommerce (y neerlandes). Eso es especializacion.",
      fabianRole: "CEO en EcomSEO, propietario de marca",
      fabianCta: "Contactar con Fabian",
    },
    faqItems: [
      {
        question: "Que puedo esperar de EcomSEO cuando empecemos a trabajar juntos?",
        answer: "Gestionamos tu canal SEO completo de la A a la Z. Nos coordinaremos con tu equipo y agencias sobre estrategia, reportes y ejecucion. Obtendras actualizaciones transparentes y una hoja de ruta clara desde el primer dia.",
      },
      {
        question: "Que espera EcomSEO de mi en la colaboracion?",
        answer: "Esperamos que establezcas canales de comunicacion con tu equipo. Cuando hablamos de SEO, somos los expertos. Dejanos hacer nuestro trabajo. Te ofrecemos reportes transparentes y podemos tener reuniones semanales. Pero al final, necesitamos poder de decision para actuar rapidamente.",
      },
    ],
    checkAllFaq: "Ver todas las FAQ",
  },
  it: {
    hero: {
      badge: "Supportati da 19+ proprietari di brand",
      heading: "Non essere uno sconosciuto, salutaci!",
      subtitle: "Risolviamo la SEO per brand e-commerce con un approccio orientato al profitto. Fatturati a 8 cifre+ generati attraverso i nostri framework.",
      openForm: "Apri il modulo",
      learnMore: "Scopri di piu",
    },
    actions: {
      whatsapp: "WhatsApp",
      book30min: "Prenota 30 min",
    },
    form: {
      firstName: "Nome",
      firstNamePlaceholder: "Il tuo nome",
      lastName: "Cognome",
      lastNamePlaceholder: "Il tuo cognome",
      email: "E-mail",
      emailPlaceholder: "tua@email.it",
      phone: "Telefono",
      phonePlaceholder: "Il tuo numero di telefono",
      website: "Sito web",
      websitePlaceholder: "https://iltuosito.it",
      howCanWeHelp: "Come possiamo aiutarti?",
      messagePlaceholder: "Raccontaci del tuo progetto...",
      sendEmail: "Invia e-mail",
    },
    team: {
      badge: "Capiamo l'e-commerce",
      heading: "Parliamo la stessa lingua.",
      description: "Viviamo e parliamo di e-commerce (e olandese). Questa e specializzazione.",
      fabianRole: "CEO di EcomSEO, proprietario di brand",
      fabianCta: "Contatta Fabian",
    },
    faqItems: [
      {
        question: "Cosa posso aspettarmi da EcomSEO quando iniziamo a lavorare insieme?",
        answer: "Gestiamo il tuo canale SEO dalla A alla Z. Ci coordineremo con il tuo team e le tue agenzie su strategia, reportistica ed esecuzione. Avrai aggiornamenti trasparenti e una roadmap chiara fin dal primo giorno.",
      },
      {
        question: "Cosa si aspetta EcomSEO da me nella collaborazione?",
        answer: "Ci aspettiamo che tu configuri i canali di comunicazione con il tuo team. Quando si parla di SEO, siamo noi gli esperti. Lasciaci fare il nostro lavoro. Ti forniamo reportistica trasparente e possiamo fare riunioni settimanali. Ma in definitiva, abbiamo bisogno di potere decisionale per agire velocemente.",
      },
    ],
    checkAllFaq: "Vedi tutte le FAQ",
  },
  nl: {
    hero: {
      badge: "Ondersteund door 19+ merkeigenaren",
      heading: "Wees geen vreemde, zeg hallo!",
      subtitle: "Wij lossen SEO op voor e-commercemerken met een winstgerichte aanpak. Meervoudige 8-cijferige omzetten gegenereerd via onze frameworks.",
      openForm: "Formulier openen",
      learnMore: "Meer weten",
    },
    actions: {
      whatsapp: "WhatsApp",
      book30min: "30 min boeken",
    },
    form: {
      firstName: "Voornaam",
      firstNamePlaceholder: "Je voornaam",
      lastName: "Achternaam",
      lastNamePlaceholder: "Je achternaam",
      email: "E-mail",
      emailPlaceholder: "jouw@email.nl",
      phone: "Telefoon",
      phonePlaceholder: "Je telefoonnummer",
      website: "Website",
      websitePlaceholder: "https://jouwwebsite.nl",
      howCanWeHelp: "Hoe kunnen we helpen?",
      messagePlaceholder: "Vertel ons over je project...",
      sendEmail: "E-mail versturen",
    },
    team: {
      badge: "Wij begrijpen e-commerce",
      heading: "We spreken dezelfde taal.",
      description: "Wij ademen en praten e-commerce (en Nederlands). Dat is specialisatie.",
      fabianRole: "CEO bij EcomSEO, merkeigenaar",
      fabianCta: "Neem contact op met Fabian",
    },
    faqItems: [
      {
        question: "Wat kan ik verwachten van EcomSEO als we gaan samenwerken?",
        answer: "Wij beheren je complete SEO-kanaal van A tot Z. We stemmen af met je team en bureaus over strategie, rapportage en uitvoering. Je krijgt transparante updates en een duidelijke roadmap vanaf dag een.",
      },
      {
        question: "Wat verwacht EcomSEO van mij in een samenwerking?",
        answer: "We verwachten dat je communicatiekanalen opzet met je team. Als het over SEO gaat, zijn wij de experts. Laat ons ons werk doen. We leveren transparante rapportages en kunnen wekelijks overleggen. Maar uiteindelijk hebben we beslissingsbevoegdheid nodig om snel te kunnen handelen.",
      },
    ],
    checkAllFaq: "Alle FAQ bekijken",
  },
};
