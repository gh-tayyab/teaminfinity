"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactForm = () => {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) {
      alert("Please accept terms and privacy policy before submitting.");
      return;
    }
    // TODO: Add form submission logic
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            />
            <input
              type="url"
              name="website"
              placeholder="What is your website?"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            />
            <select
              name="service"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            >
              <option value="">Select service</option>
              <option value="web-design">Web Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
            <select
              name="industry"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            >
              <option value="">Select industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          <textarea
            name="message"
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
              Ready to bring your ideas to life? Fill out the form and our team
              will get back to you with insights, solutions, and a personalized
              approach tailored to your brand’s goals.
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
              <h3 className="text-4xl font-bold text-[#00B7CD] mb-2">98%</h3>
              <p className="font-semibold">Client Satisfaction</p>
              <p className="text-gray-600 text-sm">
                Trusted by clients for our quality work, clear communication,
                and consistent results.
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Stay connected</span>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-[#00B7CD]"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

// Social links data
const socialLinks = [
  { href: "#", label: "Facebook", icon: "🌐" },
  { href: "#", label: "Twitter", icon: "🐦" },
  { href: "#", label: "LinkedIn", icon: "💼" },
  { href: "#", label: "Instagram", icon: "📸" },
];
