<template>
  <div id="loginID" class="login-container">
        <div class="form-login">
            <div class="login-top"><div class="main-logo">MISA Promotion Process</div></div>
            <div class="login-center">
                <input type="text" placeholder="Tên đăng nhập..." class="in-username">
                <input type="password" placeholder="Mật khẩu..." class="in-password">
                <router-link :to="'/employees'" class="btn-txt btn-blue">Đăng nhập</router-link>
            </div>
            <div class="login-bottom"></div>
        </div>
  </div>
</template>

<script>
export default {
    name: "loginID"
}
</script>

<style>
@import url('@/assets/css/common/login.css');
</style>