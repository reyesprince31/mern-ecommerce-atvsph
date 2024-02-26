/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ["light", "dark", "luxury"],
  },
};
