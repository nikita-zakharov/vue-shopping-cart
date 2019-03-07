<script>
  export default {
    props: {
      full: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>

<template>
  <button class="btn"
          :class="{'btn_full': full}">
    <slot/>
  </button>
</template>

<style scoped>

  .btn {
    width: 140px;
    border: none;
    background-color: var(--c-blue);
    padding: 15px 20px;
    color: white;
    cursor: pointer;
    outline: none;
    transition: .3s;
  }

  .btn:hover {
    background-color: var(--c-pink);
  }

  .btn_full {
    width: 100%;
  }

  .btn-red {
    background: red;
  }

</style>
