import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guidesBeginnerToHeroT: Record<
  Locale,
  {
    badge: string;
    heading: string;
    intro: string;
    readTime: string;
    sections: GuideSection[];
    nav: GuideNav;
  }
> = {
  en: {
    badge: "Ecommerce SEO Basics",
    heading: "Beginner to Hero Course",
    intro:
      "Most ecommerce SEO content assumes you either know nothing or already know everything. This course is different. It is a structured 9-week program that takes you from zero familiarity with SEO to running a repeatable, data-driven SEO program for your store. Each stage builds on the last. Skip stages and you will hit walls.",
    readTime: "12 min read",
    sections: [
      {
        id: "what-this-course-is",
        title: "What this course is — and what it is not",
        blocks: [
          {
            type: "p",
            text: "This is not a collection of tips. It is a linear learning path. The goal at the end is not to understand SEO in theory \u2014 it is to have a working SEO system for your specific store, with real keyword targets, a fixed audit schedule, and enough confidence to diagnose problems yourself when rankings drop.",
          },
          {
            type: "callout",
            title: "Who this is for",
            text: "Store owners running their own SEO, in-house marketers who inherited SEO responsibility, or junior SEO specialists who want a structured foundation. If you already run technical audits, build links, and track organic revenue weekly, this course covers ground you probably know. Start at the stage that matches your current knowledge.",
          },
          {
            type: "p",
            text: "The course runs over 9+ weeks. Each stage has specific deliverables. Weeks 1-2 are deliberately slow \u2014 understanding how Google works before touching anything is not optional. Stores that skip foundations and jump straight to tactics waste months chasing fixes that do not hold.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&q=80",
            alt: "Person studying SEO course materials at a desk with a laptop and notebook",
            caption: "A structured path beats a pile of random articles every time.",
          },
        ],
      },
      {
        id: "stage-1-foundations",
        title: "Stage 1 \u2014 Foundations (Weeks 1\u20132)",
        blocks: [
          {
            type: "p",
            text: "Week 1 has one goal: understand how Google actually works. Not at a surface level, but well enough that you can explain crawling, indexing, and ranking to someone else. This matters because every SEO decision you make later will be filtered through this mental model. Get it wrong and your decisions will be random.",
          },
          {
            type: "list",
            items: [
              "Read Google's own documentation on how search works (search.google.com/search/howsearchworks)",
              "Set up Google Search Console: verify your domain property, submit your sitemap, check the Coverage report for crawl errors",
              "Set up GA4 with Enhanced Ecommerce enabled \u2014 follow the steps in the Analytics & Tracking guide at /guides/analytics-tracking",
              "Read the SEO Fundamentals Checklist at /guides/fundamentals and score your own store against each item",
              "Use the URL Inspection tool in GSC on your homepage and 3 product pages \u2014 confirm Google can crawl and index them",
            ],
          },
          {
            type: "tip",
            text: "Week 2 deliverable: a scored copy of the fundamentals checklist with notes on which items your store fails. This becomes your first priority list. Do not fix anything yet \u2014 just audit.",
          },
        ],
      },
      {
        id: "stage-2-research",
        title: "Stage 2 \u2014 Research (Weeks 3\u20134)",
        blocks: [
          {
            type: "p",
            text: "Most stores at this stage make the same mistake: they research keywords for products they want to sell rather than products people are searching for. Those are not always the same thing. The research stage forces you to look at actual search data before touching any page.",
          },
          {
            type: "callout",
            title: "Your 20 most valuable keywords",
            text: "By the end of week 4, you need a prioritised list of 20 keywords. These are not vanity terms \u2014 they are the specific product and category queries where ranking on page 1 would directly drive revenue. Use tools like Ahrefs, Semrush, or Google Keyword Planner. Cross-reference with GSC data to see which keywords you already rank for at position 11-50.",
          },
          {
            type: "list",
            items: [
              "Map your full product catalog: every product category needs at least one primary keyword",
              "Run competitor gap analysis: identify 3 direct competitors and find the keywords they rank for that you do not \u2014 see the Competitor Analysis guide at /guides/competitor-analysis",
              "Research buying-intent keywords for your top 10 product categories (these typically have modifiers: 'buy', 'shop', 'best', price-comparison terms)",
              "Research informational keywords for content opportunities (buyers research before purchasing \u2014 ranking for those articles builds trust and links)",
              "Build a simple spreadsheet: keyword, monthly search volume, your current position, target page URL",
            ],
          },
          {
            type: "tip",
            text: "Do not target keywords with search volume under 50/month at this stage. Focus on the 20 keywords where ranking improvement would have the most direct revenue impact. You can expand the list later. Read the full Keyword Research guide at /guides/keyword-research for the step-by-step process.",
          },
        ],
      },
      {
        id: "stage-3-on-page",
        title: "Stage 3 \u2014 On-Page (Weeks 5\u20136)",
        blocks: [
          {
            type: "p",
            text: "With your 20 target keywords in hand, weeks 5-6 are about making sure the right pages are optimised for those keywords. This is not about stuffing keywords into titles \u2014 it is about making each page the most genuinely useful result for its target query.",
          },
          {
            type: "list",
            items: [
              "Audit title tags for all pages targeting your 20 keywords: include the primary keyword near the start, keep under 60 characters, add the brand name at the end",
              "Audit meta descriptions: each should read like a useful summary, include the keyword naturally, and stay under 155 characters",
              "Audit product page content: does each product page have at least 200 words of original copy? Generic manufacturer descriptions hurt rankings.",
              "Audit category page content: Google needs text to understand what a category page is about \u2014 a short intro paragraph (100-200 words) above the product grid makes a measurable difference",
              "Fix heading structure: one H1 per page containing the primary keyword, logical H2/H3 hierarchy covering subtopics",
            ],
          },
          {
            type: "callout",
            title: "The on-page priority order",
            text: "Fix title tags first \u2014 they have the highest impact per hour of work. Then meta descriptions. Then content. Resist the urge to redesign pages or change URLs at this stage unless they are actively harming you. Stability helps rankings. Run a full on-page audit using the checklist at /guides/on-page-audit.",
          },
        ],
      },
      {
        id: "stage-4-technical",
        title: "Stage 4 \u2014 Technical (Weeks 7\u20138)",
        blocks: [
          {
            type: "p",
            text: "Technical SEO is not glamorous but it is foundational. A slow site, a broken crawl, or duplicate content issues will cap your rankings regardless of how good your content is. Weeks 7-8 are about finding and fixing the technical issues most likely to be holding you back.",
          },
          {
            type: "list",
            items: [
              "Run a full crawl with Screaming Frog (free up to 500 URLs) or Ahrefs Site Audit \u2014 look for 4xx errors, redirect chains, duplicate title tags, missing canonical tags",
              "Check Core Web Vitals in GSC under Experience > Core Web Vitals. LCP should be under 2.5 seconds, CLS under 0.1, INP under 200ms",
              "Compress and convert images to WebP format \u2014 on Shopify use an app like TinyIMG; on WooCommerce use Imagify or ShortPixel",
              "Add structured data: Product schema on all product pages, BreadcrumbList on all pages, Organization on homepage",
              "Fix duplicate content: ensure canonical tags point to the preferred version of each page, especially for filtered/sorted category URLs",
            ],
          },
          {
            type: "tip",
            text: "Use the free Google PageSpeed Insights tool (pagespeed.web.dev) on your homepage, your most important category page, and your bestselling product page. The Opportunities section tells you exactly what to fix and estimates the time saving. Run the full technical audit process outlined at /guides/technical-analysis.",
          },
        ],
      },
      {
        id: "stage-5-authority",
        title: "Stage 5 \u2014 Authority (Weeks 9+)",
        blocks: [
          {
            type: "p",
            text: "Everything before this stage is table stakes. If your competitors have more links from more authoritative sites, they will outrank you on most competitive keywords even if your on-page and technical SEO is better. Authority building is a long game \u2014 do not expect results in 2 weeks. But without it, you will plateau.",
          },
          {
            type: "list",
            items: [
              "Run the link gap analysis: find the domains that link to your top 3 competitors but not to you \u2014 these are your first outreach targets",
              "Create content worth linking to: data studies, original research, buying guides, comparison pages \u2014 not thin product descriptions",
              "Build topical authority: publish a cluster of articles around your core product categories so Google sees your site as an authority on those topics \u2014 see /guides/topical-authority",
              "Digital PR: reach out to journalists and bloggers covering your niche with newsworthy angles (product launches, original data, trend pieces)",
              "Supplier and partner links: often overlooked, these are easy wins \u2014 ask suppliers, distributors, and business partners to link to your store",
            ],
          },
          {
            type: "callout",
            title: "Link building is not a one-month project",
            text: "Budget for link building as an ongoing activity, not a one-time sprint. Even 2-3 new quality backlinks per month compounds significantly over 12 months. Track your referring domain count in Ahrefs or GSC monthly. Read the Link Building Tactics guide at /guides/link-building-tactics for specific outreach approaches that work for ecommerce.",
          },
        ],
      },
      {
        id: "after-the-course",
        title: "What to do after week 9: the quarterly audit loop",
        blocks: [
          {
            type: "p",
            text: "Finishing the course does not mean your SEO is finished. Search results change. Competitors improve. Google updates its algorithm. The stores that sustain SEO growth run a systematic audit loop every quarter. It takes one full day, four times a year.",
          },
          {
            type: "checklist",
            items: [
              "Run a fresh crawl with Screaming Frog and compare against the previous quarter \u2014 look for new 4xx errors, new duplicate content, crawl budget waste",
              "Pull the GSC Search Results report for the full quarter: which keywords improved, which dropped? Investigate drops before assuming algorithm updates.",
              "Export GA4 organic revenue for the quarter vs same quarter last year \u2014 if it is down, trace the drop to specific pages using the Landing Pages report",
              "Refresh the keyword list: add new keywords from GSC impressions data, remove keywords where you have hit page 1 and they are stable",
              "Run the on-page checklist on the 10 most important pages \u2014 things drift over time as teams update content without SEO review",
              "Check Core Web Vitals again \u2014 a platform update, new app install, or image size regression can silently tank page speed",
              "Review the backlink profile: any new toxic links? Any lost links from important referring domains? Address both.",
            ],
          },
          {
            type: "tip",
            text: "Block a full day in your calendar on the first Monday of each new quarter and protect it. Four audits a year is enough to stay ahead of most issues. Trying to do continuous daily monitoring without a quarterly reset leads to missed patterns. From here, the Keyword Research guide at /guides/keyword-research and the Competitor Analysis guide at /guides/competitor-analysis are the logical next steps to deepen your research skills.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/analytics-tracking",
        category: "Ecommerce SEO Basics",
        title: "Analytics & Tracking",
      },
      next: {
        href: "/guides/keyword-research",
        category: "Research & Ideation",
        title: "Keyword Research",
      },
    },
  },

  de: {
    badge: "E-Commerce-SEO-Grundlagen",
    heading: "Von Anf\u00e4nger zum Profi",
    intro:
      "Die meisten SEO-Inhalte f\u00fcr E-Commerce setzen entweder voraus, dass du gar nichts wei\u00dft \u2014 oder alles. Dieser Kurs ist anders. Es ist ein strukturiertes 9-Wochen-Programm, das dich von null SEO-Erfahrung bis hin zur Durchf\u00fchrung eines wiederholbaren, datengetriebenen SEO-Programms f\u00fcr deinen Shop bringt. Jede Stufe baut auf der vorherigen auf. Wer Stufen \u00fcberspringt, st\u00f6\u00dft unweigerlich an W\u00e4nde.",
    readTime: "12 Min. Lesezeit",
    sections: [
      {
        id: "what-this-course-is",
        title: "Was dieser Kurs ist \u2014 und was nicht",
        blocks: [
          {
            type: "p",
            text: "Das ist keine Sammlung von Tipps. Es ist ein linearer Lernpfad. Das Ziel am Ende ist nicht, SEO in der Theorie zu verstehen \u2014 sondern ein funktionierendes SEO-System f\u00fcr deinen spezifischen Shop aufzubauen, mit echten Keyword-Zielen, einem festen Audit-Rhythmus und gen\u00fcgend Sicherheit, um Probleme selbst zu diagnostizieren, wenn Rankings einbrechen.",
          },
          {
            type: "callout",
            title: "F\u00fcr wen dieser Kurs gedacht ist",
            text: "Shop-Inhaber, die ihr SEO selbst betreiben, In-House-Marketer, die SEO-Verantwortung geerbt haben, oder Junior-SEO-Spezialisten, die eine solide Grundlage aufbauen wollen. Wer bereits technische Audits durchf\u00fchrt, Links aufbaut und den organischen Umsatz w\u00f6chentlich verfolgt, kennt das hier behandelte Terrain wahrscheinlich schon. Steig bei der Stufe ein, die deinem aktuellen Wissensstand entspricht.",
          },
          {
            type: "p",
            text: "Der Kurs l\u00e4uft \u00fcber 9+ Wochen. Jede Stufe hat konkrete Ergebnisse, die erarbeitet werden m\u00fcssen. Die Wochen 1-2 sind bewusst langsam gehalten \u2014 zu verstehen, wie Google funktioniert, bevor man irgend etwas anf\u00e4sst, ist kein optionales Vorwissen. Shops, die Grundlagen \u00fcberspringen und direkt zu Taktiken springen, verschwenden Monate damit, Korrekturen nachzujagen, die nicht halten.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&q=80",
            alt: "Person studiert SEO-Kursmaterialien an einem Schreibtisch mit Laptop und Notizbuch",
            caption: "Ein strukturierter Pfad schl\u00e4gt einen zuf\u00e4lligen Stapel von Artikeln jedes Mal.",
          },
        ],
      },
      {
        id: "stage-1-foundations",
        title: "Stufe 1 \u2014 Grundlagen (Wochen 1\u20132)",
        blocks: [
          {
            type: "p",
            text: "Woche 1 hat ein Ziel: verstehen, wie Google wirklich funktioniert. Nicht oberfl\u00e4chlich, sondern so gut, dass du Crawling, Indexierung und Ranking einem anderen erkl\u00e4ren kannst. Das ist wichtig, weil jede sp\u00e4tere SEO-Entscheidung durch dieses mentale Modell gefiltert wird. Wer es falsch versteht, trifft zuf\u00e4llige Entscheidungen.",
          },
          {
            type: "list",
            items: [
              "Googles eigene Dokumentation \u00fcber die Funktionsweise der Suche lesen (search.google.com/search/howsearchworks)",
              "Google Search Console einrichten: Domain-Property verifizieren, Sitemap einreichen, Coverage-Bericht auf Crawling-Fehler pr\u00fcfen",
              "GA4 mit aktiviertem Enhanced Ecommerce einrichten \u2014 die Schritte im Analytics-Leitfaden unter /guides/analytics-tracking befolgen",
              "Die SEO-Grundlagen-Checkliste unter /guides/fundamentals lesen und den eigenen Shop gegen jeden Punkt bewerten",
              "URL-Inspektionstool in GSC auf der Startseite und 3 Produktseiten verwenden \u2014 best\u00e4tigen, dass Google sie crawlen und indexieren kann",
            ],
          },
          {
            type: "tip",
            text: "Ergebnis Woche 2: eine bewertete Kopie der Grundlagen-Checkliste mit Notizen dazu, welche Punkte der Shop nicht erf\u00fcllt. Das wird die erste Priorit\u00e4tenliste. Noch nichts beheben \u2014 nur auditen.",
          },
        ],
      },
      {
        id: "stage-2-research",
        title: "Stufe 2 \u2014 Recherche (Wochen 3\u20134)",
        blocks: [
          {
            type: "p",
            text: "Die meisten Shops machen in dieser Phase denselben Fehler: Sie recherchieren Keywords f\u00fcr Produkte, die sie verkaufen wollen \u2014 statt f\u00fcr Produkte, nach denen Menschen suchen. Das ist nicht dasselbe. Die Recherchephase zwingt dazu, reale Suchdaten zu betrachten, bevor man eine Seite anr\u00fchrt.",
          },
          {
            type: "callout",
            title: "Die 20 wertvollsten Keywords",
            text: "Bis Ende Woche 4 braucht man eine priorisierte Liste von 20 Keywords. Keine Vanity-Begriffe \u2014 sondern spezifische Produkt- und Kategoriesuchen, bei denen eine Platzierung auf Seite 1 direkt Umsatz bringe w\u00fcrde. Tools wie Ahrefs, Semrush oder den Google Keyword Planner nutzen. Mit GSC-Daten abgleichen, um zu sehen, f\u00fcr welche Keywords man bereits auf Position 11-50 rankt.",
          },
          {
            type: "list",
            items: [
              "Den gesamten Produktkatalog kartieren: jede Produktkategorie braucht mindestens ein Haupt-Keyword",
              "Wettbewerber-Gap-Analyse durchf\u00fchren: 3 direkte Konkurrenten identifizieren und Keywords finden, f\u00fcr die sie ranken, aber man selbst nicht \u2014 siehe Wettbewerber-Analyse-Leitfaden unter /guides/competitor-analysis",
              "Kaufintent-Keywords f\u00fcr die Top-10-Produktkategorien recherchieren (diese haben typischerweise Modifier: 'kaufen', 'bestes', 'g\u00fcnstig', Preisvergleich-Begriffe)",
              "Informationskeywords f\u00fcr Content-M\u00f6glichkeiten recherchieren (K\u00e4ufer recherchieren vor dem Kauf \u2014 Ranking f\u00fcr diese Artikel baut Vertrauen und Links auf)",
              "Einfaches Spreadsheet aufbauen: Keyword, monatliches Suchvolumen, aktuelle Position, Ziel-URL",
            ],
          },
          {
            type: "tip",
            text: "In dieser Phase keine Keywords mit Suchvolumen unter 50/Monat anvisieren. Fokus auf die 20 Keywords, bei denen eine Positionsverbesserung den direktesten Umsatzeffekt h\u00e4tte. Die Liste l\u00e4sst sich sp\u00e4ter erweitern. Den vollst\u00e4ndigen Keyword-Recherche-Leitfaden unter /guides/keyword-research lesen f\u00fcr den schrittweisen Prozess.",
          },
        ],
      },
      {
        id: "stage-3-on-page",
        title: "Stufe 3 \u2014 On-Page (Wochen 5\u20136)",
        blocks: [
          {
            type: "p",
            text: "Mit den 20 Ziel-Keywords in der Hand geht es in den Wochen 5-6 darum, sicherzustellen, dass die richtigen Seiten f\u00fcr diese Keywords optimiert sind. Das bedeutet nicht, Keywords in Titel zu stopfen \u2014 sondern jede Seite zum wirklich n\u00fctzlichsten Ergebnis f\u00fcr ihre Zielsuche zu machen.",
          },
          {
            type: "list",
            items: [
              "Title-Tags aller Seiten, die auf die 20 Keywords abzielen, auditen: Haupt-Keyword m\u00f6glichst am Anfang, unter 60 Zeichen, Markenname am Ende",
              "Meta-Beschreibungen auditen: jede sollte wie eine n\u00fctzliche Zusammenfassung klingen, das Keyword nat\u00fcrlich enthalten und unter 155 Zeichen bleiben",
              "Produktseiteninhalte auditen: Hat jede Produktseite mindestens 200 W\u00f6rter originalen Text? Generische Hersteller-Beschreibungen schaden dem Ranking.",
              "Kategorieseitentexte auditen: Google braucht Text, um zu verstehen, worum es auf einer Kategorieseite geht \u2014 ein kurzer Einleitungsabsatz (100-200 W\u00f6rter) \u00fcber dem Produktraster macht einen messbaren Unterschied",
              "\u00dcberschriftenstruktur korrigieren: ein H1 pro Seite mit dem Haupt-Keyword, logische H2/H3-Hierarchie f\u00fcr Unterthemen",
            ],
          },
          {
            type: "callout",
            title: "Die richtige Reihenfolge bei On-Page-Korrekturen",
            text: "Zuerst Title-Tags korrigieren \u2014 der h\u00f6chste Effekt pro Arbeitsstunde. Dann Meta-Beschreibungen. Dann Inhalte. Dem Drang widerstehen, Seiten umzugestalten oder URLs zu \u00e4ndern, es sei denn, sie schaden aktiv. Stabilit\u00e4t hilft Rankings. Einen vollst\u00e4ndigen On-Page-Audit mit der Checkliste unter /guides/on-page-audit durchf\u00fchren.",
          },
        ],
      },
      {
        id: "stage-4-technical",
        title: "Stufe 4 \u2014 Technik (Wochen 7\u20138)",
        blocks: [
          {
            type: "p",
            text: "Technisches SEO ist nicht glamour\u00f6s, aber grundlegend. Eine langsame Website, ein fehlerhaftes Crawling oder Duplicate-Content-Probleme begrenzen die Rankings unabh\u00e4ngig davon, wie gut die Inhalte sind. In den Wochen 7-8 geht es darum, die technischen Probleme zu finden und zu beheben, die am wahrscheinlichsten bremsen.",
          },
          {
            type: "list",
            items: [
              "Vollst\u00e4ndigen Crawl mit Screaming Frog (kostenlos bis 500 URLs) oder Ahrefs Site Audit durchf\u00fchren \u2014 4xx-Fehler, Weiterleitungsketten, doppelte Title-Tags, fehlende Canonical-Tags suchen",
              "Core Web Vitals in GSC unter Erfahrung > Core Web Vitals pr\u00fcfen. LCP unter 2,5 Sekunden, CLS unter 0,1, INP unter 200\u00a0ms",
              "Bilder komprimieren und in WebP konvertieren \u2014 bei Shopify eine App wie TinyIMG verwenden; bei WooCommerce Imagify oder ShortPixel",
              "Strukturierte Daten erg\u00e4nzen: Produkt-Schema auf allen Produktseiten, BreadcrumbList auf allen Seiten, Organization auf der Startseite",
              "Duplicate Content bereinigen: sicherstellen, dass Canonical-Tags auf die bevorzugte Version jeder Seite zeigen, insbesondere f\u00fcr gefilterte/sortierte Kategorie-URLs",
            ],
          },
          {
            type: "tip",
            text: "Das kostenlose Google PageSpeed Insights Tool (pagespeed.web.dev) auf der Startseite, der wichtigsten Kategorieseite und der meistverkauften Produktseite verwenden. Der Abschnitt \u2018M\u00f6glichkeiten\u2019 zeigt genau, was zu korrigieren ist, und sch\u00e4tzt die Zeitersparnis. Den vollst\u00e4ndigen technischen Audit-Prozess unter /guides/technical-analysis durchf\u00fchren.",
          },
        ],
      },
      {
        id: "stage-5-authority",
        title: "Stufe 5 \u2014 Autorit\u00e4t (Wochen 9+)",
        blocks: [
          {
            type: "p",
            text: "Alles vor dieser Stufe ist Voraussetzung. Wenn Konkurrenten mehr Links von autorit\u00e4tiveren Seiten haben, werden sie bei den meisten umk\u00e4mpften Keywords besser ranken \u2014 selbst wenn On-Page-SEO und Technik besser sind. Autorit\u00e4tsaufbau ist ein langes Spiel \u2014 in 2 Wochen keine Ergebnisse erwarten. Aber ohne ihn stagniert man.",
          },
          {
            type: "list",
            items: [
              "Link-Gap-Analyse durchf\u00fchren: Domains finden, die auf die Top-3-Konkurrenten verlinken, aber nicht auf den eigenen Shop \u2014 das sind die ersten Outreach-Ziele",
              "Verlinkungsw\u00fcrdige Inhalte erstellen: Datenstudien, eigene Recherchen, Kaufratgeber, Vergleichsseiten \u2014 keine d\u00fcnnen Produktbeschreibungen",
              "Thematische Autorit\u00e4t aufbauen: ein Cluster von Artikeln rund um die Kernprodukt-Kategorien ver\u00f6ffentlichen, damit Google die Website als Autorit\u00e4t in diesen Themen wahrnimmt \u2014 siehe /guides/topical-authority",
              "Digital PR: Journalisten und Blogger, die \u00fcber die eigene Nische berichten, mit nachrichtentauglichen Winkeln ansprechen (Produkteinf\u00fchrungen, Originaldaten, Trendbeitr\u00e4ge)",
              "Lieferanten- und Partnerlinks: oft \u00fcbersehen, aber einfache Gewinne \u2014 Lieferanten, Distributoren und Gesch\u00e4ftspartner um einen Link zum Shop bitten",
            ],
          },
          {
            type: "callout",
            title: "Linkaufbau ist kein Einmonats-Projekt",
            text: "Linkaufbau als laufende Aktivit\u00e4t einplanen, nicht als einmaligen Sprint. Selbst 2-3 neue Qualit\u00e4ts-Backlinks pro Monat summieren sich \u00fcber 12 Monate erheblich. Die Anzahl der verweisenden Domains monatlich in Ahrefs oder GSC verfolgen. Den Linkaufbau-Taktiken-Leitfaden unter /guides/link-building-tactics f\u00fcr spezifische Outreach-Ans\u00e4tze lesen, die f\u00fcr E-Commerce funktionieren.",
          },
        ],
      },
      {
        id: "after-the-course",
        title: "Was nach Woche 9 kommt: der viertelj\u00e4hrliche Audit-Loop",
        blocks: [
          {
            type: "p",
            text: "Den Kurs abzuschlie\u00dfen bedeutet nicht, dass das SEO fertig ist. Suchergebnisse \u00e4ndern sich. Konkurrenten verbessern sich. Google aktualisiert seinen Algorithmus. Shops, die nachhaltiges SEO-Wachstum aufrechterhalten, f\u00fchren viertelj\u00e4hrlich einen systematischen Audit-Loop durch. Das dauert einen vollen Arbeitstag, viermal im Jahr.",
          },
          {
            type: "checklist",
            items: [
              "Neuen Crawl mit Screaming Frog durchf\u00fchren und mit dem Vorquartal vergleichen \u2014 auf neue 4xx-Fehler, neue Duplicate-Content-Probleme und Crawlbudget-Verschwendung achten",
              "GSC-Suchergebnis-Bericht f\u00fcr das gesamte Quartal ziehen: Welche Keywords haben sich verbessert, welche sind gefallen? Einbr\u00fcche untersuchen, bevor man Algorithmus-Updates annimmt.",
              "GA4 organischen Umsatz f\u00fcr das Quartal vs. dasselbe Quartal des Vorjahres exportieren \u2014 bei R\u00fcckgang den Einbruch \u00fcber den Landing Pages-Bericht auf bestimmte Seiten zur\u00fcckverfolgen",
              "Keyword-Liste auffrischen: neue Keywords aus GSC-Impressionsdaten hinzuf\u00fcgen, Keywords entfernen, bei denen man Seite 1 erreicht hat und stabil ist",
              "On-Page-Checkliste auf den 10 wichtigsten Seiten durchf\u00fchren \u2014 Inhalte driften mit der Zeit, wenn Teams sie ohne SEO-Review aktualisieren",
              "Core Web Vitals erneut pr\u00fcfen \u2014 ein Plattform-Update, eine neue App oder ein Bildgr\u00f6\u00dfen-Regression kann die Seitengeschwindigkeit still beeintr\u00e4chtigen",
              "Backlink-Profil \u00fcberpr\u00fcfen: Neue toxische Links? Verlorene Links von wichtigen verweisenden Domains? Beides ansprechen.",
            ],
          },
          {
            type: "tip",
            text: "Einen vollen Tag im Kalender am ersten Montag jedes neuen Quartals blockieren und sch\u00fctzen. Vier Audits pro Jahr reichen aus, um den meisten Problemen voraus zu sein. Kontinuierliches t\u00e4gliches Monitoring ohne viertelj\u00e4hrlichen Reset f\u00fchrt dazu, Muster zu verpassen. Als n\u00e4chste Schritte bieten sich der Keyword-Recherche-Leitfaden unter /guides/keyword-research und der Wettbewerber-Analyse-Leitfaden unter /guides/competitor-analysis an, um die Recherchekompetenzen zu vertiefen.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/analytics-tracking",
        category: "E-Commerce-SEO-Grundlagen",
        title: "Analytics & Tracking",
      },
      next: {
        href: "/guides/keyword-research",
        category: "Recherche & Ideen",
        title: "Keyword-Recherche",
      },
    },
  },

  fr: {
    badge: "Bases du SEO e-commerce",
    heading: "De d\u00e9butant \u00e0 expert",
    intro:
      "La plupart des contenus SEO pour l\u2019e-commerce supposent soit que vous ne savez rien, soit que vous savez tout. Ce cours est diff\u00e9rent. C\u2019est un programme structur\u00e9 de 9 semaines qui vous emmene de z\u00e9ro connaissance en SEO jusqu\u2019\u00e0 la gestion d\u2019un programme SEO reproductible et bas\u00e9 sur les donn\u00e9es pour votre boutique. Chaque \u00e9tape s\u2019appuie sur la pr\u00e9c\u00e9dente. Sauter des \u00e9tapes vous m\u00e8nera in\u00e9vitablement dans une impasse.",
    readTime: "12 min de lecture",
    sections: [
      {
        id: "what-this-course-is",
        title: "Ce qu\u2019est ce cours \u2014 et ce qu\u2019il n\u2019est pas",
        blocks: [
          {
            type: "p",
            text: "Ce n\u2019est pas une collection de conseils. C\u2019est un parcours d\u2019apprentissage lin\u00e9aire. L\u2019objectif final n\u2019est pas de comprendre le SEO en th\u00e9orie \u2014 c\u2019est d\u2019avoir un syst\u00e8me SEO op\u00e9rationnel pour votre boutique sp\u00e9cifique, avec de v\u00e9ritables objectifs de mots-cl\u00e9s, un calendrier d\u2019audit fixe, et suffisamment d\u2019assurance pour diagnostiquer les probl\u00e8mes vous-m\u00eame lorsque les positions chutent.",
          },
          {
            type: "callout",
            title: "Pour qui ce cours est con\u00e7u",
            text: "Les propri\u00e9taires de boutiques qui g\u00e8rent leur propre SEO, les marketeurs en interne qui ont h\u00e9rit\u00e9 de la responsabilit\u00e9 SEO, ou les sp\u00e9cialistes SEO junior qui veulent des bases solides. Si vous r\u00e9alisez d\u00e9j\u00e0 des audits techniques, construisez des liens et suivez le CA organique chaque semaine, vous connaissez probablement d\u00e9j\u00e0 ce que ce cours couvre. Commencez \u00e0 l\u2019\u00e9tape qui correspond \u00e0 votre niveau actuel.",
          },
          {
            type: "p",
            text: "Le cours dure 9+ semaines. Chaque \u00e9tape a des livrables concrets. Les semaines 1 et 2 sont d\u00e9lib\u00e9r\u00e9ment lentes \u2014 comprendre le fonctionnement de Google avant de toucher quoi que ce soit n\u2019est pas une option. Les boutiques qui sautent les fondamentaux pour aller directement aux tactiques perdent des mois \u00e0 courir apr\u00e8s des corrections qui ne tiennent pas.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&q=80",
            alt: "Personne \u00e9tudiant des mat\u00e9riaux de cours SEO \u00e0 un bureau avec un ordinateur portable et un carnet",
            caption: "Un parcours structur\u00e9 bat \u00e0 chaque fois une pile d\u2019articles al\u00e9atoires.",
          },
        ],
      },
      {
        id: "stage-1-foundations",
        title: "\u00c9tape 1 \u2014 Fondations (Semaines 1\u20132)",
        blocks: [
          {
            type: "p",
            text: "La semaine 1 a un seul objectif : comprendre comment Google fonctionne vraiment. Pas en surface, mais assez profond\u00e9ment pour pouvoir expliquer le crawl, l\u2019indexation et le classement \u00e0 quelqu\u2019un d\u2019autre. C\u2019est important parce que chaque d\u00e9cision SEO prise plus tard sera filtr\u00e9e par ce mod\u00e8le mental. Le comprendre mal rend les d\u00e9cisions al\u00e9atoires.",
          },
          {
            type: "list",
            items: [
              "Lire la documentation officielle de Google sur le fonctionnement de la recherche (search.google.com/search/howsearchworks)",
              "Configurer Google Search Console : v\u00e9rifier la propri\u00e9t\u00e9 de domaine, soumettre le sitemap, v\u00e9rifier le rapport de couverture pour les erreurs d\u2019exploration",
              "Configurer GA4 avec Enhanced Ecommerce activ\u00e9 \u2014 suivre les \u00e9tapes du guide Analytics sur /guides/analytics-tracking",
              "Lire la checklist des fondamentaux SEO sur /guides/fundamentals et \u00e9valuer sa propre boutique sur chaque point",
              "Utiliser l\u2019outil d\u2019inspection d\u2019URL dans GSC sur la page d\u2019accueil et 3 pages produit \u2014 confirmer que Google peut les explorer et les indexer",
            ],
          },
          {
            type: "tip",
            text: "Livrable semaine 2 : une copie not\u00e9e de la checklist des fondamentaux avec des notes sur les points que votre boutique ne respecte pas. C\u2019est votre premi\u00e8re liste de priorit\u00e9s. Ne corrigez rien encore \u2014 auditez seulement.",
          },
        ],
      },
      {
        id: "stage-2-research",
        title: "\u00c9tape 2 \u2014 Recherche (Semaines 3\u20134)",
        blocks: [
          {
            type: "p",
            text: "La plupart des boutiques font la m\u00eame erreur \u00e0 cette \u00e9tape : elles recherchent des mots-cl\u00e9s pour les produits qu\u2019elles veulent vendre plut\u00f4t que pour les produits que les gens recherchent. Ce n\u2019est pas toujours la m\u00eame chose. L\u2019\u00e9tape de recherche vous oblige \u00e0 regarder les donn\u00e9es de recherche r\u00e9elles avant de toucher une page.",
          },
          {
            type: "callout",
            title: "Vos 20 mots-cl\u00e9s les plus pr\u00e9cieux",
            text: "D\u2019ici la fin de la semaine 4, vous avez besoin d\u2019une liste prioris\u00e9e de 20 mots-cl\u00e9s. Pas des termes de vanit\u00e9 \u2014 des requ\u00eates sp\u00e9cifiques de produits et de cat\u00e9gories o\u00f9 un classement en page 1 g\u00e9n\u00e9rerait directement du CA. Utilisez des outils comme Ahrefs, Semrush ou Google Keyword Planner. Croisez avec les donn\u00e9es GSC pour voir pour quels mots-cl\u00e9s vous \u00eates d\u00e9j\u00e0 en position 11-50.",
          },
          {
            type: "list",
            items: [
              "Cartographier l\u2019ensemble du catalogue produit : chaque cat\u00e9gorie produit a besoin d\u2019au moins un mot-cl\u00e9 principal",
              "Faire une analyse de gap concurrentiel : identifier 3 concurrents directs et trouver les mots-cl\u00e9s pour lesquels ils se classent mais pas vous \u2014 voir le guide d\u2019analyse concurrentielle sur /guides/competitor-analysis",
              "Rechercher des mots-cl\u00e9s \u00e0 intention d\u2019achat pour les 10 principales cat\u00e9gories produit (ils ont typiquement des modificateurs : 'acheter', 'meilleur', 'pas cher', termes de comparaison de prix)",
              "Rechercher des mots-cl\u00e9s informationnels pour des opportunit\u00e9s de contenu (les acheteurs font des recherches avant d\u2019acheter \u2014 se classer pour ces articles build de la confiance et des liens)",
              "Construire un tableur simple : mot-cl\u00e9, volume de recherche mensuel, position actuelle, URL de la page cible",
            ],
          },
          {
            type: "tip",
            text: "\u00c0 ce stade, ne ciblez pas les mots-cl\u00e9s avec un volume de recherche inf\u00e9rieur \u00e0 50/mois. Concentrez-vous sur les 20 mots-cl\u00e9s o\u00f9 une am\u00e9lioration de position aurait l\u2019impact direct le plus fort sur le CA. Vous pourrez \u00e9largir la liste plus tard. Lisez le guide complet de recherche de mots-cl\u00e9s sur /guides/keyword-research pour le processus \u00e9tape par \u00e9tape.",
          },
        ],
      },
      {
        id: "stage-3-on-page",
        title: "\u00c9tape 3 \u2014 On-Page (Semaines 5\u20136)",
        blocks: [
          {
            type: "p",
            text: "Avec vos 20 mots-cl\u00e9s cibles en main, les semaines 5-6 consistent \u00e0 s\u2019assurer que les bonnes pages sont optimis\u00e9es pour ces mots-cl\u00e9s. Il ne s\u2019agit pas de bourrer des mots-cl\u00e9s dans des titres \u2014 mais de faire de chaque page le r\u00e9sultat le plus g\u00e9nuinement utile pour sa requ\u00eate cible.",
          },
          {
            type: "list",
            items: [
              "Auditer les balises title de toutes les pages ciblant vos 20 mots-cl\u00e9s : mot-cl\u00e9 principal pr\u00e8s du d\u00e9but, sous 60 caract\u00e8res, nom de marque \u00e0 la fin",
              "Auditer les meta descriptions : chacune doit ressembler \u00e0 un r\u00e9sum\u00e9 utile, inclure le mot-cl\u00e9 naturellement et rester sous 155 caract\u00e8res",
              "Auditer le contenu des pages produit : chaque page produit a-t-elle au moins 200 mots de texte original ? Les descriptions g\u00e9n\u00e9riques des fabricants p\u00e9nalisent les positions.",
              "Auditer le contenu des pages cat\u00e9gorie : Google a besoin de texte pour comprendre une page cat\u00e9gorie \u2014 un court paragraphe d\u2019introduction (100-200 mots) au-dessus de la grille produit fait une diff\u00e9rence mesurable",
              "Corriger la structure des titres : un H1 par page contenant le mot-cl\u00e9 principal, hi\u00e9rarchie logique H2/H3 couvrant les sous-th\u00e8mes",
            ],
          },
          {
            type: "callout",
            title: "L\u2019ordre de priorit\u00e9 pour les corrections on-page",
            text: "Corrigez les balises title en premier \u2014 elles ont le plus grand impact par heure de travail. Puis les meta descriptions. Puis le contenu. R\u00e9sistez \u00e0 l\u2019envie de red\u00e9signer des pages ou de changer des URLs \u00e0 ce stade, sauf si elles vous nuisent activement. La stabilit\u00e9 aide les classements. Faites un audit on-page complet avec la checklist sur /guides/on-page-audit.",
          },
        ],
      },
      {
        id: "stage-4-technical",
        title: "\u00c9tape 4 \u2014 Technique (Semaines 7\u20138)",
        blocks: [
          {
            type: "p",
            text: "Le SEO technique n\u2019est pas glamour mais il est fondamental. Un site lent, un crawl d\u00e9faillant ou des probl\u00e8mes de contenu dupliqu\u00e9 limiteront vos positions quel que soit la qualit\u00e9 de votre contenu. Les semaines 7-8 visent \u00e0 trouver et corriger les probl\u00e8mes techniques les plus susceptibles de vous freiner.",
          },
          {
            type: "list",
            items: [
              "Faire un crawl complet avec Screaming Frog (gratuit jusqu\u2019\u00e0 500 URLs) ou Ahrefs Site Audit \u2014 chercher les erreurs 4xx, les cha\u00eenes de redirections, les balises title dupliqu\u00e9es, les canonical manquantes",
              "V\u00e9rifier les Core Web Vitals dans GSC sous Exp\u00e9rience > Core Web Vitals. LCP sous 2,5 secondes, CLS sous 0,1, INP sous 200 ms",
              "Compresser et convertir les images au format WebP \u2014 sur Shopify utiliser une app comme TinyIMG ; sur WooCommerce utiliser Imagify ou ShortPixel",
              "Ajouter les donn\u00e9es structur\u00e9es : schema Product sur toutes les pages produit, BreadcrumbList sur toutes les pages, Organization sur la page d\u2019accueil",
              "Corriger le contenu dupliqu\u00e9 : s\u2019assurer que les balises canonical pointent vers la version pr\u00e9f\u00e9r\u00e9e de chaque page, notamment pour les URLs de cat\u00e9gorie filtr\u00e9es/tri\u00e9es",
            ],
          },
          {
            type: "tip",
            text: "Utiliser l\u2019outil gratuit Google PageSpeed Insights (pagespeed.web.dev) sur la page d\u2019accueil, la page de cat\u00e9gorie la plus importante et la page produit la plus vendue. La section \u2018Opportunit\u00e9s\u2019 indique exactement ce qu\u2019il faut corriger et estime le gain de temps. Suivre le processus d\u2019audit technique d\u00e9taill\u00e9 sur /guides/technical-analysis.",
          },
        ],
      },
      {
        id: "stage-5-authority",
        title: "\u00c9tape 5 \u2014 Autorit\u00e9 (Semaines 9+)",
        blocks: [
          {
            type: "p",
            text: "Tout ce qui pr\u00e9c\u00e8de cette \u00e9tape est un pr\u00e9requis. Si vos concurrents ont plus de liens provenant de sites plus autoritaires, ils vous surclasseront sur la plupart des mots-cl\u00e9s concurrentiels, m\u00eame si votre SEO on-page et technique est meilleur. La construction d\u2019autorit\u00e9 est un jeu long \u2014 n\u2019attendez pas de r\u00e9sultats en 2 semaines. Mais sans elle, vous plafonnerez.",
          },
          {
            type: "list",
            items: [
              "Faire l\u2019analyse de gap de liens : trouver les domaines qui pointent vers vos 3 principaux concurrents mais pas vers vous \u2014 ce sont vos premi\u00e8res cibles d\u2019approche",
              "Cr\u00e9er du contenu qui m\u00e9rite d\u2019\u00eatre li\u00e9 : \u00e9tudes de donn\u00e9es, recherches originales, guides d\u2019achat, pages de comparaison \u2014 pas des descriptions de produits effil\u00e9es",
              "Construire l\u2019autorit\u00e9 th\u00e9matique : publier un cluster d\u2019articles autour de vos cat\u00e9gories produit principales pour que Google percoive votre site comme une autorit\u00e9 sur ces sujets \u2014 voir /guides/topical-authority",
              "RP digital : contacter les journalistes et blogueurs couvrant votre niche avec des angles newsworthy (lancements produit, donn\u00e9es originales, tendances)",
              "Liens fournisseurs et partenaires : souvent n\u00e9glig\u00e9s, ce sont des gains faciles \u2014 demander aux fournisseurs, distributeurs et partenaires commerciaux de lier vers votre boutique",
            ],
          },
          {
            type: "callout",
            title: "Le netlinking n\u2019est pas un projet d\u2019un mois",
            text: "Pr\u00e9voyez le netlinking comme une activit\u00e9 continue, pas un sprint ponctuel. M\u00eame 2-3 nouveaux backlinks de qualit\u00e9 par mois s\u2019accumulent de fa\u00e7on significative sur 12 mois. Suivez votre nombre de domaines r\u00e9f\u00e9rents dans Ahrefs ou GSC chaque mois. Lisez le guide des tactiques de netlinking sur /guides/link-building-tactics pour des approches d\u2019outreach sp\u00e9cifiques qui fonctionnent pour l\u2019e-commerce.",
          },
        ],
      },
      {
        id: "after-the-course",
        title: "Que faire apr\u00e8s la semaine 9 : la boucle d\u2019audit trimestrielle",
        blocks: [
          {
            type: "p",
            text: "Finir le cours ne signifie pas que votre SEO est termin\u00e9. Les r\u00e9sultats de recherche \u00e9voluent. Les concurrents s\u2019am\u00e9liorent. Google met \u00e0 jour son algorithme. Les boutiques qui maintiennent une croissance SEO durable ex\u00e9cutent une boucle d\u2019audit syst\u00e9matique chaque trimestre. Cela prend une journ\u00e9e compl\u00e8te, quatre fois par an.",
          },
          {
            type: "checklist",
            items: [
              "Faire un nouveau crawl avec Screaming Frog et le comparer au trimestre pr\u00e9c\u00e9dent \u2014 chercher les nouvelles erreurs 4xx, les nouveaux contenus dupliqu\u00e9s, le gaspillage de budget de crawl",
              "Extraire le rapport de r\u00e9sultats de recherche GSC pour tout le trimestre : quels mots-cl\u00e9s ont progress\u00e9, lesquels ont chut\u00e9 ? Investiguer les baisses avant de supposer une mise \u00e0 jour d\u2019algorithme.",
              "Exporter le CA organique GA4 pour le trimestre vs le m\u00eame trimestre l\u2019ann\u00e9e derni\u00e8re \u2014 en cas de baisse, retracer la chute vers des pages sp\u00e9cifiques via le rapport Pages de destination",
              "Mettre \u00e0 jour la liste de mots-cl\u00e9s : ajouter de nouveaux mots-cl\u00e9s depuis les donn\u00e9es d\u2019impressions GSC, supprimer les mots-cl\u00e9s pour lesquels vous avez atteint la page 1 et qui sont stables",
              "Faire la checklist on-page sur les 10 pages les plus importantes \u2014 les choses d\u00e9rivent avec le temps quand les \u00e9quipes mettent \u00e0 jour le contenu sans relecture SEO",
              "Re-v\u00e9rifier les Core Web Vitals \u2014 une mise \u00e0 jour de plateforme, l\u2019installation d\u2019une nouvelle app ou une r\u00e9gression de taille d\u2019image peut silencieusement d\u00e9grader la vitesse de page",
              "Examiner le profil de backlinks : nouveaux liens toxiques ? Liens perdus depuis des domaines r\u00e9f\u00e9rents importants ? G\u00e9rez les deux.",
            ],
          },
          {
            type: "tip",
            text: "Bloquez une journ\u00e9e enti\u00e8re dans votre agenda le premier lundi de chaque nouveau trimestre et prot\u00e9gez-la. Quatre audits par an suffisent pour anticiper la plupart des probl\u00e8mes. La surveillance quotidienne continue sans reset trimestriel conduit \u00e0 rater des tendances. De l\u00e0, le guide de recherche de mots-cl\u00e9s sur /guides/keyword-research et le guide d\u2019analyse concurrentielle sur /guides/competitor-analysis sont les \u00e9tapes logiques suivantes pour approfondir vos comp\u00e9tences de recherche.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/analytics-tracking",
        category: "Bases du SEO e-commerce",
        title: "Analytics & Tracking",
      },
      next: {
        href: "/guides/keyword-research",
        category: "Recherche & Id\u00e9ation",
        title: "Recherche de mots-cl\u00e9s",
      },
    },
  },

  es: {
    badge: "Fundamentos de SEO e-commerce",
    heading: "De principiante a experto",
    intro:
      "La mayor\u00eda del contenido SEO para e-commerce asume que o no sabes nada o ya lo sabes todo. Este curso es diferente. Es un programa estructurado de 9 semanas que te lleva desde cero conocimiento en SEO hasta gestionar un programa SEO repetible y basado en datos para tu tienda. Cada etapa se construye sobre la anterior. Saltarte etapas te llevar\u00e1 irremediablemente a un punto muerto.",
    readTime: "12 min de lectura",
    sections: [
      {
        id: "what-this-course-is",
        title: "Qu\u00e9 es este curso \u2014 y qu\u00e9 no es",
        blocks: [
          {
            type: "p",
            text: "Esto no es una colecci\u00f3n de consejos. Es un camino de aprendizaje lineal. El objetivo al final no es entender el SEO en teor\u00eda \u2014 es tener un sistema SEO funcionando para tu tienda concreta, con objetivos reales de palabras clave, un calendario de auditor\u00eda fijo, y suficiente confianza para diagnosticar problemas t\u00fa mismo cuando caigan las posiciones.",
          },
          {
            type: "callout",
            title: "Para qui\u00e9n es este curso",
            text: "Due\u00f1os de tiendas que gestionan su propio SEO, marketers internos que han heredado la responsabilidad de SEO, o especialistas SEO junior que quieren una base s\u00f3lida. Si ya realizas auditor\u00edas t\u00e9cnicas, construyes enlaces y haces seguimiento del revenue org\u00e1nico semanal, este curso cubre terreno que probablemente ya conoces. Empieza en la etapa que corresponde a tu nivel actual.",
          },
          {
            type: "p",
            text: "El curso dura 9+ semanas. Cada etapa tiene entregables espec\u00edficos. Las semanas 1-2 son deliberadamente lentas \u2014 entender c\u00f3mo funciona Google antes de tocar nada no es opcional. Las tiendas que se saltan los fundamentos y saltan directamente a las t\u00e1cticas desperdician meses persiguiendo correcciones que no se mantienen.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&q=80",
            alt: "Persona estudiando materiales del curso SEO en un escritorio con un port\u00e1til y un cuaderno",
            caption: "Un camino estructurado supera siempre una pila de art\u00edculos aleatorios.",
          },
        ],
      },
      {
        id: "stage-1-foundations",
        title: "Etapa 1 \u2014 Fundamentos (Semanas 1\u20132)",
        blocks: [
          {
            type: "p",
            text: "La semana 1 tiene un solo objetivo: entender c\u00f3mo funciona Google de verdad. No a nivel superficial, sino lo suficientemente bien como para explicarle el rastreo, la indexaci\u00f3n y el posicionamiento a otra persona. Esto importa porque cada decisi\u00f3n SEO que tomes despu\u00e9s pasar\u00e1 por este modelo mental. Entenderlo mal hace que las decisiones sean aleatorias.",
          },
          {
            type: "list",
            items: [
              "Leer la documentaci\u00f3n oficial de Google sobre c\u00f3mo funciona la b\u00fasqueda (search.google.com/search/howsearchworks)",
              "Configurar Google Search Console: verificar la propiedad de dominio, enviar el sitemap, revisar el informe de Cobertura para detectar errores de rastreo",
              "Configurar GA4 con Enhanced Ecommerce activado \u2014 seguir los pasos de la gu\u00eda de Analytics en /guides/analytics-tracking",
              "Leer el checklist de fundamentos SEO en /guides/fundamentals y valorar tu propia tienda en cada punto",
              "Usar la herramienta de Inspecci\u00f3n de URLs en GSC en tu p\u00e1gina de inicio y 3 p\u00e1ginas de producto \u2014 confirmar que Google puede rastrearlas e indexarlas",
            ],
          },
          {
            type: "tip",
            text: "Entregable semana 2: una copia puntuada del checklist de fundamentos con notas sobre qu\u00e9 puntos no cumple tu tienda. Esto se convierte en tu primera lista de prioridades. No corrijas nada todav\u00eda \u2014 solo audita.",
          },
        ],
      },
      {
        id: "stage-2-research",
        title: "Etapa 2 \u2014 Investigaci\u00f3n (Semanas 3\u20134)",
        blocks: [
          {
            type: "p",
            text: "La mayor\u00eda de tiendas cometen el mismo error en esta etapa: investigan palabras clave para los productos que quieren vender en lugar de para los productos que la gente busca. No siempre son lo mismo. La etapa de investigaci\u00f3n te obliga a mirar datos reales de b\u00fasqueda antes de tocar ninguna p\u00e1gina.",
          },
          {
            type: "callout",
            title: "Tus 20 palabras clave m\u00e1s valiosas",
            text: "Para el final de la semana 4, necesitas una lista priorizada de 20 palabras clave. No t\u00e9rminos de vanidad \u2014 sino consultas espec\u00edficas de productos y categor\u00edas donde posicionarse en la p\u00e1gina 1 generar\u00eda revenue directamente. Usa herramientas como Ahrefs, Semrush o Google Keyword Planner. Cruza con datos de GSC para ver para qu\u00e9 palabras clave ya rankeas en posici\u00f3n 11-50.",
          },
          {
            type: "list",
            items: [
              "Mapear todo el cat\u00e1logo de productos: cada categor\u00eda de producto necesita al menos una palabra clave principal",
              "Hacer an\u00e1lisis de gap de competidores: identificar 3 competidores directos y encontrar las palabras clave para las que rankean ellos pero t\u00fa no \u2014 ver la gu\u00eda de an\u00e1lisis de competidores en /guides/competitor-analysis",
              "Investigar palabras clave con intenci\u00f3n de compra para las 10 principales categor\u00edas de productos (suelen tener modificadores: 'comprar', 'mejor', 'barato', t\u00e9rminos de comparaci\u00f3n de precios)",
              "Investigar palabras clave informacionales para oportunidades de contenido (los compradores investigan antes de comprar \u2014 rankear para esos art\u00edculos genera confianza y enlaces)",
              "Construir una hoja de c\u00e1lculo simple: palabra clave, volumen de b\u00fasqueda mensual, posici\u00f3n actual, URL de la p\u00e1gina objetivo",
            ],
          },
          {
            type: "tip",
            text: "En esta etapa no targets palabras clave con volumen de b\u00fasqueda inferior a 50/mes. Centra el enfoque en las 20 palabras clave donde una mejora de posici\u00f3n tendr\u00eda el impacto m\u00e1s directo en el revenue. Puedes ampliar la lista m\u00e1s adelante. Lee la gu\u00eda completa de investigaci\u00f3n de palabras clave en /guides/keyword-research para el proceso paso a paso.",
          },
        ],
      },
      {
        id: "stage-3-on-page",
        title: "Etapa 3 \u2014 On-Page (Semanas 5\u20136)",
        blocks: [
          {
            type: "p",
            text: "Con tus 20 palabras clave objetivo en mano, las semanas 5-6 consisten en asegurarse de que las p\u00e1ginas correctas est\u00e1n optimizadas para esas palabras clave. No se trata de meter palabras clave a la fuerza en los t\u00edtulos \u2014 se trata de hacer que cada p\u00e1gina sea el resultado m\u00e1s genuinamente \u00fatil para su consulta objetivo.",
          },
          {
            type: "list",
            items: [
              "Auditar las etiquetas de t\u00edtulo de todas las p\u00e1ginas que apuntan a tus 20 palabras clave: palabra clave principal cerca del inicio, menos de 60 caracteres, nombre de marca al final",
              "Auditar las meta descripciones: cada una debe leerse como un resumen \u00fatil, incluir la palabra clave de forma natural y tener menos de 155 caracteres",
              "Auditar el contenido de las p\u00e1ginas de producto: \u00bftiene cada p\u00e1gina de producto al menos 200 palabras de texto original? Las descripciones gen\u00e9ricas del fabricante perjudican las posiciones.",
              "Auditar el contenido de las p\u00e1ginas de categor\u00eda: Google necesita texto para entender de qu\u00e9 trata una p\u00e1gina de categor\u00eda \u2014 un breve p\u00e1rrafo introductorio (100-200 palabras) encima de la cuadr\u00edcula de productos marca una diferencia medible",
              "Corregir la estructura de encabezados: un H1 por p\u00e1gina que contenga la palabra clave principal, jerarqu\u00eda l\u00f3gica H2/H3 cubriendo los subtemas",
            ],
          },
          {
            type: "callout",
            title: "El orden de prioridad en las correcciones on-page",
            text: "Corrige las etiquetas de t\u00edtulo primero \u2014 tienen el mayor impacto por hora de trabajo. Luego las meta descripciones. Luego el contenido. Resiste el impulso de redise\u00f1ar p\u00e1ginas o cambiar URLs en esta etapa a menos que te est\u00e9n perjudicando activamente. La estabilidad ayuda a las posiciones. Ejecuta una auditor\u00eda on-page completa usando el checklist en /guides/on-page-audit.",
          },
        ],
      },
      {
        id: "stage-4-technical",
        title: "Etapa 4 \u2014 T\u00e9cnico (Semanas 7\u20138)",
        blocks: [
          {
            type: "p",
            text: "El SEO t\u00e9cnico no es glamuroso pero s\u00ed fundamental. Un sitio lento, un rastreo defectuoso o problemas de contenido duplicado limitar\u00e1n tus posiciones independientemente de la calidad de tu contenido. Las semanas 7-8 son para encontrar y corregir los problemas t\u00e9cnicos que m\u00e1s probablemente te est\u00e9n frenando.",
          },
          {
            type: "list",
            items: [
              "Ejecutar un rastreo completo con Screaming Frog (gratuito hasta 500 URLs) o Ahrefs Site Audit \u2014 buscar errores 4xx, cadenas de redirecci\u00f3n, etiquetas de t\u00edtulo duplicadas, canonical tags faltantes",
              "Comprobar Core Web Vitals en GSC bajo Experiencia > Core Web Vitals. LCP por debajo de 2,5 segundos, CLS por debajo de 0,1, INP por debajo de 200 ms",
              "Comprimir y convertir im\u00e1genes al formato WebP \u2014 en Shopify usar una app como TinyIMG; en WooCommerce usar Imagify o ShortPixel",
              "A\u00f1adir datos estructurados: schema Product en todas las p\u00e1ginas de producto, BreadcrumbList en todas las p\u00e1ginas, Organization en la p\u00e1gina de inicio",
              "Corregir el contenido duplicado: asegurarse de que los canonical tags apunten a la versi\u00f3n preferida de cada p\u00e1gina, especialmente para URLs de categor\u00eda filtradas/ordenadas",
            ],
          },
          {
            type: "tip",
            text: "Usar la herramienta gratuita Google PageSpeed Insights (pagespeed.web.dev) en tu p\u00e1gina de inicio, tu p\u00e1gina de categor\u00eda m\u00e1s importante y tu p\u00e1gina de producto m\u00e1s vendida. La secci\u00f3n de Oportunidades te dice exactamente qu\u00e9 corregir y estima el ahorro de tiempo. Sigue el proceso completo de auditor\u00eda t\u00e9cnica detallado en /guides/technical-analysis.",
          },
        ],
      },
      {
        id: "stage-5-authority",
        title: "Etapa 5 \u2014 Autoridad (Semanas 9+)",
        blocks: [
          {
            type: "p",
            text: "Todo lo anterior a esta etapa es el punto de partida m\u00ednimo. Si tus competidores tienen m\u00e1s enlaces de sitios m\u00e1s autoritativos, te superar\u00e1n en la mayor\u00eda de palabras clave competitivas aunque tu SEO on-page y t\u00e9cnico sea mejor. La construcci\u00f3n de autoridad es un juego largo \u2014 no esperes resultados en 2 semanas. Pero sin ella, llegar\u00e1s a un techo.",
          },
          {
            type: "list",
            items: [
              "Hacer el an\u00e1lisis de gap de enlaces: encontrar los dominios que enlazan a tus 3 principales competidores pero no a ti \u2014 estos son tus primeros objetivos de outreach",
              "Crear contenido que merezca ser enlazado: estudios de datos, investigaci\u00f3n original, gu\u00edas de compra, p\u00e1ginas de comparaci\u00f3n \u2014 no descripciones de productos escuetas",
              "Construir autoridad tem\u00e1tica: publicar un cluster de art\u00edculos en torno a tus categor\u00edas principales de producto para que Google perciba tu sitio como una autoridad en esos temas \u2014 ver /guides/topical-authority",
              "PR digital: contactar a periodistas y bloggers que cubren tu nicho con \u00e1ngulos con valor noticioso (lanzamientos de producto, datos originales, tendencias del sector)",
              "Enlaces de proveedores y socios: a menudo ignorados, son ganancias f\u00e1ciles \u2014 pide a proveedores, distribuidores y socios comerciales que enlacen a tu tienda",
            ],
          },
          {
            type: "callout",
            title: "La construcci\u00f3n de enlaces no es un proyecto de un mes",
            text: "Presupuesta la construcci\u00f3n de enlaces como una actividad continua, no un sprint puntual. Incluso 2-3 nuevos backlinks de calidad al mes se acumulan de forma significativa en 12 meses. Haz seguimiento de tu n\u00famero de dominios de referencia en Ahrefs o GSC mensualmente. Lee la gu\u00eda de t\u00e1cticas de link building en /guides/link-building-tactics para enfoques de outreach espec\u00edficos que funcionan para e-commerce.",
          },
        ],
      },
      {
        id: "after-the-course",
        title: "Qu\u00e9 hacer despu\u00e9s de la semana 9: el bucle de auditor\u00eda trimestral",
        blocks: [
          {
            type: "p",
            text: "Terminar el curso no significa que tu SEO haya terminado. Los resultados de b\u00fasqueda cambian. Los competidores mejoran. Google actualiza su algoritmo. Las tiendas que mantienen un crecimiento SEO sostenido ejecutan un bucle de auditor\u00eda sistem\u00e1tico cada trimestre. Requiere un d\u00eda completo, cuatro veces al a\u00f1o.",
          },
          {
            type: "checklist",
            items: [
              "Ejecutar un nuevo rastreo con Screaming Frog y comparar con el trimestre anterior \u2014 buscar nuevos errores 4xx, nuevo contenido duplicado, gasto de presupuesto de rastreo",
              "Extraer el informe de Resultados de b\u00fasqueda de GSC para todo el trimestre: \u00bfqu\u00e9 palabras clave han mejorado, cu\u00e1les han ca\u00eddo? Investigar las ca\u00eddas antes de asumir actualizaciones de algoritmo.",
              "Exportar el revenue org\u00e1nico de GA4 para el trimestre vs el mismo trimestre del a\u00f1o anterior \u2014 si ha bajado, rastrear la ca\u00edda hasta p\u00e1ginas espec\u00edficas usando el informe de P\u00e1ginas de destino",
              "Actualizar la lista de palabras clave: a\u00f1adir nuevas palabras clave desde datos de impresiones de GSC, eliminar palabras clave donde ya se ha alcanzado la p\u00e1gina 1 y est\u00e1n estables",
              "Ejecutar el checklist on-page en las 10 p\u00e1ginas m\u00e1s importantes \u2014 las cosas se desajustan con el tiempo cuando los equipos actualizan contenido sin revisi\u00f3n SEO",
              "Comprobar de nuevo los Core Web Vitals \u2014 una actualizaci\u00f3n de plataforma, la instalaci\u00f3n de una nueva app o una regresi\u00f3n en el tama\u00f1o de im\u00e1genes puede deteriorar silenciosamente la velocidad de p\u00e1gina",
              "Revisar el perfil de backlinks: \u00bfalguno nuevo enlace t\u00f3xico? \u00bfEnlaces perdidos de dominios de referencia importantes? Aborda ambas cosas.",
            ],
          },
          {
            type: "tip",
            text: "Bloquea un d\u00eda completo en tu calendario el primer lunes de cada nuevo trimestre y prot\u00e9gelo. Cuatro auditor\u00edas al a\u00f1o son suficientes para adelantarse a la mayor\u00eda de problemas. Intentar hacer un monitoreo diario continuo sin un reinicio trimestral lleva a perderse patrones importantes. Desde aqu\u00ed, la gu\u00eda de investigaci\u00f3n de palabras clave en /guides/keyword-research y la gu\u00eda de an\u00e1lisis de competidores en /guides/competitor-analysis son los pr\u00f3ximos pasos l\u00f3gicos para profundizar tus habilidades de investigaci\u00f3n.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/analytics-tracking",
        category: "Fundamentos de SEO e-commerce",
        title: "Analytics y seguimiento",
      },
      next: {
        href: "/guides/keyword-research",
        category: "Investigaci\u00f3n & Ideaci\u00f3n",
        title: "Investigaci\u00f3n de palabras clave",
      },
    },
  },

  it: {
    badge: "Basi della SEO e-commerce",
    heading: "Da principiante a esperto",
    intro:
      "La maggior parte dei contenuti SEO per l\u2019e-commerce presuppone che tu non sappia nulla o che tu sappia gi\u00e0 tutto. Questo corso \u00e8 diverso. \u00c8 un programma strutturato di 9 settimane che ti porta da zero conoscenza di SEO alla gestione di un programma SEO ripetibile e basato sui dati per il tuo negozio. Ogni fase si costruisce sulla precedente. Saltare le fasi porta inevitabilmente a dei muri.",
    readTime: "12 min di lettura",
    sections: [
      {
        id: "what-this-course-is",
        title: "Cos\u2019\u00e8 questo corso \u2014 e cosa non \u00e8",
        blocks: [
          {
            type: "p",
            text: "Non \u00e8 una raccolta di consigli. \u00c8 un percorso di apprendimento lineare. L\u2019obiettivo finale non \u00e8 capire la SEO in teoria \u2014 ma avere un sistema SEO funzionante per il tuo negozio specifico, con obiettivi reali di keyword, un calendario di audit fisso, e abbastanza sicurezza per diagnosticare i problemi da solo quando le posizioni calano.",
          },
          {
            type: "callout",
            title: "A chi \u00e8 destinato",
            text: "Proprietari di negozi che gestiscono il proprio SEO, marketer interni che hanno ereditato la responsabilit\u00e0 SEO, o specialisti SEO junior che vogliono basi solide. Se gi\u00e0 esegui audit tecnici, costruisci link e monitori il fatturato organico ogni settimana, probabilmente conosci gi\u00e0 quello che questo corso tratta. Inizia dalla fase che corrisponde al tuo livello attuale.",
          },
          {
            type: "p",
            text: "Il corso dura 9+ settimane. Ogni fase ha deliverable concreti. Le settimane 1-2 sono deliberatamente lente \u2014 capire come funziona Google prima di toccare qualsiasi cosa non \u00e8 opzionale. I negozi che saltano le fondamenta e vanno direttamente alle tattiche sprecano mesi a rincorrere correzioni che non reggono.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&q=80",
            alt: "Persona che studia materiali del corso SEO a una scrivania con un laptop e un quaderno",
            caption: "Un percorso strutturato batte sempre una pila di articoli casuali.",
          },
        ],
      },
      {
        id: "stage-1-foundations",
        title: "Fase 1 \u2014 Fondamenta (Settimane 1\u20132)",
        blocks: [
          {
            type: "p",
            text: "La settimana 1 ha un solo obiettivo: capire come funziona davvero Google. Non in modo superficiale, ma abbastanza bene da poter spiegare crawling, indicizzazione e ranking a qualcun altro. \u00c8 importante perch\u00e9 ogni decisione SEO presa in seguito verr\u00e0 filtrata attraverso questo modello mentale. Capirlo male rende le decisioni casuali.",
          },
          {
            type: "list",
            items: [
              "Leggere la documentazione ufficiale di Google su come funziona la ricerca (search.google.com/search/howsearchworks)",
              "Configurare Google Search Console: verificare la propriet\u00e0 di dominio, inviare la sitemap, controllare il report di Copertura per gli errori di scansione",
              "Configurare GA4 con l\u2019e-commerce avanzato attivo \u2014 seguire i passaggi nella guida Analytics su /guides/analytics-tracking",
              "Leggere la checklist dei fondamentali SEO su /guides/fundamentals e valutare il proprio negozio su ogni punto",
              "Usare lo strumento di Controllo URL in GSC sulla homepage e su 3 pagine prodotto \u2014 confermare che Google possa eseguire la scansione e indicizzarle",
            ],
          },
          {
            type: "tip",
            text: "Deliverable settimana 2: una copia valutata della checklist dei fondamentali con note su quali punti il negozio non soddisfa. Questa diventa la tua prima lista di priorit\u00e0. Non correggere ancora niente \u2014 solo auditare.",
          },
        ],
      },
      {
        id: "stage-2-research",
        title: "Fase 2 \u2014 Ricerca (Settimane 3\u20134)",
        blocks: [
          {
            type: "p",
            text: "La maggior parte dei negozi commette lo stesso errore in questa fase: fa ricerca di keyword per i prodotti che vuole vendere invece che per i prodotti che le persone cercano. Non \u00e8 sempre la stessa cosa. La fase di ricerca ti obbliga a guardare dati di ricerca reali prima di toccare qualsiasi pagina.",
          },
          {
            type: "callout",
            title: "Le tue 20 keyword pi\u00f9 preziose",
            text: "Entro la fine della settimana 4 hai bisogno di una lista prioritizzata di 20 keyword. Non termini di vanit\u00e0 \u2014 ma query specifiche di prodotto e categoria dove posizionarsi in prima pagina genererebbe direttamente fatturato. Usa strumenti come Ahrefs, Semrush o Google Keyword Planner. Incrocia con i dati GSC per vedere per quali keyword sei gi\u00e0 in posizione 11-50.",
          },
          {
            type: "list",
            items: [
              "Mappare l\u2019intero catalogo prodotti: ogni categoria prodotto ha bisogno di almeno una keyword principale",
              "Fare un\u2019analisi del gap dei competitor: identificare 3 concorrenti diretti e trovare le keyword per cui si posizionano loro ma non tu \u2014 vedi la guida di analisi competitiva su /guides/competitor-analysis",
              "Ricercare keyword con intento di acquisto per le 10 principali categorie di prodotto (solitamente hanno modificatori: 'acquistare', 'migliore', 'economico', termini di confronto prezzi)",
              "Ricercare keyword informazionali per opportunit\u00e0 di contenuto (i compratori ricercano prima di acquistare \u2014 posizionarsi per quegli articoli costruisce fiducia e link)",
              "Costruire un semplice foglio di calcolo: keyword, volume di ricerca mensile, posizione attuale, URL della pagina target",
            ],
          },
          {
            type: "tip",
            text: "In questa fase non targetizzare keyword con volume di ricerca inferiore a 50/mese. Concentrati sulle 20 keyword dove un miglioramento di posizione avrebbe il pi\u00f9 diretto impatto sul fatturato. Puoi espandere la lista in seguito. Leggi la guida completa alla ricerca di keyword su /guides/keyword-research per il processo passo dopo passo.",
          },
        ],
      },
      {
        id: "stage-3-on-page",
        title: "Fase 3 \u2014 On-Page (Settimane 5\u20136)",
        blocks: [
          {
            type: "p",
            text: "Con le 20 keyword target in mano, le settimane 5-6 consistono nell\u2019assicurarsi che le pagine giuste siano ottimizzate per quelle keyword. Non si tratta di infilare keyword nei titoli \u2014 ma di rendere ogni pagina il risultato genuinamente pi\u00f9 utile per la sua query target.",
          },
          {
            type: "list",
            items: [
              "Auditare i tag title di tutte le pagine che puntano alle 20 keyword: keyword principale vicino all\u2019inizio, sotto i 60 caratteri, nome del brand alla fine",
              "Auditare le meta description: ognuna dovrebbe sembrare un riassunto utile, includere la keyword in modo naturale e restare sotto i 155 caratteri",
              "Auditare i contenuti delle pagine prodotto: ogni pagina prodotto ha almeno 200 parole di testo originale? Le descrizioni generiche del produttore penalizzano le posizioni.",
              "Auditare i contenuti delle pagine categoria: Google ha bisogno di testo per capire di cosa tratta una pagina categoria \u2014 un breve paragrafo introduttivo (100-200 parole) sopra la griglia prodotti fa una differenza misurabile",
              "Correggere la struttura dei titoli: un H1 per pagina contenente la keyword principale, gerarchia logica H2/H3 che copre i sottotemi",
            ],
          },
          {
            type: "callout",
            title: "L\u2019ordine di priorit\u00e0 nelle correzioni on-page",
            text: "Correggi prima i tag title \u2014 hanno il massimo impatto per ora di lavoro. Poi le meta description. Poi i contenuti. Resisti all\u2019impulso di ridisegnare le pagine o cambiare gli URL in questa fase, a meno che non ti stiano attivamente danneggiando. La stabilit\u00e0 aiuta le posizioni. Esegui un audit on-page completo usando la checklist su /guides/on-page-audit.",
          },
        ],
      },
      {
        id: "stage-4-technical",
        title: "Fase 4 \u2014 Tecnica (Settimane 7\u20138)",
        blocks: [
          {
            type: "p",
            text: "La SEO tecnica non \u00e8 glamour ma \u00e8 fondamentale. Un sito lento, una scansione difettosa o problemi di contenuto duplicato limiteranno le tue posizioni indipendentemente dalla qualit\u00e0 dei contenuti. Le settimane 7-8 servono a trovare e correggere i problemi tecnici che pi\u00f9 probabilmente ti frenano.",
          },
          {
            type: "list",
            items: [
              "Eseguire una scansione completa con Screaming Frog (gratuito fino a 500 URL) o Ahrefs Site Audit \u2014 cercare errori 4xx, catene di redirect, tag title duplicati, tag canonical mancanti",
              "Controllare i Core Web Vitals in GSC sotto Esperienza > Core Web Vitals. LCP sotto 2,5 secondi, CLS sotto 0,1, INP sotto 200 ms",
              "Comprimere e convertire le immagini in formato WebP \u2014 su Shopify usa un\u2019app come TinyIMG; su WooCommerce usa Imagify o ShortPixel",
              "Aggiungere dati strutturati: schema Product su tutte le pagine prodotto, BreadcrumbList su tutte le pagine, Organization sulla homepage",
              "Correggere i contenuti duplicati: assicurarsi che i tag canonical puntino alla versione preferita di ogni pagina, specialmente per URL di categoria filtrate/ordinate",
            ],
          },
          {
            type: "tip",
            text: "Usare lo strumento gratuito Google PageSpeed Insights (pagespeed.web.dev) sulla homepage, sulla pagina categoria pi\u00f9 importante e sulla pagina prodotto pi\u00f9 venduta. La sezione Opportunit\u00e0 indica esattamente cosa correggere e stima il risparmio di tempo. Segui il processo completo di audit tecnico descritto su /guides/technical-analysis.",
          },
        ],
      },
      {
        id: "stage-5-authority",
        title: "Fase 5 \u2014 Autorit\u00e0 (Settimane 9+)",
        blocks: [
          {
            type: "p",
            text: "Tutto ci\u00f2 che precede questa fase \u00e8 il requisito minimo. Se i tuoi competitor hanno pi\u00f9 link da siti pi\u00f9 autorevoli, ti supereranno nella maggior parte delle keyword competitive anche se il tuo SEO on-page e tecnico \u00e8 migliore. Costruire autorit\u00e0 \u00e8 un gioco lungo \u2014 non aspettarti risultati in 2 settimane. Ma senza di essa, arriverai a un tetto.",
          },
          {
            type: "list",
            items: [
              "Fare l\u2019analisi del gap di link: trovare i domini che linkano ai tuoi 3 principali competitor ma non a te \u2014 questi sono i tuoi primi target di outreach",
              "Creare contenuto che meriti di essere linkato: studi sui dati, ricerche originali, guide all\u2019acquisto, pagine di confronto \u2014 non descrizioni di prodotto scarne",
              "Costruire autorit\u00e0 tematica: pubblicare un cluster di articoli intorno alle tue categorie prodotto principali perch\u00e9 Google percepisca il tuo sito come un\u2019autorit\u00e0 su quei temi \u2014 vedi /guides/topical-authority",
              "PR digitale: contattare giornalisti e blogger che coprono la tua nicchia con angolazioni degne di nota (lanci di prodotto, dati originali, articoli di tendenza)",
              "Link da fornitori e partner: spesso ignorati, sono guadagni facili \u2014 chiedi a fornitori, distributori e partner commerciali di linkare al tuo negozio",
            ],
          },
          {
            type: "callout",
            title: "La link building non \u00e8 un progetto di un mese",
            text: "Pianifica la link building come un\u2019attivit\u00e0 continuativa, non un sprint una tantum. Anche 2-3 nuovi backlink di qualit\u00e0 al mese si accumulano in modo significativo in 12 mesi. Monitora il numero di domini di riferimento su Ahrefs o GSC ogni mese. Leggi la guida alle tattiche di link building su /guides/link-building-tactics per approcci di outreach specifici che funzionano per l\u2019e-commerce.",
          },
        ],
      },
      {
        id: "after-the-course",
        title: "Cosa fare dopo la settimana 9: il ciclo di audit trimestrale",
        blocks: [
          {
            type: "p",
            text: "Finire il corso non significa che la tua SEO sia finita. I risultati di ricerca cambiano. I competitor migliorano. Google aggiorna il suo algoritmo. I negozi che mantengono una crescita SEO sostenuta eseguono un ciclo di audit sistematico ogni trimestre. Richiede una giornata intera, quattro volte l\u2019anno.",
          },
          {
            type: "checklist",
            items: [
              "Eseguire una nuova scansione con Screaming Frog e confrontarla con il trimestre precedente \u2014 cercare nuovi errori 4xx, nuovi contenuti duplicati, spreco di budget di scansione",
              "Estrarre il report dei Risultati di ricerca GSC per l\u2019intero trimestre: quali keyword sono migliorate, quali sono calate? Indagare i cali prima di ipotizzare aggiornamenti algoritmo.",
              "Esportare il fatturato organico GA4 per il trimestre vs lo stesso trimestre dell\u2019anno precedente \u2014 in caso di calo, risalire al calo verso pagine specifiche usando il report Pagine di destinazione",
              "Aggiornare la lista keyword: aggiungere nuove keyword dai dati di impressioni GSC, rimuovere keyword dove si \u00e8 raggiunta la prima pagina e sono stabili",
              "Eseguire la checklist on-page sulle 10 pagine pi\u00f9 importanti \u2014 le cose si deteriorano nel tempo quando i team aggiornano i contenuti senza revisione SEO",
              "Ricontrollare i Core Web Vitals \u2014 un aggiornamento di piattaforma, l\u2019installazione di una nuova app o una regressione nella dimensione delle immagini pu\u00f2 silenziosamente peggiorare la velocit\u00e0 della pagina",
              "Esaminare il profilo di backlink: nuovi link tossici? Link persi da domini di riferimento importanti? Gestisci entrambe le situazioni.",
            ],
          },
          {
            type: "tip",
            text: "Blocca una giornata intera nel calendario il primo luned\u00ec di ogni nuovo trimestre e proteggila. Quattro audit all\u2019anno sono sufficienti per anticipare la maggior parte dei problemi. Il monitoraggio giornaliero continuo senza un reset trimestrale porta a perdere i pattern. Da qui, la guida alla ricerca di keyword su /guides/keyword-research e la guida all\u2019analisi competitiva su /guides/competitor-analysis sono i prossimi passi logici per approfondire le tue competenze di ricerca.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/analytics-tracking",
        category: "Basi della SEO e-commerce",
        title: "Analytics e tracciamento",
      },
      next: {
        href: "/guides/keyword-research",
        category: "Ricerca & Ideazione",
        title: "Ricerca di keyword",
      },
    },
  },

  nl: {
    badge: "E-commerce SEO-basiskennis",
    heading: "Van beginner tot expert",
    intro:
      "De meeste SEO-content voor e-commerce gaat ervan uit dat je \u00f3f helemaal niets weet \u00f3f al alles. Deze cursus is anders. Het is een gestructureerd 9-weeks programma dat je meeneemt van nul SEO-kennis tot het runnen van een herhaalbaar, datagedreven SEO-programma voor je winkel. Elke fase bouwt voort op de vorige. Fases overslaan leidt onvermijdelijk tot een muur.",
    readTime: "12 min leestijd",
    sections: [
      {
        id: "what-this-course-is",
        title: "Wat deze cursus is \u2014 en wat niet",
        blocks: [
          {
            type: "p",
            text: "Dit is geen verzameling tips. Het is een lineair leerpad. Het doel aan het einde is niet om SEO in theorie te begrijpen \u2014 maar om een werkend SEO-systeem te hebben voor jouw specifieke winkel, met echte zoekwoorddoelen, een vast auditschema, en genoeg vertrouwen om problemen zelf te diagnosticeren als posities dalen.",
          },
          {
            type: "callout",
            title: "Voor wie dit is",
            text: "Winkeleigenaren die hun eigen SEO beheren, interne marketeers die de SEO-verantwoordelijkheid hebben ge\u00ebrfd, of junior SEO-specialisten die een solide basis willen. Als je al technische audits uitvoert, links bouwt en de organische omzet wekelijks bijhoudt, behandelt deze cursus terrein dat je waarschijnlijk al kent. Begin bij de fase die overeenkomt met je huidige kennis.",
          },
          {
            type: "p",
            text: "De cursus loopt over 9+ weken. Elke fase heeft concrete deliverables. Weken 1-2 zijn bewust traag \u2014 begrijpen hoe Google werkt voordat je iets aanraakt is niet optioneel. Winkels die de basis overslaan en direct naar tactieken springen, verspillen maanden aan het najagen van fixes die niet standhouden.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&q=80",
            alt: "Persoon die SEO-cursusmateriaal bestudeert aan een bureau met een laptop en notitieboek",
            caption: "Een gestructureerd pad wint het altijd van een stapel willekeurige artikelen.",
          },
        ],
      },
      {
        id: "stage-1-foundations",
        title: "Fase 1 \u2014 Fundament (Weken 1\u20132)",
        blocks: [
          {
            type: "p",
            text: "Week 1 heeft \u00e9\u00e9n doel: begrijpen hoe Google echt werkt. Niet oppervlakkig, maar goed genoeg om crawling, indexering en ranking aan iemand anders uit te kunnen leggen. Dit is belangrijk omdat elke SEO-beslissing die je later neemt door dit mentale model gefilterd wordt. Het verkeerd begrijpen maakt beslissingen willekeurig.",
          },
          {
            type: "list",
            items: [
              "Lees Google's eigen documentatie over hoe zoeken werkt (search.google.com/search/howsearchworks)",
              "Stel Google Search Console in: verifieer de domeinproperty, dien de sitemap in, controleer het dekkingsrapport op crawlfouten",
              "Stel GA4 in met Enhanced Ecommerce ingeschakeld \u2014 volg de stappen in de Analytics-gids op /guides/analytics-tracking",
              "Lees de SEO-basischecklist op /guides/fundamentals en beoordeel je eigen winkel op elk punt",
              "Gebruik de URL-inspectietool in GSC op je homepage en 3 productpagina's \u2014 bevestig dat Google ze kan crawlen en indexeren",
            ],
          },
          {
            type: "tip",
            text: "Deliverable week 2: een beoordeelde kopie van de basischecklist met notities over welke punten je winkel niet haalt. Dit wordt je eerste prioriteitenlijst. Herstel nog niets \u2014 alleen auditeren.",
          },
        ],
      },
      {
        id: "stage-2-research",
        title: "Fase 2 \u2014 Onderzoek (Weken 3\u20134)",
        blocks: [
          {
            type: "p",
            text: "De meeste winkels maken in deze fase dezelfde fout: ze onderzoeken zoekwoorden voor producten die ze willen verkopen in plaats van voor producten waar mensen naar zoeken. Dat is niet altijd hetzelfde. De onderzoeksfase dwingt je om naar echte zoekdata te kijken voordat je een pagina aanraakt.",
          },
          {
            type: "callout",
            title: "Jouw 20 meest waardevolle zoekwoorden",
            text: "Aan het einde van week 4 heb je een geprioriteerde lijst van 20 zoekwoorden nodig. Geen vanity-termen \u2014 maar specifieke product- en categoriezoekopdrachten waarbij een ranking op pagina 1 direct omzet zou genereren. Gebruik tools zoals Ahrefs, Semrush of Google Keyword Planner. Kruisverwijzen met GSC-data om te zien voor welke zoekwoorden je al op positie 11-50 staat.",
          },
          {
            type: "list",
            items: [
              "Breng de volledige productcatalogus in kaart: elke productcategorie heeft minimaal \u00e9\u00e9n primair zoekwoord nodig",
              "Voer een concurrentie-gapanalyse uit: identificeer 3 directe concurrenten en vind de zoekwoorden waarvoor zij ranken maar jij niet \u2014 zie de concurrentieanalysegids op /guides/competitor-analysis",
              "Onderzoek zoekwoorden met koopintentie voor je 10 beste productcategorie\u00ebn (deze hebben doorgaans modifiers: 'kopen', 'beste', 'goedkoop', prijsvergelijkingstermen)",
              "Onderzoek informatieve zoekwoorden voor contentmogelijkheden (kopers doen onderzoek v\u00f3\u00f3r de aankoop \u2014 rankeren voor die artikelen bouwt vertrouwen en links)",
              "Maak een eenvoudige spreadsheet: zoekwoord, maandelijks zoekvolume, huidige positie, doel-URL",
            ],
          },
          {
            type: "tip",
            text: "Target in deze fase geen zoekwoorden met een zoekvolume onder de 50/maand. Focus op de 20 zoekwoorden waarbij een positieverbetering het meest directe omzetimpact zou hebben. Je kunt de lijst later uitbreiden. Lees de volledige zoekwoordenonderzoeksgids op /guides/keyword-research voor het stapsgewijze proces.",
          },
        ],
      },
      {
        id: "stage-3-on-page",
        title: "Fase 3 \u2014 On-Page (Weken 5\u20136)",
        blocks: [
          {
            type: "p",
            text: "Met je 20 doelzoekwoorden in de hand gaan weken 5-6 over ervoor zorgen dat de juiste pagina's geoptimaliseerd zijn voor die zoekwoorden. Dit gaat niet over zoekwoorden in titels proppen \u2014 maar over het maken van elke pagina tot het meest genuinst nuttige resultaat voor zijn doelzoekopdracht.",
          },
          {
            type: "list",
            items: [
              "Controleer de title-tags van alle pagina's die je 20 zoekwoorden targeten: primair zoekwoord dichtbij het begin, onder 60 tekens, merknaam aan het einde",
              "Controleer de metabeschrijvingen: elke beschrijving moet lezen als een nuttige samenvatting, het zoekwoord op een natuurlijke manier bevatten en onder de 155 tekens blijven",
              "Controleer de content van productpagina's: heeft elke productpagina minimaal 200 woorden originele tekst? Generieke fabrikantbeschrijvingen schaden de posities.",
              "Controleer de content van categoriepagina's: Google heeft tekst nodig om te begrijpen waar een categoriepagina over gaat \u2014 een korte inleidende alinea (100-200 woorden) boven het productgrid maakt een meetbaar verschil",
              "Herstel de koppenstructuur: \u00e9\u00e9n H1 per pagina met het primaire zoekwoord, logische H2/H3-hi\u00ebrarchie die subtopics dekt",
            ],
          },
          {
            type: "callout",
            title: "De prioriteitsvolgorde bij on-page correcties",
            text: "Herstel title-tags als eerste \u2014 die hebben de grootste impact per uur werk. Dan metabeschrijvingen. Dan content. Weersta de drang om pagina's te herontwerpen of URL's te wijzigen in deze fase, tenzij ze je actief schaden. Stabiliteit helpt posities. Voer een volledige on-page-audit uit met de checklist op /guides/on-page-audit.",
          },
        ],
      },
      {
        id: "stage-4-technical",
        title: "Fase 4 \u2014 Technisch (Weken 7\u20138)",
        blocks: [
          {
            type: "p",
            text: "Technische SEO is niet glamoureus maar wel fundamenteel. Een trage site, een defecte crawl of problemen met dubbele content zullen je posities begrenzen ongeacht hoe goed je content is. Weken 7-8 gaan over het vinden en herstellen van de technische problemen die je het meest waarschijnlijk tegenhouden.",
          },
          {
            type: "list",
            items: [
              "Voer een volledige crawl uit met Screaming Frog (gratis tot 500 URL's) of Ahrefs Site Audit \u2014 zoek naar 4xx-fouten, omleidingsketens, dubbele title-tags, ontbrekende canonical-tags",
              "Controleer Core Web Vitals in GSC onder Ervaring > Core Web Vitals. LCP onder 2,5 seconden, CLS onder 0,1, INP onder 200 ms",
              "Comprimeer en converteer afbeeldingen naar WebP-formaat \u2014 gebruik op Shopify een app als TinyIMG; op WooCommerce Imagify of ShortPixel",
              "Voeg gestructureerde data toe: Product-schema op alle productpagina's, BreadcrumbList op alle pagina's, Organization op de homepage",
              "Herstel dubbele content: zorg dat canonical-tags verwijzen naar de gewenste versie van elke pagina, met name voor gefilterde/gesorteerde categorie-URL's",
            ],
          },
          {
            type: "tip",
            text: "Gebruik de gratis Google PageSpeed Insights-tool (pagespeed.web.dev) op je homepage, je belangrijkste categoriepagina en je bestverkochte productpagina. Het gedeelte Opportuniteiten vertelt je precies wat je moet herstellen en schat de tijdsbesparing. Volg het volledige technische auditproces beschreven op /guides/technical-analysis.",
          },
        ],
      },
      {
        id: "stage-5-authority",
        title: "Fase 5 \u2014 Autoriteit (Weken 9+)",
        blocks: [
          {
            type: "p",
            text: "Alles v\u00f3\u00f3r deze fase is het minimumvereiste. Als concurrenten meer links hebben van gezaghebbendere sites, zullen ze je bij de meeste competitieve zoekwoorden overtreffen, ook als je on-page en technische SEO beter is. Autoriteitsopbouw is een lang spel \u2014 verwacht geen resultaten in 2 weken. Maar zonder dit plateau je.",
          },
          {
            type: "list",
            items: [
              "Voer de linkgapanalyse uit: zoek de domeinen die naar je 3 topcompetitoren linken maar niet naar jou \u2014 dit zijn je eerste outreachtargets",
              "Maak content die het waard is om naar te linken: datastudies, origineel onderzoek, koopgidsen, vergelijkingspagina's \u2014 geen dunne productbeschrijvingen",
              "Bouw thematische autoriteit op: publiceer een cluster van artikelen rond je kernproductcategorie\u00ebn zodat Google je site ziet als een autoriteit op die onderwerpen \u2014 zie /guides/topical-authority",
              "Digitale PR: benader journalisten en bloggers die jouw niche behandelen met nieuwswaardige invalshoeken (productlanceringen, originele data, trendartikelen)",
              "Links van leveranciers en partners: vaak over het hoofd gezien maar makkelijke winsten \u2014 vraag leveranciers, distributeurs en zakenpartners om naar je winkel te linken",
            ],
          },
          {
            type: "callout",
            title: "Linkbuilding is geen project van \u00e9\u00e9n maand",
            text: "Plan linkbuilding in als een doorlopende activiteit, niet een eenmalige sprint. Zelfs 2-3 nieuwe kwaliteitsbacklinks per maand compound significant over 12 maanden. Houd je aantal verwijzende domeinen maandelijks bij in Ahrefs of GSC. Lees de linkbuildingtactiekengids op /guides/link-building-tactics voor specifieke outreach-aanpakken die werken voor e-commerce.",
          },
        ],
      },
      {
        id: "after-the-course",
        title: "Wat te doen na week 9: de kwartaalse auditcyclus",
        blocks: [
          {
            type: "p",
            text: "De cursus afmaken betekent niet dat je SEO klaar is. Zoekresultaten veranderen. Concurrenten verbeteren. Google werkt zijn algoritme bij. Winkels die duurzame SEO-groei handhaven voeren elk kwartaal een systematische auditcyclus uit. Het kost \u00e9\u00e9n volledige dag, vier keer per jaar.",
          },
          {
            type: "checklist",
            items: [
              "Voer een nieuwe crawl uit met Screaming Frog en vergelijk met het vorige kwartaal \u2014 zoek naar nieuwe 4xx-fouten, nieuwe dubbele content, verspilling van crawlbudget",
              "Haal het GSC-zoekresultatenrapport op voor het volledige kwartaal: welke zoekwoorden zijn verbeterd, welke zijn gedaald? Onderzoek dalingen voordat je algoritme-updates aanneemt.",
              "Exporteer de organische omzet van GA4 voor het kwartaal vs hetzelfde kwartaal vorig jaar \u2014 als die is gedaald, traceer de daling naar specifieke pagina's via het rapport Bestemmingspagina's",
              "Ververs de zoekwoordenlijst: voeg nieuwe zoekwoorden toe uit GSC-vertoningsdata, verwijder zoekwoorden waarbij je pagina 1 hebt bereikt en stabiel bent",
              "Voer de on-page-checklist uit op de 10 belangrijkste pagina's \u2014 dingen verschuiven in de loop van de tijd als teams content bijwerken zonder SEO-review",
              "Controleer Core Web Vitals opnieuw \u2014 een platformupdate, nieuwe app-installatie of regressie in afbeeldingsgrootte kan de paginasnelheid stilletjes schaden",
              "Bekijk het backlinkprofiel: nieuwe toxische links? Verloren links van belangrijke verwijzende domeinen? Pak beide aan.",
            ],
          },
          {
            type: "tip",
            text: "Blokkeer een volledige dag in je agenda op de eerste maandag van elk nieuw kwartaal en bescherm die. Vier audits per jaar is genoeg om de meeste problemen voor te blijven. Continu dagelijks monitoren zonder kwartaalreset leidt tot het missen van patronen. Vervolgens zijn de zoekwoordenonderzoeksgids op /guides/keyword-research en de concurrentieanalysegids op /guides/competitor-analysis de logische volgende stappen om je onderzoeksvaardigheden te verdiepen.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/analytics-tracking",
        category: "E-commerce SEO-basiskennis",
        title: "Analytics & Tracking",
      },
      next: {
        href: "/guides/keyword-research",
        category: "Onderzoek & Idee\u00ebn",
        title: "Zoekwoordenonderzoek",
      },
    },
  },
};
