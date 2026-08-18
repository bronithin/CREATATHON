import { Metadata } from "next";
import ComingSoonView from "@/components/ComingSoonView";

export const metadata: Metadata = {
  title: "Ranks | Creatathon 2026",
  description: "Discover Kerala's top creators, community leaderboards, and the Creatathon Creator Awards 2026.",
};

export default function RanksPage() {
  return <ComingSoonView initialTab="RANKS" />;
}
