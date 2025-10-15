"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import BenefitsSection from "./BenefitsSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HeaderClient() {
  return (
    <>
      <section
        className="relative w-full h-[80vh] md:h-[70vh] lg:h-[60vh] top-24 flex items-center justify-center text-center text-white overflow-hidden"
        aria-labelledby="social-hero-heading"
      >
        {/* Background Image */}
        <Image
          src="/images/servicebg.svg"
          alt="Social Media Marketing Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col items-center justify-center -top-10 h-full text-center">
          <motion.h1
            id="social-hero-heading"
            className="text-2xl lg:text-4xl font-bold leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Web Development Services for Business Growth
          </motion.h1>

          <motion.p
            className="mt-4 text-sm lg:text-base text-gray-100 max-w-xl lg:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            We create fast, responsive websites built to attract customers and
            boost sales. Team Infinity delivers SEO-friendly, mobile-optimized
            web solutions for businesses worldwide.
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

      <StatsSection />
      <WhyChooseUs />
      <BenefitsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
}
