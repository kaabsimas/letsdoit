import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

const {worker} = require('./mocks/browser')

worker.start()

Vue.config.productionTip = false

store.subscribe((mutation, state) => {
  console.log("Atualizando estado", JSON.stringify(state))
  sessionStorage.setItem('state', JSON.stringify(state))
})

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) },
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}).$mount('#app')
