"use client";

import Image from "next/image";
import { useState } from "react";
import AboutBuzzz from "./AboutBuzz";
import Certifications from "./Certifications";
import WhyChooseUs from "./WhyChooseUs";
import { motion } from "framer-motion";

export default function AboutClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch (err) {
      console.error("Newsletter failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <motion.section
        id="about-hero"
        aria-labelledby="about-heading"
        className="relative min-h-[90vh] flex items-center justify-center bg-[#F2FBFD] py-16 mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative Blur Elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-64 -translate-y-1/2 w-96 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-12 w-72 h-[520px] bg-[#CFF8FB] rounded-2xl blur-2xl opacity-80 z-10"
        />

        {/* Center Grid */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.header
            className="flex flex-col justify-center items-start text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              id="about-heading"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              About Us
            </motion.h1>

            <motion.p
              className="text-gray-600 max-w-md mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              With offices in Pakistan and London, <span className="font-bold">Team Infinity</span> connects global
              strategy with local expertise. We help businesses grow through smart
              marketing, AI automation, and modern development solutions. We offer
              up to <span className="font-bold">30% lower rates than the market</span> without compromising on
              quality, experience, or performance. Having worked with over{" "}
              <span className="font-bold">500 local businesses and 64 international companies</span>, we deliver
              premium results that drive real growth.
            </motion.p>

            {/* Newsletter Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 w-full sm:w-auto"
              role="form"
              aria-label="Subscribe to get started"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            >
              <label htmlFor="about-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="about-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-64 px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00B7CD]"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 sm:py-3 sm:px-8 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-[#009FB2] hover:bg-[#00B7CD] transition whitespace-nowrap"
              >
                {loading ? "Sending..." : submitted ? "Thanks!" : "Get Started"}
              </button>
            </motion.form>

            {submitted && (
              <motion.p
                className="text-green-600 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ✅ Thanks for subscribing!
              </motion.p>
            )}
          </motion.header>

          {/* RIGHT IMAGE */}
          <motion.figure
            className="relative flex justify-center md:justify-end items-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative z-20 w-[340px] sm:w-[380px] md:w-[420px] lg:w-[480px] overflow-hidden rounded-md shadow-md">
              <Image
                src="/images/aboutmain.jpg"
                alt="Illustration of Team Infinity professionals working on digital solutions"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <figcaption className="sr-only">
              Illustration representing our digital and AI-driven marketing services.
            </figcaption>
          </motion.figure>
        </div>
      </motion.section>

      {/* Subsections */}
      <AboutBuzzz />
      <Certifications />
      <WhyChooseUs />
    </main>
  );
}
