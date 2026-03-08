import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guidesLinkBuildingTacticsT: Record<
  Locale,
  { sections: GuideSection[]; nav: GuideNav }
> = {
  en: {
    nav: {
      prev: { href: "/guides/task-planning", category: "Research & Ideation", title: "Task Planning" },
      next: { href: "/guides/topical-authority", category: "Advanced Ecommerce SEO", title: "Getting Topical Authority" },
    },
    sections: [
      {
        id: "why-links-still-matter",
        title: "Why Links Still Matter for Ecommerce",
        blocks: [
          {
            type: "p",
            text: "Google has said publicly, repeatedly, that links are one of the top three ranking factors. For ecommerce specifically, where you're chasing transactional queries like 'buy running shoes' or 'best standing desk', you're competing against sites that have been building authority for years. On-page optimisation is the entry fee. Links are what actually separate page one from page two.",
          },
          {
            type: "p",
            text: "Ranking factor studies from Ahrefs, Semrush, and Backlinko consistently show that Domain Rating (DR) and the number of unique referring domains correlate more strongly with rankings than almost any on-page variable. That doesn't mean on-page doesn't matter (it does), but for competitive ecommerce terms, you will not outrank a DR 70 site with a DR 20 site just by writing better product descriptions.",
          },
          {
            type: "callout",
            title: "The authority gap is real",
            text: "If the top 3 results for your target keyword have DR 55, 62, and 70, and your site is at DR 28, links are your bottleneck. Fix them before you do anything else. Use Ahrefs or Semrush to check this in under two minutes.",
          },
        ],
      },
      {
        id: "digital-pr-for-products",
        title: "Digital PR: Getting Into 'Best Of' Roundups",
        blocks: [
          {
            type: "p",
            text: "Journalists at publications like Wirecutter, The Strategist, Good Housekeeping, and vertical trade magazines write 'best [product category]' roundups constantly. A single dofollow link from Wirecutter can push your DR by 3-5 points and send referral traffic that converts. These links are not easy to get, but they are achievable with the right approach.",
          },
          {
            type: "p",
            text: "Start by finding who has already covered your product category. In Ahrefs Content Explorer, search for 'best [your product category]' and filter by domain rating (DR 40+) and published in the last 12 months. Export the list. Find the author names on each article, then find their email or Twitter/X handle. Now you have a targeted press list.",
          },
          {
            type: "tip",
            text: "Your pitch email should be three sentences maximum. Lead with what makes your product objectively different: a specific test result, a certifiable claim, a price point. Do not send a generic press release. Journalists delete those. Send a specific, human note that respects their time.",
          },
          {
            type: "p",
            text: "Send product samples whenever possible. A journalist who has physically tested your product is ten times more likely to include it than one who only read your spec sheet. Budget product samples as a marketing expense - it is one of the highest-ROI line items in link building.",
          },
        ],
      },
      {
        id: "guest-posting",
        title: "Guest Posting Done Right",
        blocks: [
          {
            type: "p",
            text: "Guest posting has a bad reputation because most people do it badly. They pitch generic content to any site that accepts guest posts, regardless of relevance, and the links they get are low-quality. Done properly, pitching genuinely useful content to relevant, high-authority publications, guest posting still works and produces links that move rankings.",
          },
          {
            type: "p",
            text: "If you sell running shoes, your target publications are running blogs (Runner's World, iRunFar, Believe in the Run), podiatry sites, sports medicine blogs, and fitness magazines. Pitch an article that is actually useful to their readers: '5 Signs Your Running Shoes Are Causing Your Knee Pain' is more likely to get accepted than '5 Reasons Our Running Shoes Are Great'.",
          },
          {
            type: "callout",
            title: "Vetting your targets",
            text: "Before you pitch, check the site's DR in Ahrefs (aim for DR 35+), check that their content gets organic traffic (use Ahrefs Site Explorer; if they have zero organic traffic, Google may already be ignoring them), and check that they have published guest posts before. A publication that never runs guest content will not start for you.",
          },
          {
            type: "list",
            items: [
              "Find target publications using Ahrefs Content Explorer filtered by DR and traffic",
              "Read 3-4 recent articles on the site before pitching - match their tone and depth",
              "Pitch a specific article title and a 2-sentence summary, not a full draft",
              "Include a link to one writing sample that proves you can actually write",
              "Negotiate a contextual link in the body, not just an author bio link",
              "Follow up once, after 10 days, then move on if there's no response",
            ],
          },
        ],
      },
      {
        id: "supplier-and-partner-links",
        title: "Supplier and Partner Links: The Underused Tactic",
        blocks: [
          {
            type: "p",
            text: "If you stock other brands' products, those brands often have a 'Where to Buy' or 'Authorised Retailers' page on their site. These are highly relevant links, same industry, often high DR, and most ecommerce stores never pursue them. Send a short email to each brand's marketing or partnership team and ask to be listed. The conversion rate on these requests is surprisingly high because you're already a customer.",
          },
          {
            type: "p",
            text: "The same logic applies to any formal partner relationship: payment processors that feature merchant case studies, fulfilment partners with customer spotlights, software vendors with integration directories. Every tool or service you use as a business is a potential link opportunity if they have any kind of partner or customer page.",
          },
          {
            type: "tip",
            text: "Check your existing suppliers' sites right now. Search their domain in Ahrefs Site Explorer and look for pages with 'retailer', 'stockist', 'where to buy', or 'authorized dealer' in the URL. If they have the page and you're not on it, that's a link you should have. Email them today.",
          },
        ],
      },
      {
        id: "resource-and-broken-link-building",
        title: "Resource Pages and Broken Link Building",
        blocks: [
          {
            type: "p",
            text: "Resource pages are curated lists of links that someone in your niche maintains for their audience - 'Best Resources for Home Bakers', 'Recommended Gear for Cyclists', and so on. They exist in almost every niche and they actively want to link to quality sites. Find them using Google searches: intitle:\"resources\" \"your niche\", or intitle:\"useful links\" \"your niche\". Filter by checking DR in Ahrefs and only pitch sites with DR 30 or above.",
          },
          {
            type: "p",
            text: "Broken link building is more time-intensive but produces high-quality links. The method: use Ahrefs to pull the broken outbound links from competitor sites or high-authority sites in your niche. When you find a broken link pointing to content similar to something you have (or could create), email the webmaster, tell them the link is broken, and offer your page as a replacement. Response rates are higher than cold outreach because you're solving a real problem for them.",
          },
          {
            type: "checklist",
            items: [
              "Run intitle:\"resources\" searches for your niche in Google",
              "Check each result's DR in Ahrefs - skip anything under DR 30",
              "Confirm they accept external links and that your site fits their list",
              "Pull competitor domains into Ahrefs and run the Broken Outlinks report",
              "For each broken link, check if you have matching or superior content",
              "Write a short, specific email: identify the broken link, explain your replacement",
              "Track all outreach in a spreadsheet with status and follow-up dates",
            ],
          },
          {
            type: "callout",
            title: "What actually doesn't work",
            text: "Buying links in bulk from link farms, comment spam, submissions to generic directories like DMOZ clones: these either do nothing or earn you a Google manual penalty. The Penguin algorithm update in 2012 was specifically designed to devalue link schemes. Fourteen years later, it is still doing its job. Build links that a human editor would choose to add.",
          },
        ],
      },
      {
        id: "building-a-link-building-system",
        title: "Turning Link Building Into a Repeatable Process",
        blocks: [
          {
            type: "p",
            text: "Link building that happens once is better than nothing. Link building that happens every month compounds into a serious competitive advantage. The stores that dominate competitive categories have usually been building links consistently for 2-3 years, not just sprinting for 6 months.",
          },
          {
            type: "p",
            text: "Set a monthly target of 5-10 new referring domains, which is achievable for most ecommerce businesses without a full-time link builder. Assign ownership: one person tracks outreach, follows up, and reports results. Use a simple spreadsheet or a tool like Pitchbox or Hunter to manage it. Review your DR monthly in Ahrefs and track ranking positions for your target keywords. The feedback loop tells you whether your efforts are working.",
          },
          {
            type: "list",
            items: [
              "Set a monthly goal: 5-10 new referring domains minimum",
              "Run one Digital PR campaign per quarter around a new product or original data",
              "Maintain a live prospect list in a spreadsheet - always have 20+ targets ready",
              "Check Ahrefs monthly: DR trend, referring domains count, new vs lost links",
              "Kill tactics that aren't converting after 3 months and double down on what works",
            ],
          },
          {
            type: "tip",
            text: "Your best link bait for ecommerce is original data. Run a survey, publish an industry report, or compile publicly available data into something useful and shareable. Original research earns passive links from journalists and bloggers, often without any outreach at all.",
          },
        ],
      },
    ],
  },

  de: {
    nav: {
      prev: { href: "/guides/task-planning", category: "Recherche & Ideenfindung", title: "Aufgabenplanung" },
      next: { href: "/guides/topical-authority", category: "Fortgeschrittenes E-Commerce-SEO", title: "Thematische Autorität aufbauen" },
    },
    sections: [
      {
        id: "why-links-still-matter",
        title: "Warum Links für E-Commerce noch immer entscheidend sind",
        blocks: [
          {
            type: "p",
            text: "Google hat öffentlich und wiederholt bestätigt, dass Links zu den drei wichtigsten Rankingfaktoren gehören. Im E-Commerce, wo transaktionale Suchanfragen wie 'Laufschuhe kaufen' oder 'bester Stehschreibtisch' im Mittelpunkt stehen, konkurriert man mit Seiten, die seit Jahren Autorität aufbauen. Onpage-Optimierung ist die Grundvoraussetzung. Links sind es, was Seite eins von Seite zwei trennt.",
          },
          {
            type: "p",
            text: "Rankingfaktor-Studien von Ahrefs, Semrush und Backlinko zeigen durchgängig, dass Domain Rating (DR) und die Anzahl einzigartiger verweisender Domains stärker mit Rankings korrelieren als fast jede andere Onpage-Variable. Das bedeutet nicht, dass Onpage unwichtig ist - aber für wettbewerbsintensive E-Commerce-Begriffe wirst du eine DR-20-Seite nicht allein durch bessere Produktbeschreibungen gegen eine DR-70-Seite ranken lassen.",
          },
          {
            type: "callout",
            title: "Das Autoritätsgefälle ist real",
            text: "Wenn die Top-3-Ergebnisse für dein Zielkeyword DR 55, 62 und 70 haben und deine Seite bei DR 28 liegt, sind Links dein Flaschenhals. Löse dieses Problem zuerst. Prüfe dies mit Ahrefs oder Semrush in unter zwei Minuten.",
          },
        ],
      },
      {
        id: "digital-pr-for-products",
        title: "Digital-PR: In 'Die Besten'-Roundups kommen",
        blocks: [
          {
            type: "p",
            text: "Journalisten bei Publikationen wie Wirecutter, Stiftung Warentest, CHIP und vertikalen Fachmagazinen schreiben ständig 'Beste [Produktkategorie]'-Roundups. Ein einziger Dofollow-Link von einer solchen Seite kann deinen DR um 3-5 Punkte anheben und Referral-Traffic bringen, der konvertiert. Diese Links sind nicht leicht zu bekommen, aber mit dem richtigen Ansatz erreichbar.",
          },
          {
            type: "p",
            text: "Finde zunächst heraus, wer deine Produktkategorie bereits behandelt hat. Im Ahrefs Content Explorer suchst du nach 'beste [deine Produktkategorie]' und filterst nach Domain Rating (DR 40+) und Veröffentlichungsdatum (letzte 12 Monate). Exportiere die Liste, finde die Autorennamen und ihre E-Mail-Adressen oder Social-Media-Profile. Jetzt hast du eine gezielte Presseliste.",
          },
          {
            type: "tip",
            text: "Deine Pitch-E-Mail sollte maximal drei Sätze haben. Beginne damit, was dein Produkt objektiv unterscheidet: ein spezifisches Testergebnis, eine nachweisbare Behauptung, ein Preisvorteil. Schicke keine generische Pressemitteilung. Journalisten löschen diese. Schreibe eine konkrete, menschliche Nachricht, die ihre Zeit respektiert.",
          },
          {
            type: "p",
            text: "Schicke nach Möglichkeit Produktmuster. Ein Journalist, der dein Produkt physisch getestet hat, ist zehnmal wahrscheinlicher, es aufzunehmen, als jemand, der nur dein Datenblatt gelesen hat. Budgetiere Produktmuster als Marketingausgabe. Es ist eines der Elemente mit dem höchsten ROI im Linkaufbau.",
          },
        ],
      },
      {
        id: "guest-posting",
        title: "Gastbeiträge richtig gemacht",
        blocks: [
          {
            type: "p",
            text: "Gastbeiträge haben einen schlechten Ruf, weil die meisten sie schlecht umsetzen. Sie pitchen generische Inhalte an beliebige Seiten, die Gastbeiträge akzeptieren, unabhängig von der Relevanz. Die erhaltenen Links sind minderwertig. Richtig gemacht, also wirklich nützliche Inhalte an relevante, hochwertige Publikationen zu pitchen, funktioniert Gastposting noch und erzeugt Links, die Rankings bewegen.",
          },
          {
            type: "p",
            text: "Wenn du Laufschuhe verkaufst, sind deine Zielpublikationen Laufblogs (Runner's World Deutschland, Laufen.de), Podologieseiten, Sportmedizin-Blogs und Fitnessmagazine. Pitch einen Artikel, der für deren Leser tatsächlich nützlich ist: '5 Zeichen, dass deine Laufschuhe deine Knieschmerzen verursachen' wird wahrscheinlicher akzeptiert als '5 Gründe, warum unsere Laufschuhe großartig sind'.",
          },
          {
            type: "callout",
            title: "Ziele überprüfen",
            text: "Überprüfe vor dem Pitch den DR der Seite in Ahrefs (Ziel: DR 35+), prüfe ob der Content organischen Traffic erhält (Ahrefs Site Explorer; null organischer Traffic bedeutet, Google ignoriert sie möglicherweise), und prüfe ob sie bereits Gastbeiträge veröffentlicht haben. Eine Publikation, die noch nie Gastinhalte veröffentlicht hat, wird damit nicht für dich beginnen.",
          },
          {
            type: "list",
            items: [
              "Zielpublikationen mit Ahrefs Content Explorer nach DR und Traffic filtern",
              "3-4 aktuelle Artikel auf der Seite lesen, bevor du pitchst - Ton und Tiefe anpassen",
              "Einen spezifischen Artikeltitel und eine 2-Satz-Zusammenfassung pitchen, keinen fertigen Entwurf",
              "Einen Link zu einem Schreibbeispiel einfügen, das beweist, dass du schreiben kannst",
              "Einen kontextuellen Link im Fließtext aushandeln, nicht nur einen Autorenbiografie-Link",
              "Einmal nachfassen nach 10 Tagen, dann weitermachen wenn keine Antwort kommt",
            ],
          },
        ],
      },
      {
        id: "supplier-and-partner-links",
        title: "Lieferanten- und Partnerlinks: Die unterschätzte Taktik",
        blocks: [
          {
            type: "p",
            text: "Wenn du Produkte anderer Marken verkaufst, haben diese Marken oft eine 'Wo kaufen'- oder 'Autorisierte Händler'-Seite auf ihrer Website. Das sind höchst relevante Links, gleiche Branche, oft hoher DR, und die meisten E-Commerce-Shops gehen sie nie an. Sende eine kurze E-Mail an das Marketing- oder Partnerschaftsteam jeder Marke und bitte darum, aufgelistet zu werden. Die Konversionsrate bei solchen Anfragen ist überraschend hoch, weil du bereits Kunde bist.",
          },
          {
            type: "p",
            text: "Die gleiche Logik gilt für jede formelle Partnerschaft: Zahlungsdienstleister mit Händler-Fallstudien, Fulfillment-Partner mit Kundenspotlights, Softwareanbieter mit Integrationsdirektorien. Jedes Tool oder jede Dienstleistung, die du als Unternehmen nutzt, ist eine potenzielle Linkmöglichkeit, wenn sie irgendeine Art von Partner- oder Kundenseite haben.",
          },
          {
            type: "tip",
            text: "Überprüfe jetzt die Websites deiner bestehenden Lieferanten. Suche ihre Domain im Ahrefs Site Explorer und achte auf Seiten mit 'Händler', 'Stockist', 'Wo kaufen' oder 'autorisierter Händler' in der URL. Wenn sie die Seite haben und du nicht darauf bist, ist das ein Link, den du haben solltest. Sende heute eine E-Mail.",
          },
        ],
      },
      {
        id: "resource-and-broken-link-building",
        title: "Ressourcenseiten und Broken-Link-Building",
        blocks: [
          {
            type: "p",
            text: "Ressourcenseiten sind kuratierte Linklisten, die jemand in deiner Nische für sein Publikum pflegt - 'Beste Ressourcen für Hobbybäcker', 'Empfohlene Ausrüstung für Radfahrer' und so weiter. Sie existieren in fast jeder Nische und sind aktiv daran interessiert, auf qualitativ hochwertige Seiten zu verlinken. Finde sie mit Google-Suchen: intitle:\"Ressourcen\" \"deine Nische\" oder intitle:\"nützliche Links\" \"deine Nische\". Filtere, indem du DR in Ahrefs überprüfst, und pitche nur Seiten mit DR 30 oder höher.",
          },
          {
            type: "p",
            text: "Broken-Link-Building ist zeitintensiver, produziert aber hochwertige Links. Die Methode: Verwende Ahrefs, um kaputte ausgehende Links von Wettbewerberseiten oder hochrangigen Seiten in deiner Nische zu finden. Wenn du einen kaputten Link findest, der auf ähnliche Inhalte zeigt wie etwas, das du hast (oder erstellen könntest), sende dem Webmaster eine E-Mail, teile ihm mit, dass der Link kaputt ist, und biete deine Seite als Ersatz an.",
          },
          {
            type: "checklist",
            items: [
              "intitle:\"Ressourcen\"-Suchen für deine Nische in Google durchführen",
              "Den DR jedes Ergebnisses in Ahrefs prüfen - alles unter DR 30 überspringen",
              "Bestätigen, dass sie externe Links akzeptieren und deine Seite zu ihrer Liste passt",
              "Wettbewerbsdomains in Ahrefs eingeben und den Broken Outlinks-Bericht ausführen",
              "Für jeden kaputten Link prüfen, ob du passende oder überlegene Inhalte hast",
              "Eine kurze, spezifische E-Mail schreiben: den kaputten Link identifizieren, den Ersatz erklären",
              "Alle Outreach-Aktivitäten in einer Tabelle mit Status und Nachfassdaten verfolgen",
            ],
          },
          {
            type: "callout",
            title: "Was wirklich nicht funktioniert",
            text: "Massenkauf von Links bei Linkfarmen, Kommentarspam, Eintragungen in generische Verzeichnisse: das bringt entweder nichts oder zieht dir eine manuelle Google-Penalty zu. Das Penguin-Algorithmus-Update von 2012 wurde speziell entwickelt, um Linkschemata abzuwerten. Vierzehn Jahre später erledigt es immer noch seinen Job. Baue Links auf, die ein menschlicher Redakteur freiwillig setzen würde.",
          },
        ],
      },
      {
        id: "building-a-link-building-system",
        title: "Linkaufbau zu einem wiederholbaren Prozess machen",
        blocks: [
          {
            type: "p",
            text: "Einmaliger Linkaufbau ist besser als keiner. Monatlicher Linkaufbau kumuliert zu einem ernsthaften Wettbewerbsvorteil. Die Shops, die wettbewerbsintensive Kategorien dominieren, haben in der Regel 2-3 Jahre konsequent Links aufgebaut, nicht nur 6 Monate gespurtet.",
          },
          {
            type: "p",
            text: "Setze ein monatliches Ziel von 5-10 neuen verweisenden Domains, für die meisten E-Commerce-Unternehmen ohne einen Vollzeit-Linkbuilder erreichbar. Weise Verantwortung zu: eine Person verfolgt Outreach, macht Nachfassaktionen und berichtet Ergebnisse. Nutze eine einfache Tabelle oder ein Tool wie Pitchbox oder Hunter. Überprüfe deinen DR monatlich in Ahrefs und verfolge Rankingpositionen für deine Zielkeywords.",
          },
          {
            type: "list",
            items: [
              "Monatliches Ziel setzen: mindestens 5-10 neue verweisende Domains",
              "Einmal pro Quartal eine Digital-PR-Kampagne rund um ein neues Produkt oder Originaldaten durchführen",
              "Eine aktuelle Interessentenliste in einer Tabelle pflegen - immer 20+ Ziele bereithalten",
              "Ahrefs monatlich prüfen: DR-Trend, Anzahl verweisender Domains, neue vs. verlorene Links",
              "Taktiken, die nach 3 Monaten nicht konvertieren, einstellen - verdoppeln, was funktioniert",
            ],
          },
          {
            type: "tip",
            text: "Dein bester Link-Köder für E-Commerce sind Originaldaten. Führe eine Umfrage durch, veröffentliche einen Branchenbericht oder kompiliere öffentlich verfügbare Daten zu etwas Nützlichem und Teilbarem. Originalrecherchen gewinnen passive Links von Journalisten und Bloggern, oft ganz ohne Outreach.",
          },
        ],
      },
    ],
  },

  fr: {
    nav: {
      prev: { href: "/guides/task-planning", category: "Recherche & Idéation", title: "Planification des tâches" },
      next: { href: "/guides/topical-authority", category: "SEO E-commerce avancé", title: "Autorité thématique" },
    },
    sections: [
      {
        id: "why-links-still-matter",
        title: "Pourquoi les liens restent indispensables en e-commerce",
        blocks: [
          {
            type: "p",
            text: "Google l'a dit publiquement, à plusieurs reprises : les liens font partie des trois premiers facteurs de classement. En e-commerce, où l'on cible des requêtes transactionnelles comme 'acheter des chaussures de running' ou 'meilleur bureau debout', on est en concurrence avec des sites qui construisent leur autorité depuis des années. L'optimisation on-page est le ticket d'entrée. Les liens, eux, font la différence entre la première et la deuxième page.",
          },
          {
            type: "p",
            text: "Les études sur les facteurs de classement menées par Ahrefs, Semrush et Backlinko montrent de façon constante que le Domain Rating (DR) et le nombre de domaines référents uniques corrèlent plus fortement avec les classements que presque n'importe quelle variable on-page. Cela ne veut pas dire que l'on-page est inutile, mais pour des termes e-commerce concurrentiels, un site à DR 20 ne dépassera pas un site à DR 70 grâce à de meilleures descriptions de produits.",
          },
          {
            type: "callout",
            title: "L'écart d'autorité est bien réel",
            text: "Si les 3 premiers résultats pour votre mot-clé cible ont un DR de 55, 62 et 70, et que votre site est à DR 28, les liens sont votre goulot d'étranglement. Réglez ce problème en priorité. Vérifiez-le avec Ahrefs ou Semrush en moins de deux minutes.",
          },
        ],
      },
      {
        id: "digital-pr-for-products",
        title: "Digital PR : intégrer les sélections 'meilleures achats'",
        blocks: [
          {
            type: "p",
            text: "Les journalistes de publications comme Le Monde, Les Numériques, 60 Millions de Consommateurs et les magazines spécialisés rédigent en permanence des sélections 'meilleurs [catégorie de produit]'. Un seul lien dofollow d'un site de référence peut augmenter votre DR de 3 à 5 points et générer un trafic référent qui convertit. Ces liens sont difficiles à obtenir, mais accessibles avec la bonne approche.",
          },
          {
            type: "p",
            text: "Commencez par identifier qui a déjà couvert votre catégorie de produit. Dans Ahrefs Content Explorer, cherchez 'meilleur [votre catégorie]' et filtrez par domain rating (DR 40+) et date de publication (12 derniers mois). Exportez la liste, trouvez les noms des auteurs, puis leurs adresses e-mail ou profils sociaux. Vous avez maintenant une liste de presse ciblée.",
          },
          {
            type: "tip",
            text: "Votre e-mail de pitch ne doit pas dépasser trois phrases. Commencez par ce qui rend votre produit objectivement différent : un résultat de test spécifique, une affirmation vérifiable, un prix compétitif. N'envoyez pas un communiqué de presse générique. Les journalistes les suppriment. Envoyez un message court, précis, qui respecte leur temps.",
          },
          {
            type: "p",
            text: "Envoyez des échantillons produits chaque fois que c'est possible. Un journaliste qui a testé physiquement votre produit est dix fois plus susceptible de l'inclure dans sa sélection. Intégrez les échantillons produits comme dépense marketing - c'est l'un des postes à meilleur ROI dans la création de liens.",
          },
        ],
      },
      {
        id: "guest-posting",
        title: "Les articles invités bien faits",
        blocks: [
          {
            type: "p",
            text: "Les articles invités ont mauvaise réputation parce que la plupart des gens les font mal. Ils proposent du contenu générique à n'importe quel site acceptant des invités, sans tenir compte de la pertinence. Les liens obtenus sont médiocres. Bien fait, c'est-à-dire proposer un contenu vraiment utile à des publications pertinentes et de qualité, le guest posting fonctionne encore et produit des liens qui améliorent les classements.",
          },
          {
            type: "p",
            text: "Si vous vendez des chaussures de running, vos publications cibles sont les blogs running (Jogging International, Foulée de Trail), les sites de podologie, les blogs de médecine sportive et les magazines fitness. Proposez un article vraiment utile pour leurs lecteurs : '5 signes que vos chaussures de running causent vos douleurs aux genoux' a bien plus de chances d'être accepté que '5 raisons pour lesquelles nos chaussures sont formidables'.",
          },
          {
            type: "callout",
            title: "Évaluer vos cibles",
            text: "Avant de pitcher, vérifiez le DR du site dans Ahrefs (visez DR 35+), vérifiez que son contenu génère du trafic organique (Ahrefs Site Explorer; zéro trafic organique signifie que Google les ignore peut-être), et vérifiez qu'ils ont déjà publié des articles invités. Une publication qui n'en a jamais fait ne commencera pas pour vous.",
          },
          {
            type: "list",
            items: [
              "Trouver des publications cibles via Ahrefs Content Explorer filtré par DR et trafic",
              "Lire 3-4 articles récents sur le site avant de pitcher - adapter le ton et la profondeur",
              "Proposer un titre d'article spécifique et un résumé en 2 phrases, pas un brouillon complet",
              "Inclure un lien vers un échantillon de rédaction prouvant votre qualité",
              "Négocier un lien contextuel dans le corps de l'article, pas seulement dans la biographie de l'auteur",
              "Relancer une fois après 10 jours, puis passer à autre chose sans réponse",
            ],
          },
        ],
      },
      {
        id: "supplier-and-partner-links",
        title: "Liens fournisseurs et partenaires : la tactique sous-utilisée",
        blocks: [
          {
            type: "p",
            text: "Si vous vendez les produits d'autres marques, ces marques ont souvent une page 'Où acheter' ou 'Revendeurs agréés' sur leur site. Ce sont des liens très pertinents, même secteur, souvent DR élevé, et la plupart des boutiques e-commerce ne les poursuivent jamais. Envoyez un court e-mail à l'équipe marketing ou partenariats de chaque marque pour demander à être référencé. Le taux de conversion de ces demandes est étonnamment élevé car vous êtes déjà client.",
          },
          {
            type: "p",
            text: "La même logique s'applique à toute relation partenariale formelle : prestataires de paiement avec études de cas marchands, partenaires logistiques avec vitrines clients, éditeurs de logiciels avec répertoires d'intégrations. Chaque outil ou service que vous utilisez en tant qu'entreprise est une opportunité de lien potentielle s'ils ont une page partenaires ou clients.",
          },
          {
            type: "tip",
            text: "Vérifiez dès maintenant les sites de vos fournisseurs actuels. Recherchez leur domaine dans Ahrefs Site Explorer et cherchez des pages contenant 'revendeur', 'stockiste', 'où acheter' ou 'distributeur agréé' dans l'URL. S'ils ont la page et que vous n'y figurez pas, c'est un lien que vous devriez avoir. Envoyez-leur un e-mail aujourd'hui.",
          },
        ],
      },
      {
        id: "resource-and-broken-link-building",
        title: "Pages de ressources et liens brisés",
        blocks: [
          {
            type: "p",
            text: "Les pages de ressources sont des listes de liens curatées qu'une personne de votre niche maintient pour son audience - 'Meilleures ressources pour les boulangers', 'Équipements recommandés pour cyclistes', etc. Elles existent dans presque toutes les niches et cherchent activement à pointer vers des sites de qualité. Trouvez-les via des recherches Google : intitle:\"ressources\" \"votre niche\", ou intitle:\"liens utiles\" \"votre niche\". Filtrez en vérifiant le DR dans Ahrefs et ne pitchez que les sites DR 30 et plus.",
          },
          {
            type: "p",
            text: "La création de liens via les liens brisés est plus chronophage mais produit des liens de haute qualité. La méthode : utilisez Ahrefs pour extraire les liens sortants cassés des sites concurrents ou des sites d'autorité de votre niche. Quand vous trouvez un lien brisé pointant vers un contenu similaire au vôtre, envoyez un e-mail au webmaster, signalez-lui le lien cassé et proposez votre page en remplacement.",
          },
          {
            type: "checklist",
            items: [
              "Effectuer des recherches intitle:\"ressources\" pour votre niche sur Google",
              "Vérifier le DR de chaque résultat dans Ahrefs - ignorer tout ce qui est sous DR 30",
              "Confirmer qu'ils acceptent les liens externes et que votre site correspond à leur liste",
              "Entrer les domaines concurrents dans Ahrefs et lancer le rapport Broken Outlinks",
              "Pour chaque lien brisé, vérifier si vous disposez d'un contenu correspondant ou supérieur",
              "Rédiger un e-mail court et précis : identifier le lien brisé, expliquer votre remplacement",
              "Suivre toutes les démarches dans un tableur avec statut et dates de relance",
            ],
          },
          {
            type: "callout",
            title: "Ce qui ne fonctionne vraiment pas",
            text: "Acheter des liens en masse auprès de fermes de liens, le spam de commentaires, les inscriptions dans des annuaires génériques : ces pratiques ne font rien bouger ou vous valent une pénalité manuelle Google. La mise à jour Penguin de 2012 a été conçue spécifiquement pour dévaluer les schémas de liens. Quatorze ans plus tard, elle fait toujours son travail. Construisez des liens qu'un éditeur humain choisirait d'ajouter.",
          },
        ],
      },
      {
        id: "building-a-link-building-system",
        title: "Faire de la création de liens un processus reproductible",
        blocks: [
          {
            type: "p",
            text: "Une création de liens ponctuelle vaut mieux que rien. Une création de liens mensuelle se cumule en avantage concurrentiel sérieux. Les boutiques qui dominent les catégories compétitives ont généralement construit des liens de façon constante pendant 2 à 3 ans, et non pas simplement pendant 6 mois.",
          },
          {
            type: "p",
            text: "Fixez un objectif mensuel de 5 à 10 nouveaux domaines référents, réalisable pour la plupart des entreprises e-commerce sans un link builder à temps plein. Désignez un responsable : une personne suit les actions, relance et rend compte des résultats. Utilisez un simple tableur ou un outil comme Pitchbox ou Hunter. Vérifiez votre DR mensuellement dans Ahrefs et suivez les positions pour vos mots-clés cibles.",
          },
          {
            type: "list",
            items: [
              "Fixer un objectif mensuel : au minimum 5-10 nouveaux domaines référents",
              "Mener une campagne Digital PR par trimestre autour d'un nouveau produit ou de données originales",
              "Maintenir une liste de prospects active dans un tableur - toujours avoir 20+ cibles prêtes",
              "Vérifier Ahrefs mensuellement : tendance DR, nombre de domaines référents, liens gagnés vs perdus",
              "Arrêter les tactiques qui ne convertissent pas après 3 mois et doubler sur ce qui fonctionne",
            ],
          },
          {
            type: "tip",
            text: "Votre meilleur appât à liens en e-commerce, ce sont les données originales. Réalisez une enquête, publiez un rapport sectoriel, ou compilez des données publiques en quelque chose d'utile et de partageable. La recherche originale génère des liens passifs de la part des journalistes et blogueurs, souvent sans aucune démarche active.",
          },
        ],
      },
    ],
  },

  es: {
    nav: {
      prev: { href: "/guides/task-planning", category: "Investigación e ideación", title: "Planificación de tareas" },
      next: { href: "/guides/topical-authority", category: "SEO para e-commerce avanzado", title: "Autoridad temática" },
    },
    sections: [
      {
        id: "why-links-still-matter",
        title: "Por qué los enlaces siguen siendo importantes en e-commerce",
        blocks: [
          {
            type: "p",
            text: "Google lo ha dicho públicamente y en repetidas ocasiones: los enlaces son uno de los tres principales factores de posicionamiento. En e-commerce, donde se persiguen consultas transaccionales como 'comprar zapatillas running' o 'mejor escritorio de pie', se compite contra sitios que llevan años construyendo autoridad. La optimización on-page es el precio de entrada. Los enlaces son lo que realmente separa la primera página de la segunda.",
          },
          {
            type: "p",
            text: "Los estudios sobre factores de posicionamiento de Ahrefs, Semrush y Backlinko muestran de forma consistente que el Domain Rating (DR) y el número de dominios de referencia únicos correlacionan más fuertemente con los rankings que casi cualquier variable on-page. Eso no significa que el on-page no importe (sí importa), pero para términos de e-commerce competitivos, no superarás a un sitio con DR 70 solo con mejores descripciones de producto.",
          },
          {
            type: "callout",
            title: "La brecha de autoridad es real",
            text: "Si los 3 primeros resultados para tu keyword objetivo tienen DR 55, 62 y 70, y tu sitio está en DR 28, los enlaces son tu cuello de botella. Resuélvelo antes que cualquier otra cosa. Compruébalo con Ahrefs o Semrush en menos de dos minutos.",
          },
        ],
      },
      {
        id: "digital-pr-for-products",
        title: "Digital PR: aparecer en las selecciones 'Los mejores'",
        blocks: [
          {
            type: "p",
            text: "Los periodistas de publicaciones como El País, Xataka, Consumer o revistas especializadas del sector escriben constantemente selecciones de 'los mejores [categoría de producto]'. Un solo enlace dofollow de un sitio de referencia puede elevar tu DR 3-5 puntos y generar tráfico de referencia que convierte. Estos enlaces no son fáciles de conseguir, pero son alcanzables con el enfoque correcto.",
          },
          {
            type: "p",
            text: "Empieza identificando quién ha cubierto ya tu categoría de producto. En Ahrefs Content Explorer, busca 'mejor [tu categoría]' y filtra por domain rating (DR 40+) y fecha de publicación (últimos 12 meses). Exporta la lista, encuentra los nombres de los autores y sus correos electrónicos o perfiles sociales. Ya tienes una lista de prensa segmentada.",
          },
          {
            type: "tip",
            text: "Tu email de pitch debe tener un máximo de tres frases. Empieza con lo que hace a tu producto objetivamente diferente: un resultado de prueba específico, una afirmación verificable, un precio competitivo. No envíes un comunicado de prensa genérico. Los periodistas los borran. Envía una nota concreta y humana que respete su tiempo.",
          },
          {
            type: "p",
            text: "Envía muestras del producto siempre que sea posible. Un periodista que ha probado físicamente tu producto es diez veces más probable que lo incluya. Presupuesta las muestras de producto como gasto de marketing - es una de las partidas con mayor ROI en la construcción de enlaces.",
          },
        ],
      },
      {
        id: "guest-posting",
        title: "Los artículos de invitado bien hechos",
        blocks: [
          {
            type: "p",
            text: "Los artículos de invitado tienen mala reputación porque la mayoría los hace mal. Proponen contenido genérico a cualquier sitio que acepte invitados, sin importar la relevancia. Los enlaces obtenidos son de baja calidad. Bien hecho, es decir, proponer contenido realmente útil a publicaciones relevantes y de alta autoridad, el guest posting todavía funciona y produce enlaces que mueven rankings.",
          },
          {
            type: "p",
            text: "Si vendes zapatillas de running, tus publicaciones objetivo son blogs de running (Runner's World España, Runnea, Sport Life), sitios de podología, blogs de medicina deportiva y revistas de fitness. Propón un artículo que sea realmente útil para sus lectores: '5 señales de que tus zapatillas de running causan tu dolor de rodilla' tiene muchas más posibilidades de ser aceptado que '5 razones por las que nuestras zapatillas son geniales'.",
          },
          {
            type: "callout",
            title: "Evalúa tus objetivos",
            text: "Antes de hacer el pitch, comprueba el DR del sitio en Ahrefs (apunta a DR 35+), verifica que su contenido recibe tráfico orgánico (Ahrefs Site Explorer; cero tráfico orgánico significa que Google podría estar ignorándolos), y confirma que han publicado artículos de invitado antes. Una publicación que nunca ha publicado contenido invitado no va a empezar contigo.",
          },
          {
            type: "list",
            items: [
              "Encontrar publicaciones objetivo con Ahrefs Content Explorer filtrado por DR y tráfico",
              "Leer 3-4 artículos recientes del sitio antes de hacer el pitch - adaptar el tono y la profundidad",
              "Proponer un título de artículo específico y un resumen de 2 frases, no un borrador completo",
              "Incluir un enlace a una muestra de escritura que demuestre que sabes escribir",
              "Negociar un enlace contextual en el cuerpo del artículo, no solo en la biografía del autor",
              "Hacer seguimiento una vez después de 10 días, luego pasar al siguiente si no hay respuesta",
            ],
          },
        ],
      },
      {
        id: "supplier-and-partner-links",
        title: "Enlaces de proveedores y socios: la táctica infrautilizada",
        blocks: [
          {
            type: "p",
            text: "Si vendes productos de otras marcas, esas marcas suelen tener una página de 'Dónde comprar' o 'Distribuidores autorizados' en su sitio. Son enlaces muy relevantes, mismo sector, DR a menudo alto, y la mayoría de las tiendas e-commerce nunca los persiguen. Envía un correo breve al equipo de marketing o de partnerships de cada marca y pide ser incluido. La tasa de conversión de estas solicitudes es sorprendentemente alta porque ya eres cliente.",
          },
          {
            type: "p",
            text: "La misma lógica aplica a cualquier relación de partnership formal: proveedores de pago con estudios de caso de comerciantes, socios logísticos con páginas de clientes, proveedores de software con directorios de integraciones. Cada herramienta o servicio que usas como empresa es una oportunidad de enlace potencial si tienen algún tipo de página de socios o clientes.",
          },
          {
            type: "tip",
            text: "Revisa ahora mismo los sitios de tus proveedores actuales. Busca su dominio en Ahrefs Site Explorer y busca páginas con 'distribuidor', 'stockist', 'dónde comprar' o 'distribuidor autorizado' en la URL. Si tienen la página y no apareces, ese es un enlace que deberías tener. Envíales un correo hoy.",
          },
        ],
      },
      {
        id: "resource-and-broken-link-building",
        title: "Páginas de recursos y enlaces rotos",
        blocks: [
          {
            type: "p",
            text: "Las páginas de recursos son listas de enlaces curadas que alguien en tu nicho mantiene para su audiencia - 'Mejores recursos para reposteros', 'Equipamiento recomendado para ciclistas', etc. Existen en casi todos los nichos y buscan activamente enlazar a sitios de calidad. Encuéntralas con búsquedas en Google: intitle:\"recursos\" \"tu nicho\", o intitle:\"enlaces útiles\" \"tu nicho\". Filtra comprobando el DR en Ahrefs y haz pitch solo a sitios con DR 30 o superior.",
          },
          {
            type: "p",
            text: "La construcción de enlaces con enlaces rotos requiere más tiempo pero produce enlaces de alta calidad. El método: usa Ahrefs para extraer los enlaces salientes rotos de sitios competidores o sitios de autoridad en tu nicho. Cuando encuentres un enlace roto que apunta a contenido similar al tuyo, envía un correo al webmaster, informa del enlace roto y ofrece tu página como sustitución.",
          },
          {
            type: "checklist",
            items: [
              "Realizar búsquedas intitle:\"recursos\" para tu nicho en Google",
              "Comprobar el DR de cada resultado en Ahrefs - ignorar todo lo que esté por debajo de DR 30",
              "Confirmar que aceptan enlaces externos y que tu sitio encaja en su lista",
              "Introducir dominios competidores en Ahrefs y ejecutar el informe Broken Outlinks",
              "Para cada enlace roto, verificar si tienes contenido equivalente o superior",
              "Redactar un correo breve y específico: identificar el enlace roto, explicar tu sustitución",
              "Rastrear todo el outreach en una hoja de cálculo con estado y fechas de seguimiento",
            ],
          },
          {
            type: "callout",
            title: "Lo que realmente no funciona",
            text: "Comprar enlaces en masa de granjas de enlaces, spam de comentarios, inscripciones en directorios genéricos: estas prácticas o no mueven nada o te ganan una penalización manual de Google. La actualización Penguin de 2012 fue diseñada específicamente para devaluar los esquemas de enlaces. Catorce años después, sigue haciendo su trabajo. Construye enlaces que un editor humano elegiría añadir.",
          },
        ],
      },
      {
        id: "building-a-link-building-system",
        title: "Convertir la construcción de enlaces en un proceso repetible",
        blocks: [
          {
            type: "p",
            text: "La construcción de enlaces que ocurre una sola vez es mejor que nada. La que ocurre cada mes se acumula en una ventaja competitiva seria. Las tiendas que dominan categorías competitivas generalmente han estado construyendo enlaces de forma constante durante 2-3 años, no solo durante 6 meses.",
          },
          {
            type: "p",
            text: "Fija un objetivo mensual de 5-10 nuevos dominios de referencia, alcanzable para la mayoría de negocios e-commerce sin un link builder a tiempo completo. Asigna responsabilidad: una persona hace seguimiento del outreach, hace seguimientos y reporta resultados. Usa una simple hoja de cálculo o una herramienta como Pitchbox o Hunter. Revisa tu DR mensualmente en Ahrefs y rastrea posiciones para tus keywords objetivo.",
          },
          {
            type: "list",
            items: [
              "Establecer un objetivo mensual: mínimo 5-10 nuevos dominios de referencia",
              "Ejecutar una campaña de Digital PR por trimestre alrededor de un nuevo producto o datos originales",
              "Mantener una lista de prospectos activa en una hoja de cálculo - tener siempre 20+ objetivos listos",
              "Revisar Ahrefs mensualmente: tendencia de DR, recuento de dominios referentes, enlaces ganados vs perdidos",
              "Eliminar las tácticas que no convierten tras 3 meses y doblar la apuesta en lo que funciona",
            ],
          },
          {
            type: "tip",
            text: "Tu mejor cebo de enlaces en e-commerce son los datos originales. Realiza una encuesta, publica un informe del sector o compila datos disponibles públicamente en algo útil y compartible. La investigación original genera enlaces pasivos de periodistas y bloggers, a menudo sin ningún tipo de outreach.",
          },
        ],
      },
    ],
  },

  it: {
    nav: {
      prev: { href: "/guides/task-planning", category: "Ricerca e ideazione", title: "Pianificazione delle attività" },
      next: { href: "/guides/topical-authority", category: "SEO e-commerce avanzato", title: "Autorità tematica" },
    },
    sections: [
      {
        id: "why-links-still-matter",
        title: "Perché i link contano ancora nell'e-commerce",
        blocks: [
          {
            type: "p",
            text: "Google lo ha dichiarato pubblicamente, più volte: i link sono uno dei tre principali fattori di ranking. Per l'e-commerce in particolare, dove si inseguono query transazionali come 'comprare scarpe da running' o 'migliore scrivania in piedi', si è in competizione con siti che costruiscono autorità da anni. L'ottimizzazione on-page è il biglietto d'ingresso. I link sono ciò che separa davvero la prima dalla seconda pagina.",
          },
          {
            type: "p",
            text: "Gli studi sui fattori di ranking di Ahrefs, Semrush e Backlinko mostrano costantemente che il Domain Rating (DR) e il numero di domini riferenti unici correlano con i ranking più fortemente di quasi qualsiasi variabile on-page. Questo non significa che l'on-page non conti (conta), ma per termini e-commerce competitivi, non si supera un sito DR 70 con un sito DR 20 solo scrivendo descrizioni prodotto migliori.",
          },
          {
            type: "callout",
            title: "Il divario di autorità è reale",
            text: "Se i 3 primi risultati per la tua keyword obiettivo hanno DR 55, 62 e 70, e il tuo sito è a DR 28, i link sono il tuo collo di bottiglia. Risolvilo prima di tutto il resto. Verifica con Ahrefs o Semrush in meno di due minuti.",
          },
        ],
      },
      {
        id: "digital-pr-for-products",
        title: "Digital PR: entrare nelle selezioni 'i migliori'",
        blocks: [
          {
            type: "p",
            text: "I giornalisti di pubblicazioni come Il Sole 24 Ore, Corriere della Sera, Tom's Hardware e riviste di settore specializzate scrivono costantemente selezioni 'migliori [categoria di prodotto]'. Un singolo link dofollow da un sito di riferimento può aumentare il tuo DR di 3-5 punti e generare traffico di referral che converte. Questi link non sono facili da ottenere, ma sono raggiungibili con l'approccio giusto.",
          },
          {
            type: "p",
            text: "Inizia identificando chi ha già trattato la tua categoria di prodotto. In Ahrefs Content Explorer, cerca 'migliore [la tua categoria]' e filtra per domain rating (DR 40+) e data di pubblicazione (ultimi 12 mesi). Esporta la lista, trova i nomi degli autori, poi le loro email o profili social. Hai ora una lista stampa mirata.",
          },
          {
            type: "tip",
            text: "La tua email di pitch deve avere al massimo tre frasi. Inizia con ciò che rende il tuo prodotto oggettivamente diverso: un risultato di test specifico, un'affermazione verificabile, un prezzo competitivo. Non inviare un comunicato stampa generico. I giornalisti li cancellano. Invia un messaggio breve, concreto, che rispetti il loro tempo.",
          },
          {
            type: "p",
            text: "Invia campioni prodotto ogni volta che è possibile. Un giornalista che ha testato fisicamente il tuo prodotto è dieci volte più probabile che lo includa. Inserisci i campioni prodotto come spesa di marketing. È una delle voci con il ROI più alto nel link building.",
          },
        ],
      },
      {
        id: "guest-posting",
        title: "Gli articoli ospiti fatti bene",
        blocks: [
          {
            type: "p",
            text: "Gli articoli ospiti hanno una cattiva reputazione perché la maggior parte delle persone li fa male. Propongono contenuto generico a qualsiasi sito che accetti ospiti, indipendentemente dalla rilevanza. I link ottenuti sono di scarsa qualità. Fatto bene, cioè proporre contenuto davvero utile a pubblicazioni rilevanti e di alta autorità, il guest posting funziona ancora e produce link che muovono i ranking.",
          },
          {
            type: "p",
            text: "Se vendi scarpe da running, le tue pubblicazioni obiettivo sono blog running (Running Italy, Correre, Podisti.net), siti di podologia, blog di medicina sportiva e riviste fitness. Proponi un articolo davvero utile per i loro lettori: '5 segnali che le tue scarpe da running causano il tuo dolore al ginocchio' ha molte più possibilità di essere accettato di '5 motivi per cui le nostre scarpe sono fantastiche'.",
          },
          {
            type: "callout",
            title: "Valutare i tuoi obiettivi",
            text: "Prima di fare il pitch, controlla il DR del sito in Ahrefs (punta a DR 35+), verifica che il loro contenuto riceva traffico organico (Ahrefs Site Explorer; zero traffico organico significa che Google potrebbe già ignorarli), e verifica che abbiano già pubblicato articoli ospiti. Una pubblicazione che non ha mai pubblicato contenuto ospite non inizierà per te.",
          },
          {
            type: "list",
            items: [
              "Trovare pubblicazioni obiettivo con Ahrefs Content Explorer filtrato per DR e traffico",
              "Leggere 3-4 articoli recenti del sito prima di fare il pitch - adattare tono e profondità",
              "Proporre un titolo specifico e un riassunto di 2 frasi, non una bozza completa",
              "Includere un link a un esempio di scrittura che dimostri che sai scrivere",
              "Negoziare un link contestuale nel corpo dell'articolo, non solo nella biografia dell'autore",
              "Fare un follow-up una volta dopo 10 giorni, poi passare oltre se non c'è risposta",
            ],
          },
        ],
      },
      {
        id: "supplier-and-partner-links",
        title: "Link da fornitori e partner: la tattica sottoutilizzata",
        blocks: [
          {
            type: "p",
            text: "Se vendi prodotti di altri marchi, quei marchi spesso hanno una pagina 'Dove comprare' o 'Rivenditori autorizzati' sul loro sito. Sono link molto rilevanti, stesso settore, spesso DR alto, e la maggior parte dei negozi e-commerce non li persegue mai. Invia una breve email al team marketing o partnership di ogni marchio e chiedi di essere elencato. Il tasso di conversione di queste richieste è sorprendentemente alto perché sei già un cliente.",
          },
          {
            type: "p",
            text: "La stessa logica si applica a qualsiasi relazione di partnership formale: provider di pagamento con case study di merchant, partner logistici con pagine clienti, fornitori di software con directory di integrazioni. Ogni strumento o servizio che usi come azienda è una potenziale opportunità di link se hanno qualche tipo di pagina partner o clienti.",
          },
          {
            type: "tip",
            text: "Controlla adesso i siti dei tuoi fornitori attuali. Cerca il loro dominio in Ahrefs Site Explorer e cerca pagine con 'rivenditore', 'stockist', 'dove comprare' o 'distributore autorizzato' nell'URL. Se hanno la pagina e non ci sei, quello è un link che dovresti avere. Invia loro una email oggi.",
          },
        ],
      },
      {
        id: "resource-and-broken-link-building",
        title: "Pagine di risorse e link rotti",
        blocks: [
          {
            type: "p",
            text: "Le pagine di risorse sono elenchi curati di link che qualcuno nella tua nicchia mantiene per il proprio pubblico - 'Migliori risorse per panettieri', 'Attrezzatura consigliata per ciclisti', ecc. Esistono in quasi tutte le nicchie e sono attivamente alla ricerca di siti di qualità a cui collegarsi. Trovale con ricerche Google: intitle:\"risorse\" \"la tua nicchia\", o intitle:\"link utili\" \"la tua nicchia\". Filtra controllando il DR in Ahrefs e fai pitch solo a siti con DR 30 o superiore.",
          },
          {
            type: "p",
            text: "La costruzione di link tramite link rotti richiede più tempo ma produce link di alta qualità. Il metodo: usa Ahrefs per estrarre i link in uscita rotti da siti competitor o siti autorevoli nella tua nicchia. Quando trovi un link rotto che punta a contenuto simile al tuo, invia un'email al webmaster, comunica che il link è rotto e offri la tua pagina come sostituzione.",
          },
          {
            type: "checklist",
            items: [
              "Eseguire ricerche intitle:\"risorse\" per la tua nicchia su Google",
              "Controllare il DR di ogni risultato in Ahrefs - saltare tutto ciò che è sotto DR 30",
              "Confermare che accettano link esterni e che il tuo sito si adatta alla loro lista",
              "Inserire domini competitor in Ahrefs ed eseguire il report Broken Outlinks",
              "Per ogni link rotto, verificare se hai contenuto equivalente o superiore",
              "Scrivere una breve email specifica: identificare il link rotto, spiegare la tua sostituzione",
              "Tracciare tutto l'outreach in un foglio di calcolo con stato e date di follow-up",
            ],
          },
          {
            type: "callout",
            title: "Cosa davvero non funziona",
            text: "Comprare link in massa da link farm, spam nei commenti, iscrizioni a directory generiche: queste pratiche o non muovono nulla o ti valgono una penalità manuale di Google. L'aggiornamento Penguin del 2012 è stato progettato specificamente per svalutare gli schemi di link. Quattordici anni dopo, sta ancora facendo il suo lavoro. Costruisci link che un editore umano sceglierebbe di aggiungere.",
          },
        ],
      },
      {
        id: "building-a-link-building-system",
        title: "Trasformare il link building in un processo ripetibile",
        blocks: [
          {
            type: "p",
            text: "Il link building fatto una volta sola è meglio di niente. Fatto ogni mese, si accumula in un vantaggio competitivo serio. I negozi che dominano le categorie competitive di solito hanno costruito link in modo costante per 2-3 anni, non solo per 6 mesi.",
          },
          {
            type: "p",
            text: "Fissa un obiettivo mensile di 5-10 nuovi domini riferenti, raggiungibile per la maggior parte delle aziende e-commerce senza un link builder a tempo pieno. Assegna la responsabilità: una persona segue l'outreach, fa follow-up e riporta i risultati. Usa un semplice foglio di calcolo o uno strumento come Pitchbox o Hunter. Controlla il tuo DR mensilmente in Ahrefs e tieni traccia delle posizioni per le tue keyword obiettivo.",
          },
          {
            type: "list",
            items: [
              "Stabilire un obiettivo mensile: minimo 5-10 nuovi domini riferenti",
              "Eseguire una campagna Digital PR per trimestre attorno a un nuovo prodotto o dati originali",
              "Mantenere una lista di prospect attiva in un foglio di calcolo - avere sempre 20+ obiettivi pronti",
              "Controllare Ahrefs mensilmente: tendenza DR, conteggio domini riferenti, link guadagnati vs persi",
              "Abbandonare le tattiche che non convertono dopo 3 mesi e raddoppiare su ciò che funziona",
            ],
          },
          {
            type: "tip",
            text: "Il tuo miglior link bait nell'e-commerce sono i dati originali. Esegui un sondaggio, pubblica un report di settore o compila dati pubblicamente disponibili in qualcosa di utile e condivisibile. La ricerca originale genera link passivi da giornalisti e blogger, spesso senza alcun outreach.",
          },
        ],
      },
    ],
  },

  nl: {
    nav: {
      prev: { href: "/guides/task-planning", category: "Onderzoek & ideeënvorming", title: "Taakplanning" },
      next: { href: "/guides/topical-authority", category: "Geavanceerde e-commerce SEO", title: "Topicale autoriteit opbouwen" },
    },
    sections: [
      {
        id: "why-links-still-matter",
        title: "Waarom links nog steeds tellen voor e-commerce",
        blocks: [
          {
            type: "p",
            text: "Google heeft het publiekelijk en herhaaldelijk gezegd: links behoren tot de drie belangrijkste rankingfactoren. Voor e-commerce specifiek, waar je transactionele zoekopdrachten najaagt zoals 'hardloopschoenen kopen' of 'beste sta-bureau', concurreer je met sites die al jaren autoriteit opbouwen. On-page optimalisatie is het toegangsbewijs. Links zijn wat pagina één van pagina twee scheidt.",
          },
          {
            type: "p",
            text: "Rankingfactorstudies van Ahrefs, Semrush en Backlinko tonen consistent aan dat Domain Rating (DR) en het aantal unieke verwijzende domeinen sterker correleren met rankings dan bijna elke on-page variabele. Dat betekent niet dat on-page er niet toe doet (dat doet het), maar voor competitieve e-commerce termen zul je een DR 70 site niet verslaan met een DR 20 site alleen door betere productbeschrijvingen te schrijven.",
          },
          {
            type: "callout",
            title: "Het autoriteitsgat is echt",
            text: "Als de top 3 resultaten voor jouw doelzoekwoord DR 55, 62 en 70 hebben, en jouw site staat op DR 28, zijn links jouw knelpunt. Los dat als eerste op. Controleer het in Ahrefs of Semrush in minder dan twee minuten.",
          },
        ],
      },
      {
        id: "digital-pr-for-products",
        title: "Digital PR: in 'beste koop'-roundups komen",
        blocks: [
          {
            type: "p",
            text: "Journalisten bij publicaties zoals Tweakers, Consumentenbond, RTL Nieuws en verticale vakbladen schrijven voortdurend 'beste [productcategorie]'-roundups. Één enkele dofollow-link van een toonaangevende site kan je DR 3-5 punten verhogen en referral-verkeer genereren dat converteert. Deze links zijn niet gemakkelijk te krijgen, maar met de juiste aanpak zijn ze haalbaar.",
          },
          {
            type: "p",
            text: "Begin met het identificeren wie jouw productcategorie al heeft behandeld. In Ahrefs Content Explorer zoek je naar 'beste [jouw categorie]' en filter je op domain rating (DR 40+) en publicatiedatum (afgelopen 12 maanden). Exporteer de lijst, vind de auteursnamen en hun e-mailadressen of sociale profielen. Nu heb je een gerichte perslijst.",
          },
          {
            type: "tip",
            text: "Je pitch-e-mail mag maximaal drie zinnen hebben. Begin met wat jouw product objectief anders maakt: een specifiek testresultaat, een verifieerbare claim, een concurrerende prijs. Stuur geen generisch persbericht. Journalisten verwijderen die. Stuur een korte, concrete boodschap die hun tijd respecteert.",
          },
          {
            type: "p",
            text: "Stuur productsamples wanneer mogelijk. Een journalist die jouw product fysiek heeft getest, is tien keer zo waarschijnlijk om het op te nemen. Budgetteer productsamples als marketinguitgave. Het is een van de posten met de hoogste ROI bij linkbuilding.",
          },
        ],
      },
      {
        id: "guest-posting",
        title: "Gastartikelen goed gedaan",
        blocks: [
          {
            type: "p",
            text: "Gastartikelen hebben een slechte reputatie omdat de meeste mensen het verkeerd doen. Ze pitchen generieke content aan elke site die gastbijdragen accepteert, ongeacht de relevantie. De verkregen links zijn van lage kwaliteit. Goed gedaan, dus oprecht nuttige content pitchen aan relevante, hoogwaardige publicaties, werkt gastposting nog steeds en produceert links die rankings bewegen.",
          },
          {
            type: "p",
            text: "Als je hardloopschoenen verkoopt, zijn je doelpublicaties hardloopblogs (Running NL, Hardlopen.nl, Runner's World NL), podologiesites, sportgeneeskundeblogs en fitnessmagazines. Pitch een artikel dat daadwerkelijk nuttig is voor hun lezers: '5 tekenen dat jouw hardloopschoenen je kniepijn veroorzaken' heeft veel meer kans geaccepteerd te worden dan '5 redenen waarom onze schoenen geweldig zijn'.",
          },
          {
            type: "callout",
            title: "Doelen beoordelen",
            text: "Controleer voor het pitchen de DR van de site in Ahrefs (streef naar DR 35+), check dat hun content organisch verkeer krijgt (Ahrefs Site Explorer; nul organisch verkeer betekent dat Google ze mogelijk al negeert), en verifieer dat ze eerder gastartikelen hebben gepubliceerd. Een publicatie die nooit gastcontent heeft gepubliceerd, begint niet voor jou.",
          },
          {
            type: "list",
            items: [
              "Doelpublicaties vinden via Ahrefs Content Explorer gefilterd op DR en verkeer",
              "3-4 recente artikelen op de site lezen voor het pitchen - toon en diepgang afstemmen",
              "Een specifieke artikeltitel en een samenvatting van 2 zinnen pitchen, geen volledig concept",
              "Een link naar een schrijfvoorbeeld bijvoegen dat bewijst dat je kunt schrijven",
              "Onderhandelen over een contextuele link in de body, niet alleen in een auteursbio",
              "Één keer follow-up na 10 dagen, dan doorgaan als er geen reactie komt",
            ],
          },
        ],
      },
      {
        id: "supplier-and-partner-links",
        title: "Leveranciers- en partnerlinks: de ondergewaardeerde tactiek",
        blocks: [
          {
            type: "p",
            text: "Als je producten van andere merken verkoopt, hebben die merken vaak een pagina 'Waar te koop' of 'Erkende dealers' op hun site. Dit zijn zeer relevante links, zelfde branche, vaak hoge DR, en de meeste e-commerce winkels gaan er nooit achteraan. Stuur een korte e-mail naar het marketing- of partnerschapsteam van elk merk en vraag om vermeld te worden. De conversieratio van deze verzoeken is verrassend hoog omdat je al klant bent.",
          },
          {
            type: "p",
            text: "Dezelfde logica geldt voor elke formele partnerrelatie: betalingsproviders met merchant-casestudies, fulfilmentpartners met klantpagina's, softwareleveranciers met integratiemappen. Elke tool of dienst die je als bedrijf gebruikt, is een potentiële linkmogelijkheid als ze enige vorm van partner- of klantpagina hebben.",
          },
          {
            type: "tip",
            text: "Controleer nu meteen de sites van je huidige leveranciers. Zoek hun domein in Ahrefs Site Explorer en zoek naar pagina's met 'dealer', 'stockist', 'waar te koop' of 'erkende dealer' in de URL. Als ze de pagina hebben en jij staat er niet op, is dat een link die je zou moeten hebben. Stuur ze vandaag nog een e-mail.",
          },
        ],
      },
      {
        id: "resource-and-broken-link-building",
        title: "Resourcepagina's en gebroken links",
        blocks: [
          {
            type: "p",
            text: "Resourcepagina's zijn gecureerde lijsten met links die iemand in jouw niche bijhoudt voor hun publiek - 'Beste bronnen voor bakkers', 'Aanbevolen uitrusting voor fietsers', enzovoort. Ze bestaan in bijna elke niche en willen actief linken naar kwalitatieve sites. Vind ze via Google-zoekopdrachten: intitle:\"bronnen\" \"jouw niche\", of intitle:\"nuttige links\" \"jouw niche\". Filter door DR te controleren in Ahrefs en pitch alleen sites met DR 30 of hoger.",
          },
          {
            type: "p",
            text: "Linkbuilding via gebroken links is tijdsintensiever maar produceert hoogwaardige links. De methode: gebruik Ahrefs om gebroken uitgaande links te trekken van concurrerende sites of gezaghebbende sites in jouw niche. Wanneer je een gebroken link vindt die naar soortgelijke content wijst als die van jou, e-mail de webmaster, vertel dat de link kapot is en bied jouw pagina aan als vervanging.",
          },
          {
            type: "checklist",
            items: [
              "intitle:\"bronnen\"-zoekopdrachten voor jouw niche uitvoeren in Google",
              "De DR van elk resultaat controleren in Ahrefs - alles onder DR 30 overslaan",
              "Bevestigen dat ze externe links accepteren en dat jouw site bij hun lijst past",
              "Concurrerende domeinen in Ahrefs invoeren en het Broken Outlinks-rapport uitvoeren",
              "Voor elke gebroken link controleren of je overeenkomende of superieure content hebt",
              "Een korte, specifieke e-mail schrijven: de gebroken link identificeren, jouw vervanging uitleggen",
              "Alle outreach bijhouden in een spreadsheet met status en follow-updatums",
            ],
          },
          {
            type: "callout",
            title: "Wat echt niet werkt",
            text: "Links in bulk kopen van linkfarms, commentaarspam, inschrijvingen bij generieke directories - deze praktijken leveren niets op of bezorgen je een handmatige Google-penalty. De Penguin-algoritme-update van 2012 was specifiek ontworpen om linkschema's te devalueren. Veertien jaar later doet het nog steeds zijn werk. Bouw links die een menselijke redacteur zou kiezen toe te voegen.",
          },
        ],
      },
      {
        id: "building-a-link-building-system",
        title: "Linkbuilding omzetten in een herhaalbaar proces",
        blocks: [
          {
            type: "p",
            text: "Linkbuilding dat één keer plaatsvindt is beter dan niets. Linkbuilding dat elke maand plaatsvindt, accumuleert tot een serieus concurrentievoordeel. De winkels die competitieve categorieën domineren, hebben doorgaans 2-3 jaar consequent links gebouwd, niet slechts 6 maanden gesprint.",
          },
          {
            type: "p",
            text: "Stel een maandelijks doel van 5-10 nieuwe verwijzende domeinen - haalbaar voor de meeste e-commerce bedrijven zonder een fulltime linkbuilder. Wijs eigenaarschap toe: één persoon houdt outreach bij, doet follow-ups en rapporteert resultaten. Gebruik een eenvoudige spreadsheet of een tool zoals Pitchbox of Hunter. Controleer je DR maandelijks in Ahrefs en volg rankingposities voor je doelzoekwoorden.",
          },
          {
            type: "list",
            items: [
              "Een maandelijks doel stellen: minimaal 5-10 nieuwe verwijzende domeinen",
              "Elk kwartaal een Digital PR-campagne uitvoeren rondom een nieuw product of originele data",
              "Een actieve prospectlijst bijhouden in een spreadsheet - altijd 20+ doelen klaar hebben",
              "Ahrefs maandelijks controleren: DR-trend, aantal verwijzende domeinen, gewonnen vs verloren links",
              "Tactieken die na 3 maanden niet converteren stopzetten - verdubbelen op wat werkt",
            ],
          },
          {
            type: "tip",
            text: "Je beste linklokaas voor e-commerce zijn originele data. Voer een enquête uit, publiceer een brancherapport of compileer publiek beschikbare data in iets nuttigs en deelbaars. Origineel onderzoek genereert systematisch passieve links van journalisten en bloggers - vaak zonder enige outreach.",
          },
        ],
      },
    ],
  },
};
