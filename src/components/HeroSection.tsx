import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full h-[231px] text-white select-none overflow-visible">
      {/* Blue Rotated Background with size: W=462px, H=254px, Rotation=-3.23° */}
      <div
        className="absolute top-0 -left-[30px] w-[462px] h-[254px] bg-[#0054D9] pointer-events-none z-0"
        style={{
          transform: "rotate(-3.23deg)",
          transformOrigin: "30px 0px",
        }}
      />

      {/* Top Right Decorative Geometric Shape Tiles matching Image 2 */}
      {/* Tile 1: 60x60 green tile with red squiggle at top: 0, right: 60px */}
      <div className="absolute top-0 right-[60px] w-[60px] h-[60px] z-20 pointer-events-none">
        <Image
          src="/elements/tile-green-red.svg"
          alt="Tile Accent"
          width={60}
          height={60}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
          priority
        />
      </div>

      {/* Tile 2: 60x60 red tile with yellow star at top: 33px, right: 0px */}
      <div className="absolute top-[33px] right-0 w-[60px] h-[60px] z-20 pointer-events-none">
        <Image
          src="/elements/tile-pink-yellow.svg"
          alt="Tile Spark"
          width={60}
          height={60}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
          priority
        />
      </div>

      {/* Main Hero Headline Text matching Image 2 */}
      <div className="relative z-10 w-full pt-[22px] pb-[16px] px-[24px]">
        <h1
          className="font-anton font-normal text-[50px] leading-[110%] tracking-[0.5px] uppercase max-w-[360px] flex flex-col gap-[4px] select-none"
          style={{
            fontFamily: "var(--font-anton), Impact, sans-serif",
            fontWeight: 400,
            fontSize: "50px",
            lineHeight: "110%",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          <span className="text-white">KERALA&rsquo;S</span>
          <span>
            <span className="text-white">BIGGEST </span>
            <span className="text-[#FFD200]">CREATOR</span>
          </span>
          <span className="text-[#FFD200]">FESTIVAL IN KOCHI.</span>
        </h1>
      </div>

      {/* Yellow Star Shape centered right on the blue/red seam matching Image 2 & Image 3 */}
      <div className="absolute top-[207px] left-0 w-[64px] h-[127px] z-30 pointer-events-none">
        <Image
          src="/elements/star-hero-yellow.svg"
          alt="Yellow Star Accent"
          width={64}
          height={127}
          className="w-[64px] h-[127px] block"
          priority
        />
      </div>
    </section>
  );
}

