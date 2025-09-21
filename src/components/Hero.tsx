"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
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

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      setSubmitted(true);
      setEmail(""); // reset input
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-[#F2FBFD] pt-28 pb-16 flex justify-center items-center"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-[130px] left-[-150px] w-[150px] h-[350px] bg-[#00B7CD] rounded-full blur-3xl"
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight text-gray-900"
          >
            We Build Brands & Digital Experiences That Drive Results
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            From strategy to execution, we help businesses grow through powerful{" "}
            marketing and innovative development solutions.
          </p>

          {/* Email Signup */}
          {!submitted ? (
            <form
              className="mt-6 flex flex-col sm:flex-row gap-2 w-full max-w-md"
              onSubmit={handleSubmit}
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="hero-email" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-white border rounded-md outline-none focus:ring-2 focus:ring-cyan-500 text-sm md:text-base"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-[#009FB2] hover:bg-cyan-600 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Get Started"}
              </button>
            </form>
          ) : (
            <p className="mt-6 text-green-600 font-medium">
              ✅ Thanks for subscribing!
            </p>
          )}

          {/* Clients */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-3">
              <Image
                src="/images/avatar1.svg"
                alt="Client avatar"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
                loading="lazy"
              />
              <Image
                src="/images/avatar2.svg"
                alt="Client avatar"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
                loading="lazy"
              />
              <Image
                src="/images/avatar3.svg"
                alt="Client avatar"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
                loading="lazy"
              />
            </div>
            <p className="text-gray-700 font-medium text-sm md:text-base">
              Happy Clients <span className="font-bold">357K+</span>
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero.svg"
            alt="Businesswoman working on a laptop illustration"
            width={600}
            height={600}
            className="rounded-lg w-full h-auto max-w-[500px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
