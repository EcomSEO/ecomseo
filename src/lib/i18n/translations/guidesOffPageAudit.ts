import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "../../components/guides/GuidePageTemplate";

export const guidesOffPageAuditT: Record<
  Locale,
  { sections: GuideSection[]; nav: GuideNav }
> = {
  en: {
    nav: {
      prev: { href: "/guides/on-page-audit", category: "Research & Ideation", title: "On-Page Audit" },
      next: { href: "/guides/task-planning", category: "Research & Ideation", title: "Task Planning" },
    },
    sections: [
      {
        id: "what-off-page-audit-covers",
        title: "What an Off-Page Audit Actually Covers",
        blocks: [
          {
            type: "p",
            text: "An off-page audit is a full review of your backlink profile. That means counting how many links you have, how many unique domains they come from, assessing the quality of those domains, checking your anchor text distribution, and comparing all of it against your top competitors. It is not about chasing a number. It is about understanding whether your link profile supports or hurts your rankings.",
          },
          {
            type: "p",
            text: "Most ecommerce stores have a messy backlink profile — some strong editorial links, a pile of directory submissions from 2014, and a few random forums. The audit helps you see this clearly so you can make informed decisions rather than guessing.",
          },
          {
            type: "callout",
            title: "Start with the right scope",
            text: "Run your audit at the root domain level, not just for the homepage. Ecommerce sites earn and lose links across hundreds of product and category URLs. Auditing just the homepage gives you a misleading picture.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80",
            alt: "Network of links connecting across a digital map",
            caption: "Your backlink profile is a map of the web's trust in your domain.",
          },
        ],
      },
      {
        id: "pulling-backlink-data",
        title: "Pulling Your Backlink Data",
        blocks: [
          {
            type: "p",
            text: "Use Ahrefs Site Explorer or SEMrush Backlink Analytics to pull your full referring domain list. Both tools give you similar data — go with whichever your team already has access to. Export the full referring domains list (not just backlinks — referring domains is the cleaner metric). Open it in Google Sheets.",
          },
          {
            type: "tip",
            text: "In Ahrefs, go to Site Explorer → Referring Domains → export to CSV. Filter by 'dofollow' first to focus on links that pass authority. Sort by Domain Rating descending to see your strongest links at the top.",
          },
          {
            type: "p",
            text: "Look for patterns in the export. Are most of your links from one or two domains? That's link concentration risk. Are there clusters of domains with nearly identical names or structures? That's a footprint — often from a private blog network or a single link seller. Neither is healthy.",
          },
          {
            type: "list",
            items: [
              "Total referring domains (unique root domains)",
              "Dofollow vs. nofollow split",
              "Domain Rating / Domain Authority distribution",
              "Countries of origin for referring domains",
              "First-seen dates (link velocity over time)",
              "Top linked pages on your site",
            ],
          },
        ],
      },
      {
        id: "quality-signals",
        title: "Quality Signals: What to Actually Look For",
        blocks: [
          {
            type: "p",
            text: "Not all links are equal. A single link from a major retail publication is worth more than 500 links from low-quality directories. When assessing quality, look at these signals in combination — no single metric tells the whole story.",
          },
          {
            type: "list",
            items: [
              "Domain Rating (DR) or Domain Authority (DA): aim for a healthy mix, not all low-DR links. Having no links above DR 30 is a problem.",
              "Topical relevance: links from ecommerce, retail, industry, or product-review sites carry more weight than links from completely unrelated niches.",
              "Dofollow ratio: a profile that is 95% nofollow links is not earning much authority. Some nofollow is normal (social, forums, press), but most of your authority-passing links should be dofollow.",
              "Age of referring domains: established domains that have been linking to you for 2+ years are more stable signals than links from domains registered last month.",
              "Link placement: editorial links in body content outperform footer links and sidebar widgets.",
            ],
          },
          {
            type: "callout",
            title: "Relevance matters more than raw DR",
            text: "A DR 40 link from a specialist footwear blog is more useful for a shoe store than a DR 70 link from a generic coupon aggregator. Google's systems understand topical context. Build links where your actual audience reads, not just where the DR is high.",
          },
        ],
      },
      {
        id: "toxic-links-and-disavow",
        title: "Toxic Links: How Much Should You Worry?",
        blocks: [
          {
            type: "p",
            text: "Toxic links are links from obvious spam domains — link farms, pure directory spam, irrelevant foreign-language sites added in bulk, or sites that exist only to sell links. They show up in your profile as low-DR, unrelated, often with keyword-stuffed anchor text.",
          },
          {
            type: "p",
            text: "Here is the honest answer: Google is much better at ignoring these than it used to be. You do not need to disavow every low-quality link. The disavow tool exists for genuine penalty situations — if you see a sudden, unexplained rankings drop that coincides with a spike in toxic link acquisition, then it's worth investigating and building a disavow file. Otherwise, do not spend hours on disavow work when you could be building good links instead.",
          },
          {
            type: "tip",
            text: "In Ahrefs, use the 'Link Intersect' tool and Screaming Frog's log file analyser together. Screaming Frog tells you which URLs Google is actually crawling. If Google is ignoring the toxic links (they don't appear in your crawl logs), they likely aren't affecting you.",
          },
          {
            type: "checklist",
            items: [
              "Check Google Search Console for any manual actions before assuming algorithmic penalty",
              "Cross-reference toxic domains with your traffic drop dates in Google Analytics",
              "Only disavow if you have clear evidence of harm, not just because a tool flagged links as 'toxic'",
              "Keep a running disavow file — add to it over time rather than rebuilding from scratch",
            ],
          },
        ],
      },
      {
        id: "anchor-text-audit",
        title: "Anchor Text: Reading the Distribution",
        blocks: [
          {
            type: "p",
            text: "Anchor text is one of the clearest signals in your backlink profile. A natural profile has mostly branded anchors (your store name), naked URLs, and generic terms like 'click here' or 'visit site'. A small portion — typically under 10% — should be keyword-rich anchors. If you push past 30% exact-match keyword anchors, that is a red flag Google's algorithms will notice.",
          },
          {
            type: "list",
            items: [
              "Brand anchors (your store name, brand variants): should be the largest group",
              "Naked URL anchors (yourstore.com, www.yourstore.com): normal and healthy",
              "Generic anchors ('here', 'click here', 'this page', 'read more'): expected in natural profiles",
              "Keyword anchors ('buy red shoes', 'cheap running trainers'): keep below 10-15%",
              "Exact-match anchors (same keyword repeated across many links): above 30% is a danger zone",
              "Image anchors (alt text used as anchor): pull these separately and audit the alt text",
            ],
          },
          {
            type: "callout",
            title: "Manipulated anchors are a pattern, not a single link",
            text: "One or two exact-match keyword links from quality sites won't hurt you. The issue is when you have 40 links from 40 different low-quality domains all pointing to the same page with the same keyword anchor. That looks like a paid link campaign, not natural editorial linking.",
          },
        ],
      },
      {
        id: "competitor-gap-and-velocity",
        title: "Competitor Gap Analysis and Link Velocity",
        blocks: [
          {
            type: "p",
            text: "Pull the referring domains for your top 3 organic search competitors. In Ahrefs, use the Link Intersect tool — enter your domain and your competitors' domains, then filter for domains that link to them but not to you. This list is your best starting point for link building. These sites already link to businesses like yours. They are pre-qualified prospects.",
          },
          {
            type: "p",
            text: "Link velocity is how your referring domain count changes over time. A flat or growing count is healthy. A steady decline in referring domains — without corresponding new ones coming in — means you are losing ground. This is common with ecommerce stores that run a burst of link building, then stop. Links that came from blog posts get removed as those posts are updated or deleted. Without maintenance, your profile shrinks.",
          },
          {
            type: "tip",
            text: "In Ahrefs, check the 'New and Lost' referring domains chart under Site Explorer. If you're losing 10-20 domains per month and gaining 2-3, that's a net loss problem. Factor this into your link building targets — you need to outpace your attrition rate before you can actually grow.",
          },
          {
            type: "p",
            text: "Once your audit is complete, take your findings directly into your task planning process. The off-page audit tells you where you stand — the task plan decides what you do about it. See the guide on /guides/task-planning for how to structure that work, and /guides/link-building-tactics for specific tactics to close your competitor gap.",
          },
        ],
      },
    ],
  },

  de: {
    nav: {
      prev: { href: "/guides/on-page-audit", category: "Recherche & Ideenfindung", title: "On-Page-Audit" },
      next: { href: "/guides/task-planning", category: "Recherche & Ideenfindung", title: "Aufgabenplanung" },
    },
    sections: [
      {
        id: "what-off-page-audit-covers",
        title: "Was ein Off-Page-Audit tatsächlich umfasst",
        blocks: [
          {
            type: "p",
            text: "Ein Off-Page-Audit ist eine vollständige Analyse deines Backlink-Profils. Das bedeutet: Anzahl der Links zählen, einzigartige Domains ermitteln, die Qualität dieser Domains bewerten, die Anchor-Text-Verteilung prüfen und alles mit den stärksten Wettbewerbern vergleichen. Es geht nicht darum, einer Zahl hinterherzujagen — sondern zu verstehen, ob dein Link-Profil deine Rankings stützt oder schadet.",
          },
          {
            type: "p",
            text: "Die meisten Ecommerce-Shops haben ein unübersichtliches Backlink-Profil: einige starke redaktionelle Links, ein Haufen Directory-Einträge aus dem Jahr 2014 und ein paar zufällige Foren. Der Audit schafft Klarheit, damit du fundierte Entscheidungen treffen kannst statt zu raten.",
          },
          {
            type: "callout",
            title: "Mit dem richtigen Umfang starten",
            text: "Führe den Audit auf Root-Domain-Ebene durch, nicht nur für die Startseite. Ecommerce-Shops gewinnen und verlieren Links über Hunderte von Produkt- und Kategorie-URLs. Wer nur die Startseite auditiert, bekommt ein verzerrtes Bild.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80",
            alt: "Netzwerk von Links auf einer digitalen Karte",
            caption: "Dein Backlink-Profil ist eine Karte des Vertrauens, das das Web deiner Domain entgegenbringt.",
          },
        ],
      },
      {
        id: "pulling-backlink-data",
        title: "Backlink-Daten abrufen",
        blocks: [
          {
            type: "p",
            text: "Nutze Ahrefs Site Explorer oder SEMrush Backlink Analytics, um deine vollständige Liste der verweisenden Domains abzurufen. Beide Tools liefern ähnliche Daten — nimm das, zu dem dein Team bereits Zugang hat. Exportiere die komplette Referring-Domains-Liste (nicht nur Backlinks — verweisende Domains sind die sauberere Kennzahl). Öffne die Datei in Google Sheets.",
          },
          {
            type: "tip",
            text: "In Ahrefs: Site Explorer → Referring Domains → CSV-Export. Filtere zuerst nach 'dofollow', um dich auf autorität-übertragende Links zu konzentrieren. Sortiere absteigend nach Domain Rating, um die stärksten Links oben zu sehen.",
          },
          {
            type: "p",
            text: "Suche im Export nach Mustern. Kommen die meisten Links von einer oder zwei Domains? Das ist Linkonzentrationsrisiko. Gibt es Cluster von Domains mit nahezu identischen Namen oder Strukturen? Das ist ein Footprint — oft von einem Private Blog Network oder einem einzelnen Linkverkäufer. Beides ist nicht gesund.",
          },
          {
            type: "list",
            items: [
              "Gesamtzahl der verweisenden Domains (einzigartige Root-Domains)",
              "Aufteilung Dofollow vs. Nofollow",
              "Verteilung nach Domain Rating / Domain Authority",
              "Herkunftsländer der verweisenden Domains",
              "Erstgesehen-Datum (Linkgeschwindigkeit über die Zeit)",
              "Meist verlinkte Seiten auf deiner Website",
            ],
          },
        ],
      },
      {
        id: "quality-signals",
        title: "Qualitätssignale: Worauf du wirklich achten musst",
        blocks: [
          {
            type: "p",
            text: "Nicht alle Links sind gleich. Ein einziger Link von einer großen Handelspublikation ist mehr wert als 500 Links aus minderwertigen Verzeichnissen. Bei der Qualitätsbewertung schau dir diese Signale in Kombination an — keine einzelne Kennzahl erzählt die ganze Geschichte.",
          },
          {
            type: "list",
            items: [
              "Domain Rating (DR) oder Domain Authority (DA): Strebe eine gesunde Mischung an, nicht nur niedrig-DR-Links. Keine Links über DR 30 zu haben ist ein Problem.",
              "Thematische Relevanz: Links aus Ecommerce, Einzelhandel, Branche oder Produktrezensionsseiten haben mehr Gewicht als Links aus völlig fremden Nischen.",
              "Dofollow-Anteil: Ein Profil mit 95 % Nofollow-Links überträgt kaum Autorität. Etwas Nofollow ist normal, aber die meisten autoritätsübertragenden Links sollten Dofollow sein.",
              "Alter der verweisenden Domains: Etablierte Domains, die seit 2+ Jahren auf dich verlinken, sind stabilere Signale als Links von letzten Monat registrierten Domains.",
              "Link-Platzierung: Redaktionelle Links im Fließtext übertreffen Footer-Links und Sidebar-Widgets.",
            ],
          },
          {
            type: "callout",
            title: "Relevanz schlägt reinen DR-Wert",
            text: "Ein DR-40-Link von einem spezialisierten Schuhblog ist für einen Schuhshop nützlicher als ein DR-70-Link von einem generischen Coupon-Aggregator. Googles Systeme verstehen thematischen Kontext. Baue Links dort auf, wo deine Zielgruppe tatsächlich liest — nicht nur, wo der DR hoch ist.",
          },
        ],
      },
      {
        id: "toxic-links-and-disavow",
        title: "Toxische Links: Wie viel Sorgen sind berechtigt?",
        blocks: [
          {
            type: "p",
            text: "Toxische Links kommen von offensichtlichen Spam-Domains — Link-Farmen, reinem Directory-Spam, irrelevanten Websites in fremden Sprachen, die en masse hinzugefügt wurden, oder Seiten, die ausschließlich Links verkaufen. Sie tauchen in deinem Profil als niedrig-DR, thematisch unpassend und oft mit keyword-overloadeten Anchors auf.",
          },
          {
            type: "p",
            text: "Hier die ehrliche Einschätzung: Google ignoriert diese Links viel besser als früher. Du musst nicht jeden minderwertigen Link disavowen. Das Disavow-Tool ist für echte Penalty-Situationen gedacht — wenn du einen plötzlichen, unerklärlichen Rankingverlust siehst, der mit einem Spike toxischer Link-Akquise zusammenfällt, lohnt sich die Untersuchung. Ansonsten: Stecke deine Stunden lieber in guten Linkaufbau, als sie im Disavow-Tool zu verschwenden.",
          },
          {
            type: "tip",
            text: "In Ahrefs: 'Link Intersect'-Tool nutzen, ergänzt durch Screaming Frogs Log-File-Analyzer. Screaming Frog zeigt dir, welche URLs Google tatsächlich crawlt. Wenn Google die toxischen Links ignoriert (sie tauchen nicht in deinen Crawl-Logs auf), beeinflussen sie dich wahrscheinlich nicht.",
          },
          {
            type: "checklist",
            items: [
              "Google Search Console auf manuelle Maßnahmen prüfen, bevor du von einer algorithmischen Penalty ausgehst",
              "Toxische Domains mit Traffic-Einbruch-Daten in Google Analytics abgleichen",
              "Nur disavowen, wenn du klare Schadensbelege hast — nicht nur weil ein Tool Links als 'toxisch' markiert",
              "Eine laufende Disavow-Datei pflegen und ergänzen statt sie jedes Mal neu aufzubauen",
            ],
          },
        ],
      },
      {
        id: "anchor-text-audit",
        title: "Anchor-Text: Die Verteilung lesen",
        blocks: [
          {
            type: "p",
            text: "Anchor-Text ist eines der deutlichsten Signale in deinem Backlink-Profil. Ein natürliches Profil enthält hauptsächlich Marken-Anchors (dein Shop-Name), nackte URLs und generische Begriffe wie 'hier klicken' oder 'zur Website'. Ein kleiner Anteil — typischerweise unter 10 % — sollten keyword-reiche Anchors sein. Wenn du über 30 % exakte Keyword-Anchors hinausgehst, ist das eine rote Flagge, die Googles Algorithmen bemerken werden.",
          },
          {
            type: "list",
            items: [
              "Marken-Anchors (dein Shop-Name, Markenvarianten): sollte die größte Gruppe sein",
              "Nackte URL-Anchors (deinshop.de, www.deinshop.de): normal und gesund",
              "Generische Anchors ('hier', 'klicken', 'diese Seite', 'weiterlesen'): in natürlichen Profilen erwartet",
              "Keyword-Anchors ('rote Schuhe kaufen', 'günstige Laufschuhe'): unter 10–15 % halten",
              "Exakte Keyword-Anchors (gleiche Phrase über viele Links hinweg): über 30 % ist eine Gefahrenzone",
              "Bild-Anchors (Alt-Text als Anchor): separat extrahieren und Alt-Text auditieren",
            ],
          },
          {
            type: "callout",
            title: "Manipulierte Anchors sind ein Muster, kein einzelner Link",
            text: "Ein oder zwei exakte Keyword-Links von Qualitätsseiten schaden dir nicht. Das Problem entsteht, wenn du 40 Links von 40 verschiedenen minderwertigen Domains hast, die alle auf dieselbe Seite mit demselben Keyword-Anchor zeigen. Das sieht nach einer bezahlten Linkkampagne aus, nicht nach natürlicher redaktioneller Verlinkung.",
          },
        ],
      },
      {
        id: "competitor-gap-and-velocity",
        title: "Competitor-Gap-Analyse und Link-Velocity",
        blocks: [
          {
            type: "p",
            text: "Hole dir die verweisenden Domains deiner Top-3-Wettbewerber in der organischen Suche. In Ahrefs nutze das Link-Intersect-Tool — gib deine Domain und die deiner Wettbewerber ein, filtere dann nach Domains, die auf sie, aber nicht auf dich verlinken. Diese Liste ist dein bester Ausgangspunkt für Linkaufbau. Diese Seiten verlinken bereits auf Businesses wie deins. Das sind vorqualifizierte Prospects.",
          },
          {
            type: "p",
            text: "Link-Velocity beschreibt, wie sich die Anzahl deiner verweisenden Domains über die Zeit verändert. Eine gleichbleibende oder wachsende Zahl ist gesund. Ein stetiger Rückgang ohne entsprechend neue eingehende Domains bedeutet, dass du Boden verlierst. Das passiert häufig bei Ecommerce-Shops, die eine kurze Linkaufbau-Phase hatten und dann aufgehört haben. Links aus Blogposts verschwinden, wenn diese Posts aktualisiert oder gelöscht werden. Ohne Pflege schrumpft dein Profil.",
          },
          {
            type: "tip",
            text: "In Ahrefs: Unter Site Explorer das Chart 'New and Lost Referring Domains' prüfen. Verlierst du 10–20 Domains pro Monat und gewinnst 2–3 dazu, ist das ein Nettoverlust-Problem. Rechne das in deine Linkaufbau-Ziele ein — du musst erst schneller werden als dein Verlust, bevor du wachsen kannst.",
          },
          {
            type: "p",
            text: "Sobald dein Audit abgeschlossen ist, fließen die Erkenntnisse direkt in die Aufgabenplanung. Der Off-Page-Audit zeigt dir, wo du stehst — der Aufgabenplan entscheidet, was du dagegen tust. Wie du diese Arbeit strukturierst, erklärt /guides/task-planning. Konkrete Taktiken zum Schließen des Wettbewerberlücke findest du unter /guides/link-building-tactics.",
          },
        ],
      },
    ],
  },

  fr: {
    nav: {
      prev: { href: "/guides/on-page-audit", category: "Recherche & Idéation", title: "Audit On-Page" },
      next: { href: "/guides/task-planning", category: "Recherche & Idéation", title: "Planification des tâches" },
    },
    sections: [
      {
        id: "what-off-page-audit-covers",
        title: "Ce que couvre réellement un audit off-page",
        blocks: [
          {
            type: "p",
            text: "Un audit off-page est une analyse complète de votre profil de backlinks. Cela comprend le comptage de vos liens, l'identification des domaines uniques pointant vers vous, l'évaluation de la qualité de ces domaines, la vérification de la distribution des textes d'ancrage et la comparaison de tout cela avec vos principaux concurrents. Il ne s'agit pas de courir après un chiffre — il s'agit de comprendre si votre profil de liens soutient ou nuit à vos classements.",
          },
          {
            type: "p",
            text: "La plupart des boutiques e-commerce ont un profil de backlinks désordonné — quelques liens éditoriaux solides, un tas de soumissions d'annuaires datant de 2014, et quelques forums aléatoires. L'audit vous permet de voir cela clairement pour prendre des décisions éclairées plutôt que de deviner.",
          },
          {
            type: "callout",
            title: "Commencez avec le bon périmètre",
            text: "Effectuez votre audit au niveau du domaine racine, pas seulement pour la page d'accueil. Les sites e-commerce gagnent et perdent des liens sur des centaines d'URLs de produits et de catégories. Auditer uniquement la page d'accueil vous donne une image trompeuse.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80",
            alt: "Réseau de liens connectés sur une carte numérique",
            caption: "Votre profil de backlinks est une carte de la confiance que le web accorde à votre domaine.",
          },
        ],
      },
      {
        id: "pulling-backlink-data",
        title: "Extraire vos données de backlinks",
        blocks: [
          {
            type: "p",
            text: "Utilisez Ahrefs Site Explorer ou SEMrush Backlink Analytics pour extraire votre liste complète de domaines référents. Les deux outils fournissent des données similaires — utilisez celui auquel votre équipe a déjà accès. Exportez la liste complète des domaines référents (pas seulement les backlinks — les domaines référents sont la métrique la plus propre). Ouvrez-la dans Google Sheets.",
          },
          {
            type: "tip",
            text: "Dans Ahrefs : Site Explorer → Domaines référents → exporter en CSV. Filtrez d'abord sur 'dofollow' pour vous concentrer sur les liens qui transmettent de l'autorité. Triez par Domain Rating décroissant pour voir vos liens les plus forts en haut.",
          },
          {
            type: "p",
            text: "Cherchez des tendances dans l'export. La majorité de vos liens provient-elle d'un ou deux domaines ? C'est un risque de concentration de liens. Y a-t-il des clusters de domaines aux noms ou structures presque identiques ? C'est une empreinte — souvent issue d'un réseau de blogs privés ou d'un seul vendeur de liens. Aucun des deux n'est sain.",
          },
          {
            type: "list",
            items: [
              "Nombre total de domaines référents (domaines racine uniques)",
              "Répartition dofollow vs. nofollow",
              "Distribution par Domain Rating / Domain Authority",
              "Pays d'origine des domaines référents",
              "Dates de première apparition (vitesse d'acquisition de liens dans le temps)",
              "Pages les plus liées sur votre site",
            ],
          },
        ],
      },
      {
        id: "quality-signals",
        title: "Signaux de qualité : ce qu'il faut vraiment surveiller",
        blocks: [
          {
            type: "p",
            text: "Tous les liens ne se valent pas. Un seul lien d'une grande publication de retail vaut plus que 500 liens d'annuaires de faible qualité. Pour évaluer la qualité, examinez ces signaux conjointement — aucune métrique prise isolément ne raconte toute l'histoire.",
          },
          {
            type: "list",
            items: [
              "Domain Rating (DR) ou Domain Authority (DA) : visez un mix équilibré, pas uniquement des liens à faible DR. N'avoir aucun lien au-dessus de DR 30 est un problème.",
              "Pertinence thématique : les liens issus de sites e-commerce, retail, sectoriels ou de comparateurs de produits ont plus de poids que les liens de niches sans rapport.",
              "Ratio dofollow : un profil à 95 % de liens nofollow ne transmet pas beaucoup d'autorité. Un certain volume de nofollow est normal (réseaux sociaux, forums, presse), mais la majorité de vos liens transmettant de l'autorité doit être en dofollow.",
              "Ancienneté des domaines référents : des domaines établis qui vous linkent depuis 2 ans ou plus sont des signaux plus stables que des liens de domaines créés le mois dernier.",
              "Placement du lien : les liens éditoriaux dans le corps du texte surpassent les liens en footer et les widgets de sidebar.",
            ],
          },
          {
            type: "callout",
            title: "La pertinence prime sur le DR brut",
            text: "Un lien DR 40 d'un blog spécialisé en chaussures est plus utile pour une boutique de chaussures qu'un lien DR 70 d'un agrégateur de coupons générique. Les systèmes de Google comprennent le contexte thématique. Construisez des liens là où votre audience réelle lit, pas seulement là où le DR est élevé.",
          },
        ],
      },
      {
        id: "toxic-links-and-disavow",
        title: "Liens toxiques : faut-il vraiment s'en inquiéter ?",
        blocks: [
          {
            type: "p",
            text: "Les liens toxiques proviennent de domaines manifestement spam — fermes de liens, spam d'annuaires, sites en langue étrangère sans rapport ajoutés en masse, ou sites existant uniquement pour vendre des liens. Ils apparaissent dans votre profil avec un faible DR, sans rapport thématique, souvent avec des textes d'ancrage bourrés de mots-clés.",
          },
          {
            type: "p",
            text: "Voici la réponse honnête : Google est bien meilleur qu'avant pour ignorer ces liens. Vous n'avez pas besoin de désavouer chaque lien de faible qualité. L'outil de désaveu existe pour les vraies situations de pénalité — si vous constatez une chute soudaine et inexpliquée des classements coïncidant avec un afflux de liens toxiques, cela vaut la peine d'investiguer. Sinon, ne passez pas des heures sur le désaveu alors que vous pourriez construire de bons liens.",
          },
          {
            type: "tip",
            text: "Dans Ahrefs, utilisez l'outil 'Link Intersect' couplé à l'analyseur de fichiers log de Screaming Frog. Screaming Frog vous indique quelles URLs Google crawle réellement. Si Google ignore les liens toxiques (ils n'apparaissent pas dans vos logs de crawl), ils ne vous affectent probablement pas.",
          },
          {
            type: "checklist",
            items: [
              "Vérifier Google Search Console pour toute action manuelle avant de supposer une pénalité algorithmique",
              "Croiser les domaines toxiques avec les dates de chute de trafic dans Google Analytics",
              "Ne désavouer que si vous avez des preuves claires de préjudice, pas juste parce qu'un outil a signalé des liens comme 'toxiques'",
              "Maintenir un fichier de désaveu à jour — l'enrichir progressivement plutôt que de le reconstruire de zéro",
            ],
          },
        ],
      },
      {
        id: "anchor-text-audit",
        title: "Texte d'ancrage : lire la distribution",
        blocks: [
          {
            type: "p",
            text: "Le texte d'ancrage est l'un des signaux les plus clairs dans votre profil de backlinks. Un profil naturel comprend principalement des ancres de marque (nom de votre boutique), des URLs nues, et des termes génériques comme 'cliquez ici' ou 'visitez le site'. Une petite partie — généralement moins de 10 % — doit être des ancres riches en mots-clés. Si vous dépassez 30 % d'ancres exact-match, c'est un signal d'alarme que les algorithmes de Google vont détecter.",
          },
          {
            type: "list",
            items: [
              "Ancres de marque (nom de votre boutique, variantes) : doit être le groupe le plus important",
              "Ancres URL nues (votreboutique.fr, www.votreboutique.fr) : normale et saine",
              "Ancres génériques ('ici', 'cliquez ici', 'cette page', 'en savoir plus') : attendues dans les profils naturels",
              "Ancres mot-clé ('acheter chaussures rouges', 'chaussures running pas cher') : garder sous 10–15 %",
              "Ancres exact-match (même mot-clé répété sur de nombreux liens) : au-delà de 30 %, c'est dangereux",
              "Ancres image (texte alternatif utilisé comme ancre) : extraire séparément et auditer l'alt text",
            ],
          },
          {
            type: "callout",
            title: "Les ancres manipulées sont un schéma, pas un lien isolé",
            text: "Un ou deux liens exact-match depuis des sites de qualité ne vous nuiront pas. Le problème survient quand vous avez 40 liens de 40 domaines de faible qualité pointant tous vers la même page avec la même ancre mot-clé. Cela ressemble à une campagne de liens payants, pas à un maillage éditorial naturel.",
          },
        ],
      },
      {
        id: "competitor-gap-and-velocity",
        title: "Analyse des écarts concurrentiels et vélocité des liens",
        blocks: [
          {
            type: "p",
            text: "Extrayez les domaines référents de vos 3 principaux concurrents en référencement organique. Dans Ahrefs, utilisez l'outil Link Intersect — entrez votre domaine et ceux de vos concurrents, puis filtrez pour les domaines qui les linkent mais pas vous. Cette liste est votre meilleur point de départ pour la création de liens. Ces sites linkent déjà des entreprises similaires à la vôtre. Ce sont des prospects pré-qualifiés.",
          },
          {
            type: "p",
            text: "La vélocité des liens correspond à l'évolution de votre nombre de domaines référents dans le temps. Un chiffre stable ou en croissance est sain. Une baisse régulière des domaines référents sans nouveaux entrants signifie que vous perdez du terrain. C'est fréquent chez les boutiques e-commerce qui ont mené une campagne de link building puis se sont arrêtées. Les liens provenant d'articles de blog disparaissent quand ces articles sont mis à jour ou supprimés. Sans entretien, votre profil rétrécit.",
          },
          {
            type: "tip",
            text: "Dans Ahrefs : consultez le graphique 'New and Lost Referring Domains' sous Site Explorer. Si vous perdez 10 à 20 domaines par mois et en gagnez 2 à 3, vous avez un problème de perte nette. Intégrez cela dans vos objectifs de link building — vous devez d'abord dépasser votre taux d'attrition avant de pouvoir croître réellement.",
          },
          {
            type: "p",
            text: "Une fois l'audit terminé, intégrez directement vos conclusions dans votre processus de planification des tâches. L'audit off-page vous dit où vous en êtes — le plan de tâches décide de ce que vous faites. Consultez /guides/task-planning pour structurer ce travail, et /guides/link-building-tactics pour des tactiques concrètes permettant de combler votre écart concurrentiel.",
          },
        ],
      },
    ],
  },

  es: {
    nav: {
      prev: { href: "/guides/on-page-audit", category: "Investigación e Ideación", title: "Auditoría On-Page" },
      next: { href: "/guides/task-planning", category: "Investigación e Ideación", title: "Planificación de Tareas" },
    },
    sections: [
      {
        id: "what-off-page-audit-covers",
        title: "Qué cubre realmente una auditoría off-page",
        blocks: [
          {
            type: "p",
            text: "Una auditoría off-page es una revisión completa de tu perfil de backlinks. Eso significa contar cuántos enlaces tienes, de cuántos dominios únicos provienen, evaluar la calidad de esos dominios, revisar la distribución del texto de anclaje y comparar todo con tus principales competidores. No se trata de perseguir un número — se trata de entender si tu perfil de enlaces apoya u obstaculiza tus posicionamientos.",
          },
          {
            type: "p",
            text: "La mayoría de las tiendas de ecommerce tienen un perfil de backlinks desordenado: algunos enlaces editoriales sólidos, un montón de directorios del año 2014 y unos cuantos foros aleatorios. La auditoría te ayuda a verlo claramente para tomar decisiones informadas en lugar de adivinar.",
          },
          {
            type: "callout",
            title: "Comienza con el alcance correcto",
            text: "Ejecuta la auditoría a nivel de dominio raíz, no solo para la página de inicio. Las tiendas de ecommerce ganan y pierden enlaces en cientos de URLs de productos y categorías. Auditar solo la página de inicio te da una imagen engañosa.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80",
            alt: "Red de enlaces conectados en un mapa digital",
            caption: "Tu perfil de backlinks es un mapa de la confianza que la web deposita en tu dominio.",
          },
        ],
      },
      {
        id: "pulling-backlink-data",
        title: "Extrayendo tus datos de backlinks",
        blocks: [
          {
            type: "p",
            text: "Usa Ahrefs Site Explorer o SEMrush Backlink Analytics para extraer tu lista completa de dominios de referencia. Ambas herramientas ofrecen datos similares — usa la que tu equipo ya tenga disponible. Exporta la lista completa de dominios de referencia (no solo backlinks — los dominios de referencia son la métrica más limpia). Ábrela en Google Sheets.",
          },
          {
            type: "tip",
            text: "En Ahrefs: Site Explorer → Dominios de referencia → exportar a CSV. Filtra primero por 'dofollow' para enfocarte en los enlaces que transmiten autoridad. Ordena por Domain Rating descendente para ver tus enlaces más fuertes arriba.",
          },
          {
            type: "p",
            text: "Busca patrones en el export. ¿La mayoría de tus enlaces vienen de uno o dos dominios? Es riesgo de concentración de enlaces. ¿Hay grupos de dominios con nombres o estructuras casi idénticas? Eso es un footprint — a menudo de una red de blogs privada o de un único vendedor de enlaces. Ninguno de los dos es saludable.",
          },
          {
            type: "list",
            items: [
              "Total de dominios de referencia (dominios raíz únicos)",
              "División dofollow vs. nofollow",
              "Distribución por Domain Rating / Domain Authority",
              "Países de origen de los dominios de referencia",
              "Fechas de primera aparición (velocidad de enlaces en el tiempo)",
              "Páginas más enlazadas en tu sitio",
            ],
          },
        ],
      },
      {
        id: "quality-signals",
        title: "Señales de calidad: en qué fijarse realmente",
        blocks: [
          {
            type: "p",
            text: "No todos los enlaces son iguales. Un solo enlace de una gran publicación de retail vale más que 500 enlaces de directorios de baja calidad. Al evaluar la calidad, analiza estas señales en combinación — ninguna métrica por sí sola cuenta toda la historia.",
          },
          {
            type: "list",
            items: [
              "Domain Rating (DR) o Domain Authority (DA): busca una mezcla saludable, no solo links de bajo DR. No tener ningún enlace por encima de DR 30 es un problema.",
              "Relevancia temática: los enlaces de sitios de ecommerce, retail, industria o reseñas de productos pesan más que los de nichos totalmente irrelevantes.",
              "Ratio dofollow: un perfil al 95 % de nofollow no transmite mucha autoridad. Algo de nofollow es normal (redes sociales, foros, prensa), pero la mayoría de los enlaces que transmiten autoridad deben ser dofollow.",
              "Antigüedad de los dominios de referencia: dominios establecidos que llevan 2+ años enlazándote son señales más estables que links de dominios registrados el mes pasado.",
              "Ubicación del enlace: los links editoriales en el cuerpo del contenido superan a los links en el footer y widgets de la barra lateral.",
            ],
          },
          {
            type: "callout",
            title: "La relevancia importa más que el DR en bruto",
            text: "Un enlace DR 40 de un blog especializado en calzado es más útil para una zapatería que un enlace DR 70 de un agregador genérico de cupones. Los sistemas de Google entienden el contexto temático. Construye enlaces donde tu audiencia real lee, no solo donde el DR es alto.",
          },
        ],
      },
      {
        id: "toxic-links-and-disavow",
        title: "Enlaces tóxicos: ¿cuánto deberías preocuparte?",
        blocks: [
          {
            type: "p",
            text: "Los enlaces tóxicos provienen de dominios obviamente spam — granjas de enlaces, spam de directorios, sitios en idiomas extranjeros irrelevantes añadidos en masa, o sitios que existen únicamente para vender enlaces. Aparecen en tu perfil con bajo DR, sin relación temática y a menudo con texto de anclaje saturado de palabras clave.",
          },
          {
            type: "p",
            text: "La respuesta honesta: Google es mucho mejor ignorando estos enlaces que antes. No necesitas desautorizar cada enlace de baja calidad. La herramienta de desautorización existe para situaciones de penalización real — si ves una caída repentina e inexplicable en los rankings que coincide con una avalancha de enlaces tóxicos, vale la pena investigar. De lo contrario, no desperdicies horas en el desautorizador cuando podrías estar construyendo buenos enlaces.",
          },
          {
            type: "tip",
            text: "En Ahrefs, usa la herramienta 'Link Intersect' junto con el analizador de archivos de log de Screaming Frog. Screaming Frog te dice qué URLs está rastreando Google realmente. Si Google ignora los enlaces tóxicos (no aparecen en tus logs de crawl), probablemente no te están afectando.",
          },
          {
            type: "checklist",
            items: [
              "Revisar Google Search Console para detectar acciones manuales antes de asumir una penalización algorítmica",
              "Cruzar dominios tóxicos con fechas de caída de tráfico en Google Analytics",
              "Desautorizar solo si tienes evidencias claras de daño, no solo porque una herramienta marcó links como 'tóxicos'",
              "Mantener un archivo de desautorización actualizado — añadir con el tiempo en lugar de reconstruirlo desde cero",
            ],
          },
        ],
      },
      {
        id: "anchor-text-audit",
        title: "Texto de anclaje: leyendo la distribución",
        blocks: [
          {
            type: "p",
            text: "El texto de anclaje es una de las señales más claras en tu perfil de backlinks. Un perfil natural tiene principalmente anclajes de marca (el nombre de tu tienda), URLs desnudas y términos genéricos como 'haz clic aquí' o 'visita el sitio'. Una pequeña parte — normalmente menos del 10 % — deben ser anclajes ricos en palabras clave. Si superas el 30 % de anclajes de coincidencia exacta, es una señal de alarma que los algoritmos de Google van a notar.",
          },
          {
            type: "list",
            items: [
              "Anclajes de marca (nombre de tu tienda, variantes): debe ser el grupo más grande",
              "Anclajes de URL desnuda (tutienda.es, www.tutienda.es): normal y saludable",
              "Anclajes genéricos ('aquí', 'haz clic', 'esta página', 'leer más'): esperados en perfiles naturales",
              "Anclajes de palabras clave ('comprar zapatos rojos', 'zapatillas running baratas'): mantener por debajo del 10–15 %",
              "Anclajes de coincidencia exacta (misma frase repetida en muchos links): por encima del 30 % es zona de peligro",
              "Anclajes de imagen (alt text usado como anclaje): extraer por separado y auditar el alt text",
            ],
          },
          {
            type: "callout",
            title: "Los anclajes manipulados son un patrón, no un enlace aislado",
            text: "Uno o dos enlaces de coincidencia exacta desde sitios de calidad no te perjudicarán. El problema surge cuando tienes 40 enlaces de 40 dominios de baja calidad apuntando todos a la misma página con el mismo anclaje de palabra clave. Eso parece una campaña de enlaces pagados, no un enlazado editorial natural.",
          },
        ],
      },
      {
        id: "competitor-gap-and-velocity",
        title: "Análisis de brechas con competidores y velocidad de enlaces",
        blocks: [
          {
            type: "p",
            text: "Extrae los dominios de referencia de tus 3 principales competidores en búsqueda orgánica. En Ahrefs, usa la herramienta Link Intersect — introduce tu dominio y los de tus competidores, luego filtra por dominios que los enlazan a ellos pero no a ti. Esta lista es tu mejor punto de partida para el link building. Estos sitios ya enlazan a negocios como el tuyo. Son prospectos pre-cualificados.",
          },
          {
            type: "p",
            text: "La velocidad de enlaces es cómo cambia tu número de dominios de referencia con el tiempo. Un número estable o creciente es saludable. Una pérdida constante de dominios de referencia sin nuevos entrantes significa que estás perdiendo terreno. Esto es común en tiendas de ecommerce que hacen link building durante una temporada y luego paran. Los enlaces de publicaciones en blogs desaparecen cuando esos posts se actualizan o eliminan. Sin mantenimiento, tu perfil se encoge.",
          },
          {
            type: "tip",
            text: "En Ahrefs: revisa el gráfico 'New and Lost Referring Domains' en Site Explorer. Si estás perdiendo 10–20 dominios al mes y ganando 2–3, tienes un problema de pérdida neta. Incorpora esto en tus objetivos de link building — necesitas superar tu tasa de desgaste antes de poder crecer realmente.",
          },
          {
            type: "p",
            text: "Una vez completada la auditoría, lleva tus conclusiones directamente a tu proceso de planificación de tareas. La auditoría off-page te dice dónde estás — el plan de tareas decide qué haces al respecto. Consulta /guides/task-planning para estructurar ese trabajo, y /guides/link-building-tactics para tácticas específicas que cierren tu brecha con los competidores.",
          },
        ],
      },
    ],
  },

  it: {
    nav: {
      prev: { href: "/guides/on-page-audit", category: "Ricerca & Ideazione", title: "Audit On-Page" },
      next: { href: "/guides/task-planning", category: "Ricerca & Ideazione", title: "Pianificazione delle Attività" },
    },
    sections: [
      {
        id: "what-off-page-audit-covers",
        title: "Cosa copre davvero un audit off-page",
        blocks: [
          {
            type: "p",
            text: "Un audit off-page è una revisione completa del tuo profilo di backlink. Significa contare quanti link hai, da quanti domini unici provengono, valutare la qualità di quei domini, controllare la distribuzione dei testi di ancoraggio e confrontare tutto questo con i tuoi principali concorrenti. Non si tratta di rincorrere un numero — si tratta di capire se il tuo profilo link supporta o danneggia i tuoi posizionamenti.",
          },
          {
            type: "p",
            text: "La maggior parte degli ecommerce ha un profilo di backlink disordinato: alcuni link editoriali solidi, un mucchio di directory del 2014, e qualche forum casuale. L'audit ti aiuta a vedere tutto chiaramente, così puoi prendere decisioni informate invece di fare congetture.",
          },
          {
            type: "callout",
            title: "Inizia con il giusto perimetro",
            text: "Esegui l'audit a livello di dominio radice, non solo per la homepage. I siti ecommerce guadagnano e perdono link su centinaia di URL di prodotti e categorie. Auditare solo la homepage ti dà un'immagine fuorviante.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80",
            alt: "Rete di link connessi su una mappa digitale",
            caption: "Il tuo profilo di backlink è una mappa della fiducia che il web ripone nel tuo dominio.",
          },
        ],
      },
      {
        id: "pulling-backlink-data",
        title: "Estrarre i dati sui backlink",
        blocks: [
          {
            type: "p",
            text: "Usa Ahrefs Site Explorer o SEMrush Backlink Analytics per estrarre la tua lista completa di domini di riferimento. Entrambi gli strumenti forniscono dati simili — usa quello a cui il tuo team ha già accesso. Esporta la lista completa dei domini di riferimento (non solo i backlink — i domini di riferimento sono la metrica più pulita). Aprila in Google Sheets.",
          },
          {
            type: "tip",
            text: "In Ahrefs: Site Explorer → Domini di riferimento → esporta in CSV. Filtra prima per 'dofollow' per concentrarti sui link che trasmettono autorità. Ordina per Domain Rating decrescente per vedere i tuoi link più forti in cima.",
          },
          {
            type: "p",
            text: "Cerca schemi nell'export. La maggior parte dei tuoi link proviene da uno o due domini? Questo è un rischio di concentrazione dei link. Ci sono cluster di domini con nomi o strutture quasi identiche? È un footprint — spesso da una rete di blog privati o da un unico venditore di link. Nessuno dei due è sano.",
          },
          {
            type: "list",
            items: [
              "Totale domini di riferimento (domini radice unici)",
              "Suddivisione dofollow vs. nofollow",
              "Distribuzione per Domain Rating / Domain Authority",
              "Paesi di origine dei domini di riferimento",
              "Date di prima apparizione (velocità dei link nel tempo)",
              "Pagine più linkate sul tuo sito",
            ],
          },
        ],
      },
      {
        id: "quality-signals",
        title: "Segnali di qualità: cosa guardare davvero",
        blocks: [
          {
            type: "p",
            text: "Non tutti i link sono uguali. Un singolo link da una grande pubblicazione retail vale più di 500 link da directory di bassa qualità. Nel valutare la qualità, esamina questi segnali in combinazione — nessuna singola metrica racconta l'intera storia.",
          },
          {
            type: "list",
            items: [
              "Domain Rating (DR) o Domain Authority (DA): punta a un mix equilibrato, non solo link a basso DR. Non avere nessun link sopra DR 30 è un problema.",
              "Rilevanza tematica: i link da siti ecommerce, retail, di settore o recensioni di prodotti pesano di più rispetto a link da nicchie completamente irrilevanti.",
              "Rapporto dofollow: un profilo al 95 % nofollow non trasmette molta autorità. Un po' di nofollow è normale (social, forum, stampa), ma la maggior parte dei link che trasmettono autorità deve essere dofollow.",
              "Età dei domini di riferimento: domini consolidati che ti linkano da 2+ anni sono segnali più stabili rispetto a link da domini registrati il mese scorso.",
              "Posizionamento del link: i link editoriali nel corpo del contenuto superano i link nel footer e nei widget della sidebar.",
            ],
          },
          {
            type: "callout",
            title: "La rilevanza conta più del DR grezzo",
            text: "Un link DR 40 da un blog specializzato in calzature è più utile per un negozio di scarpe rispetto a un link DR 70 da un aggregatore generico di coupon. I sistemi di Google capiscono il contesto tematico. Costruisci link dove il tuo pubblico reale legge, non solo dove il DR è alto.",
          },
        ],
      },
      {
        id: "toxic-links-and-disavow",
        title: "Link tossici: quanto devi preoccuparti?",
        blocks: [
          {
            type: "p",
            text: "I link tossici provengono da domini palesemente spam — link farm, spam di directory, siti in lingue straniere irrilevanti aggiunti in massa, o siti che esistono solo per vendere link. Appaiono nel tuo profilo con DR basso, senza rilevanza tematica e spesso con testi di ancoraggio pieni di parole chiave.",
          },
          {
            type: "p",
            text: "Ecco la risposta onesta: Google è molto più bravo a ignorare questi link rispetto al passato. Non devi disavowire ogni link di bassa qualità. Lo strumento di disavow esiste per vere situazioni di penalità — se vedi un calo improvviso e inspiegabile dei posizionamenti che coincide con un'impennata di link tossici in entrata, vale la pena indagare. Altrimenti, non sprecare ore sul disavow quando potresti costruire buoni link.",
          },
          {
            type: "tip",
            text: "In Ahrefs, usa lo strumento 'Link Intersect' combinato con l'analizzatore di log file di Screaming Frog. Screaming Frog ti dice quali URL Google sta effettivamente scansionando. Se Google ignora i link tossici (non appaiono nei tuoi log di crawl), probabilmente non ti stanno influenzando.",
          },
          {
            type: "checklist",
            items: [
              "Controllare Google Search Console per eventuali azioni manuali prima di ipotizzare una penalità algoritmica",
              "Incrociare i domini tossici con le date di calo del traffico in Google Analytics",
              "Disavowire solo se hai prove chiare di danno, non solo perché uno strumento ha segnalato link come 'tossici'",
              "Mantenere un file di disavow aggiornato — aggiungere nel tempo anziché ricostruirlo da zero",
            ],
          },
        ],
      },
      {
        id: "anchor-text-audit",
        title: "Testo di ancoraggio: leggere la distribuzione",
        blocks: [
          {
            type: "p",
            text: "Il testo di ancoraggio è uno dei segnali più chiari nel tuo profilo di backlink. Un profilo naturale ha principalmente ancoraggi di marca (il nome del tuo negozio), URL nude e termini generici come 'clicca qui' o 'visita il sito'. Una piccola parte — in genere meno del 10 % — devono essere ancoraggi ricchi di parole chiave. Se superi il 30 % di ancoraggi exact-match, è un segnale d'allarme che gli algoritmi di Google noteranno.",
          },
          {
            type: "list",
            items: [
              "Ancoraggi di marca (nome del negozio, varianti): deve essere il gruppo più grande",
              "Ancoraggi URL nudi (tuonegozio.it, www.tuonegozio.it): normale e sano",
              "Ancoraggi generici ('qui', 'clicca qui', 'questa pagina', 'leggi di più'): attesi nei profili naturali",
              "Ancoraggi parola chiave ('comprare scarpe rosse', 'scarpe running economiche'): mantenere sotto il 10–15 %",
              "Ancoraggi exact-match (stessa frase ripetuta su molti link): oltre il 30 % è zona di pericolo",
              "Ancoraggi immagine (alt text usato come ancoraggio): estrarre separatamente e auditare l'alt text",
            ],
          },
          {
            type: "callout",
            title: "Gli ancoraggi manipolati sono un pattern, non un link isolato",
            text: "Uno o due link exact-match da siti di qualità non ti faranno del male. Il problema sorge quando hai 40 link da 40 domini di bassa qualità che puntano tutti alla stessa pagina con lo stesso ancoraggio parola chiave. Sembra una campagna di link a pagamento, non un collegamento editoriale naturale.",
          },
        ],
      },
      {
        id: "competitor-gap-and-velocity",
        title: "Analisi del gap con i concorrenti e velocità dei link",
        blocks: [
          {
            type: "p",
            text: "Estrai i domini di riferimento dei tuoi 3 principali concorrenti nella ricerca organica. In Ahrefs, usa lo strumento Link Intersect — inserisci il tuo dominio e quelli dei concorrenti, poi filtra per i domini che linkano loro ma non te. Questa lista è il tuo miglior punto di partenza per il link building. Questi siti linkano già attività simili alla tua. Sono prospect pre-qualificati.",
          },
          {
            type: "p",
            text: "La velocità dei link misura come cambia il numero dei tuoi domini di riferimento nel tempo. Un numero stabile o in crescita è sano. Un calo costante dei domini di riferimento senza nuovi ingressi significa che stai perdendo terreno. È comune negli ecommerce che hanno fatto link building in una fase intensa e poi si sono fermati. I link da post del blog spariscono quando quei post vengono aggiornati o eliminati. Senza manutenzione, il tuo profilo si restringe.",
          },
          {
            type: "tip",
            text: "In Ahrefs: controlla il grafico 'New and Lost Referring Domains' in Site Explorer. Se stai perdendo 10–20 domini al mese e ne guadagni 2–3, hai un problema di perdita netta. Incorpora questo nei tuoi obiettivi di link building — devi superare il tuo tasso di attrito prima di poter crescere davvero.",
          },
          {
            type: "p",
            text: "Una volta completato l'audit, porta i risultati direttamente nel tuo processo di pianificazione delle attività. L'audit off-page ti dice dove sei — il piano delle attività decide cosa fai in proposito. Vedi /guides/task-planning per strutturare quel lavoro, e /guides/link-building-tactics per tattiche specifiche per colmare il gap con i concorrenti.",
          },
        ],
      },
    ],
  },

  nl: {
    nav: {
      prev: { href: "/guides/on-page-audit", category: "Onderzoek & Ideevorming", title: "On-Page Audit" },
      next: { href: "/guides/task-planning", category: "Onderzoek & Ideevorming", title: "Taakplanning" },
    },
    sections: [
      {
        id: "what-off-page-audit-covers",
        title: "Wat een off-page audit echt inhoudt",
        blocks: [
          {
            type: "p",
            text: "Een off-page audit is een volledige review van je backlinkprofiel. Dat betekent tellen hoeveel links je hebt, van hoeveel unieke domeinen ze afkomstig zijn, de kwaliteit van die domeinen beoordelen, je ankertekstverdeling controleren en alles vergelijken met je grootste concurrenten. Het gaat niet om het najagen van een getal — het gaat om begrijpen of je linkprofiel je rankings ondersteunt of schaadt.",
          },
          {
            type: "p",
            text: "De meeste ecommercewinkels hebben een rommelig backlinkprofiel — een paar sterke redactionele links, een stapel directoryinzendingen uit 2014 en wat willekeurige forums. De audit helpt je dit helder te zien, zodat je weloverwogen beslissingen kunt nemen in plaats van te raden.",
          },
          {
            type: "callout",
            title: "Begin met de juiste reikwijdte",
            text: "Voer de audit uit op rootdomeinniveau, niet alleen voor de homepage. Ecommercesites verdienen en verliezen links over honderden product- en categorie-URLs. Alleen de homepage auditeren geeft een misleidend beeld.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80",
            alt: "Netwerk van links verbonden op een digitale kaart",
            caption: "Je backlinkprofiel is een kaart van het vertrouwen dat het web in jouw domein stelt.",
          },
        ],
      },
      {
        id: "pulling-backlink-data",
        title: "Je backlinkgegevens ophalen",
        blocks: [
          {
            type: "p",
            text: "Gebruik Ahrefs Site Explorer of SEMrush Backlink Analytics om je volledige lijst met verwijzende domeinen op te halen. Beide tools leveren vergelijkbare gegevens — gebruik wat je team al toegang toe heeft. Exporteer de volledige lijst van verwijzende domeinen (niet alleen backlinks — verwijzende domeinen zijn de schonere metriek). Open het in Google Sheets.",
          },
          {
            type: "tip",
            text: "In Ahrefs: Site Explorer → Verwijzende domeinen → exporteren naar CSV. Filter eerst op 'dofollow' om je te richten op links die autoriteit doorgeven. Sorteer op Domain Rating aflopend om je sterkste links bovenaan te zien.",
          },
          {
            type: "p",
            text: "Zoek naar patronen in de export. Komen de meeste links van één of twee domeinen? Dat is een concentratierisico. Zijn er clusters van domeinen met bijna identieke namen of structuren? Dat is een footprint — vaak van een privéblognetwerk of een enkele linkverkoper. Geen van beide is gezond.",
          },
          {
            type: "list",
            items: [
              "Totaal verwijzende domeinen (unieke rootdomeinen)",
              "Verdeling dofollow vs. nofollow",
              "Verdeling per Domain Rating / Domain Authority",
              "Landen van herkomst van verwijzende domeinen",
              "Eerste-gezien-datums (linksnelheid in de tijd)",
              "Meest gelinkte pagina's op je site",
            ],
          },
        ],
      },
      {
        id: "quality-signals",
        title: "Kwaliteitssignalen: waar je echt op moet letten",
        blocks: [
          {
            type: "p",
            text: "Niet alle links zijn gelijk. Eén link van een grote retailpublicatie is meer waard dan 500 links van lage-kwaliteitswebsites. Bekijk bij het beoordelen van kwaliteit deze signalen in combinatie — geen enkele metriek vertelt het hele verhaal.",
          },
          {
            type: "list",
            items: [
              "Domain Rating (DR) of Domain Authority (DA): streef naar een gezonde mix, niet alleen lage-DR-links. Geen links boven DR 30 hebben is een probleem.",
              "Thematische relevantie: links van ecommerce-, retail-, branche- of productreviewsites wegen zwaarder dan links van volledig ongerelateerde niches.",
              "Dofollow-ratio: een profiel dat 95 % nofollow-links bevat, geeft nauwelijks autoriteit door. Wat nofollow is normaal (sociaal, forums, pers), maar de meeste autoriteitsdoorgevende links moeten dofollow zijn.",
              "Leeftijd van verwijzende domeinen: gevestigde domeinen die al 2+ jaar naar je linken, zijn stabielere signalen dan links van vorige maand geregistreerde domeinen.",
              "Linkplaatsing: redactionele links in de hoofdtekst presteren beter dan links in de footer en sidebarwidgets.",
            ],
          },
          {
            type: "callout",
            title: "Relevantie telt meer dan puur DR",
            text: "Een DR 40-link van een gespecialiseerde schoenblog is nuttiger voor een schoenwinkel dan een DR 70-link van een generieke couponaggregator. Googles systemen begrijpen thematische context. Bouw links op waar je daadwerkelijke doelgroep leest, niet alleen waar de DR hoog is.",
          },
        ],
      },
      {
        id: "toxic-links-and-disavow",
        title: "Toxische links: hoeveel zorgen zijn gerechtvaardigd?",
        blocks: [
          {
            type: "p",
            text: "Toxische links zijn links van voor de hand liggende spamdomeinen — linkfarms, pure directoryspam, irrelevante buitenlandse websites die in bulk zijn toegevoegd, of sites die alleen bestaan om links te verkopen. Ze verschijnen in je profiel met een lage DR, geen thematische aansluiting en vaak keyword-opgezwollen ankerteksten.",
          },
          {
            type: "p",
            text: "Het eerlijke antwoord: Google is veel beter geworden in het negeren van deze links dan vroeger. Je hoeft niet elke link van lage kwaliteit te disavowen. De disavow-tool bestaat voor echte penaltysituaties — als je een plotselinge, onverklaarbare rankingdaling ziet die samenvalt met een piek in toxische linkaanwinst, is onderzoek de moeite waard. Besteed anders geen uren aan disavowwerk terwijl je in plaats daarvan goede links zou kunnen bouwen.",
          },
          {
            type: "tip",
            text: "In Ahrefs, gebruik de 'Link Intersect'-tool samen met Screaming Frogs logbestandanalyser. Screaming Frog vertelt je welke URL's Google daadwerkelijk crawlt. Als Google de toxische links negeert (ze verschijnen niet in je crawllogboeken), hebben ze waarschijnlijk geen invloed op je.",
          },
          {
            type: "checklist",
            items: [
              "Controleer Google Search Console op handmatige acties voordat je een algoritmische penalty aanneemt",
              "Kruis toxische domeinen af met je verkeersdalingsdatums in Google Analytics",
              "Disavow alleen als je duidelijke bewijzen van schade hebt, niet alleen omdat een tool links als 'toxisch' heeft gemarkeerd",
              "Houd een doorlopend disavow-bestand bij — voeg er in de loop van de tijd aan toe in plaats van het telkens opnieuw op te bouwen",
            ],
          },
        ],
      },
      {
        id: "anchor-text-audit",
        title: "Ankertekst: de verdeling lezen",
        blocks: [
          {
            type: "p",
            text: "Ankertekst is een van de duidelijkste signalen in je backlinkprofiel. Een natuurlijk profiel heeft voornamelijk merkankers (de naam van je winkel), kale URL's en generieke termen zoals 'klik hier' of 'bezoek de site'. Een klein deel — doorgaans minder dan 10 % — moet zoekwoordrijke ankers zijn. Als je boven de 30 % exact-match zoekwoordankers komt, is dat een rood vlag die Googles algoritmen zullen opmerken.",
          },
          {
            type: "list",
            items: [
              "Merkankers (naam van je winkel, merkvarianten): moet de grootste groep zijn",
              "Kale URL-ankers (jouwwinkel.nl, www.jouwwinkel.nl): normaal en gezond",
              "Generieke ankers ('hier', 'klik hier', 'deze pagina', 'lees meer'): verwacht in natuurlijke profielen",
              "Zoekwoordankers ('rode schoenen kopen', 'goedkope hardloopschoenen'): houd onder 10–15 %",
              "Exact-match-ankers (hetzelfde zoekwoord herhaald over veel links): boven de 30 % is gevarenzone",
              "Beeldankers (alt-tekst gebruikt als anker): apart extraheren en de alt-tekst auditeren",
            ],
          },
          {
            type: "callout",
            title: "Gemanipuleerde ankers zijn een patroon, niet een enkele link",
            text: "Eén of twee exact-match-zoekwoordlinks van kwaliteitssites doen je geen kwaad. Het probleem ontstaat wanneer je 40 links hebt van 40 verschillende lage-kwaliteitsdomeinen die allemaal naar dezelfde pagina wijzen met hetzelfde zoekwoordanker. Dat ziet eruit als een betaalde linkcampagne, geen natuurlijke redactionele verwijzing.",
          },
        ],
      },
      {
        id: "competitor-gap-and-velocity",
        title: "Concurrentgapanalyse en linksnelheid",
        blocks: [
          {
            type: "p",
            text: "Haal de verwijzende domeinen op van je 3 grootste organische zoekconcurrenten. In Ahrefs gebruik je de Link Intersect-tool — voer jouw domein en die van je concurrenten in, filter dan op domeinen die naar hen linken maar niet naar jou. Deze lijst is je beste startpunt voor linkbuilding. Deze sites linken al naar bedrijven zoals het jouwe. Het zijn vooraf gekwalificeerde prospects.",
          },
          {
            type: "p",
            text: "Linksnelheid is hoe je aantal verwijzende domeinen in de loop van de tijd verandert. Een stabiel of groeiend aantal is gezond. Een gestage afname van verwijzende domeinen zonder dat er nieuwe bijkomen, betekent dat je terrein verliest. Dit komt veel voor bij ecommercewinkels die een korte periode aan linkbuilding doen en dan stoppen. Links uit blogposts verdwijnen wanneer die posts worden bijgewerkt of verwijderd. Zonder onderhoud krimpt je profiel.",
          },
          {
            type: "tip",
            text: "In Ahrefs: bekijk de grafiek 'Nieuwe en verloren verwijzende domeinen' onder Site Explorer. Als je 10–20 domeinen per maand verliest en er 2–3 bijwint, heb je een nettoverliesprobleem. Verwerk dit in je linkbuildingdoelen — je moet eerst sneller gaan dan je verlooppercentage voordat je echt kunt groeien.",
          },
          {
            type: "p",
            text: "Zodra je audit klaar is, neem je je bevindingen direct mee naar je taakplanningsproces. De off-page audit vertelt je waar je staat — het taakplan beslist wat je er aan doet. Zie /guides/task-planning voor hoe je dat werk structureert, en /guides/link-building-tactics voor specifieke tactieken om je concurrentgat te dichten.",
          },
        ],
      },
    ],
  },
};
