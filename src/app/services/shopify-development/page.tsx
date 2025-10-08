import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Shopify Development",
  description:
    "Team Infinity provides expert Shopify development services to help you build, customize, and scale your eCommerce store. We offer responsive, SEO-friendly Shopify websites for businesses in the UK and globally.",
  keywords: [
    "Shopify development services",
    "Shopify store development",
    "custom Shopify website",
    "Shopify theme customization",
    "Shopify app development",
    "Shopify experts",
    "Shopify web design",
    "Shopify migration services",
    "Shopify maintenance and support",
    "Shopify SEO optimization",
    "Shopify plus development",
    "Shopify eCommerce solutions",
    "Shopify website design company",
    "Shopify developers for hire",
    "Shopify API integration",
    "Shopify development UK",
    "Shopify experts UK",
    "Shopify developers London",
    "Shopify agency UK",
    "Shopify web design UK",
    "eCommerce Shopify development UK",
    "custom Shopify store UK",
    "Shopify app developers UK",
    "Shopify support services UK",
    "best Shopify company in UK",
  ],
  openGraph: {
    title: "Shopify Development | Team Infinity",
    description:
      "Professional Shopify development company in the UK — Team Infinity builds custom, scalable, and SEO-optimized Shopify stores for global eCommerce success.",
    url: "https://teaminfinity.uk/services/shopify-development",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Infinity - Shopify Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development | Team Infinity",
    description:
      "Custom Shopify development services by Team Infinity — scalable, fast, and SEO-friendly eCommerce stores for UK and global businesses.",
    images: ["https://teaminfinity.uk/og-image.jpg"],
  },
};

export default function ShopifyDevelopmentPage() {
  return <HeaderClient />;
}
