import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-gray": "#B3B3B3",
        "my-orange": "#F4961D",
        "my-blue": "#365CA7",
      },
      fontFamily: {
        "cathy-melody": "var(--font-catchy-Melody)",
      },
      fontSize: {
        base: "14px",
      },
      screens:{
        md: "1024px", // default is 768px
        lg: "1280px", // default is 1024px
        xl: "1440px",
        "2xl": "1920px",
      }
    },
  },
  plugins: [],
};
export default config;
