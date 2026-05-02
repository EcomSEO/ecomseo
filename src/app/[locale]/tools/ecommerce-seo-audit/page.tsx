import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";
import GlowEffect from "@/components/ui/GlowEffect";
import SeoAuditClient from "@/components/tools/SeoAuditClient";
import ToolPreviewSection from "@/components/tools/ToolPreviewSection";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import { ecommerceSeoAuditT } from "@/lib/i18n/translations/seoTools";
import LocaleLink from "@/components/ui/LocaleLink";

export const revalidate = 3600;

/* ---- Locale strings for the "What you'll see" preview section ---- */
const previewStrings: Record<Locale, { badge: string; title: string; subtitle: string; alt: string; bullets: string[] }> = {
  en: {
    badge: "WHAT YOU'LL SEE",
    title: "A full SEO report in under 30 seconds",
    subtitle: "We analyse 39+ checks across 7 categories and surface exactly what's hurting your rankings, with an overall score, grade, and a clear prioritised fix list.",
    alt: "Ecommerce SEO Audit results: overall score, grade, passed/warning/critical counters and category-by-category checks",
    bullets: [
      "Overall score + letter grade (A–F)",
      "Passed, warning, and critical counts at a glance",
      "39+ checks across Meta, Content, Technical, Speed, Schema, Mobile",
      "Exportable as CSV, PDF, or copy/paste to share with your dev team",
    ],
  },
  de: {
    badge: "DAS ERWARTET SIE",
    title: "Ein kompletter SEO-Report in unter 30 Sekunden",
    subtitle: "Wir prüfen 39+ Checks in 7 Kategorien und zeigen genau, was Ihre Rankings bremst, mit Gesamtscore, Note und priorisierter Fix-Liste.",
    alt: "Ecommerce SEO Audit Ergebnisse: Gesamtscore, Note, Zähler für Passed/Warning/Critical und Checks pro Kategorie",
    bullets: [
      "Gesamtscore + Note (A–F)",
      "Passed-, Warning- und Critical-Zähler auf einen Blick",
      "39+ Checks in Meta, Content, Technisch, Speed, Schema, Mobile",
      "Export als CSV, PDF oder Copy/Paste zum Teilen mit dem Dev-Team",
    ],
  },
  fr: {
    badge: "CE QUE VOUS VERREZ",
    title: "Un rapport SEO complet en moins de 30 secondes",
    subtitle: "Nous analysons 39+ points de contrôle dans 7 catégories et identifions ce qui freine votre référencement, avec un score global, une note et une liste de corrections priorisées.",
    alt: "Résultats de l'audit SEO e-commerce : score global, note, compteurs passed/warning/critical et vérifications par catégorie",
    bullets: [
      "Score global + note (A–F)",
      "Compteurs Passed, Warning et Critical d'un coup d'œil",
      "39+ vérifications : Meta, Contenu, Technique, Vitesse, Schema, Mobile",
      "Export CSV, PDF ou copier-coller pour partager avec votre équipe dev",
    ],
  },
  es: {
    badge: "LO QUE VERÁS",
    title: "Un informe SEO completo en menos de 30 segundos",
    subtitle: "Analizamos 39+ comprobaciones en 7 categorías y mostramos exactamente qué está frenando tus rankings, con puntuación global, nota y lista de correcciones priorizadas.",
    alt: "Resultados de la auditoría SEO e-commerce: puntuación global, nota, contadores passed/warning/critical y comprobaciones por categoría",
    bullets: [
      "Puntuación global + nota (A–F)",
      "Contadores Passed, Warning y Critical de un vistazo",
      "39+ comprobaciones: Meta, Contenido, Técnico, Velocidad, Schema, Mobile",
      "Exportable como CSV, PDF o copiar/pegar para compartir con tu equipo dev",
    ],
  },
  it: {
    badge: "COSA VEDRAI",
    title: "Un report SEO completo in meno di 30 secondi",
    subtitle: "Analizziamo 39+ controlli in 7 categorie e mostriamo esattamente cosa sta frenando il tuo posizionamento, con punteggio complessivo, voto e lista di fix prioritizzati.",
    alt: "Risultati audit SEO e-commerce: punteggio complessivo, voto, contatori passed/warning/critical e controlli per categoria",
    bullets: [
      "Punteggio complessivo + voto (A–F)",
      "Contatori Passed, Warning e Critical a colpo d'occhio",
      "39+ controlli: Meta, Contenuti, Tecnico, Velocità, Schema, Mobile",
      "Esportabile come CSV, PDF o copia/incolla per il tuo team dev",
    ],
  },
  nl: {
    badge: "DIT GA JE ZIEN",
    title: "Een compleet SEO-rapport in minder dan 30 seconden",
    subtitle: "We analyseren 39+ checks in 7 categorieën en laten precies zien wat je rankings tegenhoudt, met totaalscore, cijfer en een duidelijke prioriteitenlijst.",
    alt: "Ecommerce SEO Audit resultaten: totaalscore, cijfer, passed/warning/critical tellers en checks per categorie",
    bullets: [
      "Totaalscore + cijfer (A–F)",
      "Passed, Warning en Critical tellers in één oogopslag",
      "39+ checks: Meta, Content, Technisch, Snelheid, Schema, Mobiel",
      "Exporteerbaar als CSV, PDF of copy/paste voor je dev-team",
    ],
  },
};


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/tools/ecommerce-seo-audit");
}

export default async function EcommerceSeoAuditPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = ecommerceSeoAuditT[locale as Locale];
  const p = previewStrings[locale as Locale] || previewStrings.en;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        {/* Hero + Tool */}
        <section className="relative overflow-hidden px-5 md:px-16 pt-[120px] md:pt-[160px] pb-20">
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
            <Badge text={t.badge} />
            <div className="space-y-4 max-w-[700px]">
              <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading">
                {t.heading}
              </h1>
              <p className="text-body text-lg max-w-[540px] mx-auto">
                {t.subtitle}
              </p>
            </div>

            <SeoAuditClient t={t} />
          </div>

          {/* Glow */}
          <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none">
            <GlowEffect
              color="rgba(123, 45, 233, 0.4)"
              duration={8}
              blurRadius={40}
              borderRadius={500}
            />
          </div>
        </section>

        {/* Features */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[900px] mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              {t.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 rounded-xl border border-border bg-bg-card"
                >
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-body-strong">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[26px] md:text-[32px] font-medium text-heading text-center mb-12">
              {t.howItWorksTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.howItWorksSteps.map((step, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto">
                    <span className="text-accent font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="text-base font-medium text-heading">{step.title}</h3>
                  <p className="text-sm text-body">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview: what the audit results look like */}
        <ToolPreviewSection
          src="/images/tools/ecommerce-seo-audit-preview.png"
          imgWidth={1380}
          imgHeight={2352}
          url="ecomseo.co/tools/ecommerce-seo-audit"
          strings={p}
        />

        {/* FAQ */}
        <section className="px-5 md:px-16 py-20 border-t border-border">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-[26px] md:text-[32px] font-medium text-heading text-center mb-12">
              {t.faqTitle}
            </h2>
            <div className="space-y-4">
              {t.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border bg-bg-card p-6">
                  <h3 className="text-sm font-medium text-heading mb-2">{faq.q}</h3>
                  <p className="text-sm text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="px-5 md:px-16 py-16 border-t border-border">
          <div className="max-w-[700px] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Also try</p>
            <LocaleLink
              href="/tools/shopify-seo-audit"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary-hover transition-colors"
            >
              Shopify SEO Audit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LocaleLink>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
