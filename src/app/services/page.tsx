import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover our wide range of IT solutions including web development, AI automation, SEO, and more to help your business grow.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
