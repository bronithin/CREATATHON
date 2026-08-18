import React from "react";

// 8-Point Star / Sparkle
export function SparkleStar8({
  className = "w-8 h-8",
  fill = "#FFD400",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0 L58 35 L95 20 L68 48 L100 65 L64 68 L75 100 L48 72 L22 95 L34 62 L0 50 L35 42 L15 10 L45 32 Z" />
    </svg>
  );
}

// Crisp 8-Point Symmetrical Diamond Sparkle
export function SharpDiamondStar8({
  className = "w-8 h-8",
  fill = "#FFFFFF",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0 C50 28 50 28 22 22 C50 50 50 50 0 50 C28 50 28 50 22 78 C50 50 50 50 50 100 C50 72 50 72 78 78 C50 50 50 50 100 50 C72 50 72 50 78 22 C50 50 50 50 50 0 Z" />
    </svg>
  );
}

// 8-Point Burst (Geometric)
export function BurstStar8({
  className = "w-8 h-8",
  fill = "#FFD400",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="50,0 62,28 92,15 75,44 100,60 71,68 75,100 48,78 22,98 32,66 0,55 30,42 12,18 42,28" />
    </svg>
  );
}

// 12-Ray Multi-point Sunburst / Flower (used on hero side)
export function SunburstFlower({
  className = "w-16 h-16",
  fill = "#FFD400",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 0 C66 18 72 20 85 10 C86 28 92 32 107 28 C100 45 104 50 120 54 C108 66 108 72 120 85 C104 88 100 94 107 110 C92 106 86 110 85 128 C72 118 66 120 60 138 C54 120 48 118 35 128 C34 110 28 106 13 110 C20 94 16 88 0 85 C12 72 12 66 0 54 C16 50 20 45 13 28 C28 32 34 28 35 10 C48 20 54 18 60 0 Z" />
    </svg>
  );
}

// Organic 6-Lobe Flower Shape (for About section green blob)
export function OrganicFlowerBlob({
  className = "w-32 h-32",
  fill = "#00C853",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 15 C130 5 155 25 160 55 C185 60 200 85 190 115 C200 145 180 175 150 185 C130 200 100 195 80 185 C50 195 20 175 15 145 C5 120 15 90 35 75 C30 45 55 20 85 20 Z" />
    </svg>
  );
}

// Wavy Pill / Scalloped Flower Badge (For the 5 What Happens badges)
export function FlowerButtonBadge({
  children,
  bg = "#00C853",
  textColor = "#FFFFFF",
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  textColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center p-4 text-center font-display uppercase tracking-tight transition-transform hover:scale-105 select-none ${className}`}
      style={{ color: textColor }}
    >
      <svg
        className="absolute inset-0 w-full h-full -z-0"
        viewBox="0 0 160 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 5 C50 0 110 0 130 5 C150 10 160 25 158 45 C162 65 155 85 135 95 C115 105 45 105 25 95 C5 85 0 65 2 45 C-2 25 10 10 30 5 Z"
          fill={bg}
        />
        {/* Scallop bumps */}
        <circle cx="28" cy="15" r="14" fill={bg} />
        <circle cx="80" cy="8" r="14" fill={bg} />
        <circle cx="132" cy="15" r="14" fill={bg} />
        <circle cx="148" cy="55" r="14" fill={bg} />
        <circle cx="132" cy="95" r="14" fill={bg} />
        <circle cx="80" cy="102" r="14" fill={bg} />
        <circle cx="28" cy="95" r="14" fill={bg} />
        <circle cx="12" cy="55" r="14" fill={bg} />
      </svg>
      <span className="relative z-10 font-black leading-tight text-base sm:text-lg px-2 py-1">
        {children}
      </span>
    </div>
  );
}

// Organic Blob for "IT'S WHERE THE FUTURE..." in Cream section
export function YellowWavyFeatureBlob({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative p-6 inline-flex items-center justify-center text-center ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full -z-0"
        viewBox="0 0 220 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35 15 C70 -5 150 -5 185 15 C215 35 225 90 205 130 C185 165 140 185 95 175 C45 185 10 155 5 115 C-5 75 10 35 35 15 Z"
          fill="#FFD400"
        />
        <circle cx="45" cy="25" r="24" fill="#FFD400" />
        <circle cx="175" cy="30" r="26" fill="#FFD400" />
        <circle cx="195" cy="115" r="25" fill="#FFD400" />
        <circle cx="110" cy="165" r="22" fill="#FFD400" />
        <circle cx="35" cy="140" r="26" fill="#FFD400" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Organic Cloud / Wave Blob (Belong section)
export function GreenWaveCloud({
  className = "w-28 h-16",
  fill = "#00C853",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 80"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 70 C5 70 0 55 10 40 C10 25 25 15 45 20 C55 5 80 0 100 10 C120 0 145 10 150 30 C165 40 160 65 145 70 C135 80 30 80 20 70 Z" />
    </svg>
  );
}

// Pink Flame / Paint Splash (Footer and Hero)
export function PinkPaintSplash({
  className = "w-24 h-24",
  fill = "#FF0052",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M80 0 C95 20 115 40 118 65 C120 95 95 120 65 118 C30 115 10 90 15 60 C20 40 45 45 55 25 C60 10 70 5 80 0 Z" />
      {/* Splatter dots */}
      <circle cx="110" cy="20" r="4" fill={fill} />
      <circle cx="20" cy="25" r="5" fill={fill} />
      <circle cx="5" cy="70" r="4" fill={fill} />
    </svg>
  );
}

// Creatathon Logo Graphic
export function CreatathonLogo({
  className = "h-8",
  color = "#FF0052",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-1 font-bold ${className}`}>
      <span
        style={{ color }}
        className="font-extrabold tracking-tighter text-2xl sm:text-3xl italic select-none lowercase"
      >
        creatathon
      </span>
      <SparkleStar8 className="w-4 h-4 -mt-2 animate-pulse" fill={color} />
    </div>
  );
}

// Detailed Vector Illustration of Creators Collaborating (More Than a Festival)
export function CreatorCollabIllustration({
  className = "w-full max-w-sm mx-auto",
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 340 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        {/* Pink Starburst on top-left of arch */}
        <polygon
          points="65,40 75,60 95,50 85,72 105,85 82,90 85,112 65,96 48,110 55,88 32,80 54,70 42,50 62,58"
          fill="#FF0052"
        />

        {/* Central Blue Arch Doorway */}
        <path
          d="M110 210 V110 C110 75 140 50 175 50 C210 50 240 75 240 110 V210 Z"
          fill="#0054D9"
        />
        {/* Inner Arch Glow */}
        <path
          d="M125 210 V118 C125 90 148 70 175 70 C202 70 225 90 225 118 V210 Z"
          fill="#00E5FF"
          opacity="0.9"
        />
        <path
          d="M138 210 V125 C138 102 155 88 175 88 C195 88 212 102 212 125 V210 Z"
          fill="#FDF9EB"
        />

        {/* Creator 1 (Center in doorway working on laptop) */}
        <circle cx="175" cy="130" r="10" fill="#FFCC80" />
        <path d="M165 127 C165 120 185 120 185 127 Z" fill="#18181B" />
        <path
          d="M160 145 C160 140 190 140 190 145 L195 180 H155 Z"
          fill="#0054D9"
        />
        <polygon points="158,168 192,168 185,182 165,182" fill="#FFFFFF" />
        <rect
          x="165"
          y="152"
          width="20"
          height="14"
          rx="2"
          fill="#18181B"
          stroke="#00E5FF"
          strokeWidth="1.5"
        />

        {/* Creator 2 (Left - Filmmaker with Camera & Tripod) */}
        <polygon points="40,140 100,120 100,210 30,210" fill="#00E5FF" />
        <circle cx="68" cy="155" r="9" fill="#FFCC80" />
        <path d="M60 152 C60 146 76 146 76 152 Z" fill="#18181B" />
        <path
          d="M55 168 C55 164 80 164 80 168 L85 205 H50 Z"
          fill="#18181B"
        />
        <rect x="75" y="160" width="16" height="12" rx="2" fill="#FFD400" />
        <circle cx="91" cy="166" r="4" fill="#18181B" />
        <line
          x1="83"
          y1="172"
          x2="70"
          y2="210"
          stroke="#18181B"
          strokeWidth="3"
        />
        <line
          x1="83"
          y1="172"
          x2="96"
          y2="210"
          stroke="#18181B"
          strokeWidth="3"
        />

        {/* Creator 3 (Right - Content Creator / Podcaster with Phone / Mic) */}
        <rect x="230" y="90" width="80" height="75" rx="8" fill="#FF0052" />
        <rect x="285" y="98" width="18" height="18" rx="4" fill="#FFD400" />
        <polygon points="292,103 300,107 292,111" fill="#18181B" />
        <circle cx="265" cy="115" r="9" fill="#FFCC80" />
        <path d="M256 112 C256 106 274 106 274 112 Z" fill="#18181B" />
        <path
          d="M250 128 C250 124 280 124 280 128 L285 165 H245 Z"
          fill="#18181B"
        />

        {/* Creator 4 (Bottom Right - Producer with Green Shirt) */}
        <rect x="235" y="165" width="85" height="45" rx="6" fill="#00C853" />
        <circle cx="280" cy="155" r="9" fill="#FFCC80" />
        <path d="M272 152 C272 146 288 146 288 152 Z" fill="#18181B" />
        <path
          d="M265 168 C265 164 295 164 295 168 L300 210 H260 Z"
          fill="#0054D9"
        />
        <rect x="245" y="180" width="30" height="20" rx="3" fill="#18181B" />
        <line
          x1="250"
          y1="190"
          x2="270"
          y2="190"
          stroke="#FFD400"
          strokeWidth="2"
        />

        {/* Green Plant / Leaves */}
        <circle cx="108" cy="95" r="14" fill="#00C853" />
        <circle cx="100" cy="85" r="10" fill="#00C853" />
        <circle cx="118" cy="82" r="11" fill="#00C853" />

        {/* Foreground Sparks & Circles */}
        <circle cx="115" cy="180" r="4" fill="#FFD400" />
        <circle cx="225" cy="180" r="5" fill="#FF0052" />
        <polygon points="175,30 180,40 190,35 185,45 195,50 185,55 175,45" fill="#FFD400" />
      </svg>
    </div>
  );
}
