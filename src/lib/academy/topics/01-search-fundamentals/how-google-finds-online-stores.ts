import type { AcademyTopic } from "../../types";

export const howGoogleFindsOnlineStores: AcademyTopic = {
  slug: "how-google-finds-online-stores",
  cluster: 1,
  resources: [{"label":"How Google Search Works","url":"https://www.google.com/search/howsearchworks/","type":"docs"},{"label":"Googlebot Overview","url":"https://developers.google.com/search/docs/crawling-indexing/googlebot","type":"docs"},{"label":"URL Inspection Tool","url":"https://support.google.com/webmasters/answer/9012289","type":"tool"},{"label":"Screaming Frog SEO Spider","url":"https://www.screamingfrog.co.uk/seo-spider/","type":"tool"}],
  content: {
    en: {
      badge: "Search Fundamentals",
      heading: "How Google Finds Online Stores",
      intro:
        "Before Google can rank your products, it needs to discover them. Understanding how Googlebot navigates ecommerce sites reveals why some stores get thousands of pages indexed while others struggle to get even their main category pages noticed.",
      readTime: "10 min read",
      sections: [
        {
          title: "How Googlebot Crawls Ecommerce Sites",
          content:
            "Googlebot is the software Google uses to fetch web pages. It works by following links from one page to the next, much like a shopper clicking through your store. When it lands on a page, it reads the HTML, follows links it finds there, and adds newly discovered URLs to its crawl queue.\n\nFor ecommerce sites, this crawling process hits complications fast. A homepage might link to 15 category pages, each linking to 20 subcategories, each listing 40 products. That is already 12,000 product pages discovered from a single crawl path. But Googlebot does not have unlimited resources. Google assigns each site a crawl budget based on the site's authority and server capacity.\n\nA mid-sized store with moderate domain authority might see Googlebot request 5,000 to 15,000 pages per day. If your store has 80,000 URLs including filtered views and pagination, it could take weeks for Googlebot to visit every page once. That is why crawl efficiency matters so much for ecommerce. Every URL Googlebot wastes on a low-value filtered page is a URL it did not spend on a product page you actually want ranked. Learn more about how this process continues in our guide to [crawling and indexing product pages](/academy/crawling-and-indexing-product-pages).",
          items: [
            "Googlebot follows links from page to page to discover URLs",
            "Each site gets a crawl budget based on authority and server speed",
            "Large stores may take weeks for full crawl coverage",
            "Low-value pages consume budget that could go to product pages",
          ],
        },
        {
          title: "The Crawl Queue and Priority System",
          content:
            "Googlebot does not crawl all pages equally. It maintains a priority queue that determines which URLs get crawled first and how often they get revisited. Pages that change frequently, receive more internal links, or have higher authority get crawled more often.\n\nYour homepage might get crawled several times per day. Top-level category pages may be crawled daily or every few days. Individual product pages deeper in the site structure might only get crawled every few weeks. For a seasonal product that just launched, that delay can mean missing weeks of potential search traffic.\n\nWe can influence crawl priority through internal linking. A product page linked from your homepage, a category page, and three blog posts will get crawled sooner and more frequently than one only accessible through two levels of category navigation. This is why strategic internal linking is one of the highest-impact SEO tactics for stores.",
          tip: "Check your crawl stats in Google Search Console under Settings > Crawl Stats. If the average response time exceeds 500ms, your server speed may be limiting how many pages Googlebot crawls per day.",
        },
        {
          title: "JavaScript Rendering and Ecommerce Platforms",
          content:
            "Many modern ecommerce platforms use JavaScript to load product information, pricing, and reviews. Shopify themes, React-based headless stores, and some WooCommerce setups rely heavily on client-side rendering. This creates a challenge because Googlebot crawls in two phases.\n\nIn the first phase, Googlebot fetches the raw HTML. If your product title, description, and price are loaded via JavaScript after the page renders, that initial HTML fetch returns an empty shell. Google then queues the page for a second rendering phase where it executes JavaScript. This rendering queue can add days or even weeks of delay before Google sees your actual content.\n\nShopify stores using the standard Liquid templating system generally avoid this problem because product data is rendered server-side. But stores using headless commerce setups with frameworks like Next.js or Nuxt need to implement server-side rendering (SSR) or static site generation (SSG) to ensure Googlebot sees product content on the first fetch.\n\nWe have audited stores where 30% of product pages were not indexed because the product schema markup, reviews, and even the product title were all loaded via JavaScript that Googlebot failed to render. Switching to server-side rendering fixed the indexation within three weeks. Our [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce) guide covers rendering issues in more detail.",
          items: [
            "Googlebot crawls in two phases: HTML fetch, then JavaScript rendering",
            "The rendering queue can delay content discovery by days or weeks",
            "Standard Shopify Liquid templates render server-side by default",
            "Headless setups need SSR or SSG for reliable indexation",
            "Test your pages with the URL Inspection tool to see what Google renders",
          ],
        },
        {
          title: "XML Sitemaps for Product Discovery",
          content:
            "An XML sitemap is a file that lists the URLs you want Google to know about. For ecommerce sites, sitemaps serve as a direct channel to tell Google which pages exist, when they were last updated, and how frequently they change.\n\nA well-structured ecommerce sitemap strategy uses multiple sitemap files. One sitemap for product pages, another for category pages, one for blog content, and one for static pages like your about page and shipping policy. This separation lets you monitor indexation by page type in Search Console.\n\nWe typically recommend including only canonical, indexable pages in your sitemaps. Filtered URLs, out-of-stock product pages you have set to noindex, and paginated listing pages beyond page one should be excluded. A sitemap that lists 200,000 URLs when only 30,000 are indexable sends a confusing signal to Google about your site's quality.\n\nMost ecommerce platforms generate sitemaps automatically. Shopify creates a sitemap.xml that includes products, collections, pages, and blog posts. WooCommerce with Yoast SEO or RankMath generates sitemaps with more configuration options. Regardless of platform, review your sitemap monthly to ensure it reflects your current site structure.",
          tip: "Submit your sitemaps in Google Search Console and check the coverage report after two weeks. If the ratio of indexed to submitted pages is below 70%, investigate why Google is choosing not to index a significant portion of your submitted URLs.",
        },
        {
          title: "Internal Links as Discovery Paths",
          content:
            "While sitemaps tell Google that pages exist, internal links show Google how those pages relate to each other and which ones matter most. A product page with 50 internal links pointing to it carries more crawl priority than one with only 2.\n\nCategory pages are the backbone of internal linking for ecommerce. Each category page links to dozens of products, passing crawl priority and ranking signals to those product pages. Well-structured breadcrumb navigation adds another layer of internal links, connecting products back to their parent categories and the homepage.\n\nCross-selling and related product sections create lateral internal links between products. When a product page for running shoes links to related laces, insoles, and socks, those connections help Googlebot discover more of your catalog while also distributing link equity across your store.\n\nOrphan pages are the enemy of discovery. An orphan page has no internal links pointing to it. It might exist in your sitemap, but if Googlebot cannot reach it by following links from any other page, it signals low importance. We frequently find orphan product pages in stores that have restructured their categories without updating internal links. A solid [site architecture for ecommerce](/academy/site-architecture-for-ecommerce) prevents these orphan page problems.",
          items: [
            "Category pages distribute crawl priority to product pages below them",
            "Breadcrumbs create upward internal link paths to categories and the homepage",
            "Related product sections build lateral links between products",
            "Orphan pages with no internal links get deprioritized by Google",
          ],
        },
        {
          title: "Common Discovery Problems in Ecommerce",
          content:
            "The most common discovery problem we see is stores blocking Googlebot from essential resources in their robots.txt file. Some WooCommerce installations block the /wp-admin/ directory, which is correct, but accidentally also block CSS and JavaScript files that Googlebot needs to render pages properly.\n\nAnother frequent issue is infinite crawl traps from faceted navigation. A clothing store that lets users combine size, color, material, brand, and price filters can generate millions of unique URLs. Without proper controls, Googlebot can spend its entire crawl budget exploring these filter combinations while never reaching deep product pages.\n\nSession-based URLs also cause problems. Some ecommerce platforms append session IDs or tracking parameters to URLs, creating what looks like thousands of duplicate pages. Each visit by Googlebot generates a new URL variant, wasting crawl budget on pages that are all identical in content.\n\nPagination can slow discovery too. If your category page lists 500 products across 25 paginated pages, Googlebot needs to crawl through page 1, page 2, page 3, and so on to discover all products. Products listed on page 20 may take significantly longer to get discovered and indexed than those on page 1.",
          items: [
            "Check robots.txt to ensure CSS and JS files are not blocked",
            "Implement controls on faceted navigation to prevent crawl traps",
            "Use canonical tags to handle session IDs and tracking parameters",
            "Consider loading more products per page to reduce pagination depth",
          ],
        },
      ],
      navLabels: {
        previous: "Introduction to Ecommerce SEO",
        next: "Crawling & Indexing Product Pages",
      },
    },
    de: {
      badge: "Suchmaschinen-Grundlagen",
      heading: "Wie Google Online-Shops findet",
      intro:
        "Bevor Google Ihre Produkte ranken kann, muss es sie erst entdecken. Zu verstehen, wie Googlebot Ecommerce-Websites navigiert, zeigt, warum manche Shops Tausende Seiten indexiert bekommen, w\u00e4hrend andere Schwierigkeiten haben, selbst ihre Hauptkategorieseiten bemerkt zu bekommen.",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "Wie Googlebot Ecommerce-Seiten crawlt",
          content:
            "Googlebot ist die Software, die Google zum Abrufen von Webseiten verwendet. Sie funktioniert, indem sie Links von einer Seite zur n\u00e4chsten folgt, \u00e4hnlich wie ein K\u00e4ufer, der durch Ihren Shop klickt. Wenn sie auf einer Seite landet, liest sie das HTML, folgt den gefundenen Links und f\u00fcgt neu entdeckte URLs zu ihrer Crawl-Warteschlange hinzu.\n\nF\u00fcr Ecommerce-Seiten st\u00f6\u00dft dieser Crawling-Prozess schnell auf Komplikationen. Eine Startseite verlinkt m\u00f6glicherweise auf 15 Kategorieseiten, von denen jede auf 20 Unterkategorien verlinkt, die jeweils 40 Produkte auflisten. Das sind bereits 12.000 Produktseiten, die \u00fcber einen einzigen Crawl-Pfad entdeckt werden. Aber Googlebot hat keine unbegrenzten Ressourcen. Google weist jeder Website ein Crawl-Budget basierend auf der Autorit\u00e4t und Serverkapazit\u00e4t der Website zu.\n\nEin mittelgro\u00dfer Shop mit moderater Domain-Autorit\u00e4t sieht m\u00f6glicherweise, dass Googlebot 5.000 bis 15.000 Seiten pro Tag abruft. Wenn Ihr Shop 80.000 URLs inklusive gefilterter Ansichten und Paginierung hat, kann es Wochen dauern, bis Googlebot jede Seite einmal besucht hat. Deshalb ist Crawl-Effizienz f\u00fcr Ecommerce so wichtig. Jede URL, die Googlebot f\u00fcr eine wertlose Filterseite verschwendet, ist eine URL, die nicht f\u00fcr eine Produktseite verwendet wurde, die Sie tats\u00e4chlich ranken lassen m\u00f6chten.",
          items: [
            "Googlebot folgt Links von Seite zu Seite, um URLs zu entdecken",
            "Jede Website bekommt ein Crawl-Budget basierend auf Autorit\u00e4t und Servergeschwindigkeit",
            "Gro\u00dfe Shops ben\u00f6tigen m\u00f6glicherweise Wochen f\u00fcr vollst\u00e4ndige Crawl-Abdeckung",
            "Wertlose Seiten verbrauchen Budget, das f\u00fcr Produktseiten genutzt werden k\u00f6nnte",
          ],
        },
        {
          title: "Die Crawl-Warteschlange und das Priorit\u00e4tssystem",
          content:
            "Googlebot crawlt nicht alle Seiten gleich. Es pflegt eine Priorit\u00e4tswarteschlange, die bestimmt, welche URLs zuerst gecrawlt und wie oft sie erneut besucht werden. Seiten, die sich h\u00e4ufig \u00e4ndern, mehr interne Links erhalten oder h\u00f6here Autorit\u00e4t haben, werden \u00f6fter gecrawlt.\n\nIhre Startseite wird m\u00f6glicherweise mehrmals t\u00e4glich gecrawlt. Kategorie-Hauptseiten werden t\u00e4glich oder alle paar Tage gecrawlt. Einzelne Produktseiten tiefer in der Seitenstruktur werden m\u00f6glicherweise nur alle paar Wochen gecrawlt. F\u00fcr ein saisonales Produkt, das gerade gestartet wurde, kann diese Verz\u00f6gerung bedeuten, dass wochenlang potentieller Suchtraffic verpasst wird.\n\nWir k\u00f6nnen die Crawl-Priorit\u00e4t durch interne Verlinkung beeinflussen. Eine Produktseite, die von Ihrer Startseite, einer Kategorieseite und drei Blogbeitr\u00e4gen verlinkt wird, wird fr\u00fcher und h\u00e4ufiger gecrawlt als eine, die nur \u00fcber zwei Ebenen der Kategorienavigation erreichbar ist. Deshalb ist strategische interne Verlinkung eine der wirkungsvollsten SEO-Taktiken f\u00fcr Shops.",
          tip: "Pr\u00fcfen Sie Ihre Crawl-Statistiken in der Google Search Console unter Einstellungen > Crawling-Statistiken. Wenn die durchschnittliche Antwortzeit 500 ms \u00fcberschreitet, kann Ihre Servergeschwindigkeit begrenzen, wie viele Seiten Googlebot pro Tag crawlt.",
        },
        {
          title: "JavaScript-Rendering und Ecommerce-Plattformen",
          content:
            "Viele moderne Ecommerce-Plattformen verwenden JavaScript, um Produktinformationen, Preise und Bewertungen zu laden. Shopify-Themes, React-basierte Headless-Shops und einige WooCommerce-Setups verlassen sich stark auf clientseitiges Rendering. Das schafft eine Herausforderung, weil Googlebot in zwei Phasen crawlt.\n\nIn der ersten Phase ruft Googlebot das rohe HTML ab. Wenn Ihr Produkttitel, Ihre Beschreibung und Ihr Preis \u00fcber JavaScript nach dem Seitenrendering geladen werden, liefert dieser erste HTML-Abruf eine leere H\u00fclle. Google reiht die Seite dann f\u00fcr eine zweite Rendering-Phase ein, in der JavaScript ausgef\u00fchrt wird. Diese Rendering-Warteschlange kann Tage oder sogar Wochen Verz\u00f6gerung hinzuf\u00fcgen, bevor Google Ihren tats\u00e4chlichen Inhalt sieht.\n\nShopify-Shops, die das Standard-Liquid-Templating-System verwenden, vermeiden dieses Problem generell, da Produktdaten serverseitig gerendert werden. Aber Shops, die Headless-Commerce-Setups mit Frameworks wie Next.js oder Nuxt verwenden, m\u00fcssen serverseitiges Rendering (SSR) oder statische Seitengenerierung (SSG) implementieren, um sicherzustellen, dass Googlebot den Produktinhalt beim ersten Abruf sieht.\n\nWir haben Shops auditiert, bei denen 30 % der Produktseiten nicht indexiert waren, weil das Produkt-Schema-Markup, die Bewertungen und sogar der Produkttitel alle \u00fcber JavaScript geladen wurden, das Googlebot nicht rendern konnte. Der Wechsel zu serverseitigem Rendering hat die Indexierung innerhalb von drei Wochen korrigiert.",
          items: [
            "Googlebot crawlt in zwei Phasen: HTML-Abruf, dann JavaScript-Rendering",
            "Die Rendering-Warteschlange kann die Inhaltsentdeckung um Tage oder Wochen verz\u00f6gern",
            "Standard-Shopify-Liquid-Templates rendern standardm\u00e4\u00dfig serverseitig",
            "Headless-Setups ben\u00f6tigen SSR oder SSG f\u00fcr zuverl\u00e4ssige Indexierung",
            "Testen Sie Ihre Seiten mit dem URL-Pr\u00fcftool, um zu sehen, was Google rendert",
          ],
        },
        {
          title: "XML-Sitemaps f\u00fcr die Produktentdeckung",
          content:
            "Eine XML-Sitemap ist eine Datei, die die URLs auflistet, die Google kennen soll. F\u00fcr Ecommerce-Seiten dienen Sitemaps als direkter Kanal, um Google mitzuteilen, welche Seiten existieren, wann sie zuletzt aktualisiert wurden und wie h\u00e4ufig sie sich \u00e4ndern.\n\nEine gut strukturierte Ecommerce-Sitemap-Strategie verwendet mehrere Sitemap-Dateien. Eine Sitemap f\u00fcr Produktseiten, eine weitere f\u00fcr Kategorieseiten, eine f\u00fcr Blog-Inhalte und eine f\u00fcr statische Seiten wie Ihre \u00dcber-uns-Seite und Versandrichtlinie. Diese Trennung erm\u00f6glicht es Ihnen, die Indexierung nach Seitentyp in der Search Console zu \u00fcberwachen.\n\nWir empfehlen typischerweise, nur kanonische, indexierbare Seiten in Ihre Sitemaps aufzunehmen. Gefilterte URLs, nicht vorr\u00e4tige Produktseiten, die auf noindex gesetzt sind, und paginierte Listenseiten jenseits von Seite eins sollten ausgeschlossen werden. Eine Sitemap, die 200.000 URLs auflistet, obwohl nur 30.000 indexierbar sind, sendet ein verwirrendes Signal an Google \u00fcber die Qualit\u00e4t Ihrer Website.\n\nDie meisten Ecommerce-Plattformen generieren Sitemaps automatisch. Shopify erstellt eine sitemap.xml, die Produkte, Kollektionen, Seiten und Blogbeitr\u00e4ge enth\u00e4lt. WooCommerce mit Yoast SEO oder RankMath generiert Sitemaps mit mehr Konfigurationsoptionen. Unabh\u00e4ngig von der Plattform sollten Sie Ihre Sitemap monatlich \u00fcberpr\u00fcfen, um sicherzustellen, dass sie Ihre aktuelle Seitenstruktur widerspiegelt.",
          tip: "Reichen Sie Ihre Sitemaps in der Google Search Console ein und pr\u00fcfen Sie den Abdeckungsbericht nach zwei Wochen. Wenn das Verh\u00e4ltnis von indexierten zu eingereichten Seiten unter 70 % liegt, untersuchen Sie, warum Google sich entscheidet, einen erheblichen Teil Ihrer eingereichten URLs nicht zu indexieren.",
        },
        {
          title: "Interne Links als Entdeckungspfade",
          content:
            "W\u00e4hrend Sitemaps Google mitteilen, dass Seiten existieren, zeigen interne Links Google, wie diese Seiten zueinander in Beziehung stehen und welche am wichtigsten sind. Eine Produktseite mit 50 internen Links, die auf sie verweisen, hat mehr Crawl-Priorit\u00e4t als eine mit nur 2.\n\nKategorieseiten sind das R\u00fcckgrat der internen Verlinkung f\u00fcr Ecommerce. Jede Kategorieseite verlinkt auf Dutzende von Produkten und gibt dabei Crawl-Priorit\u00e4t und Ranking-Signale an diese Produktseiten weiter. Gut strukturierte Breadcrumb-Navigation f\u00fcgt eine weitere Ebene interner Links hinzu und verbindet Produkte zur\u00fcck mit ihren \u00fcbergeordneten Kategorien und der Startseite.\n\nCross-Selling- und verwandte Produktbereiche schaffen laterale interne Links zwischen Produkten. Wenn eine Produktseite f\u00fcr Laufschuhe auf verwandte Schn\u00fcrsenkel, Einlegesohlen und Socken verlinkt, helfen diese Verbindungen Googlebot, mehr von Ihrem Katalog zu entdecken, w\u00e4hrend sie gleichzeitig Link-Equity \u00fcber Ihren Shop verteilen.\n\nVerwaiste Seiten sind der Feind der Entdeckung. Eine verwaiste Seite hat keine internen Links, die auf sie verweisen. Sie existiert m\u00f6glicherweise in Ihrer Sitemap, aber wenn Googlebot sie nicht durch Folgen von Links von einer anderen Seite erreichen kann, signalisiert das geringe Wichtigkeit. Wir finden h\u00e4ufig verwaiste Produktseiten in Shops, die ihre Kategorien umstrukturiert haben, ohne die internen Links zu aktualisieren.",
          items: [
            "Kategorieseiten verteilen Crawl-Priorit\u00e4t an die darunter liegenden Produktseiten",
            "Breadcrumbs erstellen aufw\u00e4rts gerichtete interne Link-Pfade zu Kategorien und zur Startseite",
            "Verwandte Produktbereiche bauen laterale Links zwischen Produkten auf",
            "Verwaiste Seiten ohne interne Links werden von Google deprioritisiert",
          ],
        },
        {
          title: "H\u00e4ufige Entdeckungsprobleme im Ecommerce",
          content:
            "Das h\u00e4ufigste Entdeckungsproblem, das wir sehen, sind Shops, die Googlebot den Zugriff auf wesentliche Ressourcen in ihrer robots.txt-Datei blockieren. Einige WooCommerce-Installationen blockieren das /wp-admin/-Verzeichnis, was korrekt ist, aber versehentlich auch CSS- und JavaScript-Dateien blockieren, die Googlebot zum korrekten Rendern von Seiten ben\u00f6tigt.\n\nEin weiteres h\u00e4ufiges Problem sind endlose Crawl-Fallen durch facettierte Navigation. Ein Bekleidungsgesch\u00e4ft, das Benutzern erlaubt, Gr\u00f6\u00dfe, Farbe, Material, Marke und Preisfilter zu kombinieren, kann Millionen einzigartiger URLs erzeugen. Ohne angemessene Kontrollen kann Googlebot sein gesamtes Crawl-Budget damit verbringen, diese Filterkombinationen zu erkunden, w\u00e4hrend es nie tiefe Produktseiten erreicht.\n\nSession-basierte URLs verursachen ebenfalls Probleme. Einige Ecommerce-Plattformen h\u00e4ngen Session-IDs oder Tracking-Parameter an URLs an, wodurch Tausende scheinbar doppelter Seiten entstehen. Jeder Besuch von Googlebot generiert eine neue URL-Variante, die Crawl-Budget f\u00fcr Seiten verschwendet, die alle identischen Inhalt haben.\n\nPaginierung kann die Entdeckung ebenfalls verlangsamen. Wenn Ihre Kategorieseite 500 Produkte auf 25 paginierten Seiten auflistet, muss Googlebot durch Seite 1, Seite 2, Seite 3 und so weiter crawlen, um alle Produkte zu entdecken. Produkte auf Seite 20 ben\u00f6tigen m\u00f6glicherweise deutlich l\u00e4nger f\u00fcr Entdeckung und Indexierung als solche auf Seite 1.",
          items: [
            "Pr\u00fcfen Sie die robots.txt, um sicherzustellen, dass CSS- und JS-Dateien nicht blockiert sind",
            "Implementieren Sie Kontrollen f\u00fcr facettierte Navigation, um Crawl-Fallen zu verhindern",
            "Verwenden Sie Canonical-Tags f\u00fcr Session-IDs und Tracking-Parameter",
            "Erw\u00e4gen Sie, mehr Produkte pro Seite zu laden, um die Paginierungstiefe zu reduzieren",
          ],
        },
      ],
      navLabels: {
        previous: "Einf\u00fchrung in Ecommerce-SEO",
        next: "Crawling & Indexierung von Produktseiten",
      },
    },
    fr: {
      badge: "Fondamentaux de la recherche",
      heading: "Comment Google trouve les boutiques en ligne",
      intro:
        "Avant que Google puisse classer vos produits, il doit d'abord les d\u00e9couvrir. Comprendre comment Googlebot navigue sur les sites e-commerce r\u00e9v\u00e8le pourquoi certaines boutiques obtiennent des milliers de pages index\u00e9es tandis que d'autres peinent \u00e0 faire remarquer m\u00eame leurs pages de cat\u00e9gorie principales.",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Comment Googlebot explore les sites e-commerce",
          content:
            "Googlebot est le logiciel que Google utilise pour r\u00e9cup\u00e9rer les pages web. Il fonctionne en suivant les liens d'une page \u00e0 l'autre, un peu comme un acheteur qui clique \u00e0 travers votre boutique. Quand il arrive sur une page, il lit le HTML, suit les liens qu'il y trouve et ajoute les nouvelles URLs d\u00e9couvertes \u00e0 sa file de crawl.\n\nPour les sites e-commerce, ce processus de crawl rencontre rapidement des complications. Une page d'accueil peut lier vers 15 pages de cat\u00e9gories, chacune reliant vers 20 sous-cat\u00e9gories, chacune listant 40 produits. Cela fait d\u00e9j\u00e0 12 000 pages de produits d\u00e9couvertes \u00e0 partir d'un seul chemin de crawl. Mais Googlebot n'a pas de ressources illimit\u00e9es. Google attribue \u00e0 chaque site un budget de crawl bas\u00e9 sur l'autorit\u00e9 du site et la capacit\u00e9 du serveur.\n\nUne boutique de taille moyenne avec une autorit\u00e9 de domaine mod\u00e9r\u00e9e pourrait voir Googlebot demander 5 000 \u00e0 15 000 pages par jour. Si votre boutique a 80 000 URLs incluant les vues filtr\u00e9es et la pagination, cela pourrait prendre des semaines \u00e0 Googlebot pour visiter chaque page une fois. C'est pourquoi l'efficacit\u00e9 du crawl compte autant pour le e-commerce. Chaque URL que Googlebot gaspille sur une page filtr\u00e9e sans valeur est une URL qu'il n'a pas consacr\u00e9e \u00e0 une page produit que vous voulez r\u00e9ellement classer.",
          items: [
            "Googlebot suit les liens de page en page pour d\u00e9couvrir les URLs",
            "Chaque site re\u00e7oit un budget de crawl bas\u00e9 sur l'autorit\u00e9 et la vitesse du serveur",
            "Les grandes boutiques peuvent n\u00e9cessiter des semaines pour une couverture compl\u00e8te",
            "Les pages sans valeur consomment du budget qui pourrait aller aux pages produits",
          ],
        },
        {
          title: "La file d'attente de crawl et le syst\u00e8me de priorit\u00e9",
          content:
            "Googlebot ne crawle pas toutes les pages de la m\u00eame mani\u00e8re. Il maintient une file de priorit\u00e9 qui d\u00e9termine quelles URLs sont explor\u00e9es en premier et \u00e0 quelle fr\u00e9quence elles sont revisit\u00e9es. Les pages qui changent fr\u00e9quemment, re\u00e7oivent plus de liens internes ou ont une autorit\u00e9 plus \u00e9lev\u00e9e sont crawl\u00e9es plus souvent.\n\nVotre page d'accueil peut \u00eatre crawl\u00e9e plusieurs fois par jour. Les pages de cat\u00e9gories de premier niveau peuvent \u00eatre crawl\u00e9es quotidiennement ou tous les quelques jours. Les pages de produits individuelles plus profondes dans la structure du site ne sont peut-\u00eatre crawl\u00e9es que toutes les quelques semaines. Pour un produit saisonnier qui vient d'\u00eatre lanc\u00e9, ce d\u00e9lai peut signifier manquer des semaines de trafic de recherche potentiel.\n\nNous pouvons influencer la priorit\u00e9 de crawl gr\u00e2ce aux liens internes. Une page produit li\u00e9e depuis votre page d'accueil, une page de cat\u00e9gorie et trois articles de blog sera crawl\u00e9e plus t\u00f4t et plus fr\u00e9quemment qu'une page accessible uniquement via deux niveaux de navigation par cat\u00e9gorie. C'est pourquoi le maillage interne strat\u00e9gique est l'une des tactiques SEO les plus impactantes pour les boutiques.",
          tip: "V\u00e9rifiez vos statistiques de crawl dans Google Search Console sous Param\u00e8tres > Statistiques d'exploration. Si le temps de r\u00e9ponse moyen d\u00e9passe 500 ms, la vitesse de votre serveur peut limiter le nombre de pages que Googlebot explore par jour.",
        },
        {
          title: "Rendu JavaScript et plateformes e-commerce",
          content:
            "De nombreuses plateformes e-commerce modernes utilisent JavaScript pour charger les informations produit, les prix et les avis. Les th\u00e8mes Shopify, les boutiques headless bas\u00e9es sur React et certaines configurations WooCommerce reposent fortement sur le rendu c\u00f4t\u00e9 client. Cela cr\u00e9e un d\u00e9fi car Googlebot explore en deux phases.\n\nDans la premi\u00e8re phase, Googlebot r\u00e9cup\u00e8re le HTML brut. Si le titre de votre produit, sa description et son prix sont charg\u00e9s via JavaScript apr\u00e8s le rendu de la page, cette premi\u00e8re r\u00e9cup\u00e9ration HTML renvoie une coquille vide. Google met ensuite la page en file d'attente pour une deuxi\u00e8me phase de rendu o\u00f9 il ex\u00e9cute le JavaScript. Cette file de rendu peut ajouter des jours, voire des semaines de d\u00e9lai avant que Google ne voie votre contenu r\u00e9el.\n\nLes boutiques Shopify utilisant le syst\u00e8me de templates Liquid standard \u00e9vitent g\u00e9n\u00e9ralement ce probl\u00e8me car les donn\u00e9es produit sont rendues c\u00f4t\u00e9 serveur. Mais les boutiques utilisant des configurations headless avec des frameworks comme Next.js ou Nuxt doivent impl\u00e9menter le rendu c\u00f4t\u00e9 serveur (SSR) ou la g\u00e9n\u00e9ration de sites statiques (SSG) pour garantir que Googlebot voie le contenu produit d\u00e8s la premi\u00e8re r\u00e9cup\u00e9ration.\n\nNous avons audit\u00e9 des boutiques o\u00f9 30 % des pages produits n'\u00e9taient pas index\u00e9es parce que le balisage schema produit, les avis et m\u00eame le titre du produit \u00e9taient tous charg\u00e9s via JavaScript que Googlebot n'avait pas r\u00e9ussi \u00e0 rendre. Le passage au rendu c\u00f4t\u00e9 serveur a corrig\u00e9 l'indexation en trois semaines.",
          items: [
            "Googlebot explore en deux phases : r\u00e9cup\u00e9ration HTML, puis rendu JavaScript",
            "La file de rendu peut retarder la d\u00e9couverte du contenu de jours ou semaines",
            "Les templates Liquid Shopify standard font le rendu c\u00f4t\u00e9 serveur par d\u00e9faut",
            "Les configurations headless n\u00e9cessitent SSR ou SSG pour une indexation fiable",
            "Testez vos pages avec l'outil d'inspection d'URL pour voir ce que Google rend",
          ],
        },
        {
          title: "Sitemaps XML pour la d\u00e9couverte des produits",
          content:
            "Un sitemap XML est un fichier qui liste les URLs dont vous voulez que Google ait connaissance. Pour les sites e-commerce, les sitemaps servent de canal direct pour indiquer \u00e0 Google quelles pages existent, quand elles ont \u00e9t\u00e9 mises \u00e0 jour pour la derni\u00e8re fois et \u00e0 quelle fr\u00e9quence elles changent.\n\nUne strat\u00e9gie de sitemap e-commerce bien structur\u00e9e utilise plusieurs fichiers de sitemap. Un sitemap pour les pages produits, un autre pour les pages cat\u00e9gories, un pour le contenu du blog et un pour les pages statiques comme votre page \u00e0 propos et votre politique de livraison. Cette s\u00e9paration vous permet de surveiller l'indexation par type de page dans la Search Console.\n\nNous recommandons g\u00e9n\u00e9ralement de n'inclure que les pages canoniques et indexables dans vos sitemaps. Les URLs filtr\u00e9es, les pages de produits en rupture de stock que vous avez mises en noindex et les pages de listing pagin\u00e9es au-del\u00e0 de la page un devraient \u00eatre exclues. Un sitemap qui liste 200 000 URLs alors que seulement 30 000 sont indexables envoie un signal confus \u00e0 Google sur la qualit\u00e9 de votre site.\n\nLa plupart des plateformes e-commerce g\u00e9n\u00e8rent des sitemaps automatiquement. Shopify cr\u00e9e un sitemap.xml qui inclut les produits, collections, pages et articles de blog. WooCommerce avec Yoast SEO ou RankMath g\u00e9n\u00e8re des sitemaps avec plus d'options de configuration. Quelle que soit la plateforme, passez en revue votre sitemap mensuellement pour vous assurer qu'il refl\u00e8te la structure actuelle de votre site.",
          tip: "Soumettez vos sitemaps dans Google Search Console et v\u00e9rifiez le rapport de couverture apr\u00e8s deux semaines. Si le ratio de pages index\u00e9es par rapport aux pages soumises est inf\u00e9rieur \u00e0 70 %, recherchez pourquoi Google choisit de ne pas indexer une partie significative de vos URLs soumises.",
        },
        {
          title: "Les liens internes comme chemins de d\u00e9couverte",
          content:
            "Si les sitemaps indiquent \u00e0 Google que des pages existent, les liens internes lui montrent comment ces pages sont reli\u00e9es entre elles et lesquelles comptent le plus. Une page produit avec 50 liens internes pointant vers elle a plus de priorit\u00e9 de crawl qu'une page qui n'en a que 2.\n\nLes pages de cat\u00e9gories sont l'\u00e9pine dorsale du maillage interne en e-commerce. Chaque page de cat\u00e9gorie lie vers des dizaines de produits, transmettant la priorit\u00e9 de crawl et les signaux de classement \u00e0 ces pages produits. Une navigation par fil d'Ariane bien structur\u00e9e ajoute une couche suppl\u00e9mentaire de liens internes, connectant les produits \u00e0 leurs cat\u00e9gories parentes et \u00e0 la page d'accueil.\n\nLes sections de vente crois\u00e9e et de produits associ\u00e9s cr\u00e9ent des liens internes lat\u00e9raux entre produits. Quand une page produit de chaussures de course lie vers des lacets, semelles et chaussettes associ\u00e9s, ces connexions aident Googlebot \u00e0 d\u00e9couvrir davantage de votre catalogue tout en distribuant l'\u00e9quit\u00e9 de liens \u00e0 travers votre boutique.\n\nLes pages orphelines sont l'ennemi de la d\u00e9couverte. Une page orpheline n'a aucun lien interne pointant vers elle. Elle peut exister dans votre sitemap, mais si Googlebot ne peut pas l'atteindre en suivant des liens depuis une autre page, cela signale une faible importance. Nous trouvons fr\u00e9quemment des pages produits orphelines dans les boutiques qui ont restructur\u00e9 leurs cat\u00e9gories sans mettre \u00e0 jour les liens internes.",
          items: [
            "Les pages de cat\u00e9gories distribuent la priorit\u00e9 de crawl aux pages produits en dessous",
            "Le fil d'Ariane cr\u00e9e des chemins de liens internes ascendants vers les cat\u00e9gories et l'accueil",
            "Les sections de produits associ\u00e9s construisent des liens lat\u00e9raux entre produits",
            "Les pages orphelines sans liens internes sont d\u00e9prioris\u00e9es par Google",
          ],
        },
        {
          title: "Probl\u00e8mes de d\u00e9couverte courants en e-commerce",
          content:
            "Le probl\u00e8me de d\u00e9couverte le plus courant que nous rencontrons est celui des boutiques qui bloquent Googlebot de ressources essentielles dans leur fichier robots.txt. Certaines installations WooCommerce bloquent le r\u00e9pertoire /wp-admin/, ce qui est correct, mais bloquent aussi accidentellement les fichiers CSS et JavaScript dont Googlebot a besoin pour rendre les pages correctement.\n\nUn autre probl\u00e8me fr\u00e9quent est les pi\u00e8ges de crawl infinis caus\u00e9s par la navigation \u00e0 facettes. Une boutique de v\u00eatements qui permet aux utilisateurs de combiner les filtres de taille, couleur, mati\u00e8re, marque et prix peut g\u00e9n\u00e9rer des millions d'URLs uniques. Sans contr\u00f4les appropri\u00e9s, Googlebot peut d\u00e9penser tout son budget de crawl \u00e0 explorer ces combinaisons de filtres sans jamais atteindre les pages produits profondes.\n\nLes URLs bas\u00e9es sur les sessions causent aussi des probl\u00e8mes. Certaines plateformes e-commerce ajoutent des identifiants de session ou des param\u00e8tres de tracking aux URLs, cr\u00e9ant ce qui ressemble \u00e0 des milliers de pages dupliqu\u00e9es. Chaque visite de Googlebot g\u00e9n\u00e8re une nouvelle variante d'URL, gaspillant le budget de crawl sur des pages au contenu identique.\n\nLa pagination peut aussi ralentir la d\u00e9couverte. Si votre page de cat\u00e9gorie liste 500 produits sur 25 pages pagin\u00e9es, Googlebot doit crawler la page 1, la page 2, la page 3, et ainsi de suite pour d\u00e9couvrir tous les produits. Les produits list\u00e9s en page 20 peuvent prendre significativement plus de temps \u00e0 \u00eatre d\u00e9couverts et index\u00e9s que ceux en page 1.",
          items: [
            "V\u00e9rifiez le robots.txt pour s'assurer que les fichiers CSS et JS ne sont pas bloqu\u00e9s",
            "Mettez en place des contr\u00f4les sur la navigation \u00e0 facettes pour pr\u00e9venir les pi\u00e8ges de crawl",
            "Utilisez des balises canonical pour g\u00e9rer les IDs de session et les param\u00e8tres de tracking",
            "Envisagez de charger plus de produits par page pour r\u00e9duire la profondeur de pagination",
          ],
        },
      ],
      navLabels: {
        previous: "Introduction au SEO e-commerce",
        next: "Crawl et indexation des pages produits",
      },
    },
    es: {
      badge: "Fundamentos de b\u00fasqueda",
      heading: "C\u00f3mo Google encuentra tiendas online",
      intro:
        "Antes de que Google pueda posicionar tus productos, necesita descubrirlos. Entender c\u00f3mo Googlebot navega por los sitios de ecommerce revela por qu\u00e9 algunas tiendas consiguen miles de p\u00e1ginas indexadas mientras otras luchan por que se noten incluso sus p\u00e1ginas de categor\u00eda principales.",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "C\u00f3mo Googlebot rastrea sitios de ecommerce",
          content:
            "Googlebot es el software que Google usa para obtener p\u00e1ginas web. Funciona siguiendo enlaces de una p\u00e1gina a la siguiente, similar a un comprador que navega por tu tienda. Cuando llega a una p\u00e1gina, lee el HTML, sigue los enlaces que encuentra y a\u00f1ade las URLs reci\u00e9n descubiertas a su cola de rastreo.\n\nPara sitios de ecommerce, este proceso de rastreo encuentra complicaciones r\u00e1pidamente. Una p\u00e1gina de inicio puede enlazar a 15 p\u00e1ginas de categor\u00eda, cada una enlazando a 20 subcategor\u00edas, cada una listando 40 productos. Eso ya son 12.000 p\u00e1ginas de producto descubiertas desde un solo camino de rastreo. Pero Googlebot no tiene recursos ilimitados. Google asigna a cada sitio un presupuesto de rastreo basado en la autoridad del sitio y la capacidad del servidor.\n\nUna tienda de tama\u00f1o medio con autoridad de dominio moderada podr\u00eda ver a Googlebot solicitar de 5.000 a 15.000 p\u00e1ginas por d\u00eda. Si tu tienda tiene 80.000 URLs incluyendo vistas filtradas y paginaci\u00f3n, podr\u00eda tomar semanas para que Googlebot visite cada p\u00e1gina una vez. Por eso la eficiencia del rastreo es tan relevante para ecommerce. Cada URL que Googlebot desperdicia en una p\u00e1gina filtrada sin valor es una URL que no dedic\u00f3 a una p\u00e1gina de producto que realmente quieres posicionar.",
          items: [
            "Googlebot sigue enlaces de p\u00e1gina en p\u00e1gina para descubrir URLs",
            "Cada sitio recibe un presupuesto de rastreo seg\u00fan autoridad y velocidad del servidor",
            "Las tiendas grandes pueden necesitar semanas para cobertura completa",
            "Las p\u00e1ginas sin valor consumen presupuesto que podr\u00eda ir a p\u00e1ginas de producto",
          ],
        },
        {
          title: "La cola de rastreo y el sistema de prioridades",
          content:
            "Googlebot no rastrea todas las p\u00e1ginas por igual. Mantiene una cola de prioridad que determina qu\u00e9 URLs se rastrean primero y con qu\u00e9 frecuencia se revisitan. Las p\u00e1ginas que cambian frecuentemente, reciben m\u00e1s enlaces internos o tienen mayor autoridad se rastrean m\u00e1s a menudo.\n\nTu p\u00e1gina de inicio puede ser rastreada varias veces al d\u00eda. Las p\u00e1ginas de categor\u00eda de primer nivel pueden rastrearse diariamente o cada pocos d\u00edas. Las p\u00e1ginas de producto individuales m\u00e1s profundas en la estructura del sitio quiz\u00e1s solo se rastrean cada pocas semanas. Para un producto de temporada reci\u00e9n lanzado, ese retraso puede significar perder semanas de tr\u00e1fico de b\u00fasqueda potencial.\n\nPodemos influir en la prioridad de rastreo mediante enlaces internos. Una p\u00e1gina de producto enlazada desde tu p\u00e1gina de inicio, una p\u00e1gina de categor\u00eda y tres publicaciones de blog ser\u00e1 rastreada antes y con m\u00e1s frecuencia que una accesible solo a trav\u00e9s de dos niveles de navegaci\u00f3n por categor\u00edas. Por eso el enlazado interno estrat\u00e9gico es una de las t\u00e1cticas SEO de mayor impacto para tiendas.",
          tip: "Revisa tus estad\u00edsticas de rastreo en Google Search Console en Configuraci\u00f3n > Estad\u00edsticas de rastreo. Si el tiempo de respuesta promedio supera los 500 ms, la velocidad de tu servidor puede estar limitando cu\u00e1ntas p\u00e1ginas rastrea Googlebot por d\u00eda.",
        },
        {
          title: "Renderizado JavaScript y plataformas de ecommerce",
          content:
            "Muchas plataformas de ecommerce modernas usan JavaScript para cargar informaci\u00f3n de productos, precios y rese\u00f1as. Los temas de Shopify, las tiendas headless basadas en React y algunas configuraciones de WooCommerce dependen en gran medida del renderizado del lado del cliente. Esto crea un desaf\u00edo porque Googlebot rastrea en dos fases.\n\nEn la primera fase, Googlebot obtiene el HTML en bruto. Si el t\u00edtulo del producto, la descripci\u00f3n y el precio se cargan v\u00eda JavaScript despu\u00e9s del renderizado de la p\u00e1gina, esa primera obtenci\u00f3n de HTML devuelve una c\u00e1scara vac\u00eda. Google luego pone la p\u00e1gina en cola para una segunda fase de renderizado donde ejecuta JavaScript. Esta cola de renderizado puede a\u00f1adir d\u00edas o incluso semanas de retraso antes de que Google vea tu contenido real.\n\nLas tiendas de Shopify que usan el sistema de plantillas Liquid est\u00e1ndar generalmente evitan este problema porque los datos del producto se renderizan del lado del servidor. Pero las tiendas con configuraciones headless usando frameworks como Next.js o Nuxt necesitan implementar renderizado del lado del servidor (SSR) o generaci\u00f3n de sitios est\u00e1ticos (SSG) para garantizar que Googlebot vea el contenido del producto en la primera obtenci\u00f3n.\n\nHemos auditado tiendas donde el 30 % de las p\u00e1ginas de producto no estaban indexadas porque el marcado schema del producto, las rese\u00f1as e incluso el t\u00edtulo del producto se cargaban v\u00eda JavaScript que Googlebot no logr\u00f3 renderizar. Cambiar al renderizado del lado del servidor corrigi\u00f3 la indexaci\u00f3n en tres semanas.",
          items: [
            "Googlebot rastrea en dos fases: obtenci\u00f3n de HTML y luego renderizado de JavaScript",
            "La cola de renderizado puede retrasar el descubrimiento de contenido d\u00edas o semanas",
            "Las plantillas Liquid est\u00e1ndar de Shopify renderizan del lado del servidor por defecto",
            "Las configuraciones headless necesitan SSR o SSG para indexaci\u00f3n fiable",
            "Prueba tus p\u00e1ginas con la herramienta de inspecci\u00f3n de URLs para ver qu\u00e9 renderiza Google",
          ],
        },
        {
          title: "Sitemaps XML para el descubrimiento de productos",
          content:
            "Un sitemap XML es un archivo que lista las URLs que quieres que Google conozca. Para sitios de ecommerce, los sitemaps sirven como canal directo para decirle a Google qu\u00e9 p\u00e1ginas existen, cu\u00e1ndo se actualizaron por \u00faltima vez y con qu\u00e9 frecuencia cambian.\n\nUna estrategia de sitemaps bien estructurada para ecommerce usa m\u00faltiples archivos de sitemap. Un sitemap para p\u00e1ginas de producto, otro para p\u00e1ginas de categor\u00eda, uno para contenido del blog y uno para p\u00e1ginas est\u00e1ticas como tu p\u00e1gina sobre nosotros y pol\u00edtica de env\u00edos. Esta separaci\u00f3n te permite monitorear la indexaci\u00f3n por tipo de p\u00e1gina en Search Console.\n\nGeneralmente recomendamos incluir solo p\u00e1ginas can\u00f3nicas e indexables en tus sitemaps. Las URLs filtradas, las p\u00e1ginas de productos agotados que has configurado como noindex, y las p\u00e1ginas de listado paginadas m\u00e1s all\u00e1 de la p\u00e1gina uno deber\u00edan excluirse. Un sitemap que lista 200.000 URLs cuando solo 30.000 son indexables env\u00eda una se\u00f1al confusa a Google sobre la calidad de tu sitio.\n\nLa mayor\u00eda de las plataformas de ecommerce generan sitemaps autom\u00e1ticamente. Shopify crea un sitemap.xml que incluye productos, colecciones, p\u00e1ginas y publicaciones del blog. WooCommerce con Yoast SEO o RankMath genera sitemaps con m\u00e1s opciones de configuraci\u00f3n. Independientemente de la plataforma, revisa tu sitemap mensualmente para asegurar que refleje la estructura actual de tu sitio.",
          tip: "Env\u00eda tus sitemaps en Google Search Console y revisa el informe de cobertura despu\u00e9s de dos semanas. Si la proporci\u00f3n de p\u00e1ginas indexadas respecto a las enviadas est\u00e1 por debajo del 70 %, investiga por qu\u00e9 Google est\u00e1 eligiendo no indexar una parte significativa de tus URLs enviadas.",
        },
        {
          title: "Los enlaces internos como caminos de descubrimiento",
          content:
            "Mientras los sitemaps le dicen a Google que las p\u00e1ginas existen, los enlaces internos le muestran c\u00f3mo se relacionan entre s\u00ed y cu\u00e1les son m\u00e1s relevantes. Una p\u00e1gina de producto con 50 enlaces internos apuntando hacia ella tiene m\u00e1s prioridad de rastreo que una con solo 2.\n\nLas p\u00e1ginas de categor\u00eda son la columna vertebral del enlazado interno para ecommerce. Cada p\u00e1gina de categor\u00eda enlaza a docenas de productos, pasando prioridad de rastreo y se\u00f1ales de posicionamiento a esas p\u00e1ginas de producto. Una navegaci\u00f3n de migas de pan bien estructurada a\u00f1ade otra capa de enlaces internos, conectando los productos de vuelta a sus categor\u00edas padre y la p\u00e1gina de inicio.\n\nLas secciones de venta cruzada y productos relacionados crean enlaces internos laterales entre productos. Cuando una p\u00e1gina de producto de zapatillas de running enlaza a cordones, plantillas y calcetines relacionados, esas conexiones ayudan a Googlebot a descubrir m\u00e1s de tu cat\u00e1logo mientras distribuyen la equidad de enlaces por toda tu tienda.\n\nLas p\u00e1ginas hu\u00e9rfanas son el enemigo del descubrimiento. Una p\u00e1gina hu\u00e9rfana no tiene enlaces internos apuntando a ella. Puede existir en tu sitemap, pero si Googlebot no puede alcanzarla siguiendo enlaces desde cualquier otra p\u00e1gina, eso se\u00f1ala baja importancia. Encontramos frecuentemente p\u00e1ginas de producto hu\u00e9rfanas en tiendas que han reestructurado sus categor\u00edas sin actualizar los enlaces internos.",
          items: [
            "Las p\u00e1ginas de categor\u00eda distribuyen prioridad de rastreo a las p\u00e1ginas de producto debajo",
            "Las migas de pan crean caminos ascendentes de enlaces internos hacia categor\u00edas e inicio",
            "Las secciones de productos relacionados construyen enlaces laterales entre productos",
            "Las p\u00e1ginas hu\u00e9rfanas sin enlaces internos son despriorizadas por Google",
          ],
        },
        {
          title: "Problemas de descubrimiento comunes en ecommerce",
          content:
            "El problema de descubrimiento m\u00e1s com\u00fan que vemos es el de tiendas que bloquean a Googlebot de recursos esenciales en su archivo robots.txt. Algunas instalaciones de WooCommerce bloquean el directorio /wp-admin/, lo cual es correcto, pero accidentalmente tambi\u00e9n bloquean archivos CSS y JavaScript que Googlebot necesita para renderizar las p\u00e1ginas correctamente.\n\nOtro problema frecuente son las trampas de rastreo infinitas por navegaci\u00f3n facetada. Una tienda de ropa que permite a los usuarios combinar filtros de talla, color, material, marca y precio puede generar millones de URLs \u00fanicas. Sin controles adecuados, Googlebot puede gastar todo su presupuesto de rastreo explorando estas combinaciones de filtros sin alcanzar nunca las p\u00e1ginas de producto profundas.\n\nLas URLs basadas en sesiones tambi\u00e9n causan problemas. Algunas plataformas de ecommerce a\u00f1aden IDs de sesi\u00f3n o par\u00e1metros de seguimiento a las URLs, creando lo que parece ser miles de p\u00e1ginas duplicadas. Cada visita de Googlebot genera una nueva variante de URL, desperdiciando presupuesto de rastreo en p\u00e1ginas que son todas id\u00e9nticas en contenido.\n\nLa paginaci\u00f3n tambi\u00e9n puede ralentizar el descubrimiento. Si tu p\u00e1gina de categor\u00eda lista 500 productos en 25 p\u00e1ginas paginadas, Googlebot necesita rastrear la p\u00e1gina 1, la p\u00e1gina 2, la p\u00e1gina 3, y as\u00ed sucesivamente para descubrir todos los productos. Los productos listados en la p\u00e1gina 20 pueden tardar significativamente m\u00e1s en ser descubiertos e indexados que los de la p\u00e1gina 1.",
          items: [
            "Revisa robots.txt para asegurar que los archivos CSS y JS no est\u00e9n bloqueados",
            "Implementa controles en la navegaci\u00f3n facetada para prevenir trampas de rastreo",
            "Usa etiquetas canonical para gestionar IDs de sesi\u00f3n y par\u00e1metros de seguimiento",
            "Considera cargar m\u00e1s productos por p\u00e1gina para reducir la profundidad de paginaci\u00f3n",
          ],
        },
      ],
      navLabels: {
        previous: "Introducci\u00f3n al SEO para ecommerce",
        next: "Rastreo e indexaci\u00f3n de p\u00e1ginas de producto",
      },
    },
    it: {
      badge: "Fondamenti della ricerca",
      heading: "Come Google trova i negozi online",
      intro:
        "Prima che Google possa posizionare i tuoi prodotti, deve scoprirli. Capire come Googlebot naviga i siti ecommerce rivela perch\u00e9 alcuni negozi ottengono migliaia di pagine indicizzate mentre altri faticano a far notare anche le loro pagine di categoria principali.",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Come Googlebot scansiona i siti ecommerce",
          content:
            "Googlebot \u00e8 il software che Google usa per recuperare le pagine web. Funziona seguendo i link da una pagina all'altra, proprio come un acquirente che naviga nel tuo negozio. Quando arriva su una pagina, legge l'HTML, segue i link che trova e aggiunge le nuove URL scoperte alla sua coda di scansione.\n\nPer i siti ecommerce, questo processo di scansione incontra rapidamente complicazioni. Una homepage potrebbe linkare a 15 pagine di categoria, ognuna che linka a 20 sottocategorie, ognuna che elenca 40 prodotti. Sono gi\u00e0 12.000 pagine prodotto scoperte da un singolo percorso di scansione. Ma Googlebot non ha risorse illimitate. Google assegna a ogni sito un budget di crawl basato sull'autorit\u00e0 del sito e la capacit\u00e0 del server.\n\nUn negozio di medie dimensioni con autorit\u00e0 di dominio moderata potrebbe vedere Googlebot richiedere da 5.000 a 15.000 pagine al giorno. Se il tuo negozio ha 80.000 URL incluse le viste filtrate e la paginazione, potrebbero volerci settimane perch\u00e9 Googlebot visiti ogni pagina una volta. Ecco perch\u00e9 l'efficienza del crawl conta cos\u00ec tanto per l'ecommerce. Ogni URL che Googlebot spreca su una pagina filtrata senza valore \u00e8 una URL che non ha dedicato a una pagina prodotto che vuoi realmente posizionare.",
          items: [
            "Googlebot segue i link da pagina a pagina per scoprire URL",
            "Ogni sito riceve un budget di crawl basato su autorit\u00e0 e velocit\u00e0 del server",
            "I grandi negozi possono necessitare settimane per una copertura completa",
            "Le pagine senza valore consumano budget che potrebbe andare alle pagine prodotto",
          ],
        },
        {
          title: "La coda di scansione e il sistema di priorit\u00e0",
          content:
            "Googlebot non scansiona tutte le pagine allo stesso modo. Mantiene una coda di priorit\u00e0 che determina quali URL vengono scansionate per prime e con quale frequenza vengono rivisitate. Le pagine che cambiano frequentemente, ricevono pi\u00f9 link interni o hanno maggiore autorit\u00e0 vengono scansionate pi\u00f9 spesso.\n\nLa tua homepage potrebbe essere scansionata pi\u00f9 volte al giorno. Le pagine di categoria di primo livello possono essere scansionate quotidianamente o ogni pochi giorni. Le singole pagine prodotto pi\u00f9 profonde nella struttura del sito potrebbero essere scansionate solo ogni poche settimane. Per un prodotto stagionale appena lanciato, quel ritardo pu\u00f2 significare perdere settimane di traffico di ricerca potenziale.\n\nPossiamo influenzare la priorit\u00e0 di crawl attraverso i link interni. Una pagina prodotto linkata dalla homepage, da una pagina di categoria e da tre articoli del blog verr\u00e0 scansionata prima e pi\u00f9 frequentemente di una accessibile solo attraverso due livelli di navigazione per categorie. Ecco perch\u00e9 il linking interno strategico \u00e8 una delle tattiche SEO a maggiore impatto per i negozi.",
          tip: "Controlla le tue statistiche di scansione in Google Search Console sotto Impostazioni > Statistiche di scansione. Se il tempo di risposta medio supera i 500 ms, la velocit\u00e0 del tuo server potrebbe limitare quante pagine Googlebot scansiona al giorno.",
        },
        {
          title: "Rendering JavaScript e piattaforme ecommerce",
          content:
            "Molte piattaforme ecommerce moderne usano JavaScript per caricare informazioni sui prodotti, prezzi e recensioni. I temi Shopify, i negozi headless basati su React e alcune configurazioni WooCommerce si affidano pesantemente al rendering lato client. Questo crea una sfida perch\u00e9 Googlebot scansiona in due fasi.\n\nNella prima fase, Googlebot recupera l'HTML grezzo. Se il titolo del prodotto, la descrizione e il prezzo vengono caricati tramite JavaScript dopo il rendering della pagina, quel primo recupero HTML restituisce un guscio vuoto. Google poi mette la pagina in coda per una seconda fase di rendering dove esegue JavaScript. Questa coda di rendering pu\u00f2 aggiungere giorni o addirittura settimane di ritardo prima che Google veda il tuo contenuto effettivo.\n\nI negozi Shopify che usano il sistema di template Liquid standard generalmente evitano questo problema perch\u00e9 i dati del prodotto vengono renderizzati lato server. Ma i negozi che usano configurazioni headless con framework come Next.js o Nuxt devono implementare il rendering lato server (SSR) o la generazione di siti statici (SSG) per garantire che Googlebot veda il contenuto del prodotto al primo recupero.\n\nAbbiamo auditato negozi dove il 30 % delle pagine prodotto non erano indicizzate perch\u00e9 il markup schema del prodotto, le recensioni e persino il titolo del prodotto venivano tutti caricati tramite JavaScript che Googlebot non riusciva a renderizzare. Il passaggio al rendering lato server ha corretto l'indicizzazione entro tre settimane.",
          items: [
            "Googlebot scansiona in due fasi: recupero HTML, poi rendering JavaScript",
            "La coda di rendering pu\u00f2 ritardare la scoperta del contenuto di giorni o settimane",
            "I template Liquid standard di Shopify renderizzano lato server per default",
            "Le configurazioni headless necessitano SSR o SSG per un'indicizzazione affidabile",
            "Testa le tue pagine con lo strumento Controllo URL per vedere cosa renderizza Google",
          ],
        },
        {
          title: "Sitemap XML per la scoperta dei prodotti",
          content:
            "Una sitemap XML \u00e8 un file che elenca le URL di cui vuoi che Google sia a conoscenza. Per i siti ecommerce, le sitemap servono come canale diretto per dire a Google quali pagine esistono, quando sono state aggiornate l'ultima volta e con quale frequenza cambiano.\n\nUna strategia di sitemap ecommerce ben strutturata usa file sitemap multipli. Una sitemap per le pagine prodotto, un'altra per le pagine di categoria, una per i contenuti del blog e una per le pagine statiche come la pagina chi siamo e la politica di spedizione. Questa separazione ti permette di monitorare l'indicizzazione per tipo di pagina nella Search Console.\n\nGeneralmente raccomandiamo di includere solo pagine canoniche e indicizzabili nelle sitemap. Le URL filtrate, le pagine di prodotti esauriti impostate su noindex e le pagine di listing paginate oltre la pagina uno dovrebbero essere escluse. Una sitemap che elenca 200.000 URL quando solo 30.000 sono indicizzabili invia un segnale confuso a Google sulla qualit\u00e0 del tuo sito.\n\nLa maggior parte delle piattaforme ecommerce genera sitemap automaticamente. Shopify crea un sitemap.xml che include prodotti, collezioni, pagine e articoli del blog. WooCommerce con Yoast SEO o RankMath genera sitemap con pi\u00f9 opzioni di configurazione. Indipendentemente dalla piattaforma, rivedi la tua sitemap mensilmente per assicurarti che rifletta la struttura attuale del tuo sito.",
          tip: "Invia le tue sitemap in Google Search Console e controlla il rapporto di copertura dopo due settimane. Se il rapporto tra pagine indicizzate e inviate \u00e8 inferiore al 70 %, indaga perch\u00e9 Google sta scegliendo di non indicizzare una parte significativa delle tue URL inviate.",
        },
        {
          title: "I link interni come percorsi di scoperta",
          content:
            "Mentre le sitemap dicono a Google che le pagine esistono, i link interni mostrano a Google come quelle pagine sono collegate tra loro e quali contano di pi\u00f9. Una pagina prodotto con 50 link interni che puntano ad essa ha pi\u00f9 priorit\u00e0 di crawl di una con solo 2.\n\nLe pagine di categoria sono la spina dorsale del linking interno per l'ecommerce. Ogni pagina di categoria linka a decine di prodotti, passando priorit\u00e0 di crawl e segnali di posizionamento a quelle pagine prodotto. Una navigazione breadcrumb ben strutturata aggiunge un altro livello di link interni, collegando i prodotti alle loro categorie genitore e alla homepage.\n\nLe sezioni di cross-selling e prodotti correlati creano link interni laterali tra prodotti. Quando una pagina prodotto per scarpe da corsa linka a lacci, solette e calzini correlati, queste connessioni aiutano Googlebot a scoprire di pi\u00f9 del tuo catalogo distribuendo anche la link equity attraverso il tuo negozio.\n\nLe pagine orfane sono il nemico della scoperta. Una pagina orfana non ha link interni che puntano ad essa. Potrebbe esistere nella tua sitemap, ma se Googlebot non pu\u00f2 raggiungerla seguendo link da qualsiasi altra pagina, segnala bassa importanza. Troviamo frequentemente pagine prodotto orfane in negozi che hanno ristrutturato le loro categorie senza aggiornare i link interni.",
          items: [
            "Le pagine di categoria distribuiscono la priorit\u00e0 di crawl alle pagine prodotto sottostanti",
            "I breadcrumb creano percorsi di link interni ascendenti verso categorie e homepage",
            "Le sezioni di prodotti correlati costruiscono link laterali tra prodotti",
            "Le pagine orfane senza link interni vengono deprioritizzate da Google",
          ],
        },
        {
          title: "Problemi di scoperta comuni nell'ecommerce",
          content:
            "Il problema di scoperta pi\u00f9 comune che vediamo \u00e8 quello dei negozi che bloccano Googlebot dall'accesso a risorse essenziali nel loro file robots.txt. Alcune installazioni WooCommerce bloccano la directory /wp-admin/, il che \u00e8 corretto, ma accidentalmente bloccano anche file CSS e JavaScript di cui Googlebot ha bisogno per renderizzare correttamente le pagine.\n\nUn altro problema frequente sono le trappole di crawl infinite dalla navigazione a faccette. Un negozio di abbigliamento che permette agli utenti di combinare filtri di taglia, colore, materiale, marca e prezzo pu\u00f2 generare milioni di URL uniche. Senza controlli adeguati, Googlebot pu\u00f2 spendere il suo intero budget di crawl esplorando queste combinazioni di filtri senza mai raggiungere le pagine prodotto profonde.\n\nAnche le URL basate sulle sessioni causano problemi. Alcune piattaforme ecommerce aggiungono ID di sessione o parametri di tracciamento alle URL, creando quello che sembra essere migliaia di pagine duplicate. Ogni visita di Googlebot genera una nuova variante di URL, sprecando budget di crawl su pagine che hanno tutte contenuto identico.\n\nAnche la paginazione pu\u00f2 rallentare la scoperta. Se la tua pagina di categoria elenca 500 prodotti su 25 pagine paginate, Googlebot deve scansionare la pagina 1, la pagina 2, la pagina 3, e cos\u00ec via per scoprire tutti i prodotti. I prodotti elencati a pagina 20 possono richiedere significativamente pi\u00f9 tempo per essere scoperti e indicizzati rispetto a quelli a pagina 1.",
          items: [
            "Controlla robots.txt per assicurarti che i file CSS e JS non siano bloccati",
            "Implementa controlli sulla navigazione a faccette per prevenire trappole di crawl",
            "Usa tag canonical per gestire ID di sessione e parametri di tracciamento",
            "Considera di caricare pi\u00f9 prodotti per pagina per ridurre la profondit\u00e0 di paginazione",
          ],
        },
      ],
      navLabels: {
        previous: "Introduzione alla SEO per ecommerce",
        next: "Scansione e indicizzazione delle pagine prodotto",
      },
    },
    nl: {
      badge: "Zoekfundamenten",
      heading: "Hoe Google webshops vindt",
      intro:
        "Voordat Google je producten kan rangschikken, moet het ze ontdekken. Begrijpen hoe Googlebot ecommerce-sites navigeert, laat zien waarom sommige webshops duizenden pagina's ge\u00efndexeerd krijgen terwijl andere moeite hebben om zelfs hun hoofdcategoriepagina's opgemerkt te krijgen.",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "Hoe Googlebot ecommerce-sites crawlt",
          content:
            "Googlebot is de software die Google gebruikt om webpagina's op te halen. Het werkt door links te volgen van de ene pagina naar de andere, vergelijkbaar met een shopper die door je webshop klikt. Wanneer het op een pagina landt, leest het de HTML, volgt links die het daar vindt en voegt nieuw ontdekte URL's toe aan zijn crawl-wachtrij.\n\nVoor ecommerce-sites loopt dit crawlproces snel tegen complicaties aan. Een homepage kan linken naar 15 categoriepagina's, die elk linken naar 20 subcategorie\u00ebn, die elk 40 producten vermelden. Dat zijn al 12.000 productpagina's ontdekt vanuit \u00e9\u00e9n crawlpad. Maar Googlebot heeft geen onbeperkte middelen. Google wijst elke site een crawlbudget toe op basis van de autoriteit van de site en de servercapaciteit.\n\nEen middelgrote webshop met gematigde domeinautoriteit ziet Googlebot mogelijk 5.000 tot 15.000 pagina's per dag opvragen. Als je webshop 80.000 URL's heeft inclusief gefilterde weergaven en paginering, kan het weken duren voordat Googlebot elke pagina \u00e9\u00e9n keer heeft bezocht. Daarom is crawl-effici\u00ebntie zo belangrijk voor ecommerce. Elke URL die Googlebot verspilt aan een waardeloze filterpagina is een URL die niet is besteed aan een productpagina die je daadwerkelijk wilt laten ranken.",
          items: [
            "Googlebot volgt links van pagina naar pagina om URL's te ontdekken",
            "Elke site krijgt een crawlbudget op basis van autoriteit en serversnelheid",
            "Grote webshops hebben mogelijk weken nodig voor volledige crawl-dekking",
            "Waardeloze pagina's verbruiken budget dat naar productpagina's zou kunnen gaan",
          ],
        },
        {
          title: "De crawl-wachtrij en het prioriteitssysteem",
          content:
            "Googlebot crawlt niet alle pagina's gelijk. Het onderhoudt een prioriteitswachtrij die bepaalt welke URL's eerst worden gecrawld en hoe vaak ze worden herbezocht. Pagina's die vaak veranderen, meer interne links ontvangen of hogere autoriteit hebben, worden vaker gecrawld.\n\nJe homepage wordt mogelijk meerdere keren per dag gecrawld. Categoriepagina's op het hoogste niveau worden dagelijks of om de paar dagen gecrawld. Individuele productpagina's dieper in de sitestructuur worden misschien maar elke paar weken gecrawld. Voor een seizoensproduct dat net is gelanceerd, kan die vertraging betekenen dat je weken aan potentieel zoekverkeer mist.\n\nWe kunnen crawlprioriteit be\u00efnvloeden via interne links. Een productpagina die gelinkt is vanaf je homepage, een categoriepagina en drie blogposts wordt eerder en vaker gecrawld dan een die alleen bereikbaar is via twee niveaus van categorienavigatie. Daarom is strategische interne linking een van de meest impactvolle SEO-tactieken voor webshops.",
          tip: "Controleer je crawlstatistieken in Google Search Console onder Instellingen > Crawlstatistieken. Als de gemiddelde responstijd meer dan 500 ms bedraagt, kan je serversnelheid beperken hoeveel pagina's Googlebot per dag crawlt.",
        },
        {
          title: "JavaScript-rendering en ecommerce-platforms",
          content:
            "Veel moderne ecommerce-platforms gebruiken JavaScript om productinformatie, prijzen en reviews te laden. Shopify-thema's, React-gebaseerde headless webshops en sommige WooCommerce-setups vertrouwen sterk op client-side rendering. Dit cre\u00ebert een uitdaging omdat Googlebot in twee fasen crawlt.\n\nIn de eerste fase haalt Googlebot de ruwe HTML op. Als je producttitel, beschrijving en prijs via JavaScript worden geladen nadat de pagina is gerenderd, levert die eerste HTML-ophaling een lege schil op. Google zet de pagina dan in de wachtrij voor een tweede renderingfase waarin het JavaScript uitvoert. Deze renderingwachtrij kan dagen of zelfs weken vertraging toevoegen voordat Google je daadwerkelijke content ziet.\n\nShopify-webshops die het standaard Liquid-templatesysteem gebruiken, vermijden dit probleem over het algemeen omdat productdata server-side wordt gerenderd. Maar webshops die headless commerce-setups met frameworks als Next.js of Nuxt gebruiken, moeten server-side rendering (SSR) of static site generation (SSG) implementeren om ervoor te zorgen dat Googlebot de productinhoud bij de eerste ophaling ziet.\n\nWe hebben webshops geaudit waar 30 % van de productpagina's niet ge\u00efndexeerd was omdat de product schema-markup, reviews en zelfs de producttitel allemaal via JavaScript werden geladen dat Googlebot niet kon renderen. Overschakelen naar server-side rendering loste de indexering binnen drie weken op.",
          items: [
            "Googlebot crawlt in twee fasen: HTML-ophaling, dan JavaScript-rendering",
            "De renderingwachtrij kan contentontdekking dagen of weken vertragen",
            "Standaard Shopify Liquid-templates renderen server-side standaard",
            "Headless setups hebben SSR of SSG nodig voor betrouwbare indexering",
            "Test je pagina's met de URL-inspectietool om te zien wat Google rendert",
          ],
        },
        {
          title: "XML-sitemaps voor productontdekking",
          content:
            "Een XML-sitemap is een bestand dat de URL's vermeldt waarvan je wilt dat Google ze kent. Voor ecommerce-sites dienen sitemaps als een direct kanaal om Google te vertellen welke pagina's bestaan, wanneer ze voor het laatst zijn bijgewerkt en hoe vaak ze veranderen.\n\nEen goed gestructureerde ecommerce-sitemapstrategie gebruikt meerdere sitemapbestanden. E\u00e9n sitemap voor productpagina's, een andere voor categoriepagina's, een voor blogcontent en een voor statische pagina's zoals je over-ons-pagina en verzendbeleid. Deze scheiding laat je indexering per paginatype monitoren in Search Console.\n\nWe raden doorgaans aan om alleen canonieke, indexeerbare pagina's in je sitemaps op te nemen. Gefilterde URL's, uitverkochte productpagina's die je op noindex hebt gezet, en gepagineerde lijstpagina's voorbij pagina \u00e9\u00e9n moeten worden uitgesloten. Een sitemap die 200.000 URL's vermeldt terwijl slechts 30.000 indexeerbaar zijn, stuurt een verwarrend signaal naar Google over de kwaliteit van je site.\n\nDe meeste ecommerce-platforms genereren sitemaps automatisch. Shopify maakt een sitemap.xml aan die producten, collecties, pagina's en blogposts bevat. WooCommerce met Yoast SEO of RankMath genereert sitemaps met meer configuratieopties. Ongeacht het platform, bekijk je sitemap maandelijks om ervoor te zorgen dat het je huidige sitestructuur weerspiegelt.",
          tip: "Dien je sitemaps in bij Google Search Console en controleer het dekkingsrapport na twee weken. Als de verhouding van ge\u00efndexeerde tot ingediende pagina's onder de 70 % ligt, onderzoek dan waarom Google ervoor kiest een aanzienlijk deel van je ingediende URL's niet te indexeren.",
        },
        {
          title: "Interne links als ontdekkingspaden",
          content:
            "Terwijl sitemaps Google vertellen dat pagina's bestaan, laten interne links Google zien hoe die pagina's zich tot elkaar verhouden en welke het meest belangrijk zijn. Een productpagina met 50 interne links die ernaar wijzen heeft meer crawlprioriteit dan een met slechts 2.\n\nCategoriepagina's zijn de ruggengraat van interne linking voor ecommerce. Elke categoriepagina linkt naar tientallen producten en geeft crawlprioriteit en rankingsignalen door aan die productpagina's. Goed gestructureerde breadcrumb-navigatie voegt een extra laag interne links toe, die producten terugkoppelen naar hun bovenliggende categorie\u00ebn en de homepage.\n\nCross-selling en gerelateerde productsecties cre\u00ebren laterale interne links tussen producten. Wanneer een productpagina voor hardloopschoenen linkt naar gerelateerde veters, inlegzolen en sokken, helpen die verbindingen Googlebot meer van je catalogus te ontdekken terwijl ze ook link-equity over je webshop verdelen.\n\nWeespagina's zijn de vijand van ontdekking. Een weespagina heeft geen interne links die ernaar wijzen. Het kan bestaan in je sitemap, maar als Googlebot het niet kan bereiken door links te volgen vanaf een andere pagina, signaleert dat lage belangrijkheid. We vinden regelmatig wees-productpagina's in webshops die hun categorie\u00ebn hebben geherstructureerd zonder interne links bij te werken.",
          items: [
            "Categoriepagina's verdelen crawlprioriteit naar de productpagina's eronder",
            "Breadcrumbs cre\u00ebren opwaartse interne linkpaden naar categorie\u00ebn en de homepage",
            "Gerelateerde productsecties bouwen laterale links tussen producten",
            "Weespagina's zonder interne links worden door Google gedeprioriteerd",
          ],
        },
        {
          title: "Veelvoorkomende ontdekkingsproblemen in ecommerce",
          content:
            "Het meest voorkomende ontdekkingsprobleem dat we zien is webshops die Googlebot blokkeren van essenti\u00eble bronnen in hun robots.txt-bestand. Sommige WooCommerce-installaties blokkeren de /wp-admin/-directory, wat correct is, maar blokkeren per ongeluk ook CSS- en JavaScript-bestanden die Googlebot nodig heeft om pagina's correct te renderen.\n\nEen ander veelvoorkomend probleem zijn oneindige crawl-vallen door gefacetteerde navigatie. Een kledingwinkel die gebruikers laat combineren op maat, kleur, materiaal, merk en prijsfilters kan miljoenen unieke URL's genereren. Zonder adequate controles kan Googlebot zijn volledige crawlbudget besteden aan het verkennen van deze filtercombinaties zonder ooit diepe productpagina's te bereiken.\n\nSessie-gebaseerde URL's veroorzaken ook problemen. Sommige ecommerce-platforms voegen sessie-ID's of trackingparameters toe aan URL's, waardoor het lijkt alsof er duizenden dubbele pagina's zijn. Elk bezoek van Googlebot genereert een nieuwe URL-variant, wat crawlbudget verspilt aan pagina's die allemaal identieke content hebben.\n\nPaginering kan ontdekking ook vertragen. Als je categoriepagina 500 producten vermeldt over 25 gepagineerde pagina's, moet Googlebot door pagina 1, pagina 2, pagina 3, enzovoort crawlen om alle producten te ontdekken. Producten op pagina 20 kunnen aanzienlijk langer duren om ontdekt en ge\u00efndexeerd te worden dan die op pagina 1.",
          items: [
            "Controleer robots.txt om te verzekeren dat CSS- en JS-bestanden niet geblokkeerd zijn",
            "Implementeer controles op gefacetteerde navigatie om crawl-vallen te voorkomen",
            "Gebruik canonical tags om sessie-ID's en trackingparameters af te handelen",
            "Overweeg meer producten per pagina te laden om pagineringsdiepte te verminderen",
          ],
        },
      ],
      navLabels: {
        previous: "Introductie tot ecommerce-SEO",
        next: "Crawling en indexering van productpagina's",
      },
    },
  },
};
