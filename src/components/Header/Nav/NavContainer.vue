<template>
  <div class="nav-container">
    <n-tabs type="segment" animated  v-model:value="selectedTab" >
        <n-tab-pane name="reviews" tab="Reviews" />
      <n-tab-pane name="products" tab="Products">
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
  import {onMounted, ref, watch} from 'vue';
  import {useRouter} from "vue-router";
  const selectedTab = ref('');
  const router = useRouter();
  onMounted(() => {
    watch(selectedTab, (newValue) => {
      if (newValue === 'products') {
        router.push({name: 'products'});
      } else if (newValue  === "reviews") {
        router.push({ name: "reviews" })
      }
    })
  })


</script>

<style scoped lang="scss">
  .nav-container {
    margin: 0 auto;
    max-width: 800px;
  }
</style>