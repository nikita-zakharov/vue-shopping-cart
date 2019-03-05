<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    methods: {
      addProductToCart(data) {
        this.$store.dispatch('pushProductToCart', data)
      }
    },
    computed: mapState({
        products: state => state.products.items
      })

  }
</script>

<template>
  <div class="container">
    <h3>Products</h3>
      <div class="products">
        <div v-for="(product, productIndex) in products"
             :key="productIndex"
             class="products-card">
          <img class="products-card__image" :src="product.imgPath" alt="" width="268px">
          <div class="products-card__title">
            {{ product.title }}
          </div>
          <div class="products-card__description">
            {{ product.description }}
          </div>
          <div class="products-card__price">
            ${{ product.price }}
          </div>
          <button class="products-card__buy" @click="addProductToCart (product)">В корзину</button>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .products {
    display: flex;
  }
  .products-card {
    flex-basis: calc(100%*1/3);
    width: calc(100%*1/3);
    padding: 0px 30px;
  }
  .products-card__image {
    margin-bottom: 20px;
  }
  .products-card__title {
    font-size: 24px;
    margin-bottom: 10px;
    height: 60px;
  }
  .products-card__description {
    font-size: 14px;
    margin-bottom: 10px;
    height: 70px;
  }
  .products-card__price {
    margin-bottom: 10px;
    color: #66bb6a;
    font-size: 24px;
  }
  .products-card__buy {
    border: none;
    background-color: #03a9f4;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
  }
  .products-card__buy:hover {
    background-color: #0178ae;
  }
</style>