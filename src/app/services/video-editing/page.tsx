import { Metadata } from "next";
import HeaderClient from "./HeaderClient";

export const metadata: Metadata = {
  title: "Video Editing",
  description:
    "Professional video editing services to tell your brand’s story with impactful visuals and smooth editing.",
};

export default function WebDevelopmentPage() {
  return <HeaderClient />;
}
