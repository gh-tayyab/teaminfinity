"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import StatsSection from "@/app/services/web-development/StatsSection";
import WhyChooseUs from "@/app/services/web-development/WhyChooseUs";
import BenefitsSection from "@/app/services/web-development/BenefitsSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HeaderClient() {
  return (
    <>
      <section
        className="relative w-full h-[80vh] lg:h-[70vh] top-24 flex items-center justify-center text-center text-white overflow-hidden"
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
        <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center justify-center -top-10 h-full">
          <motion.h1
            id="social-hero-heading"
            className="text-3xl md:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Create Strong Brand Identity with Professional Graphic Design
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            We design logos, banners, and visuals that make your brand stand out. Team Infinity helps businesses build clear, consistent, and attractive designs for online and offline platforms.
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
