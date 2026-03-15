import type { AcademyTopic } from "../../types";

export const platformMigrationSeo: AcademyTopic = {
  slug: "platform-migration-seo",
  cluster: 8,
  resources: [{"label":"Google Site Move Docs","url":"https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes","type":"docs"},{"label":"Screaming Frog SEO Spider","url":"https://www.screamingfrog.co.uk/seo-spider/","type":"tool"},{"label":"Redirect Path (Chrome)","url":"https://chromewebstore.google.com/detail/redirect-path/aomidfkchockcldhbkggjokdkkebmdll","type":"tool"},{"label":"Wayback Machine","url":"https://web.archive.org/","type":"tool"}],
  content: {
    en: {
      badge: "Platform SEO",
      heading: "Platform Migration SEO",
      intro:
        "Migrating an ecommerce store to a new platform is one of the highest-risk SEO events a business can undertake. URL structures change, internal linking patterns shift, and technical implementations differ across platforms. Without a rigorous migration plan, stores routinely lose 30 to 60 percent of organic traffic that can take months or years to recover. This guide covers the complete migration process from pre-migration auditing through post-launch monitoring. For a thorough breakdown of migration risks and strategies, read our [ecommerce SEO migration](/blog/ecommerce-seo-migration) blog post.",
      readTime: "10 min read",
      sections: [
        {
          title: "Pre-Migration SEO Audit Checklist",
          content:
            "Before touching any migration settings, you need a comprehensive snapshot of your current SEO performance. This baseline becomes your reference point for measuring migration success and diagnosing any post-migration issues. Start by exporting a complete crawl of your existing site using tools like Screaming Frog, Sitebulb, or Lumar. Capture every URL, its HTTP status code, canonical tag, meta title, meta description, H1 tag, word count, and internal link count.\n\nDocument your current indexation status by downloading the full list of indexed pages from Google Search Console. Compare this against your crawl data to identify pages that are indexed but not in your sitemap, and pages in your sitemap that are not indexed. Both scenarios need attention during migration planning.\n\nRecord your top-performing pages by organic traffic, revenue, and keyword rankings. These are the pages where any disruption will have the most significant business impact. Export your Google Analytics landing page report filtered to organic traffic for the past 12 months, and cross-reference it with your Search Console performance data to identify the keywords driving traffic to each page.\n\nCapture your current structured data implementation, including which pages have Product schema, breadcrumb markup, FAQ schema, and any other rich result types. Also document your robots.txt rules, XML sitemap structure, hreflang implementation, and any custom canonical tag patterns. Every one of these elements must be replicated or improved on the new platform. Running a full [SEO audit](/seo-audit) before migration creates the definitive baseline you need.",
          items: [
            "Export a full site crawl capturing URLs, status codes, canonicals, meta tags, and link counts",
            "Download the complete indexed pages list from Google Search Console",
            "Record top 100 landing pages by organic traffic and their target keywords",
            "Document all structured data types currently implemented across the site",
            "Capture robots.txt rules, sitemap structure, and hreflang annotations",
          ],
          tip: "Create a shared spreadsheet that is your migration control document. Include tabs for URL mapping, redirect rules, pre-migration metrics, and post-migration checkpoints. This document becomes the single source of truth for everyone involved in the migration.",
        },
        {
          title: "URL Mapping and Redirect Strategy",
          content:
            "URL mapping is the single most critical SEO task during a platform migration. Every URL on your current site that receives organic traffic, has backlinks, or is indexed by Google must be mapped to its equivalent URL on the new platform. Missing even a handful of high-traffic URLs can result in significant ranking and revenue losses.\n\nStart with a one-to-one URL mapping for all product pages, category pages, content pages, and blog posts. Export your current URL list from the crawl data and create a mapping spreadsheet with columns for the old URL, new URL, page type, monthly organic sessions, and number of referring domains. Prioritize mapping by traffic value, which ensures your highest-revenue pages are mapped first.\n\nFor URLs that have no direct equivalent on the new platform, decide whether to redirect them to the nearest relevant page or allow them to return a 404 status. Pages with significant backlink profiles should always be redirected, even if the content no longer exists, to preserve link equity. Redirect these to the most topically relevant existing page rather than the homepage.\n\nImplement all redirects as 301 permanent redirects, not 302 temporary redirects. Test your redirect map on a staging environment before launching the new site. Use a crawling tool to follow every redirect and verify that the destination URL returns a 200 status code, has proper canonical tags, and does not create redirect chains. A redirect chain occurs when URL A redirects to URL B, which then redirects to URL C. These chains dilute link equity and slow down crawling.\n\nFor sites with thousands of URLs, most ecommerce platforms support CSV-based bulk redirect imports. Prepare your redirect file in the required format well before the migration date and test it on staging. Common issues include URL encoding problems, trailing slash mismatches, and case sensitivity differences between platforms.",
          items: [
            "Create a one-to-one URL mapping for every indexed page with organic traffic or backlinks",
            "Prioritize URL mapping by organic traffic volume and backlink count",
            "Redirect orphaned URLs to the most topically relevant page, not the homepage",
            "Use 301 permanent redirects exclusively and eliminate any redirect chains",
            "Test the complete redirect map on staging with a crawler before going live",
          ],
        },
        {
          title: "Preserving Rankings During Migration",
          content:
            "Preserving rankings requires more than just implementing redirects. Google evaluates the entire page experience, so the new pages must match or exceed the SEO quality of the originals. Title tags, meta descriptions, heading structures, and on-page content should be migrated as closely as possible to the original versions. Changing page titles during a migration is one of the most common causes of ranking drops because Google must re-evaluate the relevance signal for the new title.\n\nInternal linking architecture is equally critical. The new platform must replicate the internal link structure of the old site, including navigation menus, breadcrumb trails, cross-sell and upsell widgets, and footer links. If the new platform changes how category pages link to products or how blog posts link to product pages, the authority flow through your site changes, which directly affects rankings. Pay close attention to [canonical tags for ecommerce](/academy/canonical-tags-for-ecommerce) to prevent duplicate content on the new platform.\n\nStructured data must be implemented on the new platform before launch. If your old site had Product schema with reviews, pricing, and availability, the new site must have identical or better structured data. Missing structured data after migration causes rich results to disappear from SERPs, which can reduce click-through rates by 20 to 30 percent even if rankings remain stable.\n\nPage speed performance on the new platform should be tested extensively before launch. If the new site is slower than the old one, expect rankings to decline for queries where page experience is a tiebreaker. Run Lighthouse audits on key page templates and compare the scores against your current site. Pay special attention to Largest Contentful Paint and Cumulative Layout Shift, as these are the Core Web Vitals that most directly affect rankings.\n\nSubmit the updated XML sitemap to Google Search Console immediately after launch. This signals to Google that your site structure has changed and encourages faster recrawling of your most important pages.",
          items: [
            "Migrate title tags, meta descriptions, and H1 headings exactly as they were on the old site",
            "Replicate the internal linking structure including navigation, breadcrumbs, and cross-links",
            "Implement all structured data types on the new platform before launch day",
            "Compare Lighthouse performance scores between old and new sites before going live",
          ],
          tip: "Avoid making content changes, design overhauls, and platform migrations simultaneously. Each change introduces ranking risk, and combining them makes it impossible to diagnose what caused any traffic drops. Migrate first, stabilize rankings, then iterate on content and design.",
        },
        {
          title: "Post-Migration Monitoring and Recovery",
          content:
            "The first 72 hours after a platform migration are critical for identifying and fixing issues before they compound. Set up a monitoring dashboard that tracks indexed page count, organic sessions, crawl errors, and average position for your top 50 keywords. Check these metrics every few hours on the day of launch and daily for the first two weeks.\n\nGoogle Search Console is your primary monitoring tool. Watch the Coverage report for spikes in excluded pages, redirect errors, or server errors. Use the URL Inspection tool to manually request indexing of your most important pages. Submit the new sitemap and monitor its processing status. Google typically takes 24 to 48 hours to begin processing a new sitemap, but full recrawling of a large site can take several weeks depending on your [crawl budget management](/academy/crawl-budget-management) setup.\n\nTraffic dips of 10 to 20 percent are normal in the first week after migration as Google recrawls and reindexes your pages. If the drop exceeds 30 percent or persists beyond two weeks, investigate immediately. Common post-migration issues include broken redirects that were not caught during testing, canonical tags pointing to old URLs, internal links still referencing old URL patterns, and missing structured data on the new templates.\n\nMonitor your Google Analytics landing page report filtered to organic traffic. Compare the top 50 landing pages from the month before migration against the current data. Any page that shows a significant drop should be investigated individually. Check that the redirect is working, the new page has the correct canonical tag, and the content matches the original.\n\nSet up Bing Webmaster Tools in addition to Google Search Console. Bing often recrawls more slowly than Google, and monitoring both search engines gives you a more complete picture of your migration's SEO impact. Also check your backlink profile in a tool like Ahrefs or Majestic to verify that external links are following redirects to the new URLs rather than hitting dead ends.",
          items: [
            "Monitor indexed page count, organic sessions, and crawl errors every few hours on launch day",
            "Use URL Inspection in Search Console to request indexing of top-priority pages",
            "Compare top 50 landing pages before and after migration to identify drop-offs",
            "Check that external backlinks are following redirects to the correct new URLs",
            "Monitor both Google Search Console and Bing Webmaster Tools for complete coverage",
          ],
        },
        {
          title: "Common Migration Pitfalls to Avoid",
          content:
            "The most frequent migration mistake is incomplete URL mapping. Teams often focus on product and category pages but forget to map blog posts, informational pages, image URLs, PDF documents, and paginated collection pages. Every URL that Google has indexed or that has external backlinks needs a redirect. Run a pre-migration crawl comparison to catch any unmapped URLs.\n\nAnother critical mistake is launching the migration during a peak traffic period. Never migrate during Black Friday season, major sale events, or any period that represents a disproportionate share of annual revenue. Schedule migrations for your lowest-traffic months and ideally mid-week to ensure development resources are available if issues arise.\n\nFailing to preserve URL parameters used by marketing campaigns is a subtle but costly error. If your old platform used parameters like ?utm_source or ?ref for campaign tracking, ensure the new platform handles these parameters correctly and does not strip them during redirects. Test campaign landing pages with their full parameter strings.\n\nMany migrations fail because the staging environment does not accurately replicate the production setup. Test redirects, canonical tags, structured data, and page speed on a staging server that mirrors the production configuration. Domain-level differences between staging and production can mask issues that only surface after launch.\n\nFinally, do not remove the old site's redirect rules after migration. Redirects should remain in place permanently because external links, bookmarks, and cached search results will continue to reference old URLs for months or even years after migration. Removing redirects too early results in a wave of 404 errors and lost link equity.",
          items: [
            "Map every indexed URL including blog posts, images, PDFs, and paginated pages",
            "Schedule migrations during low-traffic periods, never during peak sales seasons",
            "Preserve URL parameters used by marketing campaigns through the redirect process",
            "Test the complete migration on a staging environment that mirrors production",
            "Keep all redirect rules in place permanently after migration",
          ],
          tip: "Create a rollback plan before starting the migration. Document the exact steps needed to revert to the old platform if the new site has critical issues at launch. Having a tested rollback procedure reduces pressure on the team and prevents panic-driven decisions.",
        },
        {
          title: "Timeline Planning and Rollback Strategy",
          content:
            "A well-structured migration timeline prevents rushed decisions and ensures every SEO element is addressed. Begin the planning process at least eight weeks before the target launch date. The first two weeks should focus on the pre-migration audit, URL mapping, and redirect file preparation. Weeks three and four are for implementing redirects on staging, testing structured data, and verifying meta tag parity between old and new sites.\n\nWeeks five and six should be dedicated to full staging crawls, performance testing, and fixing any issues discovered during testing. Run a complete Screaming Frog crawl of the staging site and compare it against your pre-migration baseline. Every page should have a matching or improved title tag, meta description, canonical tag, and structured data output.\n\nWeek seven is for final review and stakeholder sign-off. Present the migration plan to all stakeholders including marketing, development, and leadership. Share the expected timeline for traffic recovery and set realistic expectations. Most well-executed migrations see traffic recovery within four to six weeks, but some competitive keywords may take up to three months to stabilize.\n\nThe rollback strategy should define specific trigger conditions that initiate a revert to the old platform. Common triggers include a traffic drop exceeding 50 percent for more than 48 hours, critical functionality failures on the new platform, or widespread redirect failures. Document the technical steps for rollback, including DNS changes, database restoration, and redirect reversal. Test the rollback procedure at least once before the migration date.\n\nOn launch day, execute the migration during low-traffic hours and have the full team available for monitoring. Assign specific team members to monitor Google Search Console, site crawl health, conversion rates, and customer-facing functionality. Document every issue encountered and its resolution for future migration reference.",
          items: [
            "Begin migration planning at least eight weeks before the target launch date",
            "Dedicate weeks one and two to auditing, URL mapping, and redirect preparation",
            "Run complete staging crawls in weeks five and six to catch issues before launch",
            "Define specific trigger conditions for initiating a rollback to the old platform",
            "Execute the migration during low-traffic hours with the full team available for monitoring",
          ],
          tip: "After the migration stabilizes, document everything that went well and every issue you encountered. This migration playbook becomes invaluable for future platform changes and helps your team avoid repeating mistakes.",
        },
      ],
      navLabels: { previous: "Previous", next: "Next" },
    },
    de: {
      badge: "Plattform-SEO",
      heading: "SEO bei Plattform-Migrationen",
      intro:
        "Die Migration eines E-Commerce-Shops auf eine neue Plattform ist eines der risikoreichsten SEO-Ereignisse, die ein Unternehmen durchfuehren kann. URL-Strukturen aendern sich, interne Verlinkungsmuster verschieben sich und technische Implementierungen unterscheiden sich zwischen Plattformen. Ohne einen rigorosen Migrationsplan verlieren Shops regelmaessig 30 bis 60 Prozent ihres organischen Traffics, dessen Wiederherstellung Monate oder Jahre dauern kann. Dieser Leitfaden deckt den gesamten Migrationsprozess ab, von der Vorab-Pruefung bis zum Post-Launch-Monitoring. F\u00fcr einen tieferen Einblick lesen Sie unseren Leitfaden zu [Ecommerce-SEO-Migration](/blog/ecommerce-seo-migration).",
      readTime: "10 Min. Lesezeit",
      sections: [
        {
          title: "Checkliste fuer das Pre-Migration-SEO-Audit",
          content:
            "Bevor Sie Migrationseinstellungen anruehren, benoetigen Sie einen umfassenden Schnappschuss Ihrer aktuellen SEO-Performance. Diese Baseline wird Ihr Referenzpunkt fuer die Messung des Migrationserfolgs und die Diagnose etwaiger Post-Migrations-Probleme. Starten Sie mit einem vollstaendigen Crawl Ihrer bestehenden Website mit Tools wie Screaming Frog, Sitebulb oder Lumar. Erfassen Sie jede URL, ihren HTTP-Statuscode, Canonical Tag, Meta-Titel, Meta-Beschreibung, H1-Tag, Wortanzahl und interne Link-Anzahl.\n\nDokumentieren Sie Ihren aktuellen Indexierungsstatus, indem Sie die vollstaendige Liste der indexierten Seiten aus der Google Search Console herunterladen. Vergleichen Sie diese mit Ihren Crawl-Daten, um Seiten zu identifizieren, die indexiert aber nicht in Ihrer Sitemap sind, und Seiten in Ihrer Sitemap, die nicht indexiert sind.\n\nErfassen Sie Ihre leistungsstaerksten Seiten nach organischem Traffic, Umsatz und Keyword-Rankings. Dies sind die Seiten, bei denen jede Stoerung die groesste geschaeftliche Auswirkung hat. Exportieren Sie Ihren Google-Analytics-Landingpage-Bericht, gefiltert auf organischen Traffic der letzten 12 Monate.\n\nErfassen Sie Ihre aktuelle Implementierung strukturierter Daten, einschliesslich welche Seiten Produkt-Schema, Breadcrumb-Markup, FAQ-Schema und andere Rich-Result-Typen haben. Dokumentieren Sie auch Ihre Robots.txt-Regeln, XML-Sitemap-Struktur, Hreflang-Implementierung und benutzerdefinierte Canonical-Tag-Muster. Ein vollst\u00e4ndiges [SEO-Audit](/seo-audit) vor der Migration schafft die definitive Baseline.",
          items: [
            "Einen vollstaendigen Site-Crawl exportieren mit URLs, Statuscodes, Canonicals, Meta-Tags und Link-Counts",
            "Die vollstaendige Liste indexierter Seiten aus der Google Search Console herunterladen",
            "Die Top 100 Landingpages nach organischem Traffic und deren Ziel-Keywords erfassen",
            "Alle implementierten strukturierten Datentypen ueber die gesamte Website dokumentieren",
            "Robots.txt-Regeln, Sitemap-Struktur und Hreflang-Annotationen erfassen",
          ],
          tip: "Erstellen Sie ein gemeinsames Tabellenblatt als Migrations-Kontrolldokument. Fuegen Sie Tabs fuer URL-Mapping, Redirect-Regeln, Pre-Migrations-Metriken und Post-Migrations-Checkpoints ein. Dieses Dokument wird die zentrale Informationsquelle fuer alle Beteiligten.",
        },
        {
          title: "URL-Mapping und Redirect-Strategie",
          content:
            "URL-Mapping ist die wichtigste SEO-Aufgabe waehrend einer Plattform-Migration. Jede URL auf Ihrer aktuellen Website, die organischen Traffic erhaelt, Backlinks hat oder von Google indexiert ist, muss auf ihre entsprechende URL auf der neuen Plattform gemappt werden. Selbst das Uebersehen weniger High-Traffic-URLs kann zu erheblichen Ranking- und Umsatzverlusten fuehren.\n\nBeginnen Sie mit einem Eins-zu-eins-URL-Mapping fuer alle Produktseiten, Kategorieseiten, Inhaltsseiten und Blogbeitraege. Exportieren Sie Ihre aktuelle URL-Liste aus den Crawl-Daten und erstellen Sie eine Mapping-Tabelle mit Spalten fuer alte URL, neue URL, Seitentyp, monatliche organische Sitzungen und Anzahl der verweisenden Domains. Priorisieren Sie das Mapping nach Traffic-Wert.\n\nFuer URLs ohne direktes Aequivalent auf der neuen Plattform entscheiden Sie, ob Sie diese auf die naechstliegende relevante Seite weiterleiten oder einen 404-Status zurueckgeben lassen. Seiten mit bedeutendem Backlink-Profil sollten immer weitergeleitet werden, auch wenn der Inhalt nicht mehr existiert, um Link-Equity zu erhalten.\n\nImplementieren Sie alle Weiterleitungen als 301-permanente Weiterleitungen, nicht als 302-temporaere Weiterleitungen. Testen Sie Ihre Redirect-Map in einer Staging-Umgebung vor dem Launch der neuen Website. Verwenden Sie ein Crawling-Tool, um jeder Weiterleitung zu folgen und zu verifizieren, dass die Ziel-URL einen 200-Statuscode zurueckgibt und keine Weiterleitungsketten erzeugt.\n\nFuer Websites mit Tausenden von URLs unterstuetzen die meisten E-Commerce-Plattformen CSV-basierte Massen-Redirect-Importe. Bereiten Sie Ihre Redirect-Datei im erforderlichen Format rechtzeitig vor dem Migrationsdatum vor.",
          items: [
            "Ein Eins-zu-eins-URL-Mapping fuer jede indexierte Seite mit organischem Traffic oder Backlinks erstellen",
            "URL-Mapping nach organischem Traffic-Volumen und Backlink-Anzahl priorisieren",
            "Verwaiste URLs auf die thematisch relevanteste Seite weiterleiten, nicht auf die Startseite",
            "Ausschliesslich 301-permanente Weiterleitungen verwenden und Weiterleitungsketten eliminieren",
            "Die vollstaendige Redirect-Map auf Staging mit einem Crawler testen, bevor Sie live gehen",
          ],
        },
        {
          title: "Rankings waehrend der Migration bewahren",
          content:
            "Die Bewahrung von Rankings erfordert mehr als nur die Implementierung von Weiterleitungen. Google bewertet das gesamte Seitenerlebnis, daher muessen die neuen Seiten die SEO-Qualitaet der Originale erreichen oder uebertreffen. Title-Tags, Meta-Beschreibungen, Ueberschriftenstrukturen und On-Page-Inhalte sollten so nah wie moeglich an den Originalversionen migriert werden. Die Aenderung von Seitentiteln waehrend einer Migration ist eine der haeufigsten Ursachen fuer Ranking-Verluste.\n\nDie interne Verlinkungsarchitektur ist ebenso kritisch. Die neue Plattform muss die interne Linkstruktur der alten Website replizieren, einschliesslich Navigationsmenuen, Breadcrumb-Trails, Cross-Sell- und Upsell-Widgets sowie Footer-Links. Wenn die neue Plattform aendert, wie Kategorieseiten auf Produkte oder Blogbeitraege auf Produktseiten verlinken, aendert sich der Autoritaetsfluss, was sich direkt auf Rankings auswirkt. Achten Sie besonders auf [Canonical-Tags f\u00fcr Ecommerce](/academy/canonical-tags-for-ecommerce), um Duplicate Content auf der neuen Plattform zu vermeiden.\n\nStrukturierte Daten muessen auf der neuen Plattform vor dem Launch implementiert werden. Wenn Ihre alte Website Produkt-Schema mit Bewertungen, Preisen und Verfuegbarkeit hatte, muss die neue Website identische oder bessere strukturierte Daten haben. Fehlende strukturierte Daten nach der Migration fuehren dazu, dass Rich Results aus den SERPs verschwinden.\n\nDie Seitengeschwindigkeit auf der neuen Plattform sollte vor dem Launch umfassend getestet werden. Wenn die neue Website langsamer ist als die alte, erwarten Sie Ranking-Rueckgaenge. Fuehren Sie Lighthouse-Audits auf Schluesselseiten-Templates durch und vergleichen Sie die Ergebnisse mit Ihrer aktuellen Website.\n\nReichen Sie die aktualisierte XML-Sitemap unmittelbar nach dem Launch bei der Google Search Console ein.",
          items: [
            "Title-Tags, Meta-Beschreibungen und H1-Ueberschriften genau wie auf der alten Website migrieren",
            "Die interne Verlinkungsstruktur einschliesslich Navigation, Breadcrumbs und Cross-Links replizieren",
            "Alle strukturierten Datentypen auf der neuen Plattform vor dem Launch-Tag implementieren",
            "Lighthouse-Performance-Scores zwischen alter und neuer Website vor dem Go-Live vergleichen",
          ],
          tip: "Vermeiden Sie es, Inhaltsaenderungen, Design-Ueberarbeitungen und Plattform-Migrationen gleichzeitig durchzufuehren. Jede Aenderung birgt Ranking-Risiken, und deren Kombination macht es unmoeglich zu diagnostizieren, was etwaige Traffic-Einbrueche verursacht hat.",
        },
        {
          title: "Post-Migrations-Monitoring und Wiederherstellung",
          content:
            "Die ersten 72 Stunden nach einer Plattform-Migration sind entscheidend fuer die Identifizierung und Behebung von Problemen, bevor sie sich potenzieren. Richten Sie ein Monitoring-Dashboard ein, das indexierte Seitenzahl, organische Sitzungen, Crawl-Fehler und durchschnittliche Position fuer Ihre Top-50-Keywords verfolgt. Pruefen Sie diese Metriken am Launch-Tag alle paar Stunden und in den ersten zwei Wochen taeglich.\n\nDie Google Search Console ist Ihr primaeres Monitoring-Tool. Beobachten Sie den Abdeckungsbericht auf Spitzen bei ausgeschlossenen Seiten, Redirect-Fehlern oder Server-Fehlern. Verwenden Sie das URL-Inspektionstool, um die Indexierung Ihrer wichtigsten Seiten manuell anzufordern. Reichen Sie die neue Sitemap ein und ueberwachen Sie deren Verarbeitungsstatus. Google ben\u00f6tigt in der Regel 24 bis 48 Stunden, um eine neue Sitemap zu verarbeiten, aber das vollst\u00e4ndige Neucrawlen h\u00e4ngt von Ihrem [Crawl-Budget-Management](/academy/crawl-budget-management)-Setup ab.\n\nTraffic-Rueckgaenge von 10 bis 20 Prozent sind in der ersten Woche nach der Migration normal, waehrend Google Ihre Seiten neu crawlt und indexiert. Wenn der Rueckgang 30 Prozent uebersteigt oder ueber zwei Wochen anhalt, untersuchen Sie sofort. Haeufige Post-Migrations-Probleme umfassen fehlerhafte Weiterleitungen, Canonical Tags die auf alte URLs verweisen, interne Links die noch alte URL-Muster referenzieren und fehlende strukturierte Daten auf den neuen Templates.\n\nUeberwachen Sie Ihren Google-Analytics-Landingpage-Bericht gefiltert nach organischem Traffic. Vergleichen Sie die Top 50 Landingpages des Monats vor der Migration mit den aktuellen Daten. Jede Seite mit einem deutlichen Rueckgang sollte einzeln untersucht werden.\n\nRichten Sie die Bing Webmaster Tools zusaetzlich zur Google Search Console ein. Bing crawlt oft langsamer als Google, und die Ueberwachung beider Suchmaschinen gibt Ihnen ein vollstaendigeres Bild der SEO-Auswirkungen.",
          items: [
            "Indexierte Seitenzahl, organische Sitzungen und Crawl-Fehler am Launch-Tag alle paar Stunden ueberwachen",
            "URL-Inspektion in der Search Console verwenden, um Indexierung priorisierter Seiten anzufordern",
            "Top 50 Landingpages vor und nach der Migration vergleichen, um Rueckgaenge zu identifizieren",
            "Pruefen, dass externe Backlinks den Weiterleitungen zu den korrekten neuen URLs folgen",
            "Sowohl Google Search Console als auch Bing Webmaster Tools fuer vollstaendige Abdeckung ueberwachen",
          ],
        },
        {
          title: "Haeufige Migrationsfehler vermeiden",
          content:
            "Der haeufigste Migrationsfehler ist unvollstaendiges URL-Mapping. Teams konzentrieren sich oft auf Produkt- und Kategorieseiten, vergessen aber Blog-Beitraege, Informationsseiten, Bild-URLs, PDF-Dokumente und paginierte Kollektionsseiten zu mappen. Jede von Google indexierte URL oder URL mit externen Backlinks benoetigt eine Weiterleitung.\n\nEin weiterer kritischer Fehler ist der Launch der Migration waehrend einer Spitzen-Traffic-Periode. Migrieren Sie niemals waehrend der Black-Friday-Saison, bei grossen Verkaufsaktionen oder in Zeitraeumen, die einen ueberproportionalen Anteil am Jahresumsatz ausmachen. Planen Sie Migrationen fuer Ihre traffic-aermsten Monate und idealerweise unter der Woche.\n\nDas Versaeumnis, URL-Parameter fuer Marketingkampagnen zu erhalten, ist ein subtiler aber kostspieliger Fehler. Wenn Ihre alte Plattform Parameter wie ?utm_source oder ?ref fuer Kampagnen-Tracking verwendete, stellen Sie sicher, dass die neue Plattform diese korrekt verarbeitet und sie nicht waehrend der Weiterleitung entfernt.\n\nViele Migrationen scheitern, weil die Staging-Umgebung die Produktionskonfiguration nicht genau widerspiegelt. Testen Sie Weiterleitungen, Canonical Tags, strukturierte Daten und Seitengeschwindigkeit auf einem Staging-Server, der die Produktionskonfiguration spiegelt.\n\nEntfernen Sie schliesslich niemals die Redirect-Regeln der alten Website nach der Migration. Weiterleitungen sollten dauerhaft bestehen bleiben, da externe Links, Lesezeichen und gecachte Suchergebnisse noch Monate oder Jahre nach der Migration alte URLs referenzieren.",
          items: [
            "Jede indexierte URL mappen, einschliesslich Blog-Beitraege, Bilder, PDFs und paginierte Seiten",
            "Migrationen waehrend verkehrsarmer Zeiten planen, niemals waehrend Spitzenverkaufszeiten",
            "URL-Parameter fuer Marketingkampagnen durch den Redirect-Prozess beibehalten",
            "Die vollstaendige Migration in einer Staging-Umgebung testen, die die Produktion spiegelt",
            "Alle Redirect-Regeln nach der Migration dauerhaft beibehalten",
          ],
          tip: "Erstellen Sie vor Beginn der Migration einen Rollback-Plan. Dokumentieren Sie die exakten Schritte, die noetig sind, um zur alten Plattform zurueckzukehren, falls die neue Website kritische Probleme beim Launch hat.",
        },
        {
          title: "Zeitplanung und Rollback-Strategie",
          content:
            "Ein gut strukturierter Migrationszeitplan verhindert uebereilte Entscheidungen und stellt sicher, dass jedes SEO-Element beruecksichtigt wird. Beginnen Sie den Planungsprozess mindestens acht Wochen vor dem angestrebten Launch-Datum. Die ersten zwei Wochen sollten sich auf das Pre-Migrations-Audit, URL-Mapping und die Vorbereitung der Redirect-Dateien konzentrieren. Wochen drei und vier dienen der Implementierung von Weiterleitungen auf Staging, dem Testen strukturierter Daten und der Verifizierung der Meta-Tag-Paritaet.\n\nWochen fuenf und sechs sollten vollstaendigen Staging-Crawls, Performance-Tests und der Behebung entdeckter Probleme gewidmet sein. Fuehren Sie einen vollstaendigen Screaming-Frog-Crawl der Staging-Website durch und vergleichen Sie ihn mit Ihrer Pre-Migrations-Baseline.\n\nWoche sieben ist fuer die abschliessende Ueberpruefung und Stakeholder-Freigabe. Praesentieren Sie den Migrationsplan allen Beteiligten einschliesslich Marketing, Entwicklung und Fuehrung. Teilen Sie den erwarteten Zeitplan fuer die Traffic-Wiederherstellung mit und setzen Sie realistische Erwartungen. Die meisten gut ausgefuehrten Migrationen zeigen eine Traffic-Erholung innerhalb von vier bis sechs Wochen.\n\nDie Rollback-Strategie sollte spezifische Ausloeser-Bedingungen definieren, die eine Rueckkehr zur alten Plattform einleiten. Haeufige Ausloeser sind ein Traffic-Rueckgang von mehr als 50 Prozent fuer ueber 48 Stunden, kritische Funktionsausfaelle auf der neuen Plattform oder weit verbreitete Redirect-Fehler. Dokumentieren Sie die technischen Schritte fuer den Rollback und testen Sie das Verfahren mindestens einmal vor dem Migrationsdatum.\n\nFuehren Sie die Migration am Launch-Tag waehrend verkehrsarmer Stunden durch und halten Sie das gesamte Team fuer Monitoring bereit. Weisen Sie bestimmten Teammitgliedern die Ueberwachung von Google Search Console, Crawl-Health, Konversionsraten und kundennaher Funktionalitaet zu.",
          items: [
            "Die Migrationsplanung mindestens acht Wochen vor dem angestrebten Launch-Datum beginnen",
            "Wochen eins und zwei dem Auditing, URL-Mapping und der Redirect-Vorbereitung widmen",
            "In den Wochen fuenf und sechs vollstaendige Staging-Crawls durchfuehren, um Probleme vor dem Launch zu erkennen",
            "Spezifische Ausloeser-Bedingungen fuer die Einleitung eines Rollbacks zur alten Plattform definieren",
            "Die Migration waehrend verkehrsarmer Stunden durchfuehren mit dem gesamten Team fuer Monitoring",
          ],
          tip: "Dokumentieren Sie nach der Stabilisierung der Migration alles, was gut lief, und jedes aufgetretene Problem. Dieses Migrations-Playbook wird bei zukuenftigen Plattformwechseln unschaetzbar wertvoll.",
        },
      ],
      navLabels: { previous: "Zurueck", next: "Weiter" },
    },
    fr: {
      badge: "SEO par plateforme",
      heading: "SEO pour la migration de plateforme",
      intro:
        "La migration d'une boutique e-commerce vers une nouvelle plateforme est l'un des evenements SEO les plus risques qu'une entreprise puisse entreprendre. Les structures d'URL changent, les schemas de liens internes evoluent et les implementations techniques different d'une plateforme a l'autre. Sans un plan de migration rigoureux, les boutiques perdent regulierement 30 a 60 pour cent de leur trafic organique, dont la recuperation peut prendre des mois voire des annees. Ce guide couvre l'ensemble du processus de migration, de l'audit pre-migration a la surveillance post-lancement. Pour une analyse approfondie des risques et stratégies de migration, lisez notre article de blog sur la [migration SEO e-commerce](/blog/ecommerce-seo-migration).",
      readTime: "10 min de lecture",
      sections: [
        {
          title: "Checklist de l'[audit SEO](/seo-audit) pre-migration",
          content:
            "Avant de toucher aux parametres de migration, vous avez besoin d'un instantane complet de votre performance SEO actuelle. Cette base de reference devient votre point de comparaison pour mesurer le succes de la migration. Commencez par exporter un crawl complet de votre site existant avec des outils comme Screaming Frog, Sitebulb ou Lumar. Capturez chaque URL, son code de statut HTTP, sa balise canonique, son meta title, sa meta description, sa balise H1, son nombre de mots et son nombre de liens internes.\n\nDocumentez votre statut d'indexation actuel en telechargeant la liste complete des pages indexees depuis Google Search Console. Comparez-la avec vos donnees de crawl pour identifier les pages indexees mais absentes de votre sitemap, et les pages dans votre sitemap qui ne sont pas indexees.\n\nEnregistrez vos pages les plus performantes par trafic organique, chiffre d'affaires et classements de mots-cles. Ce sont les pages ou toute perturbation aura l'impact commercial le plus important. Exportez votre rapport de pages de destination Google Analytics filtre sur le trafic organique des 12 derniers mois.\n\nCapturez votre implementation actuelle des donnees structurees, y compris quelles pages ont un schema Product, un balisage breadcrumb, un schema FAQ et tout autre type de resultat enrichi. Documentez egalement vos regles robots.txt, la structure de votre sitemap XML, votre implementation hreflang et les schemas de balises canoniques personnalises.",
          items: [
            "Exporter un crawl complet du site capturant URLs, codes de statut, canoniques, meta tags et compteurs de liens",
            "Telecharger la liste complete des pages indexees depuis Google Search Console",
            "Enregistrer les 100 principales pages de destination par trafic organique et leurs mots-cles cibles",
            "Documenter tous les types de donnees structurees actuellement implementes sur le site",
            "Capturer les regles robots.txt, la structure du sitemap et les annotations hreflang",
          ],
          tip: "Creez un tableur partage servant de document de controle de migration. Incluez des onglets pour le mapping d'URL, les regles de redirection, les metriques pre-migration et les points de controle post-migration. Ce document devient la source unique de verite pour toutes les personnes impliquees.",
        },
        {
          title: "Mapping d'URL et strategie de redirection",
          content:
            "Le mapping d'URL est la tache SEO la plus critique lors d'une migration de plateforme. Chaque URL de votre site actuel qui recoit du trafic organique, possede des backlinks ou est indexee par Google doit etre mappee vers son URL equivalente sur la nouvelle plateforme. Manquer meme quelques URLs a fort trafic peut entrainer des pertes significatives de classement et de revenus.\n\nCommencez par un mapping un-a-un pour toutes les pages produit, pages de categorie, pages de contenu et articles de blog. Exportez votre liste d'URL actuelle et creez un tableur de mapping avec des colonnes pour l'ancienne URL, la nouvelle URL, le type de page, les sessions organiques mensuelles et le nombre de domaines referents. Priorisez le mapping par valeur de trafic.\n\nPour les URL sans equivalent direct sur la nouvelle plateforme, decidez si vous les redirigez vers la page pertinente la plus proche ou les laissez retourner un statut 404. Les pages avec des profils de backlinks significatifs doivent toujours etre redirigees pour preserver l'equite des liens. Redirigez-les vers la page existante la plus pertinente thematiquement.\n\nImplementez toutes les redirections comme des redirections 301 permanentes, pas des redirections 302 temporaires. Testez votre carte de redirections dans un environnement de staging avant de lancer le nouveau site. Utilisez un outil de crawl pour suivre chaque redirection et verifier que l'URL de destination retourne un code 200 et ne cree pas de chaines de redirections.\n\nPour les sites avec des milliers d'URL, la plupart des plateformes e-commerce supportent les imports CSV en masse de redirections. Preparez votre fichier de redirections dans le format requis bien avant la date de migration.",
          items: [
            "Creer un mapping un-a-un pour chaque page indexee avec du trafic organique ou des backlinks",
            "Prioriser le mapping d'URL par volume de trafic organique et nombre de backlinks",
            "Rediriger les URL orphelines vers la page la plus pertinente thematiquement, pas vers l'accueil",
            "Utiliser exclusivement des redirections 301 permanentes et eliminer toute chaine de redirections",
            "Tester la carte de redirections complete sur staging avec un crawler avant la mise en ligne",
          ],
        },
        {
          title: "Preserver les classements pendant la migration",
          content:
            "Preserver les classements necessite plus que la simple mise en place de redirections. Google evalue l'experience complete de la page, les nouvelles pages doivent donc egaler ou depasser la qualite SEO des originaux. Les balises title, meta descriptions, structures de titres et contenus on-page doivent etre migres aussi fidelement que possible. Modifier les titres de page pendant une migration est l'une des causes les plus courantes de chute de classement.\n\nL'architecture de liens internes est tout aussi critique. La nouvelle plateforme doit repliquer la structure de liens internes de l'ancien site, y compris les menus de navigation, les fils d'Ariane, les widgets de vente croisee et les liens de pied de page. Si la nouvelle plateforme modifie la facon dont les pages de categorie lient aux produits, le flux d'autorite change, ce qui affecte directement les classements.\n\nLes donnees structurees doivent etre implementees sur la nouvelle plateforme avant le lancement. Si votre ancien site avait un schema Product avec avis, prix et disponibilite, le nouveau site doit avoir des donnees structurees identiques ou superieures. L'absence de donnees structurees apres migration fait disparaitre les resultats enrichis des SERP.\n\nLa performance de vitesse sur la nouvelle plateforme doit etre testee extensivement avant le lancement. Si le nouveau site est plus lent que l'ancien, attendez-vous a des baisses de classement. Executez des audits Lighthouse sur les templates de pages cles.\n\nSoumettez le sitemap XML mis a jour a Google Search Console immediatement apres le lancement. Portez une attention particulière aux [balises canoniques pour l'e-commerce](/academy/canonical-tags-for-ecommerce) pour éviter le contenu dupliqué sur la nouvelle plateforme.",
          items: [
            "Migrer les balises title, meta descriptions et titres H1 exactement tels qu'ils etaient sur l'ancien site",
            "Repliquer la structure de liens internes incluant navigation, fil d'Ariane et liens croises",
            "Implementer tous les types de donnees structurees sur la nouvelle plateforme avant le jour du lancement",
            "Comparer les scores de performance Lighthouse entre l'ancien et le nouveau site avant la mise en ligne",
          ],
          tip: "Evitez de faire des changements de contenu, des refontes de design et des migrations de plateforme simultanement. Chaque changement introduit un risque de classement, et les combiner rend impossible le diagnostic de ce qui a cause les baisses de trafic.",
        },
        {
          title: "Surveillance post-migration et recuperation",
          content:
            "Les 72 premieres heures apres une migration de plateforme sont critiques pour identifier et corriger les problemes avant qu'ils ne s'aggravent. Mettez en place un tableau de bord de surveillance qui suit le nombre de pages indexees, les sessions organiques, les erreurs de crawl et la position moyenne pour vos 50 mots-cles principaux. Verifiez ces metriques toutes les quelques heures le jour du lancement et quotidiennement pendant les deux premieres semaines.\n\nGoogle Search Console est votre outil de surveillance principal. Surveillez le rapport de Couverture pour les pics de pages exclues, les erreurs de redirection ou les erreurs serveur. Utilisez l'outil d'inspection d'URL pour demander manuellement l'indexation de vos pages les plus importantes. Soumettez le nouveau sitemap et surveillez son statut de traitement.\n\nDes baisses de trafic de 10 a 20 pour cent sont normales la premiere semaine apres la migration tandis que Google recrawle et reindexe vos pages. Si la baisse depasse 30 pour cent ou persiste au-dela de deux semaines, enquetez immediatement. Les problemes post-migration courants incluent des redirections cassees, des balises canoniques pointant vers d'anciennes URL et des donnees structurees manquantes.\n\nSurveillez votre rapport de pages de destination Google Analytics filtre sur le trafic organique. Comparez les 50 principales pages de destination du mois precedant la migration avec les donnees actuelles.\n\nConfigurez Bing Webmaster Tools en plus de Google Search Console. Bing recrawle souvent plus lentement que Google, et surveiller les deux moteurs de recherche vous donne une image plus complete. Google prend généralement 24 à 48 heures pour commencer à traiter un nouveau sitemap, mais le recrawl complet d'un grand site peut prendre plusieurs semaines selon votre configuration de [gestion du budget de crawl](/academy/crawl-budget-management).",
          items: [
            "Surveiller le nombre de pages indexees, les sessions organiques et les erreurs de crawl toutes les heures le jour du lancement",
            "Utiliser l'Inspection d'URL dans Search Console pour demander l'indexation des pages prioritaires",
            "Comparer les 50 principales pages de destination avant et apres migration pour identifier les baisses",
            "Verifier que les backlinks externes suivent les redirections vers les bonnes nouvelles URL",
            "Surveiller Google Search Console et Bing Webmaster Tools pour une couverture complete",
          ],
        },
        {
          title: "Erreurs de migration courantes a eviter",
          content:
            "L'erreur de migration la plus frequente est un mapping d'URL incomplet. Les equipes se concentrent souvent sur les pages produit et categorie mais oublient de mapper les articles de blog, les pages informatives, les URL d'images, les documents PDF et les pages de collection paginies. Chaque URL indexee par Google ou ayant des backlinks externes necessite une redirection.\n\nUne autre erreur critique est de lancer la migration pendant une periode de pic de trafic. Ne migrez jamais pendant la saison du Black Friday, les grands evenements de vente ou toute periode representant une part disproportionnee du chiffre d'affaires annuel. Planifiez les migrations pendant vos mois de moindre trafic.\n\nNe pas preserver les parametres d'URL utilises par les campagnes marketing est une erreur subtile mais couteuse. Si votre ancienne plateforme utilisait des parametres comme ?utm_source ou ?ref pour le suivi de campagne, assurez-vous que la nouvelle plateforme les gere correctement.\n\nBeaucoup de migrations echouent parce que l'environnement de staging ne reproduit pas fidelement la configuration de production. Testez les redirections, balises canoniques, donnees structurees et vitesse de page sur un serveur de staging qui reflete la configuration de production.\n\nEnfin, ne supprimez pas les regles de redirection de l'ancien site apres la migration. Les redirections doivent rester en place de facon permanente car les liens externes, les favoris et les resultats de recherche en cache continueront de referencer les anciennes URL pendant des mois voire des annees.",
          items: [
            "Mapper chaque URL indexee incluant articles de blog, images, PDF et pages paginies",
            "Planifier les migrations pendant les periodes de faible trafic, jamais pendant les saisons de ventes maximales",
            "Preserver les parametres d'URL utilises par les campagnes marketing a travers le processus de redirection",
            "Tester la migration complete sur un environnement de staging qui reflete la production",
            "Conserver toutes les regles de redirection en place de facon permanente apres la migration",
          ],
          tip: "Creez un plan de rollback avant de commencer la migration. Documentez les etapes exactes necessaires pour revenir a l'ancienne plateforme si le nouveau site presente des problemes critiques au lancement.",
        },
        {
          title: "Planification du calendrier et strategie de rollback",
          content:
            "Un calendrier de migration bien structure previent les decisions precipitees et garantit que chaque element SEO est traite. Commencez le processus de planification au moins huit semaines avant la date de lancement cible. Les deux premieres semaines doivent se concentrer sur l'audit pre-migration, le mapping d'URL et la preparation des fichiers de redirection. Les semaines trois et quatre servent a implementer les redirections sur staging, tester les donnees structurees et verifier la parite des meta tags.\n\nLes semaines cinq et six doivent etre consacrees aux crawls complets de staging, aux tests de performance et a la correction des problemes decouverts. Executez un crawl Screaming Frog complet du site de staging et comparez-le avec votre baseline pre-migration.\n\nLa semaine sept est pour la revue finale et la validation des parties prenantes. Presentez le plan de migration a toutes les parties prenantes. Partagez le calendrier prevu pour la recuperation du trafic et fixez des attentes realistes. La plupart des migrations bien executees voient une recuperation du trafic dans les quatre a six semaines.\n\nLa strategie de rollback doit definir des conditions declenchantes specifiques pour initier un retour a l'ancienne plateforme. Les declencheurs courants incluent une baisse de trafic depassant 50 pour cent pendant plus de 48 heures, des defaillances fonctionnelles critiques ou des echecs de redirection generalises. Documentez les etapes techniques du rollback et testez la procedure au moins une fois avant la date de migration.\n\nLe jour du lancement, executez la migration pendant les heures de faible trafic avec l'equipe complete disponible pour la surveillance. Assignez des membres specifiques de l'equipe a la surveillance de Search Console, de la sante du crawl et des taux de conversion.",
          items: [
            "Commencer la planification de la migration au moins huit semaines avant la date de lancement cible",
            "Consacrer les semaines une et deux a l'audit, au mapping d'URL et a la preparation des redirections",
            "Executer des crawls complets de staging en semaines cinq et six pour detecter les problemes avant le lancement",
            "Definir des conditions declenchantes specifiques pour initier un rollback vers l'ancienne plateforme",
            "Executer la migration pendant les heures de faible trafic avec l'equipe complete disponible pour la surveillance",
          ],
          tip: "Apres la stabilisation de la migration, documentez tout ce qui a bien fonctionne et chaque probleme rencontre. Ce playbook de migration devient inestimable pour les futurs changements de plateforme.",
        },
      ],
      navLabels: { previous: "Precedent", next: "Suivant" },
    },
    es: {
      badge: "SEO por plataforma",
      heading: "SEO para migracion de plataforma",
      intro:
        "Migrar una tienda de comercio electronico a una nueva plataforma es uno de los eventos SEO de mayor riesgo que una empresa puede emprender. Las estructuras de URL cambian, los patrones de enlazado interno se modifican y las implementaciones tecnicas difieren entre plataformas. Sin un plan de migracion riguroso, las tiendas pierden regularmente entre el 30 y el 60 por ciento del trafico organico, cuya recuperacion puede llevar meses o anos. Esta guia cubre el proceso completo de migracion, desde la auditoria previa hasta el monitoreo posterior al lanzamiento. Para un desglose completo de riesgos y estrategias de migracion, lee nuestro articulo sobre [migracion SEO para ecommerce](/blog/ecommerce-seo-migration).",
      readTime: "10 min de lectura",
      sections: [
        {
          title: "Checklist de auditoria SEO pre-migracion",
          content:
            "Antes de tocar cualquier configuracion de migracion, necesitas una captura completa de tu rendimiento SEO actual. Esta linea base se convierte en tu punto de referencia para medir el exito de la migracion. Comienza exportando un rastreo completo de tu sitio existente usando herramientas como Screaming Frog, Sitebulb o Lumar. Captura cada URL, su codigo de estado HTTP, etiqueta canonica, meta titulo, meta descripcion, etiqueta H1, conteo de palabras y conteo de enlaces internos.\n\nDocumenta tu estado de indexacion actual descargando la lista completa de paginas indexadas desde Google Search Console. Comparala con tus datos de rastreo para identificar paginas indexadas que no estan en tu sitemap, y paginas en tu sitemap que no estan indexadas.\n\nRegistra tus paginas de mayor rendimiento por trafico organico, ingresos y posiciones de palabras clave. Estas son las paginas donde cualquier interrupcion tendra el mayor impacto empresarial. Exporta tu informe de paginas de destino de Google Analytics filtrado por trafico organico de los ultimos 12 meses.\n\nCaptura tu implementacion actual de datos estructurados, incluyendo que paginas tienen esquema Product, marcado de migas de pan, esquema FAQ y cualquier otro tipo de resultado enriquecido. Tambien documenta tus reglas de robots.txt, estructura del sitemap XML, implementacion hreflang y patrones de etiquetas canonicas personalizadas. Ejecutar una [auditoria SEO](/seo-audit) completa antes de la migracion crea la linea base definitiva que necesitas.",
          items: [
            "Exportar un rastreo completo del sitio capturando URLs, codigos de estado, canonicas, meta tags y conteos de enlaces",
            "Descargar la lista completa de paginas indexadas desde Google Search Console",
            "Registrar las 100 principales paginas de destino por trafico organico y sus palabras clave objetivo",
            "Documentar todos los tipos de datos estructurados actualmente implementados en el sitio",
            "Capturar reglas de robots.txt, estructura del sitemap y anotaciones hreflang",
          ],
          tip: "Crea una hoja de calculo compartida que sirva como documento de control de migracion. Incluye pestanas para mapeo de URLs, reglas de redireccion, metricas pre-migracion y puntos de control post-migracion. Este documento se convierte en la fuente unica de verdad para todos los involucrados.",
        },
        {
          title: "Mapeo de URL y estrategia de redireccion",
          content:
            "El mapeo de URLs es la tarea SEO mas critica durante una migracion de plataforma. Cada URL de tu sitio actual que recibe trafico organico, tiene backlinks o esta indexada por Google debe ser mapeada a su URL equivalente en la nueva plataforma. Perder incluso un punado de URLs de alto trafico puede resultar en perdidas significativas de rankings e ingresos.\n\nComienza con un mapeo uno a uno para todas las paginas de productos, categorias, contenido y entradas de blog. Exporta tu lista actual de URLs desde los datos de rastreo y crea una hoja de mapeo con columnas para la URL antigua, URL nueva, tipo de pagina, sesiones organicas mensuales y numero de dominios referentes. Prioriza el mapeo por valor de trafico.\n\nPara URLs sin equivalente directo en la nueva plataforma, decide si redirigirlas a la pagina relevante mas cercana o permitir que devuelvan un estado 404. Las paginas con perfiles de backlinks significativos siempre deben redirigirse para preservar la equidad de enlaces. Redirigelas a la pagina existente mas relevante tematicamente.\n\nImplementa todas las redirecciones como redirecciones 301 permanentes, no redirecciones 302 temporales. Prueba tu mapa de redirecciones en un entorno de staging antes de lanzar el nuevo sitio. Usa una herramienta de rastreo para seguir cada redireccion y verificar que la URL de destino devuelve un codigo 200 y no crea cadenas de redireccion.\n\nPara sitios con miles de URLs, la mayoria de las plataformas de comercio electronico soportan importaciones CSV masivas de redirecciones. Prepara tu archivo de redirecciones en el formato requerido con anticipacion.",
          items: [
            "Crear un mapeo uno a uno para cada pagina indexada con trafico organico o backlinks",
            "Priorizar el mapeo de URLs por volumen de trafico organico y conteo de backlinks",
            "Redirigir URLs huerfanas a la pagina mas relevante tematicamente, no a la pagina de inicio",
            "Usar exclusivamente redirecciones 301 permanentes y eliminar cualquier cadena de redireccion",
            "Probar el mapa de redirecciones completo en staging con un crawler antes de lanzar",
          ],
        },
        {
          title: "Preservar rankings durante la migracion",
          content:
            "Preservar rankings requiere mas que simplemente implementar redirecciones. Google evalua la experiencia completa de la pagina, por lo que las nuevas paginas deben igualar o superar la calidad SEO de las originales. Las etiquetas de titulo, meta descripciones, estructuras de encabezados y contenido on-page deben migrarse lo mas fielmente posible. Cambiar los titulos de pagina durante una migracion es una de las causas mas comunes de caidas de ranking.\n\nLa arquitectura de enlaces internos es igualmente critica. La nueva plataforma debe replicar la estructura de enlaces internos del sitio antiguo, incluyendo menus de navegacion, rutas de migas de pan, widgets de venta cruzada y enlaces del pie de pagina. Si la nueva plataforma cambia como las paginas de categoria enlazan a los productos, el flujo de autoridad cambia, lo que afecta directamente los rankings.\n\nLos datos estructurados deben implementarse en la nueva plataforma antes del lanzamiento. Si tu sitio antiguo tenia esquema Product con resenas, precios y disponibilidad, el nuevo sitio debe tener datos estructurados identicos o mejores. La ausencia de datos estructurados despues de la migracion hace que los resultados enriquecidos desaparezcan de las SERPs.\n\nEl rendimiento de velocidad en la nueva plataforma debe probarse extensivamente antes del lanzamiento. Si el nuevo sitio es mas lento que el antiguo, espera caidas en los rankings. Ejecuta auditorias Lighthouse en las plantillas de paginas clave.\n\nEnvia el sitemap XML actualizado a Google Search Console inmediatamente despues del lanzamiento. Presta especial atencion a las [etiquetas canonical para ecommerce](/academy/canonical-tags-for-ecommerce) para prevenir contenido duplicado en la nueva plataforma.",
          items: [
            "Migrar etiquetas de titulo, meta descripciones y encabezados H1 exactamente como estaban en el sitio antiguo",
            "Replicar la estructura de enlaces internos incluyendo navegacion, migas de pan y enlaces cruzados",
            "Implementar todos los tipos de datos estructurados en la nueva plataforma antes del dia del lanzamiento",
            "Comparar las puntuaciones de rendimiento Lighthouse entre el sitio antiguo y el nuevo antes del lanzamiento",
          ],
          tip: "Evita hacer cambios de contenido, redisenos y migraciones de plataforma simultaneamente. Cada cambio introduce riesgo de ranking, y combinarlos hace imposible diagnosticar que causo cualquier caida de trafico.",
        },
        {
          title: "Monitoreo post-migracion y recuperacion",
          content:
            "Las primeras 72 horas despues de una migracion de plataforma son criticas para identificar y corregir problemas antes de que se agraven. Configura un panel de monitoreo que rastree el conteo de paginas indexadas, sesiones organicas, errores de rastreo y posicion promedio para tus 50 palabras clave principales. Verifica estas metricas cada pocas horas el dia del lanzamiento y diariamente durante las primeras dos semanas.\n\nGoogle Search Console es tu herramienta principal de monitoreo. Vigila el informe de Cobertura para picos en paginas excluidas, errores de redireccion o errores del servidor. Usa la herramienta de Inspeccion de URL para solicitar manualmente la indexacion de tus paginas mas importantes. Envia el nuevo sitemap y monitorea su estado de procesamiento.\n\nCaidas de trafico de 10 a 20 por ciento son normales en la primera semana despues de la migracion mientras Google vuelve a rastrear e indexar tus paginas. Si la caida supera el 30 por ciento o persiste mas de dos semanas, investiga inmediatamente. Los problemas post-migracion comunes incluyen redirecciones rotas, etiquetas canonicas apuntando a URLs antiguas y datos estructurados faltantes.\n\nMonitorea tu informe de paginas de destino de Google Analytics filtrado por trafico organico. Compara las 50 principales paginas de destino del mes anterior a la migracion con los datos actuales.\n\nConfigura Bing Webmaster Tools ademas de Google Search Console. Bing a menudo vuelve a rastrear mas lentamente que Google, y monitorear ambos motores te da una imagen mas completa. Google tipicamente tarda de 24 a 48 horas en comenzar a procesar un nuevo sitemap, pero el re-rastreo completo de un sitio grande puede tomar varias semanas dependiendo de tu configuracion de [gestion de presupuesto de rastreo](/academy/crawl-budget-management).",
          items: [
            "Monitorear conteo de paginas indexadas, sesiones organicas y errores de rastreo cada pocas horas el dia del lanzamiento",
            "Usar Inspeccion de URL en Search Console para solicitar indexacion de paginas prioritarias",
            "Comparar las 50 principales paginas de destino antes y despues de la migracion para identificar caidas",
            "Verificar que los backlinks externos siguen las redirecciones a las URLs nuevas correctas",
            "Monitorear tanto Google Search Console como Bing Webmaster Tools para cobertura completa",
          ],
        },
        {
          title: "Errores comunes de migracion a evitar",
          content:
            "El error de migracion mas frecuente es el mapeo incompleto de URLs. Los equipos a menudo se centran en las paginas de productos y categorias pero olvidan mapear entradas de blog, paginas informativas, URLs de imagenes, documentos PDF y paginas de coleccion paginadas. Cada URL que Google ha indexado o que tiene backlinks externos necesita una redireccion.\n\nOtro error critico es lanzar la migracion durante un periodo de trafico pico. Nunca migres durante la temporada de Black Friday, eventos de venta importantes o cualquier periodo que represente una parte desproporcionada de los ingresos anuales. Programa las migraciones para tus meses de menor trafico.\n\nNo preservar los parametros de URL usados por campanas de marketing es un error sutil pero costoso. Si tu plataforma antigua usaba parametros como ?utm_source o ?ref para seguimiento de campanas, asegurate de que la nueva plataforma los maneje correctamente.\n\nMuchas migraciones fallan porque el entorno de staging no replica con precision la configuracion de produccion. Prueba redirecciones, etiquetas canonicas, datos estructurados y velocidad de pagina en un servidor de staging que refleje la configuracion de produccion.\n\nFinalmente, no elimines las reglas de redireccion del sitio antiguo despues de la migracion. Las redirecciones deben permanecer en su lugar permanentemente porque los enlaces externos, marcadores y resultados de busqueda en cache seguiran referenciando URLs antiguas durante meses o incluso anos.",
          items: [
            "Mapear cada URL indexada incluyendo entradas de blog, imagenes, PDFs y paginas paginadas",
            "Programar migraciones durante periodos de bajo trafico, nunca durante temporadas de ventas pico",
            "Preservar parametros de URL usados por campanas de marketing a traves del proceso de redireccion",
            "Probar la migracion completa en un entorno de staging que refleje produccion",
            "Mantener todas las reglas de redireccion en su lugar permanentemente despues de la migracion",
          ],
          tip: "Crea un plan de rollback antes de comenzar la migracion. Documenta los pasos exactos necesarios para revertir a la plataforma antigua si el nuevo sitio tiene problemas criticos en el lanzamiento.",
        },
        {
          title: "Planificacion del cronograma y estrategia de rollback",
          content:
            "Un cronograma de migracion bien estructurado previene decisiones apresuradas y asegura que cada elemento SEO se aborde. Comienza el proceso de planificacion al menos ocho semanas antes de la fecha de lanzamiento objetivo. Las primeras dos semanas deben enfocarse en la auditoria pre-migracion, el mapeo de URLs y la preparacion de archivos de redireccion. Las semanas tres y cuatro son para implementar redirecciones en staging, probar datos estructurados y verificar la paridad de meta tags.\n\nLas semanas cinco y seis deben dedicarse a rastreos completos de staging, pruebas de rendimiento y correccion de problemas descubiertos. Ejecuta un rastreo completo de Screaming Frog del sitio de staging y comparalo con tu linea base pre-migracion.\n\nLa semana siete es para revision final y aprobacion de las partes interesadas. Presenta el plan de migracion a todos los interesados. Comparte el cronograma esperado para la recuperacion del trafico y establece expectativas realistas. La mayoria de las migraciones bien ejecutadas ven recuperacion del trafico dentro de cuatro a seis semanas.\n\nLa estrategia de rollback debe definir condiciones desencadenantes especificas que inicien un retorno a la plataforma antigua. Los desencadenantes comunes incluyen una caida de trafico superior al 50 por ciento durante mas de 48 horas, fallos criticos de funcionalidad o fallos generalizados de redireccion. Documenta los pasos tecnicos para el rollback y prueba el procedimiento al menos una vez antes de la fecha de migracion.\n\nEl dia del lanzamiento, ejecuta la migracion durante horas de bajo trafico con el equipo completo disponible para monitoreo. Asigna miembros especificos del equipo para monitorear Search Console, salud del rastreo y tasas de conversion.",
          items: [
            "Comenzar la planificacion de la migracion al menos ocho semanas antes de la fecha de lanzamiento objetivo",
            "Dedicar las semanas uno y dos a auditoria, mapeo de URLs y preparacion de redirecciones",
            "Ejecutar rastreos completos de staging en las semanas cinco y seis para detectar problemas antes del lanzamiento",
            "Definir condiciones desencadenantes especificas para iniciar un rollback a la plataforma antigua",
            "Ejecutar la migracion durante horas de bajo trafico con el equipo completo disponible para monitoreo",
          ],
          tip: "Despues de que la migracion se estabilice, documenta todo lo que salio bien y cada problema que encontraste. Este manual de migracion se vuelve invaluable para futuros cambios de plataforma.",
        },
      ],
      navLabels: { previous: "Anterior", next: "Siguiente" },
    },
    it: {
      badge: "SEO per piattaforma",
      heading: "SEO per la migrazione di piattaforma",
      intro:
        "La migrazione di un negozio e-commerce verso una nuova piattaforma e uno degli eventi SEO a piu alto rischio che un'azienda possa intraprendere. Le strutture URL cambiano, i pattern di linking interno si modificano e le implementazioni tecniche differiscono tra le piattaforme. Senza un piano di migrazione rigoroso, i negozi perdono regolarmente dal 30 al 60 percento del traffico organico, il cui recupero puo richiedere mesi o anni. Questa guida copre l'intero processo di migrazione, dall'audit pre-migrazione al monitoraggio post-lancio. Per approfondire, consulta la nostra guida sulla [migrazione SEO per ecommerce](/blog/ecommerce-seo-migration).",
      readTime: "10 min di lettura",
      sections: [
        {
          title: "Checklist dell'audit SEO pre-migrazione",
          content:
            "Prima di toccare qualsiasi impostazione di migrazione, e necessario avere uno snapshot completo delle performance SEO attuali. Questa baseline diventa il punto di riferimento per misurare il successo della migrazione. Inizia esportando un crawl completo del sito esistente utilizzando strumenti come Screaming Frog, Sitebulb o Lumar. Cattura ogni URL, il suo codice di stato HTTP, tag canonico, meta title, meta description, tag H1, conteggio parole e conteggio link interni.\n\nDocumenta il tuo stato di indicizzazione attuale scaricando l'elenco completo delle pagine indicizzate da Google Search Console. Confrontalo con i dati di crawl per identificare pagine indicizzate ma non nella sitemap, e pagine nella sitemap che non sono indicizzate.\n\nRegistra le pagine con le migliori performance per traffico organico, fatturato e posizionamento delle keyword. Queste sono le pagine dove qualsiasi interruzione avra l'impatto aziendale piu significativo. Esporta il report delle landing page di Google Analytics filtrato per traffico organico degli ultimi 12 mesi.\n\nCattura l'implementazione attuale dei dati strutturati, incluse le pagine con schema Product, markup breadcrumb, schema FAQ e altri tipi di risultati arricchiti. Documenta anche le regole del robots.txt, la struttura della sitemap XML, l'implementazione hreflang e qualsiasi pattern personalizzato di tag canonici. Approfondisci con la nostra guida sull'[audit SEO](/seo-audit).",
          items: [
            "Esportare un crawl completo del sito catturando URL, codici di stato, canonici, meta tag e conteggi link",
            "Scaricare l'elenco completo delle pagine indicizzate da Google Search Console",
            "Registrare le top 100 landing page per traffico organico e le loro keyword obiettivo",
            "Documentare tutti i tipi di dati strutturati attualmente implementati sul sito",
            "Catturare le regole del robots.txt, la struttura della sitemap e le annotazioni hreflang",
          ],
          tip: "Crea un foglio di calcolo condiviso che serva come documento di controllo della migrazione. Includi schede per il mapping degli URL, le regole di redirect, le metriche pre-migrazione e i checkpoint post-migrazione. Questo documento diventa la fonte unica di verita per tutti i coinvolti.",
        },
        {
          title: "Mapping degli URL e strategia di redirect",
          content:
            "Il mapping degli URL e il compito SEO piu critico durante una migrazione di piattaforma. Ogni URL del sito attuale che riceve traffico organico, ha backlink o e indicizzato da Google deve essere mappato al suo URL equivalente sulla nuova piattaforma. Perdere anche solo pochi URL ad alto traffico puo comportare perdite significative di ranking e fatturato.\n\nInizia con un mapping uno a uno per tutte le pagine prodotto, pagine di categoria, pagine di contenuto e articoli del blog. Esporta l'elenco URL attuale dai dati di crawl e crea un foglio di mapping con colonne per vecchio URL, nuovo URL, tipo di pagina, sessioni organiche mensili e numero di domini referenti. Dai priorita al mapping per valore di traffico.\n\nPer gli URL senza equivalente diretto sulla nuova piattaforma, decidi se reindirizzarli alla pagina rilevante piu vicina o lasciarli restituire uno stato 404. Le pagine con profili di backlink significativi devono sempre essere reindirizzate per preservare l'equita dei link. Reindirizzale alla pagina esistente piu rilevante tematicamente.\n\nImplementa tutti i redirect come redirect 301 permanenti, non redirect 302 temporanei. Testa la tua mappa di redirect in un ambiente di staging prima di lanciare il nuovo sito. Usa uno strumento di crawling per seguire ogni redirect e verificare che l'URL di destinazione restituisca un codice 200 e non crei catene di redirect.\n\nPer siti con migliaia di URL, la maggior parte delle piattaforme e-commerce supporta importazioni CSV di redirect in blocco. Prepara il file di redirect nel formato richiesto ben prima della data di migrazione.",
          items: [
            "Creare un mapping uno a uno per ogni pagina indicizzata con traffico organico o backlink",
            "Dare priorita al mapping URL per volume di traffico organico e conteggio backlink",
            "Reindirizzare URL orfani alla pagina piu rilevante tematicamente, non alla homepage",
            "Usare esclusivamente redirect 301 permanenti ed eliminare qualsiasi catena di redirect",
            "Testare la mappa di redirect completa su staging con un crawler prima del go-live",
          ],
        },
        {
          title: "Preservare i ranking durante la migrazione",
          content:
            "Preservare i ranking richiede piu della semplice implementazione dei redirect. Google valuta l'intera esperienza della pagina, quindi le nuove pagine devono eguagliare o superare la qualita SEO delle originali. I tag title, le meta description, le strutture dei titoli e i contenuti on-page devono essere migrati il piu fedelmente possibile. Modificare i titoli di pagina durante una migrazione e una delle cause piu comuni di cali di ranking.\n\nL'architettura dei link interni e altrettanto critica. La nuova piattaforma deve replicare la struttura di link interni del vecchio sito, inclusi menu di navigazione, percorsi breadcrumb, widget di cross-sell e link nel footer. Se la nuova piattaforma cambia il modo in cui le pagine di categoria collegano ai prodotti, il flusso di autorita cambia, influenzando direttamente i ranking. Approfondisci con la nostra guida sui [tag canonical per l'ecommerce](/academy/canonical-tags-for-ecommerce).\n\nI dati strutturati devono essere implementati sulla nuova piattaforma prima del lancio. Se il vecchio sito aveva schema Product con recensioni, prezzi e disponibilita, il nuovo sito deve avere dati strutturati identici o migliori. La mancanza di dati strutturati dopo la migrazione fa scomparire i risultati arricchiti dalle SERP.\n\nLe performance di velocita sulla nuova piattaforma devono essere testate ampiamente prima del lancio. Se il nuovo sito e piu lento del vecchio, aspettati cali di ranking. Esegui audit Lighthouse sui template di pagine chiave.\n\nInvia la sitemap XML aggiornata a Google Search Console immediatamente dopo il lancio.",
          items: [
            "Migrare tag title, meta description e titoli H1 esattamente come erano sul vecchio sito",
            "Replicare la struttura di link interni inclusi navigazione, breadcrumb e cross-link",
            "Implementare tutti i tipi di dati strutturati sulla nuova piattaforma prima del giorno del lancio",
            "Confrontare i punteggi di performance Lighthouse tra vecchio e nuovo sito prima del go-live",
          ],
          tip: "Evita di effettuare modifiche ai contenuti, restyling del design e migrazioni di piattaforma simultaneamente. Ogni cambiamento introduce rischio per i ranking, e combinarli rende impossibile diagnosticare cosa ha causato eventuali cali di traffico.",
        },
        {
          title: "Monitoraggio post-migrazione e recupero",
          content:
            "Le prime 72 ore dopo una migrazione di piattaforma sono critiche per identificare e risolvere problemi prima che si aggravino. Configura una dashboard di monitoraggio che tracci il conteggio delle pagine indicizzate, le sessioni organiche, gli errori di crawl e la posizione media per le tue top 50 keyword. Controlla queste metriche ogni poche ore il giorno del lancio e quotidianamente per le prime due settimane.\n\nGoogle Search Console e il tuo strumento di monitoraggio principale. Osserva il report di Copertura per picchi nelle pagine escluse, errori di redirect o errori del server. Usa lo strumento di Ispezione URL per richiedere manualmente l'indicizzazione delle tue pagine piu importanti. Invia la nuova sitemap e monitora il suo stato di elaborazione. Approfondisci con la nostra guida sulla [gestione del budget di crawl](/academy/crawl-budget-management).\n\nCali di traffico dal 10 al 20 percento sono normali nella prima settimana dopo la migrazione mentre Google ricrawla e reindicizza le tue pagine. Se il calo supera il 30 percento o persiste oltre due settimane, indaga immediatamente. I problemi post-migrazione comuni includono redirect rotti, tag canonici che puntano a vecchi URL e dati strutturati mancanti.\n\nMonitora il report delle landing page di Google Analytics filtrato per traffico organico. Confronta le top 50 landing page del mese precedente la migrazione con i dati attuali.\n\nConfigura Bing Webmaster Tools oltre a Google Search Console. Bing spesso ricrawla piu lentamente di Google, e monitorare entrambi i motori di ricerca ti offre un quadro piu completo.",
          items: [
            "Monitorare conteggio pagine indicizzate, sessioni organiche ed errori di crawl ogni poche ore il giorno del lancio",
            "Usare Ispezione URL in Search Console per richiedere l'indicizzazione delle pagine prioritarie",
            "Confrontare le top 50 landing page prima e dopo la migrazione per identificare i cali",
            "Verificare che i backlink esterni seguano i redirect ai nuovi URL corretti",
            "Monitorare sia Google Search Console che Bing Webmaster Tools per una copertura completa",
          ],
        },
        {
          title: "Errori di migrazione comuni da evitare",
          content:
            "L'errore di migrazione piu frequente e il mapping incompleto degli URL. I team spesso si concentrano sulle pagine prodotto e categoria ma dimenticano di mappare articoli del blog, pagine informative, URL delle immagini, documenti PDF e pagine di collezione paginate. Ogni URL che Google ha indicizzato o che ha backlink esterni necessita di un redirect.\n\nUn altro errore critico e lanciare la migrazione durante un periodo di picco di traffico. Non migrare mai durante la stagione del Black Friday, grandi eventi di vendita o qualsiasi periodo che rappresenta una quota sproporzionata del fatturato annuale. Programma le migrazioni per i mesi di minor traffico.\n\nNon preservare i parametri URL utilizzati dalle campagne di marketing e un errore sottile ma costoso. Se la vecchia piattaforma utilizzava parametri come ?utm_source o ?ref per il tracciamento delle campagne, assicurati che la nuova piattaforma li gestisca correttamente.\n\nMolte migrazioni falliscono perche l'ambiente di staging non replica accuratamente la configurazione di produzione. Testa redirect, tag canonici, dati strutturati e velocita della pagina su un server di staging che rispecchi la configurazione di produzione.\n\nInfine, non rimuovere le regole di redirect del vecchio sito dopo la migrazione. I redirect devono rimanere in vigore permanentemente perche link esterni, segnalibri e risultati di ricerca in cache continueranno a riferire vecchi URL per mesi o anni.",
          items: [
            "Mappare ogni URL indicizzato inclusi articoli del blog, immagini, PDF e pagine paginate",
            "Programmare le migrazioni durante periodi di basso traffico, mai durante le stagioni di punta delle vendite",
            "Preservare i parametri URL utilizzati dalle campagne di marketing attraverso il processo di redirect",
            "Testare la migrazione completa in un ambiente di staging che rispecchi la produzione",
            "Mantenere tutte le regole di redirect in vigore permanentemente dopo la migrazione",
          ],
          tip: "Crea un piano di rollback prima di iniziare la migrazione. Documenta i passaggi esatti necessari per tornare alla vecchia piattaforma se il nuovo sito presenta problemi critici al lancio.",
        },
        {
          title: "Pianificazione della timeline e strategia di rollback",
          content:
            "Una timeline di migrazione ben strutturata previene decisioni affrettate e assicura che ogni elemento SEO venga affrontato. Inizia il processo di pianificazione almeno otto settimane prima della data di lancio obiettivo. Le prime due settimane devono concentrarsi sull'audit pre-migrazione, il mapping degli URL e la preparazione dei file di redirect. Le settimane tre e quattro servono per implementare i redirect su staging, testare i dati strutturati e verificare la parita dei meta tag.\n\nLe settimane cinque e sei devono essere dedicate a crawl completi di staging, test delle performance e correzione dei problemi scoperti. Esegui un crawl completo con Screaming Frog del sito di staging e confrontalo con la tua baseline pre-migrazione.\n\nLa settimana sette e per la revisione finale e l'approvazione degli stakeholder. Presenta il piano di migrazione a tutti gli stakeholder. Condividi la timeline prevista per il recupero del traffico e stabilisci aspettative realistiche. La maggior parte delle migrazioni ben eseguite vede un recupero del traffico entro quattro-sei settimane.\n\nLa strategia di rollback deve definire condizioni trigger specifiche che avviano un ritorno alla vecchia piattaforma. I trigger comuni includono un calo di traffico superiore al 50 percento per piu di 48 ore, guasti funzionali critici o fallimenti diffusi dei redirect. Documenta i passaggi tecnici per il rollback e testa la procedura almeno una volta prima della data di migrazione.\n\nIl giorno del lancio, esegui la migrazione durante le ore di basso traffico con il team completo disponibile per il monitoraggio. Assegna membri specifici del team al monitoraggio di Search Console, salute del crawl e tassi di conversione.",
          items: [
            "Iniziare la pianificazione della migrazione almeno otto settimane prima della data di lancio obiettivo",
            "Dedicare le settimane uno e due all'audit, al mapping URL e alla preparazione dei redirect",
            "Eseguire crawl completi di staging nelle settimane cinque e sei per individuare problemi prima del lancio",
            "Definire condizioni trigger specifiche per avviare un rollback alla vecchia piattaforma",
            "Eseguire la migrazione durante le ore di basso traffico con il team completo disponibile per il monitoraggio",
          ],
          tip: "Dopo la stabilizzazione della migrazione, documenta tutto cio che ha funzionato bene e ogni problema incontrato. Questo playbook di migrazione diventa inestimabile per futuri cambiamenti di piattaforma.",
        },
      ],
      navLabels: { previous: "Precedente", next: "Successivo" },
    },
    nl: {
      badge: "Platform-SEO",
      heading: "SEO bij platformmigratie",
      intro:
        "Het migreren van een e-commercewinkel naar een nieuw platform is een van de meest risicovolle SEO-gebeurtenissen die een bedrijf kan ondernemen. URL-structuren veranderen, interne linkpatronen verschuiven en technische implementaties verschillen per platform. Zonder een rigoureus migratieplan verliezen winkels regelmatig 30 tot 60 procent van het organisch verkeer, waarvan het herstel maanden of jaren kan duren. Deze gids behandelt het volledige migratieproces, van de pre-migratie-audit tot de monitoring na de lancering.\n\nOnze gids over [ecommerce-SEO-migratie](/blog/ecommerce-seo-migration) behandelt het migratieproces uitgebreid.",
      readTime: "10 min leestijd",
      sections: [
        {
          title: "Checklist voor pre-migratie SEO-audit",
          content:
            "Voordat je migratie-instellingen aanraakt, heb je een uitgebreide momentopname van je huidige SEO-prestaties nodig. Deze baseline wordt je referentiepunt voor het meten van het migratiesucces. Begin met het exporteren van een volledige crawl van je bestaande site met tools zoals Screaming Frog, Sitebulb of Lumar. Leg elke URL vast, inclusief HTTP-statuscode, canonical tag, meta title, meta description, H1-tag, woordaantal en intern linkantal.\n\nDocumenteer je huidige indexatiestatus door de volledige lijst van geindexeerde pagina's uit Google Search Console te downloaden. Vergelijk deze met je crawldata om pagina's te identificeren die geindexeerd zijn maar niet in je sitemap staan, en pagina's in je sitemap die niet geindexeerd zijn.\n\nRegistreer je best presterende pagina's op organisch verkeer, omzet en keyword-rankings. Dit zijn de pagina's waar elke verstoring de grootste zakelijke impact heeft. Exporteer je Google Analytics-landingspaginarapport gefilterd op organisch verkeer van de afgelopen 12 maanden.\n\nLeg je huidige implementatie van gestructureerde data vast, inclusief welke pagina's Product-schema, breadcrumb-markup, FAQ-schema en andere rich result-types hebben. Documenteer ook je robots.txt-regels, XML-sitemapstructuur, hreflang-implementatie en eventuele aangepaste canonical tag-patronen.\n\nBekijk onze [SEO-audit](/seo-audit)-diensten voor professionele ondersteuning.",
          items: [
            "Een volledige sitecrawl exporteren met URL's, statuscodes, canonicals, metatags en linkaantallen",
            "De volledige lijst van geindexeerde pagina's uit Google Search Console downloaden",
            "De top 100 landingspagina's op organisch verkeer en hun doel-keywords registreren",
            "Alle geimplementeerde gestructureerde datatypen op de hele site documenteren",
            "Robots.txt-regels, sitemapstructuur en hreflang-annotaties vastleggen",
          ],
          tip: "Maak een gedeeld spreadsheet dat dient als je migratiecontroledocument. Voeg tabbladen toe voor URL-mapping, redirectregels, pre-migratiemetrieken en post-migratiecheckpoints. Dit document wordt de enige bron van waarheid voor iedereen die betrokken is bij de migratie.",
        },
        {
          title: "URL-mapping en redirectstrategie",
          content:
            "URL-mapping is de meest kritieke SEO-taak tijdens een platformmigratie. Elke URL op je huidige site die organisch verkeer ontvangt, backlinks heeft of door Google geindexeerd is, moet worden gemapped naar de equivalente URL op het nieuwe platform. Zelfs het missen van een handvol URL's met veel verkeer kan leiden tot aanzienlijke ranking- en omzetverliezen.\n\nBegin met een een-op-een URL-mapping voor alle productpagina's, categoriepagina's, contentpagina's en blogberichten. Exporteer je huidige URL-lijst uit de crawldata en maak een mappingspreadsheet met kolommen voor de oude URL, nieuwe URL, paginatype, maandelijkse organische sessies en aantal verwijzende domeinen. Prioriteer de mapping op verkeerswaarde.\n\nVoor URL's zonder direct equivalent op het nieuwe platform, beslis of je ze doorverwijst naar de dichtstbijzijnde relevante pagina of een 404-status laat retourneren. Pagina's met significante backlinkprofielen moeten altijd worden doorverwezen om linkequity te behouden.\n\nImplementeer alle redirects als 301 permanente redirects, niet als 302 tijdelijke redirects. Test je redirectmap op een staging-omgeving voordat je de nieuwe site lanceert. Gebruik een crawlingtool om elke redirect te volgen en te verifieren dat de bestemmings-URL een 200-statuscode retourneert en geen redirectketens creert.\n\nVoor sites met duizenden URL's ondersteunen de meeste e-commerceplatformen CSV-gebaseerde bulk redirect-imports. Bereid je redirectbestand ruim voor de migratiedatum voor in het vereiste formaat.",
          items: [
            "Een een-op-een URL-mapping maken voor elke geindexeerde pagina met organisch verkeer of backlinks",
            "URL-mapping prioriteren op volume organisch verkeer en aantal backlinks",
            "Verweesde URL's doorverwijzen naar de meest thematisch relevante pagina, niet naar de homepage",
            "Uitsluitend 301 permanente redirects gebruiken en eventuele redirectketens elimineren",
            "De volledige redirectmap op staging testen met een crawler voor de go-live",
          ],
        },
        {
          title: "Rankings behouden tijdens migratie",
          content:
            "Het behouden van rankings vereist meer dan alleen het implementeren van redirects. Google evalueert de volledige pagina-ervaring, dus de nieuwe pagina's moeten de SEO-kwaliteit van de originelen evenaren of overtreffen. Title tags, metabeschrijvingen, kopstructuren en on-page content moeten zo getrouw mogelijk worden gemigreerd. Het wijzigen van paginatitels tijdens een migratie is een van de meest voorkomende oorzaken van rankingdalingen.\n\nDe interne linkarchitectuur is even cruciaal. Het nieuwe platform moet de interne linkstructuur van de oude site repliceren, inclusief navigatiemenu's, breadcrumbpaden, cross-sell widgets en footerlinks. Als het nieuwe platform verandert hoe categoriepagina's naar producten linken, verandert de autoriteitsstroom, wat direct de rankings beinvloedt.\n\nGestructureerde data moet op het nieuwe platform worden geimplementeerd voor de lancering. Als je oude site Product-schema had met reviews, prijzen en beschikbaarheid, moet de nieuwe site identieke of betere gestructureerde data hebben. Ontbrekende gestructureerde data na migratie zorgt ervoor dat rich results uit de SERP's verdwijnen.\n\nDe snelheidsprestaties op het nieuwe platform moeten uitgebreid worden getest voor de lancering. Als de nieuwe site langzamer is dan de oude, verwacht dan rankingdalingen. Voer Lighthouse-audits uit op belangrijke paginatemplates.\n\nDien de bijgewerkte XML-sitemap onmiddellijk na de lancering in bij Google Search Console.\n\nLees meer over [canonical tags voor ecommerce](/academy/canonical-tags-for-ecommerce) in ons gedetailleerde onderwerp.",
          items: [
            "Title tags, metabeschrijvingen en H1-koppen exact migreren zoals ze op de oude site waren",
            "De interne linkstructuur repliceren inclusief navigatie, breadcrumbs en kruislinks",
            "Alle gestructureerde datatypen op het nieuwe platform implementeren voor de lanceerdag",
            "Lighthouse-prestatiescores vergelijken tussen de oude en nieuwe site voor de go-live",
          ],
          tip: "Vermijd het gelijktijdig doorvoeren van contentwijzigingen, design-herontwerpen en platformmigraties. Elke wijziging introduceert rankingrisico, en ze combineren maakt het onmogelijk om te diagnosticeren wat eventuele verkeersdalingen heeft veroorzaakt.",
        },
        {
          title: "Post-migratiemonitoring en herstel",
          content:
            "De eerste 72 uur na een platformmigratie zijn cruciaal voor het identificeren en oplossen van problemen voordat ze zich opstapelen. Stel een monitoringdashboard in dat het aantal geindexeerde pagina's, organische sessies, crawlfouten en gemiddelde positie voor je top 50 keywords bijhoudt. Controleer deze metrieken om de paar uur op de lanceerdag en dagelijks gedurende de eerste twee weken.\n\nGoogle Search Console is je primaire monitoringtool. Let op het Dekkingsrapport voor pieken in uitgesloten pagina's, redirectfouten of serverfouten. Gebruik de URL-inspectietool om handmatig indexatie van je belangrijkste pagina's aan te vragen. Dien de nieuwe sitemap in en monitor de verwerkingsstatus.\n\nVerkeersdalingen van 10 tot 20 procent zijn normaal in de eerste week na migratie terwijl Google je pagina's opnieuw crawlt en indexeert. Als de daling meer dan 30 procent bedraagt of langer dan twee weken aanhoudt, onderzoek dan onmiddellijk. Veelvoorkomende post-migratieproblemen zijn kapotte redirects, canonical tags die naar oude URL's verwijzen en ontbrekende gestructureerde data.\n\nMonitor je Google Analytics-landingspaginarapport gefilterd op organisch verkeer. Vergelijk de top 50 landingspagina's van de maand voor de migratie met de huidige data.\n\nStel Bing Webmaster Tools in naast Google Search Console. Bing hercrawlt vaak langzamer dan Google, en het monitoren van beide zoekmachines geeft je een completer beeld.\n\nEffectief [crawlbudgetbeheer](/academy/crawl-budget-management) helpt je de aandacht van Google te richten op je meest waardevolle pagina's.",
          items: [
            "Aantal geindexeerde pagina's, organische sessies en crawlfouten om de paar uur monitoren op de lanceerdag",
            "URL-inspectie in Search Console gebruiken om indexatie van prioriteitspagina's aan te vragen",
            "Top 50 landingspagina's voor en na migratie vergelijken om dalingen te identificeren",
            "Controleren dat externe backlinks de redirects naar de juiste nieuwe URL's volgen",
            "Zowel Google Search Console als Bing Webmaster Tools monitoren voor volledige dekking",
          ],
        },
        {
          title: "Veelvoorkomende migratiefouten vermijden",
          content:
            "De meest frequente migratiefout is onvolledig URL-mapping. Teams richten zich vaak op product- en categoriepagina's maar vergeten blogberichten, informatieve pagina's, afbeeldings-URL's, PDF-documenten en gepagineerde collectiepagina's te mappen. Elke URL die Google heeft geindexeerd of die externe backlinks heeft, heeft een redirect nodig.\n\nEen andere kritieke fout is het lanceren van de migratie tijdens een piekverkeersperiode. Migreer nooit tijdens het Black Friday-seizoen, grote verkoopevementen of periodes die een onevenredig deel van de jaaromzet vertegenwoordigen. Plan migraties voor je maanden met het laagste verkeer.\n\nHet niet behouden van URL-parameters die door marketingcampagnes worden gebruikt, is een subtiele maar kostbare fout. Als je oude platform parameters zoals ?utm_source of ?ref gebruikte voor campagnetracking, zorg ervoor dat het nieuwe platform deze correct afhandelt.\n\nVeel migraties mislukken omdat de staging-omgeving de productieconfiguratie niet nauwkeurig repliceert. Test redirects, canonical tags, gestructureerde data en paginasnelheid op een stagingserver die de productieconfiguratie weerspiegelt.\n\nVerwijder ten slotte nooit de redirectregels van de oude site na migratie. Redirects moeten permanent blijven bestaan omdat externe links, bladwijzers en gecachte zoekresultaten nog maanden of jaren oude URL's zullen refereren.",
          items: [
            "Elke geindexeerde URL mappen inclusief blogberichten, afbeeldingen, PDF's en gepagineerde pagina's",
            "Migraties plannen tijdens periodes met weinig verkeer, nooit tijdens piekverkoopseizoenen",
            "URL-parameters die door marketingcampagnes worden gebruikt behouden door het redirectproces",
            "De volledige migratie testen op een staging-omgeving die de productie weerspiegelt",
            "Alle redirectregels permanent behouden na de migratie",
          ],
          tip: "Maak een rollbackplan voordat je de migratie start. Documenteer de exacte stappen die nodig zijn om terug te keren naar het oude platform als de nieuwe site kritieke problemen heeft bij de lancering.",
        },
        {
          title: "Tijdlijnplanning en rollbackstrategie",
          content:
            "Een goed gestructureerde migratietijdlijn voorkomt overhaaste beslissingen en zorgt ervoor dat elk SEO-element wordt behandeld. Begin het planningsproces minstens acht weken voor de beoogde lanceerdatum. De eerste twee weken moeten zich richten op de pre-migratie-audit, URL-mapping en voorbereiding van redirectbestanden. Weken drie en vier zijn voor het implementeren van redirects op staging, het testen van gestructureerde data en het verifieren van meta tag-pariteit.\n\nWeken vijf en zes moeten worden gewijd aan volledige staging-crawls, prestatietests en het oplossen van ontdekte problemen. Voer een volledige Screaming Frog-crawl uit van de staging-site en vergelijk deze met je pre-migratiebaseline.\n\nWeek zeven is voor de definitieve review en goedkeuring door stakeholders. Presenteer het migratieplan aan alle stakeholders. Deel de verwachte tijdlijn voor verkersherstel en stel realistische verwachtingen. De meeste goed uitgevoerde migraties zien verkersherstel binnen vier tot zes weken.\n\nDe rollbackstrategie moet specifieke triggervoorwaarden definieren die een terugkeer naar het oude platform inleiden. Veelvoorkomende triggers zijn een verkeersdaling van meer dan 50 procent gedurende meer dan 48 uur, kritieke functionaliteitsstoringen of wijdverspreide redirectfouten. Documenteer de technische stappen voor rollback en test de procedure minstens een keer voor de migratiedatum.\n\nVoer op de lanceerdag de migratie uit tijdens uren met weinig verkeer met het volledige team beschikbaar voor monitoring. Wijs specifieke teamleden toe om Google Search Console, crawlgezondheid en conversieratio's te monitoren.",
          items: [
            "De migratieplanning minstens acht weken voor de beoogde lanceerdatum beginnen",
            "Weken een en twee besteden aan auditing, URL-mapping en redirectvoorbereiding",
            "Volledige staging-crawls uitvoeren in weken vijf en zes om problemen voor de lancering te detecteren",
            "Specifieke triggervoorwaarden definieren voor het initiieren van een rollback naar het oude platform",
            "De migratie uitvoeren tijdens uren met weinig verkeer met het volledige team beschikbaar voor monitoring",
          ],
          tip: "Documenteer na de stabilisatie van de migratie alles wat goed ging en elk probleem dat je tegenkwam. Dit migratieplaybook wordt onschatbaar waardevol bij toekomstige platformwijzigingen.",
        },
      ],
      navLabels: { previous: "Vorige", next: "Volgende" },
    },
  },
};
