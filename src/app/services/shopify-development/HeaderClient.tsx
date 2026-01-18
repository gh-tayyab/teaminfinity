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
        <div className="absolute inset-0 top-20 md:top-28 flex flex-col items-center justify-center px-6 md:px-8 text-center z-10">
          <motion.h1
            id="social-hero-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Scale Your Online Store with Shopify Experts
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-100 max-w-xl lg:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          >
            Our Shopify developers create beautiful, high-performing stores that
            sell more. Team Infinity helps eCommerce brands build customized,
            secure, and mobile-friendly websites that deliver real results.
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
      <Services />
      <BenefitsSection />
      <HowWeWork />
      {/* <ProjectsSection /> */}
      <TestimonialsSection />
      <ContactInfo />
    </>
  );
}
