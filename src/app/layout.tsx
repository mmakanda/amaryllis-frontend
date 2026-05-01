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
    default: "Amaryllis Success | Agriculture · Construction · IT Consultancy",
    template: "%s | Amaryllis Success",
  },
  description:
    "Amaryllis Success Private Limited — Zimbabwe's premier multi-sector company delivering innovative solutions in agriculture, civil construction, and AI-powered IT consultancy.",
  authors: [{ name: "Amaryllis Success Private Limited" }],
  creator: "Amaryllis Success",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://amaryllissuccess.co.zw",
    siteName: "Amaryllis Success",
    title: "Amaryllis Success | Agriculture · Construction · IT Consultancy",
    description: "Zimbabwe's premier multi-sector company — agriculture, civil construction, and AI-powered IT consultancy.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Amaryllis Success" }],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#7B2FBE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
