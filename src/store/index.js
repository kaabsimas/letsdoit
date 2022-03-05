import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    list: []
  },
  getters: {
  },
  mutations: {
    initialiseStore(state) {
			if(sessionStorage.getItem('state')) {
				this.replaceState(
					Object.assign(state, JSON.parse(sessionStorage.getItem('state')))
				);
			}
		},
    setAuthentication(state, status) {
      state.authenticated = status
    },
    addListItem(state, item) {
      state.list.push(item)
    },
    updateList(state, list) {
      state.list = list
    }
  },
  actions: {
  },
  modules: {
  }
})
