import type { AcademyTopic } from "../../types";

export const logFileAnalysis: AcademyTopic = {
  slug: "log-file-analysis",
  cluster: 9,
  resources: [{"label":"Screaming Frog Log File Analyser","url":"https://www.screamingfrog.co.uk/log-file-analyser/","type":"tool"},{"label":"Google Crawl Stats Report","url":"https://support.google.com/webmasters/answer/9679690","type":"docs"},{"label":"GoAccess (Free Log Analyzer)","url":"https://goaccess.io/","type":"tool"}],
  content: {
    en: {
      badge: "Advanced SEO",
      heading: "Log File Analysis",
      intro:
        "Server log files are the only source of truth about how search engine crawlers actually interact with your ecommerce site. While tools like Google Search Console provide aggregated summaries, raw log data reveals exactly which URLs Googlebot requests, how often it returns, which pages it ignores entirely, and where your [crawl budget](/academy/crawl-budget-management) is being wasted. For large ecommerce catalogs, log file analysis is the difference between guessing at crawl issues and diagnosing them with precision.",
      readTime: "12 min read",
      sections: [
        {
          title: "Understanding Server Log Data for SEO",
          content:
            "Every time a search engine bot requests a page from your server, the web server records a log entry containing the IP address, user agent string, requested URL, HTTP response code, response size, timestamp, and referrer. For SEO purposes, the critical fields are the user agent (identifying whether the request came from Googlebot, Bingbot, or another crawler), the requested URL, the status code returned, and the timestamp.\n\nGooglebot identifies itself through several user agent strings that distinguish between desktop rendering, mobile rendering, image crawling, AdsBot, and other specialized crawlers. Filtering logs to only Googlebot requests requires matching against all known Googlebot user agent patterns. Verify Googlebot identity by cross-referencing IP addresses against Google's published ASN ranges to filter out fake bots that impersonate Googlebot's user agent.\n\nLog files are typically stored in Common Log Format (CLF) or Combined Log Format, which adds the referrer and user agent fields. Most modern web servers like Nginx and Apache support both formats. If your ecommerce platform runs behind a CDN like Cloudflare or Fastly, you may need to configure the CDN to pass real client IP addresses through headers like X-Forwarded-For, or use the CDN's own log export features.\n\nFor ecommerce stores with significant traffic volume, raw log files can grow to gigabytes per day. Efficient analysis requires either specialized log analysis tools like Screaming Frog Log Analyzer, Botify, or JetOctopus, or a data pipeline that ingests logs into a queryable database like BigQuery, Elasticsearch, or ClickHouse for custom analysis.",
          items: [
            "Filter logs by verified Googlebot user agents and IP ranges to exclude fake bots",
            "Capture user agent, URL, status code, timestamp, and response size as minimum fields",
            "Configure CDN log forwarding to ensure bot requests are captured at the origin server",
            "Use specialized log analysis tools or data pipelines for stores with high-volume log data",
          ],
          tip: "Set up a separate log stream dedicated to bot traffic that filters out human visitors at the server level. This dramatically reduces the data volume you need to process and makes Googlebot behavior analysis faster and more focused.",
        },
        {
          title: "Crawl Budget Analysis for Product Catalogs",
          content:
            "Crawl budget is the number of pages Google will crawl on your site within a given time period. For small sites, crawl budget is rarely a concern. But ecommerce stores with tens of thousands of product pages, multiple category hierarchies, faceted navigation parameters, and paginated listings can easily exhaust their crawl budget on low-value URLs while important product pages go unvisited.\n\nLog file analysis reveals your actual crawl budget allocation. Calculate the total number of Googlebot requests per day, then segment those requests by URL pattern. Common patterns to analyze include product detail pages (/product/), category pages (/category/), search result pages (/search?), faceted navigation URLs (URLs with filter parameters), paginated pages (?page=), static assets (CSS, JS, images), and administrative or utility pages (cart, login, account).\n\nThe ratio of crawl allocation should roughly match your indexation priorities. If 60% of Googlebot's requests target faceted navigation URLs that produce thin, duplicate content while only 15% reach your canonical product pages, you have a severe crawl budget problem. Redirect that wasted crawl activity by blocking parameter-heavy URLs in robots.txt, implementing proper canonical tags, and using the noindex meta tag on low-value pages.\n\nCalculate the crawl frequency for your most important pages. If flagship product pages are only crawled once every 30 days while out-of-stock products receive daily visits, your internal linking structure or XML sitemap is sending the wrong signals. High-value pages should receive disproportionately more crawl attention, and log files are the only way to verify whether that is actually happening.\n\nTrack crawl budget trends over time. A declining crawl rate often signals deteriorating site health: increasing server errors, growing duplicate content, or expanding URL parameter space. Conversely, improving crawl rates after technical fixes confirm that your optimizations are working.",
          items: [
            "Segment Googlebot requests by URL pattern to identify where crawl budget is spent",
            "Compare crawl allocation ratios against indexation priority for each URL type",
            "Block low-value URL patterns that consume crawl budget without indexation benefit",
            "Track crawl frequency for high-priority product pages to ensure adequate coverage",
          ],
          image: {
            src: "/images/academy/crawl-budget-allocation-chart.svg",
            alt: "Bar chart showing crawl budget allocation with 60 percent wasted on faceted navigation URLs while only 15 percent reaches product pages",
            caption: "If 60% of Googlebot requests target faceted navigation while only 15% reach product pages, you have a severe crawl budget problem that needs immediate correction.",
          },
          callout: {
            title: "Budget Reallocation",
            text: "Segment Googlebot requests by URL pattern to identify where budget is spent. Block low-value filter combinations in robots.txt and use canonical tags to redirect crawl attention to indexable product pages.",
          },
        },
        {
          title: "Identifying Crawl Waste and Orphan Pages",
          content:
            "Crawl waste occurs when Googlebot spends time and resources requesting URLs that provide no SEO value. In ecommerce stores, common sources of crawl waste include session ID parameters appended to URLs, internal search result pages with query strings, sorting and filtering parameter combinations, cart and checkout pages, login and account management pages, and tracking redirect URLs.\n\nLog file analysis quantifies exactly how much crawl budget each waste category consumes. Cross-reference your log data with your intended index by comparing the URLs Googlebot requests against your XML sitemap and your Google Search Console index coverage report. URLs that Googlebot crawls but that are not in your sitemap or desired index represent pure crawl waste.\n\nOrphan pages are the opposite problem: pages that exist and should be indexed but never receive a single Googlebot request. To find orphan pages, compare the complete list of product URLs from your database or CMS against the URLs that appear in your log files over a 90-day period. Products that exist in your catalog but have never been requested by Googlebot are effectively invisible to search engines regardless of their content quality.\n\nOrphan pages in ecommerce typically arise from broken internal linking, deep pagination that Googlebot does not reach, products only accessible through on-site search, recently added products not yet linked from category pages, or discontinued product pages removed from navigation but not properly redirected. Each cause requires a different fix, but the common thread is that log file analysis is the only reliable method to discover them.\n\nCreate a systematic crawl health dashboard that tracks the ratio of productive crawls (requests to indexable pages that return 200 status codes) versus wasteful crawls (requests to blocked, redirected, erroring, or low-value pages). A healthy ecommerce site should aim for at least 70-80% productive crawl ratio.",
          items: [
            "Quantify crawl waste by categorizing Googlebot requests to non-indexable URL patterns",
            "Find orphan pages by comparing your product database against 90-day log crawl data",
            "Fix orphan page causes: broken links, deep pagination, missing sitemap entries",
            "Track productive crawl ratio targeting 70-80% of Googlebot requests hitting indexable pages",
          ],
          tip: "Export your orphan page list and cross-reference it with Google Analytics or your ecommerce platform\'s sales data. Orphan pages with proven conversion history represent immediate revenue recovery opportunities once they regain search visibility through proper internal linking.",
          image: {
            src: "/images/academy/crawl-waste-orphan-pages.svg",
            alt: "Comparison diagram showing crawl waste from session IDs and filters versus orphan pages from broken links and deep pagination",
            caption: "Compare your product database against 90-day log crawl data to find orphan pages. A healthy ecommerce site should target a 70-80% productive crawl ratio.",
          },
          callout: {
            title: "Revenue at Risk",
            text: "Orphan pages with proven conversion history represent immediate revenue recovery opportunities. Cross-reference orphan URLs with sales data to prioritize which pages to reconnect through internal linking.",
          },
        },
        {
          title: "Status Code Analysis and Error Detection",
          content:
            "HTTP status codes in log files reveal the health of your URL structure from Google's perspective. Every Googlebot request that returns a non-200 status code represents a missed indexing opportunity, wasted crawl budget, or a signal of site health problems that can depress your overall crawl rate.\n\n301 and 302 redirect chains are common in ecommerce stores that frequently change URL structures, rename categories, or migrate platforms. Log analysis reveals how many Googlebot requests hit redirect chains and how deep those chains go. Each redirect hop adds latency and risks losing link equity. Identify URLs where Googlebot encounters more than one redirect hop and flatten those chains to point directly to the final destination.\n\n404 errors from Googlebot indicate URLs that were once valid but now return not-found responses. In ecommerce, this typically happens when products are discontinued, categories are reorganized, or URL slugs are changed without implementing redirects. A spike in Googlebot 404 requests signals a technical problem that needs investigation. High-volume 404 patterns often indicate a broken sitemap, a removed category page that still has internal links pointing to it, or an external site linking to product pages you have removed.\n\n5xx server errors are the most damaging status codes for SEO and represent a core [technical SEO](/blog/technical-seo-for-ecommerce) concern. They tell Googlebot your server is failing to respond, which triggers crawl rate reduction as Google throttles requests to protect your server. Log analysis can reveal whether 5xx errors correlate with specific URL patterns, time periods, or traffic spikes. Common ecommerce causes include database timeout on complex product queries, memory exhaustion during peak traffic, and application errors triggered by specific product variants or filter combinations.\n\nSoft 404 pages, where the server returns a 200 status code but the page content indicates the product is unavailable, are harder to detect in logs alone. Combine log analysis with crawl data to identify pages that return 200 but display out-of-stock messages, empty search results, or placeholder content.",
          items: [
            "Flatten redirect chains where Googlebot encounters more than one hop to the final URL",
            "Investigate 404 spikes correlating with sitemap changes, category restructuring, or product removal",
            "Monitor 5xx error patterns by URL type and time of day to identify server capacity issues",
            "Combine log data with crawl analysis to detect soft 404 pages returning 200 status codes",
          ],
        },
        {
          title: "Crawl Pattern and Timing Analysis",
          content:
            "Analyzing when Googlebot crawls your site reveals patterns that inform server capacity planning, content freshness strategies, and sitemap optimization. Plot Googlebot requests over time to identify crawl peaks and troughs across hours of the day, days of the week, and longer seasonal patterns.\n\nMost ecommerce sites see Googlebot activity distributed throughout the day but often with higher intensity during off-peak hours when server response times are fastest. If your server slows down during peak shopping hours and Googlebot shifts its crawling to overnight windows, you may be losing crawl coverage for time-sensitive content like flash sales or limited-stock products that are published during business hours.\n\nAfter submitting an updated XML sitemap through Search Console, monitor log files to measure how quickly Googlebot begins requesting the new or updated URLs. The lag between sitemap submission and actual crawl provides insight into Google's prioritization of your domain. A healthy site with strong authority typically sees sitemap-triggered crawls within hours, while lower-authority domains may wait days.\n\nTrack the crawl depth Googlebot reaches through your site's hierarchy. Analyze the URL path depth of crawled pages to determine whether Googlebot reaches your deepest product pages or stops at upper-level categories. If Googlebot consistently fails to reach pages more than 4-5 clicks deep from the homepage, you need to flatten your site architecture or add direct internal links from authority pages to deep products.\n\nCompare crawl patterns before and after major site changes like redesigns, platform migrations, robots.txt updates, or internal linking modifications. Changes in crawl volume, crawl depth, or URL pattern distribution after a technical change confirm whether the change had the intended effect on search engine behavior.",
          items: [
            "Plot Googlebot request volume over time to identify crawl activity peaks and troughs",
            "Measure the lag between sitemap submissions and actual Googlebot crawl requests",
            "Analyze URL path depth of crawled pages to verify Googlebot reaches deep product pages",
            "Compare crawl patterns before and after major technical changes to validate impact",
          ],
        },
        {
          title: "Setting Up a Log Analysis Pipeline",
          content:
            "Building a sustainable log analysis practice requires a pipeline that automatically collects, processes, and visualizes log data without manual effort. For most ecommerce teams, the goal is a system that provides daily or weekly crawl health reports with alerting for anomalies.\n\nStart by determining where your logs are generated and how to access them. If you use managed hosting or a platform like Shopify, log access may be limited or require API integration. For self-hosted stores on AWS, GCP, or dedicated servers, configure your web server to stream logs to a centralized storage location. Cloud platforms offer managed log services like AWS CloudWatch, Google Cloud Logging, or Azure Monitor that can ingest server logs directly.\n\nFor analysis, choose between commercial log analysis tools and custom pipelines. Commercial tools like Botify, JetOctopus, OnCrawl, or Screaming Frog Log Analyzer offer pre-built SEO-focused dashboards, anomaly detection, and integration with crawl data. These tools handle the heavy lifting of parsing, filtering, and visualizing log data. Custom pipelines using BigQuery, Elasticsearch, or ClickHouse offer more flexibility but require engineering resources to build and maintain.\n\nEstablish baseline metrics during your first analysis period: daily Googlebot request volume, productive crawl ratio, crawl frequency distribution by page type, error rate by status code, and average response time for bot requests. Set up automated alerts for deviations from these baselines: a sudden drop in crawl volume, a spike in 5xx errors, or a new URL pattern consuming significant crawl budget.\n\nIntegrate log analysis data with your other SEO data sources. Combining log crawl frequency with [Google Search Console](/academy/google-search-console-for-stores) impression data, Analytics traffic data, and technical crawl results from tools like Screaming Frog creates a comprehensive picture of how search engines discover, crawl, index, and rank your product pages.",
          items: [
            "Configure automated log collection from your web server or CDN to centralized storage",
            "Choose between commercial log tools for pre-built dashboards or custom pipelines for flexibility",
            "Establish baseline metrics for crawl volume, productive ratio, error rate, and response time",
            "Integrate log data with Search Console, Analytics, and crawl tool data for complete SEO visibility",
          ],
          tip: "Schedule monthly log analysis reviews that compare current crawl metrics against your baselines and previous months. Create a standardized report template covering crawl budget allocation, error trends, orphan page count, and crawl efficiency ratio. Consistent reporting transforms log analysis from a one-time audit into an ongoing competitive advantage.",
        },
        {
          title: "What Trawler Reveals About Crawl Behaviour (And What Logs Can't Show)",
          content:
            "The 2024 leak named Google's crawler Trawler and exposed the inputs that drive its scheduling decisions. Server logs show what Trawler actually did \u2014 which URLs it requested, how often, with what response codes \u2014 but the leak is what explains why.\n\nFor ecommerce log analysis, this means specific patterns now have specific names. URLs Trawler hits frequently with 200s are pages it considers crawl-worthy: they have link equity, internal link depth \u22643, accurate lastmod, and recent content changes. URLs Trawler hits rarely or never are scoring poorly on those inputs \u2014 and in 90% of cases this maps to thin internal linking, not crawl-budget caps.\n\nThe leak also confirms a long-suspected pattern: Trawler crawls higher-quality pages MORE often, and lower-quality pages LESS often. Increased crawl frequency to a section is a positive signal \u2014 Google sees it as worth refreshing. Decreased frequency, especially after recent algorithmic updates, often correlates with rising lowQuality or pandaDemotion signals on those URLs. Read it as a quality signal, not just a budget question.",
          items: [
            "Trawler is the leak's name for Google's crawler; logs show its behaviour, the leak explains the inputs",
            "Frequent crawl = link equity + shallow depth + accurate lastmod + recent updates \u2014 diagnose missing inputs first",
            "Trawler crawls high-quality pages more often, low-quality less \u2014 falling crawl is often a quality signal",
            "Most under-crawled pages need internal-linking fixes, not crawl-budget engineering",
          ],
        },
      ],
      navLabels: { previous: "Previous", next: "Next" },
    },
    de: {
      badge: "Fortgeschrittenes SEO",
      heading: "Log-Datei-Analyse",
      intro:
        "Server-Log-Dateien sind die einzige verlassliche Quelle daruber, wie Suchmaschinen-Crawler tatsachlich mit Ihrer E-Commerce-Website interagieren. Wahrend Tools wie die Google Search Console aggregierte Zusammenfassungen liefern, zeigen Roh-Log-Daten genau, welche URLs Googlebot anfordert, wie oft er zuruckkehrt, welche Seiten er vollstandig ignoriert und wo Ihr [Crawl-Budget](/academy/crawl-budget-management) verschwendet wird. Fur gro?e E-Commerce-Kataloge ist die Log-Datei-Analyse der Unterschied zwischen dem Raten uber Crawl-Probleme und deren praziser Diagnose.",
      readTime: "12 Min. Lesezeit",
      sections: [
        {
          title: "Server-Log-Daten fur SEO verstehen",
          content:
            "Jedes Mal, wenn ein Suchmaschinen-Bot eine Seite von Ihrem Server anfordert, zeichnet der Webserver einen Log-Eintrag auf, der IP-Adresse, User-Agent-String, angeforderte URL, HTTP-Antwortcode, Antwortgro?e, Zeitstempel und Referrer enthalt. Fur SEO-Zwecke sind die kritischen Felder der User-Agent (zur Identifizierung ob die Anfrage von Googlebot, Bingbot oder einem anderen Crawler stammt), die angeforderte URL, der zuruckgegebene Statuscode und der Zeitstempel.\n\nGooglebot identifiziert sich uber mehrere User-Agent-Strings, die zwischen Desktop-Rendering, Mobile-Rendering, Bild-Crawling, AdsBot und anderen spezialisierten Crawlern unterscheiden. Das Filtern von Logs nur nach Googlebot-Anfragen erfordert den Abgleich mit allen bekannten Googlebot-User-Agent-Mustern. Verifizieren Sie die Googlebot-Identitat durch Kreuzreferenz der IP-Adressen mit Googles veroffentlichten ASN-Bereichen.\n\nLog-Dateien werden typischerweise im Common Log Format (CLF) oder Combined Log Format gespeichert. Wenn Ihre E-Commerce-Plattform hinter einem CDN wie Cloudflare lauft, mussen Sie moglicherweise das CDN konfigurieren, um echte Client-IP-Adressen weiterzuleiten.\n\nFur E-Commerce-Shops mit erheblichem Traffic-Volumen konnen Roh-Log-Dateien auf Gigabytes pro Tag anwachsen. Effiziente Analyse erfordert spezialisierte Log-Analyse-Tools oder eine Datenpipeline, die Logs in eine abfragbare Datenbank wie BigQuery oder Elasticsearch einspeist.",
          items: [
            "Logs nach verifizierten Googlebot-User-Agents und IP-Bereichen filtern, um falsche Bots auszuschlie?en",
            "User-Agent, URL, Statuscode, Zeitstempel und Antwortgro?e als Mindestfelder erfassen",
            "CDN-Log-Weiterleitung konfigurieren, damit Bot-Anfragen am Ursprungsserver erfasst werden",
            "Spezialisierte Log-Analyse-Tools oder Datenpipelines fur Shops mit hohem Log-Datenvolumen verwenden",
          ],
          tip: "Richten Sie einen separaten Log-Stream ein, der dem Bot-Traffic gewidmet ist und menschliche Besucher auf Serverebene herausfiltert. Dies reduziert das zu verarbeitende Datenvolumen drastisch und macht die Googlebot-Verhaltensanalyse schneller und fokussierter.",
        },
        {
          title: "Crawl-Budget-Analyse fur Produktkataloge",
          content:
            "Das Crawl-Budget ist die Anzahl der Seiten, die Google innerhalb eines bestimmten Zeitraums auf Ihrer Website crawlt. Fur kleine Seiten ist das Crawl-Budget selten ein Problem. Aber E-Commerce-Shops mit Zehntausenden von Produktseiten, mehreren Kategoriehierarchien und facettierter Navigation konnen ihr Crawl-Budget leicht mit Low-Value-URLs erschopfen, wahrend wichtige Produktseiten unbesucht bleiben.\n\nDie Log-Datei-Analyse zeigt Ihre tatsachliche Crawl-Budget-Verteilung. Berechnen Sie die Gesamtzahl der Googlebot-Anfragen pro Tag und segmentieren Sie diese nach URL-Muster. Haufige zu analysierende Muster umfassen Produktdetailseiten, Kategorieseiten, Suchergebnisseiten, facettierte Navigations-URLs, paginierte Seiten, statische Assets und administrative Seiten.\n\nDas Verhaltnis der Crawl-Zuweisung sollte in etwa Ihren Indexierungsprioritaten entsprechen. Wenn 60% der Googlebot-Anfragen auf facettierte Navigations-URLs mit dunnem, dupliziertem Content abzielen, wahrend nur 15% Ihre kanonischen Produktseiten erreichen, haben Sie ein schwerwiegendes Crawl-Budget-Problem.\n\nBerechnen Sie die Crawl-Frequenz fur Ihre wichtigsten Seiten. Wenn Flaggschiff-Produktseiten nur alle 30 Tage gecrawlt werden, wahrend nicht vorratige Produkte tagliche Besuche erhalten, sendet Ihre interne Verlinkungsstruktur die falschen Signale.\n\nVerfolgen Sie Crawl-Budget-Trends uber die Zeit. Ein rucklaufiger Crawl-Rate signalisiert oft eine Verschlechterung der Site-Gesundheit.",
                    image: {
            src: "/images/academy/de/crawl-budget-allocation-chart.svg",
            alt: "Crawl-Budget-Verteilung: Ideale vs. typische Verteilung auf Produktseiten, Kategorien, Filter und Blog",
            caption: "In den meisten Shops wird 50% des Crawl-Budgets an Filter verschwendet. Blockieren Sie nicht-essentielle Filter fuer bessere Verteilung.",
          },
items: [
            "Googlebot-Anfragen nach URL-Muster segmentieren, um zu identifizieren, wo das Crawl-Budget verwendet wird",
            "Crawl-Zuweisungsverhaltnisse mit der Indexierungsprioritat fur jeden URL-Typ vergleichen",
            "Low-Value-URL-Muster blockieren, die Crawl-Budget ohne Indexierungsvorteil verbrauchen",
            "Crawl-Frequenz fur hochpriore Produktseiten verfolgen, um angemessene Abdeckung sicherzustellen",
          ],
          callout: {
            title: "Crawl-Verschwendung",
            text: "Typische E-Commerce-Shops verschwenden 40-60% ihres Crawl-Budgets an gefilterte URLs, die keinen Suchtraffic generieren. Log-File-Analyse deckt auf, wo Googlebot seine Zeit tatsaechlich verbringt.",
          },
        },
        {
          title: "Crawl-Verschwendung und verwaiste Seiten identifizieren",
          content:
            "Crawl-Verschwendung tritt auf, wenn Googlebot Zeit und Ressourcen fur die Anforderung von URLs aufwendet, die keinen SEO-Wert bieten. In E-Commerce-Shops umfassen haufige Quellen der Crawl-Verschwendung Session-ID-Parameter, interne Suchergebnisseiten, Sortier- und Filterparameter-Kombinationen, Warenkorb- und Checkout-Seiten sowie Login- und Kontoverwaltungsseiten.\n\nDie Log-Datei-Analyse quantifiziert genau, wie viel Crawl-Budget jede Verschwendungskategorie verbraucht. Vergleichen Sie Ihre Log-Daten mit Ihrem beabsichtigten Index, indem Sie die von Googlebot angeforderten URLs mit Ihrer XML-Sitemap und dem Indexabdeckungsbericht der Google Search Console abgleichen.\n\nVerwaiste Seiten sind das entgegengesetzte Problem: Seiten, die existieren und indexiert werden sollten, aber nie eine einzige Googlebot-Anfrage erhalten. Um verwaiste Seiten zu finden, vergleichen Sie die vollstandige Liste der Produkt-URLs aus Ihrer Datenbank mit den URLs, die uber einen 90-Tage-Zeitraum in Ihren Log-Dateien erscheinen.\n\nVerwaiste Seiten im E-Commerce entstehen typischerweise durch defekte interne Verlinkung, tiefe Paginierung, die Googlebot nicht erreicht, oder kurzlich hinzugefugte Produkte, die noch nicht von Kategorieseiten verlinkt sind.\n\nErstellen Sie ein systematisches Crawl-Health-Dashboard, das das Verhaltnis von produktiven Crawls zu verschwenderischen Crawls verfolgt. Eine gesunde E-Commerce-Website sollte eine produktive Crawl-Rate von mindestens 70-80% anstreben.",
                    image: {
            src: "/images/academy/de/crawl-waste-orphan-pages.svg",
            alt: "Crawl-Verschwendung und verwaiste Seiten erkennen durch Abgleich von Server-Logs mit Crawl-Daten",
            caption: "Der Abgleich von Server-Logs mit Crawl-Tool-Ergebnissen deckt verwaiste Seiten und verschwendetes Crawl-Budget auf.",
          },
items: [
            "Crawl-Verschwendung quantifizieren durch Kategorisierung der Googlebot-Anfragen an nicht-indexierbare URL-Muster",
            "Verwaiste Seiten finden durch Vergleich der Produktdatenbank mit 90-Tage-Log-Crawl-Daten",
            "Ursachen verwaister Seiten beheben: defekte Links, tiefe Paginierung, fehlende Sitemap-Eintrage",
            "Produktive Crawl-Rate verfolgen mit Ziel von 70-80% Googlebot-Anfragen an indexierbare Seiten",
          ],
          callout: {
            title: "Verwaiste Seiten",
            text: "Verwaiste Seiten (ohne interne Links) werden von Google selten gecrawlt und ranken fast nie. Finden Sie sie durch Log-Analyse und fuegen Sie interne Links hinzu oder entfernen Sie sie aus dem Index.",
          },
          tip: "Exportieren Sie Ihre Liste verwaister Seiten und gleichen Sie sie mit Google Analytics oder den Verkaufsdaten Ihrer E-Commerce-Plattform ab. Verwaiste Seiten mit nachgewiesener Conversion-Historie stellen sofortige Umsatzruckgewinnungsmoglichkeiten dar, sobald sie durch korrekte interne Verlinkung wieder Suchsichtbarkeit erlangen.",
        },
        {
          title: "Statuscode-Analyse und Fehlererkennung",
          content:
            "HTTP-Statuscodes in Log-Dateien zeigen den Gesundheitszustand Ihrer URL-Struktur aus Googles Perspektive. Jede Googlebot-Anfrage, die einen Nicht-200-Statuscode zuruckgibt, stellt eine verpasste Indexierungsmoglichkeit, verschwendetes Crawl-Budget oder ein Signal fur Site-Gesundheitsprobleme dar.\n\n301- und 302-Redirect-Ketten sind in E-Commerce-Shops haufig, die regelma?ig URL-Strukturen andern oder Plattformen migrieren. Die Log-Analyse zeigt, wie viele Googlebot-Anfragen auf Redirect-Ketten treffen und wie tief diese Ketten gehen. Identifizieren Sie URLs, bei denen Googlebot mehr als einen Redirect-Hop antrifft, und flatten Sie diese Ketten.\n\n404-Fehler von Googlebot zeigen URLs an, die einst gultig waren, aber jetzt Not-Found-Antworten zuruckgeben. Im E-Commerce passiert dies typischerweise, wenn Produkte eingestellt, Kategorien reorganisiert oder URL-Slugs ohne Redirects geandert werden.\n\n5xx-Serverfehler sind die schadlichsten Statuscodes fur SEO. Sie teilen Googlebot mit, dass Ihr Server nicht antwortet, was eine Crawl-Rate-Reduzierung auslost. Die Log-Analyse kann aufdecken, ob 5xx-Fehler mit bestimmten URL-Mustern, Zeitraumen oder Traffic-Spitzen korrelieren. Weitere Informationen finden Sie in unserem Leitfaden zu [technische SEO](/blog/technical-seo-for-ecommerce).\n\nSoft-404-Seiten, bei denen der Server einen 200-Statuscode zuruckgibt, aber der Seiteninhalt anzeigt, dass das Produkt nicht verfugbar ist, sind in Logs allein schwerer zu erkennen. Kombinieren Sie Log-Analyse mit Crawl-Daten, um diese Seiten zu identifizieren.",
          items: [
            "Redirect-Ketten flatten, bei denen Googlebot mehr als einen Hop zur endgultigen URL antrifft",
            "404-Spitzen untersuchen, die mit Sitemap-Anderungen, Kategorie-Umstrukturierung oder Produktentfernung korrelieren",
            "5xx-Fehlermuster nach URL-Typ und Tageszeit uberwachen, um Server-Kapazitatsprobleme zu identifizieren",
            "Log-Daten mit Crawl-Analyse kombinieren, um Soft-404-Seiten mit 200-Statuscode zu erkennen",
          ],
        },
        {
          title: "Crawl-Muster- und Zeitanalyse",
          content:
            "Die Analyse, wann Googlebot Ihre Website crawlt, zeigt Muster, die die Serverkapazitatsplanung, Content-Frische-Strategien und Sitemap-Optimierung informieren. Stellen Sie Googlebot-Anfragen uber die Zeit dar, um Crawl-Spitzen und -Taler uber Tagesstunden, Wochentage und langere saisonale Muster zu identifizieren.\n\nDie meisten E-Commerce-Websites sehen Googlebot-Aktivitat uber den Tag verteilt, oft mit hoherer Intensitat wahrend verkehrsarmer Stunden, wenn Serverantwortzeiten am schnellsten sind. Wenn Ihr Server wahrend der Einkaufsspitzenzeiten langsamer wird und Googlebot sein Crawling auf die Nacht verschiebt, verlieren Sie moglicherweise Crawl-Abdeckung fur zeitkritische Inhalte.\n\nNach dem Einreichen einer aktualisierten XML-Sitemap uber die Search Console uberwachen Sie die Log-Dateien, um zu messen, wie schnell Googlebot beginnt, die neuen URLs anzufordern. Die Verzogerung zwischen Sitemap-Einreichung und tatsachlichem Crawl gibt Einblick in Googles Priorisierung Ihrer Domain.\n\nVerfolgen Sie die Crawl-Tiefe, die Googlebot in der Hierarchie Ihrer Website erreicht. Analysieren Sie die URL-Pfadtiefe der gecrawlten Seiten, um zu bestimmen, ob Googlebot Ihre tiefsten Produktseiten erreicht oder bei oberen Kategorien stoppt.\n\nVergleichen Sie Crawl-Muster vor und nach gro?en Site-Anderungen wie Redesigns, Plattformmigrationen oder robots.txt-Updates. Anderungen im Crawl-Volumen nach einer technischen Anderung bestatigen, ob die Anderung den beabsichtigten Effekt hatte.",
          items: [
            "Googlebot-Anfragevolumen uber die Zeit darstellen, um Crawl-Aktivitatsspitzen und -taler zu identifizieren",
            "Verzogerung zwischen Sitemap-Einreichungen und tatsachlichen Googlebot-Crawl-Anfragen messen",
            "URL-Pfadtiefe gecrawlter Seiten analysieren, um zu verifizieren, dass Googlebot tiefe Produktseiten erreicht",
            "Crawl-Muster vor und nach gro?en technischen Anderungen vergleichen, um die Auswirkungen zu validieren",
          ],
        },
        {
          title: "Eine Log-Analyse-Pipeline einrichten",
          content:
            "Der Aufbau einer nachhaltigen Log-Analyse-Praxis erfordert eine Pipeline, die automatisch Log-Daten sammelt, verarbeitet und visualisiert. Fur die meisten E-Commerce-Teams ist das Ziel ein System, das tagliche oder wochentliche Crawl-Health-Berichte mit Alarmierung bei Anomalien liefert.\n\nBeginnen Sie damit zu ermitteln, wo Ihre Logs generiert werden und wie Sie darauf zugreifen konnen. Wenn Sie verwaltetes Hosting oder eine Plattform wie Shopify nutzen, kann der Log-Zugriff eingeschrankt sein. Fur selbstgehostete Shops konfigurieren Sie Ihren Webserver, um Logs an einen zentralen Speicherort zu streamen.\n\nFur die Analyse wahlen Sie zwischen kommerziellen Log-Analyse-Tools und eigenen Pipelines. Kommerzielle Tools wie Botify, JetOctopus oder Screaming Frog Log Analyzer bieten vorgefertigte SEO-fokussierte Dashboards. Eigene Pipelines mit BigQuery oder Elasticsearch bieten mehr Flexibilitat, erfordern aber Engineering-Ressourcen.\n\nLegen Sie Baseline-Metriken fest: tagliches Googlebot-Anfragevolumen, produktive Crawl-Rate, Crawl-Frequenzverteilung nach Seitentyp, Fehlerrate nach Statuscode und durchschnittliche Antwortzeit fur Bot-Anfragen. Richten Sie automatisierte Alarme fur Abweichungen von diesen Baselines ein.\n\nIntegrieren Sie Log-Analyse-Daten mit Ihren anderen SEO-Datenquellen. Die Kombination von Log-Crawl-Frequenz mit Search-Console-Impressionsdaten, Analytics-Verkehrsdaten und technischen Crawl-Ergebnissen schafft ein umfassendes Bild. Weitere Informationen finden Sie in unserem Leitfaden zu [Google Search Console](/academy/google-search-console-for-stores).",
          items: [
            "Automatisierte Log-Sammlung vom Webserver oder CDN zu zentralem Speicher konfigurieren",
            "Zwischen kommerziellen Log-Tools fur vorgefertigte Dashboards oder eigenen Pipelines fur Flexibilitat wahlen",
            "Baseline-Metriken fur Crawl-Volumen, produktive Rate, Fehlerrate und Antwortzeit festlegen",
            "Log-Daten mit Search Console, Analytics und Crawl-Tool-Daten fur vollstandige SEO-Sichtbarkeit integrieren",
          ],
          tip: "Planen Sie monatliche Log-Analyse-Reviews, die aktuelle Crawl-Metriken mit Ihren Baselines und Vormonaten vergleichen. Erstellen Sie eine standardisierte Berichtsvorlage fur Crawl-Budget-Verteilung, Fehlertrends, Anzahl verwaister Seiten und Crawl-Effizienz-Ratio. Konsistentes Reporting verwandelt Log-Analyse von einem einmaligen Audit in einen dauerhaften Wettbewerbsvorteil.",
        },
        {
          title: "Was Trawler ueber Crawl-Verhalten verraet (und was Logs nicht zeigen koennen)",
          content:
            "Das Leak von 2024 nannte Googles Crawler Trawler und legte die Inputs offen, die seine Scheduling-Entscheidungen treiben. Server-Logs zeigen, was Trawler tatsaechlich getan hat - welche URLs er angefordert hat, wie oft, mit welchen Response-Codes - aber das Leak ist, was erklaert warum.\n\nFuer E-Commerce-Log-Analyse bedeutet dies, dass spezifische Muster jetzt spezifische Namen haben. URLs, die Trawler haeufig mit 200ern trifft, sind Seiten, die er als crawl-wuerdig betrachtet: sie haben Link-Equity, interne Link-Tiefe <=3, akkurates lastmod und juengste Content-Aenderungen. URLs, die Trawler selten oder nie trifft, schneiden bei diesen Inputs schlecht ab - und in 90% der Faelle mappt das auf duenne interne Verlinkung, nicht auf Crawl-Budget-Limits.\n\nDas Leak bestaetigt auch ein lange vermutetes Muster: Trawler crawlt qualitativ hochwertigere Seiten OEFTER und niedriger-qualitative Seiten SELTENER. Erhoehte Crawl-Frequenz zu einem Bereich ist ein positives Signal - Google sieht ihn als wert zu erfrischen. Verminderte Frequenz, besonders nach juengsten algorithmischen Updates, korreliert oft mit steigenden lowQuality- oder pandaDemotion-Signalen auf diesen URLs. Lesen Sie es als Qualitaetssignal, nicht nur als Budget-Frage.",
          items: [
            "Trawler ist der Leak-Name fuer Googles Crawler; Logs zeigen sein Verhalten, das Leak erklaert die Inputs",
            "Haeufiger Crawl = Link-Equity + flache Tiefe + akkurates lastmod + juengste Updates - diagnostizieren Sie fehlende Inputs zuerst",
            "Trawler crawlt hochwertige Seiten oefter, niedrige Qualitaet seltener - fallender Crawl ist oft ein Qualitaetssignal",
            "Die meisten unter-gecrawlten Seiten brauchen interne Verlinkungs-Fixes, nicht Crawl-Budget-Engineering",
          ],
        },
      ],
      navLabels: { previous: "Zuruck", next: "Weiter" },
    },
    fr: {
      badge: "SEO avance",
      heading: "Analyse des fichiers de logs",
      intro: "Les fichiers de logs serveur sont la seule source de v\u00e9rit\u00e9 sur la fa\u00c3\u00a7on dont les robots des moteurs de recherche interagissent reellement avec votre site e-commerce. Alors que des outils comme [Google Search Console](/academy/google-search-console-for-stores) fournissent des resumes agreges, les donn\u00c3\u00a9es brutes des logs revelent exactement quelles URLs Googlebot demande, a quelle fr\u00c3\u00a9quence il revient, quelles pages il ignore entierement et ou votre budget de crawl est gaspille. Pour les grands catalogues e-commerce, l'analyse des fichiers de logs fait la difference entre deviner les problemes de crawl et les diagnostiquer avec precision. Alors que des outils comme Google Search Console fournissent des r\u00c3\u00a9sum\u00c3\u00a9s agr\u00c3\u00a9g\u00c3\u00a9s, les donn\u00c3\u00a9es brutes des logs r\u00c3\u00a9v\u00c3\u00a8lent exactement quelles URLs Googlebot demande, \u00c3\u00a0 quelle fr\u00c3\u00a9quence il revient, quelles pages il ignore compl\u00c3\u00a8tement et o\u00c3\u00b9 votre [budget de crawl](/academy/crawl-budget-management) est gaspill\u00c3\u00a9.",
      readTime: "12 min de lecture",
      sections: [
        {
          title: "Comprendre les données de logs serveur pour le SEO",
          content:
            "Chaque fois qu'un robot de moteur de recherche demande une page a votre serveur, le serveur web enregistre une entree de log contenant l'adresse IP, la chaine user agent, l'URL demandee, le code de reponse HTTP, la taille de la reponse, l'horodatage et le referrer. Pour le SEO, les champs critiques sont le user agent, l'URL demandee, le code de statut retourne et l'horodatage.\n\nGooglebot s'identifie par plusieurs chaines user agent qui distinguent entre le rendu desktop, le rendu mobile, le crawl d'images, AdsBot et d'autres crawlers specialises. Le filtrage des logs pour les seules requetes Googlebot n\u00e9cessite la correspondance avec tous les mod\u00e8les de user agent Googlebot connus. V\u00e9rifiez l'identite de Googlebot en croisant les adresses IP avec les plages ASN publiees par Google.\n\nLes fichiers de logs sont generalement stockes en Common Log Format (CLF) ou Combined Log Format. Si votre plateforme e-commerce fonctionne derriere un CDN, vous devrez peut-etre configurer le CDN pour transmettre les vraies adresses IP des clients.\n\nPour les boutiques e-commerce avec un volume de trafic important, les fichiers de logs bruts peuvent atteindre des gigaoctets par jour. L'analyse efficace n\u00e9cessite des outils specialises ou un pipeline de donn\u00e9es qui ingere les logs dans une base de donn\u00e9es interrogeable comme BigQuery ou Elasticsearch.",
          items: [
            "Filtrer les logs par user agents Googlebot verifies et plages IP pour exclure les faux robots",
            "Capturer le user agent, l'URL, le code de statut, l'horodatage et la taille de reponse comme champs minimaux",
            "Configurer la transmission des logs CDN pour s'assurer que les requetes des robots sont capturees au serveur d'origine",
            "Utiliser des outils d'analyse de logs specialises ou des pipelines de donn\u00e9es pour les boutiques a haut volume",
          ],
          tip: "Configurez un flux de logs separe dedie au trafic des robots qui filtre les visiteurs humains au niveau du serveur. Cela reduit drastiquement le volume de donn\u00e9es a traiter et rend l'analyse du comportement de Googlebot plus rapide et ciblee.",
        },
        {
          title: "Analyse du budget de crawl pour les catalogues produits",
          content:
            "Le budget de crawl est le nombre de pages que Google va crawler sur votre site dans une periode donn\u00e9e. Pour les petits sites, le budget de crawl est rarement un souci. Mais les boutiques e-commerce avec des dizaines de milliers de pages produit, des hierarchies de cat\u00e9gories multiples et une navigation a facettes peuvent facilement epuiser leur budget de crawl sur des URLs a faible valeur.\n\nL'analyse des fichiers de logs revele votre allocation reelle de budget de crawl. Calculez le nombre total de requetes Googlebot par jour, puis segmentez ces requetes par mod\u00e8le d'URL. Les mod\u00e8les courants a analyser incluent les pages de detail produit, les pages de cat\u00e9gories, les pages de resultats de recherche, les URLs de navigation a facettes, les pages paginees et les assets statiques.\n\nLe ratio d'allocation du crawl devrait correspondre approximativement a vos priorites d'indexation. Si 60% des requetes de Googlebot ciblent des URLs de navigation a facettes generant du contenu duplique et mince, vous avez un serieux probleme de budget de crawl.\n\nCalculez la fr\u00e9quence de crawl pour vos pages les plus importantes. Si les pages produit phares ne sont crawlees qu'une fois tous les 30 jours tandis que les produits en rupture de stock recoivent des visites quotidiennes, votre structure de liens internes envoie les mauvais signaux.\n\nSuivez les tendances du budget de crawl dans le temps. Un taux de crawl en baisse signale souvent une degradation de la sante du site.",
          items: [
            "Segmenter les requetes Googlebot par mod\u00e8le d'URL pour identifier ou le budget de crawl est depense",
            "Comparer les ratios d'allocation du crawl avec la priorite d'indexation pour chaque type d'URL",
            "Bloquer les mod\u00e8les d'URL a faible valeur qui consomment du budget de crawl sans benefice d'indexation",
            "Suivre la fr\u00e9quence de crawl des pages produit prioritaires pour assurer une couverture adequate",
          ],
          image: {
            src: "/images/academy/fr/crawl-budget-allocation-chart.svg",
            alt: "Graphique à barres montrant l'allocation du budget d'exploration avec 60 % gaspillés sur des URL de navigation à facettes tandis que seulement 15 % atteignent les pages de produits",
            caption: "Si 60 % des requêtes Googlebot ciblent la navigation à facettes alors que seulement 15 % atteignent les pages de produits, vous rencontrez un grave problème de budget d'exploration qui nécessite une correction immédiate.",
          },
          callout: {
            title: "Crawl-Verschwendung",
            text: "Segmentez les requêtes Googlebot par modèle d'URL pour identifier où le budget est dépensé. Bloquez les combinaisons de filtres de faible valeur dans robots.txt et utilisez des balises canoniques pour rediriger l'attention de l'analyse vers le produit indexable.",
          },
        },
        {
          title: "Identifier le gaspillage de crawl et les pages orphelines",
          content:
            "Le gaspillage de crawl se produit quand Googlebot passe du temps et des ressources a demander des URLs sans valeur SEO. Dans les boutiques e-commerce, les sources courantes incluent les parametres d'ID de session, les pages de resultats de recherche interne, les combinaisons de parametres de tri et de filtrage, et les pages de panier et de paiement.\n\nL'analyse des fichiers de logs quantifie exactement combien de budget de crawl chaque cat\u00e9gorie de gaspillage consomme. Croisez vos donn\u00e9es de logs avec votre index souhaite en comparant les URLs demandees par Googlebot avec votre sitemap XML et le rapport de couverture d'index de la Search Console.\n\nLes pages orphelines sont le probleme inverse : des pages qui existent et devraient etre indexees mais ne recoivent jamais une seule requete Googlebot. Pour trouver les pages orphelines, comparez la liste complete des URLs produit de votre base de donn\u00e9es avec les URLs apparaissant dans vos fichiers de logs sur une periode de 90 jours.\n\nLes pages orphelines en e-commerce proviennent typiquement d'un maillage interne casse, d'une pagination profonde que Googlebot n'atteint pas, ou de produits recemment ajoutes pas encore lies depuis les pages de cat\u00e9gories.\n\nCreez un tableau de bord systematique de sante du crawl qui suit le ratio de crawls productifs versus crawls gaspilles. Un site e-commerce sain devrait viser au moins 70-80% de ratio de crawl productif.",
          items: [
            "Quantifier le gaspillage de crawl en categorisant les requetes Googlebot vers des mod\u00e8les d'URL non indexables",
            "Trouver les pages orphelines en comparant la base de donn\u00e9es produit avec les donn\u00e9es de crawl des logs sur 90 jours",
            "Corriger les causes des pages orphelines : liens casses, pagination profonde, entrees sitemap manquantes",
            "Suivre le ratio de crawl productif visant 70-80% des requetes Googlebot atteignant des pages indexables",
          ],
          tip: "Exportez votre liste de pages orphelines et croisez-la avec Google Analytics ou les donn\u00e9es de vente de votre plateforme e-commerce. Les pages orphelines avec un historique de conversion prouve representent des opportunites immediates de recuperation de revenus une fois qu'elles retrouvent la visibilite par un maillage interne correct.",
          image: {
            src: "/images/academy/fr/crawl-waste-orphan-pages.svg",
            alt: "Diagramme de comparaison montrant le gaspillage d'exploration des ID de session et des filtres par rapport aux pages orphelines dues à des liens rompus et à une pagination profonde",
            caption: "Comparez votre base de données de produits aux données d'exploration des journaux de 90 jours pour trouver les pages orphelines. Un site de commerce électronique sain doit viser un taux d'exploration productif de 70 à 80 %.",
          },
          callout: {
            title: "Verwaiste Seiten",
            text: "Les pages orphelines avec un historique de conversion éprouvé représentent des opportunités immédiates de récupération de revenus. Croisez les URL orphelines avec les données de vente pour prioriser les pages à reconnecter via un lien interne",
          },
        },
        {
          title: "Analyse des codes de statut et detection d'erreurs",
          content:
            "Les codes de statut HTTP dans les fichiers de logs revelent la sante de votre structure d'URL du point de vue de Google. Chaque requete Googlebot qui retourne un code de statut non-200 represente une opportunite d'indexation manquee ou du budget de crawl gaspille.\n\nLes chaines de redirections 301 et 302 sont courantes dans les boutiques e-commerce qui changent fr\u00e9quemment les structures d'URL ou migrent de plateforme. L'analyse des logs revele combien de requetes Googlebot rencontrent des chaines de redirections et la profondeur de ces chaines. Identifiez les URLs ou Googlebot rencontre plus d'un saut de redirection et aplatissez ces chaines.\n\nLes erreurs 404 de Googlebot indiquent des URLs qui etaient autrefois valides mais retournent maintenant des reponses non trouvees. En e-commerce, cela arrive typiquement quand des produits sont arretes ou des cat\u00e9gories reorganisees sans redirections.\n\nLes erreurs serveur 5xx sont les codes de statut les plus dommageables pour le SEO. Elles declenchent une reduction du taux de crawl. L'analyse des logs peut reveler si les erreurs 5xx sont correlees avec des mod\u00e8les d'URL sp\u00e9cifiques, des periodes horaires ou des pics de trafic.\n\nLes pages soft 404, ou le serveur retourne un code 200 mais le contenu indique que le produit est indisponible, sont plus difficiles a detecter dans les logs seuls. Combinez l'analyse des logs avec des donn\u00e9es de crawl pour les identifier.\n\nLes erreurs serveur 5xx sont les codes de statut les plus dommageables pour le SEO et repr\u00c3\u00a9sentent une pr\u00c3\u00a9occupation fondamentale du [SEO technique](/blog/technical-seo-for-ecommerce).",
          items: [
            "Aplatir les chaines de redirections ou Googlebot rencontre plus d'un saut vers l'URL finale",
            "Investiguer les pics de 404 correlant avec les changements de sitemap ou les restructurations de cat\u00e9gories",
            "Surveiller les mod\u00e8les d'erreurs 5xx par type d'URL et heure du jour pour identifier les problemes de capacite serveur",
            "Combiner les donn\u00e9es de logs avec l'analyse de crawl pour detecter les pages soft 404 retournant des codes 200",
          ],
        },
        {
          title: "Analyse des modèles et du timing de crawl",
          content:
            "Analyser quand Googlebot crawle votre site revele des mod\u00e8les qui informent la planification de la capacite serveur, les strat\u00e9gies de fraicheur du contenu et l'optimisation du sitemap. Tracez les requetes Googlebot dans le temps pour identifier les pics et creux d'activite de crawl sur les heures, les jours et les patterns saisonniers.\n\nLa plupart des sites e-commerce voient l'activite Googlebot repartie sur la journee mais souvent avec une intensite plus elevee pendant les heures creuses quand les temps de reponse du serveur sont les plus rapides.\n\nApr\u00e8s avoir soumis un sitemap XML mis a jour via la Search Console, surveillez les fichiers de logs pour mesurer la rapidite avec laquelle Googlebot commence a demander les nouvelles URLs. Le delai entre la soumission du sitemap et le crawl reel donne un apercu de la priorisation de Google pour votre domaine.\n\nSuivez la profondeur de crawl que Googlebot atteint dans la hierarchie de votre site. Analysez la profondeur du chemin URL des pages crawlees pour determiner si Googlebot atteint vos pages produit les plus profondes ou s'arrete aux cat\u00e9gories de niveau superieur.\n\nComparez les mod\u00e8les de crawl avant et apr\u00e8s les changements majeurs du site. Les changements de volume de crawl apr\u00e8s un changement technique confirment si la modification a eu l'effet souhaite.",
          items: [
            "Tracer le volume de requetes Googlebot dans le temps pour identifier les pics et creux d'activite de crawl",
            "Mesurer le delai entre les soumissions de sitemap et les requetes de crawl Googlebot reelles",
            "Analyser la profondeur du chemin URL des pages crawlees pour v\u00e9rifier que Googlebot atteint les pages produit profondes",
            "Comparer les mod\u00e8les de crawl avant et apr\u00e8s les changements techniques majeurs pour valider l'impact",
          ],
        },
        {
          title: "Mettre en place un pipeline d'analyse de logs",
          content:
            "Construire une pratique durable d'analyse de logs n\u00e9cessite un pipeline qui collecte, traite et visualise automatiquement les donn\u00e9es de logs. Pour la plupart des equipes e-commerce, l'objectif est un syst\u00e8me fournissant des rapports quotidiens ou hebdomadaires de sante du crawl avec alertes pour les anomalies.\n\nCommencez par determiner ou vos logs sont generes et comment y acceder. Si vous utilisez un hebergement gere ou une plateforme comme Shopify, l'acces aux logs peut etre limite. Pour les boutiques auto-hebergees, configurez votre serveur web pour diffuser les logs vers un emplacement de stockage centralise.\n\nPour l'analyse, choisissez entre des outils commerciaux et des pipelines personnalises. Les outils commerciaux comme Botify, JetOctopus ou Screaming Frog Log Analyzer offrent des tableaux de bord pre-construits axes sur le SEO. Les pipelines personnalises avec BigQuery ou Elasticsearch offrent plus de flexibilite.\n\nEtablissez des metriques de r\u00e9f\u00e9rence : volume quotidien de requetes Googlebot, ratio de crawl productif, distribution de fr\u00e9quence de crawl par type de page, taux d'erreur par code de statut et temps de reponse moyen pour les requetes de robots. Configurez des alertes automatis\u00e9es pour les ecarts par rapport a ces r\u00e9f\u00e9rences.\n\nIntegrez les donn\u00e9es d'analyse de logs avec vos autres sources de donn\u00e9es SEO. La combinaison de la fr\u00e9quence de crawl des logs avec les donn\u00e9es d'impressions de la Search Console et les donn\u00e9es de trafic Analytics cree une image complete.",
          items: [
            "Configurer la collecte automatis\u00e9e des logs depuis votre serveur web ou CDN vers un stockage centralise",
            "Choisir entre des outils de logs commerciaux pour des tableaux de bord pre-construits ou des pipelines personnalises pour la flexibilite",
            "Etablir des metriques de r\u00e9f\u00e9rence pour le volume de crawl, le ratio productif, le taux d'erreur et le temps de reponse",
            "Integrer les donn\u00e9es de logs avec Search Console, Analytics et les donn\u00e9es d'outils de crawl pour une visibilite SEO complete",
          ],
          tip: "Planifiez des revues mensuelles d'analyse de logs comparant les metriques de crawl actuelles avec vos r\u00e9f\u00e9rences et les mois precedents. Creez un mod\u00e8le de rapport standardise couvrant l'allocation du budget de crawl, les tendances d'erreurs, le nombre de pages orphelines et le ratio d'efficacite du crawl. Un reporting coherent transforme l'analyse de logs d'un audit ponctuel en un avantage concurrentiel continu.",
        },
        {
          title: "Ce que Trawler revele sur le comportement de crawl (et ce que les logs ne peuvent pas montrer)",
          content:
            "Le leak 2024 a nomme le crawler de Google Trawler et a expose les entrees qui pilotent ses d\u00e9cisions de planification. Les logs serveur montrent ce que Trawler a reellement fait - quelles URLs il a demandees, a quelle fr\u00e9quence, avec quels codes de reponse - mais le leak est ce qui explique pourquoi.\n\nPour l'analyse de logs ecommerce, cela signifie que des patterns sp\u00e9cifiques ont maintenant des noms sp\u00e9cifiques. Les URLs que Trawler frappe fr\u00e9quemment avec des 200 sont des pages qu'il considere comme dignes du crawl : elles ont du link equity, une profondeur de liens internes <=3, un lastmod exact et des changements de contenu recents. Les URLs que Trawler frappe rarement ou jamais marquent mal sur ces entrees - et dans 90% des cas, cela correspond a un linking interne mince, pas a des plafonds de crawl budget.\n\nLe leak confirme aussi un pattern longtemps soupconne : Trawler crawle les pages de plus haute qualit\u00e9 PLUS souvent, et les pages de plus basse qualit\u00e9 MOINS souvent. Une fr\u00e9quence de crawl accrue vers une section est un signal positif - Google la voit comme digne d'etre rafraichie. Une fr\u00e9quence diminuee, surtout apr\u00e8s des mises a jour algorithmiques recentes, correlle souvent avec des signaux lowQuality ou pandaDemotion en hausse sur ces URLs. Lisez-le comme un signal de qualit\u00e9, pas seulement une question de budget.",
          items: [
            "Trawler est le nom du leak pour le crawler de Google ; les logs montrent son comportement, le leak explique les entrees",
            "Crawl frequent = link equity + profondeur faible + lastmod exact + mises a jour recentes - diagnostiquez les entrees manquantes d'abord",
            "Trawler crawle les pages de haute qualit\u00e9 plus souvent, basse qualit\u00e9 moins - la chute de crawl est souvent un signal de qualit\u00e9",
            "La plupart des pages sous-crawlees ont besoin de correctifs de linking interne, pas d'ingenierie de crawl budget",
          ],
        },
      ],
      navLabels: { previous: "Precedent", next: "Suivant" },
    },
    es: {
      badge: "SEO avanzado",
      heading: "Análisis de archivos de registro",
      intro: "Los archivos de registro del servidor son la unica fuente de verdad sobre como los rastreadores de motores de busqueda interactuan realmente con su sitio de ecommerce. Mientras que herramientas como Google Search Console proporcionan resumenes agregados, los datos brutos de registro revelan exactamente que URLs solicita Googlebot, con que frecuencia regresa, que páginas ignora por completo y donde se desperdicia su presupuesto de rastreo. Para grandes catálogos de ecommerce, el análisis de archivos de registro es la diferencia entre adivinar los problemas de rastreo y diagnosticarlos con precision.",
      readTime: "12 min de lectura",
      sections: [
        {
          title: "Comprender los datos de registro del servidor para SEO",
          content:
            "Cada vez que un bot de motor de busqueda solicita una p\u00e1gina de su servidor, el servidor web registra una entrada que contiene la direccion IP, la cadena de agente de usuario, la URL solicitada, el codigo de respuesta HTTP, el tamano de la respuesta, la marca de tiempo y el referrer. Para fines de SEO, los campos criticos son el agente de usuario, la URL solicitada, el codigo de estado retornado y la marca de tiempo.\n\nGooglebot se identifica a traves de varias cadenas de agente de usuario que distinguen entre renderizado de escritorio, renderizado movil, rastreo de imagenes, AdsBot y otros rastreadores especializados. Filtrar los registros solo por solicitudes de Googlebot requiere coincidir con todos los patrones de agente de usuario conocidos. Verifique la identidad de Googlebot cruzando direcciones IP con los rangos ASN publicados por Google.\n\nLos archivos de registro se almacenan tipicamente en Common Log Format (CLF) o Combined Log Format. Si su plataforma de ecommerce funciona detras de un CDN, puede necesitar configurarlo para pasar las direcciones IP reales del cliente.\n\nPara tiendas de ecommerce con volumen de tr\u00e1fico significativo, los archivos de registro brutos pueden crecer a gigabytes por dia. El an\u00e1lisis eficiente requiere herramientas especializadas o un pipeline de datos que ingeste registros en una base de datos consultable como BigQuery o Elasticsearch.",
          items: [
            "Filtrar registros por agentes de usuario Googlebot verificados y rangos IP para excluir bots falsos",
            "Capturar agente de usuario, URL, codigo de estado, marca de tiempo y tamano de respuesta como campos minimos",
            "Configurar el reenvio de registros del CDN para asegurar que las solicitudes de bots se capturen en el servidor origen",
            "Usar herramientas de an\u00e1lisis de registros especializadas o pipelines de datos para tiendas con alto volumen",
          ],
          tip: "Configure un flujo de registros separado dedicado al tr\u00e1fico de bots que filtre los visitantes humanos a nivel del servidor. Esto reduce drasticamente el volumen de datos a procesar y hace que el an\u00e1lisis del comportamiento de Googlebot sea m\u00e1s r\u00e1pido y enfocado.",
        },
        {
          title: "Análisis de presupuesto de rastreo para catálogos de productos",
          content:
            "El [presupuesto de rastreo](/academy/crawl-budget-management) es el n\u00famero de p\u00e1ginas que Google rastreara en su sitio dentro de un periodo dado. Para sitios pequenos, el presupuesto de rastreo rara vez es un problema. Pero las tiendas de ecommerce con decenas de miles de p\u00e1ginas de producto, multiples jerarquias de categor\u00edas y navegaci\u00f3n facetada pueden facilmente agotar su presupuesto en URLs de bajo valor.\n\nEl an\u00e1lisis de archivos de registro revela su asignacion real de presupuesto de rastreo. Calcule el n\u00famero total de solicitudes de Googlebot por dia, luego segmente esas solicitudes por patr\u00f3n de URL. Los patrones comunes incluyen p\u00e1ginas de detalle de producto, p\u00e1ginas de categor\u00eda, p\u00e1ginas de resultados de busqueda, URLs de navegaci\u00f3n facetada, p\u00e1ginas paginadas y activos estaticos.\n\nLa proporcion de asignacion de rastreo deberia coincidir aproximadamente con sus prioridades de indexaci\u00f3n. Si el 60% de las solicitudes de Googlebot se dirigen a URLs de navegaci\u00f3n facetada con contenido duplicado y delgado, tiene un problema severo de presupuesto de rastreo.\n\nCalcule la frecuencia de rastreo para sus p\u00e1ginas m\u00e1s importantes. Si las p\u00e1ginas de producto principales solo se rastrean cada 30 dias mientras los productos agotados reciben visitas diarias, su estructura de enlaces internos esta enviando las senales equivocadas.\n\nRastree las tendencias del presupuesto de rastreo a lo largo del tiempo. Una tasa de rastreo decreciente a menudo senala deterioro de la salud del sitio.",
          items: [
            "Segmentar solicitudes de Googlebot por patr\u00f3n de URL para identificar donde se gasta el presupuesto de rastreo",
            "Comparar ratios de asignacion de rastreo con la prioridad de indexaci\u00f3n para cada tipo de URL",
            "Bloquear patrones de URL de bajo valor que consumen presupuesto de rastreo sin beneficio de indexaci\u00f3n",
            "Rastrear la frecuencia de rastreo de p\u00e1ginas de producto de alta prioridad para asegurar cobertura adecuada",
          ],
          image: {
            src: "/images/academy/es/crawl-budget-allocation-chart.svg",
            alt: "Gráfico de barras que muestra la asignación del presupuesto de rastreo: el 60 por ciento se desperdicia en URL de navegación por facetas, mientras que solo el 15 por ciento llega a las páginas de productos.",
            caption: "Si el 60% de las solicitudes del robot de Google se dirigen a la navegación por facetas, mientras que solo el 15% llega a las páginas de productos, tiene un grave problema de presupuesto de rastreo que necesita una corrección inmediata.",
          },
          callout: {
            title: "Crawl-Verschwendung",
            text: "Segmente las solicitudes del robot de Google por patrón de URL para identificar dónde se gasta el presupuesto. Bloquee combinaciones de filtros de bajo valor en robots.txt y utilice etiquetas canónicas para redirigir la atención del rastreo a productos indexables.",
          },
        },
        {
          title: "Identificar desperdicio de rastreo y páginas huerfanas",
          content:
            "El desperdicio de rastreo ocurre cuando Googlebot gasta tiempo y recursos solicitando URLs sin valor SEO. En tiendas de ecommerce, las fuentes comunes incluyen parametros de ID de sesi\u00f3n, p\u00e1ginas de resultados de busqueda interna, combinaciones de parametros de ordenamiento y filtrado, y p\u00e1ginas de carrito y pago.\n\nEl an\u00e1lisis de archivos de registro cuantifica exactamente cuanto presupuesto de rastreo consume cada categor\u00eda de desperdicio. Cruce sus datos de registro con su indice deseado comparando las URLs que Googlebot solicita con su sitemap XML y el informe de cobertura de indice de Search Console.\n\nLas p\u00e1ginas huerfanas son el problema opuesto: p\u00e1ginas que existen y deberian ser indexadas pero nunca reciben una sola solicitud de Googlebot. Para encontrar p\u00e1ginas huerfanas, compare la lista completa de URLs de productos de su base de datos con las URLs que aparecen en sus archivos de registro en un periodo de 90 dias.\n\nLas p\u00e1ginas huerfanas en ecommerce tipicamente surgen de enlaces internos rotos, paginacion profunda que Googlebot no alcanza, o productos recientemente anadidos que aun no estan enlazados desde p\u00e1ginas de categor\u00eda.\n\nCree un panel sistematico de salud de rastreo que rastree la proporcion de rastreos productivos versus rastreos desperdiciados. Un sitio de ecommerce saludable deberia apuntar a al menos 70-80% de ratio de rastreo productivo.",
          items: [
            "Cuantificar el desperdicio de rastreo categorizando las solicitudes de Googlebot a patrones de URL no indexables",
            "Encontrar p\u00e1ginas huerfanas comparando la base de datos de productos con datos de rastreo de registros de 90 dias",
            "Corregir causas de p\u00e1ginas huerfanas: enlaces rotos, paginacion profunda, entradas de sitemap faltantes",
            "Rastrear el ratio de rastreo productivo apuntando a 70-80% de solicitudes de Googlebot a p\u00e1ginas indexables",
          ],
          tip: "Exporte su lista de p\u00e1ginas huerfanas y crucela con Google Analytics o los datos de ventas de su plataforma de ecommerce. Las p\u00e1ginas huerfanas con historial de conversion probado representan oportunidades inmediatas de recuperacion de ingresos una vez que recuperen la visibilidad de busqueda mediante enlaces internos correctos.",
          image: {
            src: "/images/academy/es/crawl-waste-orphan-pages.svg",
            alt: "Diagrama de comparación que muestra el desperdicio de rastreo de ID de sesión y filtros versus páginas huérfanas de enlaces rotos y paginación profunda",
            caption: "Compare la base de datos de su producto con los datos de rastreo de registros de 90 días para encontrar páginas huérfanas. Un sitio de comercio electrónico saludable debe apuntar a una tasa de rastreo productiva del 70-80%.",
          },
          callout: {
            title: "Verwaiste Seiten",
            text: "Las páginas huérfanas con un historial de conversiones comprobado representan oportunidades inmediatas de recuperación de ingresos. Haga una referencia cruzada de las URL huérfanas con datos de ventas para priorizar qué páginas volver a conectar a través del enlace interno.",
          },
        },
        {
          title: "Análisis de codigos de estado y deteccion de errores",
          content:
            "Los codigos de estado HTTP en los archivos de registro revelan la salud de su estructura de URL desde la perspectiva de Google. Cada solicitud de Googlebot que retorna un codigo de estado no-200 representa una oportunidad de indexaci\u00f3n p\u00e9rdida o presupuesto de rastreo desperdiciado.\n\nLas cadenas de redireccion 301 y 302 son comunes en tiendas de ecommerce que frecuentemente cambian estructuras de URL o migran de plataforma. El an\u00e1lisis de registros revela cuantas solicitudes de Googlebot encuentran cadenas de redireccion y la profundidad de esas cadenas. Identifique URLs donde Googlebot encuentra m\u00e1s de un salto de redireccion y aplane esas cadenas.\n\nLos errores 404 de Googlebot indican URLs que alguna vez fueron validas pero ahora retornan respuestas de no encontrado. En ecommerce, esto ocurre tipicamente cuando los productos se descontinuan o las categor\u00edas se reorganizan sin implementar redirecciones.\n\nLos errores de servidor 5xx son los codigos de estado m\u00e1s daninos para SEO. Activan la reducci\u00f3n de la tasa de rastreo. El an\u00e1lisis de registros puede revelar si los errores 5xx correlacionan con patrones de URL especificos, periodos horarios o picos de tr\u00e1fico.\n\nLas p\u00e1ginas soft 404, donde el servidor retorna un codigo 200 pero el contenido de la p\u00e1gina indica que el producto no esta disponible, son m\u00e1s dificiles de detectar solo en registros. Combine el an\u00e1lisis de registros con datos de rastreo para identificarlas. Los errores de servidor 5xx son los codigos de estado m\u00e1s daninos para el SEO y representan una preocupacion central del [SEO t\u00e9cnico](/blog/technical-seo-for-ecommerce).",
          items: [
            "Aplanar cadenas de redireccion donde Googlebot encuentra m\u00e1s de un salto a la URL final",
            "Investigar picos de 404 que correlacionen con cambios de sitemap, reestructuracion de categor\u00edas o eliminacion de productos",
            "Monitorear patrones de errores 5xx por tipo de URL y hora del dia para identificar problemas de capacidad del servidor",
            "Combinar datos de registro con an\u00e1lisis de rastreo para detectar p\u00e1ginas soft 404 que retornan codigos 200",
          ],
        },
        {
          title: "Análisis de patrones y tiempos de rastreo",
          content:
            "Analizar cuando Googlebot rastrea su sitio revela patrones que informan la planificacion de capacidad del servidor, las estrategias de frescura de contenido y la optimizaci\u00f3n del sitemap. Grafique las solicitudes de Googlebot en el tiempo para identificar picos y valles de actividad de rastreo a lo largo de las horas del dia, los dias de la semana y patrones estacionales.\n\nLa mayoria de los sitios de ecommerce ven actividad de Googlebot distribuida durante el dia pero a menudo con mayor intensidad durante las horas de menor actividad cuando los tiempos de respuesta del servidor son m\u00e1s rapidos.\n\nDespues de enviar un sitemap XML actualizado a traves de Search Console, monitoree los archivos de registro para medir la rapidez con que Googlebot comienza a solicitar las nuevas URLs. El retraso entre el env\u00edo del sitemap y el rastreo real proporciona informaci\u00f3n sobre la priorizacion de Google para su dominio.\n\nRastree la profundidad de rastreo que Googlebot alcanza en la jerarquia de su sitio. Analice la profundidad de ruta URL de las p\u00e1ginas rastreadas para determinar si Googlebot alcanza sus p\u00e1ginas de producto m\u00e1s profundas o se detiene en categor\u00edas de nivel superior.\n\nCompare patrones de rastreo antes y despues de cambios importantes del sitio. Los cambios en el volumen de rastreo despues de un cambio t\u00e9cnico confirman si la modificacion tuvo el efecto deseado.",
          items: [
            "Graficar el volumen de solicitudes de Googlebot en el tiempo para identificar picos y valles de actividad de rastreo",
            "Medir el retraso entre env\u00edos de sitemap y solicitudes de rastreo reales de Googlebot",
            "Analizar la profundidad de ruta URL de p\u00e1ginas rastreadas para verificar que Googlebot alcanza p\u00e1ginas de producto profundas",
            "Comparar patrones de rastreo antes y despues de cambios t\u00e9cnicos importantes para validar el impacto",
          ],
        },
        {
          title: "Configurar un pipeline de análisis de registros",
          content:
            "Construir una practica sostenible de an\u00e1lisis de registros requiere un pipeline que recopile, procese y visualice autom\u00e1ticamente los datos de registro. Para la mayoria de los equipos de ecommerce, el objetivo es un sistema que proporcione informes diarios o semanales de salud de rastreo con alertas para anomalias.\n\nComience determinando donde se generan sus registros y como acceder a ellos. Si usa alojamiento gestionado o una plataforma como Shopify, el acceso a registros puede ser limitado. Para tiendas auto-alojadas, configure su servidor web para transmitir registros a una ubicacion de almacenamiento centralizada.\n\nPara el an\u00e1lisis, elija entre herramientas comerciales y pipelines personalizados. Las herramientas comerciales como Botify, JetOctopus o Screaming Frog Log Analyzer ofrecen paneles pre-construidos enfocados en SEO. Los pipelines personalizados con BigQuery o Elasticsearch ofrecen m\u00e1s flexibilidad.\n\nEstablezca m\u00e9tricas de referencia: volumen diario de solicitudes de Googlebot, ratio de rastreo productivo, distribucion de frecuencia de rastreo por tipo de p\u00e1gina, tasa de errores por codigo de estado y tiempo de respuesta promedio. Configure alertas automatizadas para desviaciones de estas referencias.\n\nIntegre los datos de an\u00e1lisis de registros con sus otras fuentes de datos SEO. La combinacion de la frecuencia de rastreo de los registros con datos de impresiones de [Search Console](/academy/google-search-console-for-stores) y datos de tr\u00e1fico de Analytics crea una imagen completa.",
          items: [
            "Configurar recopilacion automatizada de registros desde su servidor web o CDN a almacenamiento centralizado",
            "Elegir entre herramientas de registro comerciales para paneles pre-construidos o pipelines personalizados para flexibilidad",
            "Establecer m\u00e9tricas de referencia para volumen de rastreo, ratio productivo, tasa de errores y tiempo de respuesta",
            "Integrar datos de registro con Search Console, Analytics y datos de herramientas de rastreo para visibilidad SEO completa",
          ],
          tip: "Programe revisiones mensuales de an\u00e1lisis de registros que comparen las m\u00e9tricas de rastreo actuales con sus referencias y meses anteriores. Cree una plantilla de informe estandarizada cubriendo la asignacion del presupuesto de rastreo, tendencias de errores, cantidad de p\u00e1ginas huerfanas y ratio de eficiencia de rastreo. Los informes consistentes transforman el an\u00e1lisis de registros de una auditoria puntual en una ventaja competitiva continua.",
        },
        {
          title: "Lo que Trawler revela sobre el comportamiento de crawl (y lo que los logs no pueden mostrar)",
          content:
            "El leak de 2024 nombro al crawler de Google Trawler y expuso las entradas que guian sus decisiones de scheduling. Los logs del servidor muestran lo que Trawler hizo realmente - que URLs solicito, con que frecuencia, con que codigos de respuesta - pero el leak es lo que explica por que.\n\nPara an\u00e1lisis de logs ecommerce, esto significa que patrones especificos ahora tienen nombres especificos. Las URLs que Trawler golpea frecuentemente con 200s son p\u00e1ginas que considera dignas de crawl: tienen link equity, profundidad de enlaces internos <=3, lastmod preciso y cambios de contenido recientes. Las URLs que Trawler golpea raramente o nunca puntuan mal en esas entradas - y en el 90% de los casos esto mapea a un linking interno delgado, no a topes de crawl budget.\n\nEl leak tambi\u00e9n confirma un patr\u00f3n largamente sospechado: Trawler crawlea las p\u00e1ginas de mayor calidad M\u00c1S frecuentemente, y las de menor calidad MENOS frecuentemente. La frecuencia de crawl aumentada a una seccion es una senal positiva - Google la ve como digna de refrescar. La frecuencia disminuida, especialmente despues de actualizaciones algoritmicas recientes, a menudo correlaciona con senales lowQuality o pandaDemotion en alza en esas URLs. Leelo como una senal de calidad, no solo una cuestion de presupuesto.",
          items: [
            "Trawler es el nombre del leak para el crawler de Google; los logs muestran su comportamiento, el leak explica las entradas",
            "Crawl frecuente = link equity + profundidad baja + lastmod preciso + updates recientes - diagnostica entradas faltantes primero",
            "Trawler crawlea p\u00e1ginas de alta calidad m\u00e1s frecuentemente, baja calidad menos - el crawl en caida a menudo es senal de calidad",
            "La mayoria de las p\u00e1ginas sub-crawleadas necesitan fixes de linking interno, no ingenieria de crawl budget",
          ],
        },
      ],
      navLabels: { previous: "Anterior", next: "Siguiente" },
    },
    it: {
      badge: "SEO avanzata",
      heading: "Analisi dei file di log",
      intro:
        "I file di log del server sono l'unica fonte di verita su come i crawler dei motori di ricerca interagiscono effettivamente con il vostro sito ecommerce. Mentre strumenti come Google Search Console forniscono riepiloghi aggregati, i dati grezzi dei log rivelano esattamente quali URL Googlebot richiede, con quale frequenza ritorna, quali pagine ignora completamente e dove il vostro [budget di crawl](/academy/crawl-budget-management) viene sprecato. Per i grandi cataloghi ecommerce, l'analisi dei file di log e la differenza tra indovinare i problemi di crawl e diagnosticarli con precisione.",
      readTime: "12 min di lettura",
      sections: [
        {
          title: "Comprendere i dati dei log del server per il SEO",
          content:
            "Ogni volta che un bot di un motore di ricerca richiede una pagina dal vostro server, il server web registra una voce di log contenente l'indirizzo IP, la stringa user agent, l'URL richiesto, il codice di risposta HTTP, la dimensione della risposta, il timestamp e il referrer. Per scopi SEO, i campi critici sono lo user agent, l'URL richiesto, il codice di stato restituito e il timestamp.\n\nGooglebot si identifica attraverso diverse stringhe user agent che distinguono tra rendering desktop, rendering mobile, crawling di immagini, AdsBot e altri crawler specializzati. Filtrare i log solo per le richieste Googlebot richiede la corrispondenza con tutti i pattern di user agent Googlebot conosciuti. Verificate l'identita di Googlebot incrociando gli indirizzi IP con i range ASN pubblicati da Google.\n\nI file di log sono tipicamente memorizzati in Common Log Format (CLF) o Combined Log Format. Se la vostra piattaforma ecommerce funziona dietro un CDN, potreste dover configurare il CDN per trasmettere gli indirizzi IP reali dei client.\n\nPer i negozi ecommerce con volumi di traffico significativi, i file di log grezzi possono crescere a gigabyte al giorno. L'analisi efficiente richiede strumenti specializzati o una pipeline di dati che ingerisce i log in un database interrogabile come BigQuery o Elasticsearch.",
          items: [
            "Filtrare i log per user agent Googlebot verificati e range IP per escludere bot falsi",
            "Catturare user agent, URL, codice di stato, timestamp e dimensione della risposta come campi minimi",
            "Configurare l'inoltro dei log CDN per assicurare che le richieste dei bot vengano catturate al server di origine",
            "Usare strumenti di analisi log specializzati o pipeline di dati per negozi con alto volume di dati",
          ],
          tip: "Configurate un flusso di log separato dedicato al traffico dei bot che filtra i visitatori umani a livello del server. Questo riduce drasticamente il volume di dati da elaborare e rende l'analisi del comportamento di Googlebot piu rapida e mirata.",
        },
        {
          title: "Analisi del budget di crawl per i cataloghi prodotti",
          content:
            "Il budget di crawl e il numero di pagine che Google scansionera sul vostro sito in un dato periodo. Per i siti piccoli, il budget di crawl e raramente un problema. Ma i negozi ecommerce con decine di migliaia di pagine prodotto, gerarchie di categorie multiple e navigazione a faccette possono facilmente esaurire il budget su URL a basso valore.\n\nL'analisi dei file di log rivela la vostra allocazione effettiva del budget di crawl. Calcolate il numero totale di richieste Googlebot al giorno, poi segmentate quelle richieste per pattern di URL. I pattern comuni da analizzare includono pagine di dettaglio prodotto, pagine di categoria, pagine di risultati di ricerca, URL di navigazione a faccette, pagine paginate e asset statici.\n\nIl rapporto di allocazione del crawl dovrebbe corrispondere approssimativamente alle vostre priorita di indicizzazione. Se il 60% delle richieste di Googlebot punta a URL di navigazione a faccette con contenuto sottile e duplicato, avete un problema severo di budget di crawl.\n\nCalcolate la frequenza di crawl per le vostre pagine piu importanti. Se le pagine prodotto di punta vengono scansionate solo ogni 30 giorni mentre i prodotti esauriti ricevono visite giornaliere, la vostra struttura di link interni sta inviando segnali sbagliati.\n\nTracciate le tendenze del budget di crawl nel tempo. Un tasso di crawl in calo spesso segnala il deterioramento della salute del sito.",
          items: [
            "Segmentare le richieste Googlebot per pattern di URL per identificare dove viene speso il budget di crawl",
            "Confrontare i rapporti di allocazione del crawl con la priorita di indicizzazione per ogni tipo di URL",
            "Bloccare i pattern di URL a basso valore che consumano budget di crawl senza beneficio di indicizzazione",
            "Tracciare la frequenza di crawl delle pagine prodotto ad alta priorita per assicurare una copertura adeguata",
          ],
          image: {
            src: "/images/academy/it/crawl-budget-allocation-chart.svg",
            alt: "Grafico a barre che mostra l'allocazione del budget per la scansione con il 60% sprecato negli URL di navigazione a faccette mentre solo il 15% raggiunge le pagine dei prodotti",
            caption: "Se il 60% delle richieste di Googlebot ha come target la navigazione a faccette mentre solo il 15% raggiunge le pagine dei prodotti, hai un grave problema di budget di scansione che richiede una correzione immediata.",
          },
          callout: {
            title: "Crawl-Verschwendung",
            text: "Segmenta le richieste di Googlebot in base al pattern URL per identificare dove viene speso il budget. Blocca le combinazioni di filtri di basso valore nel file robots.txt e utilizza i tag canonici per reindirizzare l'attenzione della scansione al prodotto indicizzabile p",
          },
        },
        {
          title: "Identificare sprechi di crawl e pagine orfane",
          content:
            "Lo spreco di crawl si verifica quando Googlebot spende tempo e risorse richiedendo URL senza valore SEO. Nei negozi ecommerce, le fonti comuni includono parametri di ID sessione, pagine di risultati di ricerca interna, combinazioni di parametri di ordinamento e filtro, e pagine di carrello e checkout.\n\nL'analisi dei file di log quantifica esattamente quanto budget di crawl consuma ogni categoria di spreco. Incrociate i vostri dati di log con l'indice desiderato confrontando gli URL richiesti da Googlebot con la vostra XML sitemap e il rapporto di copertura dell'indice di Search Console.\n\nLe pagine orfane sono il problema opposto: pagine che esistono e dovrebbero essere indicizzate ma non ricevono mai una singola richiesta da Googlebot. Per trovare le pagine orfane, confrontate la lista completa degli URL prodotto dal vostro database con gli URL che appaiono nei file di log in un periodo di 90 giorni.\n\nLe pagine orfane nell'ecommerce derivano tipicamente da link interni rotti, paginazione profonda che Googlebot non raggiunge, o prodotti recentemente aggiunti non ancora collegati dalle pagine di categoria.\n\nCreate una dashboard sistematica di salute del crawl che tracci il rapporto tra crawl produttivi e crawl sprecati. Un sito ecommerce sano dovrebbe puntare ad almeno il 70-80% di rapporto di crawl produttivo.",
          items: [
            "Quantificare lo spreco di crawl categorizzando le richieste Googlebot a pattern di URL non indicizzabili",
            "Trovare pagine orfane confrontando il database prodotti con i dati di crawl dei log su 90 giorni",
            "Correggere le cause delle pagine orfane: link rotti, paginazione profonda, voci sitemap mancanti",
            "Tracciare il rapporto di crawl produttivo puntando al 70-80% delle richieste Googlebot su pagine indicizzabili",
          ],
          tip: "Esportate la vostra lista di pagine orfane e incrociatela con Google Analytics o i dati di vendita della vostra piattaforma ecommerce. Le pagine orfane con un comprovato storico di conversione rappresentano opportunita immediate di recupero del fatturato una volta che riacquistano visibilita nei risultati di ricerca tramite link interni corretti.",
          image: {
            src: "/images/academy/it/crawl-waste-orphan-pages.svg",
            alt: "Diagramma comparativo che mostra gli sprechi di scansione derivanti da ID e filtri di sessione rispetto alle pagine orfane dovute a collegamenti interrotti e impaginazione profonda",
            caption: "Confronta il database dei tuoi prodotti con i dati di scansione dei log di 90 giorni per trovare le pagine orfane. Un sito di e-commerce sano dovrebbe mirare a un rapporto di scansione produttivo del 70-80%.",
          },
          callout: {
            title: "Verwaiste Seiten",
            text: "Le pagine orfane con una cronologia di conversioni comprovata rappresentano opportunità di recupero immediato delle entrate. Riferimenti incrociati agli URL orfani con i dati di vendita per stabilire la priorità a quali pagine riconnettersi tramite collegamento interno",
          },
        },
        {
          title: "Analisi dei codici di stato e rilevamento degli errori",
          content:
            "I codici di stato HTTP nei file di log rivelano la salute della vostra struttura URL dalla prospettiva di Google. Ogni richiesta Googlebot che restituisce un codice di stato diverso da 200 rappresenta un'opportunita di indicizzazione persa o budget di crawl sprecato.\n\nLe catene di redirect 301 e 302 sono comuni nei negozi ecommerce che cambiano frequentemente le strutture URL o migrano piattaforma. L'analisi dei log rivela quante richieste Googlebot incontrano catene di redirect e quanto sono profonde. Identificate gli URL dove Googlebot incontra piu di un salto di redirect e appiattite quelle catene.\n\nGli errori 404 da Googlebot indicano URL che erano una volta validi ma ora restituiscono risposte non trovato. Nell'ecommerce, questo accade tipicamente quando i prodotti vengono dismessi o le categorie vengono riorganizzate senza implementare redirect.\n\nGli errori server 5xx sono i codici di stato piu dannosi per il SEO. Attivano la riduzione del tasso di crawl. L'analisi dei log puo rivelare se gli errori 5xx correlano con pattern di URL specifici, periodi temporali o picchi di traffico. Approfondisci con la nostra guida sulla [SEO tecnica](/blog/technical-seo-for-ecommerce).\n\nLe pagine soft 404, dove il server restituisce un codice 200 ma il contenuto della pagina indica che il prodotto non e disponibile, sono piu difficili da rilevare nei soli log. Combinate l'analisi dei log con i dati di crawl per identificarle.",
          items: [
            "Appiattire le catene di redirect dove Googlebot incontra piu di un salto all'URL finale",
            "Investigare i picchi di 404 che correlano con cambiamenti del sitemap, ristrutturazione delle categorie o rimozione di prodotti",
            "Monitorare i pattern di errori 5xx per tipo di URL e ora del giorno per identificare problemi di capacita del server",
            "Combinare i dati dei log con l'analisi di crawl per rilevare pagine soft 404 che restituiscono codici 200",
          ],
        },
        {
          title: "Analisi dei pattern e dei tempi di crawl",
          content:
            "Analizzare quando Googlebot scansiona il vostro sito rivela pattern che informano la pianificazione della capacita del server, le strategie di freschezza dei contenuti e l'ottimizzazione del sitemap. Tracciate le richieste Googlebot nel tempo per identificare picchi e valli di attivita di crawl nelle ore del giorno, nei giorni della settimana e nei pattern stagionali.\n\nLa maggior parte dei siti ecommerce vede l'attivita di Googlebot distribuita durante il giorno ma spesso con intensita maggiore durante le ore di minor traffico quando i tempi di risposta del server sono piu veloci.\n\nDopo aver inviato un sitemap XML aggiornato tramite Search Console, monitorate i file di log per misurare quanto rapidamente Googlebot inizia a richiedere i nuovi URL. Il ritardo tra l'invio del sitemap e il crawl effettivo fornisce informazioni sulla prioritizzazione di Google per il vostro dominio.\n\nTracciate la profondita di crawl che Googlebot raggiunge nella gerarchia del vostro sito. Analizzate la profondita del percorso URL delle pagine scansionate per determinare se Googlebot raggiunge le pagine prodotto piu profonde o si ferma alle categorie di livello superiore.\n\nConfrontate i pattern di crawl prima e dopo i cambiamenti importanti del sito. Le variazioni nel volume di crawl dopo un cambiamento tecnico confermano se la modifica ha avuto l'effetto desiderato.",
          items: [
            "Tracciare il volume di richieste Googlebot nel tempo per identificare picchi e valli di attivita di crawl",
            "Misurare il ritardo tra gli invii del sitemap e le effettive richieste di crawl di Googlebot",
            "Analizzare la profondita del percorso URL delle pagine scansionate per verificare che Googlebot raggiunga le pagine prodotto profonde",
            "Confrontare i pattern di crawl prima e dopo i cambiamenti tecnici importanti per validare l'impatto",
          ],
        },
        {
          title: "Configurare una pipeline di analisi dei log",
          content:
            "Costruire una pratica sostenibile di analisi dei log richiede una pipeline che raccolga, elabori e visualizzi automaticamente i dati dei log. Per la maggior parte dei team ecommerce, l'obiettivo e un sistema che fornisca report giornalieri o settimanali sulla salute del crawl con avvisi per le anomalie.\n\nIniziate determinando dove vengono generati i vostri log e come accedervi. Se usate hosting gestito o una piattaforma come Shopify, l'accesso ai log potrebbe essere limitato. Per negozi self-hosted, configurate il vostro server web per trasmettere i log a una posizione di storage centralizzata.\n\nPer l'analisi, scegliete tra strumenti commerciali e pipeline personalizzate. Gli strumenti commerciali come Botify, JetOctopus o Screaming Frog Log Analyzer offrono dashboard pre-costruite focalizzate sul SEO. Le pipeline personalizzate con BigQuery o Elasticsearch offrono piu flessibilita.\n\nStabilite metriche di riferimento: volume giornaliero di richieste Googlebot, rapporto di crawl produttivo, distribuzione della frequenza di crawl per tipo di pagina, tasso di errore per codice di stato e tempo medio di risposta. Impostate avvisi automatizzati per deviazioni da questi riferimenti.\n\nIntegrate i dati di analisi dei log con le altre fonti di dati SEO. La combinazione della frequenza di crawl dei log con i dati di impressioni di Search Console e i dati di traffico Analytics crea un quadro completo. Approfondisci con la nostra guida su [Google Search Console](/academy/google-search-console-for-stores).",
          items: [
            "Configurare la raccolta automatizzata dei log dal server web o CDN allo storage centralizzato",
            "Scegliere tra strumenti di log commerciali per dashboard pre-costruite o pipeline personalizzate per la flessibilita",
            "Stabilire metriche di riferimento per volume di crawl, rapporto produttivo, tasso di errore e tempo di risposta",
            "Integrare i dati dei log con Search Console, Analytics e dati di strumenti di crawl per visibilita SEO completa",
          ],
          tip: "Programmate revisioni mensili di analisi dei log che confrontino le metriche di crawl attuali con i vostri riferimenti e i mesi precedenti. Create un modello di report standardizzato che copra allocazione del budget di crawl, tendenze degli errori, conteggio delle pagine orfane e rapporto di efficienza del crawl. Un reporting coerente trasforma l'analisi dei log da un audit una tantum in un vantaggio competitivo continuo.",
        },
        {
          title: "Cosa rivela Trawler sul comportamento di crawl (e cosa i log non possono mostrare)",
          content:
            "Il leak del 2024 ha nominato il crawler di Google Trawler e ha esposto gli input che guidano le sue decisioni di scheduling. I log del server mostrano cosa Trawler ha effettivamente fatto - quali URL ha richiesto, con che frequenza, con quali codici di risposta - ma il leak e cio che spiega perche.\n\nPer l'analisi log ecommerce, questo significa che pattern specifici ora hanno nomi specifici. Gli URL che Trawler colpisce frequentemente con 200 sono pagine che considera degne di crawl: hanno link equity, profondita di link interni <=3, lastmod accurato e modifiche di contenuto recenti. Gli URL che Trawler colpisce raramente o mai segnano male su quegli input - e nel 90% dei casi questo mappa a linking interno sottile, non a tetti di crawl budget.\n\nIl leak conferma anche un pattern a lungo sospettato: Trawler crawla le pagine di qualita piu alta PIU spesso, e quelle di qualita piu bassa MENO spesso. La frequenza di crawl aumentata verso una sezione e un segnale positivo - Google la vede come degna di essere rinfrescata. La frequenza diminuita, specialmente dopo aggiornamenti algoritmici recenti, spesso correla con segnali lowQuality o pandaDemotion in aumento su quegli URL. Leggilo come un segnale di qualita, non solo una questione di budget.",
          items: [
            "Trawler e il nome del leak per il crawler di Google; i log mostrano il suo comportamento, il leak spiega gli input",
            "Crawl frequente = link equity + profondita bassa + lastmod accurato + update recenti - diagnostica gli input mancanti prima",
            "Trawler crawla pagine di alta qualita piu spesso, bassa qualita meno - il crawl in calo e spesso un segnale di qualita",
            "La maggior parte delle pagine sotto-crawlate hanno bisogno di fix di linking interno, non di ingegneria del crawl budget",
          ],
        },
      ],
      navLabels: { previous: "Precedente", next: "Successivo" },
    },
    nl: {
      badge: "Geavanceerde SEO",
      heading: "Logbestandsanalyse",
      intro:
        "Serverlogbestanden zijn de enige bron van waarheid over hoe zoekmachinecrawlers daadwerkelijk met uw e-commercesite interageren. Terwijl tools zoals [Google Search Console](/academy/google-search-console-for-stores) geaggregeerde samenvattingen bieden, onthullen ruwe loggegevens precies welke URL's Googlebot opvraagt, hoe vaak het terugkeert, welke pagina's het volledig negeert en waar uw [crawlbudget](/academy/crawl-budget-management) wordt verspild. Voor grote e-commercecatalogi is logbestandsanalyse het verschil tussen gissen naar crawlproblemen en ze met precisie diagnosticeren.",
      readTime: "12 min leestijd",
      sections: [
        {
          title: "Serverloggegevens voor SEO begrijpen",
          content:
            "Elke keer dat een zoekmachinebot een pagina van uw server opvraagt, registreert de webserver een logvermelding met het IP-adres, de user agent-string, de opgevraagde URL, de HTTP-responscode, de responsgrootte, het tijdstempel en de referrer. Voor SEO-doeleinden zijn de kritieke velden de user agent, de opgevraagde URL, de geretourneerde statuscode en het tijdstempel.\n\nGooglebot identificeert zichzelf via verschillende user agent-strings die onderscheid maken tussen desktop-rendering, mobiele rendering, afbeeldingscrawling, AdsBot en andere gespecialiseerde crawlers. Het filteren van logs op alleen Googlebot-verzoeken vereist het matchen tegen alle bekende Googlebot user agent-patronen. Verifieer de Googlebot-identiteit door IP-adressen te kruisverwijzen met Google's gepubliceerde ASN-bereiken.\n\nLogbestanden worden typisch opgeslagen in Common Log Format (CLF) of Combined Log Format. Als uw e-commerceplatform achter een CDN draait, moet u mogelijk het CDN configureren om echte client-IP-adressen door te sturen.\n\nVoor e-commercewinkels met significant verkeersvolume kunnen ruwe logbestanden groeien tot gigabytes per dag. Efficiente analyse vereist gespecialiseerde loganalysetools of een datapipeline die logs inneemt in een bevraagbare database zoals BigQuery of Elasticsearch.",
          items: [
            "Logs filteren op geverifieerde Googlebot user agents en IP-bereiken om nepbots uit te sluiten",
            "User agent, URL, statuscode, tijdstempel en responsgrootte vastleggen als minimumvelden",
            "CDN-logdoorsturen configureren om ervoor te zorgen dat botverzoeken op de oorsprongsserver worden vastgelegd",
            "Gespecialiseerde loganalysetools of datapipelines gebruiken voor winkels met hoog logdatavolume",
          ],
          tip: "Stel een aparte logstream in die gewijd is aan botverkeer en menselijke bezoekers op serverniveau filtert. Dit vermindert het te verwerken datavolume drastisch en maakt de analyse van Googlebot-gedrag sneller en gerichter.",
        },
        {
          title: "Crawlbudgetanalyse voor productcatalogi",
          content:
            "Het crawlbudget is het aantal pagina's dat Google op uw site zal crawlen binnen een bepaalde periode. Voor kleine sites is het crawlbudget zelden een probleem. Maar e-commercewinkels met tienduizenden productpagina's, meerdere categoriehierarchien en gefacetteerde navigatie kunnen hun crawlbudget gemakkelijk uitputten op URL's met lage waarde.\n\nLogbestandsanalyse onthult uw werkelijke crawlbudgetverdeling. Bereken het totale aantal Googlebot-verzoeken per dag en segmenteer die verzoeken vervolgens op URL-patroon. Veelvoorkomende patronen om te analyseren zijn productdetailpagina's, categoriepagina's, zoekresultaatpagina's, gefacetteerde navigatie-URL's, gepagineerde pagina's en statische assets.\n\nDe verhouding van crawltoewijzing zou ruwweg overeen moeten komen met uw indexeringsprioriteiten. Als 60% van Googlebot's verzoeken gericht is op gefacetteerde navigatie-URL's met dunne, dubbele content, heeft u een ernstig crawlbudgetprobleem.\n\nBereken de crawlfrequentie voor uw belangrijkste pagina's. Als vlaggenschip-productpagina's slechts elke 30 dagen worden gecrawld terwijl uitverkochte producten dagelijkse bezoeken ontvangen, stuurt uw interne linkstructuur de verkeerde signalen.\n\nVolg crawlbudgettrends in de loop van de tijd. Een dalend crawlpercentage signaleert vaak verslechterende sitegezondheid.",
          items: [
            "Googlebot-verzoeken segmenteren op URL-patroon om te identificeren waar het crawlbudget wordt besteed",
            "Crawltoewijzingsverhoudingen vergelijken met indexeringsprioriteit voor elk URL-type",
            "URL-patronen met lage waarde blokkeren die crawlbudget verbruiken zonder indexeringsvoordeel",
            "Crawlfrequentie volgen voor productpagina's met hoge prioriteit om adequate dekking te garanderen",
          ],
          image: {
            src: "/images/academy/nl/crawl-budget-allocation-chart.svg",
            alt: "Staafdiagram waarin de toewijzing van crawlbudget wordt weergegeven, waarbij 60 procent wordt verspild aan gefacetteerde navigatie-URL's, terwijl slechts 15 procent de productpagina's bereikt",
            caption: "Als 60% van de Googlebots target-facetnavigatie aanvraagt, terwijl slechts 15% de productpagina's bereikt, heeft u een ernstig crawlbudgetprobleem dat onmiddellijk moet worden verholpen.",
          },
          callout: {
            title: "Crawl-Verschwendung",
            text: "Segmenteer Googlebot-verzoeken op URL-patroon om te identificeren waar het budget wordt uitgegeven. Blokkeer filtercombinaties met lage waarden in robots.txt en gebruik canonieke tags om de crawl-aandacht om te leiden naar indexeerbare productp",
          },
        },
        {
          title: "Crawlverspilling en weespagina's identificeren",
          content:
            "Crawlverspilling treedt op wanneer Googlebot tijd en resources besteedt aan het opvragen van URL's die geen SEO-waarde bieden. In e-commercewinkels zijn veelvoorkomende bronnen sessie-ID-parameters, interne zoekresultaatpagina's, sorteer- en filterparametercombinaties, en winkelwagen- en checkoutpagina's.\n\nLogbestandsanalyse kwantificeert precies hoeveel crawlbudget elke verspillingscategorie verbruikt. Kruisverwijz uw loggegevens met uw beoogde index door de URL's die Googlebot opvraagt te vergelijken met uw XML-sitemap en het indexdekkingsrapport van Search Console.\n\nWeespagina's zijn het tegenovergestelde probleem: pagina's die bestaan en geindexeerd moeten worden maar nooit een enkel Googlebot-verzoek ontvangen. Om weespagina's te vinden, vergelijkt u de volledige lijst product-URL's uit uw database met de URL's die over een periode van 90 dagen in uw logbestanden verschijnen.\n\nWeespagina's in e-commerce ontstaan typisch door gebroken interne links, diepe paginering die Googlebot niet bereikt, of recent toegevoegde producten die nog niet gelinkt zijn vanuit categoriepagina's.\n\nMaak een systematisch crawlgezondheidsdashboard dat de verhouding volgt tussen productieve crawls en verspilde crawls. Een gezonde e-commercesite moet mikken op minstens 70-80% productieve crawlverhouding.",
          items: [
            "Crawlverspilling kwantificeren door Googlebot-verzoeken aan niet-indexeerbare URL-patronen te categoriseren",
            "Weespagina's vinden door de productdatabase te vergelijken met 90 dagen logcrawlgegevens",
            "Oorzaken van weespagina's oplossen: gebroken links, diepe paginering, ontbrekende sitemap-vermeldingen",
            "Productieve crawlverhouding volgen met als doel 70-80% van Googlebot-verzoeken op indexeerbare pagina's",
          ],
          tip: "Exporteer uw lijst met weespagina's en kruisverwijz deze met Google Analytics of de verkoopgegevens van uw e-commerceplatform. Weespagina's met bewezen conversiegeschiedenis vertegenwoordigen directe omzetherstelmogelijkheden zodra ze zoekzichtbaarheid herwinnen door correcte interne linking.",
          image: {
            src: "/images/academy/nl/crawl-waste-orphan-pages.svg",
            alt: "Vergelijkingsdiagram dat crawlverspilling van sessie-ID's en filters toont versus weespagina's van verbroken links en diepe paginering",
            caption: "Vergelijk uw productdatabase met logcrawlgegevens van 90 dagen om verweesde pagina's te vinden. Een gezonde e-commercesite moet zich richten op een productieve crawlratio van 70-80%.",
          },
          callout: {
            title: "Verwaiste Seiten",
            text: "Weespagina's met een bewezen conversiegeschiedenis bieden mogelijkheden voor onmiddellijk herstel van inkomsten. Vergelijk wees-URL's met verkoopgegevens om te bepalen welke pagina's opnieuw moeten worden verbonden via een interne link",
          },
        },
        {
          title: "Statuscodeanalyse en foutdetectie",
          content:
            "HTTP-statuscodes in logbestanden onthullen de gezondheid van uw URL-structuur vanuit Google's perspectief. Elk Googlebot-verzoek dat een niet-200 statuscode retourneert, vertegenwoordigt een gemiste indexeringsmogelijkheid of verspild crawlbudget.\n\n301- en 302-redirectketens komen veel voor in e-commercewinkels die regelmatig URL-structuren wijzigen of van platform migreren. Loganalyse onthult hoeveel Googlebot-verzoeken redirectketens tegenkomen en hoe diep die ketens gaan. Identificeer URL's waar Googlebot meer dan een redirecthop tegenkomt en maak die ketens plat.\n\n404-fouten van Googlebot wijzen op URL's die ooit geldig waren maar nu niet-gevonden-antwoorden retourneren. In e-commerce gebeurt dit typisch wanneer producten worden uitgefaseerd of categorieen worden gereorganiseerd zonder redirects.\n\n5xx-serverfouten zijn de meest schadelijke statuscodes voor SEO. Ze activeren crawlpercentageverlaging. Loganalyse kan onthullen of 5xx-fouten correleren met specifieke URL-patronen, tijdsperioden of verkeerspieken.\n\nSoft 404-pagina's, waar de server een 200-statuscode retourneert maar de pagina-inhoud aangeeft dat het product niet beschikbaar is, zijn moeilijker te detecteren in logs alleen. Combineer loganalyse met crawlgegevens om ze te identificeren.\n\nVoor een diepere duik in deze technische fundamenten, zie onze gids over [technische SEO voor ecommerce](/blog/technical-seo-for-ecommerce).",
          items: [
            "Redirectketens platmaken waar Googlebot meer dan een hop naar de uiteindelijke URL tegenkomt",
            "404-pieken onderzoeken die correleren met sitemapwijzigingen, categorieherstructurering of productverwijdering",
            "5xx-foutpatronen monitoren op URL-type en tijdstip om servercapaciteitsproblemen te identificeren",
            "Loggegevens combineren met crawlanalyse om soft 404-pagina's te detecteren die 200-statuscodes retourneren",
          ],
        },
        {
          title: "Crawlpatroon- en timinganalyse",
          content:
            "Analyseren wanneer Googlebot uw site crawlt onthult patronen die de servercapaciteitsplanning, contentversheidsstrategieen en sitemapoptimalisatie informeren. Plot Googlebot-verzoeken in de tijd om crawlactiviteitspieken en -dalen te identificeren over uren van de dag, dagen van de week en langere seizoenspatronen.\n\nDe meeste e-commercesites zien Googlebot-activiteit verdeeld over de dag maar vaak met hogere intensiteit tijdens daluren wanneer serverresponstijden het snelst zijn.\n\nNa het indienen van een bijgewerkte XML-sitemap via Search Console, monitor logbestanden om te meten hoe snel Googlebot begint met het opvragen van de nieuwe URL's. De vertraging tussen sitemap-indiening en daadwerkelijke crawl geeft inzicht in Google's prioritering van uw domein.\n\nVolg de crawldiepte die Googlebot bereikt in de hierarchie van uw site. Analyseer de URL-paddiepte van gecrawlde pagina's om te bepalen of Googlebot uw diepste productpagina's bereikt of stopt bij hogere categorieen.\n\nVergelijk crawlpatronen voor en na grote sitewijzigingen. Veranderingen in crawlvolume na een technische wijziging bevestigen of de wijziging het beoogde effect had.",
          items: [
            "Googlebot-verzoekvolume in de tijd plotten om pieken en dalen in crawlactiviteit te identificeren",
            "De vertraging meten tussen sitemap-indieningen en daadwerkelijke Googlebot-crawlverzoeken",
            "URL-paddiepte van gecrawlde pagina's analyseren om te verifieren dat Googlebot diepe productpagina's bereikt",
            "Crawlpatronen voor en na grote technische wijzigingen vergelijken om impact te valideren",
          ],
        },
        {
          title: "Een loganalysepipeline opzetten",
          content:
            "Het bouwen van een duurzame loganalysepraktijk vereist een pipeline die automatisch loggegevens verzamelt, verwerkt en visualiseert. Voor de meeste e-commerceteams is het doel een systeem dat dagelijkse of wekelijkse crawlgezondheidsrapporten levert met waarschuwingen voor anomalieen.\n\nBegin met vast te stellen waar uw logs worden gegenereerd en hoe u ze kunt openen. Als u beheerde hosting of een platform zoals Shopify gebruikt, kan logtoegang beperkt zijn. Voor zelf-gehoste winkels configureert u uw webserver om logs te streamen naar een gecentraliseerde opslaglocatie.\n\nKies voor analyse tussen commerciele loganalysetools en aangepaste pipelines. Commerciele tools zoals Botify, JetOctopus of Screaming Frog Log Analyzer bieden voorgebouwde SEO-gerichte dashboards. Aangepaste pipelines met BigQuery of Elasticsearch bieden meer flexibiliteit.\n\nStel basislijnmetrieken vast: dagelijks Googlebot-verzoekvolume, productieve crawlverhouding, crawlfrequentieverdeling per paginatype, foutpercentage per statuscode en gemiddelde responstijd. Stel geautomatiseerde waarschuwingen in voor afwijkingen van deze basislijnen.\n\nIntegreer loganalysegegevens met uw andere SEO-gegevensbronnen. De combinatie van logcrawlfrequentie met Search Console-impressiegegevens en Analytics-verkeersgegevens creert een volledig beeld.",
          items: [
            "Geautomatiseerde logverzameling configureren van webserver of CDN naar gecentraliseerde opslag",
            "Kiezen tussen commerciele logtools voor voorgebouwde dashboards of aangepaste pipelines voor flexibiliteit",
            "Basislijnmetrieken vaststellen voor crawlvolume, productieve verhouding, foutpercentage en responstijd",
            "Loggegevens integreren met Search Console, Analytics en crawltoolgegevens voor complete SEO-zichtbaarheid",
          ],
          tip: "Plan maandelijkse loganalysereviews die huidige crawlmetrieken vergelijken met uw basislijnen en vorige maanden. Maak een gestandaardiseerd rapporttemplate dat crawlbudgetverdeling, fouttrends, aantal weespagina's en crawlefficientieverhouding dekt. Consistente rapportage transformeert loganalyse van een eenmalige audit naar een doorlopend concurrentievoordeel.",
        },
        {
          title: "Wat Trawler onthult over crawl-gedrag (en wat logs niet kunnen tonen)",
          content:
            "Het leak van 2024 noemde Googles crawler Trawler en legde de inputs bloot die zijn schedulingbeslissingen aandrijven. Server-logs tonen wat Trawler werkelijk deed - welke URLs hij vroeg, hoe vaak, met welke response codes - maar het leak is wat verklaart waarom.\n\nVoor ecommerce log-analyse betekent dit dat specifieke patronen nu specifieke namen hebben. URLs die Trawler vaak met 200s raakt zijn pagina's die hij als crawl-waardig beschouwt: ze hebben link equity, interne linkdiepte <=3, accurate lastmod en recente inhoudsveranderingen. URLs die Trawler zelden of nooit raakt scoren slecht op die inputs - en in 90% van de gevallen mapt dat op dunne interne linking, niet op crawl-budget plafonds.\n\nHet leak bevestigt ook een lang vermoed patroon: Trawler crawlt hogere-kwaliteit pagina's VAKER, en lagere-kwaliteit pagina's MINDER vaak. Verhoogde crawl-frequentie naar een sectie is een positief signaal - Google ziet het als de moeite waard om te verversen. Verlaagde frequentie, vooral na recente algoritmische updates, correleert vaak met stijgende lowQuality- of pandaDemotion-signalen op die URLs. Lees het als een kwaliteitssignaal, niet alleen een budgetkwestie.",
          items: [
            "Trawler is de leak-naam voor Googles crawler; logs tonen zijn gedrag, het leak verklaart de inputs",
            "Frequente crawl = link equity + lage diepte + accurate lastmod + recente updates - diagnosticeer ontbrekende inputs eerst",
            "Trawler crawlt hoge-kwaliteit pagina's vaker, lage kwaliteit minder - dalende crawl is vaak een kwaliteitssignaal",
            "De meeste onder-gecrawlde pagina's hebben interne-linking fixes nodig, geen crawl-budget engineering",
          ],
        },
      ],
      navLabels: { previous: "Vorige", next: "Volgende" },
    },
  },
};
