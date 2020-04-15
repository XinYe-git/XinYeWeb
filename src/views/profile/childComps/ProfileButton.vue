<template>
  <div class="profile-button">
    <dl>
      <dt><img src="~assets/img/profile/order.png"></dt>
      <dd>签到</dd>
    </dl>
    <dl>
      <dt><img src="~assets/img/profile/book.png"></dt>
      <dd>订单</dd>
    </dl>
    <dl>
      <dt><img class="store" src="~assets/img/profile/store.png"></dt>
      <dd>收藏</dd>
    </dl>
    <dl>
      <dt><img src="~assets/img/profile/manage.png"></dt>
      <dd>账号管理</dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: "ProfileButton"
  }
</script>

<style scoped>
  .profile-button{
    display: flex;
    position: relative;
    top: -52px;
    height: 50px;
  }
  dl{
    flex: 1;
    /*float: left;*/
    /*margin-left: 104px;*/
    font-size: 13px;
    text-align: center;
  }
  dt img{
    width: 29px;
    height: 29px;
  }
  .store{
    height: 29px;
  }

</style>