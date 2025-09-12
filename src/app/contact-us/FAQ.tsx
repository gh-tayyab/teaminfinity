import React from 'react'

const FAQ = () => {
  return (
    <section
          id="faq"
          aria-labelledby="faq-heading"
          className="relative py-20 bg-gradient-to-b from-transparent to-white rounded-2xl"
        >
          {/* Add the two blur layers for this FAQ section (top-right & bottom-left) */}
          <div className="absolute -top-12 right-0 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>
          <div className="absolute -bottom-12 -left-100 w-96 h-96 bg-[#00B7CD] rounded-full blur-3xl opacity-20 z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm uppercase text-[#00B7CD] tracking-wider mb-2">
              ✱ Common Questions
            </p>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Simple answers to your social media questions.
            </h2>

            {/* Accordion list - semantic for SEO & accessibility */}
            <dl className="space-y-4 text-left">
              {[
                "What services does Buzzz offer for brands?",
                "Which platforms do you manage?",
                "Do you offer paid ads and boosting?",
                "What's the minimum contract period?",
                "Do you provide performance reports?",
                "How do I get started with Buzzz?",
              ].map((q, idx) => (
                <div
                  key={q}
                  className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm flex items-start justify-between"
                >
                  <details className="w-full" aria-expanded="false">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-2 px-2 select-none">
                      <span className="text-gray-800">{q}</span>
                      <span
                        aria-hidden
                        className="text-2xl font-bold text-[#00B7CD]"
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-3 text-gray-600">
                      <p>
                        {/* Placeholder answer - change to real content as needed */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quaerat, saepe? We provide tailored social media
                        strategies, content creation, community management, and
                        paid advertising to help brands grow.
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </dl>
          </div>
        </section>
  )
}

export default FAQ