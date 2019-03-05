<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState({
        cartItems: state => state.cart.items,
        totalPrice: state => state.cart.totalPrice
      }),
      ...mapGetters([
        'getTotalPrice'
      ])
    }
  }
</script>

<template>
  <div class="container">
    <h2>В корзине</h2>
    <div v-for="(item, itemIndex) in cartItems"
         :key="itemIndex"
         v-if="cartItems.length">
      {{ item.title }}
    </div>
    <div class="total-price">
      Общая стоиомость
      <span> $ {{ totalPrice }} </span>
    </div>
  </div>
</template>

<style scoped>

  .total-price {
    float: right;
  }

  .total-price span {
    font-size: 24px;
  }
</style>
