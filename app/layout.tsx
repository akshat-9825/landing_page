import type { Metadata } from "next";
import { epilogueFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Synergy",
  description: "Landing Page",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${epilogueFont.className} overflow-hidden hover:overflow-y-auto`}>
        {children}
      </body>
    </html>
  );
}
