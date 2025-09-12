'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ContactForm = () => {
      const [accepted, setAccepted] = useState(false);

  return (
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
  )
}

export default ContactForm
