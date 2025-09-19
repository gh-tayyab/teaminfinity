// components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Testimonial = {
  key: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  badge?: React.ReactNode;
};

const testimonials: Testimonial[] = [
  {
    key: "dylan-frost",
    name: "Dylan Frost",
    role: "E-commerce Store Owner",
    avatar: "/images/avataar1.svg",
    quote:
      "The team at Soziely helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.",
    badge: (
      <div className="w-10 h-10 rounded-full bg-[#00B7CD] grid place-items-center text-white shadow-sm">
        🔥
      </div>
    ),
  },
  {
    key: "ryan-warner",
    name: "Ryan Warner",
    role: "B2B Company Owner",
    avatar: "/images/avataar2.svg",
    quote:
      "As a B2B company, we were unsure how to effectively use social media. Soziely developed a LinkedIn strategy that generated leads and improved brand visibility.",
    badge: (
      <div className="w-10 h-10 rounded-full bg-[#00B7CD] grid place-items-center text-white shadow-sm">
        🚀
      </div>
    ),
  },
  {
    key: "laura-glover",
    name: "Laura Glover",
    role: "Beauty Brand Owner",
    avatar: "/images/avataar3.svg",
    quote:
      "The Soziely team's skills and creativity helped us build a visually stunning Instagram presence that increased brand awareness and sales.",
    badge: (
      <div className="w-10 h-10 rounded-full bg-[#00B7CD] grid place-items-center text-white shadow-sm">
        😺
      </div>
    ),
  },
];

const partnerImages = [
  { src: "/images/partners1.svg", alt: "Partner 1" },
  { src: "/images/partners2.svg", alt: "Partner 2" },
  { src: "/images/partners3.svg", alt: "Partner 3" },
  { src: "/images/partners4.svg", alt: "Partner 4" },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F2FBFD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Don't just take
              <br />
              our word for it:
            </h2>

            <p className="text-slate-500 mb-6">Hear from Our Satisfied Clients</p>

            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center w-max px-6 py-3 bg-[#00B7CD] text-white rounded-full font-medium hover:bg-cyan-600 transition mb-8"
            >
              Discover more
              <svg className="ml-2" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 5l6 7-6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* thin divider line (as in screenshot) */}
            <div className="w-full">
              <div className="border-t border-slate-200 mb-6" />
            </div>

            {/* Our Partners heading + logos */}
            <p className="text-sm font-medium text-[#009FB2] mb-4">Our Partners :</p>

            <div className="grid grid-cols-2 gap-4">
              {partnerImages.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white rounded-lg px-3 py-2 shadow-sm"
                  style={{ minWidth: 120 }}
                >
                  <Image src={p.src} alt={p.alt} width={110} height={36} className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Testimonials stack */}
          <div className="flex flex-col gap-6">
            {testimonials.map((t, idx) => (
              <article
                key={t.key}
                className="relative bg-white rounded-2xl shadow-lg p-6 md:p-6 lg:p-6 overflow-hidden"
                aria-labelledby={`testi-${t.key}-title`}
              >
                {/* badge at top-right */}
                <div className="absolute right-5 top-5">{t.badge}</div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-slate-100">
                    <Image src={t.avatar} alt={`${t.name} avatar`} width={80} height={80} className="object-cover" />
                  </div>

                  <div>
                    <h3 id={`testi-${t.key}-title`} className="text-lg font-semibold text-slate-900">
                      {t.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">{t.role}</p>

                    <p className="text-sm text-slate-600">{t.quote}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
