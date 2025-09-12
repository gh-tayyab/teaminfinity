import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-[#1E1E22] text-white">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-gradient-to-r from-white to-gray-50 text-[#1E1E22] rounded-xl shadow-lg p-8 sm:p-10 relative top-10">
          <p className="flex items-center gap-2 text-sm font-medium mb-4 text-[#009FB2]">
            <span className="text-lg" aria-hidden="true">✱</span> SUBSCRIBE FOR MORE
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Ready to grow your business?
          </h2>
          <p className="text-gray-600 mb-6">Let&apos;s create something powerful together.</p>

          <form className="flex flex-col sm:flex-row items-center gap-3" aria-label="Subscribe to newsletter">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009FB2]"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#009FB2] text-white rounded-md font-medium hover:bg-[#008699] transition"
            >
              Book A Free Consultation
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-16 pb-10 grid grid-cols-1 md:grid-cols-5 gap-10 border-t border-gray-700 pt-12">
        {/* Left Logo + Tagline */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/logo/logo1.svg"
              alt="Team Infinity Logo"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-gray-300 text-sm max-w-xs">Driving Brand Growth with Social Media</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">Career <span className="ml-1 text-xs bg-[#009FB2] text-white px-2 py-0.5 rounded-full">Hiring!</span></Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:underline">Review</Link>
            </li>
            <li>
              <Link href="/partners" className="hover:underline">Partner</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/services/strategy" className="hover:underline">Strategy</Link></li>
            <li><Link href="/services/content" className="hover:underline">Content</Link></li>
            <li><Link href="/services/advertising" className="hover:underline">Advertising</Link></li>
            <li><Link href="/services/analytics" className="hover:underline">Analytics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Help Center</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            <li><Link href="/contact-us" className="hover:underline">Live Chat</Link></li>
            <li><Link href="/support" className="hover:underline">Support</Link></li>
            <li><Link href="/policies" className="hover:underline">Policies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Address:</h4>
          <p className="text-gray-400 text-sm">123 Business Road, London, UK</p>
          <h4 className="font-semibold mt-6 mb-2">Contact:</h4>
          <p className="text-gray-400 text-sm">info@teaminfinity.uk</p>
          <p className="text-gray-400 text-sm">+44 123 456 7890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-6 text-center flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-gray-500 text-sm">Copyright © {new Date().getFullYear()} Design By Team Infinity</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <Facebook className="w-5 h-5 text-[#009FB2]" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <Instagram className="w-5 h-5 text-[#009FB2]" />
          </a>
          <a href="#" aria-label="Youtube" className="hover:opacity-80">
            <Youtube className="w-5 h-5 text-[#009FB2]" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-80">
            <Twitter className="w-5 h-5 text-[#009FB2]" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
            <Linkedin className="w-5 h-5 text-[#009FB2]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
