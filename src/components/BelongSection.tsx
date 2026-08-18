import React from "react";
import Image from "next/image";

export default function BelongSection() {
  return (
    <section className="relative w-[402px] bg-[#FFD200] text-[#18181B] pt-[10px] pb-[48px] px-[24px] overflow-hidden select-none">
      {/* 3 Colorful Shape Tiles at Right Side (matching exact reference coordinates) */}
      <div className="absolute right-[60px] top-[10px] w-[60px] h-[60px] z-10 pointer-events-none">
        <Image
          src="/elements/tile-green-blue.svg"
          alt="Tile Green Blue"
          width={60}
          height={60}
          className="w-full h-full object-contain block"
        />
      </div>
      <div className="absolute right-0 top-[43px] w-[60px] h-[60px] z-10 pointer-events-none">
        <Image
          src="/elements/tile-pink-yellow.svg"
          alt="Tile Pink Yellow"
          width={60}
          height={60}
          className="w-full h-full object-contain block"
        />
      </div>
      <div className="absolute right-[83px] top-[70px] w-[51px] h-[52px] z-10 pointer-events-none">
        <Image
          src="/elements/tile-blue-pink.svg"
          alt="Tile Blue Pink"
          width={51}
          height={52}
          className="w-full h-full object-contain block"
        />
      </div>

      <div className="relative z-20 flex flex-col gap-6">
        {/* Left Headline */}
        <div className="max-w-[220px]">
          <h3 className="font-display text-[26px] font-black leading-[0.95] tracking-tight uppercase text-black">
            IF YOU&apos;RE
            <br />
            PART OF THE
            <br />
            <span className="text-[#FF0052]">CREATOR</span>
            <br />
            ECOSYSTEM
          </h3>
        </div>

        {/* Right Subtitle */}
        <div className="text-right pr-2">
          <span className="font-display text-[18px] font-black text-[#FF0052] uppercase leading-tight block">
            THIS IS
            <br />
            WHERE YOU
            <br />
            BELONG
          </span>
        </div>
      </div>

      {/* Bottom Left Green Cloud / Flower Blob */}
      <div className="absolute -bottom-[30px] -left-[15px] w-[100px] h-[100px] z-0 pointer-events-none opacity-90">
        <Image
          src="/elements/flower-green.svg"
          alt="Green Blob"
          width={100}
          height={100}
          className="w-full h-full object-contain block"
        />
      </div>
    </section>
  );
}
