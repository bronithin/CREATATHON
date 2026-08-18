import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FCD60B] select-none p-4">
      {/* Center 3D Angled Creatathon Sticker Logo */}
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-[360px]">
        {/* Official Pink Logo */}
        <div className="w-[260px] sm:w-[290px] h-[80px] relative flex items-center justify-center">
          <Image
            src="/elements/creatathon-logo.svg"
            alt="Creatathon"
            width={290}
            height={80}
            className="w-full h-full object-contain block drop-shadow-[0_4px_16px_rgba(255,0,82,0.25)]"
            priority
          />
        </div>

        {/* 3D Angled Pink Badge Sticker */}
        <div className="w-full max-w-[320px] -mt-2 mb-4 flex justify-center">
          <div className="inline-block transform -rotate-3 bg-[#FF0052] text-white font-display text-[18px] sm:text-[20px] tracking-widest font-black uppercase px-6 py-2 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_#000000]">
            CREATATHON 2026
          </div>
        </div>

        {/* High-Contrast Progress Indicator */}
        <div className="w-[220px] mt-4">
          <div className="w-full h-[6px] bg-black/15 rounded-full overflow-hidden border-[1.5px] border-black p-[1px]">
            <div className="h-full bg-[#FF0052] rounded-full w-2/3 animate-pulse shadow-[0_0_8px_#FF0052]" />
          </div>
          <p className="font-jetbrains text-[10px] font-bold text-center text-[#18181B] uppercase tracking-wider mt-2.5">
            LOADING...
          </p>
        </div>
      </div>
    </div>
  );
}
