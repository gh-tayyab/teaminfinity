import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Boost your online presence with Team Infinity’s tailored digital marketing strategies including SEO, social media marketing, PPC, and content marketing — for UK and global brands.",
  keywords: [
    "digital marketing",
    "digital marketing services",
    "online marketing agency",
    "internet marketing company",
    "SEO and digital marketing",
    "social media marketing",
    "PPC advertising",
    "email marketing",
    "content marketing",
    "Google Ads management",
    "Facebook Ads expert",
    "Instagram marketing",
    "digital marketing agency",
    "brand marketing strategy",
    "lead generation marketing",
    "digital campaign management",
    "growth marketing",
    "performance marketing agency",
    "digital advertising company",
    "online branding services",
    "digital marketing UK",
    "digital marketing agency UK",
    "online marketing UK",
    "digital marketing company London",
    "SEO and PPC UK",
    "social media marketing UK",
    "Google Ads UK",
    "affordable digital marketing UK",
    "digital marketing for small businesses UK",
    "best digital marketing agency UK",
  ],
  openGraph: {
    title: "Digital Marketing | Team Infinity",
    description:
      "Team Infinity offers data-driven digital marketing solutions — from SEO and PPC to social media marketing — to help your business grow online in the UK and worldwide.",
    url: "https://teaminfinity.uk/services/digital-marketing",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Infinity - Digital Marketing Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing | Team Infinity",
    description:
      "Maximize your brand’s online visibility with Team Infinity’s expert digital marketing services — SEO, PPC, and social media marketing for UK & global clients.",
    images: ["https://teaminfinity.uk/og-image.jpg"],
  },
};

export default function DigitalMarketingPage() {
  return <HeaderClient />;
}
