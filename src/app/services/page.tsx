import { Metadata } from "next";
import ServicesClient from "./ServicesClient"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Team Infinity offers a full range of IT and digital solutions including web development, AI automation, SEO, digital marketing, Shopify, video editing, UI/UX design, and more — empowering businesses in the UK and worldwide.",
  keywords: [
    "IT services",
    "digital solutions",
    "software development services",
    "web development services",
    "AI automation solutions",
    "SEO services",
    "digital marketing agency",
    "Shopify development services",
    "graphic designing company",
    "UI/UX design agency",
    "video editing services",
    "app development company",
    "cloud solutions provider",
    "custom software development",
    "enterprise IT solutions",
    "technology consulting",
    "website optimization",
    "business automation solutions",
    "creative design and marketing",
    "professional IT support",
    "IT services UK",
    "digital agency UK",
    "web development company UK",
    "SEO company UK",
    "Shopify developers UK",
    "AI automation UK",
    "digital marketing UK",
    "graphic design UK",
    "UI/UX design UK",
    "video editing UK",
    "software company London",
    "affordable IT services UK",
    "IT consultancy UK",
    "website design agency UK",
    "digital transformation UK",
  ],
  openGraph: {
    title: "Our Services | Team Infinity",
    description:
      "Explore Team Infinity’s wide range of digital and IT services — from web development and SEO to AI automation and digital marketing. Serving UK and global clients.",
    url: "https://teaminfinity.uk/services",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Infinity - Our Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Team Infinity",
    description:
      "Team Infinity provides complete IT and digital solutions — including web development, SEO, AI automation, Shopify, and marketing services for UK and global clients.",
    images: ["https://teaminfinity.uk/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
