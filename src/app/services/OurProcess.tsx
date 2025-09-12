'use client'
import Image from "next/image";
import React from "react";

const STEPS = [
  {
    id: 1,
    title: "Discovery Call",
    desc: "We begin by understanding your brand goals, challenges, and audience insights.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12h4l3 8 7-16 3 8h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Research & Plan",
    desc: "We develop a tailored strategy with clear objectives, timelines, and creative direction.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 20v-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Design & Build",
    desc: "Our team brings concepts to life through engaging visuals and smart digital solutions.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Launch & Support",
    desc: "We launch your campaign and refine it continuously for maximum performance.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16 5.5 20l2-7L2 9h7L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function OurProcess(): React.JSX.Element {
  return (
    <section
      className="relative w-full py-24"
      style={{
        backgroundImage: "url('/images/our-process-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur layers */}
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#00B7CD] opacity-20 blur-3xl z-0" />
      <div className="absolute -right-0 -top-28 w-40 h-80 rounded-full bg-[#00B7CD] opacity-20 blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-cyan-600 font-semibold">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">Our Process</h2>
        </div>

        {/* ARROWS overlay container (absolute so they sit above the cards) */}
        <div className="relative lg:top-10">
          {/* arrows are only shown on md+ (desktop-like); keep them hidden on very small screens if needed */}
          <div className="hidden md:block relative h-0">
            <div className="absolute -top-12 bottom-2 left-1/2 -translate-x-1/2 w-full" aria-hidden>
              {/* three arrows positioned using CSS below */}
              <div className="pointer-events-none">
                <div className="arrow arrow1">
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow 1"
                    width={140}
                    height={52}
                    className="hidden lg:inline"
                    priority
                  />
                </div>

                <div className="arrow arrow2">
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow 2"
                    width={140}
                    height={52}
                    className=""
                    priority
                  />
                </div>

                <div className="arrow arrow3">
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow 3"
                    width={140}
                    height={52}
                    className="hidden lg:inline"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cards grid: mobile 1, md 2, lg 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {STEPS.map((s) => (
              <article
                key={s.id}
                className="relative bg-white rounded-xl border-2 border-[#D9D9EC] shadow-md p-6 min-h-[200px] overflow-hidden"
              >
                {/* faint background number */}
                <span className="absolute right-4 top-3 text-5xl md:text-6xl font-extrabold text-gray-200/60 pointer-events-none select-none">
                  {String(s.id).padStart(2, "0")}
                </span>

                {/* header: icon (left) + counter (right) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-cyan-600 bg-cyan-50 rounded-md p-3">
                      {s.icon}
                    </div>
                  </div>
                </div>

                {/* thin divider */}
                <div className="border-t border-gray-100 my-4" />

                {/* title & description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA bar */}
        <div className="mt-10 lg:mt-14">
          <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-center md:text-left text-lg font-semibold text-gray-800">
              Ready to start your custom journey?
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/contact"
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-500 text-white font-semibold shadow"
              >
                Get A Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS for arrow positions */}
      <style jsx>{`
        /* container for each arrow uses absolute positioning + translateX(-50%) so we center at the given left percent */
        .arrow { position: absolute; transform: translateX(-50%); top: -28px; }

        /* default small screens (not visible thanks to .hidden md:block), but keep safe values */
        .arrow1 { left: 25%; }
        .arrow2 { left: 50%; }
        .arrow3 { left: 75%; }

        /* tweak positions for md (2 columns) */
        @media (min-width: 768px) {
          .arrow { top: -36px; }
          /* still keep 25/50/75 which places arrows between columns */
          .arrow1 { left: 25%; }
          .arrow2 { left: 50%; }
          .arrow3 { left: 75%; }
        }

        /* tweak for large screens for best visual alignment (4 columns) */
        @media (min-width: 1024px) {
          .arrow { top: -40px; }
          /* On large screens place them between columns 1-2, 2-3, 3-4 */
          .arrow1 { left: 25%; }
          .arrow2 { left: 50%; }
          .arrow3 { left: 75%; }
        }
      `}</style>
    </section>
  );
}
