"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

export default function Testimonials(): React.JSX.Element {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  } as unknown as Variants;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
    hover: { scale: 1.02 },
  } as unknown as Variants;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  } as unknown as Variants;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-24 bg-[#F2FBFD]"
    >
      {/* Left decorative image */}
      <motion.div
        className="pointer-events-none md:block absolute top-5 h-60 w-9/12 z-0"
        aria-hidden="true"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/testimonialsleft.svg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom-left decorative */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 z-0"
        aria-hidden="true"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/testimonialsbottom.svg"
          alt=""
          width={400}
          height={300}
          className="object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom-right decorative */}
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 z-0"
        aria-hidden="true"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/testimonialsbottomleft.svg"
          alt=""
          width={400}
          height={300}
          className="object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <header className="text-center mb-10">
          <motion.p
            className="text-xs uppercase text-[#60d1db] tracking-wider mb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            ★ Testimonials
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>
        </header>

        {/* Testimonial list */}
        <motion.ul
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.li variants={cardVariants} whileHover="hover">
            <article
              itemScope
              itemType="https://schema.org/Review"
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left: image */}
                <figure className="relative p-6 md:p-8">
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
                  <figcaption className="sr-only">Photo of Maya Olivia</figcaption>
                </figure>

                {/* Right: content */}
                <div className="p-6 md:p-8">
                  <blockquote
                    itemProp="reviewBody"
                    className="text-gray-700 mb-4 text-lg md:text-xl leading-relaxed"
                  >
                    “They transformed our online presence and brought us more
                    customers than we imagined.”
                  </blockquote>
                  <p itemProp="author" className="text-sm text-gray-500 mb-6">
                    Maya Olivia — Marketing Lead at Urban Bloom
                  </p>

                  <div className="flex gap-4 flex-wrap" aria-label="Key results">
                    <motion.div
                      className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3"
                      variants={fadeInUp}
                    >
                      <div className="text-xs text-gray-500">Paid Ad Efficiency</div>
                      <div className="font-semibold text-xl text-gray-900">40%</div>
                    </motion.div>

                    <motion.div
                      className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3"
                      variants={fadeInUp}
                    >
                      <div className="text-xs text-gray-500">Total Campaign Reach</div>
                      <div className="font-semibold text-xl text-gray-900">2.8M+</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </article>
          </motion.li>

          {/* Card 2 */}
          <motion.li variants={cardVariants} whileHover="hover">
            <article
              itemScope
              itemType="https://schema.org/Review"
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left: image */}
                <figure className="relative p-6 md:p-8">
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
                  <figcaption className="sr-only">Photo of Nadya Sarah</figcaption>
                </figure>

                {/* Right: content */}
                <div className="p-6 md:p-8">
                  <blockquote
                    itemProp="reviewBody"
                    className="text-gray-700 mb-4 text-lg md:text-xl leading-relaxed"
                  >
                    “Professional, reliable, and results driven — highly recommended.”
                  </blockquote>
                  <p itemProp="author" className="text-sm text-gray-500 mb-6">
                    Nadya Sarah — Founder of Matcha Mood
                  </p>

                  <div className="flex gap-4 flex-wrap" aria-label="Key results">
                    <motion.div
                      className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3"
                      variants={fadeInUp}
                    >
                      <div className="text-xs text-gray-500">Social Impressions</div>
                      <div className="font-semibold text-xl text-gray-900">
                        520<span className="text-[#60d1db]">K+</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-[#f7fbfb] border border-gray-100 rounded-lg px-4 py-3"
                      variants={fadeInUp}
                    >
                      <div className="text-xs text-gray-500">Content Save Growth</div>
                      <div className="font-semibold text-xl text-gray-900">
                        180<span className="text-[#60d1db]">%</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </article>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}
