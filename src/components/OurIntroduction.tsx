"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurIntroduction() {
  return (
    <section
      id="introduction"
      className="relative w-full flex flex-col items-center justify-center py-20 bg-[#F2FBFD]"
    >
      {/* Decorative Left Image */}
      <motion.div
        className="hidden md:block left-0 -top-14 absolute z-10 pointer-events-none"
        aria-hidden="true"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/image17.svg"
          alt=""
          width={200}
          height={200}
          className="object-contain"
          loading="lazy"
          sizes="220px"
          role="presentation"
        />
      </motion.div>

      {/* Right Blur Layer */}
      <motion.div
        className="absolute bottom-0 -right-88 w-[400px] h-[450px] bg-[#00B7CD] rounded-full blur-3xl opacity-70 z-10"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center px-6">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-sm uppercase tracking-widest text-cyan-600 font-semibold mb-2">
            Company Intro
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Introduction
          </h2>
        </motion.header>

        {/* 🎥 Custom Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black flex items-center justify-center">
            

            {/* 🔄 Replace below 'src' with your actual video file later */}
            <video
              src="/videos/vido.mp4"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
