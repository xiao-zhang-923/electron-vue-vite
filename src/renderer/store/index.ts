import { createStore } from "vuex";
const lang = (navigator.language || "en").toLocaleLowerCase();
const language =
  localStorage.getItem("EASE-PASS_language") || lang.split("-")[0] || "zh";
export default createStore({
  state: {
    lang: language,
  },
  getters: {},
  mutations: {
    setLang(state: any, val: string) {
      localStorage.setItem("EASE-PASS_language", val);
      state.lang = val;
    },
  },
  actions: {},
  modules: {},
});
