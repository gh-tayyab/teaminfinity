import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Boost your online presence with our tailored digital marketing strategies including SEO, social media, and paid campaigns.",
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
