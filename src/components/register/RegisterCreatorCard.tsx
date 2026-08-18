import React from "react";

export default function RegisterCreatorCard() {
  return (
    <div
      className="w-full max-w-[362px] bg-[#FF0052] p-6 sm:p-7 flex flex-col items-start select-none transition-transform origin-center"
      style={{ transform: "rotate(-1deg)" }}
    >
      {/* Blue Top Label Badge */}
      <div className="bg-[#0149E7] px-3.5 py-1.5 inline-flex items-center justify-center mb-4">
        <span className="font-jetbrains text-[11px] font-bold text-white uppercase tracking-wider">
          FOR CREATORS
        </span>
      </div>

      {/* Yellow Heading */}
      <h2 className="font-anton text-[32px] sm:text-[34px] leading-[1.0] text-[#FFD200] uppercase tracking-tight m-0">
        GROW YOUR INFLUENCE,
        <br />
        IN REAL LIFE
      </h2>

      {/* Body Paragraph */}
      <p className="mt-3.5 text-[15px] leading-[1.38] text-white font-normal max-w-[320px]">
        Secure stage time, connect with peers, and pitch directly to major brands looking for authentic voices.
      </p>

      {/* White Action Tags (2 rows matching reference) */}
      <div className="flex flex-col gap-2 mt-5">
        <div className="flex gap-2">
          <div className="bg-white px-3.5 py-1.5 flex items-center justify-center">
            <span className="font-jetbrains text-[11px] font-bold text-[#18181B] uppercase tracking-wide">
              MEET BRANDS
            </span>
          </div>
          <div className="bg-white px-3.5 py-1.5 flex items-center justify-center">
            <span className="font-jetbrains text-[11px] font-bold text-[#18181B] uppercase tracking-wide">
              GET FEATURED
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white px-3.5 py-1.5 flex items-center justify-center">
            <span className="font-jetbrains text-[11px] font-bold text-[#18181B] uppercase tracking-wide">
              GROW NETWORK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
