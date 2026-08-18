import React from "react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#0054D9] text-white py-8 sm:py-10 px-4 border-t border-white/20 flex flex-col items-center justify-center gap-3 select-none">
      <Link
        href="/terms"
        className="font-jetbrains text-[13px] sm:text-[14px] font-bold text-white uppercase underline underline-offset-4 tracking-wider hover:text-[#FFD200] transition-colors cursor-pointer"
      >
        TERMS &amp; CONDITIONS
      </Link>
      <p className="font-jetbrains text-[12px] sm:text-[13px] font-normal text-white/80 tracking-wide text-center m-0">
        &copy; 2026 Creatathon. All rights reserved.
      </p>
    </footer>
  );
}
