import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  //.use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "greeting": "Hello",
          "grade_one": "Grade 1",
        }
      },
      ja: {
        translation: {
          "greeting": "こんにちは",
          "grade_one": "一年生",
        }
      }
    },
    lng: "en", // default language
    fallbackLng: "en", // use this language if the specified language translations are missing
    interpolation: {
      escapeValue: false // react is already safe from xss
    }
  });

export default i18n;
