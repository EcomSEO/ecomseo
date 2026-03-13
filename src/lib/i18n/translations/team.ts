import type { Locale } from "../config";

export const teamPageT: Record<
  Locale,
  {
    badge: string;
    heading: string;
    subtitle: string;
    members: { role: string; description: string }[];
    culture: {
      heading: string;
      items: { title: string; description: string }[];
    };
  }
> = {
  en: {
    badge: "Our Team",
    heading: "Meet the team that drives results for your brand",
    subtitle:
      "The only team in the world with rich expertise & experience both in direct-response ecommerce and SEO.",
    members: [
      { role: "Strategy & Innovation", description: "Leads the strategic direction, blending ecommerce growth with cutting-edge SEO innovation." },
      { role: "Off-Page Wizard", description: "Masters the art of link acquisition and digital PR to boost domain authority at scale." },
      { role: "Technical Jedi", description: "Architects technical SEO foundations that turn crawl budgets into revenue machines." },
      { role: "On-Page & PR Maestro", description: "Crafts content strategies and on-page optimizations that rank and convert." },
    ],
    culture: {
      heading: "Culture makes the dream work",
      items: [
        {
          title: "We say what we do, and do what we say.",
          description:
            "Communication & results. That's what drives our agency. We love getting involved deep into projects, and we love to give Ecommerce insights where we can.",
        },
        {
          title: "Fast-paced & goal-oriented",
          description:
            "Look. In SEO it's easy to get lost in the details. However, we don't. Why? Profit-focused goal setting with proven frameworks that leverage on big movers rather than small optimisations.",
        },
        {
          title: "AI's ambassadors",
          description:
            "We invest time & capital into building AI infrastructures (custom) for every project. Our SEO content output is 11.4x more effective than old-fashioned content writing",
        },
      ],
    },
  },
  de: {
    badge: "Unser Team",
    heading: "Das Team, das messbare Ergebnisse fuer Ihre Marke liefert",
    subtitle:
      "Das einzige Team weltweit mit tiefgreifender Expertise und Erfahrung sowohl im Direct-Response-E-Commerce als auch in SEO.",
    members: [
      { role: "Strategie & Innovation", description: "Leitet die strategische Ausrichtung und verbindet E-Commerce-Wachstum mit innovativer SEO." },
      { role: "Off-Page-Experte", description: "Beherrscht die Kunst des Linkaufbaus und der digitalen PR fuer skalierbare Domain-Autoritaet." },
      { role: "Technik-Spezialist", description: "Entwickelt technische SEO-Grundlagen, die Crawl-Budgets in Umsatz verwandeln." },
      { role: "On-Page & PR-Virtuose", description: "Erstellt Content-Strategien und On-Page-Optimierungen, die ranken und konvertieren." },
    ],
    culture: {
      heading: "Unsere Kultur macht den Unterschied",
      items: [
        {
          title: "Wir sagen, was wir tun -- und tun, was wir sagen.",
          description:
            "Kommunikation und Ergebnisse. Das treibt unsere Agentur an. Wir lieben es, tief in Projekte einzutauchen, und teilen gerne unsere E-Commerce-Insights, wo immer wir koennen.",
        },
        {
          title: "Schnell und zielorientiert",
          description:
            "Seien wir ehrlich: Im SEO verliert man sich leicht in Details. Wir nicht. Warum? Gewinnorientierte Zielsetzung mit bewaehrten Frameworks, die auf grosse Hebel statt auf kleine Optimierungen setzen.",
        },
        {
          title: "Botschafter der KI",
          description:
            "Wir investieren Zeit und Kapital in den Aufbau massgeschneiderter KI-Infrastrukturen fuer jedes Projekt. Unser SEO-Content-Output ist 11,4x effektiver als herkoemmliches Content-Writing.",
        },
      ],
    },
  },
  fr: {
    badge: "Notre equipe",
    heading: "Decouvrez l'equipe qui genere des resultats pour votre marque",
    subtitle:
      "La seule equipe au monde combinant une expertise approfondie en e-commerce a reponse directe et en SEO.",
    members: [
      { role: "Strategie & Innovation", description: "Dirige la vision strategique, alliant croissance e-commerce et innovation SEO." },
      { role: "Expert Off-Page", description: "Maitrise l'art de l'acquisition de liens et des RP digitales pour renforcer l'autorite de domaine." },
      { role: "Specialiste technique", description: "Concoit des fondations SEO techniques qui transforment les budgets de crawl en revenus." },
      { role: "Virtuose On-Page & RP", description: "Elabore des strategies de contenu et des optimisations on-page qui classent et convertissent." },
    ],
    culture: {
      heading: "La culture au coeur de la reussite",
      items: [
        {
          title: "Nous disons ce que nous faisons, et faisons ce que nous disons.",
          description:
            "Communication et resultats. C'est ce qui anime notre agence. Nous adorons nous impliquer en profondeur dans les projets et partager nos insights e-commerce des que possible.",
        },
        {
          title: "Rapides et orientes resultats",
          description:
            "Soyons francs : en SEO, il est facile de se perdre dans les details. Pas nous. Pourquoi ? Une approche axee sur le profit avec des frameworks eprouves qui privilegient les grands leviers aux petites optimisations.",
        },
        {
          title: "Ambassadeurs de l'IA",
          description:
            "Nous investissons du temps et du capital dans la construction d'infrastructures IA sur mesure pour chaque projet. Notre production de contenu SEO est 11,4x plus efficace que la redaction traditionnelle.",
        },
      ],
    },
  },
  es: {
    badge: "Nuestro equipo",
    heading: "Conoce al equipo que impulsa resultados para tu marca",
    subtitle:
      "El unico equipo en el mundo con amplia experiencia tanto en e-commerce de respuesta directa como en SEO.",
    members: [
      { role: "Estrategia e Innovacion", description: "Lidera la direccion estrategica, combinando crecimiento en e-commerce con innovacion SEO." },
      { role: "Experto Off-Page", description: "Domina el arte de la adquisicion de enlaces y las RRPP digitales para impulsar la autoridad del dominio." },
      { role: "Especialista tecnico", description: "Disenya cimientos de SEO tecnico que convierten presupuestos de rastreo en ingresos." },
      { role: "Virtuoso On-Page y RRPP", description: "Crea estrategias de contenido y optimizaciones on-page que posicionan y convierten." },
    ],
    culture: {
      heading: "La cultura marca la diferencia",
      items: [
        {
          title: "Decimos lo que hacemos y hacemos lo que decimos.",
          description:
            "Comunicacion y resultados. Eso es lo que mueve nuestra agencia. Nos encanta involucrarnos a fondo en los proyectos y compartir nuestros insights de e-commerce siempre que podemos.",
        },
        {
          title: "Rapidos y orientados a objetivos",
          description:
            "Seamos claros: en SEO es facil perderse en los detalles. Nosotros no lo hacemos. Por que? Objetivos enfocados en rentabilidad con frameworks probados que aprovechan los grandes palancas en lugar de pequenas optimizaciones.",
        },
        {
          title: "Embajadores de la IA",
          description:
            "Invertimos tiempo y capital en construir infraestructuras de IA personalizadas para cada proyecto. Nuestra produccion de contenido SEO es 11,4x mas efectiva que la redaccion tradicional.",
        },
      ],
    },
  },
  it: {
    badge: "Il nostro team",
    heading: "Scopri il team che genera risultati per il tuo brand",
    subtitle:
      "L'unico team al mondo con profonda competenza ed esperienza sia nell'e-commerce a risposta diretta che nella SEO.",
    members: [
      { role: "Strategia e Innovazione", description: "Guida la direzione strategica, unendo crescita e-commerce e innovazione SEO." },
      { role: "Esperto Off-Page", description: "Padroneggia l'arte dell'acquisizione link e delle PR digitali per potenziare l'autorita del dominio." },
      { role: "Specialista tecnico", description: "Progetta fondamenta SEO tecniche che trasformano i budget di crawl in ricavi." },
      { role: "Virtuoso On-Page e PR", description: "Crea strategie di contenuto e ottimizzazioni on-page che posizionano e convertono." },
    ],
    culture: {
      heading: "La cultura fa la differenza",
      items: [
        {
          title: "Diciamo quello che facciamo e facciamo quello che diciamo.",
          description:
            "Comunicazione e risultati. Questo guida la nostra agenzia. Ci piace immergerci a fondo nei progetti e condividere le nostre intuizioni sull'e-commerce ogni volta che possiamo.",
        },
        {
          title: "Veloci e orientati agli obiettivi",
          description:
            "Diciamolo: nella SEO e facile perdersi nei dettagli. Noi no. Perche? Obiettivi focalizzati sul profitto con framework collaudati che puntano sulle grandi leve anziche sulle piccole ottimizzazioni.",
        },
        {
          title: "Ambasciatori dell'IA",
          description:
            "Investiamo tempo e capitale nella costruzione di infrastrutture IA personalizzate per ogni progetto. La nostra produzione di contenuti SEO e 11,4 volte piu efficace della scrittura tradizionale.",
        },
      ],
    },
  },
  nl: {
    badge: "Ons team",
    heading: "Maak kennis met het team dat resultaten levert voor jouw merk",
    subtitle:
      "Het enige team ter wereld met diepgaande expertise en ervaring in zowel direct-response e-commerce als SEO.",
    members: [
      { role: "Strategie & Innovatie", description: "Leidt de strategische richting en combineert e-commerce groei met baanbrekende SEO-innovatie." },
      { role: "Off-Page Expert", description: "Beheerst de kunst van linkacquisitie en digitale PR om domeinautoriteit op schaal te versterken." },
      { role: "Technisch Specialist", description: "Ontwerpt technische SEO-fundamenten die crawlbudgetten omzetten in omzet." },
      { role: "On-Page & PR Virtuoos", description: "Creëert contentstrategieën en on-page optimalisaties die ranken en converteren." },
    ],
    culture: {
      heading: "Cultuur maakt het verschil",
      items: [
        {
          title: "We zeggen wat we doen, en doen wat we zeggen.",
          description:
            "Communicatie en resultaten. Dat is wat onze agency drijft. We duiken graag diep in projecten en delen onze e-commerce-inzichten waar we kunnen.",
        },
        {
          title: "Snel en doelgericht",
          description:
            "Eerlijk is eerlijk: in SEO raak je makkelijk verdwaald in de details. Wij niet. Waarom? Winstgerichte doelstellingen met bewezen frameworks die inzetten op grote hefbomen in plaats van kleine optimalisaties.",
        },
        {
          title: "Ambassadeurs van AI",
          description:
            "We investeren tijd en kapitaal in het bouwen van op maat gemaakte AI-infrastructuren voor elk project. Onze SEO-contentproductie is 11,4x effectiever dan traditioneel schrijven.",
        },
      ],
    },
  },
};
