import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Cart from './components/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/cart',
    component: Cart,
    name: 'cart'
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
