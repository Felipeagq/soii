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
        // Paleta de marca SOII extraída del brochure
        amber: {
          DEFAULT: "#F2A81D",
          50: "#FEF7E7",
          100: "#FCEBC2",
          200: "#F9D888",
          300: "#F6C64E",
          400: "#F4B62C",
          500: "#F2A81D",
          600: "#D98F0E",
          700: "#B4740C",
          800: "#8F5C0F",
          900: "#754C11",
        },
        navy: {
          DEFAULT: "#23273B",
          50: "#F4F5F7",
          100: "#E3E5EB",
          200: "#C3C7D3",
          300: "#9BA1B4",
          400: "#6D7590",
          500: "#4B5470",
          600: "#363E58",
          700: "#2B3149",
          800: "#23273B",
          900: "#171A28",
          950: "#0F1119",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "amber-gradient": "linear-gradient(135deg, #F58220 0%, #F2A81D 55%, #F6C64E 100%)",
        "navy-gradient": "linear-gradient(135deg, #2B3149 0%, #23273B 45%, #0F1119 100%)",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(15, 17, 25, 0.18)",
        "card-hover": "0 24px 60px -18px rgba(15, 17, 25, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
