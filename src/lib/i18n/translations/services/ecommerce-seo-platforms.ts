import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const ecommerceSeoPlatformsData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Ecommerce SEO by Platform",
      heading: "Platform-Native SEO That\u200BFits Your Stack",
      subtitle: "Every ecommerce platform has unique SEO strengths and hidden pitfalls. We work natively inside Shopify, WooCommerce, BigCommerce, and Adobe Commerce - exploiting every platform advantage and fixing every platform-specific bottleneck.",
      ctaText: "Book a Free Platform Audit",
    },
    trustBar: "Shopify, WooCommerce, BigCommerce & Adobe Commerce experts",
    sections: [
      {
        type: "links",
        badge: "Choose Your Platform",
        heading: "We Work Natively Inside Your Ecommerce Platform",
        subtitle: "Every platform has different SEO strengths and pitfalls. Pick yours to see how we approach it.",
        links: [
          { title: "Shopify SEO", href: "/shopify-seo", description: "Shopify\u2019s theme architecture, canonical handling, and app ecosystem create specific SEO patterns. We optimize Liquid templates, fix duplicate content from collections, and leverage Shopify\u2019s native structured data." },
          { title: "WooCommerce SEO", href: "/woocommerce-seo", description: "WordPress flexibility is both a strength and a risk. Plugin conflicts, bloated databases, and uncontrolled URL sprawl quietly destroy rankings. We audit and tighten the full WP stack for SEO performance." },
          { title: "BigCommerce SEO", href: "/bigcommerce-seo", description: "BigCommerce has the strongest native SEO foundation of any major platform - built-in sitemaps, microdata, and clean URL structures. We push those advantages further with faceted navigation control and catalog-level optimization." },
          { title: "Adobe Commerce SEO", href: "/adobe-commerce-seo", description: "Adobe Commerce (Magento) is enterprise-grade but enterprise-complex. Crawl budget waste, JS rendering issues, and multi-store configurations require specialist knowledge. We\u2019ve worked inside complex Magento environments - we know where the bodies are buried." },
        ],
      },
      {
        type: "benefits",
        badge: "What We Deliver",
        heading: "Platform-Specific SEO That Goes Deeper Than Generic Audits",
        subtitle: "A generic SEO agency applies the same checklist to every platform. We build platform-native strategies that exploit your stack\u2019s unique capabilities.",
        benefits: [
          { title: "Platform-Native Technical Audit", description: "We audit every SEO layer specific to your platform: theme architecture, app/plugin stack, URL structure, canonical logic, and crawl budget allocation." },
          { title: "Theme & Template Optimization", description: "The HTML your theme outputs directly affects how search engines understand your products. We optimize at the template level - not just surface content." },
          { title: "App & Plugin SEO Stack Review", description: "Third-party apps and plugins introduce duplicate meta tags, conflicting redirects, and JS render issues. We clean up your integration stack to eliminate invisible SEO damage." },
          { title: "Platform Migration Support", description: "Migrating platforms is the highest-risk moment for your organic traffic. We create and execute migration plans that protect and improve your rankings during every transition." },
          { title: "Platform-Specific Schema Markup", description: "Product, offer, breadcrumb, and review schema implemented correctly for your platform\u2019s templating engine - not copy-pasted JSON-LD that breaks on dynamic pages." },
          { title: "Scalable Catalog Optimization", description: "Whether you have 500 or 500,000 SKUs, we build automated optimization workflows that scale with your catalog size - no manual updates required per product." },
        ],
      },
      {
        type: "process",
        badge: "The Process",
        heading: "How We Approach Platform SEO",
        subtitle: "We don\u2019t copy-paste strategies between platforms. Each engagement starts with a deep platform-native audit before any work begins.",
        process: [
          { number: "01", title: "Platform Audit", description: "A platform-specific crawl and technical review. We identify every SEO issue unique to your stack: theme-level canonicals, app conflicts, render blockers, and crawl waste." },
          { number: "02", title: "Architecture Fix", description: "Fix the foundational issues first: URL structure, internal linking, faceted navigation control, and crawl prioritization. The platform is now structurally sound for ranking." },
          { number: "03", title: "Content & Category Optimization", description: "Platform-aware category page optimization, product template SEO, and content strategy built around your catalog\u2019s unique keyword opportunities." },
          { number: "04", title: "Scale & Monitor", description: "Ongoing monitoring for platform updates, app changes, and ranking shifts. We protect your organic gains as your catalog and stack evolve." },
        ],
      },
      {
        type: "links",
        badge: "Explore More",
        heading: "Browse All Services & Industry Approaches",
        subtitle: "Platform expertise is one dimension of ecommerce SEO. Explore our full service menu and industry-specific strategies.",
        links: [
          {
            title: "All Ecommerce SEO Services",
            description: "See every service we offer - from technical audits to content writing to authority building.",
            href: "/ecommerce-seo-services",
          },
          {
            title: "SEO by Industry",
            description: "Fashion, Beauty, Consumables, Toys - industry-native strategies for your specific vertical.",
            href: "/ecommerce-seo-industries",
          },
          {
            title: "Ecommerce SEO",
            description: "The full commercial SEO strategy for online stores - platform-agnostic and revenue-focused.",
            href: "/ecommerce-seo",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Which ecommerce platform is best for SEO?", answer: "BigCommerce has the strongest out-of-the-box SEO features. Shopify is excellent with the right setup. WooCommerce is highly flexible but requires more discipline. Adobe Commerce is best for enterprise catalogs with complex requirements. The best platform for SEO is the one you\u2019re already on, optimized correctly." },
        { question: "Do you specialize in specific platforms?", answer: "We work natively across Shopify, WooCommerce, BigCommerce, and Adobe Commerce. Each platform has a dedicated playbook. We don\u2019t apply generic strategies - every audit, fix, and optimization is written for your specific stack." },
        { question: "Should I migrate to Shopify for better SEO?", answer: "Not necessarily. Platform migrations are high-risk for rankings and should only happen if the business case is strong beyond SEO. Most SEO issues are fixable on any major platform without migration. If you do migrate, we handle the SEO side of the transition from audit to redirect mapping to post-migration monitoring. Read our [ecommerce SEO migration](/blog/ecommerce-seo-migration) guide for more." },
        { question: "How does WooCommerce compare to Shopify for SEO?", answer: "WooCommerce gives you more control but also more ways to break your SEO. Shopify is more constrained but more consistent. WooCommerce stores often have plugin bloat and technical debt that quietly hurts rankings. Shopify stores often hit canonical and URL structure issues unique to the platform. Both are fully winnable - they just require different strategies." },
        { question: "Do you handle platform migrations?", answer: "Yes. Platform migration is one of the highest-risk SEO events a store can go through. We plan and execute migrations with redirect mapping, crawl monitoring, and a 90-day post-migration tracking protocol to catch and fix any ranking drops before they compound. Our [platform migration SEO](/academy/platform-migration-seo) guide covers the full process." },
        { question: "Can you work with headless or custom implementations?", answer: "Yes. Headless commerce (e.g. Shopify + Next.js, custom storefronts) introduces specific SEO challenges around rendering, indexation, and structured data. We\u2019ve worked with headless setups and understand how to make them fully crawlable and rankable." },
      ],
      miniCta: {
        heading: "Which Platform Is Holding Your Rankings Back?",
        subtitle: "Book a platform audit and we\u2019ll show you exactly what\u2019s broken - and how to fix it.",
      },
    },
  },
  de: {
    hero: {
      badge: "E-Commerce SEO nach Plattform",
      heading: "Plattform-natives SEO\u200Bf\u00fcr Ihren Tech-Stack",
      subtitle: "Jede E-Commerce-Plattform hat einzigartige SEO-St\u00e4rken und versteckte Fallstricke. Wir arbeiten nativ in Shopify, WooCommerce, BigCommerce und Adobe Commerce - nutzen jeden Plattformvorteil und beheben jeden plattformspezifischen Engpass.",
      ctaText: "Kostenloses Plattform-Audit buchen",
    },
    trustBar: "Shopify, WooCommerce, BigCommerce & Adobe Commerce Experten",
    sections: [
      {
        type: "links",
        badge: "Wählen Sie Ihre Plattform",
        heading: "Wir arbeiten nativ in Ihrer E-Commerce-Plattform",
        subtitle: "Jede Plattform hat unterschiedliche SEO-Stärken und Fallstricke. Wählen Sie Ihre, um unseren Ansatz zu sehen.",
        links: [
          { title: "Shopify SEO", href: "/shopify-seo", description: "Shopifys Theme-Architektur, Canonical-Behandlung und App-Ökosystem erzeugen spezifische SEO-Muster. Wir optimieren Liquid-Templates, beheben doppelte Inhalte aus Collections und nutzen Shopifys native strukturierte Daten." },
          { title: "WooCommerce SEO", href: "/woocommerce-seo", description: "WordPress-Flexibilität ist sowohl Stärke als auch Risiko. Plugin-Konflikte, aufgeblähte Datenbanken und unkontrollierte URL-Ausbreitung zerstören still Rankings. Wir prüfen und straffen den gesamten WP-Stack für SEO-Leistung." },
          { title: "BigCommerce SEO", href: "/bigcommerce-seo", description: "BigCommerce hat das stärkste native SEO-Fundament aller großen Plattformen, eingebaute Sitemaps, Mikrodaten und saubere URL-Strukturen. Wir treiben diese Vorteile weiter mit Facettennavigation-Kontrolle und katalogweiter Optimierung." },
          { title: "Adobe Commerce SEO", href: "/adobe-commerce-seo", description: "Adobe Commerce (Magento) ist enterprise-grade, aber enterprise-komplex. Crawl-Budget-Verschwendung, JS-Rendering-Probleme und Multi-Store-Konfigurationen erfordern Spezialwissen. Wir haben in komplexen Magento-Umgebungen gearbeitet, wir wissen, wo die Probleme liegen." },
        ],
      },
      {
        type: "benefits",
        badge: "Was wir liefern",
        heading: "Plattformspezifisches SEO, das tiefer geht als generische Audits",
        subtitle: "Eine generische SEO-Agentur wendet dieselbe Checkliste auf jede Plattform an. Wir erstellen plattformnative Strategien, die die einzigartigen F\u00e4higkeiten Ihres Stacks nutzen.",
        benefits: [
          { title: "Plattform-natives technisches Audit", description: "Wir pr\u00fcfen jede SEO-Schicht spezifisch f\u00fcr Ihre Plattform: Theme-Architektur, App/Plugin-Stack, URL-Struktur, Canonical-Logik und Crawl-Budget-Zuweisung." },
          { title: "Theme- & Template-Optimierung", description: "Das HTML, das Ihr Theme ausgibt, beeinflusst direkt, wie Suchmaschinen Ihre Produkte verstehen. Wir optimieren auf Template-Ebene - nicht nur oberfl\u00e4chliche Inhalte." },
          { title: "\u00dcberpr\u00fcfung des App- & Plugin-SEO-Stacks", description: "Drittanbieter-Apps und Plugins f\u00fchren doppelte Meta-Tags, widerspruchliche Weiterleitungen und JS-Render-Probleme ein. Wir bereinigen Ihren Integrations-Stack, um unsichtbare SEO-Sch\u00e4den zu beseitigen." },
          { title: "Unterst\u00fctzung bei Plattformmigration", description: "Die Migration von Plattformen ist der risikoreichste Moment f\u00fcr Ihren organischen Traffic. Wir erstellen und f\u00fchren Migrationsp\u00e4ne durch, die Ihre Rankings w\u00e4hrend jedes \u00dcbergangs sch\u00fctzen und verbessern." },
          { title: "Plattformspezifisches Schema-Markup", description: "Produkt-, Angebots-, Breadcrumb- und Bewertungs-Schema korrekt f\u00fcr die Template-Engine Ihrer Plattform implementiert - kein kopiertes JSON-LD, das auf dynamischen Seiten bricht." },
          { title: "Skalierbare Katalogoptimierung", description: "Ob Sie 500 oder 500.000 SKUs haben, wir erstellen automatisierte Optimierungs-Workflows, die mit Ihrer Kataloggr\u00f6\u00dfe skalieren - keine manuellen Updates pro Produkt erforderlich." },
        ],
      },
      {
        type: "process",
        badge: "Der Prozess",
        heading: "Wie wir Plattform-SEO angehen",
        subtitle: "Wir kopieren keine Strategien zwischen Plattformen. Jedes Engagement beginnt mit einem tiefen plattformnative Audit, bevor Arbeiten beginnen.",
        process: [
          { number: "01", title: "Plattform-Audit", description: "Ein plattformspezifischer Crawl und technische \u00dcberpr\u00fcfung. Wir identifizieren jedes SEO-Problem, das einzigartig f\u00fcr Ihren Stack ist: Theme-Canonicals, App-Konflikte, Render-Blocker und Crawl-Verschwendung." },
          { number: "02", title: "Architektur-Reparatur", description: "Zuerst die grundlegenden Probleme beheben: URL-Struktur, interne Verlinkung, Facettennavigation-Kontrolle und Crawl-Priorisierung. Die Plattform ist nun strukturell solide f\u00fcr das Ranking." },
          { number: "03", title: "Content- & Kategorieoptimierung", description: "Plattformbewusste Kategorieseiten-Optimierung, Produkttemplate-SEO und Content-Strategie rund um die einzigartigen Keyword-M\u00f6glichkeiten Ihres Katalogs." },
          { number: "04", title: "Skalieren & \u00dcberwachen", description: "Laufende \u00dcberwachung auf Plattform-Updates, App-\u00c4nderungen und Ranking-Verschiebungen. Wir sch\u00fctzen Ihre organischen Gewinne, w\u00e4hrend sich Ihr Katalog und Stack weiterentwickeln." },
        ],
      },
      {
        type: "links",
        badge: "Mehr entdecken",
        heading: "Alle Services & Branchenansätze durchsuchen",
        subtitle: "Plattform-Expertise ist eine Dimension des E-Commerce-SEO. Entdecken Sie unser vollständiges Service-Menü und branchenspezifische Strategien.",
        links: [
          {
            title: "Alle E-Commerce SEO Services",
            description: "Sehen Sie jeden Service, den wir anbieten - von technischen Audits bis zu Content-Erstellung und Autoritätsaufbau.",
            href: "/ecommerce-seo-services",
          },
          {
            title: "SEO nach Branche",
            description: "Mode, Beauty, Konsumgüter, Spielzeug - branchenorientierte Strategien für Ihre spezifische Nische.",
            href: "/ecommerce-seo-industries",
          },
          {
            title: "E-Commerce SEO",
            description: "Die vollständige kommerzielle SEO-Strategie für Online-Shops - plattformunabhängig und umsatzorientiert.",
            href: "/ecommerce-seo",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Welche E-Commerce-Plattform ist am besten f\u00fcr SEO?", answer: "BigCommerce hat die st\u00e4rksten Out-of-the-Box-SEO-Funktionen. Shopify ist mit der richtigen Einrichtung ausgezeichnet. WooCommerce ist hochflexibel, erfordert aber mehr Disziplin. Adobe Commerce ist am besten f\u00fcr Enterprise-Kataloge mit komplexen Anforderungen. Die beste SEO-Plattform ist die, die Sie bereits verwenden - korrekt optimiert." },
        { question: "Spezialisieren Sie sich auf bestimmte Plattformen?", answer: "Wir arbeiten nativ auf Shopify, WooCommerce, BigCommerce und Adobe Commerce. Jede Plattform hat ein dediziertes Playbook. Wir wenden keine generischen Strategien an - jedes Audit, jede Reparatur und Optimierung ist f\u00fcr Ihren spezifischen Stack geschrieben." },
        { question: "Soll ich zu Shopify f\u00fcr besseres SEO migrieren?", answer: "Nicht unbedingt. Plattformmigrationen sind hochriskant f\u00fcr Rankings und sollten nur erfolgen, wenn der Gesch\u00e4ftsfall \u00fcber SEO hinaus stark ist. Die meisten SEO-Probleme sind auf jeder gro\u00dfen Plattform ohne Migration behebbar. Wenn Sie migrieren, \u00fcbernehmen wir die SEO-Seite des \u00dcbergangs vom Audit bis zur Post-Migration-\u00dcberwachung. Lesen Sie unseren Leitfaden zur [E-Commerce-SEO-Migration](/blog/ecommerce-seo-migration)." },
        { question: "Wie vergleicht sich WooCommerce mit Shopify f\u00fcr SEO?", answer: "WooCommerce gibt Ihnen mehr Kontrolle, aber auch mehr M\u00f6glichkeiten, Ihr SEO zu besch\u00e4digen. Shopify ist eingeschr\u00e4nkter aber konsistenter. WooCommerce-Shops haben oft Plugin-Bl\u00e4hungen und technische Schulden, die stillschweigend Rankings hurt. Shopify-Shops treffen oft auf Canonical- und URL-Strukturprobleme, die plattformspezifisch sind. Beide sind vollst\u00e4ndig gewinnbar - sie ben\u00f6tigen nur unterschiedliche Strategien." },
        { question: "K\u00fcmmern Sie sich um Plattformmigrationen?", answer: "Ja. Plattformmigration ist eines der risikoreichsten SEO-Ereignisse, die ein Shop durchmachen kann. Wir planen und f\u00fchren Migrationen mit Redirect-Mapping, Crawl-\u00dcberwachung und einem 90-t\u00e4gigen Post-Migration-Tracking-Protokoll durch, um Ranking-Drops zu erkennen und zu beheben, bevor sie sich verschlimmern. Unser Leitfaden zu [Plattformmigration-SEO](/academy/platform-migration-seo) beschreibt den gesamten Prozess." },
        { question: "K\u00f6nnen Sie mit Headless- oder benutzerdefinierten Implementierungen arbeiten?", answer: "Ja. Headless Commerce (z.B. Shopify + Next.js, benutzerdefinierte Storefronts) f\u00fchrt spezifische SEO-Herausforderungen rund um Rendering, Indexierung und strukturierte Daten ein. Wir haben mit Headless-Setups gearbeitet und verstehen, wie man sie vollst\u00e4ndig crawlbar und rankbar macht." },
      ],
      miniCta: {
        heading: "Welche Plattform h\u00e4lt Ihre Rankings zur\u00fcck?",
        subtitle: "Buchen Sie ein Plattform-Audit und wir zeigen Ihnen genau, was kaputt ist - und wie man es behebt.",
      },
    },
  },
  fr: {
    hero: {
      badge: "SEO E-commerce par plateforme",
      heading: "SEO natif \u00e0 votre\u200Bplateforme e-commerce",
      subtitle: "Chaque plateforme e-commerce a des atouts SEO uniques et des pi\u00e8ges cach\u00e9s. Nous travaillons nativement dans Shopify, WooCommerce, BigCommerce et Adobe Commerce - en exploitant chaque avantage et en corrigeant chaque goulot d\u2019\u00e9tranglement sp\u00e9cifique.",
      ctaText: "R\u00e9server un audit de plateforme gratuit",
    },
    trustBar: "Experts Shopify, WooCommerce, BigCommerce & Adobe Commerce",
    sections: [
      {
        type: "links",
        badge: "Choisissez votre plateforme",
        heading: "Nous travaillons nativement dans votre plateforme ecommerce",
        subtitle: "Chaque plateforme a ses forces et ses pi\u00e8ges SEO. Choisissez la v\u00f4tre pour d\u00e9couvrir notre approche.",
        links: [
          { title: "Shopify SEO", href: "/shopify-seo", description: "L\u2019architecture de th\u00e8me, la gestion des balises canoniques et l\u2019\u00e9cosyst\u00e8me d\u2019applications de Shopify cr\u00e9ent des sch\u00e9mas SEO sp\u00e9cifiques. Nous optimisons les templates Liquid, corrigeons le contenu dupliqu\u00e9 des collections et exploitons les donn\u00e9es structur\u00e9es natives de Shopify." },
          { title: "WooCommerce SEO", href: "/woocommerce-seo", description: "La flexibilit\u00e9 WordPress est \u00e0 la fois une force et un risque. Les conflits de plugins, les bases de donn\u00e9es surcharg\u00e9es et la proliferation incontr\u00f4l\u00e9e des URLs d\u00e9truisent silencieusement les classements. Nous auditons et renfor\u00e7ons l\u2019ensemble du stack WP pour les performances SEO." },
          { title: "BigCommerce SEO", href: "/bigcommerce-seo", description: "BigCommerce poss\u00e8de les fondations SEO natives les plus solides de toutes les plateformes majeures - sitemaps int\u00e9gr\u00e9s, microdata et structures d\u2019URL propres. Nous poussons ces avantages encore plus loin avec le contr\u00f4le de la navigation \u00e0 facettes et l\u2019optimisation au niveau du catalogue." },
          { title: "Adobe Commerce SEO", href: "/adobe-commerce-seo", description: "Adobe Commerce (Magento) est de niveau enterprise, mais de complexit\u00e9 enterprise. Le gaspillage de budget de crawl, les probl\u00e8mes de rendu JS et les configurations multi-boutiques n\u00e9cessitent une expertise sp\u00e9cialis\u00e9e. Nous avons travaill\u00e9 dans des environnements Magento complexes - nous savons o\u00f9 se cachent les probl\u00e8mes." },
        ],
      },
      {
        type: "benefits",
        badge: "Ce que nous livrons",
        heading: "Un SEO sp\u00e9cifique \u00e0 la plateforme qui va plus loin que les audits g\u00e9n\u00e9riques",
        subtitle: "Une agence SEO g\u00e9n\u00e9rique applique la m\u00eame checklist \u00e0 toutes les plateformes. Nous construisons des strat\u00e9gies natives qui exploitent les capacit\u00e9s uniques de votre stack.",
        benefits: [
          { title: "Audit technique natif \u00e0 la plateforme", description: "Nous auditons chaque couche SEO sp\u00e9cifique \u00e0 votre plateforme\u00a0: architecture du th\u00e8me, stack app/plugin, structure des URL, logique canonique et allocation du budget de crawl." },
          { title: "Optimisation des th\u00e8mes et templates", description: "Le HTML g\u00e9n\u00e9r\u00e9 par votre th\u00e8me influence directement comment les moteurs de recherche comprennent vos produits. Nous optimisons au niveau du template - pas seulement le contenu de surface." },
          { title: "Examen du stack SEO apps & plugins", description: "Les applications et plugins tiers introduisent des balises meta dupliqu\u00e9es, des redirections conflictuelles et des probl\u00e8mes de rendu JS. Nous nettoyons votre stack d\u2019int\u00e9gration pour \u00e9liminer les d\u00e9g\u00e2ts SEO invisibles." },
          { title: "Support pour les migrations de plateforme", description: "Migrer de plateforme est le moment le plus risqu\u00e9 pour votre trafic organique. Nous cr\u00e9ons et ex\u00e9cutons des plans de migration qui prot\u00e8gent et am\u00e9liorent vos classements pendant chaque transition." },
          { title: "Balisage schema sp\u00e9cifique \u00e0 la plateforme", description: "Sch\u00e9ma produit, offre, fil d\u2019Ariane et avis impl\u00e9ment\u00e9s correctement pour le moteur de template de votre plateforme - pas du JSON-LD copi\u00e9-coll\u00e9 qui casse sur les pages dynamiques." },
          { title: "Optimisation du catalogue \u00e0 l\u2019\u00e9chelle", description: "Que vous ayez 500 ou 500\u00a0000 SKUs, nous construisons des workflows d\u2019optimisation automatis\u00e9s qui s\u2019adaptent \u00e0 la taille de votre catalogue - aucune mise \u00e0 jour manuelle par produit requise." },
        ],
      },
      {
        type: "process",
        badge: "Le processus",
        heading: "Comment nous abordons le SEO par plateforme",
        subtitle: "Nous ne copions pas les strat\u00e9gies d\u2019une plateforme \u00e0 l\u2019autre. Chaque engagement commence par un audit natif approfondi avant tout travail.",
        process: [
          { number: "01", title: "Audit de plateforme", description: "Un crawl et une revue technique sp\u00e9cifiques \u00e0 la plateforme. Nous identifions chaque probl\u00e8me SEO unique \u00e0 votre stack\u00a0: canoniques au niveau du th\u00e8me, conflits d\u2019apps, bloqueurs de rendu et gaspillage de crawl." },
          { number: "02", title: "Correction d\u2019architecture", description: "Corriger d\u2019abord les probl\u00e8mes fondamentaux\u00a0: structure des URL, maillage interne, contr\u00f4le de la navigation \u00e0 facettes et priorisation du crawl. La plateforme est maintenant structurellement solide pour le classement." },
          { number: "03", title: "Optimisation du contenu et des cat\u00e9gories", description: "Optimisation des pages de cat\u00e9gories consciente de la plateforme, SEO des templates produits et strat\u00e9gie de contenu ax\u00e9e sur les opportunit\u00e9s de mots-cl\u00e9s uniques de votre catalogue." },
          { number: "04", title: "Mise \u00e0 l\u2019\u00e9chelle et surveillance", description: "Surveillance continue des mises \u00e0 jour de la plateforme, changements d\u2019applications et \u00e9volutions de classement. Nous prot\u00e9geons vos gains organiques \u00e0 mesure que votre catalogue et stack \u00e9voluent." },
        ],
      },
      {
        type: "links",
        badge: "Explorer Plus",
        heading: "Parcourir Tous les Services et Approches Sectorielles",
        subtitle: "L'expertise plateforme est une dimension du SEO e-commerce. Explorez notre menu complet de services et nos stratégies sectorielles.",
        links: [
          {
            title: "Tous les Services SEO E-Commerce",
            description: "Découvrez chaque service que nous proposons - des audits techniques à la rédaction de contenu en passant par la construction d'autorité.",
            href: "/ecommerce-seo-services",
          },
          {
            title: "SEO par Secteur",
            description: "Mode, Beauté, Consommables, Jouets - stratégies sectorielles pour votre vertical spécifique.",
            href: "/ecommerce-seo-industries",
          },
          {
            title: "SEO E-Commerce",
            description: "La stratégie SEO commerciale complète pour les boutiques en ligne - indépendante de la plateforme et axée sur le chiffre d'affaires.",
            href: "/ecommerce-seo",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Quelle plateforme e-commerce est la meilleure pour le SEO\u00a0?", answer: "BigCommerce poss\u00e8de les fonctionnalit\u00e9s SEO natives les plus solides. Shopify est excellent avec la bonne configuration. WooCommerce est tr\u00e8s flexible mais demande plus de rigueur. Adobe Commerce est id\u00e9al pour les catalogues enterprise complexes. La meilleure plateforme SEO est celle que vous utilisez d\u00e9j\u00e0, correctement optimis\u00e9e." },
        { question: "Vous sp\u00e9cialisez-vous sur des plateformes sp\u00e9cifiques\u00a0?", answer: "Nous travaillons nativement sur Shopify, WooCommerce, BigCommerce et Adobe Commerce. Chaque plateforme dispose d\u2019un playbook d\u00e9di\u00e9. Nous n\u2019appliquons pas de strat\u00e9gies g\u00e9n\u00e9riques - chaque audit, correction et optimisation est \u00e9crit pour votre stack sp\u00e9cifique." },
        { question: "Devrais-je migrer vers Shopify pour un meilleur SEO\u00a0?", answer: "Pas n\u00e9cessairement. Les migrations de plateforme sont \u00e0 haut risque pour les classements et ne doivent \u00eatre effectu\u00e9es que si le cas m\u00e9tier est solide au-del\u00e0 du SEO. La plupart des probl\u00e8mes SEO sont r\u00e9solvables sur n\u2019importe quelle plateforme majeure sans migration. Si vous migrez, nous g\u00e9rons l\u2019aspect SEO de la transition de l\u2019audit au suivi post-migration. Lisez notre guide sur la [migration SEO e-commerce](/blog/ecommerce-seo-migration)." },
        { question: "Comment WooCommerce se compare-t-il \u00e0 Shopify pour le SEO\u00a0?", answer: "WooCommerce vous donne plus de contr\u00f4le mais aussi plus de fa\u00e7ons d\u2019abimer votre SEO. Shopify est plus contraint mais plus coh\u00e9rent. Les boutiques WooCommerce ont souvent une surcharge de plugins et une dette technique qui nuit silencieusement aux classements. Les boutiques Shopify rencontrent souvent des probl\u00e8mes de canoniques et de structure d\u2019URL sp\u00e9cifiques \u00e0 la plateforme. Les deux sont pleinement exploitables - ils requi\u00e8rent simplement des strat\u00e9gies diff\u00e9rentes." },
        { question: "G\u00e9rez-vous les migrations de plateformes\u00a0?", answer: "Oui. La migration de plateforme est l\u2019un des \u00e9v\u00e9nements SEO les plus risqu\u00e9s qu\u2019une boutique peut traverser. Nous planifions et ex\u00e9cutons les migrations avec cartographie des redirections, surveillance du crawl et un protocole de suivi post-migration de 90 jours pour d\u00e9tecter et corriger les baisses de classement avant qu\u2019elles s\u2019aggravent. Notre guide [SEO de migration de plateforme](/academy/platform-migration-seo) couvre l\u2019ensemble du processus." },
        { question: "Pouvez-vous travailler avec des impl\u00e9mentations headless ou personnalis\u00e9es\u00a0?", answer: "Oui. Le commerce headless (ex. Shopify + Next.js, storefronts personnalis\u00e9s) introduit des d\u00e9fis SEO sp\u00e9cifiques autour du rendu, de l\u2019indexation et des donn\u00e9es structur\u00e9es. Nous avons travaill\u00e9 avec des configurations headless et savons comment les rendre enti\u00e8rement crawlables et classables." },
      ],
      miniCta: {
        heading: "Quelle plateforme freine vos classements\u00a0?",
        subtitle: "R\u00e9servez un audit de plateforme et nous vous montrerons exactement ce qui est cass\u00e9 - et comment y rem\u00e9dier.",
      },
    },
  },
  es: {
    hero: {
      badge: "SEO E-commerce por plataforma",
      heading: "SEO nativo a tu\u200Bplataforma de e-commerce",
      subtitle: "Cada plataforma de e-commerce tiene fortalezas SEO \u00fanicas y trampas ocultas. Trabajamos de forma nativa en Shopify, WooCommerce, BigCommerce y Adobe Commerce - aprovechando cada ventaja de la plataforma y corrigiendo cada cuello de botella espec\u00edfico.",
      ctaText: "Reservar una auditor\u00eda de plataforma gratuita",
    },
    trustBar: "Expertos en Shopify, WooCommerce, BigCommerce y Adobe Commerce",
    sections: [
      {
        type: "links",
        badge: "Elige tu plataforma",
        heading: "Trabajamos nativamente dentro de tu plataforma ecommerce",
        subtitle: "Cada plataforma tiene diferentes fortalezas y trampas SEO. Elige la tuya para ver c\u00f3mo la abordamos.",
        links: [
          { title: "Shopify SEO", href: "/shopify-seo", description: "La arquitectura de temas, el manejo de canonicals y el ecosistema de apps de Shopify crean patrones SEO espec\u00edficos. Optimizamos templates Liquid, corregimos contenido duplicado de colecciones y aprovechamos los datos estructurados nativos de Shopify." },
          { title: "WooCommerce SEO", href: "/woocommerce-seo", description: "La flexibilidad de WordPress es tanto una fortaleza como un riesgo. Los conflictos de plugins, las bases de datos infladas y la proliferaci\u00f3n incontrolada de URLs destruyen silenciosamente los rankings. Auditamos y ajustamos todo el stack WP para el rendimiento SEO." },
          { title: "BigCommerce SEO", href: "/bigcommerce-seo", description: "BigCommerce tiene la base SEO nativa m\u00e1s s\u00f3lida de todas las plataformas principales - sitemaps integrados, microdata y estructuras de URL limpias. Llevamos esas ventajas m\u00e1s lejos con control de navegaci\u00f3n facetada y optimizaci\u00f3n a nivel de cat\u00e1logo." },
          { title: "Adobe Commerce SEO", href: "/adobe-commerce-seo", description: "Adobe Commerce (Magento) es de nivel enterprise pero de complejidad enterprise. El desperdicio de presupuesto de crawl, los problemas de renderizado JS y las configuraciones multi-tienda requieren conocimiento especializado. Hemos trabajado en entornos Magento complejos - sabemos d\u00f3nde est\u00e1n los problemas." },
        ],
      },
      {
        type: "benefits",
        badge: "Lo que entregamos",
        heading: "SEO espec\u00edfico de plataforma que va m\u00e1s all\u00e1 de las auditor\u00edas gen\u00e9ricas",
        subtitle: "Una agencia SEO gen\u00e9rica aplica la misma lista de verificaci\u00f3n a cada plataforma. Construimos estrategias nativas que explotan las capacidades \u00fanicas de tu stack.",
        benefits: [
          { title: "Auditor\u00eda t\u00e9cnica nativa de plataforma", description: "Auditamos cada capa SEO espec\u00edfica de tu plataforma: arquitectura de temas, stack de apps/plugins, estructura de URL, l\u00f3gica canonical y asignaci\u00f3n de presupuesto de crawl." },
          { title: "Optimizaci\u00f3n de temas y templates", description: "El HTML que genera tu tema afecta directamente c\u00f3mo los motores de b\u00fasqueda entienden tus productos. Optimizamos a nivel de template - no solo contenido superficial." },
          { title: "Revisi\u00f3n del stack SEO de apps y plugins", description: "Las apps y plugins de terceros introducen meta tags duplicadas, redirecciones conflictivas y problemas de renderizado JS. Limpiamos tu stack de integraciones para eliminar el da\u00f1o SEO invisible." },
          { title: "Soporte para migraciones de plataforma", description: "Migrar de plataforma es el momento de mayor riesgo para tu tr\u00e1fico org\u00e1nico. Creamos y ejecutamos planes de migraci\u00f3n que protegen y mejoran tus rankings durante cada transici\u00f3n." },
          { title: "Marcado schema espec\u00edfico de plataforma", description: "Schema de producto, oferta, breadcrumb y rese\u00f1as implementado correctamente para el motor de templates de tu plataforma - no JSON-LD copiado que se rompe en p\u00e1ginas din\u00e1micas." },
          { title: "Optimizaci\u00f3n escalable del cat\u00e1logo", description: "Ya sean 500 o 500.000 SKUs, construimos workflows de optimizaci\u00f3n automatizados que escalan con el tama\u00f1o de tu cat\u00e1logo - sin actualizaciones manuales por producto." },
        ],
      },
      {
        type: "process",
        badge: "El proceso",
        heading: "C\u00f3mo abordamos el SEO por plataforma",
        subtitle: "No copiamos estrategias entre plataformas. Cada proyecto comienza con una auditor\u00eda profunda nativa de plataforma antes de empezar cualquier trabajo.",
        process: [
          { number: "01", title: "Auditor\u00eda de plataforma", description: "Un crawl y revisi\u00f3n t\u00e9cnica espec\u00ednfica de la plataforma. Identificamos cada problema SEO \u00fanico de tu stack: canonicals a nivel de tema, conflictos de apps, bloqueadores de renderizado y desperdicio de crawl." },
          { number: "02", title: "Correcci\u00f3n de arquitectura", description: "Primero corregir los problemas fundamentales: estructura de URL, enlazado interno, control de navegaci\u00f3n facetada y priorizaci\u00f3n de crawl. La plataforma ahora es estructuralmente s\u00f3lida para posicionar." },
          { number: "03", title: "Optimizaci\u00f3n de contenido y categor\u00edas", description: "Optimizaci\u00f3n de p\u00e1ginas de categor\u00edas consciente de la plataforma, SEO de templates de productos y estrategia de contenido basada en las oportunidades de palabras clave \u00fanicas de tu cat\u00e1logo." },
          { number: "04", title: "Escalar y monitorear", description: "Monitoreo continuo de actualizaciones de la plataforma, cambios de apps y cambios de ranking. Protegemos tus ganancias org\u00e1nicas a medida que tu cat\u00e1logo y stack evolucionan." },
        ],
      },
      {
        type: "links",
        badge: "Explorar Más",
        heading: "Todos los Servicios y Enfoques Sectoriales",
        subtitle: "La experiencia en plataformas es una dimensión del SEO ecommerce. Explore nuestro menú completo de servicios y estrategias sectoriales.",
        links: [
          {
            title: "Todos los Servicios SEO Ecommerce",
            description: "Vea cada servicio que ofrecemos - desde auditorías técnicas hasta redacción de contenido y construcción de autoridad.",
            href: "/ecommerce-seo-services",
          },
          {
            title: "SEO por Sector",
            description: "Moda, Belleza, Consumibles, Juguetes - estrategias sectoriales para su vertical específico.",
            href: "/ecommerce-seo-industries",
          },
          {
            title: "SEO Ecommerce",
            description: "La estrategia SEO comercial completa para tiendas online - independiente de la plataforma y orientada a ingresos.",
            href: "/ecommerce-seo",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "\u00bfQu\u00e9 plataforma e-commerce es mejor para SEO?", answer: "BigCommerce tiene las funciones SEO nativas m\u00e1s s\u00f3lidas. Shopify es excelente con la configuraci\u00f3n correcta. WooCommerce es muy flexible pero requiere m\u00e1s disciplina. Adobe Commerce es mejor para cat\u00e1logos enterprise con requisitos complejos. La mejor plataforma SEO es la que ya usas, optimizada correctamente." },
        { question: "\u00bfSe especializan en plataformas espec\u00edficas?", answer: "Trabajamos de forma nativa en Shopify, WooCommerce, BigCommerce y Adobe Commerce. Cada plataforma tiene un playbook dedicado. No aplicamos estrategias gen\u00e9ricas - cada auditor\u00eda, correcci\u00f3n y optimizaci\u00f3n est\u00e1 escrita para tu stack espec\u00edfico." },
        { question: "\u00bfDeber\u00eda migrar a Shopify para mejor SEO?", answer: "No necesariamente. Las migraciones de plataforma son de alto riesgo para los rankings y solo deben realizarse si el caso de negocio es s\u00f3lido m\u00e1s all\u00e1 del SEO. La mayor\u00eda de los problemas SEO son solucionables en cualquier plataforma principal sin migraci\u00f3n. Si migras, manejamos el lado SEO de la transici\u00f3n desde la auditor\u00eda hasta el monitoreo post-migraci\u00f3n. Lee nuestra gu\u00eda sobre [migraci\u00f3n SEO e-commerce](/blog/ecommerce-seo-migration)." },
        { question: "\u00bfC\u00f3mo se compara WooCommerce con Shopify para SEO?", answer: "WooCommerce te da m\u00e1s control pero tambi\u00e9n m\u00e1s formas de arruinar tu SEO. Shopify es m\u00e1s restringido pero m\u00e1s consistente. Las tiendas WooCommerce a menudo tienen sobrecarga de plugins y deuda t\u00e9cnica que silenciosamente perjudica los rankings. Las tiendas Shopify a menudo encuentran problemas de canonicals y estructura de URL \u00fanicos de la plataforma. Ambas son completamente ganables - simplemente requieren estrategias diferentes." },
        { question: "\u00bfGestionan migraciones de plataforma?", answer: "S\u00ed. La migraci\u00f3n de plataforma es uno de los eventos SEO m\u00e1s riesgosos por los que puede pasar una tienda. Planificamos y ejecutamos migraciones con mapeo de redirecciones, monitoreo de crawl y un protocolo de seguimiento post-migraci\u00f3n de 90 d\u00edas para detectar y corregir ca\u00eddas de ranking antes de que se agraven. Nuestra gu\u00eda de [SEO de migraci\u00f3n de plataforma](/academy/platform-migration-seo) cubre todo el proceso." },
        { question: "\u00bfPueden trabajar con implementaciones headless o personalizadas?", answer: "S\u00ed. El comercio headless (ej. Shopify + Next.js, storefronts personalizados) introduce desaf\u00edos SEO espec\u00edficos alrededor del renderizado, indexaci\u00f3n y datos estructurados. Hemos trabajado con configuraciones headless y entendemos c\u00f3mo hacerlas completamente rastreables y posicionables." },
      ],
      miniCta: {
        heading: "\u00bfQu\u00e9 plataforma est\u00e1 frenando tus rankings?",
        subtitle: "Reserva una auditor\u00eda de plataforma y te mostraremos exactamente qu\u00e9 est\u00e1 roto - y c\u00f3mo arreglarlo.",
      },
    },
  },
  it: {
    hero: {
      badge: "SEO E-commerce per piattaforma",
      heading: "SEO nativo alla tua\u200Bpiattaforma e-commerce",
      subtitle: "Ogni piattaforma e-commerce ha punti di forza SEO unici e insidie nascoste. Lavoriamo nativamente in Shopify, WooCommerce, BigCommerce e Adobe Commerce - sfruttando ogni vantaggio della piattaforma e correggendo ogni collo di bottiglia specifico.",
      ctaText: "Prenota un audit gratuito della piattaforma",
    },
    trustBar: "Esperti di Shopify, WooCommerce, BigCommerce e Adobe Commerce",
    sections: [
      {
        type: "links",
        badge: "Scegli la tua piattaforma",
        heading: "Lavoriamo nativamente dentro la tua piattaforma ecommerce",
        subtitle: "Ogni piattaforma ha diversi punti di forza e insidie SEO. Scegli la tua per scoprire come la affrontiamo.",
        links: [
          { title: "Shopify SEO", href: "/shopify-seo", description: "L\u2019architettura del tema, la gestione dei canonical e l\u2019ecosistema app di Shopify creano schemi SEO specifici. Ottimizziamo i template Liquid, correggiamo i contenuti duplicati dalle collection e sfruttiamo i dati strutturati nativi di Shopify." },
          { title: "WooCommerce SEO", href: "/woocommerce-seo", description: "La flessibilit\u00e0 di WordPress \u00e8 sia un punto di forza che un rischio. I conflitti di plugin, i database gonfiati e la proliferazione incontrollata degli URL distruggono silenziosamente i posizionamenti. Facciamo l\u2019audit e ottimizziamo l\u2019intero stack WP per le prestazioni SEO." },
          { title: "BigCommerce SEO", href: "/bigcommerce-seo", description: "BigCommerce ha le fondamenta SEO native pi\u00f9 solide tra tutte le piattaforme principali - sitemap integrate, microdata e strutture URL pulite. Spingiamo questi vantaggi ancora oltre con il controllo della navigazione a faccette e l\u2019ottimizzazione a livello di catalogo." },
          { title: "Adobe Commerce SEO", href: "/adobe-commerce-seo", description: "Adobe Commerce (Magento) \u00e8 di livello enterprise ma di complessit\u00e0 enterprise. Lo spreco di budget di crawl, i problemi di rendering JS e le configurazioni multi-store richiedono conoscenze specializzate. Abbiamo lavorato in ambienti Magento complessi - sappiamo dove si nascondono i problemi." },
        ],
      },
      {
        type: "benefits",
        badge: "Cosa consegniamo",
        heading: "SEO specifico per piattaforma che va pi\u00f9 in profondit\u00e0 degli audit generici",
        subtitle: "Un\u2019agenzia SEO generica applica la stessa checklist a ogni piattaforma. Costruiamo strategie native che sfruttano le capacit\u00e0 uniche del tuo stack.",
        benefits: [
          { title: "Audit tecnico nativo della piattaforma", description: "Facciamo l\u2019audit di ogni livello SEO specifico della tua piattaforma: architettura del tema, stack app/plugin, struttura URL, logica canonical e allocazione del budget di crawl." },
          { title: "Ottimizzazione di temi e template", description: "L\u2019HTML generato dal tuo tema influenza direttamente come i motori di ricerca comprendono i tuoi prodotti. Ottimizziamo a livello di template - non solo i contenuti superficiali." },
          { title: "Revisione dello stack SEO di app e plugin", description: "Le app e i plugin di terze parti introducono meta tag duplicati, redirect in conflitto e problemi di rendering JS. Puliamo il tuo stack di integrazione per eliminare i danni SEO invisibili." },
          { title: "Supporto per le migrazioni di piattaforma", description: "La migrazione di piattaforma \u00e8 il momento di maggior rischio per il tuo traffico organico. Creiamo ed eseguiamo piani di migrazione che proteggono e migliorano i tuoi posizionamenti durante ogni transizione." },
          { title: "Markup schema specifico per piattaforma", description: "Schema di prodotto, offerta, breadcrumb e recensioni implementato correttamente per il motore di template della tua piattaforma - non JSON-LD copiato che si rompe sulle pagine dinamiche." },
          { title: "Ottimizzazione scalabile del catalogo", description: "Che tu abbia 500 o 500.000 SKU, costruiamo workflow di ottimizzazione automatizzati che scalano con la dimensione del tuo catalogo - nessun aggiornamento manuale per prodotto necessario." },
        ],
      },
      {
        type: "process",
        badge: "Il processo",
        heading: "Come affrontiamo il SEO per piattaforma",
        subtitle: "Non copiamo strategie tra piattaforme. Ogni progetto inizia con un approfondito audit nativo della piattaforma prima di iniziare qualsiasi lavoro.",
        process: [
          { number: "01", title: "Audit della piattaforma", description: "Un crawl e una revisione tecnica specifici per la piattaforma. Identifichiamo ogni problema SEO unico del tuo stack: canonical a livello di tema, conflitti di app, blocchi di rendering e spreco di crawl." },
          { number: "02", title: "Correzione dell\u2019architettura", description: "Prima correggiamo i problemi fondamentali: struttura URL, linking interno, controllo della navigazione a faccette e prioritizzazione del crawl. La piattaforma \u00e8 ora strutturalmente solida per il posizionamento." },
          { number: "03", title: "Ottimizzazione di contenuti e categorie", description: "Ottimizzazione delle pagine di categoria consapevole della piattaforma, SEO dei template prodotto e strategia di contenuto costruita attorno alle opportunit\u00e0 di keyword uniche del tuo catalogo." },
          { number: "04", title: "Scalare e monitorare", description: "Monitoraggio continuo degli aggiornamenti della piattaforma, cambiamenti delle app e variazioni di posizionamento. Proteggiamo i tuoi guadagni organici mentre il tuo catalogo e stack si evolvono." },
        ],
      },
      {
        type: "links",
        badge: "Esplora Altro",
        heading: "Tutti i Servizi e gli Approcci Settoriali",
        subtitle: "L'esperienza della piattaforma è una dimensione del SEO ecommerce. Esplora il nostro menu completo di servizi e strategie settoriali.",
        links: [
          {
            title: "Tutti i Servizi SEO Ecommerce",
            description: "Scopri ogni servizio che offriamo - dagli audit tecnici alla scrittura di contenuti alla costruzione di autorità.",
            href: "/ecommerce-seo-services",
          },
          {
            title: "SEO per Settore",
            description: "Moda, Bellezza, Consumabili, Giocattoli - strategie settoriali per il tuo verticale specifico.",
            href: "/ecommerce-seo-industries",
          },
          {
            title: "SEO Ecommerce",
            description: "La strategia SEO commerciale completa per i negozi online - indipendente dalla piattaforma e orientata ai ricavi.",
            href: "/ecommerce-seo",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Quale piattaforma e-commerce \u00e8 migliore per il SEO?", answer: "BigCommerce ha le funzionalit\u00e0 SEO native pi\u00f9 solide. Shopify \u00e8 eccellente con la configurazione giusta. WooCommerce \u00e8 molto flessibile ma richiede pi\u00f9 disciplina. Adobe Commerce \u00e8 il migliore per i cataloghi enterprise con requisiti complessi. La migliore piattaforma SEO \u00e8 quella che stai gi\u00e0 usando, ottimizzata correttamente." },
        { question: "Vi specializzate in piattaforme specifiche?", answer: "Lavoriamo nativamente su Shopify, WooCommerce, BigCommerce e Adobe Commerce. Ogni piattaforma ha un playbook dedicato. Non applichiamo strategie generiche - ogni audit, correzione e ottimizzazione \u00e8 scritto per il tuo stack specifico." },
        { question: "Dovrei migrare a Shopify per un SEO migliore?", answer: "Non necessariamente. Le migrazioni di piattaforma sono ad alto rischio per i posizionamenti e dovrebbero avvenire solo se il caso aziendale \u00e8 solido al di l\u00e0 del SEO. La maggior parte dei problemi SEO \u00e8 risolvibile su qualsiasi piattaforma principale senza migrazione. Se migri, gestiamo il lato SEO della transizione dall\u2019audit al monitoraggio post-migrazione. Leggi la nostra guida sulla [migrazione SEO e-commerce](/blog/ecommerce-seo-migration)." },
        { question: "Come si confronta WooCommerce con Shopify per il SEO?", answer: "WooCommerce ti d\u00e0 pi\u00f9 controllo ma anche pi\u00f9 modi per danneggiare il tuo SEO. Shopify \u00e8 pi\u00f9 limitato ma pi\u00f9 coerente. I negozi WooCommerce spesso hanno plugin in eccesso e debito tecnico che silenziosamente danneggia i posizionamenti. I negozi Shopify spesso incontrano problemi di canonical e struttura URL unici della piattaforma. Entrambi sono pienamente vincibili - richiedono semplicemente strategie diverse." },
        { question: "Gestite le migrazioni di piattaforma?", answer: "S\u00ec. La migrazione di piattaforma \u00e8 uno degli eventi SEO pi\u00f9 rischiosi che un negozio pu\u00f2 attraversare. Pianifichiamo ed eseguiamo le migrazioni con mappatura dei redirect, monitoraggio del crawl e un protocollo di tracciamento post-migrazione di 90 giorni per rilevare e correggere i cali di posizionamento prima che si aggravino. La nostra guida al [SEO per migrazione di piattaforma](/academy/platform-migration-seo) copre l\u2019intero processo." },
        { question: "Potete lavorare con implementazioni headless o personalizzate?", answer: "S\u00ec. Il commercio headless (es. Shopify + Next.js, storefront personalizzati) introduce sfide SEO specifiche legate al rendering, all\u2019indicizzazione e ai dati strutturati. Abbiamo lavorato con configurazioni headless e sappiamo come renderle completamente scansionabili e posizionabili." },
      ],
      miniCta: {
        heading: "Quale piattaforma sta frenando i tuoi posizionamenti?",
        subtitle: "Prenota un audit della piattaforma e ti mostreremo esattamente cosa \u00e8 rotto - e come risolverlo.",
      },
    },
  },
  nl: {
    hero: {
      badge: "E-commerce SEO per platform",
      heading: "Platform-native SEO die\u200Bpast bij jouw stack",
      subtitle: "Elk e-commerce platform heeft unieke SEO-sterktes en verborgen valkuilen. Wij werken native in Shopify, WooCommerce, BigCommerce en Adobe Commerce - we benutten elk platformvoordeel en lossen elk platformspecifiek knelpunt op.",
      ctaText: "Boek een gratis platformaudit",
    },
    trustBar: "Shopify, WooCommerce, BigCommerce & Adobe Commerce experts",
    sections: [
      {
        type: "links",
        badge: "Kies jouw platform",
        heading: "We werken native binnen jouw ecommerce platform",
        subtitle: "Elk platform heeft andere SEO-sterktes en valkuilen. Kies het jouwe om te zien hoe we het aanpakken.",
        links: [
          { title: "Shopify SEO", href: "/shopify-seo", description: "De thema-architectuur, canonical-afhandeling en het app-ecosysteem van Shopify cre\u00ebren specifieke SEO-patronen. We optimaliseren Liquid-templates, lossen duplicate content van collections op en benutten Shopify\u2019s native gestructureerde data." },
          { title: "WooCommerce SEO", href: "/woocommerce-seo", description: "WordPress-flexibiliteit is zowel een kracht als een risico. Plugin-conflicten, opgeblazen databases en ongecontroleerde URL-wildgroei vernietigen stilletjes rankings. We auditeren en stroomlijnen de volledige WP-stack voor SEO-prestaties." },
          { title: "BigCommerce SEO", href: "/bigcommerce-seo", description: "BigCommerce heeft de sterkste native SEO-basis van alle grote platforms - ingebouwde sitemaps, microdata en schone URL-structuren. We drijven die voordelen verder met gefacetteerde navigatiecontrole en optimalisatie op catalogusniveau." },
          { title: "Adobe Commerce SEO", href: "/adobe-commerce-seo", description: "Adobe Commerce (Magento) is enterprise-grade maar enterprise-complex. Crawlbudgetverspilling, JS-renderingproblemen en multi-store configuraties vereisen specialistische kennis. We hebben in complexe Magento-omgevingen gewerkt - we weten waar de problemen zitten." },
        ],
      },
      {
        type: "benefits",
        badge: "Wat we leveren",
        heading: "Platformspecifieke SEO die dieper gaat dan generieke audits",
        subtitle: "Een generiek SEO-bureau past dezelfde checklist toe op elk platform. Wij bouwen platform-native strategieen die de unieke mogelijkheden van jouw stack benutten.",
        benefits: [
          { title: "Platform-native technische audit", description: "We auditeren elke SEO-laag specifiek voor jouw platform: thema-architectuur, app/plugin-stack, URL-structuur, canonical-logica en crawlbudgetverdeling." },
          { title: "Thema & template optimalisatie", description: "De HTML die jouw thema genereert, be\u00efnvloedt direct hoe zoekmachines jouw producten begrijpen. We optimaliseren op templateniveau - niet alleen oppervlakte-inhoud." },
          { title: "App & plugin SEO-stack review", description: "Apps en plugins van derden introduceren dubbele meta-tags, conflicterende redirects en JS-renderingproblemen. We ruimen je integratie-stack op om onzichtbare SEO-schade te elimineren." },
          { title: "Ondersteuning bij platformmigraties", description: "Platformmigratie is het meest risicovolle moment voor je organisch verkeer. We maken en voeren migratieplannen uit die je rankings beschermen en verbeteren tijdens elke overgang." },
          { title: "Platformspecifieke schema-markup", description: "Product-, aanbod-, breadcrumb- en reviewschema correct ge\u00efmplementeerd voor de template-engine van jouw platform - geen gekopieerde JSON-LD die kapot gaat op dynamische pagina's." },
          { title: "Schaalbare catalogusoptimalisatie", description: "Of je nu 500 of 500.000 SKU's hebt, we bouwen geautomatiseerde optimalisatieworkflows die meeschalen met de omvang van je catalogus - geen handmatige updates per product vereist." },
        ],
      },
      {
        type: "process",
        badge: "Het proces",
        heading: "Hoe we platform-SEO aanpakken",
        subtitle: "We kopi\u00ebren geen strategie\u00ebn tussen platforms. Elk project begint met een diepgaande platform-native audit voordat er werk begint.",
        process: [
          { number: "01", title: "Platformaudit", description: "Een platformspecifieke crawl en technische review. We identificeren elk SEO-probleem uniek aan jouw stack: canonical op themaniveau, app-conflicten, render-blokkers en crawlverspilling." },
          { number: "02", title: "Architectuurherstel", description: "Eerst de fundamentele problemen oplossen: URL-structuur, interne linking, gefacetteerde navigatiecontrole en crawlprioritering. Het platform is nu structureel solide om te ranken." },
          { number: "03", title: "Content- en categorieoptimalisatie", description: "Platformbewuste categoriepagina-optimalisatie, product-template SEO en contentstrategie gebouwd rond de unieke keyword-kansen van jouw catalogus." },
          { number: "04", title: "Schalen & monitoren", description: "Doorlopende monitoring op platformupdates, app-wijzigingen en rankingverschuivingen. We beschermen je organische winsten terwijl je catalogus en stack zich ontwikkelen." },
        ],
      },
      {
        type: "links",
        badge: "Meer Verkennen",
        heading: "Alle Services en Sectorbenadering Verkennen",
        subtitle: "Platformexpertise is één dimensie van ecommerce SEO. Verken ons volledige servicemenu en branchespecifieke strategieën.",
        links: [
          {
            title: "Alle Ecommerce SEO Services",
            description: "Bekijk elke service die we aanbieden - van technische audits tot contentschrijven tot gezagsopbouw.",
            href: "/ecommerce-seo-services",
          },
          {
            title: "SEO per Sector",
            description: "Mode, Beauty, Consumabelen, Speelgoed - sectorstrategieën voor uw specifieke vertical.",
            href: "/ecommerce-seo-industries",
          },
          {
            title: "Ecommerce SEO",
            description: "De volledige commerciële SEO-strategie voor webshops - platformonafhankelijk en omzetgericht.",
            href: "/ecommerce-seo",
          },
        ],
      },
    ],
    faqs: {
      items: [
        { question: "Welk e-commerce platform is het beste voor SEO?", answer: "BigCommerce heeft de sterkste out-of-the-box SEO-functies. Shopify is uitstekend met de juiste setup. WooCommerce is zeer flexibel maar vereist meer discipline. Adobe Commerce is het beste voor enterprise-catalogi met complexe vereisten. Het beste SEO-platform is het platform dat je al gebruikt, correct geoptimaliseerd." },
        { question: "Specialiseren jullie je in specifieke platforms?", answer: "We werken native op Shopify, WooCommerce, BigCommerce en Adobe Commerce. Elk platform heeft een dedicated playbook. We passen geen generieke strategie\u00ebn toe - elke audit, fix en optimalisatie is geschreven voor jouw specifieke stack." },
        { question: "Moet ik migreren naar Shopify voor betere SEO?", answer: "Niet noodzakelijk. Platformmigraties zijn risicovol voor rankings en mogen alleen plaatsvinden als de businesscase sterk is buiten SEO om. De meeste SEO-problemen zijn oplosbaar op elk groot platform zonder migratie. Als je migreert, regelen wij de SEO-kant van de transitie van audit tot post-migratiemonitoring. Lees onze gids over [e-commerce SEO-migratie](/blog/ecommerce-seo-migration)." },
        { question: "Hoe vergelijkt WooCommerce zich met Shopify voor SEO?", answer: "WooCommerce geeft je meer controle maar ook meer manieren om je SEO te beschadigen. Shopify is meer beperkt maar consistenter. WooCommerce-winkels hebben vaak plugin-bloat en technische schulden die stilletjes rankings schaden. Shopify-winkels lopen vaak aan tegen canonical- en URL-structuurproblemen die uniek zijn aan het platform. Beide zijn volledig te winnen - ze vereisen alleen andere strategie\u00ebn." },
        { question: "Handelen jullie platformmigraties af?", answer: "Ja. Platformmigratie is een van de risicovolste SEO-gebeurtenissen die een winkel kan meemaken. We plannen en voeren migraties uit met redirect-mapping, crawlmonitoring en een 90-daags post-migratie-trackingprotocol om rankingdalingen op te sporen en te corrigeren voordat ze verergeren. Onze gids over [platform-migratie SEO](/academy/platform-migration-seo) beschrijft het volledige proces." },
        { question: "Kunnen jullie werken met headless of aangepaste implementaties?", answer: "Ja. Headless commerce (bijv. Shopify + Next.js, aangepaste storefronts) introduceert specifieke SEO-uitdagingen rondom rendering, indexatie en gestructureerde data. We hebben met headless setups gewerkt en begrijpen hoe ze volledig crawlbaar en rankbaar te maken." },
      ],
      miniCta: {
        heading: "Welk platform houdt je rankings tegen?",
        subtitle: "Boek een platformaudit en we laten je precies zien wat er kapot is - en hoe het te repareren.",
      },
    },
  },
};
