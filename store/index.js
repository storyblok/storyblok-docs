import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      activeMenuPath: '',
      technology: 'bash'
    },
    mutations: {
      SET_TECHNOLOGY(state, technology) {
        if (process.client) {
          window.localStorage.technology = technology
        }
        state.technology = technology
      },
      SET_ACTIVE_MENU_PATH(state, activeMenuPath) {
        state.activeMenuPath = activeMenuPath
      }
    }
  })
}
  
export default createStore