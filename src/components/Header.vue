<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: mapState({
      cartCount: state => state.cart.totalGoods
    })
  }
</script>

<template>
  <header class="g-header">
    <div class="g-header__wrap container">
      <h2>Shopping cart</h2>
      <nav class="g-header__nav">
        <li class="g-header__nav-li">
          <router-link active-class="my-active-class" to="/" exact>Home</router-link>
        </li>
        <div class="g-header__nav-cart">
          <router-link to="/cart"
                       active-class="my-active-class">
            <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M704 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm896 0q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm128-1088v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"/>
            </svg>
            <span class="cart-number">{{ cartCount }}</span>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  h2 {
    font-family: 'Roboto Light';
  }
  .g-header {
    color: var(--c-black);
    background: var(--c-gray);
    box-shadow: -1px 2px 11px 0px #c9c9c9;
  }
  .g-header__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
  }
  .g-header__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
  }
  .g-header__nav-li {
    padding: 0px 30px;
    list-style: none;
    font-size: 18px;
  }

  .g-header__nav-li a {
    color: var(--c-black);
    text-decoration: none;
  }

  .g-header__nav-cart a {
    text-decoration: none;
  }
  .cart-number {
    position: relative;
    text-decoration: none;
    top: -10px;
  }

  .my-active-class {
    border-bottom: 2px solid var(--c-blue);
  }
</style>
