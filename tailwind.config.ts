import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0693e3",
          "blue-dark": "#0570b0",
          "dark-gray": "#32373c",
          "dark-bg": "#0a0a1a",
          "dark-navy": "#1a1a2e",
          "light-bg": "#f8f9fa",
          text: "#1a1a1a",
          "text-secondary": "#666666",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
