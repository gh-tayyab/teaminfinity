"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  const infoCards = [
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      desc: "+44 7908 793529",
    },
    {
      icon: <Mail size={24} />,
      title: "Business Email",
      desc: "info@teaminfinity.uk",
    },
    {
      icon: <MapPin size={24} />,
      title: "Office Address",
      desc: "John Charles Tower 24 Thunderer Street, London, UK",
    },
  ];

  return (
    <section
      id="get-in-touch"
      className="w-full bg-[#F2FBFD] py-16 px-6 md:px-10 text-center"
    >
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
          ✱ Get in Touch
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Let’s connect and build something great.
        </h2>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {infoCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center text-left transition"
          >
            {/* Left Text */}
            <div className="flex-1">
              <h3 className="font-semibold mb-1 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>

            {/* Right Icon */}
            <div className="ml-4 w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full text-[#00B7CD] shrink-0">
              {card.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
