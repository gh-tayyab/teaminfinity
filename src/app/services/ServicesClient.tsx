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
        className="relative py-24 mt-10 bg-[#F2FBFD]"
      >
        {/* Decorative Blurs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-12 w-72 h-[520px] bg-[#CFF8FB] rounded-2xl blur-2xl opacity-80 z-10"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <header className="flex flex-col justify-center items-start py-6 text-left">
            <h1
              id="services-heading"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </h1>

            <p className="text-gray-600 max-w-md mb-6">
              From strategy to success — we help businesses grow with powerful
              marketing, AI automation, and modern development solutions. At
              <span className="font-bold"> Team Infinity</span>, you get{" "}
              <span className="font-bold">
                premium-quality work at up to 30% lower rates
              </span>{" "}
              — handled by experts who focus on real performance, not empty
              promises. Smart strategies, creative execution, and measurable
              results — all under one roof.
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
          </header>

          {/* Right Image (Desktop / Tablet only) */}
          <figure className="relative hidden md:flex justify-center lg:justify-end items-center py-6">
            <div className="relative z-20 w-[420px] md:w-[340px] lg:w-[500px] overflow-hidden rounded-md">
              <Image
                src="/images/services.jpg"
                alt="Illustration showcasing our digital services"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </figure>
        </div>

        {/* Mobile Image (Vertical friendly – separate placement) */}
        <div className="md:hidden mt-10 px-6">
          <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
            <Image
              src="/images/services.jpg"
              alt="Our digital services illustration"
              fill
              className="object-cover"
              priority
            />
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
