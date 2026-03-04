import { redirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, "/guides/fundamentals-2");
}

export default async function Fundamentals2Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect("/guides/fundamentals");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale as Locale, [
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "Fundamentals Part 2", path: "/guides/fundamentals-2" },
      ])} />
    </>
  );
}
