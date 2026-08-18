import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FCD60B] select-none p-4">
      {/* Center 3D Angled Creatathon Sticker Logo */}
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-[402px]">
        {/* Extra Large Official Pink Logo */}
        <div className="w-[340px] sm:w-[380px] h-[115px] sm:h-[130px] relative flex items-center justify-center">
          <Image
            src="/elements/creatathon-logo.svg"
            alt="Creatathon"
            width={380}
            height={130}
            style={{ width: "auto", height: "auto" }}
            className="w-auto h-auto max-w-full max-h-full object-contain block drop-shadow-[0_8px_24px_rgba(255,0,82,0.35)]"
            priority
          />
        </div>

        {/* High-Contrast Progress Indicator */}
        <div className="w-[260px] sm:w-[280px] mt-8">
          <div className="w-full h-[6px] bg-black/15 rounded-full overflow-hidden border-[1.5px] border-black p-[1px]">
            <div className="h-full bg-[#FF0052] rounded-full w-2/3 animate-pulse shadow-[0_0_8px_#FF0052]" />
          </div>
        </div>
      </div>
    </div>
  );
}
