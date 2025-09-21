import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | Team Infinity",
  description:
    "Get support for Team Infinity’s web development, SEO, and digital marketing services. Contact us via email, phone, or live chat.",
};

export default function SupportPage() {
  return (
    <section className="relative min-h-screen bg-[#F2FBFD] pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-40 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />
      <div className="absolute top-40 -right-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Need Help? We’re Here for You
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get assistance from Team Infinity’s support team anytime. Reach out
            via email, phone, or chat.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <Mail className="text-[#00B7CD] mb-3" size={32} />
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-3">
              Reach out anytime via email.
            </p>
            <Link
              href="mailto:info@teaminfinity.uk"
              className="text-[#00B7CD] font-medium hover:underline"
            >
              info@teaminfinity.uk
            </Link>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <Phone className="text-[#00B7CD] mb-3" size={32} />
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-3">
              Talk directly with our support team.
            </p>
            <p className="text-[#00B7CD] font-medium">+44 327 286 388</p>
          </div>

          {/* Live Chat */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <MessageCircle className="text-[#00B7CD] mb-3" size={32} />
            <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-3">
              Get instant help from our team.
            </p>
            <Link href={"/contact-us"} className="text-[#00B7CD] font-medium hover:underline">
              Start Chat
            </Link>
          </div>

          {/* FAQs */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <FileText className="text-[#00B7CD] mb-3" size={32} />
            <h3 className="font-semibold text-lg mb-2">FAQs</h3>
            <p className="text-gray-600 text-sm mb-3">
              Find answers to common questions.
            </p>
            <Link href="/faqs" className="text-[#00B7CD] font-medium hover:underline">
              View FAQs
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Didn’t find what you’re looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is ready to assist you. Contact us today!
          </p>
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-[#009FB2] hover:bg-[#00B7CD] transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
