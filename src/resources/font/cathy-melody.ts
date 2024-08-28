import localFont from "next/font/local";

const FontCatchyMelody = localFont({
  variable: "--font-catchy-Melody",
  src: [
    {
      path: "./fonts/Catchy Melody.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Catchy Melody.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Catchy Melody.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Catchy Melody.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Catchy Melody.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default FontCatchyMelody;
