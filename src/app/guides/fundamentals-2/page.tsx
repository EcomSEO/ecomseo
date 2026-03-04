import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SEO Fundamentals Continued | EcomSEO Guides",
};

export default function Fundamentals2Page() {
  redirect("/guides/fundamentals");
}
