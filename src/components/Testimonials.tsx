import Image from "next/image";
import React from "react";

export default function Testimonials(): React.JSX.Element {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-24 bg-[#F2FBFD]"
    >
      {/* Left decorative image */}
      <div
        className="pointer-events-none md:block absolute top-5 h-60 w-9/12 z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/testimonialsleft.svg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Bottom-left decorative */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/testimonialsbottom.svg"
          alt=""
          width={400}
          height={300}
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Bottom-right decorative */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/testimonialsbottomleft.svg"
          alt=""
          width={400}
          height={300}
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-10">
          <p className="text-xs uppercase text-[#60d1db] tracking-wider mb-2">
            ★ Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Testimonials
          </h2>
        </div>

        {/* Testimonial list */}
        <ul className="space-y-8">
          {/* Card 1 */}
          <li>
            <article className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left: image */}
                <div className="relative p-6 md:p-8">
                  <div className="rounded-xl overflow-hidden relative h-56 md:h-64">
                    <Image
                      src="/images/testimonials-1.svg"
                      alt="Maya Olivia — Marketing Lead at Urban Bloom"
                      fill
                      className="object-cover rounded-xl"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Right: content */}
                <div className="p-6 md:p-8">
                  <blockquote className="text-gray-700 mb-4 text-lg md:text-xl leading-relaxed">
                    “They transformed our online presence and brought us more
                    customers than we imagined.”
                  </blockquote>
                  <div className="text-sm text-gray-500 mb-6">
                    Maya Olivia — Marketing Lead at Urban Bloom
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <div className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3">
                      <div className="text-xs text-gray-500">
                        Paid Ad Efficiency
                      </div>
                      <div className="font-semibold text-xl text-gray-900">
                        40%
                      </div>
                    </div>

                    <div className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3">
                      <div className="text-xs text-gray-500">
                        Total Campaign Reach
                      </div>
                      <div className="font-semibold text-xl text-gray-900">
                        2.8M+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>

          {/* Card 2 */}
          <li>
            <article className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left: image */}
                <div className="relative p-6 md:p-8">
                  <div className="rounded-xl overflow-hidden relative h-56 md:h-64">
                    <Image
                      src="/images/testimonials-2.svg"
                      alt="Nadya Sarah — Founder of Matcha Mood"
                      fill
                      className="object-cover rounded-xl"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Right: content */}
                <div className="p-6 md:p-8">
                  <blockquote className="text-gray-700 mb-4 text-lg md:text-xl leading-relaxed">
                    “Professional, reliable, and results driven highly
                    recommended”
                  </blockquote>
                  <div className="text-sm text-gray-500 mb-6">
                    Nadya Sarah — Founder of Matcha Mood
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <div className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3">
                      <div className="text-xs text-gray-500">
                        Social Impressions
                      </div>
                      <div className="font-semibold text-xl text-gray-900">
                        520<span className="text-[#60d1db]">K+</span>
                      </div>
                    </div>

                    <div className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3">
                      <div className="text-xs text-gray-500">
                        Content Save Growth
                      </div>
                      <div className="font-semibold text-xl text-gray-900">
                        180<span className="text-[#60d1db]">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
