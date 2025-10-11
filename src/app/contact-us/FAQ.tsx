// app/faq/page.tsx

"use client";

import { Metadata } from "next";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does Team Infinity offer?",
    a: "We offer complete digital solutions including Web Development, Graphic Designing, Digital Marketing, AI Automation, SEO, Shopify Development, UI/UX Designing, and Video Editing — all under one roof.",
  },
  {
    q: "How does Team Infinity help businesses grow?",
    a: "We combine smart marketing, innovative design, and AI-driven automation to increase brand visibility, attract new customers, and maximize your ROI through measurable strategies.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We have offices in Pakistan and London, serving over 60+ international clients across the UK, UAE, USA, and beyond with tailored digital solutions.",
  },
  {
    q: "What makes Team Infinity different from other agencies?",
    a: "Unlike typical agencies, we focus on data-driven strategies, transparent communication, and up to 30% lower pricing — without compromising on quality or performance.",
  },
  {
    q: "Can I get a customized service plan?",
    a: "Absolutely. Whether you’re a startup or an established business, our team creates customized strategies based on your goals, budget, and growth stage.",
  },
  {
    q: "Do you provide regular progress reports?",
    a: "Yes, we share detailed performance reports and analytics dashboards so you can track campaign results, engagement, and ROI in real-time.",
  },
  {
    q: "How long does it take to launch a project?",
    a: "Project timelines vary depending on scope — typically 2–4 weeks for websites, and 1–2 weeks for marketing campaigns or design projects.",
  },
  {
    q: "How can I get started with Team Infinity?",
    a: "You can book a free consultation through our website or email us at info@teaminfinity.uk. Our team will get in touch to discuss your goals and craft a tailored strategy.",
  },
  {
    q: "Do you offer ongoing support after project completion?",
    a: "Yes, we provide ongoing maintenance, strategy consulting, and performance optimization to ensure your digital presence stays strong and up-to-date.",
  },
  {
    q: "Do you provide AI-based automation or chatbot solutions?",
    a: "Yes, we specialize in AI automation, including custom chatbots, workflow optimization, and intelligent data systems that streamline your business operations.",
  },
  {
    q: "Can you handle both design and development together?",
    a: "Yes — our in-house creative and technical teams collaborate closely to deliver cohesive, high-performing digital products from concept to launch.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We’ve successfully worked with clients in e-commerce, education, fashion, hospitality, and corporate sectors, delivering tailored digital strategies for each niche.",
  },
];

function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="space-y-4 text-left">
      {faqs.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm"
          >
            <dt>
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between py-2 px-2 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-gray-800 font-medium">{item.q}</span>
                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl font-bold text-[#00B7CD]"
                >
                  +
                </motion.span>
              </button>
            </dt>

            <AnimatePresence>
              {isOpen && (
                <motion.dd
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-gray-600">{item.a}</p>
                </motion.dd>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </dl>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-10 md:py-16"
    >
      {/* Blur layers */}
      <div className="absolute -top-12 -right-64 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute -bottom-12 -left-64 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
          ✱ Common Questions
        </p>
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          Simple answers to your social media questions.
        </h2>

        {/* Client logic inside same file */}
        <FAQClient />
      </div>
    </section>
  );
}
