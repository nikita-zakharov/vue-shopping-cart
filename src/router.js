import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
import Button from './components/control/Button.vue'

Vue.component('c-button', Button)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
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
})

export default router
