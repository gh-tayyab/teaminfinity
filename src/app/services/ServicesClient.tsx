"use client";

import Image from "next/image";
import { useState } from "react";
import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";
import { motion } from "framer-motion";

export default function ServicesClient() {
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
        id="services-hero"
        aria-labelledby="services-heading"
        className="relative py-24 overflow-hidden bg-gradient-to-r from-white to-cyan-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative Blur Elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-12 w-72 h-[520px] bg-[#CFF8FB] rounded-2xl blur-2xl opacity-80 z-0"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <motion.header
            className="flex flex-col justify-center items-start py-6 text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-gray-600 max-w-md mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              From strategy to execution we help businesses grow through
              powerful marketing and innovative development solutions.
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
              <label htmlFor="svc-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="svc-email"
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
                {loading ? "Sending..." : "Get Started"}
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

          {/* Right Illustration */}
          <motion.figure
            className="relative flex justify-center lg:justify-end items-center py-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative z-20 w-[420px] sm:w-[380px] md:w-[420px] lg:w-[440px] md:left-14 lg:left-0 overflow-hidden">
              <Image
                src="/images/services.svg"
                alt="Illustration showcasing our digital services"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <figcaption className="sr-only">
              Illustration representing our digital marketing and development
              services.
            </figcaption>
          </motion.figure>
        </div>
      </motion.section>

      {/* Sections */}
      <ServicesGrid />
      <WhyChooseUs />
      <OurProcess />
    </main>
  );
}
