import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://amaryllissuccess.co.zw"
  ),
  title: {
    default: "Amaryllis Success | AI Products & Expert Services — Zimbabwe",
    template: "%s | Amaryllis Success",
  },
  description:
    "Amaryllis Success builds AI-powered products and delivers expert services across agriculture, construction, and digital transformation in Zimbabwe.",
  authors: [{ name: "Amaryllis Success Private Limited" }],
  creator: "Amaryllis Success",
  keywords: [
    "AI Zimbabwe",
    "LexiZW",
    "Mudhumeni",
    "BOQ Generator",
    "ResearchMind",
    "Amara",
    "AgriTech Zimbabwe",
    "construction AI",
    "legal AI Zimbabwe",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://amaryllissuccess.co.zw",
    siteName: "Amaryllis Success",
    title: "Amaryllis Success | AI Products & Expert Services — Zimbabwe",
    description:
      "Amaryllis Success builds AI-powered products and delivers expert services across agriculture, construction, and digital transformation in Zimbabwe.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amaryllis Success — AI Products & Expert Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaryllis Success | AI Products & Expert Services — Zimbabwe",
    description:
      "Amaryllis Success builds AI-powered products and delivers expert services across agriculture, construction, and digital transformation in Zimbabwe.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#7B2FBE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-midnight-900 text-white min-h-screen">
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}

