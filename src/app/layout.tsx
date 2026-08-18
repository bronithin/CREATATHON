import type { Metadata } from "next";
import { Anton, Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creatathon 2026 | Kerala's Biggest Creator Festival in Kochi",
  description:
    "Creatathon is Kerala's first & biggest creator festival, bringing together creators, brands, and agencies to celebrate the creator economy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebasNeue.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen bg-[#FDF9EB] text-[#18181B] font-sans antialiased overflow-x-hidden flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
