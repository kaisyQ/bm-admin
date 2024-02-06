<template>

    <header class="header">

      <nav-component />

    </header>

</template>


<script setup lang="ts">
  import NavComponent from './Nav/NavContainer.vue'
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    padding: 20px;
  }
</style>