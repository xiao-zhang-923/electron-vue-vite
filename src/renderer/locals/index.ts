import { createI18n } from "vue-i18n";
import enLocale from "./en";
import zhLocale from "./zh";
import jaLocale from "./ja";

const messages = {
  zh: {
    ...zhLocale,
  },
  en: {
    ...enLocale,
  },
  ja: {
    ...jaLocale,
  },
};
const lang = (navigator.language || "en").toLocaleLowerCase();
const language = localStorage.getItem("EASE-PASS_language") || lang.split("-")[0] || "zh";

const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: language,
  messages: messages,
  warnHtmlMessage: false,
});

export default i18n;
