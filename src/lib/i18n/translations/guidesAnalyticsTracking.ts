import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guideAnalyticsTrackingT: Record<
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
    heading: "Analytics & Tracking",
    intro:
      "You cannot improve what you do not measure. Before running keyword research, fixing title tags, or building links, you need a reliable data foundation. This guide covers the two tools every ecommerce store needs — GA4 and Google Search Console — and how to connect them so your SEO decisions are based on real numbers.",
    readTime: "9 min read",
    sections: [
      {
        id: "ga4-setup",
        title: "Setting up GA4 for ecommerce",
        blocks: [
          {
            type: "p",
            text: "GA4 replaced Universal Analytics in July 2023. If you are still running UA or using an old Shopify GA integration, your data is unreliable. Start fresh: create a GA4 property, install the Google tag via your tag manager or platform settings, and immediately enable Enhanced Ecommerce.",
          },
          {
            type: "callout",
            title: "Enhanced Ecommerce is not on by default",
            text: "In GA4, go to Admin > Data Streams > select your stream > Enhanced Measurement. Toggle on all events. Then separately, in your Shopify or WooCommerce settings, confirm the ecommerce data layer is firing purchase, add_to_cart, and view_item events. Use the GA4 DebugView to verify before trusting any numbers.",
          },
          {
            type: "list",
            items: [
              "Create a GA4 property at analytics.google.com and link it to your store",
              "Set up a purchase conversion goal: Admin > Conversions > New Conversion Event > name it 'purchase'",
              "Enable the Google Signals feature so you get cross-device data (Admin > Data Settings > Google Signals)",
              "Set your data retention to 14 months — the default 2 months means you lose year-over-year comparisons",
              "Filter out internal traffic by adding your office IP under Admin > Data Streams > Configure Tag Settings > Define Internal Traffic",
            ],
          },
          {
            type: "tip",
            text: "If you use Shopify, install the official Google & YouTube channel app — it handles the GA4 integration and passes purchase data automatically. For WooCommerce, the free Woocommerce Google Analytics Integration plugin works, but double-check the purchase event fires on the order confirmation page, not just the checkout page.",
          },
        ],
      },
      {
        id: "search-console-setup",
        title: "Google Search Console: verification and setup",
        blocks: [
          {
            type: "p",
            text: "GSC gives you data GA4 cannot: which search queries your pages appear for, how often people click, and your average position in results. It is free, and there is no legitimate reason not to have it set up on day one.",
          },
          {
            type: "list",
            items: [
              "Go to search.google.com/search-console and add your property",
              "Choose Domain property (not URL prefix) — it covers all subdomains and both http/https automatically",
              "Verify via DNS TXT record if you have hosting access, otherwise use the HTML tag method",
              "Submit your sitemap under Sitemaps > Add sitemap (e.g. yourstore.com/sitemap.xml)",
              "Link GSC to GA4: in GA4 go to Admin > Product Links > Search Console Links",
            ],
          },
          {
            type: "callout",
            title: "Why the GSC + GA4 link matters",
            text: "Once linked, you can see organic search queries inside GA4 under Reports > Acquisition > Search Console. More importantly, you can build custom reports that cross-reference queries with revenue — so you know which keywords are actually making you money, not just driving traffic.",
          },
        ],
      },
      {
        id: "key-metrics",
        title: "The metrics that actually matter for ecommerce SEO",
        blocks: [
          {
            type: "p",
            text: "Most ecommerce stores track too many metrics and act on none of them. Here are the five numbers worth watching regularly. Everything else is noise until you have these under control.",
          },
          {
            type: "list",
            items: [
              "Organic sessions: the raw volume of traffic arriving from Google. Track this weekly in GA4 under Acquisition > Traffic Acquisition, filtered to Organic Search.",
              "Revenue from organic channel: in GA4, go to Monetisation > Ecommerce Purchases and filter by Organic Search session source. This is the number your CEO cares about.",
              "Average position for money keywords: in GSC, use the Search Results report filtered to your 20 most important product and category keywords. Position changes of 2-3 spots on page 1 can shift revenue significantly.",
              "CTR by page: in GSC under Pages, sort by impressions. Pages with high impressions and CTR below 2% have weak title tags or meta descriptions — fix those first.",
              "Pages per organic session: in GA4, this signals content depth. If organic visitors land and immediately leave, your landing pages are not matching search intent. A healthy benchmark for ecommerce category pages is 3-4 pages per session.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80",
            alt: "Analytics dashboard showing ecommerce metrics on a laptop screen",
            caption: "Tracking the right five metrics beats tracking fifty.",
          },
        ],
      },
      {
        id: "quick-wins-gsc",
        title: "Finding quick wins in Google Search Console",
        blocks: [
          {
            type: "p",
            text: "This is one of the most repeatable SEO wins there is. In GSC, go to Search Results and apply these filters: Impressions > 100 and Average Position between 11 and 20. Sort by impressions descending. What you are looking at are pages sitting on page 2 of Google — they already have some ranking authority, and a targeted content improvement often pushes them to page 1 within 4-8 weeks.",
          },
          {
            type: "callout",
            title: "The page 2 keyword method",
            text: "Filter GSC: Impressions > 100, Position 11-20, sort by Impressions descending. For each URL in that list, click through to see which queries are driving those impressions. Then improve the page: add those queries to the copy naturally, strengthen the heading structure, add an FAQ section, and update the title tag to include the most relevant query. Resubmit via the URL Inspection tool.",
          },
          {
            type: "tip",
            text: "Do not try to fix 50 pages at once. Pick the 5 URLs with the highest impressions in that position 11-20 range, spend 2 hours improving each, then wait 4 weeks before judging results. Impatience kills this process.",
          },
          {
            type: "list",
            items: [
              "Filter GSC Search Results: click '+' > Impressions > Greater than > 100",
              "Add second filter: Position > Greater than > 10, and Position < Less than > 21",
              "Sort the table by Impressions descending",
              "Click any URL to see the specific queries driving impressions for that page",
              "Open the URL in another tab and compare your content against the top 3 ranking pages for those queries",
              "Update content, strengthen the title tag, and resubmit in URL Inspection",
            ],
          },
        ],
      },
      {
        id: "reporting-cadence",
        title: "Building a reporting routine that you will actually stick to",
        blocks: [
          {
            type: "p",
            text: "The stores that make consistent SEO progress are the ones that check their numbers on a fixed schedule — not when something feels wrong. Here is a simple cadence that works in practice. It takes about 30 minutes a week and 90 minutes a month.",
          },
          {
            type: "checklist",
            items: [
              "Weekly (every Monday, 15 min): Open GSC Search Results, check total clicks vs previous week. Flag any page that dropped more than 20% in clicks — investigate crawl errors or manual actions first.",
              "Weekly (every Monday, 15 min): Check GA4 Organic Revenue vs previous week. If it dropped, cross-reference with GSC to see if rankings fell or if CTR changed.",
              "Monthly (first Friday, 45 min): Pull the GA4 Organic Revenue report for the month vs same month last year. Export to a spreadsheet and track the trend line.",
              "Monthly (first Friday, 45 min): Run the page 2 keyword filter in GSC. Update the list of target pages. Mark pages that moved from position 11-20 to position 1-10 — those are wins worth documenting.",
            ],
          },
          {
            type: "tip",
            text: "Set up a simple Google Sheet with two tabs: one for weekly GSC metrics (date, clicks, impressions, avg position) and one for monthly GA4 organic revenue. Takes 5 minutes to fill in each time, and after 3 months you will have a trend line that tells a clear story. This is the first thing we ask new clients to share when we start working with them. Read the SEO Fundamentals Checklist at /guides/fundamentals to make sure your technical foundation is solid before drilling into analytics.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/fundamentals",
        category: "Ecommerce SEO Basics",
        title: "SEO Fundamentals Checklist",
      },
      next: {
        href: "/guides/beginner-to-hero",
        category: "Ecommerce SEO Basics",
        title: "Beginner to Hero Course",
      },
    },
  },

  de: {
    badge: "E-Commerce-SEO-Grundlagen",
    heading: "Analytics & Tracking",
    intro:
      "Was nicht gemessen wird, kann nicht verbessert werden. Bevor du Keyword-Recherchen durchf\u00fchrst, Title-Tags anpasst oder Links aufbaust, brauchst du eine solide Datenbasis. Dieser Leitfaden erkl\u00e4rt die zwei Tools, die jeder Online-Shop ben\u00f6tigt \u2014 GA4 und die Google Search Console \u2014 und wie du sie so verbindest, dass deine SEO-Entscheidungen auf echten Zahlen beruhen.",
    readTime: "9 Min. Lesezeit",
    sections: [
      {
        id: "ga4-setup",
        title: "GA4 f\u00fcr E-Commerce einrichten",
        blocks: [
          {
            type: "p",
            text: "GA4 hat Universal Analytics im Juli 2023 abgel\u00f6st. Wenn du noch UA verwendest oder eine alte Shopify-GA-Integration nutzt, sind deine Daten nicht zuverl\u00e4ssig. Starte neu: Erstelle eine GA4-Property, installiere den Google Tag \u00fcber deinen Tag Manager oder die Plattformeinstellungen, und aktiviere sofort Enhanced Ecommerce.",
          },
          {
            type: "callout",
            title: "Enhanced Ecommerce ist nicht standardm\u00e4\u00dfig aktiv",
            text: "In GA4: Admin > Datenstr\u00f6me > deinen Stream ausw\u00e4hlen > Erweiterte Messung. Alle Ereignisse aktivieren. Dann in deinen Shopify- oder WooCommerce-Einstellungen pr\u00fcfen, ob der E-Commerce-Datenschicht korrekt die Ereignisse purchase, add_to_cart und view_item ausgibt. Nutze die GA4-DebugView, um alles zu \u00fcberpr\u00fcfen, bevor du den Zahlen vertraust.",
          },
          {
            type: "list",
            items: [
              "Eine GA4-Property bei analytics.google.com erstellen und mit deinem Shop verbinden",
              "Conversion-Ziel f\u00fcr Kauf einrichten: Admin > Conversions > Neues Conversion-Ereignis > \u2018purchase\u2019 benennen",
              "Google Signals aktivieren f\u00fcr ger\u00e4te\u00fcbergreifende Daten (Admin > Dateneinstellungen > Google Signals)",
              "Datenaufbewahrung auf 14 Monate einstellen \u2014 der Standard von 2 Monaten verhindert Jahresvergleiche",
              "Internen Traffic filtern: B\u00fcro-IP unter Admin > Datenstr\u00f6me > Tag-Einstellungen konfigurieren > Internen Traffic definieren ausschlie\u00dfen",
            ],
          },
          {
            type: "tip",
            text: "F\u00fcr Shopify-Shops: Die offizielle Google & YouTube Channel App \u00fcbernimmt die GA4-Integration und \u00fcbermittelt Kaufdaten automatisch. F\u00fcr WooCommerce funktioniert das kostenlose Plugin \u2018WooCommerce Google Analytics Integration\u2019, aber \u00fcberpr\u00fcfe, ob das purchase-Ereignis auf der Bestellbest\u00e4tigungsseite ausgel\u00f6st wird \u2014 nicht nur auf der Checkout-Seite.",
          },
        ],
      },
      {
        id: "search-console-setup",
        title: "Google Search Console: Verifizierung und Einrichtung",
        blocks: [
          {
            type: "p",
            text: "GSC liefert Daten, die GA4 nicht liefern kann: welche Suchanfragen deine Seiten ausliefern, wie oft geklickt wird und deine durchschnittliche Position in den Ergebnissen. Das Tool ist kostenlos und es gibt keinen Grund, es nicht vom ersten Tag an zu nutzen.",
          },
          {
            type: "list",
            items: [
              "Unter search.google.com/search-console deine Property hinzuf\u00fcgen",
              "Domain-Property w\u00e4hlen (nicht URL-Pr\u00e4fix) \u2014 sie deckt automatisch alle Subdomains und http/https ab",
              "Verifizierung per DNS-TXT-Eintrag (empfohlen) oder HTML-Tag-Methode",
              "Sitemap einreichen unter Sitemaps > Sitemap hinzuf\u00fcgen (z.\u00a0B. deinshop.de/sitemap.xml)",
              "GSC mit GA4 verkn\u00fcpfen: in GA4 unter Admin > Produktverkn\u00fcpfungen > Search Console-Verkn\u00fcpfungen",
            ],
          },
          {
            type: "callout",
            title: "Warum die GSC-GA4-Verkn\u00fcpfung wichtig ist",
            text: "Nach der Verkn\u00fcpfung siehst du organische Suchanfragen direkt in GA4 unter Berichte > Akquisition > Search Console. Noch wichtiger: Du kannst benutzerdefinierte Berichte erstellen, die Suchanfragen mit Umsatz verkn\u00fcpfen \u2014 so erkennst du, welche Keywords wirklich Geld einbringen.",
          },
        ],
      },
      {
        id: "key-metrics",
        title: "Die Kennzahlen, die f\u00fcr E-Commerce-SEO wirklich z\u00e4hlen",
        blocks: [
          {
            type: "p",
            text: "Die meisten Online-Shops tracken zu viele Kennzahlen und handeln bei keiner davon. Hier sind die f\u00fcnf Zahlen, die es regelm\u00e4\u00dfig zu beobachten lohnt. Alles andere ist Rauschen, solange diese nicht im Griff sind.",
          },
          {
            type: "list",
            items: [
              "Organische Sitzungen: das Rohvolumen des Traffics aus Google. W\u00f6chentlich in GA4 unter Akquisition > Traffic-Akquisition verfolgen, gefiltert nach Organische Suche.",
              "Umsatz aus organischem Kanal: in GA4 unter Monetarisierung > E-Commerce-K\u00e4ufe, gefiltert nach Sitzungsquelle Organische Suche. Das ist die Zahl, die Z\u00e4hlt.",
              "Durchschnittliche Position f\u00fcr wichtige Keywords: in GSC im Bericht Suchergebnisse, gefiltert auf deine 20 wichtigsten Produkt- und Kategorie-Keywords. Positionsver\u00e4nderungen von 2-3 Pl\u00e4tzen auf Seite 1 k\u00f6nnen den Umsatz spsp\u00fcrbar beeinflussen.",
              "CTR nach Seite: in GSC unter Seiten, nach Impressionen sortiert. Seiten mit hohen Impressionen und CTR unter 2\u00a0% haben schwache Title-Tags oder Meta-Beschreibungen \u2014 dort zuerst ansetzen.",
              "Seiten pro organischer Sitzung: in GA4, als Signal f\u00fcr die Inhaltstiefe. Wenn organische Besucher sofort abspringen, passen deine Landingpages nicht zur Suchabsicht. Ein realistischer Richtwert f\u00fcr E-Commerce-Kategorieseiten liegt bei 3-4 Seiten pro Sitzung.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80",
            alt: "Analytics-Dashboard mit E-Commerce-Kennzahlen auf einem Laptop-Bildschirm",
            caption: "F\u00fcnf Kennzahlen konsequent zu verfolgen ist besser als f\u00fcnfzig oberfl\u00e4chlich zu beobachten.",
          },
        ],
      },
      {
        id: "quick-wins-gsc",
        title: "Schnelle Gewinne in der Google Search Console finden",
        blocks: [
          {
            type: "p",
            text: "Das ist einer der zuverl\u00e4ssigsten SEO-Hebel \u00fcberhaupt. In GSC unter Suchergebnisse folgende Filter setzen: Impressionen > 100 und Durchschnittliche Position zwischen 11 und 20. Nach Impressionen absteigend sortieren. Diese Seiten stehen auf Seite 2 von Google \u2014 sie haben bereits etwas Rankingautori\u00e4t, und eine gezielte Inhaltsverbesserung schiebt sie innerhalb von 4-8 Wochen oft auf Seite 1.",
          },
          {
            type: "callout",
            title: "Die Seite-2-Keyword-Methode",
            text: "GSC filtern: Impressionen > 100, Position 11-20, nach Impressionen absteigend sortieren. F\u00fcr jede URL in dieser Liste klicken, um die treibenden Suchanfragen zu sehen. Dann die Seite verbessern: diese Begriffe nat\u00fcrlich in den Text einarbeiten, Struktur der \u00dcberschriften st\u00e4rken, einen FAQ-Bereich erg\u00e4nzen und den Title-Tag um die relevanteste Suchanfrage erg\u00e4nzen. Danach \u00fcber das URL-Inspektionstool neu einreichen.",
          },
          {
            type: "tip",
            text: "Nicht 50 Seiten gleichzeitig angehen. Die 5 URLs mit den h\u00f6chsten Impressionen im Positionsbereich 11-20 ausw\u00e4hlen, jeweils etwa 2 Stunden verbessern, dann 4 Wochen warten, bevor Ergebnisse bewertet werden. Ungeduld ruiniert diesen Prozess.",
          },
          {
            type: "list",
            items: [
              "In GSC Suchergebnisse filtern: '+' klicken > Impressionen > Gr\u00f6\u00dfer als > 100",
              "Zweiten Filter hinzuf\u00fcgen: Position > Gr\u00f6\u00dfer als > 10 und Position < Kleiner als > 21",
              "Tabelle nach Impressionen absteigend sortieren",
              "Auf eine URL klicken, um die spezifischen Suchanfragen f\u00fcr diese Seite zu sehen",
              "Die URL in einem anderen Tab \u00f6ffnen und den eigenen Inhalt mit den Top-3-Ergebnissen f\u00fcr diese Suchanfragen vergleichen",
              "Inhalt aktualisieren, Title-Tag verbessern, \u00fcber URL-Inspektion neu einreichen",
            ],
          },
        ],
      },
      {
        id: "reporting-cadence",
        title: "Eine Reporting-Routine aufbauen, die wirklich funktioniert",
        blocks: [
          {
            type: "p",
            text: "Die Shops, die konstante SEO-Fortschritte machen, schauen ihre Zahlen nach einem festen Rhythmus an \u2014 nicht erst, wenn etwas falsch l\u00e4uft. Hier ist ein einfacher Rhythmus, der in der Praxis funktioniert. Er kostet etwa 30 Minuten pro Woche und 90 Minuten pro Monat.",
          },
          {
            type: "checklist",
            items: [
              "W\u00f6chentlich (jeden Montag, 15 Min.): GSC Suchergebnisse \u00f6ffnen, Gesamtklicks mit Vorwoche vergleichen. Jede Seite markieren, die mehr als 20\u00a0% Klicks verloren hat \u2014 zuerst auf Crawling-Fehler oder manuelle Ma\u00dfnahmen pr\u00fcfen.",
              "W\u00f6chentlich (jeden Montag, 15 Min.): GA4 Umsatz aus organischem Kanal mit Vorwoche vergleichen. Bei R\u00fcckgang mit GSC gegenpr\u00fcfen, ob Rankings gefallen oder CTR gesunken ist.",
              "Monatlich (erster Freitag, 45 Min.): GA4-Bericht f\u00fcr organischen Umsatz des Monats vs. Vorjahreszeitraum exportieren. In ein Spreadsheet \u00fcbertragen und den Trend verfolgen.",
              "Monatlich (erster Freitag, 45 Min.): Filter f\u00fcr Seite-2-Keywords in GSC ausf\u00fchren. Liste der Zielseiten aktualisieren. Seiten markieren, die von Position 11-20 auf 1-10 gewechselt sind \u2014 das sind dokumentationsw\u00fcrdige Erfolge.",
            ],
          },
          {
            type: "tip",
            text: "Ein einfaches Google Sheet mit zwei Tabs anlegen: eines f\u00fcr w\u00f6chentliche GSC-Daten (Datum, Klicks, Impressionen, Durchschnittsposition) und eines f\u00fcr den monatlichen organischen Umsatz aus GA4. Jedes Mal nur 5 Minuten zum Ausf\u00fcllen \u2014 nach 3 Monaten hat man eine Trendlinie, die eine klare Geschichte erz\u00e4hlt. Die SEO-Grundlagen-Checkliste unter /guides/fundamentals ist der richtige Ausgangspunkt, um sicherzustellen, dass das technische Fundament stimmt, bevor man tief in Analytics einsteigt.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/fundamentals",
        category: "E-Commerce-SEO-Grundlagen",
        title: "SEO-Grundlagen-Checkliste",
      },
      next: {
        href: "/guides/beginner-to-hero",
        category: "E-Commerce-SEO-Grundlagen",
        title: "Von Null zum Profi",
      },
    },
  },

  fr: {
    badge: "Bases du SEO e-commerce",
    heading: "Analytics & Tracking",
    intro:
      "On ne peut pas am\u00e9liorer ce qu\u2019on ne mesure pas. Avant de faire de la recherche de mots-cl\u00e9s, d\u2019optimiser des balises title ou de faire du netlinking, il vous faut une base de donn\u00e9es fiable. Ce guide couvre les deux outils indispensables pour toute boutique en ligne \u2014 GA4 et Google Search Console \u2014 et comment les connecter pour que vos d\u00e9cisions SEO reposent sur des chiffres r\u00e9els.",
    readTime: "9 min de lecture",
    sections: [
      {
        id: "ga4-setup",
        title: "Configurer GA4 pour l\u2019e-commerce",
        blocks: [
          {
            type: "p",
            text: "GA4 a remplac\u00e9 Universal Analytics en juillet 2023. Si vous utilisez encore UA ou une ancienne int\u00e9gration GA sur Shopify, vos donn\u00e9es sont peu fiables. Repartez de z\u00e9ro : cr\u00e9ez une propri\u00e9t\u00e9 GA4, installez le tag Google via votre gestionnaire de balises ou les param\u00e8tres de votre plateforme, puis activez imm\u00e9diatement l\u2019e-commerce am\u00e9lior\u00e9.",
          },
          {
            type: "callout",
            title: "L\u2019e-commerce am\u00e9lior\u00e9 n\u2019est pas activ\u00e9 par d\u00e9faut",
            text: "Dans GA4 : Admin > Flux de donn\u00e9es > s\u00e9lectionnez votre flux > Mesure am\u00e9lior\u00e9e. Activez tous les \u00e9v\u00e9nements. Ensuite, dans vos param\u00e8tres Shopify ou WooCommerce, v\u00e9rifiez que la couche de donn\u00e9es e-commerce envoie bien les \u00e9v\u00e9nements purchase, add_to_cart et view_item. Utilisez la DebugView de GA4 pour v\u00e9rifier avant de faire confiance aux chiffres.",
          },
          {
            type: "list",
            items: [
              "Cr\u00e9er une propri\u00e9t\u00e9 GA4 sur analytics.google.com et la lier \u00e0 votre boutique",
              "Configurer un objectif de conversion achat : Admin > Conversions > Nouvel \u00e9v\u00e9nement de conversion > le nommer \u2018purchase\u2019",
              "Activer Google Signals pour les donn\u00e9es multi-appareils (Admin > Param\u00e8tres des donn\u00e9es > Google Signals)",
              "R\u00e9gler la conservation des donn\u00e9es sur 14 mois \u2014 le param\u00e8tre par d\u00e9faut de 2 mois emp\u00eache les comparaisons ann\u00e9e sur ann\u00e9e",
              "Exclure le trafic interne : ajouter l\u2019IP de votre bureau sous Admin > Flux de donn\u00e9es > Configurer les param\u00e8tres du tag > D\u00e9finir le trafic interne",
            ],
          },
          {
            type: "tip",
            text: "Sur Shopify, installez l\u2019application officielle Google & YouTube \u2014 elle g\u00e8re l\u2019int\u00e9gration GA4 et transmet les donn\u00e9es d\u2019achat automatiquement. Sur WooCommerce, le plugin gratuit WooCommerce Google Analytics Integration fonctionne bien, mais v\u00e9rifiez que l\u2019\u00e9v\u00e9nement purchase se d\u00e9clenche sur la page de confirmation de commande, pas seulement sur la page de paiement.",
          },
        ],
      },
      {
        id: "search-console-setup",
        title: "Google Search Console : v\u00e9rification et configuration",
        blocks: [
          {
            type: "p",
            text: "La GSC fournit des donn\u00e9es que GA4 ne peut pas donner : quelles requ\u00eates font appara\u00eetre vos pages, combien de fois les internautes cliquent, et votre position moyenne dans les r\u00e9sultats. C\u2019est gratuit, et il n\u2019y a aucune bonne raison de ne pas l\u2019avoir configur\u00e9 d\u00e8s le premier jour.",
          },
          {
            type: "list",
            items: [
              "Aller sur search.google.com/search-console et ajouter votre propri\u00e9t\u00e9",
              "Choisir la propri\u00e9t\u00e9 de type Domaine (pas Pr\u00e9fixe d\u2019URL) \u2014 elle couvre automatiquement tous les sous-domaines et http/https",
              "V\u00e9rifier via un enregistrement DNS TXT si vous avez acc\u00e8s \u00e0 l\u2019h\u00e9bergement, sinon utiliser la m\u00e9thode par balise HTML",
              "Soumettre votre sitemap sous Sitemaps > Ajouter un sitemap (ex. : votreboutique.fr/sitemap.xml)",
              "Lier GSC \u00e0 GA4 : dans GA4, Admin > Liens vers les produits > Liens Search Console",
            ],
          },
          {
            type: "callout",
            title: "Pourquoi le lien GSC + GA4 est important",
            text: "Une fois li\u00e9s, vous voyez les requ\u00eates organiques directement dans GA4 sous Rapports > Acquisition > Search Console. Mieux encore, vous pouvez cr\u00e9er des rapports personnalis\u00e9s qui croisent les requ\u00eates avec le chiffre d\u2019affaires \u2014 pour savoir quels mots-cl\u00e9s vous rapportent r\u00e9ellement de l\u2019argent, pas seulement du trafic.",
          },
        ],
      },
      {
        id: "key-metrics",
        title: "Les indicateurs qui comptent vraiment pour le SEO e-commerce",
        blocks: [
          {
            type: "p",
            text: "La plupart des boutiques en ligne suivent trop d\u2019indicateurs et n\u2019agissent sur aucun. Voici les cinq chiffres qui m\u00e9ritent une surveillance r\u00e9guli\u00e8re. Tout le reste est du bruit tant que ceux-ci ne sont pas ma\u00eetris\u00e9s.",
          },
          {
            type: "list",
            items: [
              "Sessions organiques : le volume brut de trafic provenant de Google. \u00e0 suivre chaque semaine dans GA4 sous Acquisition > Acquisition de trafic, filtr\u00e9 sur Recherche organique.",
              "Chiffre d\u2019affaires du canal organique : dans GA4 sous Mon\u00e9tisation > Achats e-commerce, filtr\u00e9 par source de session Recherche organique. C\u2019est le chiffre qui int\u00e9resse votre direction.",
              "Position moyenne pour les mots-cl\u00e9s importants : dans GSC, rapport R\u00e9sultats de recherche filtr\u00e9 sur vos 20 mots-cl\u00e9s produit et cat\u00e9gorie les plus importants. Des variations de 2-3 positions en page 1 peuvent avoir un impact significatif sur le CA.",
              "CTR par page : dans GSC sous Pages, tri\u00e9 par impressions. Les pages avec beaucoup d\u2019impressions et un CTR inf\u00e9rieur \u00e0 2\u00a0% ont des balises title ou des meta descriptions faibles \u2014 commencez par l\u00e0.",
              "Pages par session organique : dans GA4, cet indicateur r\u00e9v\u00e8le la profondeur de l\u2019engagement. Si les visiteurs organiques partent imm\u00e9diatement, vos pages de destination ne correspondent pas \u00e0 l\u2019intention de recherche. Un bon rep\u00e8re pour les pages de cat\u00e9gorie e-commerce est 3-4 pages par session.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80",
            alt: "Tableau de bord analytique affichant des indicateurs e-commerce sur un \u00e9cran d\u2019ordinateur portable",
            caption: "Suivre cinq indicateurs avec rigueur vaut mieux que survoler cinquante.",
          },
        ],
      },
      {
        id: "quick-wins-gsc",
        title: "Trouver des gains rapides dans Google Search Console",
        blocks: [
          {
            type: "p",
            text: "C\u2019est l\u2019une des techniques SEO les plus reproductibles. Dans GSC, allez dans R\u00e9sultats de recherche et appliquez ces filtres : Impressions > 100 et Position moyenne entre 11 et 20. Triez par impressions d\u00e9croissantes. Ce sont des pages en page 2 de Google \u2014 elles ont d\u00e9j\u00e0 une certaine autorit\u00e9 de classement, et une am\u00e9lioration de contenu cibl\u00e9e les pousse souvent en page 1 en 4 \u00e0 8 semaines.",
          },
          {
            type: "callout",
            title: "La m\u00e9thode des mots-cl\u00e9s de page 2",
            text: "Filtres GSC : Impressions > 100, Position 11-20, tri par impressions d\u00e9croissantes. Pour chaque URL de la liste, cliquer pour voir les requ\u00eates qui g\u00e9n\u00e8rent ces impressions. Puis am\u00e9liorer la page : int\u00e9grer naturellement ces requ\u00eates dans le texte, renforcer la structure des titres, ajouter une section FAQ, mettre \u00e0 jour la balise title avec la requ\u00eate la plus pertinente. Resoumettre via l\u2019outil Inspection d\u2019URL.",
          },
          {
            type: "tip",
            text: "Ne cherchez pas \u00e0 corriger 50 pages en m\u00eame temps. S\u00e9lectionnez les 5 URLs avec le plus d\u2019impressions dans la tranche 11-20, consacrez environ 2 heures \u00e0 l\u2019am\u00e9lioration de chacune, puis attendez 4 semaines avant d\u2019\u00e9valuer les r\u00e9sultats. L\u2019impatience tue ce processus.",
          },
          {
            type: "list",
            items: [
              "Dans GSC R\u00e9sultats de recherche : cliquer sur \u2018+\u2019 > Impressions > Sup\u00e9rieur \u00e0 > 100",
              "Ajouter un second filtre : Position > Sup\u00e9rieur \u00e0 > 10, et Position < Inf\u00e9rieur \u00e0 > 21",
              "Trier le tableau par impressions d\u00e9croissantes",
              "Cliquer sur une URL pour voir les requ\u00eates sp\u00e9cifiques qui g\u00e9n\u00e8rent des impressions pour cette page",
              "Ouvrir l\u2019URL dans un autre onglet et comparer votre contenu avec les 3 premiers r\u00e9sultats pour ces requ\u00eates",
              "Mettre \u00e0 jour le contenu, renforcer la balise title, resoumettre via l\u2019Inspection d\u2019URL",
            ],
          },
        ],
      },
      {
        id: "reporting-cadence",
        title: "Construire une routine de reporting \u00e0 laquelle vous tiendrez vraiment",
        blocks: [
          {
            type: "p",
            text: "Les boutiques qui progressent en SEO de fa\u00e7on r\u00e9guli\u00e8re consultent leurs chiffres selon un calendrier fixe \u2014 pas seulement quand quelque chose semble aller mal. Voici une routine simple qui fonctionne en pratique. Elle prend environ 30 minutes par semaine et 90 minutes par mois.",
          },
          {
            type: "checklist",
            items: [
              "Hebdomadaire (chaque lundi, 15 min) : ouvrir GSC R\u00e9sultats de recherche, comparer les clics totaux \u00e0 la semaine pr\u00e9c\u00e9dente. Signaler toute page ayant perdu plus de 20\u00a0% de clics \u2014 v\u00e9rifier d\u2019abord les erreurs d\u2019exploration ou les actions manuelles.",
              "Hebdomadaire (chaque lundi, 15 min) : comparer le CA organique GA4 \u00e0 la semaine pr\u00e9c\u00e9dente. En cas de baisse, croiser avec GSC pour voir si les positions ont chut\u00e9 ou si le CTR a diminu\u00e9.",
              "Mensuel (premier vendredi, 45 min) : exporter le rapport CA organique GA4 du mois vs m\u00eame mois l\u2019ann\u00e9e derni\u00e8re. Copier dans un tableur et suivre la tendance.",
              "Mensuel (premier vendredi, 45 min) : ex\u00e9cuter le filtre mots-cl\u00e9s page 2 dans GSC. Mettre \u00e0 jour la liste des pages cibles. Signaler les pages pass\u00e9es de la position 11-20 \u00e0 la position 1-10 \u2014 ce sont des succ\u00e8s qui m\u00e9ritent d\u2019\u00eatre document\u00e9s.",
            ],
          },
          {
            type: "tip",
            text: "Cr\u00e9ez un Google Sheet simple avec deux onglets : un pour les m\u00e9triques GSC hebdomadaires (date, clics, impressions, position moyenne) et un pour le CA organique mensuel GA4. Cinq minutes \u00e0 remplir \u00e0 chaque fois, et au bout de 3 mois vous aurez une courbe de tendance qui raconte une histoire claire. Consultez la checklist des fondamentaux SEO sur /guides/fundamentals pour vous assurer que votre base technique est solide avant de plonger dans l\u2019analytique.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/fundamentals",
        category: "Bases du SEO e-commerce",
        title: "Checklist des fondamentaux SEO",
      },
      next: {
        href: "/guides/beginner-to-hero",
        category: "Bases du SEO e-commerce",
        title: "De d\u00e9butant \u00e0 expert",
      },
    },
  },

  es: {
    badge: "Fundamentos de SEO e-commerce",
    heading: "Analytics y seguimiento",
    intro:
      "No se puede mejorar lo que no se mide. Antes de hacer investigaci\u00f3n de palabras clave, ajustar etiquetas de t\u00edtulo o construir enlaces, necesitas una base de datos fiable. Esta gu\u00eda cubre las dos herramientas que toda tienda online necesita \u2014 GA4 y Google Search Console \u2014 y c\u00f3mo conectarlas para que tus decisiones de SEO se basen en datos reales.",
    readTime: "9 min de lectura",
    sections: [
      {
        id: "ga4-setup",
        title: "Configurar GA4 para e-commerce",
        blocks: [
          {
            type: "p",
            text: "GA4 sustituy\u00f3 a Universal Analytics en julio de 2023. Si a\u00fan usas UA o una integraci\u00f3n de GA antigua en Shopify, tus datos no son fiables. Empieza desde cero: crea una propiedad GA4, instala el tag de Google a trav\u00e9s de tu gestor de etiquetas o la configuraci\u00f3n de la plataforma, y activa inmediatamente el e-commerce mejorado.",
          },
          {
            type: "callout",
            title: "El e-commerce mejorado no se activa por defecto",
            text: "En GA4: Admin > Flujos de datos > selecciona tu flujo > Medici\u00f3n mejorada. Activa todos los eventos. Luego, en la configuraci\u00f3n de Shopify o WooCommerce, confirma que la capa de datos de e-commerce est\u00e9 enviando los eventos purchase, add_to_cart y view_item. Usa la DebugView de GA4 para verificarlo antes de confiar en ning\u00fan dato.",
          },
          {
            type: "list",
            items: [
              "Crear una propiedad GA4 en analytics.google.com y vincularla a tu tienda",
              "Configurar un objetivo de conversi\u00f3n de compra: Admin > Conversiones > Nuevo evento de conversi\u00f3n > nombrarlo \u2018purchase\u2019",
              "Activar Google Signals para datos multidispositivo (Admin > Configuraci\u00f3n de datos > Google Signals)",
              "Ajustar la retenci\u00f3n de datos a 14 meses \u2014 el valor predeterminado de 2 meses impide comparaciones interanuales",
              "Filtrar el tr\u00e1fico interno: a\u00f1ade la IP de tu oficina en Admin > Flujos de datos > Configurar ajustes de etiqueta > Definir tr\u00e1fico interno",
            ],
          },
          {
            type: "tip",
            text: "En Shopify, instala la aplicaci\u00f3n oficial de Google & YouTube \u2014 gestiona la integraci\u00f3n de GA4 y env\u00eda los datos de compra autom\u00e1ticamente. En WooCommerce, el plugin gratuito WooCommerce Google Analytics Integration funciona bien, pero comprueba que el evento purchase se dispare en la p\u00e1gina de confirmaci\u00f3n del pedido, no solo en la p\u00e1gina de pago.",
          },
        ],
      },
      {
        id: "search-console-setup",
        title: "Google Search Console: verificaci\u00f3n y configuraci\u00f3n",
        blocks: [
          {
            type: "p",
            text: "GSC proporciona datos que GA4 no puede dar: qu\u00e9 consultas de b\u00fasqueda muestran tus p\u00e1ginas, cu\u00e1ntas veces hacen clic los usuarios y tu posici\u00f3n media en los resultados. Es gratuita y no hay ninguna raz\u00f3n v\u00e1lida para no tenerla configurada desde el primer d\u00eda.",
          },
          {
            type: "list",
            items: [
              "Ir a search.google.com/search-console y a\u00f1adir tu propiedad",
              "Elegir la propiedad de tipo Dominio (no Prefijo de URL) \u2014 cubre autom\u00e1ticamente todos los subdominios y http/https",
              "Verificar mediante un registro DNS TXT si tienes acceso al alojamiento, o usar el m\u00e9todo de etiqueta HTML",
              "Enviar tu sitemap en Sitemaps > A\u00f1adir sitemap (ej.: tutienda.com/sitemap.xml)",
              "Vincular GSC a GA4: en GA4, Admin > Vinculaci\u00f3n de productos > V\u00ednculos de Search Console",
            ],
          },
          {
            type: "callout",
            title: "Por qu\u00e9 importa el v\u00ednculo GSC + GA4",
            text: "Una vez vinculados, puedes ver las consultas de b\u00fasqueda org\u00e1nica directamente en GA4 en Informes > Adquisici\u00f3n > Search Console. Y lo m\u00e1s importante: puedes crear informes personalizados que cruzan consultas con ingresos, para saber qu\u00e9 palabras clave te generan dinero de verdad, no solo tr\u00e1fico.",
          },
        ],
      },
      {
        id: "key-metrics",
        title: "Las m\u00e9tricas que de verdad importan para el SEO e-commerce",
        blocks: [
          {
            type: "p",
            text: "La mayor\u00eda de las tiendas online rastrean demasiadas m\u00e9tricas y no act\u00faan sobre ninguna. Aqu\u00ed est\u00e1n los cinco n\u00fameros que merece la pena vigilar de forma regular. Todo lo dem\u00e1s es ruido hasta que estos est\u00e9n bajo control.",
          },
          {
            type: "list",
            items: [
              "Sesiones org\u00e1nicas: el volumen bruto de tr\u00e1fico procedente de Google. Segu\u00ednlo semanalmente en GA4 bajo Adquisici\u00f3n > Adquisici\u00f3n de tr\u00e1fico, filtrado por B\u00fasqueda org\u00e1nica.",
              "Ingresos del canal org\u00e1nico: en GA4 bajo Monetizaci\u00f3n > Compras de e-commerce, filtrado por fuente de sesi\u00f3n B\u00fasqueda org\u00e1nica. Este es el n\u00famero que le importa a tu direcci\u00f3n.",
              "Posici\u00f3n media para palabras clave importantes: en GSC, en el informe de Resultados de b\u00fasqueda filtrado por tus 20 palabras clave de producto y categor\u00eda m\u00e1s importantes. Cambios de 2-3 posiciones en la p\u00e1gina 1 pueden afectar significativamente los ingresos.",
              "CTR por p\u00e1gina: en GSC bajo P\u00e1ginas, ordenado por impresiones. Las p\u00e1ginas con muchas impresiones y CTR inferior al 2\u00a0% tienen etiquetas de t\u00edtulo o meta descripciones d\u00e9biles \u2014 empieza por ah\u00ed.",
              "P\u00e1ginas por sesi\u00f3n org\u00e1nica: en GA4, esta m\u00e9trica indica la profundidad del contenido. Si los visitantes org\u00e1nicos se van inmediatamente, tus p\u00e1ginas de destino no coinciden con la intenci\u00f3n de b\u00fasqueda. Un buen punto de referencia para p\u00e1ginas de categor\u00eda e-commerce es 3-4 p\u00e1ginas por sesi\u00f3n.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80",
            alt: "Panel de analytics con m\u00e9tricas de e-commerce en la pantalla de un port\u00e1til",
            caption: "Hacer seguimiento riguroso de cinco m\u00e9tricas es mejor que vigilar cincuenta superficialmente.",
          },
        ],
      },
      {
        id: "quick-wins-gsc",
        title: "C\u00f3mo encontrar ganancias r\u00e1pidas en Google Search Console",
        blocks: [
          {
            type: "p",
            text: "Esta es una de las t\u00e9cnicas SEO m\u00e1s repetibles que existen. En GSC, ve a Resultados de b\u00fasqueda y aplica estos filtros: Impresiones > 100 y Posici\u00f3n media entre 11 y 20. Ordena por impresiones descendente. Lo que ves son p\u00e1ginas en la segunda p\u00e1gina de Google \u2014 ya tienen cierta autoridad de clasificaci\u00f3n, y una mejora de contenido concreta a menudo las empuja a la p\u00e1gina 1 en 4-8 semanas.",
          },
          {
            type: "callout",
            title: "El m\u00e9todo de las palabras clave de la p\u00e1gina 2",
            text: "Filtros en GSC: Impresiones > 100, Posici\u00f3n 11-20, ordenar por Impresiones descendente. Para cada URL de la lista, haz clic para ver qu\u00e9 consultas generan esas impresiones. Luego mejora la p\u00e1gina: incorpora esas consultas de forma natural en el texto, refuerza la estructura de encabezados, a\u00f1ade una secci\u00f3n de preguntas frecuentes y actualiza la etiqueta de t\u00edtulo con la consulta m\u00e1s relevante. Vuelve a enviar mediante la herramienta de Inspecci\u00f3n de URL.",
          },
          {
            type: "tip",
            text: "No intentes arreglar 50 p\u00e1ginas a la vez. Selecciona las 5 URLs con m\u00e1s impresiones en el rango de posici\u00f3n 11-20, dedica unas 2 horas a mejorar cada una y luego espera 4 semanas antes de evaluar los resultados. La impaciencia arruina este proceso.",
          },
          {
            type: "list",
            items: [
              "En GSC Resultados de b\u00fasqueda: clic en \u2018+\u2019 > Impresiones > Mayor que > 100",
              "A\u00f1adir segundo filtro: Posici\u00f3n > Mayor que > 10, y Posici\u00f3n < Menor que > 21",
              "Ordenar la tabla por impresiones descendente",
              "Hacer clic en cualquier URL para ver las consultas espec\u00edficas que generan impresiones en esa p\u00e1gina",
              "Abrir la URL en otra pesta\u00f1a y comparar tu contenido con los 3 primeros resultados para esas consultas",
              "Actualizar el contenido, mejorar la etiqueta de t\u00edtulo y volver a enviar mediante Inspecci\u00f3n de URL",
            ],
          },
        ],
      },
      {
        id: "reporting-cadence",
        title: "C\u00f3mo construir una rutina de reporting que realmente funcione",
        blocks: [
          {
            type: "p",
            text: "Las tiendas que progresan de forma constante en SEO son las que revisan sus n\u00fameros con una frecuencia fija \u2014 no solo cuando algo parece ir mal. Aqu\u00ed hay una rutina sencilla que funciona en la pr\u00e1ctica. Requiere unos 30 minutos a la semana y 90 minutos al mes.",
          },
          {
            type: "checklist",
            items: [
              "Semanal (cada lunes, 15 min): abrir GSC Resultados de b\u00fasqueda, comparar los clics totales con la semana anterior. Marcar cualquier p\u00e1gina que haya perdido m\u00e1s del 20\u00a0% de clics \u2014 investigar primero errores de rastreo o acciones manuales.",
              "Semanal (cada lunes, 15 min): comparar los ingresos org\u00e1nicos de GA4 con la semana anterior. Si han bajado, cruzar con GSC para ver si han ca\u00eddo las posiciones o ha disminuido el CTR.",
              "Mensual (primer viernes, 45 min): exportar el informe de ingresos org\u00e1nicos de GA4 del mes vs el mismo mes del a\u00f1o anterior. Copiar a una hoja de c\u00e1lculo y seguir la tendencia.",
              "Mensual (primer viernes, 45 min): ejecutar el filtro de palabras clave de p\u00e1gina 2 en GSC. Actualizar la lista de p\u00e1ginas objetivo. Marcar las p\u00e1ginas que hayan pasado de la posici\u00f3n 11-20 a la 1-10 \u2014 son \u00e9xitos que vale la pena documentar.",
            ],
          },
          {
            type: "tip",
            text: "Crea una hoja de c\u00e1lculo de Google sencilla con dos pesta\u00f1as: una para las m\u00e9tricas semanales de GSC (fecha, clics, impresiones, posici\u00f3n media) y otra para los ingresos org\u00e1nicos mensuales de GA4. Solo 5 minutos para rellenar cada vez, y despu\u00e9s de 3 meses tendr\u00e1s una l\u00ednea de tendencia que cuenta una historia clara. Consulta el checklist de fundamentos SEO en /guides/fundamentals para asegurarte de que tu base t\u00e9cnica es s\u00f3lida antes de profundizar en analytics.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/fundamentals",
        category: "Fundamentos de SEO e-commerce",
        title: "Checklist de fundamentos SEO",
      },
      next: {
        href: "/guides/beginner-to-hero",
        category: "Fundamentos de SEO e-commerce",
        title: "De principiante a experto",
      },
    },
  },

  it: {
    badge: "Basi della SEO e-commerce",
    heading: "Analytics e tracciamento",
    intro:
      "Non si pu\u00f2 migliorare ci\u00f2 che non si misura. Prima di fare ricerca di keyword, correggere i tag title o fare link building, serve una base dati affidabile. Questa guida copre i due strumenti indispensabili per ogni negozio online \u2014 GA4 e Google Search Console \u2014 e come collegarli perch\u00e9 le tue decisioni SEO si basino su numeri reali.",
    readTime: "9 min di lettura",
    sections: [
      {
        id: "ga4-setup",
        title: "Configurare GA4 per l\u2019e-commerce",
        blocks: [
          {
            type: "p",
            text: "GA4 ha sostituito Universal Analytics nel luglio 2023. Se usi ancora UA o una vecchia integrazione GA su Shopify, i tuoi dati non sono affidabili. Riparti da zero: crea una propriet\u00e0 GA4, installa il tag Google tramite il tuo tag manager o le impostazioni della piattaforma, e attiva subito l\u2019e-commerce avanzato.",
          },
          {
            type: "callout",
            title: "L\u2019e-commerce avanzato non \u00e8 attivo per impostazione predefinita",
            text: "In GA4: Admin > Stream di dati > seleziona il tuo stream > Misurazione avanzata. Attiva tutti gli eventi. Poi, nelle impostazioni di Shopify o WooCommerce, verifica che il data layer e-commerce stia inviando correttamente gli eventi purchase, add_to_cart e view_item. Usa la DebugView di GA4 per controllare tutto prima di fidarti dei dati.",
          },
          {
            type: "list",
            items: [
              "Creare una propriet\u00e0 GA4 su analytics.google.com e collegarla al tuo negozio",
              "Configurare un obiettivo di conversione acquisto: Admin > Conversioni > Nuovo evento di conversione > nominarlo \u2018purchase\u2019",
              "Attivare Google Signals per i dati multi-dispositivo (Admin > Impostazioni dati > Google Signals)",
              "Impostare la conservazione dei dati a 14 mesi \u2014 il valore predefinito di 2 mesi impedisce i confronti anno su anno",
              "Filtrare il traffico interno: aggiungere l\u2019IP dell\u2019ufficio in Admin > Stream di dati > Configura impostazioni tag > Definisci traffico interno",
            ],
          },
          {
            type: "tip",
            text: "Su Shopify, installa l\u2019app ufficiale Google & YouTube \u2014 gestisce l\u2019integrazione GA4 e trasmette i dati di acquisto automaticamente. Su WooCommerce funziona il plugin gratuito WooCommerce Google Analytics Integration, ma verifica che l\u2019evento purchase si attivi sulla pagina di conferma dell\u2019ordine, non solo sulla pagina di pagamento.",
          },
        ],
      },
      {
        id: "search-console-setup",
        title: "Google Search Console: verifica e configurazione",
        blocks: [
          {
            type: "p",
            text: "GSC fornisce dati che GA4 non pu\u00f2 dare: quali query di ricerca fanno apparire le tue pagine, quante volte gli utenti cliccano e la tua posizione media nei risultati. \u00c8 gratuita e non c\u2019\u00e8 alcun motivo valido per non averla configurata fin dal primo giorno.",
          },
          {
            type: "list",
            items: [
              "Andare su search.google.com/search-console e aggiungere la tua propriet\u00e0",
              "Scegliere la propriet\u00e0 di tipo Dominio (non Prefisso URL) \u2014 copre automaticamente tutti i sottodomini e http/https",
              "Verificare tramite record DNS TXT se hai accesso all\u2019hosting, altrimenti usare il metodo del tag HTML",
              "Inviare la sitemap in Sitemap > Aggiungi sitemap (es.: tuonegozio.it/sitemap.xml)",
              "Collegare GSC a GA4: in GA4, Admin > Link ai prodotti > Link Search Console",
            ],
          },
          {
            type: "callout",
            title: "Perch\u00e9 il collegamento GSC + GA4 \u00e8 importante",
            text: "Una volta collegati, puoi vedere le query di ricerca organica direttamente in GA4 sotto Rapporti > Acquisizione > Search Console. Cosa ancora pi\u00f9 utile: puoi creare report personalizzati che incrociano query e fatturato \u2014 cos\u00ec sai quali keyword ti portano davvero soldi, non solo traffico.",
          },
        ],
      },
      {
        id: "key-metrics",
        title: "Le metriche che contano davvero per la SEO e-commerce",
        blocks: [
          {
            type: "p",
            text: "La maggior parte dei negozi online monitora troppe metriche senza agire su nessuna. Ecco i cinque numeri che vale la pena tenere d\u2019occhio regolarmente. Tutto il resto \u00e8 rumore finch\u00e9 questi non sono sotto controllo.",
          },
          {
            type: "list",
            items: [
              "Sessioni organiche: il volume grezzo di traffico proveniente da Google. Da monitorare settimanalmente in GA4 sotto Acquisizione > Acquisizione traffico, filtrato per Ricerca organica.",
              "Ricavi dal canale organico: in GA4 sotto Monetizzazione > Acquisti e-commerce, filtrato per origine sessione Ricerca organica. \u00c8 il numero che conta per la direzione aziendale.",
              "Posizione media per keyword importanti: in GSC, nel report Risultati di ricerca filtrato sulle tue 20 keyword di prodotto e categoria pi\u00f9 importanti. Variazioni di 2-3 posizioni nella prima pagina possono avere un impatto significativo sul fatturato.",
              "CTR per pagina: in GSC sotto Pagine, ordinato per impressioni. Le pagine con molte impressioni e CTR inferiore al 2\u00a0% hanno tag title o meta description deboli \u2014 inizia da quelle.",
              "Pagine per sessione organica: in GA4, questo indicatore segnala la profondit\u00e0 dei contenuti. Se i visitatori organici escono subito, le tue landing page non corrispondono all\u2019intento di ricerca. Un buon riferimento per le pagine di categoria e-commerce \u00e8 3-4 pagine per sessione.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80",
            alt: "Dashboard di analytics con metriche e-commerce sullo schermo di un laptop",
            caption: "Monitorare con costanza cinque metriche vale pi\u00f9 che osservare superficialmente cinquanta.",
          },
        ],
      },
      {
        id: "quick-wins-gsc",
        title: "Trovare opportunit\u00e0 rapide in Google Search Console",
        blocks: [
          {
            type: "p",
            text: "Questa \u00e8 una delle tecniche SEO pi\u00f9 replicabili in assoluto. In GSC, vai su Risultati di ricerca e applica questi filtri: Impressioni > 100 e Posizione media tra 11 e 20. Ordina per impressioni decrescenti. Quello che vedi sono pagine in seconda pagina di Google \u2014 hanno gi\u00e0 una certa autorit\u00e0 di posizionamento, e un miglioramento mirato dei contenuti spesso le spinge in prima pagina entro 4-8 settimane.",
          },
          {
            type: "callout",
            title: "Il metodo delle keyword di seconda pagina",
            text: "Filtri in GSC: Impressioni > 100, Posizione 11-20, ordina per Impressioni decrescenti. Per ogni URL dell\u2019elenco, clicca per vedere le query che generano quelle impressioni. Poi migliora la pagina: inserisci quelle query in modo naturale nel testo, rafforza la struttura dei titoli, aggiungi una sezione FAQ e aggiorna il tag title con la query pi\u00f9 pertinente. Reinvia tramite lo strumento Controllo URL.",
          },
          {
            type: "tip",
            text: "Non cercare di sistemare 50 pagine in una volta. Scegli le 5 URL con pi\u00f9 impressioni nell\u2019intervallo di posizione 11-20, dedica circa 2 ore al miglioramento di ciascuna, poi aspetta 4 settimane prima di valutare i risultati. La fretta rovina questo processo.",
          },
          {
            type: "list",
            items: [
              "In GSC Risultati di ricerca: clicca su \u2018+\u2019 > Impressioni > Maggiore di > 100",
              "Aggiungi secondo filtro: Posizione > Maggiore di > 10, e Posizione < Minore di > 21",
              "Ordina la tabella per impressioni decrescenti",
              "Clicca su qualsiasi URL per vedere le query specifiche che generano impressioni per quella pagina",
              "Apri l\u2019URL in un\u2019altra scheda e confronta il tuo contenuto con i 3 risultati pi\u00f9 in alto per quelle query",
              "Aggiorna il contenuto, migliora il tag title e reinvia tramite Controllo URL",
            ],
          },
        ],
      },
      {
        id: "reporting-cadence",
        title: "Costruire una routine di reporting che duri nel tempo",
        blocks: [
          {
            type: "p",
            text: "I negozi che progrediscono in modo costante nella SEO sono quelli che controllano i propri numeri con una cadenza fissa \u2014 non solo quando qualcosa sembra andare storto. Ecco una routine semplice che funziona in pratica. Richiede circa 30 minuti a settimana e 90 minuti al mese.",
          },
          {
            type: "checklist",
            items: [
              "Settimanale (ogni luned\u00ec, 15 min): aprire GSC Risultati di ricerca, confrontare i clic totali con la settimana precedente. Segnalare qualsiasi pagina che abbia perso pi\u00f9 del 20\u00a0% dei clic \u2014 controllare prima errori di scansione o azioni manuali.",
              "Settimanale (ogni luned\u00ec, 15 min): confrontare i ricavi organici di GA4 con la settimana precedente. Se sono scesi, incrociare con GSC per vedere se le posizioni sono calate o il CTR \u00e8 diminuito.",
              "Mensile (primo venerd\u00ec, 45 min): esportare il report dei ricavi organici di GA4 per il mese vs lo stesso mese dell\u2019anno precedente. Copiarlo in un foglio di calcolo e monitorare il trend.",
              "Mensile (primo venerd\u00ec, 45 min): eseguire il filtro keyword di seconda pagina in GSC. Aggiornare l\u2019elenco delle pagine target. Segnalare le pagine passate dalla posizione 11-20 alla 1-10 \u2014 sono successi che vale la pena documentare.",
            ],
          },
          {
            type: "tip",
            text: "Crea un semplice Google Sheet con due schede: una per le metriche GSC settimanali (data, clic, impressioni, posizione media) e una per i ricavi organici mensili di GA4. Bastano 5 minuti per compilarlo ogni volta, e dopo 3 mesi avrai una linea di tendenza che racconta una storia chiara. Consulta la checklist dei fondamentali SEO su /guides/fundamentals per assicurarti che la base tecnica sia solida prima di approfondire l\u2019analytics.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/fundamentals",
        category: "Basi della SEO e-commerce",
        title: "Checklist dei fondamentali SEO",
      },
      next: {
        href: "/guides/beginner-to-hero",
        category: "Basi della SEO e-commerce",
        title: "Da principiante a esperto",
      },
    },
  },

  nl: {
    badge: "E-commerce SEO-basiskennis",
    heading: "Analytics & Tracking",
    intro:
      "Je kunt niet verbeteren wat je niet meet. Voordat je zoekwoordenonderzoek doet, title-tags aanpast of links bouwt, heb je een betrouwbare databasis nodig. Deze gids behandelt de twee tools die elke webshop nodig heeft \u2014 GA4 en Google Search Console \u2014 en hoe je ze verbindt zodat je SEO-beslissingen gebaseerd zijn op echte cijfers.",
    readTime: "9 min leestijd",
    sections: [
      {
        id: "ga4-setup",
        title: "GA4 instellen voor e-commerce",
        blocks: [
          {
            type: "p",
            text: "GA4 verving Universal Analytics in juli 2023. Als je nog UA gebruikt of een oude Shopify GA-integratie hebt, zijn je gegevens niet betrouwbaar. Begin opnieuw: maak een GA4-property aan, installeer de Google-tag via je tagmanager of platforminstellingen, en activeer onmiddellijk Enhanced Ecommerce.",
          },
          {
            type: "callout",
            title: "Enhanced Ecommerce staat niet standaard aan",
            text: "In GA4: Admin > Gegevensstromen > selecteer je stream > Verbeterde meting. Zet alle events aan. Controleer vervolgens in je Shopify- of WooCommerce-instellingen of de e-commerce-datalayer de events purchase, add_to_cart en view_item correct verstuurt. Gebruik de GA4-DebugView om alles te verifi\u00ebren voordat je de cijfers vertrouwt.",
          },
          {
            type: "list",
            items: [
              "Maak een GA4-property aan op analytics.google.com en koppel die aan je winkel",
              "Stel een conversiedoel voor aankoop in: Admin > Conversies > Nieuw conversie-event > geef het de naam \u2018purchase\u2019",
              "Activeer Google Signals voor cross-device data (Admin > Gegevensinstellingen > Google Signals)",
              "Zet de gegevensbewaring op 14 maanden \u2014 de standaard van 2 maanden verhindert jaar-op-jaar vergelijkingen",
              "Filter intern verkeer: voeg het IP-adres van je kantoor toe via Admin > Gegevensstromen > Tag-instellingen configureren > Intern verkeer defini\u00ebren",
            ],
          },
          {
            type: "tip",
            text: "Installeer voor Shopify de offici\u00eble Google & YouTube Channel-app \u2014 die regelt de GA4-integratie en stuurt aankoopgegevens automatisch door. Voor WooCommerce werkt de gratis plugin WooCommerce Google Analytics Integration prima, maar controleer of het purchase-event op de orderbevestigingspagina wordt geactiveerd, niet alleen op de afrekenpagina.",
          },
        ],
      },
      {
        id: "search-console-setup",
        title: "Google Search Console: verificatie en instelling",
        blocks: [
          {
            type: "p",
            text: "GSC levert gegevens die GA4 niet kan bieden: welke zoekopdrachten je pagina's laten zien, hoe vaak gebruikers klikken en je gemiddelde positie in de resultaten. Het is gratis en er is geen goede reden om het niet vanaf dag \u00e9\u00e9n te hebben ingesteld.",
          },
          {
            type: "list",
            items: [
              "Ga naar search.google.com/search-console en voeg je property toe",
              "Kies de property van het type Domein (niet URL-prefix) \u2014 die dekt automatisch alle subdomeinen en http/https",
              "Verifi\u00ebr via een DNS TXT-record als je toegang hebt tot je hosting, anders gebruik je de HTML-tagmethode",
              "Dien je sitemap in via Sitemaps > Sitemap toevoegen (bijv. jouwinkel.nl/sitemap.xml)",
              "Koppel GSC aan GA4: in GA4 via Admin > Productgekoppeld > Search Console-koppelingen",
            ],
          },
          {
            type: "callout",
            title: "Waarom de GSC + GA4-koppeling belangrijk is",
            text: "Eenmaal gekoppeld zie je organische zoekopdrachten direct in GA4 onder Rapporten > Acquisitie > Search Console. Nog belangrijker: je kunt aangepaste rapporten maken die zoekopdrachten koppelen aan omzet \u2014 zodat je weet welke zoekwoorden je echt geld opleveren, niet alleen verkeer.",
          },
        ],
      },
      {
        id: "key-metrics",
        title: "De metrics die er echt toe doen voor e-commerce SEO",
        blocks: [
          {
            type: "p",
            text: "De meeste webshops volgen te veel metrics en handelen op geen enkele. Hier zijn de vijf cijfers die het waard zijn om regelmatig te bewaken. Al het andere is ruis totdat je deze onder controle hebt.",
          },
          {
            type: "list",
            items: [
              "Organische sessies: het ruwe volume aan verkeer afkomstig van Google. Volg dit wekelijks in GA4 onder Acquisitie > Verkeersacquisitie, gefilterd op Organisch zoeken.",
              "Omzet uit het organische kanaal: in GA4 onder Geld verdienen > E-commerce-aankopen, gefilterd op sessiebron Organisch zoeken. Dit is het getal dat telt voor je directie.",
              "Gemiddelde positie voor belangrijke zoekwoorden: in GSC in het rapport Zoekresultaten, gefilterd op je 20 belangrijkste product- en categoriezoekwoorden. Positieveranderingen van 2-3 plaatsen op pagina 1 kunnen de omzet merkbaar be\u00efnvloeden.",
              "CTR per pagina: in GSC onder Pagina's, gesorteerd op vertoningen. Pagina's met veel vertoningen en een CTR onder de 2\u00a0% hebben zwakke title-tags of metabeschrijvingen \u2014 begin daar.",
              "Pagina's per organische sessie: in GA4 signaleert dit de inhouddiepte. Als organische bezoekers meteen vertrekken, komen je landingspagina's niet overeen met de zoekintentie. Een realistisch ijkpunt voor e-commerce categoriepagina's is 3-4 pagina's per sessie.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80",
            alt: "Analyticsdashboard met e-commerce-metrics op een laptopscherm",
            caption: "Vijf metrics nauwgezet bijhouden is beter dan vijftig oppervlakkig in de gaten houden.",
          },
        ],
      },
      {
        id: "quick-wins-gsc",
        title: "Snelle winsten vinden in Google Search Console",
        blocks: [
          {
            type: "p",
            text: "Dit is een van de meest herhaalbare SEO-technieken. Ga in GSC naar Zoekresultaten en pas deze filters toe: Vertoningen > 100 en Gemiddelde positie tussen 11 en 20. Sorteer op vertoningen aflopend. Wat je ziet zijn pagina's op pagina 2 van Google \u2014 ze hebben al enige rankingautoriteit, en een gerichte contentverbetering duwt ze vaak binnen 4-8 weken naar pagina 1.",
          },
          {
            type: "callout",
            title: "De pagina-2-zoekwoordmethode",
            text: "Filters in GSC: Vertoningen > 100, Positie 11-20, sorteer op Vertoningen aflopend. Klik voor elke URL in de lijst om te zien welke zoekopdrachten die vertoningen veroorzaken. Verbeter dan de pagina: verwerk die zoekopdrachten op een natuurlijke manier in de tekst, versterk de kopenstructuur, voeg een FAQ-sectie toe en werk de title-tag bij met de meest relevante zoekopdracht. Dien opnieuw in via de URL-inspectietool.",
          },
          {
            type: "tip",
            text: "Probeer niet 50 pagina's tegelijk te verbeteren. Kies de 5 URL's met de meeste vertoningen in het positiebereik 11-20, besteed ongeveer 2 uur aan het verbeteren van elk, en wacht dan 4 weken voordat je de resultaten beoordeelt. Ongeduld verpest dit proces.",
          },
          {
            type: "list",
            items: [
              "In GSC Zoekresultaten: klik op \u2018+\u2019 > Vertoningen > Groter dan > 100",
              "Voeg een tweede filter toe: Positie > Groter dan > 10, en Positie < Kleiner dan > 21",
              "Sorteer de tabel op vertoningen aflopend",
              "Klik op een URL om de specifieke zoekopdrachten te zien die vertoningen voor die pagina genereren",
              "Open de URL in een ander tabblad en vergelijk je content met de top-3 resultaten voor die zoekopdrachten",
              "Werk de content bij, versterk de title-tag en dien opnieuw in via URL-inspectie",
            ],
          },
        ],
      },
      {
        id: "reporting-cadence",
        title: "Een rapportageroutine bouwen die je echt volhoudt",
        blocks: [
          {
            type: "p",
            text: "Webshops die consistent SEO-vooruitgang boeken zijn de shops die hun cijfers op een vaste planning bekijken \u2014 niet pas als er iets mis lijkt te gaan. Hier is een eenvoudige cadans die in de praktijk werkt. Het kost ongeveer 30 minuten per week en 90 minuten per maand.",
          },
          {
            type: "checklist",
            items: [
              "Wekelijks (elke maandag, 15 min): open GSC Zoekresultaten, vergelijk het totale aantal klikken met de vorige week. Markeer elke pagina die meer dan 20\u00a0% klikken heeft verloren \u2014 controleer eerst op crawlfouten of handmatige acties.",
              "Wekelijks (elke maandag, 15 min): vergelijk de organische omzet in GA4 met de vorige week. Als die is gedaald, kruisverwijs met GSC om te zien of posities zijn gezakt of CTR is afgenomen.",
              "Maandelijks (eerste vrijdag, 45 min): exporteer het organische omzetrapport van GA4 voor de maand vs dezelfde maand vorig jaar. Kopieer naar een spreadsheet en houd de trendlijn bij.",
              "Maandelijks (eerste vrijdag, 45 min): voer het pagina-2-zoekwoordfilter uit in GSC. Werk de lijst met doelpagina's bij. Markeer pagina's die van positie 11-20 naar 1-10 zijn gestegen \u2014 dat zijn successen die de moeite waard zijn om te documenteren.",
            ],
          },
          {
            type: "tip",
            text: "Maak een eenvoudige Google Sheet met twee tabbladen: een voor de wekelijkse GSC-metrics (datum, klikken, vertoningen, gemiddelde positie) en een voor de maandelijkse organische omzet uit GA4. Slechts 5 minuten om in te vullen, en na 3 maanden heb je een trendlijn die een duidelijk verhaal vertelt. Bekijk de SEO-basischecklist op /guides/fundamentals om te controleren of je technische fundament solide is voordat je de analytics induikt.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/fundamentals",
        category: "E-commerce SEO-basiskennis",
        title: "SEO-basischecklist",
      },
      next: {
        href: "/guides/beginner-to-hero",
        category: "E-commerce SEO-basiskennis",
        title: "Van beginner tot expert",
      },
    },
  },
};
