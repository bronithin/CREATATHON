import React from "react";
import {
  QuoteYellowStarburst,
  QuoteCardPinkStar,
  QuoteGreenFlower,
} from "./RegisterShapes";

export default function RegisterQuoteSection() {
  return (
    <section className="w-full bg-[#FF0052] pt-14 pb-14 px-5 relative overflow-hidden flex flex-col items-center select-none">
      {/* Decorative Yellow Starburst on Left */}
      <div className="absolute -left-7 top-6 pointer-events-none select-none z-0">
        <QuoteYellowStarburst className="w-[125px] h-[125px] sm:w-[135px] sm:h-[135px]" />
      </div>

      {/* Decorative Green Organic Flower on Bottom Right */}
      <div className="absolute -right-8 -bottom-8 pointer-events-none select-none z-20">
        <QuoteGreenFlower className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px]" />
      </div>

      {/* White Tilted Quote Card (+2 deg) */}
      <div
        className="w-full max-w-[321px] bg-white pt-8 pb-9 px-6 flex flex-col items-center text-center shadow-lg relative z-10 transition-transform origin-center"
        style={{ transform: "rotate(2deg)" }}
      >
        {/* Top Decorative Pink & Yellow 12-point Star */}
        <div className="mb-4 flex items-center justify-center">
          <QuoteCardPinkStar className="w-[48px] h-[48px]" />
        </div>

        {/* Quote Text */}
        <blockquote className="text-[16px] sm:text-[16.5px] leading-[1.38] text-[#18181B] font-normal tracking-[-0.01em] m-0 max-w-[260px]">
          &ldquo;Limited spots for brand partners and creator collaborators &mdash; be part of Creatathon 2026 from day one.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
