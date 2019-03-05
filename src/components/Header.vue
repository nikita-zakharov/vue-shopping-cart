<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: mapState({
      cartCount: state => state.cart.items.length
    })
  }
</script>

<template>
  <header class="g-header">
    <div class="g-header__wrap container">
      <h2>Shopping cart</h2>
      <nav class="g-header__nav">
        <li class="g-header__nav-li">
          <router-link to="/">Home</router-link>
        </li>
        <li class="g-header__nav-li">Link 2</li>
        <div class="g-header__nav-cart">
          <router-link to="/cart">Cart ({{ cartCount }})</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .g-header {
    color: #282828;
    background: #eee;
    padding: 10px 100px;
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
    padding: 20px 30px;
    list-style: none;
    font-size: 18px;
  }
</style>