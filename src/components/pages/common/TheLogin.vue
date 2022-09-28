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
.login-container {
    background-image: url('@/assets/img/loginbackground.png');
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-login {
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    width: 450px;
    height: 270px;
    margin-bottom: 200px;
    border-radius: 10px;
}

.login-top {
    padding: 15px;
    font-size: 24px;
    font-family: Helvetica,Tahoma,Arial,sans-serif;
}

.login-center {
    height: 166px;
    background-color: #ECF0F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-center input {
    margin-bottom: 10px;
    width: 370px;
    height: 34px;
    outline: none;
    border: solid 1px #ddd;
    padding-left: 30px;
    background-color: #FFF !important;
    border-radius: 5px;

    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 4px;
}

.in-username {
    background-image: url('@/assets/img/user.png');
}
.in-password {
    background-image: url('@/assets/img/pass.png');
}

.login-center .btn-txt {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin-top: 5px;
    width: 250px;
    height: 30px;
    text-decoration: none;
}

.login-bottom {
    background-color: #0F84E4;
    width: 100%;
    flex: 1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>