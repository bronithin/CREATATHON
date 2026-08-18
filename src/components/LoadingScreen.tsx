"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 12;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const finishTimer = setTimeout(() => {
          setIsFinished(true);
        }, 500);
        return () => clearTimeout(finishTimer);
      }, 250);

      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FCD60B] select-none transition-all duration-500 ease-in-out ${
        isExiting ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Center 3D Angled Creatathon Sticker Logo */}
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-[360px]">
        {/* Official Pink Logo Option */}
        <div className="w-[260px] sm:w-[290px] h-[80px] relative flex items-center justify-center transition-transform hover:scale-105 duration-300">
          <Image
            src="/elements/creatathon-logo.svg"
            alt="Creatathon"
            width={290}
            height={80}
            className="w-full h-full object-contain block drop-shadow-[0_4px_16px_rgba(255,0,82,0.25)]"
            priority
          />
        </div>

        {/* 3D Angled Pink Badge Sticker (Matching Reference) */}
        <div className="w-full max-w-[320px] -mt-2 mb-4 flex justify-center">
          <div className="inline-block transform -rotate-3 bg-[#FF0052] text-white font-display text-[18px] sm:text-[20px] tracking-widest font-black uppercase px-6 py-2 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_#000000]">
            CREATATHON 2026
          </div>
        </div>

        {/* High-Contrast Sleek Progress Bar */}
        <div className="w-[220px] mt-4">
          <div className="w-full h-[6px] bg-black/15 rounded-full overflow-hidden border-[1.5px] border-black p-[1px]">
            <div
              className="h-full bg-[#FF0052] rounded-full transition-all duration-150 ease-out shadow-[0_0_8px_#FF0052]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-2.5 font-jetbrains text-[11px] font-extrabold uppercase text-[#18181B] tracking-wider">
            <span>LOADING</span>
            <span className="bg-black text-[#00D890] px-2 py-0.5 rounded text-[10px] font-mono">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
