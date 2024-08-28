"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ReactNode, useEffect } from "react";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { getUserLocale } from "@/util/locale";
import { changeLanguage } from "@/store/env/env.slice";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import AOS from "aos";

const ibm_plex_en = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

const ibm_plex_ar = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

const HTMLContent = ({ children }: { children: ReactNode }) => {
  const { lang, dir } = useAppSelector((state) => state.env);
  const dispatch = useAppDispatch();
  const fontNames =
    lang === "en" ? ibm_plex_en.className : ibm_plex_ar.className;
  const fontstyle = lang === "en" ? ibm_plex_en.style : ibm_plex_ar.style;

  const DefaultMUITheme = createTheme({
    typography: {
      fontSize: 14,
      ...fontstyle,
    },
    direction: dir,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const LoadLanguage = async () => {
      const locale = await getUserLocale();
      dispatch(changeLanguage(locale));
    };
    LoadLanguage();
  }, []);

  return (
    <html lang={lang} dir={dir}>
      <body className={`${fontNames} text-my-black`}>
        <MUIThemeProvider theme={DefaultMUITheme}>
          <div className="mx-auto">{children}</div>
        </MUIThemeProvider>
      </body>
    </html>
  );
};

export default HTMLContent;
