"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white to-cyan-50 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={"/logo/logo.png"} alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="hover:text-cyan-600 font-normal">
            Home
          </a>
          <a href="/about" className="hover:text-cyan-600 font-normal">
            About Us
          </a>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-cyan-600 font-normal"
            >
              Services <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 space-y-2 w-40">
                <a href="#" className="block hover:text-cyan-600">
                  Web Design
                </a>
                <a href="#" className="block hover:text-cyan-600">
                  Development
                </a>
                <a href="#" className="block hover:text-cyan-600">
                  Marketing
                </a>
              </div>
            )}
          </div>

          <a href="/team" className="hover:text-cyan-600 font-normal">
            Team
          </a>
          <a href="/contact-us" className="hover:text-cyan-600 font-normal">
            Contact Us
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:inline-block px-4 py-2 bg-transparent border-2 border-black hover:bg-cyan-500 text-black font-normal rounded-sm transition"
        >
          Get Started
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-3">
          <a href="/" className="block hover:text-cyan-600">
            Home
          </a>
          <a href="/about" className="block hover:text-cyan-600">
            About
          </a>
          <button className="flex items-center gap-1 hover:text-cyan-600">
            Services
          </button>
          <a href="#" className="block hover:text-cyan-600">
            Team
          </a>
          <a href="#" className="block hover:text-cyan-600">
            Contact Us
          </a>
          <a
            href="#"
            className="block mt-2 px-4 py-2 bg-cyan-500 text-white rounded-full text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
