import React from "react";
import Image from "next/image";

export default function WhatsInSection() {
  return (
    <section className="relative w-full max-w-[402px] min-h-[311px] bg-[#0054D9] text-white pt-[24px] pb-[32px] px-[20px] overflow-hidden select-none mx-auto">
      {/* Top Right Decorative Yellow Star - larger and aligned/cut-off on right edge */}
      <div className="absolute top-[13px] -right-[21px] w-[63px] h-[68px] z-10 pointer-events-none">
        <Image
          src="/elements/star-yellow.svg"
          alt="Yellow Starburst"
          width={63}
          height={68}
          style={{ width: "auto", height: "auto" }}
          className="w-[63px] h-[68px] object-contain block"
        />
      </div>

      {/* Left Pink Flame Splash - positioned at bottom-left */}
      <div className="absolute -bottom-[42px] -left-[16px] w-[112px] h-[155px] z-0 pointer-events-none">
        <Image
          src="/elements/flame-pink.svg"
          alt="Pink Flame Splash"
          width={112}
          height={155}
          style={{ width: "auto", height: "auto" }}
          className="w-[112px] h-[155px] object-contain block"
        />
      </div>

      {/* Title Header */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="font-display text-[46px] font-black tracking-tight text-white uppercase leading-none mb-[8px]">
          What&apos;s In
        </h2>
        {/* Yellow "CREATATHON" Badge Graphic (319x68) */}
        <div className="w-[319px] h-[68px] flex items-center justify-center mb-[14px]">
          <Image
            src="/elements/creatathon-badge.svg"
            alt="Creatathon Badge"
            width={319}
            height={68}
            style={{ width: "auto", height: "auto" }}
            className="w-[319px] h-[68px] object-contain block"
            priority
          />
        </div>
      </div>

      {/* Tilted Sticker Pills Stack Matching Reference Exact Overlaps and Styling */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Row 1: LEARN & MEET with horizontal overlap */}
        <div className="flex items-center justify-center -space-x-[10px] relative z-10">
          <div
            className="w-[146px] h-[54px] bg-[#FDF9EB] text-[#FF0052] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] relative z-10"
            style={{ transform: "rotate(0deg)" }}
          >
            LEARN
          </div>
          <div
            className="w-[145px] h-[54px] bg-[#FF0052] text-[#FFD200] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] relative z-20"
            style={{ transform: "rotate(-2.5deg)" }}
          >
            MEET
          </div>
        </div>

        {/* Row 2: CREATE (in front of Row 1, rotated upwards to right) */}
        <div
          className="w-[172px] h-[58px] bg-[#00D890] text-[#0054D9] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] -mt-[8px] relative z-20"
          style={{ transform: "rotate(-2.5deg)" }}
        >
          CREATE
        </div>

        {/* Row 3: DISCOVER (overlaps bottom of CREATE, rotated slightly upwards to right) */}
        <div
          className="w-[195px] h-[54px] bg-[#FFD200] text-[#FF0052] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] -mt-[10px] relative z-30"
          style={{ transform: "rotate(-1.8deg)" }}
        >
          DISCOVER
        </div>
      </div>
    </section>
  );
}
