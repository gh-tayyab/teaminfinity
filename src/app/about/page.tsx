import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "From strategy to execution, Team Infinity helps businesses grow through powerful marketing and innovative development solutions.",
};

export default function AboutPage() {
  return <AboutClient />;
}
