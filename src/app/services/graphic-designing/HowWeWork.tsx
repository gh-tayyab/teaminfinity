import React from 'react'

const HowWeWork = () => {
  return (
    <main className="bg-white text-slate-800">
        <section className="py-20 bg-white" aria-labelledby="design-process">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h2
              id="design-process"
              className="text-3xl md:text-4xl font-bold"
            >
              Our Design Process
            </h2>
            <p className="mt-4 text-slate-600">
              A creative workflow built for clarity and quality.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              "Understanding Requirements",
              "Concept & Research",
              "Design Execution",
              "Review & Delivery",
            ].map((step, index) => (
              <div key={step}>
                <span className="text-4xl font-bold text-cyan-600">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowWeWork