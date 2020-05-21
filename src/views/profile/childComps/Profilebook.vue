<template>
  <div>
    <div class="bookhead">
      <span>订单</span>
      <span>状态</span>
      <span>价格</span>
    </div>
    <div>
      <div class="bookcontent" v-for="(item,index) in bookdata">
        <div class="bookcontentleft">{{item.content}}</div>
        <div class="bookcontentcenter">{{2===item.status?'完成':'未完成'}}</div>
        <div class="bookcontentright">￥{{item.money}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {workbook} from 'network/profile'
  export default {
    name: "Profilebook",
    data(){
      return{
        bookdata:''
      }
    },
    created(){
      workbook().then(res=>{
        this.bookdata=res
      })
    }
  }
</script>

<style scoped>
.bookhead{
  height: 35px;
  border-bottom: 2px solid #e7e7e1;
}
.bookhead span{
  width: 33.33%;
  text-align: center;
  font-size: 10px;
  display: block;
  float: left;
}
  .bookcontent{
    width: 537px;
    height: 39px;
    background: #bdfecd;
    margin: 0 auto;
    font-size: 10px;
    margin-bottom: 30px;
  }
  .bookcontent div{
    float: left;
    height: 39px;
    line-height: 39px;
  }
  .bookcontentleft{
    text-align: center;
    width: 170px;
    overflow: hidden;
  }
  .bookcontentcenter{
    width: 193px;
    text-align: center;
  }
.bookcontentright{
  width: 140px;
  text-align: end;
}
</style>