import React from "react";
import SplashScreen from "@/components/SplashScreen";
import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StickerRibbon from "@/components/StickerRibbon";
import WhatsInSection from "@/components/WhatsInSection";
import MoreThanFestival from "@/components/MoreThanFestival";
import DaysOverview from "@/components/DaysOverview";
import BelongSection from "@/components/BelongSection";
import EcosystemSection from "@/components/EcosystemSection";
import WhatHappensSection from "@/components/WhatHappensSection";
import FeatureCards from "@/components/FeatureCards";
import CommunityFooter from "@/components/CommunityFooter";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      {/* 0. Animated Splash Screen */}
      <SplashScreen />

      <main className="w-[402px] max-w-[402px] min-h-screen bg-[#FDF9EB] shadow-2xl border-x border-black/15 relative flex flex-col mx-auto overflow-x-hidden">
        {/* 1. Header with Red Announcement & Yellow Logo */}
        <TopBanner />

      {/* 2. Hero Section (Blue with "KERALA'S BIGGEST CREATOR FESTIVAL IN KOCHI.") */}
      <HeroSection />

      {/* 3. Pink About Section ("Creatathon is a creator-focused festival") */}
      <AboutSection />

      {/* 4. Multi-color Sticker Ribbon */}
      <StickerRibbon />

      {/* 5. Blue "WHAT'S IN CREATATHON" Section with tilted badges */}
      <WhatsInSection />

      {/* 6. Cream "MORE THAN A FESTIVAL" Section with yellow blob & vector illustration */}
      <MoreThanFestival />

      {/* 7. Yellow "CREATATHON 2026 / 2 DAYS OF" Section with pill badges */}
      <DaysOverview />

      {/* 8. Yellow "IF YOU'RE PART OF THE CREATOR ECOSYSTEM" Section with tiles */}
      <EcosystemSection />

      {/* 9. Yellow "THIS IS WHERE YOU BELONG" Section with green flower and pink wave */}
      <BelongSection />

      {/* 9. Pink "WHAT HAPPENS AT CREATATHON?" Section with 5 scalloped organic flower buttons */}
      <WhatHappensSection />

      {/* 10. 5 Color-Coded Content Cards (Yellow, Red, Blue, Green, Gold) */}
      <FeatureCards />

      {/* 11. Blue Community Footer */}
      <CommunityFooter />

      {/* 12. Fixed Bottom Dock Navigation */}
      <BottomNav />
    </main>
    </>
  );
}
