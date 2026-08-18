import React from "react";

// 1. Hero top-right 8-petaled Pink Asterisk / Star
export function HeroPinkFlower({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="-30 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M11.6621 15.2012L22.5713 4.29199L33.4072 15.1279L22.1973 26.3379H38V41.6621H22.6758L33.2109 52.1973L22.375 63.0332L11.6621 52.3193V68H-3.66211V52.1973L-14.6758 63.2109L-25.5117 52.376L-14.7979 41.6621H-30V26.3379H-14.3193L-25.708 14.9492L-14.8721 4.11426L-3.66211 15.3242V0H11.6621V15.2012Z"
        fill="#FF0052"
      />
    </svg>
  );
}

// 2. Yellow Starburst on the top-left side of Quote section (down-top-bottom.svg)
export function QuoteYellowStarburst({ className = "w-[85px] h-[122px]" }: { className?: string }) {
  return (
    <svg
      width="85"
      height="122"
      viewBox="0 0 85 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M78.6436 105.582L78.6141 105.612C65.8126 100.064 53.026 94.5311 40.2245 88.998C40.5645 100.004 40.9045 110.994 41.2445 122C34.9029 111.871 28.5613 101.742 22.2197 91.6134C14.459 98.5675 6.69836 105.522 -1.07711 112.461C2.10108 101.757 5.27926 91.054 8.47223 80.3356C-2.14143 80.3053 -12.7551 80.2751 -23.3835 80.2297C-13.8785 73.1546 -4.37355 66.0796 5.14622 59.0196C-5.23092 50.1304 -15.6229 41.226 -26 32.3368C-11.2769 36.343 3.43148 40.3341 18.1546 44.3403C14.7251 29.5551 11.2956 14.7851 7.86616 0C17.8885 14.9363 27.9109 29.8726 37.9333 44.7938C45.8566 37.2652 53.7651 29.7366 61.6884 22.2079C59.5597 33.3346 57.4459 44.4461 55.3172 55.5727C65.2065 60.5465 75.1107 65.5051 85 70.4788C73.0264 71.7789 61.0527 73.0639 49.0939 74.3641C58.9389 84.7651 68.7986 95.166 78.6436 105.567V105.582Z"
        fill="#F6D202"
      />
    </svg>
  );
}

// 3. Pink 8-Point Asterisk / Star inside Quote Card with Yellow Drop Shadow (down-bottom.svg)
export function QuoteCardPinkStar({ className = "w-[54px] h-[53px]" }: { className?: string }) {
  return (
    <svg
      width="54"
      height="53"
      viewBox="0 0 54 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g filter="url(#quote_card_pink_star_filter)">
        <path
          d="M30.5869 11.1602L38.5957 3.15137L46.5508 11.1064L38.3213 19.3359L49.9229 19.3359L49.9229 30.5869L38.6719 30.5869L46.4062 38.3213L38.4512 46.2764L30.5869 38.4121L30.5869 49.9229L19.3359 49.9229L19.3359 38.3213L11.25 46.4082L3.29492 38.4531L11.1611 30.5869L-7.37467e-08 30.5869L-4.662e-08 19.3359L11.5107 19.3359L3.15039 10.9756L11.1055 3.02051L19.3359 11.251L19.3359 4.662e-08L30.5869 7.37467e-08L30.5869 11.1602Z"
          fill="#FF0052"
        />
      </g>
      <defs>
        <filter
          id="quote_card_pink_star_filter"
          x="0"
          y="0"
          width="53.9229"
          height="52.9229"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.823529 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

// 4. Green Organic Flower shape at bottom-right of Quote section with White Drop Shadow (down-right-botom.svg)
export function QuoteGreenFlower({ className = "w-[72px] h-[137px]" }: { className?: string }) {
  return (
    <svg
      width="72"
      height="137"
      viewBox="0 0 72 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g filter="url(#quote_green_flower_filter)">
        <path
          d="M7.8887 7.80954C19.9017 -4.15922 42.9323 -1.91023 66.6924 11.4082C90.4054 -1.68884 113.316 -3.78983 125.239 8.1777C137.187 20.1698 134.965 43.1397 121.709 66.8554C134.685 90.4811 136.731 113.275 124.805 125.157C112.874 137.044 90.0762 134.907 66.4893 121.831C42.7577 134.954 19.824 137.069 7.89163 125.093C-4.0161 113.141 -1.85193 90.2836 11.2862 66.6523C-1.95769 42.8339 -4.12846 19.7829 7.8887 7.80954Z"
          fill="#00D890"
        />
      </g>
      <defs>
        <filter
          id="quote_green_flower_filter"
          x="0"
          y="0"
          width="137.048"
          height="136.981"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

