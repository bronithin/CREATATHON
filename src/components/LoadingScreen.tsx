"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const LOADING_STEPS = [
  "INITIALIZING FESTIVAL ENGINE...",
  "CONNECTING 500+ CREATORS & BRANDS...",
  "TUNING LIVE AUDIO & 3D STAGES...",
  "WELCOME TO CREATATHON 2026! 🚀",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast, punchy loading progression (~1.4 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 10;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 30) {
      setStepIndex(0);
    } else if (progress < 65) {
      setStepIndex(1);
    } else if (progress < 95) {
      setStepIndex(2);
    } else {
      setStepIndex(3);
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const finishTimer = setTimeout(() => {
          setIsFinished(true);
        }, 500);
        return () => clearTimeout(finishTimer);
      }, 300);

      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  if (isFinished) return null;

  // 10-segmented brutalist progress bar calculation
  const filledBlocks = Math.floor((progress / 100) * 10);

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-[#FDF9EB] select-none transition-all duration-500 ease-in-out ${
        isExiting ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
      style={{
        backgroundImage: "radial-gradient(#18181B 1.2px, transparent 1.2px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Central Loading Box */}
      <div className="w-[340px] bg-white rounded-2xl border-[3px] border-black p-6 shadow-[6px_6px_0px_#000000] flex flex-col items-center text-center relative mx-4">
        {/* Top Header Tag */}
        <div className="inline-block -mt-10 mb-4">
          <span className="px-3.5 py-1 bg-[#FCD60B] text-black text-[10px] font-jetbrains font-extrabold uppercase tracking-wider rounded-md border-[2px] border-black shadow-[2px_2px_0px_#000000] inline-block">
            CREATATHON 2026 // KOCHI
          </span>
        </div>

        {/* 4 Animated Festival Icon Badges */}
        <div className="flex items-center justify-center gap-3 my-2">
          {/* Flower */}
          <div className="w-10 h-10 rounded-xl bg-[#FFD200] border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] animate-spin-slow">
            <Image
              src="/elements/flower-yellow.svg"
              alt="Flower"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </div>

          {/* Flame */}
          <div className="w-10 h-10 rounded-xl bg-[#FF0052] border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] animate-bounce">
            <Image
              src="/elements/flame-pink.svg"
              alt="Flame"
              width={22}
              height={22}
              className="w-5.5 h-5.5 object-contain"
            />
          </div>

          {/* Star */}
          <div className="w-10 h-10 rounded-xl bg-[#00D890] border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] animate-pulse">
            <Image
              src="/elements/star-green.svg"
              alt="Star"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </div>

          {/* Cube */}
          <div className="w-10 h-10 rounded-xl bg-[#0054D9] border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] text-white">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 2.5L24 8.27V19.73L14 25.5L4 19.73V8.27L14 2.5Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M14 25.5V14M4 8.27L14 14M24 8.27L14 14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Creatathon Logo */}
        <div className="w-[180px] h-[52px] relative flex items-center justify-center my-2">
          <Image
            src="/elements/creatathon-logo.svg"
            alt="Creatathon Logo"
            width={180}
            height={52}
            className="w-[180px] h-[52px] object-contain block"
            priority
          />
        </div>

        {/* Status Line */}
        <div className="bg-[#FFFAE5] w-full py-2 px-3 rounded-lg border-[1.5px] border-black/20 my-2">
          <p className="font-jetbrains text-[10px] font-bold text-[#18181B] uppercase tracking-tight truncate">
            {LOADING_STEPS[stepIndex]}
          </p>
        </div>

        {/* 10-Segmented Neo-Brutalist Loading Bar */}
        <div className="w-full mt-2">
          <div className="flex items-center justify-between font-jetbrains text-[11px] font-bold uppercase text-[#18181B] mb-1.5 px-0.5">
            <span>LOADING</span>
            <span className="bg-[#18181B] text-[#00D890] px-1.5 py-0.5 rounded text-[10px]">
              {progress}%
            </span>
          </div>

          <div className="grid grid-cols-10 gap-1 p-1 bg-[#18181B] rounded-lg border-[2px] border-black">
            {Array.from({ length: 10 }).map((_, idx) => {
              const isFilled = idx < filledBlocks;
              // Color palette for segments
              const segmentColors = [
                "#FFD200",
                "#FFD200",
                "#FF0052",
                "#FF0052",
                "#0054D9",
                "#0054D9",
                "#00D890",
                "#00D890",
                "#00D890",
                "#00D890",
              ];
              const color = segmentColors[idx];

              return (
                <div
                  key={idx}
                  className="h-3.5 rounded-xs transition-all duration-150"
                  style={{
                    backgroundColor: isFilled ? color : "#27272A",
                    boxShadow: isFilled ? `0 0 6px ${color}88` : "none",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
