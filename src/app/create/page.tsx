import { Metadata } from "next";
import ComingSoonView from "@/components/ComingSoonView";

export const metadata: Metadata = {
  title: "Create | Creatathon 2026",
  description: "Showcase your creator portfolio, pitch to brands, and submit challenge entries at Creatathon 2026.",
};

export default function CreatePage() {
  return <ComingSoonView initialTab="CREATE" />;
}
