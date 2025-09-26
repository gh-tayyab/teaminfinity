import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Team Infinity for IT solutions, web development, and digital services tailored to your business needs.",
};

export default function ContactPage() {
  return <ContactUsClient />;
}
