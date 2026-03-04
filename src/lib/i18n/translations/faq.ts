import type { Locale } from "../config";

export const faqPageT: Record<Locale, {
  badge: string;
  heading: string;
  subtitle: string;
}> = {
  en: {
    badge: "Frequently asked questions",
    heading: "Questions? We got you.",
    subtitle: "We are in the business of making other business more money. If you have questions about that, always feel free to reach out to us.",
  },
  de: {
    badge: "Haeufig gestellte Fragen",
    heading: "Fragen? Wir helfen gerne.",
    subtitle: "Unser Geschaeft ist es, anderen Unternehmen zu mehr Umsatz zu verhelfen. Wenn Sie dazu Fragen haben, kontaktieren Sie uns jederzeit.",
  },
  fr: {
    badge: "Questions frequentes",
    heading: "Des questions ? Nous sommes la.",
    subtitle: "Notre metier, c'est d'aider les entreprises a generer plus de revenus. Si vous avez des questions, n'hesitez pas a nous contacter.",
  },
  es: {
    badge: "Preguntas frecuentes",
    heading: "Preguntas? Estamos aqui.",
    subtitle: "Nuestro negocio es ayudar a otras empresas a generar mas ingresos. Si tienes preguntas al respecto, no dudes en contactarnos.",
  },
  it: {
    badge: "Domande frequenti",
    heading: "Domande? Siamo qui per te.",
    subtitle: "Il nostro lavoro e aiutare le aziende a generare piu fatturato. Se hai domande in merito, contattaci in qualsiasi momento.",
  },
  nl: {
    badge: "Veelgestelde vragen",
    heading: "Vragen? Wij helpen je.",
    subtitle: "Wij helpen bedrijven meer omzet te genereren. Heb je daar vragen over? Neem gerust contact met ons op.",
  },
};

export const faqItemsT: Record<Locale, { question: string; answer: string }[]> = {
  en: [
    {
      question: "What kind of clients do you work with?",
      answer: "We work mainly with 6-9 figure D2C ecommerce brands. If you're deciding whether SEO makes sense for your business, feel free to reach out and we'll give you an honest assessment.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "You'll see initial improvements in rankings and technical fixes within 30-60 days. Meaningful traffic and revenue growth typically occurs within 3-6 months. We focus on early wins while building long-term organic growth.",
    },
    {
      question: "What packages do you offer and what's included?",
      answer: "We offer five main solutions: Complete Back-End Optimization (\u20ac5,000+/month), PR + Link Building (\u20ac950/month + link costs), Branded + Non-Branded On-Page (\u20ac2,000+/month), Acquisition Campaign (\u20ac2,500+/month), and AI SEO Infrastructure (\u20ac25,000 upfront, \u20ac5,000/month). Each includes specific deliverables detailed in our service matrix.",
    },
    {
      question: "Do I pay for backlinks separately?",
      answer: "Yes, for our PR + Link Building and other packages that include link acquisition, you pay our monthly management fee plus the actual cost of securing links from third-party sites. We provide full transparency on all link costs before purchase. Over the years we gathered lots of close contacts in several (big) media companies to promote your product.",
    },
    {
      question: "How do you ensure my SEO investment generates positive ROI?",
      answer: "We track revenue attribution from organic traffic, not just rankings or traffic volume. Our strategies focus on high-intent keywords that convert to sales, and we provide detailed ROI reporting monthly.",
    },
    {
      question: "Do you work with businesses heavily dependent on paid ads?",
      answer: "Yes, this is our specialty. We help ecommerce brands reduce their paid advertising costs while maintaining growth through organic channels. Many of our clients start with 80%+ paid traffic dependency.",
    },
    {
      question: "How is EcomSEO different from other SEO agencies?",
      answer: "We provide complete transparency with full dashboard access, detailed reporting, and proven profit-focused frameworks specifically for ecommerce. You'll see exactly what we're doing and how it impacts your revenue through GA4. No black boxes or vague promises.",
    },
    {
      question: "Is your link building safe and Google-compliant?",
      answer: "We place contextual links on real publications -- no PBNs, no spam. Every URL appears in your sheet so you can verify quality and anchor diversity, addressing the trust gap caused by agencies that hide their link sources.",
    },
    {
      question: "Do I need to write content myself?",
      answer: "Only if you want to. Many founders outsource because they lack bandwidth; our writers handle research, drafts, and brand-voice alignment, then send them to you for a quick approval.",
    },
  ],
  de: [
    {
      question: "Mit welchen Kunden arbeitet ihr zusammen?",
      answer: "Wir arbeiten hauptsaechlich mit D2C-E-Commerce-Marken im sechs- bis neunstelligen Umsatzbereich. Wenn Sie unsicher sind, ob SEO fuer Ihr Unternehmen sinnvoll ist, melden Sie sich gerne -- wir geben Ihnen eine ehrliche Einschaetzung.",
    },
    {
      question: "Wie lange dauert es, bis man SEO-Ergebnisse sieht?",
      answer: "Erste Verbesserungen bei Rankings und technischen Optimierungen sehen Sie innerhalb von 30-60 Tagen. Spuerbares Traffic- und Umsatzwachstum tritt in der Regel innerhalb von 3-6 Monaten ein. Wir setzen auf schnelle Erfolge und bauen gleichzeitig nachhaltiges organisches Wachstum auf.",
    },
    {
      question: "Welche Pakete bietet ihr an und was ist enthalten?",
      answer: "Wir bieten fuenf Hauptloesungen: Complete Back-End Optimization (\u20ac5,000+/Monat), PR + Linkaufbau (\u20ac950/Monat + Linkkosten), Branded + Non-Branded On-Page (\u20ac2,000+/Monat), Acquisition Campaign (\u20ac2,500+/Monat) und AI SEO Infrastructure (\u20ac25,000 einmalig, \u20ac5,000/Monat). Jedes Paket umfasst spezifische Leistungen, die in unserer Service-Matrix aufgefuehrt sind.",
    },
    {
      question: "Bezahle ich Backlinks separat?",
      answer: "Ja, bei unserem PR + Linkaufbau und anderen Paketen mit Linkakquise zahlen Sie unsere monatliche Management-Gebuehr plus die tatsaechlichen Kosten fuer Links von Drittanbieter-Seiten. Wir bieten volle Transparenz ueber alle Linkkosten vor dem Kauf. Ueber die Jahre haben wir enge Kontakte zu mehreren (grossen) Medienunternehmen aufgebaut, um Ihr Produkt zu promoten.",
    },
    {
      question: "Wie stellt ihr sicher, dass meine SEO-Investition einen positiven ROI bringt?",
      answer: "Wir tracken die Umsatzzuordnung aus organischem Traffic -- nicht nur Rankings oder Traffic-Volumen. Unsere Strategien konzentrieren sich auf kaufbereite Keywords, die zu Verkaeufen fuehren, und wir liefern monatlich detaillierte ROI-Berichte.",
    },
    {
      question: "Arbeitet ihr mit Unternehmen, die stark von bezahlter Werbung abhaengig sind?",
      answer: "Ja, das ist unsere Spezialitaet. Wir helfen E-Commerce-Marken, ihre Werbekosten zu senken und gleichzeitig durch organische Kanaele weiter zu wachsen. Viele unserer Kunden starten mit ueber 80 % Abhaengigkeit von bezahltem Traffic.",
    },
    {
      question: "Was unterscheidet EcomSEO von anderen SEO-Agenturen?",
      answer: "Wir bieten vollstaendige Transparenz mit Zugang zum Dashboard, detailliertem Reporting und bewaehrten, gewinnorientierten Frameworks speziell fuer E-Commerce. Sie sehen genau, was wir tun und wie es sich ueber GA4 auf Ihren Umsatz auswirkt. Keine Black Boxes oder vagen Versprechen.",
    },
    {
      question: "Ist euer Linkaufbau sicher und Google-konform?",
      answer: "Wir platzieren kontextuelle Links auf echten Publikationen -- keine PBNs, kein Spam. Jede URL erscheint in Ihrem Sheet, sodass Sie Qualitaet und Anchor-Diversity pruefen koennen. So schliessen wir die Vertrauensluecke, die Agenturen hinterlassen, die ihre Linkquellen verbergen.",
    },
    {
      question: "Muss ich den Content selbst schreiben?",
      answer: "Nur, wenn Sie moechten. Viele Gruender lagern das aus, weil ihnen die Kapazitaet fehlt. Unsere Texter uebernehmen Recherche, Entwuerfe und Abstimmung auf Ihre Markentonalitaet und senden Ihnen alles zur schnellen Freigabe.",
    },
  ],
  fr: [
    {
      question: "Avec quel type de clients travaillez-vous ?",
      answer: "Nous travaillons principalement avec des marques e-commerce D2C realisant entre six et neuf chiffres de chiffre d'affaires. Si vous hesitez sur la pertinence du SEO pour votre activite, contactez-nous et nous vous donnerons un avis honnete.",
    },
    {
      question: "Combien de temps faut-il pour voir des resultats en SEO ?",
      answer: "Vous constaterez les premieres ameliorations de positionnement et corrections techniques sous 30 a 60 jours. Une croissance significative du trafic et du chiffre d'affaires intervient generalement sous 3 a 6 mois. Nous visons des victoires rapides tout en construisant une croissance organique durable.",
    },
    {
      question: "Quels forfaits proposez-vous et que comprennent-ils ?",
      answer: "Nous proposons cinq solutions principales : Complete Back-End Optimization (\u20ac5,000+/mois), PR + Link Building (\u20ac950/mois + frais de liens), Branded + Non-Branded On-Page (\u20ac2,000+/mois), Acquisition Campaign (\u20ac2,500+/mois) et AI SEO Infrastructure (\u20ac25,000 initial, \u20ac5,000/mois). Chaque forfait inclut des livrables specifiques detailles dans notre matrice de services.",
    },
    {
      question: "Les backlinks sont-ils factures separement ?",
      answer: "Oui, pour notre forfait PR + Link Building et les autres formules incluant l'acquisition de liens, vous payez nos frais de gestion mensuels plus le cout reel d'obtention des liens aupres de sites tiers. Nous offrons une transparence totale sur les couts avant achat. Au fil des ans, nous avons tisse des liens etroits avec plusieurs grands groupes mediatiques pour promouvoir votre produit.",
    },
    {
      question: "Comment garantissez-vous un ROI positif de mon investissement SEO ?",
      answer: "Nous suivons l'attribution des revenus issus du trafic organique, pas seulement les classements ou le volume de trafic. Nos strategies ciblent des mots-cles a forte intention d'achat qui convertissent, et nous fournissons des rapports ROI detailles chaque mois.",
    },
    {
      question: "Travaillez-vous avec des entreprises tres dependantes de la publicite payante ?",
      answer: "Oui, c'est notre specialite. Nous aidons les marques e-commerce a reduire leurs couts publicitaires tout en maintenant leur croissance via les canaux organiques. Beaucoup de nos clients commencent avec plus de 80 % de dependance au trafic payant.",
    },
    {
      question: "Qu'est-ce qui distingue EcomSEO des autres agences SEO ?",
      answer: "Nous offrons une transparence totale avec un acces complet au tableau de bord, des rapports detailles et des frameworks eprouves axes sur le profit, specifiquement concus pour le e-commerce. Vous verrez exactement ce que nous faisons et son impact sur votre CA via GA4. Pas de boites noires ni de promesses vagues.",
    },
    {
      question: "Votre link building est-il sur et conforme aux regles de Google ?",
      answer: "Nous placons des liens contextuels sur de vraies publications -- pas de PBN, pas de spam. Chaque URL figure dans votre feuille de suivi pour que vous puissiez verifier la qualite et la diversite des ancres, comblant ainsi le manque de confiance cause par les agences qui cachent leurs sources de liens.",
    },
    {
      question: "Dois-je rediger le contenu moi-meme ?",
      answer: "Uniquement si vous le souhaitez. Beaucoup de fondateurs externalisent par manque de temps. Nos redacteurs s'occupent de la recherche, des brouillons et de l'alignement sur le ton de votre marque, puis vous envoient le tout pour validation rapide.",
    },
  ],
  es: [
    {
      question: "Con que tipo de clientes trabajan?",
      answer: "Trabajamos principalmente con marcas D2C de ecommerce que facturan entre seis y nueve cifras. Si no tienes claro si el SEO tiene sentido para tu negocio, contactanos y te daremos una evaluacion honesta.",
    },
    {
      question: "Cuanto tiempo se tarda en ver resultados del SEO?",
      answer: "Veras mejoras iniciales en rankings y correcciones tecnicas en 30-60 dias. El crecimiento significativo de trafico e ingresos suele producirse en 3-6 meses. Nos enfocamos en victorias rapidas mientras construimos crecimiento organico a largo plazo.",
    },
    {
      question: "Que paquetes ofrecen y que incluyen?",
      answer: "Ofrecemos cinco soluciones principales: Complete Back-End Optimization (\u20ac5,000+/mes), PR + Link Building (\u20ac950/mes + coste de enlaces), Branded + Non-Branded On-Page (\u20ac2,000+/mes), Acquisition Campaign (\u20ac2,500+/mes) y AI SEO Infrastructure (\u20ac25,000 inicial, \u20ac5,000/mes). Cada paquete incluye entregables especificos detallados en nuestra matriz de servicios.",
    },
    {
      question: "Pago los backlinks por separado?",
      answer: "Si, en nuestro paquete PR + Link Building y otros que incluyen adquisicion de enlaces, pagas nuestra tarifa de gestion mensual mas el coste real de obtener enlaces de sitios de terceros. Ofrecemos total transparencia en los costes de enlaces antes de la compra. A lo largo de los anios hemos desarrollado contactos estrechos con varios medios (grandes) para promocionar tu producto.",
    },
    {
      question: "Como aseguran que mi inversion en SEO genere un ROI positivo?",
      answer: "Rastreamos la atribucion de ingresos del trafico organico, no solo rankings o volumen de trafico. Nuestras estrategias se centran en keywords de alta intencion de compra que convierten en ventas, y proporcionamos informes de ROI detallados mensualmente.",
    },
    {
      question: "Trabajan con negocios muy dependientes de la publicidad de pago?",
      answer: "Si, es nuestra especialidad. Ayudamos a marcas de ecommerce a reducir sus costes de publicidad pagada manteniendo el crecimiento a traves de canales organicos. Muchos de nuestros clientes comienzan con mas del 80 % de dependencia de trafico de pago.",
    },
    {
      question: "En que se diferencia EcomSEO de otras agencias SEO?",
      answer: "Ofrecemos total transparencia con acceso completo al panel, informes detallados y frameworks probados enfocados en la rentabilidad, disenados especificamente para ecommerce. Veras exactamente lo que hacemos y como impacta en tus ingresos a traves de GA4. Sin cajas negras ni promesas vagas.",
    },
    {
      question: "Es seguro vuestro link building y cumple con Google?",
      answer: "Colocamos enlaces contextuales en publicaciones reales -- sin PBNs, sin spam. Cada URL aparece en tu hoja para que puedas verificar la calidad y la diversidad de anchors, cerrando la brecha de confianza causada por agencias que ocultan sus fuentes de enlaces.",
    },
    {
      question: "Necesito escribir el contenido yo mismo?",
      answer: "Solo si quieres. Muchos fundadores externalizan porque no tienen tiempo. Nuestros redactores se encargan de la investigacion, los borradores y la alineacion con el tono de tu marca, y te lo envian para una aprobacion rapida.",
    },
  ],
  it: [
    {
      question: "Con che tipo di clienti lavorate?",
      answer: "Lavoriamo principalmente con brand D2C e-commerce che fatturano da sei a nove cifre. Se non sei sicuro che la SEO abbia senso per la tua attivita, contattaci e ti daremo una valutazione onesta.",
    },
    {
      question: "Quanto tempo ci vuole per vedere risultati dalla SEO?",
      answer: "Vedrai i primi miglioramenti nei posizionamenti e le correzioni tecniche entro 30-60 giorni. Una crescita significativa di traffico e ricavi avviene tipicamente entro 3-6 mesi. Ci concentriamo su vittorie rapide mentre costruiamo una crescita organica a lungo termine.",
    },
    {
      question: "Quali pacchetti offrite e cosa includono?",
      answer: "Offriamo cinque soluzioni principali: Complete Back-End Optimization (\u20ac5,000+/mese), PR + Link Building (\u20ac950/mese + costi dei link), Branded + Non-Branded On-Page (\u20ac2,000+/mese), Acquisition Campaign (\u20ac2,500+/mese) e AI SEO Infrastructure (\u20ac25,000 iniziali, \u20ac5,000/mese). Ogni pacchetto include deliverable specifici dettagliati nella nostra matrice dei servizi.",
    },
    {
      question: "I backlink si pagano separatamente?",
      answer: "Si, per il nostro pacchetto PR + Link Building e altri che includono l'acquisizione di link, paghi la nostra tariffa di gestione mensile piu il costo effettivo per ottenere link da siti terzi. Offriamo totale trasparenza su tutti i costi dei link prima dell'acquisto. Negli anni abbiamo costruito stretti contatti con diversi (grandi) gruppi editoriali per promuovere il tuo prodotto.",
    },
    {
      question: "Come garantite che il mio investimento SEO generi un ROI positivo?",
      answer: "Monitoriamo l'attribuzione dei ricavi dal traffico organico, non solo i posizionamenti o il volume di traffico. Le nostre strategie si concentrano su keyword ad alta intenzione di acquisto che convertono in vendite, e forniamo report ROI dettagliati mensilmente.",
    },
    {
      question: "Lavorate con aziende molto dipendenti dalla pubblicita a pagamento?",
      answer: "Si, e la nostra specialita. Aiutiamo i brand e-commerce a ridurre i costi pubblicitari mantenendo la crescita attraverso i canali organici. Molti dei nostri clienti iniziano con oltre l'80% di dipendenza dal traffico a pagamento.",
    },
    {
      question: "Cosa distingue EcomSEO dalle altre agenzie SEO?",
      answer: "Offriamo trasparenza totale con accesso completo alla dashboard, reportistica dettagliata e framework collaudati focalizzati sul profitto, specifici per l'e-commerce. Vedrai esattamente cosa facciamo e come impatta sul tuo fatturato tramite GA4. Nessuna scatola nera o promesse vaghe.",
    },
    {
      question: "Il vostro link building e sicuro e conforme alle linee guida di Google?",
      answer: "Inseriamo link contestuali su pubblicazioni reali -- niente PBN, niente spam. Ogni URL compare nel tuo foglio cosi puoi verificare qualita e diversita degli anchor, colmando il divario di fiducia causato da agenzie che nascondono le proprie fonti di link.",
    },
    {
      question: "Devo scrivere i contenuti da solo?",
      answer: "Solo se lo desideri. Molti fondatori esternalizzano per mancanza di tempo. I nostri copywriter si occupano di ricerca, bozze e allineamento al tono del tuo brand, per poi inviarti tutto per un'approvazione rapida.",
    },
  ],
  nl: [
    {
      question: "Met welk type klanten werken jullie?",
      answer: "We werken voornamelijk met D2C e-commercemerken met een omzet van zes tot negen cijfers. Als je twijfelt of SEO zinvol is voor jouw bedrijf, neem gerust contact op en we geven je een eerlijke inschatting.",
    },
    {
      question: "Hoe lang duurt het voordat je SEO-resultaten ziet?",
      answer: "Je ziet de eerste verbeteringen in rankings en technische fixes binnen 30-60 dagen. Merkbare groei in verkeer en omzet treedt doorgaans op binnen 3-6 maanden. We focussen op snelle winsten terwijl we bouwen aan duurzame organische groei.",
    },
    {
      question: "Welke pakketten bieden jullie aan en wat zit erin?",
      answer: "We bieden vijf hoofdoplossingen: Complete Back-End Optimization (\u20ac5,000+/maand), PR + Linkbuilding (\u20ac950/maand + linkkosten), Branded + Non-Branded On-Page (\u20ac2,000+/maand), Acquisition Campaign (\u20ac2,500+/maand) en AI SEO Infrastructure (\u20ac25,000 eenmalig, \u20ac5,000/maand). Elk pakket bevat specifieke deliverables die in onze servicematrix staan beschreven.",
    },
    {
      question: "Betaal ik backlinks apart?",
      answer: "Ja, bij ons PR + Linkbuilding-pakket en andere pakketten met linkacquisitie betaal je onze maandelijkse managementfee plus de daadwerkelijke kosten voor het verkrijgen van links van externe sites. We bieden volledige transparantie over alle linkkosten vooraf. Door de jaren heen hebben we nauwe contacten opgebouwd met verschillende (grote) mediabedrijven om jouw product te promoten.",
    },
    {
      question: "Hoe zorgen jullie dat mijn SEO-investering een positieve ROI oplevert?",
      answer: "We tracken omzetattributie uit organisch verkeer, niet alleen rankings of verkeersvolume. Onze strategieen richten zich op zoekwoorden met hoge koopintentie die converteren naar verkopen, en we leveren maandelijks gedetailleerde ROI-rapportages.",
    },
    {
      question: "Werken jullie met bedrijven die sterk afhankelijk zijn van betaalde advertenties?",
      answer: "Ja, dat is onze specialiteit. We helpen e-commercemerken hun advertentiekosten te verlagen terwijl ze blijven groeien via organische kanalen. Veel van onze klanten beginnen met meer dan 80% afhankelijkheid van betaald verkeer.",
    },
    {
      question: "Wat maakt EcomSEO anders dan andere SEO-bureaus?",
      answer: "We bieden volledige transparantie met toegang tot het dashboard, gedetailleerde rapportages en bewezen, winstgerichte frameworks specifiek voor e-commerce. Je ziet precies wat we doen en hoe het via GA4 je omzet beinvloedt. Geen black boxes of vage beloftes.",
    },
    {
      question: "Is jullie linkbuilding veilig en Google-conform?",
      answer: "We plaatsen contextuele links op echte publicaties -- geen PBN's, geen spam. Elke URL staat in je sheet zodat je kwaliteit en anchordiversiteit kunt controleren. Zo dichten we de vertrouwenskloof die ontstaat bij bureaus die hun linkbronnen verbergen.",
    },
    {
      question: "Moet ik zelf de content schrijven?",
      answer: "Alleen als je dat wilt. Veel founders besteden dit uit omdat ze er geen tijd voor hebben. Onze schrijvers verzorgen onderzoek, concepten en afstemming op jouw merktoon, en sturen het vervolgens ter goedkeuring naar je op.",
    },
  ],
};
