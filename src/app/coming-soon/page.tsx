import { Metadata } from "next";
import ComingSoonView from "@/components/ComingSoonView";

export const metadata: Metadata = {
  title: "Coming Soon | Creatathon 2026",
  description: "Exciting creator features are launching soon at Creatathon 2026 in Kochi.",
};

export default async function ComingSoonPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const resolvedParams = await searchParams;
  const initialTab = resolvedParams?.tab || "CREATE";
  return <ComingSoonView initialTab={initialTab} />;
}
