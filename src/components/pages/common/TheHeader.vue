<template>
  <div class="header" id="headID">
    <div class="header-left flex">
      <a href="" class="main-logo">MISA Promotion Process</a>
      <div class="h-col">
        <a class="a-header-tab voucher active">Mã giảm giá</a>
      </div>
    </div>

    <div class="header-right flex">
      <a href="" class="btn-icon">
        <div class="icon-diskdown"></div>
        <span>Hướng dẫn sử dụng</span>
      </a>
      <a class="h-avatar">
        <img src="@/assets/img/profile.jpg" alt="" />
      </a>
      <div class="h-username">
        <div class="text" @click="showLogout = !showLogout">
          <span>Trần Văn Lợi</span>
          <span>Nhân viên kinh doanh dịch vụ hóa đơn điện tử</span>
        </div>
        <div class="icon-down" @click="showLogout = !showLogout"></div>
      </div>
      <div class="item-logout" v-if="showLogout">
        <a href="" class="logout">Đăng xuất</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'headID',
    data() {
        return {
            showLogout: false
        }
    },
};
</script>

<style>
@import url('@/assets/css/pages/header.css');
</style>