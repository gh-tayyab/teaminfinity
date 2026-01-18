import React from 'react'

const Services = () => {
  return (
    <main className="bg-white text-slate-800">
        <section className="py-20 bg-slate-50" aria-labelledby="video-services">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-14">
            <h1
              id="video-services"
              className="text-3xl md:text-4xl font-bold"
            >
              Professional Video Editing Services
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We turn raw footage into engaging, scroll-stopping videos.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Short-Form Videos",
                desc: "Reels, Shorts, and TikTok edits for maximum reach.",
              },
              {
                title: "YouTube Editing",
                desc: "Story-driven long-form videos with high retention.",
              },
              {
                title: "Ad & Promo Videos",
                desc: "High-converting ads for social and paid campaigns.",
              },
              {
                title: "Color Grading & Motion",
                desc: "Cinematic look with smooth transitions & effects.",
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
