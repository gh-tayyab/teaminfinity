"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBuzzz() {
  return (
    <motion.section
      id="about-buzzz"
      aria-labelledby="aboutbuzzz-heading"
      className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-gradient-to-b from-white to-cyan-50 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Decorative Blur Layer */}
      <div
        aria-hidden="true"
        className="absolute top-[-100px] left-[-150px] w-[350px] h-[350px] bg-cyan-200/40 rounded-full blur-3xl"
      />

      {/* LEFT CONTENT - Image with floating card */}
      <motion.figure
        className="relative z-10 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/images/about.svg"
              alt="Creative team collaborating on ideas"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
              priority
            />
          </motion.div>
          <figcaption className="sr-only">
            Buzzz creative team illustration
          </figcaption>

          {/* Floating Experience Card */}
          <motion.div
            className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4 text-center"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900">23+</h3>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </motion.div>
        </div>
      </motion.figure>

      {/* RIGHT CONTENT */}
      <motion.article
        className="relative z-10 mt-10 md:mt-0 md:w-1/2 space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.span
          className="uppercase text-sm font-semibold text-cyan-600 tracking-wider"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          About Buzzz
        </motion.span>

        <motion.h2
          id="aboutbuzzz-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
        >
          Where creativity meets social performance.
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base md:text-lg max-w-lg"
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
        >
          Buzzz is a digital agency built on bold ideas and performance metrics.
          We blend creativity with strategy to create social campaigns that
          drive measurable business results.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {/* VIDEO PREVIEW */}
          <motion.figure
            className="relative w-full md:w-[350px] overflow-hidden"
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
          >
            <Image
              src="/images/aboutbuzz.svg"
              alt="Buzzz agency video presentation preview"
              width={300}
              height={200}
              className="object-cover"
            />
            <figcaption className="sr-only">
              Preview of Buzzz agency’s introduction video
            </figcaption>
          </motion.figure>

          {/* SPECIALIZATION PROGRESS BARS */}
          <motion.div className="space-y-4">
            <h3 className="font-bold text-[#27272B] text-lg">Our Specialization</h3>

            {/* Content Creation */}
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>Content Creation</span>
                <span>98%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-2 bg-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            {/* Campaign Strategy */}
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>Campaign Strategy</span>
                <span>92%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-2 bg-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            {/* Platform Management */}
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>Platform Management</span>
                <span>95%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-2 bg-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.article>
    </motion.section>
  );
}
