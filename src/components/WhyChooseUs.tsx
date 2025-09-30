"use client";

import Head from "next/head";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

type Card = {
  id: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    id: "01",
    title: "Transparent Process",
    description:
      "We keep things simple and clear at every step so you always know what's happening. No hidden details — just full visibility and honest communication.",
  },
  {
    id: "02",
    title: "Experienced Team",
    description:
      "Our team brings years of expertise across diverse industries. We combine proven strategies with fresh perspectives to deliver outstanding results.",
  },
  {
    id: "03",
    title: "Data-Driven Results",
    description:
      "Every decision we make is backed by research, analytics, and performance insights to ensure measurable growth and smarter outcomes.",
  },
  {
    id: "04",
    title: "Creative + Technical Expertise",
    description:
      "We blend creativity and technical excellence to build solutions that look great and perform even better for your users.",
  },
  {
    id: "05",
    title: "End-To-End Solutions",
    description:
      "From strategy to execution, we handle everything under one roof for a seamless experience and consistent quality.",
  },
];

export default function WhyChooseUs(): React.JSX.Element {
  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { bounce: 0.3, duration: 0.6 },
    },
    hover: { scale: 1.03 },
  } as unknown as Variants;

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  } as unknown as Variants;

  return (
    <>
      <section
        aria-labelledby="why-choose-heading"
        className="relative py-16 md:py-20"
      >
        {/* Background Image */}
        <figure className="absolute inset-0 -z-10">
          <Image
            src="/images/whychooseus.svg"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
        </figure>

        {/* Heading */}
        <header className="relative z-10 text-center">
          <motion.p
            className="text-xs uppercase text-[#60d1db] tracking-wider mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm" aria-hidden="true">
              ✷
            </span>
            <span className="text-white">Value Proposition</span>
          </motion.p>
          <motion.h2
            id="why-choose-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
        </header>

        {/* Cards */}
        <main className="relative max-w-7xl mx-auto mt-10 px-6 z-10 flex justify-center">
          <motion.div
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center w-full lg:max-w-4xl mx-auto">
              {cards.slice(0, 4).map((c, idx) => (
                <motion.li
                  key={c.id}
                  className="w-full md:w-[440px]"
                  initial="offscreen"
                  whileInView="onscreen"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.15 }}
                  variants={cardVariants}
                >
                  <article
                    className="bg-white rounded-[16px] shadow-lg p-6 md:p-8 border border-gray-200 
                               min-h-[200px] flex flex-col"
                    role="group"
                    aria-labelledby={`why-${c.id}-title`}
                  >
                    <header className="flex items-start gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex items-center justify-center w-8 h-8 rounded-md text-[#00b8c4] font-semibold"
                          aria-hidden="true"
                        >
                          {c.id}
                        </span>
                        <span
                          className="hidden md:block h-px w-6 bg-[#e6f7f9]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          id={`why-${c.id}-title`}
                          className="text-lg font-semibold text-gray-900 mb-2"
                        >
                          {c.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    </header>
                  </article>
                </motion.li>
              ))}

              {/* Fifth Card */}
              <motion.li
                className="md:col-span-1 lg:col-span-2 flex justify-center w-full"
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 4 * 0.15 }}
                variants={cardVariants}
              >
                <article
                  className="bg-white rounded-[16px] shadow-lg p-6 md:p-8 border border-gray-200 
                             w-full md:w-[440px] min-h-[200px] flex flex-col"
                  role="group"
                  aria-labelledby={`why-${cards[4].id}-title`}
                >
                  <header className="flex items-start gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-md text-[#00b8c4] font-semibold"
                        aria-hidden="true"
                      >
                        {cards[4].id}
                      </span>
                      <span
                        className="hidden md:block h-px w-6 bg-[#e6f7f9]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3
                        id={`why-${cards[4].id}-title`}
                        className="text-lg font-semibold text-gray-900 mb-2"
                      >
                        {cards[4].title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {cards[4].description}
                      </p>
                    </div>
                  </header>
                </article>
              </motion.li>
            </ul>
          </motion.div>
        </main>
      </section>
    </>
  );
}
