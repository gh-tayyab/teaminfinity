export default function Loading() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-cyan-50">
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-gray-600 font-medium">
          Loading, please wait...
        </p>
      </div>
    </section>
  );
}
