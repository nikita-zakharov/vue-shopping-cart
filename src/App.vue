<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      'c-header':  Header
    },
    data() {
      return {

      }
    }
  }
</script>

<template>
  <div>
    <c-header/>
      <router-view/>
  </div>
</template>


<style>
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
</style>
