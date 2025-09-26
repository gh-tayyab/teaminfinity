"use client";

import React, { useState } from "react";
import Image from "next/image";
import IndustriesSection from "./IndustrySection";
import CampaignsSection from "./CampaignCard";
import Partner from "./Partner";
import { motion } from "framer-motion";

export default function CaseStudyClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSubmitted(true);
      setEmail("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      id="case-study"
      className="relative py-16 bg-gradient-to-r from-cyan-50 via-white to-white"
      aria-labelledby="case-study-heading"
    >
      {/* Decorative Blur Layers */}
      <div
        aria-hidden="true"
        className="absolute top-52 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"
      />
      <div
        aria-hidden="true"
        className="absolute top-52 right-0 w-72 h-80 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"
      />

      <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <header>
          <motion.h2
            id="case-study-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Case Study
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From strategy to execution, we help businesses grow through powerful
            marketing and innovative development solutions.
          </motion.p>

          {/* Email Signup */}
          <motion.article
            className="mt-6 max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex items-center w-full"
              aria-label="Subscribe to case study newsletter"
            >
              <label htmlFor="case-email" className="sr-only">
                Email address
              </label>
              <input
                id="case-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                aria-required="true"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || submitted}
                className="flex-grow min-w-0 px-4 py-3 bg-white border rounded-l-full outline-none text-sm sm:text-base"
              />
              <button
                type="submit"
                disabled={loading || submitted}
                className="px-4 sm:px-5 py-3 bg-cyan-500 text-white rounded-r-full hover:bg-cyan-600 transition shrink-0 whitespace-nowrap text-sm sm:text-base"
              >
                {loading ? "Sending..." : submitted ? "Thanks!" : "Get Started"}
              </button>
            </form>

            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
          </motion.article>
        </header>

        {/* Right Images */}
        <aside className="grid grid-cols-2 gap-4">
          <motion.figure
            className="col-span-2 mt-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/case1.svg"
              alt="Business analytics dashboard showing performance metrics"
              width={800}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="rounded-lg object-cover w-full h-64 md:h-72 lg:h-80"
            />
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/case2.svg"
              alt="Team working on digital project using design tools"
              width={400}
              height={300}
              sizes="(max-width: 768px) 50vw, 400px"
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/case3.svg"
              alt="Mobile phone screen displaying social media applications"
              width={400}
              height={300}
              sizes="(max-width: 768px) 50vw, 400px"
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.figure>
        </aside>
      </section>

      {/* Related Sections (no animations here) */}
      <IndustriesSection />
      <CampaignsSection />
      <Partner />
    </main>
  );
}
