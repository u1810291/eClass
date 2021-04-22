import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './assets/locales/en/translations.json';
import translationRU from './assets/locales/ru/translations.json';
import translationUZ from './assets/locales/uz/translations.json';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ru', 'uz'];

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  uz: {
    translation: translationUZ
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    detection: {
      checkWhitelist: true
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
