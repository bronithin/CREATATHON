import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FCD60B] select-none p-4">
      {/* Center 3D Angled Creatathon Badge */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-[300px] sm:w-[319px] h-[68px] relative flex items-center justify-center">
          <Image
            src="/elements/creatathon-badge.svg"
            alt="Creatathon"
            width={319}
            height={68}
            className="w-full h-full object-contain block drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            priority
          />
        </div>

        {/* Simple Progress Indicator */}
        <div className="w-[220px] mt-6">
          <div className="w-full h-[4px] bg-black/15 rounded-full overflow-hidden border border-black/10">
            <div className="h-full bg-[#FF0052] rounded-full w-2/3 animate-pulse" />
          </div>
          <p className="font-jetbrains text-[10px] font-bold text-center text-[#18181B]/70 uppercase tracking-wider mt-2">
            LOADING...
          </p>
        </div>
      </div>
    </div>
  );
}
