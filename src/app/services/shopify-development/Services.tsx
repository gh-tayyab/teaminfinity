import React from 'react'

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
        <section className="py-20 bg-slate-50" aria-labelledby="shopify-services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h1
              id="shopify-services"
              className="text-3xl md:text-4xl font-bold"
            >
              Shopify Development Services
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Build scalable, high-converting Shopify stores for your business.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Shopify Store",
                desc: "Tailored Shopify stores built for performance and branding.",
              },
              {
                title: "Theme Customization",
                desc: "Pixel-perfect UI customization for better conversions.",
              },
              {
                title: "App Integration",
                desc: "Integrate essential apps to extend store functionality.",
              },
              {
                title: "Store Optimization",
                desc: "Speed, SEO, and conversion rate optimization.",
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