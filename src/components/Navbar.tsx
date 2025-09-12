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
        <Link href="/">
          <Image src="/logo/logo.png" alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-cyan-600 font-normal">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-600 font-normal">
            About Us
          </Link>

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
                <Link href="#" className="block hover:text-cyan-600">
                  Web Design
                </Link>
                <Link href="#" className="block hover:text-cyan-600">
                  Development
                </Link>
                <Link href="#" className="block hover:text-cyan-600">
                  Marketing
                </Link>
              </div>
            )}
          </div>

          <Link href="/team" className="hover:text-cyan-600 font-normal">
            Team
          </Link>
          <Link href="/contact-us" className="hover:text-cyan-600 font-normal">
            Contact Us
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="hidden md:inline-block px-4 py-2 bg-transparent border-2 border-black hover:bg-cyan-500 text-black font-normal rounded-sm transition"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-3">
          <Link href="/" className="block hover:text-cyan-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-cyan-600">
            About
          </Link>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 hover:text-cyan-600"
            aria-expanded={dropdownOpen}
          >
            Services
          </button>

          {/* Optionally show mobile sub-items if dropdownOpen */}
          {dropdownOpen && (
            <div className="pl-4 space-y-1">
              <Link href="#" className="block hover:text-cyan-600">
                Web Design
              </Link>
              <Link href="#" className="block hover:text-cyan-600">
                Development
              </Link>
              <Link href="#" className="block hover:text-cyan-600">
                Marketing
              </Link>
            </div>
          )}

          <Link href="/team" className="block hover:text-cyan-600">
            Team
          </Link>
          <Link href="/contact-us" className="block hover:text-cyan-600">
            Contact Us
          </Link>
          <Link
            href="#"
            className="block mt-2 px-4 py-2 bg-cyan-500 text-white rounded-full text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
