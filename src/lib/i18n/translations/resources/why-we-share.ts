import type { Locale } from "../../config";

export const whyWeShareT: Record<Locale, {
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    cta: string;
    learnMore: string;
  };
  transparency: {
    badge: string;
    heading: string;
    body: string;
  };
  process: {
    badge: string;
    heading: string;
    subtitle: string;
    values: { title: string; description: string }[];
  };
  ecom: {
    badge: string;
    heading: string;
    body: string;
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };
}> = {
  en: {
    hero: {
      badge: "Why we share",
      heading: "Why share so much knowledge? Goodwill's why.",
      subtitle: "We believe in goodwill. We know we're the best in the game. We develop industry-leading tactics.",
      cta: "Get a Free Audit",
      learnMore: "Learn More",
    },
    transparency: {
      badge: "Transparency",
      heading: "Sharing is caring. We care.",
      body: "We share our results because we believe in a domino effect. When you see what's possible, you invest in growth. We work with a limited group of ecommerce businesses -- which means every client gets our full attention and best work.",
    },
    process: {
      badge: "Process",
      heading: "Sharing is our marketing.",
      subtitle: "We don't have a sales team. We just show what we do.",
      values: [
        {
          title: "100% Transparency",
          description: "Live dashboards, Slack/WhatsApp channels, and monthly strategy calls. No black-box SEO. Full visibility into everything we do.",
        },
        {
          title: "Proven Process",
          description: "Developed by SEO specialists who've scaled 20+ ecommerce brands. Every tactic is battle-tested on real stores.",
        },
        {
          title: "Profit-Focused",
          description: "We prioritize high ROI tasks. Every recommendation ties back to revenue impact, not vanity metrics.",
        },
      ],
    },
    ecom: {
      badge: "We understand ecom",
      heading: "We speak the same language.",
      body: "We breath and talk e-commerce (and Dutch). That's specialisation. Every conversation, every recommendation, and every strategy is built around understanding what makes online stores succeed.",
    },
    faq: {
      heading: "Common Questions",
      items: [
        {
          question: "What can I expect from your free resources?",
          answer: "Actionable, no-fluff ecommerce SEO knowledge. We share real strategies we use with our clients -- not watered-down blog content. Expect checklists, frameworks, and step-by-step guides you can implement immediately.",
        },
        {
          question: "Why give away your best tactics?",
          answer: "Because the brands that can execute on their own will. And the brands that want experts to do it for them will come to us -- knowing we're the real deal. It's a win-win.",
        },
      ],
    },
  },
  de: {
    hero: {
      badge: "Warum wir teilen",
      heading: "Warum so viel Wissen teilen? Aus Goodwill.",
      subtitle: "Wir glauben an Goodwill. Wir wissen, dass wir die Besten im Spiel sind. Wir entwickeln branchenfuhrende Taktiken.",
      cta: "Kontakt aufnehmen",
      learnMore: "Mehr erfahren",
    },
    transparency: {
      badge: "Transparenz",
      heading: "Teilen zeigt, dass man sich kummert. Wir kummern uns.",
      body: "Wir teilen unsere Ergebnisse, weil wir an einen Dominoeffekt glauben. Wenn Sie sehen, was moglich ist, investieren Sie in Wachstum. Wir arbeiten mit einer begrenzten Gruppe von E-Commerce-Unternehmen -- das bedeutet, jeder Kunde bekommt unsere volle Aufmerksamkeit und beste Arbeit.",
    },
    process: {
      badge: "Prozess",
      heading: "Teilen ist unser Marketing.",
      subtitle: "Wir haben kein Vertriebsteam. Wir zeigen einfach, was wir tun.",
      values: [
        {
          title: "100% Transparenz",
          description: "Live-Dashboards, Slack/WhatsApp-Kanale und monatliche Strategiegesprache. Kein Blackbox-SEO. Volle Einsicht in alles, was wir tun.",
        },
        {
          title: "Bewahrter Prozess",
          description: "Entwickelt von SEO-Spezialisten, die uber 20 E-Commerce-Marken skaliert haben. Jede Taktik ist praxiserprobt an echten Shops.",
        },
        {
          title: "Gewinnorientiert",
          description: "Wir priorisieren Aufgaben mit hohem ROI. Jede Empfehlung ist an den Umsatzeffekt geknupft, nicht an Eitelkeitsmetriken.",
        },
      ],
    },
    ecom: {
      badge: "Wir verstehen E-Commerce",
      heading: "Wir sprechen dieselbe Sprache.",
      body: "Wir atmen und reden E-Commerce (und Niederlandisch). Das ist Spezialisierung. Jedes Gesprach, jede Empfehlung und jede Strategie basiert darauf, zu verstehen, was Onlineshops erfolgreich macht.",
    },
    faq: {
      heading: "Haufige Fragen",
      items: [
        {
          question: "Was kann ich von Ihren kostenlosen Ressourcen erwarten?",
          answer: "Umsetzbares, gehaltvoles E-Commerce-SEO-Wissen. Wir teilen echte Strategien, die wir mit unseren Kunden anwenden -- kein verwasserter Blog-Content. Erwarten Sie Checklisten, Frameworks und Schritt-fur-Schritt-Anleitungen, die Sie sofort umsetzen konnen.",
        },
        {
          question: "Warum verschenken Sie Ihre besten Taktiken?",
          answer: "Weil die Marken, die selbst umsetzen konnen, es tun werden. Und die Marken, die Experten beauftragen mochten, kommen zu uns -- weil sie wissen, dass wir das Richtige liefern. Eine Win-Win-Situation.",
        },
      ],
    },
  },
  fr: {
    hero: {
      badge: "Pourquoi nous partageons",
      heading: "Pourquoi partager autant de connaissances ? Par bienveillance.",
      subtitle: "Nous croyons en la bienveillance. Nous savons que nous sommes les meilleurs dans ce domaine. Nous developpons des tactiques de pointe.",
      cta: "Nous contacter",
      learnMore: "En savoir plus",
    },
    transparency: {
      badge: "Transparence",
      heading: "Partager, c'est se soucier des autres. Nous nous en soucions.",
      body: "Nous partageons nos resultats parce que nous croyons a l'effet domino. Quand vous voyez ce qui est possible, vous investissez dans la croissance. Nous travaillons avec un groupe limite d'entreprises e-commerce -- ce qui signifie que chaque client beneficie de toute notre attention et de notre meilleur travail.",
    },
    process: {
      badge: "Processus",
      heading: "Le partage est notre marketing.",
      subtitle: "Nous n'avons pas d'equipe commerciale. Nous montrons simplement ce que nous faisons.",
      values: [
        {
          title: "100% Transparence",
          description: "Tableaux de bord en direct, canaux Slack/WhatsApp et appels strategiques mensuels. Pas de SEO en boite noire. Visibilite totale sur tout ce que nous faisons.",
        },
        {
          title: "Processus eprouve",
          description: "Developpe par des specialistes SEO ayant fait croitre plus de 20 marques e-commerce. Chaque tactique est testee sur de vraies boutiques.",
        },
        {
          title: "Axe sur le profit",
          description: "Nous priorisons les taches a fort ROI. Chaque recommandation est liee a l'impact sur le chiffre d'affaires, pas a des indicateurs de vanite.",
        },
      ],
    },
    ecom: {
      badge: "Nous comprenons l'e-commerce",
      heading: "Nous parlons le meme langage.",
      body: "Nous respirons et parlons e-commerce (et neerlandais). C'est de la specialisation. Chaque conversation, chaque recommandation et chaque strategie est construite autour de la comprehension de ce qui fait le succes des boutiques en ligne.",
    },
    faq: {
      heading: "Questions frequentes",
      items: [
        {
          question: "Que puis-je attendre de vos ressources gratuites ?",
          answer: "Des connaissances SEO e-commerce concretes et sans superflu. Nous partageons les vraies strategies que nous utilisons avec nos clients -- pas du contenu de blog edulcore. Attendez-vous a des checklists, des frameworks et des guides pas a pas que vous pouvez appliquer immediatement.",
        },
        {
          question: "Pourquoi donner vos meilleures tactiques ?",
          answer: "Parce que les marques qui peuvent executer seules le feront. Et les marques qui veulent que des experts le fassent pour elles viendront a nous -- sachant que nous sommes les vrais pros. Tout le monde y gagne.",
        },
      ],
    },
  },
  es: {
    hero: {
      badge: "Por que compartimos",
      heading: "Por que compartir tanto conocimiento? Por buena voluntad.",
      subtitle: "Creemos en la buena voluntad. Sabemos que somos los mejores en el juego. Desarrollamos tacticas lideres en la industria.",
      cta: "Contactanos",
      learnMore: "Saber mas",
    },
    transparency: {
      badge: "Transparencia",
      heading: "Compartir es demostrar que te importa. A nosotros nos importa.",
      body: "Compartimos nuestros resultados porque creemos en un efecto domino. Cuando ves lo que es posible, inviertes en crecimiento. Trabajamos con un grupo limitado de negocios e-commerce -- lo que significa que cada cliente recibe toda nuestra atencion y nuestro mejor trabajo.",
    },
    process: {
      badge: "Proceso",
      heading: "Compartir es nuestro marketing.",
      subtitle: "No tenemos equipo de ventas. Simplemente mostramos lo que hacemos.",
      values: [
        {
          title: "100% Transparencia",
          description: "Dashboards en vivo, canales de Slack/WhatsApp y llamadas de estrategia mensuales. Sin SEO de caja negra. Visibilidad total en todo lo que hacemos.",
        },
        {
          title: "Proceso probado",
          description: "Desarrollado por especialistas en SEO que han escalado mas de 20 marcas e-commerce. Cada tactica esta probada en tiendas reales.",
        },
        {
          title: "Enfocado en beneficios",
          description: "Priorizamos tareas con alto ROI. Cada recomendacion esta vinculada al impacto en ingresos, no a metricas de vanidad.",
        },
      ],
    },
    ecom: {
      badge: "Entendemos el e-commerce",
      heading: "Hablamos el mismo idioma.",
      body: "Respiramos y hablamos e-commerce (y neerlandes). Eso es especializacion. Cada conversacion, cada recomendacion y cada estrategia se construye en torno a entender lo que hace que las tiendas online tengan exito.",
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          question: "Que puedo esperar de vuestros recursos gratuitos?",
          answer: "Conocimiento SEO e-commerce practico y sin relleno. Compartimos estrategias reales que usamos con nuestros clientes -- no contenido de blog diluido. Espera checklists, frameworks y guias paso a paso que puedes implementar inmediatamente.",
        },
        {
          question: "Por que regalais vuestras mejores tacticas?",
          answer: "Porque las marcas que pueden ejecutar por su cuenta lo haran. Y las marcas que quieren que expertos lo hagan por ellas vendran a nosotros -- sabiendo que somos los autenticos profesionales. Todos ganan.",
        },
      ],
    },
  },
  it: {
    hero: {
      badge: "Perche condividiamo",
      heading: "Perche condividere cosi tanta conoscenza? Per buona volonta.",
      subtitle: "Crediamo nella buona volonta. Sappiamo di essere i migliori nel settore. Sviluppiamo tattiche all'avanguardia.",
      cta: "Contattaci",
      learnMore: "Scopri di piu",
    },
    transparency: {
      badge: "Trasparenza",
      heading: "Condividere significa prendersi cura. A noi importa.",
      body: "Condividiamo i nostri risultati perche crediamo nell'effetto domino. Quando vedi cosa e possibile, investi nella crescita. Lavoriamo con un gruppo limitato di aziende e-commerce -- il che significa che ogni cliente riceve tutta la nostra attenzione e il nostro miglior lavoro.",
    },
    process: {
      badge: "Processo",
      heading: "Condividere e il nostro marketing.",
      subtitle: "Non abbiamo un team commerciale. Mostriamo semplicemente quello che facciamo.",
      values: [
        {
          title: "100% Trasparenza",
          description: "Dashboard in tempo reale, canali Slack/WhatsApp e chiamate strategiche mensili. Nessuna SEO a scatola chiusa. Piena visibilita su tutto cio che facciamo.",
        },
        {
          title: "Processo collaudato",
          description: "Sviluppato da specialisti SEO che hanno fatto crescere oltre 20 brand e-commerce. Ogni tattica e testata su store reali.",
        },
        {
          title: "Orientato al profitto",
          description: "Diamo priorita alle attivita ad alto ROI. Ogni raccomandazione e collegata all'impatto sui ricavi, non a metriche di vanita.",
        },
      ],
    },
    ecom: {
      badge: "Capiamo l'e-commerce",
      heading: "Parliamo la stessa lingua.",
      body: "Respiriamo e parliamo e-commerce (e olandese). Questa e specializzazione. Ogni conversazione, ogni raccomandazione e ogni strategia e costruita attorno alla comprensione di cio che rende gli store online di successo.",
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          question: "Cosa posso aspettarmi dalle vostre risorse gratuite?",
          answer: "Conoscenza SEO e-commerce concreta e senza fronzoli. Condividiamo strategie reali che usiamo con i nostri clienti -- non contenuti di blog annacquati. Aspettati checklist, framework e guide passo passo che puoi implementare immediatamente.",
        },
        {
          question: "Perche regalate le vostre migliori tattiche?",
          answer: "Perche i brand che possono eseguire da soli lo faranno. E i brand che vogliono che siano gli esperti a farlo verranno da noi -- sapendo che siamo quelli veri. Tutti ci guadagnano.",
        },
      ],
    },
  },
  nl: {
    hero: {
      badge: "Waarom wij delen",
      heading: "Waarom zoveel kennis delen? Vanuit goodwill.",
      subtitle: "Wij geloven in goodwill. We weten dat we de besten zijn. We ontwikkelen toonaangevende tactieken.",
      cta: "Neem contact op",
      learnMore: "Meer leren",
    },
    transparency: {
      badge: "Transparantie",
      heading: "Delen is geven. Wij geven.",
      body: "We delen onze resultaten omdat we geloven in een domino-effect. Als je ziet wat er mogelijk is, investeer je in groei. We werken met een beperkte groep e-commercebedrijven -- wat betekent dat elke klant onze volledige aandacht en ons beste werk krijgt.",
    },
    process: {
      badge: "Proces",
      heading: "Delen is onze marketing.",
      subtitle: "We hebben geen salesteam. We laten gewoon zien wat we doen.",
      values: [
        {
          title: "100% Transparantie",
          description: "Live dashboards, Slack/WhatsApp-kanalen en maandelijkse strategiegesprekken. Geen blackbox-SEO. Volledig inzicht in alles wat we doen.",
        },
        {
          title: "Bewezen proces",
          description: "Ontwikkeld door SEO-specialisten die 20+ e-commercemerken hebben geschaald. Elke tactiek is beproefd op echte winkels.",
        },
        {
          title: "Winstgericht",
          description: "We geven prioriteit aan taken met een hoog ROI. Elke aanbeveling is gekoppeld aan omzetimpact, niet aan ijdelheidsstatistieken.",
        },
      ],
    },
    ecom: {
      badge: "Wij begrijpen e-commerce",
      heading: "We spreken dezelfde taal.",
      body: "We ademen en praten e-commerce (en Nederlands). Dat is specialisatie. Elk gesprek, elke aanbeveling en elke strategie is gebouwd rond het begrijpen van wat webwinkels succesvol maakt.",
    },
    faq: {
      heading: "Veelgestelde vragen",
      items: [
        {
          question: "Wat kan ik verwachten van jullie gratis bronnen?",
          answer: "Bruikbare, no-nonsense e-commerce SEO-kennis. We delen echte strategieen die we bij onze klanten toepassen -- geen verwaterde blogcontent. Verwacht checklists, frameworks en stapsgewijze gidsen die je direct kunt implementeren.",
        },
        {
          question: "Waarom delen jullie je beste tactieken?",
          answer: "Omdat merken die het zelf kunnen uitvoeren, dat zullen doen. En merken die experts willen inschakelen, komen naar ons -- wetende dat wij de echte experts zijn. Het is een win-win.",
        },
      ],
    },
  },
};
