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
    <section className="relative bg-gradient-to-r from-white to-cyan-50 top-4">
      {/* Spacer blank div (for clean look behind navbar) */}
      <div className="h-24" />

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            We Build Brands & Digital Experiences That Drive Results
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            From strategy to execution we help businesses grow through powerful
            marketing and innovative development solutions
          </p>

          {/* Email Signup */}
          <form
            className="mt-6 flex items-center w-full max-w-md"
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
              className="flex-grow min-w-0 px-4 py-3 border rounded-l-full outline-none"
              required
              aria-required="true"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-5 py-3 bg-cyan-500 text-white rounded-r-full hover:bg-cyan-600 transition shrink-0"
            >
              {submitted ? "Thanks" : "Get Started"}
            </button>
          </form>

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
            className="rounded-lg w-full h-auto max-w-[600px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
