"use client";

import React, { useState, useEffect } from "react";

type TabType = "EXPLORE" | "CREATE" | "RANKS" | "WALLET";

export default function BottomNav() {
  const [comingSoonTab, setComingSoonTab] = useState<TabType | null>(null);

  // Close modal on Escape key press only when modal is active
  useEffect(() => {
    if (!comingSoonTab) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setComingSoonTab(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [comingSoonTab]);

  const handleTabClick = (tab: TabType) => {
    if (tab === "EXPLORE") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setComingSoonTab(tab);
    }
  };

  const getTabDetails = (tab: TabType) => {
    switch (tab) {
      case "CREATE":
        return {
          title: "CREATE",
          color: "#FFD200",
          iconBg: "#FF0052",
          subtitle: "Creator Studio & Challenges",
          desc: "Publish your work, connect with brands, and submit entries for live creative challenges during Creatathon 2026.",
        };
      case "RANKS":
        return {
          title: "RANKS",
          color: "#0054D9",
          iconBg: "#FFD200",
          subtitle: "Leaderboards & Creator Awards",
          desc: "Discover Kerala's trending creators and vote for the official Creatathon Creator Awards 2026.",
        };
      case "WALLET":
        return {
          title: "WALLET",
          color: "#00D890",
          iconBg: "#0054D9",
          subtitle: "Digital Passes & Perks",
          desc: "Manage your festival access passes, unlock partner brand perks, and collect exclusive event badges.",
        };
      default:
        return {
          title: "FEATURE",
          color: "#FFD200",
          iconBg: "#FF0052",
          subtitle: "Creatathon 2026",
          desc: "This feature is coming soon.",
        };
    }
  };

  const modalData = comingSoonTab ? getTabDetails(comingSoonTab) : null;

  return (
    <>
      {/* Fixed Bottom Dock Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none select-none">
        <nav className="pointer-events-auto w-[402px] h-[78px] bg-white border-t-[2px] border-black flex items-center justify-around px-2 shadow-2xl">
          {/* Tab 1: EXPLORE */}
          <button
            type="button"
            onClick={() => handleTabClick("EXPLORE")}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-1 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            aria-label="Explore"
          >
            {/* Compass Icon in Circle */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[26px] h-[26px]">
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
          </button>

          {/* Tab 2: CREATE */}
          <button
            type="button"
            onClick={() => handleTabClick("CREATE")}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-1 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            aria-label="Create"
          >
            {/* Isometric 3D Cube with Center Node */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[26px] h-[26px]">
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
          </button>

          {/* Tab 3: RANKS */}
          <button
            type="button"
            onClick={() => handleTabClick("RANKS")}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-1 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            aria-label="Ranks"
          >
            {/* Trophy Cup Icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[26px] h-[26px]">
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
          </button>

          {/* Tab 4: WALLET */}
          <button
            type="button"
            onClick={() => handleTabClick("WALLET")}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-1 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            aria-label="Wallet"
          >
            {/* Wallet / Passholder Icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-[26px] h-[26px]">
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
          </button>
        </nav>
      </div>

      {/* Coming Soon Interactive Popover Modal */}
      {comingSoonTab && modalData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setComingSoonTab(null)}
        >
          <div
            className="w-full max-w-[340px] bg-[#FDF9EB] rounded-2xl border-[3px] border-black p-5 shadow-[6px_6px_0px_#000000] relative animate-in zoom-in-95 duration-150 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Pill & Close Button */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-jetbrains text-[10px] font-bold uppercase tracking-wider bg-[#FF0052] text-white px-2.5 py-1 rounded-md border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                COMING SOON
              </span>
              <button
                type="button"
                onClick={() => setComingSoonTab(null)}
                className="w-7 h-7 rounded-full bg-white border-[2px] border-black flex items-center justify-center font-bold text-xs shadow-[1.5px_1.5px_0px_#000000] hover:bg-black hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Icon & Title Header */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-xl border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] text-black shrink-0"
                style={{ backgroundColor: modalData.color }}
              >
                {comingSoonTab === "CREATE" && (
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
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
                    <circle cx="14" cy="14" r="3" stroke="#18181B" strokeWidth="2" fill="#FFFFFF" />
                  </svg>
                )}
                {comingSoonTab === "RANKS" && (
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
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
                )}
                {comingSoonTab === "WALLET" && (
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
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
                )}
              </div>
              <div>
                <h3 className="font-display text-[22px] leading-tight font-black uppercase text-[#18181B]">
                  {modalData.title}
                </h3>
                <p className="font-jetbrains text-[10px] font-bold text-[#18181B]/70 uppercase">
                  {modalData.subtitle}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <p className="text-[13px] leading-[18px] text-[#18181B]/85 font-medium mb-4 bg-white/70 p-3 rounded-xl border-[1.5px] border-black/20">
              {modalData.desc}
            </p>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => setComingSoonTab(null)}
              className="w-full py-2.5 bg-[#FFD200] text-black font-display text-[14px] font-bold uppercase rounded-xl border-[2px] border-black shadow-[3px_3px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer text-center"
            >
              GOT IT 👍
            </button>
          </div>
        </div>
      )}
    </>
  );
}
