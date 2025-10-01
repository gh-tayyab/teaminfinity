"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-[#F2FBFD] fixed inset-x-0 top-0 w-full overflow-x-clip z-50">
      {/* Right Decorative background */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -top-40 -right-[90px] w-[80px] h-[260px] bg-[#00B7CD] rounded-full blur-3xl z-[60]"
      />
      {/* IMPORTANT: header is a flex container so give it min-w-0 to allow children to shrink */}
      <header className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8 min-w-0 overflow-x-hidden">
      {/* Logo - prevent it from shrinking unexpectedly */}
        <Link href="/" aria-label="Team Infinity Home" className="flex items-center flex-shrink-0">
          <Image
            src="/logo/logo.svg"
            alt="Team Infinity logo"
            width={110}
            height={100}
            className="w-[110px] h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <section className="min-w-0">
          <ul className="hidden lg:flex items-center gap-8 font-thin min-w-0" role="menubar">
            <li role="none">
              <Link href="/" role="menuitem" className="hover:text-cyan-600 whitespace-nowrap">
                Home
              </Link>
            </li>
            <li role="none">
              <Link href="/about" role="menuitem" className="hover:text-cyan-600 whitespace-nowrap">
                About Us
              </Link>
            </li>

            {/* Dropdown with Main Services Page */}
            <li
              role="none"
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
                <Link href="/services" className="hover:text-cyan-600 whitespace-nowrap">
                  Services
                </Link>
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 space-y-2 w-56 z-50 min-w-0"
                    onMouseEnter={openDropdown}
                    onMouseLeave={() => closeDropdownWithDelay(120)}
                    role="menu"
                  >
                    {/* keep each item whitespace-nowrap so it doesn't force width */}
                    <li><Link href="/web-development" className="block hover:text-cyan-600 whitespace-nowrap">Web Development</Link></li>
                    <li><Link href="/graphic-designing" className="block hover:text-cyan-600 whitespace-nowrap">Graphic Designing</Link></li>
                    <li><Link href="/digital-marketing" className="block hover:text-cyan-600 whitespace-nowrap">Digital Marketing</Link></li>
                    <li><Link href="/ai-automation" className="block hover:text-cyan-600 whitespace-nowrap">AI Automation</Link></li>
                    <li><Link href="/search-engine-optimization" className="block hover:text-cyan-600 whitespace-nowrap">Search Engine Optimization</Link></li>
                    <li><Link href="/shopify-development" className="block hover:text-cyan-600 whitespace-nowrap">Shopify Development</Link></li>
                    <li><Link href="/ui-ux-designing" className="block hover:text-cyan-600 whitespace-nowrap">UI/UX Designing</Link></li>
                    <li><Link href="/video-editing" className="block hover:text-cyan-600 whitespace-nowrap">Video Editing</Link></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li role="none">
              <Link href="/our-expertise" role="menuitem" className="hover:text-cyan-600 whitespace-nowrap">
                Our Expertise
              </Link>
            </li>
            <li role="none">
              <Link href="/contact-us" role="menuitem" className="hover:text-cyan-600 whitespace-nowrap">
                Contact Us
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA Button */}
        <aside className="flex-shrink-0">
          <Link
            href="/contact-us"
            className="hidden lg:inline-block px-2 py-2 sm:py-3 sm:px-8 bg-transparent text-black font-bold rounded-2xl border-2 border-black hover:bg-cyan-300 transition whitespace-nowrap"
          >
            Get Started
          </Link>
        </aside>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={toggleMobile}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg px-6 pb-4 space-y-3"
          >
            <ul className="space-y-3" role="menu">
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
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-4 space-y-1 overflow-hidden"
                      role="menu"
                    >
                      <li><Link href="/web-development" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Web Development</Link></li>
                      <li><Link href="/graphic-designing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Graphic Designing</Link></li>
                      <li><Link href="/digital-marketing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Digital Marketing</Link></li>
                      <li><Link href="/ai-automation" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">AI Automation</Link></li>
                      <li><Link href="/search-engine-optimization" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Search Engine Optimization</Link></li>
                      <li><Link href="/shopify-development" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Shopify Development</Link></li>
                      <li><Link href="/ui-ux-designing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">UI/UX Designing</Link></li>
                      <li><Link href="/video-editing" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Video Editing</Link></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li><Link href="/our-expertise" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Our Expertise</Link></li>
              <li><Link href="/contact-us" onClick={() => setIsOpen(false)} className="block hover:text-cyan-600">Contact Us</Link></li>
            </ul>

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-2 text-center sm:py-3 sm:px-8 bg-transparent text-black font-bold rounded-full border-2 border-black hover:bg-cyan-300 transition whitespace-nowrap"
            >
              Get Started
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </nav>
  );
}
