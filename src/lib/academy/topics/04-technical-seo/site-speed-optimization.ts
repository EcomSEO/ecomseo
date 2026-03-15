import type { AcademyTopic } from "../../types";

export const siteSpeedOptimization: AcademyTopic = {
  slug: "site-speed-optimization",
  cluster: 4,
  resources: [{"label":"Google PageSpeed Insights","url":"https://pagespeed.web.dev/","type":"tool"},{"label":"GTmetrix","url":"https://gtmetrix.com/","type":"tool"},{"label":"WebPageTest","url":"https://www.webpagetest.org/","type":"tool"},{"label":"Core Web Vitals Guide","url":"https://web.dev/articles/vitals","type":"docs"}],
  content: {
    en: {
      badge: "Technical SEO",
      heading: "Site Speed Optimization for Ecommerce",
      intro:
        "Page load time directly affects both rankings and revenue. Google uses Core Web Vitals as a ranking signal, and research consistently shows that every additional second of load time reduces ecommerce conversion rates by 7% to 12%. Faster stores rank higher and sell more. Speed is a core pillar of [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "12 min read",
      sections: [
        {
          title: "Core Web Vitals: The Metrics That Matter",
          content:
            "Google measures page experience through three Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Each metric captures a different aspect of how users experience your store, and all three feed into Google's ranking algorithm.\n\nLCP measures how long it takes for the largest visible element to render, typically a hero image or product photo. Google expects LCP under 2.5 seconds. For ecommerce, the primary offender is unoptimized product imagery. A single 3 MB hero image on a category page can push LCP past 4 seconds on mobile connections.\n\nINP replaced First Input Delay in March 2024 and measures responsiveness across the entire page session, not just the first interaction. Every tap, click, and keyboard input counts. Ecommerce sites struggle here because of heavy JavaScript from analytics tools, chat widgets, and recommendation engines. Each third-party script competes for the main thread, delaying user interactions.\n\nCLS tracks unexpected layout shifts during page load. On product pages, this commonly happens when images load without defined dimensions, when price badges inject after the initial render, or when lazy-loaded reviews push content downward. Google requires CLS below 0.1 for a passing score.",
          items: [
            "LCP target: under 2.5 seconds (largest visible element fully rendered)",
            "INP target: under 200 milliseconds (response to any user interaction)",
            "CLS target: under 0.1 (minimal unexpected layout shifts)",
            "Test with PageSpeed Insights using the field data tab, not just lab data",
            "Check Core Web Vitals in Google Search Console under Experience > Core Web Vitals",
          ],
        },
        {
          title: "Image Optimization for Product Catalogs",
          content:
            "Images account for 50% to 70% of total page weight on most ecommerce sites. A category page displaying 40 products with unoptimized images can easily exceed 15 MB. Proper [image optimization](/academy/image-optimization-for-products) alone can cut page load time in half.\n\nConvert all product images to WebP or AVIF format. WebP delivers 25% to 35% smaller files than JPEG at equivalent quality, and AVIF pushes savings to 50%. Every major browser now supports WebP, and AVIF support covers over 90% of users. Serve AVIF with WebP fallback using the HTML picture element.\n\nResize images to match their display dimensions. A product thumbnail displayed at 300x300 pixels does not need a 2000x2000 source file. Generate multiple sizes at build time or through your CDN's image transformation API. Serve 1x images to standard displays and 2x to retina screens using srcset attributes.\n\nImplement lazy loading for images below the fold. The first row of products on a category page should load immediately (eager loading), while everything below should use loading=\"lazy\". This reduces the initial page weight dramatically. A furniture store we optimized went from loading 80 images on initial page load to 12, dropping LCP from 4.8 seconds to 1.9 seconds.",
          tip: "Use your CDN's automatic image optimization if available. Cloudflare Polish, Shopify's built-in image CDN, and Imgix all handle format conversion, resizing, and compression automatically. This eliminates the need to manage image variants manually.",
        },
        {
          title: "JavaScript and Third-Party Script Management",
          content:
            "The average ecommerce store loads 20 to 35 third-party scripts: analytics, heatmaps, chat widgets, review platforms, recommendation engines, retargeting pixels, and payment providers. Each script blocks the main thread, delays interactivity, and inflates page weight. Auditing and managing these scripts is one of the highest-impact speed improvements you can make.\n\nStart by cataloging every script loading on your store. Open Chrome DevTools, go to the Network tab, filter by JS, and reload the page. Sort by size and load time. You will almost certainly find scripts that are no longer needed, duplicated trackers, or tools that were installed for a test and never removed.\n\nDefer non-critical scripts using the defer or async attribute. Analytics and marketing pixels do not need to load before the page renders. Move them below the fold or load them after the DOMContentLoaded event. For chat widgets, delay initialization until the user scrolls or after a 5-second timeout.\n\nConsider using a tag manager like Google Tag Manager with trigger-based loading. Instead of firing every script on page load, configure triggers so retargeting pixels only fire on product pages, chat widgets load after 10 seconds of inactivity, and review widgets load only when the review section scrolls into view. This approach reduced main-thread blocking time by 40% on a home goods store we optimized.",
          items: [
            "Audit all third-party scripts quarterly and remove unused ones",
            "Defer non-critical JavaScript with async or defer attributes",
            "Delay chat widgets until user scroll or a time-based trigger",
            "Use Google Tag Manager with event-based triggers instead of page-load triggers",
            "Set a performance budget: no more than 300 KB of total JavaScript on critical pages",
          ],
        },
        {
          title: "Server Response Time and Hosting",
          content:
            "Time to First Byte (TTFB) measures how long it takes your server to respond with the first byte of HTML. Google recommends TTFB under 800 milliseconds, but the best ecommerce sites achieve under 200 milliseconds. Slow TTFB delays everything that follows: rendering, resource loading, and interactivity.\n\nShared hosting plans cannot deliver consistent TTFB for stores with more than a few hundred products. The database queries required to build category pages with filtering, sorting, and inventory checks demand dedicated resources. Upgrade to a VPS, dedicated server, or a managed ecommerce platform that handles infrastructure scaling.\n\nImplement full-page caching for category and product pages. Most product pages change infrequently, and serving a cached HTML response eliminates database queries entirely. Varnish, Redis, or your platform's built-in cache layer can reduce TTFB from 1.5 seconds to under 100 milliseconds for cached pages.\n\nUse a CDN with edge caching to serve static assets and cached pages from locations close to your customers. A CDN reduces latency by 50% to 80% for geographically distant visitors. For international stores, this is essential. A UK customer accessing a US-hosted store without a CDN adds 150 to 250 milliseconds of latency on every request.",
          tip: "Test your TTFB from multiple locations using WebPageTest.org. Select server locations that match your customer base. If TTFB varies wildly between regions, your CDN configuration likely needs attention.",
        },
        {
          title: "Critical Rendering Path Optimization",
          content:
            "The critical rendering path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into rendered pixels. Optimizing this path means ensuring the browser can display meaningful content as quickly as possible, even while additional resources are still loading.\n\nInline your critical CSS directly in the HTML head. Critical CSS is the minimum set of styles needed to render the above-the-fold content. Tools like Critical or Penthouse can extract this automatically. By inlining 10 to 15 KB of critical CSS, the browser can paint the initial view without waiting for external stylesheet downloads.\n\nPreload key resources that the browser discovers late in the parsing process. Web fonts, hero images, and critical JavaScript bundles should use rel=\"preload\" link tags in the HTML head. Without preloading, the browser only discovers these resources after parsing CSS or JavaScript files, adding hundreds of milliseconds of delay.\n\nEliminate render-blocking resources by deferring non-critical CSS and JavaScript. Load your full stylesheet asynchronously using the media=\"print\" trick with an onload handler that switches it to media=\"all\". This lets the browser render the page using inlined critical CSS while the complete stylesheet downloads in the background.\n\nFor Shopify stores, the theme's liquid templates and app blocks often inject render-blocking scripts and styles. Ensuring your store performs well on phones is equally critical — see our [mobile-first SEO](/academy/mobile-first-for-ecommerce) guide. Audit your theme.liquid file and move non-essential app scripts to deferred loading. Each render-blocking resource adds 100 to 300 milliseconds to the initial render.",
        },
      ],
      navLabels: {
        previous: "Crawl Budget Management",
        next: "Mobile-First for Ecommerce",
      },
    },
    de: {
      badge: "Technisches SEO",
      heading: "Seitengeschwindigkeit-Optimierung für Ecommerce",
      intro:
        "Die Ladezeit einer Seite beeinflusst direkt sowohl Rankings als auch Umsatz. Google nutzt Core Web Vitals als Ranking-Signal, und Studien zeigen durchgängig, dass jede zusätzliche Sekunde Ladezeit die Conversion-Rate im Ecommerce um 7 % bis 12 % senkt. Schnellere Shops ranken besser und verkaufen mehr. Geschwindigkeit ist ein Kernpfeiler von [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "12 Min. Lesezeit",
      sections: [
        {
          title: "Core Web Vitals: Die entscheidenden Metriken",
          content:
            "Google misst die Seitenerfahrung anhand von drei Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP) und Cumulative Layout Shift (CLS). Jede Metrik erfasst einen anderen Aspekt der Nutzererfahrung in Ihrem Shop, und alle drei fließen in Googles Ranking-Algorithmus ein.\n\nLCP misst, wie lange es dauert, bis das größte sichtbare Element gerendert wird, typischerweise ein Hero-Bild oder Produktfoto. Google erwartet LCP unter 2,5 Sekunden. Im Ecommerce ist der Hauptverursacher nicht optimierte Produktbilder. Ein einzelnes 3-MB-Hero-Bild auf einer Kategorieseite kann den LCP auf mobilen Verbindungen über 4 Sekunden treiben.\n\nINP hat im März 2024 First Input Delay ersetzt und misst die Reaktionsfähigkeit über die gesamte Sitzung, nicht nur bei der ersten Interaktion. Jedes Tippen, Klicken und jede Tastatureingabe zählt. Ecommerce-Seiten haben hier Schwierigkeiten wegen des umfangreichen JavaScript von Analytics-Tools, Chat-Widgets und Empfehlungs-Engines. Jedes Drittanbieter-Skript konkurriert um den Haupt-Thread und verzögert Nutzerinteraktionen.\n\nCLS verfolgt unerwartete Layout-Verschiebungen während des Seitenladens. Auf Produktseiten passiert dies häufig, wenn Bilder ohne definierte Abmessungen laden, wenn Preisbadges nach dem initialen Rendern eingefügt werden oder wenn verzögert geladene Bewertungen den Inhalt nach unten schieben. Google verlangt einen CLS unter 0,1 für eine bestandene Bewertung.",
          items: [
            "LCP-Ziel: unter 2,5 Sekunden (größtes sichtbares Element vollständig gerendert)",
            "INP-Ziel: unter 200 Millisekunden (Reaktion auf jede Nutzerinteraktion)",
            "CLS-Ziel: unter 0,1 (minimale unerwartete Layout-Verschiebungen)",
            "Testen Sie mit PageSpeed Insights über den Felddaten-Tab, nicht nur Labordaten",
            "Prüfen Sie Core Web Vitals in der Google Search Console unter Leistung > Core Web Vitals",
          ],
        },
        {
          title: "Bildoptimierung für Produktkataloge",
          content:
            "Bilder machen 50 % bis 70 % des gesamten Seitengewichts auf den meisten Ecommerce-Seiten aus. Eine Kategorieseite mit 40 Produkten und nicht optimierten Bildern kann leicht 15 MB überschreiten. Allein die richtige [Bildoptimierung](/academy/image-optimization-for-products) kann die Ladezeit halbieren.\n\nKonvertieren Sie alle Produktbilder ins WebP- oder AVIF-Format. WebP liefert 25 % bis 35 % kleinere Dateien als JPEG bei vergleichbarer Qualität, und AVIF steigert die Einsparung auf 50 %. Alle großen Browser unterstützen jetzt WebP, und die AVIF-Unterstützung deckt über 90 % der Nutzer ab. Liefern Sie AVIF mit WebP-Fallback über das HTML-Picture-Element.\n\nPassen Sie Bilder an ihre Anzeigegröße an. Ein Produktthumbnail, das mit 300x300 Pixeln angezeigt wird, braucht keine 2000x2000-Quelldatei. Generieren Sie mehrere Größen zur Build-Zeit oder über die Bildtransformations-API Ihres CDN. Liefern Sie 1x-Bilder an Standard-Displays und 2x an Retina-Bildschirme mit srcset-Attributen.\n\nImplementieren Sie Lazy Loading für Bilder unterhalb des sichtbaren Bereichs. Die erste Reihe von Produkten auf einer Kategorieseite sollte sofort laden (Eager Loading), während alles darunter loading=\"lazy\" verwenden sollte. Dies reduziert das initiale Seitengewicht dramatisch. Ein Möbelshop, den wir optimiert haben, ging von 80 Bildern beim initialen Seitenaufruf auf 12 und senkte den LCP von 4,8 auf 1,9 Sekunden.",
          tip: "Nutzen Sie die automatische Bildoptimierung Ihres CDN, falls verfügbar. Cloudflare Polish, Shopifys integriertes Bild-CDN und Imgix übernehmen Formatkonvertierung, Größenanpassung und Komprimierung automatisch. Das eliminiert die manuelle Verwaltung von Bildvarianten.",
        },
        {
          title: "JavaScript- und Drittanbieter-Skript-Management",
          content:
            "Der durchschnittliche Ecommerce-Shop lädt 20 bis 35 Drittanbieter-Skripte: Analytics, Heatmaps, Chat-Widgets, Bewertungsplattformen, Empfehlungs-Engines, Retargeting-Pixel und Zahlungsanbieter. Jedes Skript blockiert den Haupt-Thread, verzögert die Interaktivität und bläht das Seitengewicht auf. Das Auditieren und Verwalten dieser Skripte ist eine der wirkungsvollsten Geschwindigkeitsverbesserungen.\n\nBeginnen Sie damit, jedes Skript zu katalogisieren, das in Ihrem Shop geladen wird. Öffnen Sie die Chrome DevTools, gehen Sie zum Netzwerk-Tab, filtern Sie nach JS und laden Sie die Seite neu. Sortieren Sie nach Größe und Ladezeit. Sie werden fast sicher Skripte finden, die nicht mehr benötigt werden, duplizierte Tracker oder Tools, die für einen Test installiert und nie entfernt wurden.\n\nVerschieben Sie unkritische Skripte mit dem defer- oder async-Attribut. Analytics- und Marketing-Pixel müssen nicht vor dem Seitenrendering geladen werden. Verschieben Sie sie unter den sichtbaren Bereich oder laden Sie sie nach dem DOMContentLoaded-Event. Für Chat-Widgets verzögern Sie die Initialisierung, bis der Nutzer scrollt oder nach einer 5-Sekunden-Verzögerung.\n\nErwägen Sie die Verwendung eines Tag-Managers wie Google Tag Manager mit Trigger-basiertem Laden. Anstatt jedes Skript beim Seitenaufruf auszuführen, konfigurieren Sie Trigger, sodass Retargeting-Pixel nur auf Produktseiten feuern, Chat-Widgets nach 10 Sekunden Inaktivität laden und Bewertungs-Widgets erst laden, wenn der Bewertungsbereich in den sichtbaren Bereich scrollt. Dieser Ansatz reduzierte die Haupt-Thread-Blockierungszeit in einem Einrichtungsshop, den wir optimiert haben, um 40 %.",
          items: [
            "Überprüfen Sie alle Drittanbieter-Skripte vierteljährlich und entfernen Sie ungenutzte",
            "Verschieben Sie unkritisches JavaScript mit async oder defer",
            "Verzögern Sie Chat-Widgets bis zum Nutzer-Scroll oder einem zeitbasierten Trigger",
            "Verwenden Sie Google Tag Manager mit Event-basierten statt Seitenlade-Triggern",
            "Setzen Sie ein Performance-Budget: maximal 300 KB JavaScript auf kritischen Seiten",
          ],
        },
        {
          title: "Server-Antwortzeit und Hosting",
          content:
            "Time to First Byte (TTFB) misst, wie lange Ihr Server braucht, um mit dem ersten Byte HTML zu antworten. Google empfiehlt TTFB unter 800 Millisekunden, aber die besten Ecommerce-Seiten erreichen unter 200 Millisekunden. Langsames TTFB verzögert alles, was folgt: Rendering, Ressourcenladen und Interaktivität.\n\nShared-Hosting-Pläne können kein konsistentes TTFB für Shops mit mehr als einigen Hundert Produkten liefern. Die Datenbankabfragen zum Aufbau von Kategorieseiten mit Filterung, Sortierung und Bestandsprüfungen erfordern dedizierte Ressourcen. Wechseln Sie zu einem VPS, dedizierten Server oder einer verwalteten Ecommerce-Plattform, die die Infrastruktur-Skalierung übernimmt.\n\nImplementieren Sie Ganzseiten-Caching für Kategorie- und Produktseiten. Die meisten Produktseiten ändern sich selten, und das Ausliefern einer gecachten HTML-Antwort eliminiert Datenbankabfragen vollständig. Varnish, Redis oder die integrierte Cache-Schicht Ihrer Plattform können TTFB von 1,5 Sekunden auf unter 100 Millisekunden für gecachte Seiten reduzieren.\n\nNutzen Sie ein CDN mit Edge-Caching, um statische Assets und gecachte Seiten von Standorten nahe Ihrer Kunden auszuliefern. Ein CDN reduziert die Latenz um 50 % bis 80 % für geografisch entfernte Besucher. Für internationale Shops ist dies essentiell. Ein britischer Kunde, der auf einen in den USA gehosteten Shop ohne CDN zugreift, fügt bei jeder Anfrage 150 bis 250 Millisekunden Latenz hinzu.",
          tip: "Testen Sie Ihr TTFB von mehreren Standorten mit WebPageTest.org. Wählen Sie Serverstandorte, die zu Ihrer Kundenbasis passen. Wenn TTFB zwischen Regionen stark variiert, muss wahrscheinlich Ihre CDN-Konfiguration angepasst werden.",
        },
        {
          title: "Optimierung des kritischen Rendering-Pfads",
          content:
            "Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser unternimmt, um HTML, CSS und JavaScript in gerenderte Pixel umzuwandeln. Die Optimierung dieses Pfads bedeutet sicherzustellen, dass der Browser so schnell wie möglich sinnvollen Inhalt anzeigen kann, auch während zusätzliche Ressourcen noch geladen werden.\n\nFügen Sie Ihr kritisches CSS direkt in den HTML-Head ein. Kritisches CSS ist der minimale Satz an Stilen, der zum Rendern des sichtbaren Inhalts benötigt wird. Tools wie Critical oder Penthouse können dies automatisch extrahieren. Durch das Einbetten von 10 bis 15 KB kritischem CSS kann der Browser die initiale Ansicht rendern, ohne auf externe Stylesheet-Downloads zu warten.\n\nPreloaden Sie wichtige Ressourcen, die der Browser erst spät im Parsing-Prozess entdeckt. Web-Fonts, Hero-Bilder und kritische JavaScript-Bundles sollten rel=\"preload\"-Link-Tags im HTML-Head verwenden. Ohne Preloading entdeckt der Browser diese Ressourcen erst nach dem Parsen von CSS- oder JavaScript-Dateien, was Hunderte von Millisekunden Verzögerung hinzufügt.\n\nEliminieren Sie render-blockierende Ressourcen, indem Sie unkritisches CSS und JavaScript verschieben. Laden Sie Ihr vollständiges Stylesheet asynchron mit dem media=\"print\"-Trick mit einem onload-Handler, der es zu media=\"all\" wechselt. So kann der Browser die Seite mit eingebettetem kritischem CSS rendern, während das vollständige Stylesheet im Hintergrund heruntergeladen wird.\n\nBei Shopify-Shops injizieren die Liquid-Templates und App-Blöcke des Themes oft render-blockierende Skripte und Stile. Überprüfen Sie Ihre theme.liquid-Datei und verschieben Sie nicht-essentielle App-Skripte auf verzögertes Laden. Jede render-blockierende Ressource fügt 100 bis 300 Millisekunden zum initialen Rendering hinzu. Weitere Informationen finden Sie in unserem Leitfaden zu [Mobile-First-SEO](/academy/mobile-first-for-ecommerce).",
        },
      ],
      navLabels: {
        previous: "Crawl-Budget-Management",
        next: "Mobile-First für Ecommerce",
      },
    },
    fr: {
      badge: "SEO Technique",
      heading: "Optimisation de la Vitesse de Site pour le E-commerce",
      intro:
        "Le temps de chargement des pages affecte directement le classement et le chiffre d'affaires. Google utilise les Core Web Vitals comme signal de classement, et les recherches montrent systématiquement que chaque seconde supplémentaire de chargement réduit les taux de conversion e-commerce de 7 % à 12 %. Les boutiques plus rapides sont mieux classées et vendent davantage. La vitesse est un pilier fondamental du [SEO technique pour l'e-commerce](/blog/technical-seo-for-ecommerce).",
      readTime: "12 min de lecture",
      sections: [
        {
          title: "Core Web Vitals : les indicateurs qui comptent",
          content:
            "Google mesure l'expérience de page via trois Core Web Vitals : Largest Contentful Paint (LCP), Interaction to Next Paint (INP) et Cumulative Layout Shift (CLS). Chaque indicateur capture un aspect différent de l'expérience utilisateur dans votre boutique, et tous trois alimentent l'algorithme de classement de Google.\n\nLe LCP mesure le temps nécessaire pour que le plus grand élément visible s'affiche, généralement une image héro ou une photo produit. Google attend un LCP inférieur à 2,5 secondes. Pour le e-commerce, le principal coupable est l'imagerie produit non optimisée. Une seule image héro de 3 Mo sur une page catégorie peut pousser le LCP au-delà de 4 secondes sur les connexions mobiles.\n\nL'INP a remplacé le First Input Delay en mars 2024 et mesure la réactivité sur toute la session de page, pas seulement la première interaction. Chaque tapotement, clic et saisie clavier compte. Les sites e-commerce peinent ici à cause du JavaScript lourd des outils d'analyse, widgets de chat et moteurs de recommandation. Chaque script tiers monopolise le thread principal, retardant les interactions utilisateur.\n\nLe CLS suit les décalages de mise en page inattendus pendant le chargement. Sur les pages produit, cela se produit couramment lorsque les images se chargent sans dimensions définies, lorsque des badges de prix s'insèrent après le rendu initial, ou lorsque des avis chargés en différé poussent le contenu vers le bas. Google exige un CLS inférieur à 0,1 pour un score satisfaisant.",
          items: [
            "Objectif LCP : moins de 2,5 secondes (plus grand élément visible entièrement rendu)",
            "Objectif INP : moins de 200 millisecondes (réponse à toute interaction utilisateur)",
            "Objectif CLS : moins de 0,1 (décalages de mise en page inattendus minimaux)",
            "Testez avec PageSpeed Insights en utilisant l'onglet données terrain, pas seulement les données labo",
            "Vérifiez les Core Web Vitals dans Google Search Console sous Expérience > Core Web Vitals",
          ],
        },
        {
          title: "Optimisation des images pour les catalogues produits",
          content:
            "Les images représentent 50 % à 70 % du poids total des pages sur la plupart des sites e-commerce. Une page catégorie affichant 40 produits avec des images non optimisées peut facilement dépasser 15 Mo. L'optimisation correcte des images seule peut réduire le temps de chargement de moitié.\n\nConvertissez toutes les images produit au format WebP ou AVIF. Le WebP offre des fichiers 25 % à 35 % plus petits que le JPEG à qualité équivalente, et l'AVIF pousse les économies à 50 %. Tous les navigateurs majeurs supportent maintenant le WebP, et le support AVIF couvre plus de 90 % des utilisateurs. Servez l'AVIF avec un fallback WebP en utilisant l'élément HTML picture.\n\nRedimensionnez les images pour correspondre à leurs dimensions d'affichage. Une vignette produit affichée à 300x300 pixels n'a pas besoin d'un fichier source de 2000x2000. Générez plusieurs tailles au moment du build ou via l'API de transformation d'images de votre CDN. Servez des images 1x aux écrans standard et 2x aux écrans Retina avec les attributs srcset.\n\nImplémentez le chargement différé pour les images sous la ligne de flottaison. La première rangée de produits sur une page catégorie devrait charger immédiatement (chargement eager), tandis que tout le reste devrait utiliser loading=\"lazy\". Cela réduit le poids initial de la page de manière spectaculaire. Une boutique de mobilier que nous avons optimisée est passée de 80 images au chargement initial à 12, faisant chuter le LCP de 4,8 secondes à 1,9 secondes. Une bonne [optimisation des images](/academy/image-optimization-for-products) seule peut réduire le temps de chargement de moitié.",
          tip: "Utilisez l'optimisation automatique des images de votre CDN si disponible. Cloudflare Polish, le CDN d'images intégré de Shopify et Imgix gèrent automatiquement la conversion de format, le redimensionnement et la compression. Cela élimine la gestion manuelle des variantes d'images.",
        },
        {
          title: "Gestion du JavaScript et des scripts tiers",
          content:
            "La boutique e-commerce moyenne charge 20 à 35 scripts tiers : analytics, cartes de chaleur, widgets de chat, plateformes d'avis, moteurs de recommandation, pixels de retargeting et prestataires de paiement. Chaque script bloque le thread principal, retarde l'interactivité et gonfle le poids de page. L'audit et la gestion de ces scripts constituent l'une des améliorations de vitesse les plus impactantes.\n\nCommencez par cataloguer chaque script chargé sur votre boutique. Ouvrez les DevTools de Chrome, allez dans l'onglet Réseau, filtrez par JS et rechargez la page. Triez par taille et temps de chargement. Vous trouverez presque certainement des scripts qui ne sont plus nécessaires, des trackers dupliqués ou des outils installés pour un test et jamais supprimés.\n\nDifférez les scripts non critiques avec l'attribut defer ou async. Les pixels d'analytics et de marketing n'ont pas besoin de charger avant le rendu de la page. Déplacez-les sous la ligne de flottaison ou chargez-les après l'événement DOMContentLoaded. Pour les widgets de chat, retardez l'initialisation jusqu'au scroll de l'utilisateur ou après un délai de 5 secondes.\n\nEnvisagez d'utiliser un gestionnaire de tags comme Google Tag Manager avec un chargement basé sur des déclencheurs. Au lieu de déclencher chaque script au chargement de page, configurez des déclencheurs pour que les pixels de retargeting ne se déclenchent que sur les pages produit, les widgets de chat chargent après 10 secondes d'inactivité et les widgets d'avis ne chargent que lorsque la section avis entre dans le viewport. Cette approche a réduit le temps de blocage du thread principal de 40 % sur une boutique d'ameublement que nous avons optimisée.",
          items: [
            "Auditez tous les scripts tiers chaque trimestre et supprimez les inutilisés",
            "Différez le JavaScript non critique avec les attributs async ou defer",
            "Retardez les widgets de chat jusqu'au scroll utilisateur ou un déclencheur temporel",
            "Utilisez Google Tag Manager avec des déclencheurs basés sur les événements plutôt que sur le chargement de page",
            "Définissez un budget de performance : pas plus de 300 Ko de JavaScript total sur les pages critiques",
          ],
        },
        {
          title: "Temps de réponse serveur et hébergement",
          content:
            "Le Time to First Byte (TTFB) mesure le temps nécessaire à votre serveur pour répondre avec le premier octet de HTML. Google recommande un TTFB inférieur à 800 millisecondes, mais les meilleurs sites e-commerce atteignent moins de 200 millisecondes. Un TTFB lent retarde tout ce qui suit : le rendu, le chargement des ressources et l'interactivité.\n\nLes hébergements mutualisés ne peuvent pas fournir un TTFB constant pour les boutiques de plus de quelques centaines de produits. Les requêtes de base de données nécessaires pour construire des pages catégories avec filtrage, tri et vérifications de stock exigent des ressources dédiées. Passez à un VPS, un serveur dédié ou une plateforme e-commerce gérée qui gère la montée en charge de l'infrastructure.\n\nImplémentez le cache de page complète pour les pages catégorie et produit. La plupart des pages produit changent rarement, et servir une réponse HTML mise en cache élimine entièrement les requêtes de base de données. Varnish, Redis ou la couche de cache intégrée de votre plateforme peuvent réduire le TTFB de 1,5 seconde à moins de 100 millisecondes pour les pages en cache.\n\nUtilisez un CDN avec cache en périphérie pour servir les assets statiques et les pages en cache depuis des emplacements proches de vos clients. Un CDN réduit la latence de 50 % à 80 % pour les visiteurs géographiquement éloignés. Pour les boutiques internationales, c'est essentiel. Un client britannique accédant à une boutique hébergée aux États-Unis sans CDN ajoute 150 à 250 millisecondes de latence à chaque requête.",
          tip: "Testez votre TTFB depuis plusieurs emplacements avec WebPageTest.org. Sélectionnez des emplacements serveur correspondant à votre base de clients. Si le TTFB varie fortement entre les régions, votre configuration CDN nécessite probablement une attention particulière.",
        },
        {
          title: "Optimisation du chemin de rendu critique",
          content:
            "Le chemin de rendu critique est la séquence d'étapes que le navigateur suit pour convertir HTML, CSS et JavaScript en pixels affichés. Optimiser ce chemin signifie s'assurer que le navigateur peut afficher du contenu significatif le plus rapidement possible, même pendant que des ressources supplémentaires se chargent encore.\n\nIntégrez votre CSS critique directement dans le head HTML. Le CSS critique est l'ensemble minimum de styles nécessaire pour afficher le contenu au-dessus de la ligne de flottaison. Des outils comme Critical ou Penthouse peuvent l'extraire automatiquement. En intégrant 10 à 15 Ko de CSS critique, le navigateur peut peindre la vue initiale sans attendre le téléchargement des feuilles de style externes.\n\nPréchargez les ressources clés que le navigateur découvre tard dans le processus d'analyse. Les polices web, les images héro et les bundles JavaScript critiques doivent utiliser des balises link rel=\"preload\" dans le head HTML. Sans préchargement, le navigateur ne découvre ces ressources qu'après l'analyse des fichiers CSS ou JavaScript, ajoutant des centaines de millisecondes de délai.\n\nÉliminez les ressources bloquant le rendu en différant le CSS et JavaScript non critiques. Chargez votre feuille de style complète de manière asynchrone en utilisant l'astuce media=\"print\" avec un gestionnaire onload qui bascule vers media=\"all\". Cela permet au navigateur de rendre la page en utilisant le CSS critique intégré pendant que la feuille de style complète se télécharge en arrière-plan.\n\nPour les boutiques Shopify, les templates Liquid du thème et les blocs d'applications injectent souvent des scripts et styles bloquant le rendu. Auditez votre fichier theme.liquid et déplacez les scripts d'applications non essentiels vers un chargement différé. Chaque ressource bloquant le rendu ajoute 100 à 300 millisecondes au rendu initial. S'assurer que votre boutique fonctionne bien sur mobile est tout aussi crucial — consultez notre guide sur le [SEO mobile-first](/academy/mobile-first-for-ecommerce).",
        },
      ],
      navLabels: {
        previous: "Gestion du Budget de Crawl",
        next: "Mobile-First pour le E-commerce",
      },
    },
    es: {
      badge: "SEO Técnico",
      heading: "Optimización de Velocidad de Sitio para Ecommerce",
      intro:
        "El tiempo de carga de página afecta directamente tanto los rankings como los ingresos. Google utiliza los Core Web Vitals como señal de ranking, y las investigaciones muestran consistentemente que cada segundo adicional de carga reduce las tasas de conversión de ecommerce entre un 7 % y un 12 %. Las tiendas más rápidas rankean mejor y venden más. La velocidad es un pilar fundamental del [SEO tecnico para ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "12 min de lectura",
      sections: [
        {
          title: "Core Web Vitals: las métricas que importan",
          content:
            "Google mide la experiencia de página a través de tres Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP) y Cumulative Layout Shift (CLS). Cada métrica captura un aspecto diferente de cómo los usuarios experimentan tu tienda, y las tres alimentan el algoritmo de ranking de Google.\n\nEl LCP mide cuánto tarda en renderizarse el elemento visible más grande, típicamente una imagen hero o foto de producto. Google espera un LCP inferior a 2,5 segundos. Para ecommerce, el principal infractor son las imágenes de producto sin optimizar. Una sola imagen hero de 3 MB en una página de categoría puede llevar el LCP más allá de 4 segundos en conexiones móviles.\n\nEl INP reemplazó al First Input Delay en marzo de 2024 y mide la capacidad de respuesta durante toda la sesión de página, no solo la primera interacción. Cada toque, clic y entrada de teclado cuenta. Los sitios de ecommerce tienen dificultades aquí debido al JavaScript pesado de herramientas de analytics, widgets de chat y motores de recomendación. Cada script de terceros compite por el hilo principal, retrasando las interacciones del usuario.\n\nEl CLS rastrea los cambios de diseño inesperados durante la carga de página. En las páginas de producto, esto ocurre comúnmente cuando las imágenes cargan sin dimensiones definidas, cuando las etiquetas de precio se insertan después del renderizado inicial, o cuando las reseñas cargadas de forma diferida empujan el contenido hacia abajo. Google requiere un CLS inferior a 0,1 para una puntuación aprobatoria.",
          items: [
            "Objetivo LCP: menos de 2,5 segundos (elemento visible más grande completamente renderizado)",
            "Objetivo INP: menos de 200 milisegundos (respuesta a cualquier interacción del usuario)",
            "Objetivo CLS: menos de 0,1 (cambios de diseño inesperados mínimos)",
            "Prueba con PageSpeed Insights usando la pestaña de datos de campo, no solo datos de laboratorio",
            "Verifica Core Web Vitals en Google Search Console en Experiencia > Core Web Vitals",
          ],
        },
        {
          title: "Optimización de imágenes para catálogos de productos",
          content:
            "Las imágenes representan del 50 % al 70 % del peso total de página en la mayoría de sitios ecommerce. Una página de categoría mostrando 40 productos con imágenes sin optimizar puede superar fácilmente los 15 MB. La optimización adecuada de imágenes por sí sola puede reducir el tiempo de carga a la mitad.\n\nConvierte todas las imágenes de producto al formato WebP o AVIF. WebP ofrece archivos entre un 25 % y un 35 % más pequeños que JPEG con calidad equivalente, y AVIF lleva el ahorro al 50 %. Todos los navegadores principales ahora soportan WebP, y el soporte de AVIF cubre más del 90 % de los usuarios. Sirve AVIF con fallback WebP usando el elemento HTML picture.\n\nRedimensiona las imágenes para que coincidan con sus dimensiones de visualización. Una miniatura de producto mostrada a 300x300 píxeles no necesita un archivo fuente de 2000x2000. Genera múltiples tamaños en tiempo de compilación o a través de la API de transformación de imágenes de tu CDN. Sirve imágenes 1x a pantallas estándar y 2x a pantallas Retina usando atributos srcset.\n\nImplementa carga diferida para imágenes debajo del pliegue. La primera fila de productos en una página de categoría debe cargar inmediatamente (carga eager), mientras que todo lo demás debe usar loading=\"lazy\". Esto reduce el peso inicial de la página drásticamente. Una tienda de muebles que optimizamos pasó de cargar 80 imágenes en la carga inicial a 12, reduciendo el LCP de 4,8 segundos a 1,9 segundos. Una correcta [optimizacion de imagenes](/academy/image-optimization-for-products) por si sola puede reducir el tiempo de carga de pagina a la mitad.",
          tip: "Usa la optimización automática de imágenes de tu CDN si está disponible. Cloudflare Polish, el CDN de imágenes integrado de Shopify e Imgix manejan la conversión de formato, redimensionamiento y compresión automáticamente. Esto elimina la necesidad de gestionar variantes de imagen manualmente.",
        },
        {
          title: "Gestión de JavaScript y scripts de terceros",
          content:
            "La tienda de ecommerce promedio carga de 20 a 35 scripts de terceros: analytics, mapas de calor, widgets de chat, plataformas de reseñas, motores de recomendación, píxeles de retargeting y proveedores de pago. Cada script bloquea el hilo principal, retrasa la interactividad e infla el peso de la página. Auditar y gestionar estos scripts es una de las mejoras de velocidad con mayor impacto.\n\nComienza catalogando cada script que carga en tu tienda. Abre Chrome DevTools, ve a la pestaña Red, filtra por JS y recarga la página. Ordena por tamaño y tiempo de carga. Casi con certeza encontrarás scripts que ya no se necesitan, rastreadores duplicados o herramientas que se instalaron para una prueba y nunca se eliminaron.\n\nDifiere los scripts no críticos usando el atributo defer o async. Los píxeles de analytics y marketing no necesitan cargar antes de que la página se renderice. Muévelos debajo del pliegue o cárgalos después del evento DOMContentLoaded. Para widgets de chat, retrasa la inicialización hasta que el usuario haga scroll o después de un tiempo de espera de 5 segundos.\n\nConsidera usar un gestor de etiquetas como Google Tag Manager con carga basada en disparadores. En lugar de ejecutar cada script al cargar la página, configura disparadores para que los píxeles de retargeting solo se activen en páginas de producto, los widgets de chat carguen después de 10 segundos de inactividad y los widgets de reseñas carguen solo cuando la sección de reseñas entre en el viewport. Este enfoque redujo el tiempo de bloqueo del hilo principal en un 40 % en una tienda de artículos para el hogar que optimizamos.",
          items: [
            "Audita todos los scripts de terceros trimestralmente y elimina los no utilizados",
            "Difiere el JavaScript no crítico con atributos async o defer",
            "Retrasa los widgets de chat hasta el scroll del usuario o un disparador temporal",
            "Usa Google Tag Manager con disparadores basados en eventos en lugar de carga de página",
            "Establece un presupuesto de rendimiento: no más de 300 KB de JavaScript total en páginas críticas",
          ],
        },
        {
          title: "Tiempo de respuesta del servidor y alojamiento",
          content:
            "El Time to First Byte (TTFB) mide cuánto tarda tu servidor en responder con el primer byte de HTML. Google recomienda un TTFB inferior a 800 milisegundos, pero los mejores sitios de ecommerce logran menos de 200 milisegundos. Un TTFB lento retrasa todo lo que sigue: renderizado, carga de recursos e interactividad.\n\nLos planes de hosting compartido no pueden ofrecer un TTFB consistente para tiendas con más de unos pocos cientos de productos. Las consultas de base de datos necesarias para construir páginas de categoría con filtrado, ordenamiento y verificaciones de inventario demandan recursos dedicados. Actualiza a un VPS, servidor dedicado o una plataforma de ecommerce gestionada que maneje el escalado de infraestructura.\n\nImplementa caché de página completa para páginas de categoría y producto. La mayoría de las páginas de producto cambian infrecuentemente, y servir una respuesta HTML en caché elimina las consultas de base de datos por completo. Varnish, Redis o la capa de caché integrada de tu plataforma pueden reducir el TTFB de 1,5 segundos a menos de 100 milisegundos para páginas en caché.\n\nUsa un CDN con caché en el borde para servir assets estáticos y páginas en caché desde ubicaciones cercanas a tus clientes. Un CDN reduce la latencia entre un 50 % y un 80 % para visitantes geográficamente distantes. Para tiendas internacionales, esto es esencial. Un cliente británico accediendo a una tienda alojada en EE.UU. sin CDN añade de 150 a 250 milisegundos de latencia en cada solicitud.",
          tip: "Prueba tu TTFB desde múltiples ubicaciones usando WebPageTest.org. Selecciona ubicaciones de servidor que coincidan con tu base de clientes. Si el TTFB varía mucho entre regiones, tu configuración de CDN probablemente necesita atención.",
        },
        {
          title: "Optimización de la ruta de renderizado crítico",
          content:
            "La ruta de renderizado crítico es la secuencia de pasos que el navegador sigue para convertir HTML, CSS y JavaScript en píxeles renderizados. Optimizar esta ruta significa asegurar que el navegador pueda mostrar contenido significativo lo más rápidamente posible, incluso mientras recursos adicionales aún se están cargando.\n\nIncrusta tu CSS crítico directamente en el head HTML. El CSS crítico es el conjunto mínimo de estilos necesarios para renderizar el contenido visible sobre el pliegue. Herramientas como Critical o Penthouse pueden extraerlo automáticamente. Al incrustar de 10 a 15 KB de CSS crítico, el navegador puede pintar la vista inicial sin esperar descargas de hojas de estilo externas.\n\nPrecarga recursos clave que el navegador descubre tarde en el proceso de análisis. Las fuentes web, imágenes hero y bundles de JavaScript críticos deben usar etiquetas link rel=\"preload\" en el head HTML. Sin precarga, el navegador solo descubre estos recursos después de analizar archivos CSS o JavaScript, añadiendo cientos de milisegundos de retraso.\n\nElimina recursos que bloquean el renderizado difiriendo CSS y JavaScript no críticos. Carga tu hoja de estilos completa de forma asíncrona usando el truco de media=\"print\" con un controlador onload que la cambia a media=\"all\". Esto permite al navegador renderizar la página usando CSS crítico incrustado mientras la hoja de estilos completa se descarga en segundo plano.\n\nPara tiendas Shopify, las plantillas Liquid del tema y los bloques de aplicaciones a menudo inyectan scripts y estilos que bloquean el renderizado. Audita tu archivo theme.liquid y mueve los scripts de aplicaciones no esenciales a carga diferida. Cada recurso que bloquea el renderizado añade de 100 a 300 milisegundos al renderizado inicial. Asegurar que tu tienda funcione bien en telefonos es igualmente critico: consulta nuestra guia de [SEO mobile-first](/academy/mobile-first-for-ecommerce).",
        },
      ],
      navLabels: {
        previous: "Gestión del Presupuesto de Rastreo",
        next: "Mobile-First para Ecommerce",
      },
    },
    it: {
      badge: "SEO Tecnico",
      heading: "Ottimizzazione della Velocità del Sito per l'Ecommerce",
      intro:
        "Il tempo di caricamento delle pagine influisce direttamente sia sui posizionamenti che sui ricavi. Google utilizza i Core Web Vitals come segnale di ranking, e le ricerche dimostrano costantemente che ogni secondo aggiuntivo di caricamento riduce i tassi di conversione ecommerce dal 7 % al 12 %. I negozi più veloci si posizionano meglio e vendono di più. Approfondisci con la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "12 min di lettura",
      sections: [
        {
          title: "Core Web Vitals: le metriche che contano",
          content:
            "Google misura l'esperienza della pagina attraverso tre Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP) e Cumulative Layout Shift (CLS). Ogni metrica cattura un aspetto diverso dell'esperienza utente nel tuo negozio, e tutte e tre alimentano l'algoritmo di ranking di Google.\n\nIl LCP misura quanto tempo impiega l'elemento visibile più grande a renderizzarsi, tipicamente un'immagine hero o una foto prodotto. Google si aspetta un LCP inferiore a 2,5 secondi. Per l'ecommerce, il principale responsabile è l'immagine prodotto non ottimizzata. Una singola immagine hero da 3 MB su una pagina categoria può portare il LCP oltre i 4 secondi sulle connessioni mobile.\n\nL'INP ha sostituito il First Input Delay a marzo 2024 e misura la reattività durante l'intera sessione della pagina, non solo la prima interazione. Ogni tocco, clic e input da tastiera conta. I siti ecommerce faticano qui a causa del JavaScript pesante di strumenti di analytics, widget di chat e motori di raccomandazione. Ogni script di terze parti compete per il thread principale, ritardando le interazioni dell'utente.\n\nIl CLS traccia gli spostamenti inattesi del layout durante il caricamento della pagina. Nelle pagine prodotto, questo succede comunemente quando le immagini si caricano senza dimensioni definite, quando i badge prezzo si inseriscono dopo il rendering iniziale, o quando le recensioni caricate in modo differito spingono il contenuto verso il basso. Google richiede un CLS inferiore a 0,1 per un punteggio sufficiente.",
          items: [
            "Obiettivo LCP: meno di 2,5 secondi (elemento visibile più grande completamente renderizzato)",
            "Obiettivo INP: meno di 200 millisecondi (risposta a qualsiasi interazione utente)",
            "Obiettivo CLS: meno di 0,1 (spostamenti di layout inattesi minimi)",
            "Testa con PageSpeed Insights usando la scheda dati sul campo, non solo i dati di laboratorio",
            "Controlla i Core Web Vitals in Google Search Console sotto Esperienza > Core Web Vitals",
          ],
        },
        {
          title: "Ottimizzazione delle immagini per cataloghi prodotto",
          content:
            "Le immagini rappresentano dal 50 % al 70 % del peso totale della pagina sulla maggior parte dei siti ecommerce. Una pagina categoria che mostra 40 prodotti con immagini non ottimizzate può superare facilmente i 15 MB. La corretta [ottimizzazione delle immagini](/academy/image-optimization-for-products) da sola può dimezzare il tempo di caricamento.\n\nConverti tutte le immagini prodotto nel formato WebP o AVIF. Il WebP offre file dal 25 % al 35 % più piccoli rispetto al JPEG a qualità equivalente, e l'AVIF porta il risparmio al 50 %. Tutti i browser principali ora supportano il WebP, e il supporto AVIF copre oltre il 90 % degli utenti. Servi AVIF con fallback WebP usando l'elemento HTML picture.\n\nRidimensiona le immagini per corrispondere alle loro dimensioni di visualizzazione. Una miniatura prodotto mostrata a 300x300 pixel non necessita di un file sorgente 2000x2000. Genera dimensioni multiple al momento della build o tramite l'API di trasformazione immagini del tuo CDN. Servi immagini 1x ai display standard e 2x ai display Retina usando attributi srcset.\n\nImplementa il lazy loading per le immagini sotto la piega. La prima riga di prodotti su una pagina categoria dovrebbe caricarsi immediatamente (caricamento eager), mentre tutto il resto dovrebbe usare loading=\"lazy\". Questo riduce drasticamente il peso iniziale della pagina. Un negozio di mobili che abbiamo ottimizzato è passato dal caricare 80 immagini al caricamento iniziale a 12, riducendo il LCP da 4,8 secondi a 1,9 secondi.",
          tip: "Usa l'ottimizzazione automatica delle immagini del tuo CDN se disponibile. Cloudflare Polish, il CDN immagini integrato di Shopify e Imgix gestiscono automaticamente conversione formato, ridimensionamento e compressione. Questo elimina la necessità di gestire le varianti delle immagini manualmente.",
        },
        {
          title: "Gestione di JavaScript e script di terze parti",
          content:
            "Il negozio ecommerce medio carica da 20 a 35 script di terze parti: analytics, heatmap, widget di chat, piattaforme di recensioni, motori di raccomandazione, pixel di retargeting e fornitori di pagamento. Ogni script blocca il thread principale, ritarda l'interattività e gonfia il peso della pagina. Controllare e gestire questi script è uno dei miglioramenti di velocità con il maggiore impatto.\n\nInizia catalogando ogni script caricato nel tuo negozio. Apri Chrome DevTools, vai nella scheda Rete, filtra per JS e ricarica la pagina. Ordina per dimensione e tempo di caricamento. Quasi certamente troverai script non più necessari, tracker duplicati o strumenti installati per un test e mai rimossi.\n\nDiferisci gli script non critici usando l'attributo defer o async. I pixel di analytics e marketing non devono caricarsi prima del rendering della pagina. Spostali sotto la piega o caricali dopo l'evento DOMContentLoaded. Per i widget di chat, ritarda l'inizializzazione fino a quando l'utente scorre o dopo un timeout di 5 secondi.\n\nConsidera l'uso di un tag manager come Google Tag Manager con caricamento basato su trigger. Invece di attivare ogni script al caricamento della pagina, configura i trigger in modo che i pixel di retargeting si attivino solo sulle pagine prodotto, i widget di chat carichino dopo 10 secondi di inattività e i widget di recensioni carichino solo quando la sezione recensioni entra nel viewport. Questo approccio ha ridotto il tempo di blocco del thread principale del 40 % in un negozio di arredamento che abbiamo ottimizzato.",
          items: [
            "Controlla tutti gli script di terze parti trimestralmente e rimuovi quelli inutilizzati",
            "Differisci il JavaScript non critico con attributi async o defer",
            "Ritarda i widget di chat fino allo scroll dell'utente o a un trigger temporale",
            "Usa Google Tag Manager con trigger basati su eventi anziché sul caricamento pagina",
            "Imposta un budget di performance: non più di 300 KB di JavaScript totale sulle pagine critiche",
          ],
        },
        {
          title: "Tempo di risposta del server e hosting",
          content:
            "Il Time to First Byte (TTFB) misura quanto tempo impiega il tuo server a rispondere con il primo byte di HTML. Google raccomanda un TTFB inferiore a 800 millisecondi, ma i migliori siti ecommerce raggiungono meno di 200 millisecondi. Un TTFB lento ritarda tutto ciò che segue: rendering, caricamento risorse e interattività.\n\nI piani di hosting condiviso non possono fornire un TTFB costante per negozi con più di qualche centinaio di prodotti. Le query al database necessarie per costruire pagine categoria con filtri, ordinamento e verifiche di inventario richiedono risorse dedicate. Passa a un VPS, server dedicato o una piattaforma ecommerce gestita che gestisce lo scaling dell'infrastruttura.\n\nImplementa il caching di pagina completa per le pagine categoria e prodotto. La maggior parte delle pagine prodotto cambia raramente, e servire una risposta HTML dalla cache elimina completamente le query al database. Varnish, Redis o il layer di cache integrato della tua piattaforma possono ridurre il TTFB da 1,5 secondi a meno di 100 millisecondi per le pagine in cache.\n\nUsa un CDN con cache perimetrale per servire asset statici e pagine in cache da posizioni vicine ai tuoi clienti. Un CDN riduce la latenza dal 50 % all'80 % per i visitatori geograficamente distanti. Per i negozi internazionali, questo è essenziale. Un cliente britannico che accede a un negozio ospitato negli USA senza CDN aggiunge da 150 a 250 millisecondi di latenza per ogni richiesta.",
          tip: "Testa il tuo TTFB da più posizioni usando WebPageTest.org. Seleziona posizioni server che corrispondano alla tua base clienti. Se il TTFB varia notevolmente tra le regioni, la configurazione del tuo CDN probabilmente necessita di attenzione.",
        },
        {
          title: "Ottimizzazione del percorso di rendering critico",
          content:
            "Il percorso di rendering critico è la sequenza di passaggi che il browser compie per convertire HTML, CSS e JavaScript in pixel renderizzati. Ottimizzare questo percorso significa assicurare che il browser possa mostrare contenuto significativo il più rapidamente possibile, anche mentre risorse aggiuntive si stanno ancora caricando.\n\nInserisci il tuo CSS critico direttamente nell'head HTML. Il CSS critico è il set minimo di stili necessario per renderizzare il contenuto sopra la piega. Strumenti come Critical o Penthouse possono estrarlo automaticamente. Inserendo da 10 a 15 KB di CSS critico inline, il browser può dipingere la vista iniziale senza attendere il download di fogli di stile esterni.\n\nPrecarica le risorse chiave che il browser scopre tardi nel processo di analisi. I web font, le immagini hero e i bundle JavaScript critici dovrebbero usare tag link rel=\"preload\" nell'head HTML. Senza precaricamento, il browser scopre queste risorse solo dopo aver analizzato file CSS o JavaScript, aggiungendo centinaia di millisecondi di ritardo.\n\nElimina le risorse che bloccano il rendering differendo CSS e JavaScript non critici. Carica il tuo foglio di stile completo in modo asincrono usando il trucco media=\"print\" con un gestore onload che lo cambia in media=\"all\". Questo permette al browser di renderizzare la pagina usando il CSS critico inline mentre il foglio di stile completo si scarica in background.\n\nPer i negozi Shopify, i template Liquid del tema e i blocchi delle app spesso iniettano script e stili che bloccano il rendering. Controlla il tuo file theme.liquid e sposta gli script delle app non essenziali al caricamento differito. Ogni risorsa che blocca il rendering aggiunge da 100 a 300 millisecondi al rendering iniziale. Per approfondire, consulta la nostra guida sulla [SEO mobile-first](/academy/mobile-first-for-ecommerce).",
        },
      ],
      navLabels: {
        previous: "Gestione del Budget di Crawl",
        next: "Mobile-First per l'Ecommerce",
      },
    },
    nl: {
      badge: "Technische SEO",
      heading: "Sitesnelheid-optimalisatie voor Ecommerce",
      intro:
        "Laadtijd van pagina's heeft directe invloed op zowel rankings als omzet. Google gebruikt Core Web Vitals als rankingsignaal, en onderzoek toont consequent aan dat elke extra seconde laadtijd de conversieratio van ecommerce met 7 % tot 12 % verlaagt. Snellere winkels ranken hoger en verkopen meer.\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "12 min leestijd",
      sections: [
        {
          title: "Core Web Vitals: de metrics die ertoe doen",
          content:
            "Google meet de pagina-ervaring via drie Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP) en Cumulative Layout Shift (CLS). Elke metric vangt een ander aspect van hoe gebruikers je winkel ervaren, en alle drie voeden ze Google's ranking-algoritme.\n\nLCP meet hoe lang het duurt voordat het grootste zichtbare element wordt gerenderd, meestal een hero-afbeelding of productfoto. Google verwacht een LCP onder 2,5 seconden. Voor ecommerce is de voornaamste boosdoener niet-geoptimaliseerde productafbeeldingen. Een enkele hero-afbeelding van 3 MB op een categoriepagina kan de LCP voorbij 4 seconden duwen op mobiele verbindingen.\n\nINP verving First Input Delay in maart 2024 en meet responsiviteit gedurende de hele paginasessie, niet alleen de eerste interactie. Elke tik, klik en toetsenbordinvoer telt. Ecommerce-sites hebben hier moeite mee vanwege het zware JavaScript van analytics-tools, chatwidgets en aanbevelingsengines. Elk script van derden concurreert om de main thread, waardoor gebruikersinteracties worden vertraagd.\n\nCLS volgt onverwachte lay-outverschuivingen tijdens het laden van de pagina. Op productpagina's gebeurt dit vaak wanneer afbeeldingen laden zonder gedefinieerde afmetingen, wanneer prijsbadges na de initiële render worden ingevoegd, of wanneer lazy-loaded reviews de content naar beneden duwen. Google vereist een CLS onder 0,1 voor een voldoende score.",
          items: [
            "LCP-doel: onder 2,5 seconden (grootste zichtbare element volledig gerenderd)",
            "INP-doel: onder 200 milliseconden (reactie op elke gebruikersinteractie)",
            "CLS-doel: onder 0,1 (minimale onverwachte lay-outverschuivingen)",
            "Test met PageSpeed Insights via het tabblad veldgegevens, niet alleen labgegevens",
            "Controleer Core Web Vitals in Google Search Console onder Ervaring > Core Web Vitals",
          ],
        },
        {
          title: "Beeldoptimalisatie voor productcatalogi",
          content:
            "Afbeeldingen maken 50 % tot 70 % uit van het totale paginagewicht op de meeste ecommerce-sites. Een categoriepagina met 40 producten met niet-geoptimaliseerde afbeeldingen kan gemakkelijk 15 MB overschrijden. Alleen al de juiste [beeldoptimalisatie](/academy/image-optimization-for-products) kan de laadtijd halveren.\n\nConverteer alle productafbeeldingen naar WebP- of AVIF-formaat. WebP levert 25 % tot 35 % kleinere bestanden dan JPEG bij gelijkwaardige kwaliteit, en AVIF duwt de besparing naar 50 %. Alle grote browsers ondersteunen nu WebP, en AVIF-ondersteuning dekt meer dan 90 % van de gebruikers. Lever AVIF met WebP-fallback via het HTML picture-element.\n\nSchaal afbeeldingen naar hun weergaveformaat. Een productminiatuur die wordt weergegeven op 300x300 pixels heeft geen bronbestand van 2000x2000 nodig. Genereer meerdere formaten tijdens de build of via de beeldtransformatie-API van je CDN. Lever 1x-afbeeldingen aan standaard displays en 2x aan Retina-schermen met srcset-attributen.\n\nImplementeer lazy loading voor afbeeldingen onder de vouw. De eerste rij producten op een categoriepagina moet onmiddellijk laden (eager loading), terwijl alles eronder loading=\"lazy\" moet gebruiken. Dit vermindert het initiële paginagewicht dramatisch. Een meubelwinkel die we optimaliseerden ging van 80 afbeeldingen bij het initiële laden naar 12, waardoor de LCP daalde van 4,8 seconden naar 1,9 seconden.",
          tip: "Gebruik de automatische beeldoptimalisatie van je CDN indien beschikbaar. Cloudflare Polish, Shopify's ingebouwde beeld-CDN en Imgix verwerken formaatconversie, schaling en compressie automatisch. Dit elimineert de noodzaak om beeldvarianten handmatig te beheren.",
        },
        {
          title: "JavaScript- en third-party scriptbeheer",
          content:
            "De gemiddelde ecommerce-winkel laadt 20 tot 35 scripts van derden: analytics, heatmaps, chatwidgets, reviewplatforms, aanbevelingsengines, retargeting-pixels en betalingsproviders. Elk script blokkeert de main thread, vertraagt interactiviteit en verhoogt het paginagewicht. Het auditen en beheren van deze scripts is een van de meest impactvolle snelheidsverbeteringen die je kunt doorvoeren.\n\nBegin met het catalogiseren van elk script dat in je winkel wordt geladen. Open Chrome DevTools, ga naar het tabblad Netwerk, filter op JS en herlaad de pagina. Sorteer op grootte en laadtijd. Je zult vrijwel zeker scripts vinden die niet meer nodig zijn, gedupliceerde trackers of tools die voor een test zijn geïnstalleerd en nooit zijn verwijderd.\n\nStel niet-kritische scripts uit met het defer- of async-attribuut. Analytics- en marketingpixels hoeven niet te laden vóór het renderen van de pagina. Verplaats ze onder de vouw of laad ze na het DOMContentLoaded-event. Voor chatwidgets, vertraag de initialisatie tot de gebruiker scrollt of na een timeout van 5 seconden.\n\nOverweeg het gebruik van een tag manager zoals Google Tag Manager met op triggers gebaseerd laden. In plaats van elk script bij het laden van de pagina te activeren, configureer triggers zodat retargeting-pixels alleen op productpagina's vuren, chatwidgets laden na 10 seconden inactiviteit en reviewwidgets alleen laden wanneer de reviewsectie in de viewport scrollt. Deze aanpak verminderde de main-thread-blokkering met 40 % bij een woonwinkel die we optimaliseerden.",
          items: [
            "Controleer alle scripts van derden elk kwartaal en verwijder ongebruikte",
            "Stel niet-kritisch JavaScript uit met async- of defer-attributen",
            "Vertraag chatwidgets tot gebruikersscroll of een op tijd gebaseerde trigger",
            "Gebruik Google Tag Manager met op events gebaseerde triggers in plaats van paginaladingstriggers",
            "Stel een prestatiebudget in: maximaal 300 KB aan totaal JavaScript op kritische pagina's",
          ],
        },
        {
          title: "Serverresponstijd en hosting",
          content:
            "Time to First Byte (TTFB) meet hoe lang je server nodig heeft om te reageren met de eerste byte HTML. Google beveelt een TTFB onder 800 milliseconden aan, maar de beste ecommerce-sites bereiken minder dan 200 milliseconden. Een trage TTFB vertraagt alles wat volgt: rendering, het laden van resources en interactiviteit.\n\nGedeelde hostingplannen kunnen geen consistente TTFB leveren voor winkels met meer dan een paar honderd producten. De database-queries die nodig zijn om categoriepagina's te bouwen met filteren, sorteren en voorraadcontroles vereisen dedicated resources. Upgrade naar een VPS, dedicated server of een beheerd ecommerce-platform dat infrastructuurschaling afhandelt.\n\nImplementeer full-page caching voor categorie- en productpagina's. De meeste productpagina's veranderen zelden, en het serveren van een gecachte HTML-response elimineert database-queries volledig. Varnish, Redis of de ingebouwde cachelaag van je platform kunnen de TTFB van 1,5 seconden terugbrengen tot minder dan 100 milliseconden voor gecachte pagina's.\n\nGebruik een CDN met edge caching om statische assets en gecachte pagina's te serveren vanaf locaties dicht bij je klanten. Een CDN vermindert de latentie met 50 % tot 80 % voor geografisch verre bezoekers. Voor internationale winkels is dit essentieel. Een Britse klant die een in de VS gehoste winkel bezoekt zonder CDN voegt 150 tot 250 milliseconden latentie toe bij elk verzoek.",
          tip: "Test je TTFB vanuit meerdere locaties met WebPageTest.org. Selecteer serverlocaties die overeenkomen met je klantenbestand. Als de TTFB sterk varieert tussen regio's, heeft je CDN-configuratie waarschijnlijk aandacht nodig.",
        },
        {
          title: "Optimalisatie van het kritieke renderpad",
          content:
            "Het kritieke renderpad is de reeks stappen die de browser neemt om HTML, CSS en JavaScript om te zetten in gerenderde pixels. Dit pad optimaliseren betekent ervoor zorgen dat de browser zo snel mogelijk betekenisvolle content kan tonen, zelfs terwijl extra resources nog worden geladen.\n\nPlaats je kritieke CSS direct inline in de HTML-head. Kritieke CSS is de minimale set stijlen die nodig is om de content boven de vouw te renderen. Tools zoals Critical of Penthouse kunnen dit automatisch extraheren. Door 10 tot 15 KB aan kritieke CSS inline te plaatsen, kan de browser de initiële weergave renderen zonder te wachten op het downloaden van externe stylesheets.\n\nPreload belangrijke resources die de browser laat in het parseerproces ontdekt. Webfonts, hero-afbeeldingen en kritieke JavaScript-bundles moeten rel=\"preload\"-linktags in de HTML-head gebruiken. Zonder preloading ontdekt de browser deze resources pas na het parsen van CSS- of JavaScript-bestanden, wat honderden milliseconden vertraging toevoegt.\n\nElimineer render-blokkerende resources door niet-kritieke CSS en JavaScript uit te stellen. Laad je volledige stylesheet asynchroon met de media=\"print\"-truc met een onload-handler die het omschakelt naar media=\"all\". Dit stelt de browser in staat de pagina te renderen met inline kritieke CSS terwijl het volledige stylesheet op de achtergrond wordt gedownload.\n\nVoor Shopify-winkels injecteren de Liquid-templates en app-blokken van het thema vaak render-blokkerende scripts en stijlen. Controleer je theme.liquid-bestand en verplaats niet-essentiële app-scripts naar uitgesteld laden. Elke render-blokkerende resource voegt 100 tot 300 milliseconden toe aan de initiële render.\n\nLees meer over [mobile-first SEO](/academy/mobile-first-for-ecommerce) en waarom het cruciaal is voor ecommerce.",
        },
      ],
      navLabels: {
        previous: "Crawlbudgetbeheer",
        next: "Mobile-First voor Ecommerce",
      },
    },
  },
};
