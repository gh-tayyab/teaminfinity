"use client";

import Image from "next/image";
import { useState } from "react";
import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";

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
      <section
        id="services-hero"
        aria-labelledby="services-heading"
        className="relative py-24 overflow-hidden bg-gradient-to-r from-white to-cyan-50"
      >
        {/* Decorative Blur Elements */}
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />
        <div className="pointer-events-none absolute -right-10 top-12 w-72 h-[520px] bg-[#CFF8FB] rounded-2xl blur-2xl opacity-80 z-0" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start py-6 text-left">
            <h1
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </h1>
            <p className="text-gray-600 max-w-md mb-6">
              From strategy to execution we help businesses grow through
              powerful marketing and innovative development solutions.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 w-full sm:w-auto"
              role="form"
              aria-label="Subscribe to get started"
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
            </form>

            {submitted && (
              <p className="text-green-600 mt-2">
                ✅ Thanks for subscribing!
              </p>
            )}
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end items-center py-6">
            <div className="relative z-20 w-[420px] sm:w-[380px] md:w-[420px] lg:w-[440px] overflow-hidden">
              <Image
                src="/images/services.svg"
                alt="Illustration showcasing our digital services"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <ServicesGrid />
      <WhyChooseUs />
      <OurProcess />
    </main>
  );
}
