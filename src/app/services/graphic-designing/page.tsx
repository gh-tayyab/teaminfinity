import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Graphic Designing",
  description:
    "Bring your ideas to life with Team Infinity’s creative graphic design services. We craft unique, eye-catching visuals for brands across the UK and worldwide.",
  keywords: [
    "graphic design",
    "graphic designing services",
    "creative design agency",
    "branding and design",
    "logo design",
    "poster design",
    "social media design",
    "brochure design",
    "flyer design",
    "business card design",
    "illustration services",
    "visual identity design",
    "professional designers",
    "graphic design company",
    "digital design agency",
    "corporate branding",
    "print design services",
    "custom graphic design",
    "creative studio",
    "UI graphics",
    "graphic design UK",
    "graphic designing agency UK",
    "graphic design company London",
    "creative agency UK",
    "logo design UK",
    "branding agency UK",
    "digital design UK",
    "professional graphic designers UK",
    "affordable graphic design UK",
    "freelance graphic designer UK",
  ],
  openGraph: {
    title: "Graphic Designing | Team Infinity",
    description:
      "Creative and professional graphic design services for businesses in the UK and globally. Let Team Infinity design your brand’s visual identity.",
    url: "https://teaminfinity.uk/services/graphic-designing",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Team Infinity - Graphic Designing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Designing | Team Infinity",
    description:
      "Transform your brand visuals with Team Infinity’s creative graphic design services — available in the UK and globally.",
    images: ["https://teaminfinity.uk/og-image.png"],
  },
};

export default function GraphicDesignPage() {
  return <HeaderClient />;
}
