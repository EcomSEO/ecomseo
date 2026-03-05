import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import LegalPageClient from "@/components/sections/LegalPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/terms-of-service");
}

export default function TermsOfServicePage() {
  return <LegalPageClient page="terms" />;
}
