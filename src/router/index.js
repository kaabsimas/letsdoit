import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView'
import ListView from '../views/ListView'
import CreateView from '../views/CreateView'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/lista',
    name: 'lista',
    component: ListView,
    beforeEnter: (to, from, next) => {
      store.commit('initialiseStore');
      if(store.state.authenticated == false) {
        next(from)
      } else {
        next()
      }
    }
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
    beforeEnter: (to, from, next) => {
      store.commit('initialiseStore');
      if(store.state.authenticated == false) {
        next(from)
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
