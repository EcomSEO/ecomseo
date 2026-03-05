import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "../../components/guides/GuidePageTemplate";

export const guidesRankingChatgptT: Record<
  Locale,
  { sections: GuideSection[]; nav: GuideNav }
> = {
  en: {
    nav: {
      prev: {
        href: "/guides/topical-authority",
        category: "Advanced Ecommerce SEO",
        title: "Getting Topical Authority",
      },
      next: {
        href: "/guides/serp-domination",
        category: "Advanced Ecommerce SEO",
        title: "SERP Domination",
      },
    },
    sections: [
      {
        id: "how-ai-search-works",
        title: "How AI Search Works (and Why It's Different)",
        blocks: [
          {
            type: "p",
            text: "ChatGPT, Perplexity, and Google AI Overviews don't rank URLs the way traditional search does. They synthesize answers from multiple sources and then cite the ones they drew from. You're not competing for position 1 — you're competing to be the source the model quotes.",
          },
          {
            type: "p",
            text: "That's a fundamental shift. Keyword density doesn't get you cited. What gets you cited is being the clearest, most direct, most factual answer to a specific question in your niche. If a customer asks ChatGPT 'what's the best standing desk for tall people?' and your product page or buying guide is the most complete answer to that question, it gets pulled in.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=80",
            alt: "AI search interface showing synthesized answer with citations",
            caption: "AI search tools synthesize answers and cite sources — getting cited is the new ranking.",
          },
          {
            type: "callout",
            title: "The mental model shift",
            text: "Stop optimizing purely for 'ranking' and start optimizing for 'being quoted.' Ask yourself: if an AI needed to answer the exact question my customer is asking, would it find my page and would it trust it?",
          },
        ],
      },
      {
        id: "what-ai-models-look-for",
        title: "What AI Models Actually Look For",
        blocks: [
          {
            type: "p",
            text: "AI models are trained to recognize credible, structured, factual content. They favor pages that answer questions directly — not pages that bury the answer in three paragraphs of preamble. They also respond well to named entities: specific brand names, product names, model numbers, specifications, and prices.",
          },
          {
            type: "list",
            items: [
              "Direct answers at the top of sections — no lengthy wind-ups before getting to the point",
              "Specific data: dimensions, weights, prices, compatibility details, test results",
              "Named comparisons: 'compared to the Ergotron LX, this arm has a longer reach'",
              "Clear factual claims that can be verified — AI models avoid citing vague or hedging language",
              "Content that matches what the model has already learned is authoritative in your niche",
            ],
          },
          {
            type: "tip",
            text: "Rewrite your top product pages and buying guides so the most important answer appears in the first 50 words of each section. AI parsers read top-down and often stop before mid-page content.",
          },
          {
            type: "p",
            text: "Structure matters as much as substance. Use H2 and H3 headings that match real question formats ('Which [product] works with [use case]?'). Write in short paragraphs. Use tables for comparisons. These aren't just good UX practices — they make your content easier for a language model to parse and quote accurately.",
          },
        ],
      },
      {
        id: "practical-ai-visibility-steps",
        title: "Practical Steps to Get Cited by AI Search",
        blocks: [
          {
            type: "p",
            text: "The single most effective thing you can do right now: identify the 10-20 questions your customers actually type into ChatGPT or Perplexity about your product category. These are usually 'what is the best X for Y' or 'how do I choose between X and Z' queries. Then write dedicated content that answers each one completely.",
          },
          {
            type: "checklist",
            items: [
              "Write one page or section per specific customer question — don't try to answer five questions in one vague article",
              "Lead every answer with 1-3 sentences of direct response before any explanation",
              "Include at least one real data point (study, spec, test result) per major claim",
              "Name your competitors honestly in comparison content — AI models trust balanced takes",
              "Add a clear 'Last updated' date — AI tools weight recency",
              "Avoid passive voice and hedging phrases like 'it could be argued' or 'some experts believe'",
            ],
          },
          {
            type: "tip",
            text: "Run your own product queries in Perplexity right now. If competitors show up and you don't, open their cited pages and analyze what they do differently structurally. It's usually simpler than you expect — direct headings, clean formatting, specific claims.",
          },
        ],
      },
      {
        id: "eeat-signals",
        title: "E-E-A-T Signals: Why They Matter More for AI Citations",
        blocks: [
          {
            type: "p",
            text: "Google's AI Overviews pull from pages that score well on E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness. For ecommerce, these signals are often weak because product pages focus on selling rather than demonstrating knowledge. That's fixable.",
          },
          {
            type: "list",
            items: [
              "Add author bylines to blog posts and buying guides — include a brief credential ('10 years in outdoor gear retail')",
              "Build a detailed 'About Us' page that explains your team's actual expertise in the product category",
              "Get consistent brand mentions across third-party platforms: Trustpilot, G2, industry publications",
              "Earn editorial backlinks from recognized publications in your niche — these are explicit authority signals",
              "Display real customer reviews with photos and verified purchase tags on product pages",
              "Cite your sources when you make factual claims — link to studies, manufacturer specs, test reports",
            ],
          },
          {
            type: "callout",
            title: "The trust gap in ecommerce",
            text: "Most ecommerce sites have weak E-E-A-T because they never thought about it. Your blog posts probably have no author. Your about page is generic. Your product claims are unsourced. Fixing these three things alone will put you ahead of most competitors in AI citation likelihood.",
          },
        ],
      },
      {
        id: "llms-txt-and-tracking",
        title: "llms.txt and Tracking Your AI Citations",
        blocks: [
          {
            type: "p",
            text: "llms.txt is an emerging standard — similar in concept to robots.txt — that lets you tell AI crawlers which pages on your site are most important and which they're allowed to use. Add a plain-text file at yourdomain.com/llms.txt listing your key product pages, buying guides, and authoritative content. It's not universally adopted yet, but the cost of adding it is near zero and early adopters get an edge.",
          },
          {
            type: "p",
            text: "Tracking AI citations takes manual effort today, but it's worth doing monthly. Search '[your brand] recommended for [category]' in both ChatGPT and Perplexity. Note which pages get cited and which competitors appear instead. Tools like Profound and Brandwatch are building automated AI mention tracking — worth evaluating if your brand spends on SEO tooling. Google Alerts still works for picking up text mentions across the web.",
          },
          {
            type: "tip",
            text: "Keep a simple spreadsheet: query, AI tool, cited URL, competitor URLs cited. Update it monthly. You'll spot patterns fast — usually it's a small number of well-structured pages doing most of the citing work, and a handful of competitors who've figured this out before you.",
          },
          {
            type: "callout",
            title: "What stays the same",
            text: "Fast site. Clear content. Strong E-E-A-T. Good backlinks. AI search rewards exactly the same fundamentals as traditional SEO — it's just more explicit about wanting clean, direct answers. If your traditional SEO is solid, you're already partway there.",
          },
        ],
      },
      {
        id: "ai-seo-action-plan",
        title: "Your AI SEO Action Plan",
        blocks: [
          {
            type: "p",
            text: "Prioritize ruthlessly. You don't need to overhaul your entire site — you need to make your best 10-15 pages AI-citation-ready. These are your most-visited buying guides, your top category pages, and any content that already ranks on page 1 for informational queries.",
          },
          {
            type: "checklist",
            items: [
              "Audit your top 15 pages: do they answer a specific question directly in the first paragraph?",
              "Add or update author bylines on all blog posts with real credentials",
              "Create or improve your About page to highlight team expertise",
              "Add llms.txt to your domain root listing your 20-30 most important pages",
              "Run 10 customer queries in ChatGPT and Perplexity — note who gets cited",
              "Rewrite one buying guide per week using direct-answer structure",
              "Set up Google Alerts for your brand name and top product category terms",
              "Review and update 'last modified' dates on all evergreen content",
            ],
          },
          {
            type: "p",
            text: "AI search is not replacing traditional SEO — it's adding another layer on top of it. The ecommerce brands that will win are the ones that combine strong technical foundations with genuinely useful, clearly written content. The opportunity right now is real: most of your competitors haven't adapted yet.",
          },
        ],
      },
    ],
  },

  de: {
    nav: {
      prev: {
        href: "/guides/topical-authority",
        category: "Fortgeschrittenes E-Commerce-SEO",
        title: "Thematische Autorität aufbauen",
      },
      next: {
        href: "/guides/serp-domination",
        category: "Fortgeschrittenes E-Commerce-SEO",
        title: "SERP-Dominanz",
      },
    },
    sections: [
      {
        id: "how-ai-search-works",
        title: "Wie KI-Suche funktioniert (und warum sie anders ist)",
        blocks: [
          {
            type: "p",
            text: "ChatGPT, Perplexity und Google AI Overviews ranken keine URLs wie die klassische Suche. Sie synthetisieren Antworten aus mehreren Quellen und zitieren dann die verwendeten. Du konkurrierst nicht um Position 1 — du konkurrierst darum, die Quelle zu sein, die das Modell zitiert.",
          },
          {
            type: "p",
            text: "Das ist ein grundlegender Wandel. Keyword-Dichte bringt dir keine Zitierungen. Was dir Zitierungen einbringt, ist die klarste, direkteste und sachlichste Antwort auf eine konkrete Frage in deiner Nische. Wenn ein Kunde ChatGPT fragt 'Was ist der beste Stehschreibtisch für große Menschen?' und deine Produktseite oder dein Ratgeber die vollständigste Antwort liefert, wird sie herangezogen.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=80",
            alt: "KI-Suchoberfl\u00e4che mit synthetisierter Antwort und Quellenangaben",
            caption: "KI-Suchtools synthetisieren Antworten und zitieren Quellen — zitiert zu werden ist das neue Ranking.",
          },
          {
            type: "callout",
            title: "Der mentale Modellwechsel",
            text: "Hör auf, rein für 'Rankings' zu optimieren, und fang an, für 'zitiert werden' zu optimieren. Frag dich: Wenn eine KI genau die Frage meines Kunden beantworten müsste — würde sie meine Seite finden, und würde sie ihr vertrauen?",
          },
        ],
      },
      {
        id: "what-ai-models-look-for",
        title: "Worauf KI-Modelle wirklich achten",
        blocks: [
          {
            type: "p",
            text: "KI-Modelle sind darauf trainiert, glaubwürdige, strukturierte und sachliche Inhalte zu erkennen. Sie bevorzugen Seiten, die Fragen direkt beantworten — keine Seiten, die die Antwort in drei Absätzen Einleitung verstecken. Sie reagieren auch gut auf Named Entities: konkrete Markennamen, Produktnamen, Modellnummern, Spezifikationen und Preise.",
          },
          {
            type: "list",
            items: [
              "Direkte Antworten am Anfang jedes Abschnitts — kein langes Anlaufen vor dem eigentlichen Punkt",
              "Konkrete Daten: Maße, Gewichte, Preise, Kompatibilitätsdetails, Testergebnisse",
              "Namentliche Vergleiche: 'Im Vergleich zum Ergotron LX hat dieser Arm eine längere Reichweite'",
              "Klare, überprüfbare Sachaussagen — KI-Modelle meiden vage oder ausweichende Formulierungen",
              "Inhalte, die dem entsprechen, was das Modell als autoritativ in deiner Nische gelernt hat",
            ],
          },
          {
            type: "tip",
            text: "Überarbeite deine wichtigsten Produktseiten und Ratgeber so, dass die relevanteste Antwort in den ersten 50 Wörtern jedes Abschnitts erscheint. KI-Parser lesen von oben nach unten und hören oft vor Seitenabschnitte in der Mitte auf.",
          },
          {
            type: "p",
            text: "Struktur ist genauso wichtig wie Inhalt. Nutze H2- und H3-Überschriften, die echten Frageformaten entsprechen ('Welches [Produkt] funktioniert mit [Anwendungsfall]?'). Schreibe in kurzen Absätzen. Nutze Tabellen für Vergleiche. Das sind keine reinen UX-Praktiken — sie machen deine Inhalte für ein Sprachmodell leichter parsbar und zitierfähig.",
          },
        ],
      },
      {
        id: "practical-ai-visibility-steps",
        title: "Konkrete Schritte für Sichtbarkeit in der KI-Suche",
        blocks: [
          {
            type: "p",
            text: "Das Wirksamste, was du jetzt tun kannst: Identifiziere die 10–20 Fragen, die deine Kunden tatsächlich in ChatGPT oder Perplexity zu deiner Produktkategorie eingeben. Das sind meist 'Was ist das beste X für Y'- oder 'Wie wähle ich zwischen X und Z'-Anfragen. Erstelle dann dedizierte Inhalte, die jede dieser Fragen vollständig beantworten.",
          },
          {
            type: "checklist",
            items: [
              "Schreibe eine Seite oder einen Abschnitt pro spezifischer Kundenfrage — versuche nicht, fünf Fragen in einem vagen Artikel zu beantworten",
              "Beginne jede Antwort mit 1–3 Sätzen direkter Reaktion vor jeder Erklärung",
              "Füge mindestens einen echten Datenpunkt (Studie, Spezifikation, Testergebnis) pro Hauptaussage ein",
              "Nenne deine Mitbewerber ehrlich in Vergleichsartikeln — KI-Modelle vertrauen ausgewogenen Einschätzungen",
              "Füge ein klares 'Zuletzt aktualisiert'-Datum hinzu — KI-Tools gewichten Aktualität",
              "Vermeide Passivkonstruktionen und ausweichende Formulierungen wie 'Es könnte argumentiert werden' oder 'Einige Experten glauben'",
            ],
          },
          {
            type: "tip",
            text: "Gib jetzt deine eigenen Produktanfragen in Perplexity ein. Wenn Mitbewerber erscheinen und du nicht, öffne deren zitierte Seiten und analysiere, was sie strukturell anders machen. Es ist meist einfacher als erwartet — direkte Überschriften, saubere Formatierung, konkrete Aussagen.",
          },
        ],
      },
      {
        id: "eeat-signals",
        title: "E-E-A-T-Signale: Warum sie für KI-Zitierungen mehr zählen",
        blocks: [
          {
            type: "p",
            text: "Googles AI Overviews ziehen Inhalte von Seiten heran, die bei E-E-A-T gut abschneiden: Erfahrung, Expertise, Autorität und Vertrauenswürdigkeit. Im E-Commerce sind diese Signale oft schwach, weil Produktseiten auf Verkaufen statt auf Wissensvermittlung ausgerichtet sind. Das lässt sich beheben.",
          },
          {
            type: "list",
            items: [
              "Füge Autorenangaben zu Blogbeiträgen und Ratgebern hinzu — inklusive kurzer Qualifikation ('10 Jahre im Outdoor-Fachhandel')",
              "Erstelle eine ausführliche 'Über uns'-Seite, die die echte Expertise deines Teams in der Produktkategorie erklärt",
              "Sorge für konsistente Markenerwähnungen auf Drittplattformen: Trustpilot, G2, Fachpublikationen",
              "Gewinne redaktionelle Backlinks von anerkannten Publikationen in deiner Nische — das sind explizite Autoritätssignale",
              "Zeige echte Kundenbewertungen mit Fotos und verifizierten Kaufnachweisen auf Produktseiten",
              "Zitiere deine Quellen bei Sachaussagen — verlinke auf Studien, Herstellerspezifikationen, Testberichte",
            ],
          },
          {
            type: "callout",
            title: "Die Vertrauenslücke im E-Commerce",
            text: "Die meisten E-Commerce-Seiten haben schwache E-E-A-T-Werte, weil sie nie darüber nachgedacht haben. Deine Blogbeiträge haben wahrscheinlich keinen Autor. Deine 'Über uns'-Seite ist generisch. Deine Produktaussagen sind unbelegt. Allein diese drei Dinge zu beheben, bringt dich bei der KI-Zitierwahrscheinlichkeit vor die meisten Mitbewerber.",
          },
        ],
      },
      {
        id: "llms-txt-and-tracking",
        title: "llms.txt und das Tracking deiner KI-Zitierungen",
        blocks: [
          {
            type: "p",
            text: "llms.txt ist ein aufkommender Standard — konzeptionell ähnlich wie robots.txt — mit dem du KI-Crawlern mitteilen kannst, welche Seiten deiner Website am wichtigsten sind und welche sie verwenden dürfen. Füge eine Klartextdatei unter deinedomain.de/llms.txt hinzu, die deine wichtigsten Produktseiten, Ratgeber und autoritativen Inhalte auflistet. Noch nicht universell adoptiert, aber die Kosten sind nahezu null und frühe Nutzer verschaffen sich einen Vorteil.",
          },
          {
            type: "p",
            text: "Das Tracking von KI-Zitierungen erfordert heute noch manuellen Aufwand, lohnt sich aber monatlich. Suche '[deine Marke] empfohlen für [Kategorie]' sowohl in ChatGPT als auch in Perplexity. Notiere, welche Seiten zitiert werden und welche Mitbewerber stattdessen erscheinen. Tools wie Profound und Brandwatch bauen automatisiertes KI-Erwähnungs-Tracking auf — eine Evaluierung wert, wenn deine Marke in SEO-Tools investiert. Google Alerts funktioniert weiterhin gut für Texterwähnungen im Netz.",
          },
          {
            type: "tip",
            text: "Führe eine einfache Tabelle: Anfrage, KI-Tool, zitierte URL, zitierte Mitbewerber-URLs. Monatlich aktualisieren. Du erkennst Muster schnell — meist leisten wenige gut strukturierte Seiten den Großteil der Zitierarbeit, und eine Handvoll Mitbewerber hat das bereits vor dir herausgefunden.",
          },
          {
            type: "callout",
            title: "Was gleich bleibt",
            text: "Schnelle Website. Klare Inhalte. Starkes E-E-A-T. Gute Backlinks. KI-Suche belohnt exakt dieselben Grundlagen wie klassisches SEO — sie ist nur expliziter darin, klare, direkte Antworten zu verlangen. Wer solides traditionelles SEO betreibt, ist bereits auf einem guten Weg.",
          },
        ],
      },
      {
        id: "ai-seo-action-plan",
        title: "Dein KI-SEO-Aktionsplan",
        blocks: [
          {
            type: "p",
            text: "Priorisiere konsequent. Du musst nicht deine gesamte Website umbauen — du musst deine besten 10–15 Seiten KI-zitierbereit machen. Das sind deine meistbesuchten Ratgeber, deine Top-Kategorieseiten und alle Inhalte, die bereits auf Seite 1 für informationelle Anfragen ranken.",
          },
          {
            type: "checklist",
            items: [
              "Überprüfe deine Top-15-Seiten: Beantworten sie eine konkrete Frage direkt im ersten Absatz?",
              "Füge allen Blogbeiträgen Autorenangaben mit echten Qualifikationen hinzu oder aktualisiere sie",
              "Erstelle oder verbessere deine 'Über uns'-Seite, um die Expertise des Teams hervorzuheben",
              "Füge llms.txt in deinem Domain-Stammverzeichnis hinzu und liste deine 20–30 wichtigsten Seiten auf",
              "Führe 10 Kundenanfragen in ChatGPT und Perplexity aus — notiere, wer zitiert wird",
              "Überarbeite wöchentlich einen Ratgeber mit Direktantwort-Struktur",
              "Richte Google Alerts für deinen Markennamen und deine wichtigsten Produktkategorie-Begriffe ein",
              "Prüfe und aktualisiere 'Zuletzt geändert'-Daten für alle Evergreen-Inhalte",
            ],
          },
          {
            type: "p",
            text: "KI-Suche ersetzt kein traditionelles SEO — sie fügt eine weitere Ebene darüber hinzu. Die E-Commerce-Marken, die gewinnen werden, kombinieren starke technische Grundlagen mit genuinen, klar geschriebenen Inhalten. Die Chance ist jetzt real: Die meisten deiner Mitbewerber haben sich noch nicht angepasst.",
          },
        ],
      },
    ],
  },

  fr: {
    nav: {
      prev: {
        href: "/guides/topical-authority",
        category: "SEO e-commerce avancé",
        title: "Autorité thématique",
      },
      next: {
        href: "/guides/serp-domination",
        category: "SEO e-commerce avancé",
        title: "Domination des SERP",
      },
    },
    sections: [
      {
        id: "how-ai-search-works",
        title: "Comment fonctionne la recherche IA (et pourquoi c'est différent)",
        blocks: [
          {
            type: "p",
            text: "ChatGPT, Perplexity et les AI Overviews de Google ne classent pas les URL comme la recherche traditionnelle. Ils synthétisent des réponses à partir de plusieurs sources, puis citent celles dont ils se sont inspirés. Vous ne concurrencez pas pour la position 1 — vous concurrencez pour être la source que le modèle cite.",
          },
          {
            type: "p",
            text: "C'est un changement fondamental. La densité de mots-clés ne vous vaudra pas de citations. Ce qui vous vaut des citations, c'est être la réponse la plus claire, la plus directe et la plus factuelle à une question précise dans votre niche. Si un client demande à ChatGPT 'quel est le meilleur bureau debout pour les grandes personnes ?' et que votre fiche produit ou votre guide d'achat est la réponse la plus complète, c'est elle qui sera reprise.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=80",
            alt: "Interface de recherche IA affichant une réponse synthétisée avec citations",
            caption: "Les outils de recherche IA synthétisent les réponses et citent leurs sources — être cité est le nouveau classement.",
          },
          {
            type: "callout",
            title: "Le changement de modèle mental",
            text: "Arrêtez d'optimiser uniquement pour le 'classement' et commencez à optimiser pour 'être cité'. Demandez-vous : si une IA devait répondre exactement à la question que pose mon client, trouverait-elle ma page et lui ferait-elle confiance ?",
          },
        ],
      },
      {
        id: "what-ai-models-look-for",
        title: "Ce que les modèles IA recherchent vraiment",
        blocks: [
          {
            type: "p",
            text: "Les modèles IA sont entraînés à reconnaître les contenus crédibles, structurés et factuels. Ils favorisent les pages qui répondent directement aux questions — pas celles qui noient la réponse dans trois paragraphes d'introduction. Ils répondent aussi bien aux entités nommées : marques précises, noms de produits, numéros de modèle, spécifications et prix.",
          },
          {
            type: "list",
            items: [
              "Des réponses directes en début de section — pas de longue mise en contexte avant d'arriver au fait",
              "Des données précises : dimensions, poids, prix, détails de compatibilité, résultats de tests",
              "Des comparaisons nommées : 'par rapport à l'Ergotron LX, ce bras a une portée plus longue'",
              "Des affirmations factuelles claires et vérifiables — les modèles IA évitent de citer des formulations vagues ou évasives",
              "Des contenus qui correspondent à ce que le modèle a appris être autoritaire dans votre niche",
            ],
          },
          {
            type: "tip",
            text: "Réécrivez vos meilleures pages produits et guides d'achat pour que la réponse la plus importante apparaisse dans les 50 premiers mots de chaque section. Les parseurs IA lisent de haut en bas et s'arrêtent souvent avant le contenu au milieu de la page.",
          },
          {
            type: "p",
            text: "La structure compte autant que le fond. Utilisez des titres H2 et H3 qui correspondent à de vrais formats de questions ('Quel [produit] fonctionne avec [cas d'usage] ?'). Rédigez en paragraphes courts. Utilisez des tableaux pour les comparaisons. Ce ne sont pas que de bonnes pratiques UX — elles rendent votre contenu plus facile à parser et à citer pour un modèle de langage.",
          },
        ],
      },
      {
        id: "practical-ai-visibility-steps",
        title: "Étapes concrètes pour être cité par la recherche IA",
        blocks: [
          {
            type: "p",
            text: "La chose la plus efficace que vous puissiez faire maintenant : identifiez les 10 à 20 questions que vos clients tapent réellement dans ChatGPT ou Perplexity sur votre catégorie de produits. Ce sont généralement des requêtes du type 'quel est le meilleur X pour Y' ou 'comment choisir entre X et Z'. Rédigez ensuite un contenu dédié qui répond complètement à chacune d'elles.",
          },
          {
            type: "checklist",
            items: [
              "Écrivez une page ou une section par question client spécifique — ne tentez pas de répondre à cinq questions dans un article vague",
              "Commencez chaque réponse par 1 à 3 phrases de réponse directe avant toute explication",
              "Incluez au moins un vrai point de données (étude, spécification, résultat de test) par affirmation principale",
              "Nommez honnêtement vos concurrents dans les comparatifs — les modèles IA font confiance aux évaluations équilibrées",
              "Ajoutez une date claire 'Dernière mise à jour' — les outils IA pondèrent la fraîcheur du contenu",
              "Évitez la voix passive et les formulations évasives comme 'on pourrait arguer que' ou 'certains experts pensent'",
            ],
          },
          {
            type: "tip",
            text: "Lancez vos propres requêtes produits dans Perplexity maintenant. Si vos concurrents apparaissent et pas vous, ouvrez leurs pages citées et analysez ce qu'ils font différemment structurellement. C'est généralement plus simple que prévu — titres directs, formatage propre, affirmations précises.",
          },
        ],
      },
      {
        id: "eeat-signals",
        title: "Signaux E-E-A-T : pourquoi ils comptent davantage pour les citations IA",
        blocks: [
          {
            type: "p",
            text: "Les AI Overviews de Google puisent dans les pages qui obtiennent de bons scores E-E-A-T : Expérience, Expertise, Autorité et Fiabilité. Pour le e-commerce, ces signaux sont souvent faibles car les fiches produits se concentrent sur la vente plutôt que sur la démonstration de connaissances. C'est corrigeable.",
          },
          {
            type: "list",
            items: [
              "Ajoutez des signatures d'auteur aux articles de blog et guides d'achat — avec une brève accréditation ('10 ans dans le commerce de plein air')",
              "Créez une page 'À propos' détaillée qui explique l'expertise réelle de votre équipe dans la catégorie produit",
              "Obtenez des mentions cohérentes de votre marque sur des plateformes tierces : Trustpilot, G2, publications spécialisées",
              "Gagnez des backlinks éditoriaux de publications reconnues dans votre niche — ce sont des signaux d'autorité explicites",
              "Affichez de vraies avis clients avec photos et mentions d'achat vérifié sur les fiches produits",
              "Citez vos sources lorsque vous faites des affirmations factuelles — liez vers des études, spécifications fabricant, rapports de tests",
            ],
          },
          {
            type: "callout",
            title: "Le déficit de confiance dans l'e-commerce",
            text: "La plupart des sites e-commerce ont un E-E-A-T faible parce qu'ils n'y ont jamais pensé. Vos articles de blog n'ont probablement pas d'auteur. Votre page 'À propos' est générique. Vos affirmations produits ne sont pas sourcées. Corriger ces trois éléments seuls vous placera devant la plupart de vos concurrents en matière de probabilité de citation IA.",
          },
        ],
      },
      {
        id: "llms-txt-and-tracking",
        title: "llms.txt et le suivi de vos citations IA",
        blocks: [
          {
            type: "p",
            text: "llms.txt est un standard émergent — similaire dans le concept à robots.txt — qui vous permet d'indiquer aux crawlers IA quelles pages de votre site sont les plus importantes et lesquelles ils sont autorisés à utiliser. Ajoutez un fichier texte brut à votredomaine.fr/llms.txt listant vos pages produits clés, guides d'achat et contenus autoritaires. Pas encore adopté universellement, mais le coût d'ajout est quasi nul et les premiers adoptants ont un avantage.",
          },
          {
            type: "p",
            text: "Le suivi des citations IA demande encore un effort manuel aujourd'hui, mais vaut la peine d'être fait mensuellement. Recherchez '[votre marque] recommandé pour [catégorie]' dans ChatGPT et Perplexity. Notez quelles pages sont citées et quels concurrents apparaissent à la place. Des outils comme Profound et Brandwatch développent un suivi automatisé des mentions IA — à évaluer si votre marque investit dans des outils SEO. Google Alerts fonctionne toujours bien pour détecter les mentions textuelles sur le web.",
          },
          {
            type: "tip",
            text: "Tenez un tableau simple : requête, outil IA, URL citée, URL concurrents cités. Mettez à jour mensuellement. Vous identifierez vite des patterns — généralement, un petit nombre de pages bien structurées fait la majorité du travail de citation, et quelques concurrents ont déjà compris cela avant vous.",
          },
          {
            type: "callout",
            title: "Ce qui reste identique",
            text: "Site rapide. Contenu clair. E-E-A-T solide. Bons backlinks. La recherche IA récompense exactement les mêmes fondamentaux que le SEO traditionnel — elle est juste plus explicite dans sa demande de réponses claires et directes. Si votre SEO traditionnel est solide, vous êtes déjà à mi-chemin.",
          },
        ],
      },
      {
        id: "ai-seo-action-plan",
        title: "Votre plan d'action SEO IA",
        blocks: [
          {
            type: "p",
            text: "Priorisez sans pitié. Vous n'avez pas besoin de refondre tout votre site — vous devez rendre vos 10 à 15 meilleures pages prêtes pour les citations IA. Ce sont vos guides d'achat les plus visités, vos pages de catégorie phares et tout contenu qui se classe déjà en page 1 pour des requêtes informationnelles.",
          },
          {
            type: "checklist",
            items: [
              "Auditez vos 15 meilleures pages : répondent-elles à une question précise directement dans le premier paragraphe ?",
              "Ajoutez ou mettez à jour les signatures d'auteur sur tous les articles de blog avec de vraies accréditations",
              "Créez ou améliorez votre page 'À propos' pour mettre en valeur l'expertise de l'équipe",
              "Ajoutez llms.txt à la racine de votre domaine en listant vos 20 à 30 pages les plus importantes",
              "Lancez 10 requêtes client dans ChatGPT et Perplexity — notez qui est cité",
              "Réécrivez un guide d'achat par semaine avec une structure de réponse directe",
              "Configurez Google Alerts pour le nom de votre marque et vos principaux termes de catégorie produit",
              "Vérifiez et mettez à jour les dates 'Dernière modification' sur tous les contenus evergreen",
            ],
          },
          {
            type: "p",
            text: "La recherche IA ne remplace pas le SEO traditionnel — elle ajoute une couche supplémentaire par-dessus. Les marques e-commerce qui gagneront combinent des bases techniques solides avec un contenu genuinement utile et clairement rédigé. L'opportunité est réelle maintenant : la plupart de vos concurrents ne se sont pas encore adaptés.",
          },
        ],
      },
    ],
  },

  es: {
    nav: {
      prev: {
        href: "/guides/topical-authority",
        category: "SEO avanzado para ecommerce",
        title: "Autoridad temática",
      },
      next: {
        href: "/guides/serp-domination",
        category: "SEO avanzado para ecommerce",
        title: "Dominación de las SERP",
      },
    },
    sections: [
      {
        id: "how-ai-search-works",
        title: "Cómo funciona la búsqueda con IA (y por qué es diferente)",
        blocks: [
          {
            type: "p",
            text: "ChatGPT, Perplexity y los AI Overviews de Google no clasifican URLs como la búsqueda tradicional. Sintetizan respuestas de múltiples fuentes y luego citan las que usaron. No compites por la posición 1 — compites por ser la fuente que el modelo cita.",
          },
          {
            type: "p",
            text: "Ese es un cambio fundamental. La densidad de palabras clave no te consigue citas. Lo que te consigue citas es ser la respuesta más clara, directa y factual a una pregunta específica en tu nicho. Si un cliente le pregunta a ChatGPT '¿cuál es el mejor escritorio de pie para personas altas?' y tu ficha de producto o guía de compra es la respuesta más completa a esa pregunta, es la que se toma.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=80",
            alt: "Interfaz de búsqueda IA mostrando respuesta sintetizada con citas",
            caption: "Las herramientas de búsqueda IA sintetizan respuestas y citan fuentes — ser citado es el nuevo posicionamiento.",
          },
          {
            type: "callout",
            title: "El cambio de modelo mental",
            text: "Deja de optimizar puramente para 'posicionar' y empieza a optimizar para 'ser citado'. Pregúntate: si una IA necesitara responder exactamente la pregunta que hace mi cliente, ¿encontraría mi página y confiaría en ella?",
          },
        ],
      },
      {
        id: "what-ai-models-look-for",
        title: "Qué buscan realmente los modelos de IA",
        blocks: [
          {
            type: "p",
            text: "Los modelos de IA están entrenados para reconocer contenido creíble, estructurado y factual. Favorecen páginas que responden preguntas directamente — no páginas que entierran la respuesta en tres párrafos de preámbulo. También responden bien a entidades nombradas: nombres de marcas específicos, nombres de productos, números de modelo, especificaciones y precios.",
          },
          {
            type: "list",
            items: [
              "Respuestas directas al inicio de cada sección — sin largas introducciones antes de llegar al punto",
              "Datos específicos: dimensiones, pesos, precios, detalles de compatibilidad, resultados de pruebas",
              "Comparaciones nombradas: 'en comparación con el Ergotron LX, este brazo tiene mayor alcance'",
              "Afirmaciones factuales claras y verificables — los modelos de IA evitan citar lenguaje vago o evasivo",
              "Contenido que coincide con lo que el modelo ha aprendido que es autoritativo en tu nicho",
            ],
          },
          {
            type: "tip",
            text: "Reescribe tus principales páginas de producto y guías de compra para que la respuesta más importante aparezca en las primeras 50 palabras de cada sección. Los parsers de IA leen de arriba hacia abajo y con frecuencia se detienen antes del contenido a mediados de página.",
          },
          {
            type: "p",
            text: "La estructura importa tanto como el contenido. Usa encabezados H2 y H3 que coincidan con formatos reales de preguntas ('¿Qué [producto] funciona con [caso de uso]?'). Escribe en párrafos cortos. Usa tablas para comparaciones. No son solo buenas prácticas de UX — hacen que tu contenido sea más fácil de parsear y citar para un modelo de lenguaje.",
          },
        ],
      },
      {
        id: "practical-ai-visibility-steps",
        title: "Pasos prácticos para aparecer en la búsqueda IA",
        blocks: [
          {
            type: "p",
            text: "Lo más efectivo que puedes hacer ahora mismo: identifica las 10-20 preguntas que tus clientes realmente escriben en ChatGPT o Perplexity sobre tu categoría de producto. Suelen ser consultas del tipo '¿cuál es el mejor X para Y?' o '¿cómo elijo entre X y Z?'. Luego escribe contenido dedicado que responda cada una completamente.",
          },
          {
            type: "checklist",
            items: [
              "Escribe una página o sección por pregunta específica del cliente — no intentes responder cinco preguntas en un artículo vago",
              "Comienza cada respuesta con 1-3 frases de respuesta directa antes de cualquier explicación",
              "Incluye al menos un dato real (estudio, especificación, resultado de prueba) por afirmación principal",
              "Nombra a tus competidores honestamente en el contenido comparativo — los modelos de IA confían en los análisis equilibrados",
              "Añade una fecha clara de 'Última actualización' — las herramientas de IA ponderan la actualidad",
              "Evita la voz pasiva y las frases evasivas como 'podría argumentarse' o 'algunos expertos creen'",
            ],
          },
          {
            type: "tip",
            text: "Ejecuta tus propias consultas de producto en Perplexity ahora mismo. Si los competidores aparecen y tú no, abre sus páginas citadas y analiza qué hacen diferente estructuralmente. Suele ser más simple de lo que esperas — encabezados directos, formato limpio, afirmaciones específicas.",
          },
        ],
      },
      {
        id: "eeat-signals",
        title: "Señales E-E-A-T: por qué importan más para las citas de IA",
        blocks: [
          {
            type: "p",
            text: "Los AI Overviews de Google toman información de páginas que puntúan bien en E-E-A-T: Experiencia, Conocimiento, Autoridad y Confiabilidad. Para el ecommerce, estas señales suelen ser débiles porque las páginas de producto se centran en vender en lugar de demostrar conocimiento. Eso tiene solución.",
          },
          {
            type: "list",
            items: [
              "Añade firmas de autor a los artículos de blog y guías de compra — incluye una breve acreditación ('10 años en retail de equipamiento al aire libre')",
              "Crea una página 'Sobre nosotros' detallada que explique la verdadera experiencia de tu equipo en la categoría de producto",
              "Consigue menciones consistentes de tu marca en plataformas de terceros: Trustpilot, G2, publicaciones del sector",
              "Gana backlinks editoriales de publicaciones reconocidas en tu nicho — son señales de autoridad explícitas",
              "Muestra reseñas reales de clientes con fotos y etiquetas de compra verificada en las páginas de producto",
              "Cita tus fuentes cuando hagas afirmaciones factuales — enlaza a estudios, especificaciones del fabricante, informes de pruebas",
            ],
          },
          {
            type: "callout",
            title: "La brecha de confianza en el ecommerce",
            text: "La mayoría de los sitios de ecommerce tienen E-E-A-T débil porque nunca lo pensaron. Tus artículos de blog probablemente no tienen autor. Tu página 'Sobre nosotros' es genérica. Tus afirmaciones de producto no tienen fuentes. Solo corregir estas tres cosas te pondrá por delante de la mayoría de tus competidores en probabilidad de cita por IA.",
          },
        ],
      },
      {
        id: "llms-txt-and-tracking",
        title: "llms.txt y el seguimiento de tus citas de IA",
        blocks: [
          {
            type: "p",
            text: "llms.txt es un estándar emergente — similar en concepto a robots.txt — que te permite indicar a los crawlers de IA qué páginas de tu sitio son más importantes y cuáles pueden usar. Añade un archivo de texto plano en tudominio.com/llms.txt listando tus páginas de producto clave, guías de compra y contenido autoritativo. Aún no adoptado universalmente, pero el coste de añadirlo es casi nulo y los primeros en adoptarlo llevan ventaja.",
          },
          {
            type: "p",
            text: "El seguimiento de citas de IA requiere esfuerzo manual hoy en día, pero vale la pena hacerlo mensualmente. Busca '[tu marca] recomendado para [categoría]' tanto en ChatGPT como en Perplexity. Anota qué páginas se citan y qué competidores aparecen en su lugar. Herramientas como Profound y Brandwatch están desarrollando seguimiento automatizado de menciones de IA — vale la pena evaluar si tu marca invierte en herramientas SEO. Google Alerts sigue funcionando bien para detectar menciones de texto en la web.",
          },
          {
            type: "tip",
            text: "Lleva una hoja de cálculo simple: consulta, herramienta IA, URL citada, URLs de competidores citados. Actualiza mensualmente. Identificarás patrones rápido — normalmente un pequeño número de páginas bien estructuradas hace la mayor parte del trabajo de citación, y un puñado de competidores ya lo han descubierto antes que tú.",
          },
          {
            type: "callout",
            title: "Lo que sigue igual",
            text: "Sitio rápido. Contenido claro. E-E-A-T sólido. Buenos backlinks. La búsqueda IA premia exactamente los mismos fundamentos que el SEO tradicional — solo es más explícita en querer respuestas claras y directas. Si tu SEO tradicional es sólido, ya estás a mitad de camino.",
          },
        ],
      },
      {
        id: "ai-seo-action-plan",
        title: "Tu plan de acción de SEO para IA",
        blocks: [
          {
            type: "p",
            text: "Prioriza sin piedad. No necesitas renovar todo tu sitio — necesitas hacer que tus mejores 10-15 páginas estén listas para citas de IA. Son tus guías de compra más visitadas, tus páginas de categoría principales y cualquier contenido que ya posiciona en página 1 para consultas informacionales.",
          },
          {
            type: "checklist",
            items: [
              "Audita tus 15 mejores páginas: ¿responden a una pregunta específica directamente en el primer párrafo?",
              "Añade o actualiza las firmas de autor en todos los artículos de blog con credenciales reales",
              "Crea o mejora tu página 'Sobre nosotros' para destacar la experiencia del equipo",
              "Añade llms.txt en la raíz de tu dominio listando tus 20-30 páginas más importantes",
              "Ejecuta 10 consultas de cliente en ChatGPT y Perplexity — anota quién aparece citado",
              "Reescribe una guía de compra por semana usando estructura de respuesta directa",
              "Configura Google Alerts para el nombre de tu marca y tus principales términos de categoría de producto",
              "Revisa y actualiza las fechas de 'última modificación' en todo el contenido evergreen",
            ],
          },
          {
            type: "p",
            text: "La búsqueda IA no reemplaza el SEO tradicional — añade otra capa encima. Las marcas de ecommerce que ganarán son las que combinan bases técnicas sólidas con contenido genuinamente útil y claramente escrito. La oportunidad es real ahora: la mayoría de tus competidores aún no se han adaptado.",
          },
        ],
      },
    ],
  },

  it: {
    nav: {
      prev: {
        href: "/guides/topical-authority",
        category: "SEO avanzato per ecommerce",
        title: "Autorità tematica",
      },
      next: {
        href: "/guides/serp-domination",
        category: "SEO avanzato per ecommerce",
        title: "Dominazione delle SERP",
      },
    },
    sections: [
      {
        id: "how-ai-search-works",
        title: "Come funziona la ricerca IA (e perché è diversa)",
        blocks: [
          {
            type: "p",
            text: "ChatGPT, Perplexity e i Google AI Overviews non classificano gli URL come fa la ricerca tradizionale. Sintetizzano risposte da più fonti e poi citano quelle da cui hanno attinto. Non stai competendo per la posizione 1 — stai competendo per essere la fonte che il modello cita.",
          },
          {
            type: "p",
            text: "È un cambiamento fondamentale. La densità di parole chiave non ti porta citazioni. Ciò che ti porta citazioni è essere la risposta più chiara, diretta e fattuale a una domanda specifica nella tua nicchia. Se un cliente chiede a ChatGPT 'qual è la migliore scrivania in piedi per le persone alte?' e la tua scheda prodotto o guida all'acquisto è la risposta più completa a quella domanda, è quella che viene ripresa.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=80",
            alt: "Interfaccia di ricerca IA che mostra una risposta sintetizzata con citazioni",
            caption: "Gli strumenti di ricerca IA sintetizzano le risposte e citano le fonti — essere citati è il nuovo posizionamento.",
          },
          {
            type: "callout",
            title: "Il cambio di modello mentale",
            text: "Smetti di ottimizzare puramente per il 'posizionamento' e inizia a ottimizzare per 'essere citato'. Chiediti: se un'IA dovesse rispondere esattamente alla domanda che fa il mio cliente, troverebbe la mia pagina e si fiderebbe di essa?",
          },
        ],
      },
      {
        id: "what-ai-models-look-for",
        title: "Cosa cercano davvero i modelli IA",
        blocks: [
          {
            type: "p",
            text: "I modelli IA sono addestrati a riconoscere contenuti credibili, strutturati e fattuali. Prediligono le pagine che rispondono direttamente alle domande — non quelle che nascondono la risposta in tre paragrafi di premessa. Rispondono bene anche alle entità denominate: nomi di marchi specifici, nomi di prodotti, numeri di modello, specifiche e prezzi.",
          },
          {
            type: "list",
            items: [
              "Risposte dirette all'inizio di ogni sezione — nessun lungo preambolo prima di arrivare al punto",
              "Dati specifici: dimensioni, pesi, prezzi, dettagli di compatibilità, risultati di test",
              "Confronti nominati: 'rispetto all'Ergotron LX, questo braccio ha una portata maggiore'",
              "Affermazioni fattuali chiare e verificabili — i modelli IA evitano di citare linguaggio vago o evasivo",
              "Contenuti che corrispondono a ciò che il modello ha imparato essere autorevole nella tua nicchia",
            ],
          },
          {
            type: "tip",
            text: "Riscrivi le tue principali pagine prodotto e guide all'acquisto in modo che la risposta più importante appaia nelle prime 50 parole di ogni sezione. I parser IA leggono dall'alto verso il basso e spesso si fermano prima del contenuto a metà pagina.",
          },
          {
            type: "p",
            text: "La struttura conta quanto la sostanza. Usa intestazioni H2 e H3 che corrispondano a formati di domande reali ('Quale [prodotto] funziona con [caso d'uso]?'). Scrivi in paragrafi brevi. Usa tabelle per i confronti. Non sono solo buone pratiche UX — rendono i tuoi contenuti più facili da analizzare e citare per un modello linguistico.",
          },
        ],
      },
      {
        id: "practical-ai-visibility-steps",
        title: "Passi pratici per essere citati dalla ricerca IA",
        blocks: [
          {
            type: "p",
            text: "La cosa più efficace che puoi fare adesso: identifica le 10-20 domande che i tuoi clienti digitano davvero in ChatGPT o Perplexity sulla tua categoria di prodotto. Di solito sono query del tipo 'qual è il miglior X per Y?' o 'come scelgo tra X e Z?'. Poi scrivi contenuti dedicati che rispondano completamente a ciascuna.",
          },
          {
            type: "checklist",
            items: [
              "Scrivi una pagina o sezione per ogni domanda specifica del cliente — non cercare di rispondere a cinque domande in un articolo vago",
              "Inizia ogni risposta con 1-3 frasi di risposta diretta prima di qualsiasi spiegazione",
              "Includi almeno un dato reale (studio, specifica, risultato di test) per ogni affermazione principale",
              "Nomina i tuoi concorrenti onestamente nel contenuto comparativo — i modelli IA si fidano delle valutazioni equilibrate",
              "Aggiungi una data chiara di 'Ultimo aggiornamento' — gli strumenti IA ponderano la freschezza",
              "Evita la forma passiva e le frasi evasive come 'si potrebbe sostenere' o 'alcuni esperti credono'",
            ],
          },
          {
            type: "tip",
            text: "Esegui le tue query di prodotto in Perplexity adesso. Se i concorrenti appaiono e tu no, apri le loro pagine citate e analizza cosa fanno di diverso strutturalmente. Di solito è più semplice del previsto — intestazioni dirette, formattazione pulita, affermazioni specifiche.",
          },
        ],
      },
      {
        id: "eeat-signals",
        title: "Segnali E-E-A-T: perché contano di più per le citazioni IA",
        blocks: [
          {
            type: "p",
            text: "I Google AI Overviews attingono da pagine che ottengono buoni punteggi E-E-A-T: Esperienza, Competenza, Autorevolezza e Affidabilità. Per l'ecommerce, questi segnali sono spesso deboli perché le schede prodotto si concentrano sulla vendita piuttosto che sulla dimostrazione di conoscenza. È risolvibile.",
          },
          {
            type: "list",
            items: [
              "Aggiungi firme degli autori agli articoli del blog e alle guide all'acquisto — includi una breve credenziale ('10 anni nel retail di attrezzatura outdoor')",
              "Crea una pagina 'Chi siamo' dettagliata che spieghi la vera competenza del tuo team nella categoria di prodotto",
              "Ottieni menzioni coerenti del brand su piattaforme terze: Trustpilot, G2, pubblicazioni di settore",
              "Guadagna backlink editoriali da pubblicazioni riconosciute nella tua nicchia — sono segnali di autorevolezza espliciti",
              "Mostra recensioni reali dei clienti con foto e tag di acquisto verificato nelle schede prodotto",
              "Cita le tue fonti quando fai affermazioni fattuali — collega a studi, specifiche del produttore, rapporti di test",
            ],
          },
          {
            type: "callout",
            title: "Il deficit di fiducia nell'ecommerce",
            text: "La maggior parte dei siti ecommerce ha un E-E-A-T debole perché non ci hanno mai pensato. I tuoi articoli del blog probabilmente non hanno autore. La tua pagina 'Chi siamo' è generica. Le tue affermazioni sui prodotti non hanno fonti. Correggere solo questi tre elementi ti metterà davanti alla maggior parte dei concorrenti in termini di probabilità di citazione IA.",
          },
        ],
      },
      {
        id: "llms-txt-and-tracking",
        title: "llms.txt e il monitoraggio delle tue citazioni IA",
        blocks: [
          {
            type: "p",
            text: "llms.txt è uno standard emergente — simile nel concetto a robots.txt — che ti permette di indicare ai crawler IA quali pagine del tuo sito sono più importanti e quali possono usare. Aggiungi un file di testo semplice in tuodominio.it/llms.txt elencando le tue principali pagine prodotto, guide all'acquisto e contenuti autorevoli. Non ancora adottato universalmente, ma il costo di aggiungerlo è quasi zero e i primi ad adottarlo hanno un vantaggio.",
          },
          {
            type: "p",
            text: "Il tracciamento delle citazioni IA richiede ancora sforzo manuale oggi, ma vale la pena farlo mensilmente. Cerca '[il tuo brand] consigliato per [categoria]' sia in ChatGPT che in Perplexity. Annota quali pagine vengono citate e quali concorrenti appaiono al loro posto. Strumenti come Profound e Brandwatch stanno sviluppando il tracciamento automatizzato delle menzioni IA — vale la pena valutarli se il tuo brand investe in strumenti SEO. Google Alerts funziona ancora bene per rilevare menzioni di testo sul web.",
          },
          {
            type: "tip",
            text: "Tieni un foglio di calcolo semplice: query, strumento IA, URL citato, URL concorrenti citati. Aggiorna mensilmente. Identificherai rapidamente i pattern — di solito un piccolo numero di pagine ben strutturate fa la maggior parte del lavoro di citazione, e una manciata di concorrenti l'ha già capito prima di te.",
          },
          {
            type: "callout",
            title: "Cosa rimane uguale",
            text: "Sito veloce. Contenuto chiaro. E-E-A-T solido. Buoni backlink. La ricerca IA premia esattamente gli stessi fondamentali del SEO tradizionale — è solo più esplicita nel volere risposte chiare e dirette. Se il tuo SEO tradizionale è solido, sei già a metà strada.",
          },
        ],
      },
      {
        id: "ai-seo-action-plan",
        title: "Il tuo piano d'azione SEO per l'IA",
        blocks: [
          {
            type: "p",
            text: "Dai priorità senza pietà. Non devi rinnovare tutto il sito — devi rendere le tue migliori 10-15 pagine pronte per le citazioni IA. Sono le tue guide all'acquisto più visitate, le tue pagine di categoria principali e qualsiasi contenuto che già si posiziona in prima pagina per query informazionali.",
          },
          {
            type: "checklist",
            items: [
              "Analizza le tue 15 pagine migliori: rispondono a una domanda specifica direttamente nel primo paragrafo?",
              "Aggiungi o aggiorna le firme degli autori su tutti gli articoli del blog con credenziali reali",
              "Crea o migliora la tua pagina 'Chi siamo' per mettere in evidenza la competenza del team",
              "Aggiungi llms.txt alla radice del tuo dominio elencando le tue 20-30 pagine più importanti",
              "Esegui 10 query di cliente in ChatGPT e Perplexity — annota chi viene citato",
              "Riscrivi una guida all'acquisto alla settimana usando la struttura di risposta diretta",
              "Configura Google Alerts per il nome del tuo brand e i tuoi principali termini di categoria prodotto",
              "Controlla e aggiorna le date di 'ultima modifica' su tutti i contenuti evergreen",
            ],
          },
          {
            type: "p",
            text: "La ricerca IA non sostituisce il SEO tradizionale — aggiunge un altro livello sopra di esso. I brand ecommerce che vinceranno sono quelli che combinano basi tecniche solide con contenuti genuinamente utili e scritti in modo chiaro. L'opportunità è reale adesso: la maggior parte dei tuoi concorrenti non si è ancora adattata.",
          },
        ],
      },
    ],
  },

  nl: {
    nav: {
      prev: {
        href: "/guides/topical-authority",
        category: "Gevorderde e-commerce SEO",
        title: "Thematische autoriteit opbouwen",
      },
      next: {
        href: "/guides/serp-domination",
        category: "Gevorderde e-commerce SEO",
        title: "SERP-dominantie",
      },
    },
    sections: [
      {
        id: "how-ai-search-works",
        title: "Hoe AI-zoekopdrachten werken (en waarom het anders is)",
        blocks: [
          {
            type: "p",
            text: "ChatGPT, Perplexity en Google AI Overviews rangschikken geen URL's zoals traditionele zoekmachines dat doen. Ze synthetiseren antwoorden uit meerdere bronnen en citeren vervolgens de bronnen die ze hebben gebruikt. Je concurreert niet om positie 1 — je concurreert om de bron te zijn die het model citeert.",
          },
          {
            type: "p",
            text: "Dat is een fundamentele verschuiving. Keyword-dichtheid levert je geen citaties op. Wat je citaties oplevert, is het duidelijkste, meest directe en meest feitelijke antwoord op een specifieke vraag in jouw niche. Als een klant ChatGPT vraagt 'wat is het beste zit-sta bureau voor lange mensen?' en jouw productpagina of koopgids het meest volledige antwoord op die vraag is, wordt die gebruikt.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=80",
            alt: "AI-zoekinterface met gesynthetiseerd antwoord en bronvermeldingen",
            caption: "AI-zoektools synthetiseren antwoorden en citeren bronnen — geciteerd worden is de nieuwe ranking.",
          },
          {
            type: "callout",
            title: "De mentale modelshift",
            text: "Stop met optimaliseren puur voor 'ranking' en begin met optimaliseren voor 'geciteerd worden'. Vraag jezelf af: als een AI precies de vraag van mijn klant moest beantwoorden, zou die mijn pagina vinden en vertrouwen?",
          },
        ],
      },
      {
        id: "what-ai-models-look-for",
        title: "Wat AI-modellen echt zoeken",
        blocks: [
          {
            type: "p",
            text: "AI-modellen zijn getraind om geloofwaardige, gestructureerde en feitelijke inhoud te herkennen. Ze geven de voorkeur aan pagina's die vragen direct beantwoorden — niet aan pagina's die het antwoord begraven onder drie alinea's inleiding. Ze reageren ook goed op named entities: specifieke merknamen, productnamen, modelnummers, specificaties en prijzen.",
          },
          {
            type: "list",
            items: [
              "Directe antwoorden aan het begin van elke sectie — geen lange aanlooptijd voordat je tot de kern komt",
              "Specifieke data: afmetingen, gewichten, prijzen, compatibiliteitsdetails, testresultaten",
              "Benoemde vergelijkingen: 'vergeleken met de Ergotron LX heeft deze arm een langere reikwijdte'",
              "Duidelijke, controleerbare feitelijke uitspraken — AI-modellen vermijden het citeren van vage of ontwijkende taal",
              "Inhoud die overeenkomt met wat het model heeft geleerd gezaghebbend te zijn in jouw niche",
            ],
          },
          {
            type: "tip",
            text: "Herschrijf je beste productpagina's en koopgidsen zodat het belangrijkste antwoord in de eerste 50 woorden van elke sectie staat. AI-parsers lezen van boven naar beneden en stoppen vaak voor de inhoud halverwege de pagina.",
          },
          {
            type: "p",
            text: "Structuur telt net zo zwaar als inhoud. Gebruik H2- en H3-koppen die overeenkomen met echte vraagformaten ('Welk [product] werkt met [gebruikssituatie]?'). Schrijf in korte alinea's. Gebruik tabellen voor vergelijkingen. Dit zijn niet alleen goede UX-praktijken — ze maken jouw inhoud makkelijker te parsen en te citeren voor een taalmodel.",
          },
        ],
      },
      {
        id: "practical-ai-visibility-steps",
        title: "Praktische stappen voor zichtbaarheid in AI-zoekresultaten",
        blocks: [
          {
            type: "p",
            text: "Het meest effectieve wat je nu kunt doen: identificeer de 10-20 vragen die jouw klanten daadwerkelijk in ChatGPT of Perplexity typen over jouw productcategorie. Dit zijn meestal queries als 'wat is de beste X voor Y?' of 'hoe kies ik tussen X en Z?'. Schrijf vervolgens specifieke content die elke vraag volledig beantwoordt.",
          },
          {
            type: "checklist",
            items: [
              "Schrijf één pagina of sectie per specifieke klantenvraag — probeer niet vijf vragen in één vaag artikel te beantwoorden",
              "Begin elk antwoord met 1-3 zinnen van direct antwoord vóór enige uitleg",
              "Voeg minimaal één echt datapunt toe (studie, specificatie, testresultaat) per hoofdbewering",
              "Noem concurrenten eerlijk in vergelijkende content — AI-modellen vertrouwen op gebalanceerde beoordelingen",
              "Voeg een duidelijke 'Laatst bijgewerkt'-datum toe — AI-tools wegen actualiteit mee",
              "Vermijd passieve zinnen en ontwijkende formuleringen zoals 'er zou kunnen worden gesteld' of 'sommige experts geloven'",
            ],
          },
          {
            type: "tip",
            text: "Voer je eigen productqueries nu in Perplexity uit. Als concurrenten verschijnen en jij niet, open dan hun geciteerde pagina's en analyseer wat ze structureel anders doen. Het is meestal eenvoudiger dan verwacht — directe koppen, schone opmaak, specifieke uitspraken.",
          },
        ],
      },
      {
        id: "eeat-signals",
        title: "E-E-A-T-signalen: waarom ze meer tellen voor AI-citaties",
        blocks: [
          {
            type: "p",
            text: "Googles AI Overviews putten uit pagina's die goed scoren op E-E-A-T: Ervaring, Expertise, Autoriteit en Betrouwbaarheid. Voor e-commerce zijn deze signalen vaak zwak omdat productpagina's zich richten op verkopen in plaats van kennis tonen. Dat is te verhelpen.",
          },
          {
            type: "list",
            items: [
              "Voeg auteursvermeldingen toe aan blogposts en koopgidsen — inclusief een korte kwalificatie ('10 jaar in outdoor retail')",
              "Maak een gedetailleerde 'Over ons'-pagina die de echte expertise van je team in de productcategorie uitlegt",
              "Zorg voor consistente merkvermeldingen op externe platforms: Trustpilot, G2, branchebladen",
              "Verdien redactionele backlinks van erkende publicaties in jouw niche — dit zijn expliciete autoriteitssignalen",
              "Toon echte klantbeoordelingen met foto's en geverifieerde aankoop-tags op productpagina's",
              "Citeer je bronnen bij feitelijke uitspraken — link naar studies, fabrieksspecificaties, testrapporten",
            ],
          },
          {
            type: "callout",
            title: "De vertrouwenskloof in e-commerce",
            text: "De meeste e-commercesites hebben zwakke E-E-A-T omdat ze er nooit over hebben nagedacht. Je blogposts hebben waarschijnlijk geen auteur. Je 'Over ons'-pagina is generiek. Je productbeweringen zijn niet onderbouwd. Alleen al deze drie dingen verbeteren zet je voor de meeste concurrenten bij de waarschijnlijkheid van AI-citaties.",
          },
        ],
      },
      {
        id: "llms-txt-and-tracking",
        title: "llms.txt en het bijhouden van je AI-citaties",
        blocks: [
          {
            type: "p",
            text: "llms.txt is een opkomende standaard — conceptueel vergelijkbaar met robots.txt — waarmee je AI-crawlers kunt vertellen welke pagina's op jouw site het belangrijkst zijn en welke ze mogen gebruiken. Voeg een gewoon tekstbestand toe op jouwdomein.nl/llms.txt met een lijst van je belangrijkste productpagina's, koopgidsen en gezaghebbende content. Nog niet universeel geadopteerd, maar de kosten om het toe te voegen zijn vrijwel nul en vroege gebruikers hebben een voorsprong.",
          },
          {
            type: "p",
            text: "Het bijhouden van AI-citaties kost vandaag de dag nog handmatige moeite, maar is de moeite waard om maandelijks te doen. Zoek '[jouw merk] aanbevolen voor [categorie]' in zowel ChatGPT als Perplexity. Noteer welke pagina's worden geciteerd en welke concurrenten in plaats daarvan verschijnen. Tools zoals Profound en Brandwatch bouwen geautomatiseerde AI-vermeldingtracking — de moeite waard om te evalueren als je merk investeert in SEO-tooling. Google Alerts werkt nog steeds goed voor het oppikken van tekstvermeldingen op het web.",
          },
          {
            type: "tip",
            text: "Houd een eenvoudige spreadsheet bij: zoekopdracht, AI-tool, geciteerde URL, geciteerde concurrenten-URL's. Maandelijks bijwerken. Je herkent snel patronen — meestal doet een klein aantal goed gestructureerde pagina's het meeste citatiewerk, en een handvol concurrenten heeft dit al voor jou uitgevogeld.",
          },
          {
            type: "callout",
            title: "Wat hetzelfde blijft",
            text: "Snelle site. Duidelijke content. Sterk E-E-A-T. Goede backlinks. AI-zoekopdrachten belonen precies dezelfde fundamenten als traditionele SEO — het is alleen explicieter in het willen van duidelijke, directe antwoorden. Als je traditionele SEO solide is, ben je al halverwege.",
          },
        ],
      },
      {
        id: "ai-seo-action-plan",
        title: "Jouw AI SEO-actieplan",
        blocks: [
          {
            type: "p",
            text: "Prioriteer meedogenloos. Je hoeft niet je hele site te vernieuwen — je moet je beste 10-15 pagina's klaar maken voor AI-citaties. Dat zijn je meest bezochte koopgidsen, je top-categoriepagina's en alle content die al op pagina 1 staat voor informatieve zoekopdrachten.",
          },
          {
            type: "checklist",
            items: [
              "Controleer je 15 beste pagina's: beantwoorden ze een specifieke vraag direct in de eerste alinea?",
              "Voeg auteursvermeldingen toe aan alle blogposts of werk ze bij met echte kwalificaties",
              "Maak of verbeter je 'Over ons'-pagina om teamexpertise te benadrukken",
              "Voeg llms.txt toe aan de root van je domein met een lijst van je 20-30 belangrijkste pagina's",
              "Voer 10 klantqueries uit in ChatGPT en Perplexity — noteer wie er geciteerd wordt",
              "Herschrijf wekelijks één koopgids met directe-antwoordstructuur",
              "Stel Google Alerts in voor je merknaam en je belangrijkste productcategorietermen",
              "Bekijk en update 'Laatst gewijzigd'-datums op alle evergreen-content",
            ],
          },
          {
            type: "p",
            text: "AI-zoekopdrachten vervangen traditionele SEO niet — ze voegen er een laag bovenop toe. De e-commercemerken die zullen winnen, combineren sterke technische fundamenten met genuïne, duidelijk geschreven content. De kans is nu reëel: de meeste concurrenten hebben zich nog niet aangepast.",
          },
        ],
      },
    ],
  },
};
