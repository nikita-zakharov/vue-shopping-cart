<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {

    }
  }
</script>

<template>
  <div class="container">
    <h2>В корзине</h2>
    <div v-for="item in cartItems"
         v-if="cartItems.length">
      {{ item.title }}
    </div>
    <div class="total-price">
      Общая стоиомость
      <span> $ {{ getTotalPrice }} </span>
    </div>
  </div>
</template>

<style scoped>

  .total-price {
    float: right;
  }

</style>