<template>
  <div class="login">
    <el-form :model="loginForm" ref="loginForm" label-width="100px" :rules="loginRules">
        <el-form-item>
            <h2 class="title">登录</h2>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
            <el-button style="width:100%" type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import http from '../api';
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loginRules: {
                username: [
                    { required: true, message: '请输入活动名称'},
                ],
                password: [
                    {required: true, message: '请输入密码'}
                ]
            }
        }
    },
    methods: {
        onLogin() {
            this.$refs['loginForm'].validate(async (valid) => {
                if (valid) {
                    const {status, token} = await http.common.login(this.loginForm.username, this.loginForm.password);
                    if (status) {
                        localStorage.setItem('token', token);
                        const userinfo = await http.user.getUserinfo();
                        console.log(userinfo);
                        // this.$router.push('/main');
                    }
                }
            })
        }
    }

}
</script>

<style scope lang="scss">
.login{
    width: 500px;
    position: fixed;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
}
.title{
    width: 100%;
    text-align: center;
}

</style>