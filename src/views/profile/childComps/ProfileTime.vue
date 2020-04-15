<template>
  <div class="profile-time">
    <p><span>0</span><span>0</span><i>:</i><span>0</span><span>0</span></p>
    <p>今日在线时长0时0分</p>
  </div>
</template>

<script>
  export default {
    name: "ProfileTime"
  }
</script>

<style scoped>
.profile-time{
  position: relative;
  top: -12px;
  text-align: center;
}
  span{
    display: inline-block;
    font-size: 40px;
    width: 60px;
    height: 76px;
    line-height: 76px;
    background: #f9ebb6;
    margin: 0 14px;
    font-weight: bold;
  }
  i{
    display: inline-block;
    font-style: normal;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
  }
  .profile-time p:nth-child(2){
    margin-top: 36px;
    font-size: 24px;
    font-weight: bold;
    color: #a8a59b;
    letter-spacing: 12px;
  }
</style>