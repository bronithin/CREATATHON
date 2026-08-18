import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBanner() {
  return (
    <header className="relative z-20 w-full select-none flex flex-col">
      {/* Top Red Announcement Ticker Bar (H=32px on mobile, H=36px on desktop) */}
      <div className="w-full h-[32px] md:h-[36px] bg-[#FF0052] text-white text-[11px] md:text-[12px] font-bold tracking-wider uppercase overflow-hidden relative flex items-center select-none border-b border-black/10">
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap">
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
        </div>
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-6 whitespace-nowrap" aria-hidden="true">
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
          <span>KERALA&apos;S FIRST CREATOR FESTIVAL • KOCHI • SEP 2026 • TICKETS LIVE •</span>
        </div>
      </div>

      {/* Yellow Header Bar (H=68px mobile, H=84px desktop) */}
      <div className="w-full h-[68px] md:h-[84px] bg-[#FCD60B] flex items-center justify-center md:justify-between px-0 md:px-8 lg:px-14 relative border-b-2 border-black/10">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-center md:justify-between">
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
              className="w-auto h-auto max-w-full max-h-full object-contain block drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]"
              priority
            />
          </Link>

          {/* Desktop Navigation Links & Action Button */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-anton text-[#18181B] tracking-wide text-lg">
            <a href="#about" className="hover:text-[#FF0052] transition-colors uppercase">
              About
            </a>
            <a href="#whats-in" className="hover:text-[#0054D9] transition-colors uppercase">
              What&apos;s In
            </a>
            <a href="#schedule" className="hover:text-[#FF0052] transition-colors uppercase">
              Schedule
            </a>
            <a href="#community" className="hover:text-[#0054D9] transition-colors uppercase">
              Community
            </a>
            <a
              href="#tickets"
              className="ml-2 px-5 py-2 bg-[#FF0052] text-[#FFD200] text-base font-bold uppercase rounded-lg border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
            >
              Get Tickets
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
