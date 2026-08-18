"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 12;
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
      {/* Center 3D Angled Creatathon Badge */}
      <div className="flex flex-col items-center justify-center px-4">
        <div className="w-[300px] sm:w-[319px] h-[68px] relative flex items-center justify-center transition-transform hover:scale-105 duration-300">
          <Image
            src="/elements/creatathon-badge.svg"
            alt="Creatathon"
            width={319}
            height={68}
            className="w-full h-full object-contain block drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            priority
          />
        </div>

        {/* Simple Sleek Progress Bar */}
        <div className="w-[220px] mt-6">
          <div className="w-full h-[4px] bg-black/15 rounded-full overflow-hidden border border-black/10">
            <div
              className="h-full bg-[#FF0052] rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-2 font-jetbrains text-[10px] font-bold uppercase text-[#18181B]/70 tracking-wider">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
