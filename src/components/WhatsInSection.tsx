import React from "react";
import Image from "next/image";

export default function WhatsInSection() {
  return (
    <section
      id="whats-in"
      className="relative w-full max-w-[402px] md:max-w-none min-h-[311px] md:min-h-[480px] bg-[#0054D9] text-white pt-[24px] pb-[32px] md:py-20 lg:py-24 px-[20px] md:px-8 overflow-hidden select-none mx-auto flex flex-col items-center justify-center"
    >
      {/* Top Right Decorative Yellow Star */}
      <div className="absolute top-[13px] -right-[21px] md:top-8 md:right-8 lg:right-16 w-[63px] h-[68px] md:w-[110px] md:h-[120px] z-10 pointer-events-none transition-transform hover:scale-105">
        <Image
          src="/elements/star-yellow.svg"
          alt="Yellow Starburst"
          width={110}
          height={120}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
        />
      </div>

      {/* Left Pink Flame Splash */}
      <div className="absolute -bottom-[42px] -left-[16px] md:-bottom-8 md:left-6 lg:left-12 w-[112px] h-[155px] md:w-[170px] md:h-[235px] z-0 pointer-events-none">
        <Image
          src="/elements/flame-pink.svg"
          alt="Pink Flame Splash"
          width={170}
          height={235}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
        />
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative z-10">
        {/* Title Header */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-display text-[46px] md:text-[68px] lg:text-[80px] font-black tracking-tight text-white uppercase leading-none mb-[8px] md:mb-3">
            What&apos;s In
          </h2>
          {/* Yellow "CREATATHON" Badge Graphic */}
          <div className="w-[319px] h-[68px] md:w-[440px] md:h-[94px] lg:w-[500px] lg:h-[106px] flex items-center justify-center mb-[14px] md:mb-8">
            <Image
              src="/elements/creatathon-badge.svg"
              alt="Creatathon Badge"
              width={500}
              height={106}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

        {/* Mobile Tilted Sticker Pills Stack */}
        <div className="flex md:hidden relative z-10 flex-col items-center">
          {/* Row 1: LEARN & MEET with horizontal overlap */}
          <div className="flex items-center justify-center -space-x-[10px] relative z-10">
            <div
              className="w-[146px] h-[54px] bg-[#FDF9EB] text-[#FF0052] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] relative z-10"
              style={{ transform: "rotate(0deg)" }}
            >
              LEARN
            </div>
            <div
              className="w-[145px] h-[54px] bg-[#FF0052] text-[#FFD200] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] relative z-20"
              style={{ transform: "rotate(-2.5deg)" }}
            >
              MEET
            </div>
          </div>

          {/* Row 2: CREATE */}
          <div
            className="w-[172px] h-[58px] bg-[#00D890] text-[#0054D9] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] -mt-[8px] relative z-20"
            style={{ transform: "rotate(-2.5deg)" }}
          >
            CREATE
          </div>

          {/* Row 3: DISCOVER */}
          <div
            className="w-[195px] h-[54px] bg-[#FFD200] text-[#FF0052] font-anton text-[28px] tracking-tight border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] -mt-[10px] relative z-30"
            style={{ transform: "rotate(-1.8deg)" }}
          >
            DISCOVER
          </div>
        </div>

        {/* Desktop Responsive Sticker Pills Cluster */}
        <div className="hidden md:flex flex-row flex-wrap items-center justify-center gap-6 lg:gap-8 mt-2 relative z-10 max-w-4xl">
          <div
            className="w-[190px] lg:w-[210px] h-[68px] lg:h-[74px] bg-[#FDF9EB] text-[#FF0052] font-anton text-[34px] lg:text-[38px] tracking-tight border-[3px] border-black flex items-center justify-center shadow-[5px_5px_0px_#000000] hover:scale-105 hover:rotate-0 transition-transform cursor-pointer"
            style={{ transform: "rotate(-2deg)" }}
          >
            LEARN
          </div>
          <div
            className="w-[190px] lg:w-[210px] h-[68px] lg:h-[74px] bg-[#FF0052] text-[#FFD200] font-anton text-[34px] lg:text-[38px] tracking-tight border-[3px] border-black flex items-center justify-center shadow-[5px_5px_0px_#000000] hover:scale-105 hover:rotate-0 transition-transform cursor-pointer"
            style={{ transform: "rotate(2.5deg)" }}
          >
            MEET
          </div>
          <div
            className="w-[210px] lg:w-[230px] h-[68px] lg:h-[74px] bg-[#00D890] text-[#0054D9] font-anton text-[34px] lg:text-[38px] tracking-tight border-[3px] border-black flex items-center justify-center shadow-[5px_5px_0px_#000000] hover:scale-105 hover:rotate-0 transition-transform cursor-pointer"
            style={{ transform: "rotate(-2.5deg)" }}
          >
            CREATE
          </div>
          <div
            className="w-[230px] lg:w-[250px] h-[68px] lg:h-[74px] bg-[#FFD200] text-[#FF0052] font-anton text-[34px] lg:text-[38px] tracking-tight border-[3px] border-black flex items-center justify-center shadow-[5px_5px_0px_#000000] hover:scale-105 hover:rotate-0 transition-transform cursor-pointer"
            style={{ transform: "rotate(1.8deg)" }}
          >
            DISCOVER
          </div>
        </div>
      </div>
    </section>
  );
}
