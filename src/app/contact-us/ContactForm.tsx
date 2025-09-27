"use client";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactForm = () => {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!accepted) {
      alert("Please accept terms and privacy policy before submitting.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData?.message || "Failed to send message");
      }

      alert("✅ Message sent successfully!");
      form.reset();
      setAccepted(false);
    } catch (err) {
      console.error("Form Submit Error:", err);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      aria-labelledby="contact-form-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
        
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-4 space-y-6"
        >
          <h2 id="contact-form-heading" className="sr-only">
            Contact Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              aria-label="Full name"
              required
              aria-required="true"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email address"
              required
              aria-required="true"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              aria-label="Phone number"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            />
            <input
              type="url"
              name="link"
              placeholder="Optional link (portfolio, website, LinkedIn, etc.)"
              aria-label="Optional link"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            />

            <select
              name="service"
              aria-label="Select service"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            >
              <option value="">Select service</option>
              <option value="web-design">Web Development</option>
              <option value="design">Graphic Designing</option>
              <option value="marketing">Digital Marketing</option>
              <option value="ai">AI Automation</option>
              <option value="seo">Search Engine Optimization</option>
              <option value="shopify">Shopify Development</option>
              <option value="uiux">UI/UX Designing</option>
              <option value="video">Video Editing</option>
            </select>

            <select
              name="industry"
              aria-label="Select industry"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
            >
              <option value="">Select industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="ecommerce">E-commerce</option>
              <option value="real-estate">Real Estate</option>
              <option value="travel">Travel & Hospitality</option>
              <option value="automotive">Automotive</option>
              <option value="fashion">Fashion & Lifestyle</option>
              <option value="media">Media & Entertainment</option>
              <option value="logistics">Logistics & Supply Chain</option>
              <option value="food">Food & Beverages</option>
              <option value="sports">Sports & Fitness</option>
              <option value="non-profit">Non-Profit / NGOs</option>
              <option value="government">Government & Public Sector</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            aria-label="Your message"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B7CD] outline-none"
          ></textarea>

          {/* Checkbox */}
          <label htmlFor="accept-terms" className="flex items-center gap-2 text-sm text-gray-600">
            <input
              id="accept-terms"
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
        <article className="space-y-8">
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
            <figure className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/contact.svg"
                alt="Our creative team discussing a project"
                width={400}
                height={200}
                className="object-cover h-[240px] rounded-2xl"
              />
            </figure>
            <dl className="bg-white rounded-xl shadow-md p-6">
              <dt className="text-4xl font-bold text-[#00B7CD] mb-2">98%</dt>
              <dd className="font-semibold">Client Satisfaction</dd>
              <p className="text-gray-600 text-sm">
                Trusted by clients for our quality work, clear communication,
                and consistent results.
              </p>
            </dl>
          </div>

          {/* Social Links */}
          <nav
            aria-label="Social media"
            className="mt-8 py-6 text-center flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 sm:px-8"
          >
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
          </nav>
        </article>
      </div>
    </section>
  );
};

export default ContactForm;
