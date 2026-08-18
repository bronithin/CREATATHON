import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#FF0052] text-white select-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto md:px-12 lg:px-16 md:py-16 lg:py-20">
        {/* Top Heading: Right-aligned display title */}
        <div className="flex justify-end pr-[20px] sm:pr-[25px] pt-[38px] sm:pt-[44px] pb-[12px] sm:pb-[14px] md:pr-0 md:pt-6 md:pb-8">
          <h2
            className="text-right font-bold text-[clamp(28px,8vw,32px)] md:text-[48px] lg:text-[56px] leading-[105%] tracking-[-1px] sm:tracking-[-1.5px] text-white max-w-[280px] md:max-w-[650px] flex flex-col items-end"
            style={{
              fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            <span>Creatathon is a</span>
            <span>creator-focused</span>
            <span>festival</span>
          </h2>
        </div>

        {/* Middle Grid: Left Text + Right Green Scalloped Flower with Cream Star */}
        <div className="relative flex items-center justify-between pl-[20px] sm:pl-[25px] md:pl-0 my-[8px] sm:my-[10px] md:my-6 min-h-[145px] md:min-h-[260px]">
          {/* Left Column Copy */}
          <div className="max-w-[250px] sm:max-w-[270px] md:max-w-[620px] lg:max-w-[700px] z-10">
            <p
              className="text-[#FFD200] text-[clamp(18px,5.2vw,20px)] md:text-[34px] lg:text-[40px] leading-[120%] md:leading-[116%] tracking-[-0.8px] sm:tracking-[-1px] uppercase"
              style={{
                fontFamily: "Halenoir, var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
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

          {/* Right Green Flower Blob extending past right edge + Cream Star */}
          <div className="absolute right-[-40px] top-[4px] md:relative md:right-0 md:top-0 w-[138px] h-[138px] md:w-[240px] md:h-[240px] lg:w-[290px] lg:h-[290px] pointer-events-none z-0 shrink-0">
            <Image
              src="/elements/flower-green.svg"
              alt="Green Flower Blob"
              width={290}
              height={290}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block"
            />
            {/* Cream 8-pointed star overlapping top-left of green flower blob */}
            <div className="absolute -left-[57px] -top-[4px] md:-left-[90px] md:-top-[15px] lg:-left-[110px] w-[96px] h-[105px] md:w-[160px] md:h-[175px] lg:w-[190px] lg:h-[205px] pointer-events-none z-20">
              <Image
                src="/elements/star-cream.svg"
                alt="Cream Star"
                width={190}
                height={205}
                style={{ width: "auto", height: "auto" }}
                className="w-full h-full object-contain block"
              />
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Paragraph */}
        <div className="px-[20px] sm:px-[25px] md:px-0 pt-[16px] md:pt-8 pb-[28px] md:pb-0 border-t border-white/20 mt-[12px] md:mt-8">
          <p
            className="text-white font-semibold text-[15px] sm:text-[16px] md:text-[22px] lg:text-[25px] leading-[120%] md:leading-[140%] max-w-4xl"
            style={{
              fontFamily: "Halenoir, var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
              letterSpacing: "-0.25px",
            }}
          >
            Discover new ideas. Meet the people shaping the creator ecosystem. Find opportunities to learn, connect, create, and be part of what’s next.
          </p>
        </div>
      </div>
    </section>
  );
}
