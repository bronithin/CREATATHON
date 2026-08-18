import React from "react";
import Image from "next/image";

export default function StickerRibbon() {
  return (
    <div className="w-[402px] h-[52px] select-none overflow-hidden flex items-center justify-center bg-white">
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
  );
}
