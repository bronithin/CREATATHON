import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterHeader() {
  return (
    <header className="w-full h-[68px] bg-[#FCD60B] flex items-center justify-center px-4 relative border-b-2 border-black/10 shadow-sm">
      <Link
        href="/"
        className="w-[174px] h-[54px] relative flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
        aria-label="Creatathon Home"
      >
        <Image
          src="/elements/creatathon-logo.svg"
          alt="Creatathon Logo"
          width={174}
          height={54}
          style={{ width: "100%", height: "100%" }}
          className="object-contain block drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]"
          priority
        />
      </Link>
    </header>
  );
}
