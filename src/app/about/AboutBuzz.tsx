import Image from "next/image";

export default function AboutBuzzz() {
  return (
    <section
      id="about-buzzz"
      aria-labelledby="about-heading"
      className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-gradient-to-b from-white to-cyan-50 overflow-hidden"
    >
      {/* Decorative Blur Layer */}
      <div
        aria-hidden="true"
        className="absolute top-[-100px] left-[-150px] w-[350px] h-[350px] bg-cyan-200/40 rounded-full blur-3xl"
      />

      {/* Left Content - Image with floating card */}
      <div className="relative z-10 md:w-1/2 flex justify-center">
        <div className="relative">
          <Image
            src="/images/about.svg"
            alt="Creative team collaborating on ideas"
            width={400}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
            priority
          />

          {/* Floating Experience Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4 text-center">
            <h3 className="text-3xl font-bold text-gray-900">23+</h3>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative z-10 mt-10 md:mt-0 md:w-1/2 space-y-6">
        <span className="uppercase text-sm font-semibold text-cyan-600 tracking-wider">
          About Buzzz
        </span>
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
        >
          Where creativity meets social performance.
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-lg">
          Buzzz is a digital agency built on bold ideas and performance metrics.
          We blend creativity with strategy to create social campaigns that
          drive measurable business results.
        </p>

        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8">
          {/* Video Preview */}
          <div className="relative w-full md:w-[350px] overflow-hidden">
            <Image
              src="/images/aboutbuzz.svg"
              alt="Buzzz agency video presentation preview"
              width={300}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Specialization Progress Bars */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#27272B] text-lg">
              Our Specialization
            </h3>

            {/* Content Creation */}
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>Content Creation</span>
                <span>98%</span>
              </div>
              <div
                className="w-full h-2 bg-gray-200 rounded-full"
                role="progressbar"
                aria-valuenow={98}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="w-[98%] h-2 bg-cyan-500 rounded-full" />
              </div>
            </div>

            {/* Campaign Strategy */}
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>Campaign Strategy</span>
                <span>92%</span>
              </div>
              <div
                className="w-full h-2 bg-gray-200 rounded-full"
                role="progressbar"
                aria-valuenow={92}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="w-[92%] h-2 bg-cyan-500 rounded-full" />
              </div>
            </div>

            {/* Platform Management */}
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>Platform Management</span>
                <span>95%</span>
              </div>
              <div
                className="w-full h-2 bg-gray-200 rounded-full"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="w-[95%] h-2 bg-cyan-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
