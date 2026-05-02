import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import LegalPageClient from "@/components/sections/LegalPageClient";

export const dynamic = 'force-static';


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/privacy-policy", {
    robots: { index: false, follow: true },
  });
}

export default function PrivacyPolicyPage() {
  return <LegalPageClient page="privacy" />;
}
