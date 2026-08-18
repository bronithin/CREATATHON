import React from "react";
import Image from "next/image";

export default function StickerRibbon() {
  return (
    <div className="w-full h-[52px] md:h-[64px] lg:h-[70px] select-none overflow-hidden flex items-center justify-center bg-white border-y-2 border-black/80">
      {/* Mobile single ribbon view */}
      <div className="flex md:hidden w-[402px] h-[52px] shrink-0 items-center justify-center">
        <Image
          src="/elements/sticker-ribbon.svg"
          alt="Creatathon Stickers Strip"
          width={402}
          height={52}
          style={{ width: "402px", height: "52px" }}
          className="object-cover block"
          priority
        />
      </div>

      {/* Desktop repeating marquee ribbon */}
      <div className="hidden md:flex w-full overflow-hidden items-center">
        <div className="flex shrink-0 animate-marquee-infinite items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={`r1-${i}`}
              src="/elements/sticker-ribbon.svg"
              alt="Creatathon Stickers Strip"
              width={600}
              height={70}
              className="w-auto h-[60px] lg:h-[68px] object-contain block shrink-0"
            />
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee-infinite items-center" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={`r2-${i}`}
              src="/elements/sticker-ribbon.svg"
              alt="Creatathon Stickers Strip"
              width={600}
              height={70}
              className="w-auto h-[60px] lg:h-[68px] object-contain block shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
