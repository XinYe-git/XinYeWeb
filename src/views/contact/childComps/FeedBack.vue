<template>
  <div class="feedback">
    <h2>问题反馈</h2>
    <h4>FEEDBACK</h4>
    <label class="phone"><input placeholder="电话:" v-model="phone" style="color:#a5a6a8"/></label>
    <div class="citySelect">
      <input @click="selectCity" placeholder="城市:" v-model="city">
      <div class="cityCite">
        <ul v-show="cityShow">
          <li @click="getCity(item,index)" v-for="(item,index) in everyCity" >{{item.cn_name}}</li>
        </ul>
      </div>
    </div>
    <label class="content" v-model="content"><textarea></textarea></label>
   <button @click="admitContact">提交</button>
  </div>
</template>

<script>
  import {getCity,getProblom} from 'network/contact'
  export default {
    name: "FeedBack",
    data(){
      return{
        everyCity:[],
        cityShow:false,
        city:'',
        phone:'',
        content:''
      }
    },
    created(){
      getCity().then(res=>{
        this.everyCity=res
      })
    },
    methods:{
      selectCity(){
        this.cityShow=!this.cityShow
      },
      getCity(item,index){
        this.city=item.cn_name
        this.cityShow=!this.cityShow
      },
      async admitContact(){
        let data=await getProblom(this.phone,this.content)
        if(data==='问题反馈添加成功'){
          alert('问题反馈添加成功')
        }
      }
    },
  }
</script>

<style scoped>
  .feedback{
    margin-top: 46px;
    margin-left: 77px;
    position: relative;
  }
  h2{
    font-size: 12px;
    margin-bottom: 29px;
    font-weight: bold;
  }
  h4{
    position: absolute;
    top: 5px;
    left: 2px;
    font-size: 15px;
    color: #4de75b;
    opacity: .8;
  }
  input{
    background: #e8ecef;
    border: none;
    color:#a5a6a8
  }
  .phone input,.citySelect input{
    width: 126px;
    height: 30px;
    font-size: 10px;
    text-indent: 6px;
  }
  .citySelect{
    float: right;
    margin-right: 66px;
    position: relative;
  }
  .content textarea{
    background: #e8ecef;
    margin-top: 31px;
    width: 496px;
    height: 176px;
    border: none;
  }
  button{
    width: 92px;
    height: 30px;
    position: absolute;
    bottom: -52px;
    left: 2px;
    background: #2da6f3;
    border: none;
    color: #fff;
    font-size: 10px;
  }
  .cityCite{
    position: absolute;
  }
  ul{
    height: 90px;
    overflow-y: auto;
    margin-top: 5px;
  }
  li{
    width: 126px;
    height: 30px;
    text-align: center;
    color: black;
    line-height: 30px;
    background: #e8ecef;
    font-size: 10px;
    border-bottom: 1px solid #ee9;
  }
</style>