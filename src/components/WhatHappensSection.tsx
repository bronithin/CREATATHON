import React from "react";

const SHAPE_PATHS = {
  greenTop: {
    d: "M 12.13 12.37 C 24.25 0.16 47.63 2.31 71.81 15.69 C 95.79 2.27 119.03 0.00 131.19 12.08 C 143.38 24.18 141.26 47.50 127.94 71.64 C 141.24 95.53 143.45 118.65 131.42 130.77 C 119.38 142.90 96.23 140.86 72.23 127.73 C 48.22 141.18 24.97 143.45 12.79 131.37 C 0.64 119.31 2.71 96.11 15.91 72.05 C 2.33 47.96 0.00 24.59 12.13 12.37 Z",
    viewBox: "0 0 143.45 143.45",
  },
  blueTop: {
    d: "M 25.66 10.48 C 39.30 0.00 62.18 5.25 84.36 21.74 C 109.92 11.63 133.25 12.49 143.70 26.08 C 154.16 39.70 148.94 62.53 132.53 84.68 C 142.52 110.13 141.62 133.34 128.07 143.75 C 114.52 154.16 91.86 149.05 69.82 132.83 C 44.24 142.95 20.88 142.10 10.43 128.50 C 0.00 114.93 5.15 92.21 21.43 70.14 C 11.20 44.45 12.01 20.97 25.66 10.48 Z",
    viewBox: "0 0 154.16 154.16",
  },
  whiteMid: {
    d: "M 36.99 11.66 C 53.90 0.00 80.87 7.66 106.31 28.68 C 137.40 18.20 165.17 20.66 176.79 37.51 C 188.43 54.39 180.81 81.29 159.88 106.69 C 170.23 137.65 167.73 165.26 150.94 176.84 C 134.15 188.43 107.44 180.95 82.16 160.26 C 51.03 170.76 23.23 168.31 11.60 151.46 C 0.00 134.63 7.53 107.86 28.30 82.54 C 17.67 51.28 20.08 23.33 36.99 11.66 Z",
    viewBox: "0 0 188.43 188.43",
  },
  yellowMid: {
    d: "M 12.03 34.46 C 24.05 17.80 52.03 15.99 83.04 27.27 C 108.83 6.98 135.81 0.00 152.40 11.98 C 169.03 23.98 170.86 51.88 159.65 82.82 C 179.77 108.53 186.67 135.39 174.73 151.92 C 162.79 168.46 135.11 170.36 104.36 159.34 C 78.55 179.66 51.54 186.67 34.94 174.68 C 18.37 162.71 16.49 134.96 27.58 104.15 C 7.09 78.26 0.00 51.12 12.03 34.46 Z",
    viewBox: "0 0 186.67 186.67",
  },
  blueBottom: {
    d: "M 16.67 16.60 C 33.33 0.00 65.28 3.12 98.24 21.59 C 131.14 3.43 162.92 0.51 179.46 17.11 C 196.03 33.75 192.95 65.62 174.56 98.52 C 192.56 131.29 195.40 162.90 178.85 179.39 C 162.30 195.88 130.68 192.91 97.96 174.78 C 65.04 192.98 33.22 195.91 16.67 179.30 C 0.16 162.72 3.16 131.01 21.38 98.23 C 3.01 65.19 0.00 33.21 16.67 16.60 Z",
    viewBox: "0 0 196.03 195.91",
  },
};

interface ScallopedBtnProps {
  fillColor: string;
  textColor: string;
  shadowColor?: string;
  children: React.ReactNode;
  width: string;
  height: string;
  pathD: string;
  viewBox: string;
  className?: string;
}

function ScallopedFlowerButton({
  fillColor,
  textColor,
  shadowColor = "#FF0052",
  children,
  width,
  height,
  pathD,
  viewBox,
  className = "",
}: ScallopedBtnProps) {
  return (
    <div
      className={`relative flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{ width, height }}
    >
      {/* SVG Scalloped Flower Shape */}
      <svg
        viewBox={viewBox}
        className="absolute inset-0 w-full h-full"
        style={{ filter: `drop-shadow(4px 4px 0px ${shadowColor})` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={pathD} fill={fillColor} />
      </svg>
      {/* Button Text */}
      <div
        className="relative z-10 text-center uppercase px-2 py-1 flex flex-col items-center justify-center pointer-events-none"
        style={{
          color: textColor,
          fontFamily: "var(--font-anton), Anton, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "29px",
          lineHeight: "110%",
          letterSpacing: "0px",
          textAlign: "center",
          verticalAlign: "middle",
          textTransform: "uppercase",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function WhatHappensSection() {
  return (
    <section className="relative w-[402px] min-h-[960px] bg-[#FB0146] text-white pt-[32px] pb-[44px] px-[12px] overflow-hidden select-none">
      {/* Main Title */}
      <div className="relative z-10 text-center mt-[10px] mb-[6px]">
        <h2
          className="uppercase text-white text-center"
          style={{
            fontFamily: "var(--font-anton), Anton, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "64px",
            lineHeight: "80px",
            letterSpacing: "-0.8px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          WHAT
          <br />
          HAPPENS AT
          <br />
          <span className="text-[#FFD200]">CREATATHON?</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="relative z-10 text-center mb-[28px] px-2">
        <p
          className="text-white text-center mx-auto"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "120%",
            letterSpacing: "-1px",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          There is not just one way to experience
          <br />
          Creatathon.
        </p>
      </div>

      {/* 5 Organic Scalloped Flower Buttons Layout Matching Reference */}
      <div className="relative z-10 flex flex-col items-center gap-[12px] w-full">
        {/* Row 1: Green & Blue Buttons */}
        <div className="flex items-center justify-center gap-[14px] w-full">
          <ScallopedFlowerButton
            fillColor="#00D890"
            textColor="#0149E7"
            width="165px"
            height="165px"
            pathD={SHAPE_PATHS.greenTop.d}
            viewBox={SHAPE_PATHS.greenTop.viewBox}
            shadowColor="#FF0052"
          >
            <span>
              COME TO
              <br />
              LEARN
            </span>
          </ScallopedFlowerButton>

          <ScallopedFlowerButton
            fillColor="#0149E7"
            textColor="#FFD200"
            width="165px"
            height="165px"
            pathD={SHAPE_PATHS.blueTop.d}
            viewBox={SHAPE_PATHS.blueTop.viewBox}
            shadowColor="#FF0052"
          >
            <span>
              COME TO
              <br />
              CREATE
            </span>
          </ScallopedFlowerButton>
        </div>

        {/* Row 2: White & Yellow Buttons */}
        <div className="flex items-center justify-between gap-[2px] w-full px-1 -mt-[16px]">
          <ScallopedFlowerButton
            fillColor="#FFFFFF"
            textColor="#0149E7"
            width="192px"
            height="192px"
            pathD={SHAPE_PATHS.whiteMid.d}
            viewBox={SHAPE_PATHS.whiteMid.viewBox}
            shadowColor="#FF0052"
          >
            <span>
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
            width="192px"
            height="192px"
            pathD={SHAPE_PATHS.yellowMid.d}
            viewBox={SHAPE_PATHS.yellowMid.viewBox}
            shadowColor="#0054D9"
          >
            <span>
              COME TO
              <br />
              MEET
              <br />
              PEOPLE
            </span>
          </ScallopedFlowerButton>
        </div>

        {/* Row 3: Blue Large Centered Button (Matching 1st Image) */}
        <div className="flex items-center justify-center w-full -mt-[20px]">
          <ScallopedFlowerButton
            fillColor="#0054D9"
            textColor="#FFFFFF"
            width="235px"
            height="235px"
            pathD={SHAPE_PATHS.blueBottom.d}
            viewBox={SHAPE_PATHS.blueBottom.viewBox}
            shadowColor="#FF0052"
          >
            <span>
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
