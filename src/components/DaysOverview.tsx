import React from "react";
import Image from "next/image";

export default function DaysOverview() {
  return (
    <section className="relative w-[402px] bg-[#FFD200] text-[#18181B] pt-[26px] pb-[16px] px-[20px] select-none">
      {/* Left Margin Pink Star Decorator straddling top edge boundary */}
      <div className="absolute -top-[22px] left-0 z-20 pointer-events-none">
        <Image
          src="/elements/star-pink.svg"
          alt="Pink Star Decorator"
          width={38}
          height={68}
          className="w-[38px] h-[68px] object-contain block"
        />
      </div>
      {/* Title Header */}
      <div className="flex flex-col items-center text-center mb-[18px]">
        <h2 className="font-display text-[36px] font-black tracking-tight text-[#FB024B] uppercase leading-none mb-[10px]">
          CREATATHON 2026
        </h2>
        {/* 2 DAYS OF Sticker Box (164.6x53) */}
        <div
          className="w-[165px] h-[53px] bg-[#FDF9EB] text-[#0149E7] border-2 border-black flex items-center justify-center shadow-box-md"
          style={{ transform: "rotate(-1deg)" }}
        >
          <span className="font-display text-[22px] font-black tracking-wider uppercase">
            2 DAYS OF
          </span>
        </div>
      </div>

      {/* 6 Tilted Pill Badges Matching Reference Coordinates and Shapes */}
      <div className="relative w-full h-[175px] my-[6px]">
        {/* Pill 1: CREATOR STAGE (189x45, rot -4.62deg) */}
        <div
          className="absolute left-[14px] top-[4px] w-[189px] h-[45px] rounded-full bg-[#0149E7] text-[#FFD200] flex items-center justify-center border border-black/30 select-none"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "45px",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
            transform: "rotate(-4.62deg)",
          }}
        >
          conversations
        </div>

        {/* Pill 2: LEARN & MASTER (163x45, rot 0deg) */}
        <div
          className="absolute right-[14px] top-[0px] w-[163px] h-[45px] rounded-full bg-[#00D890] text-[#0149E7] flex items-center justify-center border border-black/30 select-none"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "45px",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          experiences
        </div>

        {/* Pill 3: BRAND EXPO (187x45, rot 6.04deg) */}
        <div
          className="absolute right-[14px] top-[42px] w-[187px] h-[45px] rounded-full bg-[#FF0052] text-[#F6D202] flex items-center justify-center border border-black/30 z-10 select-none"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "45px",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
            transform: "rotate(6.04deg)",
          }}
        >
          entertainment
        </div>

        {/* Pill 4: NETWORKING (155x45, rot -3.82deg) */}
        <div
          className="absolute left-[18px] top-[48px] w-[155px] h-[45px] rounded-full bg-[#FDF9EB] text-[#FF0052] flex items-center justify-center border border-black/30 z-10 select-none"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "45px",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
            transform: "rotate(-3.82deg)",
          }}
        >
          workshops
        </div>

        {/* Pill 5: CREATOR AWARDS (160x45, rot 0deg) */}
        <div
          className="absolute left-[121px] top-[86px] w-[160px] h-[45px] rounded-full bg-[#0149E7] text-[#00D890] flex items-center justify-center border border-black/30 z-20 select-none"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "45px",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          networking
        </div>

        {/* Pill 6: AFTER PARTY (132x45, rot 3.76deg) */}
        <div
          className="absolute left-[135px] top-[124px] w-[132px] h-[45px] rounded-full bg-[#FF0052] text-[#FDF9EB] flex items-center justify-center border border-black/30 z-30 select-none"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "45px",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
            transform: "rotate(3.76deg)",
          }}
        >
          creation
        </div>
      </div>
    </section>
  );
}
