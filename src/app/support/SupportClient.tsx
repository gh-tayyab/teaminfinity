// app/support/SupportClient.tsx
"use client";

import { Mail, Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const supportOptions = [
  {
    icon: <Mail className="text-[#00B7CD] mb-3" size={32} />,
    title: "Email Us",
    desc: "Reach out anytime via email.",
    link: (
      <Link
        href="mailto:info@teaminfinity.uk"
        className="text-[#00B7CD] font-medium hover:underline"
      >
        info@teaminfinity.uk
      </Link>
    ),
  },
  {
    icon: <Phone className="text-[#00B7CD] mb-3" size={32} />,
    title: "Call Us",
    desc: "Talk directly with our support team.",
    link: <p className="text-[#00B7CD] font-medium">+44 327 286 388</p>,
  },
  {
    icon: <MessageCircle className="text-[#00B7CD] mb-3" size={32} />,
    title: "Live Chat",
    desc: "Get instant help from our team.",
    link: (
      <Link
        href="/contact-us"
        className="text-[#00B7CD] font-medium hover:underline"
      >
        Start Chat
      </Link>
    ),
  },
  {
    icon: <FileText className="text-[#00B7CD] mb-3" size={32} />,
    title: "FAQs",
    desc: "Find answers to common questions.",
    link: (
      <Link
        href="/faqs"
        className="text-[#00B7CD] font-medium hover:underline"
      >
        View FAQs
      </Link>
    ),
  },
];

export default function SupportClient() {
  return (
    <>
      {/* Support Options */}
      <section aria-label="Support Options">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {supportOptions.map((opt, idx) => (
            <motion.article
              key={opt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              {opt.icon}
              <h3 className="font-semibold text-lg mb-2">{opt.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{opt.desc}</p>
              {opt.link}
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        aria-label="Contact Support"
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Didn’t find what you’re looking for?
        </h2>
        <p className="text-gray-600 mb-6">
          Our team is ready to assist you. Contact us today!
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-[#009FB2] hover:bg-[#00B7CD] transition"
          >
            Contact Support
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}
