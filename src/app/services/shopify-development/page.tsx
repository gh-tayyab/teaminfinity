import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Shopify Development",
  description:
    "Custom Shopify development services to launch and scale your e-commerce store successfully.",
};


export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
