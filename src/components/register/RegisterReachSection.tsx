import React from "react";

export default function RegisterReachSection() {
  return (
    <section className="w-full bg-[#FF0052] pt-14 pb-16 px-5 relative overflow-hidden flex flex-col items-center select-none">
      <div className="w-full max-w-[354px] flex flex-col items-center">
        {/* Large Centered Heading */}
        <div className="text-center flex flex-col items-center leading-none mb-10">
          <span className="font-anton text-[48px] sm:text-[54px] leading-[0.93] text-white tracking-tight uppercase block">
            WHERE BRAND
          </span>
          <span className="font-anton text-[48px] sm:text-[54px] leading-[0.93] text-[#FFD200] tracking-tight uppercase block mt-1.5">
            MEET REAL
          </span>
          <span className="font-anton text-[48px] sm:text-[54px] leading-[0.93] text-[#FFD200] tracking-tight uppercase block mt-1.5">
            REACH
          </span>
        </div>

        {/* 4 Offset / Rotated Cards */}
        <div className="w-full flex flex-col gap-6">
          {/* Card 1: Green Card (0 deg) */}
          <div className="w-full bg-[#00D890] min-h-[124px] p-6 flex items-center justify-start">
            <p className="text-white font-bold text-[23px] sm:text-[24px] leading-[1.2] tracking-[-0.01em]">
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
            <p className="text-[#FFD200] font-bold text-[23px] sm:text-[24px] leading-[1.2] tracking-[-0.01em]">
              High-visibility brand
              <br />
              placement across 2
              <br />
              days.
            </p>
          </div>

          {/* Card 3: Cream Card (0 deg) */}
          <div className="w-full bg-[#FDF9EB] min-h-[124px] p-6 flex items-center justify-start">
            <p className="text-[#0149E7] font-bold text-[23px] sm:text-[24px] leading-[1.2] tracking-[-0.01em]">
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
            <p className="text-[#FF0052] font-bold text-[23px] sm:text-[24px] leading-[1.2] tracking-[-0.01em]">
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
