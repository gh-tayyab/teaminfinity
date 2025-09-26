import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Search Engine Optimization",
  description:
    "Increase your visibility and rank higher on search engines with our proven SEO strategies.",
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
