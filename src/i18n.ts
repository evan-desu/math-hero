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
          "select_grade": "Select your elementary school grade:",
          "grade_one": "Grade 1",
          "grade_two": "Grade 2",
          "grade_three": "Grade 3",
          "grade_four": "Grade 4",
          "grade_five": "Grade 5",
          "grade_six": "Grade 6",
          "select_quiz": "Select a quiz:",
          "counting": "Counting",
          "addition": "Addition" ,
          "subtraction": "Subtraction" ,
        }
      },
      ja: {
        translation: {
          "select_grade": "学年の選択:",
          "grade_one": "一年生",
          "grade_two": "二年生",
          "grade_three": "三年生",
          "grade_four": "四年生",
          "grade_five": "五年生",
          "grade_six": "六年生",
          "select_quiz": "クイズの選択:",
          "counting": "数える",
          "addition": "足し算" ,
          "subtraction": "引き算" ,
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
