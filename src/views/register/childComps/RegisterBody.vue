<template>
  <div class="register-body">
    <form>
      <div class="username ">
        <label>用户名</label><input placeholder="请设置用户名">
      </div>
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
        <button  @click="registered">注册</button>
      </div>
      <div class="agree">
        <input type="checkbox">阅读并接受<a>《新叶用户协议》</a>及<a>《新叶隐私保护声明》</a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "RegisterBody",
    methods:{
      registered(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .register-body{
    text-align: center;
    width: 640px;
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
    font-size: 19px;
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
    font-size: 22px;
  }

  .register button{
    width: 506px;
    height: 60px;
    border-radius: 30px;
    border: none;
    margin-top: 52px;
    background: #abb2e8;
    color: #fff;
    font-size: 22px;
  }
  .agree input{
    width: 15px;
    height: 15px;
    margin-right: 8px;
    vertical-align:bottom
  }
  .agree{
    font-size: 13px;
  }
  a{
    color: #2491ed;
    text-decoration:underline;
  }
</style>