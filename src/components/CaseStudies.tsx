// components/CaseStudies.tsx
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function CaseStudies(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Case Studies & Portfolio — Team Infinity</title>
        <meta
          name="description"
          content="See how we've helped businesses achieve measurable growth — case studies and portfolio highlights."
        />
        <meta property="og:title" content="Case Studies & Portfolio — Team Infinity" />
        <meta
          property="og:description"
          content="See how we've helped businesses achieve measurable growth — case studies and portfolio highlights."
        />
      </Head>

      <section className="relative py-30">
        {/* Top decorative background image (replace src) */}
        <div className="absolute inset-x-0 top-0 h-38 md:h-44 lg:h-50 pointer-events-none -z-10">
          <Image
            src="/images/bg.png" // ← replace with your top background asset
            alt="decorative top background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Decorative soft cyan circle top-right */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 lg:top-14 lg:right-14 w-32 h-32 bg-[#36E1F8] opacity-20 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Optional top-right decorative image (robot). Replace src with your asset. */}
        <div className="absolute right-6 top-6 md:top-8 lg:top-10 z-20 pointer-events-none">
          <Image
            src="/images/robot.svg" // ← replace with your top-right decorative image
            alt="decorative robot"
            width={260}
            height={260}
            className="select-none"
            priority
          />
        </div>

        {/* Card wrapper - center and slightly smaller than full width (max-w-5xl) */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* Center and shrink the card area by limiting max width here */}
            <div className="mx-auto max-w-5xl">
              <div
                className="bg-white rounded-[16px] border border-gray-200 shadow-lg overflow-hidden
                            grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8 items-center"
              >
                {/* LEFT: Image grid */}
                <div className="space-y-4">
                  {/* Large image (reduced height) */}
                  <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-40 md:h-75">
                    <Image
                      src="/images/case1.svg" // ← replace with your image (large)
                      alt="case study large"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Two small images side by side (reduced height) */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-20 md:h-44">
                      <Image
                        src="/images/case2.svg" // ← replace
                        alt="case small 1"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm relative h-20 md:h-44">
                      <Image
                        src="/images/case3.svg" // ← replace
                        alt="case small 2"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT: Content */}
                <div className="flex flex-col items-start justify-center">
                  <span className="text-xs text-[#60d1db] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="text-sm">✷</span>
                    <span className="hidden sm:inline text-black">Show Work</span>
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f1724] mb-3">
                    Case Studies & <br className="block md:hidden" /> Portfolio
                  </h2>

                  <p className="text-sm text-gray-600 mb-6 max-w-xl">
                    See how we've helped businesses like yours achieve measurable growth.
                  </p>

                  <a
                    href="/work"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-[#bfeef2] text-[#0f5670] rounded-md text-sm font-medium shadow-sm hover:shadow-md transition"
                  >
                    View Our Work
                  </a>
                </div>
              </div>
            </div>

            {/* subtle outer shadow / spacing below (optional) */}
            <div className="mt-6" />
          </div>
        </div>
      </section>
    </>
  );
}
