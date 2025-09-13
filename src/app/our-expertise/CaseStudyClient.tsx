"use client";

import React, { useState } from "react";
import Image from "next/image";
import IndustriesSection from "./IndustrySection";
import CampaignsSection from "./CampaignCard";
import Partner from "./Partner";

export default function CaseStudyClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="case-study"
      className="relative py-16 bg-gradient-to-r from-cyan-50 via-white to-white"
      aria-labelledby="case-study-heading"
    >
      {/* Decorative Blur Layers */}
      <div className="absolute top-52 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute top-52 right-0 w-72 h-80 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <div>
          <h2
            id="case-study-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Case Study
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From strategy to execution, we help businesses grow through powerful
            marketing and innovative development solutions.
          </p>

          {/* Email Signup */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex items-center max-w-md w-full"
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
              aria-describedby="case-study-heading"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow min-w-0 px-4 py-3 border rounded-l-full outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="px-4 sm:px-5 py-3 bg-cyan-500 text-white rounded-r-full hover:bg-cyan-600 transition shrink-0 whitespace-nowrap text-sm sm:text-base"
            >
              {submitted ? "Thanks" : "Get Started"}
            </button>
          </form>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 mt-14">
            <Image
              src="/images/case1.svg"
              alt="Business analytics dashboard showing performance metrics"
              width={800}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="rounded-lg object-cover w-full h-64 md:h-72 lg:h-80"
            />
          </div>

          <div>
            <Image
              src="/images/case2.svg"
              alt="Team working on digital project using design tools"
              width={400}
              height={300}
              sizes="(max-width: 768px) 50vw, 400px"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div>
            <Image
              src="/images/case3.svg"
              alt="Mobile phone screen displaying social media applications"
              width={400}
              height={300}
              sizes="(max-width: 768px) 50vw, 400px"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Related Sections */}
      <IndustriesSection />
      <CampaignsSection />
      <Partner />
    </section>
  );
}
