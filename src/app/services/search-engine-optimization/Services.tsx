import React from 'react'

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
        <section className="py-20 bg-slate-50" aria-labelledby="seo-services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h1
              id="seo-services"
              className="text-3xl md:text-4xl font-bold"
            >
              Search Engine Optimization (SEO)
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Rank higher on Google and get consistent organic traffic.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "On-Page SEO",
                desc: "Optimize content, headings, and keywords for search engines.",
              },
              {
                title: "Technical SEO",
                desc: "Improve site speed, structure, and crawlability.",
              },
              {
                title: "Off-Page SEO",
                desc: "Build authority with high-quality backlinks.",
              },
              {
                title: "Local & Global SEO",
                desc: "Target the right audience in the right locations.",
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
