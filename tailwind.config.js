/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        "primary": "#1A5CFF",
        "text-light": "#A0A6B1",
        "background": "#1E2023",
        "background-dark": "#18191C",
      },
    },
  },
  plugins: [],
}
