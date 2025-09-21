"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSubmitted(true);
      setEmail("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center justify-center gap-3 mb-20 flex-wrap"
      aria-label="Email subscription form"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading || submitted}
        className="flex-1 min-w-[180px] sm:w-80 px-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B7CD]"
      />
      <button
        type="submit"
        disabled={loading || submitted}
        className="px-4 py-3 sm:px-8 bg-[#36E1F8] text-black font-bold rounded-full border-b-4 border-[#009FB2] hover:bg-[#00B7CD] transition whitespace-nowrap"
      >
        {loading ? "Sending..." : submitted ? "Thanks!" : "Get Started"}
      </button>

      {error && <p className="w-full text-center text-red-600 mt-2">{error}</p>}
      {submitted && !error && (
        <p className="w-full text-center text-green-600 mt-2">
          ✅ Subscribed successfully!
        </p>
      )}
    </form>
  );
}
