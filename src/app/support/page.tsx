// app/support/page.tsx
import { Metadata } from "next";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get support for Team Infinity’s web development, SEO, and digital marketing services. Contact us via email, phone, or live chat.",
};

export default function SupportPage() {
  return (
    <section
      id="support"
      aria-labelledby="support-heading"
      className="relative min-h-screen bg-[#F2FBFD] pt-32 pb-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-40 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />
      <div className="absolute top-40 -right-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Hero */}
        <header className="text-center mb-16">
          <h1
            id="support-heading"
            className="text-4xl font-bold text-gray-900"
          >
            Need Help? We’re Here for You
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get assistance from Team Infinity’s support team anytime. Reach out
            via email, phone, or chat.
          </p>
        </header>

        {/* Client-side animated support options + CTA */}
        <SupportClient />
      </div>
    </section>
  );
}
