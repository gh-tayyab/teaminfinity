import React from 'react'

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
        <section className="py-20 bg-slate-50" aria-labelledby="uiux-services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h1
              id="uiux-services"
              className="text-3xl md:text-4xl font-bold"
            >
              UI / UX Designing Services
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We design intuitive interfaces and seamless user experiences.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "UI Design",
                desc: "Modern, clean, and visually appealing interfaces.",
              },
              {
                title: "UX Research",
                desc: "User research and journey mapping for better usability.",
              },
              {
                title: "Web & App Design",
                desc: "Responsive designs for websites and mobile apps.",
              },
              {
                title: "Wireframes & Prototypes",
                desc: "Interactive prototypes for testing and validation.",
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