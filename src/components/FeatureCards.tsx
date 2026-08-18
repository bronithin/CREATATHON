import React from "react";

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
    <section className="w-[402px] bg-[#FDF9EB] pt-[34px] pb-[44px] flex flex-col gap-[36px] items-center select-none overflow-hidden">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="border-2 border-black p-[20px] shadow-box-card flex flex-col justify-between"
          style={{
            width: card.width,
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
    </section>
  );
}
