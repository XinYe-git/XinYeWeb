<template>
  <div class="profile-date">
    <div>
      <p>签到</p>
      <div class="candel">
        <h2>2020年3月</h2>
        <ul class="weekend">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <h3>本月已签到9天，累计14小时34分</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileDate"
  }
</script>

<style scoped>
  .profile-date{
    text-align: center;
    margin-top: 20px;
  }
  .profile-date p{
    display: inline-block;
    width: 150px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    border-radius: 20px;
    font-size: 22px;
    background: #fae59b;
  }
  .candel{
    display: inline-block;
    width: 560px;
    height: 350px;
    border: 5px solid #e7ffe5;
    margin-top: 30px;
    background: #f7f5f7;
  }
  h2{
    font-size: 15px;
    letter-spacing: 5px;
    margin-top: 33px;
  }
  h3{
    margin-top: 25px;
    font-size: 13px;
    color: #808080;
  }
  .weekend{
    margin-top: 22px;
    overflow: hidden;
  }
  .weekend li{
    width: 78px;
    font-size: 12px;
    float: left;
  }
</style>