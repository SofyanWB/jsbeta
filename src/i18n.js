import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationID from "./language/translationID.json";
import translationEN from "./language/translationEN.json";

const resources = {
  id: {
    translation: translationID
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "",
  });

export default i18n;