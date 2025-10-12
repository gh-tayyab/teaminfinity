"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-[#F2FBFD] py-16 px-6">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-[50px] left-0 w-[60px] h-[350px] bg-cyan-500 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-cyan-600 mb-2 uppercase tracking-wide"
        >
          ✱ Why Choose Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Reasons why leading brands choose us.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-600"
        >
          We blend strategy, creativity, and technology to deliver measurable
          impact. Our commitment to innovation and client success has made us
          the trusted partner of brands seeking results that truly matter.
        </motion.p>

        {/* VIDEO WRAPPER */}
        <div className="mt-8 relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            src="/videos/vido.mp4"
            loop
            controls
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-gray-600"
        >
          Placerat justo amet elit in tincidunt est risus vel purus. A convallis
          vel bibendum odio nunc. Lectus faucibus ac in ipsum amet nullam
          turpis. Vel vitae aliquam eget faucibus at libero dignissim arcu
          aliquam.
        </motion.p>
      </div>
    </section>
  );
}
