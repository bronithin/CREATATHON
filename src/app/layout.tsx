import type { Metadata, Viewport } from "next";
import { Anton, Bebas_Neue, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FCD60B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const siteTitle = "Creatathon 2026 | Kerala's Biggest Creator Festival in Kochi";
const siteDescription =
  "Creatathon is Kerala's first & biggest creator festival, bringing together creators, brands, and agencies to celebrate the creator economy.";
const siteUrl = "https://creatathon.in";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Creatathon 2026",
    images: [
      {
        url: "/elements/creatathon-badge.svg",
        width: 800,
        height: 600,
        alt: "Creatathon 2026 Festival Badge",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/elements/creatathon-badge.svg"],
  },
  icons: {
    icon: "/elements/creatathon-logo.svg",
    apple: "/elements/creatathon-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${bebasNeue.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#FDF9EB] text-[#18181B] font-sans antialiased overflow-x-hidden flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
