import type { AcademyTopic } from "../../types";

export const internationalEcommerceSeo: AcademyTopic = {
  slug: "international-ecommerce-seo",
  cluster: 9,
  resources: [{"label":"Google Hreflang Documentation","url":"https://developers.google.com/search/docs/specialty/international/localized-versions","type":"docs"},{"label":"Hreflang Tag Generator","url":"https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/","type":"tool"},{"label":"Hreflang Testing Tool","url":"https://technicalseo.com/tools/hreflang/","type":"tool"}],
  content: {
    en: {
      badge: "Advanced SEO",
      heading: "International Ecommerce SEO",
      intro:
        "Selling across borders introduces a layer of technical and strategic complexity that domestic SEO never touches. From hreflang implementation to currency-aware landing pages, [international ecommerce SEO](/blog/international-ecommerce-seo) requires precise configuration to ensure the right product pages appear for the right audiences in each market.",
      readTime: "12 min read",
      sections: [
        {
          title: "Domain Structure: ccTLDs vs. Subdirectories vs. Subdomains",
          content:
            "The choice between country-code top-level domains (ccTLDs like .de, .fr), subdirectories (/de/, /fr/), and subdomains (de.example.com) has lasting consequences for link equity distribution, crawl efficiency, and brand perception. Each approach comes with distinct tradeoffs that depend on your resources, market strategy, and existing domain authority.\n\nccTLDs provide the strongest geo-targeting signal and build local trust. German shoppers seeing a .de domain feel confident the store serves their market. However, each ccTLD starts with zero domain authority, requires separate Search Console properties, and splits your backlink profile across multiple domains. This approach demands significant investment in link building per market.\n\nSubdirectories (example.com/de/) consolidate all link equity under a single domain, making them the preferred choice for most ecommerce operations. A single domain with strong authority lifts all regional subdirectories. Google can geo-target subdirectories through Search Console settings, and you maintain one crawl budget pool. The downside is weaker local trust signals compared to ccTLDs.\n\nSubdomains (de.example.com) sit in an awkward middle ground. Google treats them as semi-separate entities, so link equity does not flow freely between subdomains. They require separate crawl budgets and often separate hosting, yet lack the local trust benefits of ccTLDs. Unless your CMS architecture forces subdomains, avoid this approach.",
          items: [
            "ccTLDs: strongest geo-signal, highest cost, split authority",
            "Subdirectories: consolidated authority, single crawl budget, flexible geo-targeting",
            "Subdomains: semi-separate in Google's eyes, worst of both worlds for most stores",
            "Use Google Search Console international targeting to associate subdirectories with countries",
          ],
          image: {
            src: "/images/academy/international-domain-structures.svg",
            alt: "Comparison diagram of ccTLD, subdirectory, and subdomain approaches showing pros and cons of each for international ecommerce SEO",
            caption: "Subdirectories consolidate all link equity under a single domain and are the preferred choice for most ecommerce operations. ccTLDs provide stronger geo-targeting but split authority.",
          },
          callout: {
            title: "Authority Consolidation",
            text: "A single domain with strong authority lifts all regional subdirectories. ccTLDs start with zero domain authority per market and require separate link building investment in each country.",
          },
        },
        {
          title: "Hreflang Implementation",
          content:
            "Hreflang tags tell search engines which language and regional version of a page to serve for a given query. Without them, Google might show your English product page to French users, or worse, flag your regional variations as duplicate content and suppress them entirely. Proper [canonical tag configuration](/academy/canonical-tags-for-ecommerce) works hand-in-hand with hreflang to prevent these issues.\n\nThe hreflang attribute uses ISO 639-1 language codes and optional ISO 3166-1 Alpha-2 country codes. A page targeting French speakers in Canada would use hreflang=\"fr-CA\", while a page for French speakers in France uses hreflang=\"fr-FR\". You must also include an x-default tag that points to your fallback page, typically the English version or a language-selector landing page.\n\nHreflang can be implemented via HTML link elements in the <head>, HTTP headers (necessary for PDFs and non-HTML resources), or XML sitemaps. For stores with thousands of products across multiple languages, XML sitemap implementation is the most maintainable approach. Each sitemap entry lists all language/region alternates for that URL, which avoids bloating your HTML head section.\n\nThe most common hreflang error is missing return tags. If page A references page B as its German alternate, page B must reference page A back. Asymmetric hreflang annotations are ignored by Google entirely. Use a validation tool like Aleyda Solis's hreflang tag generator or Screaming Frog's hreflang audit to catch these issues before they reach production.",
          tip: "Always include a self-referencing hreflang tag on every page. The English page should declare itself as the en alternate. Missing self-references cause validation failures across the entire hreflang cluster.",
          image: {
            src: "/images/academy/hreflang-implementation.svg",
            alt: "Diagram showing bidirectional hreflang links between English and German page variants with x-default fallback",
            caption: "If page A references page B as its German alternate, page B must reference page A back. Asymmetric hreflang annotations are ignored by Google entirely.",
          },
          callout: {
            title: "Return Tag Rule",
            text: "The most common hreflang error is missing return tags. Use XML sitemap implementation for stores with thousands of products across multiple languages to keep annotations maintainable.",
          },
        },
        {
          title: "Content Localization vs. Translation",
          content:
            "Machine-translating your product pages and calling it localization is a shortcut that costs conversions and rankings. True localization means adapting product descriptions, sizing charts, payment references, shipping information, and cultural context for each target market.\n\nConsider a US-based shoe store expanding to Germany. Direct translation of product descriptions misses that Germans use EU sizing, expect prices inclusive of VAT, prefer bank transfer (Uberweisung) alongside card payments, and expect delivery timeframes stated in Werktage (working days). Search behavior also differs: Germans might search for \"Laufschuhe Damen\" rather than a literal translation of \"women's running shoes.\"\n\nKeyword research must be repeated for each market. Do not assume translated keywords carry the same search volume or intent. The Spanish market might prefer different product category names than what a direct translation suggests. Use local keyword tools, analyze local competitor sites, and validate with native speakers who understand ecommerce terminology.\n\nReviews, user-generated content, and trust signals also need localization. Showing English-language reviews on a German store page undermines trust. Integrate local review platforms (Trustpilot for Europe, for example) and display reviews in the local language.",
        },
        {
          title: "Currency, Pricing, and Structured Data",
          content:
            "International stores must handle multi-currency pricing with precision, both for user experience and for structured data accuracy. Your Product schema markup must reflect the actual currency and price shown to the user on that specific regional page. Showing EUR prices on the page but declaring USD in your schema will trigger rich result penalties.\n\nUse the priceCurrency field in your Product structured data with the correct ISO 4217 currency code for each regional page. If you offer dynamic currency conversion, the structured data should match the default displayed price, not a converted estimate. Google's rich results testing tool validates this per-page, so test regional variations separately.\n\nShipping cost structured data (shippingDetails in Product schema) must also be regionalized. Declaring free US shipping on a page targeting German customers is misleading and can result in merchant penalties in Google Shopping. Define shippingDestination with the correct country code and accurate delivery rates for each market.\n\nTax handling varies dramatically by country. US prices are typically shown pre-tax, while EU regulations require VAT-inclusive pricing. Make sure your structured data and displayed prices align with local legal requirements. Discrepancies between what Google reads in your markup and what users see on the page erode trust and can trigger manual actions.",
          items: [
            "Match priceCurrency in Product schema to the actual displayed currency per region",
            "Define region-specific shippingDetails with correct shippingDestination",
            "Align tax-inclusive vs. tax-exclusive pricing with local regulations",
            "Test structured data validation for each regional page variant separately",
          ],
          tip: "Create a structured data template per region that automatically pulls the correct currency code, tax treatment, and shipping destination. This prevents copy-paste errors when rolling out products across markets.",
        },
        {
          title: "International Technical Considerations",
          content:
            "Server location and CDN configuration directly impact page speed for international visitors. A store hosted on a single US server will deliver slow load times to European and Asian shoppers. Use a CDN with edge nodes in your target markets, and configure it to serve region-specific content without redirect chains.\n\nAvoid IP-based redirects that force users to a regional version without consent. Google crawls primarily from US IP addresses, so IP redirects can prevent Googlebot from discovering your non-US pages. Instead, use a banner or interstitial that suggests the regional version while allowing users (and bots) to access any version freely.\n\nXML sitemaps should be structured to help search engines discover all regional variants efficiently. Create a sitemap index that references regional sub-sitemaps, each containing the hreflang annotations for that market's URLs. Submit each regional sitemap to the corresponding Search Console property.\n\nMonitor international search performance separately per market. Set up Search Console properties for each country or subdirectory target, track keyword rankings with geo-specific rank tracking tools, and segment your analytics by region. A page ranking well in the US might be invisible in Germany due to hreflang errors, content gaps, or local competitor dominance.",
        },
        {
          title: "Managing International Link Building",
          content:
            "Link authority does not transfer evenly across international page variants. A backlink to your US product page does not boost your German version's rankings in google.de. Each regional market requires its own link building strategy, targeting local publications, industry directories, and regional influencers. Our [international SEO services](/international-seo) can help you build market-specific authority at scale.\n\nIdentify link prospects per market by analyzing competitor backlink profiles in each target country. A German competitor's backlink sources reveal which local blogs, magazines, and directories actively link to ecommerce stores in that vertical. Tools like Ahrefs and Semrush allow filtering by referring domain country.\n\nDigital PR campaigns should be adapted per market, not just translated. A product launch story that resonates with US media might need a completely different angle for French journalists. Work with local PR agencies or freelancers who understand each market's media landscape and journalist expectations.\n\nInternal linking across language versions should be strategic. Your English blog post about running shoe technology should link to the English product pages, while the German translation links to the German products. Cross-language internal links confuse the hreflang relationship and dilute topical relevance signals.",
        },
      ],
      navLabels: { previous: "Previous", next: "Next" },
    },
    de: {
      badge: "Fortgeschrittenes SEO",
      heading: "Internationales E-Commerce-SEO",
      intro:
        "Der grenzuberschreitende Verkauf bringt eine technische und strategische Komplexitat mit sich, die rein nationale SEO-Strategien nie beruhren. Von der Hreflang-Implementierung bis zu wahrungsspezifischen Landingpages erfordert internationales E-Commerce-SEO eine prazise Konfiguration, damit die richtigen Produktseiten fur die richtigen Zielgruppen in jedem Markt erscheinen. Weitere Informationen finden Sie in unserem Leitfaden zu [internationales Ecommerce-SEO](/blog/international-ecommerce-seo).",
      readTime: "12 Min. Lesezeit",
      sections: [
        {
          title: "Domain-Struktur: ccTLDs vs. Unterverzeichnisse vs. Subdomains",
          content:
            "Die Wahl zwischen landesspezifischen Top-Level-Domains (ccTLDs wie .de, .fr), Unterverzeichnissen (/de/, /fr/) und Subdomains (de.example.com) hat langfristige Auswirkungen auf die Verteilung der Link-Autoritat, die Crawl-Effizienz und die Markenwahrnehmung. Jeder Ansatz bringt unterschiedliche Kompromisse mit sich.\n\nccTLDs liefern das starkste Geo-Targeting-Signal und schaffen lokales Vertrauen. Deutsche Kaufer, die eine .de-Domain sehen, fuhlen sich sicher, dass der Shop ihren Markt bedient. Allerdings startet jede ccTLD ohne Domain-Autoritat, erfordert separate Search-Console-Properties und teilt Ihr Backlink-Profil auf mehrere Domains auf.\n\nUnterverzeichnisse (example.com/de/) bundeln die gesamte Link-Autoritat unter einer einzigen Domain und sind daher fur die meisten E-Commerce-Betriebe die bevorzugte Wahl. Eine einzelne Domain mit starker Autoritat hebt alle regionalen Unterverzeichnisse. Google kann Unterverzeichnisse uber die Search Console geo-targeten.\n\nSubdomains (de.example.com) befinden sich in einem ungustigen Mittelfeld. Google behandelt sie als teilweise separate Einheiten, sodass Link-Autoritat nicht frei zwischen Subdomains flie?t.",
                    image: {
            src: "/images/academy/de/international-domain-structures.svg",
            alt: "Internationale Domain-Struktur-Optionen: ccTLD, Unterverzeichnis und Subdomain mit Vor- und Nachteilen",
            caption: "Unterverzeichnisse (beispiel.com/de/) bieten fuer die meisten E-Commerce-Shops das beste Verhaeltnis aus SEO-Signal und Verwaltbarkeit.",
          },
items: [
            "ccTLDs: starkstes Geo-Signal, hochste Kosten, geteilte Autoritat",
            "Unterverzeichnisse: konsolidierte Autoritat, ein Crawl-Budget, flexibles Geo-Targeting",
            "Subdomains: teilweise separat in Googles Augen, fur die meisten Shops die schlechteste Option",
            "Google Search Console International Targeting nutzen, um Unterverzeichnisse Landern zuzuordnen",
          ],
          callout: {
            title: "Domain-Strategie-Entscheidung",
            text: "Unterverzeichnisse buendeln die gesamte Domain-Autoritaet an einem Ort, waehrend ccTLDs (beispiel.de) das staerkste Geo-Signal senden, aber separate Autoritaet aufbauen muessen. Fuer die meisten E-Commerce-Shops sind Unterverzeichnisse die beste Wahl.",
          },
        },
        {
          title: "Hreflang-Implementierung",
          content:
            "Hreflang-Tags teilen Suchmaschinen mit, welche Sprach- und Regionalversion einer Seite fur eine bestimmte Anfrage angezeigt werden soll. Ohne sie konnte Google Ihre englische Produktseite franzosischen Nutzern anzeigen oder Ihre regionalen Varianten als Duplicate Content einstufen. Eine korrekte [Canonical-Tag-Konfiguration](/academy/canonical-tags-for-ecommerce) arbeitet Hand in Hand mit Hreflang, um diese Probleme zu vermeiden.\n\nDas Hreflang-Attribut verwendet ISO 639-1 Sprachcodes und optionale ISO 3166-1 Alpha-2 Landercodes. Eine Seite fur franzosischsprachige Kanadier verwendet hreflang=\"fr-CA\", wahrend eine Seite fur Franzosen hreflang=\"fr-FR\" nutzt. Sie mussen auch ein x-default-Tag einbinden, das auf Ihre Fallback-Seite verweist.\n\nHreflang kann uber HTML-Link-Elemente im <head>, HTTP-Header oder XML-Sitemaps implementiert werden. Fur Shops mit Tausenden von Produkten in mehreren Sprachen ist die XML-Sitemap-Implementierung der wartbarste Ansatz.\n\nDer haufigste Hreflang-Fehler sind fehlende Ruckverweise. Wenn Seite A auf Seite B als deutsche Alternative verweist, muss Seite B auf Seite A zuruckverweisen. Asymmetrische Hreflang-Annotationen werden von Google vollstandig ignoriert.",
          image: {
            src: "/images/academy/de/hreflang-implementation.svg",
            alt: "Hreflang-Implementierungsablauf mit Selbstreferenzierung, bidirektionalen Verweisen und drei Implementierungsmethoden",
            caption: "Jede Seite muss alle Sprachversionen referenzieren, einschliesslich sich selbst. Waehlen Sie eine Methode und bleiben Sie konsistent.",
          },
          tip: "Fugen Sie auf jeder Seite immer ein selbstreferenzierendes Hreflang-Tag ein. Die englische Seite sollte sich selbst als en-Alternative deklarieren. Fehlende Selbstreferenzen verursachen Validierungsfehler im gesamten Hreflang-Cluster.",
          callout: {
            title: "Haeufigster Hreflang-Fehler",
            text: "Fehlende Selbstreferenzierung ist der haeufigste Hreflang-Fehler. Jede Seite muss sich selbst UND alle anderen Sprachversionen referenzieren. Fehlende bidirektionale Verweise werden von Google ignoriert.",
          },
        },
        {
          title: "Content-Lokalisierung vs. Ubersetzung",
          content:
            "Produktseiten maschinell zu ubersetzen und dies als Lokalisierung zu bezeichnen, ist eine Abkurzung, die Conversions und Rankings kostet. Echte Lokalisierung bedeutet, Produktbeschreibungen, Gro?entabellen, Zahlungsreferenzen, Versandinformationen und kulturellen Kontext fur jeden Zielmarkt anzupassen.\n\nDie Keyword-Recherche muss fur jeden Markt neu durchgefuhrt werden. Gehen Sie nicht davon aus, dass ubersetzte Keywords das gleiche Suchvolumen oder die gleiche Suchintention haben. Der spanische Markt bevorzugt moglicherweise andere Produktkategorienamen als eine direkte Ubersetzung vermuten lasst.\n\nBewertungen, nutzergenerierte Inhalte und Vertrauenssignale mussen ebenfalls lokalisiert werden. Englischsprachige Bewertungen auf einer deutschen Shop-Seite untergraben das Vertrauen. Integrieren Sie lokale Bewertungsplattformen und zeigen Sie Bewertungen in der Landessprache an.",
        },
        {
          title: "Wahrung, Preise und strukturierte Daten",
          content:
            "Internationale Shops mussen die Multi-Wahrungspreisgestaltung mit Prazision handhaben, sowohl fur die Benutzererfahrung als auch fur die Genauigkeit der strukturierten Daten. Ihr Product-Schema-Markup muss die tatsachliche Wahrung und den Preis widerspiegeln, die dem Benutzer auf der jeweiligen regionalen Seite angezeigt werden.\n\nVerwenden Sie das Feld priceCurrency in Ihren Product-strukturierten Daten mit dem korrekten ISO 4217-Wahrungscode fur jede regionale Seite. Wenn Sie dynamische Wahrungsumrechnung anbieten, sollten die strukturierten Daten dem angezeigten Standardpreis entsprechen.\n\nVersandkosten-strukturierte Daten mussen ebenfalls regionalisiert werden. Kostenloser US-Versand auf einer Seite fur deutsche Kunden ist irrefuhrend und kann zu Handler-Strafen in Google Shopping fuhren.\n\nDie Steuerbehandlung variiert dramatisch je nach Land. US-Preise werden typischerweise ohne Steuern angezeigt, wahrend EU-Vorschriften MwSt.-inklusive Preise erfordern.",
          items: [
            "priceCurrency im Product-Schema an die tatsachlich angezeigte Wahrung pro Region anpassen",
            "Regionsspezifische shippingDetails mit korrektem shippingDestination definieren",
            "Steuerinklusive vs. steuerexklusive Preise an lokale Vorschriften anpassen",
            "Strukturierte-Daten-Validierung fur jede regionale Seitenvariante separat testen",
          ],
          tip: "Erstellen Sie pro Region ein Structured-Data-Template, das automatisch den korrekten Wahrungscode, die Steuerbehandlung und das Versandziel einfugt.",
        },
        {
          title: "Internationale technische Aspekte",
          content:
            "Serverstandort und CDN-Konfiguration beeinflussen direkt die Seitengeschwindigkeit fur internationale Besucher. Ein auf einem einzigen US-Server gehosteter Shop liefert langsame Ladezeiten fur europaische und asiatische Kaufer. Verwenden Sie ein CDN mit Edge-Nodes in Ihren Zielmarkten.\n\nVermeiden Sie IP-basierte Weiterleitungen, die Benutzer ohne Zustimmung zu einer regionalen Version zwingen. Google crawlt hauptsachlich von US-IP-Adressen, sodass IP-Weiterleitungen Googlebot daran hindern konnen, Ihre nicht-US-Seiten zu entdecken.\n\nXML-Sitemaps sollten so strukturiert sein, dass Suchmaschinen alle regionalen Varianten effizient entdecken konnen. Erstellen Sie einen Sitemap-Index, der regionale Sub-Sitemaps referenziert.\n\nUberwachen Sie die internationale Suchleistung separat pro Markt. Richten Sie Search-Console-Properties fur jedes Land oder Unterverzeichnis-Ziel ein und segmentieren Sie Ihre Analysen nach Region.",
        },
        {
          title: "Internationales Linkbuilding verwalten",
          content:
            "Link-Autoritat ubertragt sich nicht gleichma?ig uber internationale Seitenvarianten. Ein Backlink zu Ihrer US-Produktseite verbessert nicht die Rankings Ihrer deutschen Version auf google.de. Jeder regionale Markt erfordert eine eigene Linkbuilding-Strategie. Unser [internationale SEO-Services](/international-seo) kann Ihnen dabei helfen.\n\nIdentifizieren Sie Link-Moglichkeiten pro Markt, indem Sie die Backlink-Profile der Wettbewerber in jedem Zielland analysieren. Die Backlink-Quellen eines deutschen Wettbewerbers zeigen, welche lokalen Blogs, Magazine und Verzeichnisse aktiv auf E-Commerce-Shops in dieser Branche verlinken.\n\nDigitale PR-Kampagnen sollten pro Markt angepasst und nicht nur ubersetzt werden. Eine Produktstart-Story, die bei US-Medien Anklang findet, benotigt moglicherweise einen vollig anderen Blickwinkel fur franzosische Journalisten.\n\nInterne Verlinkung uber Sprachversionen hinweg sollte strategisch erfolgen. Ihr englischer Blogbeitrag sollte auf englische Produktseiten verlinken, wahrend die deutsche Ubersetzung auf die deutschen Produkte verlinkt.",
        },
      ],
      navLabels: { previous: "Zuruck", next: "Weiter" },
    },
    fr: {
      badge: "SEO Avance",
      heading: "SEO E-commerce International",
      intro:
        "Vendre au-dela des frontieres introduit une complexite technique et strategique que le SEO domestique n'aborde jamais. De l'implementation des balises hreflang aux pages d'atterrissage adaptees aux devises, le SEO e-commerce international exige une configuration precise pour que les bonnes pages produit apparaissent aux bonnes audiences dans chaque marche. De l'implémentation hreflang aux pages d'atterrissage adaptées aux devises, le [SEO e-commerce international](/blog/international-ecommerce-seo) nécessite une configuration précise pour s'assurer que les bonnes pages produit apparaissent aux bonnes audiences dans chaque marché.",
      readTime: "12 min de lecture",
      sections: [
        {
          title: "Structure de domaine : ccTLDs vs. sous-repertoires vs. sous-domaines",
          content:
            "Le choix entre les domaines de premier niveau nationaux (ccTLDs comme .de, .fr), les sous-repertoires (/de/, /fr/) et les sous-domaines (de.example.com) a des consequences durables sur la distribution de l'autorite des liens, l'efficacite du crawl et la perception de la marque.\n\nLes ccTLDs fournissent le signal de geo-ciblage le plus fort et instaurent la confiance locale. Les acheteurs francais voyant un domaine .fr se sentent en confiance. Cependant, chaque ccTLD demarre sans autorite de domaine et divise votre profil de backlinks.\n\nLes sous-repertoires (example.com/fr/) consolident toute l'autorite des liens sous un seul domaine, ce qui en fait le choix privilegie pour la plupart des operations e-commerce. Un seul domaine avec une forte autorite eleve tous les sous-repertoires regionaux.\n\nLes sous-domaines (fr.example.com) se situent dans un entre-deux inconfortable. Google les traite comme des entites semi-separees, donc l'autorite des liens ne circule pas librement entre les sous-domaines.",
          items: [
            "ccTLDs : signal geo le plus fort, cout le plus eleve, autorite divisee",
            "Sous-repertoires : autorite consolidee, budget de crawl unique, geo-ciblage flexible",
            "Sous-domaines : semi-separes aux yeux de Google, le pire des deux mondes pour la plupart des boutiques",
            "Utiliser le ciblage international de Google Search Console pour associer les sous-repertoires aux pays",
          ],
          image: {
            src: "/images/academy/fr/international-domain-structures.svg",
            alt: "Internationale Domain-Struktur-Optionen: ccTLD, Unterverzeichnis und Subdomain mit Vor- und Nachteilen",
            caption: "Unterverzeichnisse (beispiel.com/de/) bieten fuer die meisten E-Commerce-Shops das beste Verhaeltnis aus SEO-Signal und Verwaltbarkeit.",
          },
          callout: {
            title: "Domain-Strategie-Entscheidung",
            text: "Unterverzeichnisse buendeln die gesamte Domain-Autoritaet an einem Ort, waehrend ccTLDs (beispiel.de) das staerkste Geo-Signal senden, aber separate Autoritaet aufbauen muessen. Fuer die meisten E-Commerce-Shops sind Unterverzeichnisse die beste Wahl.",
          },
        },
        {
          title: "Implementation du Hreflang",
          content:
            "Les balises hreflang indiquent aux moteurs de recherche quelle version linguistique et regionale d'une page servir pour une requete donnee. Sans elles, Google pourrait afficher votre page produit anglaise aux utilisateurs francais, ou pire, signaler vos variations regionales comme contenu duplique.\n\nL'attribut hreflang utilise les codes de langue ISO 639-1 et les codes de pays ISO 3166-1 Alpha-2 optionnels. Une page ciblant les francophones au Canada utiliserait hreflang=\"fr-CA\". Vous devez egalement inclure une balise x-default pointant vers votre page de repli.\n\nLe hreflang peut etre implemente via des elements link HTML dans le <head>, des en-tetes HTTP ou des sitemaps XML. Pour les boutiques avec des milliers de produits dans plusieurs langues, l'implementation via sitemap XML est l'approche la plus maintenable.\n\nL'erreur hreflang la plus courante est l'absence de balises retour. Si la page A reference la page B comme son alternative allemande, la page B doit referencer la page A en retour. Les annotations hreflang asymetriques sont completement ignorees par Google. Une bonne [configuration des balises canoniques](/academy/canonical-tags-for-ecommerce) fonctionne main dans la main avec hreflang pour prévenir ces problèmes.",
          tip: "Incluez toujours une balise hreflang auto-referencante sur chaque page. La page anglaise doit se declarer elle-meme comme alternative en. Les auto-references manquantes causent des echecs de validation dans tout le cluster hreflang.",
          image: {
            src: "/images/academy/fr/hreflang-implementation.svg",
            alt: "Hreflang-Implementierungsablauf mit Selbstreferenzierung, bidirektionalen Verweisen und drei Implementierungsmethoden",
            caption: "Jede Seite muss alle Sprachversionen referenzieren, einschliesslich sich selbst. Waehlen Sie eine Methode und bleiben Sie konsistent.",
          },
          callout: {
            title: "Haeufigster Hreflang-Fehler",
            text: "Fehlende Selbstreferenzierung ist der haeufigste Hreflang-Fehler. Jede Seite muss sich selbst UND alle anderen Sprachversionen referenzieren. Fehlende bidirektionale Verweise werden von Google ignoriert.",
          },
        },
        {
          title: "Localisation du contenu vs. traduction",
          content:
            "Traduire automatiquement vos pages produit et appeler cela de la localisation est un raccourci qui coute des conversions et des classements. La vraie localisation signifie adapter les descriptions de produits, les guides de tailles, les references de paiement et le contexte culturel pour chaque marche cible.\n\nLa recherche de mots-cles doit etre repetee pour chaque marche. Ne supposez pas que les mots-cles traduits portent le meme volume de recherche ou la meme intention. Le marche espagnol pourrait preferer des noms de categories de produits differents de ce qu'une traduction directe suggere.\n\nLes avis, le contenu genere par les utilisateurs et les signaux de confiance necessitent egalement une localisation. Afficher des avis en anglais sur une page de boutique allemande sape la confiance. Integrez les plateformes d'avis locales et affichez les avis dans la langue locale.",
        },
        {
          title: "Devise, tarification et donnees structurees",
          content:
            "Les boutiques internationales doivent gerer la tarification multi-devises avec precision, tant pour l'experience utilisateur que pour l'exactitude des donnees structurees. Votre balisage Product schema doit refleter la devise et le prix reels affiches a l'utilisateur sur cette page regionale specifique.\n\nUtilisez le champ priceCurrency dans vos donnees structurees Product avec le code devise ISO 4217 correct pour chaque page regionale. Si vous proposez une conversion dynamique des devises, les donnees structurees doivent correspondre au prix affiche par defaut.\n\nLes donnees structurees des frais de livraison doivent egalement etre regionalisees. Declarer la livraison gratuite aux US sur une page ciblant les clients allemands est trompeur et peut entrainer des penalites marchands dans Google Shopping.\n\nLe traitement fiscal varie considerablement selon les pays. Les prix americains sont generalement affiches hors taxes, tandis que les reglementations europeennes exigent des prix TTC.",
          items: [
            "Faire correspondre priceCurrency dans le schema Product a la devise reellement affichee par region",
            "Definir des shippingDetails specifiques a la region avec le bon shippingDestination",
            "Aligner les prix TTC vs. HT avec les reglementations locales",
            "Tester la validation des donnees structurees pour chaque variante de page regionale separement",
          ],
          tip: "Creez un modele de donnees structurees par region qui extrait automatiquement le code devise, le traitement fiscal et la destination d'expedition corrects.",
        },
        {
          title: "Considerations techniques internationales",
          content:
            "L'emplacement du serveur et la configuration CDN impactent directement la vitesse de chargement pour les visiteurs internationaux. Une boutique hebergee sur un seul serveur americain delivrera des temps de chargement lents aux acheteurs europeens et asiatiques. Utilisez un CDN avec des noeuds edge dans vos marches cibles.\n\nEvitez les redirections basees sur l'IP qui forcent les utilisateurs vers une version regionale sans consentement. Google crawle principalement depuis des adresses IP americaines, donc les redirections IP peuvent empecher Googlebot de decouvrir vos pages non-US.\n\nLes sitemaps XML doivent etre structures pour aider les moteurs de recherche a decouvrir efficacement toutes les variantes regionales. Creez un index de sitemap referencant des sous-sitemaps regionaux.\n\nSurveillez les performances de recherche internationales separement par marche. Configurez des proprietes Search Console pour chaque pays ou sous-repertoire cible.",
        },
        {
          title: "Gerer le link building international",
          content:
            "L'autorite des liens ne se transfere pas uniformement entre les variantes de pages internationales. Un backlink vers votre page produit americaine n'ameliore pas les classements de votre version allemande sur google.de. Chaque marche regional necessite sa propre strategie de link building.\n\nIdentifiez les opportunites de liens par marche en analysant les profils de backlinks des concurrents dans chaque pays cible. Les sources de backlinks d'un concurrent allemand revelent quels blogs, magazines et repertoires locaux renvoient activement vers les boutiques e-commerce.\n\nLes campagnes de RP numerique doivent etre adaptees par marche, pas simplement traduites. Une histoire de lancement de produit qui resonne aupres des medias americains pourrait necesiter un angle completement different pour les journalistes francais.\n\nLes liens internes entre les versions linguistiques doivent etre strategiques. Votre article de blog anglais doit renvoyer vers les pages produit anglaises, tandis que la traduction allemande renvoie vers les produits allemands. Nos services de [SEO international](/international-seo) peuvent vous aider à construire une autorité spécifique à chaque marché à grande échelle.",
        },
      ],
      navLabels: { previous: "Precedent", next: "Suivant" },
    },
    es: {
      badge: "SEO Avanzado",
      heading: "SEO Internacional para Ecommerce",
      intro:
        "Vender a traves de fronteras introduce una capa de complejidad tecnica y estrategica que el SEO domestico nunca aborda. Desde la implementacion de hreflang hasta las paginas de destino con reconocimiento de divisa, el [SEO internacional para ecommerce](/blog/international-ecommerce-seo) requiere una configuracion precisa para que las paginas de producto correctas aparezcan ante las audiencias adecuadas en cada mercado.",
      readTime: "12 min de lectura",
      sections: [
        {
          title: "Estructura de dominio: ccTLDs vs. subdirectorios vs. subdominios",
          content:
            "La eleccion entre dominios de nivel superior de codigo de pais (ccTLDs como .de, .fr), subdirectorios (/de/, /fr/) y subdominios (de.example.com) tiene consecuencias duraderas en la distribucion de autoridad de enlaces, la eficiencia de rastreo y la percepcion de marca.\n\nLos ccTLDs proporcionan la senal de geolocalizacion mas fuerte y generan confianza local. Los compradores alemanes que ven un dominio .de sienten confianza en que la tienda sirve a su mercado. Sin embargo, cada ccTLD comienza sin autoridad de dominio y divide tu perfil de backlinks.\n\nLos subdirectorios (example.com/de/) consolidan toda la autoridad de enlaces bajo un solo dominio, convirtiendolos en la opcion preferida para la mayoria de operaciones ecommerce. Un unico dominio con fuerte autoridad eleva todos los subdirectorios regionales.\n\nLos subdominios (de.example.com) se situan en un terreno intermedio incomodo. Google los trata como entidades semi-separadas, por lo que la autoridad de enlaces no fluye libremente entre subdominios.",
          items: [
            "ccTLDs: senal geo mas fuerte, mayor coste, autoridad dividida",
            "Subdirectorios: autoridad consolidada, un solo presupuesto de rastreo, geolocalizacion flexible",
            "Subdominios: semi-separados a ojos de Google, lo peor de ambos mundos para la mayoria de tiendas",
            "Usar el targeting internacional de Google Search Console para asociar subdirectorios con paises",
          ],
          image: {
            src: "/images/academy/es/international-domain-structures.svg",
            alt: "Internationale Domain-Struktur-Optionen: ccTLD, Unterverzeichnis und Subdomain mit Vor- und Nachteilen",
            caption: "Unterverzeichnisse (beispiel.com/de/) bieten fuer die meisten E-Commerce-Shops das beste Verhaeltnis aus SEO-Signal und Verwaltbarkeit.",
          },
          callout: {
            title: "Domain-Strategie-Entscheidung",
            text: "Unterverzeichnisse buendeln die gesamte Domain-Autoritaet an einem Ort, waehrend ccTLDs (beispiel.de) das staerkste Geo-Signal senden, aber separate Autoritaet aufbauen muessen. Fuer die meisten E-Commerce-Shops sind Unterverzeichnisse die beste Wahl.",
          },
        },
        {
          title: "Implementacion de Hreflang",
          content:
            "Las [etiquetas hreflang](/academy/canonical-tags-for-ecommerce) indican a los motores de busqueda que version de idioma y region de una pagina servir para una consulta determinada. Sin ellas, Google podria mostrar tu pagina de producto en ingles a usuarios franceses, o peor, marcar tus variaciones regionales como contenido duplicado.\n\nEl atributo hreflang utiliza codigos de idioma ISO 639-1 y codigos de pais ISO 3166-1 Alpha-2 opcionales. Una pagina dirigida a hispanohablantes en Mexico usaria hreflang=\"es-MX\". Tambien debes incluir una etiqueta x-default que apunte a tu pagina de respaldo.\n\nHreflang puede implementarse via elementos link HTML en el <head>, cabeceras HTTP o sitemaps XML. Para tiendas con miles de productos en multiples idiomas, la implementacion via sitemap XML es el enfoque mas mantenible.\n\nEl error hreflang mas comun es la falta de etiquetas de retorno. Si la pagina A referencia a la pagina B como su alternativa alemana, la pagina B debe referenciar a la pagina A de vuelta. Las anotaciones hreflang asimetricas son ignoradas completamente por Google.",
          tip: "Incluye siempre una etiqueta hreflang autorreferencial en cada pagina. La pagina en ingles debe declararse a si misma como la alternativa en. Las autorreferencias faltantes causan fallos de validacion en todo el cluster hreflang.",
          image: {
            src: "/images/academy/es/hreflang-implementation.svg",
            alt: "Hreflang-Implementierungsablauf mit Selbstreferenzierung, bidirektionalen Verweisen und drei Implementierungsmethoden",
            caption: "Jede Seite muss alle Sprachversionen referenzieren, einschliesslich sich selbst. Waehlen Sie eine Methode und bleiben Sie konsistent.",
          },
          callout: {
            title: "Haeufigster Hreflang-Fehler",
            text: "Fehlende Selbstreferenzierung ist der haeufigste Hreflang-Fehler. Jede Seite muss sich selbst UND alle anderen Sprachversionen referenzieren. Fehlende bidirektionale Verweise werden von Google ignoriert.",
          },
        },
        {
          title: "Localizacion de contenido vs. traduccion",
          content:
            "Traducir automaticamente tus paginas de producto y llamarlo localizacion es un atajo que cuesta conversiones y rankings. La verdadera localizacion significa adaptar descripciones de productos, tablas de tallas, referencias de pago, informacion de envio y contexto cultural para cada mercado objetivo.\n\nLa investigacion de palabras clave debe repetirse para cada mercado. No asumas que las palabras clave traducidas tienen el mismo volumen de busqueda o intencion. El mercado espanol podria preferir nombres de categorias de productos diferentes a lo que sugiere una traduccion directa.\n\nLas resenas, el contenido generado por usuarios y las senales de confianza tambien necesitan localizacion. Mostrar resenas en ingles en una pagina de tienda alemana socava la confianza. Integra plataformas de resenas locales y muestra resenas en el idioma local.",
        },
        {
          title: "Divisa, precios y datos estructurados",
          content:
            "Las tiendas internacionales deben manejar los precios multidivisa con precision, tanto para la experiencia del usuario como para la exactitud de los datos estructurados. Tu marcado Product schema debe reflejar la divisa y el precio reales mostrados al usuario en esa pagina regional especifica.\n\nUsa el campo priceCurrency en tus datos estructurados Product con el codigo de divisa ISO 4217 correcto para cada pagina regional. Si ofreces conversion de divisa dinamica, los datos estructurados deben coincidir con el precio mostrado por defecto.\n\nLos datos estructurados de costes de envio tambien deben regionalizarse. Declarar envio gratuito en US en una pagina dirigida a clientes alemanes es enganoso y puede resultar en penalizaciones de comerciante en Google Shopping.\n\nEl tratamiento fiscal varia dramaticamente segun el pais. Los precios en US tipicamente se muestran sin impuestos, mientras que las regulaciones de la UE requieren precios con IVA incluido.",
          items: [
            "Hacer coincidir priceCurrency en el schema Product con la divisa realmente mostrada por region",
            "Definir shippingDetails especificos por region con el shippingDestination correcto",
            "Alinear precios con IVA vs. sin IVA con las regulaciones locales",
            "Probar la validacion de datos estructurados para cada variante de pagina regional por separado",
          ],
          tip: "Crea una plantilla de datos estructurados por region que extraiga automaticamente el codigo de divisa, tratamiento fiscal y destino de envio correctos.",
        },
        {
          title: "Consideraciones tecnicas internacionales",
          content:
            "La ubicacion del servidor y la configuracion CDN impactan directamente en la velocidad de carga para visitantes internacionales. Una tienda alojada en un unico servidor de US entregara tiempos de carga lentos a compradores europeos y asiaticos. Usa un CDN con nodos edge en tus mercados objetivo.\n\nEvita las redirecciones basadas en IP que fuerzan a los usuarios a una version regional sin consentimiento. Google rastrea principalmente desde direcciones IP de US, por lo que las redirecciones IP pueden impedir que Googlebot descubra tus paginas no-US.\n\nLos sitemaps XML deben estructurarse para ayudar a los motores de busqueda a descubrir eficientemente todas las variantes regionales. Crea un indice de sitemap que referencie sub-sitemaps regionales.\n\nMonitoriza el rendimiento de busqueda internacional por separado por mercado. Configura propiedades de Search Console para cada pais o subdirectorio objetivo.",
        },
        {
          title: "Gestionar el link building internacional",
          content:
            "La autoridad de enlaces no se transfiere uniformemente entre variantes de paginas internacionales. Un backlink a tu pagina de producto de US no mejora los rankings de tu version alemana en google.de. Cada mercado regional requiere su propia estrategia de link building.\n\nIdentifica oportunidades de enlaces por mercado analizando los perfiles de backlinks de competidores en cada pais objetivo. Las fuentes de backlinks de un competidor aleman revelan que blogs, revistas y directorios locales enlazan activamente a tiendas ecommerce.\n\nLas campanas de PR digital deben adaptarse por mercado, no simplemente traducirse. Una historia de lanzamiento de producto que resuena con medios de US podria necesitar un angulo completamente diferente para periodistas franceses.\n\nLos enlaces internos entre versiones de idioma deben ser estrategicos. Tu articulo de blog en ingles debe enlazar a las paginas de producto en ingles, mientras que la traduccion alemana enlaza a los productos alemanes. Nuestros servicios de [SEO internacional](/international-seo) pueden ayudarte a construir autoridad especifica por mercado a escala.",
        },
      ],
      navLabels: { previous: "Anterior", next: "Siguiente" },
    },
    it: {
      badge: "SEO Avanzato",
      heading: "SEO Internazionale per Ecommerce",
      intro:
        "Vendere oltre i confini introduce un livello di complessita tecnica e strategica che il SEO domestico non affronta mai. Dall'implementazione hreflang alle landing page consapevoli della valuta, il [SEO internazionale](/blog/international-ecommerce-seo) per ecommerce richiede una configurazione precisa affinche le pagine prodotto giuste appaiano al pubblico giusto in ogni mercato.",
      readTime: "12 min di lettura",
      sections: [
        {
          title: "Struttura del dominio: ccTLDs vs. sottodirectory vs. sottodomini",
          content:
            "La scelta tra domini di primo livello nazionali (ccTLDs come .de, .fr), sottodirectory (/de/, /fr/) e sottodomini (de.example.com) ha conseguenze durature sulla distribuzione dell'autorita dei link, l'efficienza del crawl e la percezione del marchio.\n\nI ccTLDs forniscono il segnale di geo-targeting piu forte e costruiscono fiducia locale. Gli acquirenti tedeschi che vedono un dominio .de si sentono sicuri che il negozio serve il loro mercato. Tuttavia, ogni ccTLD parte senza autorita di dominio e divide il profilo di backlink.\n\nLe sottodirectory (example.com/de/) consolidano tutta l'autorita dei link sotto un singolo dominio, rendendole la scelta preferita per la maggior parte delle operazioni ecommerce. Un singolo dominio con forte autorita solleva tutte le sottodirectory regionali.\n\nI sottodomini (de.example.com) si trovano in una posizione intermedia scomoda. Google li tratta come entita semi-separate, quindi l'autorita dei link non fluisce liberamente tra i sottodomini.",
          items: [
            "ccTLDs: segnale geo piu forte, costo piu alto, autorita divisa",
            "Sottodirectory: autorita consolidata, un unico budget di crawl, geo-targeting flessibile",
            "Sottodomini: semi-separati agli occhi di Google, il peggiore dei due mondi per la maggior parte dei negozi",
            "Usare il targeting internazionale di Google Search Console per associare le sottodirectory ai paesi",
          ],
          image: {
            src: "/images/academy/it/international-domain-structures.svg",
            alt: "Internationale Domain-Struktur-Optionen: ccTLD, Unterverzeichnis und Subdomain mit Vor- und Nachteilen",
            caption: "Unterverzeichnisse (beispiel.com/de/) bieten fuer die meisten E-Commerce-Shops das beste Verhaeltnis aus SEO-Signal und Verwaltbarkeit.",
          },
          callout: {
            title: "Domain-Strategie-Entscheidung",
            text: "Unterverzeichnisse buendeln die gesamte Domain-Autoritaet an einem Ort, waehrend ccTLDs (beispiel.de) das staerkste Geo-Signal senden, aber separate Autoritaet aufbauen muessen. Fuer die meisten E-Commerce-Shops sind Unterverzeichnisse die beste Wahl.",
          },
        },
        {
          title: "Implementazione Hreflang",
          content:
            "I tag hreflang indicano ai motori di ricerca quale versione linguistica e regionale di una pagina servire per una determinata query. Senza di essi, Google potrebbe mostrare la tua pagina prodotto inglese agli utenti francesi, o peggio, segnalare le tue variazioni regionali come contenuto duplicato. Approfondisci con la nostra guida sulla [configurazione dei tag canonical](/academy/canonical-tags-for-ecommerce).\n\nL'attributo hreflang utilizza codici lingua ISO 639-1 e codici paese ISO 3166-1 Alpha-2 opzionali. Una pagina rivolta ai francofoni in Canada userebbe hreflang=\"fr-CA\". Devi anche includere un tag x-default che punti alla tua pagina di fallback.\n\nHreflang puo essere implementato tramite elementi link HTML nel <head>, header HTTP o sitemap XML. Per negozi con migliaia di prodotti in piu lingue, l'implementazione via sitemap XML e l'approccio piu manutenibile.\n\nL'errore hreflang piu comune sono i tag di ritorno mancanti. Se la pagina A referenzia la pagina B come la sua alternativa tedesca, la pagina B deve referenziare la pagina A di ritorno. Le annotazioni hreflang asimmetriche vengono completamente ignorate da Google.",
          tip: "Includi sempre un tag hreflang autoreferenziale su ogni pagina. La pagina inglese dovrebbe dichiarare se stessa come alternativa en. Le autoreferenze mancanti causano fallimenti di validazione nell'intero cluster hreflang.",
          image: {
            src: "/images/academy/it/hreflang-implementation.svg",
            alt: "Hreflang-Implementierungsablauf mit Selbstreferenzierung, bidirektionalen Verweisen und drei Implementierungsmethoden",
            caption: "Jede Seite muss alle Sprachversionen referenzieren, einschliesslich sich selbst. Waehlen Sie eine Methode und bleiben Sie konsistent.",
          },
          callout: {
            title: "Haeufigster Hreflang-Fehler",
            text: "Fehlende Selbstreferenzierung ist der haeufigste Hreflang-Fehler. Jede Seite muss sich selbst UND alle anderen Sprachversionen referenzieren. Fehlende bidirektionale Verweise werden von Google ignoriert.",
          },
        },
        {
          title: "Localizzazione dei contenuti vs. traduzione",
          content:
            "Tradurre automaticamente le pagine prodotto e chiamarla localizzazione e una scorciatoia che costa conversioni e posizionamenti. La vera localizzazione significa adattare descrizioni prodotto, tabelle taglie, riferimenti di pagamento, informazioni di spedizione e contesto culturale per ogni mercato target.\n\nLa ricerca di parole chiave deve essere ripetuta per ogni mercato. Non dare per scontato che le parole chiave tradotte abbiano lo stesso volume di ricerca o la stessa intenzione. Il mercato spagnolo potrebbe preferire nomi di categorie prodotto diversi da quelli suggeriti da una traduzione diretta.\n\nRecensioni, contenuti generati dagli utenti e segnali di fiducia necessitano anch'essi di localizzazione. Mostrare recensioni in inglese su una pagina di negozio tedesca mina la fiducia.",
        },
        {
          title: "Valuta, prezzi e dati strutturati",
          content:
            "I negozi internazionali devono gestire i prezzi multi-valuta con precisione, sia per l'esperienza utente che per l'accuratezza dei dati strutturati. Il markup Product schema deve riflettere la valuta e il prezzo effettivi mostrati all'utente su quella specifica pagina regionale.\n\nUsa il campo priceCurrency nei tuoi dati strutturati Product con il codice valuta ISO 4217 corretto per ogni pagina regionale. Se offri conversione dinamica della valuta, i dati strutturati devono corrispondere al prezzo visualizzato predefinito.\n\nI dati strutturati dei costi di spedizione devono anche essere regionalizzati. Dichiarare spedizione gratuita negli US su una pagina rivolta a clienti tedeschi e fuorviante e puo comportare penalita commerciante in Google Shopping.\n\nIl trattamento fiscale varia drasticamente per paese. I prezzi US sono tipicamente mostrati al netto delle tasse, mentre le normative UE richiedono prezzi IVA inclusa.",
          items: [
            "Far corrispondere priceCurrency nel schema Product alla valuta effettivamente visualizzata per regione",
            "Definire shippingDetails specifici per regione con il corretto shippingDestination",
            "Allineare prezzi IVA inclusa vs. IVA esclusa con le normative locali",
            "Testare la validazione dei dati strutturati per ogni variante di pagina regionale separatamente",
          ],
          tip: "Crea un template di dati strutturati per regione che estragga automaticamente il codice valuta, il trattamento fiscale e la destinazione di spedizione corretti.",
        },
        {
          title: "Considerazioni tecniche internazionali",
          content:
            "La posizione del server e la configurazione CDN impattano direttamente sulla velocita di caricamento per i visitatori internazionali. Un negozio ospitato su un singolo server US offrira tempi di caricamento lenti agli acquirenti europei e asiatici. Usa un CDN con nodi edge nei tuoi mercati target.\n\nEvita i redirect basati su IP che forzano gli utenti verso una versione regionale senza consenso. Google effettua il crawl principalmente da indirizzi IP statunitensi, quindi i redirect IP possono impedire a Googlebot di scoprire le tue pagine non-US.\n\nLe sitemap XML devono essere strutturate per aiutare i motori di ricerca a scoprire efficientemente tutte le varianti regionali. Crea un indice sitemap che referenzia sotto-sitemap regionali.\n\nMonitora le performance di ricerca internazionali separatamente per mercato. Configura le proprieta Search Console per ogni paese o target sottodirectory.",
        },
        {
          title: "Gestire il link building internazionale",
          content:
            "L'autorita dei link non si trasferisce uniformemente tra le varianti di pagina internazionali. Un backlink alla tua pagina prodotto US non migliora i posizionamenti della tua versione tedesca su google.de. Ogni mercato regionale richiede la propria strategia di link building. Approfondisci con la nostra guida sulla [servizi di SEO internazionale](/international-seo).\n\nIdentifica le opportunita di link per mercato analizzando i profili di backlink dei concorrenti in ogni paese target. Le fonti di backlink di un concorrente tedesco rivelano quali blog, riviste e directory locali linkano attivamente ai negozi ecommerce.\n\nLe campagne di digital PR devono essere adattate per mercato, non semplicemente tradotte. Una storia di lancio prodotto che risuona con i media US potrebbe necessitare un angolo completamente diverso per i giornalisti francesi.\n\nI link interni tra le versioni linguistiche devono essere strategici. Il tuo articolo del blog in inglese deve linkare alle pagine prodotto inglesi, mentre la traduzione tedesca linka ai prodotti tedeschi.",
        },
      ],
      navLabels: { previous: "Precedente", next: "Successivo" },
    },
    nl: {
      badge: "Geavanceerde SEO",
      heading: "Internationale E-commerce SEO",
      intro:
        "Grensoverschrijdend verkopen introduceert een laag van technische en strategische complexiteit die binnenlandse SEO nooit raakt. Van hreflang-implementatie tot valutabewuste landingspagina's, internationale e-commerce SEO vereist nauwkeurige configuratie om ervoor te zorgen dat de juiste productpagina's verschijnen voor de juiste doelgroepen in elke markt.\n\nOnze gids over [internationale ecommerce-SEO](/blog/international-ecommerce-seo) behandelt meertalige optimalisatie.",
      readTime: "12 min leestijd",
      sections: [
        {
          title: "Domeinstructuur: ccTLDs vs. submappen vs. subdomeinen",
          content:
            "De keuze tussen landcode-topniveaudomeinen (ccTLDs zoals .de, .fr), submappen (/de/, /fr/) en subdomeinen (de.example.com) heeft blijvende gevolgen voor de verdeling van linkautoriteit, crawl-efficientie en merkperceptie.\n\nccTLDs bieden het sterkste geo-targeting signaal en bouwen lokaal vertrouwen op. Duitse kopers die een .de-domein zien, voelen zich er zeker van dat de winkel hun markt bedient. Echter, elke ccTLD begint zonder domeinautoriteit en verdeelt je backlinkprofiel.\n\nSubmappen (example.com/de/) consolideren alle linkautoriteit onder een enkel domein, waardoor ze de voorkeurskeuze zijn voor de meeste e-commerce operaties. Een enkel domein met sterke autoriteit tilt alle regionale submappen op.\n\nSubdomeinen (de.example.com) zitten in een ongemakkelijk tussengebied. Google behandelt ze als semi-gescheiden entiteiten, dus linkautoriteit stroomt niet vrij tussen subdomeinen.",
          items: [
            "ccTLDs: sterkste geo-signaal, hoogste kosten, verdeelde autoriteit",
            "Submappen: geconsolideerde autoriteit, enkel crawlbudget, flexibele geo-targeting",
            "Subdomeinen: semi-gescheiden in Google's ogen, slechtste optie voor de meeste winkels",
            "Google Search Console internationale targeting gebruiken om submappen aan landen te koppelen",
          ],
          image: {
            src: "/images/academy/nl/international-domain-structures.svg",
            alt: "Internationale Domain-Struktur-Optionen: ccTLD, Unterverzeichnis und Subdomain mit Vor- und Nachteilen",
            caption: "Unterverzeichnisse (beispiel.com/de/) bieten fuer die meisten E-Commerce-Shops das beste Verhaeltnis aus SEO-Signal und Verwaltbarkeit.",
          },
          callout: {
            title: "Domain-Strategie-Entscheidung",
            text: "Unterverzeichnisse buendeln die gesamte Domain-Autoritaet an einem Ort, waehrend ccTLDs (beispiel.de) das staerkste Geo-Signal senden, aber separate Autoritaet aufbauen muessen. Fuer die meisten E-Commerce-Shops sind Unterverzeichnisse die beste Wahl.",
          },
        },
        {
          title: "Hreflang-implementatie",
          content:
            "Hreflang-tags vertellen zoekmachines welke taal- en regioversie van een pagina moet worden weergegeven voor een bepaalde zoekopdracht. Zonder deze tags zou Google je Engelse productpagina aan Franse gebruikers kunnen tonen, of erger, je regionale variaties als dubbele content markeren.\n\nHet hreflang-attribuut gebruikt ISO 639-1 taalcodes en optionele ISO 3166-1 Alpha-2 landcodes. Een pagina gericht op Franstaligen in Canada zou hreflang=\"fr-CA\" gebruiken. Je moet ook een x-default tag opnemen die naar je terugvalpagina verwijst.\n\nHreflang kan worden geimplementeerd via HTML-linkelementen in de <head>, HTTP-headers of XML-sitemaps. Voor winkels met duizenden producten in meerdere talen is de XML-sitemap-implementatie de meest onderhoudbare aanpak.\n\nDe meest voorkomende hreflang-fout is het ontbreken van retour-tags. Als pagina A naar pagina B verwijst als zijn Duitse alternatief, moet pagina B terug naar pagina A verwijzen. Asymmetrische hreflang-annotaties worden volledig genegeerd door Google.\n\nLees meer over [canonical tags voor ecommerce](/academy/canonical-tags-for-ecommerce) in ons gedetailleerde onderwerp.",
          tip: "Voeg altijd een zelfverwijzende hreflang-tag toe op elke pagina. De Engelse pagina moet zichzelf declareren als het en-alternatief. Ontbrekende zelfverwijzingen veroorzaken validatiefouten in het hele hreflang-cluster.",
          image: {
            src: "/images/academy/nl/hreflang-implementation.svg",
            alt: "Hreflang-Implementierungsablauf mit Selbstreferenzierung, bidirektionalen Verweisen und drei Implementierungsmethoden",
            caption: "Jede Seite muss alle Sprachversionen referenzieren, einschliesslich sich selbst. Waehlen Sie eine Methode und bleiben Sie konsistent.",
          },
          callout: {
            title: "Haeufigster Hreflang-Fehler",
            text: "Fehlende Selbstreferenzierung ist der haeufigste Hreflang-Fehler. Jede Seite muss sich selbst UND alle anderen Sprachversionen referenzieren. Fehlende bidirektionale Verweise werden von Google ignoriert.",
          },
        },
        {
          title: "Contentlocalisatie vs. vertaling",
          content:
            "Je productpagina's machinaal vertalen en het lokalisatie noemen is een kortere weg die conversies en rankings kost. Echte lokalisatie betekent het aanpassen van productbeschrijvingen, maattabellen, betalingsreferenties, verzendinformatie en culturele context voor elke doelmarkt.\n\nZoekwoordonderzoek moet worden herhaald voor elke markt. Ga er niet van uit dat vertaalde zoekwoorden hetzelfde zoekvolume of dezelfde intentie hebben. De Spaanse markt geeft mogelijk de voorkeur aan andere productcategorienamen dan wat een directe vertaling suggereert.\n\nRecensies, door gebruikers gegenereerde content en vertrouwenssignalen hebben ook lokalisatie nodig. Engelstalige recensies op een Duitse winkelpagina ondermijnen het vertrouwen.",
        },
        {
          title: "Valuta, prijzen en gestructureerde gegevens",
          content:
            "Internationale winkels moeten multi-valutaprijzen nauwkeurig afhandelen, zowel voor de gebruikerservaring als voor de nauwkeurigheid van gestructureerde gegevens. Je Product schema-markup moet de werkelijke valuta en prijs weergeven die aan de gebruiker op die specifieke regionale pagina worden getoond.\n\nGebruik het veld priceCurrency in je Product gestructureerde gegevens met de juiste ISO 4217 valutacode voor elke regionale pagina. Als je dynamische valutaconversie aanbiedt, moeten de gestructureerde gegevens overeenkomen met de standaard weergegeven prijs.\n\nGestructureerde gegevens voor verzendkosten moeten ook worden geregionaliseerd. Gratis verzending in de VS declareren op een pagina gericht op Duitse klanten is misleidend en kan leiden tot merchant-sancties in Google Shopping.\n\nDe belastingbehandeling verschilt drastisch per land. Amerikaanse prijzen worden doorgaans exclusief belasting getoond, terwijl EU-regelgeving btw-inclusieve prijzen vereist.",
          items: [
            "priceCurrency in Product schema afstemmen op de werkelijk weergegeven valuta per regio",
            "Regiospecifieke shippingDetails definieren met het juiste shippingDestination",
            "Btw-inclusieve vs. btw-exclusieve prijzen afstemmen op lokale regelgeving",
            "Gestructureerde gegevens validatie testen voor elke regionale paginavariant apart",
          ],
          tip: "Maak een gestructureerde gegevenstemplate per regio die automatisch de juiste valutacode, belastingbehandeling en verzendbestemming ophaalt.",
        },
        {
          title: "Internationale technische overwegingen",
          content:
            "Serverlocatie en CDN-configuratie beinvloeden direct de paginasnelheid voor internationale bezoekers. Een winkel die op een enkele Amerikaanse server wordt gehost, levert trage laadtijden voor Europese en Aziatische kopers. Gebruik een CDN met edge-nodes in je doelmarkten.\n\nVermijd IP-gebaseerde omleidingen die gebruikers zonder toestemming naar een regionale versie dwingen. Google crawlt voornamelijk vanaf Amerikaanse IP-adressen, dus IP-omleidingen kunnen Googlebot ervan weerhouden je niet-Amerikaanse pagina's te ontdekken.\n\nXML-sitemaps moeten zo worden gestructureerd dat zoekmachines alle regionale varianten efficient kunnen ontdekken. Maak een sitemap-index die verwijst naar regionale sub-sitemaps.\n\nMonitor internationale zoekprestaties apart per markt. Stel Search Console-eigenschappen in voor elk land- of submaptarget.",
        },
        {
          title: "Internationaal linkbuilding beheren",
          content:
            "Linkautoriteit draagt niet gelijkmatig over tussen internationale paginavarianten. Een backlink naar je Amerikaanse productpagina verbetert niet de rankings van je Duitse versie op google.de. Elke regionale markt vereist zijn eigen linkbuildingstrategie.\n\nIdentificeer linkmogelijkheden per markt door de backlinkprofielen van concurrenten in elk doelland te analyseren. De backlinkbronnen van een Duitse concurrent onthullen welke lokale blogs, tijdschriften en directories actief linken naar e-commerce winkels.\n\nDigitale PR-campagnes moeten per markt worden aangepast, niet alleen vertaald. Een productlanceringsverhaal dat resoneert bij Amerikaanse media heeft misschien een compleet andere invalshoek nodig voor Franse journalisten.\n\nInterne links tussen taalversies moeten strategisch zijn. Je Engelstalige blogartikel moet linken naar de Engelse productpagina's, terwijl de Duitse vertaling linkt naar de Duitse producten.\n\nBekijk onze [internationale SEO-diensten](/international-seo) voor professionele ondersteuning.",
        },
      ],
      navLabels: { previous: "Vorige", next: "Volgende" },
    },
  },
};
