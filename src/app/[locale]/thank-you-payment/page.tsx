import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import ThankYouPaymentPage from "./ThankYouClient";

export const dynamic = 'force-static';


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/thank-you-payment");
}

export default function ThankYouPage() {
  return <ThankYouPaymentPage />;
}
