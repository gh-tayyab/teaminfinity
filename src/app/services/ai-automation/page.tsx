import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "Streamline your operations with Team Infinity’s AI-powered automation services. We build intelligent workflows to enhance efficiency, productivity, and business growth across the UK and globally.",
  keywords: [
    "AI automation",
    "artificial intelligence automation",
    "AI automation services",
    "business automation",
    "process automation",
    "AI integration",
    "intelligent automation solutions",
    "machine learning automation",
    "AI workflow automation",
    "AI bots for business",
    "AI digital transformation",
    "AI chatbots",
    "automation software solutions",
    "AI automation tools",
    "automated business systems",
    "AI solutions for enterprises",
    "robotic process automation",
    "AI-powered analytics",
    "AI task automation",
    "AI for productivity",
    "AI automation UK",
    "AI automation company UK",
    "AI automation agency UK",
    "AI solutions UK",
    "AI business automation UK",
    "intelligent automation UK",
    "AI consultancy UK",
    "AI and automation services London",
    "automation experts UK",
    "AI digital agency UK",
  ],
  openGraph: {
    title: "AI Automation | Team Infinity",
    description:
      "Automate and scale your business with Team Infinity’s AI automation services — driving innovation, efficiency, and growth for UK and global clients.",
    url: "https://teaminfinity.uk/services/ai-automation",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Infinity - AI Automation Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation | Team Infinity",
    description:
      "Transform your business with Team Infinity’s AI automation solutions — intelligent systems that boost performance and reduce manual tasks.",
    images: ["https://teaminfinity.uk/og-image.jpg"],
  },
};

export default function AIAutomationPage() {
  return <HeaderClient />;
}
