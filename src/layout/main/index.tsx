'use client'

import { ReactNode } from "react";
import SideBar from "./sidebar";
import MainHeader from "./header";
import KitContextProvider from "@/providers/KitProvider";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import { Mulish } from "@/resources/font";

const MainLayout = ({ children }: { children: ReactNode }) => {

  const DefaultMUITheme = createTheme({
    typography: {
      fontSize: 14,
      ...Mulish.style,
    },
  });

  return (
    <MUIThemeProvider theme={DefaultMUITheme}>
      <KitContextProvider>
        <div className="fixed left-[20px] top-[8px] bg-white z-[3]">
          <SideBar />
        </div>

        <div className="px-[20px]">
          <div className="flex flex-col pl-[80px]">
            <div className="sticky top-0 py-[8px] z-[2] bg-[#F9F9F9]">
              <MainHeader />
            </div>
            <div className="overflow-hidden">{children}</div>
          </div>
        </div>
      </KitContextProvider>
    </MUIThemeProvider>
  );
};

export default MainLayout;
