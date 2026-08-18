import React from "react";

interface ScallopedBtnProps {
  fillColor: string;
  textColor: string;
  shadowColor?: string;
  children: React.ReactNode;
  width: string;
  height: string;
  className?: string;
}

function ScallopedFlowerButton({
  fillColor,
  textColor,
  shadowColor = "#FF0052",
  children,
  width,
  height,
  className = "",
}: ScallopedBtnProps) {
  return (
    <div
      className={`relative flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{ width, height }}
    >
      {/* SVG Scalloped Flower Shape */}
      <svg
        viewBox="0 0 177 177"
        className="absolute inset-0 w-full h-full"
        style={{ filter: `drop-shadow(4px 4px 0px ${shadowColor})` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.8448 5.45677C47.7547 -6.20855 74.7205 1.45611 100.158 22.475C131.256 11.9987 159.018 14.4551 170.639 31.3005C182.284 48.1811 174.665 75.0819 153.729 100.48C164.08 131.448 161.582 159.058 144.795 170.639C128.002 182.224 101.291 174.744 76.0086 154.053C44.881 164.557 17.0862 162.109 5.45658 145.251C-6.14833 128.428 1.37746 101.652 22.1515 76.3302C11.5223 45.0729 13.9289 17.1265 30.8448 5.45677Z"
          fill={fillColor}
        />
      </svg>
      {/* Button Text */}
      <div
        className="relative z-10 text-center font-display font-black leading-tight tracking-tight uppercase px-3 py-1"
        style={{ color: textColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default function WhatHappensSection() {
  return (
    <section className="relative w-[402px] min-h-[864px] bg-[#FB0146] text-white pt-[32px] pb-[40px] px-[16px] overflow-hidden select-none">
      {/* Main Title */}
      <div className="relative z-10 text-center mt-[10px] mb-[6px]">
        <h2 className="font-display text-[42px] font-black tracking-tight leading-[0.9] uppercase text-white">
          WHAT
          <br />
          HAPPENS AT
          <br />
          <span className="text-[#FFD200]">CREATATHON?</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="relative z-10 text-center mb-[24px]">
        <p className="text-[13px] font-semibold text-white/95 max-w-[280px] mx-auto leading-tight">
          There is not just one way to experience Creatathon.
        </p>
      </div>

      {/* 5 Organic Scalloped Flower Buttons Layout Matching Reference SVG */}
      <div className="relative z-10 flex flex-col items-center gap-[12px] w-full">
        {/* Row 1: Green (143x143) & Blue (154x154) */}
        <div className="flex items-center justify-center gap-[16px] w-full">
          <ScallopedFlowerButton
            fillColor="#00D890"
            textColor="#0149E7"
            width="143px"
            height="143px"
            shadowColor="#FF0052"
          >
            <span className="text-[14px] font-black leading-tight block">
              COME TO
              <br />
              LEARN
            </span>
          </ScallopedFlowerButton>

          <ScallopedFlowerButton
            fillColor="#0149E7"
            textColor="#FFD200"
            width="154px"
            height="154px"
            shadowColor="#FF0052"
          >
            <span className="text-[14px] font-black leading-tight block">
              COME TO
              <br />
              CREATE
            </span>
          </ScallopedFlowerButton>
        </div>

        {/* Row 2: White (188x188) & Yellow (187x187) */}
        <div className="flex items-center justify-between gap-[2px] w-full px-1 -mt-[14px]">
          <ScallopedFlowerButton
            fillColor="#FFFFFF"
            textColor="#0149E7"
            width="188px"
            height="188px"
            shadowColor="#FF0052"
          >
            <span className="text-[14px] font-black leading-tight block">
              COME TO
              <br />
              MEET
              <br />
              PEOPLE
            </span>
          </ScallopedFlowerButton>

          <ScallopedFlowerButton
            fillColor="#FFD200"
            textColor="#FF0052"
            width="187px"
            height="187px"
            shadowColor="#0054D9"
          >
            <span className="text-[14px] font-black leading-tight block">
              COME TO
              <br />
              MEET
              <br />
              PEOPLE
            </span>
          </ScallopedFlowerButton>
        </div>

        {/* Row 3: Blue Large (196x196) */}
        <div className="flex items-center justify-center w-full -mt-[18px]">
          <ScallopedFlowerButton
            fillColor="#0054D9"
            textColor="#FFFFFF"
            width="196px"
            height="196px"
            shadowColor="#FF0052"
          >
            <span className="text-[14px] font-black leading-tight block">
              COME TO
              <br />
              DISCOVER
              <br />
              WHAT&apos;S
              <br />
              NEXT.
            </span>
          </ScallopedFlowerButton>
        </div>
      </div>
    </section>
  );
}
