"use client";

import React from "react";
import { HeroPinkFlower } from "./RegisterShapes";

interface RegisterHeroProps {
  onSelectTab?: (tab: "influencer" | "brand") => void;
}

export default function RegisterHero({ onSelectTab }: RegisterHeroProps) {
  const handleScrollToForm = (tab: "influencer" | "brand") => {
    if (onSelectTab) {
      onSelectTab(tab);
    }
    const formElement = document.getElementById("registration-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FDF9EB] pt-9 pb-12 px-6 relative overflow-hidden flex flex-col items-center">
      {/* Decorative Top-Right Pink Flower */}
      <div className="absolute top-3 right-3 sm:right-4 pointer-events-none select-none z-0">
        <HeroPinkFlower className="w-[142px] h-[142px]" />
      </div>

      <div className="w-full max-w-[354px] relative z-10 flex flex-col">
        {/* Title Blocks */}
        <div className="flex flex-col items-start gap-0 select-none">
          {/* BE PART OF (Blue Box) */}
          <div className="bg-[#0054D7] px-4 py-2 inline-flex items-center justify-center">
            <h1 className="font-anton text-[36px] sm:text-[38px] leading-[1.0] tracking-tight uppercase text-[#FDF9EB] m-0">
              BE PART OF
            </h1>
          </div>

          {/* THE STORY (Yellow Box) */}
          <div className="bg-[#FCD60B] px-4 py-2 inline-flex items-center justify-center -mt-[1px]">
            <span className="font-anton text-[36px] sm:text-[38px] leading-[1.0] tracking-tight uppercase text-[#FB0148]">
              THE STORY
            </span>
          </div>
        </div>

        {/* Introduction Paragraph */}
        <p
          className="mt-5 text-[#18181B] max-w-[340px]"
          style={{
            fontFamily: "Halenoir, var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "19px",
            lineHeight: "120%",
            letterSpacing: "-1px",
            verticalAlign: "middle",
          }}
        >
          Creatathon brings brands, creators, and communities into one room. Register as a brand or influencer and be where the creator economy is happening.
        </p>

        {/* Two Pill CTA Buttons */}
        <div className="flex flex-col gap-4 mt-8 w-full select-none">
          {/* Button 1: REGISTER AS INFLUENCER */}
          <button
            type="button"
            onClick={() => handleScrollToForm("influencer")}
            className="w-full h-[57px] bg-[#FFD300] border-[2px] border-[#FF0052] rounded-full shadow-[0px_5px_0px_#FF0052] flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0px_1px_0px_#FF0052]"
            aria-label="Register as Influencer"
          >
            <span className="font-anton text-[23px] sm:text-[24px] text-[#FF0052] uppercase tracking-wide leading-none pt-0.5">
              REGISTER AS INFLUENCER
            </span>
          </button>

          {/* Button 2: REGISTER AS BRAND */}
          <button
            type="button"
            onClick={() => handleScrollToForm("brand")}
            className="w-full h-[57px] bg-[#FDF9EB] border-[2px] border-[#0054D9] rounded-full shadow-[0px_5px_0px_#0054D9] flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0px_1px_0px_#0054D9]"
            aria-label="Register as Brand"
          >
            <span className="font-anton text-[23px] sm:text-[24px] text-[#0054D9] uppercase tracking-wide leading-none pt-0.5">
              REGISTER AS BRAND
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
