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
        poster: {
          midnight: "#040D2D",
          dark: "#061545",
          blue: "#0D3692",
          cyan: "#00D2FF",
          cyanDeep: "#0077EE",
          gold: "#FFB800",
          goldHover: "#E6A600",
          sand: "#E5C396",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        syne: ["var(--font-archivo)", "var(--font-inter)", "system-ui", "sans-serif"],
        archivo: ["var(--font-archivo)", "var(--font-inter)", "system-ui", "sans-serif"],
        cabin: ["var(--font-cabin)", "sans-serif"],
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
