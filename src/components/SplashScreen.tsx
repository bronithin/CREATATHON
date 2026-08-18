"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("LOADING FESTIVAL VIBES...");
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Increment progress smoothly over ~1.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 35) {
      setStatusText("LOADING FESTIVAL VIBES...");
    } else if (progress < 75) {
      setStatusText("CONNECTING 500+ CREATORS...");
    } else if (progress < 100) {
      setStatusText("PREPARING KOCHI 2026...");
    } else {
      setStatusText("READY! WELCOME TO CREATATHON");
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const finishTimer = setTimeout(() => {
          setIsFinished(true);
        }, 600);
        return () => clearTimeout(finishTimer);
      }, 350);

      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-between bg-[#FCD60B] select-none transition-all duration-600 ease-in-out ${
        isExiting ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Top Red Announcement Ticker Bar */}
      <div className="w-full h-[36px] bg-[#FF0052] text-white text-[11px] font-bold tracking-wider uppercase overflow-hidden relative flex items-center border-b-[2px] border-black">
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap">
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
        </div>
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap" aria-hidden="true">
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
        </div>
      </div>

      {/* Decorative Floating Stickers in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Star */}
        <div className="absolute top-16 right-6 w-12 h-12 animate-spin-slow">
          <Image
            src="/elements/star-pink.svg"
            alt="Star"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top Left Flower */}
        <div className="absolute top-24 left-6 w-14 h-14 animate-pulse">
          <Image
            src="/elements/flower-green.svg"
            alt="Flower"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Left Flame */}
        <div className="absolute bottom-20 left-8 w-12 h-12 animate-bounce">
          <Image
            src="/elements/flame-pink.svg"
            alt="Flame"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Right Flower */}
        <div className="absolute bottom-24 right-8 w-14 h-14 animate-spin-slow">
          <Image
            src="/elements/flower-yellow.svg"
            alt="Flower"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Center Branding Content */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-6 w-full max-w-[360px]">
        {/* Main Branding Card */}
        <div className="w-full bg-[#FDF9EB] rounded-3xl border-[3px] border-black p-6 shadow-[6px_6px_0px_#000000] flex flex-col items-center text-center relative">
          {/* Top Pill Tag */}
          <div className="inline-block -mt-10 mb-3">
            <span className="px-3.5 py-1.5 bg-[#FF0052] text-white text-[11px] font-black uppercase tracking-wider rounded-lg border-[2px] border-black shadow-[2px_2px_0px_#000000] inline-block">
              FESTIVAL 2026
            </span>
          </div>

          {/* Creatathon Big Script Logo */}
          <div className="w-[210px] h-[66px] relative flex items-center justify-center my-2 transition-transform hover:scale-105">
            <Image
              src="/elements/creatathon-logo.svg"
              alt="Creatathon Logo"
              width={210}
              height={66}
              className="w-[210px] h-[66px] object-contain block"
              priority
            />
          </div>

          {/* Subtitle Badge */}
          <div className="bg-[#0054D9] text-white px-3 py-1 rounded-md border-[1.5px] border-black text-[10px] font-extrabold uppercase tracking-wide shadow-[2px_2px_0px_#000000] my-2">
            KERALA&apos;S BIGGEST CREATOR FESTIVAL
          </div>

          <p className="font-jetbrains text-[10px] font-bold uppercase text-[#18181B]/75 mt-1 tracking-tight">
            KOCHI • NOVEMBER 2026
          </p>

          {/* Progress Bar Container */}
          <div className="w-full mt-6 mb-1">
            <div className="flex items-center justify-between text-[10px] font-jetbrains font-bold uppercase text-[#18181B] mb-1.5">
              <span>{statusText}</span>
              <span>{progress}%</span>
            </div>
            {/* Neo-brutalist Progress Track */}
            <div className="w-full h-4 bg-white rounded-full border-[2px] border-black overflow-hidden p-0.5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]">
              <div
                className="h-full bg-[#00D890] rounded-full border-[1px] border-black transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Red Marquee Ticker Bar */}
      <div className="w-full h-[36px] bg-[#0054D9] text-white text-[11px] font-bold tracking-wider uppercase overflow-hidden relative flex items-center border-t-[2px] border-black">
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap">
          <span>CREATORS • BRANDS • AGENCIES • WORKSHOPS • LIVE MUSIC • AFTERPARTY •</span>
          <span>CREATORS • BRANDS • AGENCIES • WORKSHOPS • LIVE MUSIC • AFTERPARTY •</span>
        </div>
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap" aria-hidden="true">
          <span>CREATORS • BRANDS • AGENCIES • WORKSHOPS • LIVE MUSIC • AFTERPARTY •</span>
          <span>CREATORS • BRANDS • AGENCIES • WORKSHOPS • LIVE MUSIC • AFTERPARTY •</span>
        </div>
      </div>
    </div>
  );
}
