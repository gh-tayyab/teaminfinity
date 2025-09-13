"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-cyan-50 text-center px-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Something went wrong!
      </h2>
      <p className="text-gray-600 mt-2">
        An error occurred while processing your request.
      </p>
      <button
        onClick={reset}
        className="mt-6 px-6 py-3 bg-cyan-500 text-white rounded-full shadow hover:bg-cyan-600 transition"
      >
        Try Again
      </button>
    </section>
  );
}
