import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Search Engine Optimization",
  description:
    "Boost your online visibility and dominate search rankings with Team Infinity’s proven SEO strategies. We offer technical, on-page, and off-page SEO services tailored for UK and global businesses.",
  keywords: [
    "search engine optimization",
    "SEO services",
    "SEO company",
    "SEO agency",
    "professional SEO services",
    "technical SEO",
    "on-page SEO",
    "off-page SEO",
    "link building",
    "keyword research",
    "SEO audit",
    "website optimization",
    "Google ranking services",
    "SEO content strategy",
    "organic traffic growth",
    "SEO consultant",
    "SEO experts",
    "local SEO services",
    "eCommerce SEO",
    "SEO marketing agency",
    "SEO agency UK",
    "SEO company UK",
    "SEO services UK",
    "local SEO UK",
    "SEO experts London",
    "best SEO company in UK",
    "SEO optimization UK",
    "SEO for small businesses UK",
    "affordable SEO services UK",
    "SEO digital marketing UK",
  ],
  openGraph: {
    title: "Search Engine Optimization | Team Infinity",
    description:
      "Team Infinity offers expert SEO services to help your website rank higher and attract more organic traffic in the UK and globally.",
    url: "https://teaminfinity.uk/services/search-engine-optimization",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Team Infinity - SEO Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimization | Team Infinity",
    description:
      "Boost your Google rankings with Team Infinity’s professional SEO services — tailored for UK and global businesses.",
    images: ["https://teaminfinity.uk/og-image.png"],
  },
};

export default function SEOPage() {
  return <HeaderClient />;
}
