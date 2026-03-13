import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const ecommerceSeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Ecommerce SEO",
      heading: "Ecommerce SEO Services That\u200BGrow Revenue \u2014 Not Just Traffic",
      subtitle: "Most agencies chase vanity metrics. We chase sales. If your store gets visitors but not buyers, you don\u2019t have an SEO problem \u2014 you have a growth strategy problem. We fix both.",
      ctaText: "Book a Free Strategy Call",
    },
    trustBar: "Trusted platforms & 7-figure results",
    sections: [
      {
        type: "process",
        badge: "Why Most Stores Fail",
        heading: "Most Agencies Chase Vanity Metrics. We Chase Sales.",
        process: [
          { number: "01", title: "Wrong Intent", description: "Most agencies optimize for informational keywords (low value). We rank for transactional intent \u2014 capturing buyers exactly when they are ready to purchase." },
          { number: "02", title: "Generic Categories", description: "Most category pages are just product grids. Yours should behave like landing pages built for persuasion." },
          { number: "03", title: "Technical Debt", description: "Slow load times. Crawl waste. JS rendering issues. These invisible issues quietly kill your rankings." },
          { number: "04", title: "No CRO Layer", description: "Traffic without conversion is money left on the table. We fix both \u2014 simultaneously." },
        ],
      },
      {
        type: "benefits",
        badge: "THE ECOMSEO STANDARD",
        heading: "What We Do Differently",
        subtitle: "Most agencies apply \u201Cblog strategies\u201D to online stores. We don\u2019t. We engineer site architecture and technical foundations specifically for high-volume ecommerce.",
        benefits: [
          { title: "The Technical Foundation", description: "Faster load times, crawl waste elimination for stores with 500+ SKUs, and multi-channel synchronization with Google Merchant Center and Search Console." },
          { title: "Category Pages That Sell", description: "Your category pages should behave like landing pages, sales pages, and SEO hubs \u2014 all at once. We build them to rank and convert." },
          { title: "AI & LLM Optimization", description: "Search is evolving. We ensure your brand and products are recommended by the next generation of search engines: AI Overviews, ChatGPT, and AI Agents." },
          { title: "Revenue-First Content", description: "Every piece of content we create targets commercial intent. Buying guides, comparison pages, and product content that drives revenue, not just traffic." },
          { title: "Scalable Processes", description: "With thousands of SKUs, manual optimization is impossible. We build automated workflows for title tags, meta descriptions, and structured data at scale." },
          { title: "Conversion Optimization", description: "Rankings mean nothing if visitors don\u2019t buy. We optimize from Google to checkout, improving both traffic quality and on-site conversion rates." },
        ],
      },
      {
        type: "benefits",
        badge: "Why SEO",
        heading: "Why the Top 1% of Stores Bet Big on SEO",
        benefits: [
          { title: "Lower Customer Acquisition Cost", description: "Organic traffic is \u201Cfree\u201D once earned. This balances out your paid spend, making your overall marketing profitable." },
          { title: "High-Intent Traffic", description: "People searching for \u201Cbuy leather chelsea boots\u201D are at the bottom of the funnel. We put you in front of them." },
          { title: "Brand Authority & Trust", description: "Users trust organic results more than sponsored slots. Ranking #1 signals you are the market leader." },
          { title: "Sustainable Growth", description: "Avoid the \u201Cfeast or famine\u201D cycle of paid ads. Build a consistent stream of revenue that grows month over month." },
        ],
      },
      {
        type: "process",
        badge: "The Framework",
        heading: "The Commerce Growth Framework\u2122",
        subtitle: "You don\u2019t need random tactics. You need a system built for ecommerce volume, competition, and SKU scale.",
        process: [
          { number: "01", title: "Foundation", description: "Technical audit, crawl optimization, speed fixes, and structured data. The boring stuff that makes everything else work." },
          { number: "02", title: "Growth", description: "Category page optimization, content strategy, and internal linking architecture. Building the engine that drives organic revenue." },
          { number: "03", title: "Scale", description: "Authority building, competitive gap targeting, and AI search optimization. Compounding growth that makes you the market leader." },
          { number: "04", title: "Dominate", description: "Continuous optimization, new market expansion, and defensive SEO. Protecting and extending your organic market share." },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "How can I improve the SEO of my ecommerce website?", answer: "Focus on the technical foundation first \u2014 site speed, crawlability, and structured data. Then optimize category pages for commercial intent keywords, create revenue-driving content, and build authoritative backlinks. Read our [complete ecommerce SEO guide](/blog/ecommerce-seo) for a detailed breakdown of each step." },
        { question: "Why should I invest in SEO services for ecommerce?", answer: "SEO is an investment in equity, whereas PPC is an expense (rent). If you stop paying for ads, your traffic drops to zero instantly. With SEO, you\u2019re building a digital asset that continues to drive revenue, lowering your blended Customer Acquisition Cost and increasing profitability." },
        { question: "How long does it take to see results?", answer: "3\u20136 months for measurable uplifts. 6\u201312 months for market dominance. Technical fixes can show impact within weeks, while content and authority building compound over time." },
        { question: "What platforms do you work with?", answer: "Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Adobe Commerce \u2014 we\u2019ve ranked stores on every major ecommerce platform. Our strategies are platform-agnostic but our implementation is platform-specific." },
        { question: "What makes your approach different from other SEO agencies?", answer: "We only work with ecommerce. Every playbook, every template, every audit is built for product catalogs and revenue \u2014 not blog traffic. We measure success in revenue attribution, not just keyword rankings. See our [ecommerce SEO strategy framework](/blog/ecommerce-seo-strategy) for more on our methodology." },
        { question: "Do you offer a free audit?", answer: "Yes. We offer a complimentary ecommerce SEO audit that identifies your biggest opportunities and technical issues. Learn more about [what an ecommerce SEO audit covers](/blog/ecommerce-seo-audit), then book a call and we\u2019ll show you exactly what\u2019s holding your store back." },
      ],
      miniCta: {
        heading: "Ready to 2\u20134\u00D7 Your Ecommerce Revenue?",
        subtitle: "Book a call today and start growing. We\u2019ll show you exactly where you\u2019re leaving money on the table.",
      },
    },
  },
  de: {
    hero: {
      badge: "E-Commerce SEO",
      heading: "E-Commerce SEO, das Umsatz steigert \u2014 nicht nur Traffic",
      subtitle: "Die meisten Agenturen jagen Eitelkeitskennzahlen hinterher. Wir jagen Umsatz. Wenn Ihr Shop Besucher bekommt, aber keine K\u00e4ufer, haben Sie kein SEO-Problem \u2014 Sie haben ein Wachstumsproblem. Wir l\u00f6sen beides.",
      ctaText: "Kostenloses Strategiegespr\u00e4ch buchen",
    },
    trustBar: "Vertrauensw\u00fcrdige Plattformen & 7-stellige Ergebnisse",
    sections: [
      {
        type: "process",
        badge: "Warum die meisten Shops scheitern",
        heading: "Die meisten Agenturen jagen Eitelkeitskennzahlen. Wir jagen Umsatz.",
        process: [
          { number: "01", title: "Falsche Suchintention", description: "Die meisten Agenturen optimieren f\u00fcr informationelle Keywords (geringer Wert). Wir ranken f\u00fcr transaktionale Suchintention \u2014 und erreichen K\u00e4ufer genau dann, wenn sie bereit sind zu kaufen." },
          { number: "02", title: "Generische Kategorien", description: "Die meisten Kategorieseiten sind nur Produktraster. Ihre sollten sich wie Landingpages verhalten, die zum Kauf \u00fcberzeugen." },
          { number: "03", title: "Technische Schulden", description: "Langsame Ladezeiten. Verschwendetes Crawl-Budget. JS-Rendering-Probleme. Diese unsichtbaren Probleme zerst\u00f6ren leise Ihre Rankings." },
          { number: "04", title: "Keine CRO-Ebene", description: "Traffic ohne Conversion ist verschenktes Geld. Wir optimieren beides \u2014 gleichzeitig." },
        ],
      },
      {
        type: "benefits",
        badge: "DER ECOMSEO-STANDARD",
        heading: "Was wir anders machen",
        subtitle: "Die meisten Agenturen wenden \u201EBlog-Strategien\u201C auf Online-Shops an. Wir nicht. Wir entwickeln Website-Architektur und technische Grundlagen speziell f\u00fcr umsatzstarken E-Commerce.",
        benefits: [
          { title: "Das technische Fundament", description: "Schnellere Ladezeiten, Crawl-Budget-Optimierung f\u00fcr Shops mit 500+ SKUs und Multi-Channel-Synchronisation mit Google Merchant Center und Search Console." },
          { title: "Kategorieseiten, die verkaufen", description: "Ihre Kategorieseiten sollten gleichzeitig als Landingpages, Verkaufsseiten und SEO-Hubs funktionieren. Wir bauen sie so, dass sie ranken und konvertieren." },
          { title: "KI- & LLM-Optimierung", description: "Suche entwickelt sich weiter. Wir stellen sicher, dass Ihre Marke und Produkte von der n\u00e4chsten Generation der Suchmaschinen empfohlen werden: AI Overviews, ChatGPT und KI-Agenten." },
          { title: "Umsatzorientierter Content", description: "Jeder Content, den wir erstellen, zielt auf kommerzielle Suchintention ab. Kaufratgeber, Vergleichsseiten und Produktcontent, der Umsatz treibt \u2014 nicht nur Traffic." },
          { title: "Skalierbare Prozesse", description: "Bei Tausenden von SKUs ist manuelle Optimierung unm\u00f6glich. Wir bauen automatisierte Workflows f\u00fcr Title-Tags, Meta-Beschreibungen und strukturierte Daten im gro\u00dfen Ma\u00dfstab." },
          { title: "Conversion-Optimierung", description: "Rankings bedeuten nichts, wenn Besucher nicht kaufen. Wir optimieren von Google bis zum Checkout und verbessern sowohl Traffic-Qualit\u00e4t als auch Conversion-Raten." },
        ],
      },
      {
        type: "benefits",
        badge: "Warum SEO",
        heading: "Warum die Top 1 % der Shops gro\u00df auf SEO setzen",
        benefits: [
          { title: "Niedrigere Kundenakquisitionskosten", description: "Organischer Traffic ist \u201Ekostenlos\u201C, sobald er verdient ist. Das gleicht Ihre bezahlten Ausgaben aus und macht Ihr gesamtes Marketing profitabel." },
          { title: "Traffic mit hoher Kaufabsicht", description: "Menschen, die nach \u201EChelsea Boots kaufen\u201C suchen, sind am Ende des Kauftrichters. Wir platzieren Sie genau dort." },
          { title: "Markenautorität & Vertrauen", description: "Nutzer vertrauen organischen Ergebnissen mehr als gesponserten Pl\u00e4tzen. Platz 1 signalisiert: Sie sind der Marktf\u00fchrer." },
          { title: "Nachhaltiges Wachstum", description: "Vermeiden Sie den Zyklus von \u201Ealles oder nichts\u201C bei bezahlter Werbung. Bauen Sie einen konstanten Umsatzstrom auf, der Monat f\u00fcr Monat w\u00e4chst." },
        ],
      },
      {
        type: "process",
        badge: "Das Framework",
        heading: "Das Commerce Growth Framework\u2122",
        subtitle: "Sie brauchen keine zuf\u00e4lligen Taktiken. Sie brauchen ein System, das f\u00fcr E-Commerce-Volumen, Wettbewerb und SKU-Skalierung gebaut wurde.",
        process: [
          { number: "01", title: "Fundament", description: "Technisches Audit, Crawl-Optimierung, Speed-Fixes und strukturierte Daten. Die langweilige Arbeit, die alles andere erst m\u00f6glich macht." },
          { number: "02", title: "Wachstum", description: "Kategorieseiten-Optimierung, Content-Strategie und interne Verlinkungsarchitektur. Der Motor, der organischen Umsatz antreibt." },
          { number: "03", title: "Skalierung", description: "Autorit\u00e4tsaufbau, Wettbewerbs-Gap-Analyse und KI-Suchoptimierung. Exponentielles Wachstum, das Sie zum Marktf\u00fchrer macht." },
          { number: "04", title: "Dominanz", description: "Kontinuierliche Optimierung, Expansion in neue M\u00e4rkte und defensive SEO. Schutz und Ausbau Ihres organischen Marktanteils." },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Wie kann ich die SEO meines E-Commerce-Shops verbessern?", answer: "Konzentrieren Sie sich zuerst auf das technische Fundament \u2014 Seitengeschwindigkeit, Crawlbarkeit und strukturierte Daten. Dann optimieren Sie Kategorieseiten f\u00fcr kommerzielle Keywords, erstellen umsatzorientierten Content und bauen autorit\u00e4re Backlinks auf." },
        { question: "Warum sollte ich in SEO-Dienstleistungen f\u00fcr E-Commerce investieren?", answer: "SEO ist eine Investition in Eigenkapital, w\u00e4hrend PPC eine Ausgabe (Miete) ist. Wenn Sie aufh\u00f6ren, f\u00fcr Anzeigen zu zahlen, f\u00e4llt Ihr Traffic sofort auf null. Mit SEO bauen Sie ein digitales Asset auf, das weiterhin Umsatz generiert und Ihre Kundenakquisitionskosten senkt." },
        { question: "Wie lange dauert es, bis man Ergebnisse sieht?", answer: "3\u20136 Monate f\u00fcr messbare Verbesserungen. 6\u201312 Monate f\u00fcr Marktdominanz. Technische Fixes k\u00f6nnen innerhalb von Wochen Wirkung zeigen, w\u00e4hrend Content und Autorit\u00e4tsaufbau sich \u00fcber die Zeit potenzieren." },
        { question: "Mit welchen Plattformen arbeiten Sie?", answer: "Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Adobe Commerce \u2014 wir haben Shops auf jeder gro\u00dfen E-Commerce-Plattform gerankt. Unsere Strategien sind plattformunabh\u00e4ngig, aber unsere Umsetzung ist plattformspezifisch." },
        { question: "Was unterscheidet Ihren Ansatz von anderen SEO-Agenturen?", answer: "Wir arbeiten ausschlie\u00dflich mit E-Commerce. Jedes Playbook, jede Vorlage, jedes Audit ist f\u00fcr Produktkataloge und Umsatz gebaut \u2014 nicht f\u00fcr Blog-Traffic. Wir messen Erfolg an Umsatzzuordnung, nicht nur an Keyword-Rankings." },
        { question: "Bieten Sie ein kostenloses Audit an?", answer: "Ja. Wir bieten ein kostenloses E-Commerce-SEO-Audit, das Ihre gr\u00f6\u00dften Chancen und technischen Probleme identifiziert. Buchen Sie ein Gespr\u00e4ch und wir zeigen Ihnen genau, was Ihren Shop zur\u00fckh\u00e4lt." },
      ],
      miniCta: {
        heading: "Bereit, Ihren E-Commerce-Umsatz zu verdoppeln bis vervierfachen?",
        subtitle: "Buchen Sie heute ein Gespr\u00e4ch und starten Sie durch. Wir zeigen Ihnen genau, wo Sie Geld auf dem Tisch liegen lassen.",
      },
    },
  },
  fr: {
    hero: {
      badge: "SEO E-commerce",
      heading: "SEO E-commerce qui g\u00e9n\u00e8re du chiffre d\u2019affaires \u2014 pas juste du trafic",
      subtitle: "La plupart des agences courent apr\u00e8s des m\u00e9triques de vanit\u00e9. Nous courons apr\u00e8s les ventes. Si votre boutique attire des visiteurs mais pas des acheteurs, vous n\u2019avez pas un probl\u00e8me SEO \u2014 vous avez un probl\u00e8me de strat\u00e9gie de croissance. Nous r\u00e9solvons les deux.",
      ctaText: "R\u00e9server un appel strat\u00e9gique gratuit",
    },
    trustBar: "Plateformes de confiance & r\u00e9sultats \u00e0 7 chiffres",
    sections: [
      {
        type: "process",
        badge: "Pourquoi la plupart des boutiques \u00e9chouent",
        heading: "La plupart des agences courent apr\u00e8s les m\u00e9triques de vanit\u00e9. Nous courons apr\u00e8s les ventes.",
        process: [
          { number: "01", title: "Mauvaise intention", description: "La plupart des agences optimisent pour des mots-cl\u00e9s informationnels (faible valeur). Nous positionnons sur l\u2019intention transactionnelle \u2014 en captant les acheteurs au moment exact o\u00f9 ils sont pr\u00eats \u00e0 acheter." },
          { number: "02", title: "Cat\u00e9gories g\u00e9n\u00e9riques", description: "La plupart des pages cat\u00e9gories ne sont que des grilles de produits. Les v\u00f4tres devraient fonctionner comme des pages de vente con\u00e7ues pour convertir." },
          { number: "03", title: "Dette technique", description: "Temps de chargement lents. Gaspillage de crawl. Probl\u00e8mes de rendu JS. Ces probl\u00e8mes invisibles tuent silencieusement vos classements." },
          { number: "04", title: "Pas de couche CRO", description: "Du trafic sans conversion, c\u2019est de l\u2019argent laiss\u00e9 sur la table. Nous optimisons les deux \u2014 simultan\u00e9ment." },
        ],
      },
      {
        type: "benefits",
        badge: "LE STANDARD ECOMSEO",
        heading: "Ce que nous faisons diff\u00e9remment",
        subtitle: "La plupart des agences appliquent des \u00ab strat\u00e9gies de blog \u00bb aux boutiques en ligne. Pas nous. Nous concevons l\u2019architecture et les fondations techniques sp\u00e9cifiquement pour le e-commerce \u00e0 fort volume.",
        benefits: [
          { title: "Les fondations techniques", description: "Temps de chargement plus rapides, \u00e9limination du gaspillage de crawl pour les boutiques avec 500+ r\u00e9f\u00e9rences, et synchronisation multi-canal avec Google Merchant Center et Search Console." },
          { title: "Des pages cat\u00e9gories qui vendent", description: "Vos pages cat\u00e9gories doivent fonctionner comme des landing pages, des pages de vente et des hubs SEO \u2014 en m\u00eame temps. Nous les construisons pour ranker et convertir." },
          { title: "Optimisation IA & LLM", description: "La recherche \u00e9volue. Nous veillons \u00e0 ce que votre marque et vos produits soient recommand\u00e9s par la nouvelle g\u00e9n\u00e9ration de moteurs de recherche : AI Overviews, ChatGPT et agents IA." },
          { title: "Contenu orient\u00e9 revenus", description: "Chaque contenu que nous cr\u00e9ons cible l\u2019intention commerciale. Guides d\u2019achat, pages de comparaison et contenu produit qui g\u00e9n\u00e8re du chiffre d\u2019affaires, pas juste du trafic." },
          { title: "Processus scalables", description: "Avec des milliers de r\u00e9f\u00e9rences, l\u2019optimisation manuelle est impossible. Nous construisons des workflows automatis\u00e9s pour les title tags, m\u00e9ta-descriptions et donn\u00e9es structur\u00e9es \u00e0 grande \u00e9chelle." },
          { title: "Optimisation de la conversion", description: "Les classements ne signifient rien si les visiteurs n\u2019ach\u00e8tent pas. Nous optimisons de Google jusqu\u2019au paiement, en am\u00e9liorant la qualit\u00e9 du trafic et les taux de conversion." },
        ],
      },
      {
        type: "benefits",
        badge: "Pourquoi le SEO",
        heading: "Pourquoi le top 1 % des boutiques mise gros sur le SEO",
        benefits: [
          { title: "Co\u00fbt d\u2019acquisition client r\u00e9duit", description: "Le trafic organique est \u00ab gratuit \u00bb une fois acquis. Cela \u00e9quilibre vos d\u00e9penses publicitaires et rend votre marketing global rentable." },
          { title: "Trafic \u00e0 forte intention d\u2019achat", description: "Les personnes qui cherchent \u00ab acheter bottines chelsea cuir \u00bb sont en bas du tunnel. Nous vous positionnons devant eux." },
          { title: "Autorit\u00e9 & confiance de marque", description: "Les utilisateurs font plus confiance aux r\u00e9sultats organiques qu\u2019aux emplacements sponsoris\u00e9s. \u00catre #1 signale que vous \u00eates le leader du march\u00e9." },
          { title: "Croissance durable", description: "\u00c9vitez le cycle de \u00ab f\u00eate ou famine \u00bb de la publicit\u00e9 payante. Construisez un flux de revenus constant qui cro\u00eet mois apr\u00e8s mois." },
        ],
      },
      {
        type: "process",
        badge: "Le Framework",
        heading: "Le Commerce Growth Framework\u2122",
        subtitle: "Vous n\u2019avez pas besoin de tactiques al\u00e9atoires. Vous avez besoin d\u2019un syst\u00e8me con\u00e7u pour le volume e-commerce, la concurrence et l\u2019\u00e9chelle des r\u00e9f\u00e9rences.",
        process: [
          { number: "01", title: "Fondation", description: "Audit technique, optimisation du crawl, am\u00e9lioration de la vitesse et donn\u00e9es structur\u00e9es. Le travail ingrat qui fait fonctionner tout le reste." },
          { number: "02", title: "Croissance", description: "Optimisation des pages cat\u00e9gories, strat\u00e9gie de contenu et architecture de liens internes. Construire le moteur qui g\u00e9n\u00e8re du revenu organique." },
          { number: "03", title: "\u00c9chelle", description: "Construction d\u2019autorit\u00e9, ciblage des lacunes concurrentielles et optimisation pour la recherche IA. Une croissance compos\u00e9e qui fait de vous le leader du march\u00e9." },
          { number: "04", title: "Domination", description: "Optimisation continue, expansion vers de nouveaux march\u00e9s et SEO d\u00e9fensif. Prot\u00e9ger et \u00e9tendre votre part de march\u00e9 organique." },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Comment am\u00e9liorer le SEO de mon site e-commerce ?", answer: "Concentrez-vous d\u2019abord sur les fondations techniques \u2014 vitesse du site, crawlabilit\u00e9 et donn\u00e9es structur\u00e9es. Ensuite, optimisez les pages cat\u00e9gories pour les mots-cl\u00e9s \u00e0 intention commerciale, cr\u00e9ez du contenu qui g\u00e9n\u00e8re des revenus et construisez des backlinks de qualit\u00e9." },
        { question: "Pourquoi investir dans des services SEO pour le e-commerce ?", answer: "Le SEO est un investissement dans un actif, alors que le PPC est une d\u00e9pense (un loyer). Si vous arr\u00eatez de payer pour les publicit\u00e9s, votre trafic tombe \u00e0 z\u00e9ro imm\u00e9diatement. Avec le SEO, vous construisez un actif digital qui continue \u00e0 g\u00e9n\u00e9rer des revenus et r\u00e9duit votre co\u00fbt d\u2019acquisition client." },
        { question: "Combien de temps faut-il pour voir des r\u00e9sultats ?", answer: "3 \u00e0 6 mois pour des am\u00e9liorations mesurables. 6 \u00e0 12 mois pour la domination du march\u00e9. Les corrections techniques peuvent montrer leur impact en quelques semaines, tandis que le contenu et la construction d\u2019autorit\u00e9 se composent au fil du temps." },
        { question: "Avec quelles plateformes travaillez-vous ?", answer: "Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Adobe Commerce \u2014 nous avons positionn\u00e9 des boutiques sur toutes les grandes plateformes e-commerce. Nos strat\u00e9gies sont agnostiques de plateforme, mais notre mise en \u0153uvre est sp\u00e9cifique \u00e0 chaque plateforme." },
        { question: "Qu\u2019est-ce qui diff\u00e9rencie votre approche des autres agences SEO ?", answer: "Nous travaillons exclusivement avec le e-commerce. Chaque playbook, chaque template, chaque audit est con\u00e7u pour les catalogues produits et le chiffre d\u2019affaires \u2014 pas pour le trafic de blog. Nous mesurons le succ\u00e8s en attribution de revenus, pas seulement en classements de mots-cl\u00e9s." },
        { question: "Proposez-vous un audit gratuit ?", answer: "Oui. Nous proposons un audit SEO e-commerce gratuit qui identifie vos plus grandes opportunit\u00e9s et probl\u00e8mes techniques. R\u00e9servez un appel et nous vous montrerons exactement ce qui freine votre boutique." },
      ],
      miniCta: {
        heading: "Pr\u00eat \u00e0 multiplier par 2 \u00e0 4 votre chiffre d\u2019affaires e-commerce ?",
        subtitle: "R\u00e9servez un appel aujourd\u2019hui et commencez \u00e0 cro\u00eetre. Nous vous montrerons exactement o\u00f9 vous laissez de l\u2019argent sur la table.",
      },
    },
  },
  es: {
    hero: {
      badge: "SEO E-commerce",
      heading: "SEO E-commerce que genera ingresos \u2014 no solo tr\u00e1fico",
      subtitle: "La mayor\u00eda de agencias persiguen m\u00e9tricas de vanidad. Nosotros perseguimos ventas. Si tu tienda recibe visitantes pero no compradores, no tienes un problema de SEO \u2014 tienes un problema de estrategia de crecimiento. Solucionamos ambos.",
      ctaText: "Reservar llamada estrat\u00e9gica gratuita",
    },
    trustBar: "Plataformas de confianza y resultados de 7 cifras",
    sections: [
      {
        type: "process",
        badge: "Por qu\u00e9 la mayor\u00eda fracasa",
        heading: "La mayor\u00eda de agencias persiguen m\u00e9tricas de vanidad. Nosotros perseguimos ventas.",
        process: [
          { number: "01", title: "Intenci\u00f3n equivocada", description: "La mayor\u00eda de agencias optimizan para palabras clave informativas (bajo valor). Nosotros posicionamos para intenci\u00f3n transaccional \u2014 captando compradores justo cuando est\u00e1n listos para comprar." },
          { number: "02", title: "Categor\u00edas gen\u00e9ricas", description: "La mayor\u00eda de p\u00e1ginas de categor\u00eda son solo cuadr\u00edculas de productos. Las tuyas deber\u00edan funcionar como p\u00e1ginas de aterrizaje dise\u00f1adas para persuadir." },
          { number: "03", title: "Deuda t\u00e9cnica", description: "Tiempos de carga lentos. Desperdicio de rastreo. Problemas de renderizado JS. Estos problemas invisibles destruyen tus rankings silenciosamente." },
          { number: "04", title: "Sin capa CRO", description: "Tr\u00e1fico sin conversi\u00f3n es dinero dejado sobre la mesa. Optimizamos ambos \u2014 simult\u00e1neamente." },
        ],
      },
      {
        type: "benefits",
        badge: "EL EST\u00c1NDAR ECOMSEO",
        heading: "Lo que hacemos diferente",
        subtitle: "La mayor\u00eda de agencias aplican \u201Cestrategias de blog\u201D a tiendas online. Nosotros no. Dise\u00f1amos la arquitectura del sitio y los fundamentos t\u00e9cnicos espec\u00edficamente para e-commerce de alto volumen.",
        benefits: [
          { title: "Los cimientos t\u00e9cnicos", description: "Tiempos de carga m\u00e1s r\u00e1pidos, eliminaci\u00f3n del desperdicio de rastreo para tiendas con m\u00e1s de 500 SKUs, y sincronizaci\u00f3n multicanal con Google Merchant Center y Search Console." },
          { title: "P\u00e1ginas de categor\u00eda que venden", description: "Tus p\u00e1ginas de categor\u00eda deben funcionar como landing pages, p\u00e1ginas de venta y hubs de SEO \u2014 todo a la vez. Las construimos para posicionar y convertir." },
          { title: "Optimizaci\u00f3n IA & LLM", description: "La b\u00fasqueda est\u00e1 evolucionando. Nos aseguramos de que tu marca y productos sean recomendados por la siguiente generaci\u00f3n de motores de b\u00fasqueda: AI Overviews, ChatGPT y agentes de IA." },
          { title: "Contenido orientado a ingresos", description: "Cada pieza de contenido que creamos apunta a intenci\u00f3n comercial. Gu\u00edas de compra, p\u00e1ginas de comparaci\u00f3n y contenido de producto que genera ingresos, no solo tr\u00e1fico." },
          { title: "Procesos escalables", description: "Con miles de SKUs, la optimizaci\u00f3n manual es imposible. Construimos flujos de trabajo automatizados para etiquetas de t\u00edtulo, meta descripciones y datos estructurados a escala." },
          { title: "Optimizaci\u00f3n de conversi\u00f3n", description: "Los rankings no significan nada si los visitantes no compran. Optimizamos desde Google hasta el checkout, mejorando tanto la calidad del tr\u00e1fico como las tasas de conversi\u00f3n." },
        ],
      },
      {
        type: "benefits",
        badge: "Por qu\u00e9 SEO",
        heading: "Por qu\u00e9 el top 1 % de las tiendas apuestan fuerte por el SEO",
        benefits: [
          { title: "Menor coste de adquisici\u00f3n", description: "El tr\u00e1fico org\u00e1nico es \u201Cgratuito\u201D una vez conseguido. Esto equilibra tu gasto en publicidad, haciendo tu marketing global rentable." },
          { title: "Tr\u00e1fico de alta intenci\u00f3n", description: "Las personas que buscan \u201Ccomprar botas chelsea de cuero\u201D est\u00e1n al final del embudo. Te colocamos frente a ellos." },
          { title: "Autoridad y confianza de marca", description: "Los usuarios conf\u00edan m\u00e1s en los resultados org\u00e1nicos que en los patrocinados. Estar en el #1 se\u00f1ala que eres el l\u00edder del mercado." },
          { title: "Crecimiento sostenible", description: "Evita el ciclo de \u201Ctodo o nada\u201D de la publicidad de pago. Construye un flujo constante de ingresos que crece mes a mes." },
        ],
      },
      {
        type: "process",
        badge: "El Framework",
        heading: "El Commerce Growth Framework\u2122",
        subtitle: "No necesitas t\u00e1cticas aleatorias. Necesitas un sistema dise\u00f1ado para el volumen e-commerce, la competencia y la escala de SKUs.",
        process: [
          { number: "01", title: "Cimientos", description: "Auditor\u00eda t\u00e9cnica, optimizaci\u00f3n del rastreo, mejoras de velocidad y datos estructurados. El trabajo tedioso que hace que todo lo dem\u00e1s funcione." },
          { number: "02", title: "Crecimiento", description: "Optimizaci\u00f3n de p\u00e1ginas de categor\u00eda, estrategia de contenido y arquitectura de enlaces internos. Construir el motor que impulsa los ingresos org\u00e1nicos." },
          { number: "03", title: "Escala", description: "Construcci\u00f3n de autoridad, an\u00e1lisis de brechas competitivas y optimizaci\u00f3n para b\u00fasqueda IA. Crecimiento compuesto que te convierte en el l\u00edder del mercado." },
          { number: "04", title: "Dominio", description: "Optimizaci\u00f3n continua, expansi\u00f3n a nuevos mercados y SEO defensivo. Proteger y ampliar tu cuota de mercado org\u00e1nica." },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "\u00bfC\u00f3mo puedo mejorar el SEO de mi tienda online?", answer: "Conc\u00e9ntrate primero en los cimientos t\u00e9cnicos \u2014 velocidad del sitio, rastreabilidad y datos estructurados. Luego optimiza las p\u00e1ginas de categor\u00eda para palabras clave con intenci\u00f3n comercial, crea contenido que genere ingresos y construye backlinks de autoridad." },
        { question: "\u00bfPor qu\u00e9 deber\u00eda invertir en servicios SEO para e-commerce?", answer: "El SEO es una inversi\u00f3n en patrimonio, mientras que el PPC es un gasto (alquiler). Si dejas de pagar por los anuncios, tu tr\u00e1fico cae a cero instant\u00e1neamente. Con SEO, est\u00e1s construyendo un activo digital que contin\u00faa generando ingresos y reduce tu coste de adquisici\u00f3n de clientes." },
        { question: "\u00bfCu\u00e1nto tiempo se tarda en ver resultados?", answer: "3 a 6 meses para mejoras medibles. 6 a 12 meses para dominar el mercado. Las correcciones t\u00e9cnicas pueden mostrar impacto en semanas, mientras que el contenido y la construcci\u00f3n de autoridad se componen con el tiempo." },
        { question: "\u00bfCon qu\u00e9 plataformas trabajan?", answer: "Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Adobe Commerce \u2014 hemos posicionado tiendas en todas las grandes plataformas de e-commerce. Nuestras estrategias son agn\u00f3sticas de plataforma, pero nuestra implementaci\u00f3n es espec\u00edfica para cada una." },
        { question: "\u00bfQu\u00e9 diferencia su enfoque de otras agencias SEO?", answer: "Solo trabajamos con e-commerce. Cada playbook, cada plantilla, cada auditor\u00eda est\u00e1 dise\u00f1ada para cat\u00e1logos de productos e ingresos \u2014 no para tr\u00e1fico de blog. Medimos el \u00e9xito en atribuci\u00f3n de ingresos, no solo en rankings de palabras clave." },
        { question: "\u00bfOfrecen una auditor\u00eda gratuita?", answer: "S\u00ed. Ofrecemos una auditor\u00eda SEO e-commerce gratuita que identifica tus mayores oportunidades y problemas t\u00e9cnicos. Reserva una llamada y te mostraremos exactamente qu\u00e9 est\u00e1 frenando tu tienda." },
      ],
      miniCta: {
        heading: "\u00bfListo para multiplicar por 2\u20134x tus ingresos e-commerce?",
        subtitle: "Reserva una llamada hoy y empieza a crecer. Te mostraremos exactamente d\u00f3nde est\u00e1s dejando dinero sobre la mesa.",
      },
    },
  },
  it: {
    hero: {
      badge: "SEO E-commerce",
      heading: "SEO E-commerce che genera fatturato \u2014 non solo traffico",
      subtitle: "La maggior parte delle agenzie insegue metriche di vanit\u00e0. Noi inseguiamo le vendite. Se il tuo negozio riceve visitatori ma non acquirenti, non hai un problema SEO \u2014 hai un problema di strategia di crescita. Risolviamo entrambi.",
      ctaText: "Prenota una consulenza gratuita",
    },
    trustBar: "Piattaforme affidabili e risultati a 7 cifre",
    sections: [
      {
        type: "process",
        badge: "Perch\u00e9 la maggior parte fallisce",
        heading: "La maggior parte delle agenzie insegue metriche di vanit\u00e0. Noi inseguiamo le vendite.",
        process: [
          { number: "01", title: "Intento sbagliato", description: "La maggior parte delle agenzie ottimizza per keyword informative (basso valore). Noi posizioniamo per intento transazionale \u2014 intercettando gli acquirenti nel momento esatto in cui sono pronti ad acquistare." },
          { number: "02", title: "Categorie generiche", description: "La maggior parte delle pagine categoria sono solo griglie di prodotti. Le tue dovrebbero funzionare come landing page progettate per la conversione." },
          { number: "03", title: "Debito tecnico", description: "Tempi di caricamento lenti. Spreco di crawl budget. Problemi di rendering JS. Questi problemi invisibili uccidono silenziosamente i tuoi posizionamenti." },
          { number: "04", title: "Nessun livello CRO", description: "Traffico senza conversione \u00e8 denaro lasciato sul tavolo. Ottimizziamo entrambi \u2014 simultaneamente." },
        ],
      },
      {
        type: "benefits",
        badge: "LO STANDARD ECOMSEO",
        heading: "Cosa facciamo di diverso",
        subtitle: "La maggior parte delle agenzie applica \u201Cstrategie da blog\u201D ai negozi online. Noi no. Progettiamo architettura del sito e fondamenta tecniche specificamente per l\u2019e-commerce ad alto volume.",
        benefits: [
          { title: "Le fondamenta tecniche", description: "Tempi di caricamento pi\u00f9 rapidi, eliminazione dello spreco di crawl per negozi con oltre 500 SKU e sincronizzazione multicanale con Google Merchant Center e Search Console." },
          { title: "Pagine categoria che vendono", description: "Le tue pagine categoria dovrebbero funzionare come landing page, pagine di vendita e hub SEO \u2014 tutto contemporaneamente. Le costruiamo per posizionarsi e convertire." },
          { title: "Ottimizzazione IA & LLM", description: "La ricerca si evolve. Ci assicuriamo che il tuo brand e i tuoi prodotti vengano raccomandati dalla prossima generazione di motori di ricerca: AI Overviews, ChatGPT e agenti IA." },
          { title: "Contenuti orientati al fatturato", description: "Ogni contenuto che creiamo punta all\u2019intento commerciale. Guide all\u2019acquisto, pagine di confronto e contenuti prodotto che generano fatturato, non solo traffico." },
          { title: "Processi scalabili", description: "Con migliaia di SKU, l\u2019ottimizzazione manuale \u00e8 impossibile. Costruiamo workflow automatizzati per title tag, meta description e dati strutturati su larga scala." },
          { title: "Ottimizzazione della conversione", description: "I posizionamenti non significano nulla se i visitatori non acquistano. Ottimizziamo da Google al checkout, migliorando sia la qualit\u00e0 del traffico che i tassi di conversione." },
        ],
      },
      {
        type: "benefits",
        badge: "Perch\u00e9 il SEO",
        heading: "Perch\u00e9 l\u20191 % dei negozi migliori scommette forte sul SEO",
        benefits: [
          { title: "Costo di acquisizione cliente pi\u00f9 basso", description: "Il traffico organico \u00e8 \u201Cgratuito\u201D una volta ottenuto. Questo bilancia la tua spesa pubblicitaria, rendendo il tuo marketing complessivo profittevole." },
          { title: "Traffico ad alta intenzione", description: "Le persone che cercano \u201Cacquistare stivaletti chelsea in pelle\u201D sono alla fine del funnel. Ti posizioniamo davanti a loro." },
          { title: "Autorit\u00e0 e fiducia del brand", description: "Gli utenti si fidano di pi\u00f9 dei risultati organici rispetto a quelli sponsorizzati. Essere in prima posizione segnala che sei il leader di mercato." },
          { title: "Crescita sostenibile", description: "Evita il ciclo di \u201Ctutto o niente\u201D della pubblicit\u00e0 a pagamento. Costruisci un flusso costante di ricavi che cresce mese dopo mese." },
        ],
      },
      {
        type: "process",
        badge: "Il Framework",
        heading: "Il Commerce Growth Framework\u2122",
        subtitle: "Non hai bisogno di tattiche casuali. Hai bisogno di un sistema progettato per il volume e-commerce, la concorrenza e la scala degli SKU.",
        process: [
          { number: "01", title: "Fondamenta", description: "Audit tecnico, ottimizzazione del crawl, correzioni di velocit\u00e0 e dati strutturati. Il lavoro noioso che fa funzionare tutto il resto." },
          { number: "02", title: "Crescita", description: "Ottimizzazione delle pagine categoria, strategia di contenuto e architettura di link interni. Costruire il motore che genera fatturato organico." },
          { number: "03", title: "Scala", description: "Costruzione di autorit\u00e0, analisi dei gap competitivi e ottimizzazione per la ricerca IA. Crescita composta che ti rende leader di mercato." },
          { number: "04", title: "Dominio", description: "Ottimizzazione continua, espansione in nuovi mercati e SEO difensivo. Proteggere ed estendere la tua quota di mercato organica." },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Come posso migliorare la SEO del mio e-commerce?", answer: "Concentrati prima sulle fondamenta tecniche \u2014 velocit\u00e0 del sito, crawlabilit\u00e0 e dati strutturati. Poi ottimizza le pagine categoria per keyword a intento commerciale, crea contenuti che generino fatturato e costruisci backlink autorevoli." },
        { question: "Perch\u00e9 dovrei investire in servizi SEO per l\u2019e-commerce?", answer: "La SEO \u00e8 un investimento in patrimonio, mentre il PPC \u00e8 una spesa (un affitto). Se smetti di pagare per gli annunci, il tuo traffico crolla a zero istantaneamente. Con la SEO, stai costruendo un asset digitale che continua a generare fatturato e riduce il tuo costo di acquisizione clienti." },
        { question: "Quanto tempo ci vuole per vedere i risultati?", answer: "3\u20136 mesi per miglioramenti misurabili. 6\u201312 mesi per il dominio del mercato. Le correzioni tecniche possono mostrare impatto in poche settimane, mentre il contenuto e la costruzione di autorit\u00e0 si compongono nel tempo." },
        { question: "Con quali piattaforme lavorate?", answer: "Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Adobe Commerce \u2014 abbiamo posizionato negozi su ogni grande piattaforma e-commerce. Le nostre strategie sono agnostiche rispetto alla piattaforma, ma la nostra implementazione \u00e8 specifica per ciascuna." },
        { question: "Cosa rende il vostro approccio diverso dalle altre agenzie SEO?", answer: "Lavoriamo esclusivamente con l\u2019e-commerce. Ogni playbook, ogni template, ogni audit \u00e8 costruito per cataloghi prodotto e fatturato \u2014 non per traffico da blog. Misuriamo il successo in attribuzione di fatturato, non solo in posizionamenti di keyword." },
        { question: "Offrite un audit gratuito?", answer: "S\u00ec. Offriamo un audit SEO e-commerce gratuito che identifica le tue pi\u00f9 grandi opportunit\u00e0 e i problemi tecnici. Prenota una call e ti mostreremo esattamente cosa sta frenando il tuo negozio." },
      ],
      miniCta: {
        heading: "Pronto a moltiplicare per 2\u20134x il tuo fatturato e-commerce?",
        subtitle: "Prenota una call oggi e inizia a crescere. Ti mostreremo esattamente dove stai lasciando soldi sul tavolo.",
      },
    },
  },
  nl: {
    hero: {
      badge: "E-commerce SEO",
      heading: "E-commerce SEO die omzet genereert \u2014 niet alleen verkeer",
      subtitle: "De meeste bureaus jagen op ijdelheidsmetrieken. Wij jagen op verkoop. Als je webshop bezoekers krijgt maar geen kopers, heb je geen SEO-probleem \u2014 je hebt een groeistrategie-probleem. Wij lossen beide op.",
      ctaText: "Boek een gratis strategiegesprek",
    },
    trustBar: "Vertrouwde platforms & 7-cijferige resultaten",
    sections: [
      {
        type: "process",
        badge: "Waarom de meeste webshops falen",
        heading: "De meeste bureaus jagen op ijdelheidsmetrieken. Wij jagen op verkoop.",
        process: [
          { number: "01", title: "Verkeerde intentie", description: "De meeste bureaus optimaliseren voor informatieve zoekwoorden (lage waarde). Wij ranken voor transactionele intentie \u2014 en bereiken kopers precies wanneer ze klaar zijn om te kopen." },
          { number: "02", title: "Generieke categorie\u00ebn", description: "De meeste categoriepagina\u2019s zijn slechts productrasters. De jouwe zouden moeten functioneren als landingspagina\u2019s die overtuigen tot aankoop." },
          { number: "03", title: "Technische schuld", description: "Trage laadtijden. Verspild crawlbudget. JS-renderingproblemen. Deze onzichtbare problemen vernietigen stilletjes je rankings." },
          { number: "04", title: "Geen CRO-laag", description: "Verkeer zonder conversie is geld dat je laat liggen. Wij optimaliseren beide \u2014 tegelijkertijd." },
        ],
      },
      {
        type: "benefits",
        badge: "DE ECOMSEO-STANDAARD",
        heading: "Wat wij anders doen",
        subtitle: "De meeste bureaus passen \u201Cblogstrategie\u00ebn\u201D toe op webshops. Wij niet. Wij ontwerpen site-architectuur en technische fundamenten specifiek voor high-volume e-commerce.",
        benefits: [
          { title: "Het technische fundament", description: "Snellere laadtijden, eliminatie van crawlverspilling voor webshops met 500+ SKU\u2019s, en multichannel-synchronisatie met Google Merchant Center en Search Console." },
          { title: "Categoriepagina\u2019s die verkopen", description: "Je categoriepagina\u2019s moeten functioneren als landingspagina\u2019s, verkooppagina\u2019s en SEO-hubs \u2014 alles tegelijk. Wij bouwen ze om te ranken \u00e9n te converteren." },
          { title: "AI & LLM-optimalisatie", description: "Zoeken evolueert. Wij zorgen ervoor dat je merk en producten worden aanbevolen door de volgende generatie zoekmachines: AI Overviews, ChatGPT en AI-agents." },
          { title: "Omzetgerichte content", description: "Elk stuk content dat we cre\u00ebren richt zich op commerci\u00eble intentie. Koopgidsen, vergelijkingspagina\u2019s en productcontent die omzet genereert, niet alleen verkeer." },
          { title: "Schaalbare processen", description: "Met duizenden SKU\u2019s is handmatige optimalisatie onmogelijk. Wij bouwen geautomatiseerde workflows voor title tags, meta-omschrijvingen en gestructureerde data op schaal." },
          { title: "Conversie-optimalisatie", description: "Rankings betekenen niets als bezoekers niet kopen. Wij optimaliseren van Google tot checkout, en verbeteren zowel verkeerskwaliteit als on-site conversieratio\u2019s." },
        ],
      },
      {
        type: "benefits",
        badge: "Waarom SEO",
        heading: "Waarom de top 1 % van webshops groot inzet op SEO",
        benefits: [
          { title: "Lagere klantacquisitiekosten", description: "Organisch verkeer is \u201Cgratis\u201D zodra je het verdient. Dit compenseert je advertentie-uitgaven en maakt je totale marketing winstgevend." },
          { title: "Verkeer met hoge koopintentie", description: "Mensen die zoeken op \u201Clederen chelsea boots kopen\u201D zitten onderaan de funnel. Wij plaatsen je recht voor hun neus." },
          { title: "Merkautoriteit & vertrouwen", description: "Gebruikers vertrouwen organische resultaten meer dan gesponsorde plekken. Positie #1 signaleert dat jij de marktleider bent." },
          { title: "Duurzame groei", description: "Vermijd de \u201Calles of niets\u201D-cyclus van betaalde advertenties. Bouw een constante omzetstroom die maand na maand groeit." },
        ],
      },
      {
        type: "process",
        badge: "Het Framework",
        heading: "Het Commerce Growth Framework\u2122",
        subtitle: "Je hebt geen willekeurige tactieken nodig. Je hebt een systeem nodig dat is gebouwd voor e-commerce-volume, concurrentie en SKU-schaal.",
        process: [
          { number: "01", title: "Fundament", description: "Technische audit, crawl-optimalisatie, snelheidsverbeteringen en gestructureerde data. Het saaie werk dat al het andere mogelijk maakt." },
          { number: "02", title: "Groei", description: "Optimalisatie van categoriepagina\u2019s, contentstrategie en interne linkarchitectuur. De motor bouwen die organische omzet aandrijft." },
          { number: "03", title: "Schaal", description: "Autoriteitsopbouw, competitieve gap-analyse en AI-zoekoptimalisatie. Samengestelde groei die je tot marktleider maakt." },
          { number: "04", title: "Domineer", description: "Continue optimalisatie, uitbreiding naar nieuwe markten en defensieve SEO. Je organische marktaandeel beschermen en uitbreiden." },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Hoe kan ik de SEO van mijn webshop verbeteren?", answer: "Focus eerst op het technische fundament \u2014 sitesnelheid, crawlbaarheid en gestructureerde data. Optimaliseer vervolgens categoriepagina\u2019s voor commerci\u00eble zoekwoorden, cre\u00eber omzetgenererende content en bouw gezaghebbende backlinks." },
        { question: "Waarom zou ik investeren in SEO-diensten voor e-commerce?", answer: "SEO is een investering in eigendom, terwijl PPC een uitgave (huur) is. Als je stopt met betalen voor advertenties, daalt je verkeer direct naar nul. Met SEO bouw je een digitaal bezit dat blijft renderen en je klantacquisitiekosten verlaagt." },
        { question: "Hoe lang duurt het voordat ik resultaten zie?", answer: "3\u20136 maanden voor meetbare verbeteringen. 6\u201312 maanden voor marktdominantie. Technische fixes kunnen binnen weken impact tonen, terwijl content en autoriteitsopbouw zich in de loop van de tijd versterken." },
        { question: "Met welke platforms werken jullie?", answer: "Shopify, WooCommerce, Magento, BigCommerce, Lightspeed, Adobe Commerce \u2014 we hebben webshops op elk groot e-commerce-platform laten ranken. Onze strategie\u00ebn zijn platformonafhankelijk, maar onze implementatie is platformspecifiek." },
        { question: "Wat maakt jullie aanpak anders dan andere SEO-bureaus?", answer: "Wij werken uitsluitend met e-commerce. Elk playbook, elk template, elke audit is gebouwd voor productcatalogi en omzet \u2014 niet voor blogverkeer. We meten succes in omzetattributie, niet alleen in keyword-rankings." },
        { question: "Bieden jullie een gratis audit aan?", answer: "Ja. We bieden een gratis e-commerce SEO-audit die je grootste kansen en technische problemen identificeert. Boek een gesprek en we laten je precies zien wat je webshop tegenhoudt." },
      ],
      miniCta: {
        heading: "Klaar om je e-commerce-omzet te verdubbelen tot verviervoudigen?",
        subtitle: "Boek vandaag een gesprek en begin met groeien. We laten je precies zien waar je geld laat liggen.",
      },
    },
  },
};
