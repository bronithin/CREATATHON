import React from "react";
import Image from "next/image";

export default function BelongSection() {
  return (
    <section className="relative w-full max-w-[402px] md:max-w-none bg-[#FFD200] text-[#18181B] pt-[36px] pb-[48px] md:pt-10 md:pb-[90px] lg:pb-[110px] px-[24px] md:px-12 lg:px-16 overflow-hidden select-none mx-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between relative z-20">
        {/* Desktop Left Flower Blob */}
        <div
          className="hidden md:block w-[180px] h-[140px] lg:w-[240px] lg:h-[185px] z-5 pointer-events-none mb-[-20px]"
          style={{ filter: "drop-shadow(6px 6px 0px #FFFFFF)" }}
        >
          <Image
            src="/elements/flower-green-bottom.svg"
            alt="Green Flower Blob"
            width={240}
            height={185}
            style={{ width: "auto", height: "auto" }}
            className="w-full h-full object-contain block"
          />
        </div>

        {/* Right Subtitle: THIS IS WHERE YOU BELONG. */}
        <div className="relative z-20 flex justify-end pr-1 md:pr-0 mb-[18px] md:mb-0">
          <h3
            className="text-[#FF0052] uppercase text-right text-[32px] md:text-[54px] lg:text-[66px] leading-[120%] md:leading-[108%] tracking-[-1px] font-bold"
            style={{
              fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            }}
          >
            THIS IS
            <br />
            WHERE YOU
            <br />
            BELONG.
          </h3>
        </div>
      </div>

      {/* Mobile Bottom Left Green Scalloped Flower */}
      <div
        className="block md:hidden absolute bottom-[4px] -left-[14px] w-[155px] h-[120px] z-5 pointer-events-none"
        style={{ filter: "drop-shadow(4px 4px 0px #FFFFFF)" }}
      >
        <Image
          src="/elements/flower-green-bottom.svg"
          alt="Green Flower Blob"
          width={162}
          height={126}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-full object-contain block"
        />
      </div>

      {/* Bottom Pink Wave Transition into What Happens section */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full h-[57px] md:h-[80px] lg:h-[100px] pointer-events-none z-10">
        <svg
          viewBox="0 0 402 57"
          className="w-full h-full block"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.846 29.87C14.0294 15.78 -20.774 11.53 -39 12.2V57H438.761C443.184 49.65 437.36 35.46 394.84 22.53C355.935 10.69 316.204 40.84 271.027 28.5C225.85 16.16 221.87 0 184.443 0C135.108 0 101.076 45.83 54.846 29.87Z"
            fill="#FB0146"
          />
        </svg>
      </div>
    </section>
  );
}
