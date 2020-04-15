<template>

    <div class="register-header">
        <div class="back" @click="backClick"><</div>
        <div class="welcome">
            <h2>欢迎注册</h2>
            <p>已有账号?<a @click="login">登录</a></p>
        </div>
    </div>

</template>

<script>
  export default {
    name: "RegisterHead",
    methods:{
      backClick(){
        this.$router.back()
      },
      login(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .register-header{
    position: relative;
    top: -57px;
    height: 78px;
    border-bottom: 1px solid #f5cb3c;
    z-index: 10;
    background: #fff;
  }
  .welcome{
    float: left;
  }
  .back{
    width: 80px;
    height: 78px;
    float: left;
    text-align: center;
    line-height: 64px;
    font-size: 20px;
  }
  h2{
    /*float: left;*/
    width: 142px;
    height: 48px;
    line-height: 48px;
    font-size: 29px;
  }
  p{
    width: 144px;
    height: 28px;
    font-size: 15px;

  }
  a{
    margin-left: 18px;
    color: #5878f1;
  }
</style>