<template>
  <div>
    <div class="register-header">
      <div class="back" @click="backClick"><</div>
      <div class="welcome">
        <h2>登录</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginHead",
    methods:{
      backClick(){
        this.$router.back()
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
    height: 78px;
    line-height: 70px;
    font-size: 29px;
  }
</style>