import type { Metadata } from "next";
import "./globals.css";
import GlobalRevealInit from "@/components/GlobalRevealInit";

export const metadata: Metadata = {
  title: "The Sly Old Fox | Birmingham · Est. 1891",
  description: "Fine cask ales, seasonal British food and live events on Hurst Street, Birmingham. Est. 1891.",
  openGraph: {
    title: "The Sly Old Fox — Birmingham · Est. 1891",
    description: "A Public House Worth Staying In.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/*
          Quicksand — body font (Google Fonts, free)
          Black Mango — heading font (commercial, self-hosted via /public/fonts/)
          See globals.css for @font-face declaration.
          To activate Black Mango: add BlackMango-Regular.woff2 + BlackMango-Medium.woff2
          to /public/fonts/ — available at blackmango.com or myfonts.com
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalRevealInit />
        {children}
      </body>
    </html>
  );
}
