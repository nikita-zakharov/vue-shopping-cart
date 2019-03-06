<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    methods: {
      deleteFromCart (item, itemIndex) {
        let itemInfo = {
          item,
          itemIndex
        }
        this.$store.dispatch('deleteGood', itemInfo)
      }
    },
    computed: {
      ...mapState({
        cartItems: state => state.cart.items,
        totalPrice: state => state.cart.totalPrice
      })
    }
  }
</script>

<template>
  <div class="cart">
    <div class="container">
      <h2>В корзине</h2>
      <div class="cart-products">
        <div v-for="(item, itemIndex) in cartItems"
             :key="itemIndex"
             v-if="cartItems.length"
             class="cart-products__item">
          <img class="cart-products__item-image" :src="item.product.imgPath">
          <div class="cart-products__item-title">{{ item.product.title }}</div>
          <div class="cart-products__item-amount">Количество: {{ item.productAmount }}</div>
          <button class="cart-products__item-delete" @click="deleteFromCart(item, itemIndex)">Удалить</button>
        </div>

      </div>
      <div class="total-price">
        Общая стоймость
        <span> $ {{ totalPrice }} </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cart {
    padding-top: 30px;
    padding-bottom: 100px;
  }

  .cart-products__item {
    padding: 20px 0;
  }

  .cart-products__item-image {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  .cart-products__item:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }

  .total-price {
    float: right;
  }

  .total-price span {
    font-size: 24px;
  }
</style>
