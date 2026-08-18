import React from "react";
import Image from "next/image";

export default function EcosystemSection() {
  return (
    <section className="relative w-full max-w-[402px] md:max-w-none bg-[#FFD200] text-[#18181B] pt-[24px] pb-[28px] md:pt-20 md:pb-10 lg:pt-24 px-[24px] md:px-12 lg:px-16 overflow-hidden select-none mx-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
        {/* Left Headline */}
        <div className="relative z-20 max-w-[280px] md:max-w-[650px] lg:max-w-[750px]">
          <h3
            className="uppercase text-black text-[32px] md:text-[50px] lg:text-[62px] leading-[120%] md:leading-[110%] tracking-[-1px] font-bold"
            style={{
              fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            }}
          >
            IF YOU&apos;RE
            <br />
            PART OF THE
            <br />
            <span className="text-[#FF0052]">CREATOR</span>
            <br />
            ECOSYSTEM
          </h3>
        </div>

        {/* Mobile: 3 Colorful Shape Tiles at Right Side */}
        <div className="block md:hidden">
          <div className="absolute right-[60px] top-[14px] w-[60px] h-[60px] z-10 pointer-events-none">
            <Image
              src="/elements/tile-green-blue.svg"
              alt="Tile Green Blue"
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block"
            />
          </div>
          <div className="absolute right-0 top-[47px] w-[60px] h-[60px] z-10 pointer-events-none">
            <Image
              src="/elements/tile-pink-yellow.svg"
              alt="Tile Pink Yellow"
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block"
            />
          </div>
          <div className="absolute right-[83px] top-[74px] w-[51px] h-[52px] z-10 pointer-events-none">
            <Image
              src="/elements/tile-blue-pink.svg"
              alt="Tile Blue Pink"
              width={51}
              height={52}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block"
            />
          </div>
        </div>

        {/* Desktop: 3 Colorful Shape Tiles Row */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0 mt-6 md:mt-0">
          <div className="w-[85px] h-[85px] lg:w-[110px] lg:h-[110px] transition-transform hover:scale-110">
            <Image
              src="/elements/tile-green-blue.svg"
              alt="Tile Green Blue"
              width={110}
              height={110}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block drop-shadow-md"
            />
          </div>
          <div className="w-[85px] h-[85px] lg:w-[110px] lg:h-[110px] transition-transform hover:scale-110">
            <Image
              src="/elements/tile-pink-yellow.svg"
              alt="Tile Pink Yellow"
              width={110}
              height={110}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block drop-shadow-md"
            />
          </div>
          <div className="w-[75px] h-[75px] lg:w-[96px] lg:h-[96px] transition-transform hover:scale-110">
            <Image
              src="/elements/tile-blue-pink.svg"
              alt="Tile Blue Pink"
              width={96}
              height={96}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain block drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
