import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover our wide range of IT solutions including web development, AI automation, SEO, and more to help your business grow.",
};

const Page: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="services-hero"
        aria-labelledby="services-heading"
        className="relative py-24 overflow-hidden bg-gradient-to-r from-white to-cyan-50"
      >
        <div className="pointer-events-none absolute -left-32 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />
        <div className="pointer-events-none absolute -right-10 top-12 w-72 h-[520px] bg-[#CFF8FB] rounded-2xl blur-2xl opacity-80 z-0" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="text-left flex flex-col justify-center items-start py-6">
            <h1 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-md mb-6">
              From strategy to execution we help businesses grow through powerful
              marketing and innovative development solutions.
            </p>
            <form
              className="flex items-center gap-3 w-full sm:w-auto"
              role="search"
              aria-label="Subscribe to get started"
            >
              <label htmlFor="svc-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="svc-email"
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00B7CD] bg-white"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#00B7CD] text-white font-medium hover:bg-cyan-600 transition"
              >
                Get Started
              </button>
            </form>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center py-6">
            <div className="relative z-20 w-[420px] sm:w-[380px] md:w-[420px] lg:w-[480px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/services.svg"
                alt="Service illustration"
                width={900}
                height={1200}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />
      <WhyChooseUs />
      <OurProcess />
    </main>
  );
};

export default Page;
