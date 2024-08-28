import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-gray": "#EBEBEB",
        "my-purple": "#6F2268",
        "my-black": "#242424",
      },
      screens: {
        sm: "375px", // default is 640px
        tablet: "768px",
        md: "1024px", // default is 768px
        lg: "1280px", // default is 1024px
        xl: "1440px",
        "2xl": "1920px",
      },
      maxWidth: {
        main: "1440px",
        landing: "100%",
        "md-landing": "960px",
        "lg-landing": "1200px",
        "2xl-landing": "1520px",
      },
      boxShadow: {
        button: "0px -2.4px 0px 0px rgba(61, 61, 61,0.04) inset",
      },
      fontSize: {
        base: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
