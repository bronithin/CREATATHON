"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavProps {
  activeKey?: string;
}

export default function BottomNav({ activeKey }: BottomNavProps) {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (activeKey) return activeKey.toUpperCase();
    if (pathname === "/create") return "CREATE";
    if (pathname === "/ranks") return "RANKS";
    if (pathname === "/wallet") return "WALLET";
    if (pathname === "/coming-soon") return "CREATE";
    return "EXPLORE";
  };

  const active = getActiveTab();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none select-none">
      <nav className="pointer-events-auto w-[402px] h-[78px] bg-white border-t-[2px] border-black flex items-center justify-around px-2 shadow-2xl">
        {/* Tab 1: EXPLORE */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-1 px-3 py-1.5 rounded-xl cursor-pointer transition-all hover:scale-105 ${
            active === "EXPLORE"
              ? "bg-[#FDF9EB] border-[1.5px] border-black shadow-[2px_2px_0px_#000000]"
              : "opacity-75 hover:opacity-100"
          }`}
          aria-label="Explore"
        >
          {/* Compass Icon in Circle */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[24px] h-[24px]">
            <circle cx="14" cy="14" r="11" stroke="#18181B" strokeWidth="2.6" />
            <path
              d="M14 6.8L17.8 14L14 21.2L10.2 14Z"
              fill="#18181B"
              transform="rotate(-38 14 14)"
            />
            <circle cx="14" cy="14" r="1.5" fill="#FFFFFF" />
          </svg>
          <span className="font-jetbrains text-[10px] font-bold leading-[15px] tracking-[0px] uppercase align-middle text-[#18181B]">
            EXPLORE
          </span>
        </Link>

        {/* Tab 2: CREATE */}
        <Link
          href="/create"
          className={`flex flex-col items-center justify-center gap-1 px-3 py-1.5 rounded-xl cursor-pointer transition-all hover:scale-105 ${
            active === "CREATE"
              ? "bg-[#FFD200]/25 border-[1.5px] border-black shadow-[2px_2px_0px_#000000]"
              : "opacity-75 hover:opacity-100"
          }`}
          aria-label="Create"
        >
          {/* Isometric 3D Cube with Center Node */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[24px] h-[24px]">
            <path
              d="M14 2.5L24 8.27V19.73L14 25.5L4 19.73V8.27L14 2.5Z"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M14 25.5V14M4 8.27L14 14M24 8.27L14 14"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle cx="14" cy="14" r="3.2" stroke="#18181B" strokeWidth="2.5" fill="#FFFFFF" />
          </svg>
          <span className="font-jetbrains text-[10px] font-bold leading-[15px] tracking-[0px] uppercase align-middle text-[#18181B]">
            CREATE
          </span>
        </Link>

        {/* Tab 3: RANKS */}
        <Link
          href="/ranks"
          className={`flex flex-col items-center justify-center gap-1 px-3 py-1.5 rounded-xl cursor-pointer transition-all hover:scale-105 ${
            active === "RANKS"
              ? "bg-[#0054D9]/15 border-[1.5px] border-black shadow-[2px_2px_0px_#000000]"
              : "opacity-75 hover:opacity-100"
          }`}
          aria-label="Ranks"
        >
          {/* Trophy Cup Icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[24px] h-[24px]">
            <path
              d="M7 4H21V10C21 13.866 17.866 17 14 17C10.134 17 7 13.866 7 10V4Z"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 6H4C2.89543 6 2 6.89543 2 8V9C2 10.6569 3.34315 12 5 12H7"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 6H24C25.1046 6 26 6.89543 26 8V9C26 10.6569 24.6569 12 23 12H21"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 17V22M8 22H20"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-jetbrains text-[10px] font-bold leading-[15px] tracking-[0px] uppercase align-middle text-[#18181B]">
            RANKS
          </span>
        </Link>

        {/* Tab 4: WALLET */}
        <Link
          href="/wallet"
          className={`flex flex-col items-center justify-center gap-1 px-3 py-1.5 rounded-xl cursor-pointer transition-all hover:scale-105 ${
            active === "WALLET"
              ? "bg-[#00D890]/25 border-[1.5px] border-black shadow-[2px_2px_0px_#000000]"
              : "opacity-75 hover:opacity-100"
          }`}
          aria-label="Wallet"
        >
          {/* Wallet / Passholder Icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[24px] h-[24px]">
            <rect
              x="3"
              y="5"
              width="22"
              height="18"
              rx="4"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 10H22.5C23.8807 10 25 11.1193 25 12.5V15.5C25 16.8807 23.8807 18 22.5 18H17V10Z"
              fill="#FFFFFF"
              stroke="#18181B"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle cx="21" cy="14" r="1.3" fill="#18181B" />
          </svg>
          <span className="font-jetbrains text-[10px] font-bold leading-[15px] tracking-[0px] uppercase align-middle text-[#18181B]">
            WALLET
          </span>
        </Link>
      </nav>
    </div>
  );
}
