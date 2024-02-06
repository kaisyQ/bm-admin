<template>
  <div class="nav-container">
    <n-tabs type="segment" animated  v-model:value="selectedTab" >
        <n-tab-pane name="Reviews" tab="Reviews" />
      <n-tab-pane name="Products" tab="Products">
      </n-tab-pane>
      <n-tab-pane name="Mails" tab="Mails">
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
      console.log('adasd')
      if (newValue === 'Products') {
        router.push({ name: 'ProductsPage' });
      } else if (newValue  === 'Mails') {
        router.push({ name: 'MailsPage' });
      } else if (newValue  === "Comments") {
        router.push({ name: "Comments" })
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