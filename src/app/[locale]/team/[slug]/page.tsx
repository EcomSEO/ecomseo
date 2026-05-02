import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamMemberPage from "./TeamMemberPage";
import { generateAlternates } from "@/lib/i18n/metadata";
import { type Locale, ogLocaleMap, BASE_URL, publicLocalizedUrl } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { personJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";
import { teamMemberI18n } from "@/lib/i18n/translations/teamMemberData";

export const revalidate = 86400;

/** Get locale-aware member data by merging base data with translations */
function getLocalizedMember(slug: string, locale: Locale) {
  const base = teamMembers[slug];
  if (!base) return null;
  const i18n = teamMemberI18n[slug]?.[locale] || teamMemberI18n[slug]?.en;
  if (!i18n) return base;
  const cta = { ...base.cta };
  if (cta.primary && i18n.ctaPrimary) {
    cta.primary = { ...cta.primary, label: i18n.ctaPrimary };
  }
  if (cta.secondary && i18n.ctaSecondary) {
    cta.secondary = { ...cta.secondary, label: i18n.ctaSecondary };
  }
  return {
    ...base,
    role: i18n.role,
    tagline: i18n.tagline,
    bio: i18n.bio,
    skills: i18n.skills,
    interests: i18n.interests,
    cta,
  };
}


interface TeamMember {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
  bio: string;
  skills: string[];
  interests: string[];
  cta: {
    primary: { label: string; href: string; icon: "phone" | "mail" };
    secondary?: { label: string; href: string };
  };
  socials: { platform: string; href: string }[];
  youtubeVideo?: string;
}

const teamMembers: Record<string, TeamMember> = {
  "fabian-van-til": {
    slug: "fabian-van-til",
    name: "Fabian van Til",
    role: "Strategy & Innovation",
    tagline:
      "A Passionate Entrepreneur, specialising in ecommerce marketing.",
    image:
      "/images/framer/fabian-van-til-new.jpeg",
    bio: "Fabian entered the e-commerce space in 2020. Two years later he and a partner launched a Google-marketing agency, which they swiftly refocused into an SEO firm. After selling his stake to his co-founder, Fabian doubled down on e-commerce. In 2024 he and his brother introduced their own brand and co-founded EcomSEO, an agency dedicated to shattering the norms of traditional marketing through transparent, results-oriented partnerships.",
    skills: [
      "Intent Matching",
      "Branding",
      "Systems / AI",
      "UX / UI",
      "Analytics",
      "Content Strategy",
    ],
    interests: ["Chess", "Music", "Tech", "Fitness", "Travel", "Philosophy"],
    cta: {
      primary: {
        label: "Whatsapp",
        href: "https://wa.link/2ls6pk",
        icon: "phone",
      },
      secondary: {
        label: "Book 30 min",
        href: "https://cal.com/fabianvantil/30min",
      },
    },
    socials: [
      {
        platform: "YouTube",
        href: "https://www.youtube.com/@fabian-ecomseo",
      },
      { platform: "X", href: "https://x.com/fabianecomseo" },
      {
        platform: "Instagram",
        href: "https://www.instagram.com/fabianvantil/",
      },
    ],
    // youtubeVideo: "https://www.youtube.com/embed/_3vIp9O6-EM",
  },
  "martinijan-trajkovski": {
    slug: "martinijan-trajkovski",
    name: "Martinijan Trajkovski",
    role: "Off-Page Wizard",
    tagline:
      "A Passionate Entrepreneur, specialising in ecommerce marketing.",
    image:
      "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
    bio: "Martinijan Trajkovski is a data-driven SEO strategist with 9+ years of experience - four dedicated to skyrocketing ecommerce brands. Since joining EcomSEO in 2023, he\u2019s fused deep market research, competitor intel, white-hat link building, affiliate growth and digital PR to turn organic search into profit. Away from the SERPs he\u2019s usually devouring marketing books, lifting at the gym or chasing drop-shots on the tennis court.",
    skills: [
      "Market Research",
      "Branding",
      "Link Building",
      "Competitor Intelligence",
      "Affiliate Marketing",
      "Digital PR",
    ],
    interests: [
      "Travel",
      "Music",
      "PlayStation",
      "Indefatigable",
      "Football",
      "Skiing",
    ],
    cta: {
      primary: {
        label: "Whatsapp",
        href: "https://wa.link/2ls6pk",
        icon: "phone",
      },
      secondary: {
        label: "Book 30 min",
        href: "https://cal.com/fabianvantil/30min",
      },
    },
    socials: [
      {
        platform: "YouTube",
        href: "https://www.youtube.com/@fabian-ecomseo",
      },
      {
        platform: "LinkedIn",
        href: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
      },
      { platform: "X", href: "https://x.com/til_fabian" },
      {
        platform: "Instagram",
        href: "https://www.instagram.com/makitajto/",
      },
    ],
  },
  "dimitar-georgiev": {
    slug: "dimitar-georgiev",
    name: "Dimitar Georgiev",
    role: "Technical Jedi",
    tagline:
      "SEO specialist focused on eCommerce, with over 5 years of experience.",
    image:
      "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
    bio: "Dimitar joined EcomSEO in 2024, bringing over five years of hands-on experience in SEO for both e-commerce and affiliate websites. With a strong foundation in on-page optimization, technical audits, content strategy, and off-page SEO, he plays a key role in driving client growth through sustainable rankings and targeted traffic. Dimitar\u2019s approach combines precision with creativity, helping brands stand out in competitive niches. Outside of work, he\u2019s committed to the gym and enjoys traveling to new destinations - always seeking the next challenge, both in fitness and digital marketing.",
    skills: [
      "Keyword Research",
      "Off-page SEO",
      "Technical SEO",
      "UX / UI",
      "Analytics",
      "Content Strategy",
    ],
    interests: [
      "Travel",
      "Music",
      "PlayStation",
      "Reading",
      "Cars",
      "Fitness",
    ],
    cta: {
      primary: {
        label: "Whatsapp",
        href: "https://api.whatsapp.com/send/?phone=359877023314&text&type=phone_number&app_absent=0",
        icon: "phone",
      },
    },
    socials: [
      {
        platform: "LinkedIn",
        href: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
      },
      {
        platform: "Instagram",
        href: "https://www.instagram.com/dimitar_georgiev23",
      },
    ],
  },
  "gjorgi-jovev": {
    slug: "gjorgi-jovev",
    name: "Gjorgi Jovev",
    role: "On-Page & PR Maestro",
    tagline:
      "An SEO Expert, specialising in e-commerce growth and visibility.",
    image:
      "/images/framer/gjorgi-jovev.png",
    bio: "Gjorgi entered the e-commerce space in 2022. With a background in digital marketing, he quickly carved out a niche in SEO, focusing on performance-driven strategies for online stores. Over the next two years, he honed his skills in technical SEO, content optimization, keyword strategy, and high-quality backlink building. Known for his tenacity and results-first mindset, Gjorgi continues to help businesses scale through transparent, data-led SEO.",
    skills: [
      "Link Building",
      "Keyword Research",
      "AI",
      "E-commerce SEO",
      "Analytics",
      "Content Strategy",
    ],
    interests: [
      "Travel",
      "Music",
      "PlayStation",
      "Indefatigable",
      "Art",
      "Skiing",
    ],
    cta: {
      primary: {
        label: "E-Mail",
        href: "mailto:gjorgi@ecomseo.co",
        icon: "mail",
      },
    },
    socials: [
      {
        platform: "LinkedIn",
        href: "https://www.linkedin.com/in/gjorgi-jovev/",
      },
      { platform: "X", href: "https://x.com/beneshhh" },
      {
        platform: "Instagram",
        href: "https://www.instagram.com/gjorgibenes/",
      },
    ],
  },
};

const allSlugs = Object.keys(teamMembers);

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const member = getLocalizedMember(slug, locale as Locale);
  if (!member) return {};

  return {
    title: `${member.name} - ${member.role} | EcomSEO`,
    description: member.tagline,
    alternates: generateAlternates(`/team/${slug}`, locale as Locale),
    openGraph: {
      title: `${member.name} - ${member.role} | EcomSEO`,
      description: member.tagline,
      url: publicLocalizedUrl(locale as Locale, `/team/${slug}`),
      siteName: "EcomSEO",
      type: "profile",
      images: [
        {
          url: `${BASE_URL}${member.image}`,
          width: 400,
          height: 400,
          alt: member.name,
        },
      ],
      locale: ogLocaleMap[locale as Locale] || "en_GB",
    },
    twitter: {
      card: "summary",
      site: "@ecomseo_co",
      title: `${member.name} - ${member.role} | EcomSEO`,
      description: member.tagline,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const member = getLocalizedMember(slug, locale as Locale);
  if (!member) notFound();

  return (
    <>
      <JsonLd
        data={personJsonLd({
          name: member.name,
          jobTitle: member.role,
          description: member.tagline,
          url: publicLocalizedUrl(locale as Locale, `/team/${slug}`),
          image: member.image,
          sameAs: member.socials.map((s) => s.href),
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
          { name: member.name, path: `/team/${slug}` },
        ])}
      />
      {member.youtubeVideo && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "$10k a day in Dutch market with eCom - Daniel & Fabian Van Til",
            description: "Fabian van Til, CEO of EcomSEO, shares how he built a successful ecommerce brand and SEO agency in the Dutch market. Featured on Alex Fedotoff's podcast.",
            thumbnailUrl: "https://i.ytimg.com/vi/_3vIp9O6-EM/maxresdefault.jpg",
            uploadDate: "2024-11-15",
            contentUrl: "https://www.youtube.com/watch?v=_3vIp9O6-EM",
            embedUrl: member.youtubeVideo,
            duration: "PT1H1M41S",
            interactionStatistic: {
              "@type": "InteractionCounter",
              interactionType: { "@type": "WatchAction" },
              userInteractionCount: 5000,
            },
            publisher: {
              "@type": "Organization",
              name: "Alex Fedotoff",
              logo: {
                "@type": "ImageObject",
                url: "https://yt3.googleusercontent.com/ytc/AIdro_kQx1",
              },
            },
          }}
        />
      )}
      <TeamMemberPage member={member} />
    </>
  );
}
