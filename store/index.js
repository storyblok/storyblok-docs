import Vuex from 'vuex'
import ordered from '~/.stratum/ordered.json'
import menu from '~/.stratum/menu.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ordered,
      menu,
      activeMenuPath: '',
      codelang: 'bash'
    },
    mutations: {
      SET_CODELANG(state, codelang) {
        window.localStorage.codelang = codelang
        state.codelang = codelang
      },
      SET_ACTIVE_MENU_PATH(state, activeMenuPath) {
        state.activeMenuPath = activeMenuPath
      }
    },
    actions: {
      
    }
  })
}
  
export default createStore