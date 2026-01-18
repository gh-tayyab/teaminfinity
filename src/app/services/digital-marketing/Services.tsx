import { main } from "framer-motion/client";
import React from "react";

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
      <section className="py-20 bg-slate-50" aria-labelledby="services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h2 id="services" className="text-3xl md:text-4xl font-bold">
              Our Digital Marketing Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We help brands grow online through smart, data-driven marketing
              strategies.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "SEO Optimization",
                desc: "Improve rankings and organic traffic.",
              },
              {
                title: "Social Media Marketing",
                desc: "Build engagement and brand loyalty.",
              },
              {
                title: "Paid Advertising",
                desc: "Get instant leads with Google & Meta ads.",
              },
              {
                title: "Content & Branding",
                desc: "Create trust with powerful brand content.",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
