import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ja from './locales/ja.json';

i18n
  .use(initReactI18next)
  //.use(LanguageDetector)
  .init({
    resources: {
      en: en,
      ja: ja
    },
    lng: "en", // default language
    fallbackLng: "en", // use this language if the specified language translations are missing
    interpolation: {
      escapeValue: false // react is already safe from xss
    }
  });

export default i18n;
