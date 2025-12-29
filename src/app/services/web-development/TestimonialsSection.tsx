"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

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
    key: "rohit-malewar",
    name: "Rohit Malewar",
    role: "BlueHawk Logistics",
    avatar: "/images/avat1.png",
    quote:
      "We worked with Team Infinity for our website revamp, and the experience was smooth overall. They understood our requirements clearly and delivered practical solutions without unnecessary upselling.",
  },
  {
    key: "ananya-deshpande",
    name: "Ananya Deshpande",
    role: "Vertexa Solutions",
    avatar: "/images/avat2.png",
    quote:
      "Team Infinity helped us improve our website performance and design. Their communication was consistent, and they were open to revisions, which made the collaboration comfortable and productive."
  },
  {
    key: "sameer-kulkarni",
    name: "Sameer Kulkarni",
    role: "Nexora Systems",
    avatar: "/images/avat3.png",
    quote:
      "Our IT support and website maintenance were handled by Team Infinity. The team was responsive, professional, and focused on long-term improvements rather than quick fixes.",
  },
];

const partnerImages = [
  { src: "/images/partners1.png", alt: "Partner 1" },
  { src: "/images/partners2.png", alt: "Partner 2" },
  { src: "/images/partners3.png", alt: "Partner 3" },
  { src: "/images/partners4.png", alt: "Partner 4" },
];

// NOTE: use a cubic-bezier array for `ease`, and cast the whole object to Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      // bezier array instead of string
      ease: [0.22, 1, 0.36, 1],
    },
  }),
} as unknown as Variants;

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F2FBFD]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <header>
            <motion.h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Don&apos;t just take
              <br />
              our word for it:
            </motion.h2>

            <motion.p
              className="text-slate-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hear from Our Satisfied Clients
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center w-max px-6 py-3 bg-[#00B7CD] text-white rounded-full font-medium hover:bg-cyan-600 transition mb-8"
              >
                Discover more
                <svg
                  className="ml-2"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l6 7-6 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>

            <div className="border-t border-slate-200 mb-6" />

            <p className="text-sm font-medium text-[#009FB2] mb-4">Our Partners :</p>

            <ul className="grid grid-cols-2 gap-4">
              {partnerImages.map((p, i) => (
                <motion.li
                  key={i}
                  className="flex items-center justify-center bg-white rounded-lg px-3 py-2 shadow-sm"
                  style={{ minWidth: 120 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={110}
                    height={36}
                    className="object-contain"
                  />
                </motion.li>
              ))}
            </ul>
          </header>

          {/* RIGHT: Testimonials list */}
          <ul className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <motion.li
                key={t.key}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <article
                  className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden"
                  aria-labelledby={`testi-${t.key}-title`}
                >
                  <div className="absolute right-5 top-5">{t.badge}</div>

                  <div className="flex items-start gap-4">
                    <figure className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-slate-100">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </figure>

                    <div>
                      <h3
                        id={`testi-${t.key}-title`}
                        className="text-lg font-semibold text-slate-900"
                      >
                        {t.name}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">{t.role}</p>

                      <blockquote>
                        <p className="text-sm text-slate-600">{t.quote}</p>
                      </blockquote>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
