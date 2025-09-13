import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-cyan-50 text-center px-6 overflow-hidden">
      <div className="max-w-md relative z-10">
        <h1 className="text-7xl font-bold text-cyan-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-white font-medium rounded-full shadow hover:bg-cyan-600 transition"
        >
          Back to Home
        </Link>
      </div>

      {/* Decorative Blur Layers */}
      <div className="absolute top-0 left-0 w-[220px] h-[220px] bg-cyan-200/40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[180px] h-[220px] bg-cyan-200/40 rounded-full blur-3xl z-0" />
    </section>
  );
}
