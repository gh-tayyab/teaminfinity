import { Metadata } from "next";
import PoliciesClient from "./PoliciesClient";

export const metadata: Metadata = {
  title: "Policies | Team Infinity",
  description:
    "Review Team Infinity’s Privacy Policy, Terms of Service, Refund Policy, and Cookie Policy. Learn how we protect your data, your rights, and our service guidelines.",
};

export default function PoliciesPage() {
  return (
    <section
      id="policies"
      aria-labelledby="policies-heading"
      className="relative min-h-screen bg-gradient-to-b from-white to-cyan-50 pt-32 pb-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-40 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />
      <div className="absolute top-40 -right-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1
            id="policies-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Our Policies
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transparency and trust are at the core of Team Infinity. Please
            review our policies below to understand how we operate, protect your
            data, and maintain ethical business practices.
          </p>
        </header>

        {/* Client Component for Animated Policies */}
        <PoliciesClient />
      </div>
    </section>
  );
}
