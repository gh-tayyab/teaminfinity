import { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Team Infinity, our vision, mission, and the dedicated professionals driving innovative IT solutions.",
};

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}
