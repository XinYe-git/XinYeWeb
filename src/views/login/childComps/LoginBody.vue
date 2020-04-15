<template>
  <div class="register-body">
    <div class="xinyebar-user"><img src="~assets/img/login/user.png"></div>
    <form>
      <div class="useremail ">
        <label>邮箱号</label><input placeholder="请填写常用邮箱号">
      </div>
      <div class="userpassword ">
        <label>密码</label><input type="password" placeholder="6-14个字符组成，区分大小写">
      </div>
      <div class="check">
        <label>验证码</label><input placeholder="请输入验证码">
        <div class="checked">
          <button class="checkbutton">获取验证码</button>
        </div>
      </div>
      <div class="register">
        <button @click="login">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "LoginBody",
    methods:{
      login(){
        this.$router.push('/profile')
      }
    }
  }
</script>

<style scoped>
  .xinyebar-user{
    text-align: center;
    height: 100px;

  }
  .xinyebar-user img{
    width: 89px;
    height: 89px;
  }
  .register-body{
    text-align: center;
    width: 640px;
    position: relative;
    top: -40px;
  }
  label{
    letter-spacing:10px;
    font-weight: bold;
    font-size: 24px;
  }

  .userpassword label{
    letter-spacing:25px
  }

  input{
    width: 350px;
    height: 62px;
    margin-top: 36px;
    margin-left: 50px;
    border-color:#919492 ;
    border-radius: 10px;
    text-indent: 14px;
    font-size: 21px;
  }

  .check input{
    width: 204px;
    height: 60px;
  }
  .checked{
    width: 152px;
    height: 60px;
    display: inline-block;
  }

  .checkbutton{
    width: 122px;
    height: 60px;
    font-size: 21px;
  }

  .register button{
    width: 506px;
    height: 60px;
    border-radius: 30px;
    border: none;
    margin-top: 52px;
    background: #abb2e8;
    color: #fff;
  }
</style>