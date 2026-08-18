import React from "react";

export default function RegisterBrandCard() {
  return (
    <div
      className="w-full max-w-[362px] bg-[#FFD200] p-6 sm:p-7 flex flex-col items-start select-none transition-transform origin-center"
      style={{ transform: "rotate(1deg)" }}
    >
      {/* Pink Top Label Badge */}
      <div className="bg-[#FF0052] px-3.5 py-0.5 inline-flex items-center justify-center mb-4">
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
          FOR BRAND
        </span>
      </div>

      {/* Blue Heading */}
      <h2
        className="font-anton uppercase tracking-[0px] m-0"
        style={{
          color: "#0054D9",
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
        REACH AUDIENCES THAT
        <br />
        ACTUALLY ENGAGE
      </h2>

      {/* Body Paragraph */}
      <p
        className="mt-3.5 text-[#18181B] max-w-[320px]"
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
        High-ROI marketing through direct community trust. Bypass the algorithms and meet the creators who command attention.
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
              BRAND VISIBILITY
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
              CREATOR ACCESS
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
              COMMUNITY TRUST
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
