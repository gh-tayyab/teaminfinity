"use client";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudies(): React.JSX.Element {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.2, duration: 0.6 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03 }
  };

  return (
    <>
      <Head>
        <title>Case Studies & Portfolio — Team Infinity</title>
        <meta
          name="description"
          content="See how we've helped businesses achieve measurable growth — case studies and portfolio highlights."
        />
        <meta
          property="og:title"
          content="Case Studies & Portfolio — Team Infinity"
        />
        <meta
          property="og:description"
          content="See how we've helped businesses achieve measurable growth — case studies and portfolio highlights."
        />
      </Head>

      <main>
        <section
          id="case-studies"
          aria-labelledby="case-studies-heading"
          className="relative py-20 md:py-28"
        >
          {/* Top background image (decorative) */}
          <div
            className="absolute inset-x-0 top-0 h-40 md:h-48 lg:h-56 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <Image
              src="/images/bg.png"
              alt=""
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Decorative blur circle */}
          <div
            className="absolute top-6 right-6 md:top-10 md:right-10 lg:top-14 lg:right-14 w-32 h-32 bg-[#36E1F8] opacity-20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Decorative top-right image */}
          <div
            className="hidden md:block absolute right-6 top-6 md:top-8 lg:top-10 z-20 pointer-events-none"
            aria-hidden="true"
          >
            <Image
              src="/images/robot.svg"
              alt=""
              width={260}
              height={260}
              className="select-none"
              loading="lazy"
            />
          </div>

          {/* Main container */}
          <motion.div
            className="max-w-7xl mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.article
              className="relative mx-auto max-w-5xl bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden 
                         grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8 items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              {/* LEFT: Image grid */}
              <motion.div className="space-y-4" variants={containerVariants}>
                {/* Large image */}
                <motion.figure
                  className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-40 md:h-72"
                  variants={itemVariants}
                >
                  <Image
                    src="/images/case1.jpg"
                    alt="Case study: project overview"
                    fill
                    className="object-cover"
                    priority
                  />
                  <figcaption className="sr-only">
                    Case study main project overview
                  </figcaption>
                </motion.figure>

                {/* Two small images */}
                <div className="grid grid-cols-2 gap-4">
                  {["/images/case2.jpg", "/images/case3.jpg"].map((img, idx) => (
                    <motion.figure
                      key={idx}
                      className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-24 md:h-44"
                      variants={itemVariants}
                    >
                      <Image
                        src={img}
                        alt={`Case study detail ${idx + 1}`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                      <figcaption className="sr-only">
                        Case study supporting detail {idx + 1}
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT: Content */}
              <motion.div
                className="flex flex-col items-start justify-center"
                variants={itemVariants}
              >
                <header>
                  <span className="text-xs text-[#60d1db] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="text-sm" aria-hidden="true">
                      ✷
                    </span>
                    <span className="hidden sm:inline text-black">Show Work</span>
                  </span>

                  <h2
                    id="case-studies-heading"
                    className="text-2xl md:text-3xl font-bold text-[#0f1724] mb-3"
                  >
                    Case Studies & <br className="block md:hidden" /> Portfolio
                  </h2>
                </header>

                <p className="text-sm text-gray-600 mb-6 max-w-xl">
                  See how we&apos;ve helped businesses like yours achieve
                  measurable growth.
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-[#bfeef2] text-[#0f5670] rounded-md text-sm font-medium shadow-sm hover:shadow-md transition"
                  aria-label="View our work"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.article>
          </motion.div>
        </section>
      </main>
    </>
  );
}
