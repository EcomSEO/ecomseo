import type { AcademyTopic } from "../../types";

export const brokenLinkBuilding: AcademyTopic = {
  slug: "broken-link-building",
  cluster: 6,
  resources: [{"label":"Ahrefs Broken Link Checker","url":"https://ahrefs.com/broken-link-checker","type":"tool"},{"label":"Check My Links (Chrome)","url":"https://chromewebstore.google.com/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf","type":"tool"},{"label":"Wayback Machine","url":"https://web.archive.org/","type":"tool"}],
  content: {
    en: {
      badge: "Link Building",
      heading: "Broken Link Building",
      intro:
        "Broken link building turns dead links on other websites into live backlinks pointing to your ecommerce store. Every website accumulates broken outbound links over time as pages are deleted, domains expire, or URLs change. By finding these dead links on relevant sites and offering your content as a replacement, you provide genuine value to webmasters while earning high-quality backlinks, making it one of the most ethical and effective link building strategies available.",
      readTime: "8 min read",
      sections: [
        {
          title: "Finding Broken Links on Relevant Sites",
          content:
            "The success of broken link building depends entirely on where you look. Random broken links on unrelated sites waste your time. Focus your search on resource pages, buying guides, and blog posts within your ecommerce niche, these pages are most likely to accept a replacement link to your store's content.\n\nStart with resource pages in your niche. Google search operators like \"your niche + useful resources,\" \"your product category + recommended links,\" or \"your niche + helpful sites\" surface pages that curate links to external content. These resource pages naturally accumulate broken links as the sites they reference go offline or restructure.\n\nUse Ahrefs' Broken Link Checker or the Check My Links browser extension to scan resource pages for dead outbound links. In Ahrefs, you can also use the Broken Backlinks report on competing domains to find pages that used to link to content similar to yours but now point to 404 errors. This approach is particularly powerful because the linking page already demonstrated editorial interest in your topic.\n\nAnother effective technique is to identify defunct competitors or industry sites that have gone offline. When a competitor closes their store or lets their domain expire, every backlink they earned becomes a broken link. Tools like the Wayback Machine help you understand what content used to exist on those dead pages, allowing you to create replacement content that matches what the linking sites originally referenced.",
          items: [
            "Focus on resource pages, buying guides, and blog posts within your specific ecommerce niche",
            "Use Google operators like 'niche + useful resources' to find pages that curate external links",
            "Scan resource pages with Ahrefs Broken Link Checker or Check My Links browser extension",
            "Mine competitor broken backlinks reports to find pages linking to 404 errors in your niche",
            "Identify defunct competitor sites whose expired links now represent opportunities"
          ],
          tip: "Set up Ahrefs alerts for new broken backlinks on your top five competitors. When a competitor's page goes down, you will be notified immediately and can reach out to the linking sites before anyone else offers a replacement."
        },
        {
          title: "Creating Replacement Content That Matches",
          content:
            "Offering a random product page as a replacement for a broken link will fail. Webmasters linked to the original content for a reason, your replacement must serve the same purpose and provide equal or greater value to their audience.\n\nUse the Wayback Machine to view archived versions of the dead page. Understand what information it provided, how comprehensive it was, and why other sites found it worth linking to. Your replacement content should cover the same topic with similar depth, but updated data, better organization, or additional insights that make it genuinely superior.\n\nFor ecommerce sites, the most common replacement content types are buying guides, product comparison articles, industry statistics pages, and how-to guides related to your product category. These content types naturally attract links because they serve as reference material for bloggers and journalists. A buying guide that compares features across product categories provides the same informational value that the dead page once offered.\n\nDo not try to replace informational content with product pages. If the broken link pointed to an article about choosing the right running shoes, your replacement should be a comprehensive guide to running shoe selection, not your product listing for running shoes. The replacement content can internally link to your products, but the page itself must be editorially valuable enough to justify the link placement.",
          items: [
            "Use the Wayback Machine to study what content the dead page originally provided",
            "Create replacement content that covers the same topic with equal or greater depth",
            "Focus on buying guides, comparison articles, statistics pages, and how-to guides as replacement formats",
            "Never offer product pages as replacements for informational broken links"
          ],
          tip: "Build a library of five to ten comprehensive resource pages on your site covering the major topics in your niche. These evergreen assets serve as ready-made replacements whenever you discover broken links in your industry, eliminating the need to create new content for each campaign."
        },
        {
          title: "Outreach Templates That Get Results",
          content:
            "Broken link building outreach has a higher success rate than cold outreach because you are solving a real problem. Your email notifies the webmaster of a broken link on their site and offers a working alternative, this is genuinely helpful, not self-promotional. Frame your email accordingly.\n\nThe most effective broken link outreach email follows a three-part structure. First, open with a specific, genuine compliment about the page you found the broken link on, this proves you actually visited their site. Second, point out the broken link by providing the exact URL that is returning a 404 error and describe where on their page it appears. Third, suggest your content as a replacement by explaining what it covers and why it would be a good fit for their audience.\n\nKeep the email under 120 words. Webmasters are busy and a concise, helpful email outperforms a long sales pitch every time. Do not ask for a link directly, simply suggest your page as a potential replacement and let the webmaster decide. This indirect approach feels less transactional and produces higher conversion rates.\n\nAvoid sending templated emails that mention multiple broken links at once. While it might seem efficient, webmasters perceive bulk broken link notifications as automated spam. Report one specific broken link per email and keep the tone genuinely helpful. If the same page has multiple broken links, mention only the one most relevant to your content.",
          items: [
            "Structure your email in three parts: genuine compliment, specific broken link report, and replacement suggestion",
            "Provide the exact broken URL and describe where it appears on the page",
            "Keep the total email under 120 words for maximum response rates",
            "Suggest your content as a replacement without explicitly asking for a link"
          ]
        },
        {
          title: "Tools and Workflows for Broken Link Building",
          content:
            "Efficient broken link building requires the right tools and a systematic workflow. Without automation at the discovery stage, the process is too slow to generate meaningful results for an ecommerce site.\n\nAhrefs is the primary tool for broken link building at scale. The Content Explorer feature lets you find pages in your niche that no longer exist by searching for relevant keywords and filtering for 404 pages. The Broken Backlinks report shows you exactly which pages link to dead content in your topic area, along with the anchor text and domain rating of each linking page.\n\nFor on-page scanning, the Check My Links Chrome extension highlights broken links on any page you visit, making manual prospecting faster. Screaming Frog can crawl entire websites and export lists of broken outbound links, which is useful when you want to systematically scan a target site's resource section.\n\nBuild a workflow around weekly prospecting sessions. Dedicate two to three hours per week to finding broken link opportunities: one hour on discovery using Ahrefs and Google operators, 30 minutes checking the Wayback Machine for the original content, and one to two hours on personalized outreach. Track every prospect in a spreadsheet with columns for the broken URL, the linking page, the webmaster's contact email, the replacement content URL, the outreach date, and the response status.\n\nBatch similar opportunities together. If you find five resource pages in your niche that all link to the same dead page, you can use one piece of replacement content and send five personalized outreach emails, maximizing the return on your content creation investment.",
          items: [
            "Use Ahrefs Content Explorer to find dead pages in your niche and the sites linking to them",
            "Scan individual pages with the Check My Links Chrome extension for quick prospecting",
            "Use Screaming Frog to crawl entire sites and export lists of broken outbound links",
            "Dedicate two to three hours per week to a structured discovery, research, and outreach workflow",
            "Track every prospect in a spreadsheet with broken URL, linking page, contact, and response status"
          ],
          tip: "Create a saved search in Ahrefs Content Explorer for your top niche keywords filtered to 404 pages. Check this saved search weekly, new broken link opportunities appear constantly as sites restructure and pages go offline."
        },
        {
          title: "Scaling the Broken Link Building Process",
          content:
            "Broken link building can be scaled from a handful of links per month to a consistent pipeline of 20-30 new backlinks monthly, but scaling requires systematization of every step: discovery, content creation, outreach, and follow-up.\n\nAt the discovery stage, scale by expanding your keyword universe. Most ecommerce sites start with their primary product keywords, but the biggest opportunity pool comes from adjacent topics. A store selling kitchen equipment should not only look for broken links about knives and cookware, but also about cooking techniques, recipe resources, food safety guides, and kitchen design articles. Each adjacent topic opens a new vein of broken link opportunities.\n\nScale content creation by building modular resource pages. Instead of creating a new page for every broken link opportunity, build comprehensive pillar content that covers broad topics in your niche. A 3,000-word ultimate guide to choosing kitchen knives can serve as the replacement for dozens of different broken links that touched on various aspects of knife selection, steel types, or kitchen tool recommendations.\n\nScale outreach by hiring a virtual assistant to handle prospecting and initial outreach under your guidance. Train them on your quality criteria, provide your email templates, and have them report findings for your review before sending. The VA handles the mechanical work, finding broken links, locating contact emails, and drafting personalized emails, while you maintain quality control over target selection and content decisions.\n\nTrack conversion rates by content type and niche segment. Over time, you will discover that certain types of replacement content convert at 20-30% while others barely reach 5%. Double down on the content formats and niche topics that produce the highest link conversion rates.",
          items: [
            "Expand your keyword universe to adjacent topics beyond your primary product keywords",
            "Build modular pillar content that can serve as replacement for many different broken links",
            "Hire a virtual assistant to handle prospecting and initial outreach under your quality guidelines",
            "Track conversion rates by content type and niche segment to focus on highest-performing areas"
          ],
          tip: "Aim for a broken link building pipeline that operates on a four-week cycle: Week 1 for discovery and prospecting, Week 2 for content creation or updates, Week 3 for outreach, and Week 4 for follow-up. This rhythm creates predictable, consistent link acquisition that compounds over time."
        }
      ],
      navLabels: {
        previous: "Previous",
        next: "Next",
      },
    },
    de: {
      badge: "Linkaufbau",
      heading: "Broken-Link-Building",
      intro:
        "Broken-Link-Building verwandelt tote Links auf anderen Websites in aktive Backlinks, die auf Ihren E-Commerce-Shop verweisen. Jede Website sammelt im Laufe der Zeit defekte ausgehende Links an, wenn Seiten geloescht, Domains abgelaufen oder URLs geaendert werden. Indem Sie diese toten Links auf relevanten Seiten finden und Ihren Content als Ersatz anbieten, bieten Sie Webmastern genuinen Mehrwert und verdienen gleichzeitig hochwertige Backlinks, was es zu einer der ethischsten und effektivsten verfuegbaren Linkaufbau-Strategien macht.",
      readTime: "8 Min. Lesezeit",
      sections: [
        {
          title: "Defekte Links auf relevanten Seiten finden",
          content:
            "Der Erfolg von Broken-Link-Building haengt vollstaendig davon ab, wo Sie suchen. Zufaellige defekte Links auf unrelevanten Seiten verschwenden Ihre Zeit. Konzentrieren Sie Ihre Suche auf Ressourcenseiten, Kaufratgeber und Blogbeitraege innerhalb Ihrer E-Commerce-Nische, diese Seiten akzeptieren am ehesten einen Ersatzlink zu den Inhalten Ihres Shops.\n\nBeginnen Sie mit Ressourcenseiten in Ihrer Nische. Google-Suchoperatoren wie \"Ihre Nische + nuetzliche Ressourcen,\" \"Ihre Produktkategorie + empfohlene Links\" oder \"Ihre Nische + hilfreiche Seiten\" finden Seiten, die Links zu externem Content kuratieren. Diese Ressourcenseiten sammeln natuerlich defekte Links an, wenn die referenzierten Seiten offline gehen oder umstrukturiert werden.\n\nVerwenden Sie Ahrefs' Broken Link Checker oder die Check My Links Browser-Erweiterung, um Ressourcenseiten nach defekten ausgehenden Links zu scannen. In Ahrefs koennen Sie auch den Broken-Backlinks-Bericht zu konkurrierenden Domains nutzen, um Seiten zu finden, die frueher auf Content aehnlich Ihrem verlinkten, jetzt aber auf 404-Fehler verweisen.\n\nEine weitere effektive Technik ist die Identifizierung nicht mehr existierender Konkurrenten oder Branchenseiten. Wenn ein Konkurrent seinen Shop schliesst oder seine Domain verfallen laesst, wird jeder verdiente Backlink zu einem defekten Link. Tools wie die Wayback Machine helfen Ihnen zu verstehen, welcher Content frueher auf diesen toten Seiten existierte.",
          items: [
            "Konzentrieren Sie sich auf Ressourcenseiten, Kaufratgeber und Blogbeitraege in Ihrer spezifischen E-Commerce-Nische",
            "Nutzen Sie Google-Operatoren wie 'Nische + nuetzliche Ressourcen', um Seiten zu finden, die externe Links kuratieren",
            "Scannen Sie Ressourcenseiten mit Ahrefs Broken Link Checker oder der Check My Links Browser-Erweiterung",
            "Durchsuchen Sie Konkurrenz-Broken-Backlinks-Berichte nach Seiten, die auf 404-Fehler in Ihrer Nische verlinken",
            "Identifizieren Sie nicht mehr existierende Konkurrenzseiten, deren abgelaufene Links nun Chancen darstellen"
          ],
          tip: "Richten Sie Ahrefs-Alerts fuer neue defekte Backlinks bei Ihren Top-fuenf-Konkurrenten ein. Wenn die Seite eines Konkurrenten ausfaellt, werden Sie sofort benachrichtigt und koennen die verlinkenden Seiten kontaktieren, bevor jemand anderes einen Ersatz anbietet."
        },
        {
          title: "Ersatzinhalte erstellen, die passen",
          content:
            "Eine zufaellige Produktseite als Ersatz fuer einen defekten Link anzubieten wird scheitern. Webmaster haben aus einem bestimmten Grund auf den originalen Content verlinkt, Ihr Ersatz muss denselben Zweck erfuellen und gleichen oder groesseren Wert fuer deren Zielgruppe bieten.\n\nVerwenden Sie die Wayback Machine, um archivierte Versionen der toten Seite anzusehen. Verstehen Sie, welche Informationen sie bereitstellte, wie umfassend sie war und warum andere Seiten sie fuer verlinkungswuerdig hielten. Ihr Ersatzinhalt sollte dasselbe Thema mit aehnlicher Tiefe abdecken, aber mit aktualisierten Daten, besserer Organisation oder zusaetzlichen Einblicken, die ihn genuinan ueberlegen machen.\n\nFuer E-Commerce-Seiten sind die gaengigsten Ersatzinhaltstypen Kaufratgeber, Produktvergleichsartikel, Branchenstatistik-Seiten und Anleitungen zu Ihrer Produktkategorie. Diese Content-Typen ziehen natuerlich Links an, da sie als Referenzmaterial fuer Blogger und Journalisten dienen.\n\nVersuchen Sie nicht, informativen Content durch Produktseiten zu ersetzen. Wenn der defekte Link auf einen Artikel ueber die Auswahl der richtigen Laufschuhe verwies, sollte Ihr Ersatz ein umfassender Leitfaden zur Laufschuhauswahl sein, nicht Ihre Produktliste fuer Laufschuhe. Der Ersatzinhalt kann intern auf Ihre Produkte verlinken, aber die Seite selbst muss redaktionell wertvoll genug sein, um die Linkplatzierung zu rechtfertigen.",
          items: [
            "Nutzen Sie die Wayback Machine, um zu studieren, welchen Content die tote Seite urspruenglich bereitstellte",
            "Erstellen Sie Ersatzinhalt, der dasselbe Thema mit gleicher oder groesserer Tiefe abdeckt",
            "Konzentrieren Sie sich auf Kaufratgeber, Vergleichsartikel, Statistikseiten und Anleitungen als Ersatzformate",
            "Bieten Sie niemals Produktseiten als Ersatz fuer informationale defekte Links an"
          ],
          tip: "Bauen Sie eine Bibliothek von fuenf bis zehn umfassenden Ressourcenseiten auf Ihrer Seite auf, die die wichtigsten Themen Ihrer Nische abdecken. Diese Evergreen-Assets dienen als fertige Ersatzinhalte, wann immer Sie defekte Links in Ihrer Branche entdecken."
        },
        {
          title: "Outreach-Vorlagen, die Ergebnisse liefern",
          content:
            "Broken-Link-Building-Outreach hat eine hoehere Erfolgsquote als Kaltakquise, weil Sie ein echtes Problem loesen. Ihre E-Mail informiert den Webmaster ueber einen defekten Link auf seiner Seite und bietet eine funktionierende Alternative, das ist genuinan hilfreich, nicht selbstpromotionell. Formulieren Sie Ihre E-Mail entsprechend.\n\nDie effektivste Broken-Link-Outreach-E-Mail folgt einer Drei-Teile-Struktur. Erstens eroeffnen Sie mit einem spezifischen, genuinanen Kompliment ueber die Seite, auf der Sie den defekten Link gefunden haben, dies beweist, dass Sie die Seite tatsaechlich besucht haben. Zweitens weisen Sie auf den defekten Link hin, indem Sie die genaue URL angeben, die einen 404-Fehler zurueckgibt, und beschreiben, wo auf der Seite sie erscheint. Drittens schlagen Sie Ihren Content als Ersatz vor, erklaeren, was er abdeckt und warum er gut zur Zielgruppe passt.\n\nHalten Sie die E-Mail unter 120 Woertern. Webmaster sind beschaeftigt und eine praegnante, hilfreiche E-Mail uebertrifft jedes Mal einen langen Verkaufspitch. Bitten Sie nicht direkt um einen Link, schlagen Sie einfach Ihre Seite als potenziellen Ersatz vor und lassen Sie den Webmaster entscheiden.\n\nVermeiden Sie es, Vorlagen-E-Mails zu senden, die mehrere defekte Links gleichzeitig erwaehnen. Obwohl es effizient erscheinen mag, nehmen Webmaster massenhaftige Defekte-Link-Benachrichtigungen als automatisierten Spam wahr. Melden Sie einen spezifischen defekten Link pro E-Mail.",
          items: [
            "Strukturieren Sie Ihre E-Mail in drei Teilen: genuianes Kompliment, spezifischer Defekter-Link-Bericht und Ersatzvorschlag",
            "Geben Sie die genaue defekte URL an und beschreiben Sie, wo sie auf der Seite erscheint",
            "Halten Sie die gesamte E-Mail unter 120 Woertern fuer maximale Antwortquoten",
            "Schlagen Sie Ihren Content als Ersatz vor, ohne explizit um einen Link zu bitten"
          ]
        },
        {
          title: "Tools und Workflows fuer Broken-Link-Building",
          content:
            "Effizientes Broken-Link-Building erfordert die richtigen Tools und einen systematischen Workflow. Ohne Automatisierung in der Entdeckungsphase ist der Prozess zu langsam, um aussagekraeftige Ergebnisse fuer eine E-Commerce-Seite zu generieren.\n\nAhrefs ist das primaere Tool fuer Broken-Link-Building im grossen Massstab. Die Content-Explorer-Funktion ermoeglicht es, Seiten in Ihrer Nische zu finden, die nicht mehr existieren, indem nach relevanten Keywords gesucht und nach 404-Seiten gefiltert wird. Der Broken-Backlinks-Bericht zeigt genau, welche Seiten auf toten Content in Ihrem Themenbereich verlinken.\n\nFuer On-Page-Scanning hebt die Check My Links Chrome-Erweiterung defekte Links auf jeder besuchten Seite hervor. Screaming Frog kann ganze Websites crawlen und Listen defekter ausgehender Links exportieren, was nuetzlich ist, wenn Sie den Ressourcenbereich einer Zielseite systematisch scannen moechten.\n\nBauen Sie einen Workflow um woechentliche Prospecting-Sitzungen auf. Widmen Sie zwei bis drei Stunden pro Woche dem Finden von Broken-Link-Moeglichkeiten: eine Stunde fuer die Entdeckung mit Ahrefs und Google-Operatoren, 30 Minuten fuer die Wayback-Machine-Pruefung des originalen Contents und ein bis zwei Stunden fuer personalisierten Outreach. Verfolgen Sie jeden Prospect in einer Tabelle mit Spalten fuer die defekte URL, die verlinkende Seite, die Kontakt-E-Mail, die Ersatzinhalt-URL, das Outreach-Datum und den Antwortstatus.\n\nBuendeln Sie aehnliche Moeglichkeiten. Wenn Sie fuenf Ressourcenseiten finden, die alle auf dieselbe tote Seite verlinken, koennen Sie ein Stueck Ersatzinhalt verwenden und fuenf personalisierte Outreach-E-Mails senden.",
          items: [
            "Nutzen Sie Ahrefs Content Explorer, um tote Seiten in Ihrer Nische und die darauf verlinkenden Seiten zu finden",
            "Scannen Sie einzelne Seiten mit der Check My Links Chrome-Erweiterung fuer schnelles Prospecting",
            "Verwenden Sie Screaming Frog, um ganze Seiten zu crawlen und Listen defekter ausgehender Links zu exportieren",
            "Widmen Sie zwei bis drei Stunden pro Woche einem strukturierten Entdeckungs-, Recherche- und Outreach-Workflow",
            "Verfolgen Sie jeden Prospect in einer Tabelle mit defekter URL, verlinkender Seite, Kontakt und Antwortstatus"
          ],
          tip: "Erstellen Sie eine gespeicherte Suche im Ahrefs Content Explorer fuer Ihre Top-Nischen-Keywords, gefiltert nach 404-Seiten. Pruefen Sie diese gespeicherte Suche woechentlich, neue Broken-Link-Moeglichkeiten erscheinen staendig, wenn Seiten umstrukturiert werden und Seiten offline gehen."
        },
        {
          title: "Den Broken-Link-Building-Prozess skalieren",
          content:
            "Broken-Link-Building kann von einer Handvoll Links pro Monat auf eine konstante Pipeline von 20-30 neuen Backlinks monatlich skaliert werden, erfordert aber die Systematisierung jedes Schritts: Entdeckung, Content-Erstellung, Outreach und Follow-up.\n\nIn der Entdeckungsphase skalieren Sie, indem Sie Ihr Keyword-Universum erweitern. Die meisten E-Commerce-Seiten beginnen mit ihren primaeren Produkt-Keywords, aber das groesste Chancenpool stammt aus angrenzenden Themen. Ein Shop, der Kuechenausstattung verkauft, sollte nicht nur nach defekten Links ueber Messer und Kochgeschirr suchen, sondern auch ueber Kochtechniken, Rezeptressourcen, Lebensmittelsicherheitsleitfaeden und Kuechendesign-Artikel.\n\nSkalieren Sie die Content-Erstellung durch modulare Ressourcenseiten. Statt fuer jede Broken-Link-Moeglichkeit eine neue Seite zu erstellen, bauen Sie umfassende Pillar-Inhalte auf, die breite Themen in Ihrer Nische abdecken. Ein 3.000-Woerter-Ultimate-Guide zur Auswahl von Kuechenmessern kann als Ersatz fuer Dutzende verschiedener defekter Links dienen.\n\nSkalieren Sie Outreach, indem Sie einen virtuellen Assistenten fuer Prospecting und initiales Outreach unter Ihrer Anleitung einstellen. Schulen Sie ihn in Ihren Qualitaetskriterien, stellen Sie Ihre E-Mail-Vorlagen bereit und lassen Sie ihn Funde zur Ueberpruefung melden, bevor er sendet.\n\nVerfolgen Sie Konversionsraten nach Content-Typ und Nischensegment. Mit der Zeit werden Sie entdecken, dass bestimmte Arten von Ersatzinhalten bei 20-30% konvertieren, waehrend andere kaum 5% erreichen. Konzentrieren Sie sich auf die Content-Formate und Nischenthemen mit den hoechsten Linkkonversionsraten.",
          items: [
            "Erweitern Sie Ihr Keyword-Universum auf angrenzende Themen jenseits Ihrer primaeren Produkt-Keywords",
            "Bauen Sie modulare Pillar-Inhalte auf, die als Ersatz fuer viele verschiedene defekte Links dienen koennen",
            "Stellen Sie einen virtuellen Assistenten fuer Prospecting und initiales Outreach unter Ihren Qualitaetsrichtlinien ein",
            "Verfolgen Sie Konversionsraten nach Content-Typ und Nischensegment, um sich auf die leistungsstaerksten Bereiche zu konzentrieren"
          ],
          tip: "Streben Sie eine Broken-Link-Building-Pipeline an, die in einem Vier-Wochen-Zyklus arbeitet: Woche 1 fuer Entdeckung und Prospecting, Woche 2 fuer Content-Erstellung oder -Updates, Woche 3 fuer Outreach und Woche 4 fuer Follow-up. Dieser Rhythmus schafft berechenbare, konsistente Linkakquise, die sich ueber die Zeit kumuliert."
        }
      ],
      navLabels: {
        previous: "Zurueck",
        next: "Weiter",
      },
    },
    fr: {
      badge: "Netlinking",
      heading: "Broken Link Building",
      intro:
        "Le broken link building transforme les liens morts sur d'autres sites web en backlinks actifs pointant vers votre boutique e-commerce. Chaque site web accumule des liens sortants casses au fil du temps lorsque des pages sont supprimees, des domaines expirent ou des URLs changent. En trouvant ces liens morts sur des sites pertinents et en offrant votre contenu en remplacement, vous apportez une valeur genuine aux webmasters tout en obtenant des backlinks de haute qualite, ce qui en fait l'une des strategies de link building les plus ethiques et efficaces disponibles.",
      readTime: "8 min de lecture",
      sections: [
        {
          title: "Trouver des liens casses sur des sites pertinents",
          content:
            "Le succes du broken link building depend entierement de l'endroit ou vous cherchez. Des liens casses aleatoires sur des sites non lies gaspillent votre temps. Concentrez votre recherche sur les pages de ressources, guides d'achat et articles de blog dans votre niche e-commerce, ces pages sont les plus susceptibles d'accepter un lien de remplacement vers le contenu de votre boutique.\n\nCommencez par les pages de ressources dans votre niche. Les operateurs de recherche Google comme \"votre niche + ressources utiles,\" \"votre categorie de produit + liens recommandes\" ou \"votre niche + sites utiles\" font apparaitre des pages qui regroupent des liens vers du contenu externe. Ces pages accumulent naturellement des liens casses a mesure que les sites references disparaissent ou se restructurent.\n\nUtilisez le Broken Link Checker d'Ahrefs ou l'extension navigateur Check My Links pour scanner les pages de ressources a la recherche de liens sortants morts. Dans Ahrefs, vous pouvez egalement utiliser le rapport Broken Backlinks sur des domaines concurrents pour trouver des pages qui liaient autrefois du contenu similaire au votre mais pointent maintenant vers des erreurs 404.\n\nUne autre technique efficace consiste a identifier des concurrents ou sites sectoriels defunts. Quand un concurrent ferme sa boutique ou laisse expirer son domaine, chaque backlink qu'il avait obtenu devient un lien casse. Des outils comme la Wayback Machine vous aident a comprendre quel contenu existait autrefois sur ces pages mortes.",
          items: [
            "Concentrez-vous sur les pages de ressources, guides d'achat et articles de blog dans votre niche e-commerce specifique",
            "Utilisez les operateurs Google comme 'niche + ressources utiles' pour trouver des pages qui regroupent des liens externes",
            "Scannez les pages de ressources avec Ahrefs Broken Link Checker ou l'extension navigateur Check My Links",
            "Exploitez les rapports de backlinks casses des concurrents pour trouver des pages liant des erreurs 404 dans votre niche",
            "Identifiez les sites concurrents defunts dont les liens expires representent desormais des opportunites"
          ],
          tip: "Configurez des alertes Ahrefs pour les nouveaux backlinks casses de vos cinq principaux concurrents. Quand la page d'un concurrent tombe, vous serez immediatement notifie et pourrez contacter les sites liant avant que quelqu'un d'autre n'offre un remplacement."
        },
        {
          title: "Creer du contenu de remplacement adapte",
          content:
            "Offrir une page produit aleatoire en remplacement d'un lien casse echouera. Les webmasters avaient lie le contenu original pour une raison, votre remplacement doit servir le meme objectif et fournir une valeur egale ou superieure a leur audience.\n\nUtilisez la Wayback Machine pour visualiser les versions archivees de la page morte. Comprenez quelles informations elle fournissait, sa completude et pourquoi d'autres sites la trouvaient digne de liens. Votre contenu de remplacement devrait couvrir le meme sujet avec une profondeur similaire, mais avec des donnees mises a jour, une meilleure organisation ou des perspectives supplementaires qui le rendent genuinement superieur.\n\nPour les sites e-commerce, les types de contenu de remplacement les plus courants sont les guides d'achat, les articles comparatifs de produits, les pages de statistiques sectorielles et les guides pratiques lies a votre categorie de produit.\n\nN'essayez pas de remplacer du contenu informationnel par des pages produit. Si le lien casse pointait vers un article sur le choix des bonnes chaussures de course, votre remplacement devrait etre un guide complet de selection, pas votre fiche produit. Le contenu de remplacement peut lier internement vers vos produits, mais la page elle-meme doit etre suffisamment precieuse editorialement pour justifier le placement du lien.",
          items: [
            "Utilisez la Wayback Machine pour etudier quel contenu la page morte fournissait originellement",
            "Creez du contenu de remplacement qui couvre le meme sujet avec une profondeur egale ou superieure",
            "Privilegiez les guides d'achat, articles comparatifs, pages de statistiques et guides pratiques comme formats de remplacement",
            "N'offrez jamais de pages produit en remplacement de liens informationnels casses"
          ],
          tip: "Construisez une bibliotheque de cinq a dix pages de ressources completes sur votre site couvrant les principaux sujets de votre niche. Ces actifs evergreen servent de remplacements prets a l'emploi chaque fois que vous decouvrez des liens casses dans votre secteur."
        },
        {
          title: "Modeles d'outreach qui obtiennent des resultats",
          content:
            "L'outreach de broken link building a un taux de succes plus eleve que l'outreach a froid car vous resolvez un vrai probleme. Votre email notifie le webmaster d'un lien casse sur son site et offre une alternative fonctionnelle, c'est genuinement utile, pas auto-promotionnel. Formulez votre email en consequence.\n\nL'email d'outreach de broken link le plus efficace suit une structure en trois parties. Premierement, ouvrez avec un compliment specifique et genuine sur la page ou vous avez trouve le lien casse, cela prouve que vous avez reellement visite leur site. Deuxiemement, signalez le lien casse en fournissant l'URL exacte qui retourne une erreur 404 et decrivez ou sur leur page il apparait. Troisiemement, suggerez votre contenu en remplacement en expliquant ce qu'il couvre et pourquoi il conviendrait a leur audience.\n\nGardez l'email sous 120 mots. Les webmasters sont occupes et un email concis et utile surpasse un long argumentaire commercial a chaque fois. Ne demandez pas un lien directement, suggerez simplement votre page comme remplacement potentiel et laissez le webmaster decider.\n\nEvitez d'envoyer des emails modeles mentionnant plusieurs liens casses a la fois. Bien que cela puisse sembler efficace, les webmasters percoivent les notifications massives comme du spam automatise. Signalez un seul lien casse specifique par email.",
          items: [
            "Structurez votre email en trois parties : compliment genuine, signalement specifique du lien casse et suggestion de remplacement",
            "Fournissez l'URL cassee exacte et decrivez ou elle apparait sur la page",
            "Gardez l'email total sous 120 mots pour des taux de reponse maximaux",
            "Suggerez votre contenu comme remplacement sans demander explicitement un lien"
          ]
        },
        {
          title: "Outils et workflows pour le broken link building",
          content:
            "Un broken link building efficace necessite les bons outils et un workflow systematique. Sans automatisation a l'etape de decouverte, le processus est trop lent pour generer des resultats significatifs pour un site e-commerce.\n\nAhrefs est l'outil principal pour le broken link building a grande echelle. La fonctionnalite Content Explorer permet de trouver des pages dans votre niche qui n'existent plus en cherchant des mots-cles pertinents et en filtrant les pages 404. Le rapport Broken Backlinks montre exactement quelles pages lient du contenu mort dans votre domaine thematique.\n\nPour le scan sur page, l'extension Chrome Check My Links met en evidence les liens casses sur toute page visitee. Screaming Frog peut crawler des sites entiers et exporter des listes de liens sortants casses, ce qui est utile pour scanner systematiquement la section ressources d'un site cible.\n\nConstruisez un workflow autour de sessions de prospection hebdomadaires. Consacrez deux a trois heures par semaine a la recherche d'opportunites : une heure de decouverte avec Ahrefs et les operateurs Google, 30 minutes de verification Wayback Machine pour le contenu original, et une a deux heures d'outreach personnalise. Suivez chaque prospect dans un tableur.\n\nRegroupez les opportunites similaires. Si vous trouvez cinq pages de ressources dans votre niche liant toutes la meme page morte, vous pouvez utiliser un seul contenu de remplacement et envoyer cinq emails d'outreach personnalises.",
          items: [
            "Utilisez Ahrefs Content Explorer pour trouver des pages mortes dans votre niche et les sites qui les lient",
            "Scannez les pages individuelles avec l'extension Chrome Check My Links pour un prospecting rapide",
            "Utilisez Screaming Frog pour crawler des sites entiers et exporter des listes de liens sortants casses",
            "Consacrez deux a trois heures par semaine a un workflow structure de decouverte, recherche et outreach",
            "Suivez chaque prospect dans un tableur avec URL cassee, page liante, contact et statut de reponse"
          ],
          tip: "Creez une recherche sauvegardee dans Ahrefs Content Explorer pour vos mots-cles de niche filtres par pages 404. Verifiez cette recherche sauvegardee chaque semaine, de nouvelles opportunites de liens casses apparaissent constamment."
        },
        {
          title: "Mettre a l'echelle le processus de broken link building",
          content:
            "Le broken link building peut passer d'une poignee de liens par mois a un pipeline constant de 20-30 nouveaux backlinks mensuels, mais la mise a l'echelle necessite la systematisation de chaque etape : decouverte, creation de contenu, outreach et suivi.\n\nA l'etape de decouverte, montez en echelle en elargissant votre univers de mots-cles. La plupart des sites e-commerce commencent avec leurs mots-cles produit principaux, mais le plus grand vivier d'opportunites provient des sujets adjacents. Un magasin vendant du materiel de cuisine devrait chercher des liens casses non seulement sur les couteaux et ustensiles, mais aussi sur les techniques de cuisine, les ressources de recettes et les guides de securite alimentaire.\n\nMontez en echelle la creation de contenu en construisant des pages de ressources modulaires. Au lieu de creer une nouvelle page pour chaque opportunite, construisez du contenu pilier complet couvrant des sujets larges dans votre niche. Un guide ultime de 3 000 mots sur le choix des couteaux de cuisine peut servir de remplacement pour des dizaines de liens casses differents.\n\nMontez en echelle l'outreach en embauchant un assistant virtuel pour gerer le prospecting et l'outreach initial sous votre direction. Formez-le a vos criteres de qualite, fournissez vos modeles d'email et faites-lui rapporter ses trouvailles pour votre revision avant envoi.\n\nSuivez les taux de conversion par type de contenu et segment de niche. Avec le temps, vous decouvrirez que certains types de contenu de remplacement convertissent a 20-30% tandis que d'autres atteignent a peine 5%.",
          items: [
            "Elargissez votre univers de mots-cles aux sujets adjacents au-dela de vos mots-cles produit principaux",
            "Construisez du contenu pilier modulaire pouvant servir de remplacement pour de nombreux liens casses differents",
            "Embauchez un assistant virtuel pour gerer le prospecting et l'outreach initial selon vos criteres de qualite",
            "Suivez les taux de conversion par type de contenu et segment de niche pour vous concentrer sur les zones les plus performantes"
          ],
          tip: "Visez un pipeline de broken link building qui opere sur un cycle de quatre semaines : Semaine 1 pour la decouverte et le prospecting, Semaine 2 pour la creation ou mise a jour de contenu, Semaine 3 pour l'outreach et Semaine 4 pour le suivi. Ce rythme cree une acquisition de liens previsible et constante qui se compose au fil du temps."
        }
      ],
      navLabels: {
        previous: "Precedent",
        next: "Suivant",
      },
    },
    es: {
      badge: "Link building",
      heading: "Broken Link Building",
      intro:
        "El broken link building convierte enlaces muertos en otros sitios web en backlinks activos apuntando a tu tienda ecommerce. Cada sitio web acumula enlaces salientes rotos con el tiempo a medida que las paginas se eliminan, los dominios expiran o las URLs cambian. Al encontrar estos enlaces muertos en sitios relevantes y ofrecer tu contenido como reemplazo, proporcionas valor genuino a los webmasters mientras obtienes backlinks de alta calidad, convirtiendolo en una de las estrategias de link building mas eticas y efectivas disponibles.",
      readTime: "8 min de lectura",
      sections: [
        {
          title: "Encontrar enlaces rotos en sitios relevantes",
          content:
            "El exito del broken link building depende completamente de donde buscas. Enlaces rotos aleatorios en sitios no relacionados desperdician tu tiempo. Enfoca tu busqueda en paginas de recursos, guias de compra y posts de blog dentro de tu nicho ecommerce, estas paginas son las mas propensas a aceptar un enlace de reemplazo al contenido de tu tienda.\n\nComienza con paginas de recursos en tu nicho. Operadores de busqueda de Google como \"tu nicho + recursos utiles,\" \"tu categoria de producto + enlaces recomendados\" o \"tu nicho + sitios utiles\" muestran paginas que curan enlaces a contenido externo. Estas paginas acumulan naturalmente enlaces rotos a medida que los sitios que referencian desaparecen o se reestructuran.\n\nUsa el Broken Link Checker de Ahrefs o la extension de navegador Check My Links para escanear paginas de recursos en busca de enlaces salientes muertos. En Ahrefs, tambien puedes usar el informe de Broken Backlinks en dominios competidores para encontrar paginas que antes enlazaban contenido similar al tuyo pero ahora apuntan a errores 404.\n\nOtra tecnica efectiva es identificar competidores o sitios del sector que han desaparecido. Cuando un competidor cierra su tienda o deja expirar su dominio, cada backlink que obtuvo se convierte en un enlace roto. Herramientas como la Wayback Machine te ayudan a entender que contenido existia antes en esas paginas muertas.",
          items: [
            "Enfocate en paginas de recursos, guias de compra y posts de blog dentro de tu nicho ecommerce especifico",
            "Usa operadores de Google como 'nicho + recursos utiles' para encontrar paginas que curan enlaces externos",
            "Escanea paginas de recursos con Ahrefs Broken Link Checker o la extension Check My Links",
            "Explora informes de broken backlinks de competidores para encontrar paginas enlazando errores 404 en tu nicho",
            "Identifica sitios competidores desaparecidos cuyos enlaces expirados ahora representan oportunidades"
          ],
          tip: "Configura alertas de Ahrefs para nuevos backlinks rotos en tus cinco principales competidores. Cuando la pagina de un competidor cae, seras notificado inmediatamente y podras contactar los sitios enlazantes antes de que alguien mas ofrezca un reemplazo."
        },
        {
          title: "Crear contenido de reemplazo que encaje",
          content:
            "Ofrecer una pagina de producto aleatoria como reemplazo para un enlace roto fallara. Los webmasters enlazaron al contenido original por una razon, tu reemplazo debe servir el mismo proposito y proporcionar valor igual o superior a su audiencia.\n\nUsa la Wayback Machine para ver versiones archivadas de la pagina muerta. Entiende que informacion proporcionaba, que tan completa era y por que otros sitios la consideraron digna de enlazar. Tu contenido de reemplazo deberia cubrir el mismo tema con profundidad similar, pero con datos actualizados, mejor organizacion o perspectivas adicionales.\n\nPara sitios ecommerce, los tipos de contenido de reemplazo mas comunes son guias de compra, articulos comparativos de productos, paginas de estadisticas del sector y guias practicas relacionadas con tu categoria de producto.\n\nNo intentes reemplazar contenido informativo con paginas de producto. Si el enlace roto apuntaba a un articulo sobre elegir las zapatillas de running correctas, tu reemplazo deberia ser una guia completa de seleccion, no tu listado de productos de zapatillas. El contenido de reemplazo puede enlazar internamente a tus productos, pero la pagina en si debe ser editorialmente valiosa.",
          items: [
            "Usa la Wayback Machine para estudiar que contenido proporcionaba originalmente la pagina muerta",
            "Crea contenido de reemplazo que cubra el mismo tema con profundidad igual o superior",
            "Enfocate en guias de compra, articulos comparativos, paginas de estadisticas y guias practicas como formatos de reemplazo",
            "Nunca ofrezcas paginas de producto como reemplazo para enlaces informativos rotos"
          ],
          tip: "Construye una biblioteca de cinco a diez paginas de recursos completas en tu sitio cubriendo los principales temas de tu nicho. Estos activos evergreen sirven como reemplazos listos para usar cada vez que descubras enlaces rotos en tu industria."
        },
        {
          title: "Plantillas de outreach que obtienen resultados",
          content:
            "El outreach de broken link building tiene una tasa de exito mayor que el outreach frio porque estas resolviendo un problema real. Tu email notifica al webmaster de un enlace roto en su sitio y ofrece una alternativa funcional, esto es genuinamente util, no autopromocional. Formula tu email en consecuencia.\n\nEl email de outreach de broken link mas efectivo sigue una estructura de tres partes. Primero, abre con un cumplido especifico y genuino sobre la pagina donde encontraste el enlace roto, esto demuestra que realmente visitaste su sitio. Segundo, senala el enlace roto proporcionando la URL exacta que devuelve un error 404 y describe donde en su pagina aparece. Tercero, sugiere tu contenido como reemplazo explicando que cubre y por que encajaria con su audiencia.\n\nManten el email bajo 120 palabras. Los webmasters estan ocupados y un email conciso y util supera un largo argumento de venta cada vez. No pidas un enlace directamente, simplemente sugiere tu pagina como reemplazo potencial y deja que el webmaster decida.\n\nEvita enviar emails con plantilla que mencionen multiples enlaces rotos a la vez. Aunque pueda parecer eficiente, los webmasters perciben las notificaciones masivas de enlaces rotos como spam automatizado. Reporta un solo enlace roto especifico por email.",
          items: [
            "Estructura tu email en tres partes: cumplido genuino, reporte especifico del enlace roto y sugerencia de reemplazo",
            "Proporciona la URL rota exacta y describe donde aparece en la pagina",
            "Manten el email total bajo 120 palabras para tasas de respuesta maximas",
            "Sugiere tu contenido como reemplazo sin pedir explicitamente un enlace"
          ]
        },
        {
          title: "Herramientas y workflows para broken link building",
          content:
            "Un broken link building eficiente requiere las herramientas correctas y un workflow sistematico. Sin automatizacion en la etapa de descubrimiento, el proceso es demasiado lento para generar resultados significativos para un sitio ecommerce.\n\nAhrefs es la herramienta principal para broken link building a escala. La funcion Content Explorer permite encontrar paginas en tu nicho que ya no existen buscando keywords relevantes y filtrando por paginas 404. El informe de Broken Backlinks muestra exactamente que paginas enlazan a contenido muerto en tu area tematica.\n\nPara escaneo en pagina, la extension Chrome Check My Links resalta enlaces rotos en cualquier pagina que visites. Screaming Frog puede rastrear sitios enteros y exportar listas de enlaces salientes rotos.\n\nConstruye un workflow alrededor de sesiones de prospeccion semanales. Dedica dos a tres horas por semana a encontrar oportunidades de broken link: una hora de descubrimiento usando Ahrefs y operadores de Google, 30 minutos verificando la Wayback Machine para el contenido original, y una a dos horas de outreach personalizado. Rastrea cada prospecto en una hoja de calculo.\n\nAgrupa oportunidades similares. Si encuentras cinco paginas de recursos en tu nicho que enlazan a la misma pagina muerta, puedes usar un solo contenido de reemplazo y enviar cinco emails de outreach personalizados.",
          items: [
            "Usa Ahrefs Content Explorer para encontrar paginas muertas en tu nicho y los sitios que las enlazan",
            "Escanea paginas individuales con la extension Chrome Check My Links para prospeccion rapida",
            "Usa Screaming Frog para rastrear sitios enteros y exportar listas de enlaces salientes rotos",
            "Dedica dos a tres horas semanales a un workflow estructurado de descubrimiento, investigacion y outreach",
            "Rastrea cada prospecto en una hoja de calculo con URL rota, pagina enlazante, contacto y estado de respuesta"
          ],
          tip: "Crea una busqueda guardada en Ahrefs Content Explorer para tus keywords de nicho filtrados por paginas 404. Revisa esta busqueda guardada semanalmente, nuevas oportunidades de broken links aparecen constantemente a medida que los sitios se reestructuran."
        },
        {
          title: "Escalar el proceso de broken link building",
          content:
            "El broken link building puede escalarse de un punado de enlaces por mes a un pipeline consistente de 20-30 nuevos backlinks mensuales, pero escalar requiere la sistematizacion de cada paso: descubrimiento, creacion de contenido, outreach y seguimiento.\n\nEn la etapa de descubrimiento, escala expandiendo tu universo de keywords. La mayoria de sitios ecommerce comienzan con sus keywords de producto principales, pero el mayor pool de oportunidades viene de temas adyacentes. Una tienda que vende equipamiento de cocina no solo deberia buscar enlaces rotos sobre cuchillos y utensilios, sino tambien sobre tecnicas de cocina, recursos de recetas y guias de seguridad alimentaria.\n\nEscala la creacion de contenido construyendo paginas de recursos modulares. En lugar de crear una nueva pagina para cada oportunidad, construye contenido pilar completo que cubra temas amplios en tu nicho. Una guia definitiva de 3.000 palabras sobre elegir cuchillos de cocina puede servir como reemplazo para docenas de diferentes enlaces rotos.\n\nEscala el outreach contratando un asistente virtual para manejar la prospeccion y el outreach inicial bajo tu direccion. Entrenalo en tus criterios de calidad, proporciona tus plantillas de email y haz que reporte hallazgos para tu revision antes de enviar.\n\nRastrea tasas de conversion por tipo de contenido y segmento de nicho. Con el tiempo, descubriras que ciertos tipos de contenido de reemplazo convierten al 20-30% mientras otros apenas alcanzan el 5%.",
          items: [
            "Expande tu universo de keywords a temas adyacentes mas alla de tus keywords de producto principales",
            "Construye contenido pilar modular que pueda servir como reemplazo para muchos enlaces rotos diferentes",
            "Contrata un asistente virtual para manejar prospeccion y outreach inicial bajo tus directrices de calidad",
            "Rastrea tasas de conversion por tipo de contenido y segmento de nicho para enfocarte en las areas de mayor rendimiento"
          ],
          tip: "Apunta a un pipeline de broken link building que opere en un ciclo de cuatro semanas: Semana 1 para descubrimiento y prospeccion, Semana 2 para creacion o actualizacion de contenido, Semana 3 para outreach y Semana 4 para seguimiento. Este ritmo crea adquisicion de enlaces predecible y consistente que se compone con el tiempo."
        }
      ],
      navLabels: {
        previous: "Anterior",
        next: "Siguiente",
      },
    },
    it: {
      badge: "Link building",
      heading: "Broken Link Building",
      intro:
        "Il broken link building trasforma i link morti su altri siti web in backlink attivi che puntano al tuo negozio e-commerce. Ogni sito web accumula link in uscita rotti nel tempo man mano che le pagine vengono cancellate, i domini scadono o le URL cambiano. Trovando questi link morti su siti rilevanti e offrendo il tuo contenuto come sostituto, fornisci valore genuino ai webmaster guadagnando al contempo backlink di alta qualita, rendendola una delle strategie di link building piu etiche ed efficaci disponibili.",
      readTime: "8 min di lettura",
      sections: [
        {
          title: "Trovare link rotti su siti rilevanti",
          content:
            "Il successo del broken link building dipende interamente da dove cerchi. Link rotti casuali su siti non correlati sprecano il tuo tempo. Concentra la tua ricerca su pagine risorse, guide all'acquisto e post del blog nella tua nicchia e-commerce, queste pagine sono le piu propense ad accettare un link sostitutivo al contenuto del tuo negozio.\n\nInizia con le pagine risorse nella tua nicchia. Operatori di ricerca Google come \"la tua nicchia + risorse utili,\" \"la tua categoria di prodotto + link consigliati\" o \"la tua nicchia + siti utili\" fanno emergere pagine che curano link a contenuti esterni. Queste pagine accumulano naturalmente link rotti man mano che i siti referenziati vanno offline o si ristrutturano.\n\nUsa il Broken Link Checker di Ahrefs o l'estensione browser Check My Links per scansionare le pagine risorse alla ricerca di link in uscita morti. In Ahrefs, puoi anche usare il report Broken Backlinks sui domini concorrenti per trovare pagine che linkavano contenuti simili ai tuoi ma ora puntano a errori 404.\n\nUn'altra tecnica efficace e identificare concorrenti o siti di settore defunti. Quando un concorrente chiude il suo negozio o lascia scadere il dominio, ogni backlink che aveva guadagnato diventa un link rotto. Strumenti come la Wayback Machine ti aiutano a capire quale contenuto esisteva su quelle pagine morte.",
          items: [
            "Concentrati su pagine risorse, guide all'acquisto e post del blog nella tua nicchia e-commerce specifica",
            "Usa operatori Google come 'nicchia + risorse utili' per trovare pagine che curano link esterni",
            "Scansiona le pagine risorse con Ahrefs Broken Link Checker o l'estensione browser Check My Links",
            "Esplora i report di broken backlinks dei concorrenti per trovare pagine che linkano errori 404 nella tua nicchia",
            "Identifica siti concorrenti defunti i cui link scaduti rappresentano ora opportunita"
          ],
          tip: "Imposta avvisi Ahrefs per nuovi backlink rotti sui tuoi cinque principali concorrenti. Quando la pagina di un concorrente va giu, sarai notificato immediatamente e potrai contattare i siti linkanti prima che qualcun altro offra un sostituto."
        },
        {
          title: "Creare contenuti sostitutivi che corrispondano",
          content:
            "Offrire una pagina prodotto casuale come sostituto di un link rotto fallira. I webmaster hanno linkato il contenuto originale per una ragione, il tuo sostituto deve servire lo stesso scopo e fornire valore uguale o superiore alla loro audience.\n\nUsa la Wayback Machine per visualizzare le versioni archiviate della pagina morta. Comprendi quali informazioni forniva, quanto era completa e perche altri siti la trovavano degna di link. Il tuo contenuto sostitutivo dovrebbe coprire lo stesso argomento con profondita simile, ma con dati aggiornati, migliore organizzazione o insight aggiuntivi che lo rendono genuinamente superiore.\n\nPer i siti e-commerce, i tipi di contenuto sostitutivo piu comuni sono guide all'acquisto, articoli comparativi di prodotti, pagine di statistiche di settore e guide pratiche relative alla tua categoria di prodotto.\n\nNon cercare di sostituire contenuti informativi con pagine prodotto. Se il link rotto puntava a un articolo sulla scelta delle scarpe da corsa giuste, il tuo sostituto dovrebbe essere una guida completa alla selezione, non il tuo listing prodotto. Il contenuto sostitutivo puo linkare internamente ai tuoi prodotti, ma la pagina stessa deve essere editorialmente preziosa abbastanza da giustificare il posizionamento del link.",
          items: [
            "Usa la Wayback Machine per studiare quale contenuto la pagina morta forniva originariamente",
            "Crea contenuti sostitutivi che coprano lo stesso argomento con profondita uguale o superiore",
            "Concentrati su guide all'acquisto, articoli comparativi, pagine di statistiche e guide pratiche come formati sostitutivi",
            "Non offrire mai pagine prodotto come sostituti per link informativi rotti"
          ],
          tip: "Costruisci una libreria di cinque-dieci pagine risorse complete sul tuo sito che coprano i principali argomenti della tua nicchia. Questi asset evergreen servono come sostituti pronti all'uso ogni volta che scopri link rotti nel tuo settore."
        },
        {
          title: "Template di outreach che ottengono risultati",
          content:
            "L'outreach di broken link building ha un tasso di successo piu alto dell'outreach a freddo perche stai risolvendo un problema reale. La tua email notifica il webmaster di un link rotto sul suo sito e offre un'alternativa funzionante, questo e genuinamente utile, non auto-promozionale. Inquadra la tua email di conseguenza.\n\nL'email di outreach broken link piu efficace segue una struttura in tre parti. Primo, apri con un complimento specifico e genuino sulla pagina dove hai trovato il link rotto, questo dimostra che hai effettivamente visitato il loro sito. Secondo, segnala il link rotto fornendo l'URL esatto che restituisce un errore 404 e descrivi dove sulla loro pagina appare. Terzo, suggerisci il tuo contenuto come sostituto spiegando cosa copre e perche sarebbe adatto alla loro audience.\n\nMantieni l'email sotto le 120 parole. I webmaster sono impegnati e un'email concisa e utile supera un lungo discorso di vendita ogni volta. Non chiedere un link direttamente, suggerisci semplicemente la tua pagina come potenziale sostituto e lascia decidere al webmaster.\n\nEvita di inviare email template che menzionano piu link rotti contemporaneamente. Anche se potrebbe sembrare efficiente, i webmaster percepiscono le notifiche massive di link rotti come spam automatizzato. Segnala un solo link rotto specifico per email.",
          items: [
            "Struttura la tua email in tre parti: complimento genuino, segnalazione specifica del link rotto e suggerimento di sostituzione",
            "Fornisci l'URL rotto esatto e descrivi dove appare sulla pagina",
            "Mantieni l'email totale sotto le 120 parole per tassi di risposta massimi",
            "Suggerisci il tuo contenuto come sostituto senza chiedere esplicitamente un link"
          ]
        },
        {
          title: "Strumenti e workflow per il broken link building",
          content:
            "Un broken link building efficiente richiede gli strumenti giusti e un workflow sistematico. Senza automazione nella fase di scoperta, il processo e troppo lento per generare risultati significativi per un sito e-commerce.\n\nAhrefs e lo strumento principale per il broken link building su scala. La funzione Content Explorer permette di trovare pagine nella tua nicchia che non esistono piu cercando keyword rilevanti e filtrando per pagine 404. Il report Broken Backlinks mostra esattamente quali pagine linkano contenuti morti nella tua area tematica.\n\nPer la scansione on-page, l'estensione Chrome Check My Links evidenzia i link rotti su qualsiasi pagina visiti. Screaming Frog puo scansionare interi siti ed esportare liste di link in uscita rotti.\n\nCostruisci un workflow attorno a sessioni di prospecting settimanali. Dedica due-tre ore a settimana alla ricerca di opportunita: un'ora di scoperta usando Ahrefs e operatori Google, 30 minuti di verifica Wayback Machine per il contenuto originale, e una-due ore di outreach personalizzato. Traccia ogni prospect in un foglio di calcolo con colonne per URL rotto, pagina linkante, email di contatto, URL del contenuto sostitutivo, data di outreach e stato della risposta.\n\nRaggruppa opportunita simili. Se trovi cinque pagine risorse nella tua nicchia che linkano tutte alla stessa pagina morta, puoi usare un solo contenuto sostitutivo e inviare cinque email di outreach personalizzate.",
          items: [
            "Usa Ahrefs Content Explorer per trovare pagine morte nella tua nicchia e i siti che le linkano",
            "Scansiona singole pagine con l'estensione Chrome Check My Links per prospecting rapido",
            "Usa Screaming Frog per scansionare interi siti ed esportare liste di link in uscita rotti",
            "Dedica due-tre ore a settimana a un workflow strutturato di scoperta, ricerca e outreach",
            "Traccia ogni prospect in un foglio di calcolo con URL rotto, pagina linkante, contatto e stato risposta"
          ],
          tip: "Crea una ricerca salvata in Ahrefs Content Explorer per le tue keyword di nicchia filtrate per pagine 404. Controlla questa ricerca salvata settimanalmente, nuove opportunita di broken link appaiono costantemente man mano che i siti si ristrutturano."
        },
        {
          title: "Scalare il processo di broken link building",
          content:
            "Il broken link building puo essere scalato da una manciata di link al mese a un pipeline consistente di 20-30 nuovi backlink mensili, ma scalare richiede la sistematizzazione di ogni passaggio: scoperta, creazione di contenuti, outreach e follow-up.\n\nNella fase di scoperta, scala espandendo il tuo universo di keyword. La maggior parte dei siti e-commerce inizia con le keyword prodotto principali, ma il pool di opportunita piu grande viene da argomenti adiacenti. Un negozio che vende attrezzatura da cucina non dovrebbe cercare solo link rotti su coltelli e pentole, ma anche su tecniche di cucina, risorse di ricette e guide sulla sicurezza alimentare.\n\nScala la creazione di contenuti costruendo pagine risorse modulari. Invece di creare una nuova pagina per ogni opportunita, costruisci contenuti pillar completi che coprano argomenti ampi nella tua nicchia. Una guida definitiva di 3.000 parole sulla scelta dei coltelli da cucina puo servire come sostituto per decine di link rotti diversi.\n\nScala l'outreach assumendo un assistente virtuale per gestire il prospecting e l'outreach iniziale sotto la tua supervisione. Formalo sui tuoi criteri di qualita, fornisci i tuoi template email e fallo riportare i risultati per la tua revisione prima dell'invio.\n\nTraccia i tassi di conversione per tipo di contenuto e segmento di nicchia. Col tempo, scoprirai che certi tipi di contenuti sostitutivi convertono al 20-30% mentre altri raggiungono a malapena il 5%.",
          items: [
            "Espandi il tuo universo di keyword ad argomenti adiacenti oltre le tue keyword prodotto principali",
            "Costruisci contenuti pillar modulari che possano servire come sostituto per molti link rotti diversi",
            "Assumi un assistente virtuale per gestire prospecting e outreach iniziale secondo le tue linee guida di qualita",
            "Traccia i tassi di conversione per tipo di contenuto e segmento di nicchia per concentrarti sulle aree piu performanti"
          ],
          tip: "Punta a un pipeline di broken link building che operi su un ciclo di quattro settimane: Settimana 1 per scoperta e prospecting, Settimana 2 per creazione o aggiornamento contenuti, Settimana 3 per outreach e Settimana 4 per follow-up. Questo ritmo crea un'acquisizione di link prevedibile e consistente che si compone nel tempo."
        }
      ],
      navLabels: {
        previous: "Precedente",
        next: "Successivo",
      },
    },
    nl: {
      badge: "Linkbuilding",
      heading: "Broken Link Building",
      intro:
        "Broken link building verandert dode links op andere websites in actieve backlinks die naar je e-commerce winkel verwijzen. Elke website accumuleert in de loop der tijd gebroken uitgaande links wanneer pagina's worden verwijderd, domeinen verlopen of URL's wijzigen. Door deze dode links op relevante sites te vinden en je content als vervanging aan te bieden, bied je oprechte waarde aan webmasters terwijl je hoogwaardige backlinks verdient, waardoor het een van de meest ethische en effectieve linkbuildingstrategieen is die beschikbaar zijn.",
      readTime: "8 min leestijd",
      sections: [
        {
          title: "Gebroken links vinden op relevante sites",
          content:
            "Het succes van broken link building hangt volledig af van waar je zoekt. Willekeurige gebroken links op ongerelateerde sites verspillen je tijd. Richt je zoektocht op bronpagina's, koopgidsen en blogposts binnen je e-commerce niche, deze pagina's accepteren het meest waarschijnlijk een vervangingslink naar de content van je winkel.\n\nBegin met bronpagina's in je niche. Google-zoekoperatoren zoals \"je niche + nuttige bronnen,\" \"je productcategorie + aanbevolen links\" of \"je niche + handige sites\" tonen pagina's die links naar externe content cureren. Deze bronpagina's accumuleren natuurlijk gebroken links naarmate de gerefereerde sites offline gaan of herstructureren.\n\nGebruik Ahrefs' Broken Link Checker of de Check My Links browserextensie om bronpagina's te scannen op dode uitgaande links. In Ahrefs kun je ook het Broken Backlinks-rapport over concurrerende domeinen gebruiken om pagina's te vinden die eerder naar content vergelijkbaar met de jouwe linkten maar nu naar 404-fouten verwijzen.\n\nEen andere effectieve techniek is het identificeren van ter ziele gegane concurrenten of branchesites. Wanneer een concurrent zijn winkel sluit of zijn domein laat verlopen, wordt elke verdiende backlink een gebroken link. Tools zoals de Wayback Machine helpen je begrijpen welke content er vroeger op die dode pagina's stond.",
          items: [
            "Richt je op bronpagina's, koopgidsen en blogposts binnen je specifieke e-commerce niche",
            "Gebruik Google-operatoren zoals 'niche + nuttige bronnen' om pagina's te vinden die externe links cureren",
            "Scan bronpagina's met Ahrefs Broken Link Checker of de Check My Links browserextensie",
            "Doorzoek broken backlinks-rapporten van concurrenten om pagina's te vinden die naar 404-fouten linken in je niche",
            "Identificeer ter ziele gegane concurrentsites wiens verlopen links nu kansen vertegenwoordigen"
          ],
          tip: "Stel Ahrefs-alerts in voor nieuwe gebroken backlinks bij je top vijf concurrenten. Wanneer een pagina van een concurrent uitvalt, word je onmiddellijk op de hoogte gesteld en kun je de linkende sites benaderen voordat iemand anders een vervanging aanbiedt."
        },
        {
          title: "Vervangingscontent creeren die past",
          content:
            "Een willekeurige productpagina aanbieden als vervanging voor een gebroken link zal falen. Webmasters linkten naar de originele content met een reden, je vervanging moet hetzelfde doel dienen en gelijke of grotere waarde bieden aan hun publiek.\n\nGebruik de Wayback Machine om gearchiveerde versies van de dode pagina te bekijken. Begrijp welke informatie het bood, hoe compleet het was en waarom andere sites het de moeite waard vonden om naar te linken. Je vervangingscontent zou hetzelfde onderwerp moeten behandelen met vergelijkbare diepgang, maar met geactualiseerde data, betere organisatie of aanvullende inzichten.\n\nVoor e-commerce sites zijn de meest voorkomende vervangingscontenttypes koopgidsen, productvergelijkingsartikelen, branchestatistiekpagina's en how-to gidsen gerelateerd aan je productcategorie.\n\nProbeer niet informatieve content te vervangen door productpagina's. Als de gebroken link wees naar een artikel over het kiezen van de juiste hardloopschoenen, zou je vervanging een uitgebreide selectiegids moeten zijn, niet je productvermelding. De vervangingscontent kan intern linken naar je producten, maar de pagina zelf moet redactioneel waardevol genoeg zijn om de linkplaatsing te rechtvaardigen.",
          items: [
            "Gebruik de Wayback Machine om te bestuderen welke content de dode pagina oorspronkelijk bood",
            "Maak vervangingscontent die hetzelfde onderwerp behandelt met gelijke of grotere diepgang",
            "Richt je op koopgidsen, vergelijkingsartikelen, statistiekpagina's en how-to gidsen als vervangingsformaten",
            "Bied nooit productpagina's aan als vervanging voor informatieve gebroken links"
          ],
          tip: "Bouw een bibliotheek van vijf tot tien uitgebreide bronpagina's op je site die de belangrijkste onderwerpen in je niche behandelen. Deze evergreen assets dienen als kant-en-klare vervangingen wanneer je gebroken links in je branche ontdekt."
        },
        {
          title: "Outreach-templates die resultaten opleveren",
          content:
            "Broken link building outreach heeft een hoger slagingspercentage dan koude outreach omdat je een echt probleem oplost. Je e-mail stelt de webmaster op de hoogte van een gebroken link op hun site en biedt een werkend alternatief, dit is oprecht behulpzaam, niet zelfpromotioneel. Formuleer je e-mail dienovereenkomstig.\n\nDe meest effectieve broken link outreach-e-mail volgt een driedelige structuur. Ten eerste, open met een specifiek, oprecht compliment over de pagina waar je de gebroken link vond, dit bewijst dat je hun site daadwerkelijk hebt bezocht. Ten tweede, wijs op de gebroken link door de exacte URL te geven die een 404-fout teruggeeft en beschrijf waar op hun pagina deze verschijnt. Ten derde, stel je content voor als vervanging door uit te leggen wat het behandelt en waarom het goed zou passen bij hun publiek.\n\nHoud de e-mail onder 120 woorden. Webmasters zijn druk en een beknopte, behulpzame e-mail presteert elke keer beter dan een lang verkooppraatje. Vraag niet direct om een link, stel simpelweg je pagina voor als potentiele vervanging en laat de webmaster beslissen.\n\nVermijd het versturen van template-e-mails die meerdere gebroken links tegelijk noemen. Hoewel het efficient lijkt, beschouwen webmasters bulk-meldingen van gebroken links als geautomatiseerde spam. Meld een specifieke gebroken link per e-mail.",
          items: [
            "Structureer je e-mail in drie delen: oprecht compliment, specifieke melding van gebroken link en vervangingsvoorstel",
            "Geef de exacte gebroken URL en beschrijf waar deze op de pagina verschijnt",
            "Houd de totale e-mail onder 120 woorden voor maximale responspercentages",
            "Stel je content voor als vervanging zonder expliciet om een link te vragen"
          ]
        },
        {
          title: "Tools en workflows voor broken link building",
          content:
            "Efficient broken link building vereist de juiste tools en een systematische workflow. Zonder automatisering in de ontdekkingsfase is het proces te langzaam om betekenisvolle resultaten te genereren voor een e-commerce site.\n\nAhrefs is de primaire tool voor broken link building op schaal. De Content Explorer-functie laat je pagina's in je niche vinden die niet meer bestaan door te zoeken op relevante zoekwoorden en te filteren op 404-pagina's. Het Broken Backlinks-rapport toont precies welke pagina's naar dode content linken in je vakgebied.\n\nVoor on-page scanning markeert de Check My Links Chrome-extensie gebroken links op elke pagina die je bezoekt. Screaming Frog kan complete websites crawlen en lijsten van gebroken uitgaande links exporteren.\n\nBouw een workflow rondom wekelijkse prospectingsessies. Besteed twee tot drie uur per week aan het vinden van broken link-kansen: een uur ontdekking met Ahrefs en Google-operatoren, 30 minuten Wayback Machine-controle voor de originele content, en een tot twee uur gepersonaliseerde outreach. Volg elk prospect in een spreadsheet met kolommen voor de gebroken URL, de linkende pagina, het contact-e-mailadres, de vervangingscontent-URL, de outreachdatum en de responsstatus.\n\nBundel vergelijkbare kansen. Als je vijf bronpagina's in je niche vindt die allemaal naar dezelfde dode pagina linken, kun je een enkel stuk vervangingscontent gebruiken en vijf gepersonaliseerde outreach-e-mails sturen.",
          items: [
            "Gebruik Ahrefs Content Explorer om dode pagina's in je niche te vinden en de sites die ernaar linken",
            "Scan individuele pagina's met de Check My Links Chrome-extensie voor snel prospecteren",
            "Gebruik Screaming Frog om complete sites te crawlen en lijsten van gebroken uitgaande links te exporteren",
            "Besteed twee tot drie uur per week aan een gestructureerde workflow van ontdekking, onderzoek en outreach",
            "Volg elk prospect in een spreadsheet met gebroken URL, linkende pagina, contact en responsstatus"
          ],
          tip: "Maak een opgeslagen zoekopdracht in Ahrefs Content Explorer voor je top niche-zoekwoorden gefilterd op 404-pagina's. Controleer deze opgeslagen zoekopdracht wekelijks, nieuwe broken link-kansen verschijnen voortdurend naarmate sites herstructureren."
        },
        {
          title: "Het broken link building-proces opschalen",
          content:
            "Broken link building kan worden opgeschaald van een handvol links per maand naar een consistente pipeline van 20-30 nieuwe backlinks maandelijks, maar opschalen vereist systematisering van elke stap: ontdekking, contentcreatie, outreach en follow-up.\n\nIn de ontdekkingsfase schaal je op door je zoekwoorduniversum uit te breiden. De meeste e-commerce sites beginnen met hun primaire productzoekwoorden, maar de grootste kansenpool komt van aangrenzende onderwerpen. Een winkel die keukenapparatuur verkoopt zou niet alleen moeten zoeken naar gebroken links over messen en kookgerei, maar ook over kooktechnieken, receptbronnen en voedselveiligheidsgidsen.\n\nSchaal contentcreatie op door modulaire bronpagina's te bouwen. In plaats van een nieuwe pagina te creeren voor elke broken link-kans, bouw je uitgebreide pijlercontent die brede onderwerpen in je niche behandelt. Een ultieme gids van 3.000 woorden over het kiezen van keukenmessen kan dienen als vervanging voor tientallen verschillende gebroken links.\n\nSchaal outreach op door een virtuele assistent in te huren om prospecting en initiele outreach onder jouw begeleiding af te handelen. Train hen op je kwaliteitscriteria, lever je e-mailtemplates en laat hen bevindingen rapporteren voor je review voor verzending.\n\nVolg conversiepercentages per contenttype en nichesegment. Na verloop van tijd ontdek je dat bepaalde typen vervangingscontent converteren op 20-30% terwijl andere nauwelijks 5% bereiken.",
          items: [
            "Breid je zoekwoorduniversum uit naar aangrenzende onderwerpen voorbij je primaire productzoekwoorden",
            "Bouw modulaire pijlercontent die kan dienen als vervanging voor veel verschillende gebroken links",
            "Huur een virtuele assistent in om prospecting en initiele outreach af te handelen onder jouw kwaliteitsrichtlijnen",
            "Volg conversiepercentages per contenttype en nichesegment om je te richten op best presterende gebieden"
          ],
          tip: "Streef naar een broken link building-pipeline die werkt op een vierwekelijkse cyclus: Week 1 voor ontdekking en prospecting, Week 2 voor contentcreatie of updates, Week 3 voor outreach en Week 4 voor follow-up. Dit ritme creert voorspelbare, consistente linkverwerving die zich in de tijd opbouwt."
        }
      ],
      navLabels: {
        previous: "Vorige",
        next: "Volgende",
      },
    },
  },
};
