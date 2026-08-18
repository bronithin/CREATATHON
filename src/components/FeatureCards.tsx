import React from "react";
import Link from "next/link";

interface CardData {
  bg: string;
  titleColor: string;
  title: string;
  body: string;
  innerBg: string;
  width: string;
  height: string;
  rotation?: string;
  innerBoxHeight: string;
}

export default function FeatureCards() {
  const cards: CardData[] = [
    {
      bg: "#FFD200",
      titleColor: "#FF0052",
      title: "HEAR FROM PEOPLE BUILDING THE CREATOR ECONOMY",
      body: "Creators and thought leaders sharing insights, playbooks, and stories about building sustainable careers and businesses in the creator space.",
      innerBg: "#FFFFFF",
      width: "354px",
      height: "338px",
      rotation: "rotate(0deg)",
      innerBoxHeight: "124px",
    },
    {
      bg: "#FB0146",
      titleColor: "#FFD200",
      title: "EXPLORE NEW IDEAS",
      body: "Tactical workshops and masterclasses on storytelling, video production, monetization strategies, brand partnerships, and community growth.",
      innerBg: "#FFFAE5",
      width: "354px",
      height: "300px",
      rotation: "rotate(-3.84deg)",
      innerBoxHeight: "150px",
    },
    {
      bg: "#0054D9",
      titleColor: "#00D890",
      title: "MEET YOUR PEOPLE",
      body: "Connect with creators, brand marketers, talent agencies, and founders who understand the hustle and share your passion.",
      innerBg: "#FFFAE5",
      width: "354px",
      height: "300px",
      rotation: "rotate(0deg)",
      innerBoxHeight: "150px",
    },
    {
      bg: "#00D890",
      titleColor: "#0054D9",
      title: "DISCOVER OPPORTUNITIES",
      body: "Meet brands looking for creators, agencies looking for talent, and peers looking to collaborate on high-impact projects.",
      innerBg: "#FFFAE5",
      width: "354px",
      height: "320px",
      rotation: "rotate(3.2deg)",
      innerBoxHeight: "150px",
    },
    {
      bg: "#FFD200",
      titleColor: "#FF0052",
      title: "EXPERIENCE THE CULTURE",
      body: "Music, art installations, creator battles, live podcasts, and experiences that celebrate the vibrant creator culture of Kerala.",
      innerBg: "#FFFFFF",
      width: "354px",
      height: "320px",
      rotation: "rotate(0deg)",
      innerBoxHeight: "150px",
    },
  ];

  return (
    <section
      id="highlights"
      className="w-full max-w-[402px] md:max-w-none bg-[#FDF9EB] pt-[34px] pb-[44px] md:py-20 lg:py-28 px-4 md:px-10 lg:px-16 flex flex-col items-center select-none overflow-hidden mx-auto"
    >
      {/* Registration CTA Pill Buttons */}
      <div className="w-full max-w-[354px] flex flex-col gap-4 mb-9 select-none">
        {/* Button 1: REGISTER AS INFLUENCER */}
        <Link
          href="/register"
          className="w-full h-[57px] bg-[#FFD200] border-[2px] border-[#FF0052] rounded-full shadow-[0px_5px_0px_#FF0052] flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0px_1px_0px_#FF0052]"
          aria-label="Register as Influencer"
        >
          <span className="font-anton text-[23px] sm:text-[24px] text-[#FF0052] uppercase tracking-wide leading-none pt-0.5">
            REGISTER AS INFLUENCER
          </span>
        </Link>

        {/* Button 2: REGISTER AS BRAND */}
        <Link
          href="/register"
          className="w-full h-[57px] bg-[#00D890] border-[2px] border-[#0054D9] rounded-full shadow-[0px_5px_0px_#0054D9] flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0px_1px_0px_#0054D9]"
          aria-label="Register as Brand"
        >
          <span className="font-anton text-[23px] sm:text-[24px] text-[#0054D9] uppercase tracking-wide leading-none pt-0.5">
            REGISTER AS BRAND
          </span>
        </Link>
      </div>

      {/* Mobile Vertical Stack */}
      <div className="flex md:hidden flex-col gap-[36px] items-center w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-full max-w-[354px] border-2 border-black p-[20px] shadow-box-card flex flex-col justify-between"
            style={{
              minHeight: card.height,
              backgroundColor: card.bg,
              transform: card.rotation,
            }}
          >
            {/* Card Header Title */}
            <h3
              className="uppercase mb-[16px]"
              style={{
                color: card.titleColor,
                fontFamily: "var(--font-anton), Anton, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "40px",
                lineHeight: "110%",
                letterSpacing: "0px",
                verticalAlign: "middle",
                textTransform: "uppercase",
              }}
            >
              {card.title}
            </h3>

            {/* Inset White/Cream Content Card Box */}
            <div
              className="border-2 border-black/15 p-[16px] flex items-center"
              style={{
                backgroundColor: card.innerBg,
                minHeight: card.innerBoxHeight,
              }}
            >
              <p
                style={{
                  fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "21px",
                  lineHeight: "124%",
                  letterSpacing: "-1px",
                  verticalAlign: "middle",
                  color: "#18181B",
                }}
              >
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Multi-Column Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border-[3px] border-black p-6 lg:p-7 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all flex flex-col justify-between rounded-none cursor-pointer"
            style={{
              backgroundColor: card.bg,
              minHeight: "360px",
              transform: idx === 1 ? "rotate(-1.5deg)" : idx === 3 ? "rotate(1.5deg)" : "rotate(0deg)",
            }}
          >
            {/* Card Header Title */}
            <h3
              className="uppercase mb-5 font-anton text-[32px] lg:text-[38px] leading-[108%] tracking-normal"
              style={{
                color: card.titleColor,
              }}
            >
              {card.title}
            </h3>

            {/* Inset White/Cream Content Card Box */}
            <div
              className="border-2 border-black/20 p-5 rounded-none flex items-center mt-auto shadow-inner"
              style={{
                backgroundColor: card.innerBg,
                minHeight: "130px",
              }}
            >
              <p
                className="text-[18px] lg:text-[20px] leading-[128%] tracking-tight text-[#18181B] font-medium"
                style={{
                  fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                }}
              >
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
