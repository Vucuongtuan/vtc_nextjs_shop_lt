import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "768px" },
      // => @media (min-width: 320px) { ... }
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px) { ... }
      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px) { ... }
      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [require("daisyui")],
};
export default config;
