import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBanner() {
  return (
    <header className="relative z-20 w-full select-none flex flex-col">
      {/* Top Red Announcement Ticker Bar (H=32px) */}
      <div className="w-full h-[32px] bg-[#FF0052] text-white text-[11px] font-bold tracking-wider uppercase overflow-hidden relative flex items-center select-none">
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap">
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
        </div>
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap" aria-hidden="true">
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • NOV 2026 • TICKETS LIVE •</span>
        </div>
      </div>

      {/* Yellow Header Bar (H=68px) with Creatathon Script Logo (174x54) */}
      <div className="w-full h-[68px] bg-[#FCD60B] flex items-center justify-center relative">
        <Link href="/" className="w-[174px] h-[54px] relative flex items-center justify-center cursor-pointer transition-transform hover:scale-105" aria-label="Creatathon Home">
          <Image
            src="/elements/creatathon-logo.svg"
            alt="Creatathon Logo"
            width={174}
            height={54}
            className="w-auto h-auto max-w-full max-h-full object-contain block"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
