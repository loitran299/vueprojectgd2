<template>
  <div class="container" id="managerPage">
    <Header></Header>
    <TheMain></TheMain>
  </div>
</template>

<script>
import Header from '@/components/pages/common/TheHeader.vue'
import TheMain from '@/components/pages/manager/ManagerContent.vue';
export default {
    name: 'managerPage',
    components: {
    Header,
    TheMain,
    }
}
</script>

<style>
  @import url('@/assets/css/app.css');
</style>