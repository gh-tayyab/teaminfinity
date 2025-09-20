"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  const openDropdown = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDropdownOpen(true);
  };

  const closeDropdownWithDelay = (delay = 180) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = window.setTimeout(() => {
      setDropdownOpen(false);
      closeTimeout.current = null;
    }, delay);
  };

  const toggleMobile = () => {
    setIsOpen((p) => !p);
    setDropdownOpen(false); // close desktop dropdown when opening mobile menu
  };

  return (
    <nav className="bg-[#F2FBFD] fixed -top-2 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <Link href="/" aria-label="Team Infinity Home" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Team Infinity logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-thin">
          <li>
            <Link href="/" className="hover:text-cyan-600 ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-cyan-600">
              About Us
            </Link>
          </li>

          {/* Dropdown with Main Services Page */}
          <li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={() => closeDropdownWithDelay(120)}
          >
            <button
              type="button"
              onFocus={openDropdown}
              onBlur={() => closeDropdownWithDelay(120)}
              className="flex items-center gap-1 hover:text-cyan-600 font-normal cursor-pointer select-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <Link href="/services" className="hover:text-cyan-600">
                Services
              </Link>
              <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <ul
                className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 space-y-2 w-56 z-50"
                onMouseEnter={openDropdown}
                onMouseLeave={() => closeDropdownWithDelay(120)}
              >
                <li><Link href="/web-development" className="block hover:text-cyan-600">Web Development</Link></li>
                <li><Link href="/graphic-designing" className="block hover:text-cyan-600">Graphic Designing</Link></li>
                <li><Link href="/digital-marketing" className="block hover:text-cyan-600">Digital Marketing</Link></li>
                <li><Link href="/ai-automation" className="block hover:text-cyan-600">AI Automation</Link></li>
                <li><Link href="/search-engine-optimization" className="block hover:text-cyan-600">Search Engine Optimization</Link></li>
                <li><Link href="/shopify-development" className="block hover:text-cyan-600">Shopify Development</Link></li>
                <li><Link href="/ui-ux-designing" className="block hover:text-cyan-600">UI/UX Designing</Link></li>
                <li><Link href="/video-editing" className="block hover:text-cyan-600">Video Editing</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/our-expertise" className="hover:text-cyan-600 ">
              Our Expertise
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-cyan-600">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="hidden md:inline-block px-4 py-2 bg-transparent border-2 border-black hover:bg-cyan-200 text-black font-normal rounded-sm transition"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMobile}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-3">
          <ul className="space-y-3">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">About</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Services</Link></li>

            {/* Sub Services */}
            <li>
              <button
                onClick={() => setDropdownOpen((p) => !p)}
                className="flex items-center gap-1 hover:text-cyan-600"
                aria-expanded={dropdownOpen}
              >
                <ChevronDown size={16} /> Sub Services
              </button>
              {dropdownOpen && (
                <ul className="pl-4 space-y-1">
                  <li><Link href="/web-development" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Web Development</Link></li>
                  <li><Link href="/graphic-designing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Graphic Designing</Link></li>
                  <li><Link href="/digital-marketing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Digital Marketing</Link></li>
                  <li><Link href="/ai-automation" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">AI Automation</Link></li>
                  <li><Link href="/search-engine-optimization" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Search Engine Optimization</Link></li>
                  <li><Link href="/shopify-development" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Shopify Development</Link></li>
                  <li><Link href="/ui-ux-designing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">UI/UX Designing</Link></li>
                  <li><Link href="/video-editing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Video Editing</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/our-expertise" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Our Expertise</Link></li>
            <li><Link href="/contact-us" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Contact Us</Link></li>
          </ul>

          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-2 bg-cyan-500 text-white rounded-full text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
