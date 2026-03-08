import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guidesSerpDominationT: Record<
  Locale,
  { sections: GuideSection[]; nav: GuideNav }
> = {
  en: {
    nav: {
      prev: {
        href: "/guides/ranking-chatgpt",
        category: "Advanced Ecommerce SEO",
        title: "Ranking on ChatGPT",
      },
    },
    sections: [
      {
        id: "what-serp-domination-means",
        title: "What SERP Domination Actually Means",
        blocks: [
          {
            type: "p",
            text: "SERP domination isn't about ranking #1. It's about owning as much visible real estate on a search results page as possible. A well-optimized ecommerce site can appear in organic results, Google Shopping listings, image results, featured snippets, sitelinks, and the knowledge panel, sometimes all for a single query. That's five or six touchpoints where your brand appears before a competitor gets a look in.",
          },
          {
            type: "p",
            text: "Most ecommerce teams optimize for one of these channels and ignore the others. The stores that dominate their category do all of them. The compound effect matters: if a user sees your brand name three times on one results page, they're far more likely to click, and far more likely to associate your brand with authority in that category.",
          },
          {
            type: "callout",
            title: "Start with a SERP audit",
            text: "Search your top 10 category keywords right now. For each one, list every result type that appears: organic, Shopping, images, PAA boxes, featured snippets. Then ask: am I present in each of those? Your gaps are your priorities.",
          },
        ],
      },
      {
        id: "google-shopping",
        title: "Google Shopping: Free Listings and Product Feed Optimization",
        blocks: [
          {
            type: "p",
            text: "Google Shopping results appear at the top of the page for product queries and pull in a lot of purchase-intent traffic. There are two routes in: paid Shopping campaigns (Performance Max) and free organic product listings in the Shopping tab. Both require a product feed submitted via Google Merchant Center.",
          },
          {
            type: "p",
            text: "For organic Shopping results, the quality of your product feed is everything. Google pulls Product schema from your pages as a secondary signal, but the Merchant Center feed takes priority. Make sure every product has: a clear, descriptive title (include brand, product name, main attribute, and size/color if relevant), accurate price and availability, GTIN or MPN if available, and high-resolution images. Feeds with errors get suppressed, so run your Merchant Center diagnostics monthly.",
          },
          {
            type: "checklist",
            items: [
              "Submit a complete product feed to Google Merchant Center: title, description, price, availability, image link, GTIN/MPN",
              "Use descriptive product titles: '[Brand] [Product Name] [Key Attribute] [Size/Color]'",
              "Keep availability data accurate. Out-of-stock items that show as available will get your account flagged",
              "Add Product schema markup to every product page (price, availability, reviews, GTIN)",
              "Set up automatic feed updates via Merchant Center's page feed or a data feed tool like DataFeedWatch or Channable",
              "Review Merchant Center diagnostics at least monthly to catch suppressed products",
            ],
          },
          {
            type: "tip",
            text: "Your product page title tag directly influences your Shopping ad title when Google auto-populates feeds from your site. Format product page title tags as: [Product Name] - [Brand] | [Store Name]. Don't bury the product name at the end.",
          },
        ],
      },
      {
        id: "featured-snippets",
        title: "Featured Snippets: Appearing Above Position 1",
        blocks: [
          {
            type: "p",
            text: "Featured snippets appear above all organic results for informational queries, and many product-related informational queries trigger them. Queries like 'best standing desk under $500', 'how to choose a mattress firmness', or 'what is a HEPA filter' all commonly produce featured snippets. If your buying guide content can win one, you appear above every competitor who holds positions 1 through 10.",
          },
          {
            type: "p",
            text: "The format matters. Google most commonly pulls featured snippets from pages that already rank in the top 10 for that query. You need to rank first, then win the snippet. To trigger paragraph snippets: write a concise 40-60 word answer directly below a relevant H2 heading that matches or closely mirrors the search query. To trigger list snippets: use numbered lists or bulleted lists for 'best of' and 'how to' content. To trigger table snippets: use proper HTML tables for product comparisons.",
          },
          {
            type: "tip",
            text: "Use Google Search Console to find queries where you rank in positions 5-15 and the SERP shows a featured snippet. These are your best opportunities because you're close enough to rank, and the snippet is already available. Reformat those pages to match snippet structure.",
          },
          {
            type: "callout",
            title: "The double-result advantage",
            text: "When you hold the featured snippet and also appear in position 1-3 organically for the same query, your brand appears twice above the fold. That's the goal. Track which queries you hold snippets for using Semrush or Ahrefs snippet filters.",
          },
        ],
      },
      {
        id: "image-results-and-visual-search",
        title: "Image Results and Google Lens",
        blocks: [
          {
            type: "p",
            text: "For visual product categories (fashion, furniture, home decor, art, plants, food), image search is a real traffic channel, not an afterthought. Google Images gets billions of searches per month. Google Lens integration means a user can photograph a product in the real world and find where to buy it. If your product images aren't optimized, you don't exist in that workflow.",
          },
          {
            type: "list",
            items: [
              "File names: use descriptive slugs, not 'IMG_4392.jpg'. Use 'oak-dining-table-180cm-natural.webp'",
              "Alt text: include the product name and one main attribute, like 'Solid oak dining table 180cm, natural finish'. Don't keyword-stuff",
              "Format: convert all product images to WebP. It's faster and Google actively prefers it",
              "Dimensions: use consistent square or portrait formats for product photography. These perform better in image grids",
              "Structured data: ImageObject schema on product pages helps Google understand your images' context",
              "Unique images: if you use manufacturer photos, Google may deprioritize them. Custom photography wins in image results",
            ],
          },
          {
            type: "tip",
            text: "Add product images to your Google Merchant Center feed. Products with images in the feed appear in Shopping image ads and Google Lens visual search results. This is underused by most ecommerce stores and gives you an edge in visual-first categories.",
          },
        ],
      },
      {
        id: "sitelinks-and-paa",
        title: "Sitelinks and People Also Ask",
        blocks: [
          {
            type: "p",
            text: "Sitelinks are the additional links that appear below your main result for branded searches. They show your main category or section pages directly in the SERP. Google generates them automatically when your site architecture is clear and internally well-linked. You can't force them, but you can make them more likely: link your main categories clearly from the homepage, use consistent navigation labels, and make sure your most important pages have the most internal links pointing to them.",
          },
          {
            type: "p",
            text: "People Also Ask (PAA) boxes appear for a majority of searches now. For ecommerce, they're most common alongside buying guides, category pages, and product-comparison queries. To get into PAA: write a dedicated FAQ section at the bottom of your category and buying guide pages, structured as real questions with direct 2-4 sentence answers. Use FAQ schema markup so Google can parse them easily. A PAA appearance means your brand shows up even when you don't hold the organic ranking for the main term.",
          },
          {
            type: "checklist",
            items: [
              "Link your top 6-8 category pages directly from the homepage navigation. These become sitelink candidates",
              "Use consistent, descriptive anchor text for all internal links to category pages",
              "Add a FAQ section to every buying guide and major category page",
              "Mark up FAQ content with FAQ schema (Question/Answer structured data)",
              "Use AnswerThePublic or AlsoAsked.com to find real PAA questions in your category",
              "Keep FAQ answers to 40-80 words: concise enough for PAA extraction, complete enough to be useful",
            ],
          },
          {
            type: "callout",
            title: "Sitelinks in Search Console",
            text: "In Google Search Console, you can see which pages Google has chosen as sitelink candidates for your branded queries under 'Search results'. If the wrong pages are appearing as sitelinks, improve internal linking to the pages you want shown - more internal links = stronger signal for Google to show that page.",
          },
        ],
      },
      {
        id: "measuring-serp-share",
        title: "Measuring and Growing Your SERP Share",
        blocks: [
          {
            type: "p",
            text: "Most teams track keyword rankings. Almost nobody tracks full SERP presence: which result types they appear in, how often, and compared to competitors. That blind spot means you're probably missing opportunities that are sitting right in front of you.",
          },
          {
            type: "p",
            text: "Run a quarterly SERP audit: take your top 20-30 keywords by traffic or commercial value and search each one in an incognito window. For each query, note: organic position, whether a Shopping block appears and if you're in it, whether there's a featured snippet and who holds it, whether your images appear in image results, whether your brand appears in PAA boxes. Build a simple grid and track it quarter-over-quarter. You'll see exactly where the SERP real estate is and who's winning it.",
          },
          {
            type: "list",
            items: [
              "Semrush SERP Features report: shows which SERP features trigger for your tracked keywords and who holds them",
              "Ahrefs SERP Overview: gives a breakdown of all result types for any keyword",
              "Google Search Console: filter by query to see impressions across all result types including Shopping and Images",
              "Manual incognito audits: still the most reliable way to see exactly what a real user sees for any given query",
              "Screaming Frog: crawl your site and export missing Product schema or Image alt text issues at scale",
            ],
          },
          {
            type: "tip",
            text: "Set a recurring calendar reminder for the first Monday of each quarter: 30-minute SERP audit, same 25 keywords, same process. After two or three quarters you'll have a clear picture of which features you're winning, losing, and which competitors are consistently showing up in features you're not. That's your roadmap.",
          },
        ],
      },
    ],
  },

  de: {
    nav: {
      prev: {
        href: "/guides/ranking-chatgpt",
        category: "Fortgeschrittenes E-Commerce-SEO",
        title: "Ranking auf ChatGPT",
      },
    },
    sections: [
      {
        id: "what-serp-domination-means",
        title: "Was SERP-Dominanz wirklich bedeutet",
        blocks: [
          {
            type: "p",
            text: "SERP-Dominanz bedeutet nicht, auf Platz 1 zu stehen. Es geht darum, so viel sichtbaren Platz auf einer Suchergebnisseite wie möglich zu belegen. Eine gut optimierte E-Commerce-Website kann in organischen Ergebnissen, Google Shopping, Bildergebnissen, Featured Snippets, Sitelinks und dem Knowledge Panel erscheinen, manchmal alles für eine einzige Suchanfrage. Das sind fünf oder sechs Berührungspunkte, an denen deine Marke erscheint, bevor ein Mitbewerber überhaupt zum Zug kommt.",
          },
          {
            type: "p",
            text: "Die meisten E-Commerce-Teams optimieren für einen dieser Kanäle und ignorieren den Rest. Die Shops, die ihre Kategorie dominieren, tun alles davon. Der kumulative Effekt zählt: Wenn ein Nutzer deinen Markennamen dreimal auf einer Ergebnisseite sieht, ist die Klickwahrscheinlichkeit viel höher und die Assoziation deiner Marke mit Autorität in dieser Kategorie deutlich stärker.",
          },
          {
            type: "callout",
            title: "Starte mit einem SERP-Audit",
            text: "Suche jetzt nach deinen Top-10-Kategorie-Keywords. Notiere für jede Anfrage jeden erscheinenden Ergebnistyp: organisch, Shopping, Bilder, PAA-Boxen, Featured Snippets. Frage dann: Bin ich in jedem davon vertreten? Deine Lücken sind deine Prioritäten.",
          },
        ],
      },
      {
        id: "google-shopping",
        title: "Google Shopping: Kostenlose Einträge und Produktfeed-Optimierung",
        blocks: [
          {
            type: "p",
            text: "Google Shopping-Ergebnisse erscheinen ganz oben auf der Seite bei Produktanfragen und bringen viel Traffic mit Kaufabsicht. Es gibt zwei Wege hinein: bezahlte Shopping-Kampagnen (Performance Max) und kostenlose organische Produktlistings im Shopping-Tab. Beide erfordern einen Produktfeed, der über Google Merchant Center eingereicht wird.",
          },
          {
            type: "p",
            text: "Für organische Shopping-Ergebnisse ist die Qualität deines Produktfeeds das Wichtigste. Google zieht Product-Schema von deinen Seiten als sekundäres Signal heran, aber der Merchant Center-Feed hat Priorität. Stelle sicher, dass jedes Produkt folgendes hat: einen klaren, beschreibenden Titel (Marke, Produktname, Hauptattribut und Größe/Farbe wenn relevant), genauen Preis und Verfügbarkeit, GTIN oder MPN wenn verfügbar, und hochauflösende Bilder. Feeds mit Fehlern werden unterdrückt. Führe daher monatlich Merchant Center-Diagnosen durch.",
          },
          {
            type: "checklist",
            items: [
              "Reiche einen vollständigen Produktfeed bei Google Merchant Center ein - Titel, Beschreibung, Preis, Verfügbarkeit, Bildlink, GTIN/MPN",
              "Verwende beschreibende Produkttitel: '[Marke] [Produktname] [Hauptattribut] [Größe/Farbe]'",
              "Halte Verfügbarkeitsdaten aktuell. Ausverkaufte Artikel, die als verfügbar angezeigt werden, führen zu Kontosperrungen",
              "Füge Product-Schema-Markup zu jeder Produktseite hinzu (Preis, Verfügbarkeit, Bewertungen, GTIN)",
              "Richte automatische Feed-Updates über den Merchant Center-Seitenfeed oder ein Datenfeed-Tool wie DataFeedWatch oder Channable ein",
              "Überprüfe Merchant Center-Diagnosen mindestens monatlich, um unterdrückte Produkte zu erkennen",
            ],
          },
          {
            type: "tip",
            text: "Dein Produktseiten-Title-Tag beeinflusst direkt deinen Shopping-Anzeigentitel, wenn Google Feeds automatisch von deiner Website befüllt. Formatiere Produktseiten-Title-Tags als: [Produktname] - [Marke] | [Shopname]. Vergrabe den Produktnamen nicht am Ende.",
          },
        ],
      },
      {
        id: "featured-snippets",
        title: "Featured Snippets: Über Position 1 erscheinen",
        blocks: [
          {
            type: "p",
            text: "Featured Snippets erscheinen über allen organischen Ergebnissen bei informativen Anfragen, und viele produktbezogene Informationsanfragen lösen sie aus. Anfragen wie 'bester Stehschreibtisch unter 500 Euro', 'wie wähle ich die richtige Matratzensteifigkeit' oder 'was ist ein HEPA-Filter' erzeugen häufig Featured Snippets. Wenn dein Ratgeber-Content eines gewinnen kann, erscheinst du über jedem Mitbewerber auf den Positionen 1 bis 10.",
          },
          {
            type: "p",
            text: "Das Format macht den Unterschied. Google zieht Featured Snippets am häufigsten von Seiten, die bereits in den Top 10 für diese Anfrage ranken. Du musst zuerst ranken, dann das Snippet gewinnen. Um Absatz-Snippets auszulösen: Schreibe eine prägnante 40-60-Wort-Antwort direkt unter einer relevanten H2-Überschrift, die der Suchanfrage entspricht oder ihr nahekommt. Um Listen-Snippets auszulösen: Verwende nummerierte oder aufgezählte Listen für 'Best of'- und 'How-to'-Inhalte. Um Tabellen-Snippets auszulösen: Verwende korrekte HTML-Tabellen für Produktvergleiche.",
          },
          {
            type: "tip",
            text: "Nutze die Google Search Console, um Anfragen zu finden, bei denen du auf den Positionen 5-15 rankst und die SERP ein Featured Snippet zeigt. Das sind deine besten Chancen, denn du bist nah genug dran zu ranken und das Snippet ist bereits vorhanden. Formatiere diese Seiten neu, um der Snippet-Struktur zu entsprechen.",
          },
          {
            type: "callout",
            title: "Der Doppelresultat-Vorteil",
            text: "Wenn du das Featured Snippet hältst und auch organisch auf Position 1-3 für dieselbe Anfrage erscheinst, taucht deine Marke zweimal über dem Fold auf. Das ist das Ziel. Verfolge, für welche Anfragen du Snippets hältst, mit den Snippet-Filtern in Semrush oder Ahrefs.",
          },
        ],
      },
      {
        id: "image-results-and-visual-search",
        title: "Bildergebnisse und Google Lens",
        blocks: [
          {
            type: "p",
            text: "Für visuelle Produktkategorien (Mode, Möbel, Wohndeko, Kunst, Pflanzen, Lebensmittel) ist die Bildersuche ein echter Traffickanal, kein Nachgedanke. Google Bilder verzeichnet Milliarden von Suchanfragen pro Monat. Die Google Lens-Integration bedeutet, dass ein Nutzer ein Produkt in der echten Welt fotografieren und herausfinden kann, wo man es kaufen kann. Wenn deine Produktbilder nicht optimiert sind, existierst du in diesem Workflow nicht.",
          },
          {
            type: "list",
            items: [
              "Dateinamen: Verwende beschreibende Slugs, nicht 'IMG_4392.jpg'. Nutze 'eichen-esstisch-180cm-natur.webp'",
              "Alt-Text: Füge den Produktnamen und ein Hauptattribut ein, z.B. 'Massiver Eichen-Esstisch 180cm, Naturfinish'. Kein Keyword-Stuffing",
              "Format: Konvertiere alle Produktbilder zu WebP. Es ist schneller und Google bevorzugt es aktiv",
              "Abmessungen: Verwende einheitliche quadratische oder Hochformat-Formate für die Produktfotografie. Diese performen besser in Bildrastern",
              "Strukturierte Daten: ImageObject-Schema auf Produktseiten hilft Google, den Kontext deiner Bilder zu verstehen",
              "Einzigartige Bilder: Wenn du Herstellerfotos verwendest, kann Google sie niedriger priorisieren. Eigene Fotografie gewinnt in Bildergebnissen",
            ],
          },
          {
            type: "tip",
            text: "Füge Produktbilder zu deinem Google Merchant Center-Feed hinzu. Produkte mit Bildern im Feed erscheinen in Shopping-Bildanzeigen und Google Lens-Visueller-Suche-Ergebnissen. Das wird von den meisten E-Commerce-Shops nicht genutzt und gibt dir einen Vorteil in visuellen Kategorien.",
          },
        ],
      },
      {
        id: "sitelinks-and-paa",
        title: "Sitelinks und 'Ähnliche Fragen'",
        blocks: [
          {
            type: "p",
            text: "Sitelinks sind die zusätzlichen Links, die bei Markensuchen unter deinem Hauptergebnis erscheinen. Sie zeigen deine Haupt-Kategorie- oder Abschnittsseiten direkt in der SERP. Google generiert sie automatisch, wenn deine Website-Architektur klar und intern gut verlinkt ist. Du kannst sie nicht erzwingen, aber du kannst sie wahrscheinlicher machen: Verlinke deine Hauptkategorien deutlich von der Startseite, verwende konsistente Navigationsbezeichnungen und stelle sicher, dass deine wichtigsten Seiten die meisten internen Links erhalten.",
          },
          {
            type: "p",
            text: "'Ähnliche Fragen' (PAA)-Boxen erscheinen heute bei einem Großteil der Suchanfragen. Im E-Commerce sind sie am häufigsten bei Kaufratgebern, Kategorieseiten und Produktvergleichsanfragen. Um in PAA zu gelangen: Schreibe einen dedizierten FAQ-Abschnitt am Ende deiner Kategorie- und Kaufratgeberseiten, strukturiert als echte Fragen mit direkten 2-4-Satz-Antworten. Verwende FAQ-Schema-Markup, damit Google sie leicht parsen kann.",
          },
          {
            type: "checklist",
            items: [
              "Verlinke deine Top-6-8-Kategorieseiten direkt aus der Homepage-Navigation - das sind Sitelink-Kandidaten",
              "Verwende konsistenten, beschreibenden Ankertext für alle internen Links zu Kategorieseiten",
              "Füge einen FAQ-Abschnitt zu jedem Kaufratgeber und jeder wichtigen Kategorieseite hinzu",
              "Markiere FAQ-Inhalte mit FAQ-Schema (Question/Answer Structured Data)",
              "Nutze AnswerThePublic oder AlsoAsked.com, um echte PAA-Fragen in deiner Kategorie zu finden",
              "Halte FAQ-Antworten auf 40-80 Wörter: prägnant genug für PAA-Extraktion, vollständig genug, um nützlich zu sein",
            ],
          },
          {
            type: "callout",
            title: "Sitelinks in der Search Console",
            text: "In der Google Search Console kannst du unter 'Suchergebnisse' sehen, welche Seiten Google als Sitelink-Kandidaten für deine Markensuchen ausgewählt hat. Wenn die falschen Seiten als Sitelinks erscheinen, verbessere die interne Verlinkung zu den Seiten, die du gezeigt haben möchtest - mehr interne Links = stärkeres Signal für Google, diese Seite anzuzeigen.",
          },
        ],
      },
      {
        id: "measuring-serp-share",
        title: "SERP-Anteil messen und ausbauen",
        blocks: [
          {
            type: "p",
            text: "Die meisten Teams verfolgen Keyword-Rankings. Fast niemand verfolgt die vollständige SERP-Präsenz: in welchen Ergebnistypen sie erscheinen, wie oft und im Vergleich zu Mitbewerbern. Dieser blinde Fleck bedeutet, dass du wahrscheinlich Chancen verpasst, die direkt vor dir liegen.",
          },
          {
            type: "p",
            text: "Führe ein vierteljährliches SERP-Audit durch: Nimm deine Top-20-30-Keywords nach Traffic oder kommerziellem Wert und suche jedes in einem Inkognito-Fenster. Notiere für jede Anfrage: organische Position, ob ein Shopping-Block erscheint und ob du darin vertreten bist, ob es ein Featured Snippet gibt und wer es hält, ob deine Bilder in Bildergebnissen erscheinen, ob deine Marke in PAA-Boxen erscheint. Erstelle ein einfaches Raster und verfolge es quartalsweise. Du siehst genau, wo der SERP-Raum ist und wer ihn gewinnt.",
          },
          {
            type: "list",
            items: [
              "Semrush SERP Features-Bericht: Zeigt, welche SERP-Features für deine getrackten Keywords ausgelöst werden und wer sie hält",
              "Ahrefs SERP Overview: Gibt eine Aufschlüsselung aller Ergebnistypen für jedes Keyword",
              "Google Search Console: Nach Anfrage filtern, um Impressionen über alle Ergebnistypen einschließlich Shopping und Bilder zu sehen",
              "Manuelle Inkognito-Audits: Immer noch die zuverlässigste Methode, um genau zu sehen, was ein echter Nutzer für eine bestimmte Anfrage sieht",
              "Screaming Frog: Crawle deine Website und exportiere fehlende Product-Schema- oder Bild-Alt-Text-Probleme in großem Maßstab",
            ],
          },
          {
            type: "tip",
            text: "Setze eine wiederkehrende Kalendererinnerung für den ersten Montag jedes Quartals: 30-minütiges SERP-Audit, dieselben 25 Keywords, derselbe Prozess. Nach zwei oder drei Quartalen hast du ein klares Bild davon, welche Features du gewinnst, verlierst und welche Mitbewerber konsistent in Features erscheinen, in denen du nicht vertreten bist. Das ist deine Roadmap.",
          },
        ],
      },
    ],
  },

  fr: {
    nav: {
      prev: {
        href: "/guides/ranking-chatgpt",
        category: "SEO e-commerce avancé",
        title: "Se positionner sur ChatGPT",
      },
    },
    sections: [
      {
        id: "what-serp-domination-means",
        title: "Ce que signifie vraiment dominer les SERP",
        blocks: [
          {
            type: "p",
            text: "Dominer les SERP ne signifie pas être en position 1. Cela signifie occuper le maximum d'espace visible sur une page de résultats. Un site e-commerce bien optimisé peut apparaître dans les résultats organiques, les listes Google Shopping, les résultats d'images, les featured snippets, les sitelinks et le panneau de connaissances, parfois tout ça pour une seule requête. Ce sont cinq ou six points de contact où votre marque apparaît avant qu'un concurrent n'ait la moindre chance.",
          },
          {
            type: "p",
            text: "La plupart des équipes e-commerce optimisent pour l'un de ces canaux et ignorent les autres. Les boutiques qui dominent leur catégorie font tout. L'effet cumulatif compte : si un utilisateur voit le nom de votre marque trois fois sur une page de résultats, il est beaucoup plus susceptible de cliquer, et beaucoup plus enclin à associer votre marque à une autorité dans cette catégorie.",
          },
          {
            type: "callout",
            title: "Commencez par un audit SERP",
            text: "Recherchez vos 10 mots-clés de catégorie principaux maintenant. Pour chacun, listez chaque type de résultat qui apparaît : organique, Shopping, images, boîtes PAA, featured snippets. Demandez-vous ensuite : suis-je présent dans chacun d'eux ? Vos lacunes sont vos priorités.",
          },
        ],
      },
      {
        id: "google-shopping",
        title: "Google Shopping : Listes gratuites et optimisation du flux produit",
        blocks: [
          {
            type: "p",
            text: "Les résultats Google Shopping apparaissent en haut de page pour les requêtes produits et génèrent beaucoup de trafic à forte intention d'achat. Deux voies d'accès existent : les campagnes Shopping payantes (Performance Max) et les listes de produits organiques gratuites dans l'onglet Shopping. Les deux nécessitent un flux produit soumis via Google Merchant Center.",
          },
          {
            type: "p",
            text: "Pour les résultats Shopping organiques, la qualité de votre flux produit est primordiale. Google tire le schema Product de vos pages comme signal secondaire, mais le flux Merchant Center est prioritaire. Assurez-vous que chaque produit dispose de : un titre clair et descriptif (marque, nom du produit, attribut principal, et taille/couleur si pertinent), un prix et une disponibilité exacts, un GTIN ou MPN si disponible, et des images haute résolution. Les flux avec des erreurs sont supprimés, alors effectuez des diagnostics Merchant Center mensuellement.",
          },
          {
            type: "checklist",
            items: [
              "Soumettez un flux produit complet à Google Merchant Center - titre, description, prix, disponibilité, lien image, GTIN/MPN",
              "Utilisez des titres de produits descriptifs : '[Marque] [Nom du produit] [Attribut clé] [Taille/Couleur]'",
              "Gardez les données de disponibilité exactes - les articles en rupture de stock affichés comme disponibles entraîneront le signalement de votre compte",
              "Ajoutez le balisage schema Product à chaque fiche produit (prix, disponibilité, avis, GTIN)",
              "Configurez des mises à jour automatiques du flux via le flux de page Merchant Center ou un outil de flux de données comme DataFeedWatch ou Channable",
              "Vérifiez les diagnostics Merchant Center au moins mensuellement pour détecter les produits supprimés",
            ],
          },
          {
            type: "tip",
            text: "La balise titre de votre page produit influence directement le titre de votre annonce Shopping lorsque Google alimente automatiquement les flux depuis votre site. Formatez les balises titre des pages produits ainsi : [Nom du produit] - [Marque] | [Nom du magasin]. Ne noyez pas le nom du produit à la fin.",
          },
        ],
      },
      {
        id: "featured-snippets",
        title: "Featured Snippets : Apparaître au-dessus de la position 1",
        blocks: [
          {
            type: "p",
            text: "Les featured snippets apparaissent au-dessus de tous les résultats organiques pour les requêtes informationnelles, et beaucoup de requêtes informationnelles liées aux produits en déclenchent. Des requêtes comme 'meilleur bureau debout moins de 500 euros', 'comment choisir la fermeté d'un matelas' ou 'qu'est-ce qu'un filtre HEPA' produisent couramment des featured snippets. Si votre guide d'achat peut en obtenir un, vous apparaissez au-dessus de tous les concurrents qui occupent les positions 1 à 10.",
          },
          {
            type: "p",
            text: "Le format compte. Google tire le plus souvent les featured snippets de pages qui se classent déjà dans le top 10 pour cette requête. Vous devez d'abord vous classer, puis gagner le snippet. Pour déclencher des snippets de paragraphe : rédigez une réponse concise de 40 à 60 mots directement sous un titre H2 pertinent qui correspond ou est proche de la requête de recherche. Pour les snippets de liste : utilisez des listes numérotées ou à puces pour le contenu 'best of' et 'how to'. Pour les snippets de tableau : utilisez des tableaux HTML appropriés pour les comparaisons de produits.",
          },
          {
            type: "tip",
            text: "Utilisez Google Search Console pour trouver les requêtes où vous vous classez aux positions 5-15 et où la SERP affiche un featured snippet. Ce sont vos meilleures opportunités parce que vous êtes assez proche pour vous classer, et le snippet est déjà disponible. Reformatez ces pages pour correspondre à la structure du snippet.",
          },
          {
            type: "callout",
            title: "L'avantage du double résultat",
            text: "Lorsque vous détenez le featured snippet et apparaissez aussi en position 1-3 organiquement pour la même requête, votre marque apparaît deux fois au-dessus de la ligne de flottaison. C'est l'objectif. Suivez les requêtes pour lesquelles vous détenez des snippets via les filtres de snippets de Semrush ou Ahrefs.",
          },
        ],
      },
      {
        id: "image-results-and-visual-search",
        title: "Résultats d'images et Google Lens",
        blocks: [
          {
            type: "p",
            text: "Pour les catégories de produits visuels (mode, mobilier, décoration intérieure, art, plantes, alimentation), la recherche d'images est un vrai canal de trafic, pas un détail. Google Images reçoit des milliards de recherches par mois. L'intégration de Google Lens signifie qu'un utilisateur peut photographier un produit dans la vraie vie et trouver où l'acheter. Si vos images produits ne sont pas optimisées, vous n'existez pas dans ce parcours.",
          },
          {
            type: "list",
            items: [
              "Noms de fichiers : utilisez des slugs descriptifs, pas 'IMG_4392.jpg'. Utilisez 'table-a-manger-chene-180cm-naturel.webp'",
              "Texte alternatif : incluez le nom du produit et un attribut principal, par exemple 'Table à manger en chêne massif 180cm, finition naturelle'. Pas de bourrage de mots-clés",
              "Format : convertissez toutes les images produits en WebP. C'est plus rapide et Google le préfère activement",
              "Dimensions : utilisez des formats carrés ou portraits cohérents pour la photographie produit. Ils performent mieux dans les grilles d'images",
              "Données structurées : le schema ImageObject sur les pages produits aide Google à comprendre le contexte de vos images",
              "Images uniques : si vous utilisez des photos fabricant, Google peut les déprioriser. La photographie personnalisée gagne dans les résultats d'images",
            ],
          },
          {
            type: "tip",
            text: "Ajoutez des images produits à votre flux Google Merchant Center. Les produits avec des images dans le flux apparaissent dans les annonces Shopping Image et les résultats de recherche visuelle Google Lens. C'est sous-utilisé par la plupart des boutiques e-commerce et vous donne un avantage dans les catégories à dominante visuelle.",
          },
        ],
      },
      {
        id: "sitelinks-and-paa",
        title: "Sitelinks et 'Les gens demandent aussi'",
        blocks: [
          {
            type: "p",
            text: "Les sitelinks sont les liens supplémentaires qui apparaissent sous votre résultat principal pour les recherches de marque. Ils affichent vos principales pages de catégorie ou de section directement dans la SERP. Google les génère automatiquement lorsque l'architecture de votre site est claire et bien liée en interne. Vous ne pouvez pas les forcer, mais vous pouvez les rendre plus probables : liez vos catégories principales clairement depuis la page d'accueil, utilisez des libellés de navigation cohérents, et assurez-vous que vos pages les plus importantes reçoivent le plus de liens internes.",
          },
          {
            type: "p",
            text: "Les boîtes 'Les gens demandent aussi' (PAA) apparaissent maintenant pour une majorité de recherches. Pour le e-commerce, elles sont plus fréquentes avec les guides d'achat, les pages de catégorie et les requêtes de comparaison de produits. Pour apparaître dans PAA : rédigez une section FAQ dédiée en bas de vos pages de catégorie et de guides d'achat, structurée en vraies questions avec des réponses directes de 2 à 4 phrases. Utilisez le balisage FAQ schema pour que Google puisse les analyser facilement.",
          },
          {
            type: "checklist",
            items: [
              "Liez vos 6 à 8 meilleures pages de catégorie directement depuis la navigation de la page d'accueil. Ce sont des candidats aux sitelinks",
              "Utilisez un texte d'ancre cohérent et descriptif pour tous les liens internes vers les pages de catégorie",
              "Ajoutez une section FAQ à chaque guide d'achat et à chaque page de catégorie majeure",
              "Balisez le contenu FAQ avec le schema FAQ (données structurées Question/Réponse)",
              "Utilisez AnswerThePublic ou AlsoAsked.com pour trouver les vraies questions PAA dans votre catégorie",
              "Gardez les réponses FAQ à 40-80 mots : assez concises pour l'extraction PAA, assez complètes pour être utiles",
            ],
          },
          {
            type: "callout",
            title: "Les sitelinks dans Search Console",
            text: "Dans Google Search Console, vous pouvez voir quelles pages Google a choisies comme candidates aux sitelinks pour vos recherches de marque sous 'Résultats de recherche'. Si les mauvaises pages apparaissent comme sitelinks, améliorez les liens internes vers les pages que vous souhaitez afficher - plus de liens internes = signal plus fort pour que Google affiche cette page.",
          },
        ],
      },
      {
        id: "measuring-serp-share",
        title: "Mesurer et développer votre part de SERP",
        blocks: [
          {
            type: "p",
            text: "La plupart des équipes suivent les positions de mots-clés. Presque personne ne suit la présence SERP complète : dans quels types de résultats elles apparaissent, à quelle fréquence, et comparé aux concurrents. Ce point aveugle signifie que vous passez probablement à côté d'opportunités qui sont juste devant vous.",
          },
          {
            type: "p",
            text: "Effectuez un audit SERP trimestriel : prenez vos 20-30 mots-clés principaux par trafic ou valeur commerciale et recherchez chacun dans une fenêtre de navigation privée. Pour chaque requête, notez : la position organique, si un bloc Shopping apparaît et si vous y êtes, s'il y a un featured snippet et qui le détient, si vos images apparaissent dans les résultats d'images, si votre marque apparaît dans les boîtes PAA. Construisez une grille simple et suivez-la trimestre après trimestre. Vous verrez exactement où se trouve l'espace SERP et qui le gagne.",
          },
          {
            type: "list",
            items: [
              "Rapport SERP Features Semrush : montre quelles fonctionnalités SERP se déclenchent pour vos mots-clés suivis et qui les détient",
              "SERP Overview Ahrefs : donne une ventilation de tous les types de résultats pour n'importe quel mot-clé",
              "Google Search Console : filtrez par requête pour voir les impressions sur tous les types de résultats dont Shopping et Images",
              "Audits manuels en navigation privée : toujours le moyen le plus fiable de voir exactement ce qu'un vrai utilisateur voit pour une requête donnée",
              "Screaming Frog : crawlez votre site et exportez à grande échelle les problèmes de schema Product manquant ou de texte alt d'image",
            ],
          },
          {
            type: "tip",
            text: "Définissez un rappel calendrier récurrent le premier lundi de chaque trimestre : audit SERP de 30 minutes, mêmes 25 mots-clés, même processus. Après deux ou trois trimestres, vous aurez une image claire des fonctionnalités que vous gagnez, perdez, et quels concurrents apparaissent systématiquement dans des fonctionnalités où vous n'êtes pas. C'est votre feuille de route.",
          },
        ],
      },
    ],
  },

  es: {
    nav: {
      prev: {
        href: "/guides/ranking-chatgpt",
        category: "SEO avanzado para ecommerce",
        title: "Posicionarse en ChatGPT",
      },
    },
    sections: [
      {
        id: "what-serp-domination-means",
        title: "Qué significa realmente dominar las SERP",
        blocks: [
          {
            type: "p",
            text: "Dominar las SERP no es cuestión de estar en el puesto #1. Se trata de ocupar el máximo espacio visible en una página de resultados de búsqueda. Un sitio de ecommerce bien optimizado puede aparecer en resultados orgánicos, listados de Google Shopping, resultados de imágenes, featured snippets, sitelinks y el panel de conocimiento, a veces todo ello para una sola consulta. Esos son cinco o seis puntos de contacto donde tu marca aparece antes de que un competidor tenga siquiera una oportunidad.",
          },
          {
            type: "p",
            text: "La mayoría de los equipos de ecommerce optimizan para uno de estos canales e ignoran el resto. Las tiendas que dominan su categoría los hacen todos. El efecto acumulativo importa: si un usuario ve el nombre de tu marca tres veces en una página de resultados, es mucho más probable que haga clic, y mucho más probable que asocie tu marca con autoridad en esa categoría.",
          },
          {
            type: "callout",
            title: "Empieza con una auditoría de SERP",
            text: "Busca ahora tus 10 palabras clave de categoría principales. Para cada una, anota cada tipo de resultado que aparece: orgánico, Shopping, imágenes, cajas de PAA, featured snippets. Luego pregúntate: ¿estoy presente en cada uno de ellos? Tus brechas son tus prioridades.",
          },
        ],
      },
      {
        id: "google-shopping",
        title: "Google Shopping: Listados gratuitos y optimización del feed de productos",
        blocks: [
          {
            type: "p",
            text: "Los resultados de Google Shopping aparecen en la parte superior de la página para consultas de productos y atraen mucho tráfico con intención de compra. Hay dos vías de entrada: campañas de Shopping de pago (Performance Max) y listados de productos orgánicos gratuitos en la pestaña de Shopping. Ambas requieren un feed de productos enviado a través de Google Merchant Center.",
          },
          {
            type: "p",
            text: "Para los resultados de Shopping orgánico, la calidad de tu feed de productos lo es todo. Google extrae el schema de Product de tus páginas como señal secundaria, pero el feed de Merchant Center tiene prioridad. Asegúrate de que cada producto tenga: un título claro y descriptivo (incluye marca, nombre del producto, atributo principal y talla/color si es relevante), precio y disponibilidad precisos, GTIN o MPN si está disponible, e imágenes de alta resolución. Los feeds con errores quedan suprimidos, así que ejecuta los diagnósticos de Merchant Center mensualmente.",
          },
          {
            type: "checklist",
            items: [
              "Envía un feed de productos completo a Google Merchant Center - título, descripción, precio, disponibilidad, enlace de imagen, GTIN/MPN",
              "Usa títulos de productos descriptivos: '[Marca] [Nombre del producto] [Atributo clave] [Talla/Color]'",
              "Mantén los datos de disponibilidad precisos - los artículos sin stock que aparezcan como disponibles harán que tu cuenta sea marcada",
              "Añade el marcado de schema de Product a cada página de producto (precio, disponibilidad, reseñas, GTIN)",
              "Configura actualizaciones automáticas del feed a través del feed de páginas de Merchant Center o una herramienta de feed de datos como DataFeedWatch o Channable",
              "Revisa los diagnósticos de Merchant Center al menos mensualmente para detectar productos suprimidos",
            ],
          },
          {
            type: "tip",
            text: "La etiqueta de título de tu página de producto influye directamente en el título de tu anuncio de Shopping cuando Google rellena automáticamente los feeds desde tu sitio. Formatea las etiquetas de título de las páginas de producto así: [Nombre del producto] - [Marca] | [Nombre de la tienda]. No entierres el nombre del producto al final.",
          },
        ],
      },
      {
        id: "featured-snippets",
        title: "Featured Snippets: Aparecer por encima de la posición 1",
        blocks: [
          {
            type: "p",
            text: "Los featured snippets aparecen por encima de todos los resultados orgánicos para consultas informacionales, y muchas consultas informacionales relacionadas con productos los generan. Consultas como 'mejor escritorio de pie por menos de 500 euros', 'cómo elegir la firmeza de un colchón' o 'qué es un filtro HEPA' suelen producir featured snippets. Si el contenido de tu guía de compra puede ganar uno, apareces por encima de todos los competidores que ocupan las posiciones 1 a 10.",
          },
          {
            type: "p",
            text: "El formato importa. Google extrae los featured snippets con mayor frecuencia de páginas que ya están en el top 10 para esa consulta. Primero necesitas posicionarte, luego ganar el snippet. Para activar snippets de párrafo: escribe una respuesta concisa de 40-60 palabras directamente bajo un encabezado H2 relevante que coincida o sea cercano a la consulta de búsqueda. Para snippets de lista: usa listas numeradas o con viñetas para contenido 'los mejores' y 'cómo hacer'. Para snippets de tabla: usa tablas HTML correctas para comparaciones de productos.",
          },
          {
            type: "tip",
            text: "Usa Google Search Console para encontrar consultas donde te posicionas en las posiciones 5-15 y la SERP muestra un featured snippet. Estas son tus mejores oportunidades porque estás suficientemente cerca para posicionarte y el snippet ya está disponible. Reformatea esas páginas para que coincidan con la estructura del snippet.",
          },
          {
            type: "callout",
            title: "La ventaja del doble resultado",
            text: "Cuando tienes el featured snippet y también apareces en la posición 1-3 orgánicamente para la misma consulta, tu marca aparece dos veces por encima del pliegue. Ese es el objetivo. Rastrea qué consultas tienen snippets usando los filtros de snippets de Semrush o Ahrefs.",
          },
        ],
      },
      {
        id: "image-results-and-visual-search",
        title: "Resultados de imágenes y Google Lens",
        blocks: [
          {
            type: "p",
            text: "Para las categorías de productos visuales (moda, muebles, decoración del hogar, arte, plantas, alimentación), la búsqueda de imágenes es un canal de tráfico real, no una ocurrencia tardía. Google Imágenes recibe miles de millones de búsquedas al mes. La integración de Google Lens significa que un usuario puede fotografiar un producto en el mundo real y encontrar dónde comprarlo. Si tus imágenes de productos no están optimizadas, no existes en ese flujo de trabajo.",
          },
          {
            type: "list",
            items: [
              "Nombres de archivo: usa slugs descriptivos, no 'IMG_4392.jpg'. Usa 'mesa-comedor-roble-180cm-natural.webp'",
              "Texto alternativo: incluye el nombre del producto y un atributo principal, por ejemplo 'Mesa de comedor de roble macizo 180cm, acabado natural'. Sin keyword stuffing",
              "Formato: convierte todas las imágenes de productos a WebP. Es más rápido y Google lo prefiere activamente",
              "Dimensiones: usa formatos cuadrados o verticales consistentes para la fotografía de productos. Rinden mejor en las cuadrículas de imágenes",
              "Datos estructurados: el schema de ImageObject en las páginas de producto ayuda a Google a entender el contexto de tus imágenes",
              "Imágenes únicas: si usas fotos del fabricante, Google puede priorizarlas menos. La fotografía propia gana en los resultados de imágenes",
            ],
          },
          {
            type: "tip",
            text: "Añade imágenes de productos a tu feed de Google Merchant Center. Los productos con imágenes en el feed aparecen en los anuncios de imagen de Shopping y en los resultados de búsqueda visual de Google Lens. La mayoría de las tiendas de ecommerce no lo aprovechan y te da una ventaja en categorías visuales.",
          },
        ],
      },
      {
        id: "sitelinks-and-paa",
        title: "Sitelinks y 'La gente también pregunta'",
        blocks: [
          {
            type: "p",
            text: "Los sitelinks son los enlaces adicionales que aparecen bajo tu resultado principal para las búsquedas de marca. Muestran tus principales páginas de categoría o sección directamente en la SERP. Google los genera automáticamente cuando la arquitectura de tu sitio es clara y está bien enlazada internamente. No puedes forzarlos, pero puedes hacerlos más probables: enlaza tus categorías principales claramente desde la página de inicio, usa etiquetas de navegación consistentes, y asegúrate de que tus páginas más importantes reciben la mayor cantidad de enlaces internos.",
          },
          {
            type: "p",
            text: "Las cajas de 'La gente también pregunta' (PAA) aparecen en la mayoría de las búsquedas actualmente. Para el ecommerce, son más frecuentes junto a guías de compra, páginas de categoría y consultas de comparación de productos. Para aparecer en PAA: escribe una sección de preguntas frecuentes dedicada al final de tus páginas de categoría y guías de compra, estructurada como preguntas reales con respuestas directas de 2-4 oraciones. Usa el marcado de schema FAQ para que Google pueda analizarlas fácilmente.",
          },
          {
            type: "checklist",
            items: [
              "Enlaza tus 6-8 mejores páginas de categoría directamente desde la navegación de la página de inicio. Son candidatas a sitelinks",
              "Usa texto de anclaje consistente y descriptivo para todos los enlaces internos a páginas de categoría",
              "Añade una sección de preguntas frecuentes a cada guía de compra y a cada página de categoría principal",
              "Marca el contenido de preguntas frecuentes con schema FAQ (datos estructurados de Pregunta/Respuesta)",
              "Usa AnswerThePublic o AlsoAsked.com para encontrar las preguntas PAA reales en tu categoría",
              "Mantén las respuestas de las preguntas frecuentes en 40-80 palabras: lo suficientemente concisas para la extracción de PAA, lo suficientemente completas para ser útiles",
            ],
          },
          {
            type: "callout",
            title: "Sitelinks en Search Console",
            text: "En Google Search Console, puedes ver qué páginas ha elegido Google como candidatas a sitelinks para tus búsquedas de marca en 'Resultados de búsqueda'. Si las páginas equivocadas aparecen como sitelinks, mejora los enlaces internos a las páginas que quieres mostrar - más enlaces internos = señal más fuerte para que Google muestre esa página.",
          },
        ],
      },
      {
        id: "measuring-serp-share",
        title: "Medir y hacer crecer tu cuota de SERP",
        blocks: [
          {
            type: "p",
            text: "La mayoría de los equipos rastrean posiciones de palabras clave. Casi nadie rastrea la presencia total en las SERP: en qué tipos de resultados aparecen, con qué frecuencia y en comparación con los competidores. Ese punto ciego significa que probablemente estás perdiendo oportunidades que tienes justo delante.",
          },
          {
            type: "p",
            text: "Realiza una auditoría trimestral de SERP: toma tus 20-30 palabras clave principales por tráfico o valor comercial y busca cada una en una ventana de incógnito. Para cada consulta, anota: posición orgánica, si aparece un bloque de Shopping y si estás en él, si hay un featured snippet y quién lo tiene, si tus imágenes aparecen en los resultados de imágenes, si tu marca aparece en las cajas de PAA. Construye una cuadrícula simple y rastréala trimestre a trimestre. Verás exactamente dónde está el espacio en las SERP y quién lo está ganando.",
          },
          {
            type: "list",
            items: [
              "Informe de SERP Features de Semrush: muestra qué funciones de SERP se activan para tus palabras clave rastreadas y quién las tiene",
              "SERP Overview de Ahrefs: ofrece un desglose de todos los tipos de resultados para cualquier palabra clave",
              "Google Search Console: filtra por consulta para ver impresiones en todos los tipos de resultados incluidos Shopping e Imágenes",
              "Auditorías manuales en incógnito: sigue siendo la forma más fiable de ver exactamente lo que ve un usuario real para una consulta determinada",
              "Screaming Frog: rastrea tu sitio y exporta a escala los problemas de schema de Product faltante o texto alt de imagen",
            ],
          },
          {
            type: "tip",
            text: "Establece un recordatorio de calendario recurrente para el primer lunes de cada trimestre: auditoría de SERP de 30 minutos, las mismas 25 palabras clave, el mismo proceso. Después de dos o tres trimestres, tendrás una imagen clara de qué funciones estás ganando, perdiendo, y qué competidores aparecen consistentemente en funciones donde tú no estás. Eso es tu hoja de ruta.",
          },
        ],
      },
    ],
  },

  it: {
    nav: {
      prev: {
        href: "/guides/ranking-chatgpt",
        category: "SEO avanzato per ecommerce",
        title: "Posizionarsi su ChatGPT",
      },
    },
    sections: [
      {
        id: "what-serp-domination-means",
        title: "Cosa significa davvero dominare le SERP",
        blocks: [
          {
            type: "p",
            text: "Dominare le SERP non significa essere al primo posto. Significa occupare quanta più area visibile possibile su una pagina di risultati. Un sito ecommerce ben ottimizzato può apparire nei risultati organici, nei listati Google Shopping, nei risultati di immagini, nei featured snippet, nei sitelink e nel pannello della conoscenza, a volte tutto questo per una singola query. Questi sono cinque o sei punti di contatto in cui il tuo brand appare prima che un concorrente abbia anche solo una possibilità.",
          },
          {
            type: "p",
            text: "La maggior parte dei team ecommerce ottimizza per uno di questi canali e ignora gli altri. I negozi che dominano la loro categoria li fanno tutti. L'effetto combinato conta: se un utente vede il nome del tuo brand tre volte su una pagina di risultati, è molto più propenso a cliccare e molto più incline ad associare il tuo brand all'autorità in quella categoria.",
          },
          {
            type: "callout",
            title: "Inizia con un audit SERP",
            text: "Cerca ora le tue 10 parole chiave di categoria principali. Per ognuna, elenca ogni tipo di risultato che appare: organico, Shopping, immagini, box PAA, featured snippet. Poi chiediti: sono presente in ognuno di essi? Le tue lacune sono le tue priorità.",
          },
        ],
      },
      {
        id: "google-shopping",
        title: "Google Shopping: Inserzioni gratuite e ottimizzazione del feed prodotti",
        blocks: [
          {
            type: "p",
            text: "I risultati di Google Shopping appaiono in cima alla pagina per le query sui prodotti e portano molto traffico con alta intenzione d'acquisto. Ci sono due percorsi: le campagne Shopping a pagamento (Performance Max) e i listati di prodotti organici gratuiti nella scheda Shopping. Entrambi richiedono un feed prodotti inviato tramite Google Merchant Center.",
          },
          {
            type: "p",
            text: "Per i risultati Shopping organici, la qualità del tuo feed prodotti è tutto. Google estrae lo schema Product dalle tue pagine come segnale secondario, ma il feed Merchant Center ha la priorità. Assicurati che ogni prodotto abbia: un titolo chiaro e descrittivo (includi marca, nome del prodotto, attributo principale e taglia/colore se rilevante), prezzo e disponibilità accurati, GTIN o MPN se disponibile, e immagini ad alta risoluzione. I feed con errori vengono soppressi, quindi esegui la diagnostica Merchant Center mensilmente.",
          },
          {
            type: "checklist",
            items: [
              "Invia un feed prodotti completo a Google Merchant Center - titolo, descrizione, prezzo, disponibilità, link immagine, GTIN/MPN",
              "Usa titoli di prodotto descrittivi: '[Marca] [Nome prodotto] [Attributo chiave] [Taglia/Colore]'",
              "Mantieni accurati i dati di disponibilità - gli articoli esauriti mostrati come disponibili faranno segnalare il tuo account",
              "Aggiungi il markup schema Product a ogni pagina prodotto (prezzo, disponibilità, recensioni, GTIN)",
              "Configura aggiornamenti automatici del feed tramite il feed di pagine Merchant Center o uno strumento di feed dati come DataFeedWatch o Channable",
              "Rivedi la diagnostica Merchant Center almeno mensilmente per individuare i prodotti soppressi",
            ],
          },
          {
            type: "tip",
            text: "Il tag titolo della tua pagina prodotto influenza direttamente il titolo del tuo annuncio Shopping quando Google popola automaticamente i feed dal tuo sito. Formatta i tag titolo delle pagine prodotto così: [Nome prodotto] - [Marca] | [Nome del negozio]. Non seppellire il nome del prodotto alla fine.",
          },
        ],
      },
      {
        id: "featured-snippets",
        title: "Featured Snippet: Apparire sopra la posizione 1",
        blocks: [
          {
            type: "p",
            text: "I featured snippet appaiono sopra tutti i risultati organici per le query informazionali, e molte query informazionali legate ai prodotti li generano. Query come 'migliore scrivania regolabile in altezza sotto i 500 euro', 'come scegliere la rigidità di un materasso' o 'cos'è un filtro HEPA' producono comunemente featured snippet. Se il contenuto della tua guida all'acquisto riesce a guadagnarne uno, appari sopra ogni concorrente che occupa le posizioni da 1 a 10.",
          },
          {
            type: "p",
            text: "Il formato fa la differenza. Google estrae i featured snippet più spesso da pagine che già si posizionano nella top 10 per quella query. Devi prima posizionarti, poi guadagnare lo snippet. Per attivare snippet di paragrafo: scrivi una risposta concisa di 40-60 parole direttamente sotto un titolo H2 rilevante che corrisponde o è vicino alla query di ricerca. Per snippet di lista: usa liste numerate o puntate per contenuti 'i migliori' e 'come fare'. Per snippet di tabella: usa tabelle HTML corrette per i confronti di prodotti.",
          },
          {
            type: "tip",
            text: "Usa Google Search Console per trovare query dove ti posizioni nelle posizioni 5-15 e la SERP mostra un featured snippet. Queste sono le tue migliori opportunità perché sei abbastanza vicino da posizionarti e lo snippet è già disponibile. Riformatta quelle pagine per corrispondere alla struttura dello snippet.",
          },
          {
            type: "callout",
            title: "Il vantaggio del doppio risultato",
            text: "Quando detieni il featured snippet e appari anche organicamente nella posizione 1-3 per la stessa query, il tuo brand appare due volte sopra la piega. Questo è l'obiettivo. Traccia per quali query detieni snippet usando i filtri snippet di Semrush o Ahrefs.",
          },
        ],
      },
      {
        id: "image-results-and-visual-search",
        title: "Risultati di immagini e Google Lens",
        blocks: [
          {
            type: "p",
            text: "Per le categorie di prodotti visivi (moda, arredamento, decorazione casa, arte, piante, cibo), la ricerca di immagini è un canale di traffico reale, non un ripensamento. Google Immagini riceve miliardi di ricerche al mese. L'integrazione di Google Lens significa che un utente può fotografare un prodotto nel mondo reale e trovare dove acquistarlo. Se le tue immagini prodotto non sono ottimizzate, non esisti in quel flusso di lavoro.",
          },
          {
            type: "list",
            items: [
              "Nomi di file: usa slug descrittivi, non 'IMG_4392.jpg'. Usa 'tavolo-pranzo-quercia-180cm-naturale.webp'",
              "Testo alternativo: includi il nome del prodotto e un attributo principale, ad esempio 'Tavolo da pranzo in quercia massiccia 180cm, finitura naturale'. No keyword stuffing",
              "Formato: converti tutte le immagini prodotto in WebP. È più veloce e Google lo preferisce attivamente",
              "Dimensioni: usa formati quadrati o verticali coerenti per la fotografia di prodotto. Performano meglio nelle griglie di immagini",
              "Dati strutturati: lo schema ImageObject nelle pagine prodotto aiuta Google a capire il contesto delle tue immagini",
              "Immagini uniche: se usi le foto del produttore, Google potrebbe deprioritizzarle. La fotografia personalizzata vince nei risultati di immagini",
            ],
          },
          {
            type: "tip",
            text: "Aggiungi immagini prodotto al tuo feed Google Merchant Center. I prodotti con immagini nel feed appaiono negli annunci immagine di Shopping e nei risultati di ricerca visiva di Google Lens. La maggior parte dei negozi ecommerce non lo sfrutta e ti dà un vantaggio nelle categorie a dominanza visiva.",
          },
        ],
      },
      {
        id: "sitelinks-and-paa",
        title: "Sitelink e 'Le persone chiedono anche'",
        blocks: [
          {
            type: "p",
            text: "I sitelink sono i link aggiuntivi che appaiono sotto il tuo risultato principale per le ricerche di brand - mostrano le tue principali pagine di categoria o sezione direttamente nella SERP. Google li genera automaticamente quando l'architettura del tuo sito è chiara e ben collegata internamente. Non puoi forzarli, ma puoi renderli più probabili: collega le tue categorie principali chiaramente dalla homepage, usa etichette di navigazione coerenti e assicurati che le tue pagine più importanti ricevano il maggior numero di link interni.",
          },
          {
            type: "p",
            text: "Le box 'Le persone chiedono anche' (PAA) appaiono ora per la maggior parte delle ricerche. Per l'ecommerce, sono più comuni accanto a guide all'acquisto, pagine di categoria e query di confronto prodotti. Per entrare in PAA: scrivi una sezione FAQ dedicata in fondo alle tue pagine di categoria e guide all'acquisto, strutturata come domande reali con risposte dirette di 2-4 frasi. Usa il markup dello schema FAQ in modo che Google possa analizzarle facilmente.",
          },
          {
            type: "checklist",
            items: [
              "Collega le tue migliori 6-8 pagine di categoria direttamente dalla navigazione della homepage - sono candidate ai sitelink",
              "Usa testo di ancoraggio coerente e descrittivo per tutti i link interni alle pagine di categoria",
              "Aggiungi una sezione FAQ a ogni guida all'acquisto e a ogni pagina di categoria principale",
              "Marca il contenuto FAQ con lo schema FAQ (dati strutturati Domanda/Risposta)",
              "Usa AnswerThePublic o AlsoAsked.com per trovare le vere domande PAA nella tua categoria",
              "Mantieni le risposte FAQ a 40-80 parole - abbastanza concise per l'estrazione PAA, abbastanza complete per essere utili",
            ],
          },
          {
            type: "callout",
            title: "Sitelink in Search Console",
            text: "In Google Search Console, puoi vedere quali pagine Google ha scelto come candidate ai sitelink per le tue ricerche di brand sotto 'Risultati di ricerca'. Se le pagine sbagliate appaiono come sitelink, migliora i link interni verso le pagine che vuoi mostrare - più link interni = segnale più forte per Google di mostrare quella pagina.",
          },
        ],
      },
      {
        id: "measuring-serp-share",
        title: "Misurare e far crescere la tua quota SERP",
        blocks: [
          {
            type: "p",
            text: "La maggior parte dei team traccia le posizioni delle parole chiave. Quasi nessuno traccia la presenza SERP completa - in quali tipi di risultati appare, con quale frequenza e rispetto ai concorrenti. Quel punto cieco significa che probabilmente stai perdendo opportunità che hai proprio davanti a te.",
          },
          {
            type: "p",
            text: "Esegui un audit SERP trimestrale: prendi le tue 20-30 parole chiave principali per traffico o valore commerciale e cerca ognuna in una finestra in incognito. Per ogni query, annota: posizione organica, se appare un blocco Shopping e se sei incluso, se c'è un featured snippet e chi lo detiene, se le tue immagini appaiono nei risultati di immagini, se il tuo brand appare nelle box PAA. Costruisci una semplice griglia e seguila trimestre dopo trimestre. Vedrai esattamente dove si trova lo spazio SERP e chi lo sta vincendo.",
          },
          {
            type: "list",
            items: [
              "Report SERP Features di Semrush: mostra quali funzionalità SERP si attivano per le tue parole chiave tracciate e chi le detiene",
              "SERP Overview di Ahrefs: fornisce un dettaglio di tutti i tipi di risultati per qualsiasi parola chiave",
              "Google Search Console: filtra per query per vedere le impressioni su tutti i tipi di risultati inclusi Shopping e Immagini",
              "Audit manuali in incognito: ancora il modo più affidabile per vedere esattamente cosa vede un utente reale per una determinata query",
              "Screaming Frog: scansiona il tuo sito ed esporta su larga scala i problemi di schema Product mancante o di testo alt delle immagini",
            ],
          },
          {
            type: "tip",
            text: "Imposta un promemoria ricorrente nel calendario per il primo lunedì di ogni trimestre: audit SERP di 30 minuti, le stesse 25 parole chiave, lo stesso processo. Dopo due o tre trimestri avrai un quadro chiaro di quali funzionalità stai vincendo, perdendo e quali concorrenti appaiono costantemente in funzionalità dove non sei presente. Quella è la tua roadmap.",
          },
        ],
      },
    ],
  },

  nl: {
    nav: {
      prev: {
        href: "/guides/ranking-chatgpt",
        category: "Gevorderde e-commerce SEO",
        title: "Positioneren op ChatGPT",
      },
    },
    sections: [
      {
        id: "what-serp-domination-means",
        title: "Wat SERP-dominantie werkelijk betekent",
        blocks: [
          {
            type: "p",
            text: "SERP-dominantie gaat niet over de #1-positie. Het gaat over het innemen van zoveel mogelijk zichtbare ruimte op een zoekresultatenpagina. Een goed geoptimaliseerde e-commercesite kan verschijnen in organische resultaten, Google Shopping-vermeldingen, afbeeldingsresultaten, featured snippets, sitelinks en het kennispaneel - soms alles voor één enkele zoekopdracht. Dat zijn vijf of zes contactpunten waar jouw merk verschijnt voordat een concurrent ook maar een kans krijgt.",
          },
          {
            type: "p",
            text: "De meeste e-commerceteams optimaliseren voor één van deze kanalen en negeren de rest. De webshops die hun categorie domineren doen ze allemaal. Het cumulatieve effect is aanzienlijk: als een gebruiker jouw merknaam drie keer op één resultatenpagina ziet, is de kans veel groter dat ze klikken en dat ze jouw merk associëren met autoriteit in die categorie.",
          },
          {
            type: "callout",
            title: "Begin met een SERP-audit",
            text: "Zoek nu naar je 10 belangrijkste categorie-zoekwoorden. Noteer voor elk woord elk resultaattype dat verschijnt: organisch, Shopping, afbeeldingen, PAA-vakken, featured snippets. Vraag je dan af: ben ik aanwezig in elk van deze? Je lacunes zijn je prioriteiten.",
          },
        ],
      },
      {
        id: "google-shopping",
        title: "Google Shopping: Gratis vermeldingen en productfeed-optimalisatie",
        blocks: [
          {
            type: "p",
            text: "Google Shopping-resultaten verschijnen bovenaan de pagina voor productzoekopdrachten en genereren significant verkeer met koopintentie. Er zijn twee routes: betaalde Shopping-campagnes (Performance Max) en gratis organische productlijsten in het tabblad Shopping. Beide vereisen een productfeed ingediend via Google Merchant Center.",
          },
          {
            type: "p",
            text: "Voor organische Shopping-resultaten is de kwaliteit van je productfeed allesbepalend. Google trekt Product-schema van je pagina's als secundair signaal, maar de Merchant Center-feed heeft prioriteit. Zorg ervoor dat elk product heeft: een duidelijke, beschrijvende titel (inclusief merk, productnaam, kernattribuut en maat/kleur indien relevant), nauwkeurige prijs en beschikbaarheid, GTIN of MPN indien beschikbaar, en afbeeldingen met hoge resolutie. Feeds met fouten worden onderdrukt - voer maandelijks Merchant Center-diagnostics uit.",
          },
          {
            type: "checklist",
            items: [
              "Dien een volledig productfeed in bij Google Merchant Center - titel, beschrijving, prijs, beschikbaarheid, afbeeldingslink, GTIN/MPN",
              "Gebruik beschrijvende producttitels: '[Merk] [Productnaam] [Kernattribuut] [Maat/Kleur]'",
              "Houd beschikbaarheidsgegevens nauwkeurig - uitverkochte artikelen die als beschikbaar worden weergegeven, laten je account markeren",
              "Voeg Product-schema-opmaak toe aan elke productpagina (prijs, beschikbaarheid, beoordelingen, GTIN)",
              "Stel automatische feedupdates in via de paginafeed van Merchant Center of een datafeed-tool zoals DataFeedWatch of Channable",
              "Bekijk Merchant Center-diagnostics minstens maandelijks om onderdrukte producten te vinden",
            ],
          },
          {
            type: "tip",
            text: "Je productpagina-titeltag beïnvloedt direct je Shopping-advertentietitel wanneer Google feeds automatisch vult vanuit je site. Formatteer productpagina-titeltags als: [Productnaam] - [Merk] | [Winkelnaam]. Begraaf de productnaam niet aan het einde.",
          },
        ],
      },
      {
        id: "featured-snippets",
        title: "Featured Snippets: Verschijnen boven positie 1",
        blocks: [
          {
            type: "p",
            text: "Featured snippets verschijnen boven alle organische resultaten voor informatieve zoekopdrachten - en veel product-gerelateerde informatieve zoekopdrachten activeren ze. Zoekopdrachten als 'beste zit-sta bureau onder 500 euro', 'hoe kies ik de juiste matrassteefheid' of 'wat is een HEPA-filter' produceren vaak featured snippets. Als de content van je koopgids er een kan winnen, verschijn je boven elke concurrent op de posities 1 tot 10.",
          },
          {
            type: "p",
            text: "Het formaat doet ertoe. Google haalt featured snippets het vaakst uit pagina's die al in de top 10 staan voor die zoekopdracht. Je moet eerst ranken, dan de snippet winnen. Om paragraaf-snippets te activeren: schrijf een beknopt antwoord van 40-60 woorden direct onder een relevante H2-kop die overeenkomt met of dicht bij de zoekopdracht zit. Om lijst-snippets te activeren: gebruik genummerde of opsomming-lijsten voor 'beste' en 'hoe doe je'-content. Om tabel-snippets te activeren: gebruik correcte HTML-tabellen voor productvergelijkingen.",
          },
          {
            type: "tip",
            text: "Gebruik Google Search Console om zoekopdrachten te vinden waar je op posities 5-15 staat en de SERP een featured snippet toont. Dit zijn je beste kansen - je bent dicht genoeg bij het ranken en de snippet is al beschikbaar. Herformatteer die pagina's zodat ze overeenkomen met de snippetstructuur.",
          },
          {
            type: "callout",
            title: "Het voordeel van het dubbele resultaat",
            text: "Wanneer je de featured snippet houdt en ook organisch op positie 1-3 verschijnt voor dezelfde zoekopdracht, verschijnt je merk twee keer boven de vouw. Dat is het doel. Volg voor welke zoekopdrachten je snippets houdt via de snippet-filters in Semrush of Ahrefs.",
          },
        ],
      },
      {
        id: "image-results-and-visual-search",
        title: "Afbeeldingsresultaten en Google Lens",
        blocks: [
          {
            type: "p",
            text: "Voor visuele productcategorieën - mode, meubels, woondecoratie, kunst, planten, voedsel - is beeldzoeken een echt verkeerskanaal, geen bijzaak. Google Afbeeldingen krijgt miljarden zoekopdrachten per maand. De integratie van Google Lens betekent dat een gebruiker een product in de echte wereld kan fotograferen en kan vinden waar hij het kan kopen. Als je productafbeeldingen niet zijn geoptimaliseerd, besta je niet in die workflow.",
          },
          {
            type: "list",
            items: [
              "Bestandsnamen: gebruik beschrijvende slugs, niet 'IMG_4392.jpg'. Gebruik 'eiken-eettafel-180cm-naturel.webp'",
              "Alt-tekst: voeg de productnaam en één kernattribuut toe - 'Massief eiken eettafel 180cm, naturele afwerking'. Geen keyword-stuffing",
              "Formaat: converteer alle productafbeeldingen naar WebP. Het is sneller en Google geeft er de voorkeur aan",
              "Afmetingen: gebruik consistente vierkante of portretformaten voor productfotografie - deze presteren beter in afbeeldingsrasters",
              "Gestructureerde data: ImageObject-schema op productpagina's helpt Google de context van je afbeeldingen te begrijpen",
              "Unieke afbeeldingen: als je fabrikantenfoto's gebruikt, kan Google ze lager prioriteren. Eigen fotografie wint in afbeeldingsresultaten",
            ],
          },
          {
            type: "tip",
            text: "Voeg productafbeeldingen toe aan je Google Merchant Center-feed. Producten met afbeeldingen in de feed verschijnen in Shopping-afbeeldingsadvertenties en Google Lens-visuele zoekresultaten. De meeste e-commercewinkels maken hier geen gebruik van en geeft je een voordeel in visueel-gedreven categorieën.",
          },
        ],
      },
      {
        id: "sitelinks-and-paa",
        title: "Sitelinks en 'Mensen vragen ook'",
        blocks: [
          {
            type: "p",
            text: "Sitelinks zijn de aanvullende links die onder je hoofdresultaat verschijnen voor merksearches - ze tonen je belangrijkste categorie- of sectiepagina's direct in de SERP. Google genereert ze automatisch wanneer je sitestructuur duidelijk en intern goed gelinkt is. Je kunt ze niet forceren, maar je kunt ze waarschijnlijker maken: link je hoofdcategorieën duidelijk vanaf de homepage, gebruik consistente navigatielabels en zorg ervoor dat je belangrijkste pagina's de meeste interne links ontvangen.",
          },
          {
            type: "p",
            text: "'Mensen vragen ook' (PAA)-vakken verschijnen nu bij de meerderheid van zoekopdrachten. Voor e-commerce komen ze het vaakst voor bij koopgidsen, categoriepagina's en productvergelijkingszoekopdrachten. Om in PAA te komen: schrijf een speciale FAQ-sectie onderaan je categorie- en koopgidspagina's, gestructureerd als echte vragen met directe antwoorden van 2-4 zinnen. Gebruik FAQ-schema-opmaak zodat Google ze gemakkelijk kan parsen.",
          },
          {
            type: "checklist",
            items: [
              "Link je top 6-8 categoriepagina's direct vanuit de homepagenavigatie - dit zijn sitelink-kandidaten",
              "Gebruik consistente, beschrijvende ankertekst voor alle interne links naar categoriepagina's",
              "Voeg een FAQ-sectie toe aan elke koopgids en aan elke grote categoriepagina",
              "Markeer FAQ-content met FAQ-schema (gestructureerde data Vraag/Antwoord)",
              "Gebruik AnswerThePublic of AlsoAsked.com om echte PAA-vragen in jouw categorie te vinden",
              "Houd FAQ-antwoorden op 40-80 woorden - beknopt genoeg voor PAA-extractie, volledig genoeg om nuttig te zijn",
            ],
          },
          {
            type: "callout",
            title: "Sitelinks in Search Console",
            text: "In Google Search Console kun je onder 'Zoekresultaten' zien welke pagina's Google heeft gekozen als sitelink-kandidaten voor je merksearches. Als de verkeerde pagina's als sitelinks verschijnen, verbeter dan de interne links naar de pagina's die je wilt tonen - meer interne links = sterker signaal voor Google om die pagina te tonen.",
          },
        ],
      },
      {
        id: "measuring-serp-share",
        title: "Je SERP-aandeel meten en laten groeien",
        blocks: [
          {
            type: "p",
            text: "De meeste teams volgen zoekwoordposities. Vrijwel niemand volgt de volledige SERP-aanwezigheid - in welke resultaattypen ze verschijnen, hoe vaak, en vergeleken met concurrenten. Dat blinde vlak betekent dat je waarschijnlijk kansen mist die recht voor je neus liggen.",
          },
          {
            type: "p",
            text: "Voer een driemaandelijkse SERP-audit uit: neem je top 20-30 zoekwoorden op basis van verkeer of commerciële waarde en zoek elk ervan in een incognitovenster. Noteer voor elke zoekopdracht: organische positie, of er een Shopping-blok verschijnt en of je erin staat, of er een featured snippet is en wie die heeft, of je afbeeldingen verschijnen in afbeeldingsresultaten, of je merk verschijnt in PAA-vakken. Maak een eenvoudig raster en volg het kwartaal na kwartaal. Je ziet precies waar de SERP-ruimte is en wie die wint.",
          },
          {
            type: "list",
            items: [
              "Semrush SERP Features-rapport: toont welke SERP-functies worden geactiveerd voor je gevolgde zoekwoorden en wie ze bezit",
              "Ahrefs SERP Overview: geeft een uitsplitsing van alle resultaattypen voor elk zoekwoord",
              "Google Search Console: filter op zoekopdracht om impressies te zien voor alle resultaattypen inclusief Shopping en Afbeeldingen",
              "Handmatige incognito-audits: nog steeds de meest betrouwbare manier om precies te zien wat een echte gebruiker ziet voor een bepaalde zoekopdracht",
              "Screaming Frog: crawl je site en exporteer op schaal ontbrekende Product-schema- of afbeeldings-alt-tekst-problemen",
            ],
          },
          {
            type: "tip",
            text: "Stel een terugkerende kalenderherinnering in voor de eerste maandag van elk kwartaal: 30 minuten SERP-audit, dezelfde 25 zoekwoorden, hetzelfde proces. Na twee of drie kwartalen heb je een duidelijk beeld van welke functies je wint, verliest en welke concurrenten consistent verschijnen in functies waar jij niet aanwezig bent. Dat is jouw routekaart.",
          },
        ],
      },
    ],
  },
};
