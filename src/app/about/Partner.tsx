import Image from "next/image";


export default function Partner() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-cyan-50 px-6 md:px-12 py-20 overflow-hidden">
      {/* Top Left Blur */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-200/40 rounded-full blur-3xl" />

      {/* Bottom Right Blur */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300/40 rounded-full blur-3xl" />

      <div className="relative z-10 grid md:grid-cols-3 items-center gap-10 max-w-7xl w-full">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/partnerleft.svg"
            alt="Creative partner collaboration"
            width={400}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:text-center space-y-6">
          <span className="uppercase tracking-widest text-sm font-semibold text-cyan-600">
            Start a Collaboration
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Partner with us for <br /> bigger impact.
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Join our journey as a trusted client or creative partner and grow
            with a shared vision, purpose, and lasting impact.
          </p>
          <button className="px-6 py-3 bg-cyan-500 text-white rounded-full shadow-md hover:bg-cyan-600 transition">
            Get A Free Consultation
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900">23+</h3>
              <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-500 text-sm">Projects Completed</p>
            </div>
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900">357K+</h3>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/partnerright.svg"
            alt="Teamwork and success"
            width={400}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
