/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#0B101B",
        textSecondary: "#C9CED6",
        text: "#e5eaeb",
        background: "#070809",
        "primary-button": "RGBA(7, 8, 9, 0.7)",
        "hover-primary-button": "RGBA(9, 8, 9, 1)",
        "secondary-button": "#000000",
        accent: "#cad6d8",
      },
    },
  },
  plugins: [],
};
// --text: #e5eaeb;
// --background: #070809;
// --primary-button: #bccacd;
// --secondary-button: #000000;
// --accent: #cad6d8;
