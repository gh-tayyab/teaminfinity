// components/BenefitsSection.tsx
"use client";

import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Proven Result",
    desc: "We have a track record of delivering measurable results for our clients through effective social and digital strategies.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l2.6 6.6L21 9l-5 3.6L17 21l-5-3.2L7 21l1-8.4L3 9l6.4-.4L12 2z" stroke="none" fill="#FFD166" />
      </svg>
    ),
  },
  {
    title: "Expertise and Experience",
    desc: "Our team is composed of industry experts with a wealth of knowledge and hands-on experience to guide your strategy.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a5 5 0 00-5 5v2H5l1 6h12l1-6h-2V7a5 5 0 00-5-5z" stroke="none" fill="#FFD166" />
      </svg>
    ),
  },
  {
    title: "Data-Driven Decisions",
    desc: "We use analytics and reporting to make data-driven decisions that drive meaningful business results.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="none" fill="#FFD166" />
      </svg>
    ),
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="py-16 bg-gradient-to-r from-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: framed image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* outer turquoise frame */}
              <div
                aria-hidden
                className="bg-[#00B7CD] rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg"
                style={{ width: 360, height: 450 }}
              >
                {/* inner area for image - center it */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-[240px] h-[360px] md:w-[260px] md:h-[390px] bg-white rounded-md overflow-hidden shadow-inner">
                    {/* Use your image; put it in /public/images/benefits-hero.jpg */}
                    <Image
                      src="/images/benefits.svg"
                      alt="Campaign illustration"
                      width={260}
                      height={390}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* award badge - positioned bottom-left overlapping */}
              <div className="absolute -bottom-4 left-4">
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2l2.6 6.6L21 9l-5 3.6L17 21l-5-3.2L7 21l1-8.4L3 9l6.4-.4L12 2z" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-700">Best Agency</div>
                    <div className="text-xs text-slate-500">Awwards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="pt-4 lg:pt-0">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Why choose us</p>

            <h2 id="benefits-heading" className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              The Benefits of Partnering <br className="hidden md:inline" /> with Soziely
            </h2>

            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#083644] flex items-center justify-center shadow">
                      {/* icon */}
                      <span className="text-white">{f.icon}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 max-w-xl">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
