"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress progression with ease-in-out increments
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 10;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Allow user to see 100% briefly, then trigger smooth ease-in-out exit
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const finishTimer = setTimeout(() => {
          setIsFinished(true);
        }, 700);
        return () => clearTimeout(finishTimer);
      }, 300);

      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FCD60B] select-none transition-all duration-700 ease-in-out ${
        isExiting
          ? "opacity-0 -translate-y-6 scale-[1.02] pointer-events-none"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-[402px]">
        {/* Extra Large 3D Angled Pink Creatathon Logo */}
        <div
          className={`w-[340px] sm:w-[380px] h-[115px] sm:h-[130px] relative flex items-center justify-center transition-all duration-700 ease-in-out ${
            isExiting ? "scale-90 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <Image
            src="/elements/creatathon-logo.svg"
            alt="Creatathon"
            width={380}
            height={130}
            className="w-auto h-auto max-w-full max-h-full object-contain block drop-shadow-[0_8px_24px_rgba(255,0,82,0.35)] transition-transform duration-500 ease-in-out hover:scale-105"
            priority
          />
        </div>

        {/* Minimal Progress Bar (Clean without text) */}
        <div
          className={`w-[260px] sm:w-[280px] mt-8 transition-all duration-700 ease-in-out ${
            isExiting ? "opacity-0 translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          <div className="w-full h-[6px] bg-black/15 rounded-full overflow-hidden border-[1.5px] border-black p-[1px]">
            <div
              className="h-full bg-[#FF0052] rounded-full transition-all duration-300 ease-in-out shadow-[0_0_10px_#FF0052]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
