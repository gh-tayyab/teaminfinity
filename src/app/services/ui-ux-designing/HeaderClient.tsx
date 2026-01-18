"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import StatsSection from "@/app/services/web-development/StatsSection";
import WhyChooseUs from "@/app/services/web-development/WhyChooseUs";
import BenefitsSection from "@/app/services/web-development/BenefitsSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "@/app/services/web-development/TestimonialsSection";
import Form from "@/app/services/web-development/Form";
import ContactInfo from "@/app/services/web-development/ContactInfo";
import Services from "./Services";
import HowWeWork from "./HowWeWork";

export default function HeaderClient() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full flex items-center justify-center text-center text-white overflow-hidden"
        aria-labelledby="social-hero-heading"
      >
        {/* Desktop / Tablet Background */}
        <div className="hidden md:block relative w-full h-[80vh]">
          <Image
            src="/images/webbg.jpg"
            alt="Social Media Marketing Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden relative w-full h-[80vh]">
          <Image
            src="/images/webbgm.jpg"
            alt="Mobile Background"
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
            id="social-hero-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white max-w-[1100px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Deliver Better Experiences UI/UX Design
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            Our designers create simple, modern interfaces that users love. Team
            Infinity builds clean, intuitive layouts that improve engagement and
            make navigation effortless across all devices.
          </motion.p>
        </div>

        {/* Decorative Floating Shapes */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-300/30 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </section>

      {/* Rest of Page Sections */}
      {/* <StatsSection /> */}
      <Form />
      {/* <WhyChooseUs /> */}
      <Services />
      <BenefitsSection />
      <HowWeWork />
      {/* <ProjectsSection /> */}
      <TestimonialsSection />
      <ContactInfo />
    </>
  );
}
