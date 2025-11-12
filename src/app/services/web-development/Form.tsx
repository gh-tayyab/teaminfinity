"use client";

import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ fullName: "", email: "", phone: "", service: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-10 bg-[#F2FBFD] text-center"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#001144] mb-10">
        LET’S BUILT SOMETHING GREAT TODAY!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
        aria-label="Contact Form"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full sm:w-[300px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#001144] text-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full sm:w-[300px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#001144] text-gray-700"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full sm:w-[300px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#001144] text-gray-700"
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full sm:w-[300px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#001144] text-gray-700"
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="SEO">Search Engine Optimization</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Graphic Designing">Graphic Designing</option>
          <option value="UI/UX Designing">UI/UX Designing</option>
          <option value="Video Editing">Video Editing</option>
          <option value="AI Automation">AI Automation</option>
          <option value="Shopify Development">Shopify Development</option>
        </select>

        <button
          type="submit"
          className="w-full sm:w-[200px] bg-[#001144] text-white font-semibold px-4 py-3 rounded-md hover:bg-[#000d33] transition-all"
        >
          Submit
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-gray-600" role="status">
          {status}
        </p>
      )}
    </section>
  );
}
