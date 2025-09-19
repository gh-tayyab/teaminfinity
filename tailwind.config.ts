/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-instrument-sans)", "sans-serif"], // ✅ Instrument Sans
        },
        colors: {
          page: "#F2FBFD", // ✅ reusable custom bg color
        },
      },
    },
    plugins: [],
  };
  