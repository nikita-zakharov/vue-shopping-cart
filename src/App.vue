<script>
  import Header from './components/Header.vue'
  import Modal from './components/Modal.vue'

  export default {
    components: {
      'c-header': Header,
      'c-modal': Modal
    },
    data () {
      return {
        showModal: false
      }
    }
  }
</script>

<template>
  <div>
    <c-modal v-if="showModal" @close="showModal = false"/>
    <c-header/>
    <transition name="fade" appear>
      <router-view/>
    </transition>
  </div>
</template>


<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  :root {
    --c-black: #282828;
    --c-blue: #03a9f4;
    --c-pink: #ec407a;
    --c-gray: #eee;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
</style>
