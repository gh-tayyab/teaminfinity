"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import BenefitsSection from "./BenefitsSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import Services from "./Services";

export default function HeaderClient() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full flex items-center justify-center text-center text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Desktop / Tablet Background */}
        <div className="hidden md:block relative w-full h-[80vh]">
          <Image
            src="/images/webbg.jpg"
            alt="Background for desktop"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden relative w-full h-[80vh]">
          <Image
            src="/images/webbgm.jpg"
            alt="Background for mobile"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(3,37,76,0.72)]" />

        {/* Content */}
        <div className="absolute inset-0 top-20 md:top-30 flex flex-col items-center justify-center px-6 md:px-8 text-center z-10">
          <motion.h1
            id="hero-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white max-w-[1100px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Web Development Services for Business Growth
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            We create fast, responsive websites and targeted marketing strategies that attract
            customers and grow revenue. Team Infinity delivers SEO-friendly, mobile-optimized
            solutions tailored for your business.
          </motion.p>
        </div>
      </section>

      {/* Rest of Page Sections */}
      <Form />
      {/* <StatsSection /> */}
      {/* <WhyChooseUs /> */}
      <Services />
      <BenefitsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactInfo />
    </>
  );
}
