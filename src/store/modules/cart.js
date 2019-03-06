import productStore from './products'

const state = {
  items: [],
  totalPrice: 0,
  totalGoods: 0
}

const getters = {}

const mutations = {
  deleteGood (state, itemInfo) {
    state.items.splice(itemInfo.itemIndex, 1)
    state.totalGoods -= itemInfo.item.productAmount
    state.totalPrice -= itemInfo.item.product.price * itemInfo.item.productAmount
    console.log(itemInfo.item.product.id)
    productStore.state.items.find(item => {
      if (item.id === itemInfo.item.product.id) {
        item.isInCart = false
      }
    })
  }
}

const actions = {
  deleteGood ({commit}, payload) {
    commit('deleteGood', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
