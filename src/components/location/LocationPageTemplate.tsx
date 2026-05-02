import type { Location } from "@/data/locations";
import type { Locale } from "@/lib/i18n/config";
import type {
  ServicePageProps,
  FAQItem,
  ContentSection,
  RevenueWin,
} from "@/components/service/ServicePageTemplate";
import { LOCATION_MAP_SLUGS } from "@/data/locationMaps";

/* ── Lead-magnet copy: revenue-wins + booking-widget section ──
 * Pulled from the homepage Results section so commercial-intent
 * visitors see the same proof in dollars/euros, not vanity stats. */
const REVENUE_WINS_COPY: Record<
  string,
  {
    badge: string;
    heading: (city: string) => string;
    subtitle: string;
    cards: Array<{
      label: string;
      client: string;
      condition: string;
    }>;
  }
> = {
  fr: {
    badge: "RESULTATS REELS",
    heading: (city) =>
      `Voici ce que nous avons rapporte a des marques e-commerce comme la votre`,
    subtitle:
      "Resultats reels apres 12 mois de travail avec nous. Pas de vanity metrics, juste du chiffre d'affaires.",
    cards: [
      {
        label: "de CA annuel (+118%)",
        client: "pour cette marque Home & Living",
        condition: "apres 12 mois avec nous",
      },
      {
        label: "de CA annuel (+430%)",
        client: "pour cette marque Sante & Complements",
        condition: "apres 12 mois avec nous",
      },
      {
        label: "de CA annuel (+87%)",
        client: "pour cette marque Shapewear US",
        condition: "apres 12 mois avec nous",
      },
      {
        label: "de CA annuel (+38%)",
        client: "pour cette marque DTC Lifestyle",
        condition: "apres 12 mois avec nous",
      },
    ],
  },
  en: {
    badge: "REAL RESULTS",
    heading: () => `What we've delivered for e-commerce brands like yours`,
    subtitle:
      "Real revenue after 12 months of work with us. No vanity metrics, just dollars and euros.",
    cards: [
      { label: "yearly revenue (+118%)", client: "for this Home & Living brand", condition: "after 12 months with us" },
      { label: "yearly revenue (+430%)", client: "for this Health & Supplements brand", condition: "after 12 months with us" },
      { label: "yearly revenue (+87%)", client: "for this US Shapewear brand", condition: "after 12 months with us" },
      { label: "yearly revenue (+38%)", client: "for this DTC Lifestyle brand", condition: "after 12 months with us" },
    ],
  },
  nl: {
    badge: "ECHTE RESULTATEN",
    heading: () => `Wat we hebben gerealiseerd voor e-commerce merken zoals het jouwe`,
    subtitle: "Echte omzet na 12 maanden samenwerken. Geen vanity metrics, alleen euro's en dollars.",
    cards: [
      { label: "jaaromzet (+118%)", client: "voor dit Home & Living merk", condition: "na 12 maanden met ons" },
      { label: "jaaromzet (+430%)", client: "voor dit Health & Supplements merk", condition: "na 12 maanden met ons" },
      { label: "jaaromzet (+87%)", client: "voor dit US Shapewear merk", condition: "na 12 maanden met ons" },
      { label: "jaaromzet (+38%)", client: "voor dit DTC Lifestyle merk", condition: "na 12 maanden met ons" },
    ],
  },
  de: {
    badge: "ECHTE ERGEBNISSE",
    heading: () => `Das haben wir fuer E-Commerce-Marken wie Ihre erreicht`,
    subtitle: "Echter Umsatz nach 12 Monaten Zusammenarbeit. Keine Vanity Metrics, nur Euro und Dollar.",
    cards: [
      { label: "Jahresumsatz (+118%)", client: "fuer diese Home & Living Marke", condition: "nach 12 Monaten mit uns" },
      { label: "Jahresumsatz (+430%)", client: "fuer diese Health & Supplements Marke", condition: "nach 12 Monaten mit uns" },
      { label: "Jahresumsatz (+87%)", client: "fuer diese US Shapewear Marke", condition: "nach 12 Monaten mit uns" },
      { label: "Jahresumsatz (+38%)", client: "fuer diese DTC Lifestyle Marke", condition: "nach 12 Monaten mit uns" },
    ],
  },
  es: {
    badge: "RESULTADOS REALES",
    heading: () => `Esto es lo que hemos generado para marcas e-commerce como la tuya`,
    subtitle: "Facturacion real despues de 12 meses con nosotros. Sin vanity metrics, solo euros y dolares.",
    cards: [
      { label: "facturacion anual (+118%)", client: "para esta marca Home & Living", condition: "despues de 12 meses con nosotros" },
      { label: "facturacion anual (+430%)", client: "para esta marca de Salud y Suplementos", condition: "despues de 12 meses con nosotros" },
      { label: "facturacion anual (+87%)", client: "para esta marca US Shapewear", condition: "despues de 12 meses con nosotros" },
      { label: "facturacion anual (+38%)", client: "para esta marca DTC Lifestyle", condition: "despues de 12 meses con nosotros" },
    ],
  },
  it: {
    badge: "RISULTATI REALI",
    heading: () => `Ecco cosa abbiamo generato per brand e-commerce come il tuo`,
    subtitle: "Fatturato reale dopo 12 mesi di lavoro con noi. Niente vanity metric, solo euro e dollari.",
    cards: [
      { label: "fatturato annuo (+118%)", client: "per questo brand Home & Living", condition: "dopo 12 mesi con noi" },
      { label: "fatturato annuo (+430%)", client: "per questo brand Health & Supplements", condition: "dopo 12 mesi con noi" },
      { label: "fatturato annuo (+87%)", client: "per questo brand US Shapewear", condition: "dopo 12 mesi con noi" },
      { label: "fatturato annuo (+38%)", client: "per questo brand DTC Lifestyle", condition: "dopo 12 mesi con noi" },
    ],
  },
};

const REVENUE_AMOUNTS: Array<{ amount: string; screenshot: string; href: string }> = [
  { amount: "+$53,000,000", screenshot: "/images/clients/charts/revenue-53m.png", href: "/cases/norwegian-health-store" },
  { amount: "+€15,000,000", screenshot: "/images/clients/charts/revenue-15m.png", href: "/cases/dutch-health-brand" },
  { amount: "+€1,700,000", screenshot: "/images/clients/charts/revenue-1-7m.png", href: "/cases/english-health-site" },
  { amount: "+€597,000", screenshot: "/images/clients/charts/revenue-597k.png", href: "/cases/jewelry-dutch-brand-ecom" },
];

const BOOKING_COPY: Record<
  string,
  { badge: string; heading: (city: string) => string; subtitle: (city: string) => string }
> = {
  fr: {
    badge: "RESERVEZ — 100% GRATUIT, 30 MIN",
    heading: () => `Reservez 30 min avec Fabian`,
    subtitle: (city) =>
      `On ouvre votre boutique dans Semrush, on identifie les 3 plus grosses pertes de chiffre d'affaires, et on vous dit honnetement si on peut aider votre marque a ${city}. Pas de slides, pas de commercial.`,
  },
  en: {
    badge: "BOOK — FREE, 30 MIN",
    heading: () => `Book 30 minutes with Fabian`,
    subtitle: (city) =>
      `We open your store in Semrush, surface the 3 biggest revenue leaks, and tell you straight if we can help your brand in ${city}. No slides, no sales pitch.`,
  },
  nl: {
    badge: "BOEK — GRATIS, 30 MIN",
    heading: () => `Boek 30 minuten met Fabian`,
    subtitle: (city) =>
      `We openen je webshop in Semrush, brengen de 3 grootste omzetlekken in kaart en zeggen je eerlijk of we kunnen helpen in ${city}. Geen slides, geen salespraatje.`,
  },
  de: {
    badge: "BUCHEN — KOSTENLOS, 30 MIN",
    heading: () => `Buchen Sie 30 Minuten mit Fabian`,
    subtitle: (city) =>
      `Wir oeffnen Ihren Onlineshop in Semrush, finden die 3 groessten Umsatzlecks und sagen Ihnen ehrlich, ob wir in ${city} helfen koennen. Keine Slides, kein Verkaufsgespraech.`,
  },
  es: {
    badge: "RESERVA — GRATIS, 30 MIN",
    heading: () => `Reserva 30 minutos con Fabian`,
    subtitle: (city) =>
      `Abrimos tu tienda en Semrush, identificamos las 3 mayores fugas de facturacion y te decimos si podemos ayudar en ${city}. Sin slides, sin venta.`,
  },
  it: {
    badge: "PRENOTA — GRATIS, 30 MIN",
    heading: () => `Prenota 30 minuti con Fabian`,
    subtitle: (city) =>
      `Apriamo il tuo store in Semrush, individuiamo le 3 maggiori perdite di fatturato e ti diciamo onestamente se possiamo aiutarti a ${city}. Niente slide, niente vendita.`,
  },
};

/* ── Hero subtitle variants ──
 *
 * Each live location gets ONE of these N variants picked deterministically
 * by slug hash. This avoids the programmatic-SEO trap of every city in a
 * locale rendering the same templated body copy with only the city name
 * swapped — Google penalises that pattern, and human visitors reading two
 * pages back-to-back can clock it instantly.
 *
 * Constraints when adding/editing variants:
 *   - Always interpolate `${city}` so the page still ranks for the local term
 *   - Keep the brand count at "19+" (real number, not the inflated "50+"
 *     placeholder used in the legacy template)
 *   - Vary opening verb, sentence rhythm, and credibility signal
 *   - No em dashes — they're a humanizer red flag
 *   - 1–2 sentences max; longer than that pushes the CTA below the fold
 */
const HERO_SUBTITLE_VARIANTS: Record<string, Array<(city: string) => string>> = {
  fr: [
    (city) => `On a aidé 19+ boutiques e-commerce à débloquer leur trafic organique. Si la vôtre à ${city} stagne ou recule sur Google, c'est presque toujours réparable. 30 min avec Fabian, écran partagé, retour franc.`,
    (city) => `Vous avez monté votre boutique à ${city}, le produit marche, mais Google ne suit pas ? On voit ça toutes les semaines. Fabian ouvre votre site dans Semrush et vous montre exactement où ça coince.`,
    (city) => `Pas de pitch commercial. Fabian regarde votre boutique à ${city} en direct, vous dit où vous perdez du chiffre d'affaires organique, et si on peut vraiment aider. Au pire, vous repartez avec 3 actions concrètes.`,
    (city) => `On bosse uniquement avec des marques e-commerce. 19+ aujourd'hui, toutes DTC, toutes obsédées par leur croissance organique. Si votre boutique à ${city} colle à ce profil, parlons-en.`,
    (city) => `Le SEO d'une boutique en ligne ne ressemble en rien au SEO d'un cabinet d'avocat. On ne fait que ça depuis 10 ans. Si votre boutique à ${city} a du potentiel, Fabian le verra en 30 minutes.`,
  ],
  nl: [
    (city) => `We hebben 19+ webshops geholpen hun organische verkeer te ontgrendelen. Als die van jou in ${city} stagneert of zakt op Google, is dat meestal te repareren. 30 min met Fabian, screenshare, eerlijke feedback.`,
    (city) => `Je hebt je webshop in ${city} opgezet, het product werkt, maar Google blijft achter? Zien we elke week. Fabian opent je site in Semrush en laat je zien waar het precies vastloopt.`,
    (city) => `Geen salespitch. Fabian kijkt live naar jouw webshop in ${city}, vertelt je waar je organische omzet verliest, en of we echt kunnen helpen. In het slechtste geval ga je weg met 3 concrete acties.`,
    (city) => `We werken alleen met e-commerce merken. 19+ vandaag, allemaal DTC, allemaal geobsedeerd door organische groei. Past jouw shop in ${city} in dat profiel, dan praten we graag.`,
    (city) => `SEO voor een webshop is iets totaal anders dan SEO voor een advocatenkantoor. Wij doen alleen dit, al 10 jaar. Als jouw shop in ${city} potentieel heeft, ziet Fabian dat in 30 minuten.`,
  ],
  en: [
    (city) => `We've helped 19+ e-commerce stores unlock their organic traffic. If yours in ${city} is stagnant or sliding on Google, it's almost always fixable. 30 min with Fabian, screen shared, straight feedback.`,
    (city) => `You've built your store in ${city}, the product works, but Google won't move? We see it every week. Fabian opens your site in Semrush and shows you exactly where it's stuck.`,
    (city) => `No sales pitch. Fabian looks at your store in ${city} live, tells you where you're losing organic revenue, and whether we can actually help. Worst case, you walk away with 3 concrete actions.`,
    (city) => `We only work with e-commerce brands. 19+ today, all DTC, all obsessed with organic growth. If your store in ${city} fits that profile, let's talk.`,
    (city) => `SEO for an online store is nothing like SEO for a law firm. We only do this, for 10 years now. If your store in ${city} has potential, Fabian will see it in 30 minutes.`,
  ],
  de: [
    (city) => `Wir haben 19+ Onlineshops geholfen, ihren organischen Traffic freizusetzen. Wenn Ihrer in ${city} stagniert oder auf Google abrutscht, ist das fast immer reparierbar. 30 Min mit Fabian, Screen geteilt, ehrliches Feedback.`,
    (city) => `Sie haben Ihren Shop in ${city} aufgebaut, das Produkt läuft, aber Google bewegt sich nicht? Sehen wir jede Woche. Fabian öffnet Ihre Seite in Semrush und zeigt Ihnen genau, wo es hängt.`,
    (city) => `Kein Verkaufsgespräch. Fabian schaut sich Ihren Shop in ${city} live an, sagt Ihnen wo Sie organischen Umsatz verlieren, und ob wir wirklich helfen können. Im schlechtesten Fall gehen Sie mit 3 konkreten Aktionen raus.`,
    (city) => `Wir arbeiten ausschließlich mit E-Commerce-Marken. 19+ heute, alle DTC, alle besessen von organischem Wachstum. Wenn Ihr Shop in ${city} in dieses Profil passt, sprechen wir gerne.`,
    (city) => `SEO für einen Onlineshop hat nichts mit SEO für eine Anwaltskanzlei zu tun. Wir machen nur das, seit 10 Jahren. Wenn Ihr Shop in ${city} Potenzial hat, sieht Fabian das in 30 Minuten.`,
  ],
  es: [
    (city) => `Hemos ayudado a 19+ tiendas e-commerce a desbloquear su tráfico orgánico. Si la tuya en ${city} está estancada o cayendo en Google, casi siempre se puede arreglar. 30 min con Fabian, pantalla compartida, feedback directo.`,
    (city) => `Has montado tu tienda en ${city}, el producto funciona, pero Google no se mueve? Lo vemos cada semana. Fabian abre tu sitio en Semrush y te enseña exactamente dónde está el bloqueo.`,
    (city) => `Sin pitch comercial. Fabian mira tu tienda en ${city} en directo, te dice dónde pierdes facturación orgánica, y si podemos realmente ayudar. En el peor caso, te vas con 3 acciones concretas.`,
    (city) => `Solo trabajamos con marcas e-commerce. 19+ hoy, todas DTC, todas obsesionadas con el crecimiento orgánico. Si tu tienda en ${city} encaja en ese perfil, hablemos.`,
    (city) => `El SEO de una tienda online no se parece en nada al SEO de un despacho de abogados. Solo hacemos esto, desde hace 10 años. Si tu tienda en ${city} tiene potencial, Fabian lo verá en 30 minutos.`,
  ],
  it: [
    (city) => `Abbiamo aiutato 19+ store e-commerce a sbloccare il loro traffico organico. Se il tuo a ${city} è fermo o sta scendendo su Google, quasi sempre si può aggiustare. 30 min con Fabian, schermo condiviso, feedback diretto.`,
    (city) => `Hai messo su il tuo store a ${city}, il prodotto funziona, ma Google non si muove? Lo vediamo ogni settimana. Fabian apre il tuo sito in Semrush e ti mostra esattamente dov'è bloccato.`,
    (city) => `Niente pitch commerciale. Fabian guarda il tuo store a ${city} in diretta, ti dice dove perdi fatturato organico, e se possiamo davvero aiutare. Nel peggiore dei casi, te ne vai con 3 azioni concrete.`,
    (city) => `Lavoriamo solo con brand e-commerce. 19+ oggi, tutti DTC, tutti ossessionati dalla crescita organica. Se il tuo store a ${city} rientra in questo profilo, parliamone.`,
    (city) => `La SEO di uno store online non somiglia minimamente alla SEO di uno studio legale. Facciamo solo questo, da 10 anni. Se il tuo store a ${city} ha potenziale, Fabian lo vedrà in 30 minuti.`,
  ],
};

/* ── Hero H1 (heading) variants ──
 *
 * Same de-duplication strategy as the subtitle: 4 variants per locale,
 * picked deterministically by slug hash. The legacy template H1 read like
 * a meta title ("Agence SEO Besancon | plus de chiffre d'affaires via le
 * referencement naturel") — pipe separator, no human voice. These read
 * like real headlines.
 *
 * Constraints:
 *   - Always interpolate `${city}` so the H1 still ranks for the local term
 *   - Include the primary keyword pattern ("agence SEO", "SEO bureau",
 *     "SEO agency", etc.) somewhere in the headline for SEO weight
 *   - No pipe separators — they're a title-tag convention, not headline
 *   - Match the /demo voice (direct, opinionated, conversational)
 *   - Each variant gives the page a different angle: revenue-focus,
 *     differentiator, question hook, outcome promise
 */
const HERO_HEADING_VARIANTS: Record<string, Array<(city: string) => string>> = {
  fr: [
    (city) => `L'agence SEO à ${city} qui pense chiffre d'affaires avant rankings`,
    (city) => `Agence SEO e-commerce à ${city}. On fait pousser votre boutique sur Google.`,
    (city) => `Vous cherchez une agence SEO à ${city} ? Voici ce qu'on fait différemment.`,
    (city) => `Plus de ventes organiques pour votre boutique e-commerce à ${city}`,
  ],
  nl: [
    (city) => `Het SEO bureau in ${city} dat denkt in omzet, niet in rankings`,
    (city) => `SEO bureau ${city} voor e-commerce. We laten je webshop op Google groeien.`,
    (city) => `Op zoek naar een SEO bureau in ${city}? Dit doen wij anders.`,
    (city) => `Meer organische omzet voor jouw webshop in ${city}`,
  ],
  en: [
    (city) => `The SEO agency in ${city} that thinks in revenue, not rankings`,
    (city) => `E-commerce SEO agency in ${city}. We grow your store on Google.`,
    (city) => `Looking for an SEO agency in ${city}? Here's what we do differently.`,
    (city) => `More organic revenue for your online store in ${city}`,
  ],
  de: [
    (city) => `Die SEO-Agentur in ${city}, die in Umsatz denkt, nicht in Rankings`,
    (city) => `E-Commerce SEO-Agentur in ${city}. Wir bringen Ihren Shop auf Google nach oben.`,
    (city) => `Suchen Sie eine SEO-Agentur in ${city}? Das machen wir anders.`,
    (city) => `Mehr organischer Umsatz für Ihren Onlineshop in ${city}`,
  ],
  es: [
    (city) => `La agencia SEO en ${city} que piensa en facturación, no en rankings`,
    (city) => `Agencia SEO e-commerce en ${city}. Hacemos crecer tu tienda en Google.`,
    (city) => `Buscas una agencia SEO en ${city}? Esto hacemos diferente.`,
    (city) => `Más facturación orgánica para tu tienda online en ${city}`,
  ],
  it: [
    (city) => `L'agenzia SEO a ${city} che pensa al fatturato, non ai ranking`,
    (city) => `Agenzia SEO e-commerce a ${city}. Facciamo crescere il tuo store su Google.`,
    (city) => `Cerchi un'agenzia SEO a ${city}? Ecco cosa facciamo di diverso.`,
    (city) => `Più fatturato organico per il tuo store online a ${city}`,
  ],
};

/* Deterministic slug → variant index. Same slug always picks the same
 * variant so the page is stable across deploys (good for caching, good
 * for users who bookmark a specific page). Distribution is roughly
 * uniform across the 5 variants for the 38 FR + 29 NL slug set. */
function pickVariantIndex(slug: string, count: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % count;
}

/* Final FAQ-CTA copy — single conversion moment after objections.
 * All locales point at /demo. */
const FAQ_FINAL_CTA: Record<
  string,
  {
    heading: (city: string) => string;
    subtitle: (city: string) => string;
    ctaText: string;
  }
> = {
  fr: {
    heading: () => `Pret a faire decoller votre CA organique ?`,
    subtitle: (city) =>
      `Reservez 30 min avec Fabian. Audit gratuit de votre boutique a ${city}, sans engagement.`,
    ctaText: "Reserver mon audit gratuit",
  },
  en: {
    heading: () => `Ready to grow your organic revenue?`,
    subtitle: (city) =>
      `Book 30 min with Fabian. Free audit of your store in ${city}, no strings.`,
    ctaText: "Book my free audit",
  },
  nl: {
    heading: () => `Klaar om je organische omzet te laten groeien?`,
    subtitle: (city) =>
      `Boek 30 min met Fabian. Gratis audit van je webshop in ${city}, vrijblijvend.`,
    ctaText: "Plan mijn gratis audit",
  },
  de: {
    heading: () => `Bereit, Ihren organischen Umsatz zu steigern?`,
    subtitle: (city) =>
      `Buchen Sie 30 Min mit Fabian. Kostenloses Audit Ihres Onlineshops in ${city}, unverbindlich.`,
    ctaText: "Mein Gratis-Audit buchen",
  },
  es: {
    heading: () => `Listo para hacer crecer tu facturacion organica?`,
    subtitle: (city) =>
      `Reserva 30 min con Fabian. Auditoria gratis de tu tienda en ${city}, sin compromiso.`,
    ctaText: "Reservar mi auditoria gratis",
  },
  it: {
    heading: () => `Pronto a far crescere il tuo fatturato organico?`,
    subtitle: (city) =>
      `Prenota 30 min con Fabian. Audit gratuita del tuo store a ${city}, senza impegno.`,
    ctaText: "Prenota la mia audit gratuita",
  },
};

/* ------------------------------------------------------------------ */
/*  Locale strings for location pages                                  */
/* ------------------------------------------------------------------ */

interface LocationStrings {
  heroHeading: (city: string) => string;
  heroSubtitle: (city: string, kw1: string, kw2: string) => string;
  ctaText: string;
  trustBar: string;
  statsBadge: string;
  statsHeading: (city: string) => string;
  statsSubtitle: string;
  statsLabels: [string, string, string, string];
  benefitsBadge: string;
  benefitsHeading: (city: string, isSpecialist: boolean) => string;
  benefitsSubtitle: string;
  benefits: { title: string; description: string; href?: string }[];
  processBadge: string;
  processHeading: string;
  processSubtitle: string;
  processSteps: { number: string; title: string; description: string }[];
  casesBadge: string;
  casesHeading: string;
  casesSubtitle: string;
  casesCtaText: string;
  richTextBadge: (city: string) => string;
  richTextHeading: (keyword: string) => string;
  richTextNichesSuffix: string;
  richTextChallengeSuffix: string;
  richTextSpecialismHeading: string;
  richTextSpecialismBody: (keyword: string) => string;
  sectionEcommerce: (city: string) => string;
  sectionNiches: (city: string) => string;
  sectionChallenge: (city: string) => string;
  teamBadge: string;
  teamHeading: string;
  teamSubtitle: (city: string) => string;
  teamRole: string;
  deliverablesBadge: string;
  deliverablesHeading: string;
  deliverableItems: { title: string; description: string }[];
  faqItems: (city: string) => FAQItem[];
  faqCtaHeading: string;
  faqCtaSubtitle: (city: string) => string;
}

const strings: Record<string, LocationStrings> = {
  nl: {
    heroHeading: (city) => `SEO Bureau ${city}  | meer omzet uit organisch zoekverkeer`,
    heroSubtitle: (city, kw1, kw2) => `Op zoek naar een ${kw1}? Wij zijn ${kw2} en helpen e-commerce merken in ${city} groeien. 19+ webshops bediend, gemiddeld 140% meer organisch verkeer. Plan een gratis strategiegesprek.`,
    ctaText: "Plan gratis strategiegesprek",
    trustBar: "19+ e-commerce merken in Nederland werken met ons",
    statsBadge: "RESULTATEN",
    statsHeading: (city) => `Waarom e-commerce merken in ${city} met ons werken`,
    statsSubtitle: "We wijzen 70% van de aanvragen af. We gaan alleen aan de slag als we weten dat we meetbaar resultaat kunnen leveren voor jouw webshop.",
    statsLabels: ["E-commerce merken bediend", "Gemiddelde traffic groei", "Links gebouwd", "Talen en markten"],
    benefitsBadge: "DIENSTEN",
    benefitsHeading: (city, isSpecialist) => `Wat een ${isSpecialist ? "SEO specialist" : "SEO bureau"} in ${city} voor jouw webshop doet`,
    benefitsSubtitle: "Elke webshop is anders. We kijken eerst naar jouw specifieke situatie voordat we een plan maken.",
    benefits: [
      { title: "Technische SEO audit", description: "We checken je webshop op 200+ punten: sitesnelheid, crawlbaarheid, indexatie, structured data, canonical tags. Je krijgt een actieplan gesorteerd op impact.", href: "/ecommerce-seo" },
      { title: "Zoekwoordenstrategie", description: "We brengen 12.000+ zoekwoorden in kaart en filteren op koopintentie. Je krijgt een keyword map die laat zien welke pagina's je moet optimaliseren en waarom.", href: "/keyword-research" },
      { title: "On-page optimalisatie", description: "We optimaliseren titels, meta descriptions, koppen, interne links en content op je product- en categoriepagina's. Het doel: Google begrijpt je pagina's en rankt ze hoger.", href: "/content-writing" },
      { title: "Linkbuilding en digital PR", description: "Backlinks van relevante websites in jouw niche. We regelen dit via content outreach, digital PR en partnerschappen. Geen spammy links, alleen relevante sites.", href: "/link-building" },
      { title: "Shopify SEO", description: "We kennen de specifieke uitdagingen van Shopify: theme speed, liquid code, collection pages, duplicate content door varianten. Ook Shopify Plus.", href: "/shopify-seo" },
      { title: "Focus op omzet, niet rankings", description: "We meten succes in omzet uit organisch verkeer. Niet in hoeveel zoekwoorden je rankt. Als het verkeer niet koopt, is het waardeloos." },
    ],
    processBadge: "WERKWIJZE",
    processHeading: "Zo werken we samen",
    processSubtitle: "Dit is hoe een SEO-traject met ons eruitziet, van eerste gesprek tot maandelijkse groei.",
    processSteps: [
      { number: "01", title: "Gratis SEO audit en strategiegesprek", description: "We analyseren je webshop, bespreken je doelen en laten de grootste SEO-kansen zien. Je krijgt een concreet voorstel met verwachte resultaten en tijdlijn." },
      { number: "02", title: "Analyse en roadmap", description: "We doen een volledige technische audit, brengen het keyword landschap in kaart en analyseren de concurrentie. Dit wordt een SEO-roadmap voor 6-12 maanden." },
      { number: "03", title: "Uitvoering", description: "Ons team gaat aan de slag: technische fixes, content optimalisatie, linkbuilding. We werken direct samen met je development team." },
      { number: "04", title: "Rapportage en bijsturing", description: "Elke maand rapporteren we over organisch verkeer, rankings, conversies en omzet uit SEO. Wat werkt schalen we op. Wat niet werkt passen we aan." },
    ],
    casesBadge: "KLANTRESULTATEN",
    casesHeading: "Resultaten Van Onze E-Commerce SEO Trajecten",
    casesSubtitle: "Dit is wat er gebeurt als je SEO serieus neemt. Echte resultaten van echte webshops.",
    casesCtaText: "Bekijk alle cases",
    richTextBadge: (city) => `SEO IN ${city.toUpperCase()}`,
    richTextHeading: (keyword) => `${keyword.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}: wat je moet weten`,
    richTextNichesSuffix: " Wij kennen deze markt en weten welke zoekwoorden het meeste commerciele potentieel hebben in jouw niche.",
    richTextChallengeSuffix: " Wij meten succes in omzet uit organisch verkeer. Als een optimalisatie niet bijdraagt aan meer verkoop, doen we het niet.",
    richTextSpecialismHeading: "Waarom een gespecialiseerd ecommerce SEO bureau",
    richTextSpecialismBody: (kw) => `De meeste bureaus behandelen webshops hetzelfde als corporate websites. Maar e-commerce SEO is anders: duizenden productpagina's, faceted navigation, seizoensgebonden content, structured data. Een generiek bureau kent die wereld niet. Wij doen alleen ${kw.includes("seo") ? "e-commerce SEO" : "SEO voor webshops"}.`,
    sectionEcommerce: (city) => `E-commerce in ${city}`,
    sectionNiches: (city) => `Waar ${city} sterk in is`,
    sectionChallenge: (city) => `De uitdaging voor webshops in ${city}`,
    teamBadge: "JE AANSPREEKPUNT",
    teamHeading: "Wie doet het werk",
    teamSubtitle: (city) => `Nederlander, e-commerce ondernemer. Ik doe je strategiegesprek en ken de markt in ${city}. Daarna krijg je een vaste manager.`,
    teamRole: "CEO bij EcomSEO",
    deliverablesBadge: "EERSTE 90 DAGEN",
    deliverablesHeading: "Wat je krijgt in de eerste 3 maanden",
    deliverableItems: [
      { title: "Technische SEO audit (200+ checkpoints)", description: "Alle technische issues in kaart, gesorteerd op wat het meeste oplevert." },
      { title: "Keyword strategie en content roadmap", description: "12.000+ zoekwoorden onderzocht, gefilterd op koopintentie." },
      { title: "Concurrentieanalyse", description: "Wat je concurrenten doen, waar ze ranken, waar jouw kansen liggen." },
      { title: "On-page optimalisatie top 20 pagina's", description: "Directe verbeteringen aan je belangrijkste product- en categoriepagina's." },
      { title: "Linkbuilding kickstart (10-15 links)", description: "Eerste backlinks van relevante sites in jouw niche." },
      { title: "Maandelijkse rapportage met KPI dashboard", description: "Rankings, verkeer, conversies en omzet in een overzicht." },
    ],
    faqItems: (city) => [
      { question: `Waarom zou ik kiezen voor een SEO bureau in ${city}?`, answer: `Wij kennen de markt in ${city}, de concurrentie en hoe mensen hier zoeken. We hebben 19+ webshops geholpen meer omzet te halen uit Google, ook in de regio ${city}. Omdat we alleen ecommerce doen, weten we welke aanpakken echt tot verkoop leiden en welke niet.` },
      { question: `Wat kost SEO voor een webshop in ${city}?`, answer: "Onze trajecten starten bij \u20AC1.500 per maand. Daarin zit technische optimalisatie, content, linkbuilding en maandelijkse rapportage. De exacte investering hangt af van de grootte van je webshop en hoeveel concurrentie je hebt. We beginnen met een gratis gesprek waarin we je webshop analyseren en een voorstel doen." },
      { question: "Hoe snel zie ik resultaat van SEO?", answer: "Eerste verbeteringen in rankings en verkeer zijn na 2-3 maanden zichtbaar. Echte omzetgroei komt na 6-12 maanden. Dat hangt af van de staat van je webshop, je domeinautoriteit en de concurrentie. We rapporteren maandelijks over rankings, verkeer en omzet uit organisch zoekverkeer." },
      { question: `Werken jullie alleen met webshops uit ${city}?`, answer: "Nee. We werken met ecommerce merken door heel Nederland en Europa. Ons team werkt remote en communiceert via video, Slack en maandelijkse rapportages. Wat ons anders maakt is niet locatie maar focus: we doen alleen SEO voor webshops. Geen restaurants, tandartsen of lokale dienstverleners." },
      { question: "Welke platformen ondersteunen jullie?", answer: "Shopify (inclusief Plus), WooCommerce, BigCommerce, Adobe Commerce (Magento) en Amazon. We weten per platform welke SEO-aanpassingen het meeste opleveren. Bij Shopify gaat het vaak om theme speed, bij WooCommerce om technische audits, bij Magento om crawl budget." },
      { question: `Wat maakt EcomSEO anders dan andere bureaus in ${city}?`, answer: "We doen alleen ecommerce SEO. Geen lokale bedrijven, geen B2B sites, alleen webshops. Onze KPI is jouw organische omzet, niet hoeveel zoekwoorden we ranken. Je ziet via maandelijkse rapportages precies waar je budget naartoe gaat. We wijzen 70% van de aanvragen af omdat ze niet bij ons passen." },
      { question: "Kan ik een gratis SEO audit krijgen?", answer: "Ja. We analyseren je webshop op de belangrijkste SEO-factoren en laten zien waar de grootste kansen liggen. Je krijgt een concreet voorstel, geen vage praatjes. Plan je gesprek in via onze website." },
    ],
    faqCtaHeading: "Klaar om te groeien?",
    faqCtaSubtitle: (city) => `Plan een gratis strategiegesprek. We laten zien wat SEO kan opleveren voor jouw webshop in ${city}.`,
  },
  fr: {
    heroHeading: (city) => `Agence SEO ${city}  | plus de chiffre d'affaires via le referencement naturel`,
    heroSubtitle: (city, kw1, kw2) => `Vous cherchez une ${kw1} ? Nous sommes ${kw2} et nous aidons les marques e-commerce a ${city} a se developper. Plus de 19 boutiques en ligne accompagnees, +140% de trafic organique en moyenne. Planifiez un appel strategique gratuit.`,
    ctaText: "Planifier un appel gratuit",
    trustBar: "Plus de 19 marques e-commerce en Europe travaillent avec nous",
    statsBadge: "RESULTATS",
    statsHeading: (city) => `Pourquoi les marques e-commerce a ${city} travaillent avec nous`,
    statsSubtitle: "Nous refusons 70% des demandes. Nous ne travaillons que si nous savons pouvoir delivrer des resultats mesurables pour votre boutique en ligne.",
    statsLabels: ["Marques e-commerce accompagnees", "Croissance moyenne du trafic", "Liens construits", "Langues et marches"],
    benefitsBadge: "SERVICES",
    benefitsHeading: (city, isSpecialist) => `Ce qu'une ${isSpecialist ? "consultant SEO" : "agence SEO"} a ${city} fait pour votre boutique`,
    benefitsSubtitle: "Chaque boutique en ligne est differente. Nous analysons votre situation avant de proposer un plan.",
    benefits: [
      { title: "Audit SEO technique", description: "Nous verifions votre boutique sur plus de 200 points : vitesse du site, crawlabilite, indexation, donnees structurees, balises canoniques. Vous recevez un plan d'action classe par impact.", href: "/ecommerce-seo" },
      { title: "Strategie de mots-cles", description: "Nous analysons plus de 12 000 mots-cles et filtrons par intention d'achat. Vous obtenez une carte de mots-cles qui montre quelles pages optimiser et pourquoi.", href: "/keyword-research" },
      { title: "Optimisation on-page", description: "Nous optimisons les titres, meta descriptions, en-tetes, liens internes et contenus de vos pages produits et categories. L'objectif : que Google comprenne vos pages et les classe mieux.", href: "/content-writing" },
      { title: "Netlinking et RP digitales", description: "Des backlinks de sites pertinents dans votre niche. Nous les obtenons via le content outreach, les RP digitales et les partenariats. Pas de liens spam, uniquement des sites de qualite.", href: "/link-building" },
      { title: "SEO Shopify", description: "Nous connaissons les defis specifiques de Shopify : vitesse du theme, code Liquid, pages de collection, contenu duplique par les variantes. Shopify Plus inclus.", href: "/shopify-seo" },
      { title: "Focus sur le chiffre d'affaires", description: "Nous mesurons le succes en chiffre d'affaires genere par le trafic organique. Pas en nombre de mots-cles positionnes. Si le trafic n'achete pas, il ne sert a rien." },
    ],
    processBadge: "METHODE",
    processHeading: "Comment nous travaillons ensemble",
    processSubtitle: "Voici comment se deroule un accompagnement SEO avec nous, du premier appel a la croissance mensuelle.",
    processSteps: [
      { number: "01", title: "Audit SEO gratuit et appel strategique", description: "Nous analysons votre boutique, discutons de vos objectifs et vous montrons les plus grandes opportunites SEO. Vous recevez une proposition concrete avec les resultats attendus." },
      { number: "02", title: "Analyse et feuille de route", description: "Nous realisons un audit technique complet, cartographions le paysage des mots-cles et analysons la concurrence. Le resultat : une feuille de route SEO pour 6 a 12 mois." },
      { number: "03", title: "Execution", description: "Notre equipe passe a l'action : corrections techniques, optimisation du contenu, netlinking. Nous travaillons directement avec votre equipe de developpement." },
      { number: "04", title: "Reporting et ajustements", description: "Chaque mois, nous rapportons sur le trafic organique, les positions, les conversions et le chiffre d'affaires SEO. Ce qui fonctionne, on accelere. Ce qui ne fonctionne pas, on ajuste." },
    ],
    casesBadge: "RESULTATS CLIENTS",
    casesHeading: "Resultats de nos accompagnements SEO e-commerce",
    casesSubtitle: "Voici ce qui se passe quand on prend le SEO au serieux. Des resultats reels de vraies boutiques en ligne.",
    casesCtaText: "Voir toutes les etudes de cas",
    richTextBadge: (city) => `SEO A ${city.toUpperCase()}`,
    richTextHeading: (keyword) => `${keyword.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} : ce qu'il faut savoir`,
    richTextNichesSuffix: " Nous connaissons ce marche et savons quels mots-cles ont le plus de potentiel commercial dans votre niche.",
    richTextChallengeSuffix: " Nous mesurons le succes en chiffre d'affaires genere par le trafic organique. Si une optimisation ne contribue pas aux ventes, nous ne la faisons pas.",
    richTextSpecialismHeading: "Pourquoi choisir une agence SEO specialisee en e-commerce",
    richTextSpecialismBody: (kw) => `La plupart des agences traitent les boutiques en ligne comme des sites corporate. Mais le SEO e-commerce est different : des milliers de pages produits, la navigation a facettes, le contenu saisonnier, les donnees structurees. Une agence generaliste ne connait pas ce monde. Nous ne faisons que ${kw.includes("seo") ? "du SEO e-commerce" : "du referencement pour boutiques en ligne"}.`,
    sectionEcommerce: (city) => `L'e-commerce a ${city}`,
    sectionNiches: (city) => `Les forces de ${city}`,
    sectionChallenge: (city) => `Le defi pour les boutiques en ligne a ${city}`,
    teamBadge: "VOTRE INTERLOCUTEUR",
    teamHeading: "Qui fait le travail",
    teamSubtitle: (city) => `Entrepreneur e-commerce neerlandais. Je mene votre appel strategique et connais le marche a ${city}. Ensuite, vous aurez un manager dedie.`,
    teamRole: "CEO chez EcomSEO",
    deliverablesBadge: "LES 90 PREMIERS JOURS",
    deliverablesHeading: "Ce que vous obtenez dans les 3 premiers mois",
    deliverableItems: [
      { title: "Audit SEO technique (200+ points de controle)", description: "Tous les problemes techniques identifies, classes par impact sur le chiffre d'affaires." },
      { title: "Strategie de mots-cles et feuille de route contenu", description: "Plus de 12 000 mots-cles analyses, filtres par intention d'achat." },
      { title: "Analyse concurrentielle", description: "Ce que font vos concurrents, ou ils se positionnent, ou se trouvent vos opportunites." },
      { title: "Optimisation on-page des 20 pages principales", description: "Ameliorations directes sur vos pages produits et categories les plus importantes." },
      { title: "Demarrage du netlinking (10-15 liens)", description: "Premiers backlinks de sites pertinents dans votre niche." },
      { title: "Rapport mensuel avec tableau de bord KPI", description: "Positions, trafic, conversions et chiffre d'affaires dans un seul rapport." },
    ],
    faqItems: (city) => [
      { question: `Pourquoi choisir une agence SEO a ${city} ?`, answer: `Nous connaissons le marche a ${city}, la concurrence et comment les gens recherchent ici. Nous avons aide plus de 50 boutiques en ligne a augmenter leur chiffre d'affaires via Google, y compris dans la region de ${city}. Comme nous ne faisons que du e-commerce, nous savons ce qui genere des ventes et ce qui ne fonctionne pas.` },
      { question: `Combien coute le SEO pour une boutique en ligne a ${city} ?`, answer: "Nos accompagnements commencent a 1 500\u20AC par mois. Cela comprend l'optimisation technique, le contenu, le netlinking et le reporting mensuel. L'investissement exact depend de la taille de votre boutique et de la concurrence. Nous commencons par un appel gratuit ou nous analysons votre boutique et faisons une proposition." },
      { question: "En combien de temps voit-on des resultats SEO ?", answer: "Les premieres ameliorations en termes de positions et de trafic sont visibles apres 2-3 mois. La vraie croissance du chiffre d'affaires arrive apres 6-12 mois. Cela depend de l'etat de votre boutique, de votre autorite de domaine et de la concurrence. Nous rapportons chaque mois sur les positions, le trafic et le chiffre d'affaires organique." },
      { question: `Travaillez-vous uniquement avec des boutiques de ${city} ?`, answer: "Non. Nous travaillons avec des marques e-commerce dans toute l'Europe. Notre equipe travaille a distance et communique via video, Slack et des rapports mensuels. Ce qui nous differencie, ce n'est pas la localisation mais la specialisation : nous ne faisons que du SEO pour les boutiques en ligne." },
      { question: "Quelles plateformes supportez-vous ?", answer: "Shopify (y compris Plus), WooCommerce, BigCommerce, Adobe Commerce (Magento) et Amazon. Nous savons pour chaque plateforme quelles optimisations SEO ont le plus d'impact. Pour Shopify, c'est souvent la vitesse du theme ; pour WooCommerce, les audits techniques ; pour Magento, le budget de crawl." },
      { question: `Qu'est-ce qui differencie EcomSEO des autres agences a ${city} ?`, answer: "Nous ne faisons que du SEO e-commerce. Pas de commerce local, pas de sites B2B, uniquement des boutiques en ligne. Notre KPI est votre chiffre d'affaires organique, pas le nombre de mots-cles positionnes. Vous voyez dans nos rapports mensuels exactement ou va votre budget. Nous refusons 70% des demandes parce qu'elles ne correspondent pas a notre expertise." },
      { question: "Puis-je obtenir un audit SEO gratuit ?", answer: "Oui. Nous analysons votre boutique sur les facteurs SEO les plus importants et vous montrons les plus grandes opportunites. Vous obtenez une proposition concrete. Planifiez votre appel via notre site." },
    ],
    faqCtaHeading: "Pret a vous developper ?",
    faqCtaSubtitle: (city) => `Planifiez un appel strategique gratuit. Nous vous montrons ce que le SEO peut apporter a votre boutique en ligne a ${city}.`,
  },
  de: {
    heroHeading: (city) => `SEO Agentur ${city}  | mehr Umsatz durch organischen Suchverkehr`,
    heroSubtitle: (city, kw1, kw2) => `Sie suchen eine ${kw1}? Wir sind ${kw2} und helfen E-Commerce-Marken in ${city} zu wachsen. 19+ Onlineshops betreut, durchschnittlich 140% mehr organischer Traffic. Kostenloses Strategiegespraech vereinbaren.`,
    ctaText: "Kostenloses Gespraech vereinbaren",
    trustBar: "19+ E-Commerce-Marken in Europa arbeiten mit uns",
    statsBadge: "ERGEBNISSE",
    statsHeading: (city) => `Warum E-Commerce-Marken in ${city} mit uns arbeiten`,
    statsSubtitle: "Wir lehnen 70% der Anfragen ab. Wir arbeiten nur, wenn wir wissen, dass wir messbare Ergebnisse fuer Ihren Onlineshop liefern koennen.",
    statsLabels: ["E-Commerce-Marken betreut", "Durchschnittliches Traffic-Wachstum", "Links aufgebaut", "Sprachen und Maerkte"],
    benefitsBadge: "LEISTUNGEN",
    benefitsHeading: (city, isSpecialist) => `Was eine ${isSpecialist ? "SEO-Experte" : "SEO-Agentur"} in ${city} fuer Ihren Onlineshop tut`,
    benefitsSubtitle: "Jeder Onlineshop ist anders. Wir analysieren Ihre Situation, bevor wir einen Plan erstellen.",
    benefits: [
      { title: "Technisches SEO-Audit", description: "Wir pruefen Ihren Onlineshop auf 200+ Punkte: Seitengeschwindigkeit, Crawlbarkeit, Indexierung, strukturierte Daten, Canonical Tags. Sie erhalten einen Aktionsplan sortiert nach Wirkung.", href: "/ecommerce-seo" },
      { title: "Keyword-Strategie", description: "Wir analysieren 12.000+ Keywords und filtern nach Kaufabsicht. Sie erhalten eine Keyword-Map, die zeigt, welche Seiten optimiert werden muessen und warum.", href: "/keyword-research" },
      { title: "On-Page-Optimierung", description: "Wir optimieren Titel, Meta-Beschreibungen, Ueberschriften, interne Links und Content Ihrer Produkt- und Kategorieseiten. Das Ziel: Google versteht Ihre Seiten und rankt sie hoeher.", href: "/content-writing" },
      { title: "Linkbuilding und Digital PR", description: "Backlinks von relevanten Websites in Ihrer Nische. Wir organisieren das ueber Content Outreach, Digital PR und Partnerschaften. Keine Spam-Links, nur relevante Seiten.", href: "/link-building" },
      { title: "Shopify SEO", description: "Wir kennen die spezifischen Herausforderungen von Shopify: Theme-Geschwindigkeit, Liquid-Code, Collection Pages, Duplicate Content durch Varianten. Auch Shopify Plus.", href: "/shopify-seo" },
      { title: "Fokus auf Umsatz, nicht Rankings", description: "Wir messen Erfolg am Umsatz aus organischem Traffic. Nicht an der Anzahl der gerankten Keywords. Wenn der Traffic nicht kauft, ist er wertlos." },
    ],
    processBadge: "ARBEITSWEISE",
    processHeading: "So arbeiten wir zusammen",
    processSubtitle: "So sieht ein SEO-Projekt mit uns aus, vom ersten Gespraech bis zum monatlichen Wachstum.",
    processSteps: [
      { number: "01", title: "Kostenloses SEO-Audit und Strategiegespraech", description: "Wir analysieren Ihren Onlineshop, besprechen Ihre Ziele und zeigen die groessten SEO-Chancen. Sie erhalten ein konkretes Angebot mit erwarteten Ergebnissen und Zeitplan." },
      { number: "02", title: "Analyse und Roadmap", description: "Wir fuehren ein vollstaendiges technisches Audit durch, kartieren die Keyword-Landschaft und analysieren den Wettbewerb. Das Ergebnis: eine SEO-Roadmap fuer 6-12 Monate." },
      { number: "03", title: "Umsetzung", description: "Unser Team legt los: technische Fixes, Content-Optimierung, Linkbuilding. Wir arbeiten direkt mit Ihrem Entwicklungsteam zusammen." },
      { number: "04", title: "Reporting und Anpassung", description: "Jeden Monat berichten wir ueber organischen Traffic, Rankings, Conversions und Umsatz aus SEO. Was funktioniert, skalieren wir. Was nicht funktioniert, passen wir an." },
    ],
    casesBadge: "KUNDENERGEBNISSE",
    casesHeading: "Ergebnisse unserer E-Commerce-SEO-Projekte",
    casesSubtitle: "Das passiert, wenn man SEO ernst nimmt. Echte Ergebnisse von echten Onlineshops.",
    casesCtaText: "Alle Fallstudien ansehen",
    richTextBadge: (city) => `SEO IN ${city.toUpperCase()}`,
    richTextHeading: (keyword) => `${keyword.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}: was Sie wissen muessen`,
    richTextNichesSuffix: " Wir kennen diesen Markt und wissen, welche Keywords das groesste kommerzielle Potenzial in Ihrer Nische haben.",
    richTextChallengeSuffix: " Wir messen Erfolg am Umsatz aus organischem Traffic. Wenn eine Optimierung nicht zu mehr Verkaeufen beitraegt, lassen wir es.",
    richTextSpecialismHeading: "Warum eine spezialisierte E-Commerce-SEO-Agentur",
    richTextSpecialismBody: (kw) => `Die meisten Agenturen behandeln Onlineshops wie Unternehmenswebsites. Aber E-Commerce-SEO ist anders: Tausende Produktseiten, Facettennavigation, saisonaler Content, strukturierte Daten. Eine generische Agentur kennt diese Welt nicht. Wir machen nur ${kw.includes("seo") ? "E-Commerce-SEO" : "SEO fuer Onlineshops"}.`,
    sectionEcommerce: (city) => `E-Commerce in ${city}`,
    sectionNiches: (city) => `Wo ${city} stark ist`,
    sectionChallenge: (city) => `Die Herausforderung fuer Onlineshops in ${city}`,
    teamBadge: "IHR ANSPRECHPARTNER",
    teamHeading: "Wer macht die Arbeit",
    teamSubtitle: (city) => `Niederlaendischer E-Commerce-Unternehmer. Ich fuehre Ihr Strategiegespraech und kenne den Markt in ${city}. Danach bekommen Sie einen festen Projektmanager.`,
    teamRole: "CEO bei EcomSEO",
    deliverablesBadge: "DIE ERSTEN 90 TAGE",
    deliverablesHeading: "Was Sie in den ersten 3 Monaten bekommen",
    deliverableItems: [
      { title: "Technisches SEO-Audit (200+ Checkpoints)", description: "Alle technischen Probleme erfasst, sortiert nach dem groessten Ertrag." },
      { title: "Keyword-Strategie und Content-Roadmap", description: "12.000+ Keywords analysiert, gefiltert nach Kaufabsicht." },
      { title: "Wettbewerbsanalyse", description: "Was Ihre Konkurrenten machen, wo sie ranken, wo Ihre Chancen liegen." },
      { title: "On-Page-Optimierung der Top-20-Seiten", description: "Direkte Verbesserungen an Ihren wichtigsten Produkt- und Kategorieseiten." },
      { title: "Linkbuilding-Kickstart (10-15 Links)", description: "Erste Backlinks von relevanten Seiten in Ihrer Nische." },
      { title: "Monatliches Reporting mit KPI-Dashboard", description: "Rankings, Traffic, Conversions und Umsatz in einem Bericht." },
    ],
    faqItems: (city) => [
      { question: `Warum sollte ich eine SEO-Agentur in ${city} waehlen?`, answer: `Wir kennen den Markt in ${city}, den Wettbewerb und wie Menschen hier suchen. Wir haben 19+ Onlineshops geholfen, mehr Umsatz ueber Google zu erzielen, auch in der Region ${city}. Weil wir nur E-Commerce machen, wissen wir, welche Ansaetze wirklich zu Verkaeufen fuehren und welche nicht.` },
      { question: `Was kostet SEO fuer einen Onlineshop in ${city}?`, answer: "Unsere Projekte starten ab 1.500\u20AC pro Monat. Darin enthalten sind technische Optimierung, Content, Linkbuilding und monatliches Reporting. Die genaue Investition haengt von der Groesse Ihres Shops und dem Wettbewerb ab. Wir beginnen mit einem kostenlosen Gespraech, in dem wir Ihren Shop analysieren und ein Angebot machen." },
      { question: "Wie schnell sehe ich Ergebnisse von SEO?", answer: "Erste Verbesserungen bei Rankings und Traffic sind nach 2-3 Monaten sichtbar. Echtes Umsatzwachstum kommt nach 6-12 Monaten. Das haengt vom Zustand Ihres Shops, Ihrer Domain-Autoritaet und dem Wettbewerb ab. Wir berichten monatlich ueber Rankings, Traffic und Umsatz aus organischem Suchverkehr." },
      { question: `Arbeiten Sie nur mit Onlineshops aus ${city}?`, answer: "Nein. Wir arbeiten mit E-Commerce-Marken in ganz Europa. Unser Team arbeitet remote und kommuniziert ueber Video, Slack und monatliche Berichte. Was uns unterscheidet, ist nicht der Standort, sondern der Fokus: Wir machen nur SEO fuer Onlineshops. Keine Restaurants, Zahnaerzte oder lokale Dienstleister." },
      { question: "Welche Plattformen unterstuetzen Sie?", answer: "Shopify (inklusive Plus), WooCommerce, BigCommerce, Adobe Commerce (Magento) und Amazon. Wir wissen pro Plattform, welche SEO-Anpassungen am meisten bringen. Bei Shopify geht es oft um Theme-Speed, bei WooCommerce um technische Audits, bei Magento um Crawl-Budget." },
      { question: `Was macht EcomSEO anders als andere Agenturen in ${city}?`, answer: "Wir machen nur E-Commerce-SEO. Keine lokalen Unternehmen, keine B2B-Seiten, nur Onlineshops. Unser KPI ist Ihr organischer Umsatz, nicht wie viele Keywords wir ranken. Sie sehen in unseren monatlichen Berichten genau, wohin Ihr Budget geht. Wir lehnen 70% der Anfragen ab, weil sie nicht zu uns passen." },
      { question: "Kann ich ein kostenloses SEO-Audit bekommen?", answer: "Ja. Wir analysieren Ihren Onlineshop auf die wichtigsten SEO-Faktoren und zeigen, wo die groessten Chancen liegen. Sie bekommen ein konkretes Angebot, kein leeres Gerede. Vereinbaren Sie Ihr Gespraech ueber unsere Website." },
    ],
    faqCtaHeading: "Bereit zu wachsen?",
    faqCtaSubtitle: (city) => `Vereinbaren Sie ein kostenloses Strategiegespraech. Wir zeigen Ihnen, was SEO fuer Ihren Onlineshop in ${city} bringen kann.`,
  },
  es: {
    heroHeading: (city) => `Agencia SEO ${city}  | mas facturacion con trafico organico`,
    heroSubtitle: (city, kw1, kw2) => `Buscas una ${kw1}? Somos ${kw2} y ayudamos a marcas e-commerce en ${city} a crecer. Mas de 19 tiendas online atendidas, +140% de trafico organico de media. Agenda una llamada estrategica gratuita.`,
    ctaText: "Agenda una llamada gratuita",
    trustBar: "Mas de 19 marcas e-commerce en Europa trabajan con nosotros",
    statsBadge: "RESULTADOS",
    statsHeading: (city) => `Por que las marcas e-commerce en ${city} trabajan con nosotros`,
    statsSubtitle: "Rechazamos el 70% de las solicitudes. Solo trabajamos si sabemos que podemos generar resultados medibles para tu tienda online.",
    statsLabels: ["Marcas e-commerce atendidas", "Crecimiento medio de trafico", "Enlaces construidos", "Idiomas y mercados"],
    benefitsBadge: "SERVICIOS",
    benefitsHeading: (city, isSpecialist) => `Lo que una ${isSpecialist ? "consultor SEO" : "agencia SEO"} en ${city} hace por tu tienda online`,
    benefitsSubtitle: "Cada tienda online es diferente. Analizamos tu situacion antes de proponer un plan.",
    benefits: [
      { title: "Auditoria SEO tecnica", description: "Revisamos tu tienda en mas de 200 puntos: velocidad del sitio, rastreabilidad, indexacion, datos estructurados, etiquetas canonicas. Recibes un plan de accion ordenado por impacto.", href: "/ecommerce-seo" },
      { title: "Estrategia de palabras clave", description: "Analizamos mas de 12.000 palabras clave y filtramos por intencion de compra. Obtienes un mapa de keywords que muestra que paginas optimizar y por que.", href: "/keyword-research" },
      { title: "Optimizacion on-page", description: "Optimizamos titulos, meta descripciones, encabezados, enlaces internos y contenido de tus paginas de producto y categoria. El objetivo: que Google entienda tus paginas y las posicione mejor.", href: "/content-writing" },
      { title: "Link building y RP digital", description: "Backlinks de sitios relevantes en tu nicho. Lo conseguimos mediante outreach de contenido, RP digital y colaboraciones. Nada de enlaces spam, solo sitios de calidad.", href: "/link-building" },
      { title: "SEO Shopify", description: "Conocemos los retos especificos de Shopify: velocidad del tema, codigo Liquid, paginas de coleccion, contenido duplicado por variantes. Tambien Shopify Plus.", href: "/shopify-seo" },
      { title: "Enfoque en facturacion, no en rankings", description: "Medimos el exito en facturacion generada por trafico organico. No en cuantas palabras clave posicionamos. Si el trafico no compra, no sirve." },
    ],
    processBadge: "METODOLOGIA",
    processHeading: "Como trabajamos juntos",
    processSubtitle: "Asi es un proyecto SEO con nosotros, desde la primera llamada hasta el crecimiento mensual.",
    processSteps: [
      { number: "01", title: "Auditoria SEO gratuita y llamada estrategica", description: "Analizamos tu tienda, hablamos de tus objetivos y te mostramos las mayores oportunidades SEO. Recibes una propuesta concreta con resultados esperados y plazos." },
      { number: "02", title: "Analisis y hoja de ruta", description: "Hacemos una auditoria tecnica completa, mapeamos el panorama de palabras clave y analizamos la competencia. El resultado: una hoja de ruta SEO para 6-12 meses." },
      { number: "03", title: "Ejecucion", description: "Nuestro equipo se pone en marcha: correcciones tecnicas, optimizacion de contenido, link building. Trabajamos directamente con tu equipo de desarrollo." },
      { number: "04", title: "Reporting y ajustes", description: "Cada mes informamos sobre trafico organico, posiciones, conversiones y facturacion SEO. Lo que funciona, lo escalamos. Lo que no funciona, lo ajustamos." },
    ],
    casesBadge: "RESULTADOS DE CLIENTES",
    casesHeading: "Resultados de nuestros proyectos SEO e-commerce",
    casesSubtitle: "Esto es lo que pasa cuando te tomas el SEO en serio. Resultados reales de tiendas online reales.",
    casesCtaText: "Ver todos los casos",
    richTextBadge: (city) => `SEO EN ${city.toUpperCase()}`,
    richTextHeading: (keyword) => `${keyword.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}: lo que necesitas saber`,
    richTextNichesSuffix: " Conocemos este mercado y sabemos que palabras clave tienen mayor potencial comercial en tu nicho.",
    richTextChallengeSuffix: " Medimos el exito en facturacion generada por trafico organico. Si una optimizacion no contribuye a mas ventas, no la hacemos.",
    richTextSpecialismHeading: "Por que elegir una agencia SEO especializada en e-commerce",
    richTextSpecialismBody: (kw) => `La mayoria de agencias tratan las tiendas online como sitios corporativos. Pero el SEO e-commerce es diferente: miles de paginas de producto, navegacion facetada, contenido estacional, datos estructurados. Una agencia generalista no conoce este mundo. Nosotros solo hacemos ${kw.includes("seo") ? "SEO e-commerce" : "SEO para tiendas online"}.`,
    sectionEcommerce: (city) => `E-commerce en ${city}`,
    sectionNiches: (city) => `Donde ${city} es fuerte`,
    sectionChallenge: (city) => `El reto para las tiendas online en ${city}`,
    teamBadge: "TU INTERLOCUTOR",
    teamHeading: "Quien hace el trabajo",
    teamSubtitle: (city) => `Emprendedor e-commerce neerlandes. Yo llevo tu llamada estrategica y conozco el mercado en ${city}. Despues tendras un gestor dedicado.`,
    teamRole: "CEO en EcomSEO",
    deliverablesBadge: "LOS PRIMEROS 90 DIAS",
    deliverablesHeading: "Lo que obtienes en los primeros 3 meses",
    deliverableItems: [
      { title: "Auditoria SEO tecnica (200+ checkpoints)", description: "Todos los problemas tecnicos identificados, ordenados por impacto en facturacion." },
      { title: "Estrategia de keywords y hoja de ruta de contenido", description: "Mas de 12.000 palabras clave analizadas, filtradas por intencion de compra." },
      { title: "Analisis competitivo", description: "Que hacen tus competidores, donde posicionan, donde estan tus oportunidades." },
      { title: "Optimizacion on-page de las 20 paginas principales", description: "Mejoras directas en tus paginas de producto y categoria mas importantes." },
      { title: "Arranque de link building (10-15 enlaces)", description: "Primeros backlinks de sitios relevantes en tu nicho." },
      { title: "Informe mensual con dashboard de KPIs", description: "Posiciones, trafico, conversiones y facturacion en un solo informe." },
    ],
    faqItems: (city) => [
      { question: `Por que elegir una agencia SEO en ${city}?`, answer: `Conocemos el mercado en ${city}, la competencia y como buscan las personas aqui. Hemos ayudado a mas de 50 tiendas online a aumentar su facturacion via Google, tambien en la region de ${city}. Como solo hacemos e-commerce, sabemos que enfoques generan ventas reales y cuales no.` },
      { question: `Cuanto cuesta el SEO para una tienda online en ${city}?`, answer: "Nuestros proyectos empiezan desde 1.500\u20AC al mes. Incluye optimizacion tecnica, contenido, link building e informes mensuales. La inversion exacta depende del tamano de tu tienda y la competencia. Empezamos con una llamada gratuita donde analizamos tu tienda y hacemos una propuesta." },
      { question: "En cuanto tiempo se ven resultados del SEO?", answer: "Las primeras mejoras en posiciones y trafico son visibles tras 2-3 meses. El crecimiento real en facturacion llega tras 6-12 meses. Depende del estado de tu tienda, tu autoridad de dominio y la competencia. Informamos mensualmente sobre posiciones, trafico y facturacion organica." },
      { question: `Trabajais solo con tiendas de ${city}?`, answer: "No. Trabajamos con marcas e-commerce en toda Europa. Nuestro equipo trabaja en remoto y se comunica por video, Slack e informes mensuales. Lo que nos diferencia no es la ubicacion sino la especializacion: solo hacemos SEO para tiendas online. Nada de restaurantes, dentistas o negocios locales." },
      { question: "Que plataformas soportais?", answer: "Shopify (incluido Plus), WooCommerce, BigCommerce, Adobe Commerce (Magento) y Amazon. Sabemos por plataforma que optimizaciones SEO tienen mas impacto. En Shopify suele ser la velocidad del tema, en WooCommerce las auditorias tecnicas, en Magento el presupuesto de rastreo." },
      { question: `Que diferencia a EcomSEO de otras agencias en ${city}?`, answer: "Solo hacemos SEO e-commerce. Nada de negocios locales, nada de sitios B2B, solo tiendas online. Nuestro KPI es tu facturacion organica, no cuantas palabras clave posicionamos. Ves en nuestros informes mensuales exactamente donde va tu presupuesto. Rechazamos el 70% de las solicitudes porque no encajan con nuestra especialidad." },
      { question: "Puedo obtener una auditoria SEO gratuita?", answer: "Si. Analizamos tu tienda online en los factores SEO mas importantes y te mostramos las mayores oportunidades. Recibes una propuesta concreta, sin rodeos. Agenda tu llamada a traves de nuestra web." },
    ],
    faqCtaHeading: "Listo para crecer?",
    faqCtaSubtitle: (city) => `Agenda una llamada estrategica gratuita. Te mostramos lo que el SEO puede aportar a tu tienda online en ${city}.`,
  },
  it: {
    heroHeading: (city) => `Agenzia SEO ${city}  | piu fatturato dal traffico organico`,
    heroSubtitle: (city, kw1, kw2) => `Cerchi una ${kw1}? Siamo ${kw2} e aiutiamo brand e-commerce a ${city} a crescere. Oltre 19 negozi online seguiti, +140% di traffico organico in media. Prenota una call strategica gratuita.`,
    ctaText: "Prenota una call gratuita",
    trustBar: "Oltre 19 brand e-commerce in Europa lavorano con noi",
    statsBadge: "RISULTATI",
    statsHeading: (city) => `Perche i brand e-commerce a ${city} lavorano con noi`,
    statsSubtitle: "Rifiutiamo il 70% delle richieste. Lavoriamo solo se sappiamo di poter generare risultati misurabili per il tuo negozio online.",
    statsLabels: ["Brand e-commerce seguiti", "Crescita media del traffico", "Link costruiti", "Lingue e mercati"],
    benefitsBadge: "SERVIZI",
    benefitsHeading: (city, isSpecialist) => `Cosa fa una ${isSpecialist ? "consulente SEO" : "agenzia SEO"} a ${city} per il tuo negozio online`,
    benefitsSubtitle: "Ogni negozio online e diverso. Analizziamo la tua situazione prima di proporre un piano.",
    benefits: [
      { title: "Audit SEO tecnico", description: "Controlliamo il tuo negozio su oltre 200 punti: velocita del sito, crawlabilita, indicizzazione, dati strutturati, tag canonici. Ricevi un piano d'azione ordinato per impatto.", href: "/ecommerce-seo" },
      { title: "Strategia parole chiave", description: "Analizziamo oltre 12.000 parole chiave e filtriamo per intenzione d'acquisto. Ottieni una mappa di keyword che mostra quali pagine ottimizzare e perche.", href: "/keyword-research" },
      { title: "Ottimizzazione on-page", description: "Ottimizziamo titoli, meta description, intestazioni, link interni e contenuti delle tue pagine prodotto e categoria. L'obiettivo: che Google capisca le tue pagine e le posizioni meglio.", href: "/content-writing" },
      { title: "Link building e digital PR", description: "Backlink da siti rilevanti nella tua nicchia. Li otteniamo tramite content outreach, digital PR e partnership. Niente link spam, solo siti di qualita.", href: "/link-building" },
      { title: "SEO Shopify", description: "Conosciamo le sfide specifiche di Shopify: velocita del tema, codice Liquid, pagine di collezione, contenuti duplicati per le varianti. Anche Shopify Plus.", href: "/shopify-seo" },
      { title: "Focus sul fatturato, non sui ranking", description: "Misuriamo il successo in fatturato generato dal traffico organico. Non nel numero di parole chiave posizionate. Se il traffico non compra, non serve a nulla." },
    ],
    processBadge: "METODO",
    processHeading: "Come lavoriamo insieme",
    processSubtitle: "Ecco come si svolge un progetto SEO con noi, dalla prima call alla crescita mensile.",
    processSteps: [
      { number: "01", title: "Audit SEO gratuito e call strategica", description: "Analizziamo il tuo negozio, discutiamo dei tuoi obiettivi e ti mostriamo le maggiori opportunita SEO. Ricevi una proposta concreta con risultati attesi e tempistiche." },
      { number: "02", title: "Analisi e roadmap", description: "Facciamo un audit tecnico completo, mappiamo il panorama delle parole chiave e analizziamo la concorrenza. Il risultato: una roadmap SEO per 6-12 mesi." },
      { number: "03", title: "Esecuzione", description: "Il nostro team si mette al lavoro: correzioni tecniche, ottimizzazione dei contenuti, link building. Lavoriamo direttamente con il tuo team di sviluppo." },
      { number: "04", title: "Reporting e aggiustamenti", description: "Ogni mese riportiamo su traffico organico, posizioni, conversioni e fatturato SEO. Quello che funziona lo scaliamo. Quello che non funziona lo aggiustiamo." },
    ],
    casesBadge: "RISULTATI CLIENTI",
    casesHeading: "Risultati dei nostri progetti SEO e-commerce",
    casesSubtitle: "Ecco cosa succede quando prendi il SEO sul serio. Risultati reali di negozi online reali.",
    casesCtaText: "Vedi tutti i casi studio",
    richTextBadge: (city) => `SEO A ${city.toUpperCase()}`,
    richTextHeading: (keyword) => `${keyword.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}: quello che devi sapere`,
    richTextNichesSuffix: " Conosciamo questo mercato e sappiamo quali parole chiave hanno il maggiore potenziale commerciale nella tua nicchia.",
    richTextChallengeSuffix: " Misuriamo il successo in fatturato generato dal traffico organico. Se un'ottimizzazione non contribuisce a piu vendite, non la facciamo.",
    richTextSpecialismHeading: "Perche scegliere un'agenzia SEO specializzata in e-commerce",
    richTextSpecialismBody: (kw) => `La maggior parte delle agenzie tratta i negozi online come siti aziendali. Ma il SEO e-commerce e diverso: migliaia di pagine prodotto, navigazione a faccette, contenuti stagionali, dati strutturati. Un'agenzia generalista non conosce questo mondo. Noi facciamo solo ${kw.includes("seo") ? "SEO e-commerce" : "SEO per negozi online"}.`,
    sectionEcommerce: (city) => `L'e-commerce a ${city}`,
    sectionNiches: (city) => `Dove ${city} e forte`,
    sectionChallenge: (city) => `La sfida per i negozi online a ${city}`,
    teamBadge: "IL TUO REFERENTE",
    teamHeading: "Chi fa il lavoro",
    teamSubtitle: (city) => `Imprenditore e-commerce olandese. Conduco io la tua call strategica e conosco il mercato a ${city}. Dopo avrai un project manager dedicato.`,
    teamRole: "CEO di EcomSEO",
    deliverablesBadge: "I PRIMI 90 GIORNI",
    deliverablesHeading: "Cosa ottieni nei primi 3 mesi",
    deliverableItems: [
      { title: "Audit SEO tecnico (200+ checkpoint)", description: "Tutti i problemi tecnici identificati, ordinati per impatto sul fatturato." },
      { title: "Strategia keyword e roadmap contenuti", description: "Oltre 12.000 parole chiave analizzate, filtrate per intenzione d'acquisto." },
      { title: "Analisi competitiva", description: "Cosa fanno i tuoi concorrenti, dove si posizionano, dove sono le tue opportunita." },
      { title: "Ottimizzazione on-page delle 20 pagine principali", description: "Miglioramenti diretti sulle tue pagine prodotto e categoria piu importanti." },
      { title: "Avvio link building (10-15 link)", description: "Primi backlink da siti rilevanti nella tua nicchia." },
      { title: "Report mensile con dashboard KPI", description: "Posizioni, traffico, conversioni e fatturato in un unico report." },
    ],
    faqItems: (city) => [
      { question: `Perche scegliere un'agenzia SEO a ${city}?`, answer: `Conosciamo il mercato a ${city}, la concorrenza e come cercano le persone qui. Abbiamo aiutato oltre 50 negozi online ad aumentare il fatturato tramite Google, anche nella zona di ${city}. Siccome facciamo solo e-commerce, sappiamo quali approcci generano vendite reali e quali no.` },
      { question: `Quanto costa il SEO per un negozio online a ${city}?`, answer: "I nostri progetti partono da 1.500\u20AC al mese. Include ottimizzazione tecnica, contenuti, link building e report mensili. L'investimento esatto dipende dalla dimensione del tuo negozio e dalla concorrenza. Iniziamo con una call gratuita dove analizziamo il tuo negozio e facciamo una proposta." },
      { question: "In quanto tempo si vedono i risultati del SEO?", answer: "I primi miglioramenti in posizioni e traffico sono visibili dopo 2-3 mesi. La vera crescita del fatturato arriva dopo 6-12 mesi. Dipende dallo stato del tuo negozio, dalla tua autorita di dominio e dalla concorrenza. Riportiamo mensilmente su posizioni, traffico e fatturato organico." },
      { question: `Lavorate solo con negozi di ${city}?`, answer: "No. Lavoriamo con brand e-commerce in tutta Europa. Il nostro team lavora da remoto e comunica tramite video, Slack e report mensili. Quello che ci distingue non e la posizione ma la specializzazione: facciamo solo SEO per negozi online. Niente ristoranti, dentisti o attivita locali." },
      { question: "Quali piattaforme supportate?", answer: "Shopify (incluso Plus), WooCommerce, BigCommerce, Adobe Commerce (Magento) e Amazon. Sappiamo per ogni piattaforma quali ottimizzazioni SEO hanno piu impatto. Per Shopify e spesso la velocita del tema, per WooCommerce gli audit tecnici, per Magento il budget di crawl." },
      { question: `Cosa differenzia EcomSEO dalle altre agenzie a ${city}?`, answer: "Facciamo solo SEO e-commerce. Niente attivita locali, niente siti B2B, solo negozi online. Il nostro KPI e il tuo fatturato organico, non quante parole chiave posizioniamo. Vedi nei nostri report mensili esattamente dove va il tuo budget. Rifiutiamo il 70% delle richieste perche non corrispondono alla nostra specializzazione." },
      { question: "Posso ottenere un audit SEO gratuito?", answer: "Si. Analizziamo il tuo negozio online sui fattori SEO piu importanti e ti mostriamo le maggiori opportunita. Ricevi una proposta concreta, senza giri di parole. Prenota la tua call sul nostro sito." },
    ],
    faqCtaHeading: "Pronto a crescere?",
    faqCtaSubtitle: (city) => `Prenota una call strategica gratuita. Ti mostriamo cosa il SEO puo portare al tuo negozio online a ${city}.`,
  },
  en: {
    heroHeading: (city) => `SEO Agency ${city}  | more revenue from organic search`,
    heroSubtitle: (city, kw1, kw2) => `Looking for an ${kw1}? We are ${kw2} and help e-commerce brands in ${city} grow. 19+ online stores served, 140% more organic traffic on average. Book a free strategy call.`,
    ctaText: "Book a free strategy call",
    trustBar: "19+ e-commerce brands across Europe work with us",
    statsBadge: "RESULTS",
    statsHeading: (city) => `Why e-commerce brands in ${city} work with us`,
    statsSubtitle: "We turn down 70% of enquiries. We only take on projects where we know we can deliver measurable results for your online store.",
    statsLabels: ["E-commerce brands served", "Average traffic growth", "Links built", "Languages and markets"],
    benefitsBadge: "SERVICES",
    benefitsHeading: (city, isSpecialist) => `What an ${isSpecialist ? "SEO consultant" : "SEO agency"} in ${city} does for your online store`,
    benefitsSubtitle: "Every online store is different. We analyse your situation before proposing a plan.",
    benefits: [
      { title: "Technical SEO audit", description: "We check your store on 200+ points: site speed, crawlability, indexation, structured data, canonical tags. You get an action plan sorted by impact.", href: "/ecommerce-seo" },
      { title: "Keyword strategy", description: "We analyse 12,000+ keywords and filter by purchase intent. You get a keyword map showing which pages to optimise and why.", href: "/keyword-research" },
      { title: "On-page optimisation", description: "We optimise titles, meta descriptions, headings, internal links and content on your product and category pages. The goal: Google understands your pages and ranks them higher.", href: "/content-writing" },
      { title: "Link building and digital PR", description: "Backlinks from relevant websites in your niche. We arrange this through content outreach, digital PR and partnerships. No spammy links, only quality sites.", href: "/link-building" },
      { title: "Shopify SEO", description: "We know the specific challenges of Shopify: theme speed, Liquid code, collection pages, duplicate content from variants. Including Shopify Plus.", href: "/shopify-seo" },
      { title: "Focus on revenue, not rankings", description: "We measure success by revenue from organic traffic. Not by how many keywords you rank for. If the traffic doesn't buy, it's worthless." },
    ],
    processBadge: "HOW WE WORK",
    processHeading: "How we work together",
    processSubtitle: "This is what an SEO project with us looks like, from first call to monthly growth.",
    processSteps: [
      { number: "01", title: "Free SEO audit and strategy call", description: "We analyse your store, discuss your goals and show the biggest SEO opportunities. You get a concrete proposal with expected results and timeline." },
      { number: "02", title: "Analysis and roadmap", description: "We do a full technical audit, map the keyword landscape and analyse the competition. The result: an SEO roadmap for 6-12 months." },
      { number: "03", title: "Execution", description: "Our team gets to work: technical fixes, content optimisation, link building. We work directly with your development team." },
      { number: "04", title: "Reporting and adjustments", description: "Every month we report on organic traffic, rankings, conversions and SEO revenue. What works, we scale up. What doesn't, we adjust." },
    ],
    casesBadge: "CLIENT RESULTS",
    casesHeading: "Results from our e-commerce SEO projects",
    casesSubtitle: "This is what happens when you take SEO seriously. Real results from real online stores.",
    casesCtaText: "View all case studies",
    richTextBadge: (city) => `SEO IN ${city.toUpperCase()}`,
    richTextHeading: (keyword) => `${keyword.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}: what you need to know`,
    richTextNichesSuffix: " We know this market and understand which keywords have the most commercial potential in your niche.",
    richTextChallengeSuffix: " We measure success by revenue from organic traffic. If an optimisation doesn't contribute to more sales, we don't do it.",
    richTextSpecialismHeading: "Why choose a specialised e-commerce SEO agency",
    richTextSpecialismBody: (kw) => `Most agencies treat online stores like corporate websites. But e-commerce SEO is different: thousands of product pages, faceted navigation, seasonal content, structured data. A generic agency doesn't know this world. We only do ${kw.includes("seo") ? "e-commerce SEO" : "SEO for online stores"}.`,
    sectionEcommerce: (city) => `E-commerce in ${city}`,
    sectionNiches: (city) => `Where ${city} is strong`,
    sectionChallenge: (city) => `The challenge for online stores in ${city}`,
    teamBadge: "YOUR POINT OF CONTACT",
    teamHeading: "Who does the work",
    teamSubtitle: (city) => `Dutch e-commerce entrepreneur. I lead your strategy call and know the market in ${city}. After that, you get a dedicated project manager.`,
    teamRole: "CEO at EcomSEO",
    deliverablesBadge: "THE FIRST 90 DAYS",
    deliverablesHeading: "What you get in the first 3 months",
    deliverableItems: [
      { title: "Technical SEO audit (200+ checkpoints)", description: "All technical issues mapped, sorted by what delivers the most revenue." },
      { title: "Keyword strategy and content roadmap", description: "12,000+ keywords researched, filtered by purchase intent." },
      { title: "Competitor analysis", description: "What your competitors do, where they rank, where your opportunities are." },
      { title: "On-page optimisation of top 20 pages", description: "Direct improvements to your most important product and category pages." },
      { title: "Link building kickstart (10-15 links)", description: "First backlinks from relevant sites in your niche." },
      { title: "Monthly reporting with KPI dashboard", description: "Rankings, traffic, conversions and revenue in one report." },
    ],
    faqItems: (city) => [
      { question: `Why should I choose an SEO agency in ${city}?`, answer: `We know the market in ${city}, the competition and how people search here. We've helped 19+ online stores increase revenue through Google, including in the ${city} area. Because we only do e-commerce, we know which approaches actually drive sales and which don't.` },
      { question: `How much does SEO cost for an online store in ${city}?`, answer: "Our projects start from \u00A31,500 per month. This includes technical optimisation, content, link building and monthly reporting. The exact investment depends on the size of your store and competition. We start with a free call where we analyse your store and make a proposal." },
      { question: "How quickly will I see results from SEO?", answer: "First improvements in rankings and traffic are visible after 2-3 months. Real revenue growth comes after 6-12 months. It depends on the state of your store, your domain authority and competition. We report monthly on rankings, traffic and revenue from organic search." },
      { question: `Do you only work with stores in ${city}?`, answer: "No. We work with e-commerce brands across Europe. Our team works remotely and communicates via video, Slack and monthly reports. What sets us apart isn't location but focus: we only do SEO for online stores. No restaurants, dentists or local service businesses." },
      { question: "Which platforms do you support?", answer: "Shopify (including Plus), WooCommerce, BigCommerce, Adobe Commerce (Magento) and Amazon. We know per platform which SEO adjustments deliver the most. For Shopify it's often theme speed, for WooCommerce it's technical audits, for Magento it's crawl budget." },
      { question: `What makes EcomSEO different from other agencies in ${city}?`, answer: "We only do e-commerce SEO. No local businesses, no B2B sites, only online stores. Our KPI is your organic revenue, not how many keywords we rank for. You see in our monthly reports exactly where your budget goes. We turn down 70% of enquiries because they don't fit our specialism." },
      { question: "Can I get a free SEO audit?", answer: "Yes. We analyse your online store on the most important SEO factors and show where the biggest opportunities are. You get a concrete proposal, no waffle. Book your call via our website." },
    ],
    faqCtaHeading: "Ready to grow?",
    faqCtaSubtitle: (city) => `Book a free strategy call. We'll show you what SEO can deliver for your online store in ${city}.`,
  },
};

/* ------------------------------------------------------------------ */
/*  Builder                                                            */
/* ------------------------------------------------------------------ */

export function buildLocationPageData(
  location: Location,
  locale: Locale
): ServicePageProps {
  const { city, primaryKeyword, secondaryKeywords, localContext } = location;
  const s = strings[locale] || strings.nl;

  const kw1 = secondaryKeywords[0] || primaryKeyword;
  const kw2 = secondaryKeywords[1] || primaryKeyword;
  const isSpecialist = secondaryKeywords[0]?.includes("specialist") || secondaryKeywords[0]?.includes("consultant") || false;

    // Helper for locale-indexed objects
  const t = (map: Record<string, string>) => map[locale] || map.nl || "";

  // ── Client logo wall (mirrors /demo audit page) ──
  // Only the 4 SVG/PNG client logos currently exist in /public/images/clients.
  // Drop additional logo files in that directory and append them to this
  // array — they'll appear automatically on the pilot trust bar.
  // Set `noFilter: true` for any logo that's already white-on-transparent.
  const CLIENT_LOGOS: Array<{ src: string; alt: string; noFilter?: boolean }> = [
    { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
    { src: "/images/clients/hike.svg", alt: "Hike Footwear" },
    { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
    { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
  ];
  // Mirror the /demo (audit) page copy 1:1 — same eyebrow + same italic
  // "+ 15 more Shopify brands" caption. Pulled from demoPageT so any
  // future copy edit on /demo can be propagated by re-syncing these maps.
  const TRUST_BAR_EYEBROW: Record<string, string> = {
    fr: "Plébiscité par des marques DTC en forte croissance",
    en: "Trusted by fast-growing DTC brands",
    nl: "Vertrouwd door snelgroeiende DTC-merken",
    de: "Vertrauen von schnell wachsenden DTC-Marken",
    es: "La confianza de marcas DTC en rápido crecimiento",
    it: "Scelto da brand DTC in rapida crescita",
  };
  const TRUST_BAR_MORE_BRANDS: Record<string, string> = {
    fr: "+ 15 autres marques Shopify",
    en: "+ 15 more Shopify brands",
    nl: "+ 15 andere Shopify-merken",
    de: "+ 15 weitere Shopify-Marken",
    es: "+ 15 marcas Shopify más",
    it: "+ 15 altri brand Shopify",
  };

  // ── Lead-magnet block (Fabian intro video + audit CTA) ──
  // Visitors landing here from "SEO agency + city" SERPs have commercial
  // intent. We show the same Vidalytics intro Fabian uses on the homepage,
  // then point the hero CTA at /demo (the audit booking flow) instead of
  // the generic Typeform.
  // Now enabled site-wide on every location page after the le-havre
  // pilot was validated end-to-end.
  const showLeadMagnet = true;
  const ctaSubtextMap: Record<string, string> = {
    nl: "Bekijk de intro van 2 min, plan daarna je gratis audit.",
    fr: "Regardez l'intro de 2 min, puis reservez votre audit gratuit.",
    de: "Sieh dir die 2-Minuten-Intro an und buche danach dein kostenloses Audit.",
    es: "Mira la intro de 2 min y reserva tu auditoria gratuita.",
    it: "Guarda l'intro di 2 min e prenota la tua audit gratuita.",
    en: "Watch the 2-min intro, then book your free audit.",
  };

  // ── Reusable section definitions ──
  // Defined once so the pilot (B2B-funnel order) and the legacy non-pilot
  // (original stats-first order) branches can compose the same blocks in
  // different sequences without duplicating the data.
  const benefitsSection: ContentSection = {
    type: "benefits",
    badge: s.benefitsBadge,
    heading: s.benefitsHeading(city, isSpecialist),
    subtitle: s.benefitsSubtitle,
    benefits: s.benefits,
  };
  const processSection: ContentSection = {
    type: "process",
    badge: s.processBadge,
    heading: s.processHeading,
    subtitle: s.processSubtitle,
    process: s.processSteps,
  };
  const caseStudiesSection: ContentSection = {
    type: "caseStudies",
    badge: s.casesBadge,
    heading: s.casesHeading,
    subtitle: s.casesSubtitle,
    caseStudies: [
      {
        badge: "Fashion E-commerce",
        title: t({ nl: "Van 2.000 naar 18.000 bezoekers per maand", fr: "De 2 000 a 18 000 visiteurs par mois", de: "Von 2.000 auf 18.000 Besucher pro Monat", es: "De 2.000 a 18.000 visitantes al mes", it: "Da 2.000 a 18.000 visitatori al mese", en: "From 2,000 to 18,000 visitors per month" }),
        image: "/images/framer/fyAPXyjHaJjly5rybkvJY6xZQkQ.png",
        metrics: [
          { value: "+800%", label: t({ nl: "Organisch verkeer", fr: "Trafic organique", de: "Organischer Traffic", es: "Trafico organico", it: "Traffico organico", en: "Organic traffic" }) },
          { value: "+340%", label: t({ nl: "Organische omzet", fr: "CA organique", de: "Organischer Umsatz", es: "Facturacion organica", it: "Fatturato organico", en: "Organic revenue" }) },
          { value: t({ nl: "6 maanden", fr: "6 mois", de: "6 Monate", es: "6 meses", it: "6 mesi", en: "6 months" }), label: t({ nl: "Tijdsbestek", fr: "Duree", de: "Zeitraum", es: "Periodo", it: "Periodo", en: "Timeframe" }) },
        ],
        quote: t({ nl: "Ons organisch verkeer is 8x gegroeid en de omzet uit Google meer dan verdrievoudigd in een half jaar.", fr: "Notre trafic organique a ete multiplie par 8 et le chiffre d'affaires via Google a plus que triple en six mois.", de: "Unser organischer Traffic ist um das 8-fache gewachsen und der Umsatz ueber Google hat sich in einem halben Jahr mehr als verdreifacht.", es: "Nuestro trafico organico crecio 8 veces y la facturacion via Google se triplico en medio ano.", it: "Il nostro traffico organico e cresciuto di 8 volte e il fatturato da Google e triplicato in sei mesi.", en: "Our organic traffic grew 8x and revenue from Google more than tripled in six months." }),
        quoteAuthor: t({ nl: "Marketing Director, Fashion Webshop", fr: "Directeur Marketing, Boutique Mode", de: "Marketing Director, Fashion Onlineshop", es: "Director de Marketing, Tienda de Moda", it: "Direttore Marketing, Negozio di Moda", en: "Marketing Director, Fashion Store" }),
        href: "/cases/ecommerce-brand",
      },
      {
        badge: "Health & Beauty",
        title: t({ nl: "Van DA 12 naar DA 45 in 8 maanden", fr: "De DA 12 a DA 45 en 8 mois", de: "Von DA 12 auf DA 45 in 8 Monaten", es: "De DA 12 a DA 45 en 8 meses", it: "Da DA 12 a DA 45 in 8 mesi", en: "From DA 12 to DA 45 in 8 months" }),
        image: "/images/framer/dsId62uNnnWBWAr5Vi1Z5UqiQ.png",
        metrics: [
          { value: "DA 45", label: "Domain Authority" },
          { value: "+275%", label: t({ nl: "Top 10 posities", fr: "Positions Top 10", de: "Top-10-Positionen", es: "Posiciones Top 10", it: "Posizioni Top 10", en: "Top 10 positions" }) },
          { value: "150+", label: t({ nl: "Verwijzende domeinen", fr: "Domaines referents", de: "Verweisende Domains", es: "Dominios referentes", it: "Domini referenti", en: "Referring domains" }) },
        ],
        quote: t({ nl: "We stonden nergens. Nu ranken we op pagina 1 voor onze belangrijkste zoekwoorden.", fr: "Nous n'etions nulle part. Maintenant nous sommes en page 1 pour nos mots-cles les plus importants.", de: "Wir waren nirgends sichtbar. Jetzt ranken wir auf Seite 1 fuer unsere wichtigsten Keywords.", es: "No estabamos en ningun sitio. Ahora posicionamos en pagina 1 para nuestras palabras clave mas importantes.", it: "Non eravamo da nessuna parte. Ora siamo in pagina 1 per le nostre parole chiave piu importanti.", en: "We were nowhere. Now we rank on page 1 for our most important keywords." }),
        quoteAuthor: t({ nl: "Eigenaar, Health & Beauty Webshop", fr: "Proprietaire, Boutique Sante & Beaute", de: "Inhaber, Health & Beauty Onlineshop", es: "Propietario, Tienda de Salud y Belleza", it: "Proprietario, Negozio Salute e Bellezza", en: "Owner, Health & Beauty Store" }),
        href: "/cases/dutch-health-brand",
      },
    ],
    ctaText: s.casesCtaText,
    ctaHref: "/cases",
  };
  // Map per location slug — sourced from the generated `LOCATION_MAP_SLUGS`
  // registry. The registry lists every slug whose <slug>-map.png exists in
  // /public/images/locations/. To add maps for new live cities, run the
  // map-generator script — it (re)writes /tmp/generate-location-maps.py
  // and regenerates src/data/locationMaps.ts.
  const mapImage = LOCATION_MAP_SLUGS.has(location.slug)
    ? `/images/locations/${location.slug}-map.png`
    : undefined;

  const richTextSection: ContentSection = {
    type: "richText",
    badge: s.richTextBadge(city),
    heading: s.richTextHeading(primaryKeyword),
    richTextBlocks: [
      { heading: s.sectionEcommerce(city), body: localContext.marketInsight + " " + localContext.localFact },
      { heading: s.sectionNiches(city), body: localContext.strongNiches + s.richTextNichesSuffix },
      { heading: s.sectionChallenge(city), body: localContext.localChallenge + s.richTextChallengeSuffix },
      { heading: s.richTextSpecialismHeading, body: s.richTextSpecialismBody(primaryKeyword) },
    ],
    ...(mapImage
      ? {
          image: mapImage,
          imageAlt: `${primaryKeyword} — ${city}`,
        }
      : {}),
  };
  const deliverablesSection: ContentSection = {
    type: "deliverables",
    badge: s.deliverablesBadge,
    heading: s.deliverablesHeading,
    deliverables: s.deliverableItems,
  };

  // ── Pilot-only sections (B2B funnel: proof → process → convert) ──
  const revenueWinsSection: ContentSection = {
    type: "revenueWins",
    badge: (REVENUE_WINS_COPY[locale] || REVENUE_WINS_COPY.en).badge,
    heading: (REVENUE_WINS_COPY[locale] || REVENUE_WINS_COPY.en).heading(city),
    subtitle: (REVENUE_WINS_COPY[locale] || REVENUE_WINS_COPY.en).subtitle,
    revenueWins: REVENUE_AMOUNTS.map((r, idx): RevenueWin => {
      const copy = (REVENUE_WINS_COPY[locale] || REVENUE_WINS_COPY.en).cards[idx];
      return {
        amount: r.amount,
        label: copy.label,
        client: copy.client,
        condition: copy.condition,
        screenshot: r.screenshot,
        href: r.href,
      };
    }),
  };
  const bookingWidgetSection: ContentSection = {
    type: "bookingWidget",
    badge: (BOOKING_COPY[locale] || BOOKING_COPY.en).badge,
    heading: (BOOKING_COPY[locale] || BOOKING_COPY.en).heading(city),
    subtitle: (BOOKING_COPY[locale] || BOOKING_COPY.en).subtitle(city),
  };

  // ── Legacy (non-pilot) blocks ──
  const statsSection: ContentSection = {
    type: "stats",
    badge: s.statsBadge,
    heading: s.statsHeading(city),
    subtitle: s.statsSubtitle,
    stats: [
      { value: "19+", label: s.statsLabels[0] },
      { value: "140%", label: s.statsLabels[1] },
      { value: "9.000+", label: s.statsLabels[2] },
      { value: "6", label: s.statsLabels[3] },
    ],
  };
  const teamSection: ContentSection = {
    type: "team",
    badge: s.teamBadge,
    heading: s.teamHeading,
    subtitle: s.teamSubtitle(city),
    teamLead: {
      name: "Fabian van Til",
      role: s.teamRole,
      image: "/images/framer/fabian-van-til-new.jpeg",
      linkedin: "https://www.linkedin.com/in/fabianvantil/",
    },
  };

  // ── B2B funnel order (pilot) ──
  // Proof first (revenue wins) → why us (benefits) → how it works (process)
  // → CONVERT (booking widget) → reassurance (deliverables) → local SEO
  // content (rich text — pushed below the conversion moment so it can't
  // block the booking decision). Final FAQ + single /demo CTA closes the
  // page. Case-studies section removed: revenue wins already carry the
  // proof load, having both was redundant + diluted the funnel.
  const pilotSections: ContentSection[] = [
    revenueWinsSection,
    benefitsSection,
    processSection,
    bookingWidgetSection,
    deliverablesSection,
    richTextSection,
  ];

  // ── Legacy order (every non-pilot location) ──
  const legacySections: ContentSection[] = [
    statsSection,
    benefitsSection,
    processSection,
    caseStudiesSection,
    richTextSection,
    teamSection,
    deliverablesSection,
  ];

  const finalCta = FAQ_FINAL_CTA[locale] || FAQ_FINAL_CTA.en;

  // Pick one of the hero subtitle variants for this city. Avoids the
  // programmatic-SEO trap where every page in a locale has the same body
  // copy with only the city name swapped. Falls back to the legacy
  // single-template `heroSubtitle` if no variants exist for this locale.
  const subtitleVariants = HERO_SUBTITLE_VARIANTS[locale];
  const heroSubtitle = subtitleVariants && subtitleVariants.length > 0
    ? subtitleVariants[pickVariantIndex(location.slug, subtitleVariants.length)](city)
    : s.heroSubtitle(city, kw1, kw2);

  // Same approach for the H1 — replaces the legacy meta-title-style
  // template ("Agence SEO {city} | plus de chiffre d'affaires...") with
  // a real headline. Picks a different hash slot than the subtitle so
  // the same city doesn't always pair the same heading + subtitle index.
  const headingVariants = HERO_HEADING_VARIANTS[locale];
  // Reversed slug + 'h1' salt picked empirically to give an even spread
  // of all 4 H1 variants across both 38-FR and 29-NL city sets (no
  // variant left with 0 cities, no variant taking >50%).
  const heroHeading = headingVariants && headingVariants.length > 0
    ? headingVariants[pickVariantIndex(location.slug.split("").reverse().join("") + "h1", headingVariants.length)](city)
    : s.heroHeading(city);

return {
    hero: {
      badge: primaryKeyword.toUpperCase(),
      heading: heroHeading,
      subtitle: heroSubtitle,
      ctaText: s.ctaText,
      ...(showLeadMagnet
        ? {
            videoEmbedId: "wrphd1mXJaLobXJK",
            ctaHref: "/demo",
            ctaSubtext: ctaSubtextMap[locale] || ctaSubtextMap.en,
          }
        : {}),
    },
    trustBar: showLeadMagnet
      ? (TRUST_BAR_EYEBROW[locale] || TRUST_BAR_EYEBROW.en)
      : s.trustBar,
    ...(showLeadMagnet
      ? {
          trustBarLogos: CLIENT_LOGOS,
          trustBarMoreBrands: TRUST_BAR_MORE_BRANDS[locale] || TRUST_BAR_MORE_BRANDS.en,
        }
      : {}),
    sections: showLeadMagnet ? pilotSections : legacySections,
    faqs: {
      items: s.faqItems(city),
      miniCta: showLeadMagnet
        ? {
            // Pilot: single conversion moment — Typeform CTA replaced
            // with /demo so 100% of post-FAQ traffic funnels to one place.
            heading: finalCta.heading(city),
            subtitle: finalCta.subtitle(city),
            ctaHref: "/demo",
            ctaText: finalCta.ctaText,
          }
        : {
            heading: s.faqCtaHeading,
            subtitle: s.faqCtaSubtitle(city),
          },
    },
    locale,
  };
}
