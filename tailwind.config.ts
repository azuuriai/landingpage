import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        graphite: "#111114",
        bone: "#f7f8f6",
        muted: "#9a9e98",
        line: "rgba(27, 28, 26, 0.12)",
        accent: "#347c76",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(52, 124, 118, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
