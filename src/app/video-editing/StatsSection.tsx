"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    img: "/images/about.svg",
    alt: "Team collaborating around laptop",
    value: "😎 34+",
    label: "Years Experience",
  },
  {
    img: "/images/footer.svg",
    alt: "Team meeting in office",
    value: "💖 68M",
    label: "Followers Tik Tok",
  },
  {
    img: "/images/servicei.svg",
    alt: "Team celebrating success",
    value: "🤝 97%",
    label: "Project Success",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Use a cubic-bezier array instead of a string for `ease` to satisfy Framer Motion types
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // typed easing curve (easeOut-like)
    },
  },
} as const;

export default function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative bg-gradient-to-r from-white to-cyan-50 py-16"
    >
      {/* Decorative blur */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 w-[60px] h-[350px] bg-cyan-500 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6">
        <h2 id="stats-heading" className="sr-only">
          Company statistics
        </h2>

        {/* ---- Mobile ---- */}
        <motion.div
          className="sm:hidden space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="relative w-full max-w-xs h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={stat.img}
                  alt={stat.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <dl className="mt-4 text-center">
                <dt className="text-3xl font-extrabold">{stat.value}</dt>
                <dd className="mt-2 text-sm text-gray-500">{stat.label}</dd>
              </dl>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- Desktop ---- */}
        <motion.div
          className="hidden sm:block"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Images row */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-8"
            variants={containerVariants}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative w-full h-52 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={stat.img}
                  alt={stat.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.dl
            className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center"
            variants={containerVariants}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <dt className="text-3xl md:text-4xl font-extrabold">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">{stat.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
