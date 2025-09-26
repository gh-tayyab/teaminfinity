import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "UI/UX Designing",
  description:
    "User-centered UI/UX design services to create engaging, intuitive, and visually appealing digital experiences.",
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
