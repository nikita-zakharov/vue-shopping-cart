import cartStore from './cart'

const state = {
  items: [
    { title: 'Macbook Pro 2015', imgPath: '/img/macbook.jpg', description: 'Невероятно лёгкий и тонкий MacBook оснащается процессорами седьмого поколения и улучшенными SSD-накопителями', price: 412 },
    { title: 'Ноутбук ASUS X507UB-BQ256T, Stary Grey', imgPath: '/img/asus.jpg', description: 'ASUS X507UB (BTS Edition) Intel i5 7200U/4Gb/500Gb/No ODD/15.6" FHD Anti-Glare/NVIDIA GeForce MX110 2Gb GDDR5/Wi-Fi/Windows 10 Stary Grey', price: 541 },
    { title: 'title3', imgPath: '/img/macbook.jpg', description: 'desctiption3', price: 500 },
  ]
}

const getters = {

}

const mutations = {
  pushProductToCart(state, product) {
    cartStore.state.items.push(product)
  }
}

const actions = {
  pushProductToCart({commit}, payload) {
    commit('pushProductToCart', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}