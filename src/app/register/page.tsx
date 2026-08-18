"use client";

import React, { useState } from "react";
import TopBanner from "@/components/TopBanner";
import RegisterHero from "@/components/register/RegisterHero";
import RegisterReachSection from "@/components/register/RegisterReachSection";
import RegisterCreatorCard from "@/components/register/RegisterCreatorCard";
import RegisterBrandCard from "@/components/register/RegisterBrandCard";
import RegisterFormSection from "@/components/register/RegisterFormSection";
import RegisterQuoteSection from "@/components/register/RegisterQuoteSection";
import SiteFooter from "@/components/SiteFooter";

export default function RegisterPage() {
  const [selectedTab, setSelectedTab] = useState<"influencer" | "brand">("influencer");

  const handleHeroSelectTab = (tab: "influencer" | "brand") => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full min-h-screen bg-[#FDF9EB] flex flex-col items-center">
      {/* Canonical Mobile Frame Container */}
      <main className="w-full max-w-[402px] md:max-w-none min-h-screen bg-[#FDF9EB] shadow-2xl md:shadow-none border-x border-black/15 md:border-x-0 relative flex flex-col mx-auto overflow-x-hidden">
        {/* 1. Header with Red/Pink Announcement & Yellow Logo */}
        <TopBanner />

        {/* 2. Hero / Introduction Section ("BE PART OF THE STORY") */}
        <RegisterHero onSelectTab={handleHeroSelectTab} />

        {/* 4. "WHERE BRAND MEET REAL REACH" Section with 4 Rotated Cards */}
        <RegisterReachSection />

        {/* 5 & 6. Cream Editorial Cards Section ("FOR CREATORS" & "FOR BRAND") */}
        <section className="w-full bg-[#FDF9EB] py-14 px-4 sm:px-5 flex flex-col items-center gap-10 overflow-hidden">
          {/* 5. For Creators (Pink Card, -1 deg) */}
          <RegisterCreatorCard />

          {/* 6. For Brand (Yellow Card, +1 deg) */}
          <RegisterBrandCard />
        </section>

        {/* 7. Registration Form Section (Electric Blue with White Form Card) */}
        <RegisterFormSection
          activeTab={selectedTab}
          onTabChange={setSelectedTab}
        />

        {/* 8. Bottom Quote / CTA Section (Pink with Tilted Quote Card & Shapes) */}
        <RegisterQuoteSection />

        {/* 9. Blue Legal Footer */}
        <SiteFooter />
      </main>
    </div>
  );
}
