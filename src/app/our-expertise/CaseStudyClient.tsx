"use client";

import React, { useState } from "react";
import Image from "next/image";
import IndustriesSection from "./IndustrySection";
import CampaignsSection from "./CampaignCard";
import Partner from "./Partner";

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
    <>
      <main
        id="case-study"
        className="relative top-16 md:top-0 py-16 bg-[#F2FBFD] overflow-visible"
        aria-labelledby="case-study-heading"
      >
        {/* Decorative Blur */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-[170px] left-[-150px] w-[130px] h-[350px] bg-[#00B7CD] rounded-full blur-3xl z-10"
        />

        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Left Content */}
          <header className="z-10">
            <h2
              id="case-study-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Case Study
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              From strategy to execution, we help businesses grow through powerful
              marketing & innovative development solutions.
            </p>

            {/* Email Signup */}
            <article className="mt-6 max-w-md">
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
            </article>
          </header>

          {/* Right Images */}
          <aside className="grid grid-cols-2 gap-4">
            <figure className="col-span-2 mt-14">
              <Image
                src="/images/casee1.jpg"
                alt="Business analytics dashboard showing performance metrics"
                width={800}
                height={500}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="rounded-lg object-cover w-full h-64 md:h-72 lg:h-80"
              />
            </figure>

            <figure>
              <Image
                src="/images/casee2.jpg"
                alt="Team working on digital project using design tools"
                width={400}
                height={300}
                sizes="(max-width: 768px) 50vw, 400px"
                className="rounded-lg object-cover w-full h-auto"
              />
            </figure>

            <figure>
              <Image
                src="/images/casee3.jpg"
                alt="Mobile phone screen displaying social media applications"
                width={400}
                height={300}
                sizes="(max-width: 768px) 50vw, 400px"
                className="rounded-lg object-cover w-full h-auto"
              />
            </figure>
          </aside>
        </section>
      </main>

      {/* Related Sections */}
      <IndustriesSection />
      <CampaignsSection />
      <Partner />
    </>
  );
}
