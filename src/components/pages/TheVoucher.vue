<template>
  <div class="main">
        <div class="m-row">
            <label for="">Ngày yêu cầu</label>
            <DateRequest></DateRequest>
        </div>
        <div class="m-row">
            <label for="">Trạng thái</label>
            <DateRequest></DateRequest>
        </div>
  </div>
</template>

<script>
import DateRequest from '@/components/base/DateRequest.vue'
export default {
    name: 'voucherID',
    components: {
        DateRequest
    }
}
</script>

<style scoped>
@import url('@/assets/css/pages/Voucher/main.css');
</style>