"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Proven Result",
    desc: "We have a track record of delivering measurable results for our clients through effective social and digital strategies.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l2.6 6.6L21 9l-5 3.6L17 21l-5-3.2L7 21l1-8.4L3 9l6.4-.4L12 2z" fill="#FFD166" />
      </svg>
    ),
  },
  {
    title: "Expertise and Experience",
    desc: "Our team is composed of industry experts with a wealth of knowledge and hands-on experience to guide your strategy.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a5 5 0 00-5 5v2H5l1 6h12l1-6h-2V7a5 5 0 00-5-5z" fill="#FFD166" />
      </svg>
    ),
  },
  {
    title: "Data-Driven Decisions",
    desc: "We use analytics and reporting to make data-driven decisions that drive meaningful business results.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" fill="#FFD166" />
      </svg>
    ),
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="py-16 bg-gradient-to-r from-white to-cyan-50 relative"
    >
      {/* Blur Shape */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute left-0 w-[60px] h-[350px] bg-cyan-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: framed image with animation */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                aria-hidden
                className="bg-[#00B7CD] rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg"
                style={{ width: 360, height: 450 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-[240px] h-[360px] md:w-[260px] md:h-[390px] bg-white rounded-md overflow-hidden shadow-inner">
                    <Image
                      src="/images/benefits.svg"
                      alt="Campaign illustration"
                      width={260}
                      height={390}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 left-4"
              >
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2l2.6 6.6L21 9l-5 3.6L17 21l-5-3.2L7 21l1-8.4L3 9l6.4-.4L12 2z" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-700">Best Agency</div>
                    <div className="text-xs text-slate-500">Awwards</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: text + features */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-4 lg:pt-0"
          >
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Why choose us</p>
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              The Benefits of Partnering <br className="hidden md:inline" /> with Soziely
            </h2>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#083644] flex items-center justify-center shadow transition-transform duration-300 group-hover:scale-105">
                      {f.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 max-w-xl">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
