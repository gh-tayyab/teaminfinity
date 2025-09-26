"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

      if (!res.ok) throw new Error("Failed to subscribe");

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <header
      className="relative bg-[#F2FBFD] pt-30 pb-16 flex justify-center items-center"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-[170px] left-[-150px] w-[150px] h-[350px] bg-[#00B7CD] rounded-full blur-3xl z-10"
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center px-6">
        {/* Left Side */}
        <motion.article
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            id="hero-heading"
            className="text-3xl md:text-4xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            We Build Brands & Digital Experiences That Drive Results
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 text-base md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            From strategy to execution, we help businesses grow through powerful{" "}
            marketing and innovative development solutions.
          </motion.p>

          {/* Email Signup */}
          {!submitted ? (
            <motion.form
              className="mt-6 flex flex-col sm:flex-row items-stretch gap-2 w-full max-w-md"
              onSubmit={handleSubmit}
              aria-label="Subscribe to newsletter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <label htmlFor="hero-email" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-white border border-gray-300 rounded-md sm:rounded-r-none sm:border-r-0 outline-none focus:ring-2 focus:ring-cyan-500 text-sm md:text-base"
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
            </motion.form>
          ) : (
            <motion.p
              className="mt-6 text-green-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              ✅ Thanks for subscribing!
            </motion.p>
          )}

          {/* Clients */}
          <motion.figure
            className="flex items-center gap-3 mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex -space-x-3">
              <Image
                src="/images/avatar1.svg"
                alt="Happy client 1"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
                loading="lazy"
              />
              <Image
                src="/images/avatar2.svg"
                alt="Happy client 2"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
                loading="lazy"
              />
              <Image
                src="/images/avatar3.svg"
                alt="Happy client 3"
                width={40}
                height={40}
                className="rounded-full border w-10 h-10"
                sizes="40px"
                loading="lazy"
              />
            </div>
            <figcaption className="text-gray-700 font-medium text-sm md:text-base">
              Happy Clients <span className="font-bold">357K+</span>
            </figcaption>
          </motion.figure>
        </motion.article>

        {/* Right Side Image */}
        <motion.aside
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/hero.svg"
            alt="Businesswoman working on a laptop illustration"
            width={600}
            height={600}
            className="rounded-lg w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[500px]"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            fetchPriority="high"
            priority
          />
        </motion.aside>
      </div>
    </header>
  );
}
