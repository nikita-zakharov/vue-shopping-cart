<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    methods: {
      addProductToCart (product, productIndex) {
        let productAmount = Number(this.$refs.input_count[productIndex].value)
        let productInfo = {
          product,
          productAmount
        }
        if (productInfo.productAmount && !product.isInCart) {
          product.isInCart = true
          this.$store.dispatch('pushProductToCart', productInfo)
        }
        else {
          this.$router.push('/cart')
        }
      }
    },
    computed: {
      ...mapState({
        products: state => state.products.items
      })
    }
  }
</script>

<template>
  <div class="container">
    <h3>Products</h3>
    <div class="products">
      <div v-for="(product, productIndex) in products"
           :key="productIndex"
           :title="product.title"
           class="products-card">
        <img class="products-card__image"
             :src="product.imgPath" alt="">
        <div class="products-card__title">
          {{ product.title }}
        </div>
        <div class="products-card__description">
          {{ product.description }}
        </div>
        <div class="products-card__price">
          ${{ product.price }}
        </div>
        <label>
          <input class="product-card__count" type="number" value="1" ref="input_count">
          Количество
        </label>
        <button class="products-card__buy"
                :style="[product.isInCart ? { background: 'var(--c-pink)' } : 'var(--c-blue)' ]"
                @click="addProductToCart (product, productIndex)">
          {{ product.isInCart ? 'Оформить' : 'В корзину' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .products {
    display: flex;
    flex-wrap: wrap;
  }

  .products-card {
    flex-basis: calc(100% * 1 / 4);
    width: calc(100% * 1 / 4);
    padding: 0px 45px;
    margin-bottom: 50px;
  }

  .products-card__image {
    margin-bottom: 20px;
    width: 268px;
    height: 200px;
    object-fit: contain;
  }

  .products-card__title {
    font-size: 24px;
    margin-bottom: 10px;
    min-height: 130px;
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

  .product-card__count {
    width: 40px;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .products-card__buy {
    width: 100%;
    border: none;
    background-color: var(--c-blue);
    padding: 15px 20px;
    color: white;
    cursor: pointer;
    outline: none;
    transition: .3s;
  }

  .products-card__buy:hover {
    background-color: var(--c-pink);
  }
</style>
