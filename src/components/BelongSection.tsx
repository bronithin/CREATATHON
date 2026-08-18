import React from "react";
import Image from "next/image";

export default function BelongSection() {
  return (
    <section className="relative w-[402px] bg-[#FFD200] text-[#18181B] pt-[36px] pb-[48px] px-[24px] overflow-hidden select-none">
      {/* Right Subtitle: THIS IS WHERE YOU BELONG. */}
      <div className="relative z-20 flex justify-end pr-1 mb-[18px]">
        <h3
          className="text-[#FF0052] uppercase text-right"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "120%",
            letterSpacing: "-1px",
            textAlign: "right",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          THIS IS
          <br />
          WHERE YOU
          <br />
          BELONG.
        </h3>
      </div>

      {/* Bottom Left Green Scalloped Flower emerging from behind the pink wave */}
      <div
        className="absolute bottom-[4px] -left-[14px] w-[155px] h-[120px] z-5 pointer-events-none"
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
      <div className="absolute -bottom-[1px] left-0 right-0 w-[402px] h-[57px] pointer-events-none z-10">
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
