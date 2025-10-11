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
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[170px] left-[-150px] w-[140px] h-[440px] bg-[#00B7CD] rounded-full blur-3xl z-10"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <motion.figure
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
              <Image
                src="/images/abouut.jpg"
                alt="Team Infinity professionals collaborating on a project"
                fill
                priority
                className="object-contain rounded-xl"
              />
            </div>
          </motion.figure>

          {/* Right Side Content */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-3">
              <motion.span
                className="text-lg text-[#009FB2]" // star cyan hi rahega
                aria-hidden="true"
                initial={{ rotate: -90, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                ✱
              </motion.span>
              <span className="text-black">Who We Are</span> {/* text black */}
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
              <span className="font-bold">
                We Don&apos;t Just Build Brands — We Build Momentum.
              </span>{" "} 
              At Team Infinity, we&apos;re a full-service marketing and development
              agency focused on helping businesses grow with purpose. Our team
              blends innovation, design, and data-driven strategy to create
              solutions that not only look exceptional but drive measurable
              success. Whether you&apos;re starting from scratch or scaling to new
              heights, we craft tailored digital strategies that elevate your
              presence and turn your vision into impact.
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
          className="absolute bottom-0 right-0 w-[200px] md:w-[300px] pointer-events-none"
          aria-hidden="true"
          initial={{ opacity: 1, scale: 0.8 }}
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
