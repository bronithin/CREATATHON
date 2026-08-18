import React from "react";
import Image from "next/image";

export default function EcosystemSection() {
  return (
    <section className="relative w-[402px] bg-[#FFD200] text-[#18181B] pt-[24px] pb-[28px] px-[24px] overflow-hidden select-none">
      {/* 3 Colorful Shape Tiles at Right Side */}
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

      {/* Left Headline */}
      <div className="relative z-20 max-w-[280px]">
        <h3
          className="uppercase text-black"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "120%",
            letterSpacing: "-1px",
            verticalAlign: "middle",
            textTransform: "uppercase",
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
    </section>
  );
}
