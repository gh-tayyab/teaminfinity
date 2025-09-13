"use client";
import React from "react";
import Image from "next/image";


export default function IndustriesSection(): React.JSX.Element {
  return (
    <section
      aria-labelledby="industries-heading"
      className="relative py-16 bg-gradient-to-r from-cyan-50/60 via-white to-white"
    >
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-cyan-600 uppercase tracking-wider mb-3">
            Case Studies • Industry
          </p>
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
          >
            Discover how we impact each industry niche.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 space-y-6">
          {/* Card 1 — E-commerce */}
          <article
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch py-8"
            aria-labelledby="industry-ecommerce"
          >
            {/* Left text column */}
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 id="industry-ecommerce" className="text-lg font-semibold text-gray-900">
                E-commerce
              </h3>
              <p className="mt-3 text-sm text-gray-600 max-w-xl">
                From fashion brands to digital gadgets, we help online stores grow
                through smart content strategies, targeted ad distribution, and brand messaging.
              </p>

              <div className="mt-6 flex items-center gap-6">
                {/* stats badge */}
                <div className="flex items-center gap-4">
                  <div className="bg-violet-50 text-violet-700 rounded-lg px-4 py-3 text-center">
                    <div className="text-xl font-bold">17+</div>
                    <div className="text-xs mt-1">Case Studies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image column */}
            <div className="md:w-1/2 px-6">
              <div className="w-full h-64 md:h-72 lg:h-80 relative">
                <Image
                  src="/images/industry1.svg"
                  alt="Person packing e-commerce orders on desk with laptop and boxes"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </article>

          {/* Card 2 — Hospitality */}
          <article
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch py-8"
            aria-labelledby="industry-hospitality"
          >
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 id="industry-hospitality" className="text-lg font-semibold text-gray-900">
                Hospitality
              </h3>
              <p className="mt-3 text-sm text-gray-600 max-w-xl">
                We’ve partnered with hotels, villas, and restaurants to build brand awareness
                and boost bookings through visual storytelling and digital engagement.
              </p>

              <div className="mt-6 flex items-center gap-6">
                <div className="bg-violet-50 text-violet-700 rounded-lg px-4 py-3 text-center">
                  <div className="text-xl font-bold">15+</div>
                  <div className="text-xs mt-1">Case Studies</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 px-6">
              <div className="w-full h-64 md:h-72 lg:h-80 relative">
                <Image
                  src="/images/industry2.svg"
                  alt="Hotel staff welcoming guests in a hotel lobby"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </article>

          {/* Card 3 — Education */}
          <article
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch py-8"
            aria-labelledby="industry-education"
          >
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 id="industry-education" className="text-lg font-semibold text-gray-900">
                Education
              </h3>
              <p className="mt-3 text-sm text-gray-600 max-w-xl">
                From online learning platforms to formal institutions, our approach combines
                educational content with effective strategies to reach the right audience.
              </p>

              <div className="mt-6 flex items-center gap-6">
                <div className="bg-violet-50 text-violet-700 rounded-lg px-4 py-3 text-center">
                  <div className="text-xl font-bold">12+</div>
                  <div className="text-xs mt-1">Case Studies</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 px-6">
              <div className="w-full h-64 md:h-72 lg:h-80 relative">
                <Image
                  src="/images/industry3.svg"
                  alt="Group of people in a classroom or workshop setting"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
