import type { Metadata } from "next";
import React from "react";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Our Expertise", // Ye template ke sath combine hoga
  description: "Meet the skilled and passionate team behind Team Infinity.",
};

export default function TeamPage() {
  return (
    <>
    <CaseStudyClient />
    </>
  );
}
