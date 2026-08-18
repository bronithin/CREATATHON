"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("[Global Error Boundary Caught]:", error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FDF9EB] text-[#18181B] flex flex-col items-center justify-center p-4 font-sans select-none">
        <div className="w-full max-w-[380px] bg-[#FFD200] rounded-3xl border-[3px] border-black p-6 text-center shadow-[6px_6px_0px_#000000] relative overflow-hidden">
          {/* Background Decorative Sticker */}
          <div className="absolute top-2 right-2 w-10 h-10 pointer-events-none opacity-80">
            <Image
              src="/elements/star-pink.svg"
              alt="Star"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-[52px] leading-none mb-2">⚡</div>

          <span className="px-3 py-0.5 bg-[#FF0052] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-md border-[1.5px] border-black shadow-[2px_2px_0px_#000000] inline-block mb-3">
            APPLICATION ERROR
          </span>

          <h1 className="text-[24px] font-black uppercase text-[#18181B] leading-tight mb-2">
            CRITICAL GLITCH
          </h1>

          <p className="text-[12px] font-bold uppercase text-[#18181B]/80 mb-5 leading-relaxed">
            The application encountered an unexpected state. Please reload to restore the festival.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-3 bg-[#FF0052] text-white font-bold text-[14px] uppercase rounded-xl border-[2px] border-black shadow-[3px_3px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            RESTORE APPLICATION
          </button>
        </div>
      </body>
    </html>
  );
}
