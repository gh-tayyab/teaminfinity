// components/BackToTop.tsx
"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // scroll listener
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      aria-live="polite"
      role="complementary"
      className="fixed bottom-6 right-6 z-50"
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition"
          aria-label="Back to Top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </aside>
  );
}
