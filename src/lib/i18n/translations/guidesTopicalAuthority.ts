import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guidesTopicalAuthorityT: Record<
  Locale,
  { sections: GuideSection[]; nav: GuideNav }
> = {
  en: {
    nav: {
      prev: { href: "/guides/link-building-tactics", category: "Advanced Ecommerce SEO", title: "Link Building Tactics" },
      next: { href: "/guides/ranking-chatgpt", category: "Advanced Ecommerce SEO", title: "Ranking on ChatGPT" },
    },
    sections: [
      {
        id: "what-topical-authority-is",
        title: "What Topical Authority Actually Is",
        blocks: [
          {
            type: "p",
            text: "Topical authority is Google's way of deciding whether a site genuinely knows what it's talking about. A site with deep, thorough coverage of a topic (product pages, category pages, buying guides, comparison content, FAQs) signals that it has expertise. A site with one category page and no supporting content looks thin, and Google increasingly treats thin sites as low-priority for competitive terms.",
          },
          {
            type: "p",
            text: "This matters more now than it did five years ago. Google's Helpful Content system (introduced in 2022 and expanded since) actively looks for whether content is written by someone with real knowledge of the subject, for people who actually want to learn something. If your site sells running shoes but has no content explaining how to choose them, you're leaving signals of expertise on the table.",
          },
          {
            type: "callout",
            title: "It's not just about blogging",
            text: "Topical authority for ecommerce is built through a mix of content types: product pages, category pages, buying guides, comparison pages, and FAQ content. A single well-structured blog post matters less than a complete content ecosystem around your category. Think in clusters, not individual articles.",
          },
        ],
      },
      {
        id: "hub-and-spoke-model",
        title: "The Hub-and-Spoke Model for Ecommerce",
        blocks: [
          {
            type: "p",
            text: "The hub-and-spoke model is the most practical framework for ecommerce topical authority. The hub is your main category page, for example /running-shoes. The spokes are supporting content pages that address specific questions, comparisons, and buying decisions that someone researching running shoes might have.",
          },
          {
            type: "p",
            text: "Good spokes for a running shoes category include: a buying guide ('how to choose running shoes'), comparison content ('road vs trail running shoes'), specific intent pages ('best running shoes for flat feet', 'best running shoes for wide feet', 'running shoes under $100'), and care/maintenance content ('how to clean running shoes'). Each spoke page serves a specific searcher at a specific point in their research. All spokes link back to the hub.",
          },
          {
            type: "tip",
            text: "The hub page benefits from the authority and relevance signals that flow from the spokes. When someone lands on a spoke page and then navigates to the hub, that's a behavioural signal Google notices. Build spokes that genuinely help people, not thin pages that just exist to pass link equity.",
          },
          {
            type: "list",
            items: [
              "Hub page: your main category page, optimised for the primary head term",
              "Buying guide spoke: 'how to choose [category]', targets informational intent",
              "Comparison spoke: '[option A] vs [option B]', targets comparison intent",
              "Specific intent spokes: 'best [category] for [specific need]', targets long-tail transactional intent",
              "Care/use spoke: 'how to [maintain/use] [product]', builds trust and keeps users on site",
              "FAQ spoke: answers to the top 10 questions people ask about your category",
            ],
          },
        ],
      },
      {
        id: "mapping-content-gaps",
        title: "Finding Your Content Gaps",
        blocks: [
          {
            type: "p",
            text: "A content gap is a question your target audience is asking that your site doesn't answer. These gaps are easy to find if you know where to look. Take your top 5-10 category keywords. Google each one. Scroll past the regular results and look at two specific SERP features: the 'People also ask' box and the 'Related searches' section at the bottom of the page.",
          },
          {
            type: "p",
            text: "Every question in the 'People also ask' box is a content gap you could fill. Every related search that you don't have a page targeting is a potential spoke. Write them all down. Then open your competitor's sites and look at their blog and resource sections. If they have 20 articles on running shoe topics and you have 2, the gap is obvious, and Google's crawler notices it too.",
          },
          {
            type: "tip",
            text: "Ahrefs Content Gap tool compares your domain against up to 10 competitors and shows you keywords they rank for that you don't. Run this for your top 2-3 competitors and sort by search volume. The keywords with volume above 500/month that you're missing are your highest-priority content gaps.",
          },
          {
            type: "checklist",
            items: [
              "Google your top 10 category keywords and record all 'People also ask' questions",
              "Note every 'Related search' that you don't have a page targeting",
              "Run the Ahrefs Content Gap tool against your top 2-3 competitors",
              "Filter results by search volume (500+ per month) and informational or commercial intent",
              "Prioritise gaps where competitors rank in positions 1-10 because those are proven topics",
              "Map each gap to a content type: buying guide, comparison page, FAQ, or specific intent page",
              "Build a content calendar with one spoke page per week for the next 3 months",
            ],
          },
        ],
      },
      {
        id: "depth-vs-width",
        title: "Go Deep Before You Go Wide",
        blocks: [
          {
            type: "p",
            text: "The instinct in ecommerce is to expand: more categories, more products, more verticals. That instinct is wrong when it comes to SEO, at least in the early and mid stages of building authority. A site that has shallow coverage across 10 categories will almost always underperform a site that has deep, thorough coverage of 2-3 categories.",
          },
          {
            type: "p",
            text: "If you sell running shoes, dominate running shoe content before you move into general athletic footwear. Build 15-20 high-quality pages about running shoes before you start writing about gym trainers or walking shoes. Google rewards depth. A site with 15 strong running shoe pages will outrank a site with 3 running shoe pages and 3 pages each for gym trainers, walking shoes, and hiking boots, even if the total page count is similar.",
          },
          {
            type: "callout",
            title: "The depth test",
            text: "Can you honestly say your site is the best resource on the internet for someone researching your category? If the answer is no, you haven't gone deep enough. Your competitor who ranks above you probably can say yes, or at least comes closer than you do.",
          },
          {
            type: "p",
            text: "Going deep also means quality, not just quantity. A cluster of 20 superficial 400-word articles will not build topical authority. Google's quality raters look for Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). For ecommerce, this means product pages with real specifications, buying guides written by people who have actually used the products, and comparison content that doesn't just repeat what the manufacturer says.",
          },
        ],
      },
      {
        id: "internal-linking-infrastructure",
        title: "Internal Linking: The Infrastructure That Makes It Work",
        blocks: [
          {
            type: "p",
            text: "Topical authority on its own, even a bunch of good content, doesn't fully work without strong internal linking. The internal link structure is how Google understands the relationship between your pages and which pages are most important. It's also how link equity flows around your site.",
          },
          {
            type: "p",
            text: "The rule is simple: every spoke page should link to the hub. The hub should link to the most important spokes. New content, whether a blog post, a guide, or a new product page, should link to the most relevant category page it's connected to. If you publish a post about 'how to train for your first 5k', it should link to your running shoes category page. Every relevant page should be pulling the hub toward better rankings.",
          },
          {
            type: "tip",
            text: "Run a crawl of your site with Screaming Frog or Sitebulb and check which pages have the fewest internal links pointing to them. Your category pages (hubs) should be among the most internally linked pages on your site. If they're not, you have a structural problem that is actively suppressing your rankings.",
          },
          {
            type: "list",
            items: [
              "Hub pages should receive internal links from every relevant spoke, product page, and blog post",
              "Spoke pages should always link back to their hub with keyword-rich anchor text",
              "New content published anywhere on the site should link to the most relevant category page",
              "Use descriptive anchor text, like 'running shoes buying guide' not 'click here'",
              "Avoid orphan pages; every page on the site should be reachable within 3 clicks from the homepage",
              "Audit internal links quarterly using Screaming Frog to find broken or missing links",
            ],
          },
        ],
      },
      {
        id: "measuring-topical-authority",
        title: "Measuring Whether It's Actually Working",
        blocks: [
          {
            type: "p",
            text: "The primary signal that your topical authority strategy is working is movement in the hub page rankings. In most cases, building out 3-5 strong spoke pages around a category will lift the hub page's rankings within 4-8 weeks. The effect isn't always dramatic. A jump from position 12 to position 7 is significant even if it doesn't feel it. Track it.",
          },
          {
            type: "p",
            text: "Secondary signals to watch: organic clicks to the hub page (Google Search Console), crawl coverage (are all your spoke pages being indexed promptly?), and engagement metrics on spoke pages (time on page, bounce rate, pages per session). If spoke pages have high bounce rates, they're not serving their purpose. Either the content is weak or the internal links to the hub are not compelling enough.",
          },
          {
            type: "callout",
            title: "When it doesn't work",
            text: "If you've built 5+ spoke pages and the hub hasn't moved in 8 weeks, the issue is almost always link authority, not content. Your site probably doesn't have enough domain authority to rank for the hub term yet. This is when link building becomes the priority, so check out the Link Building Tactics guide. Content and links work together. Neither alone is sufficient for competitive categories.",
          },
          {
            type: "list",
            items: [
              "Track hub page position weekly in Ahrefs or Google Search Console",
              "Set a baseline before you start publishing spoke pages by screenshotting or exporting current rankings",
              "Measure organic clicks to hub page in GSC week over week",
              "Check index coverage for all spoke pages in Google Search Console after 7-10 days",
              "Review spoke page engagement in GA4: time on page and pages per session",
              "After 8 weeks with no hub movement, run a link gap analysis because authority is the likely issue",
            ],
          },
        ],
      },
    ],
  },

  de: {
    nav: {
      prev: { href: "/guides/link-building-tactics", category: "Fortgeschrittenes E-Commerce-SEO", title: "Linkaufbau-Taktiken" },
      next: { href: "/guides/ranking-chatgpt", category: "Fortgeschrittenes E-Commerce-SEO", title: "Auf ChatGPT ranken" },
    },
    sections: [
      {
        id: "what-topical-authority-is",
        title: "Was thematische Autorität wirklich bedeutet",
        blocks: [
          {
            type: "p",
            text: "Thematische Autorität ist Googles Methode, zu beurteilen, ob eine Website wirklich weiß, wovon sie spricht. Eine Website mit gründlicher, tiefgehender Abdeckung eines Themas (Produktseiten, Kategorieseiten, Kaufratgeber, Vergleichsinhalte, FAQs) signalisiert echte Kompetenz. Eine Website mit einer einzigen Kategorieseite und keinen unterstützenden Inhalten wirkt dünn, und Google behandelt solche Seiten bei wettbewerbsintensiven Suchanfragen zunehmend als niedrigpriorisiert.",
          },
          {
            type: "p",
            text: "Das ist heute wichtiger als vor fünf Jahren. Googles Helpful-Content-System (eingeführt 2022 und seitdem erweitert) prüft aktiv, ob Inhalte von jemandem mit echtem Fachwissen zu einem Thema geschrieben wurden. Wenn deine Website Laufschuhe verkauft, aber keine Inhalte darüber hat, wie man sie auswählt, lässt du Expertise-Signale ungenutzt.",
          },
          {
            type: "callout",
            title: "Es geht nicht nur ums Bloggen",
            text: "Thematische Autorität im E-Commerce wird durch verschiedene Content-Typen aufgebaut: Produktseiten, Kategorieseiten, Kaufratgeber, Vergleichsseiten und FAQ-Inhalte. Ein einzelner Blog-Beitrag ist weniger relevant als ein vollständiges Content-Ökosystem rund um deine Kategorie. Denk in Clustern, nicht in einzelnen Artikeln.",
          },
        ],
      },
      {
        id: "hub-and-spoke-model",
        title: "Das Hub-and-Spoke-Modell für E-Commerce",
        blocks: [
          {
            type: "p",
            text: "Das Hub-and-Spoke-Modell ist das praktischste Framework für thematische Autorität im E-Commerce. Der Hub ist deine Hauptkategorieseite, zum Beispiel /laufschuhe. Die Spokes sind unterstützende Content-Seiten, die spezifische Fragen, Vergleiche und Kaufentscheidungen ansprechen, die jemand bei der Recherche zu Laufschuhen haben könnte.",
          },
          {
            type: "p",
            text: "Gute Spokes für eine Laufschuh-Kategorie umfassen: einen Kaufratgeber ('Wie wähle ich Laufschuhe aus'), Vergleichsinhalte ('Straßenlaufschuhe vs. Trailschuhe'), spezifische Kaufintentionsseiten ('Beste Laufschuhe für Plattfüße', 'Beste Laufschuhe für breite Füße', 'Laufschuhe unter 100 Euro') und Pflege-/Wartungsinhalte ('Wie reinige ich Laufschuhe'). Jede Spoke-Seite bedient einen spezifischen Suchenden an einem spezifischen Punkt seiner Recherche. Alle Spokes verlinken zurück auf den Hub.",
          },
          {
            type: "tip",
            text: "Die Hub-Seite profitiert von den Autoritäts- und Relevanzsignalen, die von den Spokes fließen. Wenn jemand auf einer Spoke-Seite landet und dann zum Hub navigiert, ist das ein Verhaltenssignal, das Google registriert. Baue Spokes, die Menschen wirklich helfen, keine dünnen Seiten, die nur existieren, um Link Equity weiterzugeben.",
          },
          {
            type: "list",
            items: [
              "Hub-Seite: deine Hauptkategorieseite, optimiert für den primären Head-Term",
              "Kaufratgeber-Spoke: 'Wie wähle ich [Kategorie]', zielt auf informationale Suchabsicht",
              "Vergleichs-Spoke: '[Option A] vs [Option B]', zielt auf vergleichende Suchabsicht",
              "Spezifische Intentionsspokes: 'Beste [Kategorie] für [spezifischen Bedarf]', zielt auf Long-Tail-Transaktionsabsicht",
              "Pflege/Nutzungs-Spoke: 'Wie [pflegt man/benutzt man] [Produkt]', baut Vertrauen auf",
              "FAQ-Spoke: Antworten auf die Top-10-Fragen zu deiner Kategorie",
            ],
          },
        ],
      },
      {
        id: "mapping-content-gaps",
        title: "Content-Lücken identifizieren",
        blocks: [
          {
            type: "p",
            text: "Eine Content-Lücke ist eine Frage, die deine Zielgruppe stellt, die deine Website aber nicht beantwortet. Diese Lücken sind leicht zu finden, wenn man weiß, wo man schauen muss. Nimm deine Top-5-10-Kategorie-Keywords. Googele jedes einzeln. Scrolle an den normalen Ergebnissen vorbei und schaue dir zwei spezifische SERP-Features an: die 'Nutzer fragen auch'-Box und den Abschnitt 'Ähnliche Suchanfragen' am unteren Seitenende.",
          },
          {
            type: "p",
            text: "Jede Frage in der 'Nutzer fragen auch'-Box ist eine Content-Lücke, die du füllen könntest. Jede verwandte Suche, für die du keine Seite hast, ist ein potenzieller Spoke. Schreibe sie alle auf. Öffne dann die Websites deiner Wettbewerber und schaue dir ihre Blog- und Ressourcenbereiche an. Wenn sie 20 Artikel zu Laufschuh-Themen haben und du 2, ist die Lücke offensichtlich, und Googles Crawler bemerkt sie auch.",
          },
          {
            type: "tip",
            text: "Das Ahrefs-Content-Gap-Tool vergleicht deine Domain mit bis zu 10 Wettbewerbern und zeigt dir Keywords, für die sie ranken, du aber nicht. Führe dies für deine Top-2-3-Wettbewerber aus und sortiere nach Suchvolumen. Keywords mit einem Volumen über 500/Monat, die du vermisst, sind deine wichtigsten Content-Lücken.",
          },
          {
            type: "checklist",
            items: [
              "Top-10-Kategorie-Keywords googeln und alle 'Nutzer fragen auch'-Fragen aufzeichnen",
              "Alle 'Ähnliche Suchanfragen' notieren, für die keine Seite existiert",
              "Ahrefs Content Gap Tool gegen Top-2-3-Wettbewerber ausführen",
              "Ergebnisse nach Suchvolumen filtern (500+ pro Monat) und informationale/kommerzielle Absicht",
              "Lücken priorisieren, bei denen Wettbewerber auf Positionen 1-10 ranken, denn das sind bewährte Themen",
              "Jede Lücke einem Content-Typ zuordnen: Kaufratgeber, Vergleichsseite, FAQ oder spezifische Intentionsseite",
              "Einen Content-Kalender mit einer Spoke-Seite pro Woche für die nächsten 3 Monate erstellen",
            ],
          },
        ],
      },
      {
        id: "depth-vs-width",
        title: "Erst in die Tiefe, dann in die Breite",
        blocks: [
          {
            type: "p",
            text: "Der Instinkt im E-Commerce ist Expansion: mehr Kategorien, mehr Produkte, mehr Verticals. Dieser Instinkt ist falsch, wenn es um SEO geht, zumindest in den frühen und mittleren Phasen des Autoritätsaufbaus. Eine Website mit oberflächlicher Abdeckung über 10 Kategorien wird fast immer schlechter abschneiden als eine Website mit tiefer, gründlicher Abdeckung von 2-3 Kategorien.",
          },
          {
            type: "p",
            text: "Wenn du Laufschuhe verkaufst, dominiere Laufschuh-Content, bevor du zu allgemeinem Sportschuhwerk wechselst. Baue 15-20 hochwertige Seiten über Laufschuhe, bevor du mit dem Schreiben über Fitnesstrainer oder Walkingschuhe anfängst. Google belohnt Tiefe. Eine Website mit 15 starken Laufschuhseiten wird eine Website mit 3 Laufschuhseiten und 3 Seiten jeweils für Fitnesstrainer, Walkingschuhe und Wanderstiefel übertreffen, selbst wenn die Gesamtseitenzahl ähnlich ist.",
          },
          {
            type: "callout",
            title: "Der Tiefentest",
            text: "Kannst du ehrlich sagen, dass deine Website die beste Ressource im Internet für jemanden ist, der deine Kategorie recherchiert? Wenn die Antwort nein ist, bist du noch nicht tief genug gegangen. Dein Wettbewerber, der über dir rankt, kann das wahrscheinlich sagen, oder kommt zumindest näher dran als du.",
          },
          {
            type: "p",
            text: "In die Tiefe gehen bedeutet auch Qualität, nicht nur Quantität. Ein Cluster aus 20 oberflächlichen 400-Wort-Artikeln wird keine thematische Autorität aufbauen. Googles Quality Rater schauen nach Expertise, Autorität und Vertrauenswürdigkeit (E-E-A-T). Für E-Commerce bedeutet das: Produktseiten mit echten Spezifikationen, Kaufratgeber geschrieben von Menschen, die die Produkte tatsächlich benutzt haben, und Vergleichsinhalte, die nicht nur das wiederholen, was der Hersteller sagt.",
          },
        ],
      },
      {
        id: "internal-linking-infrastructure",
        title: "Interne Verlinkung: Die Infrastruktur, die alles zusammenhält",
        blocks: [
          {
            type: "p",
            text: "Thematische Autorität allein, also ein Haufen guter Inhalte, funktioniert ohne starke interne Verlinkung nicht vollständig. Die interne Linkstruktur ist das, womit Google die Beziehungen zwischen deinen Seiten versteht und welche Seiten am wichtigsten sind. Es ist auch der Weg, wie Link Equity auf deiner Website verteilt wird.",
          },
          {
            type: "p",
            text: "Die Regel ist einfach: Jede Spoke-Seite sollte auf den Hub verlinken. Der Hub sollte auf die wichtigsten Spokes verlinken. Neue Inhalte, ob Blogbeitrag, Ratgeber oder neue Produktseite, sollten auf die relevanteste Kategorieseite verlinken, zu der sie gehören. Wenn du einen Beitrag über 'Wie trainierst du für deinen ersten 5km-Lauf' veröffentlichst, sollte er auf deine Laufschuh-Kategorieseite verlinken.",
          },
          {
            type: "tip",
            text: "Führe einen Crawl deiner Website mit Screaming Frog oder Sitebulb durch und prüfe, welche Seiten die wenigsten internen Links haben. Deine Kategorieseiten (Hubs) sollten zu den am stärksten intern verlinkten Seiten deiner Website gehören. Wenn das nicht der Fall ist, hast du ein strukturelles Problem, das aktiv deine Rankings unterdrückt.",
          },
          {
            type: "list",
            items: [
              "Hub-Seiten sollten interne Links von jedem relevanten Spoke, jeder Produktseite und jedem Blogbeitrag erhalten",
              "Spoke-Seiten sollten immer mit keyword-reichem Ankertext auf ihren Hub zurückverlinken",
              "Neue Inhalte auf der Website sollten auf die relevanteste Kategorieseite verlinken",
              "Beschreibenden Ankertext verwenden, z.B. 'Kaufratgeber Laufschuhe' statt 'Hier klicken'",
              "Verwaiste Seiten vermeiden; jede Seite sollte innerhalb von 3 Klicks von der Startseite erreichbar sein",
              "Interne Links vierteljährlich mit Screaming Frog auf defekte oder fehlende Links prüfen",
            ],
          },
        ],
      },
      {
        id: "measuring-topical-authority",
        title: "Messen, ob es wirklich funktioniert",
        blocks: [
          {
            type: "p",
            text: "Das primäre Signal, dass deine thematische Autoritätsstrategie funktioniert, ist eine Verbesserung der Hub-Seiten-Rankings. In den meisten Fällen wird das Aufbauen von 3-5 starken Spoke-Seiten rund um eine Kategorie die Rankings der Hub-Seite innerhalb von 4-8 Wochen verbessern. Der Effekt ist nicht immer dramatisch. Ein Sprung von Position 12 auf Position 7 ist bedeutsam, auch wenn er sich nicht so anfühlt. Verfolge es.",
          },
          {
            type: "p",
            text: "Sekundäre Signale, auf die du achten solltest: organische Klicks auf die Hub-Seite (Google Search Console), Crawl-Abdeckung (werden alle deine Spoke-Seiten zeitnah indexiert?) und Engagement-Metriken auf Spoke-Seiten (Zeit auf der Seite, Absprungrate, Seiten pro Sitzung). Wenn Spoke-Seiten hohe Absprungraten haben, erfüllen sie ihren Zweck nicht.",
          },
          {
            type: "callout",
            title: "Wenn es nicht funktioniert",
            text: "Wenn du 5+ Spoke-Seiten aufgebaut hast und der Hub sich nach 8 Wochen nicht bewegt hat, ist das Problem fast immer Link-Autorität, nicht Inhalt. Deine Website hat wahrscheinlich noch nicht genug Domain-Autorität, um für den Hub-Begriff zu ranken. Das ist der Moment, in dem Linkaufbau zur Priorität wird. Sieh dir den Linkaufbau-Taktiken-Ratgeber an. Content und Links arbeiten zusammen. Keines allein ist ausreichend für wettbewerbsintensive Kategorien.",
          },
          {
            type: "list",
            items: [
              "Hub-Seitenposition wöchentlich in Ahrefs oder Google Search Console verfolgen",
              "Vor dem Start eine Basislinie setzen, also aktuelle Rankings aufzeichnen oder exportieren",
              "Organische Klicks zur Hub-Seite in GSC Woche für Woche messen",
              "Indexierungsabdeckung für alle Spoke-Seiten in Google Search Console nach 7-10 Tagen prüfen",
              "Spoke-Seiten-Engagement in GA4 überprüfen: Zeit auf der Seite und Seiten pro Sitzung",
              "Nach 8 Wochen ohne Hub-Bewegung eine Link-Gap-Analyse durchführen, denn Autorität ist das wahrscheinliche Problem",
            ],
          },
        ],
      },
    ],
  },

  fr: {
    nav: {
      prev: { href: "/guides/link-building-tactics", category: "SEO E-commerce avancé", title: "Tactiques de création de liens" },
      next: { href: "/guides/ranking-chatgpt", category: "SEO E-commerce avancé", title: "Se classer sur ChatGPT" },
    },
    sections: [
      {
        id: "what-topical-authority-is",
        title: "Ce qu'est vraiment l'autorité thématique",
        blocks: [
          {
            type: "p",
            text: "L'autorité thématique est la façon dont Google détermine si un site sait vraiment de quoi il parle. Un site avec une couverture profonde et solide d'un sujet (pages produits, pages catégories, guides d'achat, contenus comparatifs, FAQ) signale une expertise réelle. Un site avec une seule page catégorie et aucun contenu de support paraît creux, et Google traite de plus en plus ces sites comme basse priorité pour les requêtes compétitives.",
          },
          {
            type: "p",
            text: "C'est plus important aujourd'hui qu'il y a cinq ans. Le système Helpful Content de Google (introduit en 2022 et élargi depuis) cherche activement si le contenu a été écrit par quelqu'un avec une vraie connaissance du sujet. Si votre site vend des chaussures de running mais n'a aucun contenu expliquant comment les choisir, vous laissez des signaux d'expertise inexploités.",
          },
          {
            type: "callout",
            title: "Ce n'est pas qu'une question de blogging",
            text: "L'autorité thématique pour l'e-commerce se construit à travers plusieurs types de contenu : pages produits, pages catégories, guides d'achat, pages de comparaison et contenu FAQ. Un seul article de blog bien structuré compte moins qu'un écosystème de contenu complet autour de votre catégorie. Pensez en clusters, pas en articles individuels.",
          },
        ],
      },
      {
        id: "hub-and-spoke-model",
        title: "Le modèle hub-and-spoke pour l'e-commerce",
        blocks: [
          {
            type: "p",
            text: "Le modèle hub-and-spoke est le cadre le plus pratique pour l'autorité thématique en e-commerce. Le hub est votre page catégorie principale, par exemple /chaussures-running. Les spokes sont des pages de contenu de support qui répondent à des questions spécifiques, des comparaisons et des décisions d'achat que quelqu'un recherchant des chaussures de running pourrait avoir.",
          },
          {
            type: "p",
            text: "De bons spokes pour une catégorie chaussures de running incluent : un guide d'achat ('comment choisir ses chaussures de running'), du contenu comparatif ('chaussures route vs trail'), des pages d'intention spécifiques ('meilleures chaussures running pied plat', 'meilleures chaussures running pied large', 'chaussures running moins de 100 euros'), et du contenu entretien ('comment nettoyer ses chaussures de running'). Chaque spoke répond à un chercheur spécifique à un moment précis de sa recherche. Tous les spokes renvoient au hub.",
          },
          {
            type: "tip",
            text: "La page hub bénéficie des signaux d'autorité et de pertinence qui proviennent des spokes. Quand quelqu'un atterrit sur une page spoke puis navigue vers le hub, c'est un signal comportemental que Google remarque. Construisez des spokes qui aident vraiment les gens, pas des pages superficielles qui n'existent que pour transmettre du link equity.",
          },
          {
            type: "list",
            items: [
              "Page hub : votre page catégorie principale, optimisée pour le terme head principal",
              "Spoke guide d'achat : 'comment choisir [catégorie]', cible l'intention informationnelle",
              "Spoke comparaison : '[option A] vs [option B]', cible l'intention comparative",
              "Spokes d'intention spécifique : 'meilleur [catégorie] pour [besoin spécifique]', cible l'intention transactionnelle longue traîne",
              "Spoke entretien/utilisation : 'comment [entretenir/utiliser] [produit]', renforce la confiance",
              "Spoke FAQ : réponses aux 10 questions les plus posées sur votre catégorie",
            ],
          },
        ],
      },
      {
        id: "mapping-content-gaps",
        title: "Identifier vos lacunes de contenu",
        blocks: [
          {
            type: "p",
            text: "Une lacune de contenu est une question que votre audience cible pose et à laquelle votre site ne répond pas. Ces lacunes sont faciles à trouver si vous savez où chercher. Prenez vos 5 à 10 mots-clés catégorie principaux. Googlez chacun. Faites défiler les résultats normaux et regardez deux fonctionnalités SERP spécifiques : la boîte 'Autres questions posées' et la section 'Recherches associées' en bas de page.",
          },
          {
            type: "p",
            text: "Chaque question dans la boîte 'Autres questions posées' est une lacune de contenu que vous pourriez combler. Chaque recherche associée pour laquelle vous n'avez pas de page ciblée est un spoke potentiel. Notez-les toutes. Ouvrez ensuite les sites de vos concurrents et regardez leurs sections blog et ressources. S'ils ont 20 articles sur les chaussures de running et vous en avez 2, l'écart est évident, et le crawler de Google le remarque aussi.",
          },
          {
            type: "tip",
            text: "L'outil Content Gap d'Ahrefs compare votre domaine à jusqu'à 10 concurrents et vous montre les mots-clés pour lesquels ils se classent mais pas vous. Lancez-le pour vos 2-3 principaux concurrents et triez par volume de recherche. Les mots-clés avec un volume supérieur à 500/mois que vous manquez sont vos lacunes de contenu prioritaires.",
          },
          {
            type: "checklist",
            items: [
              "Googler vos 10 mots-clés catégorie principaux et noter toutes les questions 'Autres questions posées'",
              "Noter toutes les 'Recherches associées' pour lesquelles vous n'avez pas de page ciblée",
              "Lancer l'outil Ahrefs Content Gap contre vos 2-3 principaux concurrents",
              "Filtrer les résultats par volume de recherche (500+ par mois) et intention informationnelle ou commerciale",
              "Prioriser les lacunes où les concurrents se classent en positions 1-10, car ce sont des sujets éprouvés",
              "Associer chaque lacune à un type de contenu : guide d'achat, page de comparaison, FAQ ou page d'intention spécifique",
              "Établir un calendrier éditorial avec une page spoke par semaine pour les 3 prochains mois",
            ],
          },
        ],
      },
      {
        id: "depth-vs-width",
        title: "La profondeur avant la largeur",
        blocks: [
          {
            type: "p",
            text: "L'instinct en e-commerce est d'élargir : plus de catégories, plus de produits, plus de verticales. Cet instinct est mauvais pour le SEO, du moins dans les phases initiales et intermédiaires de construction de l'autorité. Un site avec une couverture superficielle sur 10 catégories sera presque toujours moins performant qu'un site avec une couverture profonde et solide de 2-3 catégories.",
          },
          {
            type: "p",
            text: "Si vous vendez des chaussures de running, dominez le contenu sur les chaussures de running avant de passer à la chaussure sportive générale. Construisez 15 à 20 pages de qualité sur les chaussures de running avant de commencer à écrire sur les chaussures de gym ou les chaussures de marche. Google récompense la profondeur. Un site avec 15 pages solides sur les chaussures de running surclassera un site avec 3 pages running et 3 pages pour les chaussures de gym, de marche et de randonnée, même si le nombre total de pages est similaire.",
          },
          {
            type: "callout",
            title: "Le test de profondeur",
            text: "Pouvez-vous honnêtement dire que votre site est la meilleure ressource sur internet pour quelqu'un qui recherche votre catégorie ? Si la réponse est non, vous n'avez pas encore assez approfondi. Votre concurrent qui se classe au-dessus de vous peut probablement répondre oui, ou s'en approche davantage.",
          },
          {
            type: "p",
            text: "Aller en profondeur signifie aussi qualité, pas seulement quantité. Un cluster de 20 articles superficiels de 400 mots ne construira pas d'autorité thématique. Les évaluateurs qualité de Google recherchent l'Expertise, l'Autorité et la Fiabilité (E-E-A-T). Pour l'e-commerce, cela signifie des pages produits avec de vraies spécifications, des guides d'achat rédigés par des personnes ayant réellement utilisé les produits, et du contenu comparatif qui ne se contente pas de répéter ce que dit le fabricant.",
          },
        ],
      },
      {
        id: "internal-linking-infrastructure",
        title: "Le maillage interne : l'infrastructure qui fait tout fonctionner",
        blocks: [
          {
            type: "p",
            text: "L'autorité thématique seule, même un ensemble de bon contenu, ne fonctionne pas pleinement sans un maillage interne solide. La structure de liens internes est ce qui permet à Google de comprendre les relations entre vos pages et lesquelles sont les plus importantes. C'est aussi le chemin par lequel le link equity circule sur votre site.",
          },
          {
            type: "p",
            text: "La règle est simple : chaque page spoke doit renvoyer vers le hub. Le hub doit renvoyer vers les spokes les plus importants. Tout nouveau contenu, qu'il s'agisse d'un article de blog, d'un guide ou d'une nouvelle page produit, doit renvoyer vers la page catégorie la plus pertinente à laquelle il est associé. Si vous publiez un article sur 'comment s'entraîner pour votre premier 5km', il devrait renvoyer vers votre page catégorie chaussures de running.",
          },
          {
            type: "tip",
            text: "Effectuez un crawl de votre site avec Screaming Frog ou Sitebulb et vérifiez quelles pages reçoivent le moins de liens internes. Vos pages catégories (hubs) devraient figurer parmi les pages les plus liées en interne de votre site. Si ce n'est pas le cas, vous avez un problème structurel qui supprime activement vos classements.",
          },
          {
            type: "list",
            items: [
              "Les pages hub doivent recevoir des liens internes de chaque spoke, page produit et article de blog pertinents",
              "Les pages spoke doivent toujours renvoyer vers leur hub avec un ancre riche en mots-clés",
              "Tout nouveau contenu publié sur le site doit renvoyer vers la page catégorie la plus pertinente",
              "Utiliser un ancre descriptif, comme 'guide d'achat chaussures running' pas 'cliquez ici'",
              "Éviter les pages orphelines; chaque page doit être accessible en 3 clics depuis la page d'accueil",
              "Auditer les liens internes trimestriellement avec Screaming Frog pour trouver les liens brisés ou manquants",
            ],
          },
        ],
      },
      {
        id: "measuring-topical-authority",
        title: "Mesurer si ça fonctionne vraiment",
        blocks: [
          {
            type: "p",
            text: "Le signal principal que votre stratégie d'autorité thématique fonctionne est le mouvement dans les classements de la page hub. Dans la plupart des cas, construire 3 à 5 pages spoke solides autour d'une catégorie améliorera les classements de la page hub en 4 à 8 semaines. L'effet n'est pas toujours spectaculaire. Un saut de la position 12 à la position 7 est significatif même si ça ne le semble pas. Suivez-le.",
          },
          {
            type: "p",
            text: "Signaux secondaires à surveiller : clics organiques sur la page hub (Google Search Console), couverture de crawl (toutes vos pages spoke sont-elles indexées rapidement ?), et métriques d'engagement sur les pages spoke (temps passé, taux de rebond, pages par session). Si les pages spoke ont des taux de rebond élevés, elles ne remplissent pas leur fonction.",
          },
          {
            type: "callout",
            title: "Quand ça ne fonctionne pas",
            text: "Si vous avez construit 5+ pages spoke et que le hub n'a pas bougé en 8 semaines, le problème est presque toujours l'autorité de liens, pas le contenu. Votre site n'a probablement pas encore assez d'autorité de domaine pour se classer sur le terme hub. C'est là que la création de liens devient prioritaire, alors consultez le guide Tactiques de création de liens. Contenu et liens fonctionnent ensemble. Ni l'un ni l'autre seul ne suffit pour les catégories compétitives.",
          },
          {
            type: "list",
            items: [
              "Suivre la position de la page hub chaque semaine dans Ahrefs ou Google Search Console",
              "Établir une base de référence avant de commencer à publier des pages spoke",
              "Mesurer les clics organiques vers la page hub dans GSC semaine après semaine",
              "Vérifier la couverture d'index pour toutes les pages spoke dans Google Search Console après 7-10 jours",
              "Examiner l'engagement des pages spoke dans GA4 : temps sur la page et pages par session",
              "Après 8 semaines sans mouvement du hub, effectuer une analyse des lacunes de liens, car l'autorité est probablement le problème",
            ],
          },
        ],
      },
    ],
  },

  es: {
    nav: {
      prev: { href: "/guides/link-building-tactics", category: "SEO para e-commerce avanzado", title: "Tácticas de link building" },
      next: { href: "/guides/ranking-chatgpt", category: "SEO para e-commerce avanzado", title: "Posicionarse en ChatGPT" },
    },
    sections: [
      {
        id: "what-topical-authority-is",
        title: "Qué es realmente la autoridad temática",
        blocks: [
          {
            type: "p",
            text: "La autoridad temática es la forma en que Google determina si un sitio realmente sabe de lo que habla. Un sitio con cobertura profunda y sólida de un tema (páginas de producto, páginas de categoría, guías de compra, contenido comparativo, FAQs) señala experiencia real. Un sitio con una sola página de categoría y sin contenido de apoyo parece superficial, y Google trata cada vez más estos sitios como baja prioridad para términos competitivos.",
          },
          {
            type: "p",
            text: "Esto importa más hoy que hace cinco años. El sistema Helpful Content de Google (introducido en 2022 y ampliado desde entonces) busca activamente si el contenido fue escrito por alguien con conocimiento real del tema. Si tu sitio vende zapatillas de running pero no tiene contenido que explique cómo elegirlas, estás dejando señales de experiencia sin aprovechar.",
          },
          {
            type: "callout",
            title: "No es solo cuestión de blogging",
            text: "La autoridad temática para e-commerce se construye a través de varios tipos de contenido: páginas de producto, páginas de categoría, guías de compra, páginas de comparación y contenido FAQ. Un solo artículo de blog bien estructurado importa menos que un ecosistema de contenido completo alrededor de tu categoría. Piensa en clusters, no en artículos individuales.",
          },
        ],
      },
      {
        id: "hub-and-spoke-model",
        title: "El modelo hub-and-spoke para e-commerce",
        blocks: [
          {
            type: "p",
            text: "El modelo hub-and-spoke es el framework más práctico para la autoridad temática en e-commerce. El hub es tu página de categoría principal, por ejemplo /zapatillas-running. Los spokes son páginas de contenido de apoyo que responden preguntas específicas, comparaciones y decisiones de compra que alguien investigando zapatillas de running podría tener.",
          },
          {
            type: "p",
            text: "Buenos spokes para una categoría de zapatillas de running incluyen: una guía de compra ('cómo elegir zapatillas de running'), contenido comparativo ('zapatillas asfalto vs trail'), páginas de intención específica ('mejores zapatillas running pie plano', 'mejores zapatillas running pie ancho', 'zapatillas running menos de 100 euros'), y contenido de cuidado/mantenimiento ('cómo limpiar zapatillas de running'). Cada página spoke sirve a un buscador específico en un punto concreto de su investigación. Todos los spokes enlazan de vuelta al hub.",
          },
          {
            type: "tip",
            text: "La página hub se beneficia de las señales de autoridad y relevancia que fluyen desde los spokes. Cuando alguien aterriza en una página spoke y luego navega al hub, es una señal de comportamiento que Google nota. Construye spokes que realmente ayuden a las personas, no páginas superficiales que solo existen para pasar link equity.",
          },
          {
            type: "list",
            items: [
              "Página hub: tu página de categoría principal, optimizada para el término head principal",
              "Spoke guía de compra: 'cómo elegir [categoría]', dirige a la intención informacional",
              "Spoke comparación: '[opción A] vs [opción B]', dirige a la intención comparativa",
              "Spokes de intención específica: 'mejor [categoría] para [necesidad específica]', dirige a la intención transaccional de cola larga",
              "Spoke cuidado/uso: 'cómo [mantener/usar] [producto]', genera confianza",
              "Spoke FAQ: respuestas a las 10 preguntas más frecuentes sobre tu categoría",
            ],
          },
        ],
      },
      {
        id: "mapping-content-gaps",
        title: "Identificar tus brechas de contenido",
        blocks: [
          {
            type: "p",
            text: "Una brecha de contenido es una pregunta que hace tu audiencia objetivo que tu sitio no responde. Estas brechas son fáciles de encontrar si sabes dónde buscar. Toma tus 5-10 keywords de categoría principales. Búscalas en Google. Desplázate más allá de los resultados normales y mira dos características específicas del SERP: el cuadro 'Las personas también preguntan' y la sección 'Búsquedas relacionadas' al final de la página.",
          },
          {
            type: "p",
            text: "Cada pregunta en el cuadro 'Las personas también preguntan' es una brecha de contenido que podrías llenar. Cada búsqueda relacionada para la que no tienes una página específica es un spoke potencial. Anótalas todas. Luego abre los sitios de tus competidores y mira sus secciones de blog y recursos. Si tienen 20 artículos sobre temas de zapatillas de running y tú tienes 2, la brecha es evidente, y el rastreador de Google también la nota.",
          },
          {
            type: "tip",
            text: "La herramienta Content Gap de Ahrefs compara tu dominio con hasta 10 competidores y te muestra las keywords para las que ellos se posicionan y tú no. Ejecútala para tus 2-3 principales competidores y ordena por volumen de búsqueda. Las keywords con volumen superior a 500/mes que te faltan son tus brechas de contenido más prioritarias.",
          },
          {
            type: "checklist",
            items: [
              "Buscar en Google tus 10 keywords de categoría principales y anotar todas las preguntas 'Las personas también preguntan'",
              "Anotar todas las 'Búsquedas relacionadas' para las que no tienes una página específica",
              "Ejecutar la herramienta Ahrefs Content Gap contra tus 2-3 principales competidores",
              "Filtrar resultados por volumen de búsqueda (500+ por mes) e intención informacional o comercial",
              "Priorizar brechas donde los competidores se posicionan en posiciones 1-10, ya que esos son temas probados",
              "Asociar cada brecha a un tipo de contenido: guía de compra, página de comparación, FAQ o página de intención específica",
              "Crear un calendario de contenido con una página spoke por semana durante los próximos 3 meses",
            ],
          },
        ],
      },
      {
        id: "depth-vs-width",
        title: "Primero en profundidad, luego en amplitud",
        blocks: [
          {
            type: "p",
            text: "El instinto en e-commerce es expandirse: más categorías, más productos, más verticales. Ese instinto es incorrecto para el SEO, al menos en las etapas iniciales e intermedias de construcción de autoridad. Un sitio con cobertura superficial en 10 categorías casi siempre tendrá peor rendimiento que un sitio con cobertura profunda y sólida de 2-3 categorías.",
          },
          {
            type: "p",
            text: "Si vendes zapatillas de running, domina el contenido sobre zapatillas de running antes de expandirte al calzado deportivo general. Construye 15-20 páginas de alta calidad sobre zapatillas de running antes de empezar a escribir sobre zapatillas de gym o calzado para caminar. Google recompensa la profundidad. Un sitio con 15 páginas sólidas sobre zapatillas de running superará a un sitio con 3 páginas de running y 3 páginas cada una para zapatillas de gym, calzado para caminar y botas de senderismo, incluso si el número total de páginas es similar.",
          },
          {
            type: "callout",
            title: "La prueba de profundidad",
            text: "¿Puedes decir honestamente que tu sitio es el mejor recurso en internet para alguien que investiga tu categoría? Si la respuesta es no, todavía no has ido suficientemente en profundidad. Tu competidor que se posiciona por encima de ti probablemente puede decir que sí, o al menos se acerca más que tú.",
          },
          {
            type: "p",
            text: "Ir en profundidad también significa calidad, no solo cantidad. Un cluster de 20 artículos superficiales de 400 palabras no construirá autoridad temática. Los evaluadores de calidad de Google buscan Experiencia, Autoridad y Confiabilidad (E-E-A-T). Para e-commerce, esto significa páginas de producto con especificaciones reales, guías de compra escritas por personas que han usado realmente los productos, y contenido comparativo que no se limita a repetir lo que dice el fabricante.",
          },
        ],
      },
      {
        id: "internal-linking-infrastructure",
        title: "Enlazado interno: la infraestructura que hace funcionar todo",
        blocks: [
          {
            type: "p",
            text: "La autoridad temática por sí sola, incluso un montón de buen contenido, no funciona completamente sin un sólido enlazado interno. La estructura de enlaces internos es lo que permite a Google entender las relaciones entre tus páginas y cuáles son las más importantes. También es el camino por el que fluye el link equity por tu sitio.",
          },
          {
            type: "p",
            text: "La regla es simple: cada página spoke debe enlazar al hub. El hub debe enlazar a los spokes más importantes. El nuevo contenido, ya sea un artículo de blog, una guía o una nueva página de producto, debe enlazar a la página de categoría más relevante con la que está conectado. Si publicas un post sobre 'cómo entrenar para tu primer 5k', debería enlazar a tu página de categoría de zapatillas de running.",
          },
          {
            type: "tip",
            text: "Haz un crawl de tu sitio con Screaming Frog o Sitebulb y comprueba qué páginas reciben menos enlaces internos. Tus páginas de categoría (hubs) deberían estar entre las páginas con más enlaces internos de tu sitio. Si no es así, tienes un problema estructural que está suprimiendo activamente tus rankings.",
          },
          {
            type: "list",
            items: [
              "Las páginas hub deben recibir enlaces internos de cada spoke, página de producto y artículo de blog relevante",
              "Las páginas spoke siempre deben enlazar de vuelta a su hub con texto ancla rico en keywords",
              "El nuevo contenido publicado en cualquier parte del sitio debe enlazar a la página de categoría más relevante",
              "Usar texto ancla descriptivo, como 'guía de compra zapatillas running' no 'haz clic aquí'",
              "Evitar páginas huérfanas; cada página debe ser accesible en 3 clics desde la página de inicio",
              "Auditar los enlaces internos trimestralmente con Screaming Frog para encontrar enlaces rotos o faltantes",
            ],
          },
        ],
      },
      {
        id: "measuring-topical-authority",
        title: "Medir si realmente está funcionando",
        blocks: [
          {
            type: "p",
            text: "La señal principal de que tu estrategia de autoridad temática está funcionando es el movimiento en los rankings de la página hub. En la mayoría de los casos, construir 3-5 páginas spoke sólidas alrededor de una categoría mejorará los rankings de la página hub en 4-8 semanas. El efecto no siempre es dramático. Un salto de la posición 12 a la posición 7 es significativo aunque no lo parezca. Rastréalo.",
          },
          {
            type: "p",
            text: "Señales secundarias que hay que vigilar: clics orgánicos a la página hub (Google Search Console), cobertura de rastreo (¿todas tus páginas spoke se están indexando rápidamente?), y métricas de engagement en las páginas spoke (tiempo en página, tasa de rebote, páginas por sesión). Si las páginas spoke tienen altas tasas de rebote, no están cumpliendo su propósito.",
          },
          {
            type: "callout",
            title: "Cuando no funciona",
            text: "Si has construido 5+ páginas spoke y el hub no se ha movido en 8 semanas, el problema es casi siempre la autoridad de enlaces, no el contenido. Tu sitio probablemente no tiene suficiente autoridad de dominio para posicionarse en el término hub todavía. Es cuando el link building se convierte en la prioridad, así que consulta la guía de Tácticas de Link Building. Contenido y enlaces funcionan juntos. Ninguno por sí solo es suficiente para categorías competitivas.",
          },
          {
            type: "list",
            items: [
              "Rastrear la posición de la página hub semanalmente en Ahrefs o Google Search Console",
              "Establecer una línea base antes de empezar a publicar páginas spoke",
              "Medir los clics orgánicos a la página hub en GSC semana a semana",
              "Comprobar la cobertura de índice para todas las páginas spoke en Google Search Console después de 7-10 días",
              "Revisar el engagement de las páginas spoke en GA4: tiempo en página y páginas por sesión",
              "Después de 8 semanas sin movimiento del hub, realizar un análisis de brechas de enlaces porque la autoridad es probablemente el problema",
            ],
          },
        ],
      },
    ],
  },

  it: {
    nav: {
      prev: { href: "/guides/link-building-tactics", category: "SEO e-commerce avanzato", title: "Tattiche di link building" },
      next: { href: "/guides/ranking-chatgpt", category: "SEO e-commerce avanzato", title: "Posizionarsi su ChatGPT" },
    },
    sections: [
      {
        id: "what-topical-authority-is",
        title: "Cosa significa davvero autorità tematica",
        blocks: [
          {
            type: "p",
            text: "L'autorità tematica è il modo in cui Google determina se un sito sa davvero di cosa sta parlando. Un sito con copertura profonda e solida di un argomento (pagine prodotto, pagine categoria, guide all'acquisto, contenuti comparativi, FAQ) segnala una vera competenza. Un sito con una sola pagina categoria e nessun contenuto di supporto appare superficiale, e Google tratta sempre più questi siti come bassa priorità per i termini competitivi.",
          },
          {
            type: "p",
            text: "Questo è più importante oggi che cinque anni fa. Il sistema Helpful Content di Google (introdotto nel 2022 e ampliato da allora) cerca attivamente se il contenuto è stato scritto da qualcuno con vera conoscenza dell'argomento. Se il tuo sito vende scarpe da running ma non ha contenuti che spieghino come sceglierle, stai lasciando inesplorati segnali di competenza.",
          },
          {
            type: "callout",
            title: "Non si tratta solo di blogging",
            text: "L'autorità tematica per l'e-commerce si costruisce attraverso diversi tipi di contenuto: pagine prodotto, pagine categoria, guide all'acquisto, pagine di confronto e contenuto FAQ. Un singolo articolo di blog ben strutturato conta meno di un ecosistema di contenuti completo attorno alla tua categoria. Pensa per cluster, non per articoli singoli.",
          },
        ],
      },
      {
        id: "hub-and-spoke-model",
        title: "Il modello hub-and-spoke per l'e-commerce",
        blocks: [
          {
            type: "p",
            text: "Il modello hub-and-spoke è il framework più pratico per l'autorità tematica nell'e-commerce. L'hub è la tua pagina categoria principale, ad esempio /scarpe-running. Gli spoke sono pagine di contenuto di supporto che rispondono a domande specifiche, confronti e decisioni di acquisto che qualcuno che cerca scarpe da running potrebbe avere.",
          },
          {
            type: "p",
            text: "Buoni spoke per una categoria scarpe da running includono: una guida all'acquisto ('come scegliere le scarpe da running'), contenuto comparativo ('scarpe asfalto vs trail'), pagine di intento specifico ('migliori scarpe running piede piatto', 'migliori scarpe running piede largo', 'scarpe running meno di 100 euro'), e contenuto di cura/manutenzione ('come pulire le scarpe da running'). Ogni pagina spoke serve un cercatore specifico in un punto preciso della sua ricerca. Tutti gli spoke rimandano all'hub.",
          },
          {
            type: "tip",
            text: "La pagina hub beneficia dei segnali di autorità e rilevanza che provengono dagli spoke. Quando qualcuno atterra su una pagina spoke e poi naviga verso l'hub, è un segnale comportamentale che Google nota. Costruisci spoke che aiutino davvero le persone, non pagine superficiali che esistono solo per passare link equity.",
          },
          {
            type: "list",
            items: [
              "Pagina hub: la tua pagina categoria principale, ottimizzata per il termine head principale",
              "Spoke guida all'acquisto: 'come scegliere [categoria]', si rivolge all'intento informazionale",
              "Spoke confronto: '[opzione A] vs [opzione B]', si rivolge all'intento comparativo",
              "Spoke di intento specifico: 'migliore [categoria] per [bisogno specifico]', si rivolge all'intento transazionale a coda lunga",
              "Spoke cura/utilizzo: 'come [mantenere/usare] [prodotto]', costruisce fiducia",
              "Spoke FAQ: risposte alle 10 domande più frequenti sulla tua categoria",
            ],
          },
        ],
      },
      {
        id: "mapping-content-gaps",
        title: "Identificare le lacune di contenuto",
        blocks: [
          {
            type: "p",
            text: "Una lacuna di contenuto è una domanda che il tuo pubblico target pone e a cui il tuo sito non risponde. Queste lacune sono facili da trovare se sai dove cercare. Prendi le tue prime 5-10 keyword di categoria. Cerca ognuna su Google. Scorri oltre i risultati normali e guarda due caratteristiche specifiche delle SERP: il riquadro 'Le persone hanno chiesto anche' e la sezione 'Ricerche correlate' in fondo alla pagina.",
          },
          {
            type: "p",
            text: "Ogni domanda nel riquadro 'Le persone hanno chiesto anche' è una lacuna di contenuto che potresti colmare. Ogni ricerca correlata per cui non hai una pagina specifica è un potenziale spoke. Annotale tutte. Poi apri i siti dei tuoi concorrenti e guarda le loro sezioni blog e risorse. Se hanno 20 articoli sulle scarpe da running e tu ne hai 2, il divario è evidente, e il crawler di Google lo nota anche.",
          },
          {
            type: "tip",
            text: "Lo strumento Content Gap di Ahrefs confronta il tuo dominio con fino a 10 concorrenti e ti mostra le keyword per cui si posizionano ma tu no. Eseguilo per i tuoi 2-3 principali concorrenti e ordina per volume di ricerca. Le keyword con volume superiore a 500/mese che ti mancano sono le tue lacune di contenuto prioritarie.",
          },
          {
            type: "checklist",
            items: [
              "Cercare su Google le 10 keyword di categoria principali e registrare tutte le domande 'Le persone hanno chiesto anche'",
              "Annotare tutte le 'Ricerche correlate' per cui non hai una pagina specifica",
              "Eseguire lo strumento Ahrefs Content Gap contro i tuoi 2-3 principali concorrenti",
              "Filtrare i risultati per volume di ricerca (500+ al mese) e intento informazionale o commerciale",
              "Prioritizzare le lacune dove i concorrenti si posizionano in posizioni 1-10, perché quelli sono argomenti provati",
              "Associare ogni lacuna a un tipo di contenuto: guida all'acquisto, pagina di confronto, FAQ o pagina di intento specifico",
              "Creare un calendario editoriale con una pagina spoke a settimana per i prossimi 3 mesi",
            ],
          },
        ],
      },
      {
        id: "depth-vs-width",
        title: "Prima in profondità, poi in ampiezza",
        blocks: [
          {
            type: "p",
            text: "L'istinto nell'e-commerce è espandersi - più categorie, più prodotti, più verticali. Quell'istinto è sbagliato per la SEO, almeno nelle fasi iniziali e intermedie di costruzione dell'autorità. Un sito con copertura superficiale su 10 categorie quasi sempre avrà prestazioni inferiori rispetto a un sito con copertura profonda e completa di 2-3 categorie.",
          },
          {
            type: "p",
            text: "Se vendi scarpe da running, domina il contenuto sulle scarpe da running prima di passare alle calzature sportive in generale. Costruisci 15-20 pagine di alta qualità sulle scarpe da running prima di iniziare a scrivere di scarpe da palestra o da camminata. Google premia la profondità. Un sito con 15 pagine solide sulle scarpe da running supererà un sito con 3 pagine running e 3 pagine per scarpe da palestra, camminata e trekking - anche se il numero totale di pagine è simile.",
          },
          {
            type: "callout",
            title: "Il test della profondità",
            text: "Puoi dire onestamente che il tuo sito è la migliore risorsa su internet per qualcuno che ricerca la tua categoria? Se la risposta è no, non sei ancora andato abbastanza in profondità. Il tuo concorrente che si posiziona sopra di te probabilmente può dirlo - o ci si avvicina di più.",
          },
          {
            type: "p",
            text: "Andare in profondità significa anche qualità, non solo quantità. Un cluster di 20 articoli superficiali da 400 parole non costruirà autorità tematica. I valutatori di qualità di Google cercano Esperienza, Autorevolezza e Affidabilità (E-E-A-T). Per l'e-commerce, questo significa pagine prodotto con specifiche reali, guide all'acquisto scritte da persone che hanno effettivamente usato i prodotti, e contenuti comparativi che non si limitano a ripetere quanto dice il produttore.",
          },
        ],
      },
      {
        id: "internal-linking-infrastructure",
        title: "Link interni: l'infrastruttura che fa funzionare tutto",
        blocks: [
          {
            type: "p",
            text: "L'autorità tematica da sola - un insieme di buoni contenuti - non funziona completamente senza una solida struttura di link interni. La struttura di link interni è ciò che permette a Google di capire le relazioni tra le tue pagine e quali sono le più importanti. È anche il percorso attraverso cui scorre il link equity nel tuo sito.",
          },
          {
            type: "p",
            text: "La regola è semplice: ogni pagina spoke dovrebbe rimandare all'hub. L'hub dovrebbe rimandare agli spoke più importanti. Ogni nuovo contenuto - che sia un articolo di blog, una guida o una nuova pagina prodotto - dovrebbe rimandare alla pagina categoria più rilevante a cui è collegato. Se pubblichi un post su 'come allenarsi per la tua prima 5km', dovrebbe rimandare alla tua pagina categoria scarpe da running.",
          },
          {
            type: "tip",
            text: "Esegui un crawl del tuo sito con Screaming Frog o Sitebulb e controlla quali pagine ricevono meno link interni. Le tue pagine categoria (hub) dovrebbero essere tra le pagine con più link interni del tuo sito. Se non lo sono, hai un problema strutturale che sta attivamente sopprimendo i tuoi ranking.",
          },
          {
            type: "list",
            items: [
              "Le pagine hub devono ricevere link interni da ogni spoke, pagina prodotto e articolo di blog rilevante",
              "Le pagine spoke dovrebbero sempre rimandare al loro hub con anchor text ricco di keyword",
              "Ogni nuovo contenuto pubblicato sul sito dovrebbe rimandare alla pagina categoria più rilevante",
              "Usare anchor text descrittivo - 'guida all'acquisto scarpe running' non 'clicca qui'",
              "Evitare pagine orfane - ogni pagina deve essere raggiungibile entro 3 clic dalla homepage",
              "Verificare i link interni trimestralmente con Screaming Frog per trovare link rotti o mancanti",
            ],
          },
        ],
      },
      {
        id: "measuring-topical-authority",
        title: "Misurare se sta davvero funzionando",
        blocks: [
          {
            type: "p",
            text: "Il segnale principale che la tua strategia di autorità tematica sta funzionando è il movimento nei ranking della pagina hub. Nella maggior parte dei casi, costruire 3-5 pagine spoke solide attorno a una categoria migliorerà i ranking della pagina hub entro 4-8 settimane. L'effetto non è sempre drammatico - un salto dalla posizione 12 alla posizione 7 è significativo anche se non sembra. Tienilo sotto controllo.",
          },
          {
            type: "p",
            text: "Segnali secondari da monitorare: clic organici alla pagina hub (Google Search Console), copertura di crawl (tutte le tue pagine spoke vengono indicizzate tempestivamente?), e metriche di engagement sulle pagine spoke (tempo sulla pagina, frequenza di rimbalzo, pagine per sessione). Se le pagine spoke hanno alte frequenze di rimbalzo, non stanno svolgendo il loro scopo.",
          },
          {
            type: "callout",
            title: "Quando non funziona",
            text: "Se hai costruito 5+ pagine spoke e l'hub non si è mosso in 8 settimane, il problema è quasi sempre l'autorità dei link, non il contenuto. Il tuo sito probabilmente non ha ancora sufficiente autorità di dominio per posizionarsi sul termine hub. È quando il link building diventa la priorità - vedi la guida Tattiche di Link Building. Contenuto e link funzionano insieme. Nessuno dei due da solo è sufficiente per categorie competitive.",
          },
          {
            type: "list",
            items: [
              "Tracciare la posizione della pagina hub settimanalmente in Ahrefs o Google Search Console",
              "Stabilire una linea di base prima di iniziare a pubblicare pagine spoke",
              "Misurare i clic organici alla pagina hub in GSC settimana per settimana",
              "Controllare la copertura dell'indice per tutte le pagine spoke in Google Search Console dopo 7-10 giorni",
              "Esaminare l'engagement delle pagine spoke in GA4: tempo sulla pagina e pagine per sessione",
              "Dopo 8 settimane senza movimenti dell'hub, eseguire un'analisi del gap di link - l'autorità è probabilmente il problema",
            ],
          },
        ],
      },
    ],
  },

  nl: {
    nav: {
      prev: { href: "/guides/link-building-tactics", category: "Geavanceerde e-commerce SEO", title: "Linkbuilding-tactieken" },
      next: { href: "/guides/ranking-chatgpt", category: "Geavanceerde e-commerce SEO", title: "Ranken op ChatGPT" },
    },
    sections: [
      {
        id: "what-topical-authority-is",
        title: "Wat topicale autoriteit werkelijk betekent",
        blocks: [
          {
            type: "p",
            text: "Topicale autoriteit is de manier waarop Google bepaalt of een site echt weet waar het over praat. Een site met diepe, uitgebreide dekking van een onderwerp - productpagina's, categoriepagina's, aankoopgidsen, vergelijkende content, FAQ's - signaleert echte expertise. Een site met één categoriepagina en geen ondersteunende content ziet er dun uit, en Google behandelt zulke sites steeds vaker als lage prioriteit voor competitieve termen.",
          },
          {
            type: "p",
            text: "Dit is nu belangrijker dan vijf jaar geleden. Google's Helpful Content-systeem (geïntroduceerd in 2022 en sindsdien uitgebreid) zoekt actief of content is geschreven door iemand met echte kennis van het onderwerp. Als jouw site hardloopschoenen verkoopt maar geen content heeft die uitlegt hoe je ze kiest, laat je expertise-signalen onbenut.",
          },
          {
            type: "callout",
            title: "Het gaat niet alleen om bloggen",
            text: "Topicale autoriteit voor e-commerce wordt opgebouwd via meerdere contenttypes: productpagina's, categoriepagina's, aankoopgidsen, vergelijkingspagina's en FAQ-content. Één goed gestructureerd blogbericht telt minder dan een volledig content-ecosysteem rond jouw categorie. Denk in clusters, niet in losse artikelen.",
          },
        ],
      },
      {
        id: "hub-and-spoke-model",
        title: "Het hub-and-spoke-model voor e-commerce",
        blocks: [
          {
            type: "p",
            text: "Het hub-and-spoke-model is het meest praktische framework voor topicale autoriteit in e-commerce. De hub is je hoofdcategoriepagina - bijvoorbeeld /hardloopschoenen. De spokes zijn ondersteunende contentpagina's die specifieke vragen, vergelijkingen en aankoopbeslissingen beantwoorden die iemand die hardloopschoenen onderzoekt zou kunnen hebben.",
          },
          {
            type: "p",
            text: "Goede spokes voor een hardloopschoenen-categorie zijn: een aankoopgids ('hoe kies je hardloopschoenen'), vergelijkende content ('wegloopschoenen vs trailschoenen'), specifieke intentie-pagina's ('beste hardloopschoenen voor platvoeten', 'beste hardloopschoenen voor brede voeten', 'hardloopschoenen onder 100 euro'), en verzorgings-/onderhoudscontent ('hoe reinig je hardloopschoenen'). Elke spoke-pagina bedient een specifieke zoeker op een specifiek punt in zijn onderzoek. Alle spokes linken terug naar de hub.",
          },
          {
            type: "tip",
            text: "De hubpagina profiteert van de autoriteits- en relevantsignalen die vanuit de spokes stromen. Wanneer iemand op een spoke-pagina landt en vervolgens naar de hub navigeert, is dat een gedragssignaal dat Google opmerkt. Bouw spokes die mensen echt helpen - geen dunne pagina's die alleen bestaan om link equity door te geven.",
          },
          {
            type: "list",
            items: [
              "Hubpagina: je hoofdcategoriepagina, geoptimaliseerd voor de primaire head-term",
              "Aankoopgids-spoke: 'hoe kies je [categorie]' - richt zich op informatieve zoekintentie",
              "Vergelijkings-spoke: '[optie A] vs [optie B]' - richt zich op vergelijkende zoekintentie",
              "Specifieke intentie-spokes: 'beste [categorie] voor [specifieke behoefte]' - richt zich op long-tail transactionele intentie",
              "Verzorging/gebruik-spoke: 'hoe [onderhoud/gebruik] je [product]' - bouwt vertrouwen op",
              "FAQ-spoke: antwoorden op de 10 meest gestelde vragen over jouw categorie",
            ],
          },
        ],
      },
      {
        id: "mapping-content-gaps",
        title: "Je contentgaten in kaart brengen",
        blocks: [
          {
            type: "p",
            text: "Een contentgat is een vraag die jouw doelgroep stelt en die jouw site niet beantwoordt. Deze gaten zijn makkelijk te vinden als je weet waar je moet zoeken. Neem je top 5-10 categoriekeywords. Google ze elk afzonderlijk. Scrol voorbij de gewone resultaten en kijk naar twee specifieke SERP-kenmerken: het vak 'Anderen zochten ook' en de sectie 'Gerelateerde zoekopdrachten' onderaan de pagina.",
          },
          {
            type: "p",
            text: "Elke vraag in het vak 'Anderen zochten ook' is een contentgat dat je kunt vullen. Elke gerelateerde zoekopdracht waarvoor je geen gerichte pagina hebt, is een potentiële spoke. Schrijf ze allemaal op. Open vervolgens de sites van je concurrenten en kijk naar hun blog- en resourcesecties. Als zij 20 artikelen hebben over hardloopschoen-onderwerpen en jij 2, is het gat duidelijk - en Google's crawler merkt het ook.",
          },
          {
            type: "tip",
            text: "De Ahrefs Content Gap-tool vergelijkt jouw domein met tot 10 concurrenten en toont keywords waarvoor zij ranken maar jij niet. Voer dit uit voor je top 2-3 concurrenten en sorteer op zoekvolume. Keywords met een volume boven de 500/maand die je mist, zijn jouw hoogst prioritaire contentgaten.",
          },
          {
            type: "checklist",
            items: [
              "Je top 10 categoriekeywords googelen en alle 'Anderen zochten ook'-vragen noteren",
              "Alle 'Gerelateerde zoekopdrachten' noteren waarvoor je geen gerichte pagina hebt",
              "De Ahrefs Content Gap-tool uitvoeren tegen je top 2-3 concurrenten",
              "Resultaten filteren op zoekvolume (500+ per maand) en informatieve of commerciële intentie",
              "Gaten prioriteren waar concurrenten op posities 1-10 ranken - dat zijn bewezen onderwerpen",
              "Elk gat koppelen aan een contenttype: aankoopgids, vergelijkingspagina, FAQ of specifieke intentiepagina",
              "Een contentkalender maken met één spoke-pagina per week voor de komende 3 maanden",
            ],
          },
        ],
      },
      {
        id: "depth-vs-width",
        title: "Eerst de diepte in, dan de breedte",
        blocks: [
          {
            type: "p",
            text: "Het instinct in e-commerce is uitbreiden - meer categorieën, meer producten, meer verticalen. Dat instinct is fout voor SEO, in elk geval in de vroege en middenfasen van autoriteitsontwikkeling. Een site met oppervlakkige dekking over 10 categorieën zal bijna altijd slechter presteren dan een site met diepe, uitgebreide dekking van 2-3 categorieën.",
          },
          {
            type: "p",
            text: "Als je hardloopschoenen verkoopt, domineer dan hardloopschoen-content voordat je naar algemeen sportschoeisel uitbreidt. Bouw 15-20 kwalitatief hoogwaardige pagina's over hardloopschoenen voordat je begint te schrijven over gymschoenen of wandelschoenen. Google beloont diepte. Een site met 15 sterke hardloopschoenpagina's zal een site met 3 hardloopschoenpagina's en 3 pagina's voor gymschoenen, wandelschoenen en wandelschoenen overtreffen - zelfs als het totale aantal pagina's vergelijkbaar is.",
          },
          {
            type: "callout",
            title: "De dieptetest",
            text: "Kun je eerlijk zeggen dat jouw site de beste bron op internet is voor iemand die jouw categorie onderzoekt? Als het antwoord nee is, ben je nog niet diep genoeg gegaan. Jouw concurrent die boven je rankt, kan dat waarschijnlijk wel zeggen - of komt er in elk geval dichter bij.",
          },
          {
            type: "p",
            text: "De diepte ingaan betekent ook kwaliteit, niet alleen kwantiteit. Een cluster van 20 oppervlakkige artikelen van 400 woorden bouwt geen topicale autoriteit op. Google's kwaliteitsbeoordelaars zoeken naar Expertise, Autoriteit en Betrouwbaarheid (E-E-A-T). Voor e-commerce betekent dit: productpagina's met echte specificaties, aankoopgidsen geschreven door mensen die de producten daadwerkelijk hebben gebruikt, en vergelijkende content die niet alleen herhaalt wat de fabrikant zegt.",
          },
        ],
      },
      {
        id: "internal-linking-infrastructure",
        title: "Interne linking: de infrastructuur die alles laat werken",
        blocks: [
          {
            type: "p",
            text: "Topicale autoriteit alleen - een hoop goede content - werkt niet volledig zonder sterke interne linking. De interne linkstructuur is hoe Google de relaties tussen jouw pagina's begrijpt en welke pagina's het belangrijkst zijn. Het is ook hoe link equity door jouw site stroomt.",
          },
          {
            type: "p",
            text: "De regel is eenvoudig: elke spoke-pagina moet naar de hub linken. De hub moet naar de belangrijkste spokes linken. Nieuwe content - of het nu een blogbericht, een gids of een nieuwe productpagina is - moet linken naar de meest relevante categoriepagina waarmee het verbonden is. Als je een post publiceert over 'hoe train je voor je eerste 5km', moet dat linken naar je hardloopschoenen-categoriepagina.",
          },
          {
            type: "tip",
            text: "Voer een crawl uit van je site met Screaming Frog of Sitebulb en controleer welke pagina's de minste interne links ontvangen. Jouw categoriepagina's (hubs) zouden tot de meest intern gelinkte pagina's van je site moeten behoren. Als dat niet zo is, heb je een structureel probleem dat jouw rankings actief onderdrukt.",
          },
          {
            type: "list",
            items: [
              "Hubpagina's moeten interne links ontvangen van elke relevante spoke, productpagina en blogbericht",
              "Spoke-pagina's moeten altijd teruglinken naar hun hub met keyword-rijke ankertekst",
              "Nieuwe content die ergens op de site wordt gepubliceerd, moet linken naar de meest relevante categoriepagina",
              "Beschrijvende ankertekst gebruiken - 'aankoopgids hardloopschoenen' niet 'klik hier'",
              "Vermijd wezenpagina's - elke pagina moet binnen 3 klikken vanaf de homepage bereikbaar zijn",
              "Interne links elk kwartaal controleren met Screaming Frog op gebroken of ontbrekende links",
            ],
          },
        ],
      },
      {
        id: "measuring-topical-authority",
        title: "Meten of het echt werkt",
        blocks: [
          {
            type: "p",
            text: "Het primaire signaal dat je topicale autoriteitsstrategie werkt, is beweging in de rankings van de hubpagina. In de meeste gevallen zal het opbouwen van 3-5 sterke spoke-pagina's rond een categorie de rankings van de hubpagina binnen 4-8 weken verbeteren. Het effect is niet altijd dramatisch - een sprong van positie 12 naar positie 7 is significant ook al voelt het dat niet. Houd het bij.",
          },
          {
            type: "p",
            text: "Secundaire signalen om in de gaten te houden: organische klikken naar de hubpagina (Google Search Console), crawldekking (worden al jouw spoke-pagina's snel geïndexeerd?), en engagementmaatstaven op spoke-pagina's (tijd op pagina, bouncepercentage, pagina's per sessie). Als spoke-pagina's hoge bouncepercentages hebben, vervullen ze hun doel niet.",
          },
          {
            type: "callout",
            title: "Wanneer het niet werkt",
            text: "Als je 5+ spoke-pagina's hebt gebouwd en de hub is na 8 weken niet bewogen, is het probleem bijna altijd linkautoriteit, niet content. Jouw site heeft waarschijnlijk nog niet genoeg domeinautoriteit om te ranken voor de hub-term. Dit is wanneer linkbuilding de prioriteit wordt - zie de gids Linkbuilding-tactieken. Content en links werken samen. Geen van beide is voldoende op zichzelf voor competitieve categorieën.",
          },
          {
            type: "list",
            items: [
              "Hubpaginapositie wekelijks bijhouden in Ahrefs of Google Search Console",
              "Een basislijn vaststellen voordat je begint met het publiceren van spoke-pagina's",
              "Organische klikken naar de hubpagina in GSC week voor week meten",
              "Indexdekking voor alle spoke-pagina's in Google Search Console na 7-10 dagen controleren",
              "Spoke-pagina-engagement in GA4 bekijken: tijd op pagina en pagina's per sessie",
              "Na 8 weken zonder hubbeweging een linkgat-analyse uitvoeren - autoriteit is waarschijnlijk het probleem",
            ],
          },
        ],
      },
    ],
  },
};
