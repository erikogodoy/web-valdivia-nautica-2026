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
        naval: {
          950: "#020B14",
          900: "#071728",
          800: "#0F2942",
          700: "#1A3E60",
          600: "#2B5885",
        },
        cyanic: {
          500: "#00A896",
          400: "#02C39A",
          300: "#38EF7D",
        },
        copper: {
          500: "#D4A373",
          400: "#E0B785",
        },
        foam: "#F4F7F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
