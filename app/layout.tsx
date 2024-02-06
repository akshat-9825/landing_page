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
    <html lang="en">
      <body className={epilogueFont.className}>{children}</body>
    </html>
  );
}
