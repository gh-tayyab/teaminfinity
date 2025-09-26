import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "Automate your business processes with Team Infinity’s AI-powered automation solutions for efficiency and growth.",
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
