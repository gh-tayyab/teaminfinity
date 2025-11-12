import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Build fast, scalable, and modern websites with Team Infinity’s expert web development services in the UK and worldwide. We create responsive, SEO-optimized, and high-performance web solutions for businesses of all sizes.",
  keywords: [
    "web development company",
    "professional website development",
    "custom web application development",
    "full-stack web development",
    "responsive web design",
    "eCommerce website development",
    "front-end development services",
    "backend development company",
    "UI/UX design agency",
    "modern web solutions",
    "website performance optimization",
    "SEO friendly web design",
    "software and web development",
    "web app development agency",
    "custom website design company",
    "web development company UK",
    "website design agency UK",
    "web developers London",
    "affordable web design UK",
    "custom website development UK",
    "eCommerce development UK",
    "business web solutions UK",
    "WordPress website development UK",
    "best web development company in UK",
    "web design services London",
  ],
  openGraph: {
    title: "Web Development | Team Infinity",
    description:
      "Expert web development company in the UK offering modern, responsive, and scalable website solutions for businesses worldwide.",
    url: "https://teaminfinity.uk/services/web-development",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Team Infinity - Web Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development | Team Infinity",
    description:
      "Team Infinity provides expert web development services in the UK and globally — modern, fast, and scalable websites for your business.",
    images: ["https://teaminfinity.uk/og-image.png"],
  },
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
