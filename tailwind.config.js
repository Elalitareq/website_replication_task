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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "primary-derv": "#cf8c07",
        light: "var(--color-light)",
        whiter: "var(--color-whiter)",
        accent: "var(--color-accent)",
        blacker: "var(--color-blacker)",
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
