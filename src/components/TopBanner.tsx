import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBanner() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full select-none flex flex-col shadow-sm">
        {/* Top Pink Announcement Ticker Bar (H=32px on mobile, H=36px on desktop) */}
        <div className="w-full h-[32px] md:h-[36px] bg-[#FF0052] text-white text-[11px] md:text-[12px] font-bold tracking-wider uppercase overflow-hidden relative flex items-center select-none border-b border-black/10">
          <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap">
            <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
            <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
          </div>
          <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap" aria-hidden="true">
            <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
            <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
          </div>
        </div>

        {/* Yellow Header Bar with Centered Logo */}
        <div className="w-full h-[68px] md:h-[84px] bg-[#FCD60B] flex items-center justify-center px-4 relative border-b-2 border-black/10">
          <Link
            href="/"
            className="w-[174px] h-[54px] md:w-[200px] md:h-[60px] relative flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
            aria-label="Creatathon Home"
          >
            <Image
              src="/elements/creatathon-logo.svg"
              alt="Creatathon Logo"
              width={200}
              height={60}
              style={{ width: "100%", height: "100%" }}
              className="object-contain block drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Spacer to prevent layout shift with fixed header */}
      <div className="w-full h-[100px] md:h-[120px] shrink-0" aria-hidden="true" />
    </>
  );
}
