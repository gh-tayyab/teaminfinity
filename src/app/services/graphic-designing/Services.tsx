import { main } from 'framer-motion/client'
import React from 'react'

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
        <section className="py-20 bg-slate-50" aria-labelledby="design-services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h1
              id="design-services"
              className="text-3xl md:text-4xl font-bold"
            >
              Graphic Designing Services
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We design visuals that communicate, inspire, and elevate your brand.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Brand Identity Design",
                desc: "Logos, colors, and brand visuals that define your identity.",
              },
              {
                title: "Social Media Graphics",
                desc: "Eye-catching posts, stories, and ad creatives.",
              },
              {
                title: "Marketing & Print Design",
                desc: "Flyers, banners, brochures, and promotional designs.",
              },
              {
                title: "UI & Web Graphics",
                desc: "Clean and modern visuals for websites and apps.",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
