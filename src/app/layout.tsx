import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedContent from "@/components/AnimatedContent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://larryhkh.me"),
  title: {
    default: "larry",
    template: "larry",
  },
  description:
    "im a computer science graduate and i like to solve problems. this is my personal website.",
  alternates: {
    canonical: "/",
  },
  creator: "larry",
  openGraph: {
    title: "larry",
    description:
      "im a computer science graduate and i like to solve problems. this is my personal website.",
    url: "/",
    siteName: "Larry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "larry",
    description:
      "im a computer science graduate and i like to solve problems. this is my personal website.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/favicons/favicon-180.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} dark h-full antialiased`}>
      <body className="h-full overflow-y-auto">
        <div id="top" className="min-h-screen bg-white text-zinc-950 transition-colors duration-200 dark:bg-background dark:text-zinc-50">
          <div className="mx-auto max-w-xl px-6 lg:px-8">
            <div className="flex justify-end py-5 sm:py-6">
              <AnimatedContent>
                <ThemeToggle />
              </AnimatedContent>
            </div>
          </div>
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
