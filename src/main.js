import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)

export const bus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
