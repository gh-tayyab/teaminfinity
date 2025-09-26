"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main id="main-about">
      <article
        id="about"
        aria-labelledby="about-heading"
        className="relative bg-[#F2FBFD] py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <motion.figure
            className="relative w-full h-[350px] md:h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about.svg"
              alt="Team Infinity professionals collaborating on a project"
              fill
              priority
              className="object-cover rounded-xl shadow-lg"
            />
          </motion.figure>

          {/* Right Side Content */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-[#009FB2] uppercase tracking-wide mb-3">
              <motion.span
                className="text-lg"
                aria-hidden="true"
                initial={{ rotate: -90, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                ✱
              </motion.span>
              Who We Are
            </p>

            <header>
              <motion.h2
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.h2>
            </header>

            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We are a full-service Marketing & Development Agency dedicated to
              helping businesses scale faster. Our team of experts blends
              creativity, strategy, and technology to deliver solutions that not
              only look great but also perform effectively.
            </motion.p>

            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Whether you&apos;re a startup or an established brand, we provide
              tailored strategies to strengthen your digital presence and
              maximize your ROI.
            </motion.p>
          </motion.section>
        </div>

        {/* Decorative Bottom-Right Image */}
        <motion.aside
          className="absolute bottom-0 right-0 w-[200px] md:w-[300px] opacity-70 pointer-events-none"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/aboutbottom.svg"
            alt=""
            width={300}
            height={300}
            className="object-contain"
            loading="lazy"
            sizes="(max-width: 768px) 200px, 300px"
            role="presentation"
          />
        </motion.aside>
      </article>
    </main>
  );
}
