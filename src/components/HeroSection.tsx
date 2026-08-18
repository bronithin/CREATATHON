import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full h-[231px] text-white select-none overflow-visible">
      {/* Blue Rotated Background matching exact Figma layout: W=402.65px, H=253.64px, Top=-22.71px, Rotation=3.23° with bleed to fill edges */}
      <div
        className="absolute top-0 -left-[30px] w-[462px] h-[254px] bg-[#0054D9] pointer-events-none z-0"
        style={{
          transform: "rotate(-3.23deg)",
          transformOrigin: "30px 0px",
        }}
      />

      {/* Top Right Decorative Geometric Shape Tiles matching exact reference coordinates */}
      {/* Tile 1: 60x60 green/blue tile at x=282, y=100 (top: 0, right: 60px) */}
      <div className="absolute top-0 right-[60px] w-[60px] h-[60px] z-20 pointer-events-none">
        <Image
          src="/elements/tile-green-blue.svg"
          alt="Tile Accent"
          width={60}
          height={60}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
        />
      </div>

      {/* Tile 2: 60x60 pink/yellow tile at x=342, y=133 (top: 33px, right: 0px) */}
      <div className="absolute top-[33px] right-0 w-[60px] h-[60px] z-20 pointer-events-none">
        <Image
          src="/elements/tile-pink-yellow.svg"
          alt="Tile Spark"
          width={60}
          height={60}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
        />
      </div>

      {/* Main Hero Headline Text */}
      <div className="relative z-10 w-full pt-[24px] pb-[20px] px-[25px]">
        <h1
          className="font-anton font-normal text-[48px] leading-[120%] tracking-[1px] text-white uppercase max-w-[360px] flex flex-col"
          style={{
            fontFamily: "var(--font-anton), Impact, sans-serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "120%",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          <span>Kerala&apos;s</span>
          <span>
            Biggest{" "}
            <span className="text-[#FCD60B]">
              Creator
            </span>
          </span>
          <span className="text-[#FCD60B]">Festival In Kochi.</span>
        </h1>
      </div>

      {/* Yellow Star Shape at bottom-left overlap boundary (Enlarged) */}
      <div className="absolute top-[188px] left-0 w-[54px] h-[96px] z-30 pointer-events-none">
        <Image
          src="/elements/star-hero-yellow.svg"
          alt="Yellow Star Accent"
          width={54}
          height={96}
          style={{ width: "auto", height: "auto" }}
          className="w-[54px] h-[96px] object-contain block"
        />
      </div>
    </section>
  );
}
