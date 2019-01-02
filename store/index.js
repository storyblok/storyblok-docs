import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      content: { },
      activeMenuPath: '',
      origin: process.env.defaultOrigin,
      language: process.env.defaultLanguage,
      codelang: 'bash'
    },
    mutations: {
      SET_CODELANG(state, codelang) {
        window.localStorage.codelang = codelang
        state.codelang = codelang
      },
      SET_ACTIVE_MENU_PATH(state, activeMenuPath) {
        state.activeMenuPath = activeMenuPath
      },
      SET_ORDERED(state, { language, ordered }) {
        if (typeof state.content[language] == 'undefined') {
          state.content[language] = {} 
        }
        state.content[language].ordered = ordered
      },
      SET_MENU(state, { language, menu }) {
        if (typeof state.content[language] == 'undefined') {
          state.content[language] = {} 
        }
        state.content[language].menu = menu
      },
      SET_LANGUAGE(state, { language }) {
        state.language = language
      },
      SET_ORIGIN(state, { origin }) {
        state.origin = origin
      }
    }
  })
}
  
export default createStore