import React from 'react'

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
<section className="py-20 bg-slate-50" aria-labelledby="ai-services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h1
              id="ai-services"
              className="text-3xl md:text-4xl font-bold"
            >
              AI Automation Services
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Automate repetitive tasks and scale faster with intelligent AI systems.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Chatbots & Agents",
                desc: "Automated customer support and lead handling 24/7.",
              },
              {
                title: "Workflow Automation",
                desc: "Automate internal processes and operations.",
              },
              {
                title: "CRM & Tool Integration",
                desc: "Connect AI with your existing business tools.",
              },
              {
                title: "Custom AI Solutions",
                desc: "Tailored AI systems designed for your business needs.",
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
