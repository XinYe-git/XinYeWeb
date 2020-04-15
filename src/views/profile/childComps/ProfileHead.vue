<template>
  <div class="profile-head">
    <div class="logo">
      <img class="left" src="~assets/img/profile/back.png" @click="back">
      <img class="right" src="~assets/img/profile/right.png">
    </div>
    <div class="user">
      <img class="left" src="~assets/img/profile/user.png">
      <ul class="left">
        <li>用户123</li>
        <li>湖南常德|职业</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileHead",
    methods:{
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.profile-head{
  position: relative;
  top: -57px;
  height: 230px;
  width: 640px;
  background: url("~assets/img/profile/background.png")640px 230px;
}
  .logo img:first-child{
    width: 15px;
    height: 27px;
    margin-left: 35px;
    margin-top: 8px;
  }
.logo img:nth-child(2){
  width: 48px;
  height: 39px;
}
  .user{
    padding-top: 76px;
    padding-left: 35px;
  }
.user img{
  width: 67px;
  height: 67px;
}

.user ul{
  margin-left: 16px;
  margin-top: 24px;
}
.user ul li{
  text-align: center;
  height: 26px;
  letter-spacing: 4px;
}
.user ul li:first-child{
  font-size: 11px;
  font-weight: 700;
}
.user ul li:nth-child(2){
  font-size: 8px;
}

</style>