import React from "react";
import Image from "next/image";

export default function CommunityFooter() {
  return (
    <footer className="relative w-[402px] min-h-[460px] bg-[#0054D9] text-white pt-[36px] pb-[100px] px-[25px] overflow-hidden select-none">
      {/* Top Right Pink Flame Splash with White Drop Shadow */}
      <div className="absolute -top-[10px] -right-[20px] w-[162px] h-[215px] z-0 pointer-events-none opacity-95">
        <Image
          src="/elements/flame-pink.svg"
          alt="Pink Flame Splash"
          width={162}
          height={215}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block drop-shadow-[0px_7px_0px_#FFFFFF]"
        />
      </div>

      {/* Main Headline */}
      <div className="relative z-10 max-w-[280px] mb-[28px]">
        <h2
          className="uppercase"
          style={{
            fontFamily: "var(--font-anton), Anton, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "38px",
            lineHeight: "110%",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          <span className="text-[#FFD200]">
            ONE PLACE.
            <br />
            DIFFERENT
            <br />
            PERSPECTIVES.
          </span>
          <br />
          <span className="text-white">
            ONE GROWING
            <br />
            COMMUNITY.
          </span>
        </h2>
      </div>

      {/* Bottom Row: Left Green Star + Right Copy */}
      <div className="relative z-10 flex items-end justify-between gap-4 mt-2">
        {/* Bottom Left Green Star (87x95) */}
        <div className="w-[87px] h-[95px] flex-shrink-0">
          <Image
            src="/elements/star-green.svg"
            alt="Green Star"
            width={87}
            height={95}
            style={{ width: "auto", height: "auto" }}
            className="w-full h-full object-contain block"
          />
        </div>

        {/* Right Descriptive Text */}
        <div className="text-right max-w-[210px] pb-1">
          <p
            style={{
              fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "21px",
              lineHeight: "124%",
              letterSpacing: "-1px",
              textAlign: "right",
              verticalAlign: "middle",
              color: "rgba(255, 255, 255, 0.95)",
            }}
          >
            Creatathon is built around the people who make the creator ecosystem what it is.
          </p>
        </div>
      </div>
    </footer>
  );
}
