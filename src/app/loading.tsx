import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FDF9EB] flex items-center justify-center select-none p-4">
      <div className="w-[320px] bg-white rounded-2xl border-[3px] border-black p-6 shadow-[5px_5px_0px_#000000] flex flex-col items-center text-center">
        {/* Animated Flower */}
        <div className="w-12 h-12 rounded-xl bg-[#FFD200] border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] animate-spin-slow mb-3">
          <Image
            src="/elements/flower-yellow.svg"
            alt="Loading"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </div>

        <div className="w-[160px] h-[46px] relative flex items-center justify-center my-1">
          <Image
            src="/elements/creatathon-logo.svg"
            alt="Creatathon Logo"
            width={160}
            height={46}
            className="w-[160px] h-[46px] object-contain block"
            priority
          />
        </div>

        <p className="font-jetbrains text-[10px] font-bold text-[#18181B]/80 uppercase mt-2">
          LOADING FESTIVAL EXPERIENCE...
        </p>

        {/* Pulsing bar */}
        <div className="w-full h-2.5 bg-black/10 rounded-full border-[1.5px] border-black overflow-hidden mt-3">
          <div className="h-full bg-[#00D890] w-2/3 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  );
}
