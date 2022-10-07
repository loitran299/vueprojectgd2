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
      <div class="h-username" v-click-outside="outSideLogout">
        <div class="text" @click="showLogout = !showLogout">
          <span>{{ user.EmployeeName }}</span>
          <span>{{user.PositionName}}</span>
        </div>
        <div class="icon-down" @click="showLogout = !showLogout"></div>
      </div>
      <a class="item-logout" v-if="showLogout" @click="logout">
        <div class="logout">Đăng xuất</div>
      </a>
    </div>
  </div>
</template>

<script>
import Cookie from "@/stores/cookie"
export default {
    name: 'headID',
    data() {
        return {
            showLogout: false
        }
    },
    computed: {
      user: {
        get() {
          return Cookie.getUser();
        },
        set(value) {
          return value;
        }
      }
    },
    methods: {
      outSideLogout() {
        this.showLogout = false;
      },
      logout() {
        Cookie.deleteCookie();
        this.$router.push("/");
      }
    },
};
</script>

<style>
@import url('@/assets/css/pages/header.css');
</style>