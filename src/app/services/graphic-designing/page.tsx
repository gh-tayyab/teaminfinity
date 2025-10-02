import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Graphic Designing",
  description:
    "Creative graphic design services to visually represent your brand with unique, eye-catching designs.",
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
