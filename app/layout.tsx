import type { Metadata } from "next";
import { Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "larry's personal website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} font-geistMono antialiased min-h-screen sm:mx-24`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
