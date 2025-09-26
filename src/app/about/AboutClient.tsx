"use client";

import Image from "next/image";
import { useState } from "react";
import AboutBuzzz from "./AboutBuzz";
import Certifications from "./Certifications";
import WhyChooseUs from "./WhyChooseUs";
import { motion } from "framer-motion"; // 👈 import

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
    <>
      <section
        id="about-hero"
        aria-labelledby="about-heading"
        className="relative h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-b from-white to-cyan-50 overflow-hidden"
      >
        {/* Left Blur Layer (decorative only) */}
        <div
          aria-hidden="true"
          className="absolute top-[130px] left-[-150px] w-[350px] h-[350px] bg-cyan-200/40 rounded-full blur-3xl"
        />

        {/* LEFT CONTENT */}
        <motion.header
          className="relative z-10 md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            From strategy to execution we help businesses grow through powerful
            marketing and innovative development solutions.
          </motion.p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4"
            role="form"
            aria-label="Subscribe to our newsletter"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="about-email" className="sr-only">
              Enter your email address
            </label>
            <input
              id="about-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address input"
              className="w-64 md:w-80 px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <motion.button
              type="submit"
              disabled={loading}
              aria-label="Submit newsletter form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:py-3 sm:px-8 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-black hover:bg-cyan-600 transition whitespace-nowrap"
            >
              {loading ? "Sending..." : "Get Started"}
            </motion.button>
          </motion.form>

          {submitted && (
            <motion.p
              className="text-green-600 mt-2"
              aria-live="polite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              ✅ Thanks for subscribing!
            </motion.p>
          )}
        </motion.header>

        {/* RIGHT IMAGE */}
        <motion.figure
          className="relative z-10 mt-10 md:mt-20 md:w-120 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/services.svg"
            alt="Illustration of Team Infinity professionals working on digital solutions"
            width={400}
            height={200}
            className="object-cover"
            priority
          />
        </motion.figure>
      </section>

      {/* Subsections (no animations here) */}
      <AboutBuzzz />
      <Certifications />
      <WhyChooseUs />
    </>
  );
}
