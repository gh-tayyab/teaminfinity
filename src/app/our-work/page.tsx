import { Metadata } from "next";
import WorkShowcase from "./WorkShowcase";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Team Infinity’s creative and technical work — web development, branding, video editing, and digital marketing projects that drive real results.",
};


export default function OurWorkPage() {
  return (
    <section className="relative min-h-screen mt-10 bg-[#F2FBFD] py-24 px-6">
      {/* Background blur decoration */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-10 right-0 w-[70px] h-[400px] bg-cyan-500 rounded-full blur-3xl opacity-60"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute bottom-10 left-0 w-[70px] h-[400px] bg-cyan-400 rounded-full blur-3xl opacity-50"
      />

      {/* Heading */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Creative & Technical Work
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          We don’t just deliver services — we deliver results.  
          Explore some of our latest projects and success stories across design, development, and digital marketing.
        </p>
      </div>

      {/* Work Showcase Section */}
      <WorkShowcase />

      {/* CTA */}
      <div className="mt-16 text-center">
        <a
          href="/contact-us"
          className="inline-block bg-[#06859F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#056b80] transition-all duration-300"
        >
          Let’s Build Something Together
        </a>
      </div>
    </section>
  );
}
