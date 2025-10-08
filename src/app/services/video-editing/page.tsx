import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Video Editing",
  description:
    "Professional video editing services to bring your brand’s story to life with stunning visuals, smooth transitions, and cinematic effects. Team Infinity delivers high-quality video editing for businesses, creators, and agencies in the UK and worldwide.",
  keywords: [
    "video editing services",
    "professional video editing",
    "corporate video editing",
    "social media video editing",
    "YouTube video editing",
    "commercial video production",
    "cinematic video editing",
    "video post production",
    "branding video editing",
    "promotional video editing",
    "short form video editing",
    "long form video editing",
    "video color grading",
    "motion graphics editing",
    "content editing services",
    "video editing services UK",
    "video editing company UK",
    "professional video editors London",
    "affordable video editing UK",
    "freelance video editor UK",
    "corporate video production UK",
    "best video editing agency UK",
    "video post production London",
    "content creation services UK",
    "brand video editing UK",
  ],
  openGraph: {
    title: "Video Editing | Team Infinity",
    description:
      "Team Infinity offers professional video editing services in the UK and worldwide — create engaging, high-quality videos that tell your brand’s story.",
    url: "https://teaminfinity.uk/services/video-editing",
    siteName: "Team Infinity",
    images: [
      {
        url: "https://teaminfinity.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Infinity - Video Editing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Editing | Team Infinity",
    description:
      "Professional video editing services by Team Infinity — cinematic visuals, smooth transitions, and creative storytelling for brands in the UK and globally.",
    images: ["https://teaminfinity.uk/og-image.jpg"],
  },
};

export default function VideoEditingPage() {
  return <HeaderClient />;
}
