<template>
  <div class="container">
    <Header></Header>
    <TheVoucher></TheVoucher>
  </div>
</template>

<script>
import Header from '@/components/pages/common/TheHeader.vue'
import TheVoucher from '@/components/pages/TheVoucher.vue';
export default {
  name: 'App',
  components: {
    Header,
    TheVoucher,
}
}
</script>

<style>
  @import url('@/assets/css/app.css');
</style>
