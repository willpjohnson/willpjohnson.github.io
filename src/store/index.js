import { createStore } from 'vuex'

export default createStore({
  state: {
    onMobile: false,
  },
  getters: {
  },
  mutations: {
    updateOnMobile(state, val) {
      // Keep consistent with colors.scss
      state.onMobile = (val <= 450);
    },
  },
  actions: {
  },
  modules: {
  }
})
