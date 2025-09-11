import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" bg-[#1E1E22] text-white">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-gradient-to-r from-white to-gray-50 text-[#1E1E22] rounded-xl shadow-lg p-8 sm:p-10 relative top-10">
          <p className="flex items-center gap-2 text-sm font-medium mb-4 text-[#009FB2]">
            <span className="text-lg">✱</span> SUBSCRIBE FOR MORE
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Ready to grow your business?
          </h2>
          <p className="text-gray-600 mb-6">
            Let&apos;s create something powerful together.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009FB2]"
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
          <p className="text-gray-300 text-sm max-w-xs">
            Driving Brand Growth with Social Media
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Career <span className="ml-1 text-xs bg-[#009FB2] text-white px-2 py-0.5 rounded-full">Hiring!</span></a></li>
            <li><a href="#">Review</a></li>
            <li><a href="#">Partner</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Strategy</a></li>
            <li><a href="#">Content</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Help Center</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Policies</a></li>
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
        <p className="text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} Design By Team Infinity
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#"><Facebook className="w-5 h-5 text-[#009FB2]" /></a>
          <a href="#"><Instagram className="w-5 h-5 text-[#009FB2]" /></a>
          <a href="#"><Youtube className="w-5 h-5 text-[#009FB2]" /></a>
          <a href="#"><Twitter className="w-5 h-5 text-[#009FB2]" /></a>
          <a href="#"><Linkedin className="w-5 h-5 text-[#009FB2]" /></a>
        </div>
      </div>
    </footer>
  )
}
