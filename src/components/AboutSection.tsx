import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#FF0052] text-white select-none overflow-hidden">
      {/* Top Heading: Right-aligned display title */}
      <div className="flex justify-end pr-[25px] pt-[28px] pb-[14px]">
        <h2
          className="text-right font-bold text-[32px] leading-[105%] tracking-[-1.5px] text-white max-w-[280px] flex flex-col items-end"
          style={{
            fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "105%",
            letterSpacing: "-1.5px",
            textAlign: "right",
          }}
        >
          <span>Creatathon is a</span>
          <span>creator-focused</span>
          <span>festival</span>
        </h2>
      </div>

      {/* Middle Grid: Left Text + Right Green Scalloped Flower with Cream Star */}
      <div className="relative flex items-center justify-between gap-2 pl-[25px] pr-0 my-[10px]">
        {/* Left Column Copy */}
        <div className="max-w-[215px] z-10">
          <p className="font-sans font-medium text-[15.5px] leading-[1.18] tracking-tight text-[#FFD200] uppercase">
            BRINGING TOGETHER
            <br />
            CREATORS, ARTISTS,
            <br />
            STORYTELLERS,
            <br />
            BRANDS, AND THE
            <br />
            PEOPLE SHAPING THE
            <br />
            FUTURE OF DIGITAL
            <br />
            CULTURE
          </p>
        </div>

        {/* Right Green Flower Blob (97x137) flush right with Cream Star overlapping top-left */}
        <div className="relative w-[97px] h-[137px] flex-shrink-0">
          <Image
            src="/elements/flower-green.svg"
            alt="Green Flower Blob"
            width={97}
            height={137}
            className="w-[97px] h-[137px] object-contain block"
          />
          {/* Cream 8-pointed star overlapping top-left of green flower blob */}
          <div className="absolute -left-[57px] -top-[4px] w-[96px] h-[105px] pointer-events-none z-20">
            <Image
              src="/elements/star-cream.svg"
              alt="Cream Star"
              width={96}
              height={105}
              className="w-[96px] h-[105px] object-contain block"
            />
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Paragraph */}
      <div className="px-[25px] pt-[16px] pb-[28px] border-t border-white/20 mt-[12px]">
        <p
          className="text-white font-semibold text-[16px] leading-[120%]"
          style={{
            fontFamily: "Halenoir, var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "120%",
            letterSpacing: "-0.25px",
            wordSpacing: "0.15em",
          }}
        >
          Discover new ideas. Meet the people shaping the creator ecosystem. Find opportunities to learn, connect, create, and be part of what’s next.
        </p>
      </div>
    </section>
  );
}
