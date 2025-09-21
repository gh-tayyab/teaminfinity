"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

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

  return (
    <footer className="bg-[#1E1E22] text-white relative">
      <div className="absolute -left-20 w-64 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0" />

      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        <div className="bg-gradient-to-r from-white to-gray-50 text-[#1E1E22] rounded-xl shadow-lg p-8 sm:p-10 relative top-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="flex items-center gap-2 text-sm font-medium mb-4 text-[#009FB2]">
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
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009FB2]"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-[#009FB2] text-white rounded-md font-medium hover:bg-[#008699] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Book A Free Consultation"}
                  </button>
                </form>
              ) : (
                <p className="mt-4 text-green-600 font-medium">
                  ✅ Thanks for subscribing!
                </p>
              )}
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/images/footer.svg"
                alt="Newsletter Illustration"
                width={350}
                height={280}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-16 pb-10 grid grid-cols-1 md:grid-cols-5 gap-10 border-t border-gray-700 pt-12">
        {/* Left Logo + Tagline */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-start">
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
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/our-expertise" className="hover:underline">
                Our Expertise
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/web-development" className="block hover:text-cyan-600">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/graphic-designing" className="block hover:text-cyan-600">
                Graphic Designing
              </Link>
            </li>
            <li>
              <Link href="/digital-marketing" className="block hover:text-cyan-600">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/ai-automation" className="block hover:text-cyan-600">
                AI Automation
              </Link>
            </li>
            <li>
              <Link href="/search-engine-optimization" className="block hover:text-cyan-600">
                Search Engine Optimization
              </Link>
            </li>
            <li>
              <Link href="/shopify-development" className="block hover:text-cyan-600">
                Shopify Development
              </Link>
            </li>
            <li>
              <Link href="/ui-ux-designing" className="block hover:text-cyan-600">
                UI/UX Designing
              </Link>
            </li>
            <li>
              <Link href="/video-editing" className="block hover:text-cyan-600">
                Video Editing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Help Center</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Live Chat
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link href="/policies" className="hover:underline">
                Policies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Address:</h4>
          <p className="text-gray-400 text-sm">123 Business Road, London, UK</p>
          <h4 className="font-semibold mt-6 mb-2">Contact:</h4>
          <p className="text-gray-400 text-sm">info@teaminfinity.uk</p>
          <p className="text-gray-400 text-sm">+44 123 456 7890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-6 text-center flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} Design By Team Infinity
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" aria-label="Facebook" className="hover:opacity-80">
            <Facebook className="w-5 h-5 text-[#009FB2]" />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:opacity-80">
            <Instagram className="w-5 h-5 text-[#009FB2]" />
          </Link>
          <Link href="#" aria-label="Youtube" className="hover:opacity-80">
            <Youtube className="w-5 h-5 text-[#009FB2]" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:opacity-80">
            <Twitter className="w-5 h-5 text-[#009FB2]" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:opacity-80">
            <Linkedin className="w-5 h-5 text-[#009FB2]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
