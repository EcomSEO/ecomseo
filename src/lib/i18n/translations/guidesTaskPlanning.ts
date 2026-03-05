import type { Locale } from "../config";
import type { GuideSection, GuideNav } from "@/components/guides/GuidePageTemplate";

export const guidesTaskPlanningT: Record<
  Locale,
  { sections: GuideSection[]; nav: GuideNav }
> = {
  en: {
    nav: {
      prev: { href: "/guides/off-page-audit", category: "Research & Ideation", title: "Off-Page Audit" },
      next: { href: "/guides/link-building-tactics", category: "Advanced Ecommerce SEO", title: "Link Building Tactics" },
    },
    sections: [
      {
        id: "prioritization-beats-volume",
        title: "Prioritization Beats Volume Every Time",
        blocks: [
          {
            type: "p",
            text: "The hardest part of ecommerce SEO is not knowing what to do. Most store owners have a list of 40 things they could work on. The problem is that doing 50 medium-impact tasks will not beat doing 5 high-impact ones. Volume is not progress. Direction is.",
          },
          {
            type: "p",
            text: "A technical fix that gets 30 category pages properly indexed will do more for your traffic than writing 15 blog posts that rank for nothing. A title tag fix on your top 10 product pages can move rankings within weeks. The output you should optimize for is ranking improvement per hour of effort — not number of tasks completed.",
          },
          {
            type: "callout",
            title: "Write down your hypothesis before touching anything",
            text: "Before any SEO task, write one sentence: what you expect to happen and why. 'Fixing the duplicate title tags on collection pages should improve rankings for category keywords, because Google currently has no clear signal which page to rank.' This takes 30 seconds and forces clarity. Four weeks later, you can check if you were right.",
          },
        ],
      },
      {
        id: "impact-effort-matrix",
        title: "The Impact vs. Effort Matrix",
        blocks: [
          {
            type: "p",
            text: "Map every SEO task you have on a simple 2x2 grid: impact on one axis, effort on the other. This is not a complex framework — it is a forcing function to stop you from defaulting to easy tasks that feel productive but aren't.",
          },
          {
            type: "list",
            items: [
              "High impact + low effort: do this week, no discussion. Examples: fixing broken canonical tags, adding missing title tags flagged in GSC, updating H1s on your best product pages.",
              "High impact + high effort: schedule with proper resourcing. These are your big projects — site architecture changes, new category page creation, building out a topical content cluster.",
              "Low impact + low effort: batch and schedule once a month. Image compression, minor schema additions, cleaning up old redirects.",
              "Low impact + high effort: cut completely. If a task will take 20 hours and move nothing, it does not belong on the list.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1280&q=80",
            alt: "Notebook with planning grid open on a desk",
            caption: "A simple prioritization grid saves you from weeks of misdirected effort.",
          },
          {
            type: "tip",
            text: "Build your matrix in Google Sheets. One column per task, rows for Impact (1–5), Effort (1–5), and a calculated Priority Score (Impact divided by Effort). Sort by Priority Score descending. The top of the list is your sprint backlog.",
          },
        ],
      },
      {
        id: "quick-wins",
        title: "Quick Wins: Where to Look First",
        blocks: [
          {
            type: "p",
            text: "Quick wins are real. They are not shortcuts or tricks — they are tasks where the effort is low relative to the likely impact. Before you plan a full SEO program, spend one week only on quick wins. They move rankings, show stakeholders that SEO works, and give you data to inform your bigger decisions.",
          },
          {
            type: "checklist",
            items: [
              "Missing or duplicate title tags: pull these from GSC → Coverage → Excluded, or run Screaming Frog on your site. Fix the worst offenders on highest-traffic pages first.",
              "Page 2 opportunities: in GSC, filter for queries where your average position is 11–20. These pages are one push away from page 1. Add internal links, tighten the title tag, improve the H1.",
              "Internal link gaps: find your highest-authority pages (check Ahrefs for most-linked internal pages) and add links from them to important pages that aren't getting internal link equity.",
              "Missing image alt text: run Screaming Frog → Images → filter by missing alt text. Export and fix in bulk via your CMS or a developer. This is often an overnight task on a large ecommerce site.",
              "Thin category pages: category pages with fewer than 150 words of unique content and no internal links are often poorly ranked. Add a short category intro, a FAQ block, and internal links to top products.",
            ],
          },
          {
            type: "callout",
            title: "GSC data has a 2–3 day delay",
            text: "When you pull position data from Google Search Console to find your page 2 opportunities, remember the data is 2–3 days old. Rankings fluctuate. Sort by average position and look at the impressions column too — a page at position 14 with 5,000 impressions per month is a much better target than one at position 12 with 40 impressions.",
          },
        ],
      },
      {
        id: "sprint-methodology",
        title: "Running SEO Sprints",
        blocks: [
          {
            type: "p",
            text: "Two-week sprints work well for ecommerce SEO. They are short enough to stay focused and long enough to complete meaningful work. At the start of each sprint, define 3–5 concrete deliverables — not vague goals like 'improve SEO', but specific outputs: 'fix canonical tags on 45 collection pages', 'write and publish 3 category page intros', 'build 5 internal links from homepage to top product pages'.",
          },
          {
            type: "p",
            text: "At the end of the sprint, hold a 30-minute review. Did rankings move? Did traffic change on the targeted pages? What blocked you from completing planned tasks? The review is not about celebration or blame — it is about calibration. Your estimates of effort and impact will improve significantly after 3–4 sprints.",
          },
          {
            type: "tip",
            text: "Track your sprint deliverables in Notion or a shared Google Sheets doc. Keep a running log with four columns: Task, Hypothesis, Date Completed, and Outcome (checked 4–6 weeks later). This becomes your SEO evidence base — the thing you point to when stakeholders ask 'is SEO actually working?'",
          },
          {
            type: "list",
            items: [
              "Sprint start: prioritize backlog, define 3–5 deliverables, assign owners",
              "Week 1: execute tasks, flag blockers early",
              "Week 2: complete deliverables, begin tracking outcomes",
              "Sprint end: 30-minute review, update priority scores based on what you learned",
              "Repeat: adjust sprint scope up or down based on team capacity",
            ],
          },
        ],
      },
      {
        id: "tracking-seo-tasks",
        title: "Tracking SEO Work Without the Overhead",
        blocks: [
          {
            type: "p",
            text: "Notion, Google Sheets, and Linear all work for tracking SEO tasks. Trello works too if your team is already in it. The tool matters less than the discipline of actually using it. What kills most SEO programs is not lack of ideas — it is doing tasks without recording the hypothesis, then having no idea four weeks later whether the work produced any result.",
          },
          {
            type: "p",
            text: "Keep it simple. A task log with five fields is enough: what you did, why you did it (the hypothesis), when you did it, what page or section it affected, and the outcome. The outcome field stays empty until 4–6 weeks after the task completes — that is when you go back and check whether rankings or traffic moved.",
          },
          {
            type: "callout",
            title: "Separate your task log from your ideas backlog",
            text: "Ideas are not tasks. When you think of something to try, it goes into an ideas list — unrefined, unestimated. At the start of each sprint, you pull from the ideas list, estimate impact and effort, and promote it to the task log. Mixing ideas and tasks in the same list creates chaos and analysis paralysis.",
          },
        ],
      },
      {
        id: "sequence-and-quarterly-loop",
        title: "When to Do What — and the Quarterly Audit Loop",
        blocks: [
          {
            type: "p",
            text: "Sequence matters in SEO. Technical fixes come first because they are foundational — they unblock everything else. If Google can't crawl and index your pages properly, no amount of content or link building will fix your rankings. After technical, work on on-page: title tags, headings, content quality, internal linking. Then content creation. Then link building. Doing link building without a clean technical foundation is money wasted.",
          },
          {
            type: "list",
            items: [
              "Phase 1 — Technical: crawlability, indexation, site speed, canonical tags, structured data. Use Screaming Frog and GSC Coverage report.",
              "Phase 2 — On-page: title tags, H1s, meta descriptions, internal linking structure, thin content. Reference your /guides/on-page-audit findings.",
              "Phase 3 — Content: category page copy, buying guides, FAQ sections, blog content targeting informational queries.",
              "Phase 4 — Link building: only after phases 1–3 are in reasonable shape. See /guides/link-building-tactics for where to start.",
            ],
          },
          {
            type: "tip",
            text: "Set a calendar reminder every 3 months for a mini audit. Pull fresh GSC data, check your top 20 ranking pages, re-run Screaming Frog, and check your backlink profile in Ahrefs. Rankings shift, competitors update their sites, algorithm updates happen. The full audit cycle from /guides/fundamentals through /guides/off-page-audit is never truly done — it loops. Build that into your planning from day one.",
          },
          {
            type: "p",
            text: "If you are looking to go deeper on any part of the SEO program, the full guide structure starts at /guides/fundamentals. For understanding what competitors are doing while you plan your own tasks, see /guides/competitor-analysis. And if you are making sense of ranking data to inform your sprint priorities, /guides/analytics-tracking covers how to read the numbers properly.",
          },
        ],
      },
    ],
  },

  de: {
    nav: {
      prev: { href: "/guides/off-page-audit", category: "Recherche & Ideenfindung", title: "Off-Page-Audit" },
      next: { href: "/guides/link-building-tactics", category: "Fortgeschrittenes Ecommerce-SEO", title: "Link-Building-Taktiken" },
    },
    sections: [
      {
        id: "prioritization-beats-volume",
        title: "Priorisierung schlägt Masse — immer",
        blocks: [
          {
            type: "p",
            text: "Der schwierigste Teil beim Ecommerce-SEO ist nicht zu wissen, was zu tun ist. Die meisten Shop-Betreiber haben eine Liste mit 40 Dingen, an denen sie arbeiten könnten. Das Problem: 50 mittelmäßige Aufgaben abzuarbeiten wird nie 5 hochimpaktige schlagen. Menge ist kein Fortschritt. Richtung ist es.",
          },
          {
            type: "p",
            text: "Eine technische Korrektur, die 30 Kategorie-Seiten richtig indexiert, tut mehr für deinen Traffic als 15 Blogbeiträge, die für nichts ranken. Eine Title-Tag-Korrektur auf deinen Top-10-Produktseiten kann Rankings innerhalb von Wochen verschieben. Die Kennzahl, die du optimieren solltest, ist: Ranking-Verbesserung pro Arbeitsstunde — nicht Anzahl abgehakter Aufgaben.",
          },
          {
            type: "callout",
            title: "Schreib deine Hypothese auf, bevor du irgendetwas anfasst",
            text: "Vor jeder SEO-Aufgabe notiere einen Satz: Was du erwartest zu erreichen und warum. 'Das Beheben der doppelten Title-Tags auf Kollektionsseiten sollte die Rankings für Kategorie-Keywords verbessern, weil Google aktuell kein klares Signal hat, welche Seite gerankt werden soll.' Das dauert 30 Sekunden und erzwingt Klarheit. Vier Wochen später kannst du prüfen, ob du recht hattest.",
          },
        ],
      },
      {
        id: "impact-effort-matrix",
        title: "Die Impact-vs.-Aufwand-Matrix",
        blocks: [
          {
            type: "p",
            text: "Trage jede SEO-Aufgabe in ein einfaches 2x2-Raster ein: Impact auf einer Achse, Aufwand auf der anderen. Das ist kein komplexes Framework — es ist ein Mechanismus, der dich davon abhält, standardmäßig leichte Aufgaben zu machen, die sich produktiv anfühlen, es aber nicht sind.",
          },
          {
            type: "list",
            items: [
              "Hoher Impact + geringer Aufwand: Diese Woche erledigen, kein Diskurs. Beispiele: kaputte Canonical-Tags beheben, fehlende Title-Tags aus GSC ergänzen, H1s auf deinen besten Produktseiten aktualisieren.",
              "Hoher Impact + hoher Aufwand: Einplanen und richtig resourcieren. Das sind deine großen Projekte — Änderungen der Site-Architektur, Erstellen neuer Kategorie-Seiten, Aufbau eines thematischen Content-Clusters.",
              "Geringer Impact + geringer Aufwand: Bündeln und einmal im Monat einplanen. Bildkomprimierung, kleinere Schema-Ergänzungen, Bereinigung alter Weiterleitungen.",
              "Geringer Impact + hoher Aufwand: Vollständig streichen. Wenn eine Aufgabe 20 Stunden kostet und nichts bewegt, gehört sie nicht auf die Liste.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1280&q=80",
            alt: "Notizbuch mit Planungsraster auf einem Schreibtisch",
            caption: "Ein einfaches Priorisierungsraster bewahrt dich vor wochenlangem Aufwand in die falsche Richtung.",
          },
          {
            type: "tip",
            text: "Erstelle deine Matrix in Google Sheets. Eine Spalte pro Aufgabe, Zeilen für Impact (1–5), Aufwand (1–5) und einen berechneten Prioritätsscore (Impact geteilt durch Aufwand). Sortiere absteigend nach Prioritätsscore. Die Spitze der Liste ist dein Sprint-Backlog.",
          },
        ],
      },
      {
        id: "quick-wins",
        title: "Quick Wins: Wo zuerst suchen",
        blocks: [
          {
            type: "p",
            text: "Quick Wins sind real. Es sind keine Abkürzungen oder Tricks — es sind Aufgaben, bei denen der Aufwand im Verhältnis zum wahrscheinlichen Impact gering ist. Bevor du ein vollständiges SEO-Programm planst, verbringe eine Woche ausschließlich mit Quick Wins. Sie bewegen Rankings, zeigen Stakeholdern, dass SEO funktioniert, und liefern Daten für deine größeren Entscheidungen.",
          },
          {
            type: "checklist",
            items: [
              "Fehlende oder doppelte Title-Tags: Diese aus GSC → Abdeckung → Ausgeschlossen abrufen oder Screaming Frog auf deiner Site laufen lassen. Die schlimmsten auf Seiten mit höchstem Traffic zuerst beheben.",
              "Seite-2-Chancen: In GSC nach Suchanfragen filtern, bei denen deine durchschnittliche Position 11–20 ist. Diese Seiten sind einen Schritt von Seite 1 entfernt. Interne Links hinzufügen, Title-Tag straffen, H1 verbessern.",
              "Interne Link-Lücken: Deine autorität-stärksten Seiten finden (in Ahrefs meistverlinkte interne Seiten prüfen) und Links von diesen zu wichtigen Seiten hinzufügen, die noch keinen internen Link-Wert erhalten.",
              "Fehlender Bild-Alt-Text: Screaming Frog → Bilder → nach fehlendem Alt-Text filtern. Exportieren und in großen Mengen über dein CMS oder einen Entwickler beheben. Das ist auf einer großen Ecommerce-Site oft eine Overnight-Aufgabe.",
              "Dünne Kategorie-Seiten: Kategorieseiten mit weniger als 150 Wörtern eindeutigem Inhalt und ohne interne Links ranken oft schlecht. Kurze Kategorie-Einleitung, FAQ-Block und interne Links zu Top-Produkten hinzufügen.",
            ],
          },
          {
            type: "callout",
            title: "GSC-Daten haben 2–3 Tage Verzögerung",
            text: "Wenn du Positionsdaten aus der Google Search Console abrufst, um deine Seite-2-Chancen zu finden, denke daran: Die Daten sind 2–3 Tage alt. Rankings schwanken. Sortiere nach durchschnittlicher Position und schaue auch auf die Impressionen-Spalte — eine Seite auf Position 14 mit 5.000 Impressionen pro Monat ist ein viel besseres Ziel als eine auf Position 12 mit 40 Impressionen.",
          },
        ],
      },
      {
        id: "sprint-methodology",
        title: "SEO-Sprints durchführen",
        blocks: [
          {
            type: "p",
            text: "Zwei-Wochen-Sprints funktionieren gut für Ecommerce-SEO. Kurz genug, um fokussiert zu bleiben, lang genug, um bedeutungsvolle Arbeit abzuschließen. Zu Beginn jedes Sprints werden 3–5 konkrete Lieferergebnisse definiert — keine vagen Ziele wie 'SEO verbessern', sondern spezifische Outputs: 'Canonical-Tags auf 45 Kollektionsseiten beheben', '3 Kategorie-Seiten-Einleitungen schreiben und veröffentlichen', '5 interne Links von der Homepage zu Top-Produktseiten aufbauen'.",
          },
          {
            type: "p",
            text: "Am Ende des Sprints findet ein 30-minütiges Review statt. Haben sich Rankings bewegt? Hat sich der Traffic auf den Zielseiten verändert? Was hat dich daran gehindert, geplante Aufgaben abzuschließen? Das Review ist weder Feier noch Schuldzuweisung — es ist Kalibrierung. Deine Schätzungen von Aufwand und Impact werden nach 3–4 Sprints deutlich besser.",
          },
          {
            type: "tip",
            text: "Verfolge deine Sprint-Lieferergebnisse in Notion oder einem geteilten Google-Sheets-Dokument. Halte ein laufendes Log mit vier Spalten: Aufgabe, Hypothese, Abschlussdatum und Ergebnis (4–6 Wochen später geprüft). Das wird deine SEO-Evidenzbasis — das, worauf du zeigst, wenn Stakeholder fragen: 'Funktioniert SEO eigentlich?'",
          },
          {
            type: "list",
            items: [
              "Sprint-Start: Backlog priorisieren, 3–5 Lieferergebnisse definieren, Verantwortliche zuweisen",
              "Woche 1: Aufgaben ausführen, Blocker früh melden",
              "Woche 2: Lieferergebnisse abschließen, Ergebnisverfolgung beginnen",
              "Sprint-Ende: 30-minütiges Review, Prioritätsscore basierend auf Erkenntnissen aktualisieren",
              "Wiederholen: Sprint-Umfang basierend auf Teamkapazität anpassen",
            ],
          },
        ],
      },
      {
        id: "tracking-seo-tasks",
        title: "SEO-Aufgaben ohne großen Overhead tracken",
        blocks: [
          {
            type: "p",
            text: "Notion, Google Sheets und Linear eignen sich alle zum Tracken von SEO-Aufgaben. Trello funktioniert auch, wenn dein Team bereits darin arbeitet. Das Tool spielt eine kleinere Rolle als die Disziplin, es tatsächlich zu benutzen. Was die meisten SEO-Programme zum Scheitern bringt, ist nicht Mangel an Ideen — es ist, Aufgaben ohne dokumentierte Hypothese zu erledigen und vier Wochen später keine Ahnung zu haben, ob die Arbeit ein Ergebnis hatte.",
          },
          {
            type: "p",
            text: "Halte es einfach. Ein Aufgaben-Log mit fünf Feldern reicht: was du getan hast, warum du es getan hast (die Hypothese), wann du es getan hast, welche Seite oder welchen Bereich es betrifft, und das Ergebnis. Das Ergebnisfeld bleibt leer, bis 4–6 Wochen nach Abschluss der Aufgabe vergangen sind — dann gehst du zurück und prüfst, ob sich Rankings oder Traffic bewegt haben.",
          },
          {
            type: "callout",
            title: "Aufgaben-Log und Ideen-Backlog trennen",
            text: "Ideen sind keine Aufgaben. Wenn dir etwas einfällt, das du ausprobieren möchtest, kommt es auf eine Ideenliste — unverfeinert, ohne Schätzung. Zu Beginn jedes Sprints greifst du aus der Ideenliste, schätzt Impact und Aufwand und befördest die Idee ins Aufgaben-Log. Ideen und Aufgaben in derselben Liste zu mischen schafft Chaos und Entscheidungsparalyse.",
          },
        ],
      },
      {
        id: "sequence-and-quarterly-loop",
        title: "Wann was tun — und der vierteljährliche Audit-Zyklus",
        blocks: [
          {
            type: "p",
            text: "Reihenfolge ist im SEO entscheidend. Technische Korrekturen kommen zuerst, weil sie fundamental sind — sie entsperren alles andere. Wenn Google deine Seiten nicht richtig crawlen und indexieren kann, wird keine Menge Content oder Linkaufbau deine Rankings verbessern. Nach dem Technischen: On-page — Title-Tags, Überschriften, Content-Qualität, interne Verlinkung. Dann Content-Erstellung. Dann Linkaufbau. Linkaufbau ohne saubere technische Basis ist verschwendetes Geld.",
          },
          {
            type: "list",
            items: [
              "Phase 1 — Technisch: Crawlbarkeit, Indexierung, Seitengeschwindigkeit, Canonical-Tags, strukturierte Daten. Screaming Frog und GSC-Abdeckungsbericht verwenden.",
              "Phase 2 — On-page: Title-Tags, H1s, Meta-Beschreibungen, interne Verlinkungsstruktur, dünner Content. Erkenntnisse aus /guides/on-page-audit einfließen lassen.",
              "Phase 3 — Content: Kategorieseiten-Text, Kaufratgeber, FAQ-Abschnitte, Blog-Content für informationelle Suchanfragen.",
              "Phase 4 — Linkaufbau: Erst wenn Phasen 1–3 in einem ordentlichen Zustand sind. Startpunkt unter /guides/link-building-tactics.",
            ],
          },
          {
            type: "tip",
            text: "Stelle alle 3 Monate eine Kalender-Erinnerung für einen Mini-Audit. Neue GSC-Daten abrufen, deine Top-20-Ranking-Seiten prüfen, Screaming Frog erneut laufen lassen und dein Backlink-Profil in Ahrefs prüfen. Rankings verschieben sich, Wettbewerber aktualisieren ihre Seiten, Algorithmus-Updates passieren. Der vollständige Audit-Zyklus von /guides/fundamentals bis /guides/off-page-audit ist nie wirklich abgeschlossen — er läuft im Kreis. Das von Anfang an in die Planung einbauen.",
          },
          {
            type: "p",
            text: "Wer tiefer in einzelne Bereiche des SEO-Programms einsteigen möchte, findet die vollständige Guide-Struktur unter /guides/fundamentals. Für das Verständnis, was Wettbewerber tun, während du deine eigenen Aufgaben planst, hilft /guides/competitor-analysis. Und wer Ranking-Daten für die Sprint-Priorisierung interpretieren möchte, findet unter /guides/analytics-tracking eine Anleitung zum richtigen Lesen der Zahlen.",
          },
        ],
      },
    ],
  },

  fr: {
    nav: {
      prev: { href: "/guides/off-page-audit", category: "Recherche & Idéation", title: "Audit Off-Page" },
      next: { href: "/guides/link-building-tactics", category: "SEO Ecommerce Avancé", title: "Tactiques de Link Building" },
    },
    sections: [
      {
        id: "prioritization-beats-volume",
        title: "La priorisation bat le volume à chaque fois",
        blocks: [
          {
            type: "p",
            text: "La partie la plus difficile du SEO ecommerce n'est pas de savoir quoi faire. La plupart des propriétaires de boutiques ont une liste de 40 choses sur lesquelles ils pourraient travailler. Le problème, c'est que réaliser 50 tâches à impact moyen ne battra jamais 5 tâches à fort impact. Le volume n'est pas du progrès. La direction en est.",
          },
          {
            type: "p",
            text: "Un correctif technique qui indexe correctement 30 pages de catégorie fera plus pour votre trafic que 15 articles de blog qui ne se classent pour rien. Corriger les balises title de vos 10 meilleures pages produit peut faire bouger les classements en quelques semaines. La métrique à optimiser est : amélioration de classement par heure d'effort — pas le nombre de tâches cochées.",
          },
          {
            type: "callout",
            title: "Rédigez votre hypothèse avant de toucher quoi que ce soit",
            text: "Avant toute tâche SEO, écrivez une phrase : ce que vous attendez et pourquoi. 'Corriger les balises title dupliquées sur les pages de collection devrait améliorer les classements pour les mots-clés de catégorie, car Google n'a actuellement aucun signal clair sur quelle page classer.' Cela prend 30 secondes et force la clarté. Quatre semaines plus tard, vous pourrez vérifier si vous aviez raison.",
          },
        ],
      },
      {
        id: "impact-effort-matrix",
        title: "La matrice impact vs. effort",
        blocks: [
          {
            type: "p",
            text: "Positionnez chaque tâche SEO sur une simple grille 2x2 : impact sur un axe, effort sur l'autre. Ce n'est pas un cadre complexe — c'est un mécanisme pour vous empêcher de vous rabattre sur des tâches faciles qui semblent productives mais ne le sont pas.",
          },
          {
            type: "list",
            items: [
              "Impact élevé + effort faible : à faire cette semaine, sans discussion. Exemples : corriger les balises canoniques cassées, ajouter les balises title manquantes signalées dans la GSC, mettre à jour les H1 sur vos meilleures pages produit.",
              "Impact élevé + effort élevé : planifier avec les ressources appropriées. Ce sont vos grands projets — modifications d'architecture de site, création de nouvelles pages de catégorie, construction d'un cluster de contenu thématique.",
              "Impact faible + effort faible : regrouper et planifier une fois par mois. Compression d'images, ajouts de schéma mineurs, nettoyage des anciennes redirections.",
              "Impact faible + effort élevé : supprimer complètement. Si une tâche prend 20 heures et ne déplace rien, elle n'a pas sa place sur la liste.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1280&q=80",
            alt: "Carnet avec grille de planification ouvert sur un bureau",
            caption: "Une simple grille de priorisation vous évite des semaines d'efforts mal dirigés.",
          },
          {
            type: "tip",
            text: "Construisez votre matrice dans Google Sheets. Une colonne par tâche, des lignes pour Impact (1–5), Effort (1–5), et un Score de Priorité calculé (Impact divisé par Effort). Triez par Score de Priorité décroissant. Le haut de la liste est votre backlog de sprint.",
          },
        ],
      },
      {
        id: "quick-wins",
        title: "Quick wins : où chercher en premier",
        blocks: [
          {
            type: "p",
            text: "Les quick wins sont réels. Ce ne sont pas des raccourcis ou des astuces — ce sont des tâches où l'effort est faible par rapport à l'impact probable. Avant de planifier un programme SEO complet, passez une semaine uniquement sur les quick wins. Ils font bouger les classements, montrent aux parties prenantes que le SEO fonctionne, et vous fournissent des données pour vos décisions plus importantes.",
          },
          {
            type: "checklist",
            items: [
              "Balises title manquantes ou dupliquées : récupérez-les depuis GSC → Couverture → Exclus, ou lancez Screaming Frog sur votre site. Corrigez les pires en priorité sur les pages à plus fort trafic.",
              "Opportunités page 2 : dans la GSC, filtrez les requêtes où votre position moyenne est 11–20. Ces pages sont à un pas de la page 1. Ajoutez des liens internes, resserrez la balise title, améliorez le H1.",
              "Lacunes de liens internes : trouvez vos pages à plus forte autorité (vérifiez dans Ahrefs les pages internes les plus liées) et ajoutez des liens depuis celles-ci vers des pages importantes qui ne reçoivent pas encore d'equity interne.",
              "Alt text d'image manquant : Screaming Frog → Images → filtrer par alt text manquant. Exporter et corriger en masse via votre CMS ou un développeur. C'est souvent une tâche d'une nuit sur un grand site ecommerce.",
              "Pages de catégorie pauvres en contenu : les pages de catégorie avec moins de 150 mots de contenu unique et sans liens internes se classent souvent mal. Ajoutez une courte intro de catégorie, un bloc FAQ et des liens internes vers les produits phares.",
            ],
          },
          {
            type: "callout",
            title: "Les données GSC ont un délai de 2–3 jours",
            text: "Lorsque vous extrayez des données de position de la Google Search Console pour trouver vos opportunités de page 2, rappelez-vous que les données ont 2–3 jours de retard. Les classements fluctuent. Triez par position moyenne et regardez aussi la colonne impressions — une page en position 14 avec 5 000 impressions par mois est une cible bien meilleure qu'une page en position 12 avec 40 impressions.",
          },
        ],
      },
      {
        id: "sprint-methodology",
        title: "Conduire des sprints SEO",
        blocks: [
          {
            type: "p",
            text: "Les sprints de deux semaines fonctionnent bien pour le SEO ecommerce. Assez courts pour rester concentré, assez longs pour réaliser un travail significatif. En début de sprint, définissez 3 à 5 livrables concrets — pas des objectifs vagues comme 'améliorer le SEO', mais des outputs spécifiques : 'corriger les balises canoniques sur 45 pages de collection', 'rédiger et publier 3 intros de pages de catégorie', 'construire 5 liens internes depuis la homepage vers les meilleures pages produit'.",
          },
          {
            type: "p",
            text: "En fin de sprint, tenez une revue de 30 minutes. Les classements ont-ils bougé ? Le trafic a-t-il changé sur les pages ciblées ? Qu'est-ce qui vous a empêché d'achever les tâches prévues ? La revue n'est pas une célébration ni une recherche de responsable — c'est une calibration. Vos estimations d'effort et d'impact s'amélioreront significativement après 3 à 4 sprints.",
          },
          {
            type: "tip",
            text: "Suivez vos livrables de sprint dans Notion ou un Google Sheets partagé. Gardez un journal avec quatre colonnes : Tâche, Hypothèse, Date de complétion et Résultat (vérifié 4 à 6 semaines plus tard). Cela devient votre base de preuves SEO — ce sur quoi vous pointez quand les parties prenantes demandent : 'le SEO fonctionne-t-il vraiment ?'",
          },
          {
            type: "list",
            items: [
              "Début de sprint : prioriser le backlog, définir 3–5 livrables, assigner des responsables",
              "Semaine 1 : exécuter les tâches, signaler les blocages tôt",
              "Semaine 2 : finaliser les livrables, commencer à suivre les résultats",
              "Fin de sprint : revue de 30 min, mettre à jour les scores de priorité basés sur les apprentissages",
              "Répéter : ajuster la portée du sprint selon la capacité de l'équipe",
            ],
          },
        ],
      },
      {
        id: "tracking-seo-tasks",
        title: "Suivre le travail SEO sans alourdir les process",
        blocks: [
          {
            type: "p",
            text: "Notion, Google Sheets et Linear fonctionnent tous pour suivre les tâches SEO. Trello fonctionne également si votre équipe l'utilise déjà. L'outil compte moins que la discipline de l'utiliser réellement. Ce qui fait échouer la plupart des programmes SEO, ce n'est pas le manque d'idées — c'est de réaliser des tâches sans noter l'hypothèse, puis de n'avoir aucune idée quatre semaines plus tard si le travail a produit un résultat.",
          },
          {
            type: "p",
            text: "Restez simple. Un journal de tâches avec cinq champs suffit : ce que vous avez fait, pourquoi vous l'avez fait (l'hypothèse), quand vous l'avez fait, quelle page ou section cela a concerné, et le résultat. Le champ résultat reste vide jusqu'à 4 à 6 semaines après la complétion de la tâche — c'est alors que vous revenez vérifier si les classements ou le trafic ont bougé.",
          },
          {
            type: "callout",
            title: "Séparez votre journal de tâches de votre backlog d'idées",
            text: "Les idées ne sont pas des tâches. Quand vous pensez à quelque chose à essayer, ça va sur une liste d'idées — non raffinée, non estimée. En début de sprint, vous puisez dans la liste d'idées, estimez l'impact et l'effort, et le faites passer dans le journal de tâches. Mélanger idées et tâches dans la même liste crée du chaos et une paralysie de l'analyse.",
          },
        ],
      },
      {
        id: "sequence-and-quarterly-loop",
        title: "Quand faire quoi — et la boucle d'audit trimestrielle",
        blocks: [
          {
            type: "p",
            text: "La séquence compte en SEO. Les correctifs techniques passent en premier parce qu'ils sont fondamentaux — ils débloquent tout le reste. Si Google ne peut pas crawler et indexer correctement vos pages, aucun contenu ni link building ne sauvera vos classements. Après le technique : l'on-page — balises title, titres, qualité du contenu, maillage interne. Puis la création de contenu. Puis le link building. Faire du link building sans une base technique saine, c'est de l'argent gaspillé.",
          },
          {
            type: "list",
            items: [
              "Phase 1 — Technique : crawlabilité, indexation, vitesse du site, balises canoniques, données structurées. Utiliser Screaming Frog et le rapport de couverture GSC.",
              "Phase 2 — On-page : balises title, H1, méta-descriptions, structure de maillage interne, contenu pauvre. Se référer aux conclusions de /guides/on-page-audit.",
              "Phase 3 — Contenu : textes de pages de catégorie, guides d'achat, sections FAQ, contenu de blog ciblant les requêtes informationnelles.",
              "Phase 4 — Link building : seulement après que les phases 1–3 sont en bonne forme. Voir /guides/link-building-tactics pour savoir par où commencer.",
            ],
          },
          {
            type: "tip",
            text: "Programmez un rappel calendrier tous les 3 mois pour un mini audit. Extrayez des données GSC fraîches, vérifiez vos 20 meilleures pages en classement, relancez Screaming Frog et vérifiez votre profil de backlinks dans Ahrefs. Les classements bougent, les concurrents mettent à jour leurs sites, des mises à jour d'algorithme surviennent. Le cycle complet d'audit de /guides/fundamentals à /guides/off-page-audit n'est jamais vraiment terminé — il boucle. Intégrez cela dans votre planification dès le premier jour.",
          },
          {
            type: "p",
            text: "Pour approfondir une partie du programme SEO, la structure complète des guides commence à /guides/fundamentals. Pour comprendre ce que font les concurrents pendant que vous planifiez vos propres tâches, consultez /guides/competitor-analysis. Et pour interpréter les données de classement afin d'orienter vos priorités de sprint, /guides/analytics-tracking explique comment lire les chiffres correctement.",
          },
        ],
      },
    ],
  },

  es: {
    nav: {
      prev: { href: "/guides/off-page-audit", category: "Investigación e Ideación", title: "Auditoría Off-Page" },
      next: { href: "/guides/link-building-tactics", category: "SEO Ecommerce Avanzado", title: "Tácticas de Link Building" },
    },
    sections: [
      {
        id: "prioritization-beats-volume",
        title: "La priorización gana al volumen siempre",
        blocks: [
          {
            type: "p",
            text: "La parte más difícil del SEO para ecommerce no es saber qué hacer. La mayoría de los dueños de tiendas tienen una lista de 40 cosas en las que podrían trabajar. El problema es que hacer 50 tareas de impacto medio no va a superar a hacer 5 de alto impacto. El volumen no es progreso. La dirección sí.",
          },
          {
            type: "p",
            text: "Un arreglo técnico que indexa correctamente 30 páginas de categoría hará más por tu tráfico que 15 artículos de blog que no posicionan para nada. Un arreglo de etiquetas de título en tus 10 mejores páginas de producto puede mover rankings en semanas. La métrica que debes optimizar es: mejora de posicionamiento por hora de esfuerzo — no número de tareas completadas.",
          },
          {
            type: "callout",
            title: "Escribe tu hipótesis antes de tocar nada",
            text: "Antes de cualquier tarea SEO, escribe una frase: qué esperas que ocurra y por qué. 'Arreglar las etiquetas de título duplicadas en las páginas de colección debería mejorar los rankings para palabras clave de categoría, porque Google actualmente no tiene ninguna señal clara sobre qué página posicionar.' Esto toma 30 segundos y fuerza la claridad. Cuatro semanas después, puedes comprobar si tenías razón.",
          },
        ],
      },
      {
        id: "impact-effort-matrix",
        title: "La matriz impacto vs. esfuerzo",
        blocks: [
          {
            type: "p",
            text: "Coloca cada tarea SEO en una simple cuadrícula 2x2: impacto en un eje, esfuerzo en el otro. No es un framework complejo — es un mecanismo que te impide ir por defecto a tareas fáciles que parecen productivas pero no lo son.",
          },
          {
            type: "list",
            items: [
              "Alto impacto + bajo esfuerzo: hazlo esta semana, sin discusión. Ejemplos: arreglar etiquetas canónicas rotas, añadir etiquetas de título faltantes indicadas en GSC, actualizar H1s en tus mejores páginas de producto.",
              "Alto impacto + alto esfuerzo: planificar con los recursos adecuados. Son tus grandes proyectos — cambios en la arquitectura del sitio, creación de nuevas páginas de categoría, construcción de un cluster de contenido temático.",
              "Bajo impacto + bajo esfuerzo: agrupar y planificar una vez al mes. Compresión de imágenes, adiciones menores de schema, limpieza de redireccionamientos antiguos.",
              "Bajo impacto + alto esfuerzo: eliminar por completo. Si una tarea toma 20 horas y no mueve nada, no pertenece a la lista.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1280&q=80",
            alt: "Cuaderno con cuadrícula de planificación abierto sobre un escritorio",
            caption: "Una simple cuadrícula de priorización te salva de semanas de esfuerzo mal dirigido.",
          },
          {
            type: "tip",
            text: "Construye tu matriz en Google Sheets. Una columna por tarea, filas para Impacto (1–5), Esfuerzo (1–5) y una Puntuación de Prioridad calculada (Impacto dividido por Esfuerzo). Ordena por Puntuación de Prioridad descendente. La parte superior de la lista es tu backlog de sprint.",
          },
        ],
      },
      {
        id: "quick-wins",
        title: "Quick wins: dónde buscar primero",
        blocks: [
          {
            type: "p",
            text: "Los quick wins son reales. No son atajos ni trucos — son tareas donde el esfuerzo es bajo en relación con el impacto probable. Antes de planificar un programa SEO completo, pasa una semana solo en quick wins. Mueven rankings, demuestran a los stakeholders que el SEO funciona y te dan datos para tus decisiones más grandes.",
          },
          {
            type: "checklist",
            items: [
              "Etiquetas de título faltantes o duplicadas: obtenerlas desde GSC → Cobertura → Excluidas, o ejecutar Screaming Frog en tu sitio. Arreglar primero las peores en las páginas de mayor tráfico.",
              "Oportunidades de página 2: en GSC, filtrar por consultas donde tu posición media es 11–20. Estas páginas están a un paso de la página 1. Añade enlaces internos, afina la etiqueta de título, mejora el H1.",
              "Vacíos de enlaces internos: encuentra tus páginas de mayor autoridad (revisa en Ahrefs las páginas internas más enlazadas) y añade enlaces desde ellas a páginas importantes que aún no reciben equity interna.",
              "Alt text de imagen faltante: Screaming Frog → Imágenes → filtrar por alt text faltante. Exportar y corregir en masa a través de tu CMS o un desarrollador. Esto es a menudo una tarea de una noche en un gran sitio ecommerce.",
              "Páginas de categoría con poco contenido: las páginas de categoría con menos de 150 palabras de contenido único y sin enlaces internos suelen posicionar mal. Añade una breve introducción de categoría, un bloque de FAQ y enlaces internos a los mejores productos.",
            ],
          },
          {
            type: "callout",
            title: "Los datos de GSC tienen un retraso de 2–3 días",
            text: "Cuando extraes datos de posición de Google Search Console para encontrar tus oportunidades de página 2, recuerda que los datos tienen 2–3 días de antigüedad. Los rankings fluctúan. Ordena por posición media y mira también la columna de impresiones — una página en posición 14 con 5.000 impresiones al mes es un objetivo mucho mejor que una en posición 12 con 40 impresiones.",
          },
        ],
      },
      {
        id: "sprint-methodology",
        title: "Ejecutando sprints de SEO",
        blocks: [
          {
            type: "p",
            text: "Los sprints de dos semanas funcionan bien para el SEO ecommerce. Lo suficientemente cortos para mantener el foco y lo suficientemente largos para completar trabajo significativo. Al comienzo de cada sprint, define 3–5 entregables concretos — no objetivos vagos como 'mejorar el SEO', sino outputs específicos: 'arreglar etiquetas canónicas en 45 páginas de colección', 'escribir y publicar 3 introducciones de páginas de categoría', 'construir 5 enlaces internos desde la homepage a las mejores páginas de producto'.",
          },
          {
            type: "p",
            text: "Al final del sprint, realiza una revisión de 30 minutos. ¿Se movieron los rankings? ¿Cambió el tráfico en las páginas objetivo? ¿Qué te impidió completar las tareas planificadas? La revisión no es celebración ni asignación de culpa — es calibración. Tus estimaciones de esfuerzo e impacto mejorarán significativamente después de 3–4 sprints.",
          },
          {
            type: "tip",
            text: "Rastrea tus entregables de sprint en Notion o un Google Sheets compartido. Mantén un registro continuo con cuatro columnas: Tarea, Hipótesis, Fecha de Completación y Resultado (verificado 4–6 semanas después). Esto se convierte en tu base de evidencia SEO — lo que señalas cuando los stakeholders preguntan '¿el SEO está funcionando realmente?'",
          },
          {
            type: "list",
            items: [
              "Inicio de sprint: priorizar backlog, definir 3–5 entregables, asignar responsables",
              "Semana 1: ejecutar tareas, marcar bloqueadores temprano",
              "Semana 2: completar entregables, comenzar a rastrear resultados",
              "Fin de sprint: revisión de 30 min, actualizar puntuaciones de prioridad basadas en lo aprendido",
              "Repetir: ajustar el alcance del sprint según la capacidad del equipo",
            ],
          },
        ],
      },
      {
        id: "tracking-seo-tasks",
        title: "Rastrear el trabajo SEO sin sobrecarga",
        blocks: [
          {
            type: "p",
            text: "Notion, Google Sheets y Linear funcionan todos para rastrear tareas SEO. Trello también funciona si tu equipo ya lo usa. La herramienta importa menos que la disciplina de usarla realmente. Lo que mata la mayoría de los programas SEO no es la falta de ideas — es hacer tareas sin registrar la hipótesis, y luego no tener idea cuatro semanas después de si el trabajo produjo algún resultado.",
          },
          {
            type: "p",
            text: "Mantenlo simple. Un registro de tareas con cinco campos es suficiente: qué hiciste, por qué lo hiciste (la hipótesis), cuándo lo hiciste, qué página o sección afectó, y el resultado. El campo de resultado permanece vacío hasta 4–6 semanas después de que la tarea se completa — ese es el momento para volver y comprobar si los rankings o el tráfico se movieron.",
          },
          {
            type: "callout",
            title: "Separa tu registro de tareas de tu backlog de ideas",
            text: "Las ideas no son tareas. Cuando pienses en algo que probar, va a una lista de ideas — sin refinar, sin estimar. Al comienzo de cada sprint, sacas de la lista de ideas, estimas impacto y esfuerzo, y lo promueves al registro de tareas. Mezclar ideas y tareas en la misma lista crea caos y parálisis de análisis.",
          },
        ],
      },
      {
        id: "sequence-and-quarterly-loop",
        title: "Cuándo hacer qué — y el ciclo de auditoría trimestral",
        blocks: [
          {
            type: "p",
            text: "La secuencia importa en SEO. Los arreglos técnicos van primero porque son fundamentales — desbloquean todo lo demás. Si Google no puede rastrear e indexar correctamente tus páginas, ninguna cantidad de contenido o link building arreglará tus rankings. Después de lo técnico: on-page — etiquetas de título, encabezados, calidad del contenido, enlazado interno. Luego creación de contenido. Luego link building. Hacer link building sin una base técnica limpia es dinero desperdiciado.",
          },
          {
            type: "list",
            items: [
              "Fase 1 — Técnico: rastreabilidad, indexación, velocidad del sitio, etiquetas canónicas, datos estructurados. Usar Screaming Frog y el informe de Cobertura de GSC.",
              "Fase 2 — On-page: etiquetas de título, H1s, meta descripciones, estructura de enlazado interno, contenido escaso. Referenciar los hallazgos de /guides/on-page-audit.",
              "Fase 3 — Contenido: texto de páginas de categoría, guías de compra, secciones de FAQ, contenido de blog dirigido a consultas informacionales.",
              "Fase 4 — Link building: solo después de que las fases 1–3 estén en condiciones razonables. Ver /guides/link-building-tactics para saber por dónde empezar.",
            ],
          },
          {
            type: "tip",
            text: "Configura un recordatorio de calendario cada 3 meses para una mini auditoría. Extrae datos frescos de GSC, revisa tus 20 páginas mejor posicionadas, vuelve a ejecutar Screaming Frog y revisa tu perfil de backlinks en Ahrefs. Los rankings cambian, los competidores actualizan sus sitios, ocurren actualizaciones de algoritmo. El ciclo de auditoría completo desde /guides/fundamentals hasta /guides/off-page-audit nunca está verdaderamente terminado — es un bucle. Intégralo en tu planificación desde el primer día.",
          },
          {
            type: "p",
            text: "Si quieres profundizar en cualquier parte del programa SEO, la estructura completa de guías comienza en /guides/fundamentals. Para entender qué hacen los competidores mientras planificas tus propias tareas, consulta /guides/competitor-analysis. Y si necesitas interpretar datos de ranking para informar tus prioridades de sprint, /guides/analytics-tracking explica cómo leer los números correctamente.",
          },
        ],
      },
    ],
  },

  it: {
    nav: {
      prev: { href: "/guides/off-page-audit", category: "Ricerca & Ideazione", title: "Audit Off-Page" },
      next: { href: "/guides/link-building-tactics", category: "SEO Ecommerce Avanzato", title: "Tattiche di Link Building" },
    },
    sections: [
      {
        id: "prioritization-beats-volume",
        title: "La prioritizzazione batte il volume ogni volta",
        blocks: [
          {
            type: "p",
            text: "La parte più difficile del SEO ecommerce non è sapere cosa fare. La maggior parte dei gestori di negozi ha una lista di 40 cose su cui potrebbe lavorare. Il problema è che fare 50 attività a medio impatto non batterà mai 5 ad alto impatto. Il volume non è progresso. La direzione lo è.",
          },
          {
            type: "p",
            text: "Un fix tecnico che indicizza correttamente 30 pagine di categoria farà più per il tuo traffico che 15 articoli di blog che non si posizionano per niente. Un fix dei tag title sulle tue 10 migliori pagine prodotto può muovere i ranking in poche settimane. La metrica da ottimizzare è: miglioramento del posizionamento per ora di lavoro — non numero di attività completate.",
          },
          {
            type: "callout",
            title: "Scrivi la tua ipotesi prima di toccare qualsiasi cosa",
            text: "Prima di qualsiasi attività SEO, scrivi una frase: cosa ti aspetti che accada e perché. 'Correggere i tag title duplicati sulle pagine di collezione dovrebbe migliorare i posizionamenti per le parole chiave di categoria, perché Google attualmente non ha un segnale chiaro su quale pagina classificare.' Ci vogliono 30 secondi e impone chiarezza. Quattro settimane dopo puoi verificare se avevi ragione.",
          },
        ],
      },
      {
        id: "impact-effort-matrix",
        title: "La matrice impatto vs. sforzo",
        blocks: [
          {
            type: "p",
            text: "Posiziona ogni attività SEO su una semplice griglia 2x2: impatto su un asse, sforzo sull'altro. Non è un framework complesso — è un meccanismo che ti impedisce di ricadere sulle attività facili che sembrano produttive ma non lo sono.",
          },
          {
            type: "list",
            items: [
              "Alto impatto + basso sforzo: fallo questa settimana, senza discussioni. Esempi: correggere i tag canonici rotti, aggiungere i tag title mancanti segnalati in GSC, aggiornare gli H1 sulle tue migliori pagine prodotto.",
              "Alto impatto + alto sforzo: pianificare con le risorse adeguate. Questi sono i tuoi grandi progetti — modifiche all'architettura del sito, creazione di nuove pagine di categoria, costruzione di un cluster di contenuto tematico.",
              "Basso impatto + basso sforzo: raggruppare e pianificare una volta al mese. Compressione delle immagini, aggiunte minori di schema, pulizia dei vecchi redirect.",
              "Basso impatto + alto sforzo: eliminare completamente. Se un'attività richiede 20 ore e non muove niente, non appartiene alla lista.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1280&q=80",
            alt: "Taccuino con griglia di pianificazione aperta su una scrivania",
            caption: "Una semplice griglia di prioritizzazione ti salva da settimane di sforzo mal diretto.",
          },
          {
            type: "tip",
            text: "Costruisci la tua matrice in Google Sheets. Una colonna per attività, righe per Impatto (1–5), Sforzo (1–5) e un Punteggio di Priorità calcolato (Impatto diviso per Sforzo). Ordina per Punteggio di Priorità decrescente. La parte superiore della lista è il tuo backlog di sprint.",
          },
        ],
      },
      {
        id: "quick-wins",
        title: "Quick win: dove cercare per prima cosa",
        blocks: [
          {
            type: "p",
            text: "I quick win sono reali. Non sono scorciatoie o trucchi — sono attività dove lo sforzo è basso rispetto all'impatto probabile. Prima di pianificare un programma SEO completo, passa una settimana solo sui quick win. Muovono i ranking, dimostrano agli stakeholder che il SEO funziona e ti danno dati per le decisioni più importanti.",
          },
          {
            type: "checklist",
            items: [
              "Tag title mancanti o duplicati: recuperali da GSC → Copertura → Escluse, o lancia Screaming Frog sul tuo sito. Correggi prima i peggiori sulle pagine ad alto traffico.",
              "Opportunità pagina 2: in GSC, filtra le query dove la tua posizione media è 11–20. Queste pagine sono a un passo dalla pagina 1. Aggiungi link interni, affina il tag title, migliora l'H1.",
              "Lacune di link interni: trova le tue pagine con maggiore autorità (controlla in Ahrefs le pagine interne più linkate) e aggiungi link da queste verso pagine importanti che non ricevono ancora equity interna.",
              "Alt text delle immagini mancante: Screaming Frog → Immagini → filtra per alt text mancante. Esporta e correggi in blocco tramite il tuo CMS o uno sviluppatore. Su un grande sito ecommerce è spesso un'attività da completare in una notte.",
              "Pagine di categoria con contenuto scarso: le pagine di categoria con meno di 150 parole di contenuto unico e senza link interni spesso si posizionano male. Aggiungi una breve intro di categoria, un blocco FAQ e link interni ai prodotti principali.",
            ],
          },
          {
            type: "callout",
            title: "I dati GSC hanno un ritardo di 2–3 giorni",
            text: "Quando estrai dati di posizione da Google Search Console per trovare le opportunità di pagina 2, ricorda che i dati hanno 2–3 giorni di ritardo. I ranking fluttuano. Ordina per posizione media e guarda anche la colonna delle impressioni — una pagina in posizione 14 con 5.000 impressioni al mese è un target molto migliore di una in posizione 12 con 40 impressioni.",
          },
        ],
      },
      {
        id: "sprint-methodology",
        title: "Eseguire sprint SEO",
        blocks: [
          {
            type: "p",
            text: "Gli sprint di due settimane funzionano bene per il SEO ecommerce. Abbastanza brevi da restare concentrati e abbastanza lunghi da completare lavoro significativo. All'inizio di ogni sprint, definisci 3–5 deliverable concreti — non obiettivi vaghi come 'migliorare il SEO', ma output specifici: 'correggere i tag canonici su 45 pagine di collezione', 'scrivere e pubblicare 3 intro di pagine di categoria', 'costruire 5 link interni dall'homepage alle migliori pagine prodotto'.",
          },
          {
            type: "p",
            text: "Alla fine dello sprint, tieni una revisione di 30 minuti. Si sono mossi i ranking? Il traffico è cambiato sulle pagine obiettivo? Cosa ti ha impedito di completare le attività pianificate? La revisione non è celebrazione né attribuzione di colpe — è calibrazione. Le tue stime di sforzo e impatto migliorano significativamente dopo 3–4 sprint.",
          },
          {
            type: "tip",
            text: "Traccia i tuoi deliverable di sprint in Notion o un Google Sheets condiviso. Tieni un registro continuativo con quattro colonne: Attività, Ipotesi, Data di Completamento e Risultato (verificato 4–6 settimane dopo). Questo diventa la tua base di evidenze SEO — quello a cui punti quando gli stakeholder chiedono 'il SEO sta funzionando davvero?'",
          },
          {
            type: "list",
            items: [
              "Inizio sprint: prioritizzare il backlog, definire 3–5 deliverable, assegnare responsabili",
              "Settimana 1: eseguire le attività, segnalare i blocchi in anticipo",
              "Settimana 2: completare i deliverable, iniziare a tracciare i risultati",
              "Fine sprint: revisione di 30 minuti, aggiornare i punteggi di priorità basati su quanto appreso",
              "Ripetere: adeguare la portata dello sprint in base alla capacità del team",
            ],
          },
        ],
      },
      {
        id: "tracking-seo-tasks",
        title: "Tracciare il lavoro SEO senza appesantire i processi",
        blocks: [
          {
            type: "p",
            text: "Notion, Google Sheets e Linear funzionano tutti per tracciare le attività SEO. Trello funziona anche se il tuo team lo usa già. Lo strumento conta meno della disciplina di usarlo davvero. Ciò che uccide la maggior parte dei programmi SEO non è la mancanza di idee — è fare attività senza registrare l'ipotesi, per poi non avere idea quattro settimane dopo se il lavoro ha prodotto qualche risultato.",
          },
          {
            type: "p",
            text: "Mantienilo semplice. Un registro delle attività con cinque campi è sufficiente: cosa hai fatto, perché l'hai fatto (l'ipotesi), quando l'hai fatto, quale pagina o sezione ha riguardato, e il risultato. Il campo del risultato rimane vuoto fino a 4–6 settimane dopo il completamento dell'attività — è allora che torni a verificare se i ranking o il traffico si sono mossi.",
          },
          {
            type: "callout",
            title: "Separa il registro delle attività dal backlog di idee",
            text: "Le idee non sono attività. Quando pensi a qualcosa da provare, va in una lista di idee — non raffinata, non stimata. All'inizio di ogni sprint, attingi dalla lista di idee, stimi impatto e sforzo e la promuovi al registro delle attività. Mescolare idee e attività nella stessa lista crea caos e paralisi da analisi.",
          },
        ],
      },
      {
        id: "sequence-and-quarterly-loop",
        title: "Quando fare cosa — e il ciclo di audit trimestrale",
        blocks: [
          {
            type: "p",
            text: "La sequenza conta nel SEO. Le correzioni tecniche vengono prima perché sono fondamentali — sboccano tutto il resto. Se Google non riesce a scansionare e indicizzare correttamente le tue pagine, nessuna quantità di contenuto o link building migliorerà i tuoi posizionamenti. Dopo il tecnico: on-page — tag title, intestazioni, qualità del contenuto, link interni. Poi creazione di contenuto. Poi link building. Fare link building senza una base tecnica pulita è denaro sprecato.",
          },
          {
            type: "list",
            items: [
              "Fase 1 — Tecnico: scansionabilità, indicizzazione, velocità del sito, tag canonici, dati strutturati. Usare Screaming Frog e il report di Copertura della GSC.",
              "Fase 2 — On-page: tag title, H1, meta description, struttura di link interni, contenuto scarso. Fare riferimento ai risultati di /guides/on-page-audit.",
              "Fase 3 — Contenuto: testi di pagine di categoria, guide all'acquisto, sezioni FAQ, contenuto del blog per query informazionali.",
              "Fase 4 — Link building: solo dopo che le fasi 1–3 sono in buono stato. Vedi /guides/link-building-tactics per sapere da dove iniziare.",
            ],
          },
          {
            type: "tip",
            text: "Imposta un promemoria sul calendario ogni 3 mesi per un mini audit. Estrai dati GSC aggiornati, controlla le tue 20 pagine meglio posizionate, lancia di nuovo Screaming Frog e controlla il tuo profilo di backlink in Ahrefs. I ranking cambiano, i concorrenti aggiornano i loro siti, arrivano aggiornamenti dell'algoritmo. Il ciclo completo di audit da /guides/fundamentals a /guides/off-page-audit non è mai davvero finito — è un loop. Integralo nella tua pianificazione fin dal primo giorno.",
          },
          {
            type: "p",
            text: "Se vuoi approfondire qualsiasi parte del programma SEO, la struttura completa delle guide inizia da /guides/fundamentals. Per capire cosa stanno facendo i concorrenti mentre pianifichi le tue attività, consulta /guides/competitor-analysis. E se devi interpretare i dati di ranking per orientare le priorità del tuo sprint, /guides/analytics-tracking spiega come leggere i numeri correttamente.",
          },
        ],
      },
    ],
  },

  nl: {
    nav: {
      prev: { href: "/guides/off-page-audit", category: "Onderzoek & Ideevorming", title: "Off-Page Audit" },
      next: { href: "/guides/link-building-tactics", category: "Geavanceerde Ecommerce-SEO", title: "Linkbuildingtactieken" },
    },
    sections: [
      {
        id: "prioritization-beats-volume",
        title: "Prioritering wint het altijd van volume",
        blocks: [
          {
            type: "p",
            text: "Het moeilijkste deel van ecommerce-SEO is niet weten wat je moet doen. De meeste winkeliers hebben een lijst van 40 dingen waaraan ze zouden kunnen werken. Het probleem is dat 50 taken van gemiddeld impact uitvoeren nooit 5 taken met hoog impact zal verslaan. Volume is geen vooruitgang. Richting is dat wel.",
          },
          {
            type: "p",
            text: "Een technische fix die 30 categoriepagina's correct indexeert doet meer voor je traffic dan 15 blogartikelen die nergens op ranken. Een fix van titeltags op je 10 beste productpagina's kan rankings binnen weken verplaatsen. De metriek die je moet optimaliseren is: verbetering van ranking per uur inspanning — niet het aantal afgeronde taken.",
          },
          {
            type: "callout",
            title: "Schrijf je hypothese op voordat je iets aanraakt",
            text: "Schrijf voor elke SEO-taak één zin: wat je verwacht dat er zal gebeuren en waarom. 'Het oplossen van de gedupliceerde titeltags op collectiepagina's zou rankings voor categoriezoekwoorden moeten verbeteren, omdat Google momenteel geen duidelijk signaal heeft welke pagina te ranken.' Dat duurt 30 seconden en dwingt tot duidelijkheid. Vier weken later kun je controleren of je gelijk had.",
          },
        ],
      },
      {
        id: "impact-effort-matrix",
        title: "De impact vs. inspanning matrix",
        blocks: [
          {
            type: "p",
            text: "Zet elke SEO-taak in een eenvoudig 2x2-raster: impact op de ene as, inspanning op de andere. Dit is geen complex framework — het is een mechanisme dat je belet standaard te kiezen voor gemakkelijke taken die productief voelen maar het niet zijn.",
          },
          {
            type: "list",
            items: [
              "Hoge impact + lage inspanning: doe dit deze week, geen discussie. Voorbeelden: kapotte canonical-tags oplossen, ontbrekende titeltags toevoegen die in GSC zijn gemarkeerd, H1s bijwerken op je beste productpagina's.",
              "Hoge impact + hoge inspanning: inplannen met de juiste middelen. Dit zijn je grote projecten — wijzigingen in de sitestructuur, nieuwe categoriepagina's aanmaken, een thematische contentcluster opbouwen.",
              "Lage impact + lage inspanning: bundelen en één keer per maand inplannen. Beeldcompressie, kleine schema-toevoegingen, opschonen van oude omleidingen.",
              "Lage impact + hoge inspanning: volledig schrappen. Als een taak 20 uur kost en niets beweegt, hoort het niet op de lijst.",
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1280&q=80",
            alt: "Notitieboekje met planningsraster open op een bureau",
            caption: "Een eenvoudig prioriteringsraster bespaart je weken van verkeerd gerichte inspanning.",
          },
          {
            type: "tip",
            text: "Bouw je matrix in Google Sheets. Eén kolom per taak, rijen voor Impact (1–5), Inspanning (1–5) en een berekende Prioriteitsscore (Impact gedeeld door Inspanning). Sorteer op Prioriteitsscore aflopend. De bovenkant van de lijst is je sprint-backlog.",
          },
        ],
      },
      {
        id: "quick-wins",
        title: "Quick wins: waar je eerst moet zoeken",
        blocks: [
          {
            type: "p",
            text: "Quick wins zijn echt. Het zijn geen snelkoppelingen of trucs — het zijn taken waarbij de inspanning laag is ten opzichte van de waarschijnlijke impact. Voordat je een volledig SEO-programma plant, besteed dan één week uitsluitend aan quick wins. Ze bewegen rankings, laten stakeholders zien dat SEO werkt en geven je data voor je grotere beslissingen.",
          },
          {
            type: "checklist",
            items: [
              "Ontbrekende of gedupliceerde titeltags: haal deze uit GSC → Dekking → Uitgesloten, of voer Screaming Frog uit op je site. Los eerst de ergste problemen op bij pagina's met het hoogste verkeer.",
              "Kansen op pagina 2: filter in GSC op zoekopdrachten waar je gemiddelde positie 11–20 is. Deze pagina's zijn één stap verwijderd van pagina 1. Voeg interne links toe, versnel de titeltag, verbeter de H1.",
              "Hiaten in interne links: vind je pagina's met de hoogste autoriteit (controleer in Ahrefs de meest gelinkte interne pagina's) en voeg daar links van toe naar belangrijke pagina's die nog geen interne link-equity ontvangen.",
              "Ontbrekende alt-tekst van afbeeldingen: Screaming Frog → Afbeeldingen → filteren op ontbrekende alt-tekst. Exporteren en in bulk corrigeren via je CMS of een ontwikkelaar. Dit is vaak een overnachttaak op een grote ecommerce-site.",
              "Categoriepagina's met weinig inhoud: categoriepagina's met minder dan 150 woorden unieke inhoud en zonder interne links ranken vaak slecht. Voeg een korte categorie-introductie toe, een FAQ-blok en interne links naar topproducten.",
            ],
          },
          {
            type: "callout",
            title: "GSC-gegevens hebben een vertraging van 2–3 dagen",
            text: "Wanneer je positiegegevens uit Google Search Console haalt om je pagina 2-kansen te vinden, onthoud dan dat de gegevens 2–3 dagen oud zijn. Rankings fluctueren. Sorteer op gemiddelde positie en kijk ook naar de impressieskolom — een pagina op positie 14 met 5.000 impressies per maand is een veel beter doelwit dan één op positie 12 met 40 impressies.",
          },
        ],
      },
      {
        id: "sprint-methodology",
        title: "SEO-sprints uitvoeren",
        blocks: [
          {
            type: "p",
            text: "Sprints van twee weken werken goed voor ecommerce-SEO. Kort genoeg om gefocust te blijven en lang genoeg om zinvol werk af te ronden. Definieer aan het begin van elke sprint 3–5 concrete deliverables — geen vage doelen zoals 'SEO verbeteren', maar specifieke outputs: 'canonical-tags op 45 collectiepagina's oplossen', '3 categoriepagina-intro's schrijven en publiceren', '5 interne links bouwen van de homepage naar de beste productpagina's'.",
          },
          {
            type: "p",
            text: "Houd aan het einde van de sprint een review van 30 minuten. Zijn de rankings bewogen? Is het verkeer op de doelgerichte pagina's veranderd? Wat heeft je belet de geplande taken te voltooien? De review is geen viering of schuldvraag — het is kalibratie. Je schattingen van inspanning en impact verbeteren aanzienlijk na 3–4 sprints.",
          },
          {
            type: "tip",
            text: "Houd je sprint-deliverables bij in Notion of een gedeeld Google Sheets-document. Houd een doorlopend logboek bij met vier kolommen: Taak, Hypothese, Datum Voltooid en Resultaat (4–6 weken later gecontroleerd). Dit wordt je SEO-bewijs-basis — hetgeen je aanwijst wanneer stakeholders vragen 'werkt SEO eigenlijk?'",
          },
          {
            type: "list",
            items: [
              "Sprint-start: backlog prioriteren, 3–5 deliverables definiëren, eigenaren toewijzen",
              "Week 1: taken uitvoeren, blokkades vroeg melden",
              "Week 2: deliverables afronden, beginnen met het bijhouden van resultaten",
              "Sprint-einde: 30 minuten review, prioriteitsscores bijwerken op basis van geleerde lessen",
              "Herhalen: sprint-omvang aanpassen op basis van teamcapaciteit",
            ],
          },
        ],
      },
      {
        id: "tracking-seo-tasks",
        title: "SEO-werk bijhouden zonder overhead",
        blocks: [
          {
            type: "p",
            text: "Notion, Google Sheets en Linear werken allemaal voor het bijhouden van SEO-taken. Trello werkt ook als je team het al gebruikt. Het gereedschap telt minder dan de discipline om het daadwerkelijk te gebruiken. Wat de meeste SEO-programma's om zeep helpt, is niet een gebrek aan ideeën — het is taken uitvoeren zonder de hypothese vast te leggen, en dan vier weken later geen idee hebben of het werk enig resultaat heeft opgeleverd.",
          },
          {
            type: "p",
            text: "Houd het eenvoudig. Een takenlogboek met vijf velden is genoeg: wat je hebt gedaan, waarom je het hebt gedaan (de hypothese), wanneer je het hebt gedaan, welke pagina of sectie het betrof, en het resultaat. Het resultaatveld blijft leeg tot 4–6 weken na het voltooien van de taak — dan ga je terug om te controleren of rankings of verkeer zijn bewogen.",
          },
          {
            type: "callout",
            title: "Scheid je takenlogboek van je ideeënbacklog",
            text: "Ideeën zijn geen taken. Wanneer je aan iets denkt om uit te proberen, gaat het op een ideeënlijst — onverfijnd, ongeschat. Aan het begin van elke sprint put je uit de ideeënlijst, schat je impact en inspanning en promoveer je het naar het takenlogboek. Ideeën en taken in dezelfde lijst mengen creëert chaos en analyseverlamming.",
          },
        ],
      },
      {
        id: "sequence-and-quarterly-loop",
        title: "Wanneer doe je wat — en de kwartaalse auditlus",
        blocks: [
          {
            type: "p",
            text: "Volgorde doet ertoe in SEO. Technische fixes komen eerst omdat ze fundamenteel zijn — ze deblokkeren al het andere. Als Google je pagina's niet goed kan crawlen en indexeren, zal geen hoeveelheid content of linkbuilding je rankings verbeteren. Na het technische: on-page — titeltags, koppen, contentkwaliteit, interne linking. Dan contentcreatie. Dan linkbuilding. Linkbuilding doen zonder een schone technische basis is weggegooid geld.",
          },
          {
            type: "list",
            items: [
              "Fase 1 — Technisch: crawlbaarheid, indexatie, sitesnelheid, canonical-tags, gestructureerde gegevens. Screaming Frog en het GSC-dekkingsrapport gebruiken.",
              "Fase 2 — On-page: titeltags, H1's, meta-descriptions, interne linkstructuur, dunne content. Bevindingen van /guides/on-page-audit als referentie gebruiken.",
              "Fase 3 — Content: tekst voor categoriepagina's, koopgidsen, FAQ-secties, blogcontent gericht op informatieve zoekopdrachten.",
              "Fase 4 — Linkbuilding: alleen nadat fase 1–3 in redelijke staat zijn. Zie /guides/link-building-tactics voor waar te beginnen.",
            ],
          },
          {
            type: "tip",
            text: "Stel elke 3 maanden een agenda-herinnering in voor een mini-audit. Haal verse GSC-gegevens op, controleer je top 20 rankingpagina's, voer Screaming Frog opnieuw uit en controleer je backlinkprofiel in Ahrefs. Rankings verschuiven, concurrenten updaten hun sites, algoritme-updates vinden plaats. De volledige auditcyclus van /guides/fundamentals tot /guides/off-page-audit is nooit echt klaar — het is een lus. Bouw dat vanaf dag één in je planning in.",
          },
          {
            type: "p",
            text: "Als je dieper wilt gaan op een deel van het SEO-programma, begint de volledige gidsstructuur bij /guides/fundamentals. Om te begrijpen wat concurrenten doen terwijl je je eigen taken plant, zie /guides/competitor-analysis. En als je rankinggegevens wilt interpreteren om je sprint-prioriteiten te informeren, legt /guides/analytics-tracking uit hoe je de cijfers correct leest.",
          },
        ],
      },
    ],
  },
};
