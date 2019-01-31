import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      activeMenuPath: 'topics/introduction',
      technology: 'bash',
      lang: 'en',
      origin: 'content-delivery',
      sections: {},
      menu: [],
      flattened: []
    },
    getters: {
      originLanguagePath: state => {
        return `${state.origin}/${state.lang}/`
      }
    },
    mutations: {
      SET_MENU(state, menu) {
        state.menu = menu
        let flattened = []
        menu.forEach((category) => {
          category.items.forEach(item => {
            flattened.push(item)
            if(typeof item.children !== 'undefined') {
              item.children.forEach((child) => {
                flattened.push(child)
              })
            }
          })
        })
        state.flattened = flattened
      },
      SET_SECTIONS(state, sections) {
        state.sections = sections
      },
      SET_LANG(state, lang) {
        state.lang = lang
      },
      SET_ORIGIN(state, origin) {
        state.origin = origin
      },
      SET_TECHNOLOGY(state, technology) {
        state.technology = technology
        if (process.client) {
          window.localStorage.technology = technology
        }
      },
      SET_ACTIVE_MENU_PATH(state, activeMenuPath) {
        state.activeMenuPath = activeMenuPath
      }
    }
  })
}
  
export default createStore