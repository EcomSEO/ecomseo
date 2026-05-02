import type { Locale } from "../config";

export type DemoPageT = {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  noteLabel: string;
  noteBody: string;
  paragraphMeet: string;
  paragraphOutcome: string;
  brandsScaled: string;
  revenueGenerated: string;
  bookCta: string;
  trustBarLabel: string;
  trustBarMoreBrands: string;
  deliverablesEyebrow: string;
  deliverablesHeading: string;
  deliverables: Array<{ label: string; desc: string; outcome: string }>;
  feedbackHeading: string;
  feedbackSubtitle: string;
  feedbackVerifiedLabel: string;
  testimonials: Array<{
    brand: string;
    role: string;
    headline: string;
    body: string;
    date: string;
    tag: string;
  }>;
  pricingEyebrow: string;
  pricingHeading: string;
  pricingBody: string;
  faqEyebrow: string;
  faqHeading: string;
  faqs: Array<{ q: string; a: string }>;
  finalCtaHeading: string;
  finalCtaSubtext: string;
};

export const demoPageT: Record<Locale, DemoPageT> = {
  en: {
    eyebrow: "For fast-growing DTC brands doing €100K+ a month:",
    headingLead: "Book a 30-minute call with",
    headingAccent: "Fabian.",
    noteLabel: "Note:",
    noteBody:
      "this is NOT a sales pitch. Expect Fabian to literally show his expertise by telling you exactly what he would do to your store.",
    paragraphMeet:
      "A 30-minute Google Meet, screen shared. Fabian opens your website in Semrush, shows you where your store is leaking organic revenue, and walks you through the fixes that move both revenue and margin, across Google and the AI engines (ChatGPT, Perplexity, Google AI Overviews).",
    paragraphOutcome:
      "Perhaps we end up working together. Worst case, you learn something.",
    brandsScaled: "ecom brands scaled",
    revenueGenerated: "client revenue generated",
    bookCta: "Book my free audit",
    trustBarLabel: "Trusted by fast-growing DTC brands",
    trustBarMoreBrands: "+ 15 more Shopify brands",
    deliverablesEyebrow: "What's inside the audit",
    deliverablesHeading:
      "The audit we run after the fit call confirms we're a match.",
    deliverables: [
      {
        label: "132-point audit sheet",
        desc: "The same Google Sheet we run on paying clients. Indexation, canonicals, Core Web Vitals, schema gaps, robots.txt. Every blocker between your store and Google, with the fix next to it.",
        outcome: "Ship the quick wins in 21–45 days",
      },
      {
        label: "Ranked fix list",
        desc: "Your three biggest revenue leaks, sorted by impact. Not theory. Specific pages on your store, with the revenue each fix is worth.",
        outcome: "Know what to do first on Monday morning",
      },
      {
        label: "90-day roadmap",
        desc: "A plan you can hand to your team, a freelancer, or us. Revenue per initiative, not vanity traffic charts.",
        outcome: "Work with anyone, or with us",
      },
    ],
    feedbackHeading: "Feedback after the audit call",
    feedbackSubtitle:
      "From DTC brands who sat through the 30-minute session.",
    feedbackVerifiedLabel: "Verified",
    testimonials: [
      {
        brand: "UK Fashion E-commerce Brand",
        role: "Founder",
        headline: "Got a working document, not a pitch",
        body: "I booked expecting a sales pitch. Got a working document instead. Fabian walked through our Search Console, flagged 14 thin PDPs, and sketched out what to prioritise. Free, actionable, no follow-up spam.",
        date: "Apr 9, 2026",
        tag: "Fashion · WooCommerce",
      },
      {
        brand: "Norwegian Supplements Brand",
        role: "Co-founder",
        headline: "Spotted three indexation issues in 10 minutes",
        body: "Fabian jumped on Google Meet, opened our Search Console, and flagged three indexation issues in the first 10 minutes. Showed me live how Shopify was swallowing our canonicals. I left with a ranked fix list and a Google Sheet I still reference weekly.",
        date: "Mar 14, 2026",
        tag: "Supplements · Shopify",
      },
      {
        brand: "Home & Living Store",
        role: "Head of Growth",
        headline: "30 minutes of real analysis, not a demo",
        body: "Most agency calls are thinly disguised demos. This one wasn't. 30 minutes of real product-page analysis with revenue numbers attached to every recommendation. Got the full 132-point sheet within 48 hours, as promised.",
        date: "Feb 11, 2026",
        tag: "Home & Living · Shopify Plus",
      },
      {
        brand: "Dutch Supplement Brand",
        role: "Founder",
        headline: "Found €60K/yr of lost revenue on the call",
        body: "They found €60K a year of lost revenue in dead internal links and indexation bloat. Found it in the free call, not after we signed anything. That alone paid for a year of retainer.",
        date: "Jan 22, 2026",
        tag: "Supplements · Shopify",
      },
      {
        brand: "Norwegian DTC Lifestyle Brand",
        role: "Founder",
        headline: "Found technical debt we didn't know we had",
        body: "The audit surfaced technical debt we hadn't known was there for years. Duplicate canonicals, orphan pages, a sitemap issue from a 2022 migration. Everything prioritised and attached to a revenue number. No chest-thumping, just the work.",
        date: "Sep 14, 2025",
        tag: "Lifestyle · Magento 2",
      },
      {
        brand: "EU Beauty DTC",
        role: "Co-founder",
        headline: "They told us we weren't ready yet",
        body: "Honest call. They told us we weren't ready to hire them yet, and gave us the six things to fix first. Zero sales pressure. Came back six months later when the fundamentals were in place.",
        date: "Jul 21, 2025",
        tag: "Beauty · Shopify",
      },
    ],
    pricingEyebrow: "Pricing",
    pricingHeading: "Month-to-month. No minimum contract.",
    pricingBody:
      "Every engagement is scoped to your store. We quote you precisely at the end of the call, only if it's a fit. Technical-fix payback usually lands in 60 to 90 days. The full audit follows once we've confirmed we're working together.",
    faqEyebrow: "Audit FAQ",
    faqHeading: "Questions before you book",
    faqs: [
      {
        q: "Is the call actually free? What's the catch?",
        a: "Free, no catch. A 132-point ecom SEO audit at this depth usually runs €1,000 to €1,500 at a comparable agency. We do it for free because roughly one in three calls turns into a long-term engagement, so the call is our sales process. We cap at 4 a month so each one gets real prep (3 to 5 hours on your store before the call, plus the 30 minutes with me).",
      },
      {
        q: "Who is this for, and who is it not for?",
        a: "It's for ecom brands doing €100K a month or more on Shopify, Shopify Plus, WooCommerce, BigCommerce, or Magento, where you're ready to treat SEO as a profit channel. It's not for pre-revenue stores, dropshippers, anyone chasing a 30-day magic fix, or anyone who wants AI-spam content pumped out at scale. If you're below that line I'll tell you on the call and point you at the two or three things worth fixing first.",
      },
      {
        q: "What actually happens on the call?",
        a: "Google Meet, 30 minutes, screen-share on. I open your Search Console, your live SERPs, and your store. I walk you through where you're losing organic revenue, rank the three biggest leaks, and sketch a 90-day plan. Within 48 hours you get the full Google Sheet and a Loom walkthrough. Yours to keep.",
      },
      {
        q: "How fast do findings actually move the needle?",
        a: "Quick wins (technical fixes, missing schema, broken redirects) usually show up in 21 to 45 days. Content and link work compounds over 60 to 90 days. I sequence the roadmap so the highest impact per hour ships first.",
      },
      {
        q: "What does it cost if we hire you?",
        a: "Every engagement is scoped to your store. I quote you precisely at the end of the call, and only if it's a fit. Month-to-month, no minimum contract. Typical payback on technical fixes lands in 60 to 90 days.",
      },
      {
        q: "What if we're not a fit?",
        a: "No hard feelings. The fit call is free either way. If we're not a match, I'll tell you on the call and point you at who else is worth talking to. No follow-up drip, no pressure. The full 132-point audit only runs once we've confirmed we're working together.",
      },
    ],
    finalCtaHeading: "Ready to book your 30 minutes with Fabian?",
    finalCtaSubtext:
      "No sales pressure. Just a working session with your Search Console open. Grab a slot below.",
  },

  de: {
    eyebrow: "Für schnell wachsende DTC-Marken mit €100K+ Monatsumsatz:",
    headingLead: "Buche einen 30-Minuten-Call mit",
    headingAccent: "Fabian.",
    noteLabel: "Hinweis:",
    noteBody:
      "Das ist KEIN Verkaufsgespräch. Erwarte von Fabian, dass er seine Expertise direkt zeigt und dir sagt, was er an deinem Shop konkret ändern würde.",
    paragraphMeet:
      "Ein 30-Minuten-Google-Meet mit geteiltem Bildschirm. Fabian öffnet deine Website in Semrush, zeigt dir, wo deinem Shop organischer Umsatz verloren geht, und geht mit dir die Fixes durch, die sowohl Umsatz als auch Marge steigern, über Google und die KI-Engines (ChatGPT, Perplexity, Google AI Overviews).",
    paragraphOutcome:
      "Vielleicht arbeiten wir am Ende zusammen. Im schlimmsten Fall lernst du etwas.",
    brandsScaled: "E-Commerce-Marken skaliert",
    revenueGenerated: "Kundenumsatz generiert",
    bookCta: "Mein kostenloses Audit buchen",
    trustBarLabel: "Vertrauen von schnell wachsenden DTC-Marken",
    trustBarMoreBrands: "+ 15 weitere Shopify-Marken",
    deliverablesEyebrow: "Was im Audit enthalten ist",
    deliverablesHeading:
      "Das Audit, das wir durchführen, nachdem der Fit-Call bestätigt hat, dass wir passen.",
    deliverables: [
      {
        label: "132-Punkte-Audit-Sheet",
        desc: "Dasselbe Google Sheet, das wir bei zahlenden Kunden nutzen. Indexierung, Canonicals, Core Web Vitals, Schema-Lücken, robots.txt. Jeder Blocker zwischen deinem Shop und Google, mit dem Fix direkt daneben.",
        outcome: "Quick Wins in 21–45 Tagen umsetzen",
      },
      {
        label: "Priorisierte Fix-Liste",
        desc: "Deine drei größten Umsatz-Lecks, nach Impact sortiert. Keine Theorie. Konkrete Seiten in deinem Shop, mit dem Umsatz, der in jedem Fix steckt.",
        outcome: "Wisse am Montagmorgen genau, was zuerst zu tun ist",
      },
      {
        label: "90-Tage-Roadmap",
        desc: "Ein Plan, den du deinem Team, einem Freelancer oder uns übergeben kannst. Umsatz pro Initiative, keine Vanity-Traffic-Charts.",
        outcome: "Arbeite mit wem du willst, oder mit uns",
      },
    ],
    feedbackHeading: "Feedback nach dem Audit-Call",
    feedbackSubtitle:
      "Von DTC-Marken, die die 30-minütige Session durchlaufen haben.",
    feedbackVerifiedLabel: "Verifiziert",
    testimonials: [
      {
        brand: "UK Fashion E-Commerce-Marke",
        role: "Gründer",
        headline: "Habe ein Arbeitsdokument bekommen, keinen Pitch",
        body: "Ich habe mit einem Sales-Pitch gerechnet. Stattdessen habe ich ein Arbeitsdokument bekommen. Fabian ging unsere Search Console durch, markierte 14 dünne PDPs und skizzierte, was zu priorisieren ist. Kostenlos, umsetzbar, kein Follow-up-Spam.",
        date: "9. Apr 2026",
        tag: "Fashion · WooCommerce",
      },
      {
        brand: "Norwegische Supplements-Marke",
        role: "Mitgründer",
        headline: "Drei Indexierungsprobleme in 10 Minuten gefunden",
        body: "Fabian ging auf Google Meet, öffnete unsere Search Console und fand in den ersten 10 Minuten drei Indexierungsprobleme. Zeigte mir live, wie Shopify unsere Canonicals verschluckt. Ich bin mit einer priorisierten Fix-Liste und einem Google Sheet gegangen, das ich noch wöchentlich nutze.",
        date: "14. Mär 2026",
        tag: "Supplements · Shopify",
      },
      {
        brand: "Home & Living Store",
        role: "Head of Growth",
        headline: "30 Minuten echte Analyse, keine Demo",
        body: "Die meisten Agentur-Calls sind getarnte Demos. Dieser nicht. 30 Minuten echte Produktseiten-Analyse mit Umsatzzahlen hinter jeder Empfehlung. Innerhalb von 48 Stunden das vollständige 132-Punkte-Sheet bekommen, wie versprochen.",
        date: "11. Feb 2026",
        tag: "Home & Living · Shopify Plus",
      },
      {
        brand: "Niederländische Supplements-Marke",
        role: "Gründer",
        headline: "€60K/Jahr verlorenen Umsatz im Call gefunden",
        body: "Sie fanden €60K Jahresumsatz in toten internen Links und Indexierungs-Bloat. Gefunden im kostenlosen Call, nicht nachdem wir etwas unterschrieben hatten. Das allein hat ein Jahr Retainer bezahlt.",
        date: "22. Jan 2026",
        tag: "Supplements · Shopify",
      },
      {
        brand: "Norwegische DTC-Lifestyle-Marke",
        role: "Gründer",
        headline: "Technische Schulden gefunden, die wir nicht kannten",
        body: "Das Audit brachte technische Schulden ans Licht, die wir seit Jahren nicht kannten. Duplizierte Canonicals, verwaiste Seiten, ein Sitemap-Problem aus einer 2022er-Migration. Alles priorisiert und mit einer Umsatzzahl verknüpft. Kein Selbstlob, nur die Arbeit.",
        date: "14. Sep 2025",
        tag: "Lifestyle · Magento 2",
      },
      {
        brand: "EU Beauty DTC",
        role: "Mitgründer",
        headline: "Sie sagten uns, wir seien noch nicht bereit",
        body: "Ehrlicher Call. Sie sagten uns, wir seien noch nicht bereit, sie zu beauftragen, und gaben uns die sechs Dinge zum Fixen. Null Verkaufsdruck. Kamen sechs Monate später zurück, als die Grundlagen saßen.",
        date: "21. Jul 2025",
        tag: "Beauty · Shopify",
      },
    ],
    pricingEyebrow: "Preise",
    pricingHeading: "Monatlich kündbar. Keine Mindestlaufzeit.",
    pricingBody:
      "Jedes Engagement wird auf deinen Shop zugeschnitten. Wir nennen dir den genauen Preis am Ende des Calls, nur wenn wir passen. Die Amortisation technischer Fixes liegt meist bei 60 bis 90 Tagen. Das vollständige Audit startet erst, wenn wir bestätigt haben, dass wir zusammenarbeiten.",
    faqEyebrow: "Audit-FAQ",
    faqHeading: "Fragen vor der Buchung",
    faqs: [
      {
        q: "Ist der Call wirklich kostenlos? Wo ist der Haken?",
        a: "Kostenlos, kein Haken. Ein 132-Punkte-E-Commerce-SEO-Audit in dieser Tiefe kostet bei vergleichbaren Agenturen normalerweise €1.000 bis €1.500. Wir machen es kostenlos, weil ungefähr einer von drei Calls in eine langfristige Zusammenarbeit mündet, der Call ist unser Sales-Prozess. Wir limitieren auf 4 pro Monat, damit jeder Call echte Vorbereitung bekommt (3 bis 5 Stunden in deinem Shop plus die 30 Minuten mit mir).",
      },
      {
        q: "Für wen ist das, und für wen nicht?",
        a: "Für E-Commerce-Marken mit €100K+ Monatsumsatz auf Shopify, Shopify Plus, WooCommerce, BigCommerce oder Magento, die bereit sind, SEO als Profit-Channel zu behandeln. Nicht für Pre-Revenue-Shops, Dropshipper, Leute auf der Suche nach dem 30-Tage-Wunder oder für KI-Spam-Content in Massenproduktion. Wenn du darunter liegst, sage ich es dir im Call und verweise dich auf die zwei bis drei Dinge, die jetzt wichtig sind.",
      },
      {
        q: "Was passiert tatsächlich im Call?",
        a: "Google Meet, 30 Minuten, Bildschirmfreigabe an. Ich öffne deine Search Console, deine Live-SERPs und deinen Shop. Ich zeige dir, wo du organischen Umsatz verlierst, priorisiere die drei größten Lecks und skizziere einen 90-Tage-Plan. Innerhalb von 48 Stunden bekommst du das vollständige Google Sheet und eine Loom-Erklärung. Dein zu behalten.",
      },
      {
        q: "Wie schnell zeigen die Findings Wirkung?",
        a: "Quick Wins (technische Fixes, fehlendes Schema, kaputte Redirects) zeigen sich meist nach 21 bis 45 Tagen. Content und Link-Arbeit entfaltet sich über 60 bis 90 Tage. Ich sequenziere die Roadmap so, dass die höchste Wirkung pro Stunde zuerst ausgeliefert wird.",
      },
      {
        q: "Was kostet es, wenn wir mit euch arbeiten?",
        a: "Jedes Engagement wird auf deinen Shop zugeschnitten. Ich nenne dir den genauen Preis am Ende des Calls, nur wenn wir passen. Monatlich kündbar, keine Mindestlaufzeit. Die typische Amortisation technischer Fixes liegt bei 60 bis 90 Tagen.",
      },
      {
        q: "Was, wenn wir nicht zusammenpassen?",
        a: "Kein Problem. Der Fit-Call ist so oder so kostenlos. Wenn es nicht passt, sage ich es dir im Call und verweise dich an jemanden, mit dem sich das Gespräch lohnt. Keine Follow-up-Mails, kein Druck. Das vollständige 132-Punkte-Audit läuft erst, wenn bestätigt ist, dass wir zusammenarbeiten.",
      },
    ],
    finalCtaHeading: "Bereit, deine 30 Minuten mit Fabian zu buchen?",
    finalCtaSubtext:
      "Kein Verkaufsdruck. Einfach eine Arbeitssitzung mit offener Search Console. Greif dir unten einen Slot.",
  },

  fr: {
    eyebrow: "Pour les marques DTC en forte croissance dépassant 100K€/mois :",
    headingLead: "Réservez un appel de 30 minutes avec",
    headingAccent: "Fabian.",
    noteLabel: "Note :",
    noteBody:
      "ce n'est PAS un pitch commercial. Attendez-vous à ce que Fabian montre concrètement son expertise en vous disant exactement ce qu'il ferait sur votre boutique.",
    paragraphMeet:
      "Un Google Meet de 30 minutes, écran partagé. Fabian ouvre votre site dans Semrush, vous montre où votre boutique perd du revenu organique, et vous explique les fixes qui font bouger à la fois le chiffre d'affaires et la marge, sur Google et les moteurs IA (ChatGPT, Perplexity, Google AI Overviews).",
    paragraphOutcome:
      "Peut-être qu'on finit par travailler ensemble. Au pire, vous apprenez quelque chose.",
    brandsScaled: "marques ecom scalées",
    revenueGenerated: "de revenus clients générés",
    bookCta: "Réserver mon audit gratuit",
    trustBarLabel: "Plébiscité par des marques DTC en forte croissance",
    trustBarMoreBrands: "+ 15 autres marques Shopify",
    deliverablesEyebrow: "Ce que contient l'audit",
    deliverablesHeading:
      "L'audit qu'on lance une fois que l'appel de cadrage confirme qu'on est compatibles.",
    deliverables: [
      {
        label: "Sheet d'audit 132 points",
        desc: "Le même Google Sheet qu'on utilise pour les clients payants. Indexation, canoniques, Core Web Vitals, lacunes de schéma, robots.txt. Chaque blocage entre votre boutique et Google, avec le fix juste à côté.",
        outcome: "Livrer les quick wins en 21–45 jours",
      },
      {
        label: "Liste de fixes priorisée",
        desc: "Vos trois plus grosses fuites de revenu, triées par impact. Pas de théorie. Des pages précises de votre boutique, avec le revenu que vaut chaque fix.",
        outcome: "Savoir quoi faire en premier lundi matin",
      },
      {
        label: "Roadmap 90 jours",
        desc: "Un plan que vous pouvez confier à votre équipe, à un freelance, ou à nous. Du revenu par initiative, pas des graphiques de trafic pour la vitrine.",
        outcome: "Travailler avec n'importe qui, ou avec nous",
      },
    ],
    feedbackHeading: "Retours après l'appel d'audit",
    feedbackSubtitle:
      "De marques DTC qui ont fait la session de 30 minutes.",
    feedbackVerifiedLabel: "Vérifié",
    testimonials: [
      {
        brand: "Marque e-commerce mode UK",
        role: "Fondateur",
        headline: "On m'a donné un document de travail, pas un pitch",
        body: "J'ai réservé en m'attendant à un pitch commercial. On m'a donné un document de travail à la place. Fabian a parcouru notre Search Console, identifié 14 PDPs trop minces, et esquissé les priorités. Gratuit, actionnable, pas de spam de relance.",
        date: "9 avr. 2026",
        tag: "Mode · WooCommerce",
      },
      {
        brand: "Marque norvégienne de compléments",
        role: "Co-fondateur",
        headline: "Trois problèmes d'indexation repérés en 10 minutes",
        body: "Fabian a lancé Google Meet, ouvert notre Search Console et repéré trois problèmes d'indexation dans les 10 premières minutes. M'a montré en direct comment Shopify écrasait nos canoniques. Je suis reparti avec une liste de fixes priorisée et un Google Sheet que je consulte encore chaque semaine.",
        date: "14 mars 2026",
        tag: "Compléments · Shopify",
      },
      {
        brand: "Boutique Home & Living",
        role: "Head of Growth",
        headline: "30 minutes d'analyse réelle, pas une démo",
        body: "La plupart des appels d'agence sont des démos déguisées. Celui-ci non. 30 minutes d'analyse réelle de pages produit avec un chiffre de revenu attaché à chaque recommandation. Le sheet complet 132 points reçu sous 48 heures, comme promis.",
        date: "11 févr. 2026",
        tag: "Home & Living · Shopify Plus",
      },
      {
        brand: "Marque néerlandaise de compléments",
        role: "Fondateur",
        headline: "Trouvé 60K€/an de revenu perdu pendant l'appel",
        body: "Ils ont trouvé 60K€ de revenu annuel perdu dans des liens internes cassés et du bloat d'indexation. Trouvé dans l'appel gratuit, pas après avoir signé. À lui seul ça a payé une année de rétainer.",
        date: "22 janv. 2026",
        tag: "Compléments · Shopify",
      },
      {
        brand: "Marque lifestyle DTC norvégienne",
        role: "Fondateur",
        headline: "Dette technique qu'on ne connaissait pas",
        body: "L'audit a fait remonter de la dette technique qu'on ignorait depuis des années. Canoniques dupliquées, pages orphelines, un souci de sitemap d'une migration de 2022. Tout priorisé et associé à un chiffre de revenu. Pas de frime, juste le travail.",
        date: "14 sept. 2025",
        tag: "Lifestyle · Magento 2",
      },
      {
        brand: "Marque beauté DTC européenne",
        role: "Co-fondateur",
        headline: "Ils nous ont dit qu'on n'était pas prêts",
        body: "Appel honnête. Ils nous ont dit qu'on n'était pas prêts à les embaucher, et nous ont donné les six choses à corriger d'abord. Aucune pression commerciale. Revenus six mois plus tard quand les bases étaient en place.",
        date: "21 juil. 2025",
        tag: "Beauté · Shopify",
      },
    ],
    pricingEyebrow: "Tarifs",
    pricingHeading: "Mensuel. Aucun engagement minimum.",
    pricingBody:
      "Chaque mission est calibrée sur votre boutique. On vous donne un tarif précis à la fin de l'appel, uniquement si on est compatibles. Le retour sur investissement technique se fait généralement en 60 à 90 jours. L'audit complet démarre une fois qu'on a confirmé qu'on bosse ensemble.",
    faqEyebrow: "FAQ de l'audit",
    faqHeading: "Questions avant de réserver",
    faqs: [
      {
        q: "L'appel est vraiment gratuit ? Où est le piège ?",
        a: "Gratuit, aucun piège. Un audit SEO ecom 132 points à ce niveau coûte habituellement 1 000 à 1 500€ dans une agence comparable. On le fait gratuitement parce qu'environ un appel sur trois se transforme en collaboration long terme, donc l'appel, c'est notre processus de vente. On limite à 4 par mois pour que chaque appel ait une vraie préparation (3 à 5 heures sur votre boutique avant, plus les 30 minutes avec moi).",
      },
      {
        q: "Pour qui c'est, et pour qui ce n'est pas ?",
        a: "Pour les marques ecom à 100K€+/mois sur Shopify, Shopify Plus, WooCommerce, BigCommerce ou Magento, qui sont prêtes à traiter le SEO comme un canal de profit. Pas pour les boutiques pré-revenue, les dropshippers, ceux qui cherchent un remède miracle sur 30 jours, ou ceux qui veulent du contenu IA-spam à volume. Si vous êtes en dessous, je vous le dirai pendant l'appel et vous orienterai sur les deux ou trois choses à corriger en priorité.",
      },
      {
        q: "Qu'est-ce qui se passe concrètement pendant l'appel ?",
        a: "Google Meet, 30 minutes, partage d'écran. J'ouvre votre Search Console, vos SERPs live, et votre boutique. Je vous montre où vous perdez du revenu organique, je classe les trois plus grosses fuites, et je vous esquisse un plan 90 jours. Sous 48 heures, vous recevez le Google Sheet complet et une vidéo Loom. À garder.",
      },
      {
        q: "En combien de temps les findings bougent vraiment l'aiguille ?",
        a: "Les quick wins (fixes techniques, schéma manquant, redirections cassées) se voient généralement en 21 à 45 jours. Le travail de contenu et de liens compose sur 60 à 90 jours. Je séquence la roadmap pour que le plus gros impact par heure soit livré en premier.",
      },
      {
        q: "Ça coûte combien si on vous embauche ?",
        a: "Chaque mission est calibrée sur votre boutique. Je vous donne un tarif précis à la fin de l'appel, uniquement si on est compatibles. Mensuel, aucun engagement minimum. Le ROI typique sur les fixes techniques se fait en 60 à 90 jours.",
      },
      {
        q: "Et si on n'est pas compatibles ?",
        a: "Pas de souci. L'appel de cadrage est gratuit dans tous les cas. Si on n'est pas alignés, je vous le dirai pendant l'appel et je vous orienterai vers qui vaut le coup. Pas de relance mail, pas de pression. L'audit complet 132 points ne démarre qu'une fois qu'on a confirmé qu'on bosse ensemble.",
      },
    ],
    finalCtaHeading: "Prêt à réserver vos 30 minutes avec Fabian ?",
    finalCtaSubtext:
      "Pas de pression commerciale. Juste une session de travail avec votre Search Console ouverte. Prenez un créneau ci-dessous.",
  },

  es: {
    eyebrow: "Para marcas DTC en rápido crecimiento que facturan 100K€+/mes:",
    headingLead: "Reserva una llamada de 30 minutos con",
    headingAccent: "Fabian.",
    noteLabel: "Nota:",
    noteBody:
      "esto NO es una llamada de ventas. Espera que Fabian demuestre su expertise diciéndote literalmente lo que haría en tu tienda.",
    paragraphMeet:
      "Un Google Meet de 30 minutos, con pantalla compartida. Fabian abre tu sitio en Semrush, te muestra dónde tu tienda pierde ingresos orgánicos y te explica los arreglos que mueven tanto ingresos como margen, en Google y los motores de IA (ChatGPT, Perplexity, Google AI Overviews).",
    paragraphOutcome:
      "Quizá terminemos trabajando juntos. En el peor caso, aprendes algo.",
    brandsScaled: "marcas ecom escaladas",
    revenueGenerated: "en ingresos de cliente generados",
    bookCta: "Reservar mi auditoría gratis",
    trustBarLabel: "La confianza de marcas DTC en rápido crecimiento",
    trustBarMoreBrands: "+ 15 marcas Shopify más",
    deliverablesEyebrow: "Qué contiene la auditoría",
    deliverablesHeading:
      "La auditoría que lanzamos una vez que la llamada de ajuste confirma que somos compatibles.",
    deliverables: [
      {
        label: "Sheet de auditoría de 132 puntos",
        desc: "El mismo Google Sheet que usamos con clientes de pago. Indexación, canonicals, Core Web Vitals, huecos de schema, robots.txt. Cada bloqueador entre tu tienda y Google, con el arreglo al lado.",
        outcome: "Ejecuta las quick wins en 21–45 días",
      },
      {
        label: "Lista de arreglos priorizada",
        desc: "Tus tres mayores fugas de ingresos, ordenadas por impacto. No teoría. Páginas concretas de tu tienda, con los ingresos que vale cada arreglo.",
        outcome: "Saber qué hacer primero el lunes por la mañana",
      },
      {
        label: "Roadmap a 90 días",
        desc: "Un plan que puedes pasar a tu equipo, a un freelance o a nosotros. Ingresos por iniciativa, no gráficos de tráfico vanidosos.",
        outcome: "Trabaja con quien quieras, o con nosotros",
      },
    ],
    feedbackHeading: "Comentarios tras la llamada de auditoría",
    feedbackSubtitle:
      "De marcas DTC que pasaron por la sesión de 30 minutos.",
    pricingEyebrow: "Precios",
    pricingHeading: "Mes a mes. Sin contrato mínimo.",
    pricingBody:
      "Cada colaboración se adapta a tu tienda. Te damos un precio exacto al final de la llamada, solo si encajamos. La recuperación en arreglos técnicos suele darse en 60 a 90 días. La auditoría completa arranca una vez confirmado que trabajamos juntos.",
    faqEyebrow: "FAQ de la auditoría",
    faqHeading: "Preguntas antes de reservar",
    faqs: [
      {
        q: "¿La llamada es realmente gratuita? ¿Cuál es la trampa?",
        a: "Gratuita, sin trampa. Una auditoría SEO ecom de 132 puntos a este nivel suele costar entre 1.000€ y 1.500€ en una agencia comparable. La hacemos gratis porque aproximadamente una de cada tres llamadas se convierte en colaboración a largo plazo, así que la llamada es nuestro proceso de ventas. Limitamos a 4 al mes para que cada una tenga preparación real (3 a 5 horas en tu tienda antes de la llamada, más los 30 minutos conmigo).",
      },
      {
        q: "¿Para quién es, y para quién no?",
        a: "Para marcas ecom con más de 100K€/mes en Shopify, Shopify Plus, WooCommerce, BigCommerce o Magento, que están listas para tratar el SEO como canal de beneficio. No es para tiendas pre-ingresos, dropshippers, quien busca un arreglo milagroso en 30 días, o quien quiere contenido IA-spam en volumen. Si estás por debajo de esa línea, te lo diré en la llamada y te orientaré hacia las dos o tres cosas que vale la pena arreglar primero.",
      },
      {
        q: "¿Qué pasa realmente en la llamada?",
        a: "Google Meet, 30 minutos, con pantalla compartida. Abro tu Search Console, tus SERPs en vivo y tu tienda. Te enseño dónde pierdes ingresos orgánicos, priorizo las tres mayores fugas y esbozo un plan a 90 días. En 48 horas recibes el Google Sheet completo y un vídeo Loom. Tuyos para quedarte.",
      },
      {
        q: "¿Cuánto tardan los hallazgos en mover la aguja?",
        a: "Las quick wins (arreglos técnicos, schema faltante, redirecciones rotas) suelen verse en 21 a 45 días. El trabajo de contenido y enlaces compone en 60 a 90 días. Secuencio el roadmap para que el mayor impacto por hora se entregue primero.",
      },
      {
        q: "¿Cuánto cuesta si os contratamos?",
        a: "Cada colaboración se adapta a tu tienda. Te doy un precio exacto al final de la llamada, solo si encajamos. Mes a mes, sin contrato mínimo. La recuperación típica en arreglos técnicos se da en 60 a 90 días.",
      },
      {
        q: "¿Y si no encajamos?",
        a: "Sin problema. La llamada de ajuste es gratuita de todas formas. Si no coincidimos, te lo digo en la llamada y te oriento hacia con quién sí vale la pena hablar. Sin emails de seguimiento, sin presión. La auditoría completa de 132 puntos solo arranca cuando hemos confirmado que trabajamos juntos.",
      },
    ],
    finalCtaHeading: "¿Listo para reservar tus 30 minutos con Fabian?",
    finalCtaSubtext:
      "Sin presión comercial. Solo una sesión de trabajo con tu Search Console abierta. Coge un hueco abajo.",
  },

  it: {
    eyebrow: "Per brand DTC in rapida crescita con 100K€+ al mese:",
    headingLead: "Prenota una chiamata di 30 minuti con",
    headingAccent: "Fabian.",
    noteLabel: "Nota:",
    noteBody:
      "questa NON è una chiamata commerciale. Aspettati che Fabian dimostri letteralmente la sua competenza dicendoti esattamente cosa farebbe sul tuo store.",
    paragraphMeet:
      "Un Google Meet di 30 minuti, con schermo condiviso. Fabian apre il tuo sito in Semrush, ti mostra dove il tuo store sta perdendo ricavi organici e ti guida attraverso le correzioni che muovono sia ricavi che margine, su Google e i motori IA (ChatGPT, Perplexity, Google AI Overviews).",
    paragraphOutcome:
      "Magari finiamo a lavorare insieme. Nel peggiore dei casi, impari qualcosa.",
    brandsScaled: "brand e-commerce scalati",
    revenueGenerated: "di ricavi cliente generati",
    bookCta: "Prenota il mio audit gratuito",
    trustBarLabel: "Scelto da brand DTC in rapida crescita",
    trustBarMoreBrands: "+ 15 altri brand Shopify",
    deliverablesEyebrow: "Cosa c'è dentro l'audit",
    deliverablesHeading:
      "L'audit che eseguiamo dopo che la fit call conferma che siamo compatibili.",
    deliverables: [
      {
        label: "Sheet di audit da 132 punti",
        desc: "Lo stesso Google Sheet che usiamo con i clienti paganti. Indicizzazione, canonical, Core Web Vitals, lacune di schema, robots.txt. Ogni blocco tra il tuo store e Google, con la correzione a fianco.",
        outcome: "Spedisci le quick win in 21–45 giorni",
      },
      {
        label: "Lista di fix priorizzata",
        desc: "Le tue tre maggiori perdite di ricavi, ordinate per impatto. Niente teoria. Pagine specifiche del tuo store, con i ricavi che vale ogni fix.",
        outcome: "Sapere cosa fare prima lunedì mattina",
      },
      {
        label: "Roadmap a 90 giorni",
        desc: "Un piano che puoi passare al tuo team, a un freelance o a noi. Ricavi per iniziativa, non grafici di traffico di vanità.",
        outcome: "Lavora con chiunque, o con noi",
      },
    ],
    feedbackHeading: "Feedback dopo la call di audit",
    feedbackSubtitle:
      "Da brand DTC che hanno fatto la sessione di 30 minuti.",
    pricingEyebrow: "Prezzi",
    pricingHeading: "Mese per mese. Nessun contratto minimo.",
    pricingBody:
      "Ogni collaborazione è calibrata sul tuo store. Ti diamo un prezzo preciso alla fine della call, solo se siamo compatibili. Il payback sui fix tecnici di solito arriva tra 60 e 90 giorni. L'audit completo parte una volta confermato che lavoriamo insieme.",
    faqEyebrow: "FAQ dell'audit",
    faqHeading: "Domande prima di prenotare",
    faqs: [
      {
        q: "La call è davvero gratuita? Dov'è il trucco?",
        a: "Gratuita, nessun trucco. Un audit SEO e-commerce da 132 punti a questa profondità di solito costa dai 1.000€ ai 1.500€ in un'agenzia comparabile. Lo facciamo gratis perché circa una call su tre si trasforma in una collaborazione a lungo termine, quindi la call è il nostro processo di vendita. Limitiamo a 4 al mese così ogni call ha una preparazione vera (3–5 ore sul tuo store prima, più i 30 minuti con me).",
      },
      {
        q: "Per chi è, e per chi non è?",
        a: "Per brand e-commerce a 100K€+/mese su Shopify, Shopify Plus, WooCommerce, BigCommerce o Magento, pronti a trattare la SEO come canale di profitto. Non è per store pre-fatturato, dropshipper, chi cerca la soluzione miracolosa a 30 giorni, o chi vuole contenuti AI-spam in massa. Se sei sotto quella soglia te lo dico in call e ti indico le due o tre cose da sistemare prima.",
      },
      {
        q: "Cosa succede davvero durante la call?",
        a: "Google Meet, 30 minuti, schermo condiviso. Apro la tua Search Console, le tue SERP in diretta e il tuo store. Ti mostro dove perdi ricavi organici, priorizzo le tre maggiori perdite e delineo un piano a 90 giorni. Entro 48 ore ricevi il Google Sheet completo e un video Loom. Tuoi da tenere.",
      },
      {
        q: "Quanto velocemente i findings muovono l'ago?",
        a: "Le quick win (fix tecnici, schema mancante, redirect rotti) di solito si vedono in 21–45 giorni. Il lavoro di contenuto e link compone in 60–90 giorni. Sequenzio la roadmap in modo che il maggior impatto per ora venga rilasciato per primo.",
      },
      {
        q: "Quanto costa se vi assumiamo?",
        a: "Ogni collaborazione è calibrata sul tuo store. Ti do un prezzo preciso alla fine della call, solo se siamo compatibili. Mese per mese, nessun contratto minimo. Il payback tipico sui fix tecnici arriva in 60–90 giorni.",
      },
      {
        q: "E se non siamo compatibili?",
        a: "Nessun problema. La fit call è gratuita comunque. Se non siamo allineati, te lo dico in call e ti indico con chi vale la pena parlare. Nessuna email di follow-up, nessuna pressione. L'audit completo da 132 punti parte solo quando abbiamo confermato che lavoriamo insieme.",
      },
    ],
    finalCtaHeading: "Pronto a prenotare i tuoi 30 minuti con Fabian?",
    finalCtaSubtext:
      "Nessuna pressione commerciale. Solo una sessione di lavoro con la tua Search Console aperta. Prendi uno slot qui sotto.",
  },

  nl: {
    eyebrow: "Voor snelgroeiende DTC-merken met €100K+ per maand:",
    headingLead: "Boek een gesprek van 30 minuten met",
    headingAccent: "Fabian.",
    noteLabel: "Let op:",
    noteBody:
      "dit is GEEN verkoopgesprek. Verwacht dat Fabian zijn expertise laat zien door je letterlijk te vertellen wat hij in jouw shop zou doen.",
    paragraphMeet:
      "Een Google Meet van 30 minuten met gedeeld scherm. Fabian opent jouw website in Semrush, laat zien waar je shop organische omzet laat liggen, en loopt je door de fixes die zowel omzet als marge verschuiven, over Google en de AI-engines (ChatGPT, Perplexity, Google AI Overviews).",
    paragraphOutcome:
      "Misschien gaan we uiteindelijk samenwerken. In het slechtste geval leer je iets.",
    brandsScaled: "e-commerce merken geschaald",
    revenueGenerated: "aan klantomzet gegenereerd",
    bookCta: "Mijn gratis audit boeken",
    trustBarLabel: "Vertrouwd door snelgroeiende DTC-merken",
    trustBarMoreBrands: "+ 15 andere Shopify-merken",
    deliverablesEyebrow: "Wat zit er in de audit",
    deliverablesHeading:
      "De audit die we draaien nadat het fit-gesprek heeft bevestigd dat we een match zijn.",
    deliverables: [
      {
        label: "132-punts audit-sheet",
        desc: "Hetzelfde Google Sheet dat we bij betalende klanten gebruiken. Indexatie, canonicals, Core Web Vitals, schema-gaten, robots.txt. Elke blokkade tussen jouw shop en Google, met de fix ernaast.",
        outcome: "Lever de quick wins in 21–45 dagen",
      },
      {
        label: "Geprioriteerde fix-lijst",
        desc: "Je drie grootste omzet-lekken, gesorteerd op impact. Geen theorie. Concrete pagina's in jouw shop, met de omzet die elke fix waard is.",
        outcome: "Weet wat je maandagochtend als eerste doet",
      },
      {
        label: "90-dagen roadmap",
        desc: "Een plan dat je aan je team, een freelancer of aan ons kunt geven. Omzet per initiatief, geen ijdele verkeersgrafieken.",
        outcome: "Werk met wie je wil, of met ons",
      },
    ],
    feedbackHeading: "Feedback na het audit-gesprek",
    feedbackSubtitle:
      "Van DTC-merken die de sessie van 30 minuten hebben gedaan.",
    pricingEyebrow: "Prijzen",
    pricingHeading: "Maandelijks. Geen minimum contract.",
    pricingBody:
      "Elke samenwerking wordt afgestemd op jouw shop. We geven je een precieze prijs aan het eind van het gesprek, alleen als we een match zijn. De terugverdientijd op technische fixes ligt meestal op 60 tot 90 dagen. De volledige audit start pas als we bevestigd hebben dat we samenwerken.",
    faqEyebrow: "Audit-FAQ",
    faqHeading: "Vragen voor je boekt",
    faqs: [
      {
        q: "Is het gesprek echt gratis? Wat is de catch?",
        a: "Gratis, geen catch. Een 132-punts e-commerce SEO-audit op deze diepte kost normaal €1.000 tot €1.500 bij een vergelijkbaar bureau. We doen het gratis omdat ongeveer één op de drie gesprekken uitmondt in een langdurige samenwerking, het gesprek is ons salesproces. We cappen op 4 per maand zodat elk gesprek echte voorbereiding krijgt (3 tot 5 uur op jouw shop vooraf, plus de 30 minuten met mij).",
      },
      {
        q: "Voor wie is dit, en voor wie niet?",
        a: "Voor e-commerce merken die €100K+/maand draaien op Shopify, Shopify Plus, WooCommerce, BigCommerce of Magento, die klaar zijn om SEO te behandelen als winst-kanaal. Niet voor pre-revenue shops, dropshippers, mensen die op zoek zijn naar een 30-daagse wonderoplossing, of wie AI-spamcontent in bulk wil. Zit je daar onder, dan zeg ik dat in het gesprek en wijs ik je op de twee of drie dingen die nu het meest waard zijn om te fixen.",
      },
      {
        q: "Wat gebeurt er echt tijdens het gesprek?",
        a: "Google Meet, 30 minuten, scherm gedeeld. Ik open je Search Console, je live SERP's en je shop. Ik laat je zien waar je organische omzet verliest, prioriteer de drie grootste lekken en schets een 90-dagen plan. Binnen 48 uur krijg je het volledige Google Sheet en een Loom-walkthrough. Van jou om te houden.",
      },
      {
        q: "Hoe snel bewegen de findings de naald?",
        a: "Quick wins (technische fixes, ontbrekend schema, kapotte redirects) zie je meestal in 21 tot 45 dagen. Content- en linkwerk stapelt op over 60 tot 90 dagen. Ik volgorde de roadmap zo dat de hoogste impact per uur het eerst wordt geleverd.",
      },
      {
        q: "Wat kost het als we jullie inhuren?",
        a: "Elke samenwerking wordt afgestemd op jouw shop. Ik geef je een precieze prijs aan het eind van het gesprek, alleen als we een match zijn. Maandelijks, geen minimum contract. Typische terugverdientijd op technische fixes: 60 tot 90 dagen.",
      },
      {
        q: "Wat als we geen match zijn?",
        a: "Geen probleem. Het fit-gesprek is hoe dan ook gratis. Zijn we geen match, dan zeg ik dat in het gesprek en wijs ik je op met wie je wel beter kunt praten. Geen follow-up mails, geen druk. De volledige 132-punts audit start pas als bevestigd is dat we samenwerken.",
      },
    ],
    finalCtaHeading: "Klaar om je 30 minuten met Fabian te boeken?",
    finalCtaSubtext:
      "Geen verkoopdruk. Gewoon een werksessie met je Search Console open. Pak een slot hieronder.",
  },
};
