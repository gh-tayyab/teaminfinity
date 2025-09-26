// app/faq/FAQClient.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What services does Buzzz offer for brands?",
    a: "We provide tailored social media strategies, content creation, community management, and paid advertising to help brands grow.",
  },
  {
    q: "Which platforms do you manage?",
    a: "We manage Facebook, Instagram, TikTok, YouTube, Twitter, and more depending on your target audience.",
  },
  {
    q: "Do you offer paid ads and boosting?",
    a: "Yes! We run paid campaigns optimized for reach, engagement, or conversions.",
  },
  {
    q: "What's the minimum contract period?",
    a: "We usually recommend at least 3 months to see meaningful results, but custom plans are available.",
  },
  {
    q: "Do you provide performance reports?",
    a: "Absolutely. We send monthly reports with clear KPIs and insights to track growth.",
  },
  {
    q: "How do I get started with Buzzz?",
    a: "Just contact us via the form and our team will create a tailored plan for your brand.",
  },
];

export default function FAQClient() {
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
                <span className="text-gray-800">{item.q}</span>
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
