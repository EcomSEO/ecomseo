import type { AcademyTopic } from "../../types";

export const mobileFirstForEcommerce: AcademyTopic = {
  slug: "mobile-first-for-ecommerce",
  cluster: 4,
  resources: [{"label":"Google Mobile-First Indexing","url":"https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing","type":"docs"},{"label":"Chrome DevTools Device Mode","url":"https://developer.chrome.com/docs/devtools/device-mode/","type":"tool"},{"label":"Google PageSpeed Insights","url":"https://pagespeed.web.dev/","type":"tool"}],
  content: {
    en: {
      badge: "Technical SEO",
      heading: "Mobile-First SEO for Ecommerce",
      intro:
        "Google uses the mobile version of your store for all indexing and ranking decisions. If your product pages look different, load slower, or contain less content on mobile than desktop, that mobile version is what determines your search visibility. Over 70% of ecommerce traffic now comes from mobile devices. This makes mobile optimization a non-negotiable part of [technical SEO for ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min read",
      sections: [
        {
          title: "What Mobile-First Indexing Means for Your Store",
          content:
            "Mobile-first indexing means Google predominantly uses the mobile version of your content for indexing and ranking. This shift completed in 2023, and there is no opt-out. If your mobile pages have less content than desktop, Google only sees the mobile version. If your mobile site hides product descriptions behind tabs that require clicks to expand, Google may not index that content at all.\n\nThe practical impact is significant. Many ecommerce sites were built desktop-first and later adapted for mobile through responsive design or a separate mobile site. During that adaptation, content was often trimmed, product descriptions shortened, and internal links removed to fit smaller screens. All of those decisions now directly affect how Google evaluates those pages.\n\nCheck your mobile indexing status in Google Search Console under Settings > Indexing crawler. It should show \"Googlebot Smartphone\" as the primary crawler. If you see any pages where the mobile and desktop versions differ substantially in content, fix the mobile version first. That is what Google cares about.",
          items: [
            "Google indexes your mobile page version, not desktop",
            "Hidden content behind tabs or accordions may not be indexed",
            "Check your crawler type in Search Console under Settings > Indexing crawler",
            "Ensure mobile and desktop pages contain identical core content",
          ],
          image: {
            src: "/images/academy/mobile-first-indexing-flow.svg",
            alt: "Side-by-side comparison showing how desktop pages with full content differ from mobile versions with truncated content, and that Google indexes the mobile version",
            caption: "Google indexes the mobile version of your pages. Content hidden or removed on mobile directly reduces your search visibility.",
          },
          callout: {
            title: "Content Parity Risk",
            text: "Desktop pages averaging 45+ internal links often drop to 12 on mobile. With mobile-first indexing, those missing 33 links weaken crawl priority for the pages they pointed to.",
          },
        },
        {
          title: "Responsive Design vs. Separate Mobile Sites",
          content:
            "Responsive design serves the same HTML to all devices and uses CSS media queries to adjust the layout. A separate mobile site (m.example.com) serves different HTML entirely. For ecommerce SEO, responsive design is the clear winner and the approach Google recommends.\n\nSeparate mobile sites create canonicalization headaches. You need rel=\"alternate\" and rel=\"canonical\" tags pointing between desktop and mobile versions, and any mismatch causes indexing problems. We have audited stores where 30% of mobile pages had broken canonical references, resulting in duplicate content issues and wasted crawl budget.\n\nResponsive design keeps a single URL per page, which consolidates all link equity and simplifies your sitemap, canonical tags, and hreflang implementation. Every inbound link points to one URL rather than splitting between desktop and mobile versions.\n\nIf you are still running a separate mobile site, plan a migration to responsive design. The migration requires careful redirect mapping (301 redirects from every m.example.com URL to its responsive equivalent) and usually takes three to six months to complete without significant traffic loss. The long-term SEO benefits consistently outweigh the short-term migration costs.",
        },
        {
          title: "Mobile Page Speed: The Revenue Multiplier",
          content:
            "Mobile users are less patient than desktop users, and they are typically on slower connections. A page that loads in 3 seconds on desktop WiFi may take 6 seconds on a 4G mobile connection. Google's research shows 53% of mobile visitors abandon a site that takes longer than 3 seconds to load.\n\nFor ecommerce, the revenue impact is measurable. We tracked a fashion retailer before and after mobile speed optimization. Reducing mobile load time from 5.2 seconds to 2.1 seconds increased mobile conversion rate by 27% and mobile revenue by 34% over 90 days. The speed improvements cost less than one week of their paid advertising budget.\n\nPrioritize these mobile-specific optimizations: compress hero images to under 100 KB, defer all non-critical JavaScript until after the first paint, reduce DOM size to under 1,500 elements on product pages, and eliminate render-blocking CSS. Our [site speed optimization](/academy/site-speed-optimization) guide covers each of these techniques in depth. Test every change specifically on throttled mobile connections, not just desktop WiFi.\n\nUse Chrome DevTools device emulation with network throttling set to \"Fast 3G\" as your baseline test. If your product pages load and become interactive within 3 seconds on Fast 3G, they will perform well for the vast majority of mobile users.",
          tip: "Set up a mobile performance monitoring dashboard using Google Search Console's Core Web Vitals report filtered to mobile. Check it weekly. Mobile CWV scores tend to degrade over time as new apps, scripts, and features are added to the store.",
          image: {
            src: "/images/academy/mobile-speed-revenue-impact.svg",
            alt: "Bar chart showing conversion rate declining from 3.8% at 1 second load time to 0.7% at 6+ seconds, with 53% abandon threshold at 3 seconds",
            caption: "Mobile conversion rate drops sharply with each additional second of load time. The 3-second threshold is where 53% of visitors abandon.",
          },
          callout: {
            title: "Revenue Impact",
            text: "Reducing mobile load time from 5.2s to 2.1s increased mobile conversion by 27% and revenue by 34% over 90 days. The optimization cost less than one week of paid advertising budget.",
          },
        },
        {
          title: "Touch-Friendly Design and SEO Impact",
          content:
            "Google evaluates mobile usability as part of its page experience signals, and our [technical SEO](/ecommerce-seo-services) service can help you identify and fix these issues. Pages that fail mobile usability checks receive lower rankings. The most common failures on ecommerce sites are tap targets that are too close together, text that is too small to read without zooming, and content wider than the screen.\n\nTap targets (buttons, links, form fields) must be at least 48x48 CSS pixels with 8 pixels of spacing between them. On product pages, this means your \"Add to Cart\" button, size selectors, and color swatches all need adequate spacing. Dense product grids with tiny tap targets frustrate mobile users and trigger Google's mobile usability warnings.\n\nFont sizes below 16px on mobile force users to pinch-zoom, which Google flags as a usability issue. Set your base font size to 16px minimum and scale headings proportionally. Product descriptions, prices, and reviews should all be readable without any user intervention.\n\nAvoid horizontal scrolling entirely. If any element extends beyond the mobile viewport width, Google marks the page as failing mobile usability. Common offenders include wide product comparison tables, oversized images without max-width constraints, and desktop-width iframes for video embeds or size guides.",
          items: [
            "Minimum tap target size: 48x48 CSS pixels with 8px spacing",
            "Base font size: 16px minimum on mobile",
            "No horizontal scrolling on any page element",
            "Test with Google's Mobile-Friendly Test tool and Search Console's mobile usability report",
          ],
        },
        {
          title: "Mobile Navigation and Internal Linking",
          content:
            "Mobile navigation structures often differ dramatically from desktop, and these differences affect SEO. Desktop mega menus might expose 200 category links in a single hover, while mobile hamburger menus hide those same links behind two or three taps. Since Google indexes the mobile version, any links hidden in collapsed mobile menus may receive less crawl priority.\n\nEnsure your mobile navigation includes all the same category and subcategory links as your desktop navigation. The links do not need to be visible by default (hamburger menus are fine), but they must be present in the HTML. Google can follow links inside collapsed menus as long as the HTML contains them.\n\nMobile product pages often strip out cross-selling and related product sections to save space. This removes valuable internal links that help Google discover and rank those related products. Instead of removing these sections, make them horizontally scrollable carousels or collapsible sections that keep the links in the HTML while saving vertical space.\n\nBreadcrumbs on mobile frequently get hidden or simplified. Keep full breadcrumb trails on mobile even if they wrap to two lines. Each breadcrumb link is an internal link to a category page, and removing them weakens your internal linking structure in the version Google actually indexes.",
          tip: "Crawl your site as Googlebot Mobile using Screaming Frog (set User-Agent to Googlebot Smartphone). Compare the internal link count and link structure to a desktop crawl. Any pages with significantly fewer internal links on mobile need attention.",
        },
      ],
      navLabels: {
        previous: "Site Speed Optimization",
        next: "Structured Data for Products",
      },
    },
    de: {
      badge: "Technisches SEO",
      heading: "Mobile-First SEO für Ecommerce",
      intro:
        "Google nutzt die mobile Version Ihres Shops für alle Indexierungs- und Ranking-Entscheidungen. Wenn Ihre Produktseiten auf Mobilgeräten anders aussehen, langsamer laden oder weniger Inhalte enthalten als auf dem Desktop, bestimmt diese mobile Version Ihre Suchsichtbarkeit. Über 70 % des Ecommerce-Traffics kommt mittlerweile von Mobilgeräten. Das macht mobile Optimierung zu einem unverzichtbaren Teil von [technische SEO f\u00fcr Ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "Was Mobile-First-Indexierung für Ihren Shop bedeutet",
          content:
            "Mobile-First-Indexierung bedeutet, dass Google überwiegend die mobile Version Ihrer Inhalte für die Indexierung und das Ranking verwendet. Diese Umstellung wurde 2023 abgeschlossen, und es gibt keine Opt-out-Möglichkeit. Wenn Ihre mobilen Seiten weniger Inhalte als die Desktop-Version haben, sieht Google nur die mobile Version. Wenn Ihre mobile Seite Produktbeschreibungen hinter Tabs versteckt, die zum Aufklappen angeklickt werden müssen, indexiert Google diese Inhalte möglicherweise gar nicht.\n\nDie praktische Auswirkung ist erheblich. Viele Ecommerce-Seiten wurden zuerst für den Desktop gebaut und später durch Responsive Design oder eine separate mobile Website für Mobilgeräte angepasst. Bei dieser Anpassung wurden Inhalte häufig gekürzt, Produktbeschreibungen verkürzt und interne Links entfernt, um auf kleinere Bildschirme zu passen. All diese Entscheidungen wirken sich jetzt direkt darauf aus, wie Google diese Seiten bewertet.\n\nÜberprüfen Sie Ihren mobilen Indexierungsstatus in der Google Search Console unter Einstellungen > Indexierungscrawler. Dort sollte \"Googlebot Smartphone\" als primärer Crawler angezeigt werden. Wenn Sie Seiten finden, bei denen sich die mobile und Desktop-Version inhaltlich wesentlich unterscheiden, beheben Sie zuerst die mobile Version. Das ist das, worauf Google achtet.",
          items: [
            "Google indexiert Ihre mobile Seitenversion, nicht die Desktop-Version",
            "Versteckte Inhalte hinter Tabs oder Akkordeons werden möglicherweise nicht indexiert",
            "Überprüfen Sie Ihren Crawler-Typ in der Search Console unter Einstellungen > Indexierungscrawler",
            "Stellen Sie sicher, dass mobile und Desktop-Seiten identische Kerninhalte enthalten",
          ],
          image: {
            src: "/images/academy/de/mobile-first-indexing-flow.svg",
            alt: "Vergleich der zeigt wie Desktop-Seiten mit vollstaendigem Inhalt sich von mobilen Versionen mit gekuerztem Inhalt unterscheiden und dass Google die mobile Version indexiert",
            caption: "Google indexiert die mobile Version Ihrer Seiten. Auf Mobilgeraeten versteckter oder entfernter Inhalt verringert direkt Ihre Suchsichtbarkeit.",
          },
          callout: {
            title: "Inhaltsparitaets-Risiko",
            text: "Desktop-Seiten mit durchschnittlich ueber 45 internen Links fallen auf Mobilgeraeten oft auf 12. Bei Mobile-First-Indexierung schwaecht das Fehlen dieser 33 Links die Crawl-Prioritaet der verlinkten Seiten.",
          },
        },
        {
          title: "Responsive Design vs. separate mobile Websites",
          content:
            "Responsive Design liefert dasselbe HTML an alle Geräte und nutzt CSS-Media-Queries zur Anpassung des Layouts. Eine separate mobile Website (m.example.com) liefert komplett anderes HTML. Für Ecommerce-SEO ist Responsive Design der klare Gewinner und der von Google empfohlene Ansatz.\n\nSeparate mobile Websites verursachen Kanonisierungsprobleme. Sie benötigen rel=\"alternate\"- und rel=\"canonical\"-Tags, die zwischen Desktop- und Mobilversionen verweisen, und jede Abweichung verursacht Indexierungsprobleme. Wir haben Shops geprüft, bei denen 30 % der mobilen Seiten fehlerhafte kanonische Verweise hatten, was zu Duplicate-Content-Problemen und verschwendetem Crawl-Budget führte.\n\nResponsive Design behält eine einzige URL pro Seite bei, was die gesamte Link-Equity konsolidiert und Ihre Sitemap, kanonischen Tags und Hreflang-Implementierung vereinfacht. Jeder eingehende Link verweist auf eine URL, anstatt sich zwischen Desktop- und Mobilversionen aufzuteilen.\n\nWenn Sie noch eine separate mobile Website betreiben, planen Sie eine Migration zu Responsive Design. Die Migration erfordert sorgfältiges Redirect-Mapping (301-Redirects von jeder m.example.com-URL auf das responsive Äquivalent) und dauert normalerweise drei bis sechs Monate ohne signifikanten Traffic-Verlust. Die langfristigen SEO-Vorteile überwiegen durchweg die kurzfristigen Migrationskosten.",
        },
        {
          title: "Mobile Seitengeschwindigkeit: Der Umsatzmultiplikator",
          content:
            "Mobile Nutzer sind weniger geduldig als Desktop-Nutzer und haben typischerweise langsamere Verbindungen. Eine Seite, die auf Desktop-WLAN in 3 Sekunden lädt, kann auf einer 4G-Mobilverbindung 6 Sekunden brauchen. Googles Forschung zeigt, dass 53 % der mobilen Besucher eine Website verlassen, die länger als 3 Sekunden zum Laden braucht.\n\nFür Ecommerce ist die Umsatzauswirkung messbar. Wir haben einen Modehändler vor und nach der mobilen Geschwindigkeitsoptimierung beobachtet. Die Reduzierung der mobilen Ladezeit von 5,2 Sekunden auf 2,1 Sekunden steigerte die mobile Conversion-Rate um 27 % und den mobilen Umsatz um 34 % über 90 Tage. Die Geschwindigkeitsverbesserungen kosteten weniger als eine Woche ihres Paid-Advertising-Budgets.\n\nPriorisieren Sie diese mobilspezifischen Optimierungen: Hero-Bilder auf unter 100 KB komprimieren, alle unkritischen JavaScript bis nach dem First Paint verschieben, die DOM-Größe auf unter 1.500 Elemente auf Produktseiten reduzieren und render-blockierendes CSS eliminieren. Testen Sie jede Änderung speziell auf gedrosselten Mobilverbindungen, nicht nur auf Desktop-WLAN. Unser Leitfaden zu [Seitenladezeit-Optimierung](/academy/site-speed-optimization) behandelt dies im Detail.\n\nVerwenden Sie die Chrome DevTools Geräteemulation mit Netzwerk-Drosselung auf \"Fast 3G\" als Ihren Baseline-Test. Wenn Ihre Produktseiten auf Fast 3G innerhalb von 3 Sekunden laden und interaktiv werden, funktionieren sie für die überwiegende Mehrheit der mobilen Nutzer gut.",
          tip: "Richten Sie ein mobiles Performance-Monitoring-Dashboard ein, indem Sie den Core-Web-Vitals-Bericht der Google Search Console auf Mobilgeräte filtern. Überprüfen Sie es wöchentlich. Mobile CWV-Scores neigen dazu, sich im Laufe der Zeit zu verschlechtern, wenn neue Apps, Skripte und Funktionen zum Shop hinzugefügt werden.",
        },
        {
          title: "Touch-freundliches Design und SEO-Auswirkungen",
          content:
            "Google bewertet die mobile Benutzerfreundlichkeit als Teil seiner Seitenerfahrungssignale. Seiten, die mobile Usability-Checks nicht bestehen, erhalten niedrigere Rankings. Die häufigsten Fehler auf Ecommerce-Seiten sind zu eng beieinanderliegende Tippziele, zu kleiner Text zum Lesen ohne Zoomen und Inhalte, die breiter als der Bildschirm sind. Weitere Informationen finden Sie in unserem Leitfaden zu [technische SEO](/ecommerce-seo-services).\n\nTippziele (Buttons, Links, Formularfelder) müssen mindestens 48x48 CSS-Pixel groß sein mit 8 Pixeln Abstand dazwischen. Auf Produktseiten bedeutet dies, dass Ihr \"In den Warenkorb\"-Button, Größenauswahl und Farbfelder alle ausreichend Abstand benötigen. Dichte Produktraster mit winzigen Tippzielen frustrieren mobile Nutzer und lösen Googles Mobile-Usability-Warnungen aus.\n\nSchriftgrößen unter 16px auf Mobilgeräten zwingen Nutzer zum Pinch-Zoom, was Google als Usability-Problem kennzeichnet. Setzen Sie Ihre Grundschriftgröße auf mindestens 16px und skalieren Sie Überschriften proportional. Produktbeschreibungen, Preise und Bewertungen sollten alle ohne Nutzereingriff lesbar sein.\n\nVermeiden Sie horizontales Scrollen vollständig. Wenn ein Element über die mobile Viewport-Breite hinausragt, markiert Google die Seite als nicht mobiltauglich. Häufige Verursacher sind breite Produktvergleichstabellen, übergroße Bilder ohne max-width-Einschränkungen und Desktop-breite iframes für Video-Embeds oder Größentabellen.",
          items: [
            "Minimale Tippzielgröße: 48x48 CSS-Pixel mit 8px Abstand",
            "Grundschriftgröße: mindestens 16px auf Mobilgeräten",
            "Kein horizontales Scrollen bei keinem Seitenelement",
            "Testen Sie mit Googles Mobile-Friendly-Test-Tool und dem Mobile-Usability-Bericht der Search Console",
          ],
          image: {
            src: "/images/academy/de/mobile-speed-revenue-impact.svg",
            alt: "Balkendiagramm das den Rueckgang der Konversionsrate von 3,8% bei 1 Sekunde Ladezeit auf 0,7% bei 6+ Sekunden zeigt mit 53% Abbruchschwelle bei 3 Sekunden",
            caption: "Die mobile Konversionsrate sinkt mit jeder zusaetzlichen Sekunde Ladezeit stark. Die 3-Sekunden-Schwelle ist der Punkt an dem 53% der Besucher abspringen.",
          },
          callout: {
            title: "Umsatzauswirkung",
            text: "Die Reduzierung der mobilen Ladezeit von 5,2s auf 2,1s steigerte die mobile Konversion um 27% und den Umsatz um 34% ueber 90 Tage. Die Optimierung kostete weniger als eine Woche bezahltes Werbebudget.",
          },
        },
        {
          title: "Mobile Navigation und interne Verlinkung",
          content:
            "Mobile Navigationsstrukturen unterscheiden sich oft dramatisch vom Desktop, und diese Unterschiede beeinflussen die SEO. Desktop-Mega-Menüs können 200 Kategorielinks bei einem Hover anzeigen, während mobile Hamburger-Menüs dieselben Links hinter zwei oder drei Taps verstecken. Da Google die mobile Version indexiert, erhalten Links, die in eingeklappten mobilen Menüs versteckt sind, möglicherweise weniger Crawl-Priorität.\n\nStellen Sie sicher, dass Ihre mobile Navigation alle gleichen Kategorie- und Unterkategorielinks wie Ihre Desktop-Navigation enthält. Die Links müssen nicht standardmäßig sichtbar sein (Hamburger-Menüs sind in Ordnung), aber sie müssen im HTML vorhanden sein. Google kann Links in eingeklappten Menüs folgen, solange das HTML sie enthält.\n\nMobile Produktseiten entfernen oft Cross-Selling- und verwandte Produktbereiche, um Platz zu sparen. Dies entfernt wertvolle interne Links, die Google helfen, diese verwandten Produkte zu entdecken und zu ranken. Anstatt diese Bereiche zu entfernen, machen Sie sie zu horizontal scrollbaren Karussells oder einklappbaren Bereichen, die die Links im HTML behalten und gleichzeitig vertikalen Platz sparen.\n\nBreadcrumbs auf Mobilgeräten werden häufig ausgeblendet oder vereinfacht. Behalten Sie vollständige Breadcrumb-Pfade auf Mobilgeräten bei, auch wenn sie auf zwei Zeilen umbrechen. Jeder Breadcrumb-Link ist ein interner Link zu einer Kategorieseite, und das Entfernen schwächt Ihre interne Verlinkungsstruktur in der Version, die Google tatsächlich indexiert.",
          tip: "Crawlen Sie Ihre Website als Googlebot Mobile mit Screaming Frog (User-Agent auf Googlebot Smartphone einstellen). Vergleichen Sie die interne Linkanzahl und Linkstruktur mit einem Desktop-Crawl. Seiten mit deutlich weniger internen Links auf Mobilgeräten müssen bearbeitet werden.",
        },
      ],
      navLabels: {
        previous: "Seitengeschwindigkeit-Optimierung",
        next: "Strukturierte Daten für Produkte",
      },
    },
    fr: {
      badge: "SEO Technique",
      heading: "SEO Mobile-First pour le E-commerce",
      intro:
        "Google utilise la version mobile de votre boutique pour toutes les décisions d'indexation et de classement. Si vos pages produit ont un aspect différent, chargent plus lentement ou contiennent moins de contenu sur mobile que sur desktop, c'est cette version mobile qui détermine votre visibilité dans les recherches. Plus de 70 % du trafic e-commerce provient désormais d'appareils mobiles. Cela fait de l'optimisation mobile un élément incontournable du [SEO technique pour l'e-commerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Ce que l'indexation mobile-first signifie pour votre boutique",
          content:
            "L'indexation mobile-first signifie que Google utilise principalement la version mobile de votre contenu pour l'indexation et le classement. Cette transition s'est achevée en 2023, et il n'y a pas d'option de refus. Si vos pages mobiles ont moins de contenu que la version desktop, Google ne voit que la version mobile. Si votre site mobile cache les descriptions produits derrière des onglets nécessitant un clic pour s'ouvrir, Google pourrait ne pas indexer ce contenu du tout.\n\nL'impact pratique est considérable. De nombreux sites e-commerce ont été construits d'abord pour le desktop, puis adaptés pour le mobile via un design responsive ou un site mobile séparé. Durant cette adaptation, le contenu a souvent été réduit, les descriptions produits raccourcies et les liens internes supprimés pour s'adapter aux écrans plus petits. Toutes ces décisions affectent maintenant directement la façon dont Google évalue ces pages.\n\nVérifiez votre statut d'indexation mobile dans Google Search Console sous Paramètres > Robot d'indexation. Il devrait afficher \"Googlebot Smartphone\" comme robot principal. Si vous trouvez des pages où les versions mobile et desktop diffèrent substantiellement en contenu, corrigez d'abord la version mobile. C'est ce qui compte pour Google.",
          items: [
            "Google indexe votre version de page mobile, pas desktop",
            "Le contenu caché derrière des onglets ou accordéons peut ne pas être indexé",
            "Vérifiez votre type de robot dans la Search Console sous Paramètres > Robot d'indexation",
            "Assurez-vous que les pages mobile et desktop contiennent un contenu principal identique",
          ],
          image: {
            src: "/images/academy/fr/mobile-first-indexing-flow.svg",
            alt: "Vergleich der zeigt wie Desktop-Seiten mit vollstaendigem Inhalt sich von mobilen Versionen mit gekuerztem Inhalt unterscheiden und dass Google die mobile Version indexiert",
            caption: "Google indexiert die mobile Version Ihrer Seiten. Auf Mobilgeraeten versteckter oder entfernter Inhalt verringert direkt Ihre Suchsichtbarkeit.",
          },
          callout: {
            title: "Inhaltsparitaets-Risiko",
            text: "Desktop-Seiten mit durchschnittlich ueber 45 internen Links fallen auf Mobilgeraeten oft auf 12. Bei Mobile-First-Indexierung schwaecht das Fehlen dieser 33 Links die Crawl-Prioritaet der verlinkten Seiten.",
          },
        },
        {
          title: "Design responsive vs. sites mobiles séparés",
          content:
            "Le design responsive sert le même HTML à tous les appareils et utilise des media queries CSS pour ajuster la mise en page. Un site mobile séparé (m.example.com) sert un HTML entièrement différent. Pour le SEO e-commerce, le design responsive est le choix évident et l'approche recommandée par Google.\n\nLes sites mobiles séparés créent des problèmes de canonicalisation. Vous avez besoin de balises rel=\"alternate\" et rel=\"canonical\" pointant entre les versions desktop et mobile, et toute incohérence cause des problèmes d'indexation. Nous avons audité des boutiques où 30 % des pages mobiles avaient des références canoniques cassées, entraînant des problèmes de contenu dupliqué et un gaspillage de budget de crawl.\n\nLe design responsive maintient une URL unique par page, ce qui consolide toute l'autorité de liens et simplifie votre sitemap, vos balises canoniques et votre implémentation hreflang. Chaque lien entrant pointe vers une seule URL plutôt que de se diviser entre les versions desktop et mobile.\n\nSi vous exploitez encore un site mobile séparé, planifiez une migration vers un design responsive. La migration nécessite un mapping de redirections minutieux (redirections 301 de chaque URL m.example.com vers son équivalent responsive) et prend généralement trois à six mois sans perte de trafic significative. Les bénéfices SEO à long terme surpassent systématiquement les coûts de migration à court terme.",
        },
        {
          title: "Vitesse de page mobile : le multiplicateur de revenus",
          content:
            "Les utilisateurs mobiles sont moins patients que les utilisateurs desktop, et ils ont généralement des connexions plus lentes. Une page qui charge en 3 secondes sur le WiFi desktop peut prendre 6 secondes sur une connexion mobile 4G. Les recherches de Google montrent que 53 % des visiteurs mobiles abandonnent un site qui prend plus de 3 secondes à charger.\n\nPour le e-commerce, l'impact sur le chiffre d'affaires est mesurable. Nous avons suivi un détaillant de mode avant et après l'[optimisation de la vitesse](/academy/site-speed-optimization) mobile. La réduction du temps de chargement mobile de 5,2 secondes à 2,1 secondes a augmenté le taux de conversion mobile de 27 % et le chiffre d'affaires mobile de 34 % sur 90 jours. Les améliorations de vitesse ont coûté moins d'une semaine de leur budget publicitaire payant.\n\nPrivilégiez ces optimisations spécifiques au mobile : compresser les images hero à moins de 100 Ko, différer tout le JavaScript non critique après le premier affichage, réduire la taille du DOM à moins de 1 500 éléments sur les pages produit, et éliminer le CSS bloquant le rendu. Testez chaque modification spécifiquement sur des connexions mobiles limitées, pas seulement sur le WiFi desktop.\n\nUtilisez l'émulation d'appareil Chrome DevTools avec limitation réseau réglée sur \"Fast 3G\" comme test de référence. Si vos pages produit chargent et deviennent interactives en 3 secondes sur Fast 3G, elles fonctionneront bien pour la grande majorité des utilisateurs mobiles.",
          tip: "Configurez un tableau de bord de suivi des performances mobiles en utilisant le rapport Core Web Vitals de Google Search Console filtré sur mobile. Vérifiez-le chaque semaine. Les scores CWV mobiles tendent à se dégrader au fil du temps à mesure que de nouvelles applications, scripts et fonctionnalités sont ajoutés à la boutique.",
        },
        {
          title: "Design tactile et impact SEO",
          content:
            "Google évalue l'ergonomie mobile dans le cadre de ses signaux d'expérience de page. Les pages qui échouent aux vérifications d'ergonomie mobile reçoivent des classements plus bas. Les échecs les plus courants sur les sites e-commerce sont des zones tactiles trop proches les unes des autres, du texte trop petit à lire sans zoom et du contenu plus large que l'écran.\n\nLes zones tactiles (boutons, liens, champs de formulaire) doivent mesurer au moins 48x48 pixels CSS avec 8 pixels d'espacement entre elles. Sur les pages produit, cela signifie que votre bouton \"Ajouter au panier\", les sélecteurs de taille et les échantillons de couleur nécessitent tous un espacement adéquat. Les grilles de produits denses avec de minuscules zones tactiles frustrent les utilisateurs mobiles et déclenchent les avertissements d'ergonomie mobile de Google.\n\nLes tailles de police inférieures à 16px sur mobile forcent les utilisateurs à zoomer avec les doigts, ce que Google signale comme un problème d'ergonomie. Définissez votre taille de police de base à 16px minimum et adaptez les titres proportionnellement. Les descriptions produits, prix et avis doivent tous être lisibles sans aucune intervention de l'utilisateur.\n\nÉvitez entièrement le défilement horizontal. Si un élément dépasse la largeur du viewport mobile, Google marque la page comme échouant à l'ergonomie mobile. Les coupables courants incluent les tableaux de comparaison de produits larges, les images surdimensionnées sans contraintes max-width et les iframes en largeur desktop pour les intégrations vidéo ou les guides de tailles. Google évalue la convivialité mobile dans le cadre de ses signaux d'expérience de page, et notre service de [SEO technique](/ecommerce-seo-services) peut vous aider à identifier et corriger ces problèmes.",
          items: [
            "Taille minimale de zone tactile : 48x48 pixels CSS avec 8px d'espacement",
            "Taille de police de base : 16px minimum sur mobile",
            "Aucun défilement horizontal sur aucun élément de page",
            "Testez avec l'outil de test Mobile-Friendly de Google et le rapport d'ergonomie mobile de la Search Console",
          ],
          image: {
            src: "/images/academy/fr/mobile-speed-revenue-impact.svg",
            alt: "Balkendiagramm das den Rueckgang der Konversionsrate von 3,8% bei 1 Sekunde Ladezeit auf 0,7% bei 6+ Sekunden zeigt mit 53% Abbruchschwelle bei 3 Sekunden",
            caption: "Die mobile Konversionsrate sinkt mit jeder zusaetzlichen Sekunde Ladezeit stark. Die 3-Sekunden-Schwelle ist der Punkt an dem 53% der Besucher abspringen.",
          },
          callout: {
            title: "Umsatzauswirkung",
            text: "Die Reduzierung der mobilen Ladezeit von 5,2s auf 2,1s steigerte die mobile Konversion um 27% und den Umsatz um 34% ueber 90 Tage. Die Optimierung kostete weniger als eine Woche bezahltes Werbebudget.",
          },
        },
        {
          title: "Navigation mobile et liens internes",
          content:
            "Les structures de navigation mobile diffèrent souvent radicalement du desktop, et ces différences affectent le SEO. Les méga menus desktop peuvent exposer 200 liens de catégorie en un seul survol, tandis que les menus hamburger mobiles cachent ces mêmes liens derrière deux ou trois tapotements. Comme Google indexe la version mobile, les liens cachés dans les menus mobiles repliés peuvent recevoir moins de priorité de crawl.\n\nAssurez-vous que votre navigation mobile inclut tous les mêmes liens de catégorie et sous-catégorie que votre navigation desktop. Les liens ne doivent pas être visibles par défaut (les menus hamburger conviennent), mais ils doivent être présents dans le HTML. Google peut suivre les liens à l'intérieur des menus repliés tant que le HTML les contient.\n\nLes pages produit mobiles suppriment souvent les sections de vente croisée et de produits similaires pour économiser de l'espace. Cela supprime des liens internes précieux qui aident Google à découvrir et classer ces produits associés. Au lieu de supprimer ces sections, transformez-les en carrousels à défilement horizontal ou en sections repliables qui conservent les liens dans le HTML tout en économisant l'espace vertical.\n\nLes fils d'Ariane sur mobile sont fréquemment masqués ou simplifiés. Conservez les fils d'Ariane complets sur mobile même s'ils s'étendent sur deux lignes. Chaque lien de fil d'Ariane est un lien interne vers une page de catégorie, et les supprimer affaiblit votre structure de liens internes dans la version que Google indexe réellement.",
          tip: "Explorez votre site en tant que Googlebot Mobile avec Screaming Frog (réglez le User-Agent sur Googlebot Smartphone). Comparez le nombre de liens internes et la structure de liens avec un crawl desktop. Toute page ayant significativement moins de liens internes sur mobile nécessite une attention particulière.",
        },
      ],
      navLabels: {
        previous: "Optimisation de la Vitesse de Site",
        next: "Données Structurées pour les Produits",
      },
    },
    es: {
      badge: "SEO Técnico",
      heading: "SEO Mobile-First para Ecommerce",
      intro:
        "Google utiliza la versión móvil de tu tienda para todas las decisiones de indexación y ranking. Si tus páginas de producto se ven diferentes, cargan más lento o contienen menos contenido en móvil que en escritorio, esa versión móvil es lo que determina tu visibilidad en búsquedas. Más del 70 % del tráfico de ecommerce proviene ahora de dispositivos móviles. Esto hace que la optimizacion movil sea una parte innegociable del [SEO tecnico para ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "Qué significa la indexación mobile-first para tu tienda",
          content:
            "La indexación mobile-first significa que Google utiliza predominantemente la versión móvil de tu contenido para la indexación y el ranking. Esta transición se completó en 2023, y no hay opción de exclusión. Si tus páginas móviles tienen menos contenido que las de escritorio, Google solo ve la versión móvil. Si tu sitio móvil oculta las descripciones de producto detrás de pestañas que requieren clics para expandirse, Google podría no indexar ese contenido en absoluto.\n\nEl impacto práctico es significativo. Muchos sitios de ecommerce fueron construidos primero para escritorio y luego adaptados para móvil mediante diseño responsive o un sitio móvil separado. Durante esa adaptación, el contenido se recortó frecuentemente, las descripciones de producto se acortaron y los enlaces internos se eliminaron para ajustarse a pantallas más pequeñas. Todas esas decisiones ahora afectan directamente cómo Google evalúa esas páginas.\n\nVerifica tu estado de indexación móvil en Google Search Console bajo Configuración > Rastreador de indexación. Debería mostrar \"Googlebot Smartphone\" como rastreador principal. Si encuentras páginas donde las versiones móvil y escritorio difieren sustancialmente en contenido, corrige primero la versión móvil. Eso es lo que le importa a Google.",
          items: [
            "Google indexa tu versión de página móvil, no la de escritorio",
            "El contenido oculto detrás de pestañas o acordeones puede no ser indexado",
            "Verifica tu tipo de rastreador en Search Console bajo Configuración > Rastreador de indexación",
            "Asegúrate de que las páginas móvil y escritorio contengan contenido principal idéntico",
          ],
          image: {
            src: "/images/academy/es/mobile-first-indexing-flow.svg",
            alt: "Vergleich der zeigt wie Desktop-Seiten mit vollstaendigem Inhalt sich von mobilen Versionen mit gekuerztem Inhalt unterscheiden und dass Google die mobile Version indexiert",
            caption: "Google indexiert die mobile Version Ihrer Seiten. Auf Mobilgeraeten versteckter oder entfernter Inhalt verringert direkt Ihre Suchsichtbarkeit.",
          },
          callout: {
            title: "Inhaltsparitaets-Risiko",
            text: "Desktop-Seiten mit durchschnittlich ueber 45 internen Links fallen auf Mobilgeraeten oft auf 12. Bei Mobile-First-Indexierung schwaecht das Fehlen dieser 33 Links die Crawl-Prioritaet der verlinkten Seiten.",
          },
        },
        {
          title: "Diseño responsive vs. sitios móviles separados",
          content:
            "El diseño responsive sirve el mismo HTML a todos los dispositivos y usa media queries CSS para ajustar el diseño. Un sitio móvil separado (m.example.com) sirve HTML completamente diferente. Para el SEO de ecommerce, el diseño responsive es el claro ganador y el enfoque que Google recomienda.\n\nLos sitios móviles separados crean dolores de cabeza de canonicalización. Necesitas etiquetas rel=\"alternate\" y rel=\"canonical\" apuntando entre las versiones de escritorio y móvil, y cualquier desajuste causa problemas de indexación. Hemos auditado tiendas donde el 30 % de las páginas móviles tenían referencias canónicas rotas, resultando en problemas de contenido duplicado y desperdicio de presupuesto de rastreo.\n\nEl diseño responsive mantiene una URL única por página, lo que consolida toda la autoridad de enlaces y simplifica tu sitemap, etiquetas canónicas e implementación hreflang. Cada enlace entrante apunta a una URL en lugar de dividirse entre versiones de escritorio y móvil.\n\nSi todavía ejecutas un sitio móvil separado, planifica una migración a diseño responsive. La migración requiere un mapeo cuidadoso de redirecciones (redirecciones 301 de cada URL m.example.com a su equivalente responsive) y generalmente toma de tres a seis meses para completarse sin pérdida significativa de tráfico. Los beneficios SEO a largo plazo superan consistentemente los costes de migración a corto plazo.",
        },
        {
          title: "Velocidad de página móvil: el multiplicador de ingresos",
          content:
            "Los usuarios móviles son menos pacientes que los de escritorio, y típicamente están en conexiones más lentas. Una página que carga en 3 segundos en WiFi de escritorio puede tardar 6 segundos en una conexión móvil 4G. La investigación de Google muestra que el 53 % de los visitantes móviles abandonan un sitio que tarda más de 3 segundos en cargar.\n\nPara ecommerce, el impacto en los ingresos es medible. Monitoreamos un minorista de moda antes y después de la [optimización de velocidad](/academy/site-speed-optimization) móvil. Reducir el tiempo de carga móvil de 5,2 segundos a 2,1 segundos incrementó la tasa de conversión móvil un 27 % y los ingresos móviles un 34 % durante 90 días. Las mejoras de velocidad costaron menos que una semana de su presupuesto de publicidad pagada.\n\nPrioriza estas optimizaciones específicas para móvil: comprimir imágenes hero a menos de 100 KB, diferir todo el JavaScript no crítico hasta después del primer pintado, reducir el tamaño del DOM a menos de 1.500 elementos en páginas de producto, y eliminar CSS que bloquee el renderizado. Prueba cada cambio específicamente en conexiones móviles limitadas, no solo en WiFi de escritorio.\n\nUsa la emulación de dispositivo de Chrome DevTools con limitación de red configurada en \"Fast 3G\" como tu prueba base. Si tus páginas de producto cargan y se vuelven interactivas en 3 segundos en Fast 3G, funcionarán bien para la gran mayoría de usuarios móviles.",
          tip: "Configura un panel de monitoreo de rendimiento móvil usando el informe de Core Web Vitals de Google Search Console filtrado a móvil. Revísalo semanalmente. Los puntajes CWV móviles tienden a degradarse con el tiempo a medida que se añaden nuevas apps, scripts y funcionalidades a la tienda.",
        },
        {
          title: "Diseño táctil e impacto en SEO",
          content:
            "Google evalúa la usabilidad móvil como parte de sus señales de experiencia de página. Las páginas que no pasan las verificaciones de usabilidad móvil reciben rankings más bajos. Los fallos más comunes en sitios de ecommerce son objetivos táctiles demasiado cercanos entre sí, texto demasiado pequeño para leer sin zoom y contenido más ancho que la pantalla.\n\nLos objetivos táctiles (botones, enlaces, campos de formulario) deben medir al menos 48x48 píxeles CSS con 8 píxeles de espacio entre ellos. En las páginas de producto, esto significa que tu botón \"Añadir al carrito\", los selectores de talla y las muestras de color necesitan espacio adecuado. Las cuadrículas de productos densas con objetivos táctiles diminutos frustran a los usuarios móviles y activan las advertencias de usabilidad móvil de Google.\n\nTamaños de fuente por debajo de 16px en móvil obligan a los usuarios a hacer zoom de pellizco, lo que Google señala como problema de usabilidad. Configura tu tamaño de fuente base a 16px mínimo y escala los encabezados proporcionalmente. Las descripciones de producto, precios y reseñas deben ser legibles sin ninguna intervención del usuario.\n\nEvita el desplazamiento horizontal por completo. Si algún elemento se extiende más allá del ancho del viewport móvil, Google marca la página como no apta para móviles. Los infractores comunes incluyen tablas de comparación de productos anchas, imágenes sobredimensionadas sin restricciones de max-width e iframes de ancho de escritorio para incrustaciones de video o guías de tallas. Google evalua la usabilidad movil como parte de sus senales de experiencia de pagina, y nuestro servicio de [SEO tecnico](/ecommerce-seo-services) puede ayudarte a identificar y corregir estos problemas.",
          items: [
            "Tamaño mínimo de objetivo táctil: 48x48 píxeles CSS con 8px de espacio",
            "Tamaño de fuente base: 16px mínimo en móvil",
            "Sin desplazamiento horizontal en ningún elemento de página",
            "Prueba con la herramienta Mobile-Friendly Test de Google y el informe de usabilidad móvil de Search Console",
          ],
          image: {
            src: "/images/academy/es/mobile-speed-revenue-impact.svg",
            alt: "Balkendiagramm das den Rueckgang der Konversionsrate von 3,8% bei 1 Sekunde Ladezeit auf 0,7% bei 6+ Sekunden zeigt mit 53% Abbruchschwelle bei 3 Sekunden",
            caption: "Die mobile Konversionsrate sinkt mit jeder zusaetzlichen Sekunde Ladezeit stark. Die 3-Sekunden-Schwelle ist der Punkt an dem 53% der Besucher abspringen.",
          },
          callout: {
            title: "Umsatzauswirkung",
            text: "Die Reduzierung der mobilen Ladezeit von 5,2s auf 2,1s steigerte die mobile Konversion um 27% und den Umsatz um 34% ueber 90 Tage. Die Optimierung kostete weniger als eine Woche bezahltes Werbebudget.",
          },
        },
        {
          title: "Navegación móvil y enlaces internos",
          content:
            "Las estructuras de navegación móvil a menudo difieren drásticamente del escritorio, y estas diferencias afectan el SEO. Los mega menús de escritorio pueden exponer 200 enlaces de categoría en un solo hover, mientras que los menús hamburguesa móviles ocultan esos mismos enlaces detrás de dos o tres toques. Como Google indexa la versión móvil, cualquier enlace oculto en menús móviles colapsados puede recibir menor prioridad de rastreo.\n\nAsegúrate de que tu navegación móvil incluya todos los mismos enlaces de categoría y subcategoría que tu navegación de escritorio. Los enlaces no necesitan ser visibles por defecto (los menús hamburguesa están bien), pero deben estar presentes en el HTML. Google puede seguir enlaces dentro de menús colapsados siempre que el HTML los contenga.\n\nLas páginas de producto móviles a menudo eliminan las secciones de venta cruzada y productos relacionados para ahorrar espacio. Esto elimina enlaces internos valiosos que ayudan a Google a descubrir y posicionar esos productos relacionados. En lugar de eliminar estas secciones, conviértelas en carruseles de desplazamiento horizontal o secciones colapsables que mantengan los enlaces en el HTML mientras ahorran espacio vertical.\n\nLas migas de pan en móvil frecuentemente se ocultan o simplifican. Mantén las rutas de migas de pan completas en móvil incluso si se extienden a dos líneas. Cada enlace de miga de pan es un enlace interno a una página de categoría, y eliminarlos debilita tu estructura de enlaces internos en la versión que Google realmente indexa.",
          tip: "Rastrea tu sitio como Googlebot Mobile usando Screaming Frog (configura el User-Agent en Googlebot Smartphone). Compara el conteo de enlaces internos y la estructura de enlaces con un rastreo de escritorio. Cualquier página con significativamente menos enlaces internos en móvil necesita atención.",
        },
      ],
      navLabels: {
        previous: "Optimización de Velocidad de Sitio",
        next: "Datos Estructurados para Productos",
      },
    },
    it: {
      badge: "SEO Tecnico",
      heading: "SEO Mobile-First per l'Ecommerce",
      intro:
        "Google utilizza la versione mobile del tuo negozio per tutte le decisioni di indicizzazione e posizionamento. Se le tue pagine prodotto appaiono diverse, si caricano più lentamente o contengono meno contenuto su mobile rispetto al desktop, quella versione mobile è ciò che determina la tua visibilità nelle ricerche. Oltre il 70 % del traffico ecommerce proviene ora da dispositivi mobili. Approfondisci con la nostra guida sulla [SEO tecnica per l'ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Cosa significa l'indicizzazione mobile-first per il tuo negozio",
          content:
            "L'indicizzazione mobile-first significa che Google utilizza prevalentemente la versione mobile dei tuoi contenuti per l'indicizzazione e il posizionamento. Questa transizione si è completata nel 2023, e non c'è possibilità di esclusione. Se le tue pagine mobili hanno meno contenuto del desktop, Google vede solo la versione mobile. Se il tuo sito mobile nasconde le descrizioni prodotto dietro schede che richiedono clic per espandersi, Google potrebbe non indicizzare affatto quel contenuto.\n\nL'impatto pratico è significativo. Molti siti ecommerce sono stati costruiti prima per il desktop e poi adattati per il mobile tramite design responsive o un sito mobile separato. Durante quell'adattamento, il contenuto è stato spesso ridotto, le descrizioni prodotto accorciate e i link interni rimossi per adattarsi a schermi più piccoli. Tutte queste decisioni ora influenzano direttamente come Google valuta quelle pagine.\n\nControlla il tuo stato di indicizzazione mobile in Google Search Console sotto Impostazioni > Crawler di indicizzazione. Dovrebbe mostrare \"Googlebot Smartphone\" come crawler principale. Se trovi pagine dove le versioni mobile e desktop differiscono sostanzialmente nel contenuto, correggi prima la versione mobile. È quella che interessa a Google.",
          items: [
            "Google indicizza la versione mobile della tua pagina, non quella desktop",
            "Il contenuto nascosto dietro schede o fisarmoniche potrebbe non essere indicizzato",
            "Controlla il tipo di crawler nella Search Console sotto Impostazioni > Crawler di indicizzazione",
            "Assicurati che le pagine mobile e desktop contengano contenuto principale identico",
          ],
          image: {
            src: "/images/academy/it/mobile-first-indexing-flow.svg",
            alt: "Vergleich der zeigt wie Desktop-Seiten mit vollstaendigem Inhalt sich von mobilen Versionen mit gekuerztem Inhalt unterscheiden und dass Google die mobile Version indexiert",
            caption: "Google indexiert die mobile Version Ihrer Seiten. Auf Mobilgeraeten versteckter oder entfernter Inhalt verringert direkt Ihre Suchsichtbarkeit.",
          },
          callout: {
            title: "Inhaltsparitaets-Risiko",
            text: "Desktop-Seiten mit durchschnittlich ueber 45 internen Links fallen auf Mobilgeraeten oft auf 12. Bei Mobile-First-Indexierung schwaecht das Fehlen dieser 33 Links die Crawl-Prioritaet der verlinkten Seiten.",
          },
        },
        {
          title: "Design responsive vs. siti mobili separati",
          content:
            "Il design responsive serve lo stesso HTML a tutti i dispositivi e usa le media query CSS per adattare il layout. Un sito mobile separato (m.example.com) serve HTML completamente diverso. Per il SEO ecommerce, il design responsive è il chiaro vincitore e l'approccio raccomandato da Google.\n\nI siti mobili separati creano problemi di canonicalizzazione. Servono tag rel=\"alternate\" e rel=\"canonical\" che puntano tra le versioni desktop e mobile, e qualsiasi disallineamento causa problemi di indicizzazione. Abbiamo verificato negozi dove il 30 % delle pagine mobili aveva riferimenti canonici rotti, causando problemi di contenuto duplicato e spreco di budget di crawl.\n\nIl design responsive mantiene un singolo URL per pagina, consolidando tutta l'autorità dei link e semplificando la sitemap, i tag canonici e l'implementazione hreflang. Ogni link in entrata punta a un URL invece di dividersi tra versioni desktop e mobile.\n\nSe stai ancora gestendo un sito mobile separato, pianifica una migrazione al design responsive. La migrazione richiede una mappatura attenta dei redirect (redirect 301 da ogni URL m.example.com al suo equivalente responsive) e di solito richiede da tre a sei mesi per completarsi senza perdite di traffico significative. I benefici SEO a lungo termine superano costantemente i costi di migrazione a breve termine.",
        },
        {
          title: "Velocità di pagina mobile: il moltiplicatore di ricavi",
          content:
            "Gli utenti mobili sono meno pazienti degli utenti desktop e sono tipicamente su connessioni più lente. Una pagina che si carica in 3 secondi su WiFi desktop può richiedere 6 secondi su una connessione mobile 4G. La ricerca di Google mostra che il 53 % dei visitatori mobili abbandona un sito che impiega più di 3 secondi a caricarsi.\n\nPer l'ecommerce, l'impatto sui ricavi è misurabile. Abbiamo monitorato un rivenditore di moda prima e dopo l'ottimizzazione della velocità mobile. Ridurre il tempo di caricamento mobile da 5,2 secondi a 2,1 secondi ha aumentato il tasso di conversione mobile del 27 % e i ricavi mobili del 34 % in 90 giorni. I miglioramenti di velocità sono costati meno di una settimana del loro budget pubblicitario a pagamento.\n\nDai priorità a queste ottimizzazioni specifiche per mobile: comprimi le immagini hero sotto i 100 KB, differisci tutto il JavaScript non critico fino dopo il primo paint, riduci la dimensione del DOM a meno di 1.500 elementi sulle pagine prodotto, ed elimina il CSS che blocca il rendering. Testa ogni modifica specificamente su connessioni mobili limitate, non solo su WiFi desktop. La nostra guida sulla [ottimizzazione della velocità del sito](/academy/site-speed-optimization) copre questo argomento in dettaglio.\n\nUsa l'emulazione dispositivo di Chrome DevTools con limitazione di rete impostata su \"Fast 3G\" come test di base. Se le tue pagine prodotto si caricano e diventano interattive entro 3 secondi su Fast 3G, funzioneranno bene per la grande maggioranza degli utenti mobili.",
          tip: "Configura una dashboard di monitoraggio delle performance mobili usando il report Core Web Vitals di Google Search Console filtrato per mobile. Controllalo settimanalmente. I punteggi CWV mobili tendono a degradarsi nel tempo man mano che nuove app, script e funzionalità vengono aggiunti al negozio.",
        },
        {
          title: "Design touch-friendly e impatto SEO",
          content:
            "Google valuta l'usabilità mobile come parte dei suoi segnali di esperienza della pagina. Le pagine che non superano i controlli di usabilità mobile ricevono posizionamenti più bassi. I fallimenti più comuni sui siti ecommerce sono target tattili troppo vicini tra loro, testo troppo piccolo da leggere senza zoom e contenuto più largo dello schermo. Approfondisci con la nostra guida sulla [SEO tecnica](/ecommerce-seo-services).\n\nI target tattili (pulsanti, link, campi modulo) devono essere almeno 48x48 pixel CSS con 8 pixel di spaziatura tra loro. Sulle pagine prodotto, questo significa che il pulsante \"Aggiungi al carrello\", i selettori di taglia e i campioni colore necessitano tutti di spaziatura adeguata. Griglie di prodotti dense con target tattili minuscoli frustrano gli utenti mobili e attivano gli avvisi di usabilità mobile di Google.\n\nDimensioni dei caratteri sotto i 16px su mobile costringono gli utenti a zoomare con le dita, cosa che Google segnala come problema di usabilità. Imposta la dimensione del carattere base a 16px minimo e scala i titoli proporzionalmente. Descrizioni prodotto, prezzi e recensioni devono essere tutti leggibili senza alcun intervento dell'utente.\n\nEvita completamente lo scorrimento orizzontale. Se un elemento si estende oltre la larghezza del viewport mobile, Google segna la pagina come non superante l'usabilità mobile. I colpevoli comuni includono tabelle di confronto prodotti larghe, immagini sovradimensionate senza vincoli di max-width e iframe a larghezza desktop per embed video o guide alle taglie.",
          items: [
            "Dimensione minima target tattile: 48x48 pixel CSS con 8px di spaziatura",
            "Dimensione carattere base: 16px minimo su mobile",
            "Nessuno scorrimento orizzontale su nessun elemento della pagina",
            "Testa con lo strumento Mobile-Friendly Test di Google e il report usabilità mobile della Search Console",
          ],
          image: {
            src: "/images/academy/it/mobile-speed-revenue-impact.svg",
            alt: "Balkendiagramm das den Rueckgang der Konversionsrate von 3,8% bei 1 Sekunde Ladezeit auf 0,7% bei 6+ Sekunden zeigt mit 53% Abbruchschwelle bei 3 Sekunden",
            caption: "Die mobile Konversionsrate sinkt mit jeder zusaetzlichen Sekunde Ladezeit stark. Die 3-Sekunden-Schwelle ist der Punkt an dem 53% der Besucher abspringen.",
          },
          callout: {
            title: "Umsatzauswirkung",
            text: "Die Reduzierung der mobilen Ladezeit von 5,2s auf 2,1s steigerte die mobile Konversion um 27% und den Umsatz um 34% ueber 90 Tage. Die Optimierung kostete weniger als eine Woche bezahltes Werbebudget.",
          },
        },
        {
          title: "Navigazione mobile e link interni",
          content:
            "Le strutture di navigazione mobile spesso differiscono drasticamente dal desktop, e queste differenze influenzano il SEO. I mega menu desktop possono esporre 200 link di categoria in un singolo hover, mentre i menu hamburger mobili nascondono quegli stessi link dietro due o tre tocchi. Poiché Google indicizza la versione mobile, qualsiasi link nascosto nei menu mobili collassati può ricevere meno priorità di crawl.\n\nAssicurati che la tua navigazione mobile includa tutti gli stessi link di categoria e sottocategoria della navigazione desktop. I link non devono essere visibili per default (i menu hamburger vanno bene), ma devono essere presenti nell'HTML. Google può seguire i link dentro i menu collassati finché l'HTML li contiene.\n\nLe pagine prodotto mobili spesso eliminano le sezioni di cross-selling e prodotti correlati per risparmiare spazio. Questo rimuove link interni preziosi che aiutano Google a scoprire e posizionare quei prodotti correlati. Invece di rimuovere queste sezioni, trasformale in caroselli a scorrimento orizzontale o sezioni collassabili che mantengono i link nell'HTML risparmiando spazio verticale.\n\nI breadcrumb su mobile vengono frequentemente nascosti o semplificati. Mantieni i percorsi breadcrumb completi su mobile anche se si estendono su due righe. Ogni link breadcrumb è un link interno a una pagina di categoria, e rimuoverli indebolisce la struttura dei link interni nella versione che Google effettivamente indicizza.",
          tip: "Scansiona il tuo sito come Googlebot Mobile usando Screaming Frog (imposta il User-Agent su Googlebot Smartphone). Confronta il conteggio dei link interni e la struttura dei link con una scansione desktop. Qualsiasi pagina con significativamente meno link interni su mobile necessita di attenzione.",
        },
      ],
      navLabels: {
        previous: "Ottimizzazione della Velocità del Sito",
        next: "Dati Strutturati per i Prodotti",
      },
    },
    nl: {
      badge: "Technische SEO",
      heading: "Mobile-First SEO voor Ecommerce",
      intro:
        "Google gebruikt de mobiele versie van je winkel voor alle indexerings- en rankingbeslissingen. Als je productpagina's er anders uitzien, langzamer laden of minder content bevatten op mobiel dan op desktop, is die mobiele versie wat je zoekzichtbaarheid bepaalt. Meer dan 70 % van het ecommerce-verkeer komt nu van mobiele apparaten.\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "Wat mobile-first indexering betekent voor je winkel",
          content:
            "Mobile-first indexering betekent dat Google voornamelijk de mobiele versie van je content gebruikt voor indexering en ranking. Deze overgang werd voltooid in 2023, en er is geen opt-out. Als je mobiele pagina's minder content hebben dan desktop, ziet Google alleen de mobiele versie. Als je mobiele site productomschrijvingen verbergt achter tabbladen die klikken vereisen om te openen, indexeert Google die content mogelijk helemaal niet.\n\nDe praktische impact is aanzienlijk. Veel ecommerce-sites werden eerst gebouwd voor desktop en later aangepast voor mobiel via responsive design of een aparte mobiele site. Tijdens die aanpassing werd content vaak ingekort, productomschrijvingen verkort en interne links verwijderd om op kleinere schermen te passen. Al die beslissingen beïnvloeden nu direct hoe Google die pagina's beoordeelt.\n\nControleer je mobiele indexeringsstatus in Google Search Console onder Instellingen > Indexeringscrawler. Er zou \"Googlebot Smartphone\" moeten staan als primaire crawler. Als je pagina's vindt waar de mobiele en desktopversies substantieel verschillen in content, repareer dan eerst de mobiele versie. Dat is waar Google om geeft.",
          items: [
            "Google indexeert je mobiele paginaversie, niet desktop",
            "Verborgen content achter tabbladen of accordeons wordt mogelijk niet geïndexeerd",
            "Controleer je crawlertype in Search Console onder Instellingen > Indexeringscrawler",
            "Zorg ervoor dat mobiele en desktoppagina's identieke kerninhoud bevatten",
          ],
          image: {
            src: "/images/academy/nl/mobile-first-indexing-flow.svg",
            alt: "Vergleich der zeigt wie Desktop-Seiten mit vollstaendigem Inhalt sich von mobilen Versionen mit gekuerztem Inhalt unterscheiden und dass Google die mobile Version indexiert",
            caption: "Google indexiert die mobile Version Ihrer Seiten. Auf Mobilgeraeten versteckter oder entfernter Inhalt verringert direkt Ihre Suchsichtbarkeit.",
          },
          callout: {
            title: "Inhaltsparitaets-Risiko",
            text: "Desktop-Seiten mit durchschnittlich ueber 45 internen Links fallen auf Mobilgeraeten oft auf 12. Bei Mobile-First-Indexierung schwaecht das Fehlen dieser 33 Links die Crawl-Prioritaet der verlinkten Seiten.",
          },
        },
        {
          title: "Responsive design vs. aparte mobiele sites",
          content:
            "Responsive design levert dezelfde HTML aan alle apparaten en gebruikt CSS media queries om de layout aan te passen. Een aparte mobiele site (m.example.com) levert volledig andere HTML. Voor ecommerce SEO is responsive design de duidelijke winnaar en de aanpak die Google aanbeveelt.\n\nAparte mobiele sites creëren canonicalisatieproblemen. Je hebt rel=\"alternate\"- en rel=\"canonical\"-tags nodig die verwijzen tussen desktop- en mobiele versies, en elke mismatch veroorzaakt indexeringsproblemen. We hebben winkels geaudit waar 30 % van de mobiele pagina's gebroken canonieke verwijzingen had, resulterend in dubbele contentproblemen en verspild crawlbudget.\n\nResponsive design behoudt één URL per pagina, wat alle linkautoriteit consolideert en je sitemap, canonieke tags en hreflang-implementatie vereenvoudigt. Elke inkomende link wijst naar één URL in plaats van te splitsen tussen desktop- en mobiele versies.\n\nAls je nog een aparte mobiele site draait, plan dan een migratie naar responsive design. De migratie vereist zorgvuldige redirect-mapping (301-redirects van elke m.example.com-URL naar het responsive equivalent) en duurt doorgaans drie tot zes maanden zonder significant verkeersverlies. De SEO-voordelen op lange termijn wegen consequent op tegen de migratiekosten op korte termijn.",
        },
        {
          title: "Mobiele paginasnelheid: de omzetvermenigvuldiger",
          content:
            "Mobiele gebruikers zijn minder geduldig dan desktopgebruikers en hebben doorgaans langzamere verbindingen. Een pagina die in 3 seconden laadt op desktop-WiFi kan 6 seconden duren op een 4G-mobiele verbinding. Het onderzoek van Google toont dat 53 % van de mobiele bezoekers een site verlaat die langer dan 3 seconden nodig heeft om te laden.\n\nVoor ecommerce is de omzetimpact meetbaar. We hebben een moderetailer gevolgd voor en na mobiele [snelheidsoptimalisatie](/academy/site-speed-optimization). Het verminderen van de mobiele laadtijd van 5,2 seconden naar 2,1 seconden verhoogde het mobiele conversiepercentage met 27 % en de mobiele omzet met 34 % over 90 dagen. De snelheidsverbeteringen kostten minder dan één week van hun betaalde advertentiebudget.\n\nGeef prioriteit aan deze mobielspecifieke optimalisaties: comprimeer hero-afbeeldingen tot onder 100 KB, stel alle niet-kritische JavaScript uit tot na de eerste paint, verminder de DOM-grootte tot onder 1.500 elementen op productpagina's, en elimineer render-blokkerend CSS. Test elke wijziging specifiek op beperkte mobiele verbindingen, niet alleen op desktop-WiFi.\n\nGebruik Chrome DevTools apparaatemulatie met netwerkbeperking ingesteld op \"Fast 3G\" als je basistest. Als je productpagina's laden en interactief worden binnen 3 seconden op Fast 3G, zullen ze goed presteren voor de overgrote meerderheid van mobiele gebruikers.",
          tip: "Stel een mobiel prestatiemonitoringdashboard in met het Core Web Vitals-rapport van Google Search Console gefilterd op mobiel. Controleer het wekelijks. Mobiele CWV-scores hebben de neiging om in de loop van de tijd te verslechteren naarmate er nieuwe apps, scripts en functies aan de winkel worden toegevoegd.",
        },
        {
          title: "Touchvriendelijk ontwerp en SEO-impact",
          content:
            "Google evalueert mobiele bruikbaarheid als onderdeel van zijn pagina-ervaringssignalen. Pagina's die niet slagen voor mobiele bruikbaarheidscontroles ontvangen lagere rankings. De meest voorkomende fouten op ecommerce-sites zijn tiktargets die te dicht bij elkaar liggen, tekst die te klein is om te lezen zonder te zoomen en content die breder is dan het scherm.\n\nTiktargets (knoppen, links, formuliervelden) moeten minimaal 48x48 CSS pixels zijn met 8 pixels tussenruimte. Op productpagina's betekent dit dat je \"Toevoegen aan winkelwagen\"-knop, maatselectoren en kleurstalen allemaal voldoende tussenruimte nodig hebben. Dichte productrasters met kleine tiktargets frustreren mobiele gebruikers en activeren Google's mobiele bruikbaarheidswaarschuwingen.\n\nLettergroottes onder 16px op mobiel dwingen gebruikers om te knijpzoomen, wat Google markeert als een bruikbaarheidsprobleem. Stel je basislettergrootte in op minimaal 16px en schaal koppen proportioneel. Productomschrijvingen, prijzen en reviews moeten allemaal leesbaar zijn zonder enige gebruikersinterventie.\n\nVermijd horizontaal scrollen volledig. Als een element zich uitstrekt voorbij de breedte van het mobiele viewport, markeert Google de pagina als niet geslaagd voor mobiele bruikbaarheid. Veelvoorkomende overtreders zijn brede productvergelijkingstabellen, te grote afbeeldingen zonder max-width-beperkingen en desktop-brede iframes voor video-embeds of maatgidsen.\n\nBekijk onze [technische SEO](/ecommerce-seo-services)-diensten voor professionele ondersteuning.",
          items: [
            "Minimale tiktargetgrootte: 48x48 CSS pixels met 8px tussenruimte",
            "Basislettergrootte: minimaal 16px op mobiel",
            "Geen horizontaal scrollen op enig pagina-element",
            "Test met Google's Mobile-Friendly Test tool en het rapport mobiele bruikbaarheid van Search Console",
          ],
          image: {
            src: "/images/academy/nl/mobile-speed-revenue-impact.svg",
            alt: "Balkendiagramm das den Rueckgang der Konversionsrate von 3,8% bei 1 Sekunde Ladezeit auf 0,7% bei 6+ Sekunden zeigt mit 53% Abbruchschwelle bei 3 Sekunden",
            caption: "Die mobile Konversionsrate sinkt mit jeder zusaetzlichen Sekunde Ladezeit stark. Die 3-Sekunden-Schwelle ist der Punkt an dem 53% der Besucher abspringen.",
          },
          callout: {
            title: "Umsatzauswirkung",
            text: "Die Reduzierung der mobilen Ladezeit von 5,2s auf 2,1s steigerte die mobile Konversion um 27% und den Umsatz um 34% ueber 90 Tage. Die Optimierung kostete weniger als eine Woche bezahltes Werbebudget.",
          },
        },
        {
          title: "Mobiele navigatie en interne links",
          content:
            "Mobiele navigatiestructuren verschillen vaak drastisch van desktop, en deze verschillen beïnvloeden SEO. Desktop mega-menu's kunnen 200 categorielinks tonen bij één hover, terwijl mobiele hamburgermenu's diezelfde links verbergen achter twee of drie tikken. Omdat Google de mobiele versie indexeert, kunnen links die verborgen zijn in ingeklapte mobiele menu's minder crawlprioriteit ontvangen.\n\nZorg ervoor dat je mobiele navigatie alle dezelfde categorie- en subcategorielinks bevat als je desktopnavigatie. De links hoeven niet standaard zichtbaar te zijn (hamburgermenu's zijn prima), maar ze moeten aanwezig zijn in de HTML. Google kan links volgen binnen ingeklapte menu's zolang de HTML ze bevat.\n\nMobiele productpagina's verwijderen vaak cross-selling- en gerelateerde productsecties om ruimte te besparen. Dit verwijdert waardevolle interne links die Google helpen om die gerelateerde producten te ontdekken en te ranken. In plaats van deze secties te verwijderen, maak ze horizontaal scrollbare carrousels of inklapbare secties die de links in de HTML behouden terwijl ze verticale ruimte besparen.\n\nBreadcrumbs op mobiel worden vaak verborgen of vereenvoudigd. Behoud volledige breadcrumb-paden op mobiel, zelfs als ze over twee regels lopen. Elke breadcrumb-link is een interne link naar een categoriepagina, en het verwijderen ervan verzwakt je interne linkstructuur in de versie die Google daadwerkelijk indexeert.",
          tip: "Crawl je site als Googlebot Mobile met Screaming Frog (stel User-Agent in op Googlebot Smartphone). Vergelijk het aantal interne links en de linkstructuur met een desktopcrawl. Pagina's met aanzienlijk minder interne links op mobiel hebben aandacht nodig.",
        },
      ],
      navLabels: {
        previous: "Sitesnelheid-optimalisatie",
        next: "Gestructureerde Data voor Producten",
      },
    },
  },
};
