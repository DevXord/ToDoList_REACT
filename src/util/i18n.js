import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "../locales/en.json"
import poland from "../locales/pl.json"
import { registerLocale } from "react-datepicker";
import { pl  } from 'date-fns/locale/pl';
import { enGB  } from 'date-fns/locale/en-GB';

const language = localStorage.getItem('language');

const resources = {
  en: {
    translation: english
  },
  pl: {
    translation: poland
  }
};
 
registerLocale("en", enGB);
registerLocale("pl", pl);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language == null ? "en" : language, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
 