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
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#D8DC30",
        blue: {
          DEFAULT: "#133040",
          light: "#E3F4FC",
          dark: "#0E2431",
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
