import { Metadata } from "next";
import WorkShowcase from "./WorkShowcase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | Team Infinity - Creative & Tech Agency",
  description:
    "Explore Team Infinity’s portfolio — from web design and development to branding, digital marketing, and video production. See how we bring creativity and technology together to build impactful digital experiences.",
  keywords:
    "Team Infinity, web design portfolio, creative agency, digital marketing work, branding showcase, website development, video editing, UI/UX design, SEO results, Pakistan IT agency",
};

export default function OurWorkPage() {
  return (
    <main className="relative min-h-screen mt-10 bg-[#F2FBFD] py-24 px-6">
      {/* === Background Decorations === */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-10 right-0 w-[90px] h-[400px] bg-cyan-500 rounded-full blur-3xl opacity-60"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute bottom-10 left-0 w-[90px] h-[400px] bg-cyan-400 rounded-full blur-3xl opacity-50"
      />

      {/* === Header Section === */}
      <header className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our <span className="text-[#06859F]">Creative</span> &{" "}
          <span className="text-[#04B2D9]">Technical</span> Work
        </h1>
        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
          We turn bold ideas into powerful digital experiences. Explore our
          projects showcasing innovation in{" "}
          <strong>web development</strong>, <strong>branding</strong>,{" "}
          <strong>AI automation</strong>, and <strong>digital marketing</strong>.
        </p>
      </header>

      {/* === Work Showcase Section === */}
      <section aria-label="Team Infinity Work Showcase" className="relative z-10">
        <WorkShowcase />
      </section>

      {/* === CTA Section === */}
      <footer className="mt-20 text-center">
        <Link
          href="/contact"
          className="inline-block bg-[#06859F] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[#056b80] transition-all duration-300"
        >
          Let’s Build Something Amazing 🚀
        </Link>
      </footer>
    </main>
  );
}
