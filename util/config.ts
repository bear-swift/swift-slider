export type Locale = (typeof locales)[number];

export const locales = ["en", "ar"] as const;
export const localTitles: {
  locale: Locale;
  title: string;
}[] = [
  { locale: "en", title: "English" },
  { locale: "ar", title: "العربيه" },
];

export const defaultLocale: Locale = "en";
