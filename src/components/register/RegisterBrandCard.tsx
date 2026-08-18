import React from "react";

export default function RegisterBrandCard() {
  return (
    <div
      className="w-full max-w-[362px] bg-[#FFD200] p-6 sm:p-7 flex flex-col items-start select-none transition-transform origin-center"
      style={{ transform: "rotate(1deg)" }}
    >
      {/* Pink Top Label Badge */}
      <div className="bg-[#FF0052] px-3.5 py-1.5 inline-flex items-center justify-center mb-4">
        <span className="font-jetbrains text-[11px] font-bold text-white uppercase tracking-wider">
          FOR BRAND
        </span>
      </div>

      {/* Blue Heading */}
      <h2 className="font-anton text-[32px] sm:text-[34px] leading-[1.0] text-[#0054D9] uppercase tracking-tight m-0">
        REACH AUDIENCES THAT
        <br />
        ACTUALLY ENGAGE
      </h2>

      {/* Body Paragraph */}
      <p className="mt-3.5 text-[15px] leading-[1.38] text-[#18181B] font-normal max-w-[320px]">
        High-ROI marketing through direct community trust. Bypass the algorithms and meet the creators who command attention.
      </p>

      {/* White Action Tags (2 rows matching reference) */}
      <div className="flex flex-col gap-2 mt-5">
        <div className="flex gap-2">
          <div className="bg-white px-3.5 py-1.5 flex items-center justify-center">
            <span className="font-jetbrains text-[11px] font-bold text-[#18181B] uppercase tracking-wide">
              BRAND VISIBILITY
            </span>
          </div>
          <div className="bg-white px-3.5 py-1.5 flex items-center justify-center">
            <span className="font-jetbrains text-[11px] font-bold text-[#18181B] uppercase tracking-wide">
              CREATOR ACCESS
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white px-3.5 py-1.5 flex items-center justify-center">
            <span className="font-jetbrains text-[11px] font-bold text-[#18181B] uppercase tracking-wide">
              COMMUNITY TRUST
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
