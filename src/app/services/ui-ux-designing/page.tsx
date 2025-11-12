import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "UI/UX Designing",
  description:
    "Team Infinity offers user-focused UI/UX design services to craft engaging, intuitive, and visually appealing digital experiences. We design modern interfaces that enhance usability and brand identity for businesses in the UK and worldwide.",
  keywords: [
    "UI UX design services",
    "user interface design",
    "user experience design",
    "mobile app UI design",
    "website UI UX design",
    "creative UI design agency",
    "product design company",
    "interaction design services",
    "UX research and prototyping",
    "responsive web design",
    "UI UX designer for hire",
    "digital product design",
    "usability testing services",
    "UX strategy consulting",
    "interface design company",
    "UI UX design services UK",
    "UI UX design agency London",
    "user experience design UK",
    "mobile app design UK",
    "website design agency UK",
    "UX designers London",
    "best UI UX company UK",
    "digital design agency UK",
    "creative web designers UK",
    "affordable UI UX design UK",
  ],
  openGraph: {
    title: "UI/UX Designing | Team Infinity",
    description:
      "Professional UI/UX design agency in the UK — Team Infinity creates intuitive, modern, and user-centric digital designs for global businesses.",
    url: "https://teaminfinity.uk/services/ui-ux-designing",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "Team Infinity - UI/UX Designing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Designing | Team Infinity",
    description:
      "Team Infinity provides expert UI/UX design services in the UK and worldwide — creating beautiful, user-friendly interfaces that elevate digital experiences.",
    images: ["https://teaminfinity.uk/og-image.png"],
  },
};

export default function UiUxDesigningPage() {
  return <HeaderClient />;
}
