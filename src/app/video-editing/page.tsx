import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import StatsSection from "./StatsSection";
import WhyChooseUs from "@/app/web-development/WhyChooseUs";
import BenefitsSection from "@/app/web-development/BenefitsSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";

export const metadata: Metadata = {
  title: "Video Editing",
  description:
    "Professional video editing services to tell your brand’s story with impactful visuals and smooth editing.",
};

export default function Header() {
  return (
    <>
      <section
        className="relative w-full h-[60vh] lg:h-[70vh] top-24 flex items-center justify-center text-center text-white"
        aria-labelledby="social-hero-heading"
      >
        {/* Background Image (fills parent) */}
        <Image
          src="/images/servicebg.svg"
          alt="Social Media Marketing Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Layer */}
        <div
          className="absolute inset-0 bg-[#06859F] opacity-70"
          aria-hidden="true"
        />

        {/* Content (centered both vertically & horizontally) */}
        <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center justify-center -top-10 h-full">
          <h1
            id="social-hero-heading"
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Boost Your Social Media Presence with Our Expert Agency Services
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl">
            Placerat justo amet elit in tincidunt est risus vel purus. A
            convallis vel bibendum odio nunc. Lectus faucibus ac in ipsum amet
            nullam turpis. Vel vitae aliquam eget faucibus at libero dignissim
            arcu aliquam.
          </p>
        </div>
      </section>
      <StatsSection />
      <WhyChooseUs />
      <BenefitsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
}
