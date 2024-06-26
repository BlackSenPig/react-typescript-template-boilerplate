import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
      // process.env.NODE_ENV !== "prod"
      //   ? `./locales/{{lng}}/{{ns}}.json`
      //   : `${window.location.pathname}locales/{{lng}}/{{ns}}.json`,
    },
    fallbackLng: "en",
    //lng: "zh",
    interpolation: {
      escapeValue: false,
    },
  });
//i18n.changeLanguage();
i18n.on('languageChanged', (lng) => (document.documentElement.lang = lng))
export default i18n;
