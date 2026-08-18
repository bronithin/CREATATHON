import { Metadata } from "next";
import ComingSoonView from "@/components/ComingSoonView";

export const metadata: Metadata = {
  title: "Wallet | Creatathon 2026",
  description: "Your digital festival access pass, perks, and collectibles for Creatathon 2026 in Kochi.",
};

export default function WalletPage() {
  return <ComingSoonView initialTab="WALLET" />;
}
