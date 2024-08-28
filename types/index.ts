export interface LanguageItem {
  title: string;
  code: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
