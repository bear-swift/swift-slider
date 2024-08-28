"use client";

import { Locale } from "@/util/config";
import { setUserLocale } from "@/util/locale";
import { createSlice } from "@reduxjs/toolkit";

interface EnvProps {
  dir: "rtl" | "ltr";
  lang: Locale;
}

const initialState: EnvProps = {
  dir: "ltr",
  lang: "en",
};

const envSlice = createSlice({
  name: "env",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      const lang: Locale = action.payload as Locale;
      state.dir = lang === "ar" ? "rtl" : "ltr";
      state.lang = lang;

      setUserLocale(lang);
    },
  },
});
export const { changeLanguage } = envSlice.actions;
export default envSlice.reducer;
