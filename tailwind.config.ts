// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  // mode: "jit",
  // // These paths are just examples, customize them to match your project structure
  // purge: [
  //   "./public/**/*.html",
  //   "./app/**/*.{js,jsx,ts,tsx}",
  //   "./components/**/*.{js,jsx,ts,tsx}",
  // ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".transition-settings": {
          "@apply transition-all duration-500 ease-in-out": {},
        },
      };
      addUtilities(newUtilities);
    },
    require("tailwindcss-animate"),
  ],
};
export default config;
