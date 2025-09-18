"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with your API or newsletter provider here
    setSubmitted(true);
  };

  return (
    <section
      className="relative bg-[#F2FBFD] pt-28 pb-16 flex justify-center items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background shape */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-[130px] left-[-150px] w-[250px] h-[350px] bg-cyan-200/40 rounded-full blur-3xl"
      />

      {/* Content Grid */}
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight text-gray-900"
          >
            We Build Brands & Digital Experiences That Drive Results
          </h1>
          <p className="mt-4 text-gray-600 text-sm">
            From strategy to execution, we help businesses grow through powerful{" "}
            <br />
            marketing and innovative development solutions.
          </p>

          {/* Email Signup */}
          {!submitted ? (
            <form
              className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full max-w-md"
              onSubmit={handleSubmit}
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="hero-email" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="flex-grow min-w-0 px-4 py-3 bg-white border rounded-md outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                required
                aria-required="true"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 sm:py-3 sm:px-8 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-[#009FB2] hover:bg-cyan-600 hover:text-white transition whitespace-nowrap w-full sm:w-auto"
              >
                Get Started
              </button>
            </form>
          ) : (
            <p className="mt-6 text-green-600 font-medium">
              Thanks for subscribing!
            </p>
          )}

          {/* Clients */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-3">
              <Image
                src="/images/avatar1.svg"
                alt="Client avatar 1"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
              />
              <Image
                src="/images/avatar2.svg"
                alt="Client avatar 2"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
              />
              <Image
                src="/images/avatar3.svg"
                alt="Client avatar 3"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
              />
            </div>
            <p className="text-gray-700 font-medium">
              Happy Clients <span className="font-bold">357K+</span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero.svg"
            alt="Illustration of a businesswoman working on a laptop"
            width={600}
            height={600}
            className="rounded-lg w-full h-auto max-w-[600px] md:max-w-[450px] lg:max-w-[500px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
