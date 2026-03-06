import type { Locale } from "../config";

export type GuideSection = {
  title: string;
  content: string;
  items?: string[];
  tip?: string;
};

export type GuidePageContent = {
  badge: string;
  heading: string;
  intro: string;
  sections: GuideSection[];
  navLabels: {
    previous: string;
    next: string;
    resourceLibrary: string;
    browseAll: string;
    needHelp: string;
    getInTouch: string;
  };
};

export const guidesKeywordResearchT: Record<Locale, GuidePageContent> = {
  en: {
    badge: "Keyword and content strategy",
    heading: "Ecommerce keyword research",
    intro:
      "Most ecommerce brands approach keyword research backwards. They start with what they sell instead of what people search for. We've audited over 200 stores, and the same mistake shows up in about 80% of them: optimizing product pages for terms nobody types into Google.",
    sections: [
      {
        title: "Why most ecommerce keyword research fails",
        content:
          "The pattern we see again and again is stores targeting their own branded terms or impossibly broad head terms. A fashion brand targeting \"dresses\" (110k monthly searches, keyword difficulty 90+) has almost zero chance of ranking on page one. Meanwhile, \"midi wrap dress for wedding guest\" pulls 1,900 searches per month at a keyword difficulty of 12. That second term is winnable within weeks, not years.\n\nRevenue per keyword matters more than raw search volume. A keyword with 500 monthly searches and a 6% conversion rate will outperform a keyword with 10,000 searches and a 0.3% conversion rate. We've run the numbers across dozens of stores, and the math always points the same direction.\n\nThe fix is simple but requires discipline. Stop chasing volume. Start with the keywords where you can actually rank, where the searcher is close to buying, and where the economics make sense for your margins.",
      },
      {
        title: "The revenue-first keyword framework",
        content:
          "We start every keyword research project inside Google Search Console, not inside a keyword tool. Search Console shows you what Google already associates your site with. Those existing rankings (even if they're on page 3 or 4) are your fastest path to traffic because Google has already decided your site is relevant. Cross-reference those queries with your analytics conversion data. Which landing pages actually generate revenue? Which ones get traffic but no sales? This tells you where to double down and where to rethink your approach.\n\nFrom there, group keywords by purchase intent. Someone searching \"best wireless earbuds under $100\" is much closer to buying than someone searching \"how do wireless earbuds work.\" We score every keyword on estimated revenue potential, which factors in search volume, realistic ranking position, expected click-through rate, and your store's conversion rate for that page type. Volume alone is misleading.",
        items: [
          "Pull your top 50 landing pages by revenue from analytics",
          "Export Search Console queries for those pages",
          "Find the gap between ranking position and search volume",
          "These are your highest-ROI keyword targets",
        ],
      },
      {
        title: "Finding commercial-intent keywords",
        content:
          "Commercial intent modifiers are the fastest filter for separating browsers from buyers. Words like \"buy,\" \"best,\" \"cheap,\" \"vs,\" \"review,\" and \"for [use case]\" signal that the person searching already knows what they want and is evaluating options. \"Best running shoes for flat feet\" converts at roughly 4x the rate of \"running shoes\" because the searcher has narrowed down their need to a specific problem. They are not browsing. They are comparing.\n\nWe build modifier lists specific to each niche. In electronics it might be \"vs,\" \"alternative to,\" \"worth it.\" In fashion it might be \"outfit ideas,\" \"style with,\" \"for petite.\" In supplements it might be \"side effects,\" \"dosage,\" \"vs [competitor].\" These modifiers, combined with your product terms, generate hundreds of targetable keywords that most competitors overlook.",
      },
      {
        title: "Category and collection page keywords",
        content:
          "Category pages drive more revenue than any other page type in ecommerce SEO. Product pages target specific long-tail queries, but category pages can rank for mid-funnel terms like \"men's leather boots,\" \"organic dog food,\" or \"wireless noise-cancelling headphones.\" These are high-volume, high-intent keywords that bring in steady revenue. We've seen single category pages generate $30k+ per month in organic revenue when they have supporting content, internal links, and structured data working together.\n\nThe mistake most stores make is treating category pages as thin listing pages with nothing but a grid of products. Google wants content on these pages. A 200-word intro that naturally includes related keywords, a FAQ section at the bottom, filter options that generate indexable URLs for subcategories. All of this helps a single category page rank for hundreds of related search terms instead of just one.",
      },
      {
        title: "Long-tail keywords that actually convert",
        content:
          "Long-tail is about specificity, not word count. \"Red Nike Air Max 90 size 11\" has almost no measurable search volume, but the person typing that is ready to buy right now. Their purchase intent is near 100%. You don't need to write a blog post to capture this traffic. Your product page just needs to include those attributes in a way Google can parse.\n\nThe real power of long-tail comes from stacking. If you have 500 product pages and each one pulls in 10 organic visits per month from specific long-tail queries, and your conversion rate is 5%, that's 250 orders per month from pages most SEO strategies ignore entirely. We call this long-tail revenue stacking, and it's one of the most underused tactics in ecommerce. The work is in the details: proper product titles, complete attribute data, unique descriptions, and schema markup.",
      },
      {
        title: "Competitor keyword gap analysis",
        content:
          "Gap analysis is how you find the keywords your competitors profit from that you're missing entirely. Export your top 500 organic keywords and do the same for two or three direct competitors. Then filter for terms where they rank in the top 10 and you don't rank at all (or rank below position 20). The most valuable finds are commercial-intent keywords where competitors sit in positions 4 through 10 because those positions are beatable with a focused effort.\n\nTools like Ahrefs Content Gap or Semrush Keyword Gap make this process quick. We typically run this analysis quarterly because rankings shift. New competitors enter, old ones lose rankings, and seasonal terms rotate in and out of relevance. The gap report also helps prioritize your content calendar, since you'll know exactly which pages to create or improve first.",
        items: [
          "Export your top 500 organic keywords",
          "Export competitors' top 500 organic keywords",
          "Filter for keywords where they rank in top 10 and you don't",
          "Prioritize by search volume and commercial intent",
        ],
      },
      {
        title: "Organizing your keyword map",
        content:
          "Every page on your site needs a primary keyword and two to four secondary keywords. We build a spreadsheet that maps each URL to its assigned keywords, search volume, current ranking position, and target position. This prevents keyword cannibalization, which is when two or more pages on your site compete for the same term and end up splitting authority so neither ranks well.\n\nCheck for existing cannibalization in Google Search Console by filtering for a keyword and looking at which URLs appear. If you see two or more URLs swapping in and out of results for the same query, that's cannibalization. The fix is usually consolidating content into one page, adding a canonical tag, or adjusting the keyword targeting so each page has a distinct focus. Your keyword map needs regular upkeep. Update it monthly as rankings change and new opportunities appear.",
      },
    ],
    navLabels: {
      previous: "Previous",
      next: "Next",
      resourceLibrary: "Want the full resource library?",
      browseAll: "Browse all resources",
      needHelp: "Need help with keyword research?",
      getInTouch: "Get in touch",
    },
  },
  de: {
    badge: "Keyword- und Content-Strategie",
    heading: "Keyword-Recherche fuer E-Commerce",
    intro:
      "Die meisten E-Commerce-Marken gehen die Keyword-Recherche falsch herum an. Sie beginnen mit dem, was sie verkaufen, statt mit dem, was Menschen tatsaechlich suchen. Wir haben ueber 200 Shops analysiert, und bei rund 80% davon taucht derselbe Fehler auf: Produktseiten werden auf Begriffe optimiert, die niemand bei Google eingibt.",
    sections: [
      {
        title: "Warum die meisten E-Commerce-Keyword-Recherchen scheitern",
        content:
          "Das Muster, das wir immer wieder sehen: Shops zielen auf eigene Markenbegriffe oder unerreichbar breite Oberbegriffe ab. Eine Modemarke, die auf \"Kleider\" (110.000 monatliche Suchen, Keyword Difficulty 90+) optimiert, hat praktisch keine Chance, auf Seite eins zu ranken. \"Midi-Wickelkleid fuer Hochzeitsgast\" bringt dagegen 1.900 Suchen pro Monat bei einer Keyword Difficulty von 12. Dieser zweite Begriff ist innerhalb von Wochen erreichbar, nicht Jahren.\n\nUmsatz pro Keyword zaehlt mehr als reines Suchvolumen. Ein Keyword mit 500 monatlichen Suchen und 6% Conversion Rate wird ein Keyword mit 10.000 Suchen und 0,3% Conversion Rate uebertreffen. Wir haben das bei Dutzenden von Shops durchgerechnet, und die Mathematik zeigt immer in dieselbe Richtung.\n\nDie Loesung ist einfach, erfordert aber Disziplin. Hoeren Sie auf, Volumen zu jagen. Beginnen Sie mit Keywords, fuer die Sie realistisch ranken koennen, bei denen der Suchende kurz vor dem Kauf steht und bei denen die Wirtschaftlichkeit zu Ihren Margen passt.",
      },
      {
        title: "Das Revenue-First-Keyword-Framework",
        content:
          "Wir starten jedes Keyword-Recherche-Projekt in der Google Search Console, nicht in einem Keyword-Tool. Die Search Console zeigt, welche Begriffe Google bereits mit Ihrer Website verknuepft. Diese bestehenden Rankings (selbst auf Seite 3 oder 4) sind Ihr schnellster Weg zu mehr Traffic, weil Google die Relevanz Ihrer Seite bereits erkannt hat. Gleichen Sie diese Suchanfragen mit Ihren Analytics-Conversion-Daten ab. Welche Landingpages generieren tatsaechlich Umsatz? Welche bekommen Traffic, aber keine Verkaeufe? Das zeigt Ihnen, wo Sie verstaerken sollten und wo ein Umdenken noetig ist.\n\nVon dort aus gruppieren wir Keywords nach Kaufabsicht. Jemand, der \"beste kabellose Kopfhoerer unter 100 Euro\" sucht, ist dem Kauf viel naeher als jemand, der \"wie funktionieren kabellose Kopfhoerer\" eingibt. Wir bewerten jedes Keyword nach geschaetztem Umsatzpotenzial. Dabei fliessen Suchvolumen, realistische Ranking-Position, erwartete Klickrate und die Conversion Rate Ihres Shops fuer diesen Seitentyp ein. Volumen allein fuehrt in die Irre.",
        items: [
          "Exportieren Sie Ihre Top-50-Landingpages nach Umsatz aus Analytics",
          "Exportieren Sie Search-Console-Suchanfragen fuer diese Seiten",
          "Finden Sie die Luecke zwischen Ranking-Position und Suchvolumen",
          "Das sind Ihre Keyword-Ziele mit dem hoechsten ROI",
        ],
      },
      {
        title: "Keywords mit kommerzieller Suchintention finden",
        content:
          "Kommerzielle Intent-Modifikatoren sind der schnellste Filter, um Stoebernd von Kaeufern zu trennen. Woerter wie \"kaufen,\" \"beste,\" \"guenstig,\" \"vs,\" \"Test\" und \"fuer [Anwendungsfall]\" signalisieren, dass der Suchende bereits weiss, was er will, und Optionen vergleicht. \"Beste Laufschuhe fuer Plattfuesse\" konvertiert etwa 4-mal so gut wie \"Laufschuhe,\" weil der Suchende sein Beduerfnis auf ein konkretes Problem eingegrenzt hat. Er stoebert nicht. Er vergleicht.\n\nWir erstellen Modifikator-Listen spezifisch fuer jede Branche. In der Elektronik koennten das \"vs,\" \"Alternative zu,\" \"lohnt sich\" sein. In der Mode \"Outfit-Ideen,\" \"kombinieren mit,\" \"fuer kleine Groessen.\" Bei Nahrungsergaenzungsmitteln \"Nebenwirkungen,\" \"Dosierung,\" \"vs [Wettbewerber].\" Diese Modifikatoren, kombiniert mit Ihren Produktbegriffen, generieren Hunderte von Keywords, die die meisten Wettbewerber uebersehen.",
      },
      {
        title: "Keywords fuer Kategorie- und Collection-Seiten",
        content:
          "Kategorieseiten bringen mehr Umsatz als jeder andere Seitentyp im E-Commerce-SEO. Produktseiten zielen auf spezifische Long-Tail-Anfragen, aber Kategorieseiten koennen fuer Mid-Funnel-Begriffe wie \"Herren Lederstiefel,\" \"Bio-Hundefutter\" oder \"kabellose Noise-Cancelling-Kopfhoerer\" ranken. Das sind Keywords mit hohem Volumen und hoher Kaufabsicht, die konstanten Umsatz bringen. Wir haben erlebt, dass einzelne Kategorieseiten ueber 30.000 Euro pro Monat an organischem Umsatz generieren, wenn unterstuetzender Content, interne Links und strukturierte Daten zusammenspielen.\n\nDer Fehler, den die meisten Shops machen: Sie behandeln Kategorieseiten als duenne Auflistungsseiten mit nichts als einem Produktraster. Google will Content auf diesen Seiten. Eine 200-Woerter-Einleitung, die natuerlich verwandte Keywords einbindet, ein FAQ-Bereich am Ende, Filteroptionen, die indexierbare URLs fuer Unterkategorien erzeugen. All das hilft einer einzelnen Kategorieseite, fuer Hunderte verwandter Suchbegriffe zu ranken statt nur fuer einen.",
      },
      {
        title: "Long-Tail-Keywords, die wirklich konvertieren",
        content:
          "Long-Tail bedeutet Spezifitaet, nicht Wortanzahl. \"Rote Nike Air Max 90 Groesse 44\" hat fast kein messbares Suchvolumen, aber die Person, die das eingibt, ist sofort kaufbereit. Die Kaufabsicht liegt bei nahezu 100%. Sie brauchen keinen Blogartikel, um diesen Traffic abzufangen. Ihre Produktseite muss diese Attribute einfach so enthalten, dass Google sie verarbeiten kann.\n\nDie wahre Staerke von Long-Tail kommt aus der Skalierung. Wenn Sie 500 Produktseiten haben und jede 10 organische Besuche pro Monat durch spezifische Long-Tail-Anfragen bekommt, und Ihre Conversion Rate bei 5% liegt, sind das 250 Bestellungen pro Monat von Seiten, die die meisten SEO-Strategien komplett ignorieren. Wir nennen das Long-Tail-Revenue-Stacking, und es gehoert zu den am staerksten unterschaetzten Taktiken im E-Commerce. Die Arbeit steckt im Detail: korrekte Produkttitel, vollstaendige Attributdaten, einzigartige Beschreibungen und Schema-Markup.",
      },
      {
        title: "Wettbewerber-Keyword-Gap-Analyse",
        content:
          "Die Gap-Analyse zeigt Ihnen Keywords, von denen Ihre Wettbewerber profitieren, die Sie aber komplett verpassen. Exportieren Sie Ihre Top 500 organischen Keywords und machen Sie dasselbe fuer zwei bis drei direkte Wettbewerber. Filtern Sie dann nach Begriffen, fuer die sie in den Top 10 ranken und Sie ueberhaupt nicht (oder unter Position 20). Die wertvollsten Funde sind kommerzielle Keywords, bei denen Wettbewerber auf den Positionen 4 bis 10 stehen, denn diese Positionen sind mit gezieltem Einsatz erreichbar.\n\nTools wie Ahrefs Content Gap oder Semrush Keyword Gap machen diesen Prozess schnell. Wir fuehren diese Analyse in der Regel quartalsweise durch, weil sich Rankings verschieben. Neue Konkurrenten treten auf, alte verlieren Rankings, und saisonale Begriffe wechseln. Der Gap-Report hilft auch bei der Priorisierung Ihres Content-Kalenders, weil Sie genau wissen, welche Seiten Sie zuerst erstellen oder verbessern sollten.",
        items: [
          "Exportieren Sie Ihre Top 500 organischen Keywords",
          "Exportieren Sie die Top 500 organischen Keywords der Wettbewerber",
          "Filtern Sie nach Keywords, fuer die sie in den Top 10 ranken und Sie nicht",
          "Priorisieren Sie nach Suchvolumen und kommerzieller Suchintention",
        ],
      },
      {
        title: "Ihre Keyword-Map organisieren",
        content:
          "Jede Seite Ihrer Website braucht ein primaeres Keyword und zwei bis vier sekundaere Keywords. Wir erstellen eine Tabelle, die jede URL ihren zugewiesenen Keywords, dem Suchvolumen, der aktuellen Ranking-Position und der Zielposition zuordnet. Das verhindert Keyword-Kannibalisierung: wenn zwei oder mehr Seiten Ihrer Website um denselben Begriff konkurrieren und dadurch die Autoritaet aufteilen, sodass keine richtig rankt.\n\nPruefen Sie bestehende Kannibalisierung in der Google Search Console, indem Sie nach einem Keyword filtern und schauen, welche URLs erscheinen. Wenn zwei oder mehr URLs fuer dieselbe Suchanfrage abwechselnd in den Ergebnissen auftauchen, ist das Kannibalisierung. Die Loesung besteht meist darin, Content auf einer Seite zusammenzufuehren, einen Canonical-Tag zu setzen oder das Keyword-Targeting anzupassen, damit jede Seite einen eigenen Fokus hat. Ihre Keyword-Map braucht regelmaessige Pflege. Aktualisieren Sie sie monatlich, wenn sich Rankings aendern und neue Chancen auftun.",
      },
    ],
    navLabels: {
      previous: "Zurueck",
      next: "Weiter",
      resourceLibrary: "Die vollstaendige Ressourcenbibliothek entdecken?",
      browseAll: "Alle Ressourcen durchstoebern",
      needHelp: "Hilfe bei der Keyword-Recherche benoetigt?",
      getInTouch: "Kontakt aufnehmen",
    },
  },
  fr: {
    badge: "Strategie de mots-cles et de contenu",
    heading: "Recherche de mots-cles e-commerce",
    intro:
      "La plupart des marques e-commerce abordent la recherche de mots-cles a l'envers. Elles partent de ce qu'elles vendent au lieu de ce que les gens recherchent. Nous avons audite plus de 200 boutiques, et la meme erreur apparait dans environ 80% des cas : des pages produit optimisees pour des termes que personne ne tape dans Google.",
    sections: [
      {
        title: "Pourquoi la plupart des recherches de mots-cles e-commerce echouent",
        content:
          "Le schema que nous observons sans cesse : les boutiques ciblent leurs propres termes de marque ou des termes generiques impossiblement larges. Une marque de mode qui cible \"robes\" (110 000 recherches mensuelles, difficulte de mot-cle 90+) n'a quasiment aucune chance d'atteindre la premiere page. En revanche, \"robe portefeuille midi pour invitee mariage\" genere 1 900 recherches par mois avec une difficulte de 12. Ce deuxieme terme est atteignable en quelques semaines, pas en annees.\n\nLe revenu par mot-cle compte plus que le volume brut. Un mot-cle avec 500 recherches mensuelles et un taux de conversion de 6% surpassera un mot-cle avec 10 000 recherches et 0,3% de conversion. Nous avons fait les calculs sur des dizaines de boutiques, et les chiffres pointent toujours dans la meme direction.\n\nLa solution est simple mais demande de la discipline. Arretez de courir apres le volume. Commencez par les mots-cles ou vous pouvez reellement vous positionner, ou le chercheur est proche de l'achat, et ou l'economie correspond a vos marges.",
      },
      {
        title: "Le framework mots-cles oriente revenu",
        content:
          "Nous commencons chaque projet de recherche de mots-cles dans la Google Search Console, pas dans un outil de mots-cles. La Search Console montre ce que Google associe deja a votre site. Ces positionnements existants (meme en page 3 ou 4) sont votre chemin le plus rapide vers du trafic, car Google a deja determine la pertinence de votre site. Croisez ces requetes avec vos donnees de conversion Analytics. Quelles pages generent reellement du chiffre d'affaires ? Lesquelles recoivent du trafic mais pas de ventes ? Cela vous indique ou redoubler d'efforts et ou repenser votre approche.\n\nA partir de la, regroupez les mots-cles par intention d'achat. Quelqu'un qui cherche \"meilleurs ecouteurs sans fil moins de 100 euros\" est bien plus proche de l'achat que quelqu'un qui cherche \"comment fonctionnent les ecouteurs sans fil.\" Nous evaluons chaque mot-cle selon son potentiel de revenu estime, qui integre le volume de recherche, la position de classement realiste, le taux de clic attendu et le taux de conversion de votre boutique pour ce type de page. Le volume seul est trompeur.",
        items: [
          "Extrayez vos 50 meilleures pages par revenu depuis Analytics",
          "Exportez les requetes Search Console pour ces pages",
          "Identifiez l'ecart entre position de classement et volume de recherche",
          "Ce sont vos cibles de mots-cles au meilleur ROI",
        ],
      },
      {
        title: "Trouver les mots-cles a intention commerciale",
        content:
          "Les modificateurs d'intention commerciale sont le filtre le plus rapide pour separer les visiteurs des acheteurs. Des mots comme \"acheter,\" \"meilleur,\" \"pas cher,\" \"vs,\" \"avis\" et \"pour [usage]\" indiquent que la personne sait deja ce qu'elle veut et compare ses options. \"Meilleures chaussures de running pour pieds plats\" convertit environ 4 fois mieux que \"chaussures de running\" parce que le chercheur a precise son besoin autour d'un probleme concret. Il ne flane pas. Il compare.\n\nNous construisons des listes de modificateurs specifiques a chaque secteur. En electronique, ce sera \"vs,\" \"alternative a,\" \"ca vaut le coup.\" En mode, \"idees de tenue,\" \"associer avec,\" \"pour petite taille.\" En complements alimentaires, \"effets secondaires,\" \"posologie,\" \"vs [concurrent].\" Ces modificateurs, combines a vos termes produit, generent des centaines de mots-cles ciblables que la plupart des concurrents ignorent.",
      },
      {
        title: "Mots-cles pour les pages categorie et collection",
        content:
          "Les pages categorie generent plus de chiffre d'affaires que tout autre type de page en SEO e-commerce. Les pages produit ciblent des requetes long-tail specifiques, mais les pages categorie peuvent se positionner sur des termes mid-funnel comme \"bottes en cuir homme,\" \"croquettes bio pour chien\" ou \"casque sans fil a reduction de bruit.\" Ce sont des mots-cles a fort volume et forte intention d'achat qui generent un revenu regulier. Nous avons vu des pages categorie individuelles generer plus de 30 000 euros par mois en revenu organique quand le contenu, les liens internes et les donnees structurees fonctionnent ensemble.\n\nL'erreur que font la plupart des boutiques : traiter les pages categorie comme des pages maigres avec rien d'autre qu'une grille de produits. Google veut du contenu sur ces pages. Une introduction de 200 mots qui integre naturellement des mots-cles associes, une section FAQ en bas, des options de filtre qui generent des URL indexables pour les sous-categories. Tout cela aide une seule page categorie a se positionner sur des centaines de termes de recherche associes au lieu d'un seul.",
      },
      {
        title: "Mots-cles longue traine qui convertissent vraiment",
        content:
          "La longue traine, c'est une question de specificite, pas de longueur. \"Nike Air Max 90 rouge taille 44\" n'a quasiment aucun volume de recherche mesurable, mais la personne qui tape ca est prete a acheter immediatement. Son intention d'achat est proche de 100%. Vous n'avez pas besoin d'ecrire un article de blog pour capter ce trafic. Votre page produit doit simplement inclure ces attributs d'une maniere que Google peut analyser.\n\nLa vraie puissance de la longue traine vient de l'accumulation. Si vous avez 500 pages produit et que chacune attire 10 visites organiques par mois via des requetes long-tail specifiques, et que votre taux de conversion est de 5%, cela represente 250 commandes par mois provenant de pages que la plupart des strategies SEO ignorent completement. Nous appelons ca le \"long-tail revenue stacking,\" et c'est l'une des tactiques les plus sous-utilisees en e-commerce. Le travail est dans les details : des titres produit corrects, des donnees d'attributs completes, des descriptions uniques et du balisage schema.",
      },
      {
        title: "Analyse de gap mots-cles concurrentiels",
        content:
          "L'analyse de gap, c'est comme ca qu'on trouve les mots-cles dont vos concurrents profitent et que vous ratez completement. Exportez vos 500 meilleurs mots-cles organiques et faites pareil pour deux ou trois concurrents directs. Filtrez ensuite les termes ou ils se positionnent dans le top 10 et ou vous n'apparaissez pas du tout (ou au-dela de la position 20). Les trouvailles les plus precieuses sont les mots-cles commerciaux ou les concurrents sont en positions 4 a 10, car ces positions sont accessibles avec un effort cible.\n\nDes outils comme Ahrefs Content Gap ou Semrush Keyword Gap rendent ce processus rapide. Nous realisons cette analyse en general chaque trimestre, car les classements bougent. De nouveaux concurrents apparaissent, d'autres perdent des positions, et les termes saisonniers entrent et sortent de la pertinence. Le rapport de gap aide aussi a prioriser votre calendrier editorial, puisque vous saurez exactement quelles pages creer ou ameliorer en premier.",
        items: [
          "Exportez vos 500 meilleurs mots-cles organiques",
          "Exportez les 500 meilleurs mots-cles organiques des concurrents",
          "Filtrez les mots-cles ou ils sont en top 10 et pas vous",
          "Priorisez par volume de recherche et intention commerciale",
        ],
      },
      {
        title: "Organiser votre carte de mots-cles",
        content:
          "Chaque page de votre site a besoin d'un mot-cle principal et de deux a quatre mots-cles secondaires. Nous creons un tableur qui associe chaque URL a ses mots-cles assignes, au volume de recherche, a la position actuelle et a la position cible. Cela previent la cannibalisation de mots-cles : quand deux pages ou plus de votre site rivalisent pour le meme terme et finissent par diviser l'autorite, si bien qu'aucune ne se positionne correctement.\n\nVerifiez la cannibalisation existante dans la Google Search Console en filtrant par mot-cle et en regardant quelles URL apparaissent. Si vous voyez deux URL ou plus alterner dans les resultats pour la meme requete, c'est de la cannibalisation. La solution consiste generalement a consolider le contenu sur une seule page, ajouter une balise canonical, ou ajuster le ciblage pour que chaque page ait un focus distinct. Votre carte de mots-cles a besoin d'un entretien regulier. Mettez-la a jour chaque mois au fur et a mesure que les classements evoluent et que de nouvelles opportunites se presentent.",
      },
    ],
    navLabels: {
      previous: "Precedent",
      next: "Suivant",
      resourceLibrary: "Envie d'explorer toute la bibliotheque de ressources ?",
      browseAll: "Parcourir toutes les ressources",
      needHelp: "Besoin d'aide pour la recherche de mots-cles ?",
      getInTouch: "Contactez-nous",
    },
  },
  es: {
    badge: "Estrategia de palabras clave y contenido",
    heading: "Investigacion de palabras clave para e-commerce",
    intro:
      "La mayoria de las marcas e-commerce enfocan la investigacion de palabras clave al reves. Empiezan por lo que venden en lugar de por lo que la gente busca. Hemos auditado mas de 200 tiendas, y el mismo error aparece en aproximadamente el 80% de ellas: optimizar paginas de producto para terminos que nadie escribe en Google.",
    sections: [
      {
        title: "Por que falla la mayoria de investigaciones de palabras clave en e-commerce",
        content:
          "El patron que vemos una y otra vez es el de tiendas que apuntan a sus propios terminos de marca o a terminos genericos imposiblemente amplios. Una marca de moda que apunta a \"vestidos\" (110.000 busquedas mensuales, dificultad de palabra clave 90+) tiene practicamente cero posibilidades de posicionarse en la primera pagina. Mientras tanto, \"vestido midi cruzado para invitada de boda\" tiene 1.900 busquedas al mes con una dificultad de 12. Ese segundo termino es alcanzable en semanas, no en anos.\n\nEl ingreso por palabra clave importa mas que el volumen bruto. Una palabra clave con 500 busquedas mensuales y una tasa de conversion del 6% superara a una palabra clave con 10.000 busquedas y un 0,3% de conversion. Hemos calculado los numeros en decenas de tiendas, y las matematicas siempre apuntan en la misma direccion.\n\nLa solucion es sencilla pero requiere disciplina. Deja de perseguir volumen. Empieza con las palabras clave donde realmente puedes posicionarte, donde el buscador esta cerca de comprar y donde la economia tiene sentido para tus margenes.",
      },
      {
        title: "El framework de palabras clave orientado a ingresos",
        content:
          "Empezamos cada proyecto de investigacion de palabras clave en Google Search Console, no en una herramienta de keywords. Search Console muestra lo que Google ya asocia con tu sitio. Esos posicionamientos existentes (incluso en pagina 3 o 4) son tu camino mas rapido al trafico porque Google ya ha decidido que tu sitio es relevante. Cruza esas consultas con tus datos de conversion en Analytics. Cuales paginas generan realmente ingresos? Cuales reciben trafico pero no ventas? Esto te dice donde reforzar y donde replantear tu enfoque.\n\nA partir de ahi, agrupa las palabras clave por intencion de compra. Alguien que busca \"mejores auriculares inalambricos por menos de 100 euros\" esta mucho mas cerca de comprar que alguien que busca \"como funcionan los auriculares inalambricos.\" Evaluamos cada palabra clave por su potencial de ingresos estimado, que tiene en cuenta el volumen de busqueda, la posicion de ranking realista, la tasa de clic esperada y la tasa de conversion de tu tienda para ese tipo de pagina. El volumen solo es enganoso.",
        items: [
          "Extrae tus 50 mejores landing pages por ingresos desde Analytics",
          "Exporta las consultas de Search Console para esas paginas",
          "Encuentra la brecha entre posicion de ranking y volumen de busqueda",
          "Esos son tus objetivos de palabras clave con mayor ROI",
        ],
      },
      {
        title: "Encontrar palabras clave con intencion comercial",
        content:
          "Los modificadores de intencion comercial son el filtro mas rapido para separar curiosos de compradores. Palabras como \"comprar,\" \"mejor,\" \"barato,\" \"vs,\" \"opinion\" y \"para [uso]\" indican que la persona ya sabe lo que quiere y esta evaluando opciones. \"Mejores zapatillas de running para pies planos\" convierte aproximadamente 4 veces mejor que \"zapatillas de running\" porque el buscador ha concretado su necesidad en un problema especifico. No esta navegando. Esta comparando.\n\nConstruimos listas de modificadores especificas para cada sector. En electronica podria ser \"vs,\" \"alternativa a,\" \"merece la pena.\" En moda, \"ideas de outfit,\" \"combinar con,\" \"para talla pequena.\" En suplementos, \"efectos secundarios,\" \"dosis,\" \"vs [competidor].\" Estos modificadores, combinados con tus terminos de producto, generan cientos de palabras clave atacables que la mayoria de competidores pasan por alto.",
      },
      {
        title: "Palabras clave para paginas de categoria y coleccion",
        content:
          "Las paginas de categoria generan mas ingresos que cualquier otro tipo de pagina en SEO e-commerce. Las paginas de producto apuntan a consultas long-tail especificas, pero las paginas de categoria pueden posicionarse para terminos mid-funnel como \"botas de cuero para hombre,\" \"comida organica para perros\" o \"auriculares inalambricos con cancelacion de ruido.\" Son palabras clave de alto volumen y alta intencion de compra que generan ingresos de forma estable. Hemos visto paginas de categoria individuales generar mas de 30.000 euros al mes en ingresos organicos cuando el contenido de apoyo, los enlaces internos y los datos estructurados trabajan juntos.\n\nEl error que cometen la mayoria de tiendas es tratar las paginas de categoria como paginas finas con nada mas que una cuadricula de productos. Google quiere contenido en estas paginas. Una introduccion de 200 palabras que incluya naturalmente palabras clave relacionadas, una seccion de preguntas frecuentes al final, opciones de filtro que generen URLs indexables para subcategorias. Todo esto ayuda a que una sola pagina de categoria se posicione para cientos de terminos de busqueda relacionados en lugar de uno solo.",
      },
      {
        title: "Palabras clave long-tail que realmente convierten",
        content:
          "Long-tail es cuestion de especificidad, no de longitud. \"Nike Air Max 90 rojas talla 44\" tiene casi cero volumen de busqueda medible, pero la persona que escribe eso esta lista para comprar ahora mismo. Su intencion de compra roza el 100%. No necesitas escribir un articulo de blog para captar ese trafico. Tu pagina de producto solo necesita incluir esos atributos de una forma que Google pueda interpretar.\n\nEl verdadero poder del long-tail viene de la acumulacion. Si tienes 500 paginas de producto y cada una atrae 10 visitas organicas al mes desde consultas long-tail especificas, y tu tasa de conversion es del 5%, eso son 250 pedidos al mes de paginas que la mayoria de estrategias SEO ignoran por completo. Nosotros lo llamamos \"long-tail revenue stacking,\" y es una de las tacticas mas infrautilizadas en e-commerce. El trabajo esta en los detalles: titulos de producto correctos, datos de atributos completos, descripciones unicas y marcado schema.",
      },
      {
        title: "Analisis de gap de palabras clave de la competencia",
        content:
          "El analisis de gap es como encuentras las palabras clave de las que tus competidores se benefician y tu te estas perdiendo por completo. Exporta tus 500 mejores palabras clave organicas y haz lo mismo con dos o tres competidores directos. Luego filtra por terminos donde ellos estan en el top 10 y tu no apareces (o estas por debajo de la posicion 20). Los hallazgos mas valiosos son palabras clave comerciales donde los competidores estan en las posiciones 4 a 10, porque esas posiciones son superables con un esfuerzo enfocado.\n\nHerramientas como Ahrefs Content Gap o Semrush Keyword Gap hacen este proceso rapido. Normalmente realizamos este analisis cada trimestre porque los rankings cambian. Nuevos competidores entran, otros pierden posiciones, y los terminos estacionales rotan dentro y fuera de la relevancia. El informe de gap tambien ayuda a priorizar tu calendario de contenido, ya que sabras exactamente que paginas crear o mejorar primero.",
        items: [
          "Exporta tus 500 mejores palabras clave organicas",
          "Exporta las 500 mejores palabras clave organicas de los competidores",
          "Filtra por palabras clave donde ellos estan en top 10 y tu no",
          "Prioriza por volumen de busqueda e intencion comercial",
        ],
      },
      {
        title: "Organizar tu mapa de palabras clave",
        content:
          "Cada pagina de tu sitio necesita una palabra clave principal y de dos a cuatro palabras clave secundarias. Creamos una hoja de calculo que asocia cada URL con sus palabras clave asignadas, volumen de busqueda, posicion actual y posicion objetivo. Esto previene la canibalizacion de palabras clave: cuando dos o mas paginas de tu sitio compiten por el mismo termino y terminan dividiendo la autoridad, de modo que ninguna se posiciona bien.\n\nComprueba la canibalizacion existente en Google Search Console filtrando por una palabra clave y mirando que URLs aparecen. Si ves dos o mas URLs alternandose en los resultados para la misma consulta, eso es canibalizacion. La solucion suele ser consolidar el contenido en una pagina, anadir una etiqueta canonical o ajustar el keyword targeting para que cada pagina tenga un foco diferente. Tu mapa de palabras clave necesita mantenimiento regular. Actualizalo mensualmente a medida que los rankings cambian y aparecen nuevas oportunidades.",
      },
    ],
    navLabels: {
      previous: "Anterior",
      next: "Siguiente",
      resourceLibrary: "Quieres acceder a toda la biblioteca de recursos?",
      browseAll: "Explorar todos los recursos",
      needHelp: "Necesitas ayuda con la investigacion de palabras clave?",
      getInTouch: "Contactanos",
    },
  },
  it: {
    badge: "Strategia di keyword e contenuti",
    heading: "Ricerca keyword per e-commerce",
    intro:
      "La maggior parte dei brand e-commerce affronta la ricerca keyword al contrario. Partono da cio che vendono invece che da cio che le persone cercano. Abbiamo analizzato oltre 200 negozi online, e lo stesso errore compare in circa l'80% dei casi: pagine prodotto ottimizzate per termini che nessuno digita su Google.",
    sections: [
      {
        title: "Perche la maggior parte delle ricerche keyword e-commerce fallisce",
        content:
          "Lo schema che vediamo ripetersi continuamente: i negozi puntano sui propri termini di brand o su termini generici impossibilmente ampi. Un brand di moda che punta su \"vestiti\" (110.000 ricerche mensili, keyword difficulty 90+) ha praticamente zero possibilita di posizionarsi in prima pagina. Intanto, \"abito a portafoglio midi per invitata matrimonio\" genera 1.900 ricerche al mese con una keyword difficulty di 12. Quel secondo termine si puo conquistare in settimane, non in anni.\n\nIl fatturato per keyword conta piu del volume grezzo. Una keyword con 500 ricerche mensili e un tasso di conversione del 6% superera una keyword con 10.000 ricerche e uno 0,3% di conversione. Abbiamo verificato i numeri su decine di negozi, e la matematica punta sempre nella stessa direzione.\n\nLa soluzione e semplice ma richiede disciplina. Smetti di inseguire il volume. Parti dalle keyword per cui puoi realmente posizionarti, dove chi cerca e vicino all'acquisto e dove l'economia ha senso per i tuoi margini.",
      },
      {
        title: "Il framework keyword orientato al fatturato",
        content:
          "Iniziamo ogni progetto di ricerca keyword dentro Google Search Console, non dentro un tool di keyword. La Search Console mostra cosa Google associa gia al tuo sito. Quei posizionamenti esistenti (anche se sono a pagina 3 o 4) sono il percorso piu veloce verso il traffico perche Google ha gia stabilito che il tuo sito e pertinente. Incrocia quelle query con i dati di conversione del tuo analytics. Quali landing page generano effettivamente fatturato? Quali ricevono traffico ma nessuna vendita? Questo ti dice dove raddoppiare gli sforzi e dove ripensare l'approccio.\n\nDa li, raggruppa le keyword per intenzione d'acquisto. Chi cerca \"migliori cuffie wireless sotto i 100 euro\" e molto piu vicino all'acquisto di chi cerca \"come funzionano le cuffie wireless.\" Valutiamo ogni keyword in base al potenziale di fatturato stimato, che considera il volume di ricerca, la posizione di ranking realistica, il tasso di clic atteso e il tasso di conversione del tuo negozio per quel tipo di pagina. Il volume da solo e fuorviante.",
        items: [
          "Estrai le tue 50 migliori landing page per fatturato da analytics",
          "Esporta le query di Search Console per quelle pagine",
          "Trova il divario tra posizione di ranking e volume di ricerca",
          "Queste sono le tue keyword target con il ROI piu alto",
        ],
      },
      {
        title: "Trovare keyword con intento commerciale",
        content:
          "I modificatori di intento commerciale sono il filtro piu rapido per separare chi naviga da chi compra. Parole come \"comprare,\" \"migliore,\" \"economico,\" \"vs,\" \"recensione\" e \"per [caso d'uso]\" segnalano che chi cerca sa gia cosa vuole e sta valutando le opzioni. \"Migliori scarpe da running per piedi piatti\" converte circa 4 volte meglio di \"scarpe da running\" perche chi cerca ha ristretto il bisogno a un problema specifico. Non sta curiosando. Sta confrontando.\n\nCostruiamo liste di modificatori specifiche per ogni settore. Nell'elettronica potrebbero essere \"vs,\" \"alternativa a,\" \"vale la pena.\" Nella moda, \"idee outfit,\" \"abbinare con,\" \"per taglie piccole.\" Negli integratori, \"effetti collaterali,\" \"dosaggio,\" \"vs [concorrente].\" Questi modificatori, combinati con i tuoi termini prodotto, generano centinaia di keyword attaccabili che la maggior parte dei concorrenti ignora.",
      },
      {
        title: "Keyword per pagine categoria e collezione",
        content:
          "Le pagine categoria generano piu fatturato di qualsiasi altro tipo di pagina nella SEO e-commerce. Le pagine prodotto puntano su query long-tail specifiche, ma le pagine categoria possono posizionarsi per termini mid-funnel come \"stivali in pelle uomo,\" \"cibo biologico per cani\" o \"cuffie wireless con cancellazione del rumore.\" Sono keyword ad alto volume e alta intenzione d'acquisto che generano fatturato in modo stabile. Abbiamo visto singole pagine categoria generare oltre 30.000 euro al mese di fatturato organico quando contenuti di supporto, link interni e dati strutturati lavorano insieme.\n\nL'errore che fa la maggior parte dei negozi e trattare le pagine categoria come pagine sottili con nient'altro che una griglia di prodotti. Google vuole contenuto su queste pagine. Un'introduzione di 200 parole che includa naturalmente keyword correlate, una sezione FAQ in fondo, opzioni di filtro che generano URL indicizzabili per le sottocategorie. Tutto questo aiuta una singola pagina categoria a posizionarsi per centinaia di termini di ricerca correlati invece di uno solo.",
      },
      {
        title: "Keyword long-tail che convertono davvero",
        content:
          "Long-tail riguarda la specificita, non la lunghezza. \"Nike Air Max 90 rosse taglia 44\" ha quasi zero volume di ricerca misurabile, ma la persona che digita questo e pronta a comprare adesso. L'intenzione d'acquisto e vicina al 100%. Non serve scrivere un articolo di blog per catturare questo traffico. La tua pagina prodotto deve semplicemente includere quegli attributi in un modo che Google possa interpretare.\n\nIl vero potere del long-tail viene dall'accumulo. Se hai 500 pagine prodotto e ognuna attira 10 visite organiche al mese da query long-tail specifiche, e il tuo tasso di conversione e del 5%, sono 250 ordini al mese da pagine che la maggior parte delle strategie SEO ignora completamente. Lo chiamiamo \"long-tail revenue stacking,\" ed e una delle tattiche piu sottovalutate nell'e-commerce. Il lavoro sta nei dettagli: titoli prodotto corretti, dati attributo completi, descrizioni uniche e markup schema.",
      },
      {
        title: "Analisi gap keyword dei concorrenti",
        content:
          "L'analisi gap e il modo in cui trovi le keyword da cui i tuoi concorrenti traggono profitto e che tu stai perdendo completamente. Esporta le tue 500 migliori keyword organiche e fai lo stesso per due o tre concorrenti diretti. Poi filtra per termini dove loro sono in top 10 e tu non appari affatto (o sei oltre la posizione 20). Le scoperte piu preziose sono keyword commerciali dove i concorrenti sono in posizione 4-10, perche quelle posizioni sono battibili con uno sforzo mirato.\n\nStrumenti come Ahrefs Content Gap o Semrush Keyword Gap rendono questo processo veloce. Di solito facciamo questa analisi ogni trimestre perche i posizionamenti cambiano. Nuovi concorrenti entrano, altri perdono posizionamenti, e i termini stagionali ruotano dentro e fuori dalla pertinenza. Il report gap aiuta anche a dare priorita al tuo calendario editoriale, dato che saprai esattamente quali pagine creare o migliorare per prime.",
        items: [
          "Esporta le tue 500 migliori keyword organiche",
          "Esporta le 500 migliori keyword organiche dei concorrenti",
          "Filtra per keyword dove loro sono in top 10 e tu no",
          "Dai priorita per volume di ricerca e intento commerciale",
        ],
      },
      {
        title: "Organizzare la tua mappa keyword",
        content:
          "Ogni pagina del tuo sito ha bisogno di una keyword primaria e da due a quattro keyword secondarie. Creiamo un foglio di calcolo che mappa ogni URL alle keyword assegnate, al volume di ricerca, alla posizione attuale e alla posizione obiettivo. Questo previene la cannibalizzazione delle keyword: quando due o piu pagine del tuo sito competono per lo stesso termine e finiscono per dividere l'autorita, cosi che nessuna si posiziona bene.\n\nControlla la cannibalizzazione esistente nella Google Search Console filtrando per una keyword e guardando quali URL compaiono. Se vedi due o piu URL che si alternano nei risultati per la stessa query, quella e cannibalizzazione. La soluzione di solito consiste nel consolidare il contenuto in una pagina, aggiungere un tag canonical, o regolare il targeting keyword in modo che ogni pagina abbia un focus distinto. La tua mappa keyword richiede manutenzione regolare. Aggiornala mensilmente man mano che i posizionamenti cambiano e nuove opportunita emergono.",
      },
    ],
    navLabels: {
      previous: "Precedente",
      next: "Successivo",
      resourceLibrary: "Vuoi consultare l'intera libreria di risorse?",
      browseAll: "Esplora tutte le risorse",
      needHelp: "Hai bisogno di aiuto con la ricerca keyword?",
      getInTouch: "Contattaci",
    },
  },
  nl: {
    badge: "Zoekwoord- en contentstrategie",
    heading: "Zoekwoordonderzoek voor e-commerce",
    intro:
      "De meeste e-commercemerken pakken zoekwoordonderzoek verkeerd aan. Ze beginnen bij wat ze verkopen in plaats van wat mensen zoeken. We hebben meer dan 200 webshops geanalyseerd, en dezelfde fout duikt op bij ongeveer 80% daarvan: productpagina's optimaliseren voor termen die niemand in Google typt.",
    sections: [
      {
        title: "Waarom de meeste e-commerce zoekwoordonderzoeken mislukken",
        content:
          "Het patroon dat we keer op keer zien: shops richten zich op hun eigen merktermen of onmogelijk brede koepeltermen. Een modemerk dat mikt op \"jurken\" (110.000 maandelijkse zoekopdrachten, keyword difficulty 90+) heeft vrijwel geen kans om op pagina een te staan. Ondertussen trekt \"midi-wikkeljurk voor bruiloftsgast\" 1.900 zoekopdrachten per maand met een keyword difficulty van 12. Die tweede term is haalbaar binnen weken, niet jaren.\n\nOmzet per zoekwoord telt meer dan ruw zoekvolume. Een zoekwoord met 500 maandelijkse zoekopdrachten en een conversiepercentage van 6% zal beter presteren dan een zoekwoord met 10.000 zoekopdrachten en 0,3% conversie. We hebben de berekeningen gemaakt voor tientallen shops, en de uitkomst wijst altijd dezelfde kant op.\n\nDe oplossing is simpel maar vereist discipline. Stop met het najagen van volume. Begin met zoekwoorden waarvoor je daadwerkelijk kunt ranken, waar de zoeker dicht bij een aankoop zit, en waar de cijfers kloppen voor je marges.",
      },
      {
        title: "Het omzetgerichte zoekwoordframework",
        content:
          "We beginnen elk zoekwoordonderzoek in Google Search Console, niet in een zoekwoordtool. Search Console laat zien wat Google al met je site associeert. Die bestaande rankings (zelfs op pagina 3 of 4) zijn je snelste weg naar verkeer, omdat Google al heeft besloten dat je site relevant is. Kruis die zoekopdrachten met je conversiegegevens uit analytics. Welke landingspagina's genereren daadwerkelijk omzet? Welke krijgen verkeer maar geen verkopen? Dit vertelt je waar je moet verdubbelen en waar je je aanpak moet heroverwegen.\n\nVan daaruit groepeer je zoekwoorden op koopintentie. Iemand die zoekt op \"beste draadloze oordopjes onder 100 euro\" staat veel dichter bij een aankoop dan iemand die \"hoe werken draadloze oordopjes\" intypt. We scoren elk zoekwoord op geschat omzetpotentieel, waarbij zoekvolume, realistische rankingpositie, verwacht klikpercentage en het conversiepercentage van je shop voor dat paginatype worden meegenomen. Volume alleen is misleidend.",
        items: [
          "Haal je top 50 landingspagina's op omzet uit analytics",
          "Exporteer Search Console-zoekopdrachten voor die pagina's",
          "Vind het gat tussen rankingpositie en zoekvolume",
          "Dit zijn je zoekwoordtargets met het hoogste rendement",
        ],
      },
      {
        title: "Zoekwoorden met commerciele intentie vinden",
        content:
          "Commerciele intentie-modificatoren zijn het snelste filter om browsers van kopers te scheiden. Woorden als \"kopen,\" \"beste,\" \"goedkoop,\" \"vs,\" \"review\" en \"voor [toepassing]\" geven aan dat de zoeker al weet wat hij wil en opties vergelijkt. \"Beste hardloopschoenen voor platvoeten\" converteert ongeveer 4 keer zo goed als \"hardloopschoenen\" omdat de zoeker zijn behoefte heeft verfijnd tot een specifiek probleem. Hij surft niet rond. Hij vergelijkt.\n\nWe stellen modificatorlijsten samen specifiek per branche. In elektronica kan dat zijn \"vs,\" \"alternatief voor,\" \"is het waard.\" In mode \"outfitideeeen,\" \"combineren met,\" \"voor kleine maten.\" Bij supplementen \"bijwerkingen,\" \"dosering,\" \"vs [concurrent].\" Deze modificatoren, gecombineerd met je producttermen, genereren honderden bruikbare zoekwoorden die de meeste concurrenten over het hoofd zien.",
      },
      {
        title: "Zoekwoorden voor categorie- en collectiepagina's",
        content:
          "Categoriepagina's leveren meer omzet op dan elk ander paginatype in e-commerce SEO. Productpagina's richten zich op specifieke long-tail zoekopdrachten, maar categoriepagina's kunnen ranken op mid-funnel termen zoals \"leren herenlaarzen,\" \"biologisch hondenvoer\" of \"draadloze noise-cancelling koptelefoons.\" Dit zijn zoekwoorden met hoog volume en hoge koopintentie die stabiele omzet opleveren. We hebben gezien dat individuele categoriepagina's meer dan 30.000 euro per maand aan organische omzet genereren wanneer ondersteunende content, interne links en gestructureerde data samenwerken.\n\nDe fout die de meeste shops maken is categoriepagina's behandelen als dunne overzichtspagina's met niets anders dan een productraster. Google wil content op deze pagina's. Een introductie van 200 woorden die op een natuurlijke manier gerelateerde zoekwoorden bevat, een FAQ-sectie onderaan, filteropties die indexeerbare URL's genereren voor subcategorieen. Dit alles helpt een enkele categoriepagina om te ranken voor honderden gerelateerde zoektermen in plaats van slechts een.",
      },
      {
        title: "Long-tail zoekwoorden die echt converteren",
        content:
          "Long-tail gaat over specificiteit, niet over woordlengte. \"Rode Nike Air Max 90 maat 44\" heeft bijna geen meetbaar zoekvolume, maar de persoon die dit intypt is nu klaar om te kopen. De koopintentie ligt dicht bij 100%. Je hoeft geen blogartikel te schrijven om dit verkeer op te vangen. Je productpagina moet simpelweg die kenmerken bevatten op een manier die Google kan verwerken.\n\nDe echte kracht van long-tail komt van stapeling. Als je 500 productpagina's hebt en elke pagina trekt 10 organische bezoeken per maand aan via specifieke long-tail zoekopdrachten, en je conversiepercentage is 5%, dan zijn dat 250 bestellingen per maand van pagina's die de meeste SEO-strategieen volledig negeren. Wij noemen dit long-tail revenue stacking, en het is een van de meest onderbenutte tactieken in e-commerce. Het werk zit in de details: correcte producttitels, volledige attribuutdata, unieke beschrijvingen en schema-markup.",
      },
      {
        title: "Zoekwoord-gap-analyse van concurrenten",
        content:
          "Gap-analyse is hoe je zoekwoorden vindt waar je concurrenten van profiteren en die jij helemaal mist. Exporteer je top 500 organische zoekwoorden en doe hetzelfde voor twee tot drie directe concurrenten. Filter vervolgens op termen waar zij in de top 10 staan en jij helemaal niet (of onder positie 20). De meest waardevolle vondsten zijn commerciele zoekwoorden waar concurrenten op positie 4 tot 10 staan, want die posities zijn te verslaan met gerichte inspanning.\n\nTools zoals Ahrefs Content Gap of Semrush Keyword Gap maken dit proces snel. We voeren deze analyse doorgaans elk kwartaal uit, omdat rankings verschuiven. Nieuwe concurrenten verschijnen, oude verliezen rankings, en seizoensgebonden termen wisselen van relevantie. Het gap-rapport helpt ook bij het prioriteren van je contentkalender, omdat je precies weet welke pagina's je eerst moet maken of verbeteren.",
        items: [
          "Exporteer je top 500 organische zoekwoorden",
          "Exporteer de top 500 organische zoekwoorden van concurrenten",
          "Filter op zoekwoorden waar zij in de top 10 staan en jij niet",
          "Prioriteer op zoekvolume en commerciele intentie",
        ],
      },
      {
        title: "Je zoekwoordkaart organiseren",
        content:
          "Elke pagina op je site heeft een primair zoekwoord en twee tot vier secundaire zoekwoorden nodig. We maken een spreadsheet die elke URL koppelt aan de toegewezen zoekwoorden, het zoekvolume, de huidige rankingpositie en de doelpositie. Dit voorkomt zoekwoordkannibalisatie: wanneer twee of meer pagina's op je site concurreren om dezelfde term en uiteindelijk de autoriteit verdelen, zodat geen van beide goed rankt.\n\nControleer bestaande kannibalisatie in Google Search Console door te filteren op een zoekwoord en te kijken welke URL's verschijnen. Als je twee of meer URL's ziet die afwisselend in de resultaten opduiken voor dezelfde zoekopdracht, is dat kannibalisatie. De oplossing is meestal content samenvoegen op een pagina, een canonical tag toevoegen, of de zoekwoordtargeting aanpassen zodat elke pagina een eigen focus heeft. Je zoekwoordkaart heeft regelmatig onderhoud nodig. Werk het maandelijks bij naarmate rankings veranderen en nieuwe kansen zich voordoen.",
      },
    ],
    navLabels: {
      previous: "Vorige",
      next: "Volgende",
      resourceLibrary: "De volledige resourcebibliotheek bekijken?",
      browseAll: "Bekijk alle resources",
      needHelp: "Hulp nodig bij zoekwoordonderzoek?",
      getInTouch: "Neem contact op",
    },
  },
};
