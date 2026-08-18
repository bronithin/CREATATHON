import React from "react";
import Image from "next/image";

export default function DaysOverview() {
  return (
    <section
      id="schedule"
      className="relative w-full max-w-[402px] md:max-w-none bg-[#FFD200] text-[#18181B] pt-[26px] pb-[16px] md:py-20 lg:py-24 px-[20px] md:px-12 select-none mx-auto"
    >
      {/* Left Margin Pink Star Decorator */}
      <div className="absolute -top-[22px] left-0 md:top-4 md:left-8 lg:left-14 z-20 pointer-events-none">
        <Image
          src="/elements/star-pink.svg"
          alt="Pink Star Decorator"
          width={60}
          height={105}
          style={{ width: "auto", height: "auto" }}
          className="w-[38px] h-[68px] md:w-[60px] md:h-[105px] object-contain block"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Title Header */}
        <div className="flex flex-col items-center text-center mb-[18px] md:mb-10">
          <h2 className="font-display text-[36px] md:text-[56px] lg:text-[68px] font-black tracking-tight text-[#FB024B] uppercase leading-none mb-[10px] md:mb-4">
            CREATATHON 2026
          </h2>
          {/* 2 DAYS OF Sticker Box */}
          <div
            className="w-[165px] h-[53px] md:w-[220px] md:h-[62px] bg-[#FDF9EB] text-[#0149E7] border-2 border-black flex items-center justify-center shadow-box-md"
            style={{ transform: "rotate(-1deg)" }}
          >
            <span className="font-display text-[22px] md:text-[28px] font-black tracking-wider uppercase">
              2 DAYS OF
            </span>
          </div>
        </div>

        {/* Mobile: 6 Tilted Pill Badges Absolute Layout */}
        <div className="flex md:hidden relative w-full h-[175px] my-[6px]">
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

        {/* Desktop: 6 Tilted Pill Badges Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-4xl mx-auto">
          <div
            className="w-full h-[62px] rounded-full bg-[#0149E7] text-[#FFD200] flex items-center justify-center border-2 border-black shadow-box-md font-bold text-[20px] uppercase tracking-wide cursor-pointer hover:scale-105 hover:rotate-0 transition-all"
            style={{ transform: "rotate(-2deg)" }}
          >
            conversations
          </div>
          <div
            className="w-full h-[62px] rounded-full bg-[#00D890] text-[#0149E7] flex items-center justify-center border-2 border-black shadow-box-md font-bold text-[20px] uppercase tracking-wide cursor-pointer hover:scale-105 hover:rotate-0 transition-all"
            style={{ transform: "rotate(2deg)" }}
          >
            experiences
          </div>
          <div
            className="w-full h-[62px] rounded-full bg-[#FF0052] text-[#FFD200] flex items-center justify-center border-2 border-black shadow-box-md font-bold text-[20px] uppercase tracking-wide cursor-pointer hover:scale-105 hover:rotate-0 transition-all"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            entertainment
          </div>
          <div
            className="w-full h-[62px] rounded-full bg-[#FDF9EB] text-[#FF0052] flex items-center justify-center border-2 border-black shadow-box-md font-bold text-[20px] uppercase tracking-wide cursor-pointer hover:scale-105 hover:rotate-0 transition-all"
            style={{ transform: "rotate(2.5deg)" }}
          >
            workshops
          </div>
          <div
            className="w-full h-[62px] rounded-full bg-[#0149E7] text-[#00D890] flex items-center justify-center border-2 border-black shadow-box-md font-bold text-[20px] uppercase tracking-wide cursor-pointer hover:scale-105 hover:rotate-0 transition-all"
            style={{ transform: "rotate(-2deg)" }}
          >
            networking
          </div>
          <div
            className="w-full h-[62px] rounded-full bg-[#FF0052] text-[#FDF9EB] flex items-center justify-center border-2 border-black shadow-box-md font-bold text-[20px] uppercase tracking-wide cursor-pointer hover:scale-105 hover:rotate-0 transition-all"
            style={{ transform: "rotate(3deg)" }}
          >
            creation
          </div>
        </div>
      </div>
    </section>
  );
}
