import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Build fast, scalable, and modern websites with Team Infinity’s expert web development services.",
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
