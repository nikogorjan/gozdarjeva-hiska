import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  // load translation using http -> see /public/locales
  .use(HttpApi)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    supportedLngs: ['sl', 'hu', 'de'],
    fallbackLng: 'sl', // fallback to Slovenian if language is not available
    debug: true, // disable in production

    // where to load translation files from
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'navigator'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
