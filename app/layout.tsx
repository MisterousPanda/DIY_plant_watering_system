import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "See-the-sip build guide",
  description:
    "Buy the parts and assemble a four-pot Raspberry Pi watering kit: one 12 V peristaltic pump per pot, a food-grade HDPE reservoir, and plain water.",
  openGraph: {
    title: "See-the-sip build guide",
    description:
      "A bench guide for four pots, a Raspberry Pi 5, peristaltic pumps, and plain water.",
    images: ["/images/hero-shelf.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
