"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <footer className="bg-[#1E1E22] text-white relative">
      <div className="absolute -left-20 w-64 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />

      {/* Newsletter Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 sm:px-8 relative"
        aria-labelledby="newsletter-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.article
          className="bg-gradient-to-r from-white to-gray-50 text-[#1E1E22] rounded-xl shadow-lg p-8 sm:p-10 relative top-10"
          variants={fadeUp}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p
                className="flex items-center gap-2 text-sm font-medium mb-4 text-[#009FB2]"
                id="newsletter-heading"
              >
                <span className="text-lg" aria-hidden="true">
                  ✱
                </span>
                SUBSCRIBE FOR MORE
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Ready to grow your business?
              </h2>
              <p className="text-gray-600 mb-6">
                Let&apos;s create something powerful together.
              </p>

              {!submitted ? (
                <form
                  className="flex flex-col sm:flex-row items-center gap-3"
                  onSubmit={handleSubmit}
                  aria-label="Subscribe to newsletter"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <motion.input
                    id="footer-email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009FB2]"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-[#009FB2] text-white rounded-md font-medium hover:bg-[#008699] transition disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {loading ? "Submitting..." : "Book A Free Consultation"}
                  </motion.button>
                </form>
              ) : (
                <p className="mt-4 text-green-600 font-medium">
                  ✅ Thanks for subscribing!
                </p>
              )}
            </div>

            {/* Right Image */}
            <aside className="hidden lg:flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/footer.svg"
                  alt="Newsletter Illustration"
                  width={350}
                  height={280}
                  className="object-contain"
                />
              </motion.div>
            </aside>
          </div>
        </motion.article>
      </motion.section>

      {/* Footer Content */}
      <motion.section
        className="max-w-6xl mx-auto px-6 sm:px-8 mt-16 pb-10 grid grid-cols-1 md:grid-cols-5 gap-10 border-t border-gray-700 pt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Left Logo + Tagline */}
        <motion.article className="col-span-1 md:col-span-2 flex flex-col items-start" variants={fadeUp}>
          <div className="mb-4">
            <Image
              src="/logo/logo1.svg"
              alt="Team Infinity Logo"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-gray-300 text-sm max-w-xs">
            Driving Brand Growth with Social Media
          </p>
        </motion.article>

        {/* Navigation Links */}
        <motion.nav aria-label="Company" variants={fadeUp}>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["About", "Our Expertise", "Services", "Contact Us"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.nav aria-label="Services" variants={fadeUp}>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              "Web Development",
              "Graphic Designing",
              "Digital Marketing",
              "AI Automation",
              "Search Engine Optimization",
              "Shopify Development",
              "UI/UX Designing",
              "Video Editing",
            ].map((service) => (
              <li key={service}>
                <Link href={`/${service.toLowerCase().replace(/\s+/g, "-")}`} className="block hover:text-cyan-600">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.nav aria-label="Help Center" variants={fadeUp}>
          <h4 className="font-semibold mb-4">Help Center</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["FAQs", "Live Chat", "Support", "Policies"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Address + Contact */}
        <motion.address className="not-italic" variants={fadeUp}>
          <h4 className="font-semibold mb-4">Address:</h4>
          <p className="text-gray-400 text-sm">123 Business Road, London, UK</p>
          <h4 className="font-semibold mt-6 mb-2">Contact:</h4>
          <p className="text-gray-400 text-sm">info@teaminfinity.uk</p>
          <p className="text-gray-400 text-sm">+44 123 456 7890</p>
        </motion.address>
      </motion.section>

      {/* Bottom Bar */}
      <motion.section
        className="border-t border-gray-700 mt-8 py-6 text-center flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 sm:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} Design By Team Infinity
        </p>
        <motion.nav
          aria-label="Social Media"
          className="flex gap-4 mt-4 md:mt-0"
          variants={staggerContainer}
        >
          {[Facebook, Instagram, Youtube, Twitter, Linkedin].map((Icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#" aria-label="Social Media" className="hover:opacity-80">
                <Icon className="w-5 h-5 text-[#009FB2]" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </motion.section>
    </footer>
  );
}
