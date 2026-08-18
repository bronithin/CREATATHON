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
    <section className="relative w-[402px] min-h-[538px] bg-[#FDF9EB] text-[#18181B] pt-[26px] pb-[32px] px-[24px] overflow-hidden select-none">
      {/* Red Headline */}
      <div className="text-center mb-[20px]">
        <h2 className="font-display text-[32px] font-black tracking-tight text-[#FF0052] uppercase leading-none">
          More Than A Festival
        </h2>
      </div>

      {/* Grid: Left Yellow Scalloped Flower Blob + Right Bullet List */}
      <div className="flex items-center justify-between gap-3 mb-[22px] w-full">
        {/* Left Yellow Organic Scalloped Flower Blob (179x179) */}
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



      {/* Center Vector Artwork Illustration (Enlarged) */}
      <div className="relative z-10 w-[390px] h-[260px] -mx-[18px] mt-[10px] flex justify-center">
        <Image
          src="/elements/creator-illustration.png"
          alt="Creators Working Together in Studio Arch"
          width={390}
          height={260}
          className="w-[390px] h-[260px] object-contain block"
          priority
        />
      </div>
    </section>
  );
}
