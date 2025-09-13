import { Phone, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Team Infinity for IT solutions, web development, and digital services tailored to your business needs.",
};

export default function ContactUs() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-cyan-50 pt-44 pb-20 overflow-hidden">
      {/* Background blur layers */}
      <div className="absolute top-52 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute top-52 -right-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          From strategy to execution, we help businesses grow through powerful
          marketing and innovative development solutions.
        </p>

        {/* Email input CTA */}
        <form
          className="flex flex-row items-center justify-center gap-3 mb-20 flex-wrap"
          aria-label="Email subscription form"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-[180px] sm:w-80 px-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B7CD]"
            aria-label="Enter your email"
            required
          />
          <button
            type="submit"
            className="px-4 py-3 sm:px-8 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-[#009FB2] hover:bg-[#00B7CD] transition whitespace-nowrap"
            aria-label="Submit email"
          >
            Get Started
          </button>
        </form>

        {/* Section Title */}
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

        {/* Contact Form + FAQ */}
        <ContactForm />
        <FAQ />
      </div>
    </section>
  );
}
