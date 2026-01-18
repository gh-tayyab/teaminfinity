import React from 'react'

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
        <section className="py-20 bg-slate-50" aria-labelledby="web-services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h1
              id="web-services"
              className="text-3xl md:text-4xl font-bold"
            >
              Web Development Services
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Building modern, fast, and scalable websites for your business.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Frontend Development",
                desc: "Responsive and interactive user interfaces.",
              },
              {
                title: "Backend Development",
                desc: "Secure and scalable server-side solutions.",
              },
              {
                title: "Full Stack Solutions",
                desc: "End-to-end web application development.",
              },
              {
                title: "Performance & Security",
                desc: "Optimized speed, security, and reliability.",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-sm">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
