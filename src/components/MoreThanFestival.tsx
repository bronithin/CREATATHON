import React from "react";
import Image from "next/image";

export default function MoreThanFestival() {
  const statements = [
    {
      lines: ["CREATORS", "MEET CREATORS."],
    },
    {
      lines: ["IDEAS", "MEET OPPORTUNITIES."],
    },
    {
      lines: ["BRANDS", "MEET COMMUNITIES."],
    },
    {
      lines: [
        "AND THE NEXT",
        "GENERATION OF DIGITAL",
        "CULTURE GETS A PLACE",
        "TO GROW.",
      ],
    },
  ];

  return (
    <section className="relative w-full max-w-[402px] md:max-w-none min-h-[538px] md:min-h-auto bg-[#FDF9EB] text-[#18181B] pt-[26px] pb-[32px] md:py-20 lg:py-24 px-[24px] md:px-10 lg:px-16 overflow-hidden select-none mx-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Red Headline */}
        <div className="text-center mb-[20px] md:mb-12 lg:mb-14">
          <h2 className="font-display text-[32px] md:text-[54px] lg:text-[66px] font-black tracking-tight text-[#FF0052] uppercase leading-none">
            More Than A Festival
          </h2>
        </div>

        {/* Mobile View: Vertical Stack */}
        <div className="flex md:hidden flex-col">
          {/* Grid: Left Yellow Scalloped Flower Blob + Right Bullet List */}
          <div className="flex items-center justify-between gap-3 mb-[22px] w-full">
            {/* Left Yellow Organic Scalloped Flower Blob (170x170) */}
            <div className="relative w-[170px] h-[170px] flex-shrink-0 flex items-center justify-center">
              <Image
                src="/elements/flower-yellow.svg"
                alt="Yellow Flower Blob"
                width={179}
                height={179}
                style={{ width: "auto", height: "auto" }}
                className="w-full h-full object-contain block drop-shadow-[4px_4px_0px_#FF0052]"
              />
              {/* Quote text placed inside flower blob */}
              <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none p-2">
                <div
                  className="font-anton uppercase text-[#0054D9] text-[20px] font-normal leading-[110%] tracking-[0px] text-center select-none"
                  style={{
                    fontFamily: "var(--font-anton), Impact, sans-serif",
                    transform: "rotate(-9.5deg)",
                  }}
                >
                  IT&apos;S A PLACE
                  <br />
                  WHERE THE
                  <br />
                  CREATOR
                  <br />
                  ECOSYSTEM
                  <br />
                  MEETS.
                </div>
              </div>
            </div>

            {/* Right Manifesto List with dividers */}
            <div className="flex flex-col flex-1 pl-1">
              {statements.map((group, idx) => (
                <div key={idx} className="flex flex-col">
                  <div
                    className="font-normal text-[14px] leading-[130%] tracking-[-0.8px] uppercase text-[#18181B] flex flex-col gap-[2px]"
                    style={{
                      fontFamily: "'Halenoir', var(--font-jakarta), sans-serif",
                      letterSpacing: "-0.8px",
                    }}
                  >
                    {group.lines.map((line, lIdx) => (
                      <div key={lIdx}>{line}</div>
                    ))}
                  </div>
                  {idx < statements.length - 1 && (
                    <div className="w-full h-[1.5px] bg-black my-[12px]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Center Vector Artwork Illustration */}
          <div className="relative z-10 w-full max-w-[390px] h-[260px] mx-auto mt-[10px] flex justify-center">
            <Image
              src="/elements/creator-illustration.png"
              alt="Creators Working Together in Studio Arch"
              width={390}
              height={260}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block"
              priority
            />
          </div>
        </div>

        {/* Desktop View: Side-by-Side 2-Column Composition */}
        <div className="hidden md:grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Yellow Blob + Manifesto */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Yellow Scalloped Flower Blob */}
              <div className="relative w-[210px] h-[210px] lg:w-[240px] lg:h-[240px] flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/elements/flower-yellow.svg"
                  alt="Yellow Flower Blob"
                  width={240}
                  height={240}
                  style={{ width: "auto", height: "auto" }}
                  className="w-full h-full object-contain block drop-shadow-[5px_5px_0px_#FF0052]"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none p-2">
                  <div
                    className="font-anton uppercase text-[#0054D9] text-[24px] lg:text-[27px] font-normal leading-[110%] tracking-[0px] text-center select-none"
                    style={{
                      fontFamily: "var(--font-anton), Impact, sans-serif",
                      transform: "rotate(-9.5deg)",
                    }}
                  >
                    IT&apos;S A PLACE
                    <br />
                    WHERE THE
                    <br />
                    CREATOR
                    <br />
                    ECOSYSTEM
                    <br />
                    MEETS.
                  </div>
                </div>
              </div>

              {/* Manifesto List */}
              <div className="flex flex-col flex-1">
                {statements.map((group, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div
                      className="font-bold text-[18px] lg:text-[21px] leading-[125%] tracking-[-0.5px] uppercase text-[#18181B] flex flex-col gap-1"
                      style={{
                        fontFamily: "'Halenoir', var(--font-jakarta), sans-serif",
                      }}
                    >
                      {group.lines.map((line, lIdx) => (
                        <div key={lIdx}>{line}</div>
                      ))}
                    </div>
                    {idx < statements.length - 1 && (
                      <div className="w-full h-[2px] bg-black/90 my-3.5" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Studio Vector Illustration Artwork */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] transition-transform hover:scale-[1.02]">
              <Image
                src="/elements/creator-illustration.png"
                alt="Creators Working Together in Studio Arch"
                width={620}
                height={414}
                style={{ width: "auto", height: "auto" }}
                className="w-full h-auto object-contain block drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
