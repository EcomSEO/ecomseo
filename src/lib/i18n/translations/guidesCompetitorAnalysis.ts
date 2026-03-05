import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guidesCompetitorAnalysisT: Record<
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
    badge: "Research & Ideation",
    heading: "Competitor Analysis for Ecommerce SEO",
    intro:
      "Your SEO competitors are not the same as your business competitors. Understanding that difference — and knowing how to systematically pull apart what's working for whoever ranks above you — is one of the highest-leverage activities in ecommerce SEO.",
    readTime: "15 min read",
    sections: [
      {
        id: "seo-vs-business-competitors",
        title: "SEO Competitors vs. Business Competitors",
        blocks: [
          {
            type: "p",
            text: "Your business competitors are the brands you lose sales to. Your SEO competitors are whoever ranks for your keywords — and these are often completely different lists. A media publisher running a \"best [your product]\" roundup is an SEO competitor even if they sell nothing. An affiliate comparison site occupying three spots on page one for your category terms is an SEO competitor. You need to beat them in Google before worrying about beating them in revenue.",
          },
          {
            type: "p",
            text: "This distinction matters for how you approach the work. When you analyse a business competitor, you look at pricing, product range, and brand. When you analyse an SEO competitor, you look at their backlink profile, content structure, and the specific keywords driving their organic traffic. The questions are totally different.",
          },
          {
            type: "callout",
            title: "Run a quick SEO competitor check",
            text: "Search your five most important product-category keywords. Write down who appears in positions 1–5 for each. If the same three to four domains show up consistently, those are your real SEO competitors — regardless of whether you've ever thought of them as competition.",
          },
        ],
      },
      {
        id: "finding-seo-competitors",
        title: "Finding Your SEO Competitors Systematically",
        blocks: [
          {
            type: "p",
            text: "Manual SERP checks work for a starting list, but they don't scale. For a proper view, use Ahrefs \"Competing Domains\" report (under Site Explorer) or SEMrush \"Organic Competitors\". Feed in your domain and both tools show you which other sites rank for the same keywords as yours, ranked by the degree of overlap.",
          },
          {
            type: "p",
            text: "What you're looking for: domains with high keyword overlap and organic traffic significantly above yours. These are the sites whose strategies are worth reverse-engineering. A domain ranking for 80% of your keywords but pulling 3× your traffic is doing something differently on content, links, or both.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Site Explorer → Competing Domains: shows overlap by shared keyword count",
              "SEMrush Organic Research → Competitors: similar view with position distribution",
              "Manual SERP checks for your 10 most important keywords: fast, free, tells you who's actually there today",
              "Look beyond direct retail competitors — publishers, affiliate sites, and marketplaces often dominate category terms",
            ],
          },
          {
            type: "tip",
            text: "Don't limit competitor research to 2–3 players. Build a list of 8–10 and group them: direct retail competitors, media/editorial sites, affiliate aggregators. You'll need different strategies to outrank each type.",
          },
        ],
      },
      {
        id: "keyword-gap",
        title: "Keyword Gap Analysis",
        blocks: [
          {
            type: "p",
            text: "A keyword gap analysis answers one question: what are your competitors ranking for that you're not? In Ahrefs, this is the \"Content Gap\" tool under Site Explorer — enter your domain plus 2–4 competitors and it shows keywords they rank for and you don't. In SEMrush it's the \"Keyword Gap\" tool. Run this at least quarterly.",
          },
          {
            type: "p",
            text: "Filter the output aggressively. You're not interested in every keyword a competitor ranks for — just the ones with buying intent and realistic traffic potential. Filter by search volume over 100, keyword difficulty under 40, and words containing commercial modifiers like \"buy\", \"shop\", \"cheap\", \"review\", or \"best\". What's left is your actual opportunity list.",
          },
          {
            type: "checklist",
            items: [
              "Run Ahrefs Content Gap or SEMrush Keyword Gap with your top 3–4 competitors",
              "Filter for volume > 100 and KD < 40 to start with achievable targets",
              "Sort by search volume descending to prioritize the biggest missed opportunities first",
              "Tag each gap keyword by page type needed: category page, product page, or blog post",
              "Add the top 20 to your content roadmap for the next two quarters",
            ],
          },
        ],
      },
      {
        id: "content-gap",
        title: "Content Gap: Pages You're Missing",
        blocks: [
          {
            type: "p",
            text: "Keyword gaps tell you which terms to target. Content gaps tell you which entire pages or sections you're missing. Go into Ahrefs or SEMrush and pull a competitor's top pages by organic traffic. Work through their top 30. For each page ask: do we have something equivalent? If not, that's a content gap.",
          },
          {
            type: "p",
            text: "Common content gaps for ecommerce stores: subcategory pages they have that you don't (\"men's waterproof hiking boots\" vs your catch-all \"hiking boots\" page), comparison or \"best of\" content (\"best trail shoes under £100\"), size or spec guides, and brand-versus-brand pages (\"Nike vs Adidas running shoes\"). These pages earn enormous long-tail traffic and are often pure buying-intent searches.",
          },
          {
            type: "callout",
            title: "Content gaps are faster wins than link building",
            text: "Creating a missing subcategory page that a competitor ranks well for requires no outreach, no budget for links, and often ranks within 3–6 months if your domain has any authority. It's one of the most underrated ecommerce SEO tactics.",
          },
          {
            type: "tip",
            text: "When reviewing competitor top pages, also look at their internal linking. What do they link to from high-traffic pages? That tells you what they consider their money pages — and those are exactly the pages worth studying closely.",
          },
        ],
      },
      {
        id: "backlink-gap",
        title: "Backlink Gap: Link Opportunities You're Missing",
        blocks: [
          {
            type: "p",
            text: "Backlinks are still one of the strongest ranking factors for competitive ecommerce terms. The backlink gap is simply: which high-quality sites link to your competitors but not to you? Those sites have already shown they're willing to link to a business in your space — that's the warmest possible outreach target.",
          },
          {
            type: "p",
            text: "In Ahrefs, use the \"Link Intersect\" tool (under \"More\" in Site Explorer). Enter your domain and 3–5 competitors. The tool shows referring domains that link to competitors but not to you. Sort by domain rating (DR) descending. Focus on DR 40+ sites — these are the links that actually move rankings.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Link Intersect: best tool for finding sites that link to competitors but not you",
              "SEMrush Backlink Gap: equivalent feature, slightly different interface",
              "Prioritize DR 40+ referring domains — below that the link equity is marginal",
              "Group targets by type: editorial coverage, roundup posts, resource pages, industry directories",
              "For each target site, find the specific page that links to your competitor and understand why they linked",
            ],
          },
          {
            type: "callout",
            title: "Links without a reason won't happen",
            text: "Before outreaching to any site that links to a competitor, answer: why would they link to you? You need a specific asset — a data study, a tool, a comprehensive guide, or a product worth featuring. Without one, your outreach gets ignored.",
          },
        ],
      },
      {
        id: "serp-features",
        title: "SERP Feature Gaps",
        blocks: [
          {
            type: "p",
            text: "Google's search results pages have changed dramatically. Beyond the standard blue links, there are featured snippets, image carousels, shopping results, video boxes, People Also Ask, and local packs. Each of these is a ranking opportunity — and for most ecommerce stores, SERP features are largely unoptimized.",
          },
          {
            type: "p",
            text: "Check which SERP features your competitors own. If a competitor owns the featured snippet for \"how to clean hiking boots\" and you sell hiking boots, that snippet drives warm traffic to their content — and from there, potentially to their products. Featured snippets usually go to pages with clear, concise answers structured in lists or short paragraphs. Reformat your existing content to compete for these.",
          },
          {
            type: "list",
            items: [
              "Featured snippets: reformat relevant blog and guide content with clear H2/H3 questions and concise answers",
              "Shopping results: ensure product feeds are correctly set up in Google Merchant Center",
              "Image carousels: optimize product image alt text and filenames for relevant search terms",
              "People Also Ask: create FAQ sections on category pages targeting common questions in your niche",
              "Video results: consider producing short product demos or how-to videos for high-traffic informational terms",
            ],
          },
        ],
      },
      {
        id: "turning-analysis-into-action",
        title: "Turning Analysis into a Prioritized Action Plan",
        blocks: [
          {
            type: "p",
            text: "Competitor analysis is easy to drown in. You can spend weeks pulling data and end up with a 500-row spreadsheet that no one acts on. The discipline is in deciding what not to chase. Every finding you surface should be scored by traffic potential and difficulty, then put in a queue.",
          },
          {
            type: "p",
            text: "The practical rule: pick your top 3 content gaps and top 3 link opportunities and work exclusively on those for 60 days before revisiting. That focus produces results that a broad, unfocused crawl through competitor data doesn't. Three well-executed content pieces and three quality links outperform twenty mediocre attempts every time.",
          },
          {
            type: "checklist",
            items: [
              "Score every gap finding: traffic potential (1–3) × commercial intent (1–3) ÷ estimated effort (1–3)",
              "Pick the top 3 content gaps — create those pages first",
              "Pick the top 3 link targets — build a specific outreach asset for each",
              "Schedule a full competitor analysis refresh every 90 days",
              "Track your position changes on the target keywords monthly in Google Search Console",
            ],
          },
          {
            type: "tip",
            text: "Set up Ahrefs or SEMrush position tracking for the top 20 keywords you identified in your gap analysis. Watching those rankings improve (or not) over 3–6 months is the only honest feedback loop on whether your strategy is working.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/keyword-research",
        category: "Research & Ideation",
        title: "Keyword Research",
      },
      next: {
        href: "/guides/technical-analysis",
        category: "Research & Ideation",
        title: "Technical Analysis",
      },
    },
  },

  de: {
    badge: "Recherche & Ideenfindung",
    heading: "Wettbewerbsanalyse für Ecommerce-SEO",
    intro:
      "Deine SEO-Konkurrenten sind nicht dasselbe wie deine Geschäftskonkurrenten. Diesen Unterschied zu verstehen — und zu wissen, wie man systematisch analysiert, was bei denen funktioniert, die über dir ranken — ist eine der wirkungsvollsten Aktivitäten im Ecommerce-SEO.",
    readTime: "15 Min. Lesezeit",
    sections: [
      {
        id: "seo-vs-business-competitors",
        title: "SEO-Konkurrenten vs. Geschäftskonkurrenten",
        blocks: [
          {
            type: "p",
            text: "Deine Geschäftskonkurrenten sind die Marken, an die du Verkäufe verlierst. Deine SEO-Konkurrenten sind alle, die für deine Keywords ranken — und das sind oft völlig unterschiedliche Listen. Ein Medienverlag, der eine \"beste [dein Produkt]\"-Übersicht betreibt, ist ein SEO-Konkurrent, auch wenn er nichts verkauft. Eine Affiliate-Vergleichssite, die drei Plätze auf Seite eins für deine Kategoriebegriffe belegt, ist ein SEO-Konkurrent. Du musst sie bei Google schlagen, bevor du dir Sorgen machst, sie beim Umsatz zu übertreffen.",
          },
          {
            type: "p",
            text: "Dieser Unterschied ist wichtig für die Herangehensweise. Bei einem Geschäftskonkurrenten schaust du auf Preise, Sortiment und Marke. Bei einem SEO-Konkurrenten schaust du auf sein Backlink-Profil, die Inhaltsstruktur und die spezifischen Keywords, die seinen organischen Traffic antreiben. Die Fragen sind völlig verschieden.",
          },
          {
            type: "callout",
            title: "Schnelle SEO-Konkurrenten-Prüfung",
            text: "Suche nach deinen fünf wichtigsten Produktkategorie-Keywords. Notiere, wer für jedes in den Positionen 1–5 erscheint. Wenn dieselben drei bis vier Domains konstant auftauchen, sind das deine echten SEO-Konkurrenten — unabhängig davon, ob du sie je als Konkurrenz betrachtet hast.",
          },
        ],
      },
      {
        id: "finding-seo-competitors",
        title: "SEO-Konkurrenten systematisch finden",
        blocks: [
          {
            type: "p",
            text: "Manuelle SERP-Prüfungen eignen sich für eine erste Liste, skalieren aber nicht. Für eine umfassende Übersicht nutze den Ahrefs \"Competing Domains\"-Bericht (unter Site Explorer) oder SEMrush \"Organic Competitors\". Gib deine Domain ein, und beide Tools zeigen dir, welche anderen Seiten für dieselben Keywords ranken wie du — sortiert nach dem Grad der Überschneidung.",
          },
          {
            type: "p",
            text: "Was du suchst: Domains mit hoher Keyword-Überschneidung und organischem Traffic deutlich über deinem. Das sind die Seiten, deren Strategien es sich lohnt zu reverse-engineern. Eine Domain, die für 80% deiner Keywords rankt, aber das 3-fache deines Traffics generiert, macht irgendetwas anders — bei Content, Links oder beidem.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Site Explorer → Competing Domains: zeigt Überschneidung nach gemeinsamer Keyword-Anzahl",
              "SEMrush Organic Research → Competitors: ähnliche Ansicht mit Positionsverteilung",
              "Manuelle SERP-Prüfungen für deine 10 wichtigsten Keywords: schnell, kostenlos, zeigt wer heute tatsächlich dort ist",
              "Über direkte Retailer hinausschauen — Publisher, Affiliate-Sites und Marktplätze dominieren oft Kategoriebegriffe",
            ],
          },
          {
            type: "tip",
            text: "Beschränke die Konkurrenzrecherche nicht auf 2–3 Anbieter. Erstelle eine Liste von 8–10 und gruppiere sie: direkte Retail-Konkurrenten, Medien-/Redaktionsseiten, Affiliate-Aggregatoren. Du brauchst für jeden Typ unterschiedliche Strategien.",
          },
        ],
      },
      {
        id: "keyword-gap",
        title: "Keyword-Gap-Analyse",
        blocks: [
          {
            type: "p",
            text: "Eine Keyword-Gap-Analyse beantwortet eine Frage: Für welche Keywords ranken deine Konkurrenten, du aber nicht? In Ahrefs ist das das \"Content Gap\"-Tool unter Site Explorer — gib deine Domain plus 2–4 Konkurrenten ein, und es zeigt Keywords, für die sie ranken und du nicht. In SEMrush heißt es \"Keyword Gap\". Führe das mindestens einmal pro Quartal durch.",
          },
          {
            type: "p",
            text: "Filtere die Ausgabe konsequent. Dich interessiert nicht jedes Keyword, für das ein Konkurrent rankt — nur jene mit Kaufabsicht und realistischem Traffic-Potenzial. Filtere nach Suchvolumen über 100, Keyword-Schwierigkeit unter 40 und Wörtern mit kommerziellen Modifikatoren wie \"kaufen\", \"günstig\", \"Bewertung\" oder \"beste\". Was übrig bleibt, ist deine echte Chancenliste.",
          },
          {
            type: "checklist",
            items: [
              "Führe Ahrefs Content Gap oder SEMrush Keyword Gap mit deinen Top-3–4-Konkurrenten aus",
              "Filtere nach Volumen > 100 und KD < 40, um mit erreichbaren Zielen zu starten",
              "Sortiere nach Suchvolumen absteigend, um die größten verpassten Chancen zuerst zu priorisieren",
              "Ordne jedes Gap-Keyword nach benötigtem Seitentyp ein: Kategorieseite, Produktseite oder Blogbeitrag",
              "Füge die Top 20 für die nächsten zwei Quartale deiner Content-Roadmap hinzu",
            ],
          },
        ],
      },
      {
        id: "content-gap",
        title: "Content-Gap: Fehlende Seiten",
        blocks: [
          {
            type: "p",
            text: "Keyword-Gaps zeigen dir, welche Begriffe du targetieren solltest. Content-Gaps zeigen dir, welche ganzen Seiten oder Abschnitte dir fehlen. Rufe in Ahrefs oder SEMrush die Top-Seiten eines Konkurrenten nach organischem Traffic ab. Arbeite die Top 30 durch. Frage für jede Seite: Haben wir etwas Gleichwertiges? Falls nicht, ist das ein Content-Gap.",
          },
          {
            type: "p",
            text: "Häufige Content-Gaps bei Ecommerce-Shops: Unterkategorie-Seiten, die sie haben und du nicht (\"wasserdichte Herren-Wanderschuhe\" gegenüber deiner allgemeinen \"Wanderschuhe\"-Seite), Vergleichs- oder \"Beste\"-Inhalte (\"beste Trailschuhe unter 100 €\"), Größen- oder Spezifikationsratgeber und Marke-versus-Marke-Seiten (\"Nike vs. Adidas Laufschuhe\"). Diese Seiten generieren enormen Long-Tail-Traffic und sind oft reine Kaufabsichts-Suchanfragen.",
          },
          {
            type: "callout",
            title: "Content-Gaps sind schnellere Gewinne als Linkaufbau",
            text: "Eine fehlende Unterkategorie-Seite zu erstellen, für die ein Konkurrent gut rankt, erfordert keine Outreach-Aktionen, kein Budget für Links und rankt oft innerhalb von 3–6 Monaten, wenn deine Domain eine gewisse Autorität hat. Das ist eine der am meisten unterschätzten Ecommerce-SEO-Taktiken.",
          },
          {
            type: "tip",
            text: "Schau dir beim Durchsehen der Top-Seiten von Konkurrenten auch deren interne Verlinkung an. Worauf verlinken sie von hoch-frequentierten Seiten? Das zeigt dir, was sie als ihre wichtigsten Seiten betrachten — und genau diese Seiten lohnt es sich, genau zu studieren.",
          },
        ],
      },
      {
        id: "backlink-gap",
        title: "Backlink-Gap: Verpasste Link-Chancen",
        blocks: [
          {
            type: "p",
            text: "Backlinks sind nach wie vor einer der stärksten Ranking-Faktoren für kompetitive Ecommerce-Begriffe. Der Backlink-Gap ist einfach: Welche hochwertigen Seiten verlinken auf deine Konkurrenten, aber nicht auf dich? Diese Seiten haben bereits gezeigt, dass sie bereit sind, auf ein Unternehmen in deinem Bereich zu verlinken — das ist das warmste mögliche Outreach-Ziel.",
          },
          {
            type: "p",
            text: "In Ahrefs nutze das \"Link Intersect\"-Tool (unter \"Mehr\" in Site Explorer). Gib deine Domain und 3–5 Konkurrenten ein. Das Tool zeigt verweisende Domains, die auf Konkurrenten verlinken, aber nicht auf dich. Sortiere nach Domain Rating (DR) absteigend. Konzentriere dich auf Seiten mit DR 40+ — das sind die Links, die Rankings tatsächlich bewegen.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Link Intersect: bestes Tool, um Seiten zu finden, die auf Konkurrenten, aber nicht auf dich verlinken",
              "SEMrush Backlink Gap: gleichwertiges Feature mit leicht anderem Interface",
              "Priorisiere verweisende Domains mit DR 40+ — darunter ist die Link-Equity marginal",
              "Gruppiere Ziele nach Typ: redaktionelle Coverage, Roundup-Beiträge, Ressourcenseiten, Branchenverzeichnisse",
              "Finde für jede Zielseite die spezifische Seite, die auf deinen Konkurrenten verlinkt, und verstehe warum",
            ],
          },
          {
            type: "callout",
            title: "Links ohne Grund passieren nicht",
            text: "Bevor du eine Seite anschreibst, die auf einen Konkurrenten verlinkt, beantworte: Warum sollten sie auf dich verlinken? Du brauchst ein spezifisches Asset — eine Datenstudie, ein Tool, einen umfassenden Leitfaden oder ein vorstellungswürdiges Produkt. Ohne eines davon wird dein Outreach ignoriert.",
          },
        ],
      },
      {
        id: "serp-features",
        title: "SERP-Feature-Gaps",
        blocks: [
          {
            type: "p",
            text: "Googles Suchergebnisseiten haben sich dramatisch verändert. Neben den normalen blauen Links gibt es Featured Snippets, Bild-Karussells, Shopping-Ergebnisse, Video-Boxen, \"Andere Nutzer fragten auch\" und lokale Packs. Jedes davon ist eine Ranking-Chance — und für die meisten Ecommerce-Shops sind SERP-Features weitgehend unoptimiert.",
          },
          {
            type: "p",
            text: "Prüfe, welche SERP-Features deine Konkurrenten besitzen. Wenn ein Konkurrent den Featured Snippet für \"wie reinige ich Wanderschuhe\" besitzt und du Wanderschuhe verkaufst, treibt dieser Snippet warmen Traffic auf seinen Content — und von dort potenziell auf seine Produkte. Featured Snippets gehen meist an Seiten mit klaren, prägnanten Antworten, die in Listen oder kurzen Absätzen strukturiert sind. Formatiere deinen bestehenden Content um, um um diese zu konkurrieren.",
          },
          {
            type: "list",
            items: [
              "Featured Snippets: relevante Blog- und Leitfaden-Inhalte mit klaren H2/H3-Fragen und prägnanten Antworten neu formatieren",
              "Shopping-Ergebnisse: sicherstellen, dass Produkt-Feeds korrekt in Google Merchant Center eingerichtet sind",
              "Bild-Karussells: Alt-Text und Dateinamen von Produktbildern für relevante Suchbegriffe optimieren",
              "\"Andere Nutzer fragten auch\": FAQ-Bereiche auf Kategorieseiten für häufige Fragen in deiner Nische erstellen",
              "Video-Ergebnisse: kurze Produktdemos oder How-to-Videos für hoch-frequentierte informationelle Begriffe erwägen",
            ],
          },
        ],
      },
      {
        id: "turning-analysis-into-action",
        title: "Analyse in einen priorisierten Aktionsplan umwandeln",
        blocks: [
          {
            type: "p",
            text: "Wettbewerbsanalyse ist leicht zu ertrinken. Du kannst Wochen damit verbringen, Daten zu sammeln, und am Ende mit einem 500-Zeilen-Spreadsheet dastehen, auf das niemand reagiert. Die Disziplin liegt darin, zu entscheiden, was du nicht verfolgst. Jede Erkenntnis sollte nach Traffic-Potenzial und Aufwand bewertet und dann in eine Warteschlange gestellt werden.",
          },
          {
            type: "p",
            text: "Die praktische Regel: Wähle deine Top-3-Content-Gaps und Top-3-Link-Chancen aus und arbeite 60 Tage lang ausschließlich an diesen, bevor du alles neu bewertest. Dieser Fokus liefert Ergebnisse, die ein breiter, ungerichteter Durchlauf durch Competitor-Daten nicht liefert. Drei gut ausgeführte Content-Pieces und drei Qualitäts-Links übertreffen zwanzig mittelmäßige Versuche jedes Mal.",
          },
          {
            type: "checklist",
            items: [
              "Bewerte jede Gap-Erkenntnis: Traffic-Potenzial (1–3) × kommerzielle Absicht (1–3) ÷ geschätzter Aufwand (1–3)",
              "Wähle die Top-3-Content-Gaps — erstelle diese Seiten zuerst",
              "Wähle die Top-3-Link-Ziele — erstelle für jedes ein spezifisches Outreach-Asset",
              "Plane alle 90 Tage eine vollständige Wettbewerbsanalyse-Auffrischung ein",
              "Verfolge deine Positionsveränderungen bei den Ziel-Keywords monatlich in Google Search Console",
            ],
          },
          {
            type: "tip",
            text: "Richte in Ahrefs oder SEMrush Position-Tracking für die Top-20-Keywords ein, die du in deiner Gap-Analyse identifiziert hast. Diese Rankings über 3–6 Monate zu beobachten (oder nicht) ist die einzige ehrliche Rückkopplungsschleife, ob deine Strategie funktioniert.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/keyword-research",
        category: "Recherche & Ideenfindung",
        title: "Keyword-Recherche",
      },
      next: {
        href: "/guides/technical-analysis",
        category: "Recherche & Ideenfindung",
        title: "Technische Analyse",
      },
    },
  },

  fr: {
    badge: "Recherche & Idéation",
    heading: "Analyse de la concurrence pour le SEO e-commerce",
    intro:
      "Tes concurrents SEO ne sont pas les mêmes que tes concurrents commerciaux. Comprendre cette différence — et savoir comment décomposer systématiquement ce qui fonctionne pour ceux qui rankent au-dessus de toi — est l'une des activités les plus rentables en SEO e-commerce.",
    readTime: "15 min de lecture",
    sections: [
      {
        id: "seo-vs-business-competitors",
        title: "Concurrents SEO vs. concurrents commerciaux",
        blocks: [
          {
            type: "p",
            text: "Tes concurrents commerciaux sont les marques auxquelles tu perds des ventes. Tes concurrents SEO sont tous ceux qui rankent pour tes mots-clés — et ce sont souvent des listes complètement différentes. Un éditeur de médias qui publie un comparatif \"meilleur [ton produit]\" est un concurrent SEO même s'il ne vend rien. Un site d'affiliation qui occupe trois positions sur la première page pour tes termes de catégorie est un concurrent SEO. Tu dois les battre sur Google avant de t'inquiéter de les battre en chiffre d'affaires.",
          },
          {
            type: "p",
            text: "Cette distinction est importante pour ton approche de travail. Quand tu analyses un concurrent commercial, tu regardes les prix, la gamme de produits et la marque. Quand tu analyses un concurrent SEO, tu regardes son profil de backlinks, sa structure de contenu et les mots-clés spécifiques qui alimentent son trafic organique. Les questions sont totalement différentes.",
          },
          {
            type: "callout",
            title: "Vérification rapide des concurrents SEO",
            text: "Recherche tes cinq mots-clés de catégorie de produits les plus importants. Note qui apparaît en positions 1–5 pour chacun. Si les mêmes trois à quatre domaines reviennent régulièrement, ce sont tes vrais concurrents SEO — que tu les aies jamais considérés comme concurrents ou non.",
          },
        ],
      },
      {
        id: "finding-seo-competitors",
        title: "Trouver ses concurrents SEO de façon systématique",
        blocks: [
          {
            type: "p",
            text: "Les vérifications manuelles des SERP fonctionnent pour une liste de départ, mais elles ne sont pas évolutives. Pour une vue complète, utilise le rapport \"Competing Domains\" d'Ahrefs (dans Site Explorer) ou \"Organic Competitors\" de SEMrush. Saisis ton domaine et les deux outils te montrent quels autres sites rankent pour les mêmes mots-clés que toi, classés par degré de chevauchement.",
          },
          {
            type: "p",
            text: "Ce que tu cherches : des domaines avec un fort chevauchement de mots-clés et un trafic organique nettement supérieur au tien. Ce sont les sites dont les stratégies méritent d'être reverse-engineerées. Un domaine qui ranke pour 80% de tes mots-clés mais qui génère 3× ton trafic fait quelque chose différemment sur le contenu, les liens, ou les deux.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Site Explorer → Competing Domains : montre le chevauchement par nombre de mots-clés partagés",
              "SEMrush Organic Research → Competitors : vue similaire avec distribution des positions",
              "Vérifications manuelles des SERP pour tes 10 mots-clés les plus importants : rapide, gratuit, montre qui est là aujourd'hui",
              "Regarder au-delà des concurrents retailers directs — les éditeurs, sites d'affiliation et marketplaces dominent souvent les termes de catégorie",
            ],
          },
          {
            type: "tip",
            text: "Ne limite pas la recherche de concurrents à 2–3 acteurs. Constitue une liste de 8–10 et regroupe-les : concurrents retailers directs, sites médias/éditoriaux, agrégateurs d'affiliation. Tu auras besoin de stratégies différentes pour surclasser chaque type.",
          },
        ],
      },
      {
        id: "keyword-gap",
        title: "Analyse de l'écart de mots-clés",
        blocks: [
          {
            type: "p",
            text: "Une analyse d'écart de mots-clés répond à une question : pour quels mots-clés tes concurrents rankent-ils et pas toi ? Dans Ahrefs, c'est l'outil \"Content Gap\" sous Site Explorer — entre ton domaine plus 2–4 concurrents et il montre les mots-clés pour lesquels ils rankent et toi non. Dans SEMrush c'est l'outil \"Keyword Gap\". Lance ça au moins chaque trimestre.",
          },
          {
            type: "p",
            text: "Filtre les résultats de manière agressive. Tu ne t'intéresses pas à chaque mot-clé pour lequel un concurrent ranke — seulement à ceux avec une intention d'achat et un potentiel de trafic réaliste. Filtre par volume de recherche supérieur à 100, difficulté de mot-clé inférieure à 40, et des mots contenant des modificateurs commerciaux comme \"acheter\", \"boutique\", \"pas cher\", \"avis\" ou \"meilleur\". Ce qui reste est ta vraie liste d'opportunités.",
          },
          {
            type: "checklist",
            items: [
              "Lance Ahrefs Content Gap ou SEMrush Keyword Gap avec tes 3–4 principaux concurrents",
              "Filtre pour volume > 100 et KD < 40 pour commencer par des cibles réalisables",
              "Trie par volume de recherche décroissant pour prioriser les opportunités manquées les plus importantes",
              "Étiquette chaque mot-clé manquant par type de page nécessaire : page de catégorie, page produit ou article de blog",
              "Ajoute les 20 premiers à ta feuille de route de contenu pour les deux prochains trimestres",
            ],
          },
        ],
      },
      {
        id: "content-gap",
        title: "Écart de contenu : les pages qui manquent",
        blocks: [
          {
            type: "p",
            text: "Les écarts de mots-clés te disent quels termes cibler. Les écarts de contenu te disent quelles pages entières ou sections te manquent. Dans Ahrefs ou SEMrush, consulte les meilleures pages d'un concurrent par trafic organique. Parcours leurs 30 premières pages. Pour chaque page, demande-toi : avons-nous quelque chose d'équivalent ? Si non, c'est un écart de contenu.",
          },
          {
            type: "p",
            text: "Lacunes de contenu courantes pour les boutiques e-commerce : des pages de sous-catégories qu'ils ont et pas toi (\"chaussures de randonnée imperméables pour hommes\" vs ta page générique \"chaussures de randonnée\"), des contenus comparatifs ou \"meilleur de\" (\"meilleures chaussures de trail à moins de 100 €\"), des guides de taille ou de spécifications, et des pages marque-contre-marque (\"Nike vs Adidas chaussures de running\"). Ces pages génèrent un énorme trafic longue traîne et sont souvent des recherches à pure intention d'achat.",
          },
          {
            type: "callout",
            title: "Les écarts de contenu sont des victoires plus rapides que le link building",
            text: "Créer une page de sous-catégorie manquante pour laquelle un concurrent ranke bien ne nécessite pas d'outreach, pas de budget pour les liens, et ranke souvent dans les 3–6 mois si ton domaine a une quelconque autorité. C'est l'une des tactiques SEO e-commerce les plus sous-estimées.",
          },
          {
            type: "tip",
            text: "Quand tu examines les meilleures pages des concurrents, regarde aussi leurs liens internes. Vers quoi ils pointent depuis leurs pages à fort trafic ? Ça te dit ce qu'ils considèrent comme leurs pages monétaires — et ce sont exactement les pages qui méritent une étude approfondie.",
          },
        ],
      },
      {
        id: "backlink-gap",
        title: "Écart de backlinks : les opportunités de liens manquées",
        blocks: [
          {
            type: "p",
            text: "Les backlinks restent l'un des facteurs de classement les plus importants pour les termes e-commerce compétitifs. L'écart de backlinks est simplement : quels sites de qualité pointent vers tes concurrents mais pas vers toi ? Ces sites ont déjà montré qu'ils sont prêts à lier vers une entreprise de ton secteur — c'est la cible d'outreach la plus chaude possible.",
          },
          {
            type: "p",
            text: "Dans Ahrefs, utilise l'outil \"Link Intersect\" (sous \"Plus\" dans Site Explorer). Entre ton domaine et 3–5 concurrents. L'outil montre les domaines référents qui pointent vers les concurrents mais pas vers toi. Trie par domain rating (DR) décroissant. Concentre-toi sur les sites DR 40+ — ce sont les liens qui font vraiment bouger les classements.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Link Intersect : meilleur outil pour trouver des sites qui pointent vers des concurrents mais pas vers toi",
              "SEMrush Backlink Gap : fonctionnalité équivalente, interface légèrement différente",
              "Priorise les domaines référents DR 40+ — en dessous, l'equity de lien est marginale",
              "Regroupe les cibles par type : couverture éditoriale, articles récapitulatifs, pages de ressources, répertoires sectoriels",
              "Pour chaque site cible, trouve la page spécifique qui pointe vers ton concurrent et comprends pourquoi ils ont lié",
            ],
          },
          {
            type: "callout",
            title: "Des liens sans raison n'arrivent pas",
            text: "Avant de contacter un site qui pointe vers un concurrent, réponds à cette question : pourquoi lieraient-ils vers toi ? Tu as besoin d'un asset spécifique — une étude de données, un outil, un guide complet ou un produit qui mérite d'être mis en avant. Sans ça, ton outreach sera ignoré.",
          },
        ],
      },
      {
        id: "serp-features",
        title: "Lacunes dans les fonctionnalités SERP",
        blocks: [
          {
            type: "p",
            text: "Les pages de résultats de recherche de Google ont radicalement évolué. Au-delà des liens bleus classiques, il y a les featured snippets, les carrousels d'images, les résultats Shopping, les encadrés vidéo, \"Les gens demandent aussi\" et les packs locaux. Chacun est une opportunité de classement — et pour la plupart des boutiques e-commerce, les fonctionnalités SERP sont largement non optimisées.",
          },
          {
            type: "p",
            text: "Vérifie quelles fonctionnalités SERP tes concurrents possèdent. Si un concurrent détient le featured snippet pour \"comment nettoyer des chaussures de randonnée\" et que tu vends des chaussures de randonnée, ce snippet génère du trafic qualifié vers son contenu — et de là, potentiellement vers ses produits. Les featured snippets vont généralement aux pages avec des réponses claires et concises structurées en listes ou courts paragraphes. Reformate ton contenu existant pour concourir.",
          },
          {
            type: "list",
            items: [
              "Featured snippets : reformater le contenu de blog et guides pertinents avec des questions H2/H3 claires et des réponses concises",
              "Résultats Shopping : s'assurer que les flux produits sont correctement configurés dans Google Merchant Center",
              "Carrousels d'images : optimiser le texte alternatif et les noms de fichiers des images produits pour les termes de recherche pertinents",
              "\"Les gens demandent aussi\" : créer des sections FAQ sur les pages de catégorie ciblant les questions courantes de ta niche",
              "Résultats vidéo : envisager de produire de courtes démos produits ou vidéos pratiques pour les termes informationnels à fort trafic",
            ],
          },
        ],
      },
      {
        id: "turning-analysis-into-action",
        title: "Transformer l'analyse en plan d'action priorisé",
        blocks: [
          {
            type: "p",
            text: "L'analyse de la concurrence est facile à noyer. On peut passer des semaines à extraire des données et finir avec un tableur de 500 lignes sur lequel personne n'agit. La discipline consiste à décider ce qu'on ne poursuit pas. Chaque découverte doit être notée selon le potentiel de trafic et la difficulté, puis placée dans une file d'attente.",
          },
          {
            type: "p",
            text: "La règle pratique : choisis tes 3 meilleures lacunes de contenu et tes 3 meilleures opportunités de liens et travaille exclusivement dessus pendant 60 jours avant de réévaluer. Cette focalisation produit des résultats qu'une exploration large et non ciblée des données concurrentes ne produit pas. Trois pièces de contenu bien exécutées et trois liens de qualité surpassent vingt tentatives médiocres à chaque fois.",
          },
          {
            type: "checklist",
            items: [
              "Score chaque découverte de lacune : potentiel de trafic (1–3) × intention commerciale (1–3) ÷ effort estimé (1–3)",
              "Choisis les 3 meilleures lacunes de contenu — crée ces pages en premier",
              "Choisis les 3 meilleures cibles de liens — construis un asset d'outreach spécifique pour chacune",
              "Planifie une actualisation complète de l'analyse concurrentielle tous les 90 jours",
              "Suis tes évolutions de position sur les mots-clés cibles mensuellement dans Google Search Console",
            ],
          },
          {
            type: "tip",
            text: "Configure le suivi de position dans Ahrefs ou SEMrush pour les 20 mots-clés identifiés dans ton analyse des écarts. Observer l'évolution (ou non) de ces classements sur 3–6 mois est la seule boucle de rétroaction honnête sur l'efficacité de ta stratégie.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/keyword-research",
        category: "Recherche & Idéation",
        title: "Recherche de mots-clés",
      },
      next: {
        href: "/guides/technical-analysis",
        category: "Recherche & Idéation",
        title: "Analyse technique",
      },
    },
  },

  es: {
    badge: "Investigación e Ideación",
    heading: "Análisis de la competencia para SEO en e-commerce",
    intro:
      "Tus competidores SEO no son los mismos que tus competidores de negocio. Entender esa diferencia — y saber cómo desmontar sistemáticamente lo que funciona para quienes rankean por encima de ti — es una de las actividades con mayor impacto en el SEO de e-commerce.",
    readTime: "15 min de lectura",
    sections: [
      {
        id: "seo-vs-business-competitors",
        title: "Competidores SEO vs. competidores de negocio",
        blocks: [
          {
            type: "p",
            text: "Tus competidores de negocio son las marcas a las que pierdes ventas. Tus competidores SEO son todos los que rankean para tus palabras clave — y con frecuencia son listas completamente distintas. Un medio digital que publica un artículo \"los mejores [tu producto]\" es un competidor SEO aunque no venda nada. Un sitio de afiliados que ocupa tres posiciones en la primera página para los términos de tu categoría es un competidor SEO. Tienes que ganarles en Google antes de preocuparte por superarles en ingresos.",
          },
          {
            type: "p",
            text: "Esta distinción importa para cómo abordas el trabajo. Cuando analizas a un competidor de negocio, miras precios, gama de productos y marca. Cuando analizas a un competidor SEO, miras su perfil de backlinks, la estructura de su contenido y las palabras clave específicas que impulsan su tráfico orgánico. Las preguntas son totalmente diferentes.",
          },
          {
            type: "callout",
            title: "Comprobación rápida de competidores SEO",
            text: "Busca tus cinco palabras clave de categoría de producto más importantes. Anota quién aparece en posiciones 1–5 para cada una. Si los mismos tres o cuatro dominios aparecen de forma consistente, esos son tus verdaderos competidores SEO — independientemente de si los habías considerado competencia antes.",
          },
        ],
      },
      {
        id: "finding-seo-competitors",
        title: "Encontrar competidores SEO de forma sistemática",
        blocks: [
          {
            type: "p",
            text: "Las comprobaciones manuales de las SERPs funcionan para una lista inicial, pero no escalan. Para una visión completa, usa el informe \"Competing Domains\" de Ahrefs (en Site Explorer) o \"Organic Competitors\" de SEMrush. Introduce tu dominio y ambas herramientas te muestran qué otros sitios rankean para las mismas palabras clave que tú, ordenados por grado de solapamiento.",
          },
          {
            type: "p",
            text: "Lo que buscas: dominios con alto solapamiento de palabras clave y tráfico orgánico significativamente superior al tuyo. Estos son los sitios cuyas estrategias vale la pena hacer ingeniería inversa. Un dominio que rankea para el 80% de tus palabras clave pero que genera 3× tu tráfico está haciendo algo diferente en contenido, enlaces, o en ambos.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Site Explorer → Competing Domains: muestra el solapamiento por número de palabras clave compartidas",
              "SEMrush Organic Research → Competitors: vista similar con distribución de posiciones",
              "Comprobaciones manuales de SERPs para tus 10 palabras clave más importantes: rápido, gratuito, te dice quién está allí hoy",
              "Mirar más allá de los competidores retailers directos — editores, sitios de afiliados y marketplaces suelen dominar los términos de categoría",
            ],
          },
          {
            type: "tip",
            text: "No limites la investigación de competidores a 2–3 actores. Construye una lista de 8–10 y agrúpalos: competidores retailers directos, medios/sitios editoriales, agregadores de afiliados. Necesitarás estrategias diferentes para superar a cada tipo.",
          },
        ],
      },
      {
        id: "keyword-gap",
        title: "Análisis de brecha de palabras clave",
        blocks: [
          {
            type: "p",
            text: "Un análisis de brecha de palabras clave responde a una pregunta: ¿para qué palabras clave rankean tus competidores y tú no? En Ahrefs, es la herramienta \"Content Gap\" en Site Explorer — introduce tu dominio más 2–4 competidores y muestra palabras clave para las que ellos rankean y tú no. En SEMrush es la herramienta \"Keyword Gap\". Ejecútalo al menos una vez por trimestre.",
          },
          {
            type: "p",
            text: "Filtra el resultado de forma agresiva. No te interesan todas las palabras clave para las que rankea un competidor — solo las que tienen intención de compra y potencial de tráfico realista. Filtra por volumen de búsqueda superior a 100, dificultad de palabra clave inferior a 40, y palabras que contengan modificadores comerciales como \"comprar\", \"tienda\", \"barato\", \"opinión\" o \"mejor\". Lo que queda es tu lista real de oportunidades.",
          },
          {
            type: "checklist",
            items: [
              "Ejecuta Ahrefs Content Gap o SEMrush Keyword Gap con tus 3–4 principales competidores",
              "Filtra por volumen > 100 y KD < 40 para empezar con objetivos alcanzables",
              "Ordena por volumen de búsqueda descendente para priorizar las oportunidades perdidas más grandes",
              "Etiqueta cada palabra clave en brecha según el tipo de página necesaria: página de categoría, página de producto o artículo de blog",
              "Añade los 20 primeros a tu hoja de ruta de contenido para los próximos dos trimestres",
            ],
          },
        ],
      },
      {
        id: "content-gap",
        title: "Brecha de contenido: páginas que te faltan",
        blocks: [
          {
            type: "p",
            text: "Las brechas de palabras clave te dicen qué términos apuntar. Las brechas de contenido te dicen qué páginas o secciones enteras te faltan. Entra en Ahrefs o SEMrush y saca las páginas principales de un competidor por tráfico orgánico. Trabaja las primeras 30. Para cada página pregúntate: ¿tenemos algo equivalente? Si no, eso es una brecha de contenido.",
          },
          {
            type: "p",
            text: "Brechas de contenido habituales en tiendas e-commerce: páginas de subcategoría que ellos tienen y tú no (\"botas de senderismo impermeables para hombre\" vs tu página genérica \"botas de senderismo\"), contenido de comparación o \"lo mejor\" (\"mejores zapatillas de trail por menos de 100€\"), guías de tallas o especificaciones, y páginas de marca contra marca (\"Nike vs Adidas zapatillas running\"). Estas páginas generan un tráfico de cola larga enorme y suelen ser búsquedas de pura intención de compra.",
          },
          {
            type: "callout",
            title: "Las brechas de contenido son victorias más rápidas que el link building",
            text: "Crear una página de subcategoría que falta y para la que un competidor rankea bien no requiere outreach, ni presupuesto para enlaces, y a menudo rankea en 3–6 meses si tu dominio tiene algo de autoridad. Es una de las tácticas de SEO e-commerce más infravaloradas.",
          },
          {
            type: "tip",
            text: "Cuando revises las páginas principales de competidores, fíjate también en sus enlaces internos. ¿A qué enlazan desde páginas de alto tráfico? Eso te dice qué consideran sus páginas más importantes — y son exactamente las páginas que vale la pena estudiar en detalle.",
          },
        ],
      },
      {
        id: "backlink-gap",
        title: "Brecha de backlinks: oportunidades de enlaces que te faltan",
        blocks: [
          {
            type: "p",
            text: "Los backlinks siguen siendo uno de los factores de posicionamiento más fuertes para términos e-commerce competitivos. La brecha de backlinks es simplemente: ¿qué sitios de calidad enlazan a tus competidores pero no a ti? Esos sitios ya han demostrado que están dispuestos a enlazar a un negocio en tu sector — ese es el objetivo de outreach más cálido posible.",
          },
          {
            type: "p",
            text: "En Ahrefs, usa la herramienta \"Link Intersect\" (en \"Más\" de Site Explorer). Introduce tu dominio y 3–5 competidores. La herramienta muestra dominios de referencia que enlazan a competidores pero no a ti. Ordena por domain rating (DR) descendente. Concéntrate en sitios con DR 40+ — son los enlaces que realmente mueven rankings.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Link Intersect: mejor herramienta para encontrar sitios que enlazan a competidores pero no a ti",
              "SEMrush Backlink Gap: función equivalente, interfaz ligeramente diferente",
              "Prioriza dominios de referencia con DR 40+ — por debajo, el equity de enlace es marginal",
              "Agrupa objetivos por tipo: cobertura editorial, artículos de resumen, páginas de recursos, directorios sectoriales",
              "Para cada sitio objetivo, encuentra la página específica que enlaza a tu competidor y entiende por qué enlazaron",
            ],
          },
          {
            type: "callout",
            title: "Los enlaces sin razón no ocurren",
            text: "Antes de contactar a cualquier sitio que enlaza a un competidor, responde: ¿por qué te enlazarían a ti? Necesitas un activo específico — un estudio de datos, una herramienta, una guía exhaustiva o un producto que merezca ser destacado. Sin uno, tu outreach se ignorará.",
          },
        ],
      },
      {
        id: "serp-features",
        title: "Brechas en las funcionalidades SERP",
        blocks: [
          {
            type: "p",
            text: "Las páginas de resultados de búsqueda de Google han cambiado radicalmente. Más allá de los enlaces azules estándar, hay featured snippets, carruseles de imágenes, resultados de Shopping, cuadros de video, \"La gente también pregunta\" y packs locales. Cada uno es una oportunidad de posicionamiento — y para la mayoría de tiendas e-commerce, las funcionalidades SERP están en gran medida sin optimizar.",
          },
          {
            type: "p",
            text: "Comprueba qué funcionalidades SERP poseen tus competidores. Si un competidor tiene el featured snippet para \"cómo limpiar botas de senderismo\" y tú vendes botas de senderismo, ese snippet lleva tráfico cualificado a su contenido — y desde allí, potencialmente a sus productos. Los featured snippets suelen ir a páginas con respuestas claras y concisas estructuradas en listas o párrafos cortos. Reformatea tu contenido existente para competir por ellos.",
          },
          {
            type: "list",
            items: [
              "Featured snippets: reformatear el contenido de blog y guías relevantes con preguntas H2/H3 claras y respuestas concisas",
              "Resultados Shopping: asegurarse de que los feeds de productos están correctamente configurados en Google Merchant Center",
              "Carruseles de imágenes: optimizar el texto alternativo e identificadores de archivo de imágenes de productos para términos de búsqueda relevantes",
              "\"La gente también pregunta\": crear secciones FAQ en páginas de categoría para preguntas habituales en tu nicho",
              "Resultados de video: considerar producir demos cortas de productos o videos tutoriales para términos informativos con alto tráfico",
            ],
          },
        ],
      },
      {
        id: "turning-analysis-into-action",
        title: "Convertir el análisis en un plan de acción priorizado",
        blocks: [
          {
            type: "p",
            text: "El análisis de la competencia es fácil de ahogarse en él. Puedes pasar semanas extrayendo datos y acabar con una hoja de cálculo de 500 filas en la que nadie actúa. La disciplina está en decidir qué no perseguir. Cada hallazgo que encuentres debe puntuarse por potencial de tráfico y dificultad, y luego colocarse en una cola.",
          },
          {
            type: "p",
            text: "La regla práctica: elige tus 3 mejores brechas de contenido y tus 3 mejores oportunidades de enlaces y trabaja exclusivamente en ellas durante 60 días antes de reevaluar. Ese enfoque produce resultados que una exploración amplia y desordenada de datos de competidores no produce. Tres piezas de contenido bien ejecutadas y tres enlaces de calidad superan a veinte intentos mediocres siempre.",
          },
          {
            type: "checklist",
            items: [
              "Puntúa cada hallazgo de brecha: potencial de tráfico (1–3) × intención comercial (1–3) ÷ esfuerzo estimado (1–3)",
              "Elige las 3 mejores brechas de contenido — crea esas páginas primero",
              "Elige los 3 mejores objetivos de enlaces — construye un activo de outreach específico para cada uno",
              "Programa una actualización completa del análisis de competidores cada 90 días",
              "Sigue tus cambios de posición en las palabras clave objetivo mensualmente en Google Search Console",
            ],
          },
          {
            type: "tip",
            text: "Configura el seguimiento de posiciones en Ahrefs o SEMrush para las 20 palabras clave principales que identificaste en tu análisis de brechas. Observar cómo evolucionan (o no) esos rankings durante 3–6 meses es el único ciclo de retroalimentación honesto sobre si tu estrategia está funcionando.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/keyword-research",
        category: "Investigación e Ideación",
        title: "Investigación de palabras clave",
      },
      next: {
        href: "/guides/technical-analysis",
        category: "Investigación e Ideación",
        title: "Análisis técnico",
      },
    },
  },

  it: {
    badge: "Ricerca & Ideazione",
    heading: "Analisi della concorrenza per il SEO e-commerce",
    intro:
      "I tuoi concorrenti SEO non sono gli stessi dei tuoi concorrenti commerciali. Capire questa differenza — e saper smontare sistematicamente ciò che funziona per chi rankea sopra di te — è una delle attività a maggior impatto nel SEO e-commerce.",
    readTime: "15 min di lettura",
    sections: [
      {
        id: "seo-vs-business-competitors",
        title: "Concorrenti SEO vs. concorrenti commerciali",
        blocks: [
          {
            type: "p",
            text: "I tuoi concorrenti commerciali sono i brand a cui perdi vendite. I tuoi concorrenti SEO sono chiunque ranki per le tue keyword — e spesso si tratta di liste completamente diverse. Un editore media che pubblica una rassegna \"migliori [tuo prodotto]\" è un concorrente SEO anche se non vende nulla. Un sito di affiliazione che occupa tre posizioni in prima pagina per i termini della tua categoria è un concorrente SEO. Devi batterli su Google prima di preoccuparti di batterli nelle entrate.",
          },
          {
            type: "p",
            text: "Questa distinzione è importante per come affronti il lavoro. Quando analizzi un concorrente commerciale, guardi prezzi, gamma di prodotti e brand. Quando analizzi un concorrente SEO, guardi il suo profilo di backlink, la struttura dei contenuti e le keyword specifiche che guidano il suo traffico organico. Le domande sono totalmente diverse.",
          },
          {
            type: "callout",
            title: "Verifica rapida dei concorrenti SEO",
            text: "Cerca le tue cinque keyword di categoria prodotto più importanti. Annota chi appare nelle posizioni 1–5 per ciascuna. Se gli stessi tre o quattro domini compaiono costantemente, quelli sono i tuoi veri concorrenti SEO — indipendentemente dal fatto che tu li abbia mai considerati come concorrenza.",
          },
        ],
      },
      {
        id: "finding-seo-competitors",
        title: "Trovare i concorrenti SEO in modo sistematico",
        blocks: [
          {
            type: "p",
            text: "Le verifiche manuali delle SERP funzionano per una lista iniziale, ma non scalano. Per una visione completa, usa il report \"Competing Domains\" di Ahrefs (in Site Explorer) o \"Organic Competitors\" di SEMrush. Inserisci il tuo dominio e entrambi gli strumenti ti mostrano quali altri siti rankano per le stesse keyword tue, ordinati per grado di sovrapposizione.",
          },
          {
            type: "p",
            text: "Cosa cerchi: domini con alta sovrapposizione di keyword e traffico organico significativamente superiore al tuo. Questi sono i siti le cui strategie vale la pena fare reverse engineering. Un dominio che ranka per l'80% delle tue keyword ma che genera 3× il tuo traffico sta facendo qualcosa di diverso su contenuti, link o entrambi.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Site Explorer → Competing Domains: mostra la sovrapposizione per numero di keyword condivise",
              "SEMrush Organic Research → Competitors: vista simile con distribuzione delle posizioni",
              "Verifiche manuali delle SERP per le tue 10 keyword più importanti: veloce, gratuito, ti dice chi c'è oggi",
              "Guardare oltre i concorrenti retailer diretti — editori, siti di affiliazione e marketplace spesso dominano i termini di categoria",
            ],
          },
          {
            type: "tip",
            text: "Non limitare la ricerca di concorrenti a 2–3 attori. Crea una lista di 8–10 e raggruppali: concorrenti retailer diretti, siti media/editoriali, aggregatori di affiliazione. Avrai bisogno di strategie diverse per superare ogni tipo.",
          },
        ],
      },
      {
        id: "keyword-gap",
        title: "Analisi del keyword gap",
        blocks: [
          {
            type: "p",
            text: "Un'analisi del keyword gap risponde a una domanda: per quali keyword rankano i tuoi concorrenti e tu no? In Ahrefs, è lo strumento \"Content Gap\" sotto Site Explorer — inserisci il tuo dominio più 2–4 concorrenti e mostra le keyword per cui loro rankano e tu no. In SEMrush è lo strumento \"Keyword Gap\". Eseguilo almeno ogni trimestre.",
          },
          {
            type: "p",
            text: "Filtra l'output in modo aggressivo. Non ti interessano tutte le keyword per cui ranka un concorrente — solo quelle con intento d'acquisto e potenziale di traffico realistico. Filtra per volume di ricerca superiore a 100, difficoltà della keyword inferiore a 40, e parole contenenti modificatori commerciali come \"comprare\", \"shop\", \"economico\", \"recensione\" o \"migliore\". Ciò che rimane è la tua vera lista di opportunità.",
          },
          {
            type: "checklist",
            items: [
              "Esegui Ahrefs Content Gap o SEMrush Keyword Gap con i tuoi 3–4 principali concorrenti",
              "Filtra per volume > 100 e KD < 40 per iniziare con obiettivi raggiungibili",
              "Ordina per volume di ricerca decrescente per priorizzare le opportunità mancate più grandi",
              "Etichetta ogni keyword di gap per tipo di pagina necessaria: pagina di categoria, pagina prodotto o articolo del blog",
              "Aggiungi le prime 20 alla tua roadmap dei contenuti per i prossimi due trimestri",
            ],
          },
        ],
      },
      {
        id: "content-gap",
        title: "Content gap: le pagine che mancano",
        blocks: [
          {
            type: "p",
            text: "I gap di keyword ti dicono quali termini targetizzare. I gap di contenuto ti dicono quali pagine intere o sezioni ti mancano. Entra in Ahrefs o SEMrush e estrai le pagine principali di un concorrente per traffico organico. Analizza le prime 30. Per ogni pagina chiedi: abbiamo qualcosa di equivalente? Se no, è un gap di contenuto.",
          },
          {
            type: "p",
            text: "Gap di contenuto comuni per gli store e-commerce: pagine di sottocategoria che loro hanno e tu no (\"stivali da trekking impermeabili uomo\" vs la tua pagina generica \"stivali da trekking\"), contenuti comparativi o \"i migliori\" (\"migliori scarpe da trail sotto 100€\"), guide alle taglie o alle specifiche, e pagine brand-contro-brand (\"Nike vs Adidas scarpe da running\"). Queste pagine generano un enorme traffico a coda lunga e sono spesso ricerche di pura intenzione d'acquisto.",
          },
          {
            type: "callout",
            title: "I gap di contenuto sono vittorie più rapide del link building",
            text: "Creare una pagina di sottocategoria mancante per cui un concorrente ranka bene non richiede outreach, nessun budget per i link, e spesso ranka entro 3–6 mesi se il tuo dominio ha un minimo di autorità. È una delle tattiche SEO e-commerce più sottovalutate.",
          },
          {
            type: "tip",
            text: "Quando esamini le pagine principali dei concorrenti, guarda anche i loro link interni. A cosa linkano dalle pagine ad alto traffico? Questo ti dice cosa considerano le loro pagine di maggior valore — e sono esattamente le pagine che vale la pena studiare attentamente.",
          },
        ],
      },
      {
        id: "backlink-gap",
        title: "Backlink gap: opportunità di link mancate",
        blocks: [
          {
            type: "p",
            text: "I backlink rimangono uno dei fattori di ranking più forti per i termini e-commerce competitivi. Il backlink gap è semplicemente: quali siti di qualità linkano ai tuoi concorrenti ma non a te? Quei siti hanno già dimostrato di essere disposti a linkare a un'azienda nel tuo settore — questo è l'obiettivo di outreach più caldo possibile.",
          },
          {
            type: "p",
            text: "In Ahrefs, usa lo strumento \"Link Intersect\" (sotto \"Altro\" in Site Explorer). Inserisci il tuo dominio e 3–5 concorrenti. Lo strumento mostra i domini di riferimento che linkano ai concorrenti ma non a te. Ordina per domain rating (DR) decrescente. Concentrati sui siti con DR 40+ — sono i link che effettivamente spostano i ranking.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Link Intersect: miglior strumento per trovare siti che linkano ai concorrenti ma non a te",
              "SEMrush Backlink Gap: funzionalità equivalente, interfaccia leggermente diversa",
              "Priorizza i domini di riferimento con DR 40+ — al di sotto, l'equity del link è marginale",
              "Raggruppa gli obiettivi per tipo: copertura editoriale, articoli di rassegna, pagine di risorse, directory di settore",
              "Per ogni sito obiettivo, trova la pagina specifica che linka al tuo concorrente e capisce perché hanno linkato",
            ],
          },
          {
            type: "callout",
            title: "I link senza una ragione non avvengono",
            text: "Prima di contattare qualsiasi sito che linka a un concorrente, rispondi: perché dovrebbero linkarti? Hai bisogno di un asset specifico — uno studio dati, uno strumento, una guida esaustiva o un prodotto degno di essere menzionato. Senza uno di questi, il tuo outreach verrà ignorato.",
          },
        ],
      },
      {
        id: "serp-features",
        title: "Gap nelle funzionalità SERP",
        blocks: [
          {
            type: "p",
            text: "Le pagine dei risultati di ricerca di Google sono cambiate radicalmente. Oltre ai classici link blu, ci sono featured snippet, caroselli di immagini, risultati Shopping, riquadri video, \"Le persone chiedono anche\" e pack locali. Ognuno è un'opportunità di ranking — e per la maggior parte degli store e-commerce, le funzionalità SERP sono in larga parte non ottimizzate.",
          },
          {
            type: "p",
            text: "Controlla quali funzionalità SERP possiedono i tuoi concorrenti. Se un concorrente possiede il featured snippet per \"come pulire gli stivali da trekking\" e tu vendi stivali da trekking, quello snippet porta traffico qualificato verso i suoi contenuti — e da lì, potenzialmente verso i suoi prodotti. I featured snippet di solito vanno alle pagine con risposte chiare e concise strutturate in liste o paragrafi brevi. Riformatta il tuo contenuto esistente per competere per questi.",
          },
          {
            type: "list",
            items: [
              "Featured snippet: riformattare il contenuto di blog e guide rilevanti con domande H2/H3 chiare e risposte concise",
              "Risultati Shopping: assicurarsi che i feed prodotto siano configurati correttamente in Google Merchant Center",
              "Caroselli di immagini: ottimizzare il testo alternativo e i nomi dei file delle immagini prodotto per i termini di ricerca pertinenti",
              "\"Le persone chiedono anche\": creare sezioni FAQ nelle pagine di categoria per le domande comuni della tua nicchia",
              "Risultati video: considerare la produzione di brevi demo di prodotti o video tutorial per i termini informativi ad alto traffico",
            ],
          },
        ],
      },
      {
        id: "turning-analysis-into-action",
        title: "Trasformare l'analisi in un piano d'azione prioritizzato",
        blocks: [
          {
            type: "p",
            text: "L'analisi della concorrenza è facile da cui annegare. Puoi passare settimane a estrarre dati e finire con un foglio di calcolo di 500 righe su cui nessuno agisce. La disciplina sta nel decidere cosa non perseguire. Ogni scoperta che emergono dovrebbe essere valutata per potenziale di traffico e difficoltà, poi messa in una coda.",
          },
          {
            type: "p",
            text: "La regola pratica: scegli i tuoi 3 migliori gap di contenuto e le 3 migliori opportunità di link e lavora esclusivamente su quelli per 60 giorni prima di rivalutare. Quella focalizzazione produce risultati che un'esplorazione ampia e disorganizzata dei dati dei concorrenti non produce. Tre pezzi di contenuto ben eseguiti e tre link di qualità superano venti tentativi mediocri ogni volta.",
          },
          {
            type: "checklist",
            items: [
              "Dai un punteggio a ogni scoperta di gap: potenziale di traffico (1–3) × intento commerciale (1–3) ÷ sforzo stimato (1–3)",
              "Scegli i 3 migliori gap di contenuto — crea quelle pagine per prima cosa",
              "Scegli i 3 migliori obiettivi di link — costruisci un asset di outreach specifico per ciascuno",
              "Pianifica un aggiornamento completo dell'analisi della concorrenza ogni 90 giorni",
              "Monitora le tue variazioni di posizione sulle keyword obiettivo mensilmente in Google Search Console",
            ],
          },
          {
            type: "tip",
            text: "Configura il tracking delle posizioni in Ahrefs o SEMrush per le 20 keyword principali identificate nella tua analisi del gap. Osservare come quei ranking evolvono (o no) in 3–6 mesi è l'unico loop di feedback onesto su se la tua strategia sta funzionando.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/keyword-research",
        category: "Ricerca & Ideazione",
        title: "Ricerca di parole chiave",
      },
      next: {
        href: "/guides/technical-analysis",
        category: "Ricerca & Ideazione",
        title: "Analisi tecnica",
      },
    },
  },

  nl: {
    badge: "Onderzoek & Ideeënvorming",
    heading: "Concurrentieanalyse voor e-commerce SEO",
    intro:
      "Je SEO-concurrenten zijn niet dezelfde als je zakelijke concurrenten. Dat verschil begrijpen — en weten hoe je systematisch kunt ontrafelen wat werkt voor degenen die boven jou ranken — is een van de meest impactvolle activiteiten in e-commerce SEO.",
    readTime: "15 min leestijd",
    sections: [
      {
        id: "seo-vs-business-competitors",
        title: "SEO-concurrenten vs. zakelijke concurrenten",
        blocks: [
          {
            type: "p",
            text: "Je zakelijke concurrenten zijn de merken waar je verkopen aan verliest. Je SEO-concurrenten zijn iedereen die rankt voor jouw zoekwoorden — en dat zijn vaak compleet verschillende lijsten. Een mediapublisher die een \"beste [jouw product]\"-overzicht publiceert is een SEO-concurrent, ook al verkoopt die niets. Een affiliatesite die drie posities op de eerste pagina inneemt voor jouw categorietermen is een SEO-concurrent. Je moet hen verslaan op Google voordat je je zorgen maakt over het verslaan van hen in omzet.",
          },
          {
            type: "p",
            text: "Dit onderscheid is belangrijk voor hoe je het werk aanpakt. Wanneer je een zakelijke concurrent analyseert, kijk je naar prijzen, productaanbod en merk. Wanneer je een SEO-concurrent analyseert, kijk je naar hun backlinkprofiel, inhoudsstructuur en de specifieke zoekwoorden die hun organisch verkeer aandrijven. De vragen zijn totaal anders.",
          },
          {
            type: "callout",
            title: "Snelle SEO-concurrentencheck",
            text: "Zoek op je vijf belangrijkste productcategorie-zoekwoorden. Noteer wie voor elk op posities 1–5 verschijnt. Als dezelfde drie tot vier domeinen consistent opduiken, zijn dat je echte SEO-concurrenten — ongeacht of je hen ooit als concurrentie hebt beschouwd.",
          },
        ],
      },
      {
        id: "finding-seo-competitors",
        title: "SEO-concurrenten systematisch vinden",
        blocks: [
          {
            type: "p",
            text: "Handmatige SERP-controles werken voor een startlijst, maar schalen niet. Voor een volledig beeld gebruik je het Ahrefs \"Competing Domains\"-rapport (onder Site Explorer) of SEMrush \"Organic Competitors\". Vul je domein in en beide tools laten zien welke andere sites ranken voor dezelfde zoekwoorden als jij, gesorteerd op de mate van overlap.",
          },
          {
            type: "p",
            text: "Wat je zoekt: domeinen met hoge zoekwoordoverlap en organisch verkeer dat significant boven dat van jou ligt. Dat zijn de sites waarvan het de moeite waard is om de strategie te reverse-engineeren. Een domein dat rankt voor 80% van jouw zoekwoorden maar 3× jouw verkeer binnenhaalt, doet iets anders op content, links of beide.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Site Explorer → Competing Domains: toont overlap op aantal gedeelde zoekwoorden",
              "SEMrush Organic Research → Competitors: vergelijkbare weergave met positieverdeling",
              "Handmatige SERP-controles voor je 10 belangrijkste zoekwoorden: snel, gratis, laat zien wie er vandaag staat",
              "Verder kijken dan directe retail concurrenten — publishers, affiliatesites en marketplaces domineren vaak categorietermen",
            ],
          },
          {
            type: "tip",
            text: "Beperk concurrentenonderzoek niet tot 2–3 spelers. Maak een lijst van 8–10 en groepeer ze: directe retailconcurrenten, media/redactionele sites, affiliate-aggregators. Voor elk type heb je een andere strategie nodig.",
          },
        ],
      },
      {
        id: "keyword-gap",
        title: "Zoekwoordkloof-analyse",
        blocks: [
          {
            type: "p",
            text: "Een zoekwoordkloof-analyse beantwoordt één vraag: voor welke zoekwoorden ranken je concurrenten maar jij niet? In Ahrefs is dit de \"Content Gap\"-tool onder Site Explorer — vul je domein in plus 2–4 concurrenten en het toont zoekwoorden waarvoor zij ranken en jij niet. In SEMrush is het de \"Keyword Gap\"-tool. Voer dit minimaal elk kwartaal uit.",
          },
          {
            type: "p",
            text: "Filter de uitvoer agressief. Je bent niet geïnteresseerd in elk zoekwoord waarvoor een concurrent rankt — alleen die met koopintentie en realistisch verkeerspotentieel. Filter op zoekvolume boven 100, zoekwoordmoeilijkheid onder 40, en woorden met commerciële modifiers zoals \"kopen\", \"bestellen\", \"goedkoop\", \"review\" of \"beste\". Wat overblijft is je echte kanslijst.",
          },
          {
            type: "checklist",
            items: [
              "Voer Ahrefs Content Gap of SEMrush Keyword Gap uit met je top 3–4 concurrenten",
              "Filter op volume > 100 en KD < 40 om te starten met haalbare doelen",
              "Sorteer op zoekvolume aflopend om de grootste gemiste kansen eerst te prioriteren",
              "Label elk kloof-zoekwoord naar benodigde paginatype: categoriepagina, productpagina of blogartikel",
              "Voeg de top 20 toe aan je contentroadmap voor de komende twee kwartalen",
            ],
          },
        ],
      },
      {
        id: "content-gap",
        title: "Contentkloof: ontbrekende pagina's",
        blocks: [
          {
            type: "p",
            text: "Zoekwoordkloven vertellen je welke termen je moet targeten. Contentkloven vertellen je welke hele pagina's of secties je mist. Ga in Ahrefs of SEMrush naar de toppagina's van een concurrent op organisch verkeer. Werk hun top 30 door. Vraag je voor elke pagina af: hebben wij iets vergelijkbaars? Zo niet, dat is een contentkloof.",
          },
          {
            type: "p",
            text: "Veelvoorkomende contentkloven voor e-commerce stores: subcategoriepagina's die zij hebben maar jij niet (\"waterdichte wandelschoenen voor heren\" vs jouw algemene \"wandelschoenen\"-pagina), vergelijkende of \"beste van\"-content (\"beste trailschoenen onder €100\"), maat- of specificatiegidsen, en merk-versus-merk-pagina's (\"Nike vs Adidas hardloopschoenen\"). Deze pagina's genereren enorm longtailverkeer en zijn vaak pure koopintentiezoekopdrachten.",
          },
          {
            type: "callout",
            title: "Contentkloven zijn snellere winsten dan linkbuilding",
            text: "Een ontbrekende subcategoriepagina maken waarvoor een concurrent goed rankt, vereist geen outreach, geen budget voor links, en rankt vaak binnen 3–6 maanden als je domein enige autoriteit heeft. Het is een van de meest onderschatte e-commerce SEO-tactieken.",
          },
          {
            type: "tip",
            text: "Kijk bij het bekijken van toppagina's van concurrenten ook naar hun interne linking. Waar linken zij naar toe vanuit pagina's met veel verkeer? Dat vertelt je wat zij als hun belangrijkste pagina's beschouwen — en dat zijn precies de pagina's die de moeite waard zijn om grondig te bestuderen.",
          },
        ],
      },
      {
        id: "backlink-gap",
        title: "Backlinkkloof: gemiste linkkansen",
        blocks: [
          {
            type: "p",
            text: "Backlinks zijn nog steeds een van de sterkste rankingfactoren voor competitieve e-commerce termen. De backlinkkloof is simpelweg: welke kwalitatieve sites linken naar je concurrenten maar niet naar jou? Die sites hebben al aangetoond bereid te zijn om te linken naar een bedrijf in jouw sector — dat is het warmste mogelijke outreach-doelwit.",
          },
          {
            type: "p",
            text: "Gebruik in Ahrefs de \"Link Intersect\"-tool (onder \"Meer\" in Site Explorer). Vul je domein en 3–5 concurrenten in. De tool toont verwijzende domeinen die naar concurrenten linken maar niet naar jou. Sorteer op domain rating (DR) aflopend. Concentreer je op DR 40+-sites — dit zijn de links die rankings daadwerkelijk bewegen.",
          },
          {
            type: "list",
            items: [
              "Ahrefs Link Intersect: beste tool om sites te vinden die naar concurrenten linken maar niet naar jou",
              "SEMrush Backlink Gap: vergelijkbare functie, licht andere interface",
              "Prioriteer verwijzende domeinen met DR 40+ — daaronder is de link-equity marginaal",
              "Groepeer doelen per type: redactionele coverage, overzichtsartikelen, resourcepagina's, branchedirectories",
              "Zoek voor elke doelsite de specifieke pagina die naar je concurrent linkt en begrijp waarom ze linkten",
            ],
          },
          {
            type: "callout",
            title: "Links zonder reden gebeuren niet",
            text: "Beantwoord vóór het benaderen van een site die naar een concurrent linkt: waarom zouden zij naar jou linken? Je hebt een specifiek asset nodig — een datastudie, een tool, een uitgebreide gids of een product dat het waard is om te vermelden. Zonder dat wordt je outreach genegeerd.",
          },
        ],
      },
      {
        id: "serp-features",
        title: "SERP-functie kloven",
        blocks: [
          {
            type: "p",
            text: "Google's zoekresultatenpagina's zijn dramatisch veranderd. Naast de standaard blauwe links zijn er featured snippets, afbeeldingscarrousels, Shopping-resultaten, videovakken, \"Anderen zochten ook\" en lokale packs. Elk is een rankingkans — en voor de meeste e-commerce stores zijn SERP-functies grotendeels ongeoptimaliseerd.",
          },
          {
            type: "p",
            text: "Controleer welke SERP-functies je concurrenten bezitten. Als een concurrent de featured snippet bezit voor \"hoe reinig ik wandelschoenen\" en jij verkoopt wandelschoenen, stuurt die snippet warm verkeer naar hun content — en vandaar mogelijk naar hun producten. Featured snippets gaan meestal naar pagina's met duidelijke, beknopte antwoorden gestructureerd in lijsten of korte alinea's. Herformatteer je bestaande content om hiervoor te concurreren.",
          },
          {
            type: "list",
            items: [
              "Featured snippets: relevante blog- en gidscontent herformatteren met duidelijke H2/H3-vragen en beknopte antwoorden",
              "Shopping-resultaten: ervoor zorgen dat productfeeds correct zijn ingesteld in Google Merchant Center",
              "Afbeeldingscarrousels: alt-tekst en bestandsnamen van productafbeeldingen optimaliseren voor relevante zoektermen",
              "\"Anderen zochten ook\": FAQ-secties op categoriepagina's maken voor veelgestelde vragen in je niche",
              "Videoresultaten: overwegen om korte productdemo's of how-to-video's te maken voor informatieve termen met veel verkeer",
            ],
          },
        ],
      },
      {
        id: "turning-analysis-into-action",
        title: "Analyse omzetten in een geprioriteerd actieplan",
        blocks: [
          {
            type: "p",
            text: "Concurrentieanalyse is gemakkelijk in te verdrinken. Je kunt weken besteden aan het ophalen van data en eindigen met een spreadsheet van 500 rijen waar niemand op handelt. De discipline zit in beslissen wat je niet najaagt. Elke bevinding die je opduikt, moet worden gescoord op verkeerspotentieel en moeilijkheid, en dan in een wachtrij worden gezet.",
          },
          {
            type: "p",
            text: "De praktische regel: kies je top 3 contentkloven en top 3 linkkansen en werk daar 60 dagen exclusief aan voordat je herevalueert. Die focus levert resultaten die een brede, ongerichte doorloop van concurrentiedata niet levert. Drie goed uitgevoerde contentpagina's en drie kwaliteitslinks presteren elke keer beter dan twintig middelmatige pogingen.",
          },
          {
            type: "checklist",
            items: [
              "Score elke kloof-bevinding: verkeerspotentieel (1–3) × commerciële intentie (1–3) ÷ geschatte inspanning (1–3)",
              "Kies de top 3 contentkloven — maak die pagina's eerst",
              "Kies de top 3 linkdoelen — bouw voor elk een specifiek outreach-asset",
              "Plan elke 90 dagen een volledige vernieuwing van de concurrentieanalyse",
              "Volg je positieveranderingen op de doelzoekwoorden maandelijks in Google Search Console",
            ],
          },
          {
            type: "tip",
            text: "Stel positietracking in Ahrefs of SEMrush in voor de 20 beste zoekwoorden die je in je kloof-analyse hebt geïdentificeerd. Observeren hoe die rankings over 3–6 maanden evolueren (of niet) is de enige eerlijke feedbackloop over of je strategie werkt.",
          },
        ],
      },
    ],
    nav: {
      prev: {
        href: "/guides/keyword-research",
        category: "Onderzoek & Ideeënvorming",
        title: "Zoekwoordenonderzoek",
      },
      next: {
        href: "/guides/technical-analysis",
        category: "Onderzoek & Ideeënvorming",
        title: "Technische analyse",
      },
    },
  },
};
