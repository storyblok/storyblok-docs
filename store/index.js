import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      activeMenuPath: '',
      origin: 'content-delivery-api',
      language: 'en',
      codelang: 'bash'
    },
    mutations: {
      SET_CODELANG(state, codelang) {
        if (process.client) {
          window.localStorage.codelang = codelang
        }
        state.codelang = codelang
      },
      SET_ACTIVE_MENU_PATH(state, activeMenuPath) {
        state.activeMenuPath = activeMenuPath
      }
    }
  })
}
  
export default createStore