"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import NewsletterForm from "./NewsletterForm";
import { motion } from "framer-motion";

export default function ContactUsClient() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-cyan-50 pt-44 pb-20 overflow-hidden">
      {/* Background blur layers */}
      <div className="absolute top-52 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute top-52 -right-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From strategy to execution, we help businesses grow through powerful
            marketing and innovative development solutions.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=""
        >
          <NewsletterForm />
        </motion.div>

        {/* Section Title */}
        <div>
          <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
            ✱ Get in Touch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Let’s connect and build something great.
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Phone size={24} />,
              title: "Phone Number",
              desc: "+44 327 286 388",
            },
            {
              icon: <Mail size={24} />,
              title: "Business Email",
              desc: "info@teaminfinity.uk",
            },
            {
              icon: <MapPin size={24} />,
              title: "Office Address",
              desc: "123 Tech District, London, UK",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full text-[#00B7CD] mb-3">
                {card.icon}
              </div>
              <h3 className="font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg mb-20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.59775952265!2d-0.1277586!3d51.5032974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900f1e26f%3A0xa81d70cbb8b5e3f!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1694106900000!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Team Infinity office location"
          ></iframe>
        </motion.div>

        {/* Contact Form + FAQ */}
        <ContactForm />
        <FAQ />
        
      </div>
    </section>
  );
}
