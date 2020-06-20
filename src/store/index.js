import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userData: {}
  },
  mutations: {
    setIsLogin (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    loginUser ({ commit }) {
      commit('setIsLogin', true)
    },
    logoutUser ({ commit }) {
      commit('setIsLogin', false)
    }
  },
  modules: {
  }
})
