import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google"; // Change here
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"], // common weights
});

export const metadata: Metadata = {
  title: "Team Infinity – IT Solutions & Web Development",
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
        url: "https://teaminfinity.uk/og-image.jpg", // Absolute URL
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
    icon: "/favicon.ico", // Add your favicon in /public folder
  },
  metadataBase: new URL("https://teaminfinity.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
