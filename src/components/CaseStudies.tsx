import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CaseStudies(): React.JSX.Element {
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
          className="absolute right-6 top-6 md:top-8 lg:top-10 z-20 pointer-events-none"
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative mx-auto max-w-5xl">
            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden 
                         grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8 items-center"
            >
              {/* LEFT: Image grid */}
              <div className="space-y-4">
                {/* Large image */}
                <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-40 md:h-72">
                  <Image
                    src="/images/case1.svg"
                    alt="Case study: project overview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Two small images */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-24 md:h-44">
                    <Image
                      src="/images/case2.svg"
                      alt="Case study detail 1"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-24 md:h-44">
                    <Image
                      src="/images/case3.svg"
                      alt="Case study detail 2"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Content */}
              <div className="flex flex-col items-start justify-center">
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

                <p className="text-sm text-gray-600 mb-6 max-w-xl">
                  See how we&apos;ve helped businesses like yours achieve
                  measurable growth.
                </p>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-[#bfeef2] text-[#0f5670] rounded-md text-sm font-medium shadow-sm hover:shadow-md transition"
                  aria-label="View our work"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
