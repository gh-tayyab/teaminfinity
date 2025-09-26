import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans", // ✅ custom property ban gaya
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Team Infinity – IT Solutions & Web Development",
    template: "%s | Team Infinity – IT Solutions",
  },
  description:
    "Team Infinity provides cutting-edge IT solutions, web development, AI integration, and cloud services to help businesses grow.",
  keywords: [
    "Team Infinity",
    "IT Solutions",
    "Web Development",
    "AI Solutions",
    "Cloud Services",
    "Software Development",
  ],
  openGraph: {
    title: "Team Infinity – IT Solutions & Web Development",
    description:
      "Providing top-notch IT services, AI solutions, and scalable web applications for your business success.",
    url: "https://teaminfinity.uk",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Infinity - IT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Infinity – IT Solutions & Web Development",
    description:
      "Providing top-notch IT services, AI solutions, and scalable web applications for your business success.",
    images: ["https://teaminfinity.uk/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://teaminfinity.uk"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.className} font-sans`}>
      <head>
        <link rel="preload" as="image" href="/images/hero.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#F2FBFD] text-gray-900">
        <Navbar />
        <main>{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
