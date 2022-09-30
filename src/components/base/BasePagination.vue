<template>
  <div class="pagination" id="paginationID">
    <div class="paging-left">
      <div class="cb-change-page">
        <button><div class="icon-page-first"></div></button>
        <button><div class="icon-page-prev"></div></button>
      </div>
      <div class="cb-change-page">
        Trang
        <input class="page-input" type="number">
        Trên
        <span>1</span>
      </div>
      <div class="cb-change-page">
        <button><div class="icon-page-next"></div></button>
        <button><div class="icon-page-last"></div></button>
      </div>
      <button><div class="icon-page-refresh"></div></button>
    </div>
    <div class="paging-right">
      <input class="icon-down" type="number" readonly>
      <div>Tổng số: <span>12</span> bản ghi</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paginationID"
}
</script>

<style scoped>
@import url('@/assets/css/base/pagination.css');
</style>