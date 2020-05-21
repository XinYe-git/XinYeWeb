<template>
<div class="allhomebar">
  <div class="xinyebar">
    <div class="xinyebar-img left"><img src="~assets/img/home/xinye.png"></div>
    <xinye-bar-item  path="/home">首页</xinye-bar-item>
    <xinye-bar-item  path="/appreciate">案例欣赏</xinye-bar-item>
    <xinye-bar-item  path="/contact">联系我们</xinye-bar-item>
  <div v-if="!havinglogin">
    <div class="xinyebar-user right" @click="userClick"><img src="~assets/img/home/user.png"></div>
  </div>
    <div v-else>
      <div class="xinyebar-user right" @click="userClick"><img :src='`http://jamkang.club/${profiledata}`'></div>
    </div>
  </div>
  <ul class="xinyeclick right" v-show="usershow">
    <li @click="loginc">登录</li>
    <li @click="registerc">注册</li>
  </ul>
</div>
</template>

<script>
  import {Profiledatachecked} from 'network/xinyebar'
  import XinyeBarItem from "./xinyeBarItem";
  export default {
    name: "xinyeBar",
    components: {XinyeBarItem},
    data(){
      return {
        usershow:false,
        colorchange:0,
        havinglogin:false,
        profiledata:''
      }
    },

    methods:{
      userClick(){
        if(this.havinglogin===false){
          return this.usershow=!this.usershow
        }
        else {
          this.$router.push('/profile')
        }

      },
      loginc(){
        this.usershow=!this.usershow
        this.$router.push('/login')
      }
      ,registerc(){
        this.usershow=!this.usershow
        this.$router.push('/register')
    }
    },
    created(){
      Profiledatachecked().then(res=>{
        if(res.head===undefined){
          this.havinglogin=false
        }
        else {
          this.profiledata=res.head
          this.havinglogin=true
        }

      })
    }
  }
</script>

<style scoped>
.allhomebar{
  position: relative;
}

.xinyebar{
  height: 57px;
  background: #010101;
  text-align: center;
  color: #fff;
  font-size: 18px;
  line-height: 57px;
}

.xinyebar-img{
  width: 94px;
  height: 57px;
  padding-top: 4px;
}
.xinyebar-img img{
  width: 44px;
  height: 43px;
}

.xinyebar-user{
  width: 114px;
  height: 57px;
}

.xinyebar-user img{
  width: 42px;
  height: 42px;
  margin-top: 7px;
}

.xinyeclick{
  position: absolute;
  right: 35px;
  z-index: 5;
}

.xinyeclick li:first-child{
  border-bottom: 1px solid #fdde76;

}

.xinyeclick li{
  width: 53px;
  height: 23px;
  background: #fff;
  line-height: 23px;
  text-align: center;
  color: #4c8b1e;
  font-size: 14px;
}
  .red{
    color: #9c7032;
  }

</style>