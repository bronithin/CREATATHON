import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CommunityFooter() {
  return (
    <footer
      id="community"
      className="relative w-full max-w-[402px] md:max-w-none min-h-[460px] md:min-h-auto bg-[#0054D9] text-white pt-[36px] pb-[100px] md:py-20 lg:py-24 px-[25px] md:px-12 lg:px-16 overflow-hidden select-none mx-auto"
    >
      {/* Top Right Pink Flame Splash with White Drop Shadow */}
      <div className="absolute -top-[10px] -right-[20px] md:-top-4 md:right-4 lg:right-12 w-[162px] h-[215px] md:w-[260px] md:h-[340px] z-0 pointer-events-none opacity-95">
        <Image
          src="/elements/flame-pink.svg"
          alt="Pink Flame Splash"
          width={260}
          height={340}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block drop-shadow-[0px_7px_0px_#FFFFFF]"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10">
        {/* Main Headline */}
        <div className="relative z-10 max-w-[280px] md:max-w-[760px] mb-[28px] md:mb-12">
          <h2
            className="uppercase font-anton text-[38px] md:text-[56px] lg:text-[70px] leading-[110%] md:leading-[105%] tracking-normal"
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

        {/* Bottom Row: Green Star + Copy (Side-by-side on mobile & desktop) */}
        <div className="relative z-10 flex flex-row items-end justify-between gap-4 md:gap-8 mt-2 md:mt-8 md:pt-10 md:border-t md:border-white/20">
          {/* Green Star */}
          <div className="w-[87px] h-[95px] md:w-[130px] md:h-[142px] flex-shrink-0 transition-transform hover:scale-105">
            <Image
              src="/elements/star-green.svg"
              alt="Green Star"
              width={130}
              height={142}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block"
            />
          </div>

          {/* Right Descriptive Text */}
          <div className="text-right max-w-[210px] md:max-w-[560px] pb-1">
            <p
              className="text-[21px] md:text-[24px] lg:text-[28px] leading-[124%] md:leading-[130%] tracking-[-1px] font-semibold text-white/95 text-right"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
              }}
            >
              Creatathon is built around the people who make the creator ecosystem what it is.
            </p>
          </div>
        </div>

        {/* Legal Footer Bar */}
        <div className="relative z-10 mt-10 md:mt-16 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-jetbrains text-xs">
          <Link href="/terms" className="hover:text-[#FFD200] font-bold text-white/90 transition-colors underline underline-offset-4 uppercase">
            Terms & Conditions
          </Link>

          <p className="text-white/60 text-center sm:text-right font-medium">
            © 2026 Creatathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
