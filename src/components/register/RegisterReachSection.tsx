import React from "react";

export default function RegisterReachSection() {
  return (
    <section className="w-full bg-[#FF0052] pt-14 pb-16 px-5 relative overflow-hidden flex flex-col items-center select-none">
      <div className="w-full max-w-[354px] flex flex-col items-center">
        {/* Large Centered Heading */}
        <div className="text-center flex flex-col items-center mb-10 w-full">
          <h2
            className="font-anton uppercase text-center font-normal text-[64px] leading-[80px] tracking-[-0.8px] m-0 w-full"
            style={{
              fontFamily: "var(--font-anton), Anton, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "64px",
              lineHeight: "80px",
              letterSpacing: "-0.8px",
              textAlign: "center",
              verticalAlign: "middle",
              textTransform: "uppercase",
            }}
          >
            <span className="text-white block whitespace-nowrap">WHERE BRAND</span>
            <span className="text-[#FFD200] block whitespace-nowrap">MEET REAL</span>
            <span className="text-[#FFD200] block whitespace-nowrap">REACH</span>
          </h2>
        </div>

        {/* 4 Offset / Rotated Cards */}
        <div className="w-full flex flex-col gap-6">
          {/* Card 1: Green Card (0 deg) */}
          <div className="w-full bg-[#00D890] min-h-[124px] p-6 flex items-center justify-start">
            <p
              className="text-white text-[27px] font-semibold leading-[110%] tracking-[-1px]"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "27px",
                lineHeight: "110%",
                letterSpacing: "-1px",
                verticalAlign: "middle",
              }}
            >
              Direct access to Kerala’s
              <br />
              creator community.
            </p>
          </div>

          {/* Card 2: Blue Card (+2.77 deg) */}
          <div
            className="w-full bg-[#0149E7] min-h-[154px] p-6 flex items-center justify-start transition-transform origin-center"
            style={{ transform: "rotate(2.77deg)" }}
          >
            <p
              className="text-[#FFD200] text-[27px] font-semibold leading-[110%] tracking-[-1px]"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "27px",
                lineHeight: "110%",
                letterSpacing: "-1px",
                verticalAlign: "middle",
              }}
            >
              High-visibility brand
              <br />
              placement across 2
              <br />
              days.
            </p>
          </div>

          {/* Card 3: Cream Card (0 deg) */}
          <div className="w-full bg-[#FDF9EB] min-h-[124px] p-6 flex items-center justify-start">
            <p
              className="text-[#0149E7] text-[27px] font-semibold leading-[110%] tracking-[-1px]"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "27px",
                lineHeight: "110%",
                letterSpacing: "-1px",
                verticalAlign: "middle",
              }}
            >
              Authentic collaborations,
              <br />
              not banner ads.
            </p>
          </div>

          {/* Card 4: Yellow Card (-3.40 deg) */}
          <div
            className="w-full bg-[#FFD200] min-h-[154px] p-6 flex items-center justify-start transition-transform origin-center"
            style={{ transform: "rotate(-3.4deg)" }}
          >
            <p
              className="text-[#FF0052] text-[27px] font-semibold leading-[110%] tracking-[-1px]"
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "27px",
                lineHeight: "110%",
                letterSpacing: "-1px",
                verticalAlign: "middle",
              }}
            >
              Social amplification
              <br />
              during and after the
              <br />
              event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
