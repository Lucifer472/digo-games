import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Digo Games",
  other: {
    "google-adsense-account": "ca-pub-3221545862697404",
  },
  description:
    "Your ultimate gaming destination! Explore a vast collection of thrilling games, from action-packed adventures to brain-teasing puzzles. Dive into a world of fun and challenge your skills on Digo Games today!",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
