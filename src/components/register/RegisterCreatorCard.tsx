import React from "react";

export default function RegisterCreatorCard() {
  return (
    <div
      className="w-full max-w-[362px] bg-[#FF0052] p-6 sm:p-7 flex flex-col items-start select-none transition-transform origin-center"
      style={{ transform: "rotate(-1deg)" }}
    >
      {/* Blue Top Label Badge */}
      <div className="bg-[#0149E7] px-3.5 py-0.5 inline-flex items-center justify-center mb-4">
        <span
          className="uppercase text-white font-bold"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "1.6px",
            verticalAlign: "middle",
          }}
        >
          FOR CREATORS
        </span>
      </div>

      {/* Yellow Heading */}
      <h2
        className="font-anton uppercase tracking-[0px] m-0"
        style={{
          color: "#FFD200",
          fontFamily: "var(--font-anton), Anton, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "30px",
          lineHeight: "37.5px",
          letterSpacing: "0px",
          verticalAlign: "middle",
          textTransform: "uppercase",
        }}
      >
        GROW YOUR INFLUENCE,
        <br />
        IN REAL LIFE
      </h2>

      {/* Body Paragraph */}
      <p
        className="mt-3.5 text-white max-w-[320px]"
        style={{
          fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "21px",
          lineHeight: "110%",
          letterSpacing: "-1px",
          verticalAlign: "middle",
        }}
      >
        Secure stage time, connect with peers, and pitch directly to major brands looking for authentic voices.
      </p>

      {/* White Action Tags (2 rows matching reference) */}
      <div className="flex flex-col gap-2 mt-5">
        <div className="flex gap-2">
          <div className="bg-white px-3.5 py-1 flex items-center justify-center">
            <span
              className="uppercase text-[#18181B] font-bold"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "18px",
                letterSpacing: "0px",
                verticalAlign: "middle",
                textTransform: "uppercase",
              }}
            >
              MEET BRANDS
            </span>
          </div>
          <div className="bg-white px-3.5 py-1 flex items-center justify-center">
            <span
              className="uppercase text-[#18181B] font-bold"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "18px",
                letterSpacing: "0px",
                verticalAlign: "middle",
                textTransform: "uppercase",
              }}
            >
              GET FEATURED
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white px-3.5 py-1 flex items-center justify-center">
            <span
              className="uppercase text-[#18181B] font-bold"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "18px",
                letterSpacing: "0px",
                verticalAlign: "middle",
                textTransform: "uppercase",
              }}
            >
              GROW NETWORK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
