import type { Metadata } from "next";
import { MainLayout } from "@/layout";
import { Mulish, FontCatchyMelody } from "@/resources/font";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact Theme
import 'primereact/resources/primereact.min.css';         // PrimeReact core CSS
import 'primeicons/primeicons.css';                       // PrimeIcons CSS
import 'react-resizable/css/styles.css'; // Import CSS for basic styles

export const metadata: Metadata = {
  title: "Code Fun",
  description: "Managed by Myron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${Mulish.variable} ${Mulish.className} ${FontCatchyMelody.variable} ${FontCatchyMelody.className} bg-[#F9F9F9]`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
