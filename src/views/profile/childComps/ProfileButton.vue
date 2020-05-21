<template>
  <div class="profile-button">
    <dl @click="dateClick1">
      <dt><img src="~assets/img/profile/order.png"></dt>
      <dd :class="1===datecolor?'dcolor':''">签到</dd>
    </dl>
    <dl @click="dateClick2">
      <dt><img src="~assets/img/profile/book.png"></dt>
      <dd :class="2===datecolor?'dcolor':''">订单</dd>
    </dl>
    <dl @click="dateClick3">
      <dt><img class="store" src="~assets/img/profile/store.png"></dt>
      <dd :class="3===datecolor?'dcolor':''">收藏</dd>
    </dl>
    <dl @click="dateClick4">
      <dt><img src="~assets/img/profile/manage.png"></dt>
      <dd :class="4===datecolor?'dcolor':''">账号管理</dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: "ProfileButton",
    data(){
      return{
        datecolor:1
      }
    },
    methods:{
      dateClick1(){
        this.$emit('secondcontent',1)
        this.datecolor=1
      },
      dateClick2(){
        this.$emit('secondcontent',2)
        this.datecolor=2
      },
      dateClick3(){
        this.$emit('secondcontent',3)
        this.datecolor=3
      },
      dateClick4(){
        this.$emit('secondcontent',4)
        this.datecolor=4
      }
    }
  }
</script>

<style scoped>
  .dcolor{
    color: #8ad4b0;
  }
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