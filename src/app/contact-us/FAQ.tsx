"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20"
    >
      {/* Background blur layers */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -top-12 right-0 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute -bottom-12 -left-20 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
            ✱ Common Questions
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Simple answers to your social media questions.
          </h2>
        </FadeUp>

        <dl className="space-y-4 text-left">
          {[
            "What services does Buzzz offer for brands?",
            "Which platforms do you manage?",
            "Do you offer paid ads and boosting?",
            "What's the minimum contract period?",
            "Do you provide performance reports?",
            "How do I get started with Buzzz?",
          ].map((q, i) => (
            <FadeUp key={q} delay={i * 0.1}>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm">
                <details className="w-full">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-2 px-2 select-none">
                    <span className="text-gray-800">{q}</span>
                    <span
                      aria-hidden="true"
                      className="text-2xl font-bold text-[#00B7CD]"
                    >
                      +
                    </span>
                  </summary>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-gray-600"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quaerat, saepe? We provide tailored social media
                      strategies, content creation, community management, and
                      paid advertising to help brands grow.
                    </p>
                  </motion.div>
                </details>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
