"use server";

import { cookies } from "next/headers";
import { Locale, defaultLocale } from "./config";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE_B";

export async function getUserLocale(): Promise<Locale> {
  return (cookies().get(COOKIE_NAME)?.value as Locale) || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
