"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function IndustriesSection(): React.JSX.Element {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  } as unknown as Variants;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // use cubic-bezier array instead of string for `ease`
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as unknown as Variants;

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative py-16 bg-gradient-to-r from-cyan-50/60 via-white to-white"
    >
      <div className="container mx-auto px-6">
        {/* Intro */}
        <motion.header
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-cyan-600 uppercase tracking-wider mb-3">
            Case Studies • Industry
          </p>
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
          >
            Discover how we impact each industry niche.
          </h2>
        </motion.header>

        {/* Cards */}
        <motion.div
          className="mt-10 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 — E-commerce */}
          <motion.article
            variants={itemVariants}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch py-8"
            aria-labelledby="industry-ecommerce"
          >
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <header>
                <h3
                  id="industry-ecommerce"
                  className="text-lg font-semibold text-gray-900"
                >
                  E-commerce
                </h3>
              </header>
              <p className="mt-3 text-sm text-gray-600 max-w-xl">
                From fashion brands to digital gadgets, we help online stores
                grow through smart content strategies, targeted ad distribution,
                and brand messaging.
              </p>

              <dl className="mt-6 flex items-center gap-6">
                <div className="bg-violet-50 text-violet-700 rounded-lg px-4 py-3 text-center">
                  <dt className="sr-only">Case Studies</dt>
                  <dd className="text-xl font-bold">17+</dd>
                  <span className="text-xs mt-1 block">Case Studies</span>
                </div>
              </dl>
            </div>

            <figure className="md:w-1/2 px-6">
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src="/images/industry1.svg"
                  alt="Person packing e-commerce orders on a desk with laptop and boxes"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <figcaption className="sr-only">
                Visual representation of E-commerce industry
              </figcaption>
            </figure>
          </motion.article>

          {/* Card 2 — Hospitality */}
          <motion.article
            variants={itemVariants}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch py-8"
            aria-labelledby="industry-hospitality"
          >
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <header>
                <h3
                  id="industry-hospitality"
                  className="text-lg font-semibold text-gray-900"
                >
                  Hospitality
                </h3>
              </header>
              <p className="mt-3 text-sm text-gray-600 max-w-xl">
                We’ve partnered with hotels, villas, and restaurants to build
                brand awareness and boost bookings through visual storytelling
                and digital engagement.
              </p>

              <dl className="mt-6 flex items-center gap-6">
                <div className="bg-violet-50 text-violet-700 rounded-lg px-4 py-3 text-center">
                  <dt className="sr-only">Case Studies</dt>
                  <dd className="text-xl font-bold">15+</dd>
                  <span className="text-xs mt-1 block">Case Studies</span>
                </div>
              </dl>
            </div>

            <figure className="md:w-1/2 px-6">
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src="/images/industry2.svg"
                  alt="Hotel staff welcoming guests in a hotel lobby"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover rounded-2xl"
                />
              </div>
              <figcaption className="sr-only">
                Visual representation of Hospitality industry
              </figcaption>
            </figure>
          </motion.article>

          {/* Card 3 — Education */}
          <motion.article
            variants={itemVariants}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch py-8"
            aria-labelledby="industry-education"
          >
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <header>
                <h3
                  id="industry-education"
                  className="text-lg font-semibold text-gray-900"
                >
                  Education
                </h3>
              </header>
              <p className="mt-3 text-sm text-gray-600 max-w-xl">
                From online learning platforms to formal institutions, our
                approach combines educational content with effective strategies
                to reach the right audience.
              </p>

              <dl className="mt-6 flex items-center gap-6">
                <div className="bg-violet-50 text-violet-700 rounded-lg px-4 py-3 text-center">
                  <dt className="sr-only">Case Studies</dt>
                  <dd className="text-xl font-bold">12+</dd>
                  <span className="text-xs mt-1 block">Case Studies</span>
                </div>
              </dl>
            </div>

            <figure className="md:w-1/2 px-6">
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src="/images/industry3.svg"
                  alt="Group of people in a classroom or workshop setting"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover rounded-2xl"
                />
              </div>
              <figcaption className="sr-only">
                Visual representation of Education industry
              </figcaption>
            </figure>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
