/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EBE8DF",

          secondary: "#ed3dea",

          accent: "#e06dcb",

          neutral: "#2A2537",

          "base-100": "#FBF9FB",

          info: "#79A9F1",

          success: "#32D2A7",

          warning: "#F6D346",

          error: "#E52424",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
