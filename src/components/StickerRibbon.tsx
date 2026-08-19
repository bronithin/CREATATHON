import React from "react";

export default function StickerRibbon() {
  return (
    <div className="w-full h-[52px] md:h-[64px] lg:h-[70px] select-none overflow-hidden flex items-center bg-white border-y-2 border-black/80">
      {/* Repeating marquee ribbon */}
      <div className="flex w-full overflow-hidden items-center">
        <div className="flex shrink-0 animate-marquee-infinite items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={`r1-${i}`}
              src="/elements/sticker-ribbon.svg"
              alt="Creatathon Stickers Strip"
              width={402}
              height={52}
              className="h-[52px] md:h-[64px] lg:h-[70px] w-auto object-contain block shrink-0"
              loading={i <= 2 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee-infinite items-center" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={`r2-${i}`}
              src="/elements/sticker-ribbon.svg"
              alt=""
              width={402}
              height={52}
              className="h-[52px] md:h-[64px] lg:h-[70px] w-auto object-contain block shrink-0"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

