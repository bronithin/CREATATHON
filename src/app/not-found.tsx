import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopBanner from "@/components/TopBanner";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "404 - Page Not Found | Creatathon 2026",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDF9EB] text-[#18181B] flex flex-col items-center select-none overflow-x-hidden">
      <main className="w-full max-w-[402px] min-h-screen bg-[#FDF9EB] shadow-2xl border-x border-black/15 relative flex flex-col mx-auto overflow-x-hidden">
        {/* 1. Header with Red Announcement & Yellow Logo */}
        <TopBanner />

        {/* 2. 404 Main Body Container */}
        <div className="px-5 pt-6 pb-6 flex flex-col items-center text-center">
          {/* Top Pill Tag */}
          <div className="inline-block mb-3">
            <span className="px-3.5 py-1 bg-[#FF0052] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-md border-[2px] border-black shadow-[2px_2px_0px_#000000] inline-block">
              ERROR 404 • STAGE NOT FOUND
            </span>
          </div>

          {/* Giant Neo-brutalist 404 Card */}
          <div className="w-full bg-[#FFD200] rounded-3xl border-[3px] border-black p-6 relative shadow-[6px_6px_0px_#000000] overflow-hidden my-2">
            {/* Background Decorative Stickers */}
            <div className="absolute top-2 right-2 w-10 h-10 pointer-events-none opacity-80 animate-spin-slow">
              <Image
                src="/elements/star-pink.svg"
                alt="Star"
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-2 left-2 w-10 h-10 pointer-events-none opacity-80 animate-pulse">
              <Image
                src="/elements/flower-green.svg"
                alt="Flower"
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Giant 404 Digits */}
            <h1 className="font-display text-[92px] leading-none font-black text-[#18181B] tracking-tight drop-shadow-[3px_3px_0px_#FFFFFF]">
              404
            </h1>

            {/* Subheading */}
            <h2 className="font-display text-[22px] leading-tight font-black uppercase text-[#FF0052] mt-1">
              LOST IN THE FESTIVAL?
            </h2>

            <p className="font-jetbrains text-[11px] font-bold uppercase text-[#18181B] mt-2 leading-[16px] px-2">
              Looks like this stage doesn&apos;t exist, was moved, or is still being built by the crew in Kochi.
            </p>
          </div>

          {/* Quick Action Navigation Card */}
          <div className="w-full bg-white rounded-2xl border-[2.5px] border-black p-5 shadow-[4px_4px_0px_#000000] mt-4 flex flex-col gap-3">
            <h3 className="font-display text-[15px] font-bold uppercase text-left text-[#18181B]">
              GET BACK ON TRACK:
            </h3>

            {/* Home Link Button */}
            <Link
              href="/"
              className="w-full py-3 bg-[#FF0052] text-white font-display text-[14px] font-bold uppercase rounded-xl border-[2px] border-black shadow-[3px_3px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>←</span>
              <span>BACK TO MAIN FESTIVAL</span>
            </Link>

            {/* Secondary Quick Action */}
            <div className="grid grid-cols-2 gap-2 mt-1">
              <Link
                href="/#what-happens"
                className="py-2 px-2 bg-[#FDF9EB] text-[#18181B] font-jetbrains text-[10px] font-bold uppercase rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_#000000] hover:bg-[#FFD200] transition-colors text-center"
              >
                WHAT HAPPENS
              </Link>
              <Link
                href="/#ecosystem"
                className="py-2 px-2 bg-[#FDF9EB] text-[#18181B] font-jetbrains text-[10px] font-bold uppercase rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_#000000] hover:bg-[#00D890] transition-colors text-center"
              >
                WHO BELONGS
              </Link>
            </div>
          </div>

          {/* Festival Info Note */}
          <div className="w-full mt-5 bg-[#0054D9] text-white rounded-xl border-[2px] border-black p-3.5 shadow-[3px_3px_0px_#000000] flex items-center gap-3">
            <span className="text-2xl shrink-0">📍</span>
            <div className="text-left">
              <p className="font-display text-[13px] font-bold uppercase leading-tight">
                CREATATHON 2026 • KOCHI
              </p>
              <p className="font-jetbrains text-[10px] font-medium text-white/90 mt-0.5">
                Kerala&apos;s 1st & Biggest Creator Festival • Nov 2026
              </p>
            </div>
          </div>
        </div>

        {/* Blue Legal Footer */}
        <SiteFooter />
      </main>
    </div>
  );
}
