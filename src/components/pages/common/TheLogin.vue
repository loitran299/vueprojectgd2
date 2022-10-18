<template>
  <div id="loginID" class="login-container">
        <div class="form-login">
            <div class="login-top"><div class="main-logo">MISA Promotion Process</div></div>
            <div class="login-center">
                <input type="text" placeholder="Tên đăng nhập..." class="in-username" v-model="username">
                <input type="password" placeholder="Mật khẩu..." class="in-password" v-model="password">
                <button class="btn-txt btn-blue" @click="getJwtToken">Đăng nhập</button>
            </div>
            <div class="login-bottom"></div>
        </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
import Cookie from "@/stores/Cookie"
import Axios from "axios"
export default {
    name: "loginID",
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async getJwtToken() {
            var user = {
                Username: this.username,
                Password: this.password
            }
            var url = "https://localhost:44342/api/v1/Token";
            await Axios.post(url, user).then((response)=>{
                var decoded = jwt_decode(response.data);
                Cookie.setCookie("Token",response.data, 1);
                Cookie.setCookie("EmployeeID",decoded.EmployeeID, 1);
                Cookie.setCookie("EmployeeName",decoded.EmployeeName, 1);
                Cookie.setCookie("PositionName",decoded.PositionName, 1);
                Cookie.setCookie("Role",decoded.role, 1);
                if(decoded.role == "Employee"){
                    this.$router.push("employees");
                }else{
                    this.$router.push("manager");
                }
            }).catch((error)=> {
                alert("Đăng nhập không thành công");
                console.log(error);
            });
        },
    },
}
</script>

<style>
@import url('@/assets/css/common/login.css');
</style>