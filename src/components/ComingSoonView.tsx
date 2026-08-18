"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBanner from "./TopBanner";
import BottomNav from "./BottomNav";

interface ComingSoonViewProps {
  initialTab?: string;
}

const TAB_DATA: Record<
  string,
  {
    name: string;
    badge: string;
    tagline: string;
    description: string;
    bgColor: string;
    textColor: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    features: { icon: string; title: string; desc: string }[];
  }
> = {
  CREATE: {
    name: "CREATE",
    badge: "CREATOR STUDIO • PHASE 2",
    tagline: "BUILD. COLLABORATE. LAUNCH.",
    description:
      "The dedicated hub for creators to publish work, pitch to 50+ top brands, find collaborators across Kerala, and submit challenge entries.",
    bgColor: "#FFD200",
    textColor: "#18181B",
    badgeBg: "#FF0052",
    badgeText: "#FFFFFF",
    iconBg: "#0054D9",
    features: [
      {
        icon: "🎨",
        title: "Portfolio Showcase",
        desc: "Display your best videos, design, photography & creative work to industry scouts.",
      },
      {
        icon: "🤝",
        title: "Brand Collab Hub",
        desc: "Direct access to sponsored campaign briefs and brand partnership opportunities.",
      },
      {
        icon: "⚡",
        title: "Challenge Submissions",
        desc: "Compete in 48-hour content sprints, hackathons, and live creative showdowns.",
      },
    ],
  },
  RANKS: {
    name: "RANKS",
    badge: "AWARDS & LEADERBOARDS • 2026",
    tagline: "RECOGNIZE KERALA'S TOP TALENT.",
    description:
      "Spotlighting Kerala's most impactful creators. Vote for the Creatathon Awards, track creator categories, and see who's dominating the ecosystem.",
    bgColor: "#0054D9",
    textColor: "#FFFFFF",
    badgeBg: "#FFD200",
    badgeText: "#18181B",
    iconBg: "#FF0052",
    features: [
      {
        icon: "🏆",
        title: "Creatathon Awards 2026",
        desc: "Official community voting across 15+ creator categories and niches.",
      },
      {
        icon: "📈",
        title: "Creator Leaderboards",
        desc: "Real-time discovery for emerging and trending content creators in Kerala.",
      },
      {
        icon: "🎖️",
        title: "Official Verification",
        desc: "Get verified badges and credibility markers for festival access & VIP lounges.",
      },
    ],
  },
  WALLET: {
    name: "WALLET",
    badge: "PASSES & REWARDS • DIGITAL PASS",
    tagline: "YOUR FESTIVAL KEY & REWARDS.",
    description:
      "Your all-in-one digital pass for Creatathon 2026 in Kochi. Access workshops, claim brand perks, unlock merchandise, and hold festival badges.",
    bgColor: "#00D890",
    textColor: "#18181B",
    badgeBg: "#0054D9",
    badgeText: "#FFFFFF",
    iconBg: "#FF0052",
    features: [
      {
        icon: "🎫",
        title: "Fast-Track Digital Pass",
        desc: "Seamless QR check-in at the Kochi venue with instant access to your registered zones.",
      },
      {
        icon: "🎁",
        title: "Exclusive Creator Perks",
        desc: "Claim software discounts, camera gear vouchers, and backstage access passes.",
      },
      {
        icon: "💎",
        title: "Festival Collectibles",
        desc: "Store proof-of-attendance badges and limited-edition digital festival memorabilia.",
      },
    ],
  },
};

export default function ComingSoonView({ initialTab = "CREATE" }: ComingSoonViewProps) {
  const normalizedKey = (initialTab || "CREATE").toUpperCase();
  const currentTab = TAB_DATA[normalizedKey] || TAB_DATA.CREATE;

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <main className="w-[402px] max-w-[402px] min-h-screen bg-[#FDF9EB] shadow-2xl border-x border-black/15 relative flex flex-col mx-auto overflow-x-hidden pb-[96px]">
      {/* 1. Standard Top Banner Header */}
      <TopBanner />

      {/* 2. Breadcrumb / Back Link */}
      <div className="px-5 pt-4 pb-2 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-[2px] border-black rounded-lg text-[11px] font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
        >
          <span>←</span>
          <span>Back to Explore</span>
        </Link>
        <span className="font-jetbrains text-[10px] font-bold uppercase bg-[#FFFAE5] px-2.5 py-1 rounded border border-black/20 text-[#18181B]">
          NOV 2026 • KOCHI
        </span>
      </div>

      {/* 3. Hero Feature Card */}
      <div className="px-5 pt-2 pb-4">
        <div
          className="w-full rounded-2xl border-[3px] border-black p-6 relative shadow-[5px_5px_0px_#000000] overflow-hidden transition-all"
          style={{ backgroundColor: currentTab.bgColor, color: currentTab.textColor }}
        >
          {/* Decorative Corner Badge */}
          <div className="inline-block mb-3">
            <span
              className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-md border-[2px] border-black shadow-[2px_2px_0px_#000000] inline-block"
              style={{ backgroundColor: currentTab.badgeBg, color: currentTab.badgeText }}
            >
              {currentTab.badge}
            </span>
          </div>

          {/* Icon Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-14 h-14 rounded-xl border-[2.5px] border-black flex items-center justify-center shadow-[3px_3px_0px_#000000] text-white shrink-0"
              style={{ backgroundColor: currentTab.iconBg }}
            >
              {normalizedKey === "CREATE" && (
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
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
                  <circle cx="14" cy="14" r="3.2" stroke="currentColor" strokeWidth="2.5" fill="#FFFFFF" />
                </svg>
              )}
              {normalizedKey === "RANKS" && (
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M7 4H21V10C21 13.866 17.866 17 14 17C10.134 17 7 13.866 7 10V4Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 6H4C2.89543 6 2 6.89543 2 8V9C2 10.6569 3.34315 12 5 12H7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 6H24C25.1046 6 26 6.89543 26 8V9C26 10.6569 24.6569 12 23 12H21"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 17V22M8 22H20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {normalizedKey === "WALLET" && (
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="22"
                    height="18"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 10H22.5C23.8807 10 25 11.1193 25 12.5V15.5C25 16.8807 23.8807 18 22.5 18H17V10Z"
                    fill="#FFFFFF"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="21" cy="14" r="1.3" fill="currentColor" />
                </svg>
              )}
            </div>
            <div>
              <h1 className="font-display text-[32px] leading-none tracking-tight font-black uppercase">
                {currentTab.name}
              </h1>
              <p className="font-jetbrains text-[10px] font-bold tracking-tight opacity-90 uppercase mt-0.5">
                {currentTab.tagline}
              </p>
            </div>
          </div>

          {/* Big Status Callout */}
          <div className="bg-black/10 rounded-xl p-3.5 border-[2px] border-black/20 mb-4 backdrop-blur-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF0052] animate-ping" />
              <span className="font-jetbrains text-[11px] font-black uppercase tracking-wider">
                FEATURE LAUNCHING SOON
              </span>
            </div>
            <p className="text-[13px] leading-[19px] font-medium opacity-95">
              {currentTab.description}
            </p>
          </div>

          {/* Feature Bullets */}
          <div className="space-y-2.5 mb-5">
            {currentTab.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white text-[#18181B] p-3 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_#000000]"
              >
                <span className="text-xl shrink-0 mt-0.5">{feat.icon}</span>
                <div>
                  <h4 className="font-display text-[14px] font-bold leading-tight uppercase">
                    {feat.title}
                  </h4>
                  <p className="text-[12px] leading-[16px] text-[#18181B]/80 font-normal mt-0.5">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Early Access / Notify Form */}
          <div className="bg-white text-[#18181B] p-4 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_#000000]">
            <h3 className="font-display text-[16px] font-bold uppercase mb-1">
              GET EARLY ACCESS
            </h3>
            <p className="text-[12px] text-[#18181B]/75 mb-3 leading-snug">
              Be the first to know when <strong>{currentTab.name}</strong> launches at Creatathon 2026.
            </p>

            {submitted ? (
              <div className="p-3 bg-[#00D890]/20 border-[2px] border-[#00D890] rounded-lg flex items-center gap-2">
                <span className="text-lg">🎉</span>
                <div>
                  <p className="font-bold text-[12px] text-[#18181B]">You&apos;re on the VIP list!</p>
                  <p className="text-[11px] text-[#18181B]/80">We&apos;ll notify you first when this launches.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 text-[12px] border-[2px] border-black rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-[#FF0052]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#FF0052] text-white font-display text-[13px] font-bold uppercase rounded-lg border-[2px] border-black shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                >
                  NOTIFY ME WHEN LIVE 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 4. Quick Nav Switcher */}
      <div className="px-5 py-2">
        <p className="font-jetbrains text-[10px] font-bold uppercase text-center text-[#18181B]/60 mb-2">
          EXPLORE OTHER UPCOMING FEATURES
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Link
            href="/create"
            className={`py-2 px-1 text-center rounded-lg border-[2px] border-black font-jetbrains text-[10px] font-bold uppercase shadow-[2px_2px_0px_#000000] transition-transform hover:scale-105 cursor-pointer ${
              normalizedKey === "CREATE" ? "bg-[#FFD200] text-black" : "bg-white text-black"
            }`}
          >
            CREATE
          </Link>
          <Link
            href="/ranks"
            className={`py-2 px-1 text-center rounded-lg border-[2px] border-black font-jetbrains text-[10px] font-bold uppercase shadow-[2px_2px_0px_#000000] transition-transform hover:scale-105 cursor-pointer ${
              normalizedKey === "RANKS" ? "bg-[#0054D9] text-white" : "bg-white text-black"
            }`}
          >
            RANKS
          </Link>
          <Link
            href="/wallet"
            className={`py-2 px-1 text-center rounded-lg border-[2px] border-black font-jetbrains text-[10px] font-bold uppercase shadow-[2px_2px_0px_#000000] transition-transform hover:scale-105 cursor-pointer ${
              normalizedKey === "WALLET" ? "bg-[#00D890] text-black" : "bg-white text-black"
            }`}
          >
            WALLET
          </Link>
        </div>
      </div>

      {/* 5. Fixed Bottom Navigation */}
      <BottomNav activeKey={normalizedKey} />
    </main>
  );
}
