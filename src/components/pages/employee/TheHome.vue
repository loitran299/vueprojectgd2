<template>
  <div class="container">
    <Header></Header>
    <TheVoucher></TheVoucher>
  </div>
</template>

<script>
import Header from '@/components/pages/common/TheHeader.vue'
import TheVoucher from '@/components/pages/employee/TheVoucher.vue';
export default {
    name: 'employeePage',
    components: {
    Header,
    TheVoucher,
    }
}
</script>

<style>
  @import url('@/assets/css/app.css');
</style>