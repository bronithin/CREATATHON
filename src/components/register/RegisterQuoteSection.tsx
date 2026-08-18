import React from "react";
import Image from "next/image";

export default function RegisterQuoteSection() {
  return (
    <section className="w-full bg-[#FF0052] relative flex flex-col items-center justify-center pt-14 pb-16 px-4 select-none">
      {/* Decorative Yellow Starburst on Top Left (down-top-bottom.svg) */}
      <div className="absolute left-0 -top-7 pointer-events-none select-none z-10">
        <Image
          src="/elements/down-top-bottom.svg"
          alt=""
          width={85}
          height={122}
          className="w-[85px] h-[122px] block"
          priority
        />
      </div>

      {/* Decorative Green Organic Flower on Bottom Right (down-right-botom.svg) */}
      <div className="absolute right-0 -bottom-6 pointer-events-none select-none z-20">
        <Image
          src="/elements/down-right-botom.svg"
          alt=""
          width={72}
          height={137}
          className="w-[72px] h-[137px] block"
          priority
        />
      </div>

      {/* Crisp White Rotated Quote Card */}
      <div
        className="w-full max-w-[316px] sm:max-w-[330px] bg-white pt-8 pb-9 px-6 flex flex-col items-center text-center relative z-10"
        style={{ transform: "rotate(-2.7deg)" }}
      >
        {/* Top Decorative Pink 8-point Asterisk Star with Yellow Shadow (down-bottom.svg) */}
        <div className="mb-5 flex items-center justify-center">
          <Image
            src="/elements/down-bottom.svg"
            alt=""
            width={54}
            height={53}
            className="w-[54px] h-[53px]"
            priority
          />
        </div>

        {/* Quote Text */}
        <blockquote
          className="text-[#18181B] font-bold text-center m-0 w-full"
          style={{
            fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "20.5px",
            lineHeight: "1.24",
            letterSpacing: "-0.5px",
            textAlign: "center",
          }}
        >
          &ldquo;Limited spots for brand
          <br />
          partners and creator
          <br />
          collaborators &mdash; be part of
          <br />
          Creatathon 2026 from day
          <br />
          one.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}


