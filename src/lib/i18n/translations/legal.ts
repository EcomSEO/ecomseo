import type { Locale } from "../config";

interface LegalSection {
  title: string;
  content: string;
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicyT: Record<Locale, LegalPageContent> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 5, 2026",
    sections: [
      {
        title: "1. Introduction",
        content:
          "EcomSEO (\"we\", \"us\", or \"our\") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ecomseo.co and use our services. Please read this policy carefully. By accessing or using our website, you agree to the collection and use of information in accordance with this policy.",
      },
      {
        title: "2. Information We Collect",
        content:
          "We may collect personal information that you voluntarily provide to us when you fill out contact forms, subscribe to newsletters, or otherwise interact with our services. This may include: your name, email address, company name, website URL, phone number, and any other information you choose to provide. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.",
      },
      {
        title: "3. How We Use Your Information",
        content:
          "We use the information we collect to: provide, operate, and maintain our website and services; respond to your inquiries and fulfil your requests; send you marketing communications (with your consent); improve our website and services; comply with legal obligations; and protect against fraudulent or illegal activity.",
      },
      {
        title: "4. Cookies and Tracking Technologies",
        content:
          "We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website.",
      },
      {
        title: "5. Third-Party Services",
        content:
          "We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. These third parties include analytics providers, email service providers, and CRM platforms. These parties are obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.",
      },
      {
        title: "6. Data Retention",
        content:
          "We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When we no longer need your personal data, we will securely delete or anonymise it.",
      },
      {
        title: "7. Your Rights",
        content:
          "Depending on your location, you may have the following rights regarding your personal data: the right to access, correct, or delete your personal data; the right to restrict or object to processing; the right to data portability; and the right to withdraw consent. To exercise any of these rights, please contact us at info@ecomseo.co.",
      },
      {
        title: "8. Data Security",
        content:
          "We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        title: "9. International Transfers",
        content:
          "Your information may be transferred to and maintained on servers located outside of your country of residence. We ensure that any such transfers comply with applicable data protection laws and that appropriate safeguards are in place.",
      },
      {
        title: "10. Changes to This Policy",
        content:
          "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date. You are advised to review this Privacy Policy periodically for any changes.",
      },
      {
        title: "11. Contact Us",
        content:
          "If you have any questions about this Privacy Policy, please contact us at info@ecomseo.co.",
      },
    ],
  },
  de: {
    title: "Datenschutzrichtlinie",
    lastUpdated: "Zuletzt aktualisiert: 5. Marz 2026",
    sections: [
      {
        title: "1. Einleitung",
        content:
          "EcomSEO (\"wir\", \"uns\" oder \"unser\") verpflichtet sich, Ihre personenbezogenen Daten zu schutzen und Ihre Privatsphare zu respektieren. Diese Datenschutzrichtlinie erlautert, wie wir Ihre Informationen erheben, verwenden, offenlegen und schutzen, wenn Sie unsere Website ecomseo.co besuchen und unsere Dienste nutzen. Bitte lesen Sie diese Richtlinie sorgfaltig durch. Durch den Zugriff auf oder die Nutzung unserer Website stimmen Sie der Erhebung und Verwendung von Informationen gema\u00df dieser Richtlinie zu.",
      },
      {
        title: "2. Informationen, die wir erheben",
        content:
          "Wir konnen personenbezogene Daten erheben, die Sie uns freiwillig zur Verfugung stellen, wenn Sie Kontaktformulare ausfullen, Newsletter abonnieren oder anderweitig mit unseren Diensten interagieren. Dies kann umfassen: Ihren Namen, Ihre E-Mail-Adresse, Firmennamen, Website-URL, Telefonnummer und alle weiteren Informationen, die Sie bereitstellen. Wir erheben auch automatisch bestimmte technische Informationen, wenn Sie unsere Website besuchen, einschlie\u00dflich Ihrer IP-Adresse, Ihres Browsertyps, Betriebssystems, verweisender URLs und aufgerufener Seiten.",
      },
      {
        title: "3. Wie wir Ihre Informationen verwenden",
        content:
          "Wir verwenden die erhobenen Informationen, um: unsere Website und Dienste bereitzustellen, zu betreiben und zu pflegen; auf Ihre Anfragen zu antworten und Ihre Wunsche zu erfullen; Ihnen Marketingmitteilungen zu senden (mit Ihrer Einwilligung); unsere Website und Dienste zu verbessern; gesetzlichen Verpflichtungen nachzukommen; und vor betrugerischen oder illegalen Aktivitaten zu schutzen.",
      },
      {
        title: "4. Cookies und Tracking-Technologien",
        content:
          "Wir verwenden Cookies und ahnliche Tracking-Technologien, um die Aktivitat auf unserer Website zu verfolgen und bestimmte Informationen zu speichern. Cookies sind kleine Datendateien, die auf Ihrem Gerat gespeichert werden. Sie konnen Ihren Browser anweisen, alle Cookies abzulehnen oder anzuzeigen, wenn ein Cookie gesendet wird. Wir verwenden Analyse-Cookies (wie Google Analytics), um zu verstehen, wie Besucher mit unserer Website interagieren.",
      },
      {
        title: "5. Drittanbieter-Dienste",
        content:
          "Wir konnen Ihre Informationen mit Drittanbietern teilen, die uns beim Betrieb unserer Website, der Fuhrung unseres Geschafts oder der Betreuung von Ihnen unterstutzen. Diese Drittparteien sind verpflichtet, Ihre Informationen vertraulich zu behandeln und sie nur fur die Zwecke zu verwenden, fur die wir sie offenlegen.",
      },
      {
        title: "6. Datenspeicherung",
        content:
          "Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es zur Erfullung der Zwecke, fur die sie erhoben wurden, erforderlich ist, einschlie\u00dflich zur Erfullung gesetzlicher, buchhalterischer oder berichtspflichtiger Anforderungen. Wenn wir Ihre personenbezogenen Daten nicht mehr benotigen, werden wir sie sicher loschen oder anonymisieren.",
      },
      {
        title: "7. Ihre Rechte",
        content:
          "Abhangig von Ihrem Standort konnen Sie folgende Rechte bezuglich Ihrer personenbezogenen Daten haben: das Recht auf Zugang, Berichtigung oder Loschung Ihrer personenbezogenen Daten; das Recht auf Einschrankung oder Widerspruch gegen die Verarbeitung; das Recht auf Datenubertragbarkeit; und das Recht, Ihre Einwilligung zu widerrufen. Um eines dieser Rechte auszuuben, kontaktieren Sie uns bitte unter info@ecomseo.co.",
      },
      {
        title: "8. Datensicherheit",
        content:
          "Wir implementieren geeignete technische und organisatorische Sicherheitsma\u00dfnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Anderung, Offenlegung oder Zerstorung zu schutzen. Keine Methode der Ubertragung uber das Internet oder der elektronischen Speicherung ist jedoch zu 100 % sicher, und wir konnen keine absolute Sicherheit garantieren.",
      },
      {
        title: "9. Internationale Ubermittlungen",
        content:
          "Ihre Informationen konnen auf Server ubertragen und dort gespeichert werden, die sich au\u00dferhalb Ihres Wohnsitzlandes befinden. Wir stellen sicher, dass solche Ubermittlungen den geltenden Datenschutzgesetzen entsprechen und geeignete Schutzma\u00dfnahmen getroffen werden.",
      },
      {
        title: "10. Anderungen dieser Richtlinie",
        content:
          "Wir konnen diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie uber Anderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veroffentlichen und das Datum der letzten Aktualisierung anpassen. Es wird empfohlen, diese Datenschutzrichtlinie regelma\u00dfig auf Anderungen zu uberprufen.",
      },
      {
        title: "11. Kontakt",
        content:
          "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter info@ecomseo.co.",
      },
    ],
  },
  fr: {
    title: "Politique de Confidentialite",
    lastUpdated: "Derniere mise a jour : 5 mars 2026",
    sections: [
      {
        title: "1. Introduction",
        content:
          "EcomSEO (\"nous\", \"notre\" ou \"nos\") s'engage a proteger vos donnees personnelles et a respecter votre vie privee. Cette Politique de Confidentialite explique comment nous collectons, utilisons, divulguons et protegeons vos informations lorsque vous visitez notre site web ecomseo.co et utilisez nos services. Veuillez lire attentivement cette politique. En accedant a notre site web ou en l'utilisant, vous acceptez la collecte et l'utilisation des informations conformement a cette politique.",
      },
      {
        title: "2. Informations que nous collectons",
        content:
          "Nous pouvons collecter des informations personnelles que vous nous fournissez volontairement lorsque vous remplissez des formulaires de contact, vous abonnez a des newsletters ou interagissez autrement avec nos services. Cela peut inclure : votre nom, adresse e-mail, nom d'entreprise, URL du site web, numero de telephone et toute autre information que vous choisissez de fournir. Nous collectons egalement automatiquement certaines informations techniques lorsque vous visitez notre site web, notamment votre adresse IP, type de navigateur, systeme d'exploitation, URLs de reference et pages consultees.",
      },
      {
        title: "3. Comment nous utilisons vos informations",
        content:
          "Nous utilisons les informations que nous collectons pour : fournir, exploiter et maintenir notre site web et nos services ; repondre a vos demandes ; vous envoyer des communications marketing (avec votre consentement) ; ameliorer notre site web et nos services ; respecter nos obligations legales ; et nous proteger contre les activites frauduleuses ou illegales.",
      },
      {
        title: "4. Cookies et technologies de suivi",
        content:
          "Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activite sur notre site web et stocker certaines informations. Les cookies sont de petits fichiers de donnees places sur votre appareil. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous avertir lorsqu'un cookie est envoye. Nous utilisons des cookies d'analyse (tels que Google Analytics) pour comprendre comment les visiteurs interagissent avec notre site web.",
      },
      {
        title: "5. Services tiers",
        content:
          "Nous pouvons partager vos informations avec des prestataires de services tiers qui nous aident a exploiter notre site web, a mener nos activites ou a vous servir. Ces tiers sont tenus de garder vos informations confidentielles et de ne les utiliser que dans le cadre des finalites pour lesquelles nous les divulguons.",
      },
      {
        title: "6. Conservation des donnees",
        content:
          "Nous conservons vos donnees personnelles uniquement aussi longtemps que necessaire pour atteindre les finalites pour lesquelles elles ont ete collectees, y compris pour satisfaire toute exigence legale, comptable ou de reporting. Lorsque nous n'avons plus besoin de vos donnees personnelles, nous les supprimerons ou les anonymiserons de maniere securisee.",
      },
      {
        title: "7. Vos droits",
        content:
          "Selon votre localisation, vous pouvez disposer des droits suivants concernant vos donnees personnelles : le droit d'acces, de rectification ou de suppression de vos donnees personnelles ; le droit de limiter ou de vous opposer au traitement ; le droit a la portabilite des donnees ; et le droit de retirer votre consentement. Pour exercer l'un de ces droits, veuillez nous contacter a info@ecomseo.co.",
      },
      {
        title: "8. Securite des donnees",
        content:
          "Nous mettons en oeuvre des mesures de securite techniques et organisationnelles appropriees pour proteger vos donnees personnelles contre tout acces, modification, divulgation ou destruction non autorise. Cependant, aucune methode de transmission sur Internet ou de stockage electronique n'est securisee a 100 %, et nous ne pouvons garantir une securite absolue.",
      },
      {
        title: "9. Transferts internationaux",
        content:
          "Vos informations peuvent etre transferees et conservees sur des serveurs situes en dehors de votre pays de residence. Nous veillons a ce que ces transferts soient conformes aux lois applicables en matiere de protection des donnees et que des garanties appropriees soient en place.",
      },
      {
        title: "10. Modifications de cette politique",
        content:
          "Nous pouvons mettre a jour cette Politique de Confidentialite de temps a autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialite sur cette page et en mettant a jour la date de derniere mise a jour. Il vous est conseille de consulter regulierement cette Politique de Confidentialite pour toute modification.",
      },
      {
        title: "11. Nous contacter",
        content:
          "Si vous avez des questions concernant cette Politique de Confidentialite, veuillez nous contacter a info@ecomseo.co.",
      },
    ],
  },
  es: {
    title: "Politica de Privacidad",
    lastUpdated: "Ultima actualizacion: 5 de marzo de 2026",
    sections: [
      {
        title: "1. Introduccion",
        content:
          "EcomSEO (\"nosotros\", \"nos\" o \"nuestro\") se compromete a proteger sus datos personales y respetar su privacidad. Esta Politica de Privacidad explica como recopilamos, usamos, divulgamos y protegemos su informacion cuando visita nuestro sitio web ecomseo.co y utiliza nuestros servicios. Por favor, lea esta politica detenidamente. Al acceder o utilizar nuestro sitio web, usted acepta la recopilacion y el uso de la informacion de acuerdo con esta politica.",
      },
      {
        title: "2. Informacion que recopilamos",
        content:
          "Podemos recopilar informacion personal que usted nos proporciona voluntariamente cuando completa formularios de contacto, se suscribe a boletines o interactua de otra manera con nuestros servicios. Esto puede incluir: su nombre, direccion de correo electronico, nombre de la empresa, URL del sitio web, numero de telefono y cualquier otra informacion que elija proporcionar. Tambien recopilamos automaticamente cierta informacion tecnica cuando visita nuestro sitio web, incluyendo su direccion IP, tipo de navegador, sistema operativo, URLs de referencia y paginas visitadas.",
      },
      {
        title: "3. Como usamos su informacion",
        content:
          "Usamos la informacion que recopilamos para: proporcionar, operar y mantener nuestro sitio web y servicios; responder a sus consultas y cumplir sus solicitudes; enviarle comunicaciones de marketing (con su consentimiento); mejorar nuestro sitio web y servicios; cumplir con obligaciones legales; y proteger contra actividades fraudulentas o ilegales.",
      },
      {
        title: "4. Cookies y tecnologias de seguimiento",
        content:
          "Utilizamos cookies y tecnologias de seguimiento similares para rastrear la actividad en nuestro sitio web y almacenar cierta informacion. Las cookies son pequenos archivos de datos colocados en su dispositivo. Puede configurar su navegador para rechazar todas las cookies o para indicar cuando se envia una cookie. Utilizamos cookies de analisis (como Google Analytics) para comprender como los visitantes interactuan con nuestro sitio web.",
      },
      {
        title: "5. Servicios de terceros",
        content:
          "Podemos compartir su informacion con proveedores de servicios de terceros que nos ayudan a operar nuestro sitio web, realizar nuestro negocio o atenderle. Estos terceros estan obligados a mantener su informacion confidencial y a utilizarla solo para los fines para los que se la proporcionamos.",
      },
      {
        title: "6. Retencion de datos",
        content:
          "Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los fines para los que se recopilaron, incluyendo para satisfacer cualquier requisito legal, contable o de informes. Cuando ya no necesitemos sus datos personales, los eliminaremos o anonimizaremos de forma segura.",
      },
      {
        title: "7. Sus derechos",
        content:
          "Dependiendo de su ubicacion, puede tener los siguientes derechos con respecto a sus datos personales: el derecho de acceso, correccion o eliminacion de sus datos personales; el derecho a restringir u oponerse al procesamiento; el derecho a la portabilidad de datos; y el derecho a retirar el consentimiento. Para ejercer cualquiera de estos derechos, contactenos en info@ecomseo.co.",
      },
      {
        title: "8. Seguridad de datos",
        content:
          "Implementamos medidas de seguridad tecnicas y organizativas apropiadas para proteger sus datos personales contra el acceso, la alteracion, la divulgacion o la destruccion no autorizados. Sin embargo, ningun metodo de transmision por Internet o de almacenamiento electronico es 100% seguro, y no podemos garantizar una seguridad absoluta.",
      },
      {
        title: "9. Transferencias internacionales",
        content:
          "Su informacion puede ser transferida y mantenida en servidores ubicados fuera de su pais de residencia. Nos aseguramos de que dichas transferencias cumplan con las leyes de proteccion de datos aplicables y que existan las salvaguardas apropiadas.",
      },
      {
        title: "10. Cambios en esta politica",
        content:
          "Podemos actualizar esta Politica de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Politica de Privacidad en esta pagina y actualizando la fecha de ultima actualizacion. Se recomienda revisar esta Politica de Privacidad periodicamente para cualquier cambio.",
      },
      {
        title: "11. Contactenos",
        content:
          "Si tiene alguna pregunta sobre esta Politica de Privacidad, contactenos en info@ecomseo.co.",
      },
    ],
  },
  it: {
    title: "Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: 5 marzo 2026",
    sections: [
      {
        title: "1. Introduzione",
        content:
          "EcomSEO (\"noi\", \"ci\" o \"nostro\") si impegna a proteggere i vostri dati personali e a rispettare la vostra privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le vostre informazioni quando visitate il nostro sito web ecomseo.co e utilizzate i nostri servizi. Si prega di leggere attentamente questa informativa. Accedendo o utilizzando il nostro sito web, acconsentite alla raccolta e all'uso delle informazioni in conformita con questa informativa.",
      },
      {
        title: "2. Informazioni che raccogliamo",
        content:
          "Possiamo raccogliere informazioni personali che ci fornite volontariamente quando compilate moduli di contatto, vi iscrivete alle newsletter o interagite in altro modo con i nostri servizi. Queste possono includere: il vostro nome, indirizzo e-mail, nome dell'azienda, URL del sito web, numero di telefono e qualsiasi altra informazione che scegliete di fornire. Raccogliamo inoltre automaticamente alcune informazioni tecniche quando visitate il nostro sito web, tra cui il vostro indirizzo IP, tipo di browser, sistema operativo, URL di provenienza e pagine visualizzate.",
      },
      {
        title: "3. Come utilizziamo le vostre informazioni",
        content:
          "Utilizziamo le informazioni che raccogliamo per: fornire, gestire e mantenere il nostro sito web e i nostri servizi; rispondere alle vostre richieste; inviarvi comunicazioni di marketing (con il vostro consenso); migliorare il nostro sito web e i nostri servizi; adempiere agli obblighi legali; e proteggerci da attivita fraudolente o illegali.",
      },
      {
        title: "4. Cookie e tecnologie di tracciamento",
        content:
          "Utilizziamo cookie e tecnologie di tracciamento simili per monitorare l'attivita sul nostro sito web e memorizzare determinate informazioni. I cookie sono piccoli file di dati posizionati sul vostro dispositivo. Potete configurare il vostro browser per rifiutare tutti i cookie o per segnalare quando viene inviato un cookie. Utilizziamo cookie analitici (come Google Analytics) per comprendere come i visitatori interagiscono con il nostro sito web.",
      },
      {
        title: "5. Servizi di terze parti",
        content:
          "Possiamo condividere le vostre informazioni con fornitori di servizi terzi che ci assistono nella gestione del nostro sito web, nella conduzione della nostra attivita o nel servirvi. Queste terze parti sono obbligate a mantenere le vostre informazioni riservate e a utilizzarle solo per gli scopi per i quali le divulghiamo.",
      },
      {
        title: "6. Conservazione dei dati",
        content:
          "Conserviamo i vostri dati personali solo per il tempo necessario a soddisfare le finalita per cui sono stati raccolti, compreso l'adempimento di requisiti legali, contabili o di reporting. Quando non avremo piu bisogno dei vostri dati personali, li cancelleremo o li renderemo anonimi in modo sicuro.",
      },
      {
        title: "7. I vostri diritti",
        content:
          "A seconda della vostra posizione, potreste avere i seguenti diritti riguardo ai vostri dati personali: il diritto di accesso, rettifica o cancellazione dei vostri dati personali; il diritto di limitare o opporsi al trattamento; il diritto alla portabilita dei dati; e il diritto di revocare il consenso. Per esercitare uno qualsiasi di questi diritti, contattateci all'indirizzo info@ecomseo.co.",
      },
      {
        title: "8. Sicurezza dei dati",
        content:
          "Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i vostri dati personali da accesso, alterazione, divulgazione o distruzione non autorizzati. Tuttavia, nessun metodo di trasmissione su Internet o di archiviazione elettronica e sicuro al 100%, e non possiamo garantire una sicurezza assoluta.",
      },
      {
        title: "9. Trasferimenti internazionali",
        content:
          "Le vostre informazioni possono essere trasferite e conservate su server situati al di fuori del vostro paese di residenza. Ci assicuriamo che tali trasferimenti siano conformi alle leggi applicabili sulla protezione dei dati e che siano in atto garanzie adeguate.",
      },
      {
        title: "10. Modifiche a questa informativa",
        content:
          "Possiamo aggiornare questa Informativa sulla Privacy di tanto in tanto. Vi informeremo di eventuali modifiche pubblicando la nuova Informativa sulla Privacy su questa pagina e aggiornando la data dell'ultimo aggiornamento. Si consiglia di consultare periodicamente questa Informativa sulla Privacy per eventuali modifiche.",
      },
      {
        title: "11. Contattaci",
        content:
          "Se avete domande su questa Informativa sulla Privacy, contattateci all'indirizzo info@ecomseo.co.",
      },
    ],
  },
  nl: {
    title: "Privacybeleid",
    lastUpdated: "Laatst bijgewerkt: 5 maart 2026",
    sections: [
      {
        title: "1. Inleiding",
        content:
          "EcomSEO (\"wij\", \"ons\" of \"onze\") zet zich in voor de bescherming van uw persoonsgegevens en het respecteren van uw privacy. Dit Privacybeleid legt uit hoe wij uw informatie verzamelen, gebruiken, openbaar maken en beschermen wanneer u onze website ecomseo.co bezoekt en onze diensten gebruikt. Lees dit beleid zorgvuldig door. Door onze website te bezoeken of te gebruiken, stemt u in met het verzamelen en gebruiken van informatie in overeenstemming met dit beleid.",
      },
      {
        title: "2. Informatie die wij verzamelen",
        content:
          "Wij kunnen persoonlijke informatie verzamelen die u vrijwillig aan ons verstrekt wanneer u contactformulieren invult, u zich abonneert op nieuwsbrieven of anderszins met onze diensten communiceert. Dit kan omvatten: uw naam, e-mailadres, bedrijfsnaam, website-URL, telefoonnummer en alle andere informatie die u kiest te verstrekken. Wij verzamelen ook automatisch bepaalde technische informatie wanneer u onze website bezoekt, waaronder uw IP-adres, browsertype, besturingssysteem, verwijzende URL's en bekeken pagina's.",
      },
      {
        title: "3. Hoe wij uw informatie gebruiken",
        content:
          "Wij gebruiken de verzamelde informatie om: onze website en diensten te bieden, te beheren en te onderhouden; op uw vragen te reageren en uw verzoeken uit te voeren; u marketingcommunicatie te sturen (met uw toestemming); onze website en diensten te verbeteren; te voldoen aan wettelijke verplichtingen; en te beschermen tegen frauduleuze of illegale activiteiten.",
      },
      {
        title: "4. Cookies en trackingtechnologieen",
        content:
          "Wij gebruiken cookies en vergelijkbare trackingtechnologieen om de activiteit op onze website te volgen en bepaalde informatie op te slaan. Cookies zijn kleine gegevensbestanden die op uw apparaat worden geplaatst. U kunt uw browser instellen om alle cookies te weigeren of aan te geven wanneer een cookie wordt verzonden. Wij gebruiken analytische cookies (zoals Google Analytics) om te begrijpen hoe bezoekers met onze website omgaan.",
      },
      {
        title: "5. Diensten van derden",
        content:
          "Wij kunnen uw informatie delen met externe dienstverleners die ons helpen bij het beheren van onze website, het uitvoeren van onze activiteiten of het bedienen van u. Deze derden zijn verplicht uw informatie vertrouwelijk te houden en deze alleen te gebruiken voor de doeleinden waarvoor wij deze openbaar maken.",
      },
      {
        title: "6. Gegevensbewaring",
        content:
          "Wij bewaren uw persoonsgegevens alleen zolang als nodig is om de doeleinden te vervullen waarvoor deze zijn verzameld, inclusief om te voldoen aan wettelijke, boekhoudkundige of rapportagevereisten. Wanneer wij uw persoonsgegevens niet meer nodig hebben, zullen wij deze veilig verwijderen of anonimiseren.",
      },
      {
        title: "7. Uw rechten",
        content:
          "Afhankelijk van uw locatie kunt u de volgende rechten hebben met betrekking tot uw persoonsgegevens: het recht op toegang, correctie of verwijdering van uw persoonsgegevens; het recht om verwerking te beperken of er bezwaar tegen te maken; het recht op gegevensoverdraagbaarheid; en het recht om uw toestemming in te trekken. Om een van deze rechten uit te oefenen, neem contact met ons op via info@ecomseo.co.",
      },
      {
        title: "8. Gegevensbeveiliging",
        content:
          "Wij implementeren passende technische en organisatorische beveiligingsmaatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging. Geen enkele methode van overdracht via het internet of elektronische opslag is echter 100% veilig, en wij kunnen geen absolute veiligheid garanderen.",
      },
      {
        title: "9. Internationale overdrachten",
        content:
          "Uw informatie kan worden overgedragen naar en bewaard op servers buiten uw land van verblijf. Wij zorgen ervoor dat dergelijke overdrachten voldoen aan de toepasselijke wetgeving inzake gegevensbescherming en dat passende waarborgen aanwezig zijn.",
      },
      {
        title: "10. Wijzigingen in dit beleid",
        content:
          "Wij kunnen dit Privacybeleid van tijd tot tijd bijwerken. Wij zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe Privacybeleid op deze pagina te plaatsen en de datum van laatste bijwerking bij te werken. Het wordt aanbevolen dit Privacybeleid regelmatig te raadplegen voor eventuele wijzigingen.",
      },
      {
        title: "11. Contact opnemen",
        content:
          "Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via info@ecomseo.co.",
      },
    ],
  },
};

export const termsOfServiceT: Record<Locale, LegalPageContent> = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: March 5, 2026",
    sections: [
      {
        title: "1. Agreement to Terms",
        content:
          "By accessing or using the EcomSEO website (ecomseo.co) and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
      },
      {
        title: "2. Description of Services",
        content:
          "EcomSEO provides ecommerce SEO services, including but not limited to: search engine optimisation, keyword research, content writing, link building, and technical SEO audits. The specific scope of services will be outlined in individual agreements or proposals provided to clients.",
      },
      {
        title: "3. Use of Website",
        content:
          "You may use our website for lawful purposes only. You agree not to: use the website in any way that violates applicable laws or regulations; attempt to gain unauthorised access to any part of the website; use the website to transmit harmful code or malware; reproduce, duplicate, or copy any content from the website without prior written consent; or interfere with the proper functioning of the website.",
      },
      {
        title: "4. Intellectual Property",
        content:
          "All content on this website, including text, graphics, logos, images, and software, is the property of EcomSEO or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content on this website without our express written permission.",
      },
      {
        title: "5. Client Engagements",
        content:
          "Services provided to clients are governed by separate service agreements. These Terms of Service apply to the use of our website and general interactions with EcomSEO. In the event of a conflict between these Terms and a separate service agreement, the service agreement shall prevail.",
      },
      {
        title: "6. Disclaimer of Warranties",
        content:
          "Our website and services are provided on an \"as is\" and \"as available\" basis. EcomSEO makes no warranties, expressed or implied, regarding the website or services, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee specific SEO results, as search engine algorithms and rankings are beyond our control.",
      },
      {
        title: "7. Limitation of Liability",
        content:
          "To the maximum extent permitted by applicable law, EcomSEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our website or services.",
      },
      {
        title: "8. Third-Party Links",
        content:
          "Our website may contain links to third-party websites or services that are not owned or controlled by EcomSEO. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that EcomSEO shall not be responsible or liable for any damage or loss caused by the use of any such content, goods, or services.",
      },
      {
        title: "9. Governing Law",
        content:
          "These Terms of Service shall be governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in the Netherlands.",
      },
      {
        title: "10. Changes to Terms",
        content:
          "We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide notice prior to any new terms taking effect. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.",
      },
      {
        title: "11. Contact Us",
        content:
          "If you have any questions about these Terms of Service, please contact us at info@ecomseo.co.",
      },
    ],
  },
  de: {
    title: "Nutzungsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: 5. Marz 2026",
    sections: [
      {
        title: "1. Zustimmung zu den Bedingungen",
        content:
          "Durch den Zugriff auf oder die Nutzung der EcomSEO-Website (ecomseo.co) und -Dienste erklaren Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie bitte unsere Website oder Dienste nicht.",
      },
      {
        title: "2. Beschreibung der Dienste",
        content:
          "EcomSEO bietet E-Commerce-SEO-Dienste an, einschlie\u00dflich, aber nicht beschrankt auf: Suchmaschinenoptimierung, Keyword-Recherche, Content-Erstellung, Linkaufbau und technische SEO-Audits. Der spezifische Umfang der Dienste wird in individuellen Vereinbarungen oder Angeboten fur Kunden dargelegt.",
      },
      {
        title: "3. Nutzung der Website",
        content:
          "Sie durfen unsere Website nur fur rechtma\u00dfige Zwecke nutzen. Sie verpflichten sich, die Website nicht in einer Weise zu nutzen, die gegen geltende Gesetze oder Vorschriften versto\u00dft; nicht zu versuchen, unbefugten Zugang zu einem Teil der Website zu erlangen; die Website nicht zur Ubertragung von Schadcode oder Malware zu nutzen; Inhalte der Website nicht ohne vorherige schriftliche Zustimmung zu reproduzieren, zu duplizieren oder zu kopieren; und die ordnungsgema\u00dfe Funktion der Website nicht zu beeintrachtigen.",
      },
      {
        title: "4. Geistiges Eigentum",
        content:
          "Alle Inhalte auf dieser Website, einschlie\u00dflich Texte, Grafiken, Logos, Bilder und Software, sind Eigentum von EcomSEO oder seinen Inhalteanbietern und sind durch internationale Urheberrechtsgesetze geschutzt. Sie durfen Inhalte dieser Website ohne unsere ausdruckliche schriftliche Genehmigung nicht reproduzieren, verbreiten oder abgeleitete Werke davon erstellen.",
      },
      {
        title: "5. Kundenauftrage",
        content:
          "Fur Kunden erbrachte Dienste unterliegen separaten Dienstleistungsvereinbarungen. Diese Nutzungsbedingungen gelten fur die Nutzung unserer Website und allgemeine Interaktionen mit EcomSEO. Im Falle eines Widerspruchs zwischen diesen Bedingungen und einer separaten Dienstleistungsvereinbarung hat die Dienstleistungsvereinbarung Vorrang.",
      },
      {
        title: "6. Gewahrleistungsausschluss",
        content:
          "Unsere Website und Dienste werden auf einer \"wie besehen\" und \"wie verfugbar\" Basis bereitgestellt. EcomSEO gibt keine Gewahrleistungen, weder ausdrucklich noch stillschweigend, bezuglich der Website oder Dienste, einschlie\u00dflich, aber nicht beschrankt auf stillschweigende Gewahrleistungen der Handelsublichkeit, Eignung fur einen bestimmten Zweck und Nichtverletzung. Wir garantieren keine spezifischen SEO-Ergebnisse, da Suchmaschinenalgorithmen und Rankings au\u00dferhalb unserer Kontrolle liegen.",
      },
      {
        title: "7. Haftungsbeschrankung",
        content:
          "Soweit nach geltendem Recht zulassig, haftet EcomSEO nicht fur indirekte, zufallige, besondere, Folge- oder Strafschaden oder fur den Verlust von Gewinnen oder Einnahmen, ob direkt oder indirekt entstanden, oder fur den Verlust von Daten, Nutzung, Geschaftswert oder anderen immateriellen Verlusten, die sich aus Ihrer Nutzung unserer Website oder Dienste ergeben.",
      },
      {
        title: "8. Links zu Drittanbietern",
        content:
          "Unsere Website kann Links zu Websites oder Diensten Dritter enthalten, die nicht im Besitz oder unter der Kontrolle von EcomSEO stehen. Wir haben keine Kontrolle uber und ubernehmen keine Verantwortung fur den Inhalt, die Datenschutzrichtlinien oder die Praktiken von Websites oder Diensten Dritter.",
      },
      {
        title: "9. Anwendbares Recht",
        content:
          "Diese Nutzungsbedingungen unterliegen dem Recht der Niederlande und werden in Ubereinstimmung damit ausgelegt. Alle Streitigkeiten aus diesen Bedingungen unterliegen der ausschlie\u00dflichen Gerichtsbarkeit der Gerichte in den Niederlanden.",
      },
      {
        title: "10. Anderungen der Bedingungen",
        content:
          "Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu andern oder zu ersetzen. Wenn eine Anderung wesentlich ist, werden wir vor dem Inkrafttreten neuer Bedingungen eine Benachrichtigung bereitstellen. Indem Sie nach dem Inkrafttreten dieser Anderungen weiterhin auf unsere Website zugreifen oder sie nutzen, erklaren Sie sich mit den geanderten Bedingungen einverstanden.",
      },
      {
        title: "11. Kontakt",
        content:
          "Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter info@ecomseo.co.",
      },
    ],
  },
  fr: {
    title: "Conditions d'Utilisation",
    lastUpdated: "Derniere mise a jour : 5 mars 2026",
    sections: [
      {
        title: "1. Acceptation des conditions",
        content:
          "En accedant ou en utilisant le site web EcomSEO (ecomseo.co) et ses services, vous acceptez d'etre lie par ces Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site web ou nos services.",
      },
      {
        title: "2. Description des services",
        content:
          "EcomSEO fournit des services de SEO e-commerce, y compris, mais sans s'y limiter : l'optimisation pour les moteurs de recherche, la recherche de mots-cles, la redaction de contenu, le link building et les audits SEO techniques. La portee specifique des services sera decrite dans des accords individuels ou des propositions fournies aux clients.",
      },
      {
        title: "3. Utilisation du site web",
        content:
          "Vous ne pouvez utiliser notre site web qu'a des fins legales. Vous acceptez de ne pas : utiliser le site web de maniere contraire aux lois ou reglements applicables ; tenter d'obtenir un acces non autorise a une partie du site web ; utiliser le site web pour transmettre du code malveillant ou des logiciels malveillants ; reproduire, dupliquer ou copier du contenu du site web sans consentement ecrit prealable ; ou interferer avec le bon fonctionnement du site web.",
      },
      {
        title: "4. Propriete intellectuelle",
        content:
          "Tout le contenu de ce site web, y compris les textes, graphiques, logos, images et logiciels, est la propriete d'EcomSEO ou de ses fournisseurs de contenu et est protege par les lois internationales sur le droit d'auteur. Vous ne pouvez pas reproduire, distribuer ou creer des oeuvres derivees du contenu de ce site web sans notre autorisation ecrite expresse.",
      },
      {
        title: "5. Engagements clients",
        content:
          "Les services fournis aux clients sont regis par des accords de service separes. Ces Conditions d'Utilisation s'appliquent a l'utilisation de notre site web et aux interactions generales avec EcomSEO. En cas de conflit entre ces Conditions et un accord de service separe, l'accord de service prevaudra.",
      },
      {
        title: "6. Exclusion de garanties",
        content:
          "Notre site web et nos services sont fournis \"en l'etat\" et \"selon disponibilite\". EcomSEO ne donne aucune garantie, expresse ou implicite, concernant le site web ou les services. Nous ne garantissons pas de resultats SEO specifiques, car les algorithmes des moteurs de recherche et les classements echappent a notre controle.",
      },
      {
        title: "7. Limitation de responsabilite",
        content:
          "Dans la mesure maximale permise par la loi applicable, EcomSEO ne sera pas responsable de tout dommage indirect, accessoire, special, consecutif ou punitif, ou de toute perte de profits ou de revenus, que ce soit directement ou indirectement, resultant de votre utilisation de notre site web ou de nos services.",
      },
      {
        title: "8. Liens vers des tiers",
        content:
          "Notre site web peut contenir des liens vers des sites web ou des services tiers qui ne sont pas detenus ou controles par EcomSEO. Nous n'avons aucun controle sur et n'assumons aucune responsabilite pour le contenu, les politiques de confidentialite ou les pratiques de tout site web ou service tiers.",
      },
      {
        title: "9. Droit applicable",
        content:
          "Ces Conditions d'Utilisation seront regies et interpretees conformement aux lois des Pays-Bas. Tout litige decoulant de ces conditions sera soumis a la competence exclusive des tribunaux des Pays-Bas.",
      },
      {
        title: "10. Modifications des conditions",
        content:
          "Nous nous reservons le droit de modifier ou de remplacer ces Conditions d'Utilisation a tout moment. Si une revision est significative, nous fournirons un avis avant que les nouvelles conditions ne prennent effet. En continuant a acceder ou a utiliser notre site web apres l'entree en vigueur de ces revisions, vous acceptez d'etre lie par les conditions revisees.",
      },
      {
        title: "11. Nous contacter",
        content:
          "Si vous avez des questions concernant ces Conditions d'Utilisation, veuillez nous contacter a info@ecomseo.co.",
      },
    ],
  },
  es: {
    title: "Terminos de Servicio",
    lastUpdated: "Ultima actualizacion: 5 de marzo de 2026",
    sections: [
      {
        title: "1. Aceptacion de los terminos",
        content:
          "Al acceder o utilizar el sitio web de EcomSEO (ecomseo.co) y sus servicios, usted acepta estar sujeto a estos Terminos de Servicio. Si no esta de acuerdo con estos terminos, por favor no utilice nuestro sitio web ni nuestros servicios.",
      },
      {
        title: "2. Descripcion de los servicios",
        content:
          "EcomSEO proporciona servicios de SEO para e-commerce, incluyendo pero no limitado a: optimizacion de motores de busqueda, investigacion de palabras clave, redaccion de contenido, link building y auditorias tecnicas de SEO. El alcance especifico de los servicios se detallara en acuerdos individuales o propuestas proporcionadas a los clientes.",
      },
      {
        title: "3. Uso del sitio web",
        content:
          "Solo puede utilizar nuestro sitio web para fines legales. Usted acepta no: utilizar el sitio web de manera que viole las leyes o regulaciones aplicables; intentar obtener acceso no autorizado a cualquier parte del sitio web; utilizar el sitio web para transmitir codigo danino o malware; reproducir, duplicar o copiar cualquier contenido del sitio web sin consentimiento previo por escrito; o interferir con el funcionamiento adecuado del sitio web.",
      },
      {
        title: "4. Propiedad intelectual",
        content:
          "Todo el contenido de este sitio web, incluyendo texto, graficos, logotipos, imagenes y software, es propiedad de EcomSEO o de sus proveedores de contenido y esta protegido por las leyes internacionales de derechos de autor. No puede reproducir, distribuir ni crear obras derivadas de ningun contenido de este sitio web sin nuestro permiso expreso por escrito.",
      },
      {
        title: "5. Compromisos con clientes",
        content:
          "Los servicios prestados a los clientes se rigen por acuerdos de servicio separados. Estos Terminos de Servicio se aplican al uso de nuestro sitio web y las interacciones generales con EcomSEO. En caso de conflicto entre estos Terminos y un acuerdo de servicio separado, prevalecera el acuerdo de servicio.",
      },
      {
        title: "6. Exencion de garantias",
        content:
          "Nuestro sitio web y servicios se proporcionan \"tal cual\" y \"segun disponibilidad\". EcomSEO no ofrece garantias, expresas o implicitas, con respecto al sitio web o los servicios. No garantizamos resultados especificos de SEO, ya que los algoritmos de los motores de busqueda y las clasificaciones estan fuera de nuestro control.",
      },
      {
        title: "7. Limitacion de responsabilidad",
        content:
          "En la maxima medida permitida por la ley aplicable, EcomSEO no sera responsable de ningun dano indirecto, incidental, especial, consecuente o punitivo, ni de ninguna perdida de beneficios o ingresos, ya sea directa o indirectamente, resultante de su uso de nuestro sitio web o servicios.",
      },
      {
        title: "8. Enlaces a terceros",
        content:
          "Nuestro sitio web puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni estan controlados por EcomSEO. No tenemos control ni asumimos responsabilidad alguna por el contenido, las politicas de privacidad o las practicas de sitios web o servicios de terceros.",
      },
      {
        title: "9. Ley aplicable",
        content:
          "Estos Terminos de Servicio se regiran e interpretaran de acuerdo con las leyes de los Paises Bajos. Cualquier disputa que surja de estos terminos estara sujeta a la jurisdiccion exclusiva de los tribunales de los Paises Bajos.",
      },
      {
        title: "10. Cambios en los terminos",
        content:
          "Nos reservamos el derecho de modificar o reemplazar estos Terminos de Servicio en cualquier momento. Si una revision es significativa, proporcionaremos un aviso antes de que los nuevos terminos entren en vigor. Al continuar accediendo o utilizando nuestro sitio web despues de que esas revisiones entren en vigor, usted acepta estar sujeto a los terminos revisados.",
      },
      {
        title: "11. Contactenos",
        content:
          "Si tiene alguna pregunta sobre estos Terminos de Servicio, contactenos en info@ecomseo.co.",
      },
    ],
  },
  it: {
    title: "Termini di Servizio",
    lastUpdated: "Ultimo aggiornamento: 5 marzo 2026",
    sections: [
      {
        title: "1. Accettazione dei termini",
        content:
          "Accedendo o utilizzando il sito web EcomSEO (ecomseo.co) e i suoi servizi, accettate di essere vincolati da questi Termini di Servizio. Se non accettate questi termini, vi preghiamo di non utilizzare il nostro sito web o i nostri servizi.",
      },
      {
        title: "2. Descrizione dei servizi",
        content:
          "EcomSEO fornisce servizi SEO per e-commerce, inclusi ma non limitati a: ottimizzazione per i motori di ricerca, ricerca di parole chiave, scrittura di contenuti, link building e audit SEO tecnici. L'ambito specifico dei servizi sara delineato in accordi individuali o proposte fornite ai clienti.",
      },
      {
        title: "3. Uso del sito web",
        content:
          "Potete utilizzare il nostro sito web solo per scopi leciti. Accettate di non: utilizzare il sito web in modo contrario alle leggi o ai regolamenti applicabili; tentare di ottenere accesso non autorizzato a qualsiasi parte del sito web; utilizzare il sito web per trasmettere codice dannoso o malware; riprodurre, duplicare o copiare qualsiasi contenuto dal sito web senza previo consenso scritto; o interferire con il corretto funzionamento del sito web.",
      },
      {
        title: "4. Proprieta intellettuale",
        content:
          "Tutto il contenuto di questo sito web, inclusi testo, grafica, loghi, immagini e software, e di proprieta di EcomSEO o dei suoi fornitori di contenuti ed e protetto dalle leggi internazionali sul diritto d'autore. Non potete riprodurre, distribuire o creare opere derivate da qualsiasi contenuto di questo sito web senza il nostro espresso consenso scritto.",
      },
      {
        title: "5. Incarichi clienti",
        content:
          "I servizi forniti ai clienti sono regolati da accordi di servizio separati. Questi Termini di Servizio si applicano all'uso del nostro sito web e alle interazioni generali con EcomSEO. In caso di conflitto tra questi Termini e un accordo di servizio separato, prevalera l'accordo di servizio.",
      },
      {
        title: "6. Esclusione di garanzie",
        content:
          "Il nostro sito web e i nostri servizi sono forniti \"cosi come sono\" e \"come disponibili\". EcomSEO non fornisce garanzie, esplicite o implicite, riguardo al sito web o ai servizi. Non garantiamo risultati SEO specifici, poiche gli algoritmi dei motori di ricerca e le classifiche sono al di fuori del nostro controllo.",
      },
      {
        title: "7. Limitazione di responsabilita",
        content:
          "Nella misura massima consentita dalla legge applicabile, EcomSEO non sara responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi, o per qualsiasi perdita di profitti o ricavi, sia diretti che indiretti, derivanti dall'uso del nostro sito web o dei nostri servizi.",
      },
      {
        title: "8. Link a terze parti",
        content:
          "Il nostro sito web puo contenere link a siti web o servizi di terze parti che non sono di proprieta o controllati da EcomSEO. Non abbiamo alcun controllo e non ci assumiamo alcuna responsabilita per il contenuto, le politiche sulla privacy o le pratiche di qualsiasi sito web o servizio di terze parti.",
      },
      {
        title: "9. Legge applicabile",
        content:
          "Questi Termini di Servizio saranno regolati e interpretati in conformita con le leggi dei Paesi Bassi. Qualsiasi controversia derivante da questi termini sara soggetta alla giurisdizione esclusiva dei tribunali dei Paesi Bassi.",
      },
      {
        title: "10. Modifiche ai termini",
        content:
          "Ci riserviamo il diritto di modificare o sostituire questi Termini di Servizio in qualsiasi momento. Se una revisione e significativa, forniremo un avviso prima che i nuovi termini entrino in vigore. Continuando ad accedere o utilizzare il nostro sito web dopo l'entrata in vigore di tali revisioni, accettate di essere vincolati dai termini rivisti.",
      },
      {
        title: "11. Contattaci",
        content:
          "Se avete domande su questi Termini di Servizio, contattateci all'indirizzo info@ecomseo.co.",
      },
    ],
  },
  nl: {
    title: "Algemene Voorwaarden",
    lastUpdated: "Laatst bijgewerkt: 5 maart 2026",
    sections: [
      {
        title: "1. Aanvaarding van de voorwaarden",
        content:
          "Door de EcomSEO-website (ecomseo.co) en diensten te bezoeken of te gebruiken, stemt u ermee in gebonden te zijn aan deze Algemene Voorwaarden. Als u niet akkoord gaat met deze voorwaarden, maak dan geen gebruik van onze website of diensten.",
      },
      {
        title: "2. Beschrijving van diensten",
        content:
          "EcomSEO biedt e-commerce SEO-diensten aan, waaronder maar niet beperkt tot: zoekmachineoptimalisatie, zoekwoordenonderzoek, content schrijven, linkbuilding en technische SEO-audits. De specifieke omvang van de diensten wordt beschreven in individuele overeenkomsten of voorstellen die aan klanten worden verstrekt.",
      },
      {
        title: "3. Gebruik van de website",
        content:
          "U mag onze website alleen voor wettige doeleinden gebruiken. U stemt ermee in om: de website niet te gebruiken op een manier die in strijd is met toepasselijke wet- en regelgeving; niet te proberen ongeautoriseerde toegang te krijgen tot enig deel van de website; de website niet te gebruiken om schadelijke code of malware te verzenden; inhoud van de website niet te reproduceren, dupliceren of kopieren zonder voorafgaande schriftelijke toestemming; en het goed functioneren van de website niet te verstoren.",
      },
      {
        title: "4. Intellectueel eigendom",
        content:
          "Alle inhoud op deze website, inclusief tekst, afbeeldingen, logo's, beelden en software, is eigendom van EcomSEO of haar contentleveranciers en wordt beschermd door internationale auteursrechtwetten. U mag geen inhoud van deze website reproduceren, distribueren of afgeleide werken ervan maken zonder onze uitdrukkelijke schriftelijke toestemming.",
      },
      {
        title: "5. Klantovereenkomsten",
        content:
          "Diensten die aan klanten worden geleverd, worden beheerst door afzonderlijke dienstverleningsovereenkomsten. Deze Algemene Voorwaarden zijn van toepassing op het gebruik van onze website en algemene interacties met EcomSEO. In geval van strijdigheid tussen deze Voorwaarden en een afzonderlijke dienstverleningsovereenkomst, prevaleert de dienstverleningsovereenkomst.",
      },
      {
        title: "6. Uitsluiting van garanties",
        content:
          "Onze website en diensten worden geleverd op basis van \"zoals het is\" en \"zoals beschikbaar\". EcomSEO geeft geen garanties, uitdrukkelijk of impliciet, met betrekking tot de website of diensten. Wij garanderen geen specifieke SEO-resultaten, aangezien zoekmachinealgoritmen en rankings buiten onze controle liggen.",
      },
      {
        title: "7. Beperking van aansprakelijkheid",
        content:
          "Voor zover maximaal toegestaan door toepasselijk recht, is EcomSEO niet aansprakelijk voor indirecte, incidentele, speciale, gevolg- of punitieve schade, of enig verlies van winst of inkomsten, hetzij direct of indirect, voortvloeiend uit uw gebruik van onze website of diensten.",
      },
      {
        title: "8. Links naar derden",
        content:
          "Onze website kan links bevatten naar websites of diensten van derden die niet eigendom zijn van of worden beheerd door EcomSEO. Wij hebben geen controle over en aanvaarden geen verantwoordelijkheid voor de inhoud, het privacybeleid of de praktijken van websites of diensten van derden.",
      },
      {
        title: "9. Toepasselijk recht",
        content:
          "Deze Algemene Voorwaarden worden beheerst door en geinterpreteerd in overeenstemming met het recht van Nederland. Alle geschillen die voortvloeien uit deze voorwaarden zijn onderworpen aan de exclusieve jurisdictie van de rechtbanken in Nederland.",
      },
      {
        title: "10. Wijzigingen in de voorwaarden",
        content:
          "Wij behouden ons het recht voor om deze Algemene Voorwaarden op elk moment te wijzigen of te vervangen. Als een wijziging materieel is, zullen wij een kennisgeving verstrekken voordat nieuwe voorwaarden van kracht worden. Door onze website te blijven bezoeken of gebruiken nadat die wijzigingen van kracht worden, stemt u ermee in gebonden te zijn aan de herziene voorwaarden.",
      },
      {
        title: "11. Contact opnemen",
        content:
          "Als u vragen heeft over deze Algemene Voorwaarden, neem dan contact met ons op via info@ecomseo.co.",
      },
    ],
  },
};
