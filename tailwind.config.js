/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        variants: {
          animation: ["motion-safe"],
        },
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
      colors: {
        primary: "#fca600",
        secondary: "#00768F",
        light: "#e5f7fb",
        white: "#ffffff",
        accent: "#1b849b",
      },
      backgroundImage: {
        "gradient-hack-background":
          "linear-gradient(90deg,#e5f7fb 0%,#e5f7fb 50%,#00768F 50%,#00768F 100%)",
        "gradient-hack-background2":
          "linear-gradient(180deg,#e5f7fb 0%,#e5f7fb 50%,#00768F 50%,#00768F 100%)",
        "footer-background": 'url("assets/png/footer_background.png")',
        "card-background": 'url("assets/png/box-default.png")',
        "about-background": 'url("assets/png/about-bg.png")',
        "careers-background": 'url("assets/png/careers-header-background.png")',
        "services-background": 'url("assets/png/services_background.png")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
