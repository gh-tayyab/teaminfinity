"use client";
import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Team Infinity for IT solutions, web development, and digital services tailored to your business needs.",
};

export default function ContactUs() {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-cyan-50 pt-44 pb-20 overflow-hidden">
      {/* Background blur layers (main page) */}
      <div className="absolute top-52 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute top-52 -right-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          From strategy to execution we help businesses grow through powerful
          marketing and innovative development solutions
        </p>

        {/* Email input */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B7CD]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#00B7CD] text-white font-medium rounded-md hover:bg-cyan-600 transition"
          >
            Get Started
          </button>
        </form>

        {/* Section title */}
        <div className="mb-10">
          <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
            ✱ Get in Touch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Let’s connect and build something great.
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
            <Phone className="text-[#00B7CD] mb-3" size={28} />
            <h3 className="font-semibold mb-1">Phone Number</h3>
            <p className="text-gray-600">+44 327 286 388</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
            <Mail className="text-[#00B7CD] mb-3" size={28} />
            <h3 className="font-semibold mb-1">Business Email</h3>
            <p className="text-gray-600">info@teaminfinity.uk</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
            <MapPin className="text-[#00B7CD] mb-3" size={28} />
            <h3 className="font-semibold mb-1">Office Address</h3>
            <p className="text-gray-600">123 Tech District, London, UK</p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.59775952265!2d-0.1277586!3d51.5032974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900f1e26f%3A0xa81d70cbb8b5e3f!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1694106900000!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Team Infinity office location"
          ></iframe>
        </div>

        {/* --- Contact Form Section with blur background --- */}
        <section className="relative py-20 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
            {/* Left: Form */}
            <form className="bg-white rounded-xl shadow-md p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
                />
                <input
                  type="url"
                  placeholder="What is your website?"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
                />
                <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none">
                  <option>Select service</option>
                  <option>Web Design</option>
                  <option>Development</option>
                  <option>Marketing</option>
                </select>
                <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none">
                  <option>Select industry</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                </select>
              </div>

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
              ></textarea>

              {/* Checkbox */}
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={() => setAccepted(!accepted)}
                  className="w-4 h-4 border border-gray-300 rounded"
                />
                I have read and accepted terms and privacy
              </label>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-[#00B7CD] text-white font-medium rounded-md hover:bg-cyan-600 transition"
              >
                Submit Form
              </button>
            </form>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
                  ✱ Contact Us
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Start a conversation with our creative team.
                </h2>
                <p className="text-gray-600">
                  Ready to bring your ideas to life? Fill out the form and our
                  team will get back to you with insights, solutions, and a
                  personalized approach tailored to your brand’s goals.
                </p>
              </div>

              {/* Image + Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/contact.svg"
                    alt="Our creative team discussing a project"
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-4xl font-bold text-[#00B7CD] mb-2">
                    98%
                  </h3>
                  <p className="font-semibold">Client Satisfaction</p>
                  <p className="text-gray-600 text-sm">
                    Trusted by clients for our quality work, clear
                    communication, and consistent results.
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Stay connected</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-[#00B7CD]"
                  >
                    🌐
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-[#00B7CD]"
                  >
                    🐦
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-[#00B7CD]"
                  >
                    💼
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-[#00B7CD]"
                  >
                    📸
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- End Contact Form Section --- */}

        {/* --- NEW: FAQ / Accordion Section (as shown in image) --- */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="relative py-20 bg-gradient-to-b from-transparent to-white rounded-2xl"
        >
          {/* Add the two blur layers for this FAQ section (top-right & bottom-left) */}
          <div className="absolute -top-12 right-0 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>
          <div className="absolute -bottom-12 -left-100 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
              ✱ Common Questions
            </p>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Simple answers to your social media questions.
            </h2>

            {/* Accordion list - semantic for SEO & accessibility */}
            <dl className="space-y-4 text-left">
              {[
                "What services does Buzzz offer for brands?",
                "Which platforms do you manage?",
                "Do you offer paid ads and boosting?",
                "What's the minimum contract period?",
                "Do you provide performance reports?",
                "How do I get started with Buzzz?",
              ].map((q, idx) => (
                <div
                  key={q}
                  className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm flex items-start justify-between"
                >
                  <details className="w-full" aria-expanded="false">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-2 px-2 select-none">
                      <span className="text-gray-800">{q}</span>
                      <span
                        aria-hidden
                        className="text-2xl font-bold text-[#00B7CD]"
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-3 text-gray-600">
                      <p>
                        {/* Placeholder answer - change to real content as needed */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quaerat, saepe? We provide tailored social media
                        strategies, content creation, community management, and
                        paid advertising to help brands grow.
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </dl>
          </div>
        </section>
        {/* --- End FAQ Section --- */}
      </div>
    </section>
  );
}
