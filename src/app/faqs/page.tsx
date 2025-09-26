// app/faq/page.tsx (server component)
import { Metadata } from "next";
import React from "react";
import FAQClient from "./FAQClient"; // client component with framer motion

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Team Infinity",
};

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 bg-gradient-to-b from-transparent to-white rounded-2xl top-14"
    >
      {/* Blur layers */}
      <div className="absolute -top-12 right-0 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute -bottom-12 -left-100 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>

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

        {/* Client Component with Framer Motion */}
        <FAQClient />
      </div>
    </section>
  );
}
