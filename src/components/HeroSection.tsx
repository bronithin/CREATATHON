import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full h-[235px] md:h-auto md:min-h-[480px] lg:min-h-[560px] bg-transparent md:bg-[#0054D9] text-white select-none overflow-visible md:overflow-hidden flex flex-col justify-start md:justify-center">
      {/* Mobile Blue Rotated Background (W=462px, H=254px, Rotation=-3.23deg) */}
      <div
        className="block md:hidden absolute top-0 -left-[30px] w-[462px] h-[254px] bg-[#0054D9] pointer-events-none z-0"
        style={{
          transform: "rotate(-3.23deg)",
          transformOrigin: "30px 0px",
        }}
      />

      {/* Top Right Decorative Geometric Shape Tiles */}
      {/* Tile 1: green tile with red squiggle */}
      <div className="absolute top-0 right-[48px] sm:right-[56px] md:top-0 md:right-[110px] lg:right-[130px] w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[95px] md:h-[95px] lg:w-[120px] lg:h-[120px] z-20 pointer-events-none transition-transform hover:scale-105">
        <Image
          src="/elements/tile-green-red.svg"
          alt="Tile Accent"
          width={120}
          height={120}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
          priority
        />
      </div>

      {/* Tile 2: red tile with yellow star */}
      <div className="absolute top-[24px] sm:top-[28px] right-0 md:top-[50px] md:right-0 lg:top-[65px] w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[95px] md:h-[95px] lg:w-[120px] lg:h-[120px] z-20 pointer-events-none transition-transform hover:scale-105">
        <Image
          src="/elements/tile-pink-yellow.svg"
          alt="Tile Spark"
          width={120}
          height={120}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
          priority
        />
      </div>

      {/* Main Hero Headline Text Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-[20px] sm:pt-[24px] pb-[16px] pl-[28px] pr-[16px] sm:pl-[32px] sm:pr-[20px] md:pl-16 lg:pl-20 md:pr-10 md:py-20 lg:py-24">
        <h1 className="font-anton font-normal text-[38px] sm:text-[44px] md:text-[82px] lg:text-[104px] xl:text-[116px] leading-[106%] md:leading-[100%] tracking-[0.2px] uppercase w-full max-w-[380px] md:max-w-[960px] flex flex-col gap-[2px] sm:gap-[4px] md:gap-2.5 select-none">
          <span className="text-white whitespace-nowrap">KERALA&rsquo;S</span>
          <span className="whitespace-nowrap">
            <span className="text-white">BIGGEST </span>
            <span className="text-[#FFD200]">CREATOR</span>
          </span>
          <span className="text-[#FFD200] whitespace-nowrap">FESTIVAL IN KOCHI.</span>
        </h1>
      </div>

      {/* Yellow Star Shape centered right on the blue/red seam */}
      <div className="absolute top-[204px] md:top-auto md:-bottom-[90px] lg:-bottom-[110px] left-0 md:left-0 w-[64px] h-[127px] md:w-[90px] md:h-[180px] lg:w-[110px] lg:h-[220px] z-30 pointer-events-none">
        <Image
          src="/elements/star-hero-yellow.svg"
          alt="Yellow Star Accent"
          width={110}
          height={220}
          className="w-[64px] h-[127px] md:w-full md:h-full object-contain block"
          priority
        />
      </div>
    </section>
  );
}

