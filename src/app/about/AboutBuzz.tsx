"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBuzzz() {
  return (
    <motion.section
      id="about-buzzz"
      aria-labelledby="aboutbuzzz-heading"
      className="relative min-h-[80vh] flex flex-col items-center px-6 md:px-12 py-20 bg-[#F2FBFD] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Decorative Blur */}
      <div
        aria-hidden="true"
        className="absolute bottom-[80px] right-[-300px] w-[350px] h-[150px] bg-[#00B7CD] rounded-full blur-3xl z-10"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* LEFT IMAGE */}
        <motion.figure
          className="relative md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            >
              <Image
                src="/images/about.jpg"
                alt="Creative team collaborating on ideas"
                width={400}
                height={400}
                className="rounded-2xl object-cover shadow-lg"
                priority
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4 text-center"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900">4+</h3>
              <p className="text-sm text-gray-500">Years of Experience</p>
            </motion.div>
          </div>
        </motion.figure>

        {/* RIGHT CONTENT */}
        <motion.article
          className="md:w-1/2 space-y-6"
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
            About Team Infinity
          </motion.span>

          <motion.h2
            id="aboutbuzzz-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          >
            Where creativity meets social performance.
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base md:text-lg max-w-lg"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          >
            Team Infinity is a global digital agency with offices in Pakistan and London. built on creativity, strategy, and technology. We craft AI-driven solutions, SEO strategies, and digital campaigns that help brands grow smarter and faster. With up to 30% lower rates than the market, we deliver premium quality work designed to perform, impress, and last.
          </motion.p>

          {/* ❌ MOBILE HIDDEN | ✅ MD+ ONLY */}
          <motion.div
            className="hidden md:grid grid-cols-2 gap-8 mt-6"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          >
            {/* SMALL IMAGE */}
            <motion.figure
              className="relative w-full overflow-hidden rounded-lg"
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            >
              <Image
                src="/images/aboutbuzz.jpg"
                alt="Buzzz agency video presentation preview"
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
            </motion.figure>

            {/* SPECIALIZATION */}
            <motion.div className="space-y-4">
              <h3 className="font-bold text-[#27272B] text-lg">Our Specialization</h3>

              {[
                { label: "Content Creation", value: "94%" },
                { label: "Campaign Strategy", value: "89%" },
                { label: "Platform Management", value: "91%" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.value }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.article>
      </div>
    </motion.section>
  );
}
